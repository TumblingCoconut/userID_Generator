// Define webpage components
let img = document.getElementById("photo");
let personName = document.getElementById("name");
let gender = document.getElementById("gender");
let birth = document.getElementById("birth");
let age = document.getElementById("age");
let address = document.getElementById("address");
let email = document.getElementById("email");
let randomBtn = document.getElementById("random");
let phone = document.getElementById("phone")

function randomPerson(){
    // Random number generator
    let num = Math.floor(Math.random() * dataObj.results.length);
    let person = dataObj.results[num]

    // Update components
    img.src = person.picture.large;
    
    let fullName = `${person.name.first}  ${person.name.last}`;
    personName.innerText = fullName;
    
    gender.innerText = `Gender: ${person.gender}`;

    // Index only year, month, date 
    birth.innerText = `DOB: ${(person.dob.date).slice(0, 9)}`;
    age.innerText = `Age: ${person.dob.age}`;

    // # street, city, state, country, postcode
    address.innerText = `Address: ${person.location.street.number} ${person.location.street.name}, 
                        \n${person.location.city}, ${person.location.state}, ${person.location.country}, 
                        ${person.location.postcode}`
    email.innerText = `Email: ${person.email}`;
    phone.innerText = `Phone: ${person.phone}`;
}


randomBtn.addEventListener("click", randomPerson);