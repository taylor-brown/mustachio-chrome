$(function () {
    chrome.extension.sendRequest({method: "isEnabled"}, function (response) {
        if (response.enabled != 'true') {
            return;
        }
        var id = 0;
        var imgUrl = chrome.extension.getURL("goldenMustacheSquare.png");
        $.fn.highlight = function (rect, color) {
            id++;
            var canvas = $('<canvas />', {
                "id": "mustache" + id,
                "css": {
                    "border": "none",
                    //"border":   "2px solid " + color,
                    "position": "absolute",
                    "left": ($(this).offset().left + rect[0]) + "px",
                    "top": ($(this).offset().top + rect[1]) + "px",
                    "width": rect[2] + "px",
                    "height": rect[3] + "px"
                }
            });
            canvas.attr('height', rect[3]).attr('width', rect[2]);
            canvas.appendTo("body");
            var img = new Image();
            img.onload = function () {
                canvas[0].getContext("2d").drawImage(img, 0, 0, rect[2], rect[3]);
            };
            img.src = imgUrl;

        };
        $(window).load(function () {
            $(function () {
                $('img:visible').each(function (i, e) {
                    $(this).objectdetect("all", {classifier: objectdetect.frontalface},
                            function (faces) {
                                console.log(faces);
                                for (var i = 0; i < faces.length; ++i) {
                                    $(this).highlight(faces[i], "red");
                                }
                                alert('test2')
                            });
                });
            })
        })
    })
});