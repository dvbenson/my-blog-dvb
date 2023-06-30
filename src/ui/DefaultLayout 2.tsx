import Navbar from "./NavBar";
import AdminDashBoard from "./AdminDashboard";
import Footer from "./Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // conditionally render dashboard with authentication
  return (
    <>
      <Navbar />
      <AdminDashBoard />
      {children}
      <Footer />
    </>
  );
}
