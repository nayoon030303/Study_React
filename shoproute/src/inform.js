import React from 'react'
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function Inform(){
    let history = useHistory();

    return(
        <h1>결제 페이지입니다. </h1>
    )
}

export default Inform;