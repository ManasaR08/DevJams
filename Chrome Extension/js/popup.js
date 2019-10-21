let url;
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    url=tabs[0].url;
    setTimeout(() => {
        let rev1=3.5*20;
        let rev2=2.5*20;
        document.getElementsByClassName('preloader-enc')[0].style.display = 'none';
        document.getElementsByClassName('score-enc')[0].style.display='block';
        document.getElementsByClassName('trating')[0].style.width=`${rev1}%`
        document.getElementsByClassName('orating')[0].style.width=`${rev2}%`
    },1000);    
});
document.getElementById('navigate').addEventListener('click', ()=>{
    chrome.tabs.create({url:`http://localhost:5000/result?page=${url}`});
    window.close();
});