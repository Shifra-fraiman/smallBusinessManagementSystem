import Bussiness from "./Bussiness.model";
import Service from "./Service.model";

export default interface Meeting {
    id: string, serviceId:Service, businessId:Bussiness, customer:{name: string, phone: string, email: string}
}