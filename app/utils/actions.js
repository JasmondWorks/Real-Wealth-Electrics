export async function fetchProducts() {
    // Fetch products from an API or database
    const res = await fetch('https://example.com/api/products');
    const products = await res.json();
    return products;
  }