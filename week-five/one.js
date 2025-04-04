<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Basics</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        .hidden { display: none; }
    </style>
</head>
<body>

    <h1 id="heading">Hello, jQuery!</h1>
    <button id="btn">Click Me</button>
    <p class="para">This is a paragraph.</p>
    <input type="text" id="inputField" placeholder="Type something">
    <div class="box hidden">This box appears on button click</div>

    <script>
        $(document).ready(function() {
            $("#btn").click(function() {
                $(".box").toggle();
            });

            $("#inputField").keyup(function() {
                $("#heading").text($(this).val());
            });

            $(".para").hover(
                function() { $(this).css("color", "red"); },
                function() { $(this).css("color", "black"); }
            );
        });
    </script>

</body>
</html>
