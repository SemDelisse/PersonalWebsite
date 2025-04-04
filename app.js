const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting) {
            if(entry.target.classList.contains('hidden-right')){
                entry.target.classList.add('shown-right');
            }else{
                entry.target.classList.add('shown-left');
            }
        }else {
            if(entry.target.classList.contains('hidden-right')){
                entry.target.classList.remove('shown-right');
            }else{
                entry.target.classList.remove('shown-left');
            }
        }
    });
});

const hiddenRightElements = document.querySelectorAll('.hidden-right');
hiddenRightElements.forEach((el) => observer.observe(el));

const hiddenLeftElements = document.querySelectorAll('.hidden-left');
hiddenLeftElements.forEach((el) => observer.observe(el));