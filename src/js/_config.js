$(document).on(':passagestart', function (ev) {
	if (!ev.passage.tags.includesAny('menuitem','menu')) {
		State.variables.return = ev.passage.title;
	}
});
Config.history.controls = false;
Config.saves.slots = 1
