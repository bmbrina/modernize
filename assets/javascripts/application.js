// US phone mask
document.getElementById('phone').addEventListener('input', function (e) {
  var input = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !input[2] ? input[1] : '(' + input[1] + ') ' + input[2] + (input[3] ? '-' + input[3] : '');
});

$("#registrationForm").submit(function (event) {
  event.preventDefault();
  
  let button = document.getElementById("submitBtn");
  
  $.ajax({
    url: 'https://www.formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar',
    type: 'POST',
    dataType: 'JSON',
    contentType: 'application/json',
    data: JSON.stringify({
      "name": $('#name').val(),
      "city": $('#city').val(),
      "state": $('#state').val(),
      "phone": $('#phone').val(),
      "email": $('#email').val()
    }),
    success: function (result) {
      button.innerText = "Submitted";
      button.disabled = true;
    },
    error: function (result) {
      button.innerText = "Submitted";
      button.disabled = true;
    }
  });
});
