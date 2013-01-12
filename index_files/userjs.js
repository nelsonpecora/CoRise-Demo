function clickclear(thisfield, defaulttext) {
	if (thisfield.value == defaulttext) {
		thisfield.value = "";
	}
}

function clickrecall(thisfield, defaulttext) {
	if (thisfield.value == "") {
		thisfield.value = defaulttext;
	}
}

function showOverlay(overlayToShow,overlaysToHide){
	$(".overlayContainer").show();
	$("." + overlayToShow).show();
	for(overlay in overlaysToHide){
		$("." + overlaysToHide[overlay]).hide();
	}
}

function hideOverlay(overlaysToHide){
	for(overlay in overlaysToHide){
		$("." + overlaysToHide[overlay]).hide();
	}
	$("body").css("overflow","auto");
}