import React from "react";

export default async function HomePage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="grid grid-cols-1 place-items-center">
          <h1 className="text-center">HOME</h1>
          {/* <div>{users[0].name}</div>
          <div>{users[0].email}</div>
          <div>{users[0].image}</div> */}
        </div>
      </main>
    </>
  );
}
