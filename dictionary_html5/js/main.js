// console.log('.');
/****** gnb tab menu ******/
// 변수선언
const tabLink = document.querySelectorAll(".tab_menu li");
const tabContent = document.querySelectorAll(".tab_content");

tabLink[0].firstChild.classList.add("active");
// let tabLink_fst = tabLink[0].firstChild;
// console.log(tabLink_fst);
tabContent[0].style.display="block";

for(let i=0; i<tabLink.length; i++){

    tabLink[i].firstChild.addEventListener("click",function(e){
        e.preventDefault(); // a tag reset

        // tab content
        let originTarget = e.target.getAttribute("href"); // console.log(originTarget);
        let tabTarget = originTarget.replace("#", ''); // console.log(tabTarget);
        for(let j=0; j<tabContent.length; j++){
            tabContent[j].style.display="none";
        }
        document.getElementById(tabTarget).style.display="block";

        // tab link active
        for(let k=0; k<tabLink.length; k++){
            tabLink[k].firstChild.classList.remove("active");
            e.target.classList.add("active");
        }
    });
}


/****** top button ******/

// 변수 선언
const topBtn = document.getElementById("top");
// console.log(topBtn);

let docElem = document.documentElement;
let offset,
    scrollPos,
    docHeight; 

docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

if(docHeight != "undefined"){ 
    offset = docHeight/50;
}

// scroll event - visible
window.addEventListener("scroll",function(){
    //스크롤양 실시간 확인
    scrollPos = docElem.scrollTop;
    // console.log(scrollPos);

    if(scrollPos > offset){
        topBtn.classList.add("visible");
        // console.log('o');
    }else{
        topBtn.classList.remove("visible");
        // console.log('x');
    }   
});

// click event - scroll to top function
// 스크롤 할 때 반복
function scrollToTop(){

    let scrollInterval = setInterval(function(){
        if(scrollPos!=0){
            window.scrollBy(0,-50);
        }else{
            clearInterval(scrollInterval);
        }
    },10);
}




/********** aside *********/
