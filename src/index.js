import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const title = 'Atomic Habits';
const author = 'James Clear';
const img =
  'https://images-na.ssl-images-amazon.com/images/I/515mvgd0pXL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg';

const BookList = () => {
  return (
    <section className='bookList'>
      <Book title='ramdon title' job='developper' />
      <Book />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className='book'>
      <h2>{title.toUpperCase()}</h2>
      <p>{author}</p>
      <img src={img} alt='Book cover' />
    </article>
  );
};

/* Ejemplo de uso de las props */

const ListOfPeople = () => {
  return (
    <section className='bookList'>
      <Person name='Christopher' lastName='Luvumbo' age={25} />
    </section>
  );
};

const Person = (props) => {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.lastName}</p>
      <p>{props.age}</p>
    </>
  );
};

ReactDom.render(
  <>
    <BookList />
    <ListOfPeople />
  </>,
  document.getElementById('root')
);
