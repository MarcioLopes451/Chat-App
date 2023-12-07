const apiKey = "p4mqPiVtq9zc3x7nm+zQdg==bohiBH2hq0GqWTsR";
const maxLength = 50;

let options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};

function add() {
  const input = document.getElementById("placeholder");
  const inputValue = input.value.trim();

  if (inputValue !== "") {
    const content = document.createElement("div");
    const timestamp = new Date();
    content.innerHTML = `
    <div class="mt-5 float-right w-[250px] lg:w-[350px]">
    <div class="flex justify-between items-center">
    <p class="text-[#696C75] text-xs">${timeAndDate(timestamp)}</p>
    <p>
    You
    </p>
    </div>
    <p class="bg-[#93C2ED] rounded-lg text-white p-3">${inputValue}</p>
    </div>`;
    document.getElementById("text").appendChild(content);
    scrollToBottom();
    const url = `https://api.api-ninjas.com/v1/loremipsum?paragraphs=?&max_length=${maxLength}`;
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => apiData(data.text))
      .catch((err) => console.error(err));
    input.value = "";
  }
}

function timeAndDate(timestamp) {
  const options = { hour: "numeric", minute: "numeric", weekday: "long" };
  return new Date(timestamp).toLocaleString("en-GB", options);
}

function scrollToBottom() {
  const chat = document.getElementById("chat");
  chat.scrollTop = chat.scrollHeight;
}

function apiData(text) {
  const content = document.createElement("div");
  const timestamp = new Date();
  content.innerHTML = `
  <div class="mt-5 float-left w-[250px] lg:w-[350px]">
  <div class="flex justify-between items-center">
  <p>Victor</p>
  <p class="text-[#696C75] text-xs">${timeAndDate(timestamp)}</p>
  </div>
  <p class="bg-[#85BB71] rounded-lg text-white p-3">
  ${text}
  </p>
  </div>`;
  document.getElementById("text").appendChild(content);
  scrollToBottom();
}

function mobileMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}
document.getElementById("mobileMenu").addEventListener("click", mobileMenu);

function closeMenu() {
  const menu = document.getElementById("menu");
  if (menu.classList.toggle("block")) {
    menu.classList.toggle("hidden");
  }
}

let images = ['src/images/216411_star_icon.png','src/images/216411_star_icon (1).png']
let ind = 0

function changeImage(){
    let star = document.getElementById('star');
    ind = (ind + 1) % images.length
    star.src = images[ind]
}