function getInitialValue() {
    const val = document.querySelector('.form__input');

    val.addEventListener('change', function() {
        sessionStorage.setItem(val, val.value);
    })
}

function inputValue() {
    const val = document.querySelector('.form__input');
    const header = document.querySelector('.upload__header');

    val.value = sessionStorage.getItem(val);
}

function init() {
    const home = document.querySelector('.form__container');
    const upload = document.querySelector('.upload__container');

    if (home) {
        getInitialValue();
    }

    if(upload) {
        inputValue();
    }
}

init();
