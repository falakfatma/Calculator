// 0 to 9 Display on Input
number0.addEventListener('click', () => {
  input.value += 0
})
number1.addEventListener('click', () => {
  input.value += 1
})
number2.addEventListener('click', () => {
  input.value += 2
})
number3.addEventListener('click', () => {
  input.value += 3
})
number4.addEventListener('click', () => {
  input.value += 4
})
number5.addEventListener('click', () => {
  input.value += 5
})
number6.addEventListener('click', () => {
  input.value += 6
})
number7.addEventListener('click', () => {
  input.value += 7
})
number8.addEventListener('click', () => {
  input.value += 8
})
number9.addEventListener('click', () => {
  input.value += 9
})
// + - * / Display on Input 
add.addEventListener('click', () => {
  if (input.value[input.value.length - 1] == '+') {
    
  }else{
  input.value += '+'
  }
})
sub.addEventListener('click', () => {
  if (input.value[input.value.length - 1] == '-') {
    
  }else{
  input.value += '-'
  }
})
multiply.addEventListener('click', () => {
  if (input.value[input.value.length - 1] == '*') {
    
  }else{
  input.value += '*'
  }
})
divide.addEventListener('click', () => {
  if (input.value[input.value.length - 1] == '/') {
    
  }else{
  input.value += '/'
  }
})
// equal
equal.addEventListener('click', () => {
 input.value =  eval(input.value)
})
// clear
clear.addEventListener('click', () => {
 input.value =  ''
})