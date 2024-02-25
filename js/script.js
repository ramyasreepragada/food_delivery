function findFood() {
    const foodItem = document.getElementById('from').value;
    const quantity = document.getElementById('to').value;
  
    const resultElement = Math.floor(Math.random()*10+10);
    console.log(resultElement);
    document.getElementById('result').textContent =resultElement+" km";
    setTimeout(function(){if(resultElement<25)
    {
        window.location.href="friends1.html";
    }
    else{
        document.getElementById('result1').textContent="Sorry guys delivery is not provided";
    }
}
  ,4000);
}
  function payment(){
   
    const selectedOption = document.querySelector('input[name="yesNoOption"]:checked');
    var pay=50;
  // Check if any radio button is selected
    if (selectedOption) {
    // Output the selected value
    pay=pay+40;
     }
     document.getElementById('say').textContent="You Have To Pay Rs."+pay;
     setTimeout(function(){window.location.href="friends2.html";},4000);
  }