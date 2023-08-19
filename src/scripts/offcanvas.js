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
                <a href="chapt.html?num=1#">Single File Line Up</a>
                <!-- Single file lineup -->
              </button>
            </div>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>                      
                  <li><a href="chapt.html?num=1#oppadake">Oppadake</a></li>
                  <li><a href="chapt.html?num=1#minamidaito-island">Minamidaito Island</a></li>
                  <li><a href="chapt.html?num=1#single-file-line-up*">Single File Line Up</a></li>
                  <li><a href="chapt.html?num=1#tonuka-cave">Tonuka Cave</a></li>
                </ul>
              </div>
            </div>
          </li> <!-- end .acordion-item -->
          <li class="accordion-item">
            <div class="accordion-header" id="headingTwo">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <a href="chapt.html?num=2#">Yagaji Island</a>
                <!-- Yagaji Island -->
              </button>
            </div>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><a href="chapt.html?num=2#deigo-flowers-(erythrina-variegate)">Deigo flowers (Erythrina variegate)</a></li>
                  <li><a href="chapt.html?num=2#sanyamabushi">Sanyamabushi</a></li>
                  <li><a href="chapt.html?num=2#father's-back">Father's back</a></li>
                  <li><a href="chapt.html?num=2#sata-andagi-(okinawan-brown-sugar-tempura)">Sata Andagi (Okinawan doughnuts)</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="accordion-item">
            <div class="accordion-header" id="headingThree">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
              <a href="chapt.html?num=3#">Mangrove</a>
              <!-- Mangrove -->
              </button>
            </div>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><a href="chapt.html?num=3#paranku-in-the-early-morning">Paranku in the early morning</a></li>
                  <li><a href="chapt.html?num=3#slender-hands">Slender hands</a></li>
                  <li><a href="chapt.html?num=3#visiting-day">Visiting day</a></li>
                  <li><a href="chapt.html?num=3#the-torrent-of-souls">The torrent of souls</a></li>
                  <li><a href="chapt.html?num=3#score-brand-hill">Score Brand Hill</a></li>
                  <li><a href="chapt.html?num=3#school-for-the-seven">School for the seven</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="accordion-item">
            <div class="accordion-header" id="headingFour">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <a href="chapt.html?num=4#">February Wind</a>
                <!-- February Wind -->
              </button>
            </div>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><a href="chapt.html?num=4#escape">Escape</a></li>
                  <li><a href="chapt.html?num=4#flashing">Flashing</a></li>
                  <li><a href="chapt.html?num=4#oneway-passport">Oneway passport</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="accordion-item">
            <div class="accordion-header" id="headingFive">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                <a href="chapt.html?num=5#">Airano</a>
                <!-- Airano -->
              </button>
            </div>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><a href="chapt.html?num=5#smoke-from-Sakurajima">Smoke from Sakurajima</a></li>
                  <li><a href="chapt.html?num=5#forced-repatriation">Forced repatriation</a></li>
                  <li><a href="chapt.html?num=5#connected-route">Connected route</a></li>
                  <li><a href="chapt.html?num=5#evening-primrose">Evening primrose (Oenothera glazioviana)</a></li>
                  <li><a href="chapt.html?num=5#notification-of-rejection">Notification of rejection</a></li>
                  <li><a href="chapt.html?num=5#the-thirty-first-successful-applicant">The thirty-first successful applicant</a></li>
                  <li><a href="chapt.html?num=5#dark-tracks">Dark Tracks</a></li>
                  <li><a href="chapt.html?num=5#transporting-infectious-disease-patients">Transporting infectious disease patients</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="accordion-item">
            <div class="accordion-header" id="headingSix">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                <a href="chapt.html?num=6#">Seto Island Sea</a>
                <!-- Seto Island Sea -->
              </button>
            </div>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul>
                  <li><a href="chapt.html?num=6#oku-high-school-niirada-classroom">Oku high school Niirada classroom</a></li>
                  <li><a href="chapt.html?num=6#blue-blade">Blue blade</a></li>
                  <li><a href="chapt.html?num=4#cyborg">Cyborg</a></li>
                  <li><a href="chapt.html?num=6#informed-consent">Informed consent</a></li>
                  <li><a href="chapt.html?num=6#okinawa-Ties">Okinawa Ties</a></li>
                  <li><a href="chapt.html?num=6#wall-of-a-wall">Wall of a wall</a></li>
                  <li><a href="chapt.html?num=6#refusal">Refusal</a></li>
                  <li><a href="chapt.html?num=6#ticket">Ticket</a></li>
                  <li><a href="chapt.html?num=6#erased-face">Erased face</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li class="accordion-item" style="text-align: center;"><span style="font-weight: bold; margin-top: 1rem">to be continue</span></li>


