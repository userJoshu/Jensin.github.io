// var img = document.getElementById("imgMapChange");

// europeButton addEventListener("click", function (){

//     img.src = ('../assets/Maps/europeMaps.png');

// })

function changeImg(fileName){
    let img = document.querySelector("#imgMapChange");
    img.setAttribute("src", fileName);
}

function changeDesc(changeMapTitle, changeMapDesc01, changeMapDesc02){
    var title = document.querySelector('h2');
    title.innerHTML = changeMapTitle;
    
    var desc01 = document.querySelector('#desc01');
    desc01.innerHTML = changeMapDesc01;

    var desc02 = document.querySelector('#desc02');
    desc02.innerHTML = changeMapDesc02;
    
}
