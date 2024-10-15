# Inventory Management System

This project is an **Inventory Management System** backend built using **Node.js**, **Express.js**, and **MongoDB**. The system allows you to manage inventory data, perform bulk data operations using CSV files, manage suppliers, and track low stock alerts.

## Features

1. **Inventory Management API**:
   - Implements CRUD (Create, Read, Update, Delete) operations for managing inventory items.
   - Supplier management, linking inventory items to suppliers.

2. **Bulk Export/Import**:
   - Export inventory data to CSV.
   - Import inventory data from CSV for bulk updates.

3. **Low Stock Alerts**:
   - Notifies when an item’s stock falls below a specified threshold.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing inventory and supplier data.
- **Mongoose**: ODM for MongoDB to manage database operations.
- **Multer**: Middleware for handling `multipart/form-data` for file uploads (CSV).
- **csv-parser**: For parsing CSV files.

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/inventory-management-system.git
   cd inventory-management-system
 2. Install dependencies:

   npm install

    3. Create a .env file in the root directory and add the following:
  
    MONGO_URI = Your MongoDB Connection String
    
    PORT=3000

4. Create an uploads folder in the root directory to store uploaded CSV files temporarily:
   
   mkdir uploads
   
6. Start the server:
   
   npm start


<h3>API Endpoints</h3>
<h4>Inventory Management</h4>
<ul>
  <li><strong>GET /inventory</strong>: Get all inventory items.</li><li><strong>GET /inventory/<div></div></strong>: Get a specific inventory item by ID.</li>
  <li><strong>POST /inventory</strong>: Create a new inventory item.</li>
  <li><strong>PUT /inventory/<div></div></strong>: Update an existing inventory item by ID.</li>
  <li><strong>DELETE /inventory/<div></div></strong>: Delete an inventory item by ID.</li>
</ul>

![add-My-Workspace](https://github.com/user-attachments/assets/04d6fbc2-b2e3-4e55-b2d2-ae4abffa55ea)

![get-My-Workspace (1)](https://github.com/user-attachments/assets/c93db137-30ed-4abc-918f-0e03a4b87af3)

![update-My-Workspace (2)](https://github.com/user-attachments/assets/8753c757-f41f-4ba3-a680-b9a3061bb726)

![delete-My-Workspace (2)](https://github.com/user-attachments/assets/f3464bf8-371b-4972-b7a7-9ff3f097be1a)





<h4>Supplier Management</h4>
<ul>
  <li><strong>GET /suppliers</strong>: Get all suppliers.</li>
  <li><strong>POST /suppliers</strong>: Add a new supplier.</li>
</ul>

![New-Request-My-Workspace (1)](https://github.com/user-attachments/assets/97b0ee39-f156-4784-a6a4-83055ff52f09)

![New-Request-My-Workspace (2)](https://github.com/user-attachments/assets/8edb11f3-b9bc-49d4-ad73-83e1311959a3)


<h4>Bulk CSV Operations</h4>
<ul>
  <li><strong>POST /inventory/import-csv</strong>: Upload a CSV file to import inventory data in bulk.<ul><li>Use the form field named <code>file</code> to upload the CSV.</li>
  </ul></li><li><strong>GET /inventory/export-csv</strong>: Export all inventory data to a CSV file.</li>
</ul>

![get-My-Workspace (2)](https://github.com/user-attachments/assets/4416d8fe-1cc0-4edf-8942-2fc6d3b56d74)

![export-My-Workspace](https://github.com/user-attachments/assets/7cc5ada0-f1f2-436f-9bf3-f32f7cde34f7)





### Breakdown of Sections:

1. **Project Title & Description**: A brief overview of what the project is and its functionality.
2. **Features**: Highlights the key functionalities of the inventory management system.
3. **Technologies Used**: Lists the major technologies used in the project.
4. **Setup Instructions**: Step-by-step guide to setting up the project locally, including cloning, installing dependencies, and configuring environment variables.
5. **API Endpoints**: Details of the various API routes available for inventory and supplier management.
6. **CSV Import Format**: Explains the expected structure of the CSV files for importing inventory data.
7. **Development**: Instructions for using tools like `nodemon` during development.
8. **Contributing**: Guidelines for contributing to the project.
9. **License**: Information about the project's licensing.

You can modify this `README.md` file according to your preferences or add more details as needed. Let me know if you need further customizations!

