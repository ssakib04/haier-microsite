import React from "react";


export function PhoneNumberComponent() {
  return (
    <div className="phone-number-component">
      <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <input
        type="tel"
        id="phone-number"
        name="phone-number"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="+1 (555) 123-4567"
      />
    </div>
  );
}