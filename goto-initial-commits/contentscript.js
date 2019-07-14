// function getRepoName(){

// let repoAnchor = document.querySelector('a[data-pjax="#js-repo-pjax-container"]');
// let repoName = null;
// if (repoAnchor) {
//     repoName = repoAnchor.pathname;
//     console.log(`repoName : ${repoName}`);
// }

// return repoName;

// }

// function getCommitsNum(){
//     let commitsNumSpan = document.querySelector('li.commits > a > span');
//     let commitsNum = null;
//     if (commitsNumSpan) {
//         commitsNum = parseInt(commitsNumSpan.textContent.replace(',',''));
//         console.log(`commitsNum: ${commitsNum}`);
//     }

//     return commitsNum;

// }


// function appendInitialButton(){
//     let buttons = document.querySelectorAll('div.paginate-container > div > a');
//     let olderButton = null;
//     console.log(buttons);

//     if (buttons.length > 0) {
//         olderButton = [...buttons].filter(button => button.innerText == 'Older')[0];
//     } 

//     if (olderButton) {
//         console.log(olderButton);
//     }


// }

document.addEventListener('DOMContentLoaded', function () {
    // let repoName = getRepoName();
    // let commitsNum = getCommitsNum();

    // if (repoName && commitsNum) {
    //     sessionStorage.setItem(repoName,commitsNum);
    // }

    // appendInitialButton();




    var headID = document.getElementsByTagName("head")[0];
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = chrome.extension.getURL('sc.js');
    headID.appendChild(newScript);

});






