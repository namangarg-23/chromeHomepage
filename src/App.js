import React, { useState } from 'react';
import './index.css';
import GoogleSpreadsheet from './components/GoogleSpreadsheet';
import GoogleForm from './components/GoogleForm';
import Music from './components/Music';
import Poll from './components/Poll';
import BookQuote from './components/BookQuote';
import IssueTracker from './components/IssueTracker';
import DGC from './components/DGC';
import Announcements from './components/Announcements';
import StepsTracker from './components/StepsTracker';
import OpportunityBoard from './components/OpportunityBoard';
import Leaderboard from './components/Leaderboard';
import TILCorner from './components/TILCorner';
import GoogleCalendar from './components/GoogleCalendar';
import GoogleMeet from './components/GoogleMeet';
import GoogleKeep from './components/GoogleKeep';
import ChatBox from './components/ChatBox';
import NotionPage from './components/NotionPage';
import Meta from './components/Meta';
import PomodoroTimer from './components/PomodoroTimer'; // Import the new Pomodoro Timer component
import SearchBar from './components/SearchBar';
import Greeting from './components/Greeting';
import logo from './components/logo.png';
import DateTimeDisplay from './components/DateTimeDisplay'; // Import the new DateTimeDisplay component

const App = () => {
  const [widgetStates, setWidgetStates] = useState({
    GoogleSpreadsheet: true,
    GoogleForm: true,
    Music: true,
    Poll: true,
    BookQuote: true,
    IssueTracker: true,
    DGC: true,
    Announcements: true,
    StepsTracker: true,
    OpportunityBoard: true,
    Leaderboard: true,
    TILCorner: true,
    GoogleCalendar: true,
    GoogleMeet: true,
    GoogleKeep: true,
    ChatBox: true,
    NotionPage: true,
    PomodoroTimer: true, // Add PomodoroTimer to widget states
  });

  const handleWidgetToggle = (newStates) => {
    setWidgetStates(newStates);
  };

  return (
    <div id="dashboard">
      <Greeting />
      {widgetStates.GoogleSpreadsheet && <GoogleSpreadsheet />}
      {widgetStates.GoogleForm && <GoogleForm />}
      {widgetStates.Music && <Music />}
      {widgetStates.Poll && <Poll />}
      {widgetStates.BookQuote && <BookQuote />}
      {widgetStates.IssueTracker && <IssueTracker />}
      {widgetStates.DGC && <DGC />}
      {widgetStates.Announcements && <Announcements />}
      {widgetStates.StepsTracker && <StepsTracker />}
      {widgetStates.OpportunityBoard && <OpportunityBoard />}
      {widgetStates.Leaderboard && <Leaderboard />}
      {widgetStates.TILCorner && <TILCorner />}
      {widgetStates.GoogleCalendar && <GoogleCalendar />}
      {widgetStates.GoogleMeet && <GoogleMeet />}
      {widgetStates.GoogleKeep && <GoogleKeep />}
      {widgetStates.ChatBox && <ChatBox />}
      {widgetStates.NotionPage && <NotionPage url="https://www.notion.so/your-notion-page-url" />}
      {widgetStates.PomodoroTimer && <PomodoroTimer />}
      <Meta onWidgetToggle={handleWidgetToggle} />
      <DateTimeDisplay /> {/* Add DateTimeDisplay to the page */}
      {/* <img src={logo} alt="Logo" className="logo" /> */}
      <SearchBar /> {/* Add the SearchBar component */}
    </div>
  );
};

export default App;
