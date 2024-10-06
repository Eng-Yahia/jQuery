
const size = $(".slider .setting").outerWidth(true);
console.log(size);

$(".slider").animate({ left: -size }, 0);

let flag = true;

$(".slider .icons").on('click', function (){

  if (flag == true) {
    $(".slider").animate({ left: 0 }, 900);
    
    flag = false
  } else {
      flag = true
    $(".slider").animate({ left: -size }, 900);
    
  }
});

$('#x').on('click',function(){
    $(".slider").animate({ left: -size }, 900);
      
})

$('#p-1 , #p-2 ,#p-3 ,#p-4').slideUp(0)

$('#h-1').on('click',function(){
    $('#p-1').slideToggle(500)
    $('#p-2').slideUp(500)
    $('#p-3').slideUp(500)
    $('#p-4').slideUp(500)

})
$('#h-2').on('click',function(){
    $('#p-2').slideToggle(500)
    $('#p-1').slideUp(500)
    $('#p-3').slideUp(500)
    $('#p-4').slideUp(500)

})
$('#h-3').on('click',function(){
    $('#p-3').slideToggle(500)
    $('#p-2').slideUp(500)
    $('#p-1').slideUp(500)
    $('#p-4').slideUp(500)

})
$('#h-4').on('click',function(){
    $('#p-4').slideToggle(500)
    $('#p-2').slideUp(500)
    $('#p-3').slideUp(500)
    $('#p-1').slideUp(500)

})


var countDownDate = new Date("apr 29, 2025 12:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = (`${days} days`);
  document.getElementById("hour").innerHTML = (`${hours} hours`);
  document.getElementById("min").innerHTML = (`${minutes} minutes`);
  document.getElementById("secs").innerHTML = (`${seconds} seconds`);
  

}, 1000);

const textarea = document.getElementById('area');
const charCountDisplay = document.getElementById('Count');

textarea.addEventListener('input', function() {
    const maxLength = 100;
    const currentLength = textarea.value.length;
    const remainingChars = maxLength - currentLength;

    charCountDisplay.textContent = remainingChars + " characters left";
});
  