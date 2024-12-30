import { logger, testsLogger } from '../../../log4jsConfig';
import Service from '../../models/Service.model';
import { ServiceService } from '../Services.service';
import axios from 'axios';
const SERVER = "https://restnode-jsproject.onrender.com/"

describe('ServiceService', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    testsLogger.info("\n________________________\n\nNew Test Begin\n~~~~~~~~~~~~~~~~~~~~~\n")

    try {
        const service :Service= {
            businessId: "66e01df4ff3e2928d0c22858",
            name: "העסק הראשון שלי",
            serviceData: {
                cost: "350"
            }
        };
        let _id = ""

        //POST
        test("postService should retriveve the new service", async () => {
            testsLogger.info(`postService Test`);
            const response = await ServiceService.createService(service);
            testsLogger.info(`postService Test Success.\n Response: ${JSON.stringify(response)}`);
            testsLogger.info("_______POST________\n"+JSON.stringify(response));
            _id = response._id;
            expect(response).toEqual(expect.objectContaining({
                // __v:expect.any(Number),
                // _id: expect.any(String),
                businessId: service.businessId,
                name: service.name,
                serviceData: service.serviceData
            }));
            
        })

        //GET ALL
        // test('getService should retrieve a service', async () => {
        //     const result = await ServiceService.getAllServices();
        //     expect(Array.isArray(result)).toBe(true);
        //     result.forEach((item: any) => {
        //         expect(typeof item).toBe('object');
        //     });
        // })

        //GET BY ID
        // test("getService by id should retrieve a service", async () => {
        //     const result = await ServiceService.getAllServices();
        //     expect(Array.isArray(result)).toBe(false);
        // })

        //GET
        test('getService should retrieve a service', async () => {
            testsLogger.info(`getService Test`);
            const result = await ServiceService.getAllServices();
            expect(Array.isArray(result)).toBe(true);
            testsLogger.info(`getService Test\n Response: ${JSON.stringify(result)}`);
            result.forEach((item: any) => {
                expect(typeof item).toBe('object');
            });
        })

        //PUT
        test("putService should retieve a updated service", async () => {
            testsLogger.info(`putService Test`);
            const newService: Service = {
                _id: "66e333fb5bcc55523d62d037",
                businessId: "66e01df4ff3e2928d0c22858",
                name: "חלאק'ה",
                serviceData: {
                    cost: "280"
                }
            }
            const result = await ServiceService.updateService(newService);
            testsLogger.info(`putService Test \nResponse: ${JSON.stringify(result)}`);
            expect(result).toMatchObject(newService)
        })

        //DELETE
        test("Delete Test should retrive the deleted service", async () => {
            const response = await ServiceService.deleteService(_id)
        })

    } catch (error) {
        testsLogger.info(`Error in Services Test:\n ${error!}`);

    }

});
