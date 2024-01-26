


document.addEventListener('DOMContentLoaded',() => {
    const pregunta = document.querySelectorAll('.pregunta');
    const inputsEmail = document.querySelectorAll('.input-email');


    document.addEventListener('click', (e) => {
        const elementoClick = e.target

        if(elementoClick.localName != 'input'){

            inputsEmail.forEach(inEmail => {
            const padreInput = inEmail.parentElement.parentElement;
            const spanEmail = padreInput.children[1];

            spanEmail.classList.add('inptspan');
            spanEmail.classList.remove('inptspan-focused');
            })

        }
    })

    // console.log(inputsEmail);

    inputsEmail.forEach(inEmail => {
        inEmail.addEventListener('click', (e) => {

            const inputClick = e.target;
            const divPadre = inputClick.parentElement.parentElement;
            const spanEmail = divPadre.children[1];

            spanEmail.classList.remove('inptspan');
            spanEmail.classList.add('inptspan-focused');

        })
    })

    for(pre of pregunta){
        pre.addEventListener('click', (e) => {
            const preguntaClick = e.target;
            const respuesta = preguntaClick.nextElementSibling;
            const respuestaVisibility = respuesta.getAttribute('visibility');
            const icono = preguntaClick.children[1];

            if(respuestaVisibility === 'none'){
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
