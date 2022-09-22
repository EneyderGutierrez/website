import { login } from "./firebase.js";
const btnLogin = document.querySelector('#loging');
const loginDiv = document.querySelector('.login');
const home = document.querySelector('.home');
const perfilbtn = document.querySelector('#perfilbtn');
const perfildiv = document.querySelector('#perfildiv');
function hid (show, hidd) {
	perfildiv.style.display ="none";
	home.style.display ="none";
	show.style.display ="block";
	hidd.style.display ="none";
};


btnLogin.addEventListener("click", async (e) => {
  try {
    currentUser = await login();
}    });


perfilbtn.onclick = (e)=> {
        hid(perfildiv, home)
}
