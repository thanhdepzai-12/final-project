const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const Button = $$('.btnCul') 
const panes = $$('.tabpane') 


Button.forEach((tab , index )=> {
const pane = panes[index]
    tab.onclick = function (){
        $('.btnCul.active').classList.remove('active')
        $('.tabpane.activeTab').classList.remove('activeTab')
        this.classList.add('active')
        pane.classList.add('activeTab')
    }
});