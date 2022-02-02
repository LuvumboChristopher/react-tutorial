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

export {Book};