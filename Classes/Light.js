
export default class Light {
    constructor(name, index, bri, hue, on, sat) {
        this.name = name;
        this.index = index;
        this.bri = bri;
        this.hue = hue;
        this.on = on;
        this.sat = sat;
    };

    async changeBrightness (ip, username) {
        await fetch('http://'+ ip +'/api/' + username + '/lights/'+ this.index +'/state' , {
            method: 'PUT',
            body: JSON.stringify({"on":true, "bri":this.bri, "hue":this.hue, "sat":this.sat})
          })
            .then(response => response.json())
            .then(data =>  {return(data)})
            .catch((error) => {
              console.error('Error:', error);
            });
    }
}
