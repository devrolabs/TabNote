document.addEventListener('DOMContentLoaded', function() {

    if (localStorage.getItem('default')) {
        $('#family').val(localStorage.getItem('family'));
        $('#size').val(localStorage.getItem('size'));
        $('#color').val(localStorage.getItem('color'));
        $('#bg-color').val(localStorage.getItem('bg_color'));
        $('#bold').val(localStorage.getItem('bold'));
        $("#spell").prop('checked', localStorage.getItem('spell'));
    }

    let open = document.getElementById('open');
    open.addEventListener('click', function() {
        let family = $('#family').val();
        localStorage.setItem('family', family);

        let size = $('#size').val();
        localStorage.setItem('size', size);

        let color = $('#color').val();
        localStorage.setItem('color', color);

        let bg_color = $('#bg-color').val();
        localStorage.setItem('bg_color', bg_color);

        let bold = $('#bold').val();
        localStorage.setItem('bold', bold);

        let spell = $("#spell")[0].checked;
        localStorage.setItem('spell', spell);

        let url = 'data:text/html;charset=utf-8, <title> TabNote </title><body contenteditable style="font-family:'+ family +';font-weight:'+ bold +';background:'+ bg_color +';color:'+ color +';font-size:'+ size +';line-height:1.6;max-width:80rem;margin:0 auto;padding:2rem;" spellcheck="'+ spell +'">';
        url = encodeURI(url);
        chrome.windows.create(
            {'url': url, 'type': 'popup', 'focused': true, height: 600, width: 1000},
            function(chromeWindow) {
                localStorage.setItem('default', true);
            });
    });

    $('.simple-color-picker').colorpicker();

    let devro = document.getElementById('devro');
    devro.addEventListener('click', function() {
        let newURL = "https://devrolabs.com/";
        chrome.tabs.create({ url: newURL });
    });
}, false);