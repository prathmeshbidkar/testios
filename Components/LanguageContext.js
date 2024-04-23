// LanguageContext.js
import React, { createContext, useState } from 'react';
import Translation from './Translation';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState('hi');

  const translate = (key) => {
    return Translation[key][language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;