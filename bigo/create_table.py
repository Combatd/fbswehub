def create_table(array):
  min_value = min(array) # O(n)
  max_value = max(array) # O(n)

  # create list of size (max - min * 1)
  table = [0] * (max_value - min_value + 1) # O(d) where d = max - min
  return table

  # Time Complexity: O(a + a + d) = O(2a + d) = O(a + d)
  # Space Complexity: O(d) since a new table is being created