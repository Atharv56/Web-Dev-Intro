document.addEventListener('DOMContentLoaded', () =>{

let count = 0
function increment(){
    count = count+1
    console.log(count)
}
increment()
const name = 'Atharv'
function sendText(){
    console.log('hey '+name+' you left your bag')
}
sendText()


})//Or you can write the script tag below all the html code in the body

