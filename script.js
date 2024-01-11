"use strict";

let date = new Date();
let currentTime = date.getHours();

const pdf = [
  {
    title: "Simulated Business Financial Statement",
    desc: "Financial Statement For a Simulated Business",
    date: "2022",
  },
  {
    title: "School Report: Tableau & Excel",
    desc: "A SCHOOL FACT BOOKE CREATED WITH TABLEAU AND MICROSOFT EXCEL",
    date: "2022",
  },
  {
    title: "Amazon Customer Satisfaction Report",
    desc: "AMAZON CUSTOMER BEHAVIOURIAL SATISFACTION REPORT ",
    date: "2022",
  },
  {
    title: "Tax Impact on Nigeria's Informal Sector",
    desc: "THE EFFECT OF TAXATION ON THE INFORMAL SECTOR USING NIGERIA AS A CASE STUDY ",
    date: "2022",
  },
];

let works = document.querySelector(".works");

if (works) {
  works.innerHTML = "";

  pdf.map((pdf, i) => {
    const item = `
        <a href="./src/${pdf.title}.pdf" class="works__item">
            <div>
            <p class="works__item-number">00${i + 1}</p>
            <h2 class="works__item-title">${pdf.title}</h2>
            </div>
            <div>
            <p class="works__item-description">${pdf.desc}</p>
            <p class="works__item-date">${pdf.date}</p>
            </div>
            <p class="works__item-icon"><i class="fa-solid fa-arrow-up-right-from-square"></i></p>
        </a>
    `;

    works.insertAdjacentHTML("beforeend", item);
  });
}

let message = document.querySelector(".message");

if (message) {
  const morningMessage = "Good Morning";
  const eveningMessage = "Good Evening";
  const afternoonMessage = "Good Afternoon";

  currentTime < 12
    ? (message.textContent = morningMessage)
    : currentTime >= 18
    ? (message.textContent = eveningMessage)
    : (message.textContent = afternoonMessage);
}

const dialog = document.querySelector(".dialog");
const btnCloseModal = document.querySelector(".btn__dialog");
const displayMessage = document.querySelector(".dialog__text");

const sendMail = function () {
  const params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("textArea").value,
  };

  if (
    params.email_id === "" ||
    params.from_name === "" ||
    params.subject === "" ||
    params.message === ""
  ) {
    dialog.showModal();
    dialog.classList.remove("hidden");
    btnCloseModal.textContent = "Reload Page";
    displayMessage.textContent = "Error couldn't send email!";
  }

  emailjs
    .send("service_sfbobts", "template_ef4eagf", params)
    .then(function (res) {
      if (res.status === 200) {
        dialog.classList.remove("hidden");
        dialog.showModal();
      }
    });
};

const sendBtn = document.querySelector(".btn__form");

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sendMail();
});

btnCloseModal.addEventListener("click", () => {
  location.reload();
  dialog.closeModal();
});
