import { type NextPage } from "next";
import { useState } from "react";
import Link from "next/link";

import { api } from "../utils/api";

interface ReservationI {
  name: string;
  date: Date;
  phone: string;
  people: number;
}

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "world" });

  const createReservation = api.reservation.createReservation.useMutation();
  //state
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState(2);
  const [time, setTime] = useState(0);

  //handle yyyy-mm-dd date
  const handleDate = (date: string) => {
    const mydate = new Date(date.replace(/-/g, "/"));
    setDate(mydate);
  };

  const handleSubmit = () => {
    date.setHours(time);
    try {
      createReservation.mutate({ name, phone, people, date });
    } catch (err) {
      console.log(err);
    }
  };
  //
  return (
    <>
      <Link
        href="reservations"
        className="  absolute top-5 right-5 rounded-lg bg-green-600 px-3 py-2 text-xl text-zinc-800 md:right-11"
      >
        Reservations
      </Link>
      ;
      <main className="min-h-1/2 absolute bottom-[50%] right-[50%] mx-auto w-3/4 max-w-[600px] translate-x-1/2 translate-y-1/2 border-2 border-orange-800/40 px-5">
        <h1 className="pt-5 text-center text-3xl">Make a Reserve</h1>

        <div className="flex  flex-wrap justify-around gap-5 pt-10">
          <span className="w-1/3 ">
            <label className="text-sm text-zinc-500">Name</label>
            <input
              type="text"
              className="w-full border-b border-orange-800/40"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </span>
          <span className="w-1/3">
            <label className="text-sm text-zinc-500">Phone number</label>
            <input
              type="text"
              className="w-full border-b border-orange-800/40"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </span>
          <span className="w-1/3">
            <label className="text-sm text-zinc-500">Number of people</label>
            <select
              className="w-full border-b border-orange-800/40 bg-white"
              placeholder="Number"
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
            >
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </span>
          <div className="w-1/3">
            <label className="text-sm text-zinc-500">Date</label>
            <input
              type="date"
              className="w-full border-b border-orange-800/40"
              placeholder="Date"
              onChange={(e) => handleDate(e.target.value)}
            />
          </div>
          <span className="w-1/3">
            <label className="text-sm text-zinc-500">Time</label>
            <select
              className="w-full border-b border-orange-800/40 bg-white"
              placeholder="Number"
              onChange={(e) => setTime(Number(e.target.value))}
            >
              <option value={19}>19:00</option>
              <option value={20}>20:00</option>
              <option value={21}>21:00</option>
              <option value={22}>22:00</option>
              <option value={23}>23:00</option>
            </select>
          </span>
        </div>
        <button
          onClick={handleSubmit}
          className="justfiy-center mx-auto mt-16 mb-10 flex justify-center"
        >
          <span className="bg-orange-800/70 px-6 py-2 text-white">Reserve</span>
        </button>
      </main>
    </>
  );
};

export default Home;
