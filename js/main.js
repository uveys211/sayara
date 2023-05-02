// about script start 

let shotccik = 0
const img1 = document.querySelectorAll(".img-boxs img")[0]
const img2 = document.querySelectorAll(".img-boxs img")[1]
const img3 = document.querySelectorAll(".img-boxs img")[2]
const right = document.querySelector(".next")
const left = document.querySelector(".prev")
const nameceo = document.querySelector(".info h5")

right.addEventListener("click", () => {
console.log(shotccik);
shotccik++
  console.log(shotccik);
  if (shotccik == 1) {
    
    img2.style.left = "0px";
    img1.style.left = "100%";
    img3.style.left = "100%";
    nameceo.textContent = "John Alex"
  }
  if (shotccik == 2) {
    img2.style.left = "100%";
    img1.style.left = "100%";
    img3.style.left = "0px";
    nameceo.textContent = "John Doe"
  }
  if (shotccik == 3) {
    img2.style.left = "100%";
    img1.style.left = "0px";
    img3.style.left = "100%";
    nameceo.textContent = "Jessica Moore"
    
    shotccik = 0
 
  }
})
left.addEventListener("click", () => {
shotccik--;
if (shotccik <= 0) {
  
  img2.style.left = "100%";  
  img1.style.left = "0"; 
  img3.style.left = "100%";
  nameceo.textContent = "Jessica Moore"
  shotccik=3;
}
if (shotccik == 1) {
  img2.style.left = "0";  
  img1.style.left = "100%"; 
  img3.style.left = "100%";
  nameceo.textContent = "John Alex"
}
if (shotccik ==2) {
  img2.style.left = "100%";  
  img1.style.left = "100%"; 
  img3.style.left = "0";
  nameceo.textContent = "John Doe"
}

})



const count1 = document.querySelector(".count1")
const count2 = document.querySelector(".count2")
const count3 = document.querySelector(".count3")
const count4 = document.querySelector(".count4")

console.log(count1, count2, count3, count4);

window.onscroll = function () {
if ( count1.innerHTML == `120` && count2.innerHTML ==`2036` && count3.innerHTML ==`3012`&& count4.innerHTML ==`234` ) {
  clearInterval(time1,time2,time3,time4);
}
  if (window.scrollY > 10 && window.scrollY<20) {

    let a = 0
    let b = 0
    let c = 0
    let d = 0

    let time1 = setInterval(() => {

      a++;
      count1.innerHTML = `${a}`
      if (a === 120) {
        clearInterval(time1)

      }
    }, 10);
    let time2 = setInterval(() => {

      b+=2;
      count2.innerHTML = `${b}`
      if (b=== 2036) {
        clearInterval(time2)

      }
    }, 1);
    let time3 = setInterval(() => {

      c+=2;
      count3.innerHTML = `${c}`
      if (c=== 3012) {
        clearInterval(time3)

      }
    }, 1);
    let time4 = setInterval(() => {

      d++;
      count4.innerHTML = `${d}`
      if (d=== 234) {
        clearInterval(time4)

      }
    }, 10);
  }

}