$(document).on(':passagestart', function (ev) {
	if (ev.passage.tags.includesAny('room','cutscene')) {
		State.variables.return = ev.passage.title;
	}
});
Config.history.controls = false;
Config.saves.slots = 1
