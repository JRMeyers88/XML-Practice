console.log("First line", Date.now());
let requestThis = new XMLHttpRequest();

function executeIfFailure() {
	console.log("You goofed up");
}

function executeIfOK() {
	console.log("requestThis", requestThis);
	console.log("event.target", event.target);
	var data = JSON.parse(event.target.responseText)
	console.log("data", data);
	outputAnimals(data.animals);
}

requestThis.addEventListener("load", executeIfOK);
requestThis.addEventListener("error", executeIfFailure);

requestThis.open("GET", "animals.json");
requestThis.send();

function outputAnimals(animalsArr) {
	let animalList = document.getElementById("animal-list");
	animalsArr.forEach(function(animals) {
		console.log("Animal name", animals.name);
		console.log("Animal kind", animals.type);
		console.log("Animals favorite food", animals.eats);
		animalList.innerHTML += `<h2>名前は：${animals.name}<br>
		種類は：${animals.type}<br>
		好きな食べ物は：${animals.eats}</h2>`
	});
}





console.log("Last line", Date.now());