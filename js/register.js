// Making sure DOM is ready to be manipulated
$(document).ready(function () {
  // Declare variable
  let stuTab = document.getElementById("stuTab");
  let staTab = document.getElementById("staTab");
  let pwdRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^])([a-zA-Z0-9]{6,12})+$/;
  let IDRegex = /^([0-9])+$/;

  stuTab.addEventListener("click", function () {
    switchTab(event, "Student")
  });
  staTab.addEventListener("click", function () {
    switchTab(event, "Staff");
  });
// Validation for student regisration
  $("#StuReg").submit(function (e) {
    e.preventDefault();
    let SID = $("#SID").val();
    let psw = $("#psw").val();
    let pswcf = $("#pswcf").val();

    $(".error").remove();
    if (!IDRegex.test(SID)) {
      $("#SID").after('<small class="error"> Please enter numbers only</small>');
    } else if (!pwdRegex.test(psw)) {
      $("#psw").after('<small class="error"> Please enter a password with 1 lowercase charracter, ' +
        '1 uppercase letter, 1 number and 1 of the following character !@#$%^</small>');
    } else if (psw !== pswcf) {
      $("#psw").after('<small class="error"> Please enter a matching password</small>');
      $("#pswcf").after('<small class="error"> Please enter a matching password</small>');
    } else
      alert("Registered Successfully");

  });
// Validation for staff regisration
  $("#StaReg").submit(function (e) {
    e.preventDefault();
    let stID = $("#StID").val();
    let pswS = $("#pswS").val();
    let pswSCf = $("#pswSCf").val();

    if (!IDRegex.test(stID)) {
      $("#StID").after('<small class="error"> Please enter numbers only</small>')
    } else if (!pwdRegex.test(pswS)) {
      $("#pswS").after('<small class="error"> Please enter a password with 1 lowercase charracter, ' +
        '1 uppercase letter, 1 number and 1 of the following character !@#$%^</small>');
    } else if (pswS !== pswSCf) {
      $("#psw").after('<small class="error"> Please enter a matching password</small>');
      $("#pswcf").after('<small class="error"> Please enter a matching password</small>');
    } else
      alert("Registered Successfully");

  });


  // Function to hide tab
  function switchTab(event, tab) {
    let i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
      tablink[i].className = tablink[i].className.replace("active", "");
    }
    document.getElementById(tab).style.display = "block";
    event.currentTarget.className += "active";
  }

});
