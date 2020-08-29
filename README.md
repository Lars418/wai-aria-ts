# WAI ARIA in Typescript
Some WAI ARIA stuff for use in Typescript.

## Enums

### [enumAriaRoles](enums/enumAriaRoles.ts)
This enum can be used for the role attribute of an element.\
Attriutes and their descriptions have been parsed from the [w3 docs](https://www.w3.org/WAI/PF/aria/roles#role_definitions).

## Examples

### Enum example using Typescript and React
```tsx
import React from 'react';
import enumAriaRoles from 'enumAriaRoles.ts';

const Image = () => {
  return (
    <img src="cat.jpg" role={enumAriaRoles.presentation} />
  );
}

export default Image;
```
