/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const vowels=['a','e','i','o','u']

function vowelsCounter(txt){
// iterative approach --0.689s
//   let counter = 0;
//   for (let letter of txt.toLowerCase()){
//     if (vowels.includes(letter)){
//       counter++
//     }
//   }
//   return counter

//regex -- 0.771s
    let matchingInstances = txt.match(/[aeiou]/gi)
    if(matchingInstances){
        return matchingInstances.length
    }else{
        return 0
    }
}



module.exports = vowelsCounter;
