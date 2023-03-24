const wrapper = document.querySelector(".wrapper")
const signupHeader = document.querySelector(".signup header")
const loginHeader = document.querySelector(".Login header")

loginHeader.addEventListener("click", () => {
    wrapper.classList.add("active");
})

signupHeader.addEventListener("click", () => {
    wrapper.classList.remove("active");
})