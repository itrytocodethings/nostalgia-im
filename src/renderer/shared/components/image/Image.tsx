const Image = ({ src, draggable, imageClasses, grayScale }: Image) => {
  return (
    <img
      className={`${imageClasses && `${imageClasses} ` || ''}${
        grayScale && 'grayscale '}`}
      draggable={draggable || false}
      src={src}
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
