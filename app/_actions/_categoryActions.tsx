"use server";

import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { connectToDB } from "../_database/database";

let dbConnection: any;
let database: any;

const init = async () => {
  const connection = await connectToDB();
  dbConnection = connection;
  database = await dbConnection?.db("BNA");
};

// Seed Data
const categories = [
  {
    name: "Mokorotlo Mesh",
    icon: "https://collect.wetransfer.com/board/saaaqq486z23kifky20250111085748/st8oaw59zxrnqdpb820250111085854",
  },
  {
    name: "Ubuntu Pulse",
    icon: "https://collect.wetransfer.com/board/saaaqq486z23kifky20250111085748/sv10q9iajluf19lcp20250111085854",
  },
];

// Function to find duplicate category names
const findDuplicates = (array: { name: string }[]) => {
  const names = array.map(item => item.name);
  const nameCount: { [key: string]: number } = {};
  const duplicates: string[] = [];

  names.forEach(name => {
    nameCount[name] = (nameCount[name] || 0) + 1;
    if (nameCount[name] === 2) {
      duplicates.push(name); // Only add the name the first time it is found to be a duplicate
    }
  });

  return duplicates;
};

// Seed Categories Function
// Seed Categories Function
export const seedCategories = async () => {
  if (!dbConnection) await init();

  try {
    const collection = await database.collection("categories");

    if (!collection || !database) {
      return { error: "Failed to connect to the collection!!" };
    }

    // Check for existing categories in the database
    const existingCategories = await collection.find({}).toArray();
    const existingNames = new Set(existingCategories.map((cat: { name: any; }) => cat.name));

    let categoriesToInsert = categories.filter(category => !existingNames.has(category.name));

    if (categoriesToInsert.length === 0) {
      console.log("All categories already exist. Seeding terminated.");
      return { success: true, count: 0 }; // No new categories to insert
    }

    // Insert only new categories
    const result = await collection.insertMany(categoriesToInsert);
    console.log(`Seeded ${result.insertedCount} new categories successfully.`);
    return { success: true, count: result.insertedCount };
  } catch (error: any) {
    console.log("An error occurred seeding categories:", error.message);
    return { error: error.message };
  }
};

// Immediately seed categories
(async () => {
  await seedCategories();
})();

export const getAllCategories = async () => {
  if (!dbConnection) await init();

  try {
    const collection = await database?.collection("categories");

    if (!database || !collection) {
      console.log("Failed to connect to collection..");
      return;
    }

    const allCategories = await collection
      .find({})
      .map((category: any) => ({
        ...category,
        _id: category._id.toString(),
      }))
      .toArray();
    return allCategories;
  } catch (error: any) {
    console.log("An error occurred...", error.message);
    return { error: error.message };
  }
};

// Fetch a category by name
export const getCategoryByName = async (categoryName: string) => {
  if (!dbConnection) await init();

  try {
    const collection = await database?.collection("categories");

    if (!database || !collection) {
      console.log("Failed to connect to collection..");
      return;
    }

    const category = await collection
      .find({ name: categoryName })
      .map((category: any) => ({
        ...category,
        _id: category._id.toString(),
      }))
      .toArray();
    return category;
  } catch (error: any) {
    console.log("An error occurred...", error.message);
    return { error: error.message };
  }
};

// Delete a category by ID
export const deleteOneCategory = async (_id: string) => {
  if (!dbConnection) await init();

  try {
    const collection = await database?.collection("categories");

    if (!database || !collection) {
      console.log("Failed to connect to collection..");
      return;
    }

    const deleted = await collection.deleteOne({ _id: new ObjectId(_id) });
    revalidatePath("/dashboard/categories");
    return deleted;
  } catch (error: any) {
    console.log("An error occurred...", error.message);
    return { error: error.message };
  }
};

// Update a category's name by ID
export const updateCategory = async (_id: string, newName: string) => {
  if (!dbConnection) await init();

  try {
    const collection = await database?.collection("categories");

    if (!database || !collection) {
      console.log("Failed to connect to collection..");
      return;
    }

    const updated = await collection.updateOne(
      { _id: new ObjectId(_id) },
      { $set: { name: newName } }
    );
    revalidatePath("/dashboard/categories");
    return updated;
  } catch (error: any) {
    console.log("An error occurred...", error.message);
    return { error: error.message };
  }
};

export const saveNewCategory = async (formData: FormData) => {
  const data = {
    name: formData.get("categoryName"),
    icon: formData.get("iconURL"),
  };

  if (!dbConnection) await init();

  try {
    const collection = await database.collection("categories");

    if (!collection || !database) {
      return { error: "Failed to connect to collection!!" };
    }
    const newCategory = await collection.insertOne(data);
    revalidatePath("/dashboard/categories");
    return { categoryID: newCategory };
  } catch (error: any) {
    console.log("An error occurred saving new category:", error.message);
    return { error: error.message };
  }
};

// Immediately seed categories
(async () => {
  await seedCategories();
})();
