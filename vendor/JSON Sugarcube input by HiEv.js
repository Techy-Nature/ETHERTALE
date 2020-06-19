var lockID = LoadScreen.lock();  // Lock the loading screen
State.variables.titems = {};
setup.ready = false;
$(document).ready(function() {
    $.getJSON("twineText.json", function(data) {
		$.each(data, function(key, value) {
			State.variables.titems[key] = value;
		});
		console.log(State.variables.titems);
		setup.ready = true;  // Indicates whether JSON is loaded
		Engine.show();  // Reloads current passage
		LoadScreen.unlock(lockID);  // Unlock the loading screen
    });
});