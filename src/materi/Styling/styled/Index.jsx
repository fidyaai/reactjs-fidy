import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border: 2px solid black;
    background-color: whitesmoke;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    border-color: rgb(3, 33, 34);
    color: dodgerblue;

`;

export default class Styled extends React.Component{
    render(){
        return(
            <div>
                <Button>Go eduwork</Button>
            </div>
        )
    }
}