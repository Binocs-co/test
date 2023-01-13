import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";

const CreateLinkForm = dynamic(() => import("../components/create-link"), {
  ssr: false,
});

const p: string = "Binocs@123";

const Home: NextPage = () => {
  const [password, setPassword] = useState<string | undefined>(undefined);

  if (password == p) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-950 text-white">
        <CreateLinkForm />
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-950 text-black">
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        minLength={1}
        placeholder="Type password"
        className={"password"}
        value={password}
        pattern={"^[-a-zA-Z0-9]+$"}
        title="Only alphanumeric characters and hypens are allowed. No spaces."
        required
      />
    </div>
  );
};

export default Home;
