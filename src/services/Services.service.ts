const API = "https://restnode-jsproject.onrender.com/services"; // Replace with your actual services API URL

export const ServiceService = {
    
    createService: async (businessId: string, name: string, serviceData?: any) => {
        try {
            const response = await fetch(`${API}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ businessId, name, serviceData }),
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error creating service:', error);
            throw error;
        }
    },

    getService: async (serviceId: string) => {
        try {
            const response = await fetch(`${API}/${serviceId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error retrieving service:', error);
            throw error;
        }
    },

    updateService: async (id: string, businessId: string, name: string, serviceData?: any) => {
        try {
            const response = await fetch(`${API}/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ businessId, name, serviceData }),
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error updating service:', error);
            throw error;
        }
    },

    deleteService: async (serviceId: string) => {
        try {
            const response = await fetch(`${API}/delete/${serviceId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error deleting service:', error);
            throw error;
        }
    },

    getAllServices: async () => {
        try {
            const response = await fetch(`${API}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error retrieving all services:', error);
            throw error;
        }
    },
};
