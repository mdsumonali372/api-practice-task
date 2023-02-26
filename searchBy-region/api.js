// https://restcountries.com/v3.1/region/europe

const loadData = (region) => {
  const URL = `https://restcountries.com/v3.1/region/${region}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => getData(data));
};

const getData = (data) => {
  const countryContainer = document.getElementById("country-container");
  countryContainer.innerHTML = "";
  data.forEach((singleData) => {
    // console.log(singleData);
    const createDiv = document.createElement("div");
    createDiv.classList = "col";
    createDiv.innerHTML = `
    <div class="card h-100">
      <img src="${singleData.flags.png}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Country Name: ${singleData.name.common}</h5>
        <p class="card-text">Population: ${singleData.population}</p>
      </div>
    </div>
    `;
    countryContainer.appendChild(createDiv);
  });
};

// select region
const regionSelect = () => {
  const selectRegion = document.getElementById("mySelect").value;
  //   console.log(searchEat);
  //   console.log(selectRegion);
  loadData(selectRegion);
};

loadData("Asia");
