import { useState, useEffect, useMemo } from 'react';
import { Movie } from './types/movies';

function MovieList() {
  const [movieData, setMovieDate] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/Movies');
      const temp = await rsp.json();
      temp.sort((a: any, b: any) => a.title.localeCompare(b.title));
      setMovieDate(temp);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>

      <div className="m-4">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {movieData
              .filter((movie) => movie.edited !== '')
              .map((m) => (
                <tr key={m.movieId}>
                  <td>{m.title}</td>
                  <td>{m.year}</td>
                  <td>{m.director}</td>
                  <td>{m.rating}</td>
                  <td>{m.category}</td>
                  <td>{m.edited}</td>
                  <td>{m.lentTo}</td>
                  <td>{m.notes}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
