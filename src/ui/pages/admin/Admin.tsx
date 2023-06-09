import { AdminDashboard } from "./AdminDashboard";

export default function Admin() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="grid grid-cols-1 place-items-center">
          <h1 className="text-center">ADMIN</h1>
          <AdminDashboard />
        </div>
      </main>
    </>
  );
}
