import React from 'react';
import { selectCollectionsForPreview} from'../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collections-overview.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview';

const collectionOverview = ({ collections }) => (
    <div className='collection-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  })


export default connect(mapStateToProps)(collectionOverview);