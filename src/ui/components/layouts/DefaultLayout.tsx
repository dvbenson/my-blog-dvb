import Navbar from "../navigation/header/NavBar";
import AdminToolbar from "../../pages/admin/AdminToolbar";
import Footer from "../navigation/footer/Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <AdminToolbar />
      {children}
      <Footer />
    </>
  );
}
