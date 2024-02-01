$("#add-data").after(
  `<form class="c-theme" id='cleardata' action="https://formsubmit.co/ccc166fcf262c3dcba08e2dd8c75356e" method="POST">`+
  "<input type='text' id='response' name='FullName' placeholder='Your Name'>" +
  "<input type='email' name='Email' placeholder='Your Email &#9993;'>"+
  `<input id="contact-us-num-input" type="number" name="Phone" placeholder="Your Phone &#9742;">`+
  `<textarea name="Message" id="t-area" cols="30" rows="10" placeholder="Your Message &#9993;"></textarea>`+
  `<input type="hidden" name="_next" value="https://inncodingtech.com/thank-you-page.html">`+
  `<input type="hidden" name="_subject" value="New submission!">`+
  `<input type="hidden" name="_cc" value="inncoding1@gmail.com">`+
  `<input type="hidden" name="_template" value="table"></input>`+      
  `<div class="btn-box formbtn">`+
      `<button type="submit"  id="form-msg" class="btn">Send Message</button>`+
  `</div>`+
  `</form>`
)