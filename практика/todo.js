



//   const newBtn = document.createElement('div')
//   document.body.append(newBtn)
//   newBtn.classList.add('bigBtn')  
  
//     const newBtn1 = document.createElement('div')
//     newBtn1.classList.add('newBtn1')
//     newBtn.append(newBtn1)

//     const newBtn2 = document.createElement('div')
//     newBtn2.classList.add('newBtn2')
//     newBtn.append(newBtn2)

//     const newBtn3 = document.createElement('div')
//     newBtn3.classList.add('newBtn3')
//     newBtn.append(newBtn3)



//     newBtn1.addEventListener('click', (event) => {
//         newBtn.style.background = "red"  
//         newBtn1.style.color = "black"  
//         newBtn1.innerText = `button` 
//         return   
          
        
//     })
//     newBtn2.addEventListener('click', (event) => {
//         newBtn.style.background = "green"      
//         newBtn2.style.color = "black"      
//         newBtn2.innerText = `button`
//         return
          
        
//     })
//     newBtn3.addEventListener('click', (event) => {
//         newBtn.style.background = "yellow"      
//         newBtn3.style.color = "black"      
//         newBtn3.innerText = `button`  
//         return 
        
//     })



const ball = document.querySelector('.block')
console.log(ball)


ball.onmousedown = function(event) {
    console.log(event)
    ball.style.position = "absolute"
    newF(event)

    document.body.appendChild(ball)



function newF(e) {
    ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
  }
ball.onmousemove = (event) =>{
    newF(event)
}
ball.onmouseup = (event) => {
    document.onmousemove = null
    ball.onmousemove = null
}





}