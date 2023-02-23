import React from "react";
import { api } from "../utils/api";
import Link from "next/link";

interface ReservationProps {}
const Reservation: React.FC<ReservationProps> = ({}) => {
  const { data, isLoading } = api.reservation.getReservations.useQuery();
  if (isLoading) return <div>loading</div>;
  return (
    <div className="">
      <Link
        href="/"
        className="  absolute top-5 right-5 rounded-lg bg-green-600 px-3 py-2 text-xl text-zinc-800 md:right-11"
      >
        Home
      </Link>
      <h1 className="mb-5 py-5 text-center text-4xl">Reservations</h1>
      <table className="mx-auto border-2">
        <tr className="">
          <th className="border-2 p-2 text-lg font-semibold text-blue-400">
            Name
          </th>
          <th className="border-2 p-2 text-lg font-semibold text-blue-400">
            Phone
          </th>
          <th className="border-2 p-2 text-lg font-semibold text-blue-400">
            People
          </th>
          <th className="border-2 p-2 text-lg font-semibold text-blue-400">
            Date
          </th>
          <th className="border-2 p-2 text-lg font-semibold text-blue-400">
            Time
          </th>
        </tr>

        {data?.map((item) => (
          <tr className="border-2 ">
            <th className="border-2 p-2">{item.name}</th>
            <th className="border-2 p-2">{item.phone}</th>
            <th className="border-2 p-2">{item.people}</th>
            <th className="border-2 p-2">
              {item.date.toLocaleDateString("en-GB")}
            </th>
            <th className="border-2 p-2">{item.date.getHours()}</th>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Reservation;
