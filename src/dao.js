import { db } from "./firebase";

const getOneMovie = async (id) => {
  return await db
    .collection("movies")
    .doc(id)
    .get()
    .then((m) => m.data());
};

const findAllMovies = async () => {
  const query = await db.collection("movies").limit(18).get();
  let [movies] = await Promise.all([query]);
  return movies.docs.map((m) => {
    return { id: m.id, movie: m.data() };
  });
};

export { getOneMovie, findAllMovies };
