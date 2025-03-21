import Inventory from '../database/inventory.json';
import Products from '../database/products.json';

export const InventoryFetch = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(Inventory);
    }, 1500);
});

export const ProductsFetch = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(Products);
    }, 1500);
});

