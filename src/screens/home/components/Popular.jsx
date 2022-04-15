import React from 'react';

import {SectionMovie} from '~components';
import {navigationRef} from '~utils';

export const Popular = props => {
  const {data, isLoading} = props.data;

  const renderContent = () => {
    if (data?.length > 0 || isLoading === true) {
      return (
        <SectionMovie
          title="Popular"
          moreButton={() =>
            navigationRef.navigate('ListContent', {name: 'popular'})
          }
          seeMore
          data={data}
          loading={isLoading}
        />
      );
    } else {
      return <></>;
    }
  };

  return renderContent();
};
