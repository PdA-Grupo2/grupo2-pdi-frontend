jquery ('documents').ready(function($){
    var menuBtn = $(".menu-icon")
        menu = $(".navegation ul")
menuBtn.clik(function(){
    if(menu.hasClass("mostrar")){
    menu.removeClass('mostrar');}
else
{
    menu.addClass('mostrar')
}

});
})
