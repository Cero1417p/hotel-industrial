// /app/api/hola/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    mensaje:
      "Hola desde la API de Next.js" + process.env.NEXT_PUBLIC_SUPABASE_KEY,
  });
}
