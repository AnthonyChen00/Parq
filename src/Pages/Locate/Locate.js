import MapContainer from "../../Components/MapContainer";
import "./Locate.css"

function Locate(props){
    return(
        <div className="view">
            {props.location.state.address && 
                <span className="text-center">{props.location.state.address}</span>
            }
            {/* <searchResults/> */}
            <MapContainer/>
        </div>
    )
}

export default Locate