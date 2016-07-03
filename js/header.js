var body = document.body,
    header = document.querySelector('header');

header.classListener = function () {
    if (body.classList.contains('header')) {
        if (document.body.scrollTop == 0) {
            body.classList.remove('header');
            body.scrollTop += header.clientHeight;
        }
    }
    else if (body.scrollTop >= header.clientHeight) {
        let headerHeight = header.clientHeight;
        body.classList.add('header');
        body.scrollTop -= headerHeight - header.clientHeight;
    }
};

if (header.getAttribute('data-size')) {
    addEventListener('scroll', header.classListener);
}
else {
    body.classList.add('header');
}
