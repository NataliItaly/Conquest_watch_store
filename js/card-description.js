
/*----------card-description-----------*/
const basicDescriptionBtn = document.querySelector('.basic-description-btn');
const technicalDescriptionBtn = document.querySelector('.technical-description-btn');
const basicDescription = document.querySelector('.basic-description');
const technicalDescription = document.querySelector('.technical-description');

basicDescriptionBtn.addEventListener('click', function () {
    basicDescriptionBtn.classList.toggle('current-description');
    basicDescription.classList.toggle('open-description')
    if (technicalDescriptionBtn.classList.contains('current-description')) {
        technicalDescriptionBtn.classList.remove('current-description')
    }
    if (technicalDescription.classList.contains('open-description')) {
        technicalDescription.classList.remove('open-description')
    }
});

technicalDescriptionBtn.addEventListener('click', function () {
    technicalDescriptionBtn.classList.toggle('current-description')
    technicalDescription.classList.toggle('open-description')
    if (basicDescriptionBtn.classList.contains('current-description')) {
        basicDescriptionBtn.classList.remove('current-description')
    }
    if (basicDescription.classList.contains('open-description')) {
        basicDescription.classList.remove('open-description')
    }
});