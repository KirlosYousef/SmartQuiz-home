// Wait for the document to be ready
$(document).ready(function () {

    // Use an immediately-invoked function expression to create a private scope
    (function ($) {
        "use strict";

        // Add a custom validation method for checking the answer
        jQuery.validator.addMethod('answercheck', function (value, element) {
            // Check if the answer is "cat" (case-sensitive)
            return this.optional(element) || /^\bcat\b$/.test(value);
        }, "Please type the correct answer.");

        // Validate the contactForm form
        $(function () {
            $('#contactForm').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    subject: {
                        required: true,
                        minlength: 4
                    },
                    number: {
                        required: true,
                        minlength: 5
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 20
                    }
                },
                messages: {
                    name: {
                        required: "Your name is required.",
                        minlength: "Your name must consist of at least 2 characters."
                    },
                    subject: {
                        required: "The subject is required.",
                        minlength: "Your subject must consist of at least 4 characters."
                    },
                    number: {
                        required: "The number is required.",
                        minlength: "Your number must consist of at least 5 characters."
                    },
                    email: {
                        required: "Please insert your email."
                    },
                    message: {
                        required: "You have to write something to send this form.",
                        minlength: "Is that all?"
                    }
                },
                submitHandler: function (form) {
                    // Call the custom script for form validation
                    var isFormValid = form.checkValidity();

                    if (isFormValid) {
                        // Call your custom script for sending emails
                        sendEmail();
                    }
                }
            });
        });

    })(jQuery);

});