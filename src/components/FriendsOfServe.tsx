"use client";

import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

// Simple monthly / one-time donation widget.
// Does not process payments directly; sends user to JustGiving.
export default function FriendsOfServe() {
  const monthlyPresets = [5, 10, 20];
  const oneTimePresets = [25, 50, 100];
  const [isMonthly, setIsMonthly] = useState(true);
  const [amount, setAmount] = useState<number | "">(monthlyPresets[1]);

  const presets = isMonthly ? monthlyPresets : oneTimePresets;

  const handlePreset = (value: number) => setAmount(value);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.trim();
    if (v === "") return setAmount("");
    const n = Number(v);
    if (!Number.isNaN(n) && n >= 0) setAmount(n);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
      <div className="flex items-center justify-between gap-3 mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Friends of SERVE</h3>
        <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
          <button
            type="button"
            onClick={() => setIsMonthly(false)}
            className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
              !isMonthly ? "bg-white shadow text-gray-900" : "text-gray-600"
            }`}
          >
            One-time
          </button>
          <button
            type="button"
            onClick={() => setIsMonthly(true)}
            className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
              isMonthly ? "bg-white shadow text-gray-900" : "text-gray-600"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {isMonthly && (
        <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2 mb-4">
          Monthly gifts provide reliable support. You can change or cancel anytime.
        </p>
      )}

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Choose an amount</label>
        <div className="flex flex-wrap gap-2 mb-3">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => handlePreset(p)}
              className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-colors ${
                amount === p
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-900 border-gray-300 hover:border-blue-400"
              }`}
            >
              £{p}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">£</span>
          <input
            inputMode="decimal"
            type="text"
            value={amount === "" ? "" : String(amount)}
            onChange={handleInput}
            className="w-32 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Other"
            aria-label="Donation amount"
          />
          <span className="text-gray-500 text-sm">{isMonthly ? "/ month" : "one-time"}</span>
        </div>
      </div>

      <a
        href="https://www.justgiving.com/charity/serve-jg"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors"
      >
        {isMonthly ? "Help Monthly" : "Help Now"}
      </a>

      <p className="mt-3 text-xs text-gray-500 text-center">
        You&apos;ll be taken to JustGiving to complete your secure donation.
      </p>
      <div className="mt-4 flex items-center justify-center text-blue-600 gap-2 text-sm">
        <HeartIcon className="w-4 h-4" />
        <span>Thank you for supporting local care.</span>
      </div>
    </div>
  );
}
