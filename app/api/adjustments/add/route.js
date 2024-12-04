import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { addStockQty, recievingWarehouseId, notes } = await request.json();

    const adjustments = { addStockQty, recievingWarehouseId, notes };
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
