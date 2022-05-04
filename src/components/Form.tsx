import React, { useReducer } from 'react'
import Sub from "../types.d"

interface FormState {
    inputValues: Sub
}

interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const INITIAL_STATE = {
    nickname: '',
    subMonth: 0,
    avatar: '',
    description: ''
}

type FormReducerAction = {
    type: "CHANGE_VALUE",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "CLEAR"
}


const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
    switch (action.type) {
        case "CHANGE_VALUE":
            const {inputName, inputValue} = action.payload
            return {
                ...state,
                [inputName]: inputValue
            }
        case "CLEAR":
            return INITIAL_STATE
    }
}

const Form = ({onNewSub} : FormProps) => {

    const [inputValue, dispatch] = useReducer(formReducer, INITIAL_STATE)

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(inputValue)
        handleClear()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target
        dispatch({
            type: "CHANGE_VALUE",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClear = () => {
        dispatch({type: "CLEAR"})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' name='nickname' value={inputValue.nickname} placeholder='nickName' />
                <input onChange={handleChange} type='number' name='subMonth' value={inputValue.subMonth} placeholder='subMonth' />
                <input onChange={handleChange} type='text' name='avatar' value={inputValue.avatar} placeholder='avatar' />
                <textarea onChange={handleChange} name='description' value={inputValue.description} placeholder='description' />
                <button type='button' onClick={handleClear}>Clear Form</button>
                <button type='submit'>Save new sub!</button>
            </form>
        </div>
    )
}

export default Form