$(function() {
  $('img').each(function(i,e) {
    var originalImage = e.src;
    if (!originalImage) return;
    var newImage = "http://mustachy.heroku.com/?src=" + originalImage;
    $.get(newImage, function() {
      $(e).attr('src', newImage);
    })
  })
})