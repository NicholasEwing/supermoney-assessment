import Calculator from "./components/Calculator";

function App() {
  return (
    <main>
      <header>
        <h1>Debt Consolidation Savings Calculator</h1>
        <p>
          Enter the details of your current unsecured debt and see how much you
          may be able to save after consolidating the debts into a single loan.
          Only include credit card debt, medical debt, personal loan debt, and
          other types of unsecured debt.
        </p>
      </header>
      <Calculator />
    </main>
  );
}

export default App;
