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
  <p class="bg-green-400 p-2">${text}</p>`;
  document.getElementById("text").appendChild(content);
  
}
