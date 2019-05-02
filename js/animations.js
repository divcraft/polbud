$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    const $tools = $('#index-tools');
    const toolsFromTop = $tools.offset().top;
    const toolsHeight = $tools.outerHeight();
    if (scrollValue > toolsFromTop + toolsHeight - windowHeight) {
        $tools.addClass('activ');
    }

    const $txt = $('.txt-anim');
    const txtFromTop = $txt.offset().top;
    const txtHeight = $txt.outerHeight();
    if (scrollValue > txtFromTop + txtHeight / 2 - windowHeight) {
        $txt.addClass('activ');
    }

    const $txt2 = $('.txt-anim2');
    const txt2FromTop = $txt2.offset().top;
    const txt2Height = $txt2.outerHeight();
    if (scrollValue > txt2FromTop + txt2Height / 2 - windowHeight) {
        $txt2.addClass('activ');
    }

    const $art1h1 = $('#art1-h1');
    const art1h1FromTop = $art1h1.offset().top;
    const art1h1Height = $art1h1.outerHeight();
    if (scrollValue > art1h1FromTop + art1h1Height - windowHeight) {
        $art1h1.addClass('activ');
    }

    const $indexlisth1 = $('#index-ul-h2');
    const indexlisth1FromTop = $indexlisth1.offset().top;
    const indexlisth1Height = $indexlisth1.outerHeight();
    if (scrollValue > indexlisth1FromTop + indexlisth1Height - windowHeight) {
        $indexlisth1.addClass('activ');
    }

    const $indexlist = $('#index-ul');
    const indexlistFromTop = $indexlist.offset().top;
    const indexlistHeight = $indexlist.outerHeight();
    if (scrollValue > indexlistFromTop + indexlistHeight - windowHeight) {
        $indexlist.addClass('activ');
    }

    const $indextransport = $('#index-art-transport');
    const indextransportFromTop = $indextransport.offset().top;
    const indextransportHeight = $indextransport.outerHeight();
    if (scrollValue > indextransportFromTop + indextransportHeight / 3 * 2 - windowHeight) {
        $indextransport.addClass('activ');
    }

    const $indexcar = $('#index-car');
    const indexcarFromTop = $indexcar.offset().top;
    const indexcarHeight = $indexcar.outerHeight();
    if (scrollValue > indexcarFromTop + indexcarHeight / 2 - windowHeight) {
        $indexcar.addClass('activ');
    }


    const $box1 = $('#circle-box1');
    const box1FromTop = $box1.offset().top;
    const box1Height = $box1.outerHeight();
    if (scrollValue > box1FromTop + box1Height - windowHeight) {
        $box1.addClass('activ');
    }

    const $box2 = $('#circle-box2');
    const box2FromTop = $box2.offset().top;
    const box2Height = $box2.outerHeight();
    if (scrollValue > box2FromTop + box2Height - windowHeight) {
        $box2.addClass('activ');
    }

    const $box3 = $('#circle-box3');
    const box3FromTop = $box3.offset().top;
    const box3Height = $box3.outerHeight();
    if (scrollValue > box3FromTop + box3Height - windowHeight) {
        $box3.addClass('activ');
    }



    if (scrollValue < 100) {
        $document.removeClass('activ');
    }
})
