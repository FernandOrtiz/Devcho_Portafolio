//Variables
//Para la barra de navegacion
let nav = document.getElementById('nav');
//Para el menu responsivo
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('menu');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

//barra de navegacion
function barranav(){
    let desplazamientoActual = window.pageYOffset;
    if(desplazamientoActual >= 480){
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = 'rgb(0,64,64)';
    }else{
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        menu.style.top = '80px';
        abrir.style.color = '#fff';
    }
}

window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    barranav();
});

window.addEventListener('scroll', function(){
    // console.log(window.pageYOffset);
    barranav();
});

//menu responsivo
function apertura(){
    if(cerrado){
        menu.style.width = '70vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

abrir.addEventListener('click', function(){
    apertura();
});

window.addEventListener('resize', function(){
    if(screen.width >= 750){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
    if(screen.width == 750){
        location.reload();
    }else if(this.screen.width == 530){
        location.reload();
    }
});

//cerrar menu al tocar en la pantalla
window.addEventListener('click', function(e){
    console.log(e.target);
    if(cerrado == false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});


