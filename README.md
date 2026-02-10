# NodeJSBlog

## About
The blog was made to gain deeper knowledge of Node.js and complementary tools such as MongoDB, Express, EJS, and others. Git was also a focus — I’m maintaining the project using a Gitflow workflow.

## Structure
```
.
├── app.js
├── controllers
│   ├── admControllers.js
│   └── stdControllers.js
├── models
│   ├── config
│   │   └── db.js
│   ├── post.js
│   └── user.js
├── public
│   ├── css
│   │   ├── adminPage.css
│   │   └── style.css
│   ├── font
│   │   ├── W95FA.otf
│   │   ├── w95fa.woff
│   │   └── w95fa.woff2
│   ├── img
│   │   └── win95.jpg
│   └── js
│       └── script.js
├── routes
│   ├── admRouter.js
│   └── stdRouter.js
└── views
    ├── about.ejs
    ├── admin
    │   └── index.ejs
    ├── index.ejs
    ├── layouts
    │   └── main.ejs
    ├── partials
    │   ├── footer.ejs
    │   ├── header.ejs
    │   └── search.ejs
    ├── post.ejs
    └── search.ejs
```
