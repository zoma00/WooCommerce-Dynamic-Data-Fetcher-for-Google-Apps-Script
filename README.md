** WooCommerce Dynamic Data Fetcher for Google Apps Script **

A Google Apps Script function, `getWooCommerceData`, is designed to fetch data from WooCommerce’s REST API V3 dynamically. This function supports multiple WooCommerce API endpoints (products, orders, customers, etc.), providing users with a flexible solution for data-driven applications in Google Apps Script.

## Features

- **Multi-endpoint Support**: Retrieve different WooCommerce data types, such as `products`, `orders`, and `customers`.
- **Flexible Integration**: Dynamic endpoint mapping based on `dataType` and optional `id` for granular data access.
- **Easy Authentication**: Uses WooCommerce API key and secret.
- **Error Handling**: Detailed error messages facilitate troubleshooting.

## Project Structure

- **`src/getWooCommerceData.js`**: Core function file, containing the `getWooCommerceData` function.
- **`examples/basic example.gs`**: Basic usage example for integrating with Google Apps Script.
- **`examples/advancedExample.gs`**: Advanced example showcasing pagination, filtering, and optional parameters.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/WooCommerce-Dynamic-Data-Fetcher-for-Google-Apps-Script.git
Add Code to Google Apps Script:
Copy the code from src/getWooCommerceData.js and paste it into your Google Apps Script project.
Replace the placeholder WooCommerce URL in the code with your WooCommerce store’s URL.
Usage Example
To get started, refer to basicexample.gs for a minimal setup. For more advanced options like pagination and filtering, refer to advancedExample.gs.

javascript
Copy code
// Example usage in Google Apps Script
const products = getWooCommerceData('products', 'your_api_key', 'your_api_secret');
console.log(products);
Function Documentation
getWooCommerceData(dataType, apiKey, apiSecret, id)
Fetches WooCommerce data dynamically based on dataType.

Parameters:

dataType (string): Specifies the WooCommerce data type to retrieve (e.g., products, orders).
apiKey (string): Your WooCommerce API key.
apiSecret (string): Your WooCommerce API secret.
id (string, optional): ID for specific resources (e.g., a single product).
Returns: JSON object containing requested WooCommerce data.

Throws: Errors for unsupported data types, missing IDs, or failed API requests.

Architecture and Approach
The getWooCommerceData function is designed with scalability and flexibility, allowing users to specify different WooCommerce API parameters. Here’s a breakdown of the architectural approach:

1.** Endpoint Mapping **:

- The `endpointMap` dictionary maps `dataType` inputs to corresponding WooCommerce API endpoints.
   - This design allows easy expansion as WooCommerce’s API evolves; new endpoints can be added without altering the function structure.

2. **Dynamic Data Handling**:
3. 
   - The `dataType` and optional parameters (e.g., `id`) allow the function to construct API URLs dynamically.
   - This avoids hardcoding endpoints, making the function adaptable and reusable for various data requests.

4. Error Handling:

Provides detailed error messages for unsupported data types or failed API responses.
Simplifies troubleshooting by specifying HTTP response codes and message details.
Testing
You can test the function by running the basic example script or trying different data types (e.g., products, customers) and checking the JSON response.

License
This project is licensed under the MIT License. See LICENSE for details.

