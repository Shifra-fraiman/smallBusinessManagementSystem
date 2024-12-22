import { ServiceService } from '../Services.service';
import axios from 'axios';
const SERVER = "https://restnode-jsproject.onrender.com/"

describe('ServiceService', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    try {
        //POST
        test("postService should retriveve the new service", async () => { 
            const service = {
                name: "name of service",
                serviceData: {
                  "cost": "350"
                }
              };
              const response = await ServiceService.createService(service.name, service.serviceData);
              expect(response).toMatchObject(service)
        })

        //GET ALL
        test('getService should retrieve a service', async () => {
            const result = await ServiceService.getService();
            expect(Array.isArray(result)).toBe(true);
            result.forEach((item: any) => {
                expect(typeof item).toBe('object');
            });
        })

        //GET BY ID
        test("", async () => { })

        //PUT
        test("", async () => { })

        //DELETE
        test("", async () => { })

    } catch (error) {
        //log...

    }

});
