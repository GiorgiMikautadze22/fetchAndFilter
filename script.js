/* დავალება 
https://api.escuelajs.co/api/v1/products/ _დან წამოვიღოთ პროდუქტები, გამოვიტანოთ ფეიჯზე ცხრილის სახით.
ცხრილში უნდა იყოს შემდეგი ველები: id, title, price, category, createdAt.
გვერდზე უნდა გვქონდეს ფილტრის ინფუთიც (დღეს როგორც გავაკეთეთ, გაფილტრვა თუ გინდათ იყოს ღილაკის კლიკზე), გაფილტრვა მოხდეს title პარამეტრით. და განახლებული ლისტი უნდა მივიღოთ api_დან;
ცხრილში თითოეული სვეტის ჰედერზე კლიკით უნდა შევძლით წამოსული მონაცემების დალაგება ზრდადობით ან კლებადობით. ყველა სვეტზე თუ ვერ იზავთ 1_ზე მაინც აუცილებლად გააკეთეთ.
*/

const wrapper = document.getElementById("wrapper");
const filterButton = document.getElementById("filter-btn");
const filterInput = document.getElementById("filter");

const url = `https://api.escuelajs.co/api/v1/products/`;

filterButton.addEventListener("click", () => {
  const filteredProducts = `?title=${filterInput.value}`;
  const filteredURL = url + filteredProducts;
  fetchData(filteredURL);
});

function fetchData(url) {
  const fetchProduct = fetch(url)
    .then((res) => res.json())
    .then((res) => {
      wrapper.innerHTML = "";
      res.map((product) => {
        renderProducts(product);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchData(url);

function renderProducts(data) {
  const render = `<div>
        <h2>${data.title}</h2>
        <p>id: ${data.id}</p>
        <p>price: $${data.price}</p>
        <p>category: ${data.category.name}</p>
        <p>created: ${data.creationAt}</p>
    </div>`;

  wrapper.innerHTML += render;
  wrapper.style.display = "grid";
  wrapper.style.gap = "100px";

  document.body.append(wrapper);
}
