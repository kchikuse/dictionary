## Bible dictionary

  **Jesus Christ** match documents that contain either "Jesus" or "Christ" 
  
  **jerus*** will match all documents with words beginning with "jerus"
  
  **am*ah** will match any term that begins with "am" and ends in "ah"
  
  **baal tamar^10** weights the term "tamar" 10 times higher than the term "baal". The weight can be any positive integer, and different terms can have different weights, `baal^10 tamar^5 peor`
  
  **arkit~1** fuzzy matching search terms in documents, which can be helpful if the spelling of a term is unclear. Fuzziness is applied by appending a tilde (`~`) and then a positive integer to a term. The following search matches all documents that have a word within 1 edit distance of "arkit". An edit distance of 1 allows words to match if either adding, removing, changing or transposing a character in the word would lead to a match