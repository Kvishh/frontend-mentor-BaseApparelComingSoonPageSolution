const submitBtn = document.querySelector("button");
const textField = document.querySelector("#email-form");

const errorAlert = document.querySelector(".error-alert-toggle");
const errorIcon = document.querySelector(".error-icon-wrapper-toggle");

submitBtn.addEventListener("click", () => {

    if (textField.value.includes("@")){
        textField.value = "";
        errorAlert.style.display = "none";
        errorIcon.style.display = "none";
        textField.style.borderColor = "hsl(0, 0%, 82%)"
    }
    else if (!textField.value.includes("@") || !(textField.value.trim().length === 0)){
        errorAlert.style.display = "block";
        errorIcon.style.display = "block";
        textField.style.borderColor = "hsl(0, 93%, 68%)"
    }
});