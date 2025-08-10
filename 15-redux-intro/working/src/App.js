import CreateCustomer from "./features/customers/CreateCustomer.jsx";
import Customer from "./features/customers/Customer.jsx";
import AccountOperations from "./features/account/AccountOperations.jsx";
import BalanceDisplay from "./features/account/BalanceDisplay.jsx";

function App() {
    return (
        <div>
            <h1>🏦 The React-Redux Bank ⚛️</h1>
            <CreateCustomer/>
            <Customer/>
            <AccountOperations/>
            <BalanceDisplay/>
        </div>
    );
}

export default App;
