// columns.tsx

import { ColumnDef } from "@tanstack/react-table";

export type Order = {
  handleChangeStatus(order: Order): void;
  handleViewDetails(order: Order): void;
  _id: string;
  shippingDetails: { name: string; email: string };
  orderStatus: string;
  cartSummary: { totalAmount: number };
  options: "update" | "delete";
};

export const columns: ColumnDef<Order>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "orderStatus", header: "Status" },
  { accessorKey: "totalAmount", header: "Total Amount" },
  {
    accessorKey: "options",
    header: "Options",
    cell: ({ row }) => {
      const order = row.original;
      return (
        <div className="flex gap-2 items-center">
          <button className="btn" onClick={() => order.handleChangeStatus(order)}>
            Change Status
          </button>
          <button className="btn" onClick={() => order.handleViewDetails(order)}>
            View Details
          </button>
        </div>
      );
    },
  },
];
