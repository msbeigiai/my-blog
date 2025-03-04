import Hero from "../Hero";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 w-full pt-16">
        <Hero />
      </div>
    </main>
  );
};

export default Home;
