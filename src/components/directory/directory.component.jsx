import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

export class Directory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: 'Collares',
          imageUrl: 'https://image.freepik.com/vector-gratis/elemento-brillo-capa-geometria-fondo-abstracto-gris_34645-84.jpg',
          id: 1,
          size: 'medium',
          linkUrl: 'shop/hats'
        },
        {
          title: 'Pulseras',
          imageUrl: 'https://image.freepik.com/vector-gratis/elemento-brillo-capa-geometria-fondo-abstracto-gris_34645-84.jpg',
          id: 2,
          size: 'medium',
          linkUrl: 'shop/jackets'
        },
        {
          title: 'Aretes',
          imageUrl: 'https://image.freepik.com/vector-gratis/elemento-brillo-capa-geometria-fondo-abstracto-gris_34645-84.jpg',
          id: 3,
          size: 'medium',
          linkUrl: 'shop/jackets'
        },
        {
          title: 'Anillos',
          imageUrl: 'https://image.freepik.com/vector-gratis/elemento-brillo-capa-geometria-fondo-abstracto-gris_34645-84.jpg',
          id: 4,
          size: 'medium',
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'Tobilleras',
          imageUrl: 'https://image.freepik.com/vector-gratis/elemento-brillo-capa-geometria-fondo-abstracto-gris_34645-84.jpg',
          id: 5,
          size: 'medium',
          linkUrl: 'shop/womens'
        },
        {
          title: 'Gargantillas',
          imageUrl: 'https://image.freepik.com/vector-gratis/elemento-brillo-capa-geometria-fondo-abstracto-gris_34645-84.jpg',
          id: 6,
          size: 'medium',
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  render() {
    const { sections } = this.state;
    return (
      <div className='directory-menu'>
        {sections.map(
          ({  id, ...menuItemProps }) =>
            <MenuItem key={id} {...menuItemProps} />
        )}
      </div>
    )
  }
}

export default Directory;
