const musicList = document.getElementById('music-list')

const callApi = async function () {
    let res = await fetch(`https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST`)
    res = await res.json()
    // console.log(res)
    let newMusicData = res.songs.top100_VN[1]
    let musicData = res.songs.top100_VN[2]
    let musicHTML = '';
    // console.log(musicData)
    let musicItemHTML = '';
    
    for(let i=0 ; i<12; i++) {
 
        song = musicData.songs[i]
      
       
    
          
               musicItemHTML += `<div class="card" >
               <img src="${song.avatar}" class="card-img-top" alt="Pokemon">
               <div class="card-body">
                 <h5 class="card-title">
                    ${song.title}</h5>
                 <p class="card-text">
               Tác giả :  ${song.creator}
                 </p>
               </div>
               </div>`
        }
  
        musicHTML+=`
        <div class="w-100">
    
            <div class="flex">
                ${musicItemHTML}
            </div>
        </div>`
 
            musicList.innerHTML = musicHTML ;
    



    let btn = document.querySelectorAll('.card')
    const mainsong = document.querySelector('.main-song')
    const newmainsong =document.querySelector('.mainsong')
const overlay = document.querySelector('.overlay-music')

    btn.forEach((tab , index )=> {
      var newTab = ""
  var   newSong =musicData.songs[index]
            tab.onclick = function (){
            mainsong.style.display="flex";
            // musicList.classList.add("overlay")
        overlay.style.display="block"

        newTab +=`  <div class='colum colum20'><img src="${newSong.bgImage}" alt="">
        <audio controls class="playsong">
        <source src="${newSong.music}" type="audio/ogg">
      </audio></div>
        <div class='colum colum21'>
        <div class='overlay-tcs-col21'>
        <h1>Bài Hát : ${newSong.title}</h1>
        <p>Tình yêu là đề tài lớn và ảnh hưởng nhất trong các tác phẩm của Trịnh Công Sơn. Những bản tình ca chiếm đa số trong danh mục nhạc phẩm. Khả năng viết nhạc tình của Trịnh Công Sơn tưởng chừng không biết mai một theo năm tháng, theo thời đại: từ 1958 với "Ướt mi" đã nổi tiếng cho đến thập niên 1990 ông vẫn có những tình ca được nhiều người ưa thích: "Như một lời chia tay", "Xin trả nợ người"...

        Nhạc tình của ông đa số là nhạc buồn, thường nói lên tâm trạng buồn bã, cô đơn như trong "Sương đêm", "Ướt mi", những ca khúc nhạc tình vẫn mênh mang nỗi buồn kiếp người như "Diễm xưa", "Biển nhớ", "Tình xa", "Tình sầu", "Tình nhớ", "Em còn nhớ hay em đã quên", "Hoa vàng mấy độ", "Cỏ xót xa đưa", "Gọi tên bốn mùa", "Mưa hồng"...</p>
        </div>
  </div>
        <div class='colum colum22'>
        </div>`
    
        newmainsong.innerHTML = newTab;
    
        if(newTab==newTab){
            newTab="";
        }
     
            }
            const btnClose = document.querySelector('.button-close')
            console.log(btnClose)
            btnClose.addEventListener("click", ()=>{
                mainsong.style.display="none";
                // musicList.classList.add("overlay")
            overlay.style.display="none";
    
            })

    
});




const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
 

const MainS2 = $('.mainsec-s-2-music')
const MainML = $('.main-list-music')
const MainMP = $('.main-music-play')
let MusicTT = "";
let MusicPP = "";
let DadMusic = "";
for(let j = 2 ; j<6 ; j++){
NewMusic = newMusicData.songs[j]


MusicTT +=`

 <div class="list-music">
  <h2>${NewMusic.title}</h2>
  <p>${NewMusic.creator}</p>
  <i class='bx bx-headphone'></i>
 </div>`
MusicPP +=`
<div class="music-play">
<img src="${NewMusic.bgImage}" alt="">
<audio controls class="play-song">
<source src="${NewMusic.music}" type="audio/ogg">
</audio>
</div>`
}
// MainML.innerHTML = MusicTT;
// MainMP.innerHTML = MusicPP;

DadMusic +=`
<div class="main-list-music">
            <div class="list-music active">
            <h2>Đính Ước</h2>
            <p>Như Quỳnh, Trường Vũ</p>
            <i class='bx bx-headphone'></i>
            </div>

${MusicTT}

             </div>
             
             
             
             <div class="main-music-play">
             <div class="music-play Mactive">
             <img src="https://avatar-ex-swe.nixcdn.com/singer/avatar/2018/11/28/b/a/d/9/1543393481989_600.jpg" alt="">
             <audio controls class="play-song">
                 <source src="/photo/DinhUoc-NhuQuynh-TruongVu_3aadk.mp3" type="audio/ogg">
              
                 </audio>  
                 </div>
         ${MusicPP}
 </div>
 `
MainS2.innerHTML = DadMusic ;









const BtnA = $$('.list-music')
const TabM = $$('.music-play')



BtnA.forEach((Btn , indexs )=> {
    const pane = TabM[indexs]

        Btn.onclick = function (){
            $('.list-music.active').classList.remove('active')
            $('.music-play.Mactive').classList.remove('Mactive')
           
            this.classList.add('active')
            pane.classList.add('Mactive')
          
          
        }
    
    
    
    });


}   

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const BtnMusic = $$('.btnMusical')
const Mpane = $$('.musical-pane ')



BtnMusic.forEach((Btns , indes )=> {
    const Mtab = Mpane[indes]

        Btns.onclick = function (){
            $('.btnMusical.activeBTN').classList.remove('activeBTN')
            $('.musical-pane.musicactive ').classList.remove('musicactive')
           
            this.classList.add('activeBTN')
            Mtab.classList.add('musicactive')
          
          
        }
    
    
    
    });




callApi()

