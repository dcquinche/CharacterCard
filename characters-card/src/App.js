import CharacterCard from "./components/CharacterCard";

import data from "./assets/data.json";

import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>

      <div className="container">
       {
        data.map(function(character){
          return <CharacterCard 
          name={character.name}
          status={character.status} 
          species={character.species} 
          image={character.image} 
          lastLocation={character.location.name} 
          lastLocationURL={character.location.url}
          firstLocation={character.origin.name} 
          firstLocationURL={character.origin.url}
          key={character.id}/>
        })
       }
      </div>
    </div>
  );
}

export default App;