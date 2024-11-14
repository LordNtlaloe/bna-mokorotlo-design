"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { updateOrderStatus } from "@/app/_actions/_orderActions";

interface ChangeStatusPopupProps {
  orderId: string;
  currentStatus: string;
  onClose: () => void;
  onSave: (newStatus: string) => void;
}

const ChangeStatusPopup: React.FC<ChangeStatusPopupProps> = ({ orderId, currentStatus, onClose, onSave }) => {
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
  };

  const handleSave = async () => {
    setIsUpdating(true);
    try {
      const response = await updateOrderStatus(orderId, selectedStatus);
      if (response?.success) {
        onSave(selectedStatus);
        Swal.fire({
          icon: "success",
          title: "Status Updated",
          text: `Order status has been changed to ${selectedStatus}`,
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: response?.error || "Failed to update the order status.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "An Error Occurred",
        text: "Unable to update the order status.",
      });
      console.error("An error occurred:", error);
    } finally {
      setIsUpdating(false);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 w-80">
        <h3 className="text-lg font-semibold">Change Order Status</h3>
        <p>Order ID: {orderId}</p>
        <p>Current Status: <span className="font-semibold">{currentStatus}</span></p>
        <select
          value={selectedStatus}
          onChange={handleStatusChange}
          className="border p-2 rounded-md w-full"
        >
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
          <button
            onClick={handleSave}
            className={`px-4 py-2 ${isUpdating ? 'bg-gray-400' : 'bg-blue-500 text-white'} rounded-md`}
            disabled={isUpdating}
          >
            {isUpdating ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeStatusPopup;
