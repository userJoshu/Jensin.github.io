const toggleButton = document.querySelector('.toggleButton')
const toggleButtonLine = document.querySelector('.toggleButton line')
const dropdown = document.querySelector('.dropdown')

const line1 = document.querySelector('#line1')
const line2 = document.querySelector('#line2')
const line3 = document.querySelector('#line3')


toggleButton.onclick = function (){
    dropdown.classList.toggle('open')
    const isOpen = dropdown.classList.contains('open')

    // toggleButtonLine.classList = isOpen 


}

toggleButton.addEventListener("click", () => {
    line1.classList.toggle("animationLine1");

    line2.classList.toggle("animationLine2");

    line3.classList.toggle("animationLine3");
})

