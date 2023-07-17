const fetch = require("node-fetch");

exports.handler = async (evt) => {

    let data = {};
    
    do {
        const response = await fetch('https://56u70hrled.execute-api.us-west-2.amazonaws.com/Prod/hotel', {
            method: 'post',
            body: JSON.stringify(evt.body),
            headers: {'Content-Type': 'application/json'}
        });
    
        data = await response.json();
    } while (data["errors"] != undefined);
    
    return data;
 }