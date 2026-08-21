import {getInventoryLinks} from "./index";

export type InventoryHealthResult={productName:string;sourceUrl:string;ok:boolean;status:number|null;checkedAt:string};

export async function checkInventoryHealth(fetcher:typeof fetch=fetch):Promise<InventoryHealthResult[]>{
  const items=await getInventoryLinks();
  return Promise.all(items.map(async item=>{
    const checkedAt=new Date().toISOString();
    try{
      const response=await fetcher(item.sourceUrl,{method:"HEAD",redirect:"follow",signal:AbortSignal.timeout(10_000)});
      return {productName:item.productName,sourceUrl:item.sourceUrl,ok:response.ok,status:response.status,checkedAt};
    }catch{
      return {productName:item.productName,sourceUrl:item.sourceUrl,ok:false,status:null,checkedAt};
    }
  }));
}
