let counter = 1

 function printNumber(){
  if (counter <= 4) {
    console.log(counter)
    counter++
    setTimeout(printNumber,1000)
  }

}
printNumber()