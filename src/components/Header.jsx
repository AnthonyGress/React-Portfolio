import NavbarContent from "./Navbar";
import resetScroll from "./resetScroll";
const Header = () => {
  // scroll to top on page load
  // const resetScroll = () => window.scrollTo(0, 0);
  // resetScroll();
  resetScroll();
  return (
    <section id="header">
      <NavbarContent />
    </section>
  );
};

export default Header;
