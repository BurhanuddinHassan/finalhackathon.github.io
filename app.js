var username=["burhan"];
var password=["1234"];
var c;
function addus(){
    var aus=document.getElementById("auser").value;
    var apas=document.getElementById("apass").value;
    username.push(aus);
    password.push(apas);
    console.log(username)
    console.log(password);
    alert("You have successfully registered");
    location.href="login.html"
}
function check(){
    console.log(user)
    var us=document.getElementById("user").value;
    var pas=document.getElementById("pass").value;
    for (var i=0; i <= username.length;i++){
        if(us==username[i] && pas==password[i]){
            location.href="index.html"
            c=1;
            break;
        }
    }
    if(c!=1){
        alert("Userrname or password is wrong");
    }
}
