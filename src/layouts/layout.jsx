import { PropTypes } from "prop-types";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Layout({ children }) {
  return (
    <section className="max-w-[1920px] text-text font-roboto text-base mx-auto my-0 relative tracking-wider | md:text-lg sm:tracking-widest">
      <Header />
      {children}
      <Footer />
    </section>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
