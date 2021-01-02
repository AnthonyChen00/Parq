import Form from 'react-bootstrap/Form';
import {useForm} from 'react-hook-form';
import Locate from '../Pages/Locate/Locate';
import {Switch, Route} from 'react-router-dom';


function Searchbar(props){
    // const [address,setAddress] = useState("");

    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = data => {
        this.props.history.push("/Locate")
    };
    
    console.log(watch("Example"));

    return(
        <div>
            <Form inline className="d-flex justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <Form.Group controlId="address">
                        <Form.Control name="addressValue" size="lg" type="text" placeholder="Enter Address" ref={register}/>
                    </Form.Group>
                </Form.Row>
            </Form>
            <switch>
                <Route path='/Locate' component={Locate}/>
            </switch>
        </div>
            
    )
}

export default Searchbar