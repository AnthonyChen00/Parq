import MapContainer from "../../Components/MapContainer";
import LocateHeader from "../../Components/locateHeader";
import "./Locate.css"

function Locate(props){
    return(
        <div>
            {/* Header will contain information - address - search for other address */}
            <LocateHeader address={props.location.state.address}/>
            {/* <searchResults/> */}
            <MapContainer/>
        </div>
    )
}

export default Locate