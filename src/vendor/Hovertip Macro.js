/* hovertip - Start */
function UpdateHoverTipTxt(Container) {
	if (typeof Container === "undefined") {
		Container = document;
	}
	if (Engine.isIdle()) {
		clearInterval(HTTIntervalID);
		var i = 0, positionInfo, sum, element = Container.getElementById("hoverTipTxt" + (++i));
		while (element !== null) {
			positionInfo = element.getBoundingClientRect();
			element.style.left = (Math.round((positionInfo.width - parseInt(element.parentElement.getBoundingClientRect().width)) / 2) * -1) + "px";  /* Center hoverTipTxt horizontally over parent. */
			element.style.top = Math.round(-1 * positionInfo.height - 5) + "px";  /* Position bottom of hoverTipTxt just above the parent. */
			positionInfo = element.getBoundingClientRect();  /* Refresh rect */
			sum = Math.round(positionInfo.top + positionInfo.height + 5);
			if (sum > window.innerHeight) {  /* Make sure the text isn't outside the bottom of the screen. */
				element.style.top = (parseInt(element.style.top) + window.innerHeight - sum) + "px";
				positionInfo = element.getBoundingClientRect();  /* Refresh rect */
			}
			if (positionInfo.top < 5) {  /* Make sure the text isn't outside the top of the screen. */
				element.style.top = (parseInt(element.style.top) - positionInfo.top + 5) + "px";
			}
			sum = Math.round(positionInfo.left + positionInfo.width + 26);
			if (sum > window.innerWidth) {  /* Make sure the text isn't outside the right of the screen. */
				element.style.left = (parseInt(element.style.left) + window.innerWidth - sum) + "px";
				positionInfo = element.getBoundingClientRect();  /* Refresh rect */
			}
			if (positionInfo.left + window.pageXOffset < 10) {  /* Make sure the text isn't outside the left of the screen. */
				element.style.left = (parseInt(element.style.left) - positionInfo.left - window.pageXOffset + 10) + "px";
			}
			element = document.getElementById("hoverTipTxt" + (++i));
		}
	} else {
		clearInterval(HTTIntervalID);
		HTTIntervalID = setInterval(UpdateHoverTipTxt, 300);
	}
}
/*  Waits for passage to be fully rendered before doing anything.  */
var HTTIntervalID = 0;
$(document).on(":passagerender", function (ev) {
	UpdateHoverTipTxt(ev.content);
});
$(window).on("resize scroll", function (ev) {
	clearInterval(HTTIntervalID);
	HTTIntervalID = setInterval(UpdateHoverTipTxt, 300);
});
$("#ui-bar-toggle").on("click", function (ev) {
	clearInterval(HTTIntervalID);
	HTTIntervalID = setInterval(UpdateHoverTipTxt, 300);
});
/* <<hovertip>> macro */
Macro.add("hovertip", {
	tags     : null,
	handler  : function () {
		if (this.args.length > 0) {
			var width = 330, left;
			if (this.args.length > 1) {
				width = this.args[1];
			}
			left = Math.trunc(width / 2) - 11;
			if (State.temporary.HoverTipTxtCount == undefined) {
				State.temporary.HoverTipTxtCount = 1;
			} else {
				State.temporary.HoverTipTxtCount++;
			}
			var output = '<span class="hoverTipTxt hoverTip" tabindex="0">' + this.payload[0].contents + '<span id="hoverTipTxt' + State.temporary.HoverTipTxtCount +
						'" class="hoverBox hoverTail" style="left: -' + left + 'px; max-width: ' + width + 'px;">' + this.args[0] + '</span></span>';
			$(this.output).wiki(output);
		} else {
			$(this.output).wiki(this.payload[0].contents);
		}
	}
});
/* hovertip - End */