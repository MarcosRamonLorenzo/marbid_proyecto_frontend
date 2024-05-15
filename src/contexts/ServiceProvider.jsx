import { createContext, useState } from 'react';

const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {

    const initialFormState = {
        title: '',
        price:'',
        content: '',
        category: '',
        image:''
      };


  const [formService, setFormService] = useState(initialFormState);


  return (
    <ServiceContext.Provider value={[formService, setFormService]}>
      {children}
    </ServiceContext.Provider>
  );
};

export { ServiceContext, ServiceProvider };