import React, { Component } from 'react';
import { SHOP_DATA } from './data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class ShopPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(
          ({ id, ...collectionPreviewProps}) =>
            <CollectionPreview  key={id}  {...collectionPreviewProps} />
        )}
      </div>
    )
  }
}

export default ShopPage;
