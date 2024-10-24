window.addEventListener('scroll', function () {
    let num = (window.scrollY / window.innerHeight) * 4;

    document.querySelector('body').style.backdropFilter = `blur(${num}px)`
})