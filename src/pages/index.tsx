import { type NextPage } from "next";
import { useState } from "react";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "world" });

  //state
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState(2);

  return (
    <>
      <main className="absolute bottom-[50%] right-[50%] mx-auto h-1/2 w-3/4 max-w-[600px] translate-x-1/2 translate-y-1/2 border-2 border-orange-800/40 px-5">
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
            <label className="text-sm text-zinc-500">Phone number</label>
            <select
              className="w-full border-b border-orange-800/40"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            >
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </span>
          <span className="w-1/3">
            <label className="text-sm text-zinc-500">Date</label>
            <input
              type="date"
              className="w-full border-b border-orange-800/40"
              placeholder="Date"
              value={date.getDate()}
              onChange={(e) => setDate(new Date(e.target.value))}
            />
          </span>
        </div>
      </main>
    </>
  );
};

export default Home;
