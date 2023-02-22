import React from "react";
import { api } from "../utils/api";

interface ReservationProps {}
const Reservation: React.FC<ReservationProps> = ({}) => {
  const { data, isLoading } = api.reservation.getReservations.useQuery();
  if (isLoading) return <div>loading</div>;
  return (
    <div>
      {data?.map((item) => (
        <div className="flex gap-5 ">
          <span>{item.name}</span>
          <span>{item.phone}</span>
          <span>{item.people}</span>
        </div>
      ))}
    </div>
  );
};

export default Reservation;
