function login() {
    var us = document.getElementById("usr").value
    var pw = document.getElementById("pwd").value
    var loginObj = {
        email: us
        , password: pw
    }
    $.ajax({
        type: "POST"
        , data: JSON.stringify(loginObj)
        , url: "http://roilapi.azurewebsites.net/api/Login"
        , contentType: "application/json"
    }).done(function (res) {
        userProfile = JSON.parse(res)
        console.log(res);
        console.log(userProfile)
        var x = document.getElementById('xxx')
        x.innerHTML = res
            // Do something with the result :)
    });
}
var userProfile