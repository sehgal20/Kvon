<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Effects</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        .box {
            width: 200px;
            height: 100px;
            background: steelblue;
            text-align: center;
            line-height: 100px;
            color: white;
            font-size: 18px;
            margin: 10px;
        }
    </style>
</head>
<body>

    <button id="hideBtn">Hide</button>
    <button id="showBtn">Show</button>
    <button id="fadeOutBtn">Fade Out</button>
    <button id="fadeInBtn">Fade In</button>
    <button id="slideUpBtn">Slide Up</button>
    <button id="slideDownBtn">Slide Down</button>
    <button id="toggleBtn">Toggle</button>

    <div class="box">jQuery Box</div>

    <script>
        $(document).ready(function() {
            $("#hideBtn").click(function() {
                $(".box").hide();
            });

            $("#showBtn").click(function() {
                $(".box").show();
            });

            $("#fadeOutBtn").click(function() {
                $(".box").fadeOut();
            });

            $("#fadeInBtn").click(function() {
                $(".box").fadeIn();
            });

            $("#slideUpBtn").click(function() {
                $(".box").slideUp();
            });

            $("#slideDownBtn").click(function() {
                $(".box").slideDown();
            });

            $("#toggleBtn").click(function() {
                $(".box").toggle();
            });
        });
    </script>

</body>
</html>
