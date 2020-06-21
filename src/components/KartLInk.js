import React from 'react';
import { Link } from 'react-router-dom';
import KartIcon from './KartIcon';

const KartLInk = ({ link }) => (
  <div className="col s1">
    <Link to={link}>
      <KartIcon />
    </Link>
  </div>
);

export default KartLInk;
