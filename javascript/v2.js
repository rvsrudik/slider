
var left_arrow;
var right_arrow = $('#right_arrow');


function ft_move_horisontal(element, distance_percent, speed)
{
    element.animate({
        left: "+=" + distance_percent + "%"
    }, speed);
}


right_arrow.on("click", function () {

    var div_image_zero = $('#image_0');
    var div_image_left = $('#image_1');
    var div_image_center = $('#image_2');
    var div_image_right = $('#image_3');

    var zero_img = $('#zero_pic');
    var left_img = $('#left_pic');
    var center_img = $('#central_pic');
    var right_img = $('#right_pic');

    var image_div_width = div_image_center.width();
    var side_image_size = left_img.width();
    var center_image_size = center_img.width();


    ft_move_horisontal(div_image_zero, -33.333333, 500);
    // div_image_zero.animate({
    //     left: "-=33.3333333%"
    // }, 500);

    div_image_left.animate({
        left: "+=33.3333333%"
    }, 500);
    left_img.animate({
        height: center_image_size,
        width: center_image_size,
        margin: "0"
    }, 500);

    div_image_center.animate({
        left:  "+=33.333333%"
    }, 500);
    center_img.animate({
        height: side_image_size,
        width: side_image_size,
        marginBottom: "17px",
        marginTop: "18px"

    }, 500);

    div_image_right.animate({
        left:  "-=33.33333%"
    }, 500);


    div_image_zero.removeAttr("id");
    div_image_zero.attr({
        "id" : "image_1"
    });

    zero_img.removeAttr("id");
    zero_img.attr({
        "id" : "left_pic"
    });



    div_image_left.removeAttr("id");
    div_image_left.attr({
        "id" : "image_2"
    });

    left_img.removeAttr("id");
    left_img.attr({
        "id" : "central_pic"
    });


    div_image_right.removeAttr("id");
    div_image_right.attr({
        "id" : "image_0"
    });

    right_img.removeAttr("id");
    right_img.attr({
        "id" : "zero_pic"
    });

    div_image_center.removeAttr("id");
    div_image_center.attr({
        "id" : "image_3"
    });

    center_img.removeAttr("id");
    center_img.attr({
        "id" : "right_pic"
    });


});


div_image_center.on("click", function () {
    alert("right_arrow")
});

