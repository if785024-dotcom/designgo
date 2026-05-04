// script.js

// Smooth Scrolling
$('a[href*="#"]').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
});

// Form Handling
$(document).on('submit', 'form', function(event) {
    event.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
        url: $(this).attr('action'),
        type: 'POST',
        data: formData,
        success: function(response) {
            alert('Form submitted successfully!');
        },
        error: function() {
            alert('There was an error submitting the form.');
        }
    });
});

// WhatsApp Integration
function sendWhatsAppMessage(message) {
    var phone = '1234567890'; // Replace with your phone number
    var whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
