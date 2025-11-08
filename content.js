var curEl;
var enabeScrollResize = false;

document.addEventListener("mousedown", function(event){
    curEl = event.target;
    enabeScrollResize = false;
    let prevEl = document.querySelector(".scroll-resize-cur-el")
    if (prevEl) {
        prevEl.classList.remove("scroll-resize-cur-el");
    }
}, true);

function ScrollOnResize(e) {
    if (curEl && enabeScrollResize) {
        curEl.scrollIntoView({ block: "center", inline: "nearest" });
    }
}

window.addEventListener("resize", ScrollOnResize);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.text == "getClickedEl") {
       enabeScrollResize = true;
        let prevEl = document.querySelector(".scroll-resize-cur-el")
        if (prevEl) {
            prevEl.classList.remove("scroll-resize-cur-el");
        }
        curEl.classList.add("scroll-resize-cur-el");
    }
});