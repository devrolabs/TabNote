chrome.browserAction.onClicked.addListener(function(tab) {

    if (!localStorage.getItem('customized')) {
        localStorage.setItem('family', 'Arial');
        localStorage.setItem('size', '16');
        localStorage.setItem('color', '#000000');
        localStorage.setItem('bg_color', '#ffffff');
        localStorage.setItem('bold', 'normal');
        localStorage.setItem('spell', 'false');

        localStorage.setItem('customized', 'true');
    }

    let family = localStorage.getItem('family');
    let size = localStorage.getItem('size');
    let color = localStorage.getItem('color');
    let bg_color = localStorage.getItem('bg_color');
    let bold = localStorage.getItem('bold');
    let spell = JSON.parse(localStorage.getItem('spell'));

    let url = 'data:text/html;charset=utf-8, <title> TabNote </title><body contenteditable style="font-family:'+ family +';font-weight:'+ bold +';background:'+ bg_color +';color:'+ color +';font-size:'+ size +';line-height:1.6;max-width:80rem;margin:0 auto;padding:2rem;" spellcheck="'+ spell +'">';
    url = encodeURI(url);

    chrome.windows.create(
        {'url': url, 'type': 'popup', 'focused': true, height: 600, width: 1000},
        function(chromeWindow) {
        });
});