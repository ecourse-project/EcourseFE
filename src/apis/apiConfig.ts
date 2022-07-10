const apiConfig = {
	baseUrl: 'https://pokeapi.co/api/v2/',
	// baseUrl: 'http://127.0.0.1:8000/',
	originalImg: (id: number) =>
		`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
	originalGif: (id: number) =>
		`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`,
};

export default apiConfig;
