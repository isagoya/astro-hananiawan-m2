setDonationHtml();

function setDonationHtml(){
  let header_element = document.getElementsByTagName('header').item(0);
  console.log(header_element);
  let donation_element = `
  <div id="donation" class="row justify-content-start" style="padding-top:0; padding-bottom:0; margin:0 10px;">
  <div class="col-md-4" style="text-align: center;">
    <a href="https://syncable.biz/en/associate/rainbow-culion/business/1518" style="text-decoration: none; color:#000;"><img src="/assets/images/Syncable_logo.png" style="width:30px; margin-right: 10px;"/>donate to this translation
      project</a>
    </div>
  </div>
  `;
  header_element.insertAdjacentHTML('afterbegin', donation_element);

}



