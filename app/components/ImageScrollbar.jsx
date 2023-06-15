
import React from 'react';
import Image from 'next/image';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function ImageScrollbar({ images}) {
  // const [items, setItems] = React.useState(getItems);
  // const [selected, setSelected] = React.useState([]);
  // const [position, setPosition] = React.useState(0);

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}  style={{ overflow: 'hidden', width: '500px', maxHeight: '500px' }}>
      {images.map((image) => (
        <Card
          itemId={image.id} // NOTE: itemId is required for track items
          key={image.id}
          image={image}
        />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
     <div
      disabled={isFirstItemVisible} 
      onClick={() => scrollPrev()}
      className='flex items-center text-2xl cursor-pointer'
      >
      <FaArrowAltCircleLeft />
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
      <div
       disabled={isLastItemVisible} 
       onClick={() => scrollNext()}
       className='flex items-center text-2xl cursor-pointer'
      >
        <FaArrowAltCircleRight />
      </div>
  );
}

function Card({ image }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      style={{
        width: '800px',
        overflow: 'hidden',
        padding: '1px',
        maxHeight: '450px',
      }}
      tabIndex={0}
    >
        <Image placeholder="blur" blurDataURL={image.url} src={image.url} width={1000} height={500} sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
    </div>
  );
}

export default ImageScrollbar;