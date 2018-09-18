document.addEventListener('DOMContentLoaded', function() {
    let open = document.getElementById('open');
    open.addEventListener('click', function() {
        let family = $('#family').val();
        let size = $('#size').val();
        let color = $('#color').val();
        let bg_color = $('#bg-color').val();
        let bold = $('#bold').val();
        let spell = $("#spell")[0].checked;
        let url = 'data:text/html;charset=utf-8, <title> TabNote </title><body contenteditable style="font-family:'+ family +';font-weight:'+ bold +';background:'+ bg_color +';color:'+ color +';font-size:'+ size +';line-height:1.6;max-width:80rem;margin:0 auto;padding:2rem;" spellcheck="'+ spell +'">';
        url = encodeURI(url);
        chrome.windows.create(
            {'url': url, 'type': 'popup', 'focused': true, height: 600, width: 1000},
            function(chromeWindow) {

            });
    });

    $('.simple-color-picker').colorpicker();

    let devro = document.getElementById('devro');
    devro.addEventListener('click', function() {
        let newURL = "https://devrolabs.com/";
        chrome.tabs.create({ url: newURL });
    });
}, false);