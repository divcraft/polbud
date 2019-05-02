function validateForm() {

    var name = document.getElementById("index-form-name").value;
    var email = document.getElementById("index-form-email").value;
    var message = document.getElementById("index-form-message").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name == "") {
        document.getElementById("validate-name").style.display = "block";
        return false;
    } else {
        document.getElementById("validate-name").style.display = "none";
        true;
    }

    if (email == "") {
        document.getElementById("validate-email").style.display = "block";
        return false;
    } else {
        document.getElementById("validate-email").style.display = "none";
        true;
    }

    if (message == "") {
        document.getElementById("validate-message").style.display = "block";
        return false;
    } else {
        document.getElementById("validate-message").style.display = "none";
        true;
    }

}
