chrome.tabs.onUpdated.addListener(function(tabId, changeinfo, tab){
	chrome.tabs.getSelected(null,function(tab) {
		if (tab.url.indexOf("github") != -1 && changeinfo.status == "complete") {
	        chrome.tabs.executeScript(tab.id, {
	            "file": "contentscript.js"
	        }, function () {
	            console.log("onUpdated script executed...");
	        });
	    }
	});
});

chrome.tabs.onActivated.addListener(function(tabId, changeinfo, tab){
	chrome.tabs.getSelected(null, function(tab){
		if (tab.url.indexOf("github") != -1) {
	        chrome.tabs.executeScript(tab.id, {
	            "file": "contentscript.js"
	        }, function () {
	            console.log("onActivated script executed...");
	        });
	    }
	});
});

chrome.browserAction.onClicked.addListener(function (tab) {
    if (tab.url.indexOf("github") != -1) {
        chrome.tabs.executeScript(tab.id, {
            "file": "contentscript.js"
        }, function () {
            console.log("onClicked script executed...");
        });
    } else {
		alert("Please navigate to GitHub prior to clicking on this button.\r\n\r\n" + tab.url);
    }
});