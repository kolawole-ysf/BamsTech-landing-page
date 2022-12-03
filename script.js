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

//Form validation
