//Making an EventListener for the button tag
colorBtn.addEventListener('click',getColorScheme)
console.log("hippie,hurray")
//Function for getting the color scheme
function getColorScheme(){
   //Declaring a variable "color" for storing  'input type="color"' values
 const color = document.getElementById('color-picker').value.substring(1)
 //Declaring a variable "mode" for storing 'select id="color-dropdown'
 const mode = document.getElementById('color-dropdown').value.toLowerCase()
 //Making a request to get the "THE COLOR API"
 fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}`)
 //Change the raw response into a javascript object
 .then(response=>response.json())
 //Producing the response of the Javascript object of the "THE COLOR API"
 .then(data=>{
      console.log(data)
      for(let i=0; i<5; i++){
         document.getElementById(`color${i}`).style.background=data.colors[i].hex.value
         document.getElementById(`h${i}`).textContent=data.colors[i].hex.value

         document.getElementById(`h${i}`).addEventListener('click',function(){
         navigator.clipboard.writeText(data.colors[i].hex.value)
         alert("copied sucessfully!")
         
         })

         
      }
   
   })
   
}

document.getElementById('change-color').addEventListener('click',changeBackgroundColor)

function changeBackgroundColor(){
   const body=document.querySelector('main')
   body.classList.toggle('dark-color')
   hex = document.querySelector('.hex')
   console.log(hex.classList.toggle('change'))

}