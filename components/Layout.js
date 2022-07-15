import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="container mx-auto flex-1">{children}</main>
      <Footer />
    </>
  );
}
