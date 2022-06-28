(() => {
	// funcion para obtener informacion de una pelicula por ID
	function getAllMovieById(movieId: string) {
		console.log({movieId})
	}

	// function para obtener informacion de los actores de una pelicula - Actors o Cast // id = movieId getMovieCast
	function getAllMovieCastById(id: string) {
		console.log({id})
	}

	// funcion para obtener el bio del actor por el id
	function getActorBioById(ActorId: string) {
		console.log({ActorId})
	}

	// Crear una pelicula
	interface Movie {
		title: string;
		description: string;
		rating: number;
		cast: string[];
	}

	function createMovie(movie: Movie) {
		console.log(movie)
	}
	
	function createActorIfActorNoExists(fullName: string, birthDate: Date): boolean {

		// tarea asincrona para verifica nombre
		// ..
		// ..

		if(checkIfActorExists(fullName) == true) return false;

		console.log('Crear actor');
		return true;
	}

	function checkIfActorExists(fullName: string) {
		return fullName === 'Fernando' ? true : false;
	}

	const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result: number;

        if ( isDead ) return 1500;
		
        if ( isSeparated ) return 2500;

		result = isRetired ? 3000 : 2000;
        
        return result;
    }
});