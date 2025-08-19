import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Haier Campaign</h1>
      {products.length === 0 && !error ? (
        <p className="text-center">No products found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {products.map(p => (
            <div key={p.id} className="border rounded-lg p-4 shadow">
              <h2 className="font-semibold">{p.name}</h2>
              <p>Price: {p.price} BDT</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}