const type = new Typed('.text',{
    strings: ['choice','favorite'],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true
})
const image = document.getElementById('image');
const btn = document.getElementsByClassName('btn');
btn[0].onclick = function(){
    image.src = 'images/312858982_2165078280340079_1312798471102825984_n.jpg'
    for(let bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add('active')
}
btn[1].onclick = function(){
    image.src = 'images/IMG-20230508-WA0003.jpg'
    for(let bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add('active')
}
btn[2].onclick = function(){
    image.src = 'images/IMG-20230508-WA0024.jpg'
    for(let bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add('active')
}
function isAdd(add){
    const inputss = document.getElementById('inputs');
    const inputsV = inputss.value;
    const inputsP = parseFloat(inputsV);
    let value;
    if(add){
        value = inputsP + 1;
    }else{
        if(inputsP <= 0){
            value = 0;
        }else{
            value = inputsP - 1;
        }
    }
    inputss.value = value;
}
document.getElementById('minus').addEventListener('click',function(){
    isAdd(false)
})
document.getElementById('plus').addEventListener('click',function(){
    isAdd(true)
})