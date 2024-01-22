


document.addEventListener('DOMContentLoaded',() => {
    const iconoAbrirRespuesta = document.querySelectorAll('#iconoAbrirRespuesta');
    
    for(icono of iconoAbrirRespuesta){
        icono.addEventListener('click', (e) => {
            const iconoClick = e.target;

            const iconoPadre = iconoClick.parentElement;

            const respuesta = iconoPadre.nextElementSibling;

            const respuestaVisibility = respuesta.getAttribute('visibility');

            if(respuestaVisibility === 'none'){
                respuesta.style.display = 'block';
                respuesta.setAttribute('visibility', 'visible');
                iconoClick.classList.remove('fa-plus');
                iconoClick.classList.add('fa-xmark');
                return;
            }

            respuesta.style.display = 'none';
            respuesta.setAttribute('visibility', 'none');
            iconoClick.classList.remove('fa-xmark');
            iconoClick.classList.add('fa-plus');
        })
    }
});
