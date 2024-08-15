
const books = [
    {
      "isbn": "9781593279509",
      "title": "Eloquent JavaScript, Third Edition",
      "author": "Marijn Haverbeke",
      "published": "2018-12-04",
      "publisher": "No Starch Press",
      "pages": 472,
      "description": "A Modern Introduction to Programming"
    },
    {
      "isbn": "9781491943533",
      "title": "Practical Modern JavaScript",
      "author": "Nicolás Bevacqua",
      "published": "2017-07-16",
      "publisher": "O'Reilly Media",
      "pages": 334,
      "description": "Dive into ES6 and the Future of JavaScript"
    },
    {
      "isbn": "9781449331818",
      "title": "Learning JavaScript Design Patterns",
      "author": "Addy Osmani",
      "published": "2012-07-01",
      "publisher": "O'Reilly Media",
      "pages": 254,
      "description": "A JavaScript and jQuery Developer's Guide"
    },
    {
      "isbn": "9781449365035",
      "title": "Speaking JavaScript",
      "author": "Axel Rauschmayer",
      "published": "2014-02-01",
      "publisher": "O'Reilly Media",
      "pages": 460,
      "description": "An In-Depth Guide for Programmers"
    },
    {
      "isbn": "9781491950296",
      "title": "Programming JavaScript Applications",
      "author": "Eric Elliott",
      "published": "2014-07-01",
      "publisher": "O'Reilly Media",
      "pages": 254,
      "description": "Robust Web Architecture with Node, HTML5, and Modern JS Libraries"
    },
    {
      "isbn": "9781593277574",
      "title": "Understanding ECMAScript 6",
      "author": "Nicholas C. Zakas",
      "published": "2016-09-03",
      "publisher": "No Starch Press",
      "pages": 352,
      "description": "The Definitive Guide for JavaScript Developers"
    },
    {
      "isbn": "9781449365035",
      "title": "JavaScript: The Good Parts",
      "author": "Douglas Crockford",
      "published": "2008-05-01",
      "publisher": "O'Reilly Media",
      "pages": 176,
      "description": "Unearthing the Excellence in JavaScript"
    },
    {
      "isbn": "9781491952023",
      "title": "You Don't Know JS: ES6 & Beyond",
      "author": "Kyle Simpson",
      "published": "2015-12-27",
      "publisher": "O'Reilly Media",
      "pages": 278,
      "description": "Exploring the New Features of JavaScript"
    },
    {
      "isbn": "9781491904244",
      "title": "JavaScript: The Definitive Guide",
      "author": "David Flanagan",
      "published": "2020-05-25",
      "publisher": "O'Reilly Media",
      "pages": 1096,
      "description": "Master the World's Most-Used Programming Language"
    },
    {
      "isbn": "9781491950296",
      "title": "JavaScript Patterns",
      "author": "Stoyan Stefanov",
      "published": "2010-09-09",
      "publisher": "O'Reilly Media",
      "pages": 240,
      "description": "Build Better Applications with Coding and Design Patterns"
    }
  ]


  // map

  const userBook = books.filter((items) => items.pages === 254 && items.title === 'Learning JavaScript Design Patterns')
//   console.log(userBook)

// const myNum = [1,2,3, 4, ,5,6]

// // const newnum = myNum.map((mul) => mul * 10)
// console.log(newnum)


/*  *************************************** Reduce **************************** */


const array = [1,2,3,4,5,6]


 //const init = 4;

// const sum = array.reduce((a, b) => a + b, 4)

const sum = array.reduce(function(a, b) {
    return a + b
}, 1)
console.log(sum)