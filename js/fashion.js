const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tabs-btn') 
const panes = $$('.tabs-pane') 
const photos = $$('.photo-img')


  





tabs.forEach((tab , index )=> {
const pane = panes[index]
const images = photos[index]
    tab.onclick = function (){
        $('.tabs-btn.active').classList.remove('active')
        $('.tabs-pane.actives').classList.remove('actives')
        $('.photo-img.Newactive').classList.remove('Newactive')
        this.classList.add('active')
        pane.classList.add('actives')
        images.classList.add('Newactive')
    }



});







