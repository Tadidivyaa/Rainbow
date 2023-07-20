const button=document.querySelector("button");
const body=document.querySelector("body");
const color=['violet','indigo','blue','green','yellow','orange','red'];
const number=[0,1,2,3,4,5,6];
body.style.backgroundColor='skyblue';
document.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
    
});

