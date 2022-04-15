import React from 'react';

import {SectionMovie} from '~components';

export const MovieSimilar = ({data, loading}) => {
  const renderContent = () => {
    if (data?.length > 0 || loading === true) {
      return (
        <SectionMovie
          title="~ Similar ~"
          data={data}
          loading={loading}
          style={{marginBottom: 0}}
        />
      );
    } else {
      return <></>;
    }
  };
  return renderContent();
};
