/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    //Chaining in-built methods

    //return text.split('').reverse().join('')
    //return[...text].reverse().join('')

    //For-loop way
    // let result =''
    // for (let i=text.length - 1; i >= 0; i--){
    //     result += text[i]
    // }

    // let result ='';
    // for (let char of text){
    //     result = char+result
    // }
    // return result

    //Recursive way
    // if (text ===''){
    // return ''
    // }else {
    //     return reverseString(text.substr(1)) + text[0]
    // }

    //Using reduce()
    //return text.split('').reduce((a,c) => c + a, '')
    return [...text].reduce((a,c) => c + a,'')
}




module.exports = reverseString