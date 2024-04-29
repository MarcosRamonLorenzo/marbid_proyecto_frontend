import { useMutation } from '@tanstack/react-query';

const usePostData = (url, data) => {
  const postData = async () => {
    const response = await fetch(url, {
      method: 'POST',
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

  const mutation = useMutation(postData);


  return {
    loading: mutation.isLoading,
    data: mutation.data,
    error: mutation.error,
  };
};

export default usePostData;