document.addEventListener('DOMContentLoaded', function () {

    var headID = document.getElementsByTagName("head")[0];
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = chrome.extension.getURL('sc.js');
    headID.appendChild(newScript);

});






