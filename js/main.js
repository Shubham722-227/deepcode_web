// Functions for each action-command.

function help(){
  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Give me the complete picture</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Everything you ever wanted to know about DeepCode</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to get in touch with DeepCode</td>\
  </tr>\
  <tr>\
    <td>links</td>\
    <td>See what links DeepCode wants you to click on</td>\
  </tr>\
  <tr>\
    <td>clubs</td>\
    <td>Get to know about DeepCode Clubs</td>\
  </tr>\</table>";
}

function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
  <tr>\
    <td>Email</td>\
    <td><a href=\"mailto:deepcode.curaj@gmail.com\">deepcode.curaj@gmail.com</a></td>\
  </tr>\
  <tr>\
    <td>Telephone</td>\
    <td><a href=\"tel:+91-9733203984\">+91-9733203984</a></td>\
  </tr>\
  <tr>\
    <td>Address</td>\
    <td>DeepCode</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>NH-8, Bandarsindari, Tehsil Kishangarh, Ajmer</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>305817</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Rajasthan</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>India</td>\
  </tr></table>";
}

function skills(){
  return "<h2><span style=\"color:#81a2be;\">Clubs:</span></h2><table>\
  <tr>\
    <td>Coding Club</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ </td>\
  </tr>\
  <tr>\
    <td>Cybersecurity Club</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ </td>\
  </tr>\
  <tr>\
    <td>Electronics Club</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ </td>\
  </tr>\
  <!--<tr>\
    <td>Rickrolling</td>\
    <td>▰▰▰▰▰▰▰▰▰▰ 100%</td>\
  </tr>--></table>";
}

function about(){
  return "<p>DeepCode is the official DEV community of Central University of Rajasthan. We aim to provide a gateway for the people in our institute to join the community. We have created a platform which allows students to gain assistance, mentorship and career updates to help them enchance their skills.</p>";
}

function cv(){
  return "<span style=\"color:#8abeb7;\"><!--<h2>CV:</h2></span><p>\tDownload from <a href=\"src/cv.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>-->";
}

function credits(){
  return "<p>Built by <a href=\"https://www.github.com/CedArctic\" target=\"_blank\"><i class=\"fab fa-github\"></i> CedArctic</a></p>";
}

function links(){
  return "<span style=\"color: #b5bd68;\"><h2>Links:</h2></span><ul>\
  <li><a href=\"https://www.linkedin.com\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://www.github.com\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  <li><a href=\"https://www.twitter.com\" target=\"_blank\"><i class=\"fab fa-twitter\"></i> Twitter</a></li>\
  <li><a href=\"https://www.discord.com\" target=\"_blank\"><i class=\"fab fa-discord\"></i> Discord</a></li>\
  </ul>";
}

function rickroll(){
  return "<p></p>";
}

// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + skills() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + cv();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }else if (txtInput=="clubs") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput=="links") {
      document.getElementById('injected').innerHTML=links();
    }else if (txtInput == "rickroll") {
      document.getElementById('injected').innerHTML=rickroll();
    }else if (txtInput == "credits") {
      document.getElementById('injected').innerHTML=credits();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
