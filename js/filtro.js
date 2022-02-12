$(function () {
    //Filtro de portafolio
    $('.filtro').click(function () {
        $(this).addClass('activo').siblings().removeClass('activo');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.contenedorPorta').show('1000');
        } else {
            $('.contenedorPorta').not('.' + valor).hide('1000')
            $('.contenedorPorta').filter('.' + valor).show('1000')
        }
    });

    //filtro de enlaces/movilidad de la pagina
    let fsobremi = $('#Ssobremi').offset().top,
        ftecnologias = $('#Stecnologias').offset().top,
        fportafolio = $('#Sportafolio').offset().top,
        fcontacto = $('#Scontacto').offset().top;

    window.addEventListener('resize', function () {
        let fsobremi = $('#Ssobremi').offset().top,
            ftecnologias = $('#Stecnologias').offset().top,
            fportafolio = $('#Sportafolio').offset().top,
            fcontacto = $('#Scontacto').offset().top;
    });

    $('#enlace-inicio').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#enlace-sobremi').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: fsobremi - 100
        }, 600);
    });

    $('#enlace-tecnologias').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ftecnologias - 100
        }, 600);
    });

    $('#enlace-portafolio').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: fportafolio - 100
        }, 600);
    });

    $('#enlace-contacto').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: fcontacto - 100
        }, 600);
    });
});