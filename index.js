const fs = require("fs");
exports.generate = async function(inputFile){
	var data = [];

	var rawstring = fs.readFileSync(inputFile, "utf8");

	// for (i=0;i<500;i++){
	// data = rawstring.match( /[^\.!\?]+[\.!\?]+/g );
	data = rawstring.split("\n");
	// }

	var sets = {};

	function replaceAll(input, search, replacement) {
		var target = input;
		return target.replace(new RegExp(search, 'g'), replacement);
	};

	data.forEach(function(str){
		str = str + "🔚"; //END EMOJI
		var i = str.length;
		while (i--){
			var letter = str.charAt(i).toLowerCase();
			if (letter !== "🔚"){
				if ((letter in sets) == false){ sets[letter] = new Array() };
				sets[letter].push(str.charAt(i+1).toLowerCase());
			}
		}
	});

	var setkeys = Object.keys(sets);

	var start = setkeys[Math.floor(Math.random()*setkeys.length)];
	var cont = true
	var phrase = start;
	var prevLetter = start;
	while (cont==true){
		var prevSet = sets[prevLetter];
		if (prevSet){
			var nextLetter = prevSet[Math.floor(Math.random()*prevSet.length)];
			if (nextLetter == "�" || nextLetter == "🔚"){
				cont = false
				break;
			} else {
				phrase = phrase + nextLetter;
				prevLetter = nextLetter;
			}
		} else { break };
	}
	return replaceAll(replaceAll(phrase, "🔚", ""), "�", "");
}