import MapContainer from "../../Components/MapContainer";
import LocateHeader from "../../Components/locateHeader";
import SearchResults from "../../Components/SearchResults";
import "./Locate.css"

function Locate(props){
    return(
        <div>
            {/* Header will contain information - address - search for other address */}
            <LocateHeader address={props.location.state.address}/>
            <div className="container-fluid pl-0 view">
                <div className="row">
                    <div classname="col-xs-6">
                        <MapContainer/>
                    </div>
                    <div className="card col-md-auto p-3 mt-4">
                        <h5>Parking Spots Nearby</h5>
                        <SearchResults/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Locate