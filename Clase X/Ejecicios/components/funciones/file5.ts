
const arr1 = ['rat', 'dog', 'cat', 'parrot', 'cat'];
const arr2 = ['cat', 'lizard', 'at', 'cat'];





function isBigEnough(element, index, array) { 
   return (element >= 10); 
} 
          
const passed = [12, 5, 8, 130, 44].every(isBigEnough); 
console.log('test Value : ' + passed );


