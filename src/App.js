import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlaceComponent from "./Components/PlaceComponent";
import SearchComponent from "./Components/SearchComponent";
import { getPlace } from "./redux/ducks/place";
import { Skeleton } from 'antd';
import logo from './assets/logo.svg';
import map from './assets/map.png';

function App() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const places = useSelector(state => state.place.place);
  const search = useSelector((state) => state.search.search);
  
  const [loading, setLoading] = useState(true);


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

  const loadingState = (state) =>{
    setLoading(state);
  }
  return (
    <div className="App">
      <div id="bg"></div>
      <div id="left-part">
        <div className="content-inside relative">
          <img src={logo} alt="logo" className="brand-logo"/>
          <SearchComponent 
            handleSubmit={handleSubmit} 
            options={search ? datas : undefined} 
            loadingState={loadingState}
          />
          <div className="w-full h-full min-h-full pt-4">
            <img className="main-img img-fluid" src={map} alt="img" />
          </div>
        </div>
      </div>
      <div id="fullpage">
        {places !== '' && search !== '' ?
          <div className="result-wrapper">
            {
              loading ? 
              <Skeleton
                paragraph={{rows:10}}
              />
              :
              <div>
                <h1 className="fs-600 mb-3 md:mb-5 font-bold text-center">Results</h1>
                {places.features.map((final,index)=>{
                  const {properties,geometry} = final
                  return(
                    <PlaceComponent 
                      key={properties.id} 
                      index={index}
                      name={properties.name}
                      country={properties.country}
                      countryCode={properties.country_code}
                      continent={properties.continent}
                      region={properties.region}
                      long={geometry.coordinates[0]}
                      lat={geometry.coordinates[1]}
                    />
                  );
                })}
              </div>
            }
          </div>
          :
          <h1 className="fs-600 mb-3 md:mb-5 font-bold text-center">No Result..</h1>
        }
      </div>
    </div>
  );
}

export default App;
