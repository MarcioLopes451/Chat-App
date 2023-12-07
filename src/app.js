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
    <div class="float-right w-[200px] mt-5">
    <div class="flex justify-between items-center">
    <p class="text-[#696C75] text-xs">${timeAndDate(timestamp)}</p>
    <p>You</p>
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
  <div class="float-left mt-5">
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
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } 
}

function closeMenu(){
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } 
}