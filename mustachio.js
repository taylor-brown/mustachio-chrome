$(function() {
  $('img').each(function(i,e) {
    chrome.extension.sendRequest({method: "isEnabled"}, function(response) {
      if (response.enabled == 'true') {
        console.log('enabled');
      } else {
        console.log("disabled");
        return;
      }
      var originalImage = e.src;
      if (!originalImage) return;
      var newImage = "http://mustachy.heroku.com/?src=" + originalImage;
      $.get(newImage, function() {
        $(e).attr('src', newImage);
      })      
    });    
  });
})