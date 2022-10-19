def print_pairs_with(array, target):
  for a in array:
    for b in array:
      if a + b == target:
        print(a, b)