def print_all_primes(array):
  for k in array:
    if is_prime(k):
      print(k)
# Time: O(a * q) - we won't ignore the other function's complexity
# Space: O(1 * q) = O(q) - Is the other function creating a new data structure in memory?

def is_prime(num):
  return 'This function being invoked inside the other could affect our Big O Time Complexity based on how long this inner function takes to run too'