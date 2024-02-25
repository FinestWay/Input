let input = document.querySelector('.input-field');
let img = document.querySelector('.icon');
let cancel = document.querySelector('.cancel');
let btn = document.querySelector('.button');

input.addEventListener('click', () => {
    const newClass = input.classList;
    const newImg = img.classList;
    const newCancel = cancel.classList;
    const newBtn = btn.classList;

    newClass.add('input-fields');
    newImg.add('imgs');
    newCancel.add('hide');
    newBtn.add('submit');

    cancel.addEventListener('click', () => {
        newClass.remove('input-fields')
        newImg.remove('imgs')
        newCancel.remove('hide')
        newBtn.remove('submit');
        input.value = "";
    })
});

btn.addEventListener('click', () => {
    
})
