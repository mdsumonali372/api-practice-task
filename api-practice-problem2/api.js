const dataLoad = () => {
  fetch("http://127.0.0.1:5500/data.json")
    .then((res) => res.json())
    .then((data) => getData(data));
};

const getData = (data) => {
  const imgContainer = document.getElementById("img-container");

  data.forEach((singleData) => {
    console.log(singleData);
    const { name, price, description, imageURL } = singleData;
    const createDiv = document.createElement("div");
    createDiv.classList = "col";
    createDiv.innerHTML = `
    <div class="card">
    <img src="${imageURL ? imageURL : "no img"}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Car Name : ${name}</h5>
      <p class="card-text">${description}</p>
      <button class="btn btn-primary">Car Price: ${price} </button>
    </div>
  </div>
    `;

    imgContainer.appendChild(createDiv);
  });
};

dataLoad();

// console.log(convert);
