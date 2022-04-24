<?php

$output = shell_exec('sudo /usr/bin/lsof -i tcp:8080');
echo "<pre>";
if($output!==NULL) {echo $output;}
else {echo "No PID Active";}
echo "</pre>";

if(isset($_GET['pid'])) {
    $pid = $_GET['pid'];
    echo $pid;
    $output2 = shell_exec('sudo kill -9 '.$pid);
    unlink("/var/www/waweb2/whatsapp-session.json");
    echo "<script>alert('session whatsapp reseted & session reloaded ^_^');document.location.href='https://khifondation.khipipe.com/waweb2/cekpid.php';</script>";
}


?>
<a target="_blank" href="npmrunstart.php">Run Start NPM</a>
<hr>
<a target="_blank" href="http://36.89.121.234:8080/">Test</a>
<!-- https://khifondation.khipipe.com/waweb2/cekpid.php -->