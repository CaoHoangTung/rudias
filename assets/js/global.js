let menuItems = ["home","services","team","contact"];
alert(1)
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

$('#subscribe-form').submit(function(e){
    e.preventDefault();
    let formValues = $("form#subscribe-form").serializeArray();
    let name = formValues[0].value,
        email = formValues[1].value,
        message = formValues[2].value;
    let submitData = {
        name: name,
        email: email,
        message: message
    };
    const submitToUrl = "http://localhost:3000"
    // const submitToUrl = "https://rudias-email-subscriber.herokuapp.com/api/subscribe";
    $.post(submitToUrl, submitData, function(){
        alert("OK");
    })
});