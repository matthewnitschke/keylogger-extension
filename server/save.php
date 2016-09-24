<?php

$txt = $_POST["data"];

file_put_contents("logging.txt", $txt, FILE_APPEND);

?>
