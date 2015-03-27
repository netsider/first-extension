
//document.writeln('<font color="blue">' + 'Have a nice day!</font>');
//document.writeln("AHHHHHH!");

window.addEventListener("load", windowLoaded, false);

function windowLoaded() {

    var R = document.documentElement.outerHTML; // Gets Content of Page
	var TAB = document.all[0].innerText;
	HTML = document.body.outerHTML; // Get Full HTML
	TEXT = document.body.innerHTML; // Get Text
	//	S = tabs.Tab;
	theseTabs = new Array();
	//T = chome.tabs.getAllInWindow(function getTabs(theseTabs)); // DEPRECATED
	
var fourmTabs = new Array();
chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
        fourmTabs[i] = tabs[i];
    }
    // Moved code inside the callback handler
    for (var i = 0; i < fourmTabs.length; i++) {
        if (fourmTabs[i] != null)
           window.console.log(fourmTabs[i].url);
        else {
            window.console.log("??" + i);
        }
    }
});

	//alert(R);
	//document.writeln('<font color="red">' + R + '</font>');
	
	//var targetDiv = document.getElementById('ONE');
	//targetDiv.appendChild(document.createTextNode(R));
	
	//var targetDiv2 = document.getElementById('TWO');
	//targetDiv2.appendChild(document.createTextNode(TAB));
	
	//console.log(HTML);
	//console.log(TEXT);
	//console.log(R);
	//console.log(TAB);
	alert(JSON.stringify(fourmTabs));



	
	
}