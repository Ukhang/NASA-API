import React, { ChangeEvent, FormEvent } from "react";

// ==== Props Type ====
type PropsType = {
    handleSubmit: any,
    date: string,
    handleChange: any
}

const Form = ({handleSubmit, date, handleChange}: PropsType) => {
    return (
        <form
            className="flex flex-col items-center w-full gap-y-4"
            onSubmit={handleSubmit}
        >
            <input 
                type="date" 
                id="date"
                name="date"
                value={date}
                onChange={handleChange}
                className="border px-4 py-1 rounded-lg text-lg border-gray-400 bg-gray-900 text-gray-200 shadow shadow-sky-900"
            />
            <button 
                type="submit" 
                className="text-lg px-4 py-2 bg-sky-600 hover:bg-sky-700 rounded-lg font-semibold text-white shadow-lg shadow-sky-800"
            > 
                Get Media 🖱️ 
            </button>
        </form>
    )
}

export default Form;