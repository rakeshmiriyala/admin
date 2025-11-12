import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const paymentsData = [
  { id: 1, business: "BoxCricket", amount: "₹3,500", date: "2025-01-15" },
  { id: 2, business: "GoKarting", amount: "₹4,200", date: "2025-02-10" },
  { id: 3, business: "Swimming", amount: "₹2,800", date: "2025-03-05" },
  { id: 4, business: "FootBall", amount: "₹3,900", date: "2025-03-20" },
];

const monthlyPayments = [
  { month: "Jan", BoxCricket: 3500, GoKarting: 4200, Swimming: 2800, FootBall: 3900 },
  { month: "Feb", BoxCricket: 4200, GoKarting: 3100, Swimming: 2900, FootBall: 3700 },
  { month: "Mar", BoxCricket: 3900, GoKarting: 4400, Swimming: 3200, FootBall: 4100 },
];

const Payments = () => {
  return (
    <div className="ml-auto w-3/4 p-6 flex flex-col pl-64">
      <h1 className="text-3xl font-bold mb-6">Payments</h1>

      {/* Business Payments Section */}
      <div className="bg-white p-6  w-full mb-6">
        <h2 className="text-2xl font-semibold mb-4">Business Payments</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Business</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {paymentsData.map((payment) => (
              <tr key={payment.id} className="text-center">
                <td className="border p-2">{payment.business}</td>
                <td className="border p-2">{payment.amount}</td>
                <td className="border p-2">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Monthly Payment Graph */}
      <div className="bg-white p-6  w-full">
        <h2 className="text-2xl font-semibold mb-4">Monthly Payment Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyPayments} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="BoxCricket" fill="#8884d8" name="XYZ Interiors" />
            <Bar dataKey="GoKarting" fill="#82ca9d" name="ABC Solutions" />
            <Bar dataKey="Swimming" fill="#ffc658" name="Modern Designs" />
            <Bar dataKey="FootBall" fill="#ff8042" name="Eco Builders" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Payments;
