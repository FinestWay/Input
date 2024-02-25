let input = document.querySelector('.input-field');
let img = document.querySelector('.icon');
let cancel = document.querySelector('.cancel');

input.addEventListener('click', () => {
    const newClass = input.classList;
    const newImg = img.classList;
    const newCancel = cancel.classList;

    newClass.add('input-fields');
    newImg.add('imgs');
    newCancel.add('hide');

    cancel.addEventListener('click', () => {
        newClass.remove('input-fields')
        newImg.remove('imgs')
        newCancel.remove('hide')
    })
});
