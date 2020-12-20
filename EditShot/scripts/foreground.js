const makeAllEditable = function () {
    let allTags = document.getElementsByTagName("*");
    
    for (i = 0; i < allTags.length; i++){
        allTags[i].setAttribute("contenteditable", "true");
    };
}

const disableAllLinks = function () {
    let hrefs = document.getElementsByTagName("a");

    for (i = 0; i < hrefs.length; i++) {
        hrefs[i].removeAttribute("href");
    }
}

const exportToJpeg = function (canvas) {
    const target = document.createElement('a');
    target.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
    target.download = 'screenshot.jpg';
    target.click();
}

const captureVisible = function() {
    html2canvas(document.querySelector("body")).then(canvas => {
        exportToJpeg(canvas)
    })
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if(message === 'MAKE_ALL_EDITABLE'){
        makeAllEditable();
        disableAllLinks();
    }
    else if(message === 'CAPTURE_SCREEN'){
        console.log("Reached")
        captureVisible();
    }
})