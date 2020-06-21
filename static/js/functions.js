function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var numLists = 2;

var prevAlbum = "";

$("#rerollBtn").click(function(){
	var listChooser = randomIntFromInterval(0, numLists - 1);
	
	var setAlbum = "";
	var setList = "";
	
	if (listChooser == 0) {
		var curAlbum = pitchfork_list[randomIntFromInterval(0, pitchfork_list.length)];
		
		while (prevAlbum == curAlbum) {
			curAlbum = pitchfork_list[randomIntFromInterval(0, pitchfork_list.length)];
		}
		
		setAlbum = curAlbum;
		setList = "Pitchfork";
	} else if (listChooser == 1) {
		var curAlbum = fantano_list[randomIntFromInterval(0, fantano_list.length)];
		
		while (prevAlbum == curAlbum) {
			curAlbum = fantano_list[randomIntFromInterval(0, fantano_list.length)];
		}
		
		setAlbum = curAlbum;
		setList = "Fantano";
	}
	
	$(".sel-album").addClass("animate__fadeOut");
		
	setTimeout(function() {
		$(".sel-album").css("visibility", "hidden");
	}, 500);
	
	setTimeout( function() {
		$(".sel-album").css("visibility", "visible");
		$(".sel-album").removeClass("animate__fadeOut");
		$(".sel-album").addClass("animate__fadeIn"); 
		$(".sel-album").css("visibility", "visible");
		$("#album-info").text(setAlbum);
		$("#list-info").text(setList);
	}, 750);
});