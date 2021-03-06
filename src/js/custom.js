/**
 * Created by deniskondrachuk on 29.03.17.
 */
/**
 * setting arrow up for ScrollTop
 */

$(document).ready(function () {
    $('#i_form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            marketing: {
                required: true
            },
            message: {
                required: true
            },
        },
        messages: {
            name: "Please enter your firstname and lastname",
            email: {
                required: "Please enter your email"
            },
        },
    });

    function onLoadContactTop() {
        var pathContact = window.location.pathname;
        if (pathContact === "/contacts/") {
            $("html, body").scrollTop(0);
        } else if (pathContact === "/en/contacts/") {
            $("html, body").scrollTop(0);
        } else {
            return
        }
        console.log(pathContact);
    }

    console.log(onLoadContactTop());

//Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#scrollToTop').fadeIn("slow");
            $('#top_main').fadeIn("slow");
        } else {
            $('#scrollToTop').fadeOut("slow");
            $('#top_main').fadeOut("slow");
        }
    });

//Click event to scroll to top
    $('#scrollToTop, #top_main').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    /**
     * function progress for animation progress with
     * @param percent
     * @param $element
     */

    function progress(percent, $element) {
        var progressBarWidth = percent * $element.width() / 100;
        $element.find('div').animate({width: progressBarWidth}, 1200);
    }

    progress(80, $('.progress-wrapper'));
    progress(100, $('.progress-wrapper-2'));
    progress(90, $('.progress-wrapper-3'));


    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 143
                    }, 900);
                    return false;
                }
            }
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 285) {
            $('#header_').removeClass('header-banner-icon').addClass('header-banner-icon_white');
            $(".header-motivation-txt").css("display", "none");
        } else {
            $('#header_').removeClass('header-banner-icon_white').addClass('header-banner-icon');
            $(".header-motivation-txt").css("display", "block");
        }
    });

    function PathLoader(el) {
        this.el = el;
        this.strokeLength = el.getTotalLength();

        // set dash offset to 0
        this.el.style.strokeDasharray =
            this.el.style.strokeDashoffset = this.strokeLength;
    }

    PathLoader.prototype._draw = function (val) {
        this.el.style.strokeDashoffset = this.strokeLength * (1 - val);
    };
    PathLoader.prototype.setProgress = function (val, cb) {
        this._draw(val);
        if (cb && typeof cb === 'function') cb();
    };
    PathLoader.prototype.setProgressFn = function (fn) {
        if (typeof fn === 'function') fn(this);
    };
    var body = document.body,
        svg = document.querySelector('svg path');

    if (svg !== null) {
        svg = new PathLoader(svg);

        setTimeout(function () {
            document.body.classList.add('active');
            svg.setProgress(1);
        }, 200);
    }
});



