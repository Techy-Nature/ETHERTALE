inv = function inv (arg) {
	return arg === "items" ? V().Player.inv.inventory : V().Player.inv;
}
window.inv = inv;
