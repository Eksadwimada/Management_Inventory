import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // title, category, sku, barcode, qty, unitId, brandId, supplierId, buyingPrice, sellingPrice, reOrderPoint, itemId, imageUrl, weight, dimensions, taxRate, description, notes
    const data = await request.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a Item",
      },
      {
        status: 500,
      }
    );
  }
}
