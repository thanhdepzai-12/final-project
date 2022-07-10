
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document) 
const tabs = $$('.btn') 
const panes = $$('.mainTab-one') 
console.log(tabs , panes)
tabs.forEach((tab ,index) => {

const pane = panes[index]


    tab.onclick =function (){
        $('.btn.activeTab').classList.remove('activeTab')
        $('.mainTab-one.activeTab').classList.remove('activeTab')
        this.classList.add('activeTab')
       pane.classList.add('activeTab')
    }
});

function changeColor(m) {
    document.getElementById('photo').src = '/photo/'+m+'.jpg';
    document.getElementById('codien1').classList.remove('button-tab')
    document.getElementById('codien2').classList.remove('button-tab')
    document.getElementById('codien3').classList.remove('button-tab')
    document.getElementById('codien4').classList.remove('button-tab')
    document.getElementById(m).classList.add('button-tab')
}