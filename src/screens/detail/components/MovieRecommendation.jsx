import React from 'react';

import {SectionMovie} from '~components';

export const MovieRecommendation = ({data, loading}) => {
  const renderContent = () => {
    if (data?.length > 0 || loading === true) {
      return (
        <SectionMovie
          title="~ Recommendation ~"
          data={data}
          loading={loading}
        />
      );
    } else {
      return <></>;
    }
  };
  return renderContent();
};
