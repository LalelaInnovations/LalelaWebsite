import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ToggleBar.css';
import Dropdown from 'react-bootstrap/Dropdown';





function ToggleBar(props) {


    const handlePress = (event) => {
        const buttonPr= props.filterBy;

        console.log(event.target)
        props.filterValueSelected(event.target.value);

    }
    const handleDate = (event) => {
        event.preventDefault();

        var input= document.getElementById("dateInput").value;
        console.log(input);   

            if (input.charAt(5) === "0"){
                const month = input.substring(6,7);
                const day = input.substring(8,10);
            const year = input.substring(0, 4)
            const dateResult = month + '/' + day + '/' + year;            
            console.log(dateResult)
            props.filterValueSelected(dateResult)
            }
            else {
                const month = input.substring(5,7);
                const day = input.substring(8,10);
            const year = input.substring(0, 4)
            const dateResult = month + '/' + day + '/' + year;            
            console.log(dateResult)
            props.filterValueSelected(dateResult)
            }
        
            


    }




   
   

   
    if (props.filterBy === "test type") {
        return (
          
            <Dropdown>
               <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                    Toggle by {props.filterBy}
                </Dropdown.Toggle>


            <Dropdown.Menu onChange={ handlePress } name="test type">
                <div className='toggledrop'>
                    <Button variant="Secondary" onClick={ handlePress} value="screen test">Screen Test</Button> 
                    <Button variant="Secondary" onClick={ handlePress} value="diagnostic test">Diagnostic Test</Button> 
                </div>

            </Dropdown.Menu>


            </Dropdown>
        )  
    }
    if (props.filterBy === "date"){
        return (
            <Dropdown >
                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                    Toggle by {props.filterBy}
                </Dropdown.Toggle>
            
                <Dropdown.Menu>

            <div className='datefilter'>
                <Form onSubmit={ handleDate }>
                <Form.Group className="mb-3" controlId="formBasicDate">
                
                <Form.Control id="dateInput"
                    type="date"  />
                <Button variant="Secondary" type="submit">Submit</Button>
                
                </Form.Group>
   
                </Form>
                
            </div>
            </Dropdown.Menu>


            </Dropdown>

        )
    }

     return (
                <div>
                <div><Button variant="Secondary" onClick={ handlePress} value={props.filterBy}>Toggle by {props.filterBy}</Button></div>
                </div>
     )


}

export default ToggleBar