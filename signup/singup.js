const mainFrom = document.getElementById("signup");

// let userInfo = JSON.parse(localStorage.getItem('UserInfo'))
let userInfo = [];

mainFrom.addEventListener("submit", (event) => {
  event.preventDefault();
  let firstName = event.target.fName.value;
  let lastName = event.target.lName.value;
  let email = event.target.email.value;
  let password = event.target.password.value;

  const passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const usernamePattern = /^[a-zA-Z0-9._-]{2,20}$/;

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (
    !usernamePattern.test(firstName) ||
    !usernamePattern.test(lastName) ||
    !emailPattern.test(email) ||
    !passwordPattern.test(password)
  ) {
    if (!usernamePattern.test(firstName)) {
      let FName = document.getElementById("FirstName");
      FName.textContent = "Please enter your name without spaces";
    } else {
      let FName = document.getElementById("FirstName");
      FName.textContent = "";
    }

    if (!usernamePattern.test(lastName)) {
      let LName = document.getElementById("LastName");
      LName.textContent = "Please enter your name without spaces";
    } else {
      let LName = document.getElementById("LastName");
      LName.textContent = "";
    }

    if (!emailPattern.test(email)) {
      let Email = document.getElementById("e-mail");
      Email.textContent = "Please enter your email correctly";
    } else {
      let Email = document.getElementById("e-mail");
      Email.textContent = "";
    }

    if (!passwordPattern.test(password)) {
      let pass = document.getElementById("pass");
      pass.textContent =
        "Please a 8 length password and at least 1 charachter , 1 uppercase, 1 lowercase and special characters The allowed special characters are @, $, !, %, *, ?, and & ";
    } else {
      let pass = document.getElementById("pass");
      pass.textContent = "";
    }
  } else {
    let newRegester = new userData(firstName, lastName, email, password);

    userInfo.push(newRegester);
    console.log(newRegester);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }
});

function userData(FirstName, LastName, Email, Password) {
  this.FirstName = FirstName;
  this.LastName = LastName;
  this.Email = Email;
  this.Password = Password;
}
