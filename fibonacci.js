function fibonacci(index) {
  if (index > 1) return fibonacci(index - 1) + fibonacci(index - 2);
  if (index == 0) return 0;
                 if (index == 1) return 1;
}
module.exports = fibonacci;

console.log(fibonacci(0));
