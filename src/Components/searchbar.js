// import Form from 'react-bootstrap/Form';
// import {useForm} from 'react-hook-form';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Searchbar from 'material-ui-search-bar';
import usePlacesAutoComplete, {getGeocode, getLatLng} from "use-places-autocomplete";




function Search(props){
    const {
        ready,
        value,
        suggestions:{ status, data},
        setValue,
        clearSuggestions,
    } = usePlacesAutoComplete({
        requestOptions:{},
        debounce:300,
    });

    const history = useHistory();

    const onSubmit = data => {
        setValue(data)
        console.log(data);
        history.push({
            pathname: '/Locate',
            search:`?address=${data}`,
            state:{address:data}
        });
    };

    const handleSelect = ({ description }) => () => {
        setValue(description, false);
        clearSuggestions();

        // Get latitude and longitude via utility functions
        getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
            console.log("Coordinates: ", { lat, lng });
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
    };
    
    const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

    return(
        <div>
            <Searchbar id="addressValue" placeholder={props.placeHolder} value={props.defaultValue || value} onRequestSearch={onSubmit}/>
            {status=="OK" && <ul>{renderSuggestions()}</ul>}
        </div>
            
    )
}

export default Search