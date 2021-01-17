/* Pronoun Templates - Start - By HiEv */
/* $pgen: 0 = male, 1 = female, 2 = gender neutral, 3 = no gender */
$(document).one(":passagestart", function () {
	if (State.variables.pgen === undefined) {
		State.variables.pgen = 0;  /* Default gender */
	}
});
Template.add("they", function () { return ["he", "she", "they", "it"][State.variables.pgen]; });
Template.add("them", function () { return ["him", "her", "them", "it"][State.variables.pgen]; });
Template.add("themself", function () { return ["himself", "herself", "themself", "itself"][State.variables.pgen]; });
Template.add("themselves", function () { return ["themselves", "themselves", "themselves", "themselves"][State.variables.pgen]; });
Template.add("their", function () { return ["his", "her", "their", "its"][State.variables.pgen]; });
Template.add("theirs", function () { return ["his", "hers", "theirs", "its"][State.variables.pgen]; });
Template.add("theyre", function () { return ["he's", "she's", "they're", "it's"][State.variables.pgen]; });
Template.add("youngPerson", function () { return ["boy", "girl", "kid", "child"][State.variables.pgen]; });
Template.add("youngPeople", function () { return ["boys", "girls", "kids", "children"][State.variables.pgen]; });
Template.add("adultPerson", function () { return ["man", "woman", "person", "person"][State.variables.pgen]; });
Template.add("adultPeople", function () { return ["men", "women", "people", "people"][State.variables.pgen]; });
Template.add("generalPerson", function () { return ["guy", "girl", "guy", "guy"][State.variables.pgen]; });
Template.add("generalPeople", function () { return ["guys", "girls", "guys", "guys"][State.variables.pgen]; });
Template.add("pal", function () { return ["dude", "chick", "pal", "pal"][State.variables.pgen]; });
Template.add("pals", function () { return ["dudes", "chicks", "pals", "pals"][State.variables.pgen]; });
Template.add("They", function () { return ["He", "She", "They", "It"][State.variables.pgen]; });
Template.add("Them", function () { return ["Him", "Her", "Them", "It"][State.variables.pgen]; });
Template.add("Themself", function () { return ["Himself", "Herself", "Themself", "Itself"][State.variables.pgen]; });
Template.add("Themselves", function () { return ["Themselves", "Themselves", "Themselves", "Themselves"][State.variables.pgen]; });
Template.add("Their", function () { return ["His", "Her", "Their", "Its"][State.variables.pgen]; });
Template.add("Theirs", function () { return ["His", "Hers", "Theirs", "Its"][State.variables.pgen]; });
Template.add("Theyre", function () { return ["He's", "She's", "They're", "It's"][State.variables.pgen]; });
Template.add("YoungPerson", function () { return ["Boy", "Girl", "Kid", "Child"][State.variables.pgen]; });
Template.add("YoungPeople", function () { return ["Boys", "Girls", "Kids", "Children"][State.variables.pgen]; });
Template.add("AdultPerson", function () { return ["Man", "Woman", "Person", "Person"][State.variables.pgen]; });
Template.add("AdultPeople", function () { return ["Men", "Women", "People", "People"][State.variables.pgen]; });
Template.add("GeneralPerson", function () { return ["Guy", "Girl", "Guy", "Guy"][State.variables.pgen]; });
Template.add("GeneralPeople", function () { return ["Guys", "Girls", "Guys", "Guys"][State.variables.pgen]; });
Template.add("Pal", function () { return ["Dude", "Chick", "Pal", "Pal"][State.variables.pgen]; });
Template.add("Pals", function () { return ["Dudes", "Chicks", "Pals", "Pals"][State.variables.pgen]; });
/* Pronoun Templates - End */
