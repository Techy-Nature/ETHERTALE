window.Puppet = class Puppet extends Actor{
	constructor(name){
	if (typeof(name) == 'object'){
		super(name);
	}
	else {
		super(name);
		if (this.data) {
			this.actions = [];
			for (let n of this.data.actions) {
				this.actions.push(new Action(n));
			}
			this.defaultAction = new Action(this.data.defaultAction);
			this.crisis = [];
			if (this.data.crisis instanceof Array) {
				for (let n of this.data.crisis) {
					this.crisis.push(new Action(n));
				}
			} else if (typeof(this.data.crisis) == "string") {
				this.crisis.push(new Action(this.data.crisis));
			}
			if (this.data.specialInit) { this.data.specialInit(this); }

			this.lastAction = null;

			this.defeats = 0;
			this.kills = 0;

// Features used for level ups, explained further in the "Widgets: Leveling Up" passage. You (probably) want growth rates to be unique for every character, so they are blank Maps in the general constructor. Set them when creating a character via Call widget, or make a switch statement with a case for every character to define them here. The labels must match the stat labels exactly.
// By default, these attributes are for Puppets only. If you want to let Enemy objects level up, just move the code into the "Actor" class and they'll apply to both.

			this.level = 1;
			this.xp = 0;
		}

	}
	}

	get levelRate () {
		return (this._levelRate || this.data.levelRate || 'medium');
	}

	get growthRates () {
		return (this.data.growthRates || {});
	}

	get StatTable () {
		return (this.data.StatTable || function () { console.log("ERROR in StatTable: no stat table for "+this.name); return; });
	}

	get portrait () {
		return (this.data.portrait || this.name.substring(0,5));
	}

	hasAction (name) {
		return this.actions.map(function (a) { return a.name; }).includes(name);
	}

	clone () {
		// Return a new instance containing our current data.
		return new Puppet(this);
	}

	toJSON () {
		// Return a code string that will create a new instance
		// containing our current data.
		const data = {};
		Object.keys(this).forEach(pn => data[pn] = clone(this[pn]));
		return JSON.reviveWrapper('new Puppet($ReviveData$)', data);
	}
};
