import React from "react";

export const Wallet = () => {
  const wallet = {
    _id: "412342354123",
    balance: 5,
    currency: "USD",
  };

  return (
    <div class="flex font-sans shadow-md my-10">
      <form class="flex-auto p-6">
        <div class="flex flex-wrap">
          <div class="w-full flex-none text-sm font-medium text-slate-500">
            Main account
          </div>
          <div class="w-full flex-none text-sm font-medium text-slate-500 mt-2">
            Wallet ID:
          </div>
          <h1 class="flex-auto text-lg font-semibold text-slate-900">
            {wallet._id}
          </h1>
          <div class="text-xl font-bold text-slate-500">{`${wallet.balance} ${wallet.currency}`}</div>
        </div>
        <div class="flex space-x-4 text-sm font-medium">
          <div class="flex-auto flex space-x-4 mt-4">
            <button
              type="button"
              className="block w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Contact
            </button>
            <button
              type="button"
              className="block w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Transfer money
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
