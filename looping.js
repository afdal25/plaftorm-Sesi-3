//mencari palindrome terdekat selanjutnya dengan output:
// input : 9, output : 11
// input : 100, output : 101
// input : 200, output : 202
// input : 1000, output : 1001
// input : 2345, output : 2442

function isPalindrome(num) {
  const strNUm = num.toString();
  return strNUm === strNUm.split('').reverse().join('');
}

function nextPalindrome(num) {
  let i = num + 1;
  while (!isPalindrome(i)) {
    i++;
  }
  return i;
}
const input = [9, 100, 200, 1000, 2345];
input.forEach((input) => {
  const output = nextPalindrome(input);
  console.log('Input : ' + input + ', output : ' + output);
});
