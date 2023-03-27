const allItems = document.querySelectorAll('.newMapsNav ul li a');

allItems.forEach(item => {
    item.addEventListener('click', function(e) {
        for(var i = 0; i < allItems.length; i++){
            allItems[i].classList.remove("active");}

            this.classList.add("active");
    });
});


function changeImg(fileName){
    let img = document.querySelector("#imgMapChange");
    img.setAttribute("src", fileName);
}