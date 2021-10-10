const customMods = function () {

const ActorProto = Object.getPrototypeOf(new Actor(""));

ActorProto.equip = function (item) {
	console.assert(typeof(item.equippable) == "object","ERROR in equip: Item has no equippable property");
	if (item.equippable.slot instanceof Set) {
		var slotList = item.equippable.slot;
		for (let slot of slotList) {
			console.assert(this.equipment.has(slot),"ERROR in equip: Equipment type not recognized");
		}
		for (let [s,slot] of Array.from(slotList).entries()) {
			var pos = this.equipment.get(slot);
			for (let i = 0; i < pos.length; i++) {
				this.unequip(slot,i);
				pos[i] = (s > 0 || i > 0) ? new Filler(item.id) : item;
			}
		}
	} else {
		console.assert(this.equipment.has(item.equippable.slot),"ERROR in equip: Equipment type not recognized");
		var slot = this.equipment.get(item.equippable.slot);
		var existing = null;
		var subslot = -1;
		// Run over the equipment subslots and find the first one that is empty (contains null)
		for (let i = 0; i < slot.length; i++) {
			if (slot[i] === null) {
				subslot = i;
				break;
			}
		}
		// If no empty subslot found (still -1), all subslots are occupied. Grab the item in the last subslot so we can unequip it.
		if (subslot === -1) {
			subslot = slot.length-1;
			existing = slot[subslot];
		}
		// If an item is already equipped in this slot, unequip it.
		if (existing !== null) this.unequip(item.equippable.slot,subslot);

		// Assign the item to the slot.
		slot[subslot] = item;
	}

	if (item.onEquip !== undefined){
		item.onEquip(this);
	}
	if (inv() instanceof Inventory && inv().inventory.map(function(i) {return i.name}).includes(item.id)){
		inv().decItem(item.id);
	}
}

const ItemProto = Object.getPrototypeOf(new Item(""));

Object.defineProperty(ItemProto,'type', {
	get: function () {
		return (this.itemData.type);
	}
});

Object.defineProperty(ItemProto,'points', {
	get: function () {
		return (this.itemData.points);
	}
});

ItemProto.toString = function () {
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
	}
	text += `<div id="display-content">`;
	text += `<div class="action-info">${this.info}</div>`;
	if (this.desc !== null) text += `<div class="action-desc">${this.desc}</div>`;
	text += `</div>`;
	return text;
}

};

window.customMods = customMods;
