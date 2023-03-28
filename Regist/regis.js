const wrapper = document.querySelector(".wrapper")
const signupHeader = document.querySelector(".signup header")
const loginHeader = document.querySelector(".Login header")

loginHeader.addEventListener("click", () => {
    wrapper.classList.add("active");
})

signupHeader.addEventListener("click", () => {
    wrapper.classList.remove("active");
})

// *****************************************


const inputText = document.getElementById("inputText")
const inputPassword = document.getElementById("inputPassword")
const inputNumber = document.getElementById("inputNumber")
const inputEmail = document.getElementById("inputEmail")
const inputGenderMale = document.getElementById("inputRadioMale")
const inputGenderFemale = document.getElementById("inputRadioFemale")
const buttonSubmit = document.getElementById("buttonSubmit")
const divError = document.getElementById("divError")

const asynchronous = document.getElementById("asynchronous")

// console.log("11")
                                      //event -> take the event
                                      //--> click
buttonSubmit.addEventListener("click", (event)=>{
        event.preventDefault();

        var errorText = "";
        
        //Name validation
        //-> must contain 2 words
        //--> must contain " "
        const text = inputText.value

        // console.log(text)

        if(!text.includes(' '))
        {
            errorText = "Name must be 2 words!"
            // console.log("Name must be 2 words!")
        }

        //Password validation
        //-> must contain minimal 8 characters
        const password = inputPassword.value

        if(password.length <= 8)
        {
            errorText = "Password must be at least 8 characters long!"
        }

        //Age validation
        //-> must be numeric
        //-> minimal 17
        const age = inputNumber.value

        if(age < 17)
        {
            errorText = "You should be minimal 17 years old!"
        }

        //Email validation
        //-> must contain @gmail.com
        const email = inputEmail.value

        if(!email.includes("@gmail.com") || email.length <= 10)
        {
            errorText = "Email should end with @gmail.com!"
        }

        //Gender Validation
        //-> must be clicked/filled
        const male = inputGenderMale.checked
        const female = inputGenderFemale.checked

        if(!male && !female)
        {
            errorText = "Gender must be filled!"
        }

        if(errorText == "")
        {
            const a = prompt("Yeay")
            if(a == 1) alert("Login Successful!")
        }

        divError.innerText = errorText
    }
)