import {
  getReservationByID,
  getRoomReservations,
} from "@/app/_lib/supabase/reservations";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { room_slug } = params;
  const id = req.nextUrl.searchParams.get("id");

  console.log("id=>>", id);

  try {
    let reservations = [];
    let busy_days = [];

    if (id) {
      const reservation_target = await getReservationByID(id);

      console.log("reservation_target=>>", reservation_target);

      reservations = await getRoomReservations(reservation_target.room_id);
      busy_days = reservations.filter((item) =>
        id != item.id
          ? { before: item.end_date, after: item.start_date }
          : false
      );
    } else {
      reservations = await getRoomReservations(room_slug);

      if (!Array.isArray(reservations)) {
        console.error("reservations no es un array:", reservations);
        reservations = [];
      }

      busy_days = reservations.map((item) => ({
        before: item.end_date,
        after: item.start_date,
      }));
    }

    return NextResponse.json({ status: "success", busy_days });
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: err.message },
      { status: 500 }
    );
  }
}
