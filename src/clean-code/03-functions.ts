(() => {
	// funcion para obtener informacion de una pelicula por ID
	function getAllMovies(movieId: string) {
		console.log({movieId})
	}

	// function para obtener informacion de los actores de una pelicula - Actors o Cast // id = movieId getMovieCast
	function getAllMovieActors(id: string) {
		console.log({id})
	}

	// funcion para obtener el bio del actor por el id
	function getUsuario(ActorId: string) {
		console.log({ActorId})
	}

	// Crear una pelicula
	function movie(title: string, description: string, rating: number, cast: string[]) {
		console.log({title, description, rating, cast})
	}
	
	// Crea un numero actor
	function createActorIfActorNoExists(fullName: string, birthDate: Date): boolean {

		// tarea asincrona para verifica nombre
		// ..
		// ..

		if(fullName === 'Fernando') {
			return false;
		}

		console.log('Crear actor');
		return true;
	}
});