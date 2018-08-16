// ======= data =======
let students = {};


// ======= initialize =======
function initialize() {
  console.log("== initialize ==");

  let titleEl = document.getElementById("mainTitle");
  console.log("titleEl:", titleEl);
  titleEl.innerText = "Hogwarts";
  activateAllBtns();
    
}

initialize();

// // ======= activateAllBtns =======
function activateAllBtns() {
   console.log("== activateAllBtns ==");
   
  let buttonEl = document.getElementById("addStudentBtn");
  console.log("buttonEl:", buttonEl);

  buttonEl.addEventListener("click", verifyNewStudent);
  
  let profButtonEl = document.getElementById("addProfBtn");
  console.log("profButtonEl:", profButtonEl);
  
  profButtonEl.addEventListener("click", function() {
    console.log("-- profButtonEl.click --");
    
  });  
   
}

function verifyNewStudent() {
  console.log("== verifyNewStudent ==");
  
  let studentName = document.getElementById("studentEntry").value;
  console.log("studentName:", studentName);
  
  if (studentName) {
    console.log(" NAME found");
    addNewStudent();
  } else {
    console.log(" NO NAME");
  }
  }
  
  function addNewStudent() {
  console.log("== addNewStudent ==");
  
  console.log("students1:", students)

}