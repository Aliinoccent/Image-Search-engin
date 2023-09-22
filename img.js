const api_key = "4HkyVoE3roy1njVZdo2V-zFSa1b8x-TBa8TF4_eFkyc";
const Search_btn = document.getElementById("searchbtn");
const Search_bar = document.getElementById("searchbar");
const Results = document.getElementById("resultsid");
const Btn = document.getElementById("showbtn");

let data = "";
let page = 1;

async function searchimages() {
  data = Search_bar.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${data}&client_id=${api_key}`;
  let response = await fetch(url);
  response = await response.json();
  const results = response.results;
  if (page === 1) {
    Results.innerHTML = "";
  }
  results.map((element) => {
    const div = document.createElement("div");
    div.classList.add("result");
    const image = document.createElement("img");
    image.src = element.urls.small;
    image.alt = element.alt_discription;
    div.appendChild(image);
    Results.appendChild(div);
  });

  page++;
  if (page > 1) {
    Btn.style.display = "block ";
  }
}
Search_btn.addEventListener("click", (event) => {
  event.preventDefault();
  searchimages();
  Results.innerHTML = "";
});
Btn.addEventListener("click", () => {
  searchimages();
});
