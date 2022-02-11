export class Modal {

// DOM Elements


modal = document.querySelector('#modal')
openModalBtn = document.querySelector('#contactBtn')
closeModalBtn = document.querySelectorAll('.closeModal')

form = document.forms['contactForm']

/*Fonction Open Modal*/
openModal() {
    document.body.classList.add('modal-open')
    document.body.classList.add('overflow')
    window.scrollTo(0, 0);
    modal.scrollTo(0, 0);

    form.reset()
    form.style.display = ''
    modalThanks.style.display = 'none'
}


/*Fonction close Modal*/
closeModal() {
    document.body.classList.remove('modal-open')
    document.body.classList.remove('overflow')
}


/*listener Modal*/


/*Open Modal*/
openModalBtn.addEventListener("click", openModal)

/*close Modal*/
closeModalBtn.forEach(el => {
    el.addEventListener('click', closeModal)
})



/*Validation form and listener*/

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Expression for fields
    const verifMail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
    const textFormat = /^[a-z\é\è\-\^\']{2,}$/i

    //Form flag validation
    let formFlag = true

    // Firstname - min 2 char & not empty
    if (!form.elements['first'].value.trim().match(textFormat)) {
        formFlag = false
        firstError.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom'
    } else {
        firstError.innerHTML = ''
    }

    // Lastname - min 2 char & not empty
    if (!form.elements['last'].value.trim().match(textFormat)) {
        formFlag = false
        lastError.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
    } else {
        lastError.innerHTML = ''
    }

    // email validity
    if (!form.elements['email'].value.trim().match(verifMail)) {
        formFlag = false
        mailError.textContent = 'L\'adresse email n\'est pas Valide.'
    } else {
        mailError.innerHTML = ''
    }


    //Check validation errors
    if (!formFlag) {
        return false
    }

})

}

