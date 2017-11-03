
var left_arrow = $('#left_arrow');
var right_arrow = $('#right_arrow');
var images_block = $('#images');


var div_image_zero = $('#image_0');
var div_image_left = $('#image_1');
var div_image_center = $('#image_2');
var div_image_right = $('#image_3');

var zero_img = $('#zero_pic');
var left_img = $('#left_pic');
var center_img = $('#central_pic');
var right_img = $('#right_pic');

var central_image_id = 3;


function ft_createImageTag(src) {
    var img_elem = document.createElement('img');
    img_elem.src = src;
    // $(img_elem).addClass("slider_images");

    // console.log(imageTab[0]);
    return (img_elem);
}


var imageTab = [];


imageTab.push(ft_createImageTag("img/raz.png"));
imageTab.push(ft_createImageTag("img/2.png"));
imageTab.push(ft_createImageTag("img/3.png"));
imageTab.push(ft_createImageTag("img/4.png"));
imageTab.push(ft_createImageTag("img/5.png"));
imageTab.push(ft_createImageTag("img/6.png"));
imageTab.push(ft_createImageTag("img/7.png"));
imageTab.push(ft_createImageTag("img/8.png"));
imageTab.push(ft_createImageTag("img/9.png"));



function ft_move_horisontal(element, distance_percent, speed)
{
    element.animate({
        left: "+=" + distance_percent + "%"
    }, speed);
}

function ft_redeterm_elements() {
     div_image_zero = $('#image_0');
     div_image_left = $('#image_1');
     div_image_center = $('#image_2');
     div_image_right = $('#image_3');

     zero_img = $('#zero_pic');
     left_img = $('#left_pic');
     center_img = $('#central_pic');
     right_img = $('#right_pic');

     image_div_width = div_image_center.width();
     side_image_size = left_img.width();
     center_image_size = center_img.width();
}

// !!!!!!!!!!!!goes to libraty!!!!!!!!!!!!!!!!!!
function ft_fix_overflow(min, max, number) {
    var diff;
    if (number < min) {
        diff = min - number;
        return (max -  diff + 1);
    }
    if (number > max) {
        diff = number - max;
        return (min + diff - 1)
    }
    return (number);
}


function ft_change_zero_image(zero_image_id, zero_img_div, image_tab) {

    var slides_count = image_tab.length;

    zero_image_id = ft_fix_overflow(0, slides_count - 1, zero_image_id);

    // console.log("Всего элементов: " + slides_count + "\nНулевой элемент: " + zero_image_id + "\nЦентральный элемент: " + central_image_id + '\n\n');


    var new_zero_img = imageTab[zero_image_id];
    $(new_zero_img).attr('id', 'zero_pic');



    return (new_zero_img);

}


right_arrow.on("click", function () {
    // console.log(central_image_id);


    ft_redeterm_elements();
    var tmp = ft_change_zero_image(central_image_id - 2, div_image_zero, imageTab);
    console.log(tmp);
    central_image_id = ft_fix_overflow(0, imageTab.length - 1, central_image_id + 1);

    zero_img = tmp;
    div_image_zero.empty();

    div_image_zero.append(zero_img);


    ft_move_horisontal(div_image_zero, -33.333333, 500);
    ft_move_horisontal(div_image_left, 33.333333, 500);
    ft_move_horisontal(div_image_center, 33.333333, 500);
    ft_move_horisontal(div_image_right, -33.333333, 500);

    left_img.animate({
        height: center_image_size,
        width: center_image_size,
        margin: "0"
    }, 500);

    center_img.animate({
        height: side_image_size,
        width: side_image_size,
        marginBottom: "17px",
        marginTop: "18px"

    }, 500);

    div_image_zero.removeAttr("id").attr({"id" : "image_1"});
    $(zero_img).removeAttr("id").attr({ "id" : "left_pic"});
    div_image_left.removeAttr("id").attr({ "id" : "image_2" });
    left_img.removeAttr("id").attr({ "id" : "central_pic"});
    div_image_right.removeAttr("id").attr({"id" : "image_0"});
    right_img.removeAttr("id").attr({"id" : "zero_pic"});
    div_image_center.removeAttr("id").attr({"id" : "image_3"});
    center_img.removeAttr("id").attr({"id" : "right_pic"});
});




left_arrow.on("click", function () {
console.log(central_image_id);
    ft_redeterm_elements();

    var tmp2 = ft_change_zero_image(central_image_id + 2, div_image_zero, imageTab);
    central_image_id = ft_fix_overflow(0, imageTab.length - 1, central_image_id - 1);

    zero_img = tmp2;
    div_image_zero.empty();

    div_image_zero.append(zero_img);

    ft_move_horisontal(div_image_zero, 33.333333, 500);
    ft_move_horisontal(div_image_left, 33.333333, 500);
    ft_move_horisontal(div_image_center, -33.333333, 500);
    ft_move_horisontal(div_image_right, -33.333333, 500);

    right_img.animate({
        height: center_image_size,
        width: center_image_size,
        margin: "0"
    }, 500);

    center_img.animate({
        height: side_image_size,
        width: side_image_size,
        marginBottom: "17px",
        marginTop: "18px"

    }, 500);

    div_image_zero.removeAttr("id").attr({"id" : "image_3"});
    $(zero_img).removeAttr("id").attr({ "id" : "right_pic"});
    div_image_left.removeAttr("id").attr({ "id" : "image_0" });
    left_img.removeAttr("id").attr({ "id" : "zero_pic"});
    div_image_right.removeAttr("id").attr({"id" : "image_2"});
    right_img.removeAttr("id").attr({"id" : "central_pic"});
    div_image_center.removeAttr("id").attr({"id" : "image_1"});
    center_img.removeAttr("id").attr({"id" : "left_pic"});
});