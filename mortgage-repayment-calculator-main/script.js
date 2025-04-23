const buttonclick = document.querySelector(".calculate");
const part2 = document.querySelector(".part2")
const partCalc = document.querySelector(".part2-calculated")
const clearAll = document.querySelector(".clearAll")
const inputAll = document.querySelectorAll("input")

document.querySelectorAll(".type").forEach(input => {
  input.addEventListener('change', function() {
    document.querySelectorAll('.option').forEach(div => {
      div.classList.remove('select-radio')
    })

    if(this.checked){
      this.parentElement.classList.add('select-radio')
    }
  })
});

document.querySelector('.clearAll').addEventListener("click", ()=>{
  inputAll.forEach(input => {
    input.value = "";
  });
  document.querySelectorAll('.error-states').forEach(error =>{
    error.classList.add("none")
  })
  document.querySelectorAll(".abs, .left").forEach(span => {
    span.classList.remove("red");
  })
}) 


//Delete the Error-State when AnyKey is Pressed on the input
inputAll.forEach(input => {
  input.addEventListener("keypress", ()=>{
    document.querySelectorAll('.error-states').forEach(error =>{
      error.classList.add("none")
    })
    document.querySelectorAll(".abs, .left").forEach(span => {
      span.classList.remove("red");
    })
  })
})


buttonclick.addEventListener('click', (e)=>{
  e.preventDefault();
  // part2.classList.toggle("none")
  // partCalc.classList.toggle("none")

  const mortgageAmt = parseFloat(document.getElementById("amt").value);
  const mortgageTerm = parseFloat(document.getElementById("term").value);
  const mortgageRate = parseFloat(document.getElementById("rate").value) / 100;

  const mortgageType = document.querySelector('input[name = "mortgage-option"]:checked');
  

  let isValid = true;

  if(isNaN(mortgageAmt) || mortgageAmt <= 0 || mortgageAmt == ""){
    document.querySelector('.amt-err').classList.remove("none")
    document.querySelector(".devise-amt").classList.add("red");
    isValid = true
  }
  if(isNaN(mortgageTerm) || mortgageTerm <= 0 || mortgageAmt == ""){
    document.querySelector('.year-err').classList.remove("none")
    document.querySelector(".year").classList.add("red");
    isValid = true
  }
  if(isNaN(mortgageRate) || mortgageRate <= 0 || mortgageRate == ""){
    document.querySelector('.rate-err').classList.remove("none");
    document.querySelector(".rate").classList.add("red");
    isValid = true
  }
  if(!mortgageType){
    document.querySelector(".type-err").classList.remove("none");
    isValid = true
  }else{
    document.querySelector(".type-err").classList.add("none")
  }

  // Calculate
  if(isValid){
    let monthlyPayment = 0;
    let totalRepayement = 0;

    part2.classList.add("none");
    partCalc.classList.remove("none");

    if(mortgageType === 'repayement'){
      const montlyrate = mortgageRate / 12;
      const n = mortgageTerm * 12;

      monthlyPayment = mortgageAmt * (montlyrate * Math.pow(1 + montlyrate, n)) / 
      (Math.pow(1 + montlyrate, n) - 1);

    }else if (mortgageType === 'interest') {
      // Monthly Interest Only 
      monthlyPayment = (mortgageAmt * mortgageRate) / 12;
      totalRepayement = monthlyPayment * mortgageTerm * 12
    }

    document.getElementsByClassName('money').textContent = `$${monthlyPayment.toFixed(2)}`
    document.getElementsByClassName('repay-money').textContent = `$${monthlyPayment.toFixed(2)}`
  }
})