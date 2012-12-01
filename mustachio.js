$(function () {
    var mustache = '<svg xmlns="http://www.w3.org/2000/svg" width="744.09003" height="1052.36"><g transform="translate(0,546)"><path d="m647,139l-1,0l0,1l-1,0l0,0l0,1l0,0l0,0l-1,0l0,0l0,1l-1,0l0,0l0,1l-2,0l-1,0l0,-1l1,-1l0,-1l0,-1l1,0l0,0l0,-1l1,0l0,0l0,-1l0,0l0,0l1,-1l1,-1l0,0l0,0l0,-1q0,0 3,-2q2,-3 10,-7q8,-4 17,-4q10,0 16,3q7,3 15,9q7,6 14,15q7,9 10,19q3,11 3,22q0,12 -3,22q-3,11 -11,22q-6,11 -14,18q-8,7 -21,14q-13,8 -30,12q-17,6 -37,8q-19,2 -44,0q-26,0 -54,-6q-28,-6 -52,-14q-24,-8 -42,-18q-17,-10 -26,-18q-10,-8 -12,-9q-2,-1 -6,2q-3,3 -16,13q-13,10 -31,18q-18,8 -43,16q-24,8 -54,13q-30,5 -50,6q-19,1 -28,-1q-9,0 -28,-5q-20,-5 -34,-11q-13,-6 -22,-12q-9,-8 -16,-17q-8,-10 -12,-22q-4,-12 -5,-25q-1,-12 1,-20q2,-7 6,-17q6,-10 9,-13q4,-4 4,-5q0,-1 2,-2q2,-1 11,-6q9,-5 20,-5q12,0 20,3l8,3l0,1l0,0l1,0l0,1l0,0l1,0l0,0l0,0l1,1l1,1l0,0l0,0l1,0l0,0l0,1l1,0l0,1l0,1l-2,0l-3,-1l-1,0l-1,0l0,-1l-1,0l0,0l0,-1l-4,0q-3,-2 -11,-1q-8,1 -14,5q-5,5 -9,12q-4,7 -4,20q0,14 4,19q3,5 8,8q5,3 14,3q10,0 24,-6q15,-6 38,-19q24,-13 47,-27q24,-14 41,-22q18,-8 30,-10q13,-4 29,-3q16,1 31,5q15,6 26,13q12,7 13,8q1,1 12,-7q11,-8 26,-12q15,-6 22,-6q7,-2 25,-1q18,1 32,4q13,3 32,13q19,10 55,34q36,24 49,28q12,6 23,6q11,0 19,-4q8,-4 12,-8q4,-5 4,-17q0,-12 -4,-19q-4,-7 -9,-12q-5,-4 -9,-6q-5,-2 -12,-2q-6,0 -10,3q-3,3 -4,3z" stroke-width="4" stroke="#020202" fill-rule="evenodd" fill="#000000" id="svg_2"/></g></svg>';
    chrome.extension.sendRequest({method: "isEnabled"}, function (response) {
        if (response.enabled != 'true') {
            return;
        }
	
        var id = 0;
        $.fn.highlight = function (rect, color) {
            id++;
            var canvasId = "mustache" + id;
            var canvas = $('<canvas />', {
                "id": canvasId,
                "css": {
                    "border": "none",
                    "position": "absolute",
                    "left": ($(this).offset().left + rect[0]) + "px",
                    "top": ($(this).offset().top + rect[1]) + "px",
                    "width": rect[2] + "px",
                    "height": rect[3] + "px"
                }
            });
            canvas.attr('height', rect[3]).attr('width', rect[2]);
            canvas.appendTo("body");
            var sameCanvas = document.getElementById(canvasId);
            sameCanvas.getContext('2d').drawSvg(mustache, 0,0,rect[2], rect[3]);
        };
            $(function () {
                $('img:visible').each(function (i, e) {
		  if($(this).width() < 30 || $(this).height() < 30) return;
                    $(this).objectdetect("all", {classifier: objectdetect.frontalface},
                            function (faces) {
                                for (var i = 0; i < faces.length; ++i) {
                                    $(this).highlight(faces[i], "red");
                                }
                            });
                });
            })
    });
});
