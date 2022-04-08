
// DOM Elements

// let closeModalBtn = document.querySelectorAll('.closeModal')
// let form = document.forms['contactForm']
let modal = document.querySelector('#contactModal')

/*Fonction Open Modal*/
function openModal() {
    // let name = document.querySelector('h1').textContent
    document.body.classList.add('modal-open')
    document.body.classList.add('overflow')
    window.scrollTo(0, 0)
    modal.scrollTo(0, 0)

    modal.getAttribute("aria-hidden", "false")

    form.reset()
    form.style.display = ''
}


/*Fonction close Modal*/
function closeModal() {
    // let modal = document.querySelector('#contactModal')
    document.body.classList.remove('modal-open')
    document.body.classList.remove('overflow')
    modal.getAttribute("aria-hidden", "true")
}

/*fields error function*/

function showfieldError(el){
el.closest('form-group').dataset.errorVisible = true
}

function closeFieldError(el){
el.closest('form-group').dataset.errorVisible = null}


/*Validation form and listener*/

// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     console.log(form.elements)
//     // Expression for fields
//     const verifMail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
//     const textFormat = /^[a-z\é\è\-\^\']{2,}$/i

//     //Form flag validation
//     let formFlag = true

//     // Firstname - min 2 char & not empty
//     if (!form.elements['first'].value.trim().match(textFormat)) {
//         formFlag = false
//         showFieldError(form.element['firstName'])
//     } else {
//         closeFieldError(form.element['firstName'])
//     }

//     // Lastname - min 2 char & not empty
//     if (!form.elements['last'].value.trim().match(textFormat)) {
//         formFlag = false
//         showFieldError(form.element['firstName'])
//     } else {
//         closeFieldError(form.element['firstName'])
//     }

//     // email validity
//     if (!form.elements['email'].value.trim().match(verifMail)) {
//         formFlag = false
//         showFieldError(form.element['firstName'])
//     } else {
//         closeFieldError(form.element['firstName'])
//     }

//     //Check validation errors
//     if (!formFlag) {
//         return false
//     }

// })
