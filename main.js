let loadMore = document.querySelector('#load-more');
let currenImg=3;
loadMore.onclick =()=>{
    let boxes =[...document.querySelectorAll('.container .box-container .box')];
    for (var i=currenImg; i < currenImg + 2; i++){
        boxes[i].style.display='inline-block';
    }
    currenImg+=2;
    if(currenImg>=boxes.length){
        loadMore.style.display='none';
    }
}