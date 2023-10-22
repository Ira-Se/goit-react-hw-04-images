import { ModalWindow } from 'components/Modal/Modal';

import { Component } from 'react';
import { Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({
      isOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };
  render() {
    const { id, webformatURL, tags, largeImageURL } = this.props.image;
    const { isOpen } = this.state;

    return (
      <div>
        <li onClick={this.openModal} key={id}>
          <Image src={webformatURL} alt={tags} />
        </li>
        <ModalWindow
          isOpen={isOpen}
          onRequestClose={this.closeModal}
          largeImageURL={largeImageURL}
          alt={tags}
        />
      </div>
    );
  }
}
