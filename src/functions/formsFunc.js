export const handleFormChange = (e,state,setState) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  export const handleFileChange = (event, setState, field) => {
    const file = event.target.files[0];
    setState(prevState => ({ ...prevState, [field]: file }));
  };