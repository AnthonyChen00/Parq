import Form from 'react-bootstrap/Form';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
// import { Alert } from 'react-bootstrap';


function Searchbar(props){
    // const [address,setAddress] = useState("");
    const history = useHistory();
    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
        history.push({
            pathname: '/Locate',
            search:`?address=${data.addressValue}`,
            state:{address:data.addressValue}
        });
    };
    

    return(
        <div>
            <Form inline className="justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="address">
                    <Form.Control name="addressValue" size="lg" htmlSize="50" type="text" placeholder="Enter Address" ref={register}/>
                </Form.Group>
            </Form>
        </div>
            
    )
}

export default Searchbar