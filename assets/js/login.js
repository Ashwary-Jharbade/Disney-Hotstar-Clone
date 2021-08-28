
const showLoginDialog = (para) => {
    if ( para ) {
        document.getElementById("login_dialog").style.display = "block";
        document.getElementById("login_dialog_box").style.display = "block";
    } else {
        document.getElementById("login_dialog").style.display = "none";
        document.getElementById("login_dialog_box").style.display = "none";
    }
}


const checkNum = (event) => {
    const re = RegExp('^[0-9]{10}$');
    let obj = event.target.value;
    console.log(obj);
    if ( re.test(obj)) {
        document.getElementById("error-text").style.display = "none"
    } else {
        document.getElementById("error-text").style.display = "flex"
    }
}