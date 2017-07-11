describe("AccountStatement", function() {
  var accountStatement;

  beforeEach(function() {
    accountStatement = new AccountStatement();
  });

  it("should print the header", function() {
    expect(accountStatement.header).toEqual("date || credit || debit || balance");
  });
});
