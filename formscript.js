//NEWS LETTERS SUBSCRIBE FORM SCRIPT
const scriptURL = 'https://script.google.com/macros/s/AKfycbzOemxLzwD5bgQlwJ_UYcsV2sIhDfZxYZdzImsfRMWMFTuruf9eGXxX7nL76vLV5DnMFA/exec'
const form = document.forms['submit-to-google-sheet']
const thank = document.getElementById('thanku');
const letterform = document.getElementById('form-container');

form.addEventListener('submit', e => {
e.preventDefault();
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(reply => {
    thank.style.display = 'block';
    callthesub()
    setTimeout(function(){
        thank.style.display = 'none';
    }, 5000);
});
setTimeout(() =>{
   form.reset();
   letterform.style.display = 'none';
 }, 6000)
.catch(error => console.error('Error!', error.message));
 });
 
 // Call the name of the subscriber
 function callthesub(){
    const subscribername = document.getElementById('fullname');
    const subs = document.getElementById('subscriber');
    if(subs == ''){
        subs.innerHTML = subscribername.value;
    }else{
        subs.innerHTML = subscribername.value;
    }
 }
