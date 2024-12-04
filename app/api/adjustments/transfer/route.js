import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { transferStockQty, givingWarehouseId, recievingWarehouseid, notes } = await request.json();

    const adjustments = { transferStockQty, givingWarehouseId, recievingWarehouseid, notes };
    console.log(adjustments);
    return NextResponse.json(adjustments);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a adjustment",
      },
      {
        status: 500,
      }
    );
  }
}
