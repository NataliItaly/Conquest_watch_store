/*-------------------catalog-sort---------------------*/

const brendSortBtn = document.querySelector(".brend-sort");
const brendList = document.querySelector(".brend-list");
brendSortBtn.addEventListener("click", function () {
  brendList.classList.toggle("hidden");
  brendSortBtn.classList.toggle("open");
});

const mechanicSortBtn = document.querySelector(".mechanic-sort");
const mechanicList = document.querySelector(".mechanic-list");
mechanicSortBtn.addEventListener("click", function () {
  mechanicList.classList.toggle("hidden");
  mechanicSortBtn.classList.toggle("open");
});

const materialSortBtn = document.querySelector(".material-sort");
const materialList = document.querySelector(".material-list");
materialSortBtn.addEventListener("click", function () {
  materialList.classList.toggle("hidden");
  materialSortBtn.classList.toggle("open");
});

const colorSortBtn = document.querySelector(".color-sort");
const colorList = document.querySelector(".color-list");
colorSortBtn.addEventListener("click", function () {
  colorList.classList.toggle("hidden");
  colorSortBtn.classList.toggle("open");
});

/* const filterBtn = document.querySelector(".filter-btn");
let sortList = document.querySelectorAll(".sort-list");
console.log(sortList);
filterBtn.addEventListener("click", function () {
  for (let i = 0; i <= sortList.length; i++) {
    sortList[i].classList.remove("hidden");
  }
}); */

/*const sortButton = document.querySelectorAll('.sort-button');
const sortHiddenList = document.querySelectorAll('.hidden');

for (let i = 0; i < sortButton.length; i++) {
    sortButton[i].addEventListener('click', function () {
        for (let i = 0; i < sortHiddenList; i++) {
            sortHiddenList[i].style.display = 'block';
        }
        sortButton.textContent = '-';
    });

} */
