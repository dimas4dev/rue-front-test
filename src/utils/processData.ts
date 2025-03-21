import { InventoryItem, Product } from '../models/types';

export function processData(products: Product[], inventory: InventoryItem[]) {
  if (!products.length || !inventory.length) return [];

  return products.map((product) => {
    const relatedInventory = inventory.filter(item => item.product_id === product.id);

    const totalQuantity = relatedInventory.reduce((sum, item) => sum + item.quantity, 0);
    const averageRating = relatedInventory.reduce((sum, item) => sum + item.rating, 0) / relatedInventory.length;
    const totalPrice = totalQuantity * product.price;

    return {
      id: product.id,
      name: product.product_name,
      description: product.description,
      price: product.price,
      totalQuantity,
      totalPrice: Number(totalPrice.toFixed(2)),
      averageRating: Number(averageRating.toFixed(2)),
    };
  });
}
