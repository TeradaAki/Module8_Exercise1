function validate(){

    // Employee ID
    if(document.myform.employeeId.value==""){
        document.getElementById("employeeErr").innerHTML ="Please enter employee ID"
        return false;
    }

    // FirstName
    if(document.myform.firstName.value==""){
        document.getElementById("fristNameErr").innerHTML = "Please enter your first name"
        return false;
    } 

    // LastName
    if(document.myform.lastName.value==""){
        document.getElementById("lastNameErr").innerHTML ="Please enter your last name"
        return false;
    }

    // Address
    if(document.myform.address.value==""){
        document.getElementById("addressErr").innerHTML ="Please enter your email address"
        return false;
    }

    // Department
    if(document.myform.department.value==""){
        document.getElementById("departmentErr").innerHTML ="Please enter your department"
        return false;
    }

    // Position
    if(document.myform.position.value==""){
        document.getElementById("positionErr").innerHTML ="Please enter your position status"
        return false;
    }

    // Salary
    if(document.myform.salary.value==""){
        document.getElementById("salaryErr").innerHTML ="Please enter your salary amount"
        return false;
    }

    // Contact No.
    if(document.myform.contactNumber.value==""){
        document.getElementById("contactNumberErr").innerHTML ="Please enter your contact number"
        return false;
    }

    // Username
    if(document.myform.username.value==""){
        document.getElementById("usernameErr").innerHTML ="Please enter your username"
        return false;
    }

    // Email
    else {
        var ragex = /^\$+@\$+\.\$+$/;
        if(ragex.test(document.myform.email.value)==false){
            alert("Please enter a valid email");
            return false;
        }
    }

}