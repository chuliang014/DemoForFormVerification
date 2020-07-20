var userAccount = document.getElementById("userAccount"),
    userPass = document.getElementById("userPass"),
    userPass_ = document.getElementById("userPass_"),
    items = document.querySelectorAll(".item_"),
    userName = document.getElementById("userName"),
    information = document.getElementById("information"),
    email = document.getElementById("email"),
    telephone = document.getElementById("telephone"),
    handup = document.getElementById("handup"),
    choose = document.getElementById("choose");


var isTrue_userAccount = false,
    isTrue_userPass = false,
    isTrue_userPass_ = false,
    isTrue_userName = false,
    isTrue_email = false,
    isTrue_phone = false,
    isTrue_info = false;


var reg = /reg/;
//userAccount
userAccount.onblur = function () {
    var reg = /^\w{6,20}$/;
    if (this.value == "") {
        items[0].innerHTML = "Account Name can noe be NULL";
        items[0].style.color = "red";
    } else {
        if (!reg.exec(userAccount.value)) {
            items[0].innerHTML = "Please using 6-20 letters, number or symbol"
            items[0].style.color = "red";
        } else {
            items[0].innerHTML = "Correct!"
            items[0].style.color = "green";
            isTrue_userAccount = true;
        }
    }
};

//password
userPass.onfocus = function () {
    items[1].innerHTML = "Please enter 6--18 number, letter, _";
    items[1].style.color = "green";
};

userPass.onblur = function () {
    var reg = /^\w{6,20}$/;
    if (this.value == "") {
        items[1].innerHTML = "Password can not be NULL";
        items[1].style.color = "red";
    } else {
        if (!reg.exec(userPass.value)) {
            items[1].innerHTML = "Please using 6-20 letters, number or symbol"
            items[1].style.color = "red";
        } else {
            items[1].innerHTML = "Correct!"
            items[1].style.color = "green";
            isTrue_userPass = true;
        }
    }
};

//confirm pwd
userPass_.onfocus = function () {
    items[2].innerHTML = "Please confirm two password is identical";
    items[2].style.color = "green";
};

userPass_.onblur = function () {
    var reg = /^\w{6,20}$/;
    if (this.value == "") {
        items[2].innerHTML = "Comfirm Password can not be NULL";
        items[2].style.color = "red";
    } else {
        if (this.value != userPass.value) {
            items[2].innerHTML = "THe password is not identical";
            items[2].style.color = "red";
        } else {
            items[2].innerHTML = "Correct!"
            items[2].style.color = "green";
            isTrue_userPass_ = true;
        }
    }
};
// username
userName.onfocus = function () {
    items[3].innerHTML = "Please enter name";
    items[3].style.color = "green";
}

userName.onblur = function () {
    var reg = /^[a-zA-Z\s]{2,40}$/;
    if (this.value == "") {
        items[3].innerHTML = "Name can not be NULL";
        items[3].style.color = "red";
    } else {
        if (!reg.exec(userName.value)) {
            items[3].innerHTML = "Please enter the correct name";
            items[3].style.color = "red";
        } else {
            items[3].innerHTML = "Correct!"
            items[3].style.color = "green";
            isTrue_userName = true;
        }
    }
};
// id
information.onfocus = function () {
    items[4].innerHTML = "Please enter Identification Number";
    items[4].style.color = "green";
}

information.onblur = function () {
    var reg = /^\d{17}[0-9xX]$/;
    if (this.value == "") {
        items[4].innerHTML = "ID Number can not be NULL";
        items[4].style.color = "red";
    } else {
        if (!reg.exec(information.value)) {
            items[4].innerHTML = "Please enter the correct ID number";
            items[4].style.color = "red";
        } else {
            items[4].innerHTML = "Correct!"
            items[4].style.color = "green";
            isTrue_info = true;
        }
    }
};
// email
email.onfocus = function () {
    items[5].innerHTML = "Please enter Email";
    items[5].style.color = "green";
}

email.onblur = function () {
    var reg = /^\w+@\w+\.[a-zA-Z_]{2,4}$/;
    if (this.value == "") {
        items[5].innerHTML = "Email can not be NULL";
        items[5].style.color = "red";
    } else {
        if (!reg.exec(email.value)) {
            items[5].innerHTML = "Please enter the correct Email";
            items[5].style.color = "red";
        } else {
            items[5].innerHTML = "Correct!"
            items[5].style.color = "green";
            isTrue_email = true;
        }
    }
};

// phone number
telephone.onfocus = function () {
    items[6].innerHTML = "Please enter Phone Number";
    items[6].style.color = "green";
}

telephone.onblur = function () {
    var reg = /^\d{11}$/;
    if (this.value == "") {
        items[6].innerHTML = "Phone Number can not be NULL";
        items[6].style.color = "red";
    } else {
        if (!reg.exec(telephone.value)) {
            items[6].innerHTML = "Please enter the correct Phone Number";
            items[6].style.color = "red";
        } else {
            items[6].innerHTML = "Correct!"
            items[6].style.color = "green";
            isTrue_phone = true;
        }
    }
};

handup.onclick = function () {
    if (isTrue_email == false || isTrue_info == false ||
        isTrue_phone == false || isTrue_userAccount == false ||
        isTrue_userName == false || isTrue_userPass == false || isTrue_userPass_ == false) {
        alert("The information you entered is not correct");
    } else if (!choose.checked) {
        alert("Please agree the rules");
    } else {
        alert("Submit successfully");
    }
}