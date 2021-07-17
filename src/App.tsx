import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from "./routes/About"
import Navigation from "./components/Navigation"
import Main from "./routes/Main"
import Detail from "./routes/Detail"

export default function App(){
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/movie" component={Main}/>
        <Route path="/about" component={About}/>
        <Route path="/movie/:title" component={Detail}/>
      </Switch>
    </BrowserRouter>
  )
}
