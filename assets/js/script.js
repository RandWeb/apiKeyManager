
const userNameInput = document.querySelector('#user');
const keyInput = document.querySelector('#key');
const secretInput = document.querySelector('#secret');
const btnSubmit = document.querySelector('#submit');

let inputs = [userNameInput, keyInput, secretInput];

btnSubmit.addEventListener('click',SendRequest)

function SendRequest() {
    let messaage = Validate();
    if (messaage == "") {
        console.log("ok");
        //todo send request
    } else {
        ShowToast(messaage)
    }
}
function Validate() {
    let error = "";
    inputs.filter((item) => {
        if (item.value === "") {
            error += `${item.name} can not be empty <br/>`;
        }
    });
    return error
}

function ShowToast(messaage) {
    console.log(messaage);
    let toast = document.querySelector(".notification");
    let open = document.querySelector(".notification__open");
    let toastMessage = document.querySelector(".notification__message");
    toastMessage.innerHTML = messaage;
    open.classList.add('opening')
    toastMessage.classList.add('message__opening');
    toast.classList.add('notification__opening');
    setTimeout(() => { toastMessage.className = toastMessage.className.replace("message__opening", ""); }, 5000);
    setTimeout(() => { open.className = open.className.replace("opening", ""); }, 6000);
    setTimeout(() => {
        toast.className = toast.className.replace("notification__opening", "");
    }, 7000);

}