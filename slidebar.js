function CreateSlideObj(img, title, text, stars, author) {
    var obj = {};

    obj.img = img;
    obj.title = title;
    obj.text = text;
    obj.stars = stars;
    obj.author = author;

    return (obj);
}

function ft_create_sliders_img(sliderTab) {
    var slider_count = sliderTab.length;
    var i = 0;
    var img;

    while (i  < slider_count)
    {
        jQuery('<img/>', {
            id: i,
            src: sliderTab[i].img,
            class: "slider_image"
        }).appendTo('#mySelector');
        // element =
        i++;
    }
}

var right_arrow = $("#arrow_right");
var left_arrow = $("#arrow_left");
var img_left = $(".side_pic:nth-child(2)")[0];
var img_central = $(".central_pic")[0];
var img_right = $(".side_pic:nth-child(4)")[0];
var title = $("#title");
var slider_content = $("#slider-content");
var author = $("#author");
var stars = $("#stars");
var center_slider_id = 0;


var sliderTab = [];

sliderTab.push(CreateSlide("img/user1.png", "New Providence is the great UI kit", "Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door.", 2, "Cameron Dowman"));
sliderTab.push(CreateSlide("img/user2.png", "Sebe derni", "W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content.", 5, "Pes Sobaka"));
sliderTab.push(CreateSlide("img/user3.png", "The background-image", "Property sets one or more background images for an element By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.", 3, "Vitya Howard"));
sliderTab.push(CreateSlide("img/user4.png", "Designed and built" ,"With all the love in the world by @mdo and @fat. Maintained by the core team with the help of our contributors. Currently v4.0.0-alpha.6. Code licensed MIT, docs CC BY 3.0.", 1, "Divan Vovan"));

ft_create_sliders_img(sliderTab);


function refilSlider(center_slider_id) {
    var count_sliders = sliderTab.length;
    var tmp_id;

    // middle image
    center_slider_id >= count_sliders ? center_slider_id = 0 : 1;
    center_slider_id < 0 ? center_slider_id = count_sliders - 1 : 1;
    img_central.src = sliderTab[center_slider_id].img;
    slider_content.html(sliderTab[center_slider_id].text);
    slider_content.fadeTo(400, 1);
    author.html(sliderTab[center_slider_id].author);
    author.fadeTo(400, 1);
    title.html(sliderTab[center_slider_id].title);
    var starLen = 24 * sliderTab[center_slider_id].stars;
    ft_change_starts(sliderTab[center_slider_id].stars);
    console.log("Central id " + center_slider_id);

    // right image
    (center_slider_id + 1 >= count_sliders) ? tmp_id = 0 : tmp_id = center_slider_id + 1;
    img_right.src = sliderTab[tmp_id].img;
    console.log("Right id " + tmp_id);




    (center_slider_id - 1 < 0) ? tmp_id = count_sliders - 1 : tmp_id = center_slider_id - 1;
    img_left.src = sliderTab[tmp_id].img;
    console.log("Left id " + tmp_id);

    return center_slider_id;
}


function ft_change_starts(new_stars_amount) {
        var star_width;

        star_width = new_stars_amount * 24;
        stars.animate({
            width: star_width +'px',
            queue: false
        }, 500);
}

// if move direction +1
function ft_animation_title(new_margin, time) {
    title.animate({
        marginLeft:   (new_margin) + 'px',
        queue: false
    }, time);

}


right_arrow.on("click", function () {
    $.when(
        slider_content.fadeTo(400, 0),
        author.fadeTo(400, 0),
        ft_change_starts(0),
        ft_animation_title(1000, 400),
        ft_animation_title(-1000, 0)
    ).then(function () {
        center_slider_id = refilSlider(center_slider_id + 1);
        ft_animation_title(0, 400);
    });


});

left_arrow.on("click", function () {
    $.when(
        slider_content.fadeTo(400, 0),
        author.fadeTo(400, 0),
        ft_change_starts(0),
        ft_animation_title(-1000, 400),
        ft_animation_title(1000, 0)
    ).then(function () {
        center_slider_id = refilSlider(center_slider_id - 1);
        ft_animation_title(0, 400);
    });

});
