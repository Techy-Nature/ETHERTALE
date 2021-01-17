$(document).on(':passagestart', function (ev) {
	if (!ev.passage.tags.includes('menuitem')) {
		State.variables.return = ev.passage.title;
	}
});

Config.history.controls = false;
Config.saves.slots = 1
