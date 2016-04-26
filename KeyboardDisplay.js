var GLOBALS = new Object();
GLOBALS.width  = 15; //no num tab
GLOBALS.height = 6;

function createKeyboard(height, width, container_name){
	console.log("loading Keyboard");
	// first we create each row.

	for(var i =0; i< height; i++){
		var $row = $("<div>", {id: "row"+i, class: "keyRow"});
		$(container_name).append($row);
		// console.log($row);
		// console.log($(container_name));
	}

	//then we display the first row, escapekeys, fnkeys, ins, suppr
	$("#row0").append($("<div>", {id: "27", class: "key"}));
	for(var i=112;i<112+12;i++){
		$("#row0").append($("<div>", {id: i, class: "key"}));
	}
	$("#row0").append($("<div>", {id: "45", class: "key"}));	
	$("#row0").append($("<div>", {id: "46", class: "key"}));

	//then the numbers row, and the backspace.
	$("#row1").append($("<div>", {id: "22", class: "key"}));
	for(var i=49; i<49+9;i++){
		$("#row1").append($("<div>", {id: i, class: "key"}));
	}
	$("#row1").append($("<div>", {id: "48", class: "key"}));
	$("#row1").append($("<div>", {id: "189", class: "key"}));
	$("#row1").append($("<div>", {id: "187", class: "key"}));
	$("#row1").append($("<div>", {id: "8", class: "key return"}));
	$("#row1").append($("<div>", {id: "8b", class: "key return"}));

	//next row: tab and letters.
	$("#row2").append($("<div>", {id: "9", class: "key tab"}));
	var line = [81,87,69,82,84,89,85,73,79,80,219,221];
	for(var i in line){
		$("#row2").append($("<div>", {id: line[i], class: "key"}));
	}
	$("#row2").append($("<div>", {id: "13", class: "key enter"}));
	$("#row2").append($("<div>", {id: "13b", class: "key enter"}));

	//next row: maj lock and stuff
	$("#row3").append($("<div>", {id: "20", class: "key maj-lock"}));
	line = [65, 83, 68, 70,71,72,74,75,76,186,222,220];
	for(var i in line){
		$("#row3").append($("<div>", {id: line[i], class: "key"}));
	}
	$("#row3").append($("<div>", {id: "13c", class: "key enter"}));
	$("#row3").append($("<div>", {id: "13d", class: "key enter"}));

		//next row: maj lock and stuff
	$("#row4").append($("<div>", {id: "16", class: "key maj-small"}));
	line = [226,90,88,67,86,66,78,77,188,190,191];
	for(var i in line){
		$("#row4").append($("<div>", {id: line[i], class: "key"}));
	}
	$("#row4").append($("<div>", {id: "16a", class: "key maj large"}));
	$("#row4").append($("<div>", {id: "16b", class: "key maj large"}));
	$("#row4").append($("<div>", {id: "16c", class: "key maj large"}));
	//next row
	$("#row5").append($("<div>", {id: "17", class: "key ctrl"}));
	line = [226,91,18];
	for(var i in line){
		$("#row5").append($("<div>", {id: line[i], class: "key"}));
	}

	$("#row5").append($("<div>", {id: "32", class: "key space-bar"}));
	$("#row5").append($("<div>", {id: "32b", class: "key space-bar"}));
	$("#row5").append($("<div>", {id: "32c", class: "key space-bar"}));
	$("#row5").append($("<div>", {id: "32d", class: "key space-bar"}));
	$("#row5").append($("<div>", {id: "32e", class: "key space-bar"}));
	$("#row5").append($("<div>", {id: "18b", class: "key"}));
	$("#row5").append($("<div>", {id: "93", class: "key"}));
	$("#row5").append($("<div>", {id: "17b", class: "key ctrl"}));
	$("#row5").append($("<div>", {id: 37, class: "key left"}));
	$("#row5").append($("<div>", {id: 38, class: "key up"}));
	$("#row5").append($("<div>", {id: 39, class: "key right"}));
}
// createKeyboard(GLOBALS.height,GLOBALS.width);
window.onload =  function(){
	createKeyboard(GLOBALS.height,GLOBALS.width, "#keyboard-container");
	
}
function set_color(map, color){
	y = map[0];
	x =  map[1];
	id = KeyMaper.Map[y][x].id;
	// console.log(id);
	// $("#row"+map[0]).children().eq(map[1]).css("background-color", color);
	// console.log("y:"+y+"x:"+x);
	$("#"+id).css("background-color", color);
}