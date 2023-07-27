import React from "react";
import './App.css';

// import { EntryPage } from "./page/entry/entry.page";
import { DefaultLayout } from "./Layout/defaultLayout";
// import { Dashboard } from "./page/dashboard/dashboard.page";
// import { AddTicket } from "./page/New TIcket/AddTicket.page";
import { TicketLists } from "./page/ticket-list/TicketLists.page";

function App() {
  return (
    <>
    <div className="App">
  {/* <EntryPage/>    */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        <TicketLists />
      </DefaultLayout>
    </div>
    </>
  );
}

export default App;
