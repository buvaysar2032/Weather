import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { dataAction } from "./Redux"
import style from './App.css'
import { LeftCard } from "./LeftCard/LeftCard"

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(dataAction())
    })

    return (
        <div className={style.background}>
            <div className={style.container}>
                <LeftCard />
            </div>
        </div>
    )
}

export default App