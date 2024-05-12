import { useMutation } from '@tanstack/react-query';

const usePutData = (url, data) => {
  const putData = async () => {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  };

  const mutation = useMutation(putData);

  return {
    loading: mutation.isLoading,
    data: mutation.data,
    error: mutation.error,
  };
};

export default usePutData;