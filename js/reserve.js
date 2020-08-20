$(document).ready(function(){
    $(".films").hide()
 

    var user = JSON.parse(localStorage.getItem('logIn'));
    if (user.length>0){
        $("body").css({"background": "url('file:///C:/Users/RBK/Desktop/K-O-FinalP/assets/bg.jpg')no-repeat","background-size":"100%"})
}

})