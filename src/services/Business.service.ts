const API = "https://restnode-jsproject.onrender.com/"; // Replace with your actual API URL

export const BusinessService = {
    
    createBusiness: async (userId, businessData) => {
        try {
            const response = await fetch(`${API}/business/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, businessData }),
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error creating business:', error);
            throw error;
        }
    },

    getBusiness: async (businessId) => {
        try {
            const response = await fetch(`${API}/business/${businessId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error retrieving business:', error);
            throw error;
        }
    },

    updateBusiness: async (business) => {
        try {
            const response = await fetch(`${API}/business/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ business }),
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error updating business:', error);
            throw error;
        }
    },

    deleteBusiness: async (businessId) => {
        try {
            const response = await fetch(`${API}/business/${businessId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error deleting business:', error);
            throw error;
        }
    },

    getAllBusinesses: async () => {
        try {
            const response = await fetch(`${API}/business`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error retrieving all businesses:', error.status);
            throw error;
        }
    },
};
