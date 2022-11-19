import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import News from "./News/News";
import SearchSection from "./SearchSection/SearchSection";

export default function Home() {
  return (
    <main>
      <Header />
      <SearchSection />
      <News />
      <Footer />
    </main>
  );
}
