var targetURL = "https://old.reddit.com"

function redirect(requestDetails){
	return{
		redirectUrl: targetURL+requestDetails.url.match(/https?:\/\/[^\/]+([\S\s]*)/)[1]
	}
}

browser.webRequest.onBeforeRequest.addListener(
	redirect,
	{urls:["*://reddit.com/*","*://www.reddit.com/*","*://np.reddit.com/*","*://new.reddit.com/*"],
		types:["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]},
	['blocking']);
