function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h3>{product.name}</h3>

      <p className="product-category">{product.category}</p>

      <p className="product-price">₹{product.price}</p>

      <button onClick={() => onAdd(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;