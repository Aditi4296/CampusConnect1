import React from 'react';
import Feed from './Feed';
import Nav from './Nav';
import SideBar from './SideBar';
import Widgets from './Widgets';

export default function Community(){
    
        return (
          <div className="app">      
            <Nav/>      
            <div className='app__body'>
              <SideBar />
              <Feed />
              <Widgets />
            </div>
          </div>
        );
      }
      