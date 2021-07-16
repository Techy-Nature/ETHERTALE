const V = variables; /* for convenience */

predisplay['set-return-variable'] = function () {
	// "Long return" functionality, for menus and other situations where the player may jump through multiple side-passages before returning to the main story. See the SugarCube documentation for more details.
	if (!tags().includes('noreturn')) {
		State.variables['return'] = passage();
	}
};

var inv = function inv () {return V().inventory.inventory;}
window.inv = inv;