<!-- できあがったページのリンクを入れる -->

<li class="accordion-item">
<div class="accordion-header" id="headingSeven">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
    <a href="chapt.html?num=7#">Brand</a>
    <!-- Brand -->
  </button>
</div>
<div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <ul>
      <li><a href="chapt.html?num=7#holly-Gate">Holly Gate</a></a></li>
      <li><a href="chapt.html?num=7#in-the-pocket">In the pocket</a></li>
      <li><a href="chapt.html?num=7#soft-landing">Soft-landing</a></li>
      <li><a href="chapt.html?num=7#the-way-back">The way back</a></li>
    </ul>
  </div>
</div>
</li>
<li class="accordion-item">
<div class="accordion-header" id="headingEight">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
    <a href="chapt.html?num=8#human-Rainbow">Human Rainbow</a>
    <!-- Human Rainbow -->
  </button>
</div>
<div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <ul>
      <li><a href="chapt.html?num=8#our-Pledge">Our Pledge</a></li>
      <li><a href="chapt.html?num=8#blue-partitioning-screen">Blue partitioning screen</a></li>
      <li><a href="chapt.html?num=8#workplace-debate">Workplace debate</a></li>
      <li><a href="chapt.html?num=8#the-Bottom-of-the-bowl">The Bottom of the bowl</a></li>
      <li><a href="chapt.html?num=8#the-form-of-human">The form of human</a></li>
    </ul>
  </div>
</div>
</li>
<li class="accordion-item">
<div class="accordion-header" id="headingNine">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
    <a href="chapt.html?num=9#house-of-Sand">House of Sand</a>
    <!-- House of Sand -->
  </button>
</div>
<div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
  <div class="accordion-body">

    <ul>
      <li><a href="chapt.html?num=9#wind-wrought-pattern-on-the-sands">Wind-wrought pattern on the sands</a></li>
      <li><a href="chapt.html?num=9#the-human-archipelago">The human archipelago</a></li>
      <li><a href="chapt.html?num=9#quicksand">Quicksand</a></li>
      <li><a href="chapt.html?num=9#whitecaps">Whitecaps</a></li>
    </ul>
  </div>
</div>
</li>
<li class="accordion-item">
<div class="accordion-header" id="headingTen">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
    <a href="chapt.html?num=10#rhizome">Rhizome</a>
    <!-- Rhizome -->
  </button>
</div>
<div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <ul>
      <li><a href="chapt.html?num=10#doorplate">Doorplate</a></li>
      <li><a href="chapt.html?num=10#rhizome">Rhizome</a>
    </ul>
  </div>
</div>
</li>
<li class="accordion-item">
<div class="accordion-header" id="headingEleven">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="true" aria-controls="collapseEleven">


    <a href="chapt.html?num=11#kagiyade-huu">Kagiyade huu</a>
    <!-- Kagiyade huu -->
  </button>
</div>
<div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <ul>
      <li><a href="chapt.html?num=11#group-of-urns">Group of urns</a></li>
      <li><a href="chapt.html?num=11#perceptual-thread">Perceptual thread</a></li>
      <li><a href="chapt.html?num=11#kagiyade-huu">Kagiyade huu</a></li>
      <li><a href="chapt.html?num=11#family">Family</a></li>
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
