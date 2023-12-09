import { useState, useEffect, useReducer, createContext } from 'react';
import '../App.css';

export const Context = createContext(); // Corrected the export and the name

const reducer = (balance, action) => {
  switch (action.type) {
    case 'WITHDRAW':
      return balance - action.value;
    case 'DEPOSIT':
      return balance + action.value;
    default:
      return balance;
  }
};

function App() {

  // const {buy} = useContext(Creates);

  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [balance, dispatch] = useReducer(reducer, 5000);

  const withdraw = () => {
    if (withdrawAmount) {
      dispatch({ type: 'WITHDRAW', value: parseInt(withdrawAmount) });
      setWithdrawAmount('');
    }
  };

  const deposit = () => {
    if (depositAmount) {
      dispatch({ type: 'DEPOSIT', value: parseInt(depositAmount) });
      setDepositAmount('');
    }
  };

  return (
    <>
      <Context.Provider value={ balance }>
        <div className='transection'>
          <h1>SAVINGS BANK ACCOUNT</h1>
          <br />
          <center>
            <h4>CUSTOMER NAME : KAMAL</h4>
            <h4>ACCOUNT NO : 12222234567</h4>
            <h4>
              CURRENT BALANCE :
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="30"
                fill="currentColor"
                class="bi bi-currency-rupee"
                viewBox="0 0 16 16"
              >
                <path d="M4 3.06h4.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h4.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
              </svg>{' '}
              {balance}
            </h4>

            <div>
              <label>Withdraw Amount:</label>
              <br />
              <input
                type='number'
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />
              <button onClick={withdraw}>Withdraw</button>
            </div>

            <div>
              <label>Deposit Amount:</label>
              <br />
              <input
                type='number'
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
              />
              <button onClick={deposit}>Deposit</button>
            </div>
          </center>
        </div>
 
      </Context.Provider>
    </>
  );
}

export default App;
