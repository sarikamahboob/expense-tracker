import { type QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Link, Outlet } from "@tanstack/react-router";
import React from "react";
import { Toaster } from "sonner";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: Root,
});

function Navbar() {
  return (
    <>
      <div className="flex justify-between max-w-2xl m-auto items-baseline">
        <Link to="/">
          <h2 className="text-2xl font-bold">Expense Tracker</h2>
        </Link>        
        <div className="flex gap-2">
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
          <Link to="/expenses" className="[&.active]:font-bold">
            Expenses
          </Link>
          <Link to="/create-expense" className="[&.active]:font-bold">
            Create Expense
          </Link>
          <Link to="/profile" className="[&.active]:font-bold">
            Profile
          </Link>
        </div>
      </div>
    </>
  );
}

function Root() {
  return (
    <>
      <Navbar />
      <hr />
      <div className="p-2 flex gap-2 max-w-2xl m-auto">
        <Outlet />
      </div>
      <Toaster />
      {/* <TanStackRouterDevtools /> */}
    </>
  );
}
