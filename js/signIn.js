$(document).ready(function(){
    function check(passVal,userVal,emailVal,ageVal){
        if ((passVal==="")||(userVal==="")||(emailVal==="")||(ageVal==="")){
            $("#pass").css("border-color","red");
            $("#userN").css("border-color","red");
            $("#pass").after("<br><span>please recheck you'r password </span>");
            $("#userN").after("<br><span>please recheck you'r user name</span>");
            return false;
        }else if (passVal.length<6){
            $("#pass").css("border-color","red");
            $("#pass").after("<br><span>password length should be at least 6 chars</span>");
        }
        return true
    }
    $("#age").hide();
    $(".email").hide();
    $("#SU").hide();
    $("#SI").on("click",function(){
        var passVal=$("#pass")[0].value;
        var userVal=$("#userN")[0].value;
        check(passVal,userVal)
        var users = JSON.parse(localStorage.getItem('userArray'));
        var i=0;
      /**  while (i<users.length){
            if (((users[i].name===userVal)||(users[i].email===userVal))&&(users[i].password===passVal)){
                break;
            }
            i++;
        }
        if (i<users.length){
            console.log("exists")
        }else{
            $("#pass").after("<br><span>please recheck you'r password </span>");
            $("#userN").after("<br><span>please recheck you'r user name</span>");
        }
        */
    })
    $("#signUp").on("click",function(){
        $("#SI").hide()
        $("#signUp").hide();
        $("#age").show();
        $(".email").show();
        $("#SU").show();
        $("#SU").on("click",function(){
            var users = JSON.parse(localStorage.getItem('userArray'));
            var obj={};
            var passVal=$("#pass")[0].value;
            var userVal=$("#userN")[0].value;
            var emailVal=$("#em")[0].value;
            var ageVal=$("#age")[0].value;
            obj.name=userVal;
            obj.password=passVal;
            obj.email=emailVal;
            obj.age=ageVal;
            if (check(passVal,userVal,emailVal,ageVal)){
                users.push(obj);
                localStorage.setItem('userArray', JSON.stringify(users))
            }
        });
    })
})