import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts")
    }

    async getHtml() {
        return `
        <div class="row">
            <div class="col-1">
                <h1>Welcome back to logo's page</h1>
                <h4>It is nice to have you here, please feel free <br>to explore this template</h3>
            </div>
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