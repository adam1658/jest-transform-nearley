const nearley = require('nearley');
const compile = require('nearley/lib/compile');
const generate = require('nearley/lib/generate');
const nearleyGrammar = require('nearley/lib/nearley-language-bootstrapped');

module.exports = {
  process: function(source, file) {
    // From https://nearley.js.org/docs/using-in-frontend
    // Parse the grammar source into an AST
    const grammarParser = new nearley.Parser(nearleyGrammar);
    grammarParser.feed(source);
    const grammarAst = grammarParser.results[0]; // TODO check for errors

    // Compile the AST into a set of rules
    const grammarInfoObject = compile(grammarAst, {
      args: [file], // Like providing CLI file arg - tells nearley where file was loaded from
    });
    // Generate JavaScript code from the rules
    const grammarRulesJavascript = generate(grammarInfoObject, 'grammar');

    return { code: grammarRulesJavascript };
  },
};
