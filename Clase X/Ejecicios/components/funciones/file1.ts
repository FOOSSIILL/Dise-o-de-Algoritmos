const a = [ 7, 4, 17, 10, 48];
const b = [ 7, 4, 17, 10, 48];

function add(x: number[], y: number[]): number[] {
    const Z = x.concat(y); 
    console.log('alphaNumeric :' + Z );
    return Z;

  }

  add(a,b);

  function buildName(firstName: string, lastName: string) {
    return firstName + '' + lastName;
  }
  

const myObject = JSON.parse('{}');


myObject.x.y.z;


declare function debug(value: any): void;

debug('a string');
debug(23);
debug({ color: 'blue' });



declare function swap(x: [number, string]): [string, number];


declare const pair: [any, any];
swap(pair);