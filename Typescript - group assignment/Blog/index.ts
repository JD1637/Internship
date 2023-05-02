// structural subtyping
interface Blog {
    author: string,
    title: string,
    content: string,
    date: Date
}

// Blog Class
class Blogs {

    // Blog Array 
    private blogArray: Blog[] = [
        {

            title: "HTML FOR BEGINNERS – INCLUDES TAGS FOR HTML5",
            author: "Scott chow",
            content: `Whether you’re interested in becoming a professional web developer or you simply want to learn more about how websites work, the first thing you need to study is HTML.

HTML is the standard language that is used for creating webpages and web applications. Every time you access a website, a server sends an HTML file to your computer and your browser interprets and displays the information included in that file. In fact, all the information you are reading now is simply data that has been stored in an HTML file and sent to your browser.

Here’s the best thing about HTML – it’s a simple language to learn.`,
            date: new Date("2023-03-16")
        },
        {

            title: "HTML FOR BEGINNERS – INCLUDES TAGS FOR HTML5",
            author: "Scott chow",
            content: `Whether you’re interested in becoming a professional web developer or you simply want to learn more about how websites work, the first thing you need to study is HTML.
            
HTML is the standard language that is used for creating webpages and web applications. Every time you access a website, a server sends an HTML file to your computer and your browser interprets and displays the information included in that file. In fact, all the information you are reading now is simply data that has been stored in an HTML file and sent to your browser.

Here’s the best thing about HTML – it’s a simple language to learn.`,
            date: new Date("2023-03-16")
        },
        {

            title: "HTML FOR BEGINNERS – INCLUDES TAGS FOR HTML5",
            author: "Scott chow",
            content: `Whether you’re interested in becoming a professional web developer or you simply want to learn more about how websites work, the first thing you need to study is HTML.

HTML is the standard language that is used for creating webpages and web applications. Every time you access a website, a server sends an HTML file to your computer and your browser interprets and displays the information included in that file. In fact, all the information you are reading now is simply data that has been stored in an HTML file and sent to your browser.

Here’s the best thing about HTML – it’s a simple language to learn.`,
            date: new Date("2023-03-16")
        }
    ]

    // instance typeof instance
    private static instance: Blogs;

    // Element in which content is added
    hostElement: HTMLDivElement;

    
    private constructor() {
        this.hostElement = document.getElementById('app')! as HTMLDivElement;
        // Adding Cards for initially given blogs
        this.blogArray.forEach((blog: Blog) => {
            this.renderContent(blog, false)
        })
    }

    // Singleton Instance
    static getInstance() {
        // If instance is created return it
        if (this.instance !== undefined) {
            return this.instance
        }

        // Create new instance
        this.instance = new Blogs();
        return this.instance
    }

    // method to render html content 
    private renderContent(blog: Blog, prepend: boolean = true) {
        // Creating a Div element
        const el = document.createElement('div')// Get the modal

        // extrating month,day and year from Date
        const month = blog.date.getUTCMonth() + 1;
        const day = blog.date.getUTCDate();
        const year = blog.date.getUTCFullYear();

        // Adding innerhtml to element 
        el.innerHTML = `
        <div class="col-4">
            <div class="card">
                <div>
                    <h3>${blog.title}</h3>
                    <pre>${blog.content}</pre>  
                </div>
                 <div class="footer">
                     <p>By, ${blog.author}</p>
                     <p>${day}-${month}-${year}</p>
                </div>
             </div>
        </div>
        `
        // Add content to html
        if (prepend) {
            this.hostElement.prepend(el)
        } else {
            this.hostElement.append(el)
        }
    }

    // Add Blog in array
    addBlogs(blog: Blog) {
        this.blogArray.push(blog)
        this.renderContent(blog)
    }

}

// To Hadle Form Input
class FormInput {
    modal: HTMLElement;
    form: HTMLFormElement;
    authorEl: HTMLInputElement;
    titleEl: HTMLInputElement;
    contentEl: HTMLTextAreaElement;
    blogData: Blog | undefined;

    constructor() {
        // type casting
        this.modal = <HTMLElement>document.getElementById("myModal");;
        this.form = <HTMLFormElement>document.getElementById('blog-form')!;;
        this.titleEl = <HTMLInputElement>this.form.querySelector("input[name='title']");
        this.authorEl = <HTMLInputElement>this.form.querySelector("input[name='author']");
        this.contentEl = <HTMLTextAreaElement>this.form.querySelector("#content");
        this.configure();
    }
    private clearInput() {
        this.titleEl.value = '';
        this.authorEl.value = '';
        this.contentEl.value = '';
    }

    private getblogdata(): object {
        const title = this.titleEl.value;
        const author = this.authorEl.value;
        const content = this.contentEl.value;
        const date = new Date()
        this.clearInput()
        return { title, author, content, date };
    }

    private handler(e: Event) {
        e.preventDefault();
        this.blogData = <Blog>this.getblogdata.apply(this);
        this.modal.style.display = 'none';
        BlogsState.addBlogs(this.blogData)
    }
    
    private configure() {
        // Binding this with handler method
        this.form.addEventListener('submit', this.handler.bind(this));
    }
}

// Creating BlogState instance 
const BlogsState = Blogs.getInstance()

let form = new FormInput();

