const grammar = require('./grammar.ne');

it('imports nearley grammar', () => {
  expect(grammar).toMatchInlineSnapshot(`
Object {
  "Lexer": undefined,
  "ParserRules": Array [
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
