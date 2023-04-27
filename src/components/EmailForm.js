import React from 'react';

function EmailForm() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Form submitted:', Object.fromEntries(formData));
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <button type="submit">Submit</button>
      {submitted && <p>Thank you for submitting your email address!</p>}
    </form>
  );
}


export default EmailForm;