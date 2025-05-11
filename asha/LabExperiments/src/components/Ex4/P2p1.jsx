import React from "react";

function P2p1 ({store}) {
    function navigation(event){
        store.dispatch({"type": "page","data": event.currentTarget.getAttribute("val")})
    }
    return(
        <div>
            <a onClick={navigation} val={"Page1"}>Page1</a>
            <a onClick={navigation} val={"P2p1"}>Page2</a>
            <br/><br/><br/>
            <a onClick={navigation} val={"P2p1"}>P2-p1</a>
            <a onClick={navigation} val={"P2p2"}>P2-p2</a>
            <br/><br/><br/>
            <div className="content1">
            This is Page2 - Page1
            </div>
            
        </div>
    )
}

export default P2p1