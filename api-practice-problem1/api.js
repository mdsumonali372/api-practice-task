const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

// let getData = person;

const loadData = () => {
  const foundPerson = document.getElementById("found-person");
  foundPerson.innerText = person.message;
  person.result.forEach((getData) => {
    console.log(getData.name.common);
    // const { common, age } = getData.name;
    const nameContainer = document.getElementById("name-container");
    const createDiv = document.createElement("div");
    createDiv.classList = "card border-primary mb-3 col-md-6";
    createDiv.innerHTML = `
    <div class="card-header">Person Name: ${getData.name.common}</div>
    <div class="card-body text-primary">
      <h5 class="card-title">Age: ${getData.age}</h5>
      <p class="card-text">
        street: ${getData.address.street}, House: ${getData.address.house}
      </p>
    </div>
    `;
    nameContainer.appendChild(createDiv);
  });
};

loadData();
