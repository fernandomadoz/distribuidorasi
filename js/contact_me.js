$(function() {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            //if (firstName.indexOf(' ') >= 0) {
            //    firstName = name.split(' ').slice(0, -1).join(' ');
            //}
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    subject: subject,
                    email: email,
                    message: message,
                    'g-recaptcha-response': grecaptcha.getResponse()
                },
                cache: false,
                success: function(data) {
                    resultado = data.split('///');

                    if(resultado[0] == 'error') {
                        mensaje_resultado = '<p class="bg-danger">'+resultado[1]+'</p>';
                    }
                    if(resultado[0] == 'ok') {
                        mensaje_resultado = '<p class="bg-success">'+resultado[1]+'</p>';
                        $('#contactForm').trigger("reset");
                    }

                    $('#success').html(mensaje_resultado);
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            }).done(function( msg ) {
                //console.log(datos);
            }
);
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
