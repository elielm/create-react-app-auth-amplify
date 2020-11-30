import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from '@aws-amplify/core';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

class App extends Component {
    // Add your code here
   pg = new Client({
    user: 'postgres',
    host: 'primary.cqfn2pbb0weo.us-east-1.rds.amazonaws.com',
    database: 'doceoarts',
    password: 'ArtEducates#Children!',
    port: 5432
  });

 res =  pg.connect();
  out = pg.query(`select * from artist_engagement ae 
  join artist a on a.id = ae.artist_id 
  join engagement e on e.id = ae.engagement_id`,
  (err, rows) => {
    if (err) throw err;
    res = rows
    pg.end();
    });
  console.log(out);

  render() {
    console.log(process.env.REACT_APP_PGHOST );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {process.env.REACT_APP_PGHOST}
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
