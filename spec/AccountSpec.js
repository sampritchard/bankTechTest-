describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("should have a starting balance of 0", function() {
    expect(account.balance).toEqual(0);
  });
});
