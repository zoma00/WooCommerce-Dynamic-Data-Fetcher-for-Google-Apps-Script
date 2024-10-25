/**
 * Fetch data from WooCommerce API based on data type.
 *
 * @param {string} dataType - The type of data to fetch.
 * @param {string} apiKey - WooCommerce API key.
 * @param {string} apiSecret - WooCommerce API secret.
 * @param {string} [id] - The ID of the resource (optional for some endpoints).
 * @returns {object} - The data fetched from WooCommerce.
 */
function getWooCommerceData(dataType, apiKey, apiSecret, id) {
    var baseUrl = 'https://your-woocommerce-site.com'; // Replace with your WooCommerce site URL
    const dynamicEndpoints = [
        'products', 
        'customers', 
        'orders', 
        'reports', 
        'coupons', 
        'order_notes', 
        'order_refunds', 
        'product_variations', 
        'product_attributes', 
        'product_attribute_terms', 
        'product_categories', 
        'product_shipping_classes', 
        'product_tags', 
        'product_reviews', 
        'refunds', 
        'tax_rates', 
        'tax_classes', 
        'webhooks', 
        'payment_gateways', 
        'shipping_zones', 
        'shipping_locations', 
        'shipping_methods', 
        'system_status', 
        'custom_fields'
    ];

    var endpointMap = {
        'products': '/wp-json/wc/v3/products',
        'customers': '/wp-json/wc/v3/customers',
        'orders': '/wp-json/wc/v3/orders',
        'reports': '/wp-json/wc/v3/reports',
        'coupons': '/wp-json/wc/v3/coupons',
        'order_notes': '/wp-json/wc/v3/orders/notes',
        'order_refunds': '/wp-json/wc/v3/orders/refunds',
        'product_variations': '/wp-json/wc/v3/products/variations',
        'product_attributes': '/wp-json/wc/v3/products/attributes',
        'product_attribute_terms': '/wp-json/wc/v3/products/attributes/{id}/terms',
        'product_categories': '/wp-json/wc/v3/products/categories',
        'product_shipping_classes': '/wp-json/wc/v3/products/shipping_classes',
        'product_tags': '/wp-json/wc/v3/products/tags',
        'product_reviews': '/wp-json/wc/v3/products/reviews',
        'refunds': '/wp-json/wc/v3/refunds',
        'tax_rates': '/wp-json/wc/v3/taxes',
        'tax_classes': '/wp-json/wc/v3/taxes/classes',
        'webhooks': '/wp-json/wc/v3/webhooks',
        'payment_gateways': '/wp-json/wc/v3/payment_gateways',
        'shipping_zones': '/wp-json/wc/v3/shipping/zones',
        'shipping_locations': '/wp-json/wc/v3/shipping/zones/{id}/locations',
        'shipping_methods': '/wp-json/wc/v3/shipping_methods',
        'system_status': '/wp-json/wc/v3/system_status',
        'custom_fields': '/wp-json/wc/v3/products/custom-fields/names'
    };

    var endpoint = endpointMap[dataType];
    if (!endpoint) {
        throw new Error('No endpoint defined for data type: ' + dataType);
    }

    var url = baseUrl + endpoint;

    if (dynamicEndpoints.includes(dataType)) {
        if (!id) {
            throw new Error('ID is required for dynamic endpoints.');
        }
        url = url.replace('{id}', id);
    }

    var options = {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + Utilities.base64Encode(apiKey + ':' + apiSecret)
        },
        muteHttpExceptions: true // To handle HTTP errors gracefully
    };

    var response = UrlFetchApp.fetch(url, options);
    var responseCode = response.getResponseCode();
    var content = response.getContentText();

    if (responseCode >= 200 && responseCode < 300) {
        return JSON.parse(content);
    } else {
        throw new Error('API request failed with response code ' + responseCode + ': ' + content);
    }
}

  const response = UrlFetchApp.fetch(baseUrl + endpoint, options);
    if (response.getResponseCode() === 200) {
        return JSON.parse(response.getContentText());
    } else {
        throw new Error(`API Error: ${response.getResponseCode()} ${response.getContentText()}`);
    }
}
