$(function() {
  $('img').each(function(i,e) {
    var originalImage = e.src;
    if (!originalImage) return;
    var newImage = "http://mustachio.heroku.com/?src=" + originalImage;
    $.get(newImage, function() {
      $(e).attr('src', newImage);
    })
  })
})