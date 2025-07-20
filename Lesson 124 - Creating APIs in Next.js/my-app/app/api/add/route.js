import { NextResponse } from "next/server";

export async function POST(request) {
    let data = await request.json()
    console.log(data)
    // return NextResponse.json({success:true,data: "yes"}) // if we just want to show this response {success:true,data: "yes"} on client side
    return NextResponse.json({success:true,data}) // if we want to show data on client side
}