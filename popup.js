document.addEventListener('DOMContentLoaded', function() {
    let trigger = document.getElementById('trigger');
    trigger.addEventListener('click', function() {
        let info = [$('#url').val(), $('#count').val(), $("#async")[0].checked];
        chrome.runtime.sendMessage({type: "trigger", message: info}, function (response) {});
    });

    $('.simple-color-picker').colorpicker();

    let devro = document.getElementById('devro');
    devro.addEventListener('click', function() {
        let newURL = "https://devrolabs.com/";
        chrome.tabs.create({ url: newURL });
    });
}, false);