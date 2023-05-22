"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const HomePage = () => {
  const { data: session } = useSession();
  console.log(session?.user);
  return (
    <>
      {session?.user ? (
        <>
          {/* Bosses Page */}
          <p>I'm authenticated with discord!</p>
          <p>Need to check permissions now!</p>
          <button onClick={() => {signOut()}}>Logout!</button>
        </>
      ) : (
        <>
          {/* Login */}
          <h1>Members Only</h1>
          <p>
            You have to be a member of the Revolution B4 Alliance to use this app. If you are a member, please login with your Discord account.
          </p>
          <button onClick={() => {signIn()}}>Login!</button>
        </>
      )}
    </>
  );
};

export default HomePage;