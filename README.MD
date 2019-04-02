# wehcat-regenerator-runtime

Use `async/await` for wechat mini program projects

### Thanks

> original creator

[Facebook-regenerator](https://github.com/facebook/regenerator)

### installing

```js
npm i wehcat-regenerator-runtime
```

### usage in wechat mini program

```js

const regeneratorRuntime = require('wehcat-regenerator-runtime');
const wf = require('wefetch');
// es6 write
async onload () {
    let res = await wf.get('/get')
    if (res) {
        // do something....
    }
    
    
}
// Es5 write
onload: async function () {
  let res = await wf.get('/get')
      console.log(res)
      
      // do something....
}
```
### Use with the wefetch request library

[wefetch](https://github.com/jonnyshao/wefetch)
