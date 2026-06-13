// Data definitions to feed into StatGrids natively
import { Users, UsersRound, CalendarPlus, Package, FileText, DollarSign, Shield, Wrench, ClipboardList, Box, ShoppingBag, UserCheck, CalendarCheck, FileSpreadsheet, Percent, MessageSquare, Star, Network, BrainCircuit } from "lucide-react";

export const salesOverviewStats = [
  { label: "Total Leads", value: "1,245", highlight: true },
  { label: "Today's Leads", value: "42" },
  { label: "New Leads", value: "30" },
  { label: "Hot Leads", value: "15" },
  { label: "Warm Leads", value: "85" },
  { label: "Cold Leads", value: "1,115" },
  { label: "Pending Follow-Ups", value: "28" },
  { label: "Follow-Ups Today", value: "12" },
  { label: "Test Rides Req", value: "8" },
  { label: "Bookings Today", value: "5", highlight: true },
  { label: "Monthly Bookings", value: "84" },
  { label: "Deliveries Today", value: "4" },
  { label: "Monthly Deliveries", value: "76" },
  { label: "Lost Leads", value: "12" },
  { label: "Conversion %", value: "18.5%" },
];

export const customerOverviewStats = [
  { label: "Total Customers", value: "8,450", highlight: true },
  { label: "New Cust (M)", value: "145" },
  { label: "Repeat Cust", value: "1,204" },
  { label: "VIP Customers", value: "85" },
  { label: "Inactive Cust", value: "3,400" },
  { label: "Birthday Today", value: "12" },
  { label: "Anniversary Today", value: "5" },
  { label: "CSAT Score", value: "4.8/5", highlight: true },
];

export const inventoryStats = [
  { label: "Total Bikes", value: "245" },
  { label: "Available Stock", value: "142", highlight: true },
  { label: "Reserved Stock", value: "45" },
  { label: "Sold Stock (YTD)", value: "890" },
  { label: "Incoming Stock", value: "58" },
  { label: "Low Stock Models", value: "3" },
  { label: "Dead Stock Models", value: "0" },
  { label: "Fast Moving", value: "Classic 350" },
  { label: "Slow Moving", value: "Scram 411" },
];

export const testRideStats = [
  { label: "Today's Rides", value: "14", highlight: true },
  { label: "Upcoming Rides", value: "24" },
  { label: "Completed", value: "128" },
  { label: "Pending", value: "5" },
  { label: "Conversion Rate", value: "42%" },
];

export const bookingStats = [
  { label: "New Bookings", value: "8" },
  { label: "Pending Bookings", value: "34" },
  { label: "Confirmed", value: "112", highlight: true },
  { label: "Cancelled", value: "12" },
  { label: "Adv Collected", value: "₹4.5L" },
  { label: "Ready for Delivery", value: "18" },
];

export const financeStats = [
  { label: "Applications", value: "45" },
  { label: "Approved Loans", value: "32", highlight: true },
  { label: "Pending Loans", value: "8" },
  { label: "Rejected Loans", value: "5" },
  { label: "Finance Rev", value: "₹1.2L" },
  { label: "Comm Earned", value: "₹45K" },
];

export const insuranceStats = [
  { label: "Active Policies", value: "890" },
  { label: "Expired", value: "145" },
  { label: "Renewals Due", value: "42", highlight: true },
  { label: "Ins Revenue", value: "₹85K" },
  { label: "Under Process", value: "12" },
];

export const serviceStats = [
  { label: "Today's Bookings", value: "28", highlight: true },
  { label: "Open Job Cards", value: "15" },
  { label: "Closed Cards", value: "124" },
  { label: "Free Services", value: "45" },
  { label: "Paid Services", value: "79" },
  { label: "Warranty Jobs", value: "12" },
  { label: "Service Rev", value: "₹1.8L" },
];

export const mechanicStats = [
  { label: "Total Mechanics", value: "12" },
  { label: "Assigned Jobs", value: "24" },
  { label: "Completed Jobs", value: "18" },
  { label: "Pending Jobs", value: "6" },
  { label: "Efficiency %", value: "85%", highlight: true },
  { label: "Avg Rating", value: "4.6/5" },
];

export const partsStats = [
  { label: "Total Parts", value: "4,500" },
  { label: "Available Stock", value: "3,800" },
  { label: "Low Stock Items", value: "45" },
  { label: "Reorder Alerts", value: "12", highlight: true },
  { label: "Fast Moving", value: "Oil Filter" },
  { label: "Dead Stock", value: "140" },
  { label: "Stock Value", value: "₹18.5L" },
];

export const accessoriesStats = [
  { label: "Helmet Sales", value: "142" },
  { label: "Jacket Sales", value: "45" },
  { label: "Seat Covers", value: "89" },
  { label: "Mobile Holders", value: "120" },
  { label: "Upsell Rev", value: "₹2.4L", highlight: true },
];

export const hrStats = [
  { label: "Total Employees", value: "45" },
  { label: "Present Today", value: "42" },
  { label: "Absent Today", value: "3" },
  { label: "Leave Requests", value: "5" },
  { label: "Top Performer", value: "Rahul K." },
  { label: "Productivity", value: "92%" },
  { label: "Salary Proc", value: "₹8.5L" },
  { label: "Incentives/Bonus", value: "₹1.2L" },
];

export const accountsStats = [
  { label: "Today's Coll", value: "₹4.5L", highlight: true },
  { label: "Month Coll", value: "₹48.5L" },
  { label: "Cash in Hand", value: "₹1.2L" },
  { label: "Bank Balance", value: "₹24.5L" },
  { label: "Expenses", value: "₹3.4L" },
  { label: "Gross Profit", value: "₹12.5L", highlight: true },
];

export const gstStats = [
  { label: "GST Collected", value: "₹8.4L" },
  { label: "GST Paid", value: "₹6.2L" },
  { label: "Pending GST", value: "₹2.2L", highlight: true },
  { label: "Status", value: "Filed" },
];

export const marketingStats = [
  { label: "WA Campaign", value: "12% Conv" },
  { label: "SMS Campaign", value: "4% Conv" },
  { label: "Email Campaign", value: "8% Conv" },
  { label: "Leads Generated", value: "450" },
  { label: "Campaign ROI", value: "310%", highlight: true },
];

export const loyaltyStats = [
  { label: "Loyalty Mbrs", value: "1,200" },
  { label: "Referrals", value: "45" },
  { label: "Points Issued", value: "45,000" },
  { label: "Coupons Used", value: "120" },
];

export const branchStats = [
  { label: "Total Branches", value: "4" },
  { label: "Branch 1 Rev", value: "₹45L" },
  { label: "Branch 2 Rev", value: "₹32L" },
  { label: "Top Branch", value: "South", highlight: true },
];

export const aiStats = [
  { label: "Conv. Predict", value: "22% (↑)" },
  { label: "Sales Forecast", value: "105 Units" },
  { label: "Demand Mdl", value: "Classic 350" },
  { label: "Risk Cust", value: "14" },
  { label: "Suggested Upsell", value: "Ext Warranty" },
];

