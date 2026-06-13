/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Dashboard } from "@/pages/Dashboard";
import { Leads } from "@/pages/Leads";
import { Customers } from "@/pages/Customers";
import { TestRide } from "@/pages/TestRide";
import { Inventory } from "@/pages/Inventory";
import { BikeModels } from "@/pages/BikeModels";
import { Bookings } from "@/pages/Bookings";

import { Delivery } from "@/pages/Delivery";
import { Finance } from "@/pages/Finance";
import { Insurance } from "@/pages/Insurance";
import { ServiceCenter } from "@/pages/ServiceCenter";
import { JobCards } from "@/pages/JobCards";
import { SpareParts } from "@/pages/SpareParts";
import { Accessories } from "@/pages/Accessories";
import { Employees } from "@/pages/Employees";
import { Attendance } from "@/pages/Attendance";
import { Payroll } from "@/pages/Payroll";
import { Accounts } from "@/pages/Accounts";
import { GST } from "@/pages/GST";
import { MultiBranch } from "@/pages/MultiBranch";
import { Reports } from "@/pages/Reports";
import { Settings } from "@/pages/Settings";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {currentPage === "Dashboard" && <Dashboard setCurrentPage={setCurrentPage} />}
      {currentPage === "Leads" && <Leads setCurrentPage={setCurrentPage} />}
      {currentPage === "Customers" && <Customers setCurrentPage={setCurrentPage} />}
      {currentPage === "Test Ride" && <TestRide setCurrentPage={setCurrentPage} />}
      {currentPage === "Inventory" && <Inventory setCurrentPage={setCurrentPage} />}
      {currentPage === "Bike Models" && <BikeModels setCurrentPage={setCurrentPage} />}
      {currentPage === "Booking" && <Bookings setCurrentPage={setCurrentPage} />}
      {currentPage === "Delivery" && <Delivery setCurrentPage={setCurrentPage} />}
      {currentPage === "Finance" && <Finance setCurrentPage={setCurrentPage} />}
      {currentPage === "Insurance" && <Insurance setCurrentPage={setCurrentPage} />}
      {currentPage === "Service Center" && <ServiceCenter setCurrentPage={setCurrentPage} />}
      {currentPage === "Job Cards" && <JobCards setCurrentPage={setCurrentPage} />}
      {currentPage === "Spare Parts" && <SpareParts setCurrentPage={setCurrentPage} />}
      {currentPage === "Accessories" && <Accessories setCurrentPage={setCurrentPage} />}
      {currentPage === "Employees" && <Employees setCurrentPage={setCurrentPage} />}
      {currentPage === "Attendance" && <Attendance setCurrentPage={setCurrentPage} />}
      {currentPage === "Payroll" && <Payroll setCurrentPage={setCurrentPage} />}
      {currentPage === "Accounts" && <Accounts setCurrentPage={setCurrentPage} />}
      {currentPage === "GST" && <GST setCurrentPage={setCurrentPage} />}
      {currentPage === "Multi Branch" && <MultiBranch setCurrentPage={setCurrentPage} />}
      {currentPage === "Reports" && <Reports setCurrentPage={setCurrentPage} />}
      {currentPage === "Settings" && <Settings setCurrentPage={setCurrentPage} />}
      {currentPage !== "Dashboard" && currentPage !== "Leads" && currentPage !== "Customers" && currentPage !== "Test Ride" && currentPage !== "Inventory" && currentPage !== "Bike Models" && currentPage !== "Booking" && currentPage !== "Delivery" && currentPage !== "Finance" && currentPage !== "Insurance" && currentPage !== "Service Center" && currentPage !== "Job Cards" && currentPage !== "Spare Parts" && currentPage !== "Accessories" && currentPage !== "Employees" && currentPage !== "Attendance" && currentPage !== "Payroll" && currentPage !== "Accounts" && currentPage !== "GST" && currentPage !== "Multi Branch" && currentPage !== "Reports" && currentPage !== "Settings" && (
        <div className="h-full flex flex-col items-center justify-center p-6 text-slate-400 bg-[#0f172a] rounded-lg border border-[#1e293b]">
          <h2 className="text-xl font-bold text-slate-200 mb-2">{currentPage}</h2>
          <p className="text-sm mb-4">This module is under construction.</p>
          <button 
            onClick={() => setCurrentPage("Dashboard")}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-bold transition-colors shadow-sm"
          >
            Back to Dashboard
          </button>
        </div>
      )}
    </Layout>
  );
}

