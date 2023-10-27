import Hero from "../hero/Hero";

interface HomeProps {
  movies: any[];
}
const Home: React.FC<HomeProps> = ({ movies }) => {
  return <Hero movies={movies} />;
};

export default Home;
