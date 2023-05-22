const bill = document.querySelector("#num_1");
const tip = document.querySelectorAll(".b1");
const people = document.querySelector(".p4");
const totalVal = document.querySelectorAll(".tip_amount");
const increase = document.querySelector(".b7");
const decrease = document.querySelector(".b9");
const generate = document.querySelector(".b10");
const reset = document.querySelector(".b11");

let value = 0 ;
let peopleVal = 1;
let tipVal = 0;
// console.log(bill);

// increase and decrease button
peopleVal= parseInt(people.innerText = peopleVal);
document.querySelector(".b7").addEventListener('click', function () {
    peopleVal = peopleVal + 1;
    people.innerText = peopleVal;
})

document.querySelector('.b9').addEventListener('click', function () {
    peopleVal = --peopleVal;
    if(peopleVal < 0){
        peopleVal = 0;
    }
    people.innerText = peopleVal;
})


//add event listner
bill.addEventListener('input', (e) =>{
    value = parseInt(e.target.value);
    
    
    console.log(bill.value);
});

tip.forEach(btn => {
    btn.addEventListener('click',handleClick)
    

    

});

generate.addEventListener('click', generatefn)

reset.addEventListener('click' , handleReset)

//handle click function
function handleClick(event){
    tip.forEach(btn => {
        btn.classList.remove('active')
       
        

        
        if(event.target.innerHTML === btn.innerHTML){
            btn.classList.add('active');
            tipVal = parseFloat(btn.innerHTML)/100
            
        }
        

    })
    
    
}
//calculate funtion
function calculate() {
    if(peopleVal >= 1 ) {
        let tip = value * tipVal / peopleVal;
        let totalAmount = value * (tipVal + 1) / peopleVal;
        console.log(tip)
        console.log(totalAmount)

        totalVal[0].innerHTML = '₹' + tip.toFixed(2);
        totalVal[1].innerHTML = '₹' + totalAmount.toFixed(2);
    }
}


 function generatefn () {
    if (value > 0 && tipVal > 0 && peopleVal >=1){
    generate.style.color = "#ffffff";
    generate.style.backgroundColor = "#9c60ff";
    reset.style.color = "#9c60ff";
    reset.style.backgroundColor = "#ffffff";
    calculate() ;
    }
}

function handleReset(){
    
    people.innerText = '1' ;
    totalVal[0].innerHTML = '₹' +'0.00';
    totalVal[1].innerHTML = '₹' +'0.00';
    bill.value = '0';
    value = 0 ;
    peopleVal = 1;
    tipVal = 0;
    
    generate.style.color = "#8f8f8f";
    generate.style.backgroundColor = "#fbfafb";
    reset.style.color = "#9c60ff";
    reset.style.backgroundColor = "#c39fff";
    tip.forEach((val) => {
        val.classList.remove("active");
    });

}
