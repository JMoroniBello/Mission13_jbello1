import React from 'react';
import styles from './Rad.module.css';

function TopBanner(props: any) {
  return (
    <div className="row bg-light border-bottom border-dark mb-4">
      <nav className="p-4 navbar navbar-expand-lg navbar-dark bg-dark">
        <a className=" p-2 navbar-brand " href="/">
          {props.saying}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">
              Home
            </a>

            <a className="nav-item nav-link" href="/Podcast">
              Podcast
            </a>

            <a className="nav-item nav-link" href="/Movies">
              Movies
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopBanner;
