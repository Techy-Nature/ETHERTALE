// Dukemz's stuff
// I'll put my functions in this object. You should be able to call them with `duck.functionName()`.
window.duck = {};

// Just a nice little function to display coloured text in the console. Called it the duck debugger because why not.
duck.dbg = text => { return console.log("%c[DUCK DEBUGGER] " + `%c${text}`, "color:aqua", "color:grey"); }
duck.dbg("Starting Dukemz's code and setting up item dictionary.");

// Create an empty array that serves as the user's inventory.
duck.inv = [];
// Maximum inventory space.
duck.invSpace = 10;

// First, we need a function to get an item with a specific ID and add it to the inventory.
// An item's position in the dictionary corresponds to its ID.
// So the Apple would have ID 0, the High Tech Knife would have ID 1, and so on...
duck.addItem = (id) => {
  if(duck.inv.length >= duck.invSpace) return false;
  duck.inv.push(id);
  return true;
}

// Set up the item dictionary.
duck.itemdict = [
  {
    // id#0
    "name": "Apple",
    "type": "hel",
    "points": 15,
    "description": "Just a normal human apple. Monsters don't exactly need human food, but it definitely helps their stamina and physical constitution."
  },
  {
    // id#1
    "name": "High Tech Knife",
    "type": "atk",
    "points": 6,
    "description": "A multi-purpose knife, with a few different sized screwdrivers, a bottle-opener and tiny pair of scissors, as well as a ruler and a back and forward button that cycles the tools on the side."
  },
  {
    // id#2
    "name": "Long Sharpened Knife",
    "type": "atk",
    "points": 10,
    "description": "A long, thick knife with no extra tools. The metal from the extra tools has been put to good use extending the knife, making a better handle and sharpening the blade."
  },
  {
    // id#3
    "name": "Electric Shortsword",
    "type": "atk",
    "points": 20,
    "stunchance": 20,
    "description": "A small shortsword with circuitry making the edges of the blade electrified."
  },
  {
    // id#4
    "name": "Small Pistol",
    "type": "atk",
    "points": 12,
    "description": "A small pistol with a suppressor made for beginners to gunslinging."
  },
  {
    // id#5
    "name": "Laser Pistol",
    "type": "atk",
    "points": 15,
    "burnchance": 30,
    "description": "A custom-upgraded pistol, with an added battery pack and a trigger-activated laser for short bursts of white-hot plasma."
  },
  {
    // id#6
    "name": "Space Suit",
    "type": "def",
    "points": 8,
    "description": "A heavy-duty space suit, with the same white and blue bone pattern as the ship on the heavy fabric. It also has a large air dome with an air tank attached via a plastic tube."
  },
  {
    // id#7
    "name": "Starship Bonetrousle Uniform",
    "type": "def",
    "points": 6,
    "description": "a light blue and white bone patterned shirt with a name tag attached to the left lapel. The nametag reads \"Frisk - They/Them\"."
  },
  {
	 //id#8
    "name": "Ripped Blue Jeans",
    "type": "def",
    "points": 4,
    "description": "A somewhat beat-up pair of dark blue jeans. It has rips in the knees after being on the receiving end of many adventures."
  },
  {
    // id#9
    "name": "Blue Jeans",
    "type": "def",
    "points": 6,
    "description": "A normal pair of dark blue jeans."
  },
  {
    // id#10
    "name": "Light Blue Slacks",
    "type": "def",
    "points": 5,
    "description": "A pair of high quality light blue pants that were given to Frisk with the Starship Bonetrousle Uniform. They have an elastic band to keep them in place, as well as deep pockets and beltloops."
  },
  {
    // id#11
    "name": "Dark Brown Sneakers",
    "type": "def",
    "points": 2,
    "description": "A normal pair of breathable, flexible sneakers."
  },
  {
    // id#12
    "name": "M&M Cake",
    "type": "hel",
    "points": 10,
    "description": "The two Ms in this cake stand for Miniature and Monster. These cakes come in chocolate, vanilla and marbled, but always include chocolate frosting on top."
  },
  {
    // id#13
    "name": "Beast Jerky",
    "type": "hel",
    "points": 5,
    "description": "A monster version of beef jerky. The meat seems tougher than normal beef."
  },
  {
    // id#14
    "name": "Cloth",
    "description": "A ripped piece of cloth, can be used for crafting. Whatever it once was a part of, you can't tell."
  }, 
  {
   // id#15
    "name": "Metal",
    "description": "A twisted piece of metal, can be used for crafting. Whatever it once was, it's unrecognizable."
  },
];
duck.dbg("Printing the item dictionary below.");
console.log(duck.itemdict);
