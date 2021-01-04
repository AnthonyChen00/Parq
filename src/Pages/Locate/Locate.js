import MapContainer from "../../Components/MapContainer";
import LocateHeader from "../../Components/locateHeader";
import SearchResults from "../../Components/SearchResults";
import "./Locate.css"

function Locate(props){
    let address;
    if (props.location.state.address){
        address = props.location.state.address;
    }
    else{
        address = "Address";
    }
    return(
        <div>
            <LocateHeader address={address}/>
            <div className="container-fluid">
                <div className="row view">
                    <div className="col-9 pl-0 pr-0">
                        <MapContainer/>
                    </div>
                    <div className="card col-3 list">
                        <SearchResults/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Locate