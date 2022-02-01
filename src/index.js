import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const firstBook = {
  title: 'Atomic Habits',
  author: 'James Clear',
  img: 'https://images-na.ssl-images-amazon.com/images/I/515mvgd0pXL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
};

const secondBook = {
  title: 'Los 4 acuerdos',
  author: 'Don Miguel Ruiz',
  img: 'https://images-na.ssl-images-amazon.com/images/I/51QAKMAGrJL._SX343_BO1,204,203,200_.jpg',
};

const thirdBook = {
  title: 'Las 48 leyes del poder',
  author: 'Robert Green',
  img: 'https://images-na.ssl-images-amazon.com/images/I/41KY-NORo9L._SX355_BO1,204,203,200_.jpg',
};

const BookList = () => {
  return (
    <section className='bookList'>
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
          maxime. Culpa enim saepe quis debitis itaque nulla vel blanditiis
          architecto.
        </p>
      </Book>
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
          maxime. Culpa enim saepe quis debitis itaque nulla vel blanditiis
          architecto.
        </p>
      </Book>
      <Book
        title={thirdBook.title}
        author={thirdBook.author}
        img={thirdBook.img}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
          maxime. Culpa enim saepe quis debitis itaque nulla vel blanditiis
          architecto.
        </p>
      </Book>
    </section>
  );
};

const Book = (props) => {
  const { title, author, img, children } = props;

  return (
    <article className='book'>
      <h2>{title}</h2>
      <p>{author}</p>
      <img src={img} alt='Book cover' />
      <p>{children}</p>
    </article>
  );
};

ReactDom.render(
  <>
    <BookList />
  </>,
  document.getElementById('root')
);
