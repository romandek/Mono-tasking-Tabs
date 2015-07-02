chrome.tabs.onCreated.addListener(function(tab) {
	tabOpen(tab);
});

chrome.windows.onCreated.addListener(function(win) {
	winOpen(win);
});


function tabOpen(tab){
	var permitted_urls = ["^(chrome:\/+\/+)/", "^(chrome-extension:\/+\/+)"];
	var remove_id = tab.id;
	var no_tabs = localStorage["no_tabs"]; //from settings
	chrome.tabs.query({currentWindow:true, pinned:false}, function(tabs) {
		var no_of_opentabs = 0;// = tabs.length;
		var i = 0;
		var url = "";
		for(i=0;i<tabs.length;i++)
		{
			url = tabs[i].url;
			if (url.match("^(http:\/+\/+)") || url.match("^(https:\/+\/+)") || url.match("^(chrome:\/\/newtab)"))
			{
				no_of_opentabs++;
			}
		}
		if(no_of_opentabs > no_tabs){
			chrome.tabs.remove(remove_id);
			alert('Ooops... Looks like you\'re trying to do too much at a time. Be productive and close some TABS :)');			
		}
  	});
}

function winOpen(win){
	var remove_id = win.id;
	var no_wins = localStorage["no_wins"]; //from settings
	chrome.windows.getAll({populate:true}, function(wins) {
   		var no_windows= wins.length;
		if(no_windows > no_wins){
			chrome.windows.remove(remove_id);
			alert('Ooops... Looks like you\'re trying to do too much at a time. Be productive and close some WINDOWS :)');			
		}
  	});
}