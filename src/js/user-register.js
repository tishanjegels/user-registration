/* ----------------------------------------------------
    Setup
---------------------------------------------------- */

/* --- Tab References --- */

// Get reference to all elements in register tab
const registerTab = document.getElementsByClassName("register");
console.log(registerTab);

// Get reference to all elements in userList tab
const userTabs = document.getElementsByClassName("users");
console.log(userTabs);


/* --- Nav references --- */

// code here...


/* --- Form field references --- */

let Fname = document.getElementById("firstname").value;
let Lname = document.getElementById("lastname").value;
let Uname = document.getElementById("username").value;
let Uemail = document.getElementById("email").value;
let Upassword = document.getElementById("password").value;


// view user list tab onclick

function GetList() {

    //update the dispaly property of first element

    userTabs[0].style.display = 'block';

    // update dispaly property for all elements in nodelist

    for (const element of userTabs) {
        element.style.display = 'block';

    }
}

//hide all other elements when user clicks "register user"


const register = document.getElementById("users-tab-button");

register.addEventListener('click', () => {

    //use arrayForm to conver it to an array

    const users = Array.from(userTabs)

    users.forEach(user => {

        //remove element from DOM

        user.style.display = "none"

    })

});


//initialize an empty array

const users = []


function createUser() {

    const newUser = {

        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',

    }

    newUser.push(users);
}

function createUserElement(user) {

    let F_Name = document.createElement("span")
    let L_Name = document.createElement("span")
    let U_Name = document.createElement("span")
    let U_Email = document.createElement("span")
    let U_Password = document.createElement("span")

    const { firstname, lastname, username, email, password } = user;

    firstname = document.createTextNode(Fname);
    lastname = document.createTextNode(Lname);
    username = document.createTextNode(Uname);
    email = document.createTextNode(email);
    password = document.createTextNode(password);

    F_Name.appendChild(firstname)
    L_Name.appendChild(lastname)
    U_Name.appendChild(username)
    U_Email.appendChild(email)
    U_Password.appendChild(password)

    return user;


}

function populateUserList() {

    for(let i = 0; i<users.lenght;i++){
       
        console.log(users[i]);

        createUserElement(users);
    }

}


const submit = document.querySelector("#register-submit")
const form = document.querySelector("#register-form")

submit.addEventListener("click", (e) => {

    //prevent form from submitting

    e.preventDefault()

    createUserElement()


    //show the form value from input

    const formData = new FormData(form)
    const values = [...formData.entries()];

    console.log(values);

})