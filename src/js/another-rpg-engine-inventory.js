window.Item = class Item {
/*
Due to the way the Inventory class works (see below), subclass inheritance is not recommended for specialized items. Property flags are used instead.

equippable -> object, must have a "slot" attribute; can also add data for restrictions or special categories (e.g., tag "heavy" then exclude mages from wearing heavy armor, or make an array of characters who can wear it)
*/
	constructor(name,stock = 0){
	if (typeof(name) == 'object') {
		Object.keys(name).forEach(prop => this[prop] = clone(name[prop]));
	} else {
		this._name = name;
		if (this.usable.includes("inmenu") && this.onUse === undefined) {
			console.log(`WARNING: item ${name} does not have an onUse`);
		}
		if (this.equippable && this.onEquip === undefined) {
			console.log(`WARNING: item ${name} does not have an onEquip`);
		}
		if (this.equippable && this.onRemove === undefined) {
			console.log(`WARNING: item ${name} does not have an onRemove`);
		}
		this.stock = stock;

		if (this.equippable !== undefined) {
			this.modID = {};
		}
	}

	}

	get id() {
		//	Returns the item's hardcoded name for referencing the database. Use this for accessing data & etc.

		return this._name;
	}

	get name() {
		//	Returns the name that is displayed to the player in user interfaces & etc.
		//	If the item has a fakeName and does not have the "known" property, displays fakeName; otherwise, displays database name.

		return (this.fakeName && !this.known) ? this.fakeName : this._name;
	}

	get itemData () {
		return (setup.itemData[this.id] || {});
	}

	get info() {
      var val = (this.itemData.info || "Info pending.");
			return (val instanceof Function) ? val(this) : val;
  }

  get desc() {
      var val = (this.itemData.desc || "Description pending.");
			return (val instanceof Function) ? val(this) : val;
  }

	get special() {
    return (this.itemData.special || 0);
  }

	get value() {
		let r = (this.itemData.value || 0);
		r = (r instanceof Function) ? r(this) : r;
		console.assert(Number.isInteger(r),`ERROR in value getter for ${this.name}: non-integer value`);

    return r;
  }

  get usable() {
    return (this.itemData.usable || []);
  }

	get onUse() {
    return (this.itemData.onUse || undefined);
  }

	get instantUse() {
		//	Boolean. If true, the item's onUse will be executed immediately, instead of requiring a target.
		//	This is useful for e.g. items that affect the whole party or call up another passage for more detailed interaction.

		return (this.itemData.instantUse || false);
	}

	get equippable() {
      return (this.itemData.equippable || undefined);
  }

	get onEquip() {
      return (this.itemData.onEquip || undefined);
  }

	get onRemove() {
      return (this.itemData.onRemove || undefined);
  }

	get action() {
		console.assert(this.usable.includes("inbattle"),`ERROR in action getter for ${this.name}: item is not usable inbattle`);
		var name = this.itemData.action || this.name;
		if (this.usable.includes("inbattle")) {
			var action = new ItemAction(name);
			return action;
		} else {
			return undefined;
		}
	}

	get sticky() {
		//	If true, item cannot be unequipped through normal means.

		return (this.itemData.sticky || false);
	}

	get fakeName() {
		//	If defined, the item will display this name on the inventory screen unless its "known" property is true.
		//	Useful for cursed items, or other items you wish to make ambiguous to the player.

		return (this.itemData.fakeName || false);
	}

	get stackSize() {
		//	Integer. Maximum number of copies that can exist in an inventory.
		//	Defaults to ITEM_MAX.

		return (this.itemData.stackSize || setup.ITEM_MAX);
	}

	checkRestriction (puppet) {
		//	DEPRECIATED as of v1.18. Use the Actor version instead.
		// Shorthand for checking equipment restrictions. Returns true if puppet's name is in the restricted listing or if the restricted listing is empty.
		return (this.equippable.restrictedTo instanceof Array) ?
			(this.equippable.restrictedTo.includes(puppet.name))
			: true;
	}

	toString () {
		var text = `<span class="item-name">${this.name}</span>`;
		text += `<span class="action-tags">x${this.stock}</span>`;
		if (this.equippable) {
			if (this.equippable.slot instanceof Set) {
				text += `<div class="item-equippable">`;
				var array = Array.from(this.equippable.slot).entries();
				for (let [s,slot] of array) {
					text += slot;
					if (s < this.equippable.slot.size-1) text += " + ";
				}
				text += `</div>`;
			} else {
				text += `<div class="item-equippable">${this.equippable.slot}</div>`;
			}
			if (this.restrictedTo instanceof Array && this.restrictedTo.length > 0) {
				text += `<div class="item-equippable">Restriction:`
				for (let [n,name] of this.restrictedTo) {
					text += ` ${name}`;
					if (n < this.restrictedTo.length-1) text += ",";
				}
				text += `</div>`;
			}
		}
		text += `<div id="display-content">`;
		text += `<div class="action-info">${this.info}</div>`;
		if (this.desc !== null) text += `<div class="action-desc">${this.desc}</div>`;
		text += `</div>`;
		return text;
	}

	clone () {
		// Return a new instance containing our current data.
		return new Item(this);
	}

	toJSON () {
		// Return a code string that will create a new instance
		// containing our current data.
		const data = {};
		Object.keys(this).forEach(pn => data[pn] = clone(this[pn]));
		return JSON.reviveWrapper('new Item($ReviveData$)', data);
	}
};

