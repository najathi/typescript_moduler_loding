System.register(["./Math/circle.js", "./Math/rectangle.js"], function (exports_1, context_1) {
    "use strict";
    var circle_js_1, rectangle_js_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (circle_js_1_1) {
                circle_js_1 = circle_js_1_1;
            },
            function (rectangle_js_1_1) {
                rectangle_js_1 = rectangle_js_1_1;
            }
        ],
        execute: function () {
            console.log(circle_js_1.PI);
            console.log(circle_js_1.calculateCircumference(7));
            console.log(rectangle_js_1.calculateRectangle(10, 15));
        }
    };
});
