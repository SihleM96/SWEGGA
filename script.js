function functionOne() {
   var x = document.getElementById('quantityOne').value * 150.95;                //female
   var y = document.getElementById('quantityTwo').value * 180.95;               //male
   document.getElementById('totalOne').innerHTML = x.toFixed(2);               //total female
   document.getElementById('totalTwo').innerHTML = y.toFixed(2);              //total male
   document.getElementById('totalThree').innerHTML = (x + y).toFixed(2);     //add male + female
}
