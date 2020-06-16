function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$("#rerollBtn").click(function(){
	
	$("#album-info").text(fantano_list[randomIntFromInterval(0, fantano_list.length)]);
});