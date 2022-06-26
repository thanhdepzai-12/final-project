const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)



const tabs2 = $$('.tabs-btn-2') 
const panes2 = $$('.tabs-pane-2') 












tabs2.forEach((tab , index )=> {
    const pane2 = panes2[index]
        tab.onclick = function (){
            $('.tabs-btn-2.active').classList.remove('active')
            $('.tabs-pane-2.actives').classList.remove('actives')
            this.classList.add('active')
            pane2.classList.add('actives')
        }
    
    
    
    });