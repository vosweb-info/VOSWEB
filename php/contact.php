<?php

// Only process POST reqeusts.
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get the form fields and remove whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $subject = strip_tags(trim($_POST["subject"]));
    $number = strip_tags(trim($_POST["number"]));
    $name = str_replace(array("\r", "\n"), array(" ", " "), $name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Google reCAPTCHA
    $captcha = $_POST["captcha"];
    $secret = "SECRET";
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
    $opts = array('http' =>
        array(
            'method'  => 'POST',
            'header'  => 'Content-type: application/x-www-form-urlencoded',
            'content' => $post_data
        )
    );
    $context  = stream_context_create($opts);
    $response = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
    $result = json_decode($response);

    // Check that data was sent to the mailer.
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        // http_response_code(400);
        // echo "Oops! Message Not Send.";
        echo "<strong>ERROR (400)</strong> Ihre Nachricht konnte nicht versendet werden. Versuchen Sie es später erneut.";
        exit;
    }

    ////////////////////////////////////////////
    ////////////////////////////////////////////

    // Set the recipient email address.

    // FIXME: Update this to your desired email address.
    $recipient = "mail@vosweb.de";

    ////////////////////////////////////////////
    ////////////////////////////////////////////


    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Betreff: $subject\n\n";
    $email_content .= "Telefon: $number\n\n";
    $email_content .= "Nachricht:\n$message\n";

    // Set the email subject.
    // FIXME: Update Subject
    $subject = "Neue Nachricht aus dem Kontaktformular von $name";

    // Build the email headers.
    $email_headers = array();
    $email_headers[] = "MIME-Version: 1.0";
    $email_headers[] = "Content-type: text/plain; charset=utf-8";
    $email_headers[] = "Von: $name <$email>";

    // Send the email.
    if (mail($recipient, $subject, $email_content, implode("\r\n", $email_headers))) {
        // Set a 200 (okay) response code.
        //http_response_code(200);
        // echo "Thanks! Message has been sent successfully.";
        echo "<strong>Vielen Dank!</strong> Ihre Nachricht wurde versendet.";
    } else {
        // Set a 500 (internal server error) response code.
        //http_response_code(500);
        echo "<strong>ERROR (500)</strong> Ihre Nachricht konnte nicht versendet werden. Versuchen Sie es später erneut.";
    }

} else {
    // Not a POST request, set a 403 (forbidden) response code.
    //http_response_code(403);
    echo "<strong>ERROR (403)</strong> Ihre Nachricht wurde nicht versendet. Versuchen Sie es später erneut.";
}