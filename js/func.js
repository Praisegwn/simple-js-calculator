//importing numbers
let zero= document.querySelector('.digit-zero')
let one= document.querySelector('.one')
let two= document.querySelector('.two')
let three= document.querySelector('.three')
let four= document.querySelector('.four')
let five= document.querySelector('.five')
let six= document.querySelector('.six')
let seven= document.querySelector('.seven')
let eight= document.querySelector('.eight')
let nine= document.querySelector('.nine')

//operators
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let times = document.querySelector('.times')
let divide = document.querySelector('.divide')
let equals = document.querySelector('.equals')

//input field
let input = document.querySelector('.input')

//importing clear and reload
let clear = document.querySelector('.clear')
let reload = document.querySelector('.reload')

//clear and reload buttons

clear.addEventListener('click', (e) => {
    input.value= '';

    
})


reload.addEventListener('click', (e) => {
    location.reload()
    input.value= '';
    
})


//number buttons

zero.addEventListener('click', (e) => {
        input.value= input.value + zero.value

       
})

one.addEventListener('click', (e) => {
    input.value= input.value + one.value

   
})

two.addEventListener('click', (e) => {
    input.value= input.value + two.value 

   
})

three.addEventListener('click', (e) => {
    input.value= input.value + three.value

   
})

four.addEventListener('click', (e) => {
    input.value= input.value + four.value

   
})

five.addEventListener('click', (e) => {
    input.value= input.value + five.value

   
})

six.addEventListener('click', (e) => {
    input.value= input.value + six.value

   
})

seven.addEventListener('click', (e) => {
    input.value= input.value + seven.value

   
})

eight.addEventListener('click', (e) => {
    input.value= input.value + eight.value

   
})

nine.addEventListener('click', (e) => {
    input.value= input.value + nine.value

   
})

//operators buttons

plus.addEventListener('click', (e) => {
    input.value= input.value + plus.value

   
})

minus.addEventListener('click', (e) => {
    input.value= input.value + minus.value

   
})

times.addEventListener('click', (e) => {
    input.value= input.value + times.value

   
})

divide.addEventListener('click', (e) => {
    input.value= input.value + divide.value

   
})

equals.addEventListener('click', (equate) => {
 
    input.value=  eval(input.value)
   
   
})

