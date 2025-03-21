import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, CircularProgress } from '@mui/material';
import { useProductInventory } from '../hooks/useProductInventory';

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Product Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'totalQuantity', headerName: 'Total Quantity', width: 150 },
    { field: 'totalPrice', headerName: 'Total Price', width: 150 },
    { field: 'averageRating', headerName: 'Average Rating', width: 150 },
];

export const ProductTable = () => {
    const { processedData, isLoading } = useProductInventory();

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ height: 400, width: '100%', maxWidth: 900, mx: 'auto' }}>
            <DataGrid
                rows={processedData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                sx={{
                    fontFamily: 'Roboto, sans-serif',
                    '& .MuiDataGrid-cell': {
                        color: '#37393D',
                        fontWeight: 400,
                        fontFamily: 'Roboto, sans-serif',
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: '#F1FBFF !important',
                        fontFamily: 'Roboto, sans-serif',
                    },
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: '#F1FBFF !important',
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        color: '#63686D',
                        fontWeight: 600,
                        fontFamily: 'Roboto, sans-serif',
                    },
                    '& .MuiDataGrid-columnHeadersInner': {
                        backgroundColor: '#F1FBFF !important',
                    },
                }}
            />
        </Box>
    );
};
