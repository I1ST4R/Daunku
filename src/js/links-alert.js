
document.addEventListener('DOMContentLoaded', function () {

  var links = document.querySelectorAll('a');

  links.forEach(function (link) {

    link.addEventListener('click', function (e) {
    e.preventDefault(); 
    alert('Ссылка нажата')
    });

  });

});