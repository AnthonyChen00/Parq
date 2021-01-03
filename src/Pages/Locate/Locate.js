import MapContainer from "../../Components/MapContainer";
import LocateHeader from "../../Components/locateHeader";
import SearchResults from "../../Components/SearchResults";
import "./Locate.css"

function Locate(props){
    return(
        // <div>
        //     {/* Header will contain information - address - search for other address */}
        //     <div className="container-fluid pl-0 view">
        //         <div className="row">
        //             <div classname="col-xs">
        //                 <MapContainer/>
        //             </div>
        //             <div className="col-xs">
        //                 <h5>Parking Spots Nearby</h5>
        //                 <SearchResults/>
        //             </div>
        //         </div>

        //     </div>
        // </div>
        <div>
            <LocateHeader address={props.location.state.address}/>
            <div className="container-fluid">
                <div className="row view">
                    <div className="col-9 pl-0">
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