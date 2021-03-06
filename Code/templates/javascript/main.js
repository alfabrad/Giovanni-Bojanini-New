//  @codekit-prepend "plugins.js";
/**
 *
 *  @function
 *  @description:   Anonimous function autoexecutable
 *  @params jQuery $.- An jQuery object instance
 *  @params window window.- A Window object Instance
 *  @author: @_Chucho_
 *
 */
(function ( $, window, document, undefined ) {

    //  Revisa la disponibilidad de localStorage
    var storage, deviceWidth, isPortable, typeOfDevice, touch,
        minDeviceWidth          = 320,
        maxDeviceWidth          = 1024,
        timeLapseOfCarrousel    = 8000;

    if( 'localStorage' in window && window.localStorage !== null ) {
        storage = localStorage;
    } else {

        try {

            if ( localStorage.getItem ) {

                storage = localStorage;
            }
        } catch( e ) {

            storage = {};
        }
    }

    //  When DOM is loaded
    $( function ( ) {

        window.deviceWidth  = deviceWidth   = ( $( window ).innerWidth() < maxDeviceWidth ) ? 1024 : $( window ).innerWidth();
        window.deviceHeight = deviceHeight  = ( $( window ).innerHeight() < maxDeviceWidth ) ? 1024 : $( window ).innerHeight();

        ( deviceWidth >= minDeviceWidth && deviceWidth <= maxDeviceWidth ) ? isPortable  = true : isPortable  = false;

        window.typeOfDevice = typeOfDevice  = ( isPortable ) ? "mobile" : "desktop";

        window.isPortable   = isPortable;

        touch   = ( typeof( Touch ) === 'object' ) ? true : false;

        if ( isPortable ) { //  Si es un móvil...
            console.log('portable');
            //  Redimensiona el Body al tamaño de la pantalla
            $( 'body' ).height( deviceHeight );
            $( 'body' ).width( deviceWidth );

            $( window ).on( {
                orientationchange: function ( ) {

                    window.deviceWidth  = deviceWidth   = ( $( window ).innerWidth() > maxDeviceWidth ) ? 960 : $( window ).innerWidth();
                    window.deviceHeight = deviceHeight  = ( $( window ).innerHeight() > maxDeviceWidth ) ? 495 : $( window ).innerHeight() + 248;
                    $( "body" ).width( deviceWidth );
                    $( "body" ).height( deviceHeight );
                }
            } );

            //  Muestra u oculta las direcciones de las sucursales
            if ( $( '.branches_list.mobile' ).exists() ) {

                $( 'h2' ).on( 'click', function ( e ) {

                    e.preventDefault();
                    e.stopPropagation();

                    $( '.branches_list.mobile' ).find( '.pane' ).slideUp( {
                        duration        :   150,
                        easing          :   'easeOutBounce',
                        queue           :   false,
                        specialEasing   :   {},
                        step            :   function( now, tween ) {},
                        progress        :   function( animation, progress, remainingMs ) {},
                        complete        :   function() {},
                        start           :   function( animation ) {},
                        done            :   function( animation, jumpedToEnd ) {},
                        fail            :   function( animation, jumpedToEnd ) {},
                        always          :   function( animation, jumpedToEnd ) {}
                    } );

                    $( e.currentTarget ).next( '.pane' ).slideToggle( {
                        duration        :   150,
                        easing          :   'easeOutBounce',
                        queue           :   false,
                        specialEasing   :   {},
                        step            :   function( now, tween ) {},
                        progress        :   function( animation, progress, remainingMs ) {},
                        complete        :   function() {},
                        start           :   function( animation ) {},
                        done            :   function( animation, jumpedToEnd ) {},
                        fail            :   function( animation, jumpedToEnd ) {},
                        always          :   function( animation, jumpedToEnd ) {}
                    } );
                } );
                $( 'h3' ).on( 'click', function ( e ) {

                    e.preventDefault();
                    e.stopPropagation();

                    $( '.pane article' ).find( '.branch_direction.mobile' ).slideUp( {
                        duration        :   150,
                        easing          :   'easeOutBounce',
                        queue           :   false,
                        specialEasing   :   {},
                        step            :   function( now, tween ) {},
                        progress        :   function( animation, progress, remainingMs ) {},
                        complete        :   function() {},
                        start           :   function( animation ) {},
                        done            :   function( animation, jumpedToEnd ) {},
                        fail            :   function( animation, jumpedToEnd ) {},
                        always          :   function( animation, jumpedToEnd ) {}
                    } );

                    $( e.currentTarget ).next( '.branch_direction.mobile' ).slideToggle( {
                        duration        :   150,
                        easing          :   'easeOutBounce',
                        queue           :   false,
                        specialEasing   :   {},
                        step            :   function( now, tween ) {},
                        progress        :   function( animation, progress, remainingMs ) {},
                        complete        :   function() {},
                        start           :   function( animation ) {},
                        done            :   function( animation, jumpedToEnd ) {},
                        fail            :   function( animation, jumpedToEnd ) {},
                        always          :   function( animation, jumpedToEnd ) {}
                    } );
                } );
            }

            if ( $( '.banner_titles' ).exists() ) {
                $( '.banner_titles.' + typeOfDevice ).eq( 1 ).on( 'click', 'a', function ( e ) {
                    e.preventDefault();
                    e.stopPropagation();
                    $( '.alert_box' ).fadeIn( 200, function () {
                        if ( myVideo && myVideo.paused ) {
                            myVideo.play();
                        }
                    } );
                } );
            }
            //  Muestra u oculta los métodos de Dermocosméticos
            if ( $( '#dermocosmetics_procedures' ).exists() ) {
                $( 'dt' ).on( 'click', function ( e ) {
                    e.preventDefault();
                    e.stopPropagation();
                    $( "dd" ).slideUp( {
                        duration        :   150,
                        easing          :   'easeOutBounce',
                        queue           :   false,
                        specialEasing   :   {},
                        step            :   function( now, tween ) {},
                        progress        :   function( animation, progress, remainingMs ) {},
                        complete        :   function() {},
                        start           :   function( animation ) {},
                        done            :   function( animation, jumpedToEnd ) {},
                        fail            :   function( animation, jumpedToEnd ) {},
                        always          :   function( animation, jumpedToEnd ) {}
                    } );

                    $( e.currentTarget ).next( 'dd' ).slideToggle( {
                        duration        :   150,
                        easing          :   'easeOutBounce',
                        queue           :   false,
                        specialEasing   :   {},
                        step            :   function( now, tween ) {},
                        progress        :   function( animation, progress, remainingMs ) {},
                        complete        :   function() {},
                        start           :   function( animation ) {},
                        done            :   function( animation, jumpedToEnd ) {},
                        fail            :   function( animation, jumpedToEnd ) {},
                        always          :   function( animation, jumpedToEnd ) {}
                    } );
                } );
            }
        } else if ( !isPortable ) { // Si es una tablet o una PC de escritorio...

            //  Muestra si hay una capa de carga del sitio
            if ( $( ".loader" ).exists() ) {

                $( '.alert_background' ).fadeOut( 300 );
                $( ".loader" ).fadeOut( 300 );
            }

            //  Controla el resize de la imagen de fondo del Home
            if ( $( "#wrapper_background" ).exists() ) {

                //$( "body, #wrapper_background" ).height( $( window ).innerHeight() );

                $( window ).on( {
                    resize: function ( ) {

                        $( "body, #wrapper_background" ).height( $( window ).innerHeight() );
                    },
                    touchstart: function ( ) {

                        $( "body, #wrapper_background" ).height( $( window ).innerHeight() );
                    },
                    touchend: function ( ) {

                        $( "body, #wrapper_background" ).height( $( window ).innerHeight() );
                    }
                } );
            }

            //  Central verticalmente la sección principal del Home
            if ( $( "#home section" ).exists() ) {

                $( "#home section" ).centerHeight();

                $( window ).on( {
                    resize: function ( ) {

                        $( "#home section" ).centerHeight();
                    },
                    touchstart: function ( ) {

                        $( "#home section" ).centerHeight();
                    },
                    touchend: function ( ) {

                        $( "#home section" ).centerHeight();
                    }
                } );
            }

            //  Selecciona el item en el menú correspondiente dependiendo del nombre de la página actual
            if( $( ".primary .sections, .treatments" ).exists() ){

                GBSite.obtainActualDocument();
            }

            //  Inicializa el carrusel de la galería de imagenes de Microinjerto
            if ( $( '#gallery' ).exists() ) {

                GBSite.inicializeCarrousel( '#gallery', {
                    speed: 300,
                    circular: true,
                    keyboard: false,
                    items: '.items',
                    next: '#microinjerto_gallery .next',
                    prev: '#microinjerto_gallery .prev'
                }, {
                    activeClass: "active",
                    navi: "",
                    naviItem: "a",
                    indexed: false
                }, {
                    steps: 1,
                    interval: 8000,
                    autoplay: true,
                    autopause: false
                } );
            }

            //  Inicializa el carrusel de autodiagnosticate de la seccion Microinjerto
            /*if ( $( '#diagnosis' ).exists() ) {

                GBSite.inicializeCarrousel( '#diagnosis', {
                    speed: 300,
                    circular: false,
                    keyboard: false,
                    items: '.diagnosis_items',
                    next: '#auto_diagnostic .next',
                    prev: '#auto_diagnostic .prev'
                }, {
                    activeClass: "active",
                    navi: "",
                    naviItem: "a",
                    indexed: false
                }, {
                    steps: 1,
                    interval: 10000,
                    autoplay: false,
                    autopause: false
                } );
            }*/

            //  Inicializa el carrusel de testimoniales de la sección Microinjerto
            if ( $( '.testimonials_explained_scrollable' ).exists() ) {

                GBSite.inicializeCarrousel( '.testimonials_explained_scrollable', {
                    speed: 300,
                    circular: false,
                    keyboard: false,
                    items: '.items_testimonials',
                    next: '.next_testimonial',
                    prev: '.prev_testimonial'
                }, {
                    activeClass: "active",
                    navi: "",
                    naviItem: "a",
                    indexed: false
                }, {
                    steps: 1,
                    interval: 10000,
                    autoplay: false,
                    autopause: false
                } );

                var scrollableHandler    = $('.testimonials_explained_scrollable').data( 'scrollable' );
                scrollableHandler.onBeforeSeek( function( e ) {

                    if( $( 'video' ).exists() ) {

                        var myVideo;

                        for( var i = 0; i < $( 'video' ).length; i++ ) {
                          myVideo    = document.getElementsByTagName( 'video' )[ i ];
                          if ( myVideo.played.length != 0 ) {
                            myVideo.pause();
                          }
                        }
                    }
                } );

                $( '.items_testimonials div a' ).on( 'click', function ( e ) {
                    e.preventDefault;
                    e.stopPropagation;

                    if( $( 'video' ).exists() ) {

                        var myVideo;

                        for( var i = 0; i < $( 'video' ).length; i++ ) {
                          myVideo    = document.getElementsByTagName( 'video' )[ i ];
                          if ( myVideo.played.length != 0 ) {
                            myVideo.pause();
                          }
                        }
                    }
                } );
            }

            //  Inicializa el carrusel de la sección Directorio Médico
            if ( $( '.medical_directory_scrollable' ).exists() ) {

                GBSite.inicializeCarrousel( '.medical_directory_scrollable', {
                    speed: 300,
                    circular: false,
                    keyboard: false,
                    items: '.medical_directory_items',
                    next: '.next',
                    prev: '.prev'
                }, {
                    activeClass: "active",
                    navi: "",
                    naviItem: "a",
                    indexed: false
                }, {
                    steps: 1,
                    interval: 10000,
                    autoplay: false,
                    autopause: false
                } );
            }

            //  Inicializa el carrusel de landing de secciones de la seccion Tratamiento Integral
            if ( $( '#integral_treatment_landing' ).exists() ) {

                GBSite.inicializeCarrousel( '.integral_scrollable', {
                    speed: 300,
                    circular: false,
                    keyboard: false,
                    items: '.integral_items',
                    next: 'p.next',
                    prev: 'p.prev'
                }, {
                    activeClass: "active",
                    navi: "",
                    naviItem: "a",
                    indexed: false
                }, {
                    steps: 1,
                    interval: 10000,
                    autoplay: false,
                    autopause: false
                } );
            }

            if ( $( '.testimonial' ).exists() ) {

                $( '.testimonial span.link' ).on( {
                    'mouseover':    function ( e ) {
                        $( e.currentTarget ).siblings( 'div' ).dequeue().fadeIn( 150 );
                    },
                    'mouseout':     function ( e ) {
                        $( e.currentTarget ).siblings( 'div' ).dequeue().fadeOut( 150 );
                    }
                } );
            }

            //  Efecto de tabs para la selección de mapas en la sección Sucursales
            if ( $( ".branches_list" ).exists() ) {

                var initialIndexVal = 0;
                $( ".branches_list" ).tabs( ".branches_list .pane", {
                    tabs: 'h2',
                    effect: 'slide',
                    fadeInSpeed: 150,
                    fadeOutSpeed: 150,
                    initialIndex: initialIndexVal
                } );
            }

            //  Centra el pin del mapa cuando se hace resize de la ventana
            if ( $( ".map" ).exists() ) {

                GBSite.calculateNewHeight( $( ".map" ), 96 );
                GBSite.calculateNewWidth( $( ".map" ), 43 );

                $( window ).on( 'resize', function ( ) {

                    GBSite.calculateNewHeight( $( ".map" ), 96 );
                    GBSite.calculateNewWidth( $( ".map" ), 43 );
                } );
            }

            //  Efecto de slides en las secciónes internas
            if ( $( ".reveal" ).exists() ) {
                var scrollable  = $( '.scrollable,.diagnosis_scrollable,#scrollable_norwood,#scrollable_ludwig,#integral_scrollable,.testimonials_explained_scrollable,.medical_directory_scrollable' ).data( 'scrollable' );

                if ( typeof( scrollable ) !== 'undefined' && scrollable.getSize() ) {

                    Reveal.initialize( {
                        // Display controls in the bottom right corner
                        controls: true,
                        // Display a presentation progress bar
                        progress: true,
                        // Display the page number of the current slide
                        slideNumber: false,
                        // Push each slide change to the browser history
                        history: false,
                        // Enable keyboard shortcuts for navigation
                        keyboard: true,
                        // Enable the slide overview mode
                        overview: false,
                        // Vertical centering of slides
                        center: true,
                        // Enables touch navigation on devices with touch input
                        touch: true,
                        // Loop the presentation
                        loop: false,
                        // Change the presentation direction to be RTL
                        rtl: false,
                        // Turns fragments on and off globally
                        fragments: true,
                        // Flags if the presentation is running in an embedded mode,
                        // i.e. contained within a limited portion of the screen
                        embedded: false,
                        // Number of milliseconds between automatically proceeding to the
                        // next slide, disabled when set to 0, this value can be overwritten
                        // by using a data-autoslide attribute on your slides
                        autoSlide: 0,
                        // Stop auto-sliding after user input
                        autoSlideStoppable: true,
                        // Enable slide navigation via mouse wheel
                        mouseWheel: false,
                        // Hides the address bar on mobile devices
                        hideAddressBar: true,
                        // Opens links in an iframe preview overlay
                        previewLinks: false,
                        // Transition style
                        transition: 'default', // default/cube/page/concave/zoom/linear/fade/none
                        // Transition speed
                        transitionSpeed: 'default', // default/fast/slow
                        // Transition style for full page slide backgrounds
                        backgroundTransition: 'default', // default/none/slide/concave/convex/zoom
                        // Number of slides away from the current that are visible
                        viewDistance: 3,
                        // Parallax background image
                        parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"
                        // Parallax background size
                        parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"
                        // The "normal" size of the presentation, aspect ratio will be preserved
                        // when the presentation is scaled to fit different resolutions. Can be
                        // specified using percentage units.
                        width: deviceWidth,
                        height: deviceHeight,
                        // Factor of the display size that should remain empty around the content
                        margin: 0.1,
                        // Bounds for smallest/largest possible scale to apply to content
                        minScale: 1.0,
                        maxScale: 1.0
                    } );
                } else if ( $( '#what_alopecia_is,#mesotherapy,#capilar_electroporation,#platelet_rich_plasma,#tratamiento_medical_drug,#clasification_of_baldness,#integral_scrollable,#dermocosmetics' ).exists() ) {

                    Reveal.initialize( {
                        // Display controls in the bottom right corner
                        controls: true,
                        // Display a presentation progress bar
                        progress: true,
                        // Display the page number of the current slide
                        slideNumber: false,
                        // Push each slide change to the browser history
                        history: false,
                        // Enable keyboard shortcuts for navigation
                        keyboard: true,
                        // Enable the slide overview mode
                        overview: false,
                        // Vertical centering of slides
                        center: true,
                        // Enables touch navigation on devices with touch input
                        touch: true,
                        // Loop the presentation
                        loop: false,
                        // Change the presentation direction to be RTL
                        rtl: false,
                        // Turns fragments on and off globally
                        fragments: true,
                        // Flags if the presentation is running in an embedded mode,
                        // i.e. contained within a limited portion of the screen
                        embedded: false,
                        // Number of milliseconds between automatically proceeding to the
                        // next slide, disabled when set to 0, this value can be overwritten
                        // by using a data-autoslide attribute on your slides
                        autoSlide: 0,
                        // Stop auto-sliding after user input
                        autoSlideStoppable: true,
                        // Enable slide navigation via mouse wheel
                        mouseWheel: false,
                        // Hides the address bar on mobile devices
                        hideAddressBar: true,
                        // Opens links in an iframe preview overlay
                        previewLinks: false,
                        // Transition style
                        transition: 'default', // default/cube/page/concave/zoom/linear/fade/none
                        // Transition speed
                        transitionSpeed: 'default', // default/fast/slow
                        // Transition style for full page slide backgrounds
                        backgroundTransition: 'default', // default/none/slide/concave/convex/zoom
                        // Number of slides away from the current that are visible
                        viewDistance: 3,
                        // Parallax background image
                        parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"
                        // Parallax background size
                        parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"
                        // The "normal" size of the presentation, aspect ratio will be preserved
                        // when the presentation is scaled to fit different resolutions. Can be
                        // specified using percentage units.
                        width: deviceWidth,
                        height: deviceHeight,
                        // Factor of the display size that should remain empty around the content
                        margin: 0.1,
                        // Bounds for smallest/largest possible scale to apply to content
                        minScale: 1.0,
                        maxScale: 1.0
                    } );
                }

                var appearSlides    = function () {
                    $( '.reveal' ).fadeOut( 10, function( ) {
                        $( '.reveal' ).css( {
                            'opacity'   : '1',
                            'filter'    : 'alpha(opacity=1)'
                        } );
                        $( '.reveal' ).fadeIn( 200 );
                    } );
                };

                Reveal.addEventListener( 'ready', function ( event ) {
                    appearSlides();

                    //  Control de menu de la parte inferior
                    var index   = event.indexh;

                    $( '.internal_navigation_menu ul li a' ).not( '.separator' ).eq( index ).addClass( 'current' );

                    $( '.internal_navigation_menu ul li a' ).not( '.separator' ).on( 'click', function ( e ) {

                        $( '.internal_navigation_menu ul li a' ).removeClass( 'current' );
                        $( e.currentTarget ).addClass( 'current' );
                    } );

                    $( '.reveal .slides a' ).on( 'click', function ( e ) {

                        var indexH,indexV;

                        if ( $( e.currentTarget ).attr( 'data-anchor-h' ) || $( e.currentTarget ).attr( 'data-anchor-v' ) ) {

                            e.preventDefault();
                            e.stopPropagation();
                            if ( $( e.currentTarget ).attr( 'data-anchor-h' ) ) {

                                indexH    = $( e.currentTarget ).attr( 'data-anchor-h' );
                            }
                            if ( $( e.currentTarget ).attr( 'data-anchor-v' ) ) {
                                indexV    = ( $( e.currentTarget ).attr( 'data-anchor-v' ) ) ? $( e.currentTarget ).attr( 'data-anchor-v' ) : 0;
                            }
                            GBSite.goToSlide( indexH, indexV );
                        }
                    } );

                    //  Recoge el parámetro "is" (ID Slide), y si existe envia al
                    //  slide cuyo valor es igual al valor de "is"
                    var Url = String( location.href );
                    if ( Url.search( /index.html/i ) ) {

                        Url             = Url.replace( /.*\?(.*?)/, "$1" );
                        var Variables   = Url.split( "&" );
                        var Separ;
                        for ( var i = 0; i < Variables.length; i++ ) {

                            Separ       = Variables[ i ].split( "=" );
                            if ( Separ[ 1 ] !== undefined && Separ[ 1 ] !== null ) {

                                eval( 'var ' + Separ[ 0 ] + '="' + Separ[ 1 ] + '"' );
                            }
                        }
                    }

                    if ( typeof( is ) !== "undefined" && is !== null ) {
                        GBSite.goToSlide( is, 0 );
                    }
                } );

                Reveal.addEventListener( 'slidechanged', function( event ) {

                    $( '.internal_navigation_menu ul li a' ).removeClass( 'current' );
                    $( '.internal_navigation_menu ul li a' ).not( '.separator' ).eq( event.indexh ).addClass( 'current' );
                } );

                if ( $( '.slides' ).children( 'section' ).length === 1 ) {
                    appearSlides();
                }
            }
        }

        if ( touch ) {

            //  Muestra el menu desplegable principal y hace hightlight del botón
            $( '.menu' ).on( 'touchstart', function ( e ) {
                e.preventDefault;
                e.stopPropagation;

                GBSite.toggleMenu( e );
            });
        } else {
            //  Muestra el menu desplegable principal y hace hightlight del botón
            $( '.menu' ).on( 'mouseenter', function ( e ) {
                e.preventDefault;
                e.stopPropagation;

                GBSite.toggleMenu( e );
            });

            $( 'header nav' ).on( 'mouseleave', function ( e ) {
                e.preventDefault;
                e.stopPropagation;

                GBSite.toggleMenu( e );
            } );
        }

        if ( $( 'video' ).exists() ) {

            var myVideo = document.getElementsByTagName( 'video' )[ 0 ];
        }

        //  Crea una instancia de jQuery Overlay para el home de descubreone.mx
        //  Calcula la distancia entre el margen izquierdo para posicionar
        //  la capa del video. Si en menor de 0 (ocurre en iPhone) utiliza
        //  el ancho del body en vez del ancho de la ventana para hacer
        //  el cálculo
        //  !Crea una instancia de jQuery Overlay
        if ( $( '.alert_box' ).exists() ) {

            GBSite.doOverlay( $( 'a.alert_trigger' ), {
                    effect          :   'apple',
                    mask            :   {
                        color       :   '',
                        loadSpeed   :   200,
                        opacity     :   0.5
                    },
                    close           :   $( '.alert_box a.close' ),
                    closeOnClick    :   true,
                    closeOnEsc      :   true,
                    speed           :   'normal',
                    fixed           :   true,
                    onBeforeLoad    :   function ( ) {
                        GBSite.overlay      = $( '.alert_trigger' ).data( 'overlay' );

                        GBSite.closer       = GBSite.overlay.getClosers;

                        $( '.alert_background' ).height( '100%' );
                        ( $( '.alert_box a.close' ).exists() ) ? true : $( '.alert_box' ).prepend( GBSite.overlay.getClosers() );
                        $( '.alert_box' ).centerWidth();
                        $( '.alert_box' ).centerHeight();
                        ( $( '.alert_box p' ).text() == '' ) ? $( '.alert_box p' ).remove() : false;
                    },
                    onLoad          :   function ( ) {
                        $( '.alert_background' ).fadeIn( 100 );
                    },
                    onBeforeClose   :   function ( ) {

                        $( '.alert_box' ).fadeOut( 10, function ( ) {

                            $( '.alert_background' ).fadeOut( 10 );
                            if ( $( '#home' ).exists() ) {

                            } else {
                                $( '.alert_box h2' ).text( '' );
                                $( '.alert_box h4' ).text( '' );
                                ( $( '.alert_box p' ).exists() ) ? $( '.alert_box p' ).remove( ) : false;
                                ( $( '.alert_box form' ).exists() ) ? $( '.alert_box form' ).remove( ) : false;
                                ( $( '.alert_box table' ).exists() ) ? $( '.alert_box table' ).remove( ) : false;
                                ( $( '.alert_box div' ).exists() ) ? $( '.alert_box div' ).remove( ) : false;
                                ( $( '.alert_box button' ).exists() ) ? $( '.alert_box button' ).remove( ) : false;
                                ( $( '.alert_box div.confirm' ).exists() ) ? $( '.alert_box div.confirm' ).remove( ) : false;
                            }
                        } );
                    },
                    onClose         :   function ( ) {
                        if ( myVideo ) {

                            myVideo.pause();
                        }
                    }
                } );

            $( '.alert_background' ).height( $( 'body' ).height() );
            $( window ).on( {
                resize: function ( e ) {
                    $( '.overlay' ).centerWidth();
                },
                touchstart: function ( e ) {
                    $( '.overlay' ).centerWidth();
                },
                touchend: function ( e ) {
                    $( '.overlay' ).centerWidth();
                }
            } );
        }

        // Control de la presentación de los videos de testimoniales que
        // están en el Home
        if ( $( '#home .alert_box' ).exists() ) {
            GBSite.inicializeCarrousel( '.video_testimonials_home_scrollable', {
                speed: 300,
                circular: false,
                keyboard: false,
                items: '.video_items',
                next: '',
                prev: ''
            }, {
                activeClass: "active",
                navi: "",
                naviItem: "",
                indexed: false
            }, {
                steps: 1,
                interval: 10000,
                autoplay: false,
                autopause: false
            } );
            GBSite.inicializeCarrousel( '.title_testimonials_home_scrollable', {
                speed: 300,
                circular: false,
                keyboard: false,
                items: '.title_items',
                next: '.title_testimonials_home_scrollable .next',
                prev: '.title_testimonials_home_scrollable .prev'
            }, {
                activeClass: "active",
                navi: ".navigator",
                naviItem: "a",
                indexed: false
            }, {
                steps: 1,
                interval: 10000,
                autoplay: false,
                autopause: false
            } );

            /*var overlay = $( '.alert_box' ).data( 'overlay' );
            overlay.onLoad( function ( e ) {

                if ( myVideo && myVideo.paused ) {

                    myVideo.play();
                }
            } );*/

            var videoScrollableHandler  = $( '.video_testimonials_home_scrollable' ).data( 'scrollable' );
            var titleScrollableHandler  = $( '.title_testimonials_home_scrollable' ).data( 'scrollable' );
            var coverHandler            = $( '.faces_navigator' );
            var trigger                 = "";
            var flag                    = 0;

            coverHandler.on( 'click', 'a', function ( e ) {
                e.preventDefault();
                e.stopPropagation();

                var videoIndex  = $( e.currentTarget ).data( 'index' );
                if ( videoScrollableHandler ) {
                    setTimeout( function () {
                        $( '.navigator a' ).eq( videoIndex ).click();
                    }, 400 );
                }
            } );

            //  Sabemos qué botón presionamos para hacer el slide del video
            $( '.title_testimonials_home_scrollable a' ).on( 'click', function ( e ) {
                e.preventDefault();
                e.stopPropagation();
                trigger = ( $( e.currentTarget).hasClass( 'next' ) ) ? "next" : "prev";

                //  Si es la primera vez que presionamos el botón "next"
                //  hacemos que avance el carrusel de forma manual
                /*if ( flag === 0 ) {
                    videoScrollableHandler.next( 300 );
                    flag = 1;
                }*/
            } );

            //  Hace la animación del título y el video para las siguientes
            //  veces que presionamos los botones de control
            titleScrollableHandler.onBeforeSeek( function ( e, trigger ) {
                e.preventDefault;
                e.stopPropagation;
                videoScrollableHandler.seekTo( trigger );
            } );

            // Cuando cambiamos de slide, pausamos el video
            videoScrollableHandler.onBeforeSeek( function ( e ) {
                e.preventDefault;
                e.stopPropagation;

                //  Pausamos el video...
                var video = document.getElementsByTagName( "video" );
                for ( var i = 0; i < video.length; i++ ) {
                    video[i].pause();
                }
            } );
        }

        //  Botón de cierre de overlay
        if ( $( ".close" ).exists() ) {
            $( ".close" ).on( 'click', function ( e ) {
                e.preventDefault;
                e.stopPropagation;

                GBSite.closeAlert();
                if ( typeof( myVideo ) !== "undefined" ) {
                    myVideo.pause();
                }
            } );
        }

        //  Inicializa el carrusel de Escala de Norwood de la seccion Tratamiento Integral
        if ( $( '#scrollable_norwood' ).exists() ) {

            GBSite.inicializeCarrousel( '#scrollable_norwood', {
                speed: 300,
                circular: false,
                keyboard: false,
                items: '#scrollable_norwood .items_scale',
                next: '#norwood_gallery .next',
                prev: '#norwood_gallery .prev'
            }, {
                activeClass: "active",
                navi: "",
                naviItem: "a",
                indexed: false
            }, {
                steps: 1,
                interval: 10000,
                autoplay: false,
                autopause: false
            } );
        }

        //  Inicializa el carrusel de Escala de Ludwig de la seccion Tratamiento Integral
        if ( $( '#scrollable_ludwig' ).exists() ) {

            GBSite.inicializeCarrousel( '#scrollable_ludwig', {
                speed: 300,
                circular: false,
                keyboard: false,
                items: '#scrollable_ludwig .items_scale',
                next: '#ludwig_gallery .next',
                prev: '#ludwig_gallery .prev'
            }, {
                activeClass: "active",
                navi: "",
                naviItem: "a",
                indexed: false
            }, {
                steps: 1,
                interval: 10000,
                autoplay: false,
                autopause: false
            } );
        }
    } );

    //  When DOM is ready
    $( document ).on( 'ready', function ( e ) {

        if ( isPortable ) { //  Si es un móvil...


        } else if ( !isPortable ) { // Si es una tablet o una PC de escritorio...

            //  Control de cambio de sucursal en el mapa
            if ( $( ".map" ).exists() ) {

                $( '.branches_list h2.current' ).siblings( '.pane' ).children( 'ol' ).children( 'li' ).children( 'a' ).eq( 0 ).addClass( 'clicked' );
                var chosen  = $( '.branches_list .pane ol li a.clicked' );

                GBSite.developMapInfoWindow( chosen.selector );
                $( e.currentTarget ).removeAttr( 'class' );

                //  Cambia la localización del mapa cuando se selecciona una sucursal diferente
                $( '.branches_list .pane ol li a, .branches_list .pane ul li a' ).on( {
                    click:  function ( e ) {

                        e.preventDefault();
                        e.stopPropagation();

                        $( '.branches_list .pane ol li a, .branches_list .pane ul li a' ).removeAttr( 'class' );
                        $( e.currentTarget ).addClass( 'clicked' );
                        var branchSelected  = $( '.branches_list .pane li a.clicked' );

                        GBSite.developMapInfoWindow( $( branchSelected ).selector );
                    }
                } );

                $( window ).on( {
                    resize: function ( ) {

                        var selector    = localStorage.selector;
                        GBSite.developMapInfoWindow( selector );
                    },
                } );
            }

            //  Inicialización de datapicker del formulario de sección agendar cita
            if ( $( '#contact_fecha' ).exists() ) {
                $( '#contact_fecha' ).datepicker( {
                    changeMonth:        true,
                    changeYear:         true,
                    dateFormat:         "MM dd, yy",
                    dayNames:           [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado" ],
                    dayNamesMin:        [ "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa" ],
                    dayNamesShort:      [ "Dom", "Lun", "Mar", "Mir", "Jue", "Vie", "Sab" ],
                    firstDay:           1,
                    gotoCurrent:        true,
                    //monthNames:         [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
                    monthNamesShort:    [ "Enero", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ],
                    numberOfMonths:     2,
                    showButtonPanel:    true
                } );
            }

            //  Muestra u oculta la ventana con los testimoniales en la sección Microinjerto
            if ( $( ".testimonials_explained" ).exists() ) {

                var scrollable          = $( '.testimonials_explained_scrollable' ).data( 'scrollable' );

                //  Muestra la ventana modal con los testimoniales en la sección Microinjerto
                $( ".testimonial img" ).on( 'click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    var index           = $( e.currentTarget ).parents( '.testimonial' ).index();
                    $( '.testimonials_explained' ).css( {
                        opacity:  '0',
                        filter:   'alpha(opacity=0)'
                    } );

                    $( '.testimonials_explained' ).fadeIn( 1, function () {

                        scrollable.seekTo( index, 1 );

                        $( '.testimonials_explained' ).fadeOut( 1, function () {

                            $( '.testimonials_explained' ).css( {
                                opacity:  '1',
                                filter:   'alpha(opacity=1)'
                            } );
                            $( '.testimonials_explained' ).fadeIn( 200 );
                        } );
                    } );
                } );

                //  Cierra la ventana con los testimoniales
                $( ".items_testimonials div a" ).on( 'click', function ( e ) {
                    e.preventDefault();
                    e.stopPropagation();

                    $( ".testimonials_explained" ).fadeOut( 200 );
                } );
            }

            //  Filtrado de Directorio Médico y muestra de información del médico seleccionado
            if ( $( ".medical_directory_scrollable" ).exists() ) {

                // Filtrado del Buscador de Directorio Médico
                $( '#search_medic_input' ).on( {
                    keyup:  function( e ) {

                        var txtFilter   = $.trim( $( e.currentTarget ).val() );
                        var UpperTxt    = txtFilter.capitalize();
                        var LowerTxt    = txtFilter.toLowerCase();

                        if( txtFilter !== "" ) {

                            $( '.medical_directory_items .doctor, .medical_directory_items .doctor figure' ).hide();

                            $( '.medical_directory_results .doctor' ).empty();
                            $( '.medical_directory_items .doctor figure figcaption p:contains(' + txtFilter + ')' )
                            .parent()
                            .parent()
                            .clone( true )
                            .appendTo( '.medical_directory_results .doctor' );
                            $( '.medical_directory_items .doctor figure figcaption p:contains(' + UpperTxt + ')' )
                            .parent()
                            .parent()
                            .clone( true )
                            .appendTo( '.medical_directory_results .doctor' );
                            $( '.medical_directory_items .doctor figure figcaption p:contains(' + LowerTxt + ')' )
                            .parent()
                            .parent()
                            .clone( true )
                            .appendTo( '.medical_directory_results .doctor' );
                            $( '.medical_directory_results, .medical_directory_results .doctor, .medical_directory_results .doctor figure' ).show();
                            $( '.browse' ).fadeOut( 200 );
                        } else {
                            $( '.medical_directory_results, .medical_directory_results .doctor, .medical_directory_results .doctor figure' ).hide();
                            $( '.medical_directory_results .doctor' ).empty();
                            $( '.medical_directory_items .doctor, .medical_directory_items .doctor figure' ).show();
                            $( '.browse' ).removeAttr( 'style' );
                        }
                    }
                } );

                //  Muestra la bio del médico seleccionado
                $( 'figure figcaption .link' ).on( 'click', function ( e ) {
                    e.preventDefault();
                    e.stopPropagation();

                    var indexBio    = $( e.currentTarget ).parent().parent().attr( 'data-index' );

                    $( e.currentTarget ).parent().hide();
                    $( e.currentTarget ).parent().parent().siblings().hide();

                    $( '.browse' ).fadeOut( 200 );
                    $( '.medical_bio' ).fadeIn( 200, function ( ) {
                        $( '.bio' ).eq( indexBio ).fadeIn( 200 ).addClass( 'active' );
                        $( e.currentTarget ).parent().siblings( 'img.normal' ).fadeOut( 100 );
                        $( e.currentTarget ).parent().siblings( 'img.hover' ).fadeIn( 100 );
                    } );
                } );

                //  Cierra el cuadro de información del médico
                $( '.medical_bio .close' ).on( 'click', function ( e ) {
                    e.preventDefault();
                    e.stopPropagation();

                    $( '.medical_bio' ).fadeOut( 200, function () {
                        $( 'figure' ).show();
                        $( 'figure figcaption' ).fadeIn( 200, function () {
                            $( '.browse' ).removeAttr( 'style' );
                            $( '.bio' ).hide().removeClass( 'active' );
                            $( '.medical_directory_items .doctor figure img.normal' ).fadeIn( 200, function () { $( this ).removeAttr( 'style' ); } );
                            $( '.medical_directory_items .doctor figure img.hover' ).fadeOut( 200, function () { $( this ).removeAttr( 'style' ); } );
                            $( '.medical_directory_results, .medical_directory_results .doctor, .medical_directory_results .doctor figure' ).hide();
                            $( '.medical_directory_results .doctor' ).empty();
                            $( '.medical_directory_items .doctor, .medical_directory_items .doctor figure' ).show();
                            $( '#search_medic_input' ).val( '' );
                        } );
                    } );
                } );

                $( '.principal_section form' ).on( 'submit', function ( e ) {
                    e.preventDefault();
                    e.stopPropagation();
                } );
            }
        }

        //  Cambio para poder maquetar los input radio y select
        if ( $( 'input[type="radio"],select' ).exists() ) {

            GBSite.makesUniform( $( 'input[type="radio"],select' ) );
        }

        //  Control de los banner en el Home
        if ( $( '#footer footer ul li a' ).exists() ) {

            $( '#footer footer ul li a' ).eq( 0 ).addClass( 'current' );

            //  Cambia la imagen de fondo e indica que botón del footer corresponde
            $( '#footer footer ul li a' ).on( 'click', function ( e ) {
                e.preventDefault();
                e.stopPropagation();

                var parentIndex = $( e.currentTarget ).parent( 'li' ).index();

                $( 'footer ul li a.current' ).removeClass( 'current' );
                $( e.currentTarget ).addClass( 'current' );
                GBSite.imageChange( parentIndex );
            } );

            $('a.chat').on('click',function(e){
                $('#livechat-badge').click();
            });

            var imageVisible    = 0;

            //  Control de cambio de background cada n segundos
            setInterval ( function () {

                if ( ++imageVisible > $( '#wrapper_background figure.page.' + typeOfDevice + ' img' ).length - 1 ) {
                    imageVisible    = 0;
                }

                $( '#wrapper_background figure.page.' + typeOfDevice + ' img:visible' ).dequeue().fadeOut( 150, function () {
                    $( '#wrapper_background figure.page.' + typeOfDevice + ' img' ).eq( imageVisible ).dequeue().fadeIn( 150 );
                } );

                $( '.banner_titles.' + typeOfDevice ).dequeue().fadeOut( 150, function () {

                    $( '.banner_titles.' + typeOfDevice ).eq( imageVisible ).fadeIn( 150, function() {

                        $( 'footer ul li a.current' ).removeClass( 'current' );
                        $( 'footer ul li' ).eq( imageVisible ).children( 'a' ).addClass( 'current' );
                    } );
                } );
            }, timeLapseOfCarrousel );
        }

        //  Selecciona el primer botón de testimoniales al finalizar la carga del sitio
        if ( $( '.testimonials a' ).exists() ) {

            $( '.testimonials a' ).on( 'click', function () {
                e.preventDefault();
                e.stopPropagation();

                $( '#footer footer ul li a' ).eq( 1 ).click();
            } );
        }

        // Validación del formulario de auto diagnostico en la sección microinjerto
        if ( $( '#auto_diagnostic form' ).exists() ) {

            //  Obtiene la información de tipo de alopecia
            $( '#auto_diagnostic input[type="radio"]' ).on( 'click', function ( e ) {

                GBSite.radio = $.trim( $( e.currentTarget ).val() );
            } );

            //  Validación del formulario y recolección de los datos para su envio
            $( '.diagnosis_budget form' ).on( 'submit', function ( e ) {

                e.preventDefault();
                e.stopPropagation();

                var budgetName,budgetPhone,budgetMail;

                budgetName  = ( typeof( $( 'form input.budget_name' ).val() ) !== 'undefined' ) ? $.trim( $( 'form input.budget_name' ).val() ) : "";
                budgetPhone = ( typeof( $( 'form input.budget_phone' ).val() ) !== 'undefined' ) ? $.trim( $( 'form input.budget_phone' ).val() ) : "";
                budgetMail  = ( typeof( $( 'form input.budget_mail' ).val() ) !== 'undefined' ) ? $.trim( $( 'form input.budget_mail' ).val() ) : "";

                var budget          = {};
                budget.budget_name  = budgetName;
                budget.budget_phone = budgetPhone;
                budget.budget_mail  = budgetMail;
                budget.type         = GBSite.radio;

                var validate    = GBSite.validateFormsAlter( budget, true );
                if ( validate ) {
                    var formAction  = $( e.currentTarget ).attr( 'action' ); // 'Code/snippets/dispatcher.php?action=sendBudget'
                    $.ajax ( formAction, {
                        beforeSend: function ( jqXHR, settings ) {
                            $('.error_indicator').remove();
                            if ( $('textarea' ).val() === "" ) {

                                $('textarea' ).val( 'Ninguno' );
                            }
                        },
                        cache: false,
                        complete: function ( jqXHR, textStatus ) {},
                        contentType: "application/x-www-form-urlencoded",
                        converters: {
                            "* text":       window.String,
                            "text html":    true,
                            "text json":    $.parseJSON,
                            "text xml":     $.parseXML
                        },
                        data: budget,
                        error:  function ( jqXHR, textStatus, errorThrown ) {
                            $( '.alert_box' ).addClass( 'error_message' );
                            _title      = 'Error';
                            _markup     = '<p>Hubo un error. ¿Podrías intentarlo nuevamente?.</p>';
                            GBSite.openAlert( _title, _markup );
                        },
                        success: function ( responseText, textStatus, jqXHR ) {
                            //console.log(responseText.success);
                            var _title, _markup;

                            if ( $.parseJSON( responseText ) ) {

                                responseText    = $.parseJSON( responseText );

                                if( responseText && ( responseText.success === 'true' || responseText.success === true ) ) {

                                    $( '.alert_box' ).addClass( 'thank_you_message' );
                                    _title      = 'Gracias';
                                    _markup     = '<p>Muchas gracias por tu interés en Giovanni Bojanini Microinjerto, <br />en breve nos pondremos en contacto contigo.</p>';
                                    GBSite.openAlert( _title, _markup );
                                    $( 'textarea' ).val( "" );
                                    $( '.budget_form input[type="text"]' ).val( '' );
                                    //$( form ).fadeOut( 300 );
                                } else {

                                    $( '.alert_box' ).addClass( 'error_message' );
                                    _title      = 'Error';
                                    _markup     = '<p>Hubo un error. ¿Podría intentarlo nuevamente?.</p>';
                                    GBSite.openAlert( _title, _markup );
                                }
                            } else {
                                $( '.alert_box' ).addClass( 'error_message' );
                                _title      = 'Error';
                                _markup     = '<p>Hubo un error. ¿Podría intentarlo nuevamente?.</p>';
                                GBSite.openAlert( _title, _markup );
                            }
                            //GBSite.smoothScroll( 'body' );
                        },
                        type: "POST"
                    } );
                }
            } );
        }

        if ( $( '.budget_appointment_form' ).exists() ) {
            $( '.budget_appointment_form' ).on( 'submit', function ( e ) {
                e.preventDefault();
                e.stopPropagation();

                var budgetName,budgetPhone,budgetMail;

                budgetName  = ( typeof( $( 'form input.budget_name' ).val() ) !== 'undefined' ) ? $.trim( $( 'form input.budget_name' ).val() ) : "";
                budgetPhone = ( typeof( $( 'form input.budget_phone' ).val() ) !== 'undefined' ) ? $.trim( $( 'form input.budget_phone' ).val() ) : "";
                budgetMail  = ( typeof( $( 'form input.budget_mail' ).val() ) !== 'undefined' ) ? $.trim( $( 'form input.budget_mail' ).val() ) : "";

                var budget          = {};
                budget.budget_name  = budgetName;
                budget.budget_phone = budgetPhone;
                budget.budget_mail  = budgetMail;

                var validate    = GBSite.validateFormsAlter( budget, false );
                console.log(validate);
                if ( validate ) {
                    var formAction  = $( e.currentTarget ).attr( 'action' );
                    $.ajax ( formAction, {
                        beforeSend: function ( jqXHR, settings ) {
                            $('.error_indicator').remove();
                            if ( $('textarea' ).val() === "" ) {

                                $('textarea' ).val( 'Ninguno' );
                            }
                        },
                        cache: false,
                        complete: function ( jqXHR, textStatus ) {},
                        contentType: "application/x-www-form-urlencoded",
                        converters: {
                            "* text":       window.String,
                            "text html":    true,
                            "text json":    $.parseJSON,
                            "text xml":     $.parseXML
                        },
                        data: budget,
                        error:  function ( jqXHR, textStatus, errorThrown ) {
                            $( '.alert_box' ).addClass( 'error_message' );
                            _title      = 'Error';
                            _markup     = '<p>Hubo un error. ¿Podrías intentarlo nuevamente?.</p>';
                            GBSite.openAlert( _title, _markup );
                        },
                        success: function ( responseText, textStatus, jqXHR ) {
                            //console.log(responseText.success);
                            var _title, _markup;

                            if ( $.parseJSON( responseText ) ) {

                                responseText    = $.parseJSON( responseText );

                                if( responseText && ( responseText.success === 'true' || responseText.success === true ) ) {

                                    $( '.alert_box' ).addClass( 'thank_you_message' );
                                    _title      = 'Gracias';
                                    _markup     = '<p>Muchas gracias por tu interés en Giovanni Bojanini Microinjerto, <br />en breve nos pondremos en contacto contigo.</p>';
                                    GBSite.openAlert( _title, _markup );
                                    $( 'textarea' ).val( "" );
                                    $( '.budget_form input[type="text"]' ).val( '' );
                                    //$( form ).fadeOut( 300 );
                                } else {

                                    $( '.alert_box' ).addClass( 'error_message' );
                                    _title      = 'Error';
                                    _markup     = '<p>Hubo un error. ¿Podría intentarlo nuevamente?.</p>';
                                    GBSite.openAlert( _title, _markup );
                                }
                            } else {
                                $( '.alert_box' ).addClass( 'error_message' );
                                _title      = 'Error';
                                _markup     = '<p>Hubo un error. ¿Podría intentarlo nuevamente?.</p>';
                                GBSite.openAlert( _title, _markup );
                            }
                            //GBSite.smoothScroll( 'body' );
                        },
                        type: "POST"
                    } );
                }
            } );
        }

        //  Envio de datos de formulario de contacto
        if ( $( "#form_contact" ).exists() ) {

            $( "input:radio[name=contact_paciente]" ).click( function( ) {
                    /* Act on the event */
                    var valor   = $( "input:radio[name=contact_paciente]:checked" ).val();

                    if ( valor === "Si" ) {
                        $( "#uniform-contact_sucursal" ).slideDown();
                        $( "#uniform-contact_sucursal span" ).slideUp();
                        $( "#contact_sucursal" ).slideDown();
                    } else if ( valor === "No" ) {
                        $( "#uniform-contact_sucursal" ).slideUp();
                        $( "#contact_sucursal" ).slideUp();
                    }
            });

            $( "#contact_enviar" ).on( 'click', function ( e ) {

                e.preventDefault();
                e.stopPropagation();

                var contact         = {};
                contact.nombre      = $.trim( $( "#contact_first_name" ).val() );
                contact.apellido    = $.trim( $( "#contact_last_name" ).val() );
                contact.correo      = $.trim( $( "#contact_mail" ).val() );
                contact.telefono    = $.trim( $( "#contact_phone" ).val() );
                contact.paciente    = $.trim( $( "input[name=contact_paciente]:checked" ).val() );
                contact.sucursal    = $.trim( $( "#contact_sucursal" ).val() );
                contact.ayuda       = $.trim( $( "#contact_ayuda:checked" ).val() );
                contact.medio       = $.trim( $( "#contact_medio:checked" ).val() );
                contact.mensaje     = $.trim( $( "#contact_mensaje" ).val() );

                GBSite.validateFormsContact( contact );
            } );
        }

        //  Envio de datos de formulario de cita
        if ( $( ".form_cita" ).exists() ) {

            $( "#contact_enviar,#contact_enviar2" ).on( 'click', function( e ) {

                e.preventDefault();
                e.stopPropagation();

                var appointment         = {};
                appointment.nombre      = ( $( "#contact_first_name" ).val() !== "" ) ? $.trim( $( "#contact_first_name" ).val() ) : $.trim( $( "#contact_first_name2" ).val() );
                appointment.apellido    = ( $( "#contact_last_name" ).val() !== "" ) ? $.trim( $( "#contact_last_name" ).val() ) : $.trim( $( "#contact_last_name2" ).val() );
                appointment.correo      = ( $( "#contact_mail" ).val() !== "" ) ? $.trim( $( "#contact_mail" ).val() ) : $.trim( $( "#contact_mail2" ).val() );
                appointment.telefono    = ( $( "#contact_phone" ).val() !== "" ) ? $.trim( $( "#contact_phone" ).val() ) : $.trim( $( "#contact_phone2" ).val() );
                appointment.fecha       = ( $( "#contact_fecha" ).val() !== "" ) ? $.trim( $( "#contact_fecha" ).val() ) : $.trim( $( "#contact_fecha2" ).val() );
                appointment.horario     = ( $( "input[name=contact_horario]" ).is( ':checked' ) ) ? $.trim( $( "input[name=contact_horario]:checked" ).val() ) : $.trim( $( "input[name=contact_horario2]:checked" ).val() );
                appointment.sucursal    = ( $( "#contact_sucursal" ).val() !== "" ) ? $.trim( $( "#contact_sucursal" ).val() ) : $.trim( $( "#contact_sucursal2" ).val() );
                appointment.medio       = ( $( "input[name=contact_medio]" ).is( ':checked' ) ) ? $.trim( $( "input[name=contact_medio]:checked" ).val() ) : $.trim( $( "input[name=contact_medio2]:checked" ).val() );
                appointment.mensaje     = ( $( "#contact_mensaje" ).val() !== "" ) ? $.trim( $( "#contact_mensaje" ).val() ) : $.trim( $( "#contact_mensaje2" ).val() );

                if ( GBSite.validateFormsAppointment( appointment ) ) {

                    window.location.href    = 'http://www.giovannibojanini.com/';
                }
            } );
        }

        // Abre y cierra los lightbox con las imágenes.
        if ( $( '#branch-gallery' ).exists() ) {
            $( 'figure' ).on( 'click', 'a[title="Abrir"],a[title="Open"]', function ( e ) {
                var _clone  = $( e.currentTarget ).siblings( 'img' ).clone();
                _clone.appendTo( $( '.great-image' ) );
                $( '.great-image' ).addClass( 'displayed' );
            } );

            $( '.great-image' ).on( 'click', 'a[title="Cerrar"],a[title="Close"]', function ( e ) {
                $( e.currentTarget ).parent()
                                    .removeClass( 'displayed' );
                $( e.currentTarget ).next( 'img' )
                                    .remove();
            } );
        }
    } );
})( jQuery, window, document );
