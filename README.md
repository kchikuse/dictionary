## Bible dictionary

  **foo bar** match documents that contain either “foo” or “bar” 
  
  **foo*** will match all documents with words beginning with “foo”
  
  **f*o** will match any term that begins with “f” and ends in “o”
  
  **foo^10 bar** weights the term “foo” 10 times higher than the term “bar”. The weight can be any positive integer, and different terms can have different weights, `foo^10 bar^5 baz`
  
  **foo~1** fuzzy matching search terms in documents, which can be helpful if the spelling of a term is unclear. Fuzziness is applied by appending a tilde (`~`) and then a positive integer to a term. The following search matches all documents that have a word within 1 edit distance of “foo”. An edit distance of 1 allows words to match if either adding, removing, changing or transposing a character in the word would lead to a match