import React from 'react';
import { Link } from 'react-router-dom';
import KartIcon from './KartIcon';

const KartLInk = ({ link }) => (
  <Link to={link}>
    <KartIcon />
  </Link>
);

export default KartLInk;
