"use server"
import { ObjectId } from "mongodb"
import { connectToDB } from "../_database/database";
import { sendMail } from "../_email/mail";

let dbConnection: any;
let database: any;

const init = async () => {
    const connection = await connectToDB();
    dbConnection = connection;
    database = await dbConnection?.db("pawreedy");
};

// Function to save an order
export const saveOrder = async (orderData: any) => {
    if (!dbConnection) await init();

    try {
        const ordersCollection = database?.collection("orders");
        const usersCollection = database?.collection("users");

        if (!ordersCollection) {
            throw new Error("Failed to get orders collection");
        }

        // Check if user exists if userEmail is provided
        let user = null;
        if (orderData.userEmail) {
            if (!usersCollection) {
                throw new Error("Failed to get users collection");
            }
            user = await usersCollection.findOne({ "email": orderData.userEmail });
            if (!user) {
                throw new Error("User not found");
            }
        }

        // Save the order details with default "Pending" status
        const result = await ordersCollection.insertOne({
            ...orderData,
            orderStatus: "Pending", // Default status
            createdAt: new Date(),
            updatedAt: new Date(),
            userEmail: orderData.userEmail || null,
        });

        if (!result.insertedId) {
            throw new Error("Failed to save order");
        }

        return { success: true, orderId: result.insertedId };
    } catch (error: any) {
        console.error("Error saving order:", error.message);
        return { error: error.message };
    }
};

// Function to get orders by user email
export const getOrdersByUserEmail = async (userEmail: string) => {
    if (!dbConnection) await init();

    try {
        const ordersCollection = database?.collection("orders");

        if (!ordersCollection) {
            throw new Error("Failed to get orders collection");
        }

        const orders = await ordersCollection
            .find({ userEmail })
            .project({
                _id: 1,
                "shippingDetails.name": 1,
                "shippingDetails.email": 1,
                "shippingDetails.address": 1,
                "shippingDetails.city": 1,
                "shippingDetails.country": 1,
                "shippingDetails.postalCode": 1,
                "cartSummary.totalAmount": 1,
                items: 1,  // Include items array
            })
            .toArray();

        return { success: true, orders };
    } catch (error: any) {
        console.error("Error fetching orders by user email:", error.message);
        return { error: error.message };
    }
};

export const getUserEmailsByProductId = async (productId: string) => {
    if (!dbConnection) await init();

    try {
        const ordersCollection = database?.collection("orders");

        if (!ordersCollection) {
            throw new Error("Failed to get orders collection");
        }

        // Fetch orders with the given productId and extract user emails
        const orders = await ordersCollection.find({ productId }, { projection: { userEmail: 1 } }).toArray();
        const userEmails = orders.map((order: { userEmail: any; }) => order.userEmail).filter((email: null) => email !== null);

        return userEmails;
    } catch (error: any) {
        console.error("Error fetching user emails by product ID:", error.message);
        return { error: error.message };
    }
};

export const getAllOrders = async () => {
    if (!dbConnection) await init();

    try {
        const ordersCollection = database?.collection("orders");

        if (!ordersCollection) {
            throw new Error("Failed to get orders collection");
        }

        // Fetch orders with necessary fields
        const orders = await ordersCollection
            .find({})
            .project({
                _id: 1,
                "shippingDetails.name": 1,
                "shippingDetails.email": 1,
                "shippingDetails.address": 1,
                "shippingDetails.city": 1,
                "shippingDetails.country": 1,
                "shippingDetails.postalCode": 1,
                "cartSummary": 1,  
                items: 1,
                orderStatus: 1,
            })
            .toArray();

        // Log orders to inspect data before returning
        console.log(orders);  // Debugging: Inspect the structure of orders

        const serializedOrders = orders.map((order: { _id: { toString: () => any; }; }) => ({
            ...order,
            _id: order._id.toString(), // Convert ObjectId to string
        }));

        return { success: true, orders: serializedOrders };
    } catch (error: any) {
        console.error("Error fetching orders:", error.message);
        return { error: error.message };
    }
};

export const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
        const collection = await database?.collection("orders");

        if (!database || !collection) {
            console.log("Failed to connect to collection..");
            return;
        }
        const result = await collection.updateOne(
            { _id: new ObjectId(orderId) },
            { $set: { orderStatus: newStatus, updatedAt: new Date() } }
        );

        if (result.modifiedCount === 0) {
            throw new Error("Failed to update order status");
        }

        return { success: true };
    } catch (error: any) {
        console.error("Error updating order status:", error.message);
        return { error: error.message };
    }
};
