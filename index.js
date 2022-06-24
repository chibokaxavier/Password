let passwordInput = document.getElementById('password')
let checkbox1 = document.getElementById('checkbox-1')
let checkbox2 = document.getElementById('checkbox-2')
let checkbox3 = document.getElementById('checkbox-3')
let checkbox4 = document.getElementById('checkbox-4')
let checkbox5 = document.getElementById('checkbox-5')
let submit = document.getElementById('submit')
passwordInput.addEventListener('keydown', dochecks)
passwordInput.addEventListener('keyup', dochecks)

function dochecks(e) {
    console.log(e.target.value)
    let regex = /[A-Z]/g;
    let passed1 = regex.test(passwordInput.value)
    checkbox1.checked = passed1
    // number regex
    let regex2 = /[0-9]/g;
    let passed2 = regex2.test(passwordInput.value)
    checkbox2.checked = passed2
    // symbol regex
    let regex3 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    let passed3 = regex3.test(passwordInput.value)
    checkbox3.checked = passed3
    // lowercase regex
    let regex4 = /[a-z]/g;
    let passed4 = regex4.test(passwordInput.value)
    checkbox4.checked = passed4;
    // min length of 8
    let regex5 = /.{8,}/
    let passed5 = regex5.test(passwordInput.value)
    checkbox5.checked = passed5;
    let passed = passed1
        && passed2
        && passed3
        && passed4
        && passed5
    return passed
}

submit.addEventListener('submit', function (event) {
    let passed = dochecks(event)
    if (!passed) {
        event.preventDefault()
        alert('Passsword Must contain number, symbol,,capital letter and small letter')
        return
    }
})