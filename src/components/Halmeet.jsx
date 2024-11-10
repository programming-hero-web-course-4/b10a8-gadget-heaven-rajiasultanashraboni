import React from 'react';
import { Helmet } from 'react-helmet';

const Halmeet = ({title}) => {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
    );
};

export default Halmeet;