let arr = []

for (let i=0; i<3;i++){
    arr.push((function(index){
        return function(){
            console.log(index)
        }
    })(i))
}

arr[0]()
arr[1]()
arr[2]()
console.log(arr);