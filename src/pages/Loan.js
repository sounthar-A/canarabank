import React, { useState, useReducer } from 'react';

function Loan() {
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [withdrawalMessage, setWithdrawalMessage] = useState("");

   const handleSubmit = (event) => {
    event.preventDefault();
    const amount = Number(name);
    if (amount > balance) {
      setWithdrawalMessage('Withdrawal failed. Insufficient balance.');
    } else {
      withdraw(amount);
      setWithdrawalMessage(`Withdrawal of RS.${amount} successful. Remaining balance: RS.${balance - amount}`);
    }
  }

  const handleSubmit1 = (event) => {
    event.preventDefault();
    deposit(Number(name1));
  }

  const reducer = (balance, action) => {
    switch (action.type) {
      case "WITHDRAW":
        return balance - action.value;
      case "DEPOSIT":
        return balance + action.value;
      default:
        return balance;
    }
  };

  const withdraw = (amount) => {
    dispatch({ type: "WITHDRAW", value: amount });
  }

  const deposit = (amount) => {
    dispatch({ type: "DEPOSIT", value: amount });
  }

  const [balance, dispatch] = useReducer(reducer, 10000);

  return (
    <>
    <center>
      <form style={{marginTop:'300px'}} onSubmit={handleSubmit}>
        <label>Withdraw:
          <input
            type="number"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Withdraw</button>
      </form>

      <form onSubmit={handleSubmit1}>
        <label>Deposit:
          <input
            type="number"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
        </label>
        <button type="submit">Deposit</button>
      </form>

      <h1>Balance: {balance}</h1>
      <p>{withdrawalMessage}</p>
      </center>
    </>
  );
}

export default Loan;
