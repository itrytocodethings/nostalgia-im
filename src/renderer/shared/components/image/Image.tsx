const Image = ({ src, draggable, imageClasses, grayScale }: Image) => {
  return (
    <img
      className={`select-none ${imageClasses && `${imageClasses} ` || ''}${
        grayScale && 'grayscale '}`}
      draggable={draggable || false}
      src={src}
      onDragStart={(e) => {
        e.preventDefault();
      }}
    />
  );
};

interface Image {
  src: string;
  draggable?: boolean;
  imageClasses?: string;
  grayScale?: boolean;
}

export default Image;
