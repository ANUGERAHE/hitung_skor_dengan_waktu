const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const tombol1 = document.querySelector("#tombol1");
const tombol2 = document.querySelector("#tombol2");
const reset = document.querySelector("#reset");
const batas = document.querySelector("#jumlah");
const kurang1 = document.querySelector("#kurang1");
const kurang2 = document.querySelector("#kurang2");
const jam = document.querySelector("#jam");
const menit = document.querySelector("#menit");
const detik = document.querySelector("#detik");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const ulang = document.querySelector("#ulang");

let p1score = 0;
let win = 100;
let over = false;
let p2score = 0;
let seconds = 0;
let interval = null;


tombol1.addEventListener('click',function(){
    if(!over){
        
        p1score += 1;
    
        if(p1score === win){
            over = true;
        }
    }
    p1.textContent = p1score;

})

tombol2.addEventListener('click',function(){
    if(!over){
        
        p2score += 1;
    
        if(p2score === win){
            over = true;
        }
    }
    p2.textContent = p2score;
})

reset.addEventListener('click',() =>{
    p1.textContent = 0;
    p2.textContent = 0;
    p1score = 0;
    p2score = 0;
})

kurang1.addEventListener('click',()=>{
    p1score -=1;
    p1.textContent = p1score;
})

kurang2.addEventListener('click',()=>{
    p2score -=1;
    p2.textContent = p2score;
})

start.addEventListener('click',startt);
pause.addEventListener('click',stopp);
ulang.addEventListener('click',resettt);

function timer () {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mnt = Math.floor((seconds - (hrs * 3600)) / 60);
    let dtk = seconds % 60;

    jam.innerText = hrs;
    menit.innerText = ':'+mnt;
    detik.innerText = ':' +dtk
}



function startt (){
    if(interval){
        return
    }

    interval = setInterval(timer,1000);
}

function stopp (){
    clearInterval(interval);
    interval = null;
}

function resettt (){
    stopp();
    seconds = 0;
    jam.textContent = '0';
    menit.innerText = ':0';
    detik.innerText = ':0';
}


