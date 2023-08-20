let navbar_element = document.getElementById('navbar');
let add_offcanvas = `

  <button type="button" class="btn btn-light" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-expanded="false" aria-controls="offcanvasExample">
  <span class="navbar-toggler-icon"></span>
  <!-- data-bs-target属性を持つボタン -->
  </button>


  <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">index</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="accordion" id="accordionExample">

      <div>
        <p><a href="./#"><strong>Hana ni Awan • meet the flowers</strong></a></p>
        <ul>
          <li class="accordion-item"><a href="./#introduction">Introduction</a></li>
          <li class="accordion-item"><a href="./#table-of-contents">Table of Contents</a></li>
          <li class="accordion-item">
            <div class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <a href="chapt-1/index.html#">Single File Line Up</a>
                <!-- Single file lineup -->
              </button>
            </div>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>                      
                  <li><a href="chapt-1/index.html#oppadake">Oppadake</a></li>
                  <li><a href="chapt-1/index.html#minamidaito-island">Minamidaito Island</a></li>
                  <li><a href="chapt-1/index.html#single-file-line-up*">Single File Line Up</a></li>
                  <li><a href="chapt-1/index.html#tonuka-cave">Tonuka Cave</a></li>
                </ul>
              </div>
            </div>
          </li> <!-- end .acordion-item -->
          <li class="accordion-item">
            <div class="accordion-header" id="headingTwo">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <a href="chapt-2/index.html#">Yagaji Island</a>
                <!-- Yagaji Island -->
              </button>
            </div>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><a href="chapt-2/index.html#deigo-flowers-(erythrina-variegate)">Deigo flowers (Erythrina variegate)</a></li>
                  <li><a href="chapt-2/index.html#sanyamabushi">Sanyamabushi</a></li>
                  <li><a href="chapt-2/index.html#father's-back">Father's back</a></li>
                  <li><a href="chapt-2/index.html#sata-andagi-(okinawan-brown-sugar-tempura)">Sata Andagi (Okinawan doughnuts)</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="accordion-item">
            <div class="accordion-header" id="headingThree">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
              <a href="chapt-3/index.html#">Mangrove</a>
              <!-- Mangrove -->
              </button>
            </div>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><a href="chapt-3/index.html#paranku-in-the-early-morning">Paranku in the early morning</a></li>
                  <li><a href="chapt-3/index.html#slender-hands">Slender hands</a></li>
                  <li><a href="chapt-3/index.html#visiting-day">Visiting day</a></li>
                  <li><a href="chapt-3/index.html#the-torrent-of-souls">The torrent of souls</a></li>
                  <li><a href="chapt-3/index.html#score-brand-hill">Score Brand Hill</a></li>
                  <li><a href="chapt-3/index.html#school-for-the-seven">School for the seven</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="accordion-item">
            <div class="accordion-header" id="headingFour">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <a href="chapt-4/index.html#">February Wind</a>
                <!-- February Wind -->
              </button>
            </div>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><a href="chapt-4/index.html#escape">Escape</a></li>
                  <li><a href="chapt-4/index.html#flashing">Flashing</a></li>
                  <li><a href="chapt-4/index.html#oneway-passport">Oneway passport</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="accordion-item">
            <div class="accordion-header" id="headingFive">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                <a href="chapt-5/index.html#">Airano</a>
                <!-- Airano -->
              </button>
            </div>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><a href="chapt-5/index.html#smoke-from-Sakurajima">Smoke from Sakurajima</a></li>
                  <li><a href="chapt-5/index.html#forced-repatriation">Forced repatriation</a></li>
                  <li><a href="chapt-5/index.html#connected-route">Connected route</a></li>
                  <li><a href="chapt-5/index.html#evening-primrose">Evening primrose (Oenothera glazioviana)</a></li>
                  <li><a href="chapt-5/index.html#notification-of-rejection">Notification of rejection</a></li>
                  <li><a href="chapt-5/index.html#the-thirty-first-successful-applicant">The thirty-first successful applicant</a></li>
                  <li><a href="chapt-5/index.html#dark-tracks">Dark Tracks</a></li>
                  <li><a href="chapt-5/index.html#transporting-infectious-disease-patients">Transporting infectious disease patients</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="accordion-item">
            <div class="accordion-header" id="headingSix">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                <a href="chapt-6/index.html#">Seto Island Sea</a>
                <!-- Seto Island Sea -->
              </button>
            </div>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><a href="chapt-6/index.html#oku-high-school-niirada-classroom">Oku high school Niirada classroom</a></li>
                  <li><a href="chapt-6/index.html#blue-blade">Blue blade</a></li>
                  <li><a href="chapt-4/index.html#cyborg">Cyborg</a></li>
                  <li><a href="chapt-6/index.html#informed-consent">Informed consent</a></li>
                  <li><a href="chapt-6/index.html#okinawa-Ties">Okinawa Ties</a></li>
                  <li><a href="chapt-6/index.html#wall-of-a-wall">Wall of a wall</a></li>
                  <li><a href="chapt-6/index.html#refusal">Refusal</a></li>
                  <li><a href="chapt-6/index.html#ticket">Ticket</a></li>
                  <li><a href="chapt-6/index.html#erased-face">Erased face</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li class="accordion-item" style="text-align: center;"><span style="font-weight: bold; margin-top: 1rem">to be continue</span></li>


<!-- できあがったページのリンクを入れる -->

<li class="accordion-item">
<div class="accordion-header" id="headingSeven">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
    <a href="chapt-7/index.html#">Brand</a>
    <!-- Brand -->
  </button>
</div>
<div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <ul>
      <li><a href="chapt-7/index.html#holly-Gate">Holly Gate</a></a></li>
      <li><a href="chapt-7/index.html#in-the-pocket">In the pocket</a></li>
      <li><a href="chapt-7/index.html#soft-landing">Soft-landing</a></li>
      <li><a href="chapt-7/index.html#the-way-back">The way back</a></li>
    </ul>
  </div>
</div>
</li>
<li class="accordion-item">
<div class="accordion-header" id="headingEight">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
    <a href="chapt-8/index.html#human-Rainbow">Human Rainbow</a>
    <!-- Human Rainbow -->
  </button>
</div>
<div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <ul>
      <li><a href="chapt-8/index.html#our-Pledge">Our Pledge</a></li>
      <li><a href="chapt-8/index.html#blue-partitioning-screen">Blue partitioning screen</a></li>
      <li><a href="chapt-8/index.html#workplace-debate">Workplace debate</a></li>
      <li><a href="chapt-8/index.html#the-Bottom-of-the-bowl">The Bottom of the bowl</a></li>
      <li><a href="chapt-8/index.html#the-form-of-human">The form of human</a></li>
    </ul>
  </div>
</div>
</li>
<li class="accordion-item">
<div class="accordion-header" id="headingNine">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
    <a href="chapt-9/index.html#house-of-Sand">House of Sand</a>
    <!-- House of Sand -->
  </button>
</div>
<div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
  <div class="accordion-body">

    <ul>
      <li><a href="chapt-9/index.html#wind-wrought-pattern-on-the-sands">Wind-wrought pattern on the sands</a></li>
      <li><a href="chapt-9/index.html#the-human-archipelago">The human archipelago</a></li>
      <li><a href="chapt-9/index.html#quicksand">Quicksand</a></li>
      <li><a href="chapt-9/index.html#whitecaps">Whitecaps</a></li>
    </ul>
  </div>
</div>
</li>
<li class="accordion-item">
<div class="accordion-header" id="headingTen">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
    <a href="chapt-10/index.html#rhizome">Rhizome</a>
    <!-- Rhizome -->
  </button>
</div>
<div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <ul>
      <li><a href="chapt-10/index.html#doorplate">Doorplate</a></li>
      <li><a href="chapt-10/index.html#rhizome">Rhizome</a>
    </ul>
  </div>
</div>
</li>
<li class="accordion-item">
<div class="accordion-header" id="headingEleven">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="true" aria-controls="collapseEleven">


    <a href="chapt-11/index.html#kagiyade-huu">Kagiyade huu</a>
    <!-- Kagiyade huu -->
  </button>
</div>
<div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <ul>
      <li><a href="chapt-11/index.html#group-of-urns">Group of urns</a></li>
      <li><a href="chapt-11/index.html#perceptual-thread">Perceptual thread</a></li>
      <li><a href="chapt-11/index.html#kagiyade-huu">Kagiyade huu</a></li>
      <li><a href="chapt-11/index.html#family">Family</a></li>
    </ul>
  </div>
</div>
</li>




<!--          <li class="accordion-item"><a href="sum1.html#summing-up-1-Right-about-face!">Summing up 1 Right about-face!</a></li>
          <li class="accordion-item"><a href="sum2.html#summing-up-2-The-Silence-of-Damian">Summing up 2 The Silence of Damian</a></li>
          <li class="accordion-item"><a href="refer.html#references">References</a></li>
          <li class="accordion-item"><a href="afterword.html#afterword">Afterword</a></li>
        </ul>
      </div>
    </div> --> <!-- end .acodion -->
  </div> <!-- end .offcanvas-body -->
  </div>

`;

// console.log( element );
navbar_element.insertAdjacentHTML( 'beforeend', add_offcanvas);