import React, { useState } from 'react';

const ExerciseQueryForm = () => {
  const [query, setQuery] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can send the query to your backend or handle it as needed
    console.log(`Query: ${query}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);

    // Reset form fields after submission
    setQuery('');
    setName('');
    setEmail('');
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Exercise Query Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="query" className="block font-bold mb-2">Exercise Query</label>
          <textarea
            id="query"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExerciseQueryForm;
