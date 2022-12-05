//animation scroll
const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('anim');
        }else{
            entry.target.classList.remove('anim')
        }
    })
})

const hiddenElements=document.querySelectorAll('#hidden');
hiddenElements.forEach(el=> observer.observe(el));

//Form validation for modal
const nameInput=document.getElementById('name');
const emailInput=document.getElementById('email');
const msgInput=document.getElementById('message');
const submitBtn=document.getElementById('submit');
const alert=document.querySelector('.alert-msg');

submitBtn.addEventListener('click', getContact);

function getContact(e){
    const contact={
        name: nameInput.value,
        email: emailInput.value,
        message: msgInput.value
    }

    //Store contact to local storage
    storeContact(contact)
}

function storeContact(info){
    let users;
    let user=localStorage.getItem('contactDetails');
    if(user===null){
        users=[];
    }else{
       users=JSON.parse(user);
    }
    users.push(info);
    localStorage.setItem('contactDetails',JSON.stringify(users))
}

//validate form
document.querySelector('#submit').addEventListener('click',()=>{

    if(nameInput.value==='' || nameInput.value.length<2 || !(isNaN(nameInput.value))){
        nameInput.nextElementSibling.classList.remove('d-none');
        setTimeout(()=>{
            nameInput.nextElementSibling.classList.add('d-none');
        },3000)
        return false;
    }
    if(emailInput.value==='' || emailInput.value.length<10){
        emailInput.nextElementSibling.classList.remove('d-none');
        setTimeout(()=>{
            emailInput.nextElementSibling.classList.add('d-none');
        },3000)
        return false;
    }
    if(msgInput.value==='' || msgInput.value.length<2){
        msgInput.nextElementSibling.classList.remove('d-none');
        setTimeout(()=>{
            msgInput.nextElementSibling.classList.add('d-none');
        },3000)
        return false;
    }

    alert.innerText=`Thanks ${nameInput.value} for contacting BamsTech`;
    alert.classList.add('text-success');

    setTimeout(()=>{
        alert.remove();
    },5000);
})