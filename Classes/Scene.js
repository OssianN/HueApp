export default class Scene {
    constructor(lights, name) {
        this.lights = lights;
        this.name = name;
    };

    
    async setAsScene (ip, username) {
        this.lights.forEach(light => {
            light.changeBrightness (ip, username)
        });
    }
}