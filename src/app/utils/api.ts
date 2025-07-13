import { ProductObj } from "@/types";

export async function getProducts(): Promise<ProductObj[]> {
    try {
      const url = "https://dummyjson.com/products?limit=194";
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      return data?.products ?? [];
    } catch (error) {
      console.error('Failed to fetch products:', error);
      throw error;
    }
  }
  
  export async function searchProducts(q: string): Promise<ProductObj[]> {
    try {
      const url = `https://dummyjson.com/products/search?q=${encodeURIComponent(q)}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      return data?.products ?? [];
    } catch (error) {
      console.error(`Failed to search products with query "${q}":`, error);
      throw error;
    }
  }
  
  export async function getProductById(id: string): Promise<ProductObj> {
    try {
      const url = `https://dummyjson.com/products/${encodeURIComponent(id)}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      console.error(`Failed to fetch product with id "${id}":`, error);
      throw error;
    }
  }
  
  export async function getCategoryList(): Promise<string[]> {
    try {
      const url = "https://dummyjson.com/products/category-list";
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const categories: string[] = await res.json();
      return categories;
    } catch (error) {
      console.error('Failed to fetch category list:', error);
      throw error;
    }
  }
  
  export async function getProductsByCategory(category: string): Promise<ProductObj[]> {
    try {
      const url = `https://dummyjson.com/products/category/${encodeURIComponent(category)}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      return data?.products ?? [];
    } catch (error) {
      console.error(`Failed to fetch products for category "${category}":`, error);
      throw error;
    }
  }
  