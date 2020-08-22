$(document).ready(function(){
    function check(passVal,userVal,emailVal,ageVal){
        if ((passVal==="")||(userVal==="")||(emailVal==="")||(ageVal==="")){
            return false;
        }else if (passVal.length<6){
            return false;
        }
        return true
    }
    $("#age").hide();
    $(".email").hide();
    $("#SU").hide();
    $("#SI").on("click",function(){
        var passVal=$("#pass")[0].value;
        var userVal=$("#userN")[0].value;
        if(check(passVal,userVal)){
        var users = JSON.parse(localStorage.getItem('userArray'));
        var i=0;
       while (i<users.length){
            if (((users[i].name===userVal)||(users[i].email===userVal))&&(users[i].password===passVal)){
                break;
            }
            i++;
        }
        if (i < users.length){
            var arr=[users[i]],localStorageTheArray;
            localStorage.setItem('logIn', JSON.stringify(arr));
            window.open("../html/reserve.html")
        }else{
            alert("wrong password or user name")
        }
    }
    })
    $("#signUp").on("click",function(){
        $("#SI").hide()
        $("#signUp").hide();
        $("#age").show();
        $(".email").show();
        $("#SU").show();
        $("#SU").on("click",function(){
            debugger;
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
            if (users.length===0){
                users.push(obj)
            }
             if ((check(passVal,userVal,emailVal,ageVal))&&(chEx(users,emailVal,userVal))){
                    users.push(obj);
                }else{
                    alert("user name or email already exist");
            }
            localStorage.setItem('userArray', JSON.stringify(users))
        });
    })
})
function chEx(users,emV,usN){
    for (var i=0;i<users.length;i++){
        if ((users[i].name===usN)||(users[i].email===emV)){
        return false;
    }
    
}
return true;
}

// $("#pass").css("border-color","red");
// $("#userN").css("border-color","red");
// $("#pass").after("<br><span>please recheck you'r password </span>");
// $("#userN").after("<br><span>please recheck you'r user name</span>");

// $("#pass").css("border-color","red");
//             $("#pass").after("<br><span>password length should be at least 6 chars</span>");