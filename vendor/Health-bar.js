window.Health2 = function (CurHP, MaxHP, BarID, Horizontal, Container) {
	if (Container == undefined) {
		Container = document;
	}
	var HP = parseInt((CurHP / MaxHP) * 100);
	if (HP < 0) HP = 0;
	if (HP > 100) HP = 100;
	var BarElement = $(Container).find("#" + BarID);
	if (Horizontal) {
		BarElement.css( { width : HP + "%" } );
	} else {
		BarElement.css( { height : HP + "%" } );
	}
	// Hue goes from -20 to 240 = red (hue = 0) -> green -> blue (hue = 240)
	var col = "hsl(" + (Math.floor(HP * 2.6) - 20) + ", 100%, 40%)";
	BarElement.css("background-color", col);
	BarElement.attr("title", CurHP + "/" + MaxHP + " HP");
	$(Container).find("#" + BarID + "bkg").attr("title", CurHP + "/" + MaxHP + " HP");
};