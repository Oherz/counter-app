const countDisplay=document.getElementById('count');
const incrementBtn=document.getElementById('increment');
const decrementBtn=document.getElementById('decrement');
const resetBtn=document.getElementById('reset');
// Initial count value
let count=0;


// Event Listeners
incrementBtn.addEventListener("click",()=> {
    count++;   
    countDisplay.innerText=count;
}   
);
decrementBtn.addEventListener("click",()=> {
    count--;   
    countDisplay.innerText=count;
}  );

resetBtn.addEventListener("click",()=> {
    count=0;   
    countDisplay.innerText=count;
}   );