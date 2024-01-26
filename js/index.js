


document.addEventListener('DOMContentLoaded',() => {
    const pregunta = document.querySelectorAll('.pregunta');
    
    for(pre of pregunta){
        pre.addEventListener('click', (e) => {
            const preguntaClick = e.target;

            console.log(preguntaClick)

            // const iconoPadre = iconoClick.parentElement;

            const respuesta = preguntaClick.nextElementSibling;            
            const respuestaVisibility = respuesta.getAttribute('visibility');

            
            const icono = preguntaClick.children[1];

            if(respuestaVisibility === 'none'){
                // respuesta.style.display = 'block';
                respuesta.classList.remove('respuesta-not-visible');
                setTimeout(() => {
                    respuesta.classList.remove('respuesta-not-visible-opacity')
                }, 20);
                respuesta.classList.add('respuesta-visible');
                respuesta.setAttribute('visibility', 'visible');
                icono.classList.remove('fa-plus');
                icono.classList.add('fa-xmark');
                return;
            }

            // respuesta.style.display = 'none';
            respuesta.classList.remove('respuesta-visible');
            respuesta.addEventListener('transitionend', () => {
                respuesta.classList.add('respuesta-not-visible');
            },{
                capture: false,
                once: true,
                passive: false
              })
            respuesta.classList.add('respuesta-not-visible-opacity');

            respuesta.setAttribute('visibility', 'none');
            icono.classList.remove('fa-xmark');
            icono.classList.add('fa-plus');
        })
    }
});
