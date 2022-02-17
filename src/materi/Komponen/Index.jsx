import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";
import TryClass from "./pembahasan/TryClass";
import TryFunction from "./pembahasan/TryFunction";

export default class Komponen extends React.Component {
    render (){
        return(
            <div>
                <ClassComponent nama="Fidya"/>
                <FunctionalComponent nama="Aimatami"/>
                <TryClass coba="search"/>
                <TryFunction latihan="percobaan"/>
            </div>
        )
    }
}