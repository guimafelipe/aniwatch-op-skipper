
let skip = function (){
	if(!player) return;
	player.currentTime += 85;
}

let button = document.createElement('button');
button.appendChild(document.createTextNode('Skip OP'));
player.parentNode.insertBefore(button, player.nextSibling);

button.addEventListener('click', skip);


chrome.runtime.onMessage.addListener((request, sender, sendRes) => {
	console.log(request);
	if(request.message === 'skip_op'){
		skip();
	}
});

