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

    $('.prev').click(function () {
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


var $slider = $("#sliders");
var $fill = $(".fill");

function setBar() {
    $fill.css("width", $slider.val() + "%");
}

$slider.on("input", setBar);
setBar();

var slider = document.querySelector("#sliders");
var selectvalue = document.querySelector(".metr");
selectvalue.innerHTML = slider.value;
slider.oninput = function () {
    selectvalue.innerHTML = this.value;
};









