chrome.runtime.onMessage.addListener(gotmessage);
function gotmessage(message, sender, sendResponse){
	if (message.txt=='hello') {
		let imgs=document.getElementsByTagName('img');

		for(imgElt of imgs){
			let url=chrome.extension.getURL('img.png');
			imgElt.src=url;
		}

	}
}