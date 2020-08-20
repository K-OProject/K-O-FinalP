$(document).ready(function(){
    $("#SI").on("click",function(){
        var passVal=$("#pass")[0].value;
        var userVal=$("#userN")[0].value;
        if (passVal.length<6){
            $("#pass").css("border-color","red");
            $("#pass").after("<br><span>password length should be at least 6 chars</span>");
        }if ((passVal==="")||(userVal==="")){
            $("#pass").css("border-color","red");
            $("#userN").css("border-color","red");
            $("#pass").after("<br><span>please recheck you'r password and user name</span>");
        }
    })
})