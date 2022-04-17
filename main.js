function longest(s1, s2) {
    let string3 = s1 + s2
    string3 = string3.split('');
     let stringUniqueArray = [...new Set(string3)]
    console.log(stringUniqueArray)
    let result = stringUniqueArray.sort()
    console.log(result.join(''))
    return result.join('')
    // your code
  }


  /* 7 kyu-Two to One

  Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string,
   the longest possible, containing distinct letters - each taken only once - 
   coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"