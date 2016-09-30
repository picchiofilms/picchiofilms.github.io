function ToggleMenu() {
    if (document.querySelector('header').classList.contains('active')) {
        document.querySelector('header').classList.remove('active')
    } else {
        document.querySelector('header').classList.add('active')
    }
}
