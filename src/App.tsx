import "./App.css";
import Header from "./components/Header";
import UsersTable from "./user/UsersTable";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Header />
      <main className="w-full flex justify-center pt-10 px-4">
        <section className="w-full md:w-[80%]">
          <UsersTable />
        </section>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
