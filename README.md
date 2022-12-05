A small repo to showcase getting a dependency tree of files using [node-dependency-tree](https://github.com/dependents/node-dependency-tree)

## File Structure

```
test/
  c/
    c.js
    utils.js
  a.js
  b.js
  utils.js
```

## Files

a.js

```
import {testUtils} from './utils'

console.log(testUtils)
```

b.js

```
import {testUtils} from './utils'
import {cUtils} from './utils'

console.log(cUtils)
```

c.js

```
import {cUtils} from './utils'
import {testUtils} from './utils'

console.log(testUtils)
console.log(cUtils())
```

util.js

```
export const testUtils = true
```

c/utils.js

```
import { testUtils } from "../utils"

export const cUtils = () => {testUtils}
```

## Output

Running `yarn build-tree` will create this output an object with the key is the absolute file path and the value is another object/subtree.

```
{
  '/Users/joshuahelguero/Documents/personal/projects/dependency-tree-poc/test/a.js': {
    '/Users/joshuahelguero/Documents/personal/projects/dependency-tree-poc/test/utils.js': {}
  }
}
{
  '/Users/joshuahelguero/Documents/personal/projects/dependency-tree-poc/test/b.js': {
    '/Users/joshuahelguero/Documents/personal/projects/dependency-tree-poc/test/utils.js': {}
  }
}
{
  '/Users/joshuahelguero/Documents/personal/projects/dependency-tree-poc/test/c/c.js': {
    '/Users/joshuahelguero/Documents/personal/projects/dependency-tree-poc/test/c/utils.js': {
      '/Users/joshuahelguero/Documents/personal/projects/dependency-tree-poc/test/utils.js': {}
    }
  }
}
```
