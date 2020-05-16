import React from 'react';
function Avatar(props) {
    let doppelmekey = props.doppel_me//props.doppelMeKey;
    const universalkey = "DM1732409GPK";
    let avatar;
    if 
    (doppelmekey) {
        avatar = <img src={"http://www.doppelme.com/" + doppelmekey + "/crop.png"} border="0" width="100%" alt="UPic"/>
    } 
    else {
        avatar = <img src={"http://www.doppelme.com/" + universalkey + "/crop.png"} border="0" width="100%" alt="nkdPic"/>
    }
    return (
        <div> {avatar}</div>
    )
}

export default Avatar;
