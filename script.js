const button=document.querySelectorAll('.box')
const body=document.querySelector("body")

button.forEach(function(value){
    value.addEventListener('click',function(color){
        if(color.target.id==='box1'){
            body.style.backgroundColor='#fe5252';
        }
        if(color.target.id==='box2'){
            body.style.backgroundColor='#ffb64d';
        }
        if(color.target.id==='box3'){
            body.style.backgroundColor='#bfc934';
        }
        if(color.target.id==='box4'){
            body.style.backgroundColor='#8bc24a';
        }
        if(color.target.id==='box5'){
            body.style.backgroundColor='#01acc0';
        }
        if(color.target.id==='box6'){
            body.style.backgroundColor='#64b3f5';
        }
        if(color.target.id==='box7'){
            body.style.backgroundColor='#b968c7';
        }
        if(color.target.id==='box8'){
            body.style.backgroundColor='#f38eb0';
        }
    })
})
