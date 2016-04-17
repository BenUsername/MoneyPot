contract('MoneyPot', function(accounts) {
  it("Initial MoneyPot settings should match", function(done) {
    var MoneyPot = MoneyPot.at(MoneyPot.deployed_address);  
    // same as previous example up to here
    MoneyPot.new({ from: accounts[0]  })
    .then(function(MoneyPot) {
      MoneyPot.target.call().then(
          function(target) {
            assert.equal(target, 2000, "Quota doesn't match!"); 
          }).then( function() {
            return MoneyPot.collected.call();
          }).then( function(collected) {
            assert.equal(collected, 0, "Participants should be zero!");
            return MoneyPot.organiser.call();
          }).then( function(organizer) {
            assert.equal(organiser, accounts[0], "Owner doesn't match!");
            done();   // to stop these tests earlier, move this up
        }).catch(done);
      }).catch(done);
    });
  });