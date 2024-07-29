import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Transaction from "../Pages/Transaction";
import Accounts from "../Pages/Accounts";
import Investments from "../Pages/Investments";
import CraditCard from "../Pages/CraditCard";
import Loans from "../Pages/Loans";
import Services from "../Pages/Services";
import Setting from "../Pages/Setting";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/trans"  element={<Transaction />}  />
          <Route path="/account"  element={<Accounts />}  />
          <Route path="/invest"  element={<Investments />}  />
          <Route path="/credit"  element={<CraditCard />}  />
          <Route path="/loan"  element={<Loans />}  />
          <Route path="/services"  element={<Services />}  />
          <Route path="/setting"  element={<Setting />}  />
        </Route>
        </>
    )
)