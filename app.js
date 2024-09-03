let isModalOpen = false;

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'
    emailjs
    .sendForm(
        'service_yzkv3wp',
        'template_uheqp5t',
        event.target,
        'wciuI5vtvYyfew6j9'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible')
        success.classList += ' modal__overlay--visible'
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible')
        alert(
            'The email service is temporarily unavailable. Please contact me at joshjthompson@yahoo.com'
        );
    })
}
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal--open')
    }
    isModalOpen = !isModalOpen;
    document.body.classList += ' modal--open'
}

