document.addEventListener("DOMContentLoaded", function () {

const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {

bookingForm.addEventListener("submit", function (e) {

e.preventDefault();

const name = bookingForm.querySelector('input[type="text"]').value;
const phone = bookingForm.querySelectorAll('input[type="text"]')[1].value;
const location = bookingForm.querySelectorAll('input[type="text"]')[2].value;
const service = bookingForm.querySelector("select").value;

if(name === "" || phone === "" || location === ""){

alert("Please fill all required fields");

return;

}

alert(
"Booking Confirmed!\n\n" +
"Name: " + name +
"\nService: " + service +
"\nLocation: " + location
);

bookingForm.reset();

});

}

});