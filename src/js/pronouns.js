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
Template.add("their", function () { return ["his", "her", "their", "its"][State.variables.pgen]; });
Template.add("theirs", function () { return ["his", "hers", "theirs", "its"][State.variables.pgen]; });
Template.add("theyre", function () { return ["he's", "she's", "they're", "it's"][State.variables.pgen]; });
Template.add("youngPerson", function () { return ["boy", "girl", "kid", "child"][State.variables.pgen]; });
Template.add("youngPeople", function () { return ["boys", "girls", "kids", "children"][State.variables.pgen]; });
Template.add("adultPerson", function () { return ["man", "woman", "person", "person"][State.variables.pgen]; });
Template.add("adultPeople", function () { return ["men", "women", "people", "people"][State.variables.pgen]; });
Template.add("generalPerson", function () { return ["guy", "girl", "enby", "enby"][State.variables.pgen]; });
Template.add("generalPeople", function () { return ["guys", "girls", "enbys", "enbys"][State.variables.pgen]; });
Template.add("pal", function () { return ["dude", "chick", "pal", "pal"][State.variables.pgen]; });
Template.add("pals", function () { return ["dudes", "chicks", "pals", "pals"][State.variables.pgen]; });
Template.add("They", function () { return ["He", "She", "They", "It"][State.variables.pgen]; });
Template.add("Them", function () { return ["Him", "Her", "Them", "It"][State.variables.pgen]; });
Template.add("Themself", function () { return ["Himself", "Herself", "Themself", "Itself"][State.variables.pgen]; });
Template.add("Their", function () { return ["His", "Her", "Their", "Its"][State.variables.pgen]; });
Template.add("Theirs", function () { return ["His", "Hers", "Theirs", "Its"][State.variables.pgen]; });
Template.add("Theyre", function () { return ["He's", "She's", "They're", "It's"][State.variables.pgen]; });
Template.add("YoungPerson", function () { return ["Boy", "Girl", "Kid", "Child"][State.variables.pgen]; });
Template.add("YoungPeople", function () { return ["Boys", "Girls", "Kids", "Children"][State.variables.pgen]; });
Template.add("AdultPerson", function () { return ["Man", "Woman", "Person", "Person"][State.variables.pgen]; });
Template.add("AdultPeople", function () { return ["Men", "Women", "People", "People"][State.variables.pgen]; });
Template.add("GeneralPerson", function () { return ["Guy", "Girl", "Enby", "Enby"][State.variables.pgen]; });
Template.add("GeneralPeople", function () { return ["Guys", "Girls", "Enbys", "Enbys"][State.variables.pgen]; });
Template.add("Pal", function () { return ["Dude", "Chick", "Pal", "Pal"][State.variables.pgen]; });
Template.add("Pals", function () { return ["Dudes", "Chicks", "Pals", "Pals"][State.variables.pgen]; });

/* Uppercase version added by Jaden */
Template.add("THEY", function () { return ["HE", "SHE", "THEY", "IT"][State.variables.pgen]; });
Template.add("THEM", function () { return ["HIM", "HER", "THEM", "ITS"][State.variables.pgen]; });
Template.add("THEIR", function () { return ["HIS", "HER", "THEIR", "ITS"][State.variables.pgen]; });
Template.add("THEIRS", function () { return ["HIS", "HERS", "THEIRS", "ITS"][State.variables.pgen]; });
Template.add("THEYRE", function () { return ["He's", "SHE'S", "THEY'RE", "IT'S"][State.variables.pgen]; });
Template.add("THEMSELF", function () { return ["HIMSELF", "HERSELF", "THEMSELF", "ITSELF"][State.variables.pgen]; });
Template.add("YOUNGPERSON", function () { return ["BOY", "GIRL", "KID", "CHILD"][State.variables.pgen]; });
Template.add("YOUNGPEOPLE", function () { return ["BOYS", "GIRLS", "KIDS", "CHILDREN"][State.variables.pgen]; });
Template.add("ADULTPERSON", function () { return ["MAN", "WOMAN", "PERSON", "PERSON"][State.variables.pgen]; });
Template.add("ADULTPEOPLE", function () { return ["MEN", "WOMEN", "PEOPLE", "PEOPLE"][State.variables.pgen]; });
Template.add("GENERALPERSON", function () { return ["GUY", "GIRL", "ENBY", "ENBY"][State.variables.pgen]; });
Template.add("GENERALPEOPLE", function () { return ["GUYS", "GIRLS", "ENBYS", "ENBYS"][State.variables.pgen];})
Template.add("PAL", function () { return ["DUDE", "CHICK", "FRIEND", "FRIEND"][State.variables.pgen]; });
Template.add("PALS", function () { return ["DUDES", "CHICKS", "FRIENDS", "FRIENDS"][State.variables.pgen]; });
/* Pronoun Templates - End */
