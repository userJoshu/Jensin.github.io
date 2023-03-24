const wrapper = document.querySelector(".wrapper")
const signUpHeader = document.querySelector(".signUp header")
const LoginHeader = document.querySelector(".Login header")


LoginHeader.addEventListener("click",() => {
    wrapper.classList.add("active");
})

signUpHeader.addEventListener("click",() => {
    wrapper.classList.remove("active");
})
