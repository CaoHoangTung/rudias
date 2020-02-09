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

$('#subscribe-form').submit(function(e){
    let subscribeForm = this;

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

    const submitToUrl = "https://rudias-email-subscriber.herokuapp.com/api/subscribe";
    $.post(submitToUrl, submitData, function(data,status){
        if (status && status == "success"){
            $("#subscribe-form-submit-btn").remove();
            $("#subscribe-form-msg").html("Thanks for reaching out!");
        } else {
            $("#subscribe-form-msg").html("There has been an error");
        }
    })
});