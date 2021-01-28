import React from 'react';

import {Button, Form} from 'reactstrap';

// type UpdatePoetryProps = {
//     sessionToken: any;
//     question1: string;
//     question2: string;
//     question3: string;
//     red: boolean;
//     orange: boolean;
//     yellow: boolean;
//     green: boolean;
//     blue: boolean;
//     purple: boolean;
//     pink: boolean;
//     black: boolean;
//     brown: boolean;
//     gray: boolean;
//     white: boolean;
//     poemtitle: string;
//     lineone: string;
//     linetwo: string;
//     linethree: string;
// }



class UpdatePoetry extends React.Component{
// <UpdatePoetryProps, {}> {
//     constructor(props: UpdatePoetryProps) {
//         super(props)
//     }
//         handleSubmit = (event: any) => {
//             event.preventDefault();
//             fetch(`http://localhost:3000/poetry/update/${localStorage.getItem('id')}`, {
//                 method: 'PUT',
//                 body: JSON.stringify({
//                     poetry: {
//                         question1: this.props.question1,
//                         question2: this.props.question2,
//                         question3: this.props.question3,
//                         red: this.props.red,
//                         orange: this.props.orange,
//                         yellow: this.props.yellow,
//                         green: this.props.green,
//                         blue: this.props.blue,
//                         purple: this.props.purple,
//                         pink: this.props.pink,
//                         black: this.props.black,
//                         brown: this.props.brown,
//                         gray: this.props.gray,
//                         white: this.props.white,
//                         poemtitle: this.props.poemtitle,
//                         lineone: this.props.lineone,
//                         linetwo: this.props.linetwo,
//                         linethree: this.props.linethree,  
//                     }
//                 }),
//                 headers: new Headers({
//                     'Content-Type': 'application/json',
//                     'Authorization': this.props.sessionToken
//               })
//             }).then((response) => {
//                 console.log(response);
//                 this.setState; 
//             })

//         }

    
    render() {
        return(
            <div>
            {/* <Form onSubmit={this.handleSubmit}>

            </Form> */}

            <Button type="submit">
            Edit Poetry
            </Button>
            </div>
        
        )}
    }


export default UpdatePoetry;