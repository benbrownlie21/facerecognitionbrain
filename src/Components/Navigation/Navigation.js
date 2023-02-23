import React from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
        if (isSignedIn) {
            return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className="ma2 f5 grow no-underline br-pill ph4 pv3 mb4 dib white bg-red pointer">SIGN OUT</p>
            </nav>
            );
        } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className="ma2 f5 grow no-underline br-pill ph4 pv3 mb4 dib white bg-blue pointer" href="#0">SIGN IN</p>
                <p onClick={() => onRouteChange('register')} className="ma2 f5 grow no-underline br-pill ph4 pv3 mb4 dib white bg-blue pointer" href="#0">REGISTER</p>
            </nav>
        );
        }
}

export default Navigation;