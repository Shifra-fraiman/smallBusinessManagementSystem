import Bussiness from "./Bussiness.model"

export default interface Service {
    _id?: string, businessId:string,name: string,
     serviceData?:any
     // { schedule: string, description:[{title:string, content:string},{}]}
}