var mohsen = {
    FirstName : 'Mohsen',
    LastName : 'Safizade',
    Family :{
        Father : 'Mohammad',
        Mother : 'Fateme',
        Sister : 'Mahsa'
    },
    Friends : ['Ali', 'Amir','Aryan']
} 
// E 7
function printFriends(a){
    var friends = ''
    for(i = 0;i < a.Friends.length;i++ ){
        friends += a.Friends[i] + ' ' 
    }
    console.log(friends)
}

printFriends(mohsen)

console.log('----------------------------------------------')
// E 8
function getFullName(b){
    var fullName =b.FirstName + ' ' + b.LastName
    console.log(fullName)
}

getFullName(mohsen)

console.log('----------------------------------------------')
// E 9
function sum(){
    var sumResult = 0
    for (i = 0; i < arguments.length;i++){
        sumResult += arguments[i]
    }
    return sumResult
}

function subtraction(){
    var subResult = arguments[0]
    for (i = 1; i < arguments.length; i++){
        subResult -= arguments[i]
    }
    return subResult
}

function multiply(){
    var mulResult = 1
    for (i = 0; i < arguments.length;i++){
        mulResult *= arguments[i]
    }
    return mulResult
}

function division(){
    var divResult = arguments[0]
    for (i = 1; i < arguments.length;i++){
        divResult /= arguments[i]
    }
    return divResult
}


console.log('----------------------------------------------')
// E 22

const A = new Set([1,9,7,12,28,5,6])

const B = new Set([5,4,9,7,8,2,])

function Union (A, B) {

    const C = new Set()

    for(let i of A) {C.add(i)}
    for(let i of B) {C.add(i)}
    console.log(`The Union of A and B is : (${[...C]})`)
}
Union(A,B)

function Intersections (A, B) {
    
    const C = new Set()

    for(let i of A) {
        for(let j of B) {
            if(i === j){
                C.add(i)
            }
        }
    }
    console.log(`The Intersections of A and B is : (${[...C]})`)
}
Intersections(A, B)

function Difference (A, B) {

    for(let i of A) {
        for(let j of B) {
            if(i === j){
                A.delete(i)
            }
        }
    }
    console.log(`The Difference of A and B is : (${[...A]})`)
    
}
Difference(A, B)