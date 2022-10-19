def print_even_sequence(array):
  for a in array:
    if a % 2 == 0:
      print("Sequence for {0}".format(a))
      for k in range(0, a):
        print(k)

# Time O(a * k), where k could be a smaller or bigger number but is distinct from the number of elements in array a
# Spalce: O(1) - no new data structure were created besides the argument array