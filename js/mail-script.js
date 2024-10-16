// Define the function to send an email
function sendEmail() {
    // Get values from form elements
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;

    // Replace "\n" with "<br>" to handle line breaks in HTML
    message = message.replace(/\n/g, '<br>');

    // Use the Email.send function to send an email
    Email.send({
        SecureToken: "5f3c680d-43ab-4f49-8e10-ec2aaf81f39c", // Your SecureToken (API Key)
        To: "hello@kirlosyousef.com", // Recipient email address
        From: document.getElementById('email').value, // Sender email address
        Subject: document.getElementById('subject').value, // Email subject
        Body: "Name: " + name + "<br>" + message // Email body with name and message
    }).then(
        // Handle the result of the email sending attempt
        message => {
            // Check if the message is 'OK' (indicating success)
            if (message === 'OK') {
                // Display a success message
                alert('Email sent successfully!');
            } else {
                // Display an error message if something went wrong
                alert('Oops, something went wrong. Please try again later.');
            }
        }
    );
}
