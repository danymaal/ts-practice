import React, { FC } from 'react';

interface HeaderProps {
  companyName: string;
  companyType?: string;
  companyYear: number;
}

const Header: FC<HeaderProps> = ({ companyName, companyType, companyYear }) => {
  return (
    <div className = 'header'>
      <h4>{companyName}</h4>
      <div>
        <p>{companyType}</p>
        <strong>{companyYear}</strong>
      </div>
    </div>
  );
};

export default Header;
