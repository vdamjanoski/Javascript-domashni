const nameInput = document.getElementById("nameInput");
const nameInputError = document.getElementById("nameInputError");
const password = document.getElementById("password");
const age = document.getElementById("age");
const lastnameInput = document.getElementById("lastnameInput");
const emailInput = document.getElementById("emailInput");
const ageInputError = document.getElementById("ageIsAdult");


const studentTable = document.getElementById("studentTable");


function validateForm() {
  if (nameInput.value.length < 6) {
    nameInputError.innerText = "Name must be longer than 6 letters";
    return false;
  }
  nameInputError.innerText = "";
  return true;
}
const emptyInput1=document.getElementById("passwordInputError")
const emptyInput2=document.getElementById("lastnameInputError")
const emptyInput3=document.getElementById("emailInputError")
 
  function checkPassword(){
    if (password.value==""){
      emptyInput1.innerText="This field is empty!"
      return false;
    }else{
      emptyInput1.innerText=""
      return true;
    }
  }
  function checkLastName(){
    if (lastnameInput.value==""){
      emptyInput2.innerText="This field is empty!"
      return false;
    }else{
      emptyInput2.innerText=""
      return true;
    }
  }
  function checkEmail(){
    if (emailInput.value==""){
      emptyInput3.innerText="This field is empty!"
      return false;
      
    }else{
      emptyInput3.innerText=""
      return true;
    }
  }
  // if ((password.value=="") && (lastnameInput.value=="") && (emailInput.value=="")){
  //   emptyInput1.innerText="This field is empty!"
  //   emptyInput2.innerText="This field is empty!"
  //   emptyInput3.innerText="This field is empty!"
  //   return false;
  // } else {
  //   emptyInput1.innerText=""
  //   emptyInput2.innerText=""
  //   emptyInput3.innerText=""
  //   return true;
  // }


function isAdult(){
    if (age.value < 18){
        ageInputError.innerText="You must be 18+ to sign up!";
    return false;
  }else{
  ageInputError.innerText="";
    return true;
  }
}
function addStudent() {
  
  if (validateForm()  && checkLastName() && checkEmail( )  && checkPassword() && isAdult()) {
      const row = studentTable.insertRow();
      const nameCell = row.insertCell();
      const lastnameCell = row.insertCell();
      const emailCell = row.insertCell();
      const passwordCell =row.insertCell();
      const ageCell =row.insertCell();
      const actionsCell = row.insertCell();

    nameCell.innerText = nameInput.value;
    lastnameCell.innerText = lastnameInput.value;
    emailCell.innerText = emailInput.value;
    passwordCell.innerText = password.value;
    ageCell.innerText = age.value;
    
  



    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
  


    deleteBtn.addEventListener("click", () => {
      row.remove();
    });
    actionsCell.appendChild(deleteBtn);
  }}