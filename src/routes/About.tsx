import React from "react"

export default function About({location : {state}}:any){
    console.log(state)
    return <span>About! { state.fromNavigation ? "asdf" :"xxx"}</span>
}