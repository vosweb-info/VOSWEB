<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = strip_tags(trim($_POST["name"]));
  $subject = strip_tags(trim($_POST["subject"]));
  $number = strip_tags(trim($_POST["number"]));
  $name = str_replace(array("\r", "\n"), array(" ", " "), $name);
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $message = trim($_POST["message"]);

  $captcha = $_POST["captcha"];
  $secret = $_ENV['GOOGLE_SECRET'];
  if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
    $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
  }

  $post_data = http_build_query(
    array(
      'secret' => $secret,
      'response' => $captcha,
      'remoteip' => $_SERVER['REMOTE_ADDR']
    )
  );
  $opts = array(
    'http' =>
    array(
      'method'  => 'POST',
      'header'  => 'Content-type: application/x-www-form-urlencoded',
      'content' => $post_data
    )
  );
  $context  = stream_context_create($opts);
  $response = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
  $result = json_decode($response);

  if (empty($name) or empty($message) or !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(array("message" => "Ihre Nachricht konnte nicht versendet werden. Versuchen Sie es später erneut.", "status" => 400));
    exit;
  }

  $recipient = "mail@vosweb.de";

  $email_content = "Name: $name\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Betreff: $subject\n\n";
  $email_content .= "Telefon: $number\n\n";
  $email_content .= "Nachricht:\n$message\n";

  $subject = "Neue Nachricht aus dem Kontaktformular von $name";

  $email_headers = array();
  $email_headers[] = "MIME-Version: 1.0";
  $email_headers[] = "Content-type: text/plain; charset=utf-8";
  $email_headers[] = "Von: $name <$email>";

  if (mail($recipient, $subject, $email_content, implode("\r\n", $email_headers))) {
    echo json_encode(array("message" => "Ihre Nachricht wurde versendet.", "status" => 200));
    exit;
  } else {
    echo json_encode(array("message" => "Ihre Nachricht konnte nicht versendet werden. Versuchen Sie es später erneut.", "status" => 500));
    exit;
  }
} else {
  echo json_encode(array("message" => "Ihre Nachricht wurde nicht versendet. Versuchen Sie es später erneut.", "status" => 403));
  exit;
}
