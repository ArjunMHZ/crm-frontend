import React from "react";
import './App.css';

// import { EntryPage } from "./page/entry/entry.page";
import { DefaultLayout } from "./Layout/defaultLayout";
// import { Dashboard } from "./page/dashboard/dashboard.page";
import { AddTicket } from "./page/New TIcket/AddTicket.page";

function App() {
  return (
    <>
    <div className="App">
  {/* <EntryPage/>    */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
    </>
  );
}

export default App;
