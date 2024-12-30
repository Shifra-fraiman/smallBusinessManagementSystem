const API = "https://restnode-jsproject.onrender.com/Service"; // Replace with your actual services API URL
import { logger, errorLogger, testsLogger } from '../../log4jsConfig';
import Service from '../models/Service.model';

export const ServiceService = {

    createService: async (service:Service) => {
        try {
            const response = await fetch(`${API}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(service),
            });
            const result = await response.json();
            logger.info(`Service created: ${service.name}, Response: ${response.status}`);
            return result;
        } catch (error) {
            errorLogger.error('Error creating service:', error);
            throw error;
        }
    },

    getService: async (serviceId: string) => {
        try {
            const response = await fetch(`${API}/serviceId`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            logger.info(`Service retrieved, Response: ${response.status}`);
            return result;
        } catch (error) {
            errorLogger.error('Error retrieving service:', error);
            throw error;
        }
    },

    // updateService: async (id: string, businessId: string, name: string, serviceData?: any) => {
    updateService: async (service: Service) => {
        if(!service._id)
            throw new Error("There is'nt Id\n"+JSON.stringify(service));
        try {
            const response = await fetch(`${API}/${service._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(service),
            });
            
            const result = await response.json();
            logger.info(`Service updated: ${service.name}, ID: ${service._id}, Response: ${response.status}`);
            return result;
        } catch (error) {
            errorLogger.error('Error updating service:', error);
            // throw error;
        }
    },

    deleteService: async (serviceId: string) => {
        try {
            const response = await fetch(`${API}/${serviceId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            await logger.info(`Service deleted, ID: ${serviceId}, Response: ${response.status}`);
            return result;
        } catch (error) {
            errorLogger.error('Error deleting service:', error);
            // throw error;
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
            logger.info(`All services retrieved, Response: ${response.status}`);
            return result;
        } catch (error) {
            errorLogger.error('Error retrieving all services:', error);
            // throw error;
        }
    },
};
