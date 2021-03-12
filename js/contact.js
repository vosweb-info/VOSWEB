$('#contactForm').submit(function () {
    var form = true;

    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var number = $('#number').val();
    var message = $('#message').val();
    var captcha = $('#g-recaptcha-response').val();

    if (!captcha) {
        form = false;
        $('#errorcaptcha').text("Bitte bestätigen Sie das reCAPTCHA.");
    } else {
        $('#errorcaptcha').text("");
    }

    if (form) {
        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: {name: name, email: email, subject: subject, number: number, captcha: captcha, message: message}
        }).done(function (msg) {
            var successInfo = $('#success-error-info');
            if (msg.valueOf() == new String("<strong>Vielen Dank!</strong> Ihre Nachricht wurde versendet.").valueOf()) {
                successInfo.html(msg);
                successInfo.addClass('alert');
                successInfo.addClass('alert-success');
            } else {
                successInfo.html(msg);
                successInfo.addClass('alert');
                successInfo.addClass('alert-danger');
            }
        });
    }
    return false;
});

