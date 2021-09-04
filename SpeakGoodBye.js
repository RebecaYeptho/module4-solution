(function (window) {
	var byeSpeaker = speak();
	var speakWord = "Good Bye";
	funtion speak(name) {
		console.log(speakWord + " " + name);
	}
	window.byeSpeaker = byeSpeaker;

}) (window);