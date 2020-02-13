it('imports nearley grammar', () => {
  expect(require('./with-includes.ne')).toMatchInlineSnapshot(`
Object {
  "Lexer": undefined,
  "ParserRules": Array [
    Object {
      "name": "foo$string$1",
      "postprocess": [Function],
      "symbols": Array [
        Object {
          "literal": "f",
        },
        Object {
          "literal": "o",
        },
        Object {
          "literal": "o",
        },
      ],
    },
    Object {
      "name": "foo",
      "symbols": Array [
        "foo$string$1",
      ],
    },
    Object {
      "name": "bar$string$1",
      "postprocess": [Function],
      "symbols": Array [
        Object {
          "literal": "b",
        },
        Object {
          "literal": "a",
        },
        Object {
          "literal": "r",
        },
      ],
    },
    Object {
      "name": "bar",
      "symbols": Array [
        "bar$string$1",
      ],
    },
    Object {
      "name": "main",
      "symbols": Array [
        "foo",
      ],
    },
    Object {
      "name": "main",
      "symbols": Array [
        "bar",
      ],
    },
  ],
  "ParserStart": "main",
}
`);
});
