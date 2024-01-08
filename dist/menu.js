"use strict";
document.addEventListener("DOMContentLoaded", nav_vert_init);
function nav_vert_init() {
    var nav_vert = document.querySelector("nav-vert");
    if (nav_vert == null) {
        console.log("no nav-vert :(");
        return;
    }
    else {
        nav_vert.addEventListener("load", nav_vert_init);
    }
    var nav_items = nav_vert.querySelectorAll("nav-item");
    var _loop_1 = function (i) {
        var nav_item = nav_items[i];
        nav_item.addEventListener("click", function () {
            var alreadyCurrent = nav_vert === null || nav_vert === void 0 ? void 0 : nav_vert.querySelectorAll(".current");
            alreadyCurrent === null || alreadyCurrent === void 0 ? void 0 : alreadyCurrent.forEach(function (current) {
                current.classList.remove("current");
            });
            nav_item.classList.add("current");
        });
    };
    for (var i = 0; i < nav_items.length; i++) {
        _loop_1(i);
    }
}
