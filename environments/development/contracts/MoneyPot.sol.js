// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"refundcontribution","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participantsPaid","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"organiser","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"collected","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"target","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"contribute","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"newtarget","type":"uint256"}],"name":"changeTarget","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Refund","type":"event"}],
    binary: "606060405260008054600160a060020a03191633178155610bb860035560025561027a8061002d6000396000f36060604052361561006c5760e060020a60003504633fa8fba4811461006e5780634b3f1a0a146100935780637e537486146100ab57806383197ef0146100bd57806384bcefd4146100e5578063d4b83992146100ee578063d7bb99ba146100f7578063e9755f711461010e575b005b61006c6004356024356000805433600160a060020a0390811691161461019f57610273565b61012f60043560016020526000908152604090205481565b61012f600054600160a060020a031681565b61006c60005433600160a060020a039081169116141561027857600054600160a060020a0316ff5b61012f60025481565b61012f60035481565b61012f600354600254600091901061013957610193565b61006c60043560005433600160a060020a039081169116146101965761019c565b6060908152602090f35b33600160a060020a031680825260016020819052604080842034908190556002805490930190925560609283526080919091527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c91a15060015b90565b60038190555b50565b600160a060020a038316815260016020526040812054821415610273575030600160a060020a0381163182901061027357600160a060020a038316600083606082818181858883f193505050505060006001600050600085600160a060020a03168152602001908152602001600020600050819055506002600081815054809291906001900391905055507fbb28353e4598c3b9199101a66e0989549b659a59a54d2c27fbb183f1932c8e6d83836040518083600160a060020a031681526020018281526020019250505060405180910390a15b505050565b56",
    unlinked_binary: "606060405260008054600160a060020a03191633178155610bb860035560025561027a8061002d6000396000f36060604052361561006c5760e060020a60003504633fa8fba4811461006e5780634b3f1a0a146100935780637e537486146100ab57806383197ef0146100bd57806384bcefd4146100e5578063d4b83992146100ee578063d7bb99ba146100f7578063e9755f711461010e575b005b61006c6004356024356000805433600160a060020a0390811691161461019f57610273565b61012f60043560016020526000908152604090205481565b61012f600054600160a060020a031681565b61006c60005433600160a060020a039081169116141561027857600054600160a060020a0316ff5b61012f60025481565b61012f60035481565b61012f600354600254600091901061013957610193565b61006c60043560005433600160a060020a039081169116146101965761019c565b6060908152602090f35b33600160a060020a031680825260016020819052604080842034908190556002805490930190925560609283526080919091527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c91a15060015b90565b60038190555b50565b600160a060020a038316815260016020526040812054821415610273575030600160a060020a0381163182901061027357600160a060020a038316600083606082818181858883f193505050505060006001600050600085600160a060020a03168152602001908152602001600020600050819055506002600081815054809291906001900391905055507fbb28353e4598c3b9199101a66e0989549b659a59a54d2c27fbb183f1932c8e6d83836040518083600160a060020a031681526020018281526020019250505060405180910390a15b505050565b56",
    address: "",
    generated_with: "2.0.6",
    contract_name: "MoneyPot"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("MoneyPot error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("MoneyPot error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("MoneyPot error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("MoneyPot error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.MoneyPot = Contract;
  }

})();
