const toggleButton = document.querySelector('.toggleButton')
const toggleButtonLine = document.querySelector('.toggleButton line')
const dropdown = document.querySelector('.dropdown')

toggleButton.onclick = function (){
    dropdown.classList.toggle('open')
    const isOpen = dropdown.classList.contains('open')

    toggleButtonLine.classList = isOpen 
        

}