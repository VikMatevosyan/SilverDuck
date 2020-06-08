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
        if (next.length) {
            next.addClass('visible');
            $(current).removeClass('visible');
            $('.prev').removeClass('disabled');
        } else {
            $('.next').addClass('disabled');

        }

    });

   //  function Modal () {
   //      let modal = $('.modal-btn');
   //      if ( $(".layer5").hasClass("visible")) {
   //          modal.addClass('disabled');
   //      }
   //  }
   // Modal();

//     function Modal () {
//         let layer5 = document.querySelector(".layer5");
//         let modalbuttons = document.querySelector(".modal-btn");
//         if(layer5.classList.contains('visible')) {
//             modalbuttons.classList.add('disabled');
//         }
//     }
// Modal();


    $('.prev, .prev-btn').click(function () {
        let current = $('.layer.visible');
        let prev = $(current).prev();
        if (prev.length) {
            prev.addClass('visible');
            $(current).removeClass('visible');
            $('.next').removeClass('disabled');
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


$('.valid').click (function () {
let phoneinput = $(this).closest('form').find('.phone-inp');
let message = $(this).closest('form').find('.input-message');
if (!phoneNumber(phoneinput.val())) {
message.addClass('visible');
}

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