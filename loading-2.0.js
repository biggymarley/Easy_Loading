var index = -1;
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const l3 = document.querySelector(".l3");
const logo = document.querySelector(".logo");

const strings = ["FrontEnd Dev", "C Programming", "Faragi Ayoub"];
++index;
index %= strings.length;
l1.classList.remove("add");
l3.classList.remove("add");
l2.classList.remove("add");
setTimeout(() => {
  logo.classList.remove("c");
  l1.classList.add("add");
}, 1000);
setTimeout(() => {
  l2.classList.add("add");
  l2.classList.add("index");
  }, 2000);
  setTimeout(() => {
    logo.innerHTML = strings[index];
    l2.classList.remove("index");
    l3.classList.add("add");
    logo.classList.add("c");
    }, 3000);

setInterval(() => {
  ++index;
  index %= strings.length;
  setTimeout(() => {
    l1.classList.add("add");
    l2.classList.remove("add");
  }, 1000);
  setTimeout(() => {
    l2.classList.add("add");
    l2.classList.add("index");
    l3.classList.remove("add");

    }, 2000);
    setTimeout(() => {
      logo.innerHTML = strings[index];
      l2.classList.remove("index");
      l3.classList.add("add");
      logo.classList.add("c");
      l1.classList.remove("add");
      }, 3000);
}, 4000);


const loading = document.querySelector(".loading");
const website = document.querySelector(".web");
window.addEventListener("load", () => {
  setTimeout(() => {
    website.style.display = "block";
    website.style.opacity = 1;
    website.style.pointerEvents = "all";
    website.style.left = 0;
    loading.style.left = "100%";
  }, 5000);
  setTimeout(() => {
    loading.style.display = "none";
  }, 9000);
});