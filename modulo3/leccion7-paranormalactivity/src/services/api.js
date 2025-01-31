const callToApi = () => {
    
    return fetch(`https://api.tvmaze.com/search/shows?q=paranormal`)
      .then((response) => response.json())
      .then((response) => {
        
        const result = response.results.map((character) => {
          return {
            name: character.name,
          };
        });
        
        return result;
      });
  };
  
  export default callToApi;