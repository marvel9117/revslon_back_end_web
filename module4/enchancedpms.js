// : Enhanced product management system to handle potential errors
// (e.g., duplicate product IDs, invalid input) during CRUD operations



// Import required modules
const { MongoClient, ObjectId } = require('mongodb');
const Joi = require('joi');

// MongoDB connection URI
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

// Joi schema for product validation
const productSchema = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().min(0).required(),
    stock: Joi.number().integer().min(0).required(),
    description: Joi.string().optional(),
});

// Connect to the MongoDB database
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB!');
        return client.db('productManagement');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        throw error;
    }
}

// Add a product with Joi validation
async function addProduct(database, product) {
    try {
        // Validate the product data using Joi
        const validationResult = productSchema.validate(product);
        if (validationResult.error) {
            console.error('Validation Error:', validationResult.error.details);
            return;
        }

        const collection = database.collection('products');
        const result = await collection.insertOne(validationResult.value);
        console.log('Validated product added with ID:', result.insertedId);
    } catch (error) {
        console.error('Error adding product:', error.message);
    }
}

// View all products
async function viewProducts(database) {
    try {
        const collection = database.collection('products');
        const products = await collection.find({}).toArray();
        console.log('Products:', products);
    } catch (error) {
        console.error('Error viewing products:', error.message);
    }
}

// Update a product
async function updateProduct(database, productId, updateFields) {
    try {
        const collection = database.collection('products');
        const result = await collection.updateOne(
            { _id: new ObjectId(productId) },
            { $set: updateFields }
        );
        console.log('Matched documents:', result.matchedCount);
        console.log('Modified documents:', result.modifiedCount);
    } catch (error) {
        console.error('Error updating product:', error.message);
    }
}

// Delete a product
async function deleteProduct(database, productId) {
    try {
        const collection = database.collection('products');
        const result = await collection.deleteOne({ _id: new ObjectId(productId) });
        console.log('Deleted documents:', result.deletedCount);
    } catch (error) {
        console.error('Error deleting product:', error.message);
    }
}

// Search products by name
async function searchProducts(database, searchName) {
    try {
        const collection = database.collection('products');
        const products = await collection.find({ name: searchName }).toArray();
        console.log('Search results:', products);
    } catch (error) {
        console.error('Error searching for products:', error.message);
    }
}

// Main function to manage products
async function run() {
    try {
        const database = await connectToDatabase();

        // Add products with Joi validation
        console.log('Adding Products...');
        await addProduct(database, { name: 'Laptop', price: 1200, stock: 10, description: 'High-performance laptop' });
        await addProduct(database, { name: 'Keyboard', price: 100, stock: 50, description: 'Mechanical keyboard' });

        // View products
        console.log('\nViewing All Products:');
        await viewProducts(database);

        // Update a product
        console.log('\nUpdating Laptop...');
        await updateProduct(database, '<Laptop_ObjectId>', { price: 1100, stock: 8 });

        // Search for a product
        console.log('\nSearching for "Keyboard"...');
        await searchProducts(database, 'Keyboard');

        // Delete a product
        console.log('\nDeleting Keyboard...');
        await deleteProduct(database, '<Keyboard_ObjectId>');

        // View remaining products
        console.log('\nViewing Remaining Products:');
        await viewProducts(database);
    } catch (error) {
        console.error('An error occurred:', error.message);
    } finally {
        await client.close();
    }
}

// Run the program
run().catch(console.dir);

