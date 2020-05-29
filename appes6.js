class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    addBookToList(book){
        const list = document.getElementById('book-list');

        //creat tr element 
        const row = document.createElement('tr');
        //incerst cols
        row.innerHTML = `
        <td> ${book.title} </td>
        <td> ${book.author} </td>
        <td> ${book.isbn} </td>
        <td> <a href="#" class="delet"> X <a></td>
        `;
        list.appendChild(row);
    }

    showAlart(message, className){
           //creat div
     const div = document.createElement('div');
     //add className
     div.className = `alart ${className}`;
     //add text
     div.appendChild(document.createTextNode(message));
     //get Parent
     const container = document.querySelector('.container');
     //get form

     const form = document.querySelector('#book-form');
     //insert alart
     container.insertBefore(div,form);

     //Time out 
     setTimeout(function(){
         document.querySelector('.alart') .remove();
     },2000)
    }

    deletBook(target){
        if(target.className === 'delet') {
            target.parentElement.parentElement.remove();
        }

    }
    clerFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

}

//Event Listeners
document.getElementById('book-form').addEventListener('submit',
function (e){

    //get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

     //Instantiate book

     const book = new Book(title, author, isbn);
    
     //Instantiate book
    
     const ui = new UI();

     //validate
     if(title === '' || author === '' || isbn === ''){
        //Error alart
        ui.showAlart('please Fill All the Feilds', 'error');
     }
     else{
    //Add book to list
     
     ui.addBookToList(book);

     //success message

    ui.showAlart('Book Added', 'success');

     //clearFields
      ui.clerFields();
     }


    e.preventDefault();
})

// Event listene for delet

document.getElementById('book-list').addEventListener('click' ,
function(e){
    
    const ui = new UI();
    ui.deletBook(e.target);

    //show message
    ui.showAlart('Book removed', 'success');

    e.preventDefault();
})