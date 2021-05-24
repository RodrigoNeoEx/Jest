const answerPhone = require("../src/asyncJest");

describe("o retorno do telefonema", () => {
  test("atende", () => {
   expect(answerPhone(true)).resolves.toEqual('Oi!');
  });
  test("ocupado", () => {
   expect(answerPhone(false)).rejects.toEqual('Infelizmente não podemos atender...');
  });
});
