// src/services/__tests__/ServiceService.test.ts
import { ServiceService } from '../Services.service';
declare var global: any;

global.fetch = jest.fn();

describe('ServiceService', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('createService should create a new service', async () => {
        const mockResponse = { id: '1', name: 'Test Service' };
        (fetch as jest.Mock).mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        const result = await ServiceService.createService('businessId', 'Test Service');
        expect(fetch).toHaveBeenCalledWith('https://restnode-jsproject.onrender.com/services/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ businessId: 'businessId', name: 'Test Service', serviceData: undefined }),
        });
        expect(result).toEqual(mockResponse);
    });

    test('getService should retrieve a service by ID', async () => {
        const mockResponse = { id: '1', name: 'Test Service' };
        (fetch as jest.Mock).mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        const result = await ServiceService.getService('1');
        expect(fetch).toHaveBeenCalledWith('https://restnode-jsproject.onrender.com/services/1', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        expect(result).toEqual(mockResponse);
    });

    test('updateService should update an existing service', async () => {
        const mockResponse = { id: '1', name: 'Updated Service' };
        (fetch as jest.Mock).mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        const result = await ServiceService.updateService('1', 'businessId', 'Updated Service');
        expect(fetch).toHaveBeenCalledWith('https://restnode-jsproject.onrender.com/services/update/1', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ businessId: 'businessId', name: 'Updated Service', serviceData: undefined }),
        });
        expect(result).toEqual(mockResponse);
    });

    test('deleteService should delete a service by ID', async () => {
        const mockResponse = { success: true };
        (fetch as jest.Mock).mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        const result = await ServiceService.deleteService('1');
        expect(fetch).toHaveBeenCalledWith('https://restnode-jsproject.onrender.com/services/delete/1', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
        expect(result).toEqual(mockResponse);
    });

    test('getAllServices should retrieve all services', async () => {
        const mockResponse = [{ id: '1', name: 'Test Service' }];
        (fetch as jest.Mock).mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        const result = await ServiceService.getAllServices();
        expect(fetch).toHaveBeenCalledWith('https://restnode-jsproject.onrender.com/services', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        expect(result).toEqual(mockResponse);
    });
});
