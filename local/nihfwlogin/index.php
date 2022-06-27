<?php
require_once("../../config.php");
//header("Set-Cookie: key=value; path=/; domain=lms.fiuindia.gov.in; HttpOnly; SameSite=Lax");

       global $CFG;
	$errorcode = NULL;
if(!empty($_GET['errorcode'])){
		$errorcode = $_GET['errorcode'];
	}

	if($errorcode==3){
	echo '<script>alert("Please provide correct email address or password")</script>';
	} 


// Page URL.
$pageurl = new moodle_url($CFG->wwwroot."/local/nihfwlogin/index.php");

// Set page context.
$PAGE->set_context($context);

// Set page URL.
$PAGE->set_url($pageurl);

// Set Page layout.
$PAGE->set_pagelayout('login');

// Set page heading.
$PAGE->set_heading(get_string("nihfwlogin", "local_nihfwlogin"));
$PAGE->set_title(get_string("nihfwlogin", "local_nihfwlogin"));


// Print output in page.
echo $OUTPUT->header();
?>


<head>
 
  <link rel="stylesheet" href="css/style.css">

</head>

  
      <div class="login_box">
        <div class="row align-items-center" id="full-container">

          <div class="col-lg-6">
            <div class="login-banner">
              <figure class="text-center">
                <img src="images/imageDoctor.svg" alt="doctImage" width="250">
              </figure>
              <p class="text-center" style="color:#222222;font-weight: 500;">As a healthcare professional in India, you can learn from an optimised Learning Management Information System (LMIS) to advance your career.</p>
            </div>
          </div>

          <div class="col-lg-6 contents" id="left-banner">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="mb-2 ">
                  <h4>Login to LMIS</h4>
                  <p style="font-size:13px" class="mb-3">Below fields are mandatory, please enter correct information to login successfully<br>Note: Five failed login attempts will lock your LMS account for 10 mins.</p>
                </div>
               
                <form action="<?=$CFG->wwwroot?>/login/index.php" method="post" id="login-form" name="login-form" autocomplete="off">
                  <div class="form-group first">
                    <label for="username">Enter your email address</label>
                    <input type="text" class="form-control" name="username" id="username" autocomplete="off" readonly onfocus="this.removeAttribute('readonly');">

                  </div>
                  <br>
                  <div class="form-group last mb-2">
                    <label for="password">Enter your password</label>
                    <input type="password" name="password" class="form-control" id="password" autocomplete="off" readonly onfocus="this.removeAttribute('readonly');">

                  </div>

                  <div class="d-flex mb-2 align-items-center">
                    <!--label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                  <input type="checkbox" checked="checked"/>
                  <div class="control__indicator"></div>
                </label-->
                    <span class="ml-auto"><a href="/login/forgot_password.php" class="forgot-pass">Forgot Password</a></span>
                  </div>

                  <div class="mb-4" id="captchaBackground">
                    <div class="row mb-2">

                      <div class="col-6">
                        <div class="form-group last mb-2">
                          <label for="textBox">Enter Captcha</label>
                          <input id="textBox" type="text" name="text" class="form-control" placeholder="">
                        </div>


                      </div>
                      <div class="col-6">
                        <div class="forcaptchabtn">
                          <h4 id="captcha">captcha text</h4>
                          <button id="refresh" type="button"><svg viewBox="0 0 509.536 509.536">
                              <path style="fill:#7B8B92;" d="M260.182,64.496V0l-117.2,117.2l117.2,117.2v-64.624c137.072-11.44,225.536,79.728,247.84,199.584	C522.47,195.296,410.694,92.352,260.182,64.496z" />
                              <path style="fill:#65B1EF;" d="M251.99,444.368v65.168l118.432-118.432L251.99,272.672v65.296	c-110,9.184-221.424-45.744-250.464-201.696C-13.098,312.576,100.406,416.304,251.99,444.368z" />
                            </svg></button>
                        </div>
                      </div>
                    </div>

                    <div id="buttons">
                      <button id="submit" type="submit" class="btn btn-danger" type="button">Submit</button> &nbsp;&nbsp;&nbsp;<span class="ml-auto " id="output"></span>
                    </div>

                  </div>
                </form>
              </div>
             
            </div>
            <p class="text-right fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="<?=$CFG->wwwroot?>/login/signup.php"
                class="link-danger">Register</a></p>
          </div>

        </div>
      </div>
   

  <script src="js/crypto-js.js"></script>
  <script src="js/sha256.min.js"></script>
  <script src="js/crypto-js.min.js" integrity="sha512-E8QSvWZ0eCLGk4km3hxSsNmGWbLtSCSUcewDQPQWZF6pEU8GlT8a5fF32wOl1i8ftdMhssTrF/OhyGWwonTcXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

  <script type="text/javascript" src="cryptojs/aes-json-format.js"></script>
  <script src="js/jquery-3.3.1.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/main.js"></script>

  <script src="js/custom.js"></script>




<?php

echo $OUTPUT->footer();