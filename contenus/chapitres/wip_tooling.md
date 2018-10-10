# TODO


# Minifier

```bash
npm install minifyify --save
browserify -p [minifyify --no-map] main.js -o bundle.js

export NODE_ENV="production"
```

```json
{
    "scripts": {
        "build:dev": "browserify main.js > bundle.js",
        "build:prod": "browserify -p [minifyify --no-map] main.js > bundle.js"
    }
}
```

# CI

# Bundling
