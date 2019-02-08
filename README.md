# jest-transform-nearley

A jest transform that enables nearley grammar support

## Usage

1. Install the transform:
    ```bash
    npm install jest-transform-nearley
    ```

2. Configure jest:
    ```json
    {
        "transform": {
            "^.+\\.ne$": "jest-transform-nearley"
        }
    }
    ```

3. Now you can import *.ne files from javascript:
    ```js
    const grammar = require('./grammar.ne');
    ```

## Development

Testing:

```bash
npm run test
```

Formatting with prettier:

```bash
npm run format
```

## License

MIT License

# Acknowledgements

Inspired by:

- https://nearley.js.org/docs/using-in-frontend
- https://github.com/eddyerburgh/jest-transform-stub
- https://github.com/vuejs/vue-jest
