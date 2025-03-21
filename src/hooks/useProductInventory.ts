import { useEffect, useState } from 'react';
import { InventoryFetch, ProductsFetch } from '../services/api';
import { ApiResponse, InventoryItem, Product } from '../models/types';
import { processData } from '../utils/processData';

export const useProductInventory = () => {
    const [inventory, setInventory] = useState<InventoryItem[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [processedData, setProcessedData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const [inventoryRes, productsRes] = await Promise.all([
                    InventoryFetch(),
                    ProductsFetch()
                ]);

                setInventory((inventoryRes as ApiResponse<InventoryItem>).inventory || []);
                setProducts((productsRes as ApiResponse<Product>).products || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setProcessedData(processData(products, inventory));
    }, [products, inventory]);

    return { processedData, isLoading };
};