window.Filler = class Filler {
	constructor(name) {
		this.id = name;
	}

	toString () {
		return "&mdash;&mdash;";
	}

	clone () {
		// Return a new instance containing our current data.
		return new Filler(this.id);
	}

	toJSON () {
		// Return a code string that will create a new instance
		// containing our current data.
		let data = this.id;
		return JSON.reviveWrapper('new Filler($ReviveData$)', data);
	}
};

setup.STACK_SIZE = 5;

window.Inventory = class Inventory {
	constructor(ItemArray,limit){
		console.assert(Number.isInteger(limit) && limit > 0,`ERROR in Inventory constructor: no limit provided`);
		this.sizeLimit = limit;
		this.inventory = [];
		for (var item of ItemArray) {
			if (typeof(item) == "string") {
				this.inventory.push(new Item(item));
			} else if (item instanceof Item) {
				this.inventory.push(item);
			}
		}
	}

	clone() {
    return new Inventory(clone(this.inventory), this.sizeLimit);
	}

	toJSON() {
    // Return a code string that will create a new instance
    // containing our current data.
    return JSON.reviveWrapper(
        'new Inventory($ReviveData$, ' + this.sizeLimit + ')',
        clone(this.inventory)
    );
	}

	findItem (name) {
		// This will only find THE FIRST INSTANCE of an item with the given name.
		return this.inventory.find(function (x) { return x && x.name === name; });
	}

	addItem (name,num) {
		var amt = num;
		console.assert(typeof(name) == "string",`ERROR in addItem: non-string name passed`);

		if (!Number.isInteger(amt)){
			amt = 1;
		}

		if (this.inventory.length >= this.sizeLimit) {
			// if inventory is full, don't add item
			// decide what message you want to return here
			// for now, return remaining amount of items (so you know how many were left over)
			return amt;
		}

		var existingItem = this.findItem(name);

		if (existingItem instanceof Item && existingItem.stock < setup.STACK_SIZE) {
			//	If a stack of the item-to-be-added already exists AND the stack is not full,
			//	we want to modify the existing stack
			if (existingItem.stock + amt > setup.STACK_SIZE) {
				//	If the amount of items we're adding will exceed the stack size,
				//	max out the current item's stock, reduce amt by the difference,
				//	and call this function again (creating a new stack)
				amt -= setup.STACK_SIZE - existingItem.stock;
				existingItem.stock = setup.STACK_SIZE;
				this.addItem(name,amt);	//	RECURSIVE CALL, USE CAUTION
				return true;
			} else {
				existingItem.stock += amt;
				return true;
			}
		} else if (amt > 0) {
			//	Otherwise if amt is greater than 0, create a new stack
			if (amt > setup.STACK_SIZE) {
				//	If the number of new items will exceed the stack size,
				//	add a new stack at the stack size, reduce amt by the stack size,
				//	and call this function again (creating a new stack)
				this.inventory.push(new Item(name,setup.STACK_SIZE));
				amt -= setup.STACK_SIZE;
				this.addItem(name,amt);	//	RECURSIVE CALL, USE CAUTION
				return true;
			} else {
				this.inventory.push(new Item(name,amt));
				return true;
			}
		} else {
			//	Either we've run out of amt during a recursive call, or something weird happened; in any case, end the function silently.
			return amt;
		}
	}

	decItem (name,amt) {
		//	Decreases the stock of the first instance of named item by amt.
		//	THIS WILL NOT ROLL OVER IF amt IS LARGER THAN STACK SIZE
		var existingItem = this.findItem(name);
		if (existingItem instanceof Item){
			if (amt === undefined || !Number.isInteger(amt)) {
				amt = 1;
			}
			existingItem.stock -= amt;
			if (existingItem.stock <= 0){
				this.inventory.delete(existingItem);
			}
			return;
		} else {
			return "ERROR in decItem: item name not found in inventory\n";
		}
	}
};

window.roomItems = function roomItems (room,area) {
	if (room === undefined || typeof(tags) != 'string') {
		room = variables().currentRoom;
	}
	if (area === undefined || typeof(area) != 'string') {
		area = variables().currentArea;
	}
	if (variables().C[area][room] === undefined) {
		console.log("Items for "+area+" "+room+" undefined");
		return [];
	} else {
		return variables().C[area][room];
	}
};
