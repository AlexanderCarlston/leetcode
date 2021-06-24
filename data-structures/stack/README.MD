# Stack

## First pass implementation

Creating the heap was easy enough.

## Code

```
function isValid(s) {
  if (s.length < 2 ) { return false }
  let pStack = []

  for (let i = 0; i < s.length; i++) {
    let currentSubString = s.charAt(i)

    if (isOpenBrace(currentSubString)){
      pStack.push(currentSubString)
    } else {
      if(!isValidClosingBrace(pStack.pop(), currentSubString)) {
        return false
      }
    }
  }

  if (pStack.length > 0) {
    return false
  }

  return true
};

function isOpenBrace(brace) {
  const validOpenBraces = ['(', '{', '[']
  return validOpenBraces.includes(brace)
}

function isValidClosingBrace(openBrace, closeBrace) {
  switch(openBrace) {
    case '(':
      return closeBrace === ')';
    case '{':
      return closeBrace === '}';
    case '[':
      return closeBrace === ']';
    default: return false;
  }
}


```