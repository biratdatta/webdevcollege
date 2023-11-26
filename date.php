<?php
// Set the timezone
date_default_timezone_set('Your/Timezone');

// Check if the cookie exists
if(isset($_COOKIE['last_visited'])) {
    $last_visited = $_COOKIE['last_visited'];
    echo "Welcome back! Your last visit was on: $last_visited";
}

// Set the current date and time
$current_datetime = date('Y-m-d H:i:s');

// Set the cookie with the current date and time
setcookie('last_visited', $current_datetime, time() + (86400 * 30), "/"); // Cookie will expire in 30 days (86400 seconds * 30 days)

// Display the current date and time
echo "The current date and time is: $current_datetime";
?>








<?php
session_start();

// Check if the session variable exists and increment the count
if(isset($_SESSION['page_views'])) {
    $_SESSION['page_views']++;
} else {
    // If the session variable doesn't exist, initialize it to 1
    $_SESSION['page_views'] = 1;
}

// Display the page views count
echo "Total Page Views: " . $_SESSION['page_views'];
?>




<?php
// File to store visitor count
$file = 'visitor_count.txt';

// Check if the file exists, if not, create it
if (!file_exists($file)) {
    file_put_contents($file, '0');
}

// Read the current count from the file
$count = file_get_contents($file);

// Increment the count for each visitor
$count++;
file_put_contents($file, $count);

// Display the visitor count on the webpage
echo "<h1>Visitor Count: $count</h1>";
?>
