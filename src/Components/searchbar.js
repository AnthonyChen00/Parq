import {useHistory} from 'react-router-dom';
import Searchbar from 'material-ui-search-bar';
import {useJsApiLoader, StandaloneSearchBox} from '@react-google-maps/api';


function Search(props){
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
        libraries: ["places"]
      })

    const history = useHistory();
    const onSubmit = data => {
        history.push({
            pathname: '/Locate',
            search:`?address=${data}`,
            state:{address:data}
        });
    };

    const renderSearch = () => {
        return(
            <div>
                <StandaloneSearchBox>
                    <Searchbar id="addressValue" placeholder={props.placeHolder} value={props.defaultValue} onRequestSearch={onSubmit}/>
                </StandaloneSearchBox>
            </div>
        )
    }

    if (loadError){
        return <div>SearchBar cannot be loaded right now, sorry.</div>
    }
    return isLoaded ? renderSearch() : <div></div>

    // const onLoad = ref => this.searchBox = ref;
    // const onPlacesChanged = () => console.log(this.searchBox.getPlaces());

}

export default Search