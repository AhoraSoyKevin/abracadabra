const usernameDisplay = document.querySelector('#profile-info .username');
const loggedInUser = sessionStorage.getItem('loggedInUser');

if (loggedInUser) {
    usernameDisplay.textContent = `@${loggedInUser}`;
} else {

    usernameDisplay.textContent = '@Invitado';
}

const opcionesSeleccion = document.getElementById('opciones-seleccion');
const contenidoSeleccion = document.getElementById('contenido-seleccion');

opcionesSeleccion.addEventListener('click', (event) => {
    if (event.target.classList.contains('opcion-seleccion')) {
        const opcion = event.target;
        const seccionId = opcion.getAttribute('data-seccion');
        const seccion = document.getElementById(seccionId);


        const desplazamiento = seccion.offsetLeft;


        contenidoSeleccion.scrollTo({
            top: 0,
            left: desplazamiento,
            behavior: 'smooth'
        });


        document.querySelectorAll('.opcion-seleccion').forEach(btn => btn.classList.remove('activa'));
        opcion.classList.add('activa');
    }
});

// external js: masonry.pkgd.js

var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    horizontalOrder: true, // new!
    percentPosition: true,
  });
  
  var isHorOrder = true;
  var $status = $('.status');
  
  // toggle horizontalOrder on click
  $('.hor-order-button').on( 'click', function() {
    isHorOrder = !isHorOrder;
    $grid.masonry({
      horizontalOrder: isHorOrder
    });
    var message = 'horizontalOrder ' +
      ( isHorOrder ? 'enabled' : 'disabled' );
    $status.text( message );
  });

  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Desactivar todos los botones y contenidos
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));

          // Activar el botón y contenido correspondiente
          button.classList.add('active');
          const tabId = button.getAttribute('data-tab');
          document.getElementById(`${tabId}-tab`).classList.add('active');
      });
  });