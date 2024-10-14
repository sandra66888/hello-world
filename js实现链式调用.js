class Cal {
  constructor(value){
    this.value = value
  }
  minus(num){
    this.value -= num
    return this
  }
  add(num){
    this.value += num
    return this
  }
  get(){
    return this.value
  }
}
const num = new Cal(3).add(7).minus(8).get()
console.log(num)