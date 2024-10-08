﻿export function addEvent(element) {
    if (isInView(element)) {
        element.classList.add("view");
    }

    document.addEventListener("scroll", e => {
        if (isInView(element)) {
            element.classList.add("view");
        }
        else {
            element.classList.remove("view");
        }
    })
}

function isInView(el) {
    var rect = el.getBoundingClientRect(),
        vWidth = window.innerWidth || document.documentElement.clientWidth,
        vHeight = window.innerHeight || document.documentElement.clientHeight,
        efp = function (x, y) { return document.elementFromPoint(x, y) };

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0
        || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
        el.contains(efp(rect.left, rect.top))
        || el.contains(efp(rect.right, rect.top))
        || el.contains(efp(rect.right, rect.bottom))
        || el.contains(efp(rect.left, rect.bottom))
    );
}
