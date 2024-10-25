function getWooCommerceData(dataType, apiKey, apiSecret, id) {
    const baseUrl = 'https://your-woocommerce-site.com'; // Replace with your store's URL
    const endpointMap = {
        'products': '/wp-json/wc/v3/products',
        'orders': '/wp-json/wc/v3/orders',
        'customers': '/wp-json/wc/v3/customers',
        'reports': '/wp-json/wc/v3/reports',
        // add all endpoints here
    };

    if (!endpointMap[dataType]) {
        throw new Error('Unsupported data type: ' + dataType);
    }

    let endpoint = endpointMap[dataType];
    if (id) endpoint += `/${id}`;

    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + Utilities.base64Encode(apiKey + ':' + apiSecret),
        },
        muteHttpExceptions: true,
    };

    const response = UrlFetchApp.fetch(baseUrl + endpoint, options);
    if (response.getResponseCode() === 200) {
        return JSON.parse(response.getContentText());
    } else {
        throw new Error(`API Error: ${response.getResponseCode()} ${response.getContentText()}`);
    }
}