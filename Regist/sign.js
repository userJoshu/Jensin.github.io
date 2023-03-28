const wrapper = document.querySelector(".wrapper")
const signUpHeader = document.querySelector(".signUp header")
const LoginHeader = document.querySelector(".Login header")


LoginHeader.addEventListener("click",() => {
    wrapper.classList.add("active");
})

signUpHeader.addEventListener("click",() => {
    wrapper.classList.remove("active");
})


//Open Login
function openLogin(){
    wrapper.classList.add("active");
}

//Open Signup
function openSignup(){
    wrapper.classList.remove("active");
}

//Close Popup
function closePopup(){
    popup.classList.remove("open-popup");
}


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

        let popup = document.getElementById("popup");

        var errorText = "";

        // OPEN POPUP ***************************************
        function openPopup(){
            popup.classList.add("open-popup");
        }

        // //Password validation
        // //-> must contain minimal 8 characters
        // const cPassword = confirmPassword.value

        // if(cPassword != password)
        // {
        //     errorText = "Password does not match!"
        // }

        //Password validation
        //-> must contain minimal 8 characters
        const password = inputPassword.value

        if(password.length < 8)
        {
            errorText = "Password must be at least 8 characters long!"
        }

        //Password validation
        //-> must contain minimal 8 characters
        const cPassword = confirmPassword.value

        if(cPassword != password)
        {
            errorText = "Password does not match!"
        }


        //Age validation
        //-> must be numeric
        //-> minimal 13
        const age = inputNumber.value

        if(age < 13)
        {
            errorText = "You should be minimal 13 years old!"
        }

                
        //Email validation
        //-> must contain @gmail.com
        const email = inputEmail.value

        if(!email.includes("@gmail.com") || email.length <= 10)
        {
            errorText = "Email should end with @gmail.com!"
        }


        // ***********
        // var errorText = "";
        
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

           //Gender Validation
        //-> must be clicked/filled
        // const male = inputGenderMale.checked
        // const female = inputGenderFemale.checked
        
        // if(!male && !female)
        // {
            //     errorText = "Gender must be filled!"
            // }
            
            if(errorText == "")
            {
                openPopup();
            }

        divError.innerText = errorText
    }
)




