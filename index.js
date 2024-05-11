const value = document.querySelector("#value");
const GIAMXUONG = document.querySelector(".btn-giam");
const DATLAI = document.querySelector(".btn-dlai");
const TANGLEN = document.querySelector(".btn-tang");

let count = 0;

function updateValue() {
  value.textContent = count;
  if (count > 0) {
    value.style.color = "green";
  }
  if (count < 0) {
    value.style.color = "red";
  }
  if (count === 0) {
    value.style.color = "black";
  }

  // console.log(count);
}
GIAMXUONG.addEventListener("click", () => {
  count--;
  updateValue();
});
DATLAI.addEventListener("click", () => {
  count = 0;
  updateValue();
});
TANGLEN.addEventListener("click", () => {
  count++;
  updateValue();
});
