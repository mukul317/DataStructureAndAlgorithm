Big O is a way to formalize fuzzy counting.
It allows us to talk formally about how runtime fo an algorithm grows as input grows.

We say that an algorithm is O(f(n)) if the number of simple operations the computer
has to do is eventually less than a constant times f(n), as n increases.

    * f(n) could be linear      f(n) = n
    * f(n) could be quadratic   f(n) = n^2 (n square)
    * f(n) could be constant    f(n) = 1
    * f(n) could be something entirely different

# Smaller terms don't matter
    * O(n + 10)         => O(n)
    * O(1000n + 50)     => O(n)
    * O(n^2 + 5n + 8)   => O(n^2)

# Big O shorthands
    * Arithmetic operations are constants
    * Variable assignment is constant
    * Accessing elements in an array by index or object by key is constant
    * In a loop, the complexity is the lenght of the loop times the complexity
      of whatever happens inside of the loop.

# Space complexity in JS - Rules of thumb
    * Most primitives (boolean, numbers, undefined, null) are constant space
    * String require O(n) space (where n is the length of string)
    * Reference types are generally O(n), where n is length (for arrays) or the number
      of keys (for object)

# Logarithms
    In mathematics, the logarithm is the inverse function to exponentiation.
    That means the logarithm of a given number x is the exponent to which another fixed number,
    the base b, must be raised, to produce that number x. In the simplest case, 
    the logarithm counts the number of occurrences of the same factor in repeated multiplication;
    e.g., since 1000 = 10 × 10 × 10 = 103, the "logarithm base 10" of 1000 is 3.

    log2(8) = 3                 => 2^3 = 8
    log2(value) = exponent      => 2^exponent = value

