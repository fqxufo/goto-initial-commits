var _wr = function (type) {
    var orig = history[type];
    return function () {
        var rv = orig.apply(this, arguments);
        var e = new Event(type);
        e.arguments = arguments;
        window.dispatchEvent(e);
        return rv;
    };
};
history.pushState = _wr('pushState'), history.replaceState = _wr('replaceState');

function getRepoName() {

    let repoAnchor = document.querySelector('a[data-pjax="#js-repo-pjax-container"]');
    let repoName = null;
    if (repoAnchor) {
        repoName = repoAnchor.pathname;
        console.log(`repoName : ${repoName}`);
    }

    return repoName;

}

function getCommitsNum() {
    let commitsNumSpan = document.querySelector('li.commits > a > span');
    let commitsNum = null;
    if (commitsNumSpan) {
        commitsNum = parseInt(commitsNumSpan.textContent.replace(',', ''));
        console.log(`commitsNum: ${commitsNum}`);
    }

    return commitsNum;

}


function appendInitialButton(repoName) {
    let buttons = document.querySelectorAll('div.paginate-container > div > a');
    let olderButton = null;


    let commitsNum = sessionStorage.getItem(repoName);


    if (buttons.length > 0) {
        olderButton = [...buttons].filter(button => button.innerText == 'Older')[0];
    }


    if (olderButton && commitsNum) {
        console.log(`olderButton: ${olderButton}`);
        let baseUrl = olderButton.href.split('+')[0];


        let htmlText = `<a rel="nofollow" class="btn btn-outline BtnGroup-item" href="${baseUrl}+${commitsNum - 11}">initial</a>`
        olderButton.insertAdjacentHTML('afterend', htmlText);
    }


}

function scMainwork() {
    let repoName = getRepoName();
    let commitsNum = getCommitsNum();

    if (repoName && commitsNum) {
        sessionStorage.setItem(repoName, commitsNum);
    }

    if (repoName) {
        appendInitialButton(repoName);
    }

}


window.addEventListener('replaceState', function (e) {
    setTimeout(scMainwork, 500);
});

scMainwork();



