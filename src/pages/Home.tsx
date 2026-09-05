import React from "react";
import DbTest from "../components/DbTest";

function Home() {
    return (
        <div style={{ backgroundColor: "lightblue" }}>
            <h1>Welcome to ReqTrack</h1>
            <DbTest />
        </div>
    );
}

export default Home;