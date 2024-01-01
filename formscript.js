//NEWS LETTERS SUBSCRIBE FORM SCRIPT
const scriptURL = 'https://script.google.com/macros/s/AKfycbzOemxLzwD5bgQlwJ_UYcsV2sIhDfZxYZdzImsfRMWMFTuruf9eGXxX7nL76vLV5DnMFA/exec'

const form = document.forms['submit-to-google-sheet']
const thank = document.getElementById('thanku');
const letterform = document.getElementById('form-container');
const fullname = document.getElementById("fullname");
const newsemail = document.getElementById("email");
const phonecont = document.getElementById("num-input");
const errormsg = document.getElementById("error-msg")

form.addEventListener('submit', e => {
e.preventDefault();
fetch(scriptURL, { method: 'POST', body: new FormData(form)})    
.then(reply => {
    if(fullname.value != '' && newsemail.value != '' && phonecont.value != ''){
    thank.style.display = 'block';
    callthesub()
    letterform.style.display = 'none';
    setTimeout(function(){
        thank.style.display = 'none';
        form.reset();
    }, 5000);
}else{
    errormsg.style.display = 'block';
    errormsg.innerText = 'complete the form and try again'
    setTimeout(()=>{
        errormsg.style.display = 'none'; 
    },3000);
}
})

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
