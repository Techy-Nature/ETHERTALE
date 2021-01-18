setup.itemData = {

	// CONSUMABLES

	"Apple": {
		// id#0
		"type": "hel",
		"points": 15,
		"desc": "Just a normal human apple. Monsters don't exactly need human food, but it definitely helps their stamina and physical constitution."
	},
	"High Tech Knife": {
		// id#1
		"name": "High Tech Knife",
		"type": "atk",
		"points": 6,
		"desc": "A multi-purpose knife, with a few different sized screwdrivers, a bottle-opener and tiny pair of scissors, as well as a ruler and a back and forward button that cycles the tools on the side."
	},
	"Long Sharpened Knife": {
		// id#2
		"type": "atk",
		"points": 10,
		"desc": "A long, thick knife with no extra tools. The metal from the extra tools has been put to good use extending the knife, making a better handle and sharpening the blade."
	},
  "Electric Shortsword": {
    // id#3
    "type": "atk",
    "points": 20,
    "stunchance": 20,
    "desc": "A small shortsword with circuitry making the edges of the blade electrified."
  },
  "Small Pistol": {
    // id#4
    "type": "atk",
    "points": 12,
    "desc": "A small pistol with a suppressor made for beginners to gunslinging."
  },
  "Laser Pistol": {
    // id#5
    "type": "atk",
    "points": 15,
    "burnchance": 30,
    "desc": "A custom-upgraded pistol, with an added battery pack and a trigger-activated laser for short bursts of white-hot plasma."
  },
  "Space Suit": {
    // id#6
    "type": "def",
    "points": 8,
    "desc": "A heavy-duty space suit, with the same white and blue bone pattern as the ship on the heavy fabric. It also has a large air dome with an air tank attached via a plastic tube."
  },
  "Starship Bonetrousle Uniform": {
    // id#7
    "type": "def",
    "points": 6,
    "desc": "a light blue and white bone patterned shirt with a name tag attached to the left lapel. The nametag reads \"Frisk - They/Them\"."
  },
  "Ripped Blue Jeans": {
    // id#8
    "type": "def",
    "points": 4,
    "desc": "A somewhat beat-up pair of dark blue jeans. It has rips in the knees after being on the receiving end of many adventures."
  },
    "Blue Jeans": {
    // id#9
    "type": "def",
    "points": 6,
    "desc": "A normal pair of dark blue jeans."
  },
  "Light Blue Slacks": {
    // id#10
    "type": "def",
    "points": 5,
    "desc": "A pair of high quality light blue pants that were given to Frisk with the Starship Bonetrousle Uniform. They have an elastic band to keep them in place, as well as deep pockets and beltloops."
  },
    "Dark Brown Sneakers": {
    // id#11
    "type": "def",
    "points": 2,
    "desc": "A normal pair of breathable, flexible sneakers."
  },
  "M&M Cake": {
    // id#12
    "type": "hel",
    "points": 10,
    "desc": "The two Ms in this cake stand for Miniature and Monster. These cakes come in chocolate, vanilla and marbled, but always include chocolate frosting on top."
  },
  "Beast Jerky": {
    // id#13
    "type": "hel",
    "points": 5,
    "desc": "A monster version of beef jerky. The meat seems tougher than normal beef."
  },
  "Cloth": {
    // id#14
    "desc": "A ripped piece of cloth, can be used for crafting. Whatever it once was a part of, you can't tell."
  },
  "Metal": {
    // id#15
    "desc": "A twisted piece of metal, can be used for crafting. Whatever it once was, it's unrecognizable."
  },

	// EQUIPMENT

	/* If you don't plan to call item data directly through a function or iterator, you can use equipment to modify character by proxy via the onEquip and onRemove functions. These are passed the character being equipped and can modify their attributes in any way you choose. Typically, these functions would be inverses of each other, but you can add special functionality for one or the other for e.g. cursed items. */

	/* restrictedTo must be defined and must be an array. Make it an empty array to make equipment unrestricted. */
	/* Kudos if you recognize where I got the default items' naming scheme from. */

	"Symbol of Destruction": {
		"equippable": {slot: "Weapon", tags: ["symbol"], restrictedTo: []},
		"onEquip": function (puppet) {
			puppet.stats["Attack"].addMod("Symbol of Destruction",5,true);
		},
		"onRemove": function (puppet) {
			puppet.stats["Attack"].removeMod("Symbol of Destruction");
		},
		"desc": "A weapon.",
		"info": "ATK +5"
	},

	"Aura of Protection": {
		"equippable": {slot: "Armor", tags: ["aura"], restrictedTo: []},
		"onEquip": function (puppet) {
			puppet.tolerances.addMod("Stunned","Aura of Protection",{ immune: true });
			puppet.tolerances.addMod("Off-Balance","Aura of Protection",1);
		},
		"onRemove": function (puppet) {
			puppet.tolerances.removeMod("Stunned","Aura of Protection");
			puppet.tolerances.removeMod("Off-Balance","Aura of Protection");
		},
		"desc": "An armor.",
		"info": "Stunned Immunity | Off-Balance Tol +1"
	},

	"Color of Defeat": {
		"equippable": {slot: "Accessory", tags: ["color"], restrictedTo: ["Artist"]},
		"onEquip": function (puppet) {
			this.modID.HPregen = puppet._HPregen.flat.addMod("Color of Defeat",1,true);
			this.modID.blue = puppet.elements.addMod("blue","Color of Defeat",25,true,"flat");
		},
		"onRemove": function (puppet) {
			puppet._HPregen.flat.removeMod("Color of Defeat",this.modID.HPregen);
			puppet.elements.removeMod("blue","Color of Defeat",this.modID.blue,"flat");
		},
		"desc": "Something else.",
		"info": "HP regeneration +1 | Blue soak +25"
	},

	"Color of Growth": {
		"equippable": {slot: "Accessory", tags: ["color"], restrictedTo: []},
		"onEquip": function (puppet) {
			this.modID.HPregen = puppet._HPregen.percent.addMod("Color of Defeat",0.01,true);
			this.modID.red = puppet.elements.addMod("red","Color of Defeat",-0.25,true,"percent");
		},
		"onRemove": function (puppet) {
			puppet._HPregen.percent.removeMod("Color of Defeat",this.modID.HPregen);
			puppet.elements.removeMod("red","Color of Defeat",this.modID.red,"percent");
		},
		"desc": "Something else.",
		"info": "HP regeneration +1% | Red resistance +25%"
	},

	"Cursed Ring": {
		"equippable": {slot: "Accessory", tags: ["ring"], restrictedTo: []},
		"sticky": true,
		"fakeName": "Mysterious Ring",
		"onEquip": function (puppet) {
			this.modID = puppet.stats["Attack"].addMod("Cursed Ring",-1,true);
			this.known = true;
		},
		"onRemove": function (puppet) {
			puppet.stats["Attack"].removeMod("Cursed Ring",this.modID);
		},
		"desc": function (item) {
			return (item.known) ? "A cursed ring that saps the wearer's strength."
			: "A mysterious gold ring. You don't know what it does.";
		},
		"info": function (item) {
			return (item.known) ? "CURSED | ATK -1" : "It's a mystery!";
		}
	}
};
