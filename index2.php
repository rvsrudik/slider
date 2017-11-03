<?php
/**
 * Created by PhpStorm.
 * User: Vitalii
 * Date: 11/1/17
 * Time: 12:06
 */?>

<!doctype html>
<html lang="en">
<head>
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
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Slidebar</title>
</head>
<body>

<div class="black_square"></div>

<div class="container-fluid">
    <div class="carusel_conteiner row">

        <div class="arrow_and_img_part images center-block">
            <img src="img/arrow_left.png" id="arrow_left">

            <div id="images_part">
                <img class="side_pic"    src="" alt="">
                <img class="central_pic center-block align-middle" src="" alt="">
                <img class="side_pic"    src="" alt="">
            </div>

            <img src="img/arrow_right.png" id="arrow_right">
        </div>

        <div class="text_part center-block">
            <div id="title_container">
                <div id="title">New Providence is the great UI kit</div>
            </div>
            <br>
            <div id="slider-content">"Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door."</div>
            <br>
            <div id="stars"></div>
            <br><br>
            <div id="author">CAMERON DOWMAN</div>
        </div>
    </div>
</div>


<div class="black_square"></div>









</body>
<script src="slidebar.js"></script>
<script>
    refilSlider(0);
</script>

</html>