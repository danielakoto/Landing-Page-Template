import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Profile")
    }

    async getHtml() {
        return `
        <div class="profile">
        <center>
            <div class="whitebox2">
                <img style="border-radius: 100%; width: 25%; margin-top: 30px;" src="/static/pictures/profile.png" alt="">
                <h1 style="font-size: 42px;">Example Name</h1>
                
                <h3 style=" margin-left: 4%; font-size: 22px; margin-bottom: 5px;"> Example Occupation </h3>
                <h3 style=" margin-left: 4%; ">Example University </h3>
                <br>
                <p>Example bio... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quos quidem in dolore! Perspiciatis, sed repudiandae similique illo doloremque quia.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi, dolore a nulla necessitatibus deleniti voluptas delectus beatae cupiditate cumque!</p>
                <h4 style="font-family: 'Source Sans Pro', sans-serif; float: left; font-style: italic; margin-left: 4%;">location</h4>
                <h4>phone #</h4>
                <div style="margin-bottom: 30px;"></div>
            </div>
            
        </center>
        </div>
        `;
    }
}