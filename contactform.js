 //CONTACT US FORM SCRIPT
 const scriptURL = 'https://script.google.com/macros/s/AKfycbx99ylDUQ16u_FVkmg6Vz_RuOfpY5a2MR2r13LFYxuWFonR4TqOCZpEuyJtL5tZwqogUQ/exec'
 const form = document.forms['submit-to-google-sheet']
 const msg = document.getElementById('msg');
 const errormsg = document.getElementById('error-msg');

 form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => {
         msg.innerHTML = " Message sent Succesfuly";
         setTimeout(function(){
             msg.innerHTML = "";
         },5000)
         form.reset();
     })
     .catch(error => {
         errormsg.innerHTML = "message not sent";
         /*setTimeout(function(){
             errormsg.innerHTML = "";
         },5000)*/
     })
 })