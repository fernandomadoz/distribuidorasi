<?php

// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['subject']) 		||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "error///ERROR No arguments Provided!!!";
	return false;
   }

if(empty($_POST['g-recaptcha-response']))
   {
   echo "error///El Captcha debe ser completado!!!";
   return false;
   }


// Register API keys at https://www.google.com/recaptcha/admin
$siteKey = '6LfB7qYdAAAAACOzYLuehEA2sxnViTvTvvg98EjF';
$secret = '6LfB7qYdAAAAAAqjMse0VE8iaMOI4dOnhhkPRa90';

// reCAPTCHA supported 40+ languages listed here: https://developers.google.com/recaptcha/docs/language
$lang = 'es';

if ($siteKey === '' || $secret === ''): 

   echo "ok///ERROR!!! Add your keys visit https://www.google.com/recaptcha/admin";

elseif (isset($_POST['g-recaptcha-response'])):

     //handle captcha response
     $captcha = $_POST['g-recaptcha-response'];
     $handle = curl_init('https://www.google.com/recaptcha/api/siteverify');
     curl_setopt($handle, CURLOPT_POST, true);
     curl_setopt($handle, CURLOPT_POSTFIELDS, "secret=".$secret."&response=$captcha");
     curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
     $response = curl_exec($handle);
     $explodedArr = explode(",",$response);
     $doubleExplodedArr = explode(":",$explodedArr[0]);
     $captchaConfirmation = end($doubleExplodedArr);
     //print_r($doubleExplodedArr);
     if ( trim($captchaConfirmation) != "true" ) {
       $error = "<p>You are a bot! Go away!</p>";
     }


    if (empty($error) ):


      $nombre= $_POST['name'];
      $mail= $_POST['email'];
      $telefono= $_POST['subject'];
      $comentario= $_POST['message'];
      $asunto = "Email Enviado por $nombre desde Sitio Web Oficial Distribuidora SI";

      $header = 'From: ' . $mail . " \r\n";
      $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
      $header .= "Mime-Version: 1.0 \r\n";
      $header .= "Content-Type: text/plain";

      $mensaje .= "Este mensaje fue enviado por " . $nombre . " \r\n\n" ;
      $mensaje .= "Su mail es: " . $mail . " \r\n\n";

      if ($telefono <> '') {
         $mensaje .= "Su Telefono es: " . $telefono . " \r\n\n";
         }

      $mensaje .= "Comentario: " . $comentario . " \r\n\n";
      $mensaje .= "Enviado el " . date('d/m/Y', time());

      //$para = 'info@gruvial.com.ar';
      $para = 'siltda@adinet.com.uy';


      mail($para, $asunto, utf8_decode($mensaje), $header);
      echo "ok///El Mensaje fue enviado exitosamente!!!";
      return true;      

    else:

      echo "error///Error de Configuracion!!!";

    endif;
endif; 

exit;
	
	
?>

