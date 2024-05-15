import { useContext } from 'react';
import { ServiceContext } from '@/contexts/ServiceProvider';

const useService = () => {
  const serviceContext = useContext(ServiceContext);


  return serviceContext;
};

export default useService;