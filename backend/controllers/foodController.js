import prisma from "../config/db.js";

// Add food item
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }

    const { name, description, price, category } = req.body;
    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber)) {
      return res.status(400).json({ success: false, message: "Price must be a number" });
    }

    await prisma.food.create({
      data: {
        name,
        description,
        price: priceNumber,
        category,
        image: req.file.filename,
      },
    });

    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.error("Error adding food:", error);
    res.status(500).json({ success: false, message: "Error adding food" });
  }
};

export { addFood };
