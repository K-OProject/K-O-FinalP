$(document).ready(function(){
    $(".firstfilm").hide()
    $(".Log-out").hide()
    $(".films").hide()
    $('.h12').hide()
    $("#rb").hide()
    var user = JSON.parse(localStorage.getItem('logIn'));
    if (user.length>0){

        $("body").css({"background": "url('../assets/bg.jpg')no-repeat","background-size":"100%"})
        $(".firstfilm").show()
        $(".films").show()
        $('.h12').show()
        $(".Sign-in").hide();
        $("#lo").show()
   		$(`<a class="h12">${user[0].name}</a>`).appendTo("header")
}

//------------------------------------------------------------------------

$("#lo").on("click",function(){
	var user=[];
	localStorage.setItem('logIn', JSON.stringify(user));
	location.reload();
})

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
        $("<button id='cf' style=' padding: 15px;border: 1px solid;border-radius:25px; background-color: dodgerblue;'>click to confirm</button>").appendTo("body");
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
    