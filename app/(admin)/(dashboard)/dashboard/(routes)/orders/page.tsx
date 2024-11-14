"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { getAllOrders } from "@/app/_actions/_orderActions";
import { OrdersTable } from "@/components/orders/OrdersTable/OrderTable";
import { columns, Order } from "@/components/orders/OrdersTable/columns";
import { useEffect, useState } from "react";
import ChangeStatusPopup from "@/components/orders/ChangeStatus/ChangeOrderStatus";
import OrderDetailsPopup from "@/components/orders/OrderDetailsPopup";

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [popupOrder, setPopupOrder] = useState<Order | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await getAllOrders();
      if (response.success) {
        const mappedOrders = response.orders.map((order: Order) => ({
          ...order,
        }));
        setOrders(mappedOrders);
      } else {
        // handle error
      }
    };

    fetchOrders();
  }, []);

  const handleClose = () => {
    setIsPopupOpen(false);
    setPopupOrder(null);
  };

  const handleSave = (newStatus: string) => {
    if (popupOrder) {
      popupOrder.orderStatus = newStatus;
      setIsPopupOpen(false);
      setPopupOrder(null);
    }
  };

  const handleChangeStatus = (order: Order) => {
    setPopupOrder(order);
    setIsPopupOpen(true);
  };

  const handleViewDetails = (order: Order) => {
    setPopupOrder(order);
    setIsPopupOpen(true);
  };

  return (
    <section className="mx-1">
      <h1 className="mb-3 md:text-3xl font-bold">Orders</h1>
      <OrdersTable
        columns={columns}
        data={orders}
      />
      {popupOrder && (
        <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
          <DialogContent>
            {popupOrder ? (
              <ChangeStatusPopup
                orderId={popupOrder._id}
                currentStatus={popupOrder.orderStatus}
                onClose={handleClose}
                onSave={handleSave}
              />
            ) : (
              <OrderDetailsPopup
                orderDetails={popupOrder}
                onClose={handleClose}
              />
            )}
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default OrdersPage;
