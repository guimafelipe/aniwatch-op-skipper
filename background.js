/*
*/

chrome.commands.onCommand.addListener(function(command) {
	chrome.tabs.query({active: true, currentWindow: true}, tabs => {
	 	let activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, {"message" : command});
	});
});

