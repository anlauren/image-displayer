var KeyMaper = new Object();
KeyMaper.Map = [];
KeyMaper.createMap =  function createMap(){
	var KeyRow = [];
	//we will append all the rows to the global object
	KeyRow.push({id: "27", class: "key"});
	for(var i=112;i<112+12;i++){
		KeyRow.push({id: i, class: "key"});
	}
	KeyRow.push({id: "45", class: "key"});	
	KeyRow.push({id: "46", class: "key"});
	KeyMaper.Map.push(KeyRow);
	var KeyRow = [];
	//then the numbers row, and the backspace.
	KeyRow.push({id: "22", class: "key"});
	for(var i=49; i<49+9;i++){
		KeyRow.push({id: i, class: "key"});
	}
	KeyRow.push({id: "48", class: "key"});
	KeyRow.push({id: "189", class: "key"});
	KeyRow.push({id: "187", class: "key"});
	KeyRow.push({id: "8", class: "key return"});
	KeyRow.push({id: "8b", class: "key return"});
	KeyMaper.Map.push(KeyRow);
	KeyRow = [];
	//next row: tab and letters.
	KeyRow.push({id: "9", class: "key tab"});
	var line = [81,87,69,82,84,89,85,73,79,80,219,221];
	for(var i in line){
		KeyRow.push({id: line[i], class: "key"});
	}
	KeyRow.push({id: "13", class: "key enter"});
	KeyRow.push({id: "13b", class: "key enter"});
	KeyMaper.Map.push(KeyRow);
	KeyRow = [];
	//next row: maj lock and stuff
	KeyRow.push({id: "20", class: "key maj-lock"});
	line = [65, 83, 68, 70,71,72,74,75,76,186,222,220];
	for(var i in line){
		KeyRow.push({id: line[i], class: "key"});
	}
	KeyRow.push({id: "13c", class: "key enter"});
	KeyRow.push({id: "13d", class: "key enter"});
	KeyMaper.Map.push(KeyRow);
	KeyRow = [];
		//next row: maj lock and stuff
	KeyRow.push({id: "16", class: "key maj-small"});
	line = [226,90,88,67,86,66,78,77,188,190,191];
	for(var i in line){
		KeyRow.push({id: line[i], class: "key"});
	}
	KeyRow.push({id: "16a", class: "key maj large"});
	KeyRow.push({id: "16b", class: "key maj large"});
	KeyRow.push({id: "16c", class: "key maj large"});
	KeyMaper.Map.push(KeyRow);
	KeyRow = [];
	//next row
	KeyRow.push({id: "17", class: "key ctrl"});
	line = [226,91,18];
	for(var i in line){
		KeyRow.push({id: line[i], class: "key"});
	}
	line = [32,32,32,32,32];
	
	KeyRow.push({id: "32", class: "key space-bar"});
	KeyRow.push({id: "32b", class: "key space-bar"});
	KeyRow.push({id: "32c", class: "key space-bar"});
	KeyRow.push({id: "32d", class: "key space-bar"});
	KeyRow.push({id: "32e", class: "key space-bar"});
	KeyRow.push({id: "18b", class: "key alt"});
	KeyRow.push({id: "93", class: "key alt"});
	KeyRow.push({id: "17b", class: "key ctrl"});
	KeyRow.push({id: 37, class: "key left"});
	KeyRow.push({id: 38, class: "key up"});
	KeyRow.push({id: 39, class: "key up"});
	KeyMaper.Map.push(KeyRow);
};
