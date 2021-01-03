import ListGroup from 'react-bootstrap/ListGroup'

function SearchResults(props){

    const tempItems = [{id:1,value:"Item 1"}];
    const elements = tempItems.map((obj) => 
        <ListGroup.Item key={obj.id}>{obj.value}</ListGroup.Item>);

    return(
        <div>
            <ListGroup variant="flush">
                {/* <ListGroup.Item>Item 1</ListGroup.Item> */}
                {elements}
            </ListGroup>
        </div>
    )
}

export default SearchResults