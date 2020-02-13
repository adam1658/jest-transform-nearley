it('imports nearley grammar', () => {
  expect(require('./basic-grammar.ne')).toMatchInlineSnapshot(`
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
