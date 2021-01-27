import React from 'react';
import { Form, Button } from 'reactstrap';



 type ViewAllPoetryProps = {
     sessionToken?: any;
 }

class ViewAllPoems extends React.Component<ViewAllPoetryProps, {}> {
    constructor(props: ViewAllPoetryProps) {
        super(props);
    }

    fetchPoetry = () => {
        fetch(`http://localhost:3000/poetry/mine`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then((result) => result.json())
            .then((poetry) => {
                console.log(poetry)
            })
    }

    

    render() {
        return (
            <div>
           <h1>testing viewallpoems component</h1>
            <Form onSubmit={this.fetchPoetry}>

            <Button type="submit">submit</Button>
            </Form>
             </div>
        )
    }
}

export default ViewAllPoems;