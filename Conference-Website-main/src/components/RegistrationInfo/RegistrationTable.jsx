/* eslint-disable no-unused-vars */
import React from "react";

const RegistrationTable = () => {
  return (
    <div
      className="registration-info max-w-6xl mx-auto p-6 bg-white heading shadow-lg rounded-lg"
    >
      <h2 className="text-center text-2xl font-bold mb-6">
        Registration Information
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">National</th>
              <th className="px-4 py-2">International</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">
                IEEE Members - Student / Research Scholar
              </td>
              <td className="border px-4 py-2">6,500 INR</td>
              <td className="border px-4 py-2">350 USD</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Non Members - Student / Research Scholar
              </td>
              <td className="border px-4 py-2">7,500 INR</td>
              <td className="border px-4 py-2">450 USD</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">IEEE Members - Academician</td>
              <td className="border px-4 py-2">7,500 INR</td>
              <td className="border px-4 py-2">450 USD</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Non Members - Academician</td>
              <td className="border px-4 py-2">8,500 INR</td>
              <td className="border px-4 py-2">550 USD</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">IEEE Members - Industry</td>
              <td className="border px-4 py-2">8,500 INR</td>
              <td className="border px-4 py-2">450 USD</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Non Members - Industry</td>
              <td className="border px-4 py-2">9,500 INR</td>
              <td className="border px-4 py-2">550 USD</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">
                Attendee - Student / Research Scholar
              </td>
              <td className="border px-4 py-2">1,000 INR</td>
              <td className="border px-4 py-2">120 USD</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Attendee - Academician</td>
              <td className="border px-4 py-2">1,500 INR</td>
              <td className="border px-4 py-2">150 USD</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Attendee - Industry</td>
              <td className="border px-4 py-2">1,500 INR</td>
              <td className="border px-4 py-2">150 USD</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationTable;
