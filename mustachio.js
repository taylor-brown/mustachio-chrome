$(function() {
  $('img:visible').each(function(i,e) {
    if ($(this).width() * $(this).height() < 45000) return;
    chrome.extension.sendRequest({method: "isEnabled"}, function(response) {
      if (response.enabled != 'true') {
        return;
      }
      var originalImage = e.src;
      if (!originalImage) return;
      var newImage = "http://mustachify.me/?src=" + originalImage;
      $.get(newImage, function() {
        $(e).attr('src', newImage);
      })      
    });    
  });
})