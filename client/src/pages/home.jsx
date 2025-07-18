import React from "react";
import {LeagueTable} from "../components/home/league_table"

export const Home = () => {

    return (
        <>

      <div>
        <h1>Welcome to Premier Metrics!</h1>
        <p>Unlock deep insights into every Premier League match, team, and player. From expected goals to pressing stats, Premier Metrics delivers cutting-edge analytics and visualizations to help fans, analysts, and fantasy managers make smarter decisions.</p>
        <a className='emph-button'>About</a>

        <img src=""></img>

      </div>

      <div>
        <h2>In depth statistics, made easy</h2>
        <div>
          <div className='card1'>
            <img src=''></img> {/* Generic Image for the Card */}
            <p>Take a closer look at players!</p>
            <p>Easily see which players are performing/underperforming and in what areas. </p>
          </div>

          <div className='card1'>
            <img src=''></img> {/* Generic Image for the Card */}
            <p>Compare players!</p>
            <p>Compare multiple players to each other and see who’s been better than who at what.</p>
          </div>

          <div className='card1'>
            <img src=''></img> {/* Generic Image for the Card */}
            <p>Be surprised!</p>
            <p>Discover interesting unexpected stats about your favourite players!</p>
          </div>
        </div>
      </div>

      <div>
        <LeagueTable></LeagueTable>
      </div>

      <div>
        <h2>About Premier Metrics</h2>
        <p>Premier Metrics is an in-depth Premier League statistics comparison website built by Pedro Boudoux, a Computer Science student at the University of Guelph.</p>
        <p>Originally created as a fun side project to learn React and PostgreSQL, Premier Metrics evolved into a full-featured web app that allows users to explore and compare player and team stats from the 2024/25 Premier League season. The site offers an interactive and visual experience, making complex football metrics more accessible and engaging for fans, analysts, and fantasy managers alike.</p>

        <h3>Data Sources & Disclaimer</h3>
        <p>All statistical data is sourced from FBref and the official Premier League website. All rights to these statistics belong to their respective owners. This project is strictly for educational and non-commercial use.</p>

        <h3>Technologies Used</h3>
        <ul>
          <li>Frontend: React & CSS</li>
          <li>Backend: PostgreSQL & Express</li> 
          <li>Scraping & Data Processing: Python & Pandas</li>
          <li>Data Visualization: DON'T KNOW HAVEN'T DONE THAT YET!!</li>
          <li>Other: REST APIs, Git, Figma (for design mockups!), etc.. </li>
        </ul>

        <a href="" >Contact Me!</a>

      </div>


    </>
    );

};
