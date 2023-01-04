import Calculator from "./components/Calculator";

function App() {
  return (
    <main className="space-y-7 p-8">
      <header>
        <h1 className="text-lg font-semibold text-sm-black">
          Debt Consolidation Savings Calculator
        </h1>
        <p className="text-sm-dark-gray">
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
