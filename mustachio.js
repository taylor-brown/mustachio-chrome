$(function() {
  $('img').each(function(i,e) {
    var originalImage = e.src;
    if (!originalImage) return;
    var newImage = "http://mustachy.herokuapp.com/" + originalImage;
    $.get(newImage, function() {
      $(e).attr('src', newImage);
    })
  })
})