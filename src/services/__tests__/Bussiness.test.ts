import { logger, testsLogger } from '../../../log4jsConfig';
import Bussiness from '../../models/Bussiness.model';
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

        const business:Bussiness = {
           name: "",
           address: "",
           admin:{id: "", name: "", password: "", phone: ""},         
        }

        test("POST TEST", async () => {})

        test("GET TEST", async () => {})

        test("PUT TEST", async () => {})

        test("DELETE TEST", async () => {})

    }
     catch (error) { 
        testsLogger.error(error);
     }
})