import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard")
    }

    async getHtml() {
        return `
        <center>
        <div class="row">
            <div class="col-1">
                <h1>Welcome back to logo's page</h1>
                <h4>It is nice to have you here, please feel free <br>to explore this template</h3>
            </div>
        </div>
        <div class="col-2">
            <p>Insert something about yourself... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quis similique a atque quibusdam delectus fugiat voluptas laudantium iusto, expedita veritatis deserunt placeat laborum quisquam minima earum assumenda est numquam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam recusandae quos repellat deleniti debitis id, earum, dolor corporis sint voluptates nam autem? Blanditiis inventore itaque aspernatur consectetur esse nisi temporibus?</p>
        </div>
        </center>
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
        
        <center>
<!-- this is the layout for all your projects, edit to fit your needs -->
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href="https://github.com/danielakoto/Array-Manipulation">
            <img src="/static/pictures/code-quality-standard.png" alt="" style="width: 100%;">
            <h1>Example Project</h1>
            <p>Try clicking me... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quisquam veniam obcaecati, repellendus aliquam recusandae fuga consequuntur sunt error incidunt excepturi harum exercitationem voluptatibus velit aliquid, fugit ad cum eveniet.</p>
            </a>
        </div> 
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href="https://github.com/danielakoto/New-Year-Chaos">
            <img src="/static/pictures/1722-img.jpg" alt="" style="width: 100%;">
            <h1>Example Project #2</h1>
            <p>Try clicking me...  Show a preview of your project also with a few details... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est rem aperiam obcaecati illo asperiores perferendis assumenda sint architecto deserunt, nesciunt amet tempore voluptate sapiente et soluta unde temporibus non distinctio nisi ad, molestias sequi! Veniam, est iure culpa optio qui deleniti fugit alias, minima expedita error nisi mollitia ab at.</p>
        </a>
        </div>
        <div class="whitebox">
            <a target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: black;" href="https://github.com/danielakoto/Minimum-Swaps-2">
            <img src="/static/pictures/1723-img.jpg" alt="" style="width: 100%;">
            <h1>Example Project #3</h1>
            <p>Try clicking me...  Show a preview of your project also with a few details... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est rem aperiam obcaecati illo asperiores perferendis assumenda sint architecto deserunt, nesciunt amet tempore voluptate sapiente et soluta unde temporibus non distinctio nisi ad, molestias sequi! Veniam, est iure culpa optio qui deleniti fugit alias, minima expedita error nisi mollitia ab at.</p>
        </a>
        </div>
        </center>
        `;
    }
}