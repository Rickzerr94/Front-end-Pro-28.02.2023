
const apiUrl = 'https://swapi.dev/api/people/';

function getCharacters() {
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const allCharacters = data.results;
            const filteredCharacters = allCharacters
                .map(({name, mass, height, gender, films}) => ({
                    name,
                    mass,
                    height,
                    gender,
                    films
                }))
                .filter(({films}) => films.length > 3);
            console.log(filteredCharacters);
        })
        .catch(error => console.log(error));

}

console.log(getCharacters())