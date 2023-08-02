import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import './App.css';

import { EntryPage } from "./page/entry/entry.page";
// import { DefaultLayout } from "./Layout/defaultLayout";
import { Dashboard } from "./page/dashboard/dashboard.page";
import { AddTicket } from "./page/New TIcket/AddTicket.page";
import { TicketLists } from "./page/ticket-list/TicketLists.page";
import { Ticket } from "./page/ticket/Ticket.page";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EntryPage />} /> 
        
            {/* <Route path="/dashboard" element= {<DefaultLayout><Dashboard /></DefaultLayout>}  />
            <Route path="/add-ticket" element={<DefaultLayout><AddTicket /></DefaultLayout>} />
            <Route path="/tickets" element={<DefaultLayout><TicketLists /></DefaultLayout>} />
            <Route path="/ticket/:tid" element={<DefaultLayout><Ticket /></DefaultLayout>} /> */}

            {/* <PrivateRoute element={<DefaultLayout />}> */}
              <Route path="/dashboard" element= {<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/add-ticket" element={<PrivateRoute><AddTicket /></PrivateRoute>} />
              <Route path="/tickets" element={<PrivateRoute><TicketLists /></PrivateRoute>} />
              <Route path="/ticket/:tId" element={<PrivateRoute><Ticket /></PrivateRoute>} />
            {/* </PrivateRoute> */}
            

        
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
