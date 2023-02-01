import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "world" });

  return (
    <>
      <main className="">
        <p>{hello.data?.greeting}</p>
      </main>
    </>
  );
};

export default Home;
