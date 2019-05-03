let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

let otherBook = {
    title: 'A Peoples History',
    author: 'Horward Zinn',
    pageCount: 723
};

let getSummary = function(book){
    return{
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummmary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)


// Challenge Area
// Create function - take fahrenheit in - return 3 values - fahrenheit, celsius & kelvin

let celsiusConverter = function(fahrenheit){
    return{
        fahrenheit: fahrenheit,
        celsius:  (fahrenheit - 32) * 5.9,
        kelvin: (fahrenheit + 459.67) * 5.9
    }

}

let summary = celsiusConverter(30)
console.log(summary)