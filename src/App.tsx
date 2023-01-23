import React, { FormEvent, ChangeEvent, useState, useReducer } from 'react';
import Form from './components/Form';
import Footer from './components/Footer';
import Result from './components/Result';
import { INITIAL_STATE, postReducer } from './components/postReducer';

function App() {

  // ==== State ====
  const [date, setDate] = useState<string>("");
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  // ==== HandleChange ====
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDate(e.target.value);
  }

  // ==== Handle Submit ====
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const url = `https://api.nasa.gov/planetary/apod?api_key=gzbRgAqdQu4Gw78wyFCh4BeLLjebDLnIYOjUPPXH&date=${date}`;

    dispatch({type: "FETCH_START"});
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({type:"FETCH_SUCCESS", payload: data});
      })
      .catch((err) => {
        dispatch({type:"FETCH_ERROR"});
      })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="max-w-2xl mx-auto px-4 py-4 my-6 space-y-7 w-full">
        <div className="space-y-5">
          <h1 className="text-center font-bold text-2xl text-white"> 
            Picture Of the day 🚀
          </h1>

          {/* ==== Form ==== */}
          <Form date={date} handleSubmit={handleSubmit} handleChange={handleChange}/>
        </div>

        {/* ==== Result ==== */}
        <Result loading={state.loading} post={state.post} error={state.error}/>
      </div>

      {/* ==== Footer ==== */}
      <Footer/>
    </div>
  );
}

export default App;
