import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlaceComponent from "./Components/PlaceComponent";
import SearchComponent from "./Components/SearchComponent";
import { getPlace } from "./redux/ducks/place";

function App() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const places = useSelector(state => state.place.place);
  const search = useSelector((state) => state.search.search);

  useEffect(() =>{
   dispatch(getPlace(search));
  },[search])


  return (
    <div className="App">
      <h1>Search result: {search}</h1>
      <SearchComponent handleSubmit={handleSubmit}/>
      {/* {places && 
        <div>
          {places.features.map((final)=>{
            return(
              <PlaceComponent key={final.properties.id} {...final.properties}/>
            );
          })}
        </div>
      } */}
      {places != '' && search != '' ? 
        <div className="result-wrapper p-5">
          {places.features.map((final)=>{
            return(
              <PlaceComponent key={final.properties.id} {...final.properties}/>
            );
          })}
        </div>
        :
        <div className="empty p-5">
          No Result found..
        </div>
      }
    </div>
  );
}

export default App;
