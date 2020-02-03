let menuItems = ["home","services","team","contact"];

for (let menuItem of menuItems){
    $(window).scroll(function() {
        if ($('#'+menuItem).length){
            var hT = $('#'+menuItem).offset().top,
                elemHeight = $('#'+menuItem).height();
                wS = $(this).scrollTop();
            if (wS > hT-1 && wS < hT+elemHeight+1){
                $(".rnav-item.active").removeClass('active');
                $("#link-"+menuItem).addClass('active');
            }
        }
     });
}

$('.rnav-item').click(function(e){
    // id of element to scroll to 
    let targetId = e.target.getAttribute("targetid")

    $('html, body').animate({
        scrollTop: $(targetId).offset().top
    }, 800, function (){
        $(".rnav-item.active").removeClass('active');
        e.target.classList.add('active');
    });
    
});

