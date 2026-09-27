import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 1499,
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 2499,
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
  },
  {
    id: 3,
    name: "Travel Backpack",
    category: "Accessories",
    price: 999,
    image:
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg",
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Fashion",
    price: 1999,
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
  },
  {
    id: 5,
    name: "Laptop",
    category: "Electronics",
    price: 54999,
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  },
  {
    id: 6,
    name: "Sunglasses",
    category: "Fashion",
    price: 799,
    image:
      "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg",
  },
];

function ProductList({ onAdd }) {
  return (
    <section className="product-section">
      <h2>Our Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;