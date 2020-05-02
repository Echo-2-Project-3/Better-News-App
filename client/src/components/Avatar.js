import React from 'react';


function Avatar(props) {

    let doppelmekey = ''//props.doppelMeKey;
    const universalkey = "DM1732409GPK";
    let avatar;

    if (doppelmekey) {
        avatar = <img src={"http://www.doppelme.com/," + doppelmekey + "/crop.png"} border="0" />
    } else {
        avatar = <img src={"http://www.doppelme.com/," + universalkey + "/crop.png"} border="0" />
    }



    return (
        <div> {avatar}</div>


    )

}

export default Avatar;
