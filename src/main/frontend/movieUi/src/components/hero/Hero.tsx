import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

interface HeroProps {
  movies: any[];
}
const Hero: React.FC<HeroProps> = ({ movies }) => {
  return (
    <div>
      <Carousel>
        {movies.map((movie) => {
          return (
            <Paper>
              <div className="movie-card-container" id={movie.imdbId}>
                <div className="movie-card">
                  <div className="movie-card-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt="movie_poster" />
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
