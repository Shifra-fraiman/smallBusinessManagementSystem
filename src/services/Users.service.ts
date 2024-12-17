const API = "https://restnode-jsproject.onrender.com/services"; // Replace with your actual services API URL

export const ServiceService = {
    
    /**
     * Create a new service.
     * @param businessId - The ID of the business.
     * @param name - The name of the service.
     * @param serviceData - Optional additional data for the service.
     * @returns The created service data.
     */
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

    /**
     * Retrieve a specific service by ID.
     * @param serviceId - The ID of the service to retrieve.
     * @returns The service data.
     */
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

    /**
     * Update an existing service.
     * @param id - The ID of the service to update.
     * @param businessId - The business ID associated with the service.
     * @param name - The updated name of the service.
     * @param serviceData - Optional additional data for the service.
     * @returns The updated service data.
     */
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

    /**
     * Delete a service by ID.
     * @param serviceId - The ID of the service to delete.
     * @returns The result of the deletion operation.
     */
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

    /**
     * Retrieve all services.
     * @returns An array of all services.
     */
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
