$(document).ready(function () {
    $('.calc-price').click(function () {
        $('.modal-container').addClass("visible");
    });

    $('.modal-close-btn, .modal-container').click(function () {
        closeModal();
    });

    $('.modal').click(function (e) {
        e.stopPropagation();

    });

    $('.next').click(function () {
        let current = $('.layer.visible');
        let next = $(current).next();
        let modal = $('.modal-btn');
        if (next.length) {
            next.addClass('visible');
            $(current).removeClass('visible');
            $('.prev').removeClass('disabled');
            if ($(".layer5").hasClass("visible")) {
                            modal.addClass('hidden');
                        }

        } else {
            $('.next').addClass('disabled');

        }

    });




    $('.prev, .prev-btn').click(function () {
        let current = $('.layer.visible');
        let prev = $(current).prev();
        let modal = $('.modal-btn');
        if (prev.length) {
            prev.addClass('visible');
            $(current).removeClass('visible');
            $('.next').removeClass('disabled');
            if (!$(".layer5").hasClass("visible")) {
                modal.addClass('visible');
            }
        } else {
            $('.prev').addClass('disabled');
        }
    })

});

function closeModal() {
    $('.modal-container').removeClass("visible");
}



function phoneNumber(phoneNumber) {
    var regExp = /^((\+7|7|8)+([0-9]){10})$/;
    var phone = phoneNumber.match(regExp);
    return phone;
}


$('.valid').click (function (e) {
let phoneinput = $(this).closest('form').find('.phone-inp');
let message = $(this).closest('form').find('.input-message');
if (!phoneNumber(phoneinput.val())) {
message.addClass('visible');
}
    e.preventDefault();
});



var $slider = $("#sliders");
var $fill = $(".fill");
function setBar() {
    $fill.css("width", ($slider.val() / 500) + "%" );
}

$slider.on("input", setBar);
setBar();



var range = document.querySelector(".slider");
var bubble = document.querySelector(".metr");
range.addEventListener("input", () => {
    bubble.innerHTML = range.value;
});
range.addEventListener("input", () => {
    setBubble(range, bubble);
});

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 20;
    const max = range.max ? range.max : 50000;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;

}


