import React from 'react';
import { Switch, Route } from "react-router-dom";
import Projects from "../projects/Projects";
import CodeWars from '../codewars/CodeWars';
import AboutMe from '../aboutMe/AboutMe';
import Home from '../home/Home';

export default function Routes () {
  return (
    <Switch>
      <Route path="/about">
        <AboutMe />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/codewars">
        <CodeWars />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}