
const userNameInput = document.querySelector('#user');
const keyInput = document.querySelector('#key');
const secretInput = document.querySelector('#secret');
const btnSubmit = document.querySelector('#submit');

let inputs = [userNameInput, keyInput, secretInput];

btnSubmit.addEventListener('click', SendRequest)


const apis = [];

function EditApi(elment) {
    const childrenParent = elment.parentElement.parentElement.children;
    let id = childrenParent[0];
    userNameInput.value = childrenParent[1].textContent;
    keyInput.value = childrenParent[2].textContent;
    secretInput.value = childrenParent[3].textContent;
}
function SendRequest() {
    let messaage = Validate();
    if (messaage == "") {
        console.log("ok");
        //todo send request
        CreateRowTable()
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



function CreateRowTable() {
    let newApi = {
        id: null,
        userName: inputs[0].value,
        apiKey: inputs[1].value,
        apiSecret: inputs[2].value
    };
    let edit = apis.find(item => item.userName === newApi.userName)
    if (edit) {
        let idndexObj = apis.findIndex(item=>item.userName===newApi.userName);
        apis[idndexObj] = newApi.id = edit.id;
        apis.forEach(item=>{
            let tr = document.createElement("tr");
            tr.innerHTML = (`<td>${apis.length + 1}</td><td>${newApi['userName']}</td><td>${newApi['apiKey']}</td><td>${newApi['apiSecret']}</td><td><button class="btn delete">delete</button></td><td><button class="btn edit" onClick="EditApi(this)">edit</button></td>`);
            document.querySelector('tbody').appendChild(tr);
        })
    }else{
        apis.push(newApi.id = apis.length+1);
        let tr = document.createElement("tr");
        tr.innerHTML = (`<td>${apis.length + 1}</td><td>${newApi['userName']}</td><td>${newApi['apiKey']}</td><td>${newApi['apiSecret']}</td><td><button class="btn delete">delete</button></td><td><button class="btn edit" onClick="EditApi(this)">edit</button></td>`);
        document.querySelector('tbody').appendChild(tr);
    }
}