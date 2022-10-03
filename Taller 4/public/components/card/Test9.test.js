/**
 * @jest-environment jsdom
 */







  function sum(x) {
    let r = 1;
   for(let i = x; i>0; i--){
    r *= i;
}

   return r;
  }
  module.exports = sum;



  test('adds 1 + 2 to equal 3', () => {
    expect(sum(3)).toBeGreaterThan(3);
  });