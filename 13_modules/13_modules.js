// activity 1 creating and exporting modules
// task 1
export function add(a, b) {
  return a + b;
}
export const obj = {
    name: "John Doe", 
    age: 42,
    greet(){
        console.log(`Hey! ${this.name} have a nice day`)
        
    }
}
