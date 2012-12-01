  localStorage['enabled'] = 'true';
  chrome.browserAction.onClicked.addListener(function(tab) {    
    if (localStorage['enabled'] == 'true') {
      localStorage['enabled'] = 'false';
      chrome.browserAction.setIcon({path: 'Mustachio19disabled.png'});
    } else {
      localStorage['enabled'] = 'true'
      chrome.browserAction.setIcon({path: 'Mustachio19enabled.png'});
    }
    console.log("toggled to " + localStorage['enabled']);
  });
  
  chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
      if (request.method == "isEnabled")
        sendResponse({enabled: localStorage['enabled']});
      else
        sendResponse({});
  });
