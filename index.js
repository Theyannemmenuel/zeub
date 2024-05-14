$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        slidesToShow: 1, // Afficher une seule image à la fois
        slidesToScroll: 1, // Faire défiler une seule image à la fois
        responsive: [
            {
                breakpoint: 1024, // Pour les écrans de taille maximale de 1024px
                settings: {
                    slidesToShow: 1, // Afficher une seule image à la fois
                    slidesToScroll: 1, // Faire défiler une seule image à la fois
                    dots: true // Afficher les points de pagination
                }
            },
            {
                breakpoint: 768, // Pour les écrans de téléphone
                settings: {
                    slidesToShow: 1, // Afficher une seule image à la fois
                    slidesToScroll: 1, // Faire défiler une seule image à la fois
                    dots: true // Afficher les points de pagination
                }
            }
        ]
    });
});
