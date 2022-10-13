import { useEffect } from "react";
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

  let datas = [];
  if(places){
    const placeData = places.features
          .map(place =>{
              return place.properties
          })
    placeData.map((data) => {
        datas.push({
            value:data.id,
            label:`${data.name} , ${data.country}`
        })
    })
  }

  useEffect(() =>{
    dispatch(getPlace(search));
  },[search])


  return (
    <div className="App">
      <div id="left-part">
        <SearchComponent handleSubmit={handleSubmit} options={search ? datas : undefined}/>
      </div>
      <div id="fullpage">
        {places != '' && search != '' ?
          <div className="result-wrapper">
            {places.features.map((final)=>{
              return(
                <PlaceComponent key={final.properties.id} {...final.properties}/>
              );
            })}
          </div>
          :
          <p>No Result found..</p>
        }
      </div>
    </div>
  );
}

export default App;
