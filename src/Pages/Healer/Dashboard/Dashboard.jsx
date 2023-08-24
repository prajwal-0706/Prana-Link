import React from 'react';
import './Dashboard.css';
import applications from '../../../assets/images/Healer/applications.svg';
import analytics from '../../../assets/images/Healer/analytics.svg';
import invoice from '../../../assets/images/Healer/invoice.svg';
import settings from '../../../assets/images/Healer/settings.svg';
import schedule from '../../../assets/images/Healer/schedule.svg';
import logo from '../../../assets/images/Homepage/logo.svg';
const Healer = () => {
  return (
    <>
      <di class="user-sidebar">
        <div class="user-sidebar-logo">
          <img draggable="false" src={logo} alt="logo" />
          <p class="user-logo-text">PRANA LINK</p>
        </div>

        <div class="user-sidebar-content">
          <ul class="sidebar-content-list">
            <li class="user-sidebar-card user">
              <a class="sidebar-select active" href="#main-events">
                <img src={applications} class="sidebar-card-img" />
                <span class="sidebar-text">Main Events</span>
              </a>
            </li>

            <li class="user-sidebar-card Schedule">
              <a class="sidebar-select" href="#schedule">
                <img src={analytics} class="sidebar-card-img" />
                <span class="sidebar-text">Schedule</span>
              </a>
            </li>

            <li class="user-sidebar-card invoice">
              <a class="sidebar-select" href="#past-events">
                <img src={invoice} class="sidebar-card-img" />
                <span class="sidebar-text">Past Events</span>
              </a>
            </li>

            <li class="user-sidebar-card Event-Photos">
              <a class="sidebar-select" href="#event-photos">
                <img src={schedule} class="sidebar-card-img" />
                <span class="sidebar-text">Event Photos</span>
              </a>
            </li>

            <li class="user-sidebar-card settings">
              <a class="sidebar-select" href="#">
                <img src={settings} class="sidebar-card-img" />
                <span class="sidebar-text">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </di>
      <div class="wrapper">
        <div class="nav">
          <div class="nav-left">
            <h3>
              Good Morning
              <b>"Healer name"</b>
            </h3>
          </div>

          <div class="nav-right">
            <div class="icons">
              <div class="notification-icon">
                <i class="fa-regular fa-bell"></i>
              </div>
            </div>
            <div class="display-healer-profile">
              <div class="profile-pic">
                <img src="profile.jpeg" alt="profile-img" />
              </div>
              <div class="profile-name">healer-name</div>
            </div>
          </div>
        </div>
        <div class="dashboard-section-1">
          <div class="dashboard-heading">
            <h2>Dashboard</h2>
          </div>
          <div class="dashboard-date">
            <i class="fa-solid fa-calendar-days"></i> 22<sup>nd</sup>Aug,2023
          </div>
        </div>
        <div class="dashboard-section-2">
          <div class="total-paitents">
            <div class="paitents-value">
              <h3>784</h3> paitents
            </div>
            <div class="sex-ratio">
              <p>men 40%</p>
              women 60%
            </div>
          </div>
          <div class="paitent-stats">
            <div class="paitents">
              <p>New paitents</p>
              54
            </div>
            <div class="paitents">
              <p>Old paitents</p>
              32
            </div>
          </div>
          <div class="graph-analysis">
            <p>Analytics</p>
            <div id="chart"></div>
          </div>
        </div>
        <div class="dashboard-section-3">
          <div class="event-card">
            <p>Event</p>
          </div>
          <div class="paitent-list-card">
            <p>Your Paitents Today</p>
          </div>
        </div>
        <div class="paitet-event-list">
          <div class="event-card-lists">
            <div class="event-card-1">
              <div class="event-card-heading">
                <p>Team meeting</p>
                13:30-14:50
              </div>
              <div class="event-card-icons">
                <img src="profile.jpeg" alt="" />
                <img src="profile2.jpg" alt="" />
                <img src="profile3.jpeg" alt="" />
              </div>
            </div>
            <div class="event-card-1">
              <div class="event-card-heading">
                <p>Team meeting-2</p>
                13:30-14:50
              </div>
              <div class="event-card-icons">
                <img src="profile.jpeg" alt="" />
                <img src="profile2.jpg" alt="" />
                <img src="profile3.jpeg" alt="" />
              </div>
            </div>
          </div>
          <div class="paitents-list">
            <div class="paitent-list-item">
              <div class="paitent-list-item-image">
                <img src="profile3.jpeg" alt="" />
              </div>
              <div class="paitent-name">Samantha Maria</div>
              <div class="setting-icon">
                <i class="fa-solid fa-bars"></i>
              </div>
            </div>
            <div class="paitent-list-item">
              <div class="paitent-list-item-image">
                <img src="profile.jpeg" alt="" />
              </div>
              <div class="paitent-name">Samantha Maria</div>
              <div class="setting-icon">
                <i class="fa-solid fa-bars"></i>
              </div>
            </div>
            <div class="paitent-list-item">
              <div class="paitent-list-item-image">
                <img src="profile2.jpg" alt="" />
              </div>
              <div class="paitent-name">Samantha Maria</div>
              <div class="setting-icon">
                <i class="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Healer;
