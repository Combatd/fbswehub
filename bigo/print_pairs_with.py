def print_pairs_with(array, target):
  for a in array:
    for b in array:
      if a + b == target:
        print(a, b)

# Time: O(n^2)
# Space: O(1) - we compared the array in place without creating a new data structure