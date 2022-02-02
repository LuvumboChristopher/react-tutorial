import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    img: 'https://images-na.ssl-images-amazon.com/images/I/515mvgd0pXL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,maxime. Culpa enim saepe quis debitis itaque nulla vel blanditiis  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,maxime. Culpa enim saepe quis debitis itaque nulla vel blanditiis',
  },

  {
    id: 2,
    title: 'Los 4 acuerdos',
    author: 'Don Miguel Ruiz',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51QAKMAGrJL._SX343_BO1,204,203,200_.jpg',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,maxime. Culpa enim saepe quis debitis itaque nulla vel blanditiis  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,maxime. Culpa enim saepe quis debitis itaque nulla vel blanditiis',
  },

  {
    id: 3,
    title: 'Las 48 leyes del poder',
    author: 'Robert Green',
    img: 'https://images-na.ssl-images-amazon.com/images/I/41KY-NORo9L._SX355_BO1,204,203,200_.jpg',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,maxime. Culpa enim saepe quis debitis itaque nulla vel blanditiis  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,maxime. Culpa enim saepe quis debitis itaque nulla vel blanditiis',
  },
];

const BookList = () => {
  return (
    <section className='bookList'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

const Book = (props) => {
  const { title, author, img, description } = props;
  const clickHandlers = () => {
    alert('Hello world');
  };

  function anotherEventExample(e) {
    console.log(e);
  }

  function mostCommonuseCase(e) {
    console.log(e);
    console.log(e.target);
  }

  return (
    <article className='book'>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <img
        src={img}
        alt='Book cover'
        onMouseOver={(e) => {
          console.log("I've been hovered");
        }}
      />
      <p>{description}</p>
      <button
        onClick={clickHandlers}
        onMouseEnter={function clickHandlers() {
          console.log(title);
        }}
      >
        Ver mas
      </button>
      <button onClick={() => anotherEventExample(title)}>Comprar</button>
      <button onClick={mostCommonuseCase}>Vender</button>
    </article>
  );
};

ReactDom.render(
  <>
    <BookList />
  </>,
  document.getElementById('root')
);
