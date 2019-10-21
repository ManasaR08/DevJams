let url;
browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
    url=tabs[0].url;
    let urlParams = new URLSearchParams(url);
    id=urlParams.get('item').split('/')[4];
    let xhttp=new XMLHttpRequest();
    xhttp.open('GET',`http://localhost:2000/details?id=${id}`,false)
    xhttp.onreadystatechange = () => {
        if(xhttp.readyState==4 && xhttp.status == 200) {
            try {
                let x = JSON.parse(xhttp.responseText);
                document.getElementsByClassName('preloader-enc')[0].style.display = 'none';
                document.getElementsByClassName('score-enc')[0].style.display='block';
                document.getElementsByClassName('trating')[0].style.width=`${x.ratingold*20}%`;
                document.getElementsByClassName('orating')[0].style.width=`${x.newrating*20}%`;
            } catch(err){ 
                console.log(err);
            }
        } else if(xhttp.readyState==4 && xhttp.status != 200) {
        }
    }
    xhttp.send();
});
document.getElementById('navigate').addEventListener('click', ()=>{
    browser.tabs.create({url:`http://localhost:5000/result?page=${url}`});
    window.close();
});