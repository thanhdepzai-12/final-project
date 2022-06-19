    let menu = document.querySelector('.menu')
    let btn= document.querySelector('.icon')
    let newBtn = document.querySelector('.new-btn')

let newMenu = ""
    btn.addEventListener('click' , ()=> {
        newMenu +=`<div class="new-menu">
        <ul>
           <li>ẩm thực</li>
           <li>du lịch</li>
           <li>lịch sử</li>
           <li>văn hóa</li>
           <li>âm nhạc</li>
        </ul>
    </div>` 

    menu.innerHTML = newMenu ;
    if(newMenu==newMenu){
        newMenu="";
    }
btn.style.display="none";
    newBtn.style.display = "flex";

    });
    newBtn.addEventListener('click', ()=>{
        menu.innerHTML = "";
 btn.style.display ="flex"
 newBtn.style.display = "none"

    } );


const photo = document.querySelector(".main-photo-s-4 ");
const photo1 = document.querySelector(".photo-1");
const photo2 = document.querySelector(".photo-2");
const photo3 = document.querySelector(".photo-3");

// console.log(photo , photo1 , photo2 , photo3)

photo1.addEventListener("mouseover" , ()=>{
   photo.style.display = "block";
   photo2.style.display = "none";
   photo3.style.display = "none";
})
photo1.addEventListener("mouseleave" , ()=>{
    photo.style.display = "grid";
    photo2.style.display = "block";
    photo3.style.display = "block";
 })
 photo2.addEventListener("mouseover" , ()=>{
    photo.style.display = "block";
    photo1.style.display = "none";
    photo3.style.display = "none";
 })
 photo2.addEventListener("mouseleave" , ()=>{
     photo.style.display = "grid";
     photo1.style.display = "block";
     photo3.style.display = "block";
  })
  photo3.addEventListener("mouseover" , ()=>{
    photo.style.display = "block";
    photo1.style.display = "none";
    photo2.style.display = "none";
 })
 photo3.addEventListener("mouseleave" , ()=>{
     photo.style.display = "grid";
     photo1.style.display = "block";
     photo2.style.display = "block";
  })