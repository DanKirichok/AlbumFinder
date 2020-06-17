function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var numLists = 2;

var prevAlbum = "";

$("#rerollBtn").click(function(){
	var listChooser = randomIntFromInterval(0, numLists - 1);
		
	if (listChooser == 0) {
		var curAlbum = pitchfork_list[randomIntFromInterval(0, pitchfork_list.length)];
		
		while (prevAlbum == curAlbum) {
			curAlbum = pitchfork_list[randomIntFromInterval(0, pitchfork_list.length)];
		}
		
		$("#album-info").text(curAlbum);
		$("#list-info").text("Pitchfork");
	} else if (listChooser == 1) {
		var curAlbum = fantano_list[randomIntFromInterval(0, fantano_list.length)];
		
		while (prevAlbum == curAlbum) {
			curAlbum = fantano_list[randomIntFromInterval(0, fantano_list.length)];
		}
		
		$("#album-info").text(fantano_list[randomIntFromInterval(0, fantano_list.length)]);
		$("#list-info").text("Fantano");
	}
});