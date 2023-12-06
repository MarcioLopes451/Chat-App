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
    const content = document.createElement('div');
    content.innerHTML = `
    <p>You</p>
    <p class="bg-[#93C2ED] rounded-lg text-white">${inputValue}</p>`;
    document.getElementById('your-text').appendChild(content);
    const url = `https://api.api-ninjas.com/v1/loremipsum?paragraphs=?&max_length=${maxLength}`;
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => apiData(data.text))
      .catch((err) => console.error(err));
      input.value = ''
  }
}

function apiData(text) {
  const content = document.createElement('div');
  content.innerHTML = `
  <p>Victor</p>
  <p class="bg-[#85BB71] rounded-lg text-white">
  ${text}
  </p>`;
  document.getElementById("text").appendChild(content);
}
