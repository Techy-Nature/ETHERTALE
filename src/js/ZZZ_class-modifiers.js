const customMods = function () {

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
