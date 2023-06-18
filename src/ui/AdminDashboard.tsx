export default function AdminDashBoard() {
  return (
    <>
      <nav className="fixed z-50 mt-24 h-12 w-full">
        <div className="mx-auto grid grid-cols-1 place-items-center border border-black py-2">
          <h1 className="text-center">ADMIN DASHBOARD</h1>
          <p className="text-center">SHOWS ONLY TO ME ONCE AUTHENTICATED</p>
        </div>
      </nav>
    </>
  );
}
