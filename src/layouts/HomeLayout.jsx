import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorAlert from "../components/ErrorAlert";

const HomeLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <main className="">
        <section>
          {navigation.state === "loading" ? (
            <ErrorAlert></ErrorAlert>
          ) : (
            <Outlet></Outlet>
          )}
        </section>
      </main>

      <>
        <Footer></Footer>
      </>
    </div>
  );
};

export default HomeLayout;
