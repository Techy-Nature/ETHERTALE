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
		this.maxstock = stock;

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
			console.assert(Number.isInteger(r),`ERROR in value getter for ${this.name}: non-integer value`);

      return (this.itemData.value || 0);
  }

  get usable() {
      return (this.itemData.usable || []);
  }

	get onUse() {
      return (this.itemData.onUse || undefined);
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

	checkRestriction (puppet) {
		//	DEPRECIATED as of v1.18. Use the Actor version instead.
		// Shorthand for checking equipment restrictions. Returns true if puppet's name is in the restricted listing or if the restricted listing is empty.
		return (this.equippable.restrictedTo.length == 0 || this.equippable.restrictedTo.includes(puppet.name));
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

setup.STACK_SIZE = 5;

window.Inventory = class Inventory extends Array {
	constructor(ItemArray){
		super(0);
		for (var item of ItemArray) {
			if (typeof(item) == "string") {
				this.push(new Item(item));
			} else if (item instanceof Item) {
				this.push(item);
			}
		}
	}

	clone () {
		// Return a new instance containing our current data.
		let data = new Inventory([]);
		Object.keys(this).forEach(pn => data[pn] = clone(this[pn]));
		return data;
	}

	toJSON() {
		// Return a code string that will create a new instance
		// containing our current data.
		let data = new Inventory([]);
		Object.keys(this).forEach(pn => data[pn] = clone(this[pn]));
		return JSON.reviveWrapper('$ReviveData$', data);
	}
		
	findItem (name) {
		// This will only find THE FIRST INSTANCE of an item with the given name.
		return this.find(function (x) { return x && x.name === name; });
	}

	addItem (name,num) {
		var amt = num;
		console.assert(typeof(name) == "string",`ERROR in addItem: non-string name passed`);
		
		if (this.length >= this.sizeLimit) {
			// if inventory is full, don't add item
			// decide what message you want to return here
			// for now, return remaining amount of items (so you know how many were left over)
			return amt;
		}
		
		if (amt === undefined || !Number.isInteger(amt)){
			amt = 1;
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
				this.push(new Item(name,setup.STACK_SIZE));
				amt -= setup.STACK_SIZE;
				this.addItem(name,amt);	//	RECURSIVE CALL, USE CAUTION
				return true;
			} else {
				this.push(new Item(name,amt));
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
				this.delete(existingItem);
			}
			return;
		} else {
			return "ERROR in decItem: item name not found in inventory\n";
		}
	}
};
