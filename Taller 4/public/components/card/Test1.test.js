/**
 * @jest-environment jsdom
 */
 function sum(x, y ) {
    const Z = x.concat(y); 
    console.log('alphaNumeric :' + Z );
    return Z;

  }
  module.exports = sum;



  test('adds 1 + 2 to equal 3', () => {
    const a = [ 7, 4, 17, 10, 48];
    const b = [ 7, 4, 17, 10, 48];
    const c = a.concat(b);

    expect(sum(a,b)).toEqual (c);
  });