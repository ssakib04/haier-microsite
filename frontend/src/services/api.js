const API_URL = "http://localhost:5001/api"; // Direct fetch for testing

export async function getProducts() {
  try {
    const res = await fetch(`${API_URL}/products`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}