import { ModalWindow } from 'components/Modal/Modal';

import { useState } from 'react';
import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { id, webformatURL, tags, largeImageURL },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <li onClick={openModal} key={id}>
        <Image src={webformatURL} alt={tags} />
      </li>
      <ModalWindow
        isOpen={isOpen}
        onRequestClose={closeModal}
        largeImageURL={largeImageURL}
        alt={tags}
      />
    </div>
  );
};
