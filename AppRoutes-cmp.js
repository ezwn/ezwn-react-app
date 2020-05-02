import React from 'react';

import { useAppContext } from './App-ctx';

export const AppRoutes = () => {
  const { features } = useAppContext();

  return <>{
    features.map(feature => <React.Fragment key={feature.id}>
      {feature.routes}
    </React.Fragment>)
  }</>;
}
