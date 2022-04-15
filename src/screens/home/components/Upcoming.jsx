import React from 'react';

import {SectionMovie} from '~components';
import {navigationRef} from '~utils';

export const Upcoming = props => {
  const {data, isLoading} = props.data;

  const renderContent = () => {
    if (data?.length > 0 || isLoading === true) {
      return (
        <SectionMovie
          title="Upcoming"
          moreButton={() =>
            navigationRef.navigate('ListContent', {name: 'upcoming'})
          }
          seeMore
          data={data}
          loading={isLoading}
          style={{marginBottom: 0}}
        />
      );
    } else {
      return <></>;
    }
  };

  return renderContent();
};
