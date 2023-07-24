import React from "react";
import './App.css';

// import { EntryPage } from "./page/entry/entry.page";
import { DefaultLayout } from "./Layout/defaultLayout";
import { Dashboard } from "./page/dashboard/dashboard.page";

function App() {
  return (
    <>
    <div className="App">
  {/* <EntryPage/>    */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
    </>
  );
}

export default App;
