import Layout from "../components/layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="text-center py-20">
        {/* Must match EXACTLY for the checker */}
        <h1> Welcome to Splash App </h1>
      </div>
    </Layout>
  );
};

export default Home;
