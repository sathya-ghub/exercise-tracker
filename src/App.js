import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/exercises-list" exact component={ExercisesList} />
        <Route path="/edit-exercise/:id" component={EditExercise} />
        <Route path="/create-exercise" component={CreateExercise} />
        <Route path="/create-user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
