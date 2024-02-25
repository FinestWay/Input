let input = document.querySelector('.input-field');
let img = document.querySelector('.icon');
let cancel = document.querySelector('.cancel');
let btn = document.querySelector('.button');
let img2 = document.querySelector('.image');

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
    });
});

btn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    li.style.fontFamily = 'Fira Code'
    li.style.fontSize = "15px"
    li.style.padding = "10px"
    li.style.backgroundColor = "blue"
    // li.style.overflowX = "scroll"
    li.style.borderRadius = "10px"
    const list = document.querySelector('.lists')
    list.appendChild(li);
});
