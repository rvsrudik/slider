<?php
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!-- google fonts   -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&amp;subset=latin-ext" rel="stylesheet">
    <!-- my stule   -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Carusel</title>
</head>
<body>


<div class="black_square"></div>

<div>

<div id="carousel_container" class="container-fluid">
    <!--                 TOP PART WITH IMAGES AND ARRAYS   -->
    <div id="top_carousel_container" class="row">
        <!--   left array     -->
        <div id="left_arrow" class="col-xs-2">
            <div class="left_arrow_img_container">
                <img src="img/arrow_left.png" id="arrow_left">
            </div>
        </div>
        <!--    allimages    -->
        <div id="images" class="col-xs-8">

            <div id="image_0" class="slider_images">
<!--                <img id="zero_pic" src="img/user1.png" alt="">-->
            </div>

            <div id="image_1" class="slider_images">
<!--                   <img id="left_pic" src="img/raz.png" alt="">-->
            </div>

            <div id="image_2" class="slider_images">
<!--                    <img id="central_pic"  src="img/user1.png" alt="">-->
            </div>

            <div id="image_3" class="slider_images">
<!--                <img id="right_pic"  src="img/9.png" alt="">-->
            </div>

        </div>
        <!--      right arrow  -->
        <div id="right_arrow" class="col-xs-2">
            <div>
                <img src="img/arrow_right.png" id="arrow_right">
            </div>
        </div>
        </div>
    </div>
    <!--               END  TOP PART WITH IMAGES AND ARRAYS   -->
    <div id="title_slider" class="">New Providence is the great UI kit</div>
    <div id="text_slider">"Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door."</div>
    <div id="stars"></div>
    <div id="author_slider">CAMERON DOWMAN</div>
</div>

<div class="black_square"></div>

</body>
    <script src="javascript/carausel.js"></script>

</html>
