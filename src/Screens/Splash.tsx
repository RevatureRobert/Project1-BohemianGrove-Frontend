import React from "react";
import '../Styles/Splash.css';

export const Splash: React.FC = (props: any) => {
    return (
        <div id="parent-div">
            <div id="splash-div" className="splash-component">
                <h1 id="splash-header">Welcome to Bohemian Grove, the message board for those in the know.</h1>
            </div>
        </div>
    );
} 

export default Splash;