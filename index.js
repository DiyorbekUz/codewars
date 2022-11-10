// 7.1
// function movie(card, ticket,perc){
//     let i = 0
//     let fullPrice = 0
//     let lowedTicket = ticket

//     while(card>fullPrice){
//         fullPrice += ticket
//         lowedTicket *= perc 
//         card += lowedTicket 
//         i++
//     }
//     return i
// }

// console.log(movie(500, 15, 0.9));


// 7.2

// function XO(str){
//     x = 0
//     o = 0

//     for (let i = 0; i < str.length; i++) {
//         if(str[i].toLowerCase() == 'x'){
//             x+=1
//         }else if(str[i].toLowerCase() == 'o'){
//             o+=1
//         }
//     }
//     return x == o ? 'True' : 'False'
// }

// console.log(XO("zpzpzpp"))

// 7.3

// function highAndLow(nums){
//     nums = nums.split(' ')
//     return `${nums.sort()[0]} ${nums.sort()[nums.length-1]}`
// }

// console.log(highAndLow("1 2 -3 4 5"));

// 7.4

function catsAndShelves(start, finish, difference = finish - start){
    return Math.floor(difference / 3) + difference % 3
}

console.log(catsAndShelves(1,5));