
let os=document.getElementById('os');

function Clear()
{
   os.value="";
}

function del()
{
    os.value=os.value.slice(0,-1);
}

function display(txt)
{
   os.value=os.value+txt;
}



function cube()
{
   os.value=os.value*os.value*os.value;
}

function sqrt()
{
   os.value= Math.sqrt(os.value);
}

function power()
{
   os.value=os.value*os.value;
}

function gst() {
   let amount = parseFloat(os.value); 
   let gstRate = 18; 
   if (isNaN(amount)) {
      os.value = "Error"; 
   } else {
      let gstAmount = (amount * gstRate) / 100;  
      let totalAmount = amount + gstAmount; 
      os.value = totalAmount.toFixed(2); 
   }
}

function calculate()
{
   os.value=eval(os.value);
}

