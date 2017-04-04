# m.watch
**[m(icro)](https://github.com/ivoputzer/m.cro#readme)[watch](https://github.com/ivoputzer/m.watch)** is a handy yet lightweight [node.js](https://nodejs.org/) binary written in es6+ that watches the current working directory for changes and triggers the given command right after!

#### global install and usage
```sh
    npm -g install m.watch
    watch echo "something changed\!"
    # or namespaced
    m.watch echo "something changed\!"
```

####  local install and usage
```sh
  npm install -D m.watch
  # package.json
  # ...
  # "test": "m.watch m.test"
  # ...
  npm run test
```
