import Book from './Book'
function List({books}) {
    return (
        <ul className="list-group">
            
            {books.map(book => (<Book title={book.title} key={book.id}/>))}
        </ul>
    )
}

export default List