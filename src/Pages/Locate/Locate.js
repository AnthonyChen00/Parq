import MapContainer from "../../Components/MapContainer";
import "./Locate.css"

function Locate(props){
    return(
        <div className>
            {props.searchTerm && 
                <span className="text-center view">{props.searchTerm}</span>
            }
            {/* <searchResults/> */}
            <MapContainer/>
        </div>
    )
}

export default Locate