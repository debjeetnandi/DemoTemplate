$(document).ready(function(){
    //Hamburger click
    $('.hamburgerMenuIcon').on('click', function () {
        $('.asideNavigationPanel').toggle();
    });


    /* Star Calculation Dashboard Filter Panels Animation Aassistance Script */
    $('.greenStarCalculationFilterIcon').on('click', function () {
        $('.starCalculationFilterStep1').show();
    });

    $('.greenStarCalculationStep1NextBtn').on('click', function () {
        var innerOverlayTargetClass = $(this).data('target');
        $('.' + innerOverlayTargetClass).show(
            "100", function () {
                setTimeout(function () {
                    $('.starCalculationFilterStep1').hide();
                    $('.starCalculationFilterStep2').show();
                    $('.' + innerOverlayTargetClass).hide();
                }, 3000);
            }
        );
        
    });

    $('.starCalculationStep1Dismiss').on('click', function () {
        $('.starCalculationFilterStep1').hide();
    });

    $('.starCalculationStep2Dismiss').on('click', function () {
        $('.starCalculationFilterStep2').hide();
    });

    $('.starCalculationStep2DismissGo').on('click', function () {
        var innerOverlayTargetClass = $(this).data('target');
        $('.' + innerOverlayTargetClass).show(
            "100", function () {
                setTimeout(function () {
                    $('.starCalculationFilterStep2').hide();
                    $('.' + innerOverlayTargetClass).hide();
                }, 3000);
            }
        );
    });
    /* /. Star Calculation Dashboard Filter Panels Animation Aassistance Script */
});