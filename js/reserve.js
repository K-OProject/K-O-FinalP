$(document).ready(function(){
    $(".films").hide()
    $(".Log-out").hide()
 
    $("#rb").hide()
    var user = JSON.parse(localStorage.getItem('logIn'));
    if (user.length>0){
        $("body").css({"background": "url('file:///C:/Users/rabek/Desktop/K-O-FinalP/assets/bg.jpg')no-repeat","background-size":"100%"})
        $(".films").show()
}

//------------------------------------------------------------------------



})



function clickImg(str){
    $(".firstfilm").hide();
    $("#rb").show();
    $(str).show(); 
    var str2=str.slice(1);   
    var thisFilm = JSON.parse(localStorage.getItem(str2));
    var count=0;
    for (var i=0;i<thisFilm.length;i++){
        if (thisFilm[i]==="empty"){
            count++;
        }
    }
    if (count>0){
        $(`<br><label style="color :#ff1a1a; font-size :40px"><b>You can reserve up too "${count}" places</b></label><div><input type="Number" placeholder=" ${count}" max="${count}" min="0" id="resVal"></div>`).appendTo("body");
        $("<button id='cf'>click to confirm</button>").appendTo("body");
        var theUser = JSON.parse(localStorage.getItem('logIn'));
        $("#cf").on("click",function(){
            var xcount=0;
        for (var i=0;i<thisFilm.length;i++){
            if ((thisFilm[i]==="empty")&&(xcount<Number($("#resVal")[0].value))){
                thisFilm[i]=theUser[0];
                xcount++;
            }
        }
            localStorage.setItem('365', JSON.stringify(thisFilm));
        })  
    }
    }
    