contract MoneyPot {
	address public organiser;
	mapping (address => uint) public participantsPaid;
	uint public collected;
	uint public target;

	event Deposit(address _from, uint _amount);  // log these events
	event Refund(address _to, uint _amount);

	function MoneyPot() {
	organiser = msg.sender;
	target = 3000;
	collected = 0;
	}

	function contribute() public returns (bool success) {

	if (collected >= target) { return false; }
	participantsPaid[msg.sender] = msg.value;
	collected++;
	Deposit(msg.sender , msg.value);
	return true;
	}

	function changeTarget(uint newtarget) public {
		if (msg.sender != organiser) { return; }
		target = newtarget;
	}

	function refundcontribution (address recipient, uint amount) public {
	if (msg.sender != organiser) { return; }
	if (participantsPaid[recipient] == amount) {
		address myAddress = this;
		if (myAddress.balance >= amount) {
			recipient.send(amount);
			participantsPaid[recipient] = 0;
			collected--;
			Refund(recipient,amount);
		}
	}
}

		function destroy() { // so funds not locked in contract forever
			if (msg.sender == organiser) {
				suicide(organiser); // send funds to organiser
		}		
	}
}