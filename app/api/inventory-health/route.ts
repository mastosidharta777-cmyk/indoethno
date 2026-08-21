import {NextResponse} from "next/server";
import {checkInventoryHealth} from "../../services/travel-inventory/health";

export const dynamic="force-dynamic";

export async function GET(request:Request){
  const secret=process.env.CRON_SECRET;
  if(!secret||request.headers.get("authorization")!==`Bearer ${secret}`){
    return NextResponse.json({error:"Unauthorized"},{status:401});
  }
  const results=await checkInventoryHealth();
  return NextResponse.json({healthy:results.every(item=>item.ok),results});
}
