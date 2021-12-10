$(function() {
    $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('#intro').offset().top }, 'slow');
        return false;
    });
});


function openCalendar() {
    os = getOS();
    url = "";
    switch (os) {
        case "Mac OS":
        case "iOS":
            url = "/Assets/SNiC.ics";
            break;
        case "Windows":
        case "Android":
        case "Linux":
            url =
                "https://www.google.com/calendar/render?action=TEMPLATE&text=SNiC+presents%3A+ResilIT&dates=20191126T070000Z%2F20191126T190000Z";
            break;
    }
    window.open(url);
}

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
        iosPlatforms = ["iPhone", "iPad", "iPod"],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = "Mac OS";
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = "iOS";
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = "Windows";
    } else if (/Android/.test(userAgent)) {
        os = "Android";
    } else if (!os && /Linux/.test(platform)) {
        os = "Linux";
    }

    return os;
}

