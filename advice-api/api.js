// https://api.adviceslip.com/advice
const loadData = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => displayData(data.slip));
};

const displayData = (data) => {
  console.log(data);
  const adviceContainer = document.getElementById("advice-container");
  adviceContainer.innerHTML = `
    <div class="card p-5 text-center">
    <div class="card-body">
      <h5 class="card-title">Advice #${data.id}</h5>
      <p class="card-text">
       ${data.advice}
      </p>
    </div>
  </div>

    `;
};

loadData();
