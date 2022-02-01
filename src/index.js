import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const BookList = () => {
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className='book'>
      <Title />
      <Author />
      <Image />
    </article>
  );
};

const Title = () => {
  return <h2>Atomic Habits</h2>;
};

const Author = () => {
  return <p style={{ margin: '0.3rem auto', color: 'blue' }}>James Clear</p>;
};

const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/515mvgd0pXL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
      alt='Book cover'
    />
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
