// product management system that allows adding, viewing, updating,
//       and deleting product information in a MongoDB database. 
//       Include features for searching products




// Import MongoDB Client
const { MongoClient, ObjectId } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://127.0.0.1:27017';

// Create a new MongoClient instance
const client = new MongoClient(uri);

// Connect to the database
async function connectToDatabase() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected to MongoDB!');
        return client.db('productManagement');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        throw error;
    }
}

// Add a product to the database
async function addProduct(database, name, price, description, stock) {
    const collection = database.collection('products');
    const result = await collection.insertOne({ name, price, description, stock });
    console.log('Product added with ID:', result.insertedId);
}

// View all products in the database
async function viewProducts(database) {
    const collection = database.collection('products');
    const products = await collection.find({}).toArray();
    console.log('Products:', products);
}

// Update a product in the database
async function updateProduct(database, productId, updateFields) {
    const collection = database.collection('products');
    const result = await collection.updateOne(
        { _id: new ObjectId(productId) },
        { $set: updateFields }
    );
    console.log('Matched documents:', result.matchedCount);
    console.log('Modified documents:', result.modifiedCount);
}

// Delete a product from the database
async function deleteProduct(database, productId) {
    const collection = database.collection('products');
    const result = await collection.deleteOne({ _id: new ObjectId(productId) });
    console.log('Deleted documents:', result.deletedCount);
}

// Search for products by name in the database
async function searchProducts(database, searchName) {
    const collection = database.collection('products');
    const products = await collection.find({ name: searchName }).toArray();
    console.log('Search results:', products);
}


// Main function to run the Product Management System
async function run() {
    try {
        // Connect to the database
        const database = await connectToDatabase();

        // 1. Add Products
        console.log('Adding Products...');
        await addProduct(database, 'Peak Milk', 500, 'Rich and creamy powdered milk', 50);
        await addProduct(database, 'Indomie Noodles', 100, 'Instant noodles with delicious flavors', 200);
        await addProduct(database, 'Gala Sausage Roll', 50, 'Tasty snack for commuters', 300);
        await addProduct(database, 'Dangote Cement', 3500, 'High-quality cement for construction', 100);

        // 2. View All Products
        console.log('\nAll Products:');
        await viewProducts(database);

        // 3. Update a Product
        console.log('\nUpdating Peak Milk...');
        await updateProduct(database, '<PeakMilk_ObjectId>', { price: 550, stock: 60 });

        // 4. Search for Products
        console.log('\nSearching for "Indomie Noodles"...');
        await searchProducts(database, 'Indomie Noodles');

        // 5. Delete a Product
        console.log('\nDeleting Gala Sausage Roll...');
        await deleteProduct(database, '<GalaSausageRoll_ObjectId>');

        // 6. View Remaining Products
        console.log('\nRemaining Products:');
        await viewProducts(database);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close(); 
    }
}


// Run the application
run().catch(console.dir);

