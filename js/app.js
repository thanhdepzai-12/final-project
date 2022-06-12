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




