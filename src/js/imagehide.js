/* ToggleImages JavaScript - Start */
function allowHide(el) {
	return (!$(el).hasClass("nohide")) && (!$(el).parent().hasClass("nohide"));
}
window.imageRecheck = function () {
	if (settings.images) {
		$("img").each(function () {
			if (allowHide(this)) {
				$(this).addClass("hidden");
			}
		});
	}
};
var toggleImages = function () {
	if (settings.images) {
		// Hide images
		$(".toggle-wrapper").removeClass("pushed");
		window.imageRecheck();
	} else {
		// Show images
		$(".toggle-wrapper").addClass("pushed");
		$("img").removeClass("hidden");
		$("img").each(function () {
			if (allowHide(this)) {
				$(this).attr("src", $(this).data("src"));
			}
		});
	}
};
Setting.addToggle("images", { label: "Hide images?", onChange: toggleImages });
/* You can do <<run toggleImg()>> to toggle the display of images,
		<<run toggleImg(true)>> to hide images,
		and <<run toggleImg(false)>> to show images. */
window.toggleImg = function (val) {
	if (val === undefined) {
		settings.images = !settings.images;
	} else {
		settings.images = !!val;
	}
	Setting.save();
	toggleImages();
	return settings.images;
};
$(document).on("click", ".toggle_handler", function (event) {
	window.toggleImg();
});
$(document).on(":passagerender", function (event) {
	$(event.content).find("img").each(function () {
		if (allowHide(this)) {
			$(this).data("src", $(this).attr("src"));
			if (settings.images) {
				$(this).addClass("hidden").removeAttr("src");
			}
		}
	});
});
$(document).on(":passageend", function (event) {
	window.imageRecheck();
});
/* ToggleImages JavaScript - End */