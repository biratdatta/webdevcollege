<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <form method="post">
       Enter Your Name: <input name="name" type="text">
       <input type="submit" name="submitForm">
   </form>
   
   <?php 
    if(isset($_POST["submitForm"])) {
        $name = $_POST["name"];
        echo "Hello, " . $name;
    }
   ?>
</body>
</html>

