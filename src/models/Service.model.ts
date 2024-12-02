import Bussiness from "./Bussiness.model"

export default interface Service {
    id: string, businessId:Bussiness,name: string, serviceData: { schedule: string, description:[{title, content},{}]}
}