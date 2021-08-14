setup.itemData = {

	// CONSUMABLES

	"Apple": {
<<<<<<< Updated upstream
		"useable": ["inmenu"],
=======
		// id#0
		"usable": ["inmenu"],
>>>>>>> Stashed changes
		"type": "hel",
		"special": 15,
		"desc": "Just a normal human apple. Monsters don't exactly need human food, but it definitely helps their stamina and physical constitution.",
		"onUse": function (puppet) {
			puppet.hp += this.special
			inv().decItem(this.name);
			return;
		}
  },
  "M&M Cake": {
<<<<<<< Updated upstream
	"useable": ["inmenu"],
=======
    // id#13
		"usable": ["inmenu"],
>>>>>>> Stashed changes
    "type": "hel",
    "special": 10,
    "desc": "The two Ms in this cake stand for Miniature and Monster. These cakes come in chocolate, vanilla and marbled, but always include chocolate frosting on top.",
		"onUse": function (puppet) {
			puppet.hp += this.special
			inv().decItem(this.name);
			return;
		}
	},
  "Beast Jerky": {
<<<<<<< Updated upstream
	"useable": ["inmenu"],
=======
    // id#14
		"usable": ["inmenu"],
>>>>>>> Stashed changes
    "type": "hel",
    "special": 5,
    "desc": "A monster version of beef jerky. The meat seems tougher than normal beef.",
		"onUse": function (puppet) {
			puppet.hp += this.special
			inv().decItem(this.name);
			return;
		}
  },
	"High Tech Knife": {
		"useable": ["inmenu"],
		"equippable": {slot: "Weapon"},
		"type": "atk",
		"special": 6,
		"desc": "A multi-purpose knife, with a few different sized screwdrivers, a bottle-opener and tiny pair of scissors, as well as a ruler and a back and forward button that cycles the tools on the side.",
		"onEquip": function (puppet) {
			puppet.stats["Attack"].addMod("HT Knife",6,true);
		},
		"onRemove": function (puppet) {
			puppet.stats["Attack"].removeMod("HT Knife");
		}
	},
	"Long Sharpened Knife":{
		"useable": ["inmenu"],
		"equippable": {slot: "Weapon"},
		"type": "atk",
		"special": 10,
		"desc": "A long, thick knife with no extra tools. The metal from the extra tools has been put to good use extending the knife, making a better handle and sharpening the blade.",
		"onEquip": function (puppet) {
			puppet.stats["Attack"].addMod("LS Knife",10,true);
		},
		"onRemove": function (puppet) {
			puppet.stats["Attack"].removeMod("LS Knife");
		}
	},
  "Electric Shortsword": {
<<<<<<< Updated upstream
	"useable": ["inmenu"],
	  "name":"Electric Shortsword",
	"equippable": {slot: "Weapon"},
=======
	  //id#3
		"equippable": {slot: "Weapon"},
>>>>>>> Stashed changes
    "type": "atk",
    "special": 20,
    "stunchance": 20,
    "desc": "A small shortsword with circuitry making the edges of the blade electrified.",
		"onEquip": function (puppet) {
			puppet.stats["Attack"].addMod("Electric Sword",20,true);
		},
		"onRemove": function (puppet) {
			puppet.stats["Attack"].removeMod("Electric Sword");
		}
  },
  "Small Pistol": {
<<<<<<< Updated upstream
	"useable": ["inmenu"],
	"equippable": {slot: "Weapon"},
=======
    // id#4
		"equippable": {slot: "Weapon"},
>>>>>>> Stashed changes
    "type": "atk",
    "special": 12,
    "desc": "A small pistol with a suppressor made for beginners to gunslinging.",
		"onEquip": function (puppet) {
			puppet.stats["Attack"].addMod("Sm. Pistol",12,true);
		},
		"onRemove": function (puppet) {
			puppet.stats["Attack"].removeMod("Sm. Pistol");
		}
  },
  "Laser Pistol": {
<<<<<<< Updated upstream
	"useable": ["inmenu"],
	"equippable": {slot: "Weapon"},
=======
    // id#5
		"equippable": {slot: "Weapon"},
>>>>>>> Stashed changes
    "type": "atk",
    "special": 15,
    "burnchance": 30,
    "desc": "A custom-upgraded pistol, with an added battery pack and a trigger-activated laser for short bursts of white-hot plasma.",
		"onEquip": function (puppet) {
			puppet.stats["Attack"].addMod("Laser Pistol",15,true);
		},
		"onRemove": function (puppet) {
			puppet.stats["Attack"].removeMod("Laser Pistol");
		}
  },
  "Space Suit": {
<<<<<<< Updated upstream
	"useable": ["inmenu"],
	"equippable": {slot: "Torso"},
=======

		"equippable": {slot: new Set(["Head","Torso","Legs"])},
>>>>>>> Stashed changes
    "type": "def",
    "special": 8,
    "desc": "A heavy-duty space suit, with the same white and blue bone pattern as the ship on the heavy fabric. It also has a large air dome with an air tank attached via a plastic tube.",
		"onEquip": function (puppet) {
			puppet.stats["Defense"].addMod("Sp. Suit",8,true);
		},
		"onRemove": function (puppet) {
			puppet.stats["Defense"].removeMod("Sp. Suit");
		}
  },
  "Starship Bonetrousle Uniform": {
<<<<<<< Updated upstream
	"useable": ["inmenu"],
	"equippable": {slot: "Torso"},
=======
		"equippable": {slot: "Torso"},
>>>>>>> Stashed changes
    "type": "def",
    "special": 6,
    "desc": "a light blue and white bone patterned shirt with a name tag attached to the left lapel. The nametag reads \"Frisk - They/Them\" The nametag also doubles as an ID passcard into the upper levels of the Starship Bonetrousle.",
		"onEquip": function (puppet) {
			puppet.stats["Defense"].addMod("SB Uniform",6,true);
		},
		"onRemove": function (puppet) {
			puppet.stats["Defense"].removeMod("SB Uniform");
		}
  },
  "Ripped Blue Jeans": {
<<<<<<< Updated upstream
	"useable": ["inmenu"],
	"equippable": {slot: "Legs"},
=======
		"equippable": {slot: "Legs"},
>>>>>>> Stashed changes
    "type": "def",
    "special": 4,
    "desc": "A somewhat beat-up pair of dark blue jeans. It has rips in the knees after being on the receiving end of many adventures.",
		"onEquip": function (puppet) {
			puppet.stats["Defense"].addMod("Rip.Bl. Jeans",4,true);
		},
		"onRemove": function (puppet) {
			puppet.stats["Defense"].removeMod("Rip.Bl. Jeans");
		}
  },
    "Blue Jeans": {
<<<<<<< Updated upstream
	"useable": ["inmenu"],
	"equippable": {slot: "Legs"},
=======
			"equippable": {slot: "Legs"},
>>>>>>> Stashed changes
    "type": "def",
    "special": 6,
    "desc": "A normal pair of dark blue jeans.",
		"onEquip": function (puppet) {
			puppet.stats["Defense"].addMod("Bl. Jeans",6,true);
		},
		"onRemove": function (puppet) {
			puppet.stats["Defense"].removeMod("Bl.Jeans");
		}
  },
  "Light Blue Slacks": {
<<<<<<< Updated upstream
	"useable": ["inmenu"],
	"equippable": {slot: "Legs"},
=======
		"equippable": {slot: "Legs"},
>>>>>>> Stashed changes
    "type": "def",
    "special": 5,
    "desc": "A pair of high quality light blue pants that were given to Frisk with the Starship-Bonetrousle Uniform. They have an elastic band to keep them in place, as well as deep pockets and beltloops.",
		"onEquip": function (puppet) {
			puppet.stats["Defense"].addMod("L.Bl Slacks",5,true);
		},
		"onRemove": function (puppet) {
			puppet.stats["Defense"].removeMod("L.Bl Slacks");
		}
  },
<<<<<<< Updated upstream
    "Dark Brown Pants": {
	"useable": ["inmenu"],
	"equippable": {slot: "Feet"},
=======
  "Dark Brown Pants": {
		"equippable": {slot: "Feet"},
>>>>>>> Stashed changes
    "type": "def",
    "special": 2,
    "desc": "A normal pair dark brown pants, with deep pockets and an elastic band to keep it in place on the waist.",
		"onEquip": function (puppet) {
			puppet.stats["Defense"].addMod("DB Pants",2,true);
		},
		"onRemove": function (puppet) {
			puppet.stats["Defense"].removeMod("DB Pants");
		}
  },
  "Dark Brown Sneakers": {
<<<<<<< Updated upstream
	"useable": ["inmenu"],
	"equippable": {slot: "Legs"},
=======
		"equippable": {slot: "Legs"},
>>>>>>> Stashed changes
    "type": "def",
    "special": 2,
    "desc": "A normal pair of breathable, flexible sneakers.",
		"onEquip": function (puppet) {
			puppet.stats["Defense"].addMod("LB Sneakers",2,true);
		},
		"onRemove": function (puppet) {
			puppet.stats["Defense"].removeMod("DB Sneakers");
		}
  },
  "Blue and Purple Striped Sweater": {
<<<<<<< Updated upstream
	"useable": ["inmenu"],
	"equippable": {slot: "Torso"},
=======
		"equippable": {slot: "Torso"},
>>>>>>> Stashed changes
    "type": "def",
    "special": 3,
    "desc": " \"This is the lightweight, long-sleeved, singular purple-striped mostly light blue sweater that I usually wear.\" - Frisk",
		"onEquip": function (puppet) {
			puppet.stats["Defense"].addMod("Bl.Prpl. Striped Sweater",3,true);
		},
		"onRemove": function (puppet) {
			puppet.stats["Defense"].removeMod("Bl.Prpl. Striped Sweater");
		}
	},
<<<<<<< Updated upstream
	"onRemove": function (puppet) {
		puppet.stats["Defense"].removeMod("Bl.Prpl. Striped Sweater");
	}
},
	  
	"Space Suit": {
		"equippable": {slot: new Set(["Head","Torso","Legs"])}
	},

  "Cloth": {
    "desc": "A ripped piece of cloth, can be used for crafting. Whatever it once was a part of, no one can tell."
  },
  "Metal": {
    "desc": "A twisted piece of metal, can be used for crafting. Whatever it once was, it's unrecognizable.",
  },
=======

	"Cloth": {
	  "desc": "A ripped piece of cloth, can be used for crafting. Whatever it once was a part of, I can't tell."
	},

	"Metal": {
	  "desc": "A twisted piece of metal, can be used for crafting. Whatever it once was, it's unrecognizable.",
	},
>>>>>>> Stashed changes

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
