import React from "react";
import ListOfLounges from "./ListOfLounges";
import LoungeProfile from "./LoungeProfile";
import HomePage from "./HomePage";

function Lounges() {
    return (
        <div>
            <HomePage />
            <ListOfLounges />
            <LoungeProfile />
        </div>
    );
}

export default Lounges;
