const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

const fib = (n) => {
  let result = [0, 1];
  if (n <= 2) return result;
  for (i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
};

/**
 * Requirements (functional, non-function)
 * Architecture ( MVC - high level design and components )
 * Data Source and Data Flow (JSON DataTypes? pagination)
 * API Design (Http/xmtp protocols , example of use case and its api)
 * Optimization (a11y, accessibility, responsoveness, scalability)
 * */
