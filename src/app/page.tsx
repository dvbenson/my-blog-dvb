import NavBar from "../ui/NavBar";

export default async function Page() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="grid grid-cols-1 place-items-center">
          <h1 className="text-center">danielvb.dev BLOG</h1>
        </div>
      </main>
    </>
  );
}
