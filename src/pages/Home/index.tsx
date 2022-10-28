import DefaultLayout from "@/layouts/Default";

import { Header } from "./components/Header";

const Home: React.FC = () => {
  return (
    <DefaultLayout header={<Header />}>
      <h1>Home</h1>
    </DefaultLayout>
  );
};

export default Home;
