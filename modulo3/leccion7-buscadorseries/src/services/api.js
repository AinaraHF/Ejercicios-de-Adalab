const callToApi = (searchName) => {
    
    return fetch(`https://api.tvmaze.com/search/shows?q=${searchName}`)
      .then((response) => response.json())
      .then((response) => {
        
        const result = response.map((serie) => {
          return {
            name: serie.show.name,
          };
        });
        
        return result;
      });
  };
  
  export default callToApi;