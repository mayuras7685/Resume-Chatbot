function loadComponents() {
  localStorage.setItem("page", "print")
  var lang = localStorage.getItem("language")
  changeLanguage(lang)

  document.getElementById("work").innerHTML = json.print.work
  document.getElementById("work").innerHTML = json.print.education

  var nameUser = sessionStorage.getItem("nameUser") //Name
  var ageUser = sessionStorage.getItem("ageUser") //Age
  var addressUser = sessionStorage.getItem("addressUser") //Address
  var civilUser = sessionStorage.getItem("civilUser") //Civil
  var phoneUser = sessionStorage.getItem("phoneUser") //Contact
  var emailUser = sessionStorage.getItem("emailUser") //Email
  var driveUser = sessionStorage.getItem("driveUser") //Drive
  var objectiveUser = sessionStorage.getItem("objectiveUser") //Objective
  //Work 1
  var Work1Name = sessionStorage.getItem("Work1Name") //Name of comapny
  var Work1Date = sessionStorage.getItem("Work1Date") //Time period
  var Work1City = sessionStorage.getItem("Work1City") //City
  var Work1Position = sessionStorage.getItem("Work1Position") //position
  var Work1Description = sessionStorage.getItem("Work1Description") //Description

  //Work 2
  var Work2Name = sessionStorage.getItem("Work2Name") //Name of company
  var Work2Date = sessionStorage.getItem("Work2Date") //Time period
  var Work2City = sessionStorage.getItem("Work2City") //City
  var Work2Position = sessionStorage.getItem("Work2Position") //Position
  var Work2Description = sessionStorage.getItem("Work2Description") //Description

  //Work 3
  var Work3Name = sessionStorage.getItem("Work3Name") //Name of comapny
  var Work3Date = sessionStorage.getItem("Work3Date") //Time period
  var Work3City = sessionStorage.getItem("Work3City") //City
  var Work3Position = sessionStorage.getItem("Work3Position") //Position
  var Work3Description = sessionStorage.getItem("Work3Description") //Description

  //Education 1
  var Education1Institute = sessionStorage.getItem("Education1Institute") //Name of institute
  var Education1Course = sessionStorage.getItem("Education1Course") //Course
  var Education1Date = sessionStorage.getItem("Education1Date") //Period
  var Education1City = sessionStorage.getItem("Education1City") //City
  //Education 2
  var Education2Institute = sessionStorage.getItem("Education2Institute") //Name of institute
  var Education2Course = sessionStorage.getItem("Education2Course") //Course
  var Education2Date = sessionStorage.getItem("Education2Date") //Period
  var Education2City = sessionStorage.getItem("Education2City") //City
  //Education 3
  var Education3Institute = sessionStorage.getItem("Education3Institute") //Name of institute
  var Education3Course = sessionStorage.getItem("Education3Course") //Course
  var Education3Date = sessionStorage.getItem("Education3Date") //Period
  var Education3City = sessionStorage.getItem("Education3City") //City
  // ====================================================
  var header =
    "<div class='col-12'>                                                  " +
    "           <p class='text-secondary'>                                              " +
    "               <h2 class='main-text shadow-text'>" +
    nameUser +
    "</h2>               " +
    "               " +
    civilUser +
    "<br>                            " +
    "               " +
    addressUser +
    "<br>                                               " +
    "               Mobile no.: " +
    phoneUser +
    " / Email: " +
    emailUser +
    "</a><br>        " +
    "               <a id='driveLicense'></a>                                            " +
    "               </p>                                                                " +
    "       </div>                                                                      "
  // ---
  if (driveUser != null) {
    var drive = "Github: " + driveUser + "<br>"
  }
  // -----
  var objective =
    "<div class='col-12'>                                                        " +
    "           <h3>" +
    json.print.objective +
    "</h3>                                                       " +
    "           <p class='text-secondary'>" +
    objectiveUser +
    "                           " +
    "           </p>                                                                    " +
    "       </div>                                                                      "
  // ===================================================
  // WORK
  // ==================================================
  if (Work1Name != null) {
    var work1 =
      "<div class='col-sm-6'>                                                      " +
      "           <p class='text-secondary'>                                              " +
      "           <ul class='text-secondary'>                                             " +
      "               <li>" +
      Work1Date +
      "</li>                                            " +
      "               <li class='list-unstyled'>" +
      Work1City +
      "</li>                      " +
      "           </ul>                                                                   " +
      "           </p>                                                                    " +
      "       </div>                                                                      " +
      "       <div class='col-sm-6'>                                                      " +
      "           <p class='text-secondary pt-3'>                                         " +
      "           " +
      Work1Position +
      "<br>                                                 " +
      "           <i>" +
      Work1Name +
      "</i><br><br>                                          " +
      "           " +
      Work1Description +
      "                                                  " +
      "           </p>                                                                    " +
      "       </div>                                                                      "
  }
  // ==============
  if (Work2Name != null) {
    var work2 =
      "<div class='col-sm-6'>                                                      " +
      "           <p class='text-secondary'>                                              " +
      "           <ul class='text-secondary'>                                             " +
      "               <li>" +
      Work2Date +
      "</li>                                            " +
      "               <li class='list-unstyled'>" +
      Work2City +
      "</li>                      " +
      "           </ul>                                                                   " +
      "           </p>                                                                    " +
      "       </div>                                                                      " +
      "       <div class='col-sm-6'>                                                      " +
      "           <p class='text-secondary pt-3'>                                         " +
      "           " +
      Work2Position +
      "<br>                                                 " +
      "           <i>" +
      Work2Name +
      "</i><br><br>                                          " +
      "           " +
      Work2Description +
      "                                                  " +
      "           </p>                                                                    " +
      "       </div>         "
  }
  // ==================
  if (Work3Name != null) {
    var work3 =
      "<div class='col-sm-6'>                                                      " +
      "           <p class='text-secondary'>                                              " +
      "           <ul class='text-secondary'>                                             " +
      "               <li>" +
      Work3Date +
      "</li>                                            " +
      "               <li class='list-unstyled'>" +
      Work3City +
      "</li>                      " +
      "           </ul>                                                                   " +
      "           </p>                                                                    " +
      "       </div>                                                                      " +
      "       <div class='col-sm-6'>                                                      " +
      "           <p class='text-secondary pt-3'>                                         " +
      "           " +
      Work3Position +
      "<br>                                                 " +
      "           <i>" +
      Work3Name +
      "</i><br><br>                                          " +
      "           " +
      Work3Description +
      "                                                  " +
      "           </p>                                                                    " +
      "       </div>         "
  }
  // =====================================================
  // Education
  // =====================================================
  if (Education1Institute != null) {
    var education1 =
      "<div class='col-sm-6'>                                                     " +
      "        <p class='text-secondary'>                                                 " +
      "        <ul class='text-secondary'>                                                " +
      "           <li>" +
      Education1Date +
      "</li>                                           " +
      "           <li class='list-unstyled'>" +
      Education1City +
      "</li>                     " +
      "        </ul>                                                                      " +
      "        </p>                                                                       " +
      "       </div>                                                                      " +
      "       <div class='col-sm-6'>                                                      " +
      "           <p class='text-secondary pt-3'>                                         " +
      "               " +
      Education1Course +
      "<br>                                          " +
      "               <i>" +
      Education1Institute +
      "</i><br>                                " +
      "           </p>                                                                     " +
      "       </div>         "
  }
  // =========
  if (Education2Institute != null) {
    var education2 =
      "<div class='col-sm-6'>                                                     " +
      "        <p class='text-secondary'>                                                 " +
      "        <ul class='text-secondary'>                                                " +
      "           <li>" +
      Education2Date +
      "</li>                                           " +
      "           <li class='list-unstyled'>" +
      Education2City +
      "</li>                     " +
      "        </ul>                                                                      " +
      "        </p>                                                                       " +
      "       </div>                                                                      " +
      "       <div class='col-sm-6'>                                                      " +
      "           <p class='text-secondary pt-3'>                                         " +
      "               " +
      Education2Course +
      "<br>                                          " +
      "               <i>" +
      Education2Institute +
      "</i><br>                                " +
      "           </p>                                                                     " +
      "       </div>         "
  }
  // =========
  if (Education3Institute != null) {
    var education3 =
      "<div class='col-sm-6'>                                                     " +
      "        <p class='text-secondary'>                                                 " +
      "        <ul class='text-secondary'>                                                " +
      "           <li>" +
      Education3Date +
      "</li>                                           " +
      "           <li class='list-unstyled'>" +
      Education3City +
      "</li>                     " +
      "        </ul>                                                                      " +
      "        </p>                                                                       " +
      "       </div>                                                                      " +
      "       <div class='col-sm-6'>                                                      " +
      "           <p class='text-secondary pt-3'>                                         " +
      "               " +
      Education3Course +
      "<br>                                          " +
      "               <i>" +
      Education3Institute +
      "</i><br>                                " +
      "           </p>                                                                     " +
      "       </div>         "
  }
  // ======================================

  document.getElementById("head").innerHTML = header
  if (driveUser != null) {
    document.getElementById("driveLicense").innerHTML = drive
  }
  document.getElementById("obje").innerHTML = objective
  // Work Check
  if (work3 != null) {
    document.getElementById("prof").innerHTML = work1 + work2 + work3
  } else if (work2 != null) {
    document.getElementById("prof").innerHTML = work1 + work2
  } else if (work1 != null) {
    document.getElementById("prof").innerHTML = work1
  }
  // Education Check
  if (education3 != null) {
    document.getElementById("educ").innerHTML =
      education1 + education2 + education3
  } else if (education2 != null) {
    document.getElementById("educ").innerHTML = education1 + education2
  } else if (education1 != null) {
    document.getElementById("educ").innerHTML = education1
  }

  window.print()
}
