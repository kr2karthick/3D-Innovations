let lang = "en";

/* DATA */
const courseData = {
  en: [
    ["Day 1","Introduction to 3D"],
    ["Day 2","Software Knowledge"],
    ["Day 3","First 3D Experience"],
    ["Day 4","Create Your Model"],
    ["Day 5","Troubleshooting"],
    ["Day 6","Final Printing"],
    ["Day 7","Certification & Conclusion"]
  ],
  ta: [
    ["நாள் 1","3D அறிமுகம்"],
    ["நாள் 2","மென்பொருள் அறிவு"],
    ["நாள் 3","முதல் 3D அனுபவம்"],
    ["நாள் 4","உங்கள் மாடல் உருவாக்கம்"],
    ["நாள் 5","பிழைகள் சரிசெய்தல்"],
    ["நாள் 6","இறுதி 3D அச்சிடுதல்"],
    ["நாள் 7","சான்றிதழ் & முடிவு"]
  ]
};

const whyData = {
  en:["🚀 Innovation","🎮 Gaming","🏗 Architecture","🧠 Creativity"],
  ta:["🚀 புதுமை","🎮 கேமிங்","🏗 கட்டிடக்கலை","🧠 சிந்தனை வளர்ச்சி"]
};

/* RENDER FUNCTIONS */
function renderCourse(){
  const table = document.getElementById("courseTable");
  table.innerHTML = "";

  courseData[lang].forEach(row=>{
    table.innerHTML += `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`;
  });
}

function renderWhy(){
  const grid = document.getElementById("whyGrid");
  grid.innerHTML = "";

  whyData[lang].forEach(item=>{
    grid.innerHTML += `<div>${item}</div>`;
  });
}

/* LANGUAGE SWITCH */
document.getElementById("langToggle").onclick = () => {

  lang = lang === "en" ? "ta" : "en";

  if(lang === "ta"){
    document.getElementById("heroText").innerText = "உங்கள் கற்பனைக்கு உயிர் கொடுங்கள்";
    document.getElementById("whyTitle").innerText = "ஏன் 3D கற்க வேண்டும்?";
    document.getElementById("whyDesc").innerText = "3D தொழில்நுட்பம் எதிர்காலத்தை உருவாக்குகிறது.";
    document.getElementById("formTitle").innerText = "பதிவு செய்யவும்";
    document.getElementById("stepTitle").innerText = "💳 கட்டணம் செலுத்துவது";
    document.getElementById("step1").innerText = "1. படிவத்தை நிரப்பவும்";
    document.getElementById("step2").innerText = "2. QR ஸ்கேன் செய்து ₹1499 செலுத்தவும்";
    document.getElementById("step3").innerText = "3. ஸ்கிரீன்‌ஷாட் பதிவேற்றவும்";
  } else {
    document.getElementById("heroText").innerText = "Turn imagination into reality";
    document.getElementById("whyTitle").innerText = "Why Learn 3D?";
    document.getElementById("whyDesc").innerText = "3D technology is shaping the future.";
    document.getElementById("formTitle").innerText = "Register Now";
    document.getElementById("stepTitle").innerText = "💳 Payment Steps";
    document.getElementById("step1").innerText = "1. Fill the form";
    document.getElementById("step2").innerText = "2. Scan QR & Pay ₹1499";
    document.getElementById("step3").innerText = "3. Upload screenshot";
  }

  renderCourse();
  renderWhy();
};

/* INIT LOAD */
renderCourse();
renderWhy();

document.getElementById("step1").innerText = "1. Fill the form";
document.getElementById("step2").innerText = "2. Scan QR & Pay ₹1499";
document.getElementById("step3").innerText = "3. Upload screenshot";

function submitForm(){

  const name = document.getElementById("name").value;
  const std = document.getElementById("std").value;
  const school = document.getElementById("school").value;
  const mobile = document.getElementById("mobile").value;
  const txn = document.getElementById("txn").value;
  const agree = document.getElementById("agree").checked;

  if(!name || !std || !mobile || !txn){
    alert("Please fill all required fields");
    return;
  }

  if(!agree){
    alert("Please accept terms & conditions");
    return;
  }

  const params = {
    name: name,
    std: std,
    school: school,
    mobile: mobile,
    txn: txn
  };

  emailjs.send("service_ydyibh5", "template_42dskyh", params)
    .then(function(){
      alert("✅ Registration Successful! We will contact you soon.");
    })
    .catch(function(error){
      alert("❌ Failed to send. Try again.");
      console.log(error);
    });
}

function openVideo(){
  document.getElementById("videoModal").classList.add("active");
  document.getElementById("demoVideo").play();
}

function closeVideo(){
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("demoVideo");

  modal.classList.remove("active");
  video.pause();
  video.currentTime = 0;
}

function closeVideo(){
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("demoVideo");

  modal.classList.remove("active");
  video.pause();
  video.currentTime = 0;
}