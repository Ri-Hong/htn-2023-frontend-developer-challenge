import React, { useState, useEffect, useContext } from 'react'
import Event from '../Event/Event'
import AuthContext from '../../context/AuthProvider'

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import { 
  HeaderContainer,
  Header,
  EventsContainer,
  SearchBar,
  Input,
  SearchButton,
  FilterButton
} from './Events.elements'

const Events = ({ events }) => {
  console.log("Events");
  const { loggedIn } = useContext(AuthContext);

  const [processedEvents, setProcessedEvents] = useState(events);
  const [searchResults, setSearchResults] = useState(processedEvents);

  // const [showActivities, setShowActivities] = useState(true);
  // const [showWorkshops, setShowWorkshops] = useState(true);
  // const [showTechTalks, setShowTechTalks] = useState(true);

  useEffect(() => {
    let sortedEvents = [...events].sort((a, b) => {
      if (a.start_time < b.start_time) {
        return -1;
      } else if (a.start_time > b.start_time) {
        return 1;
      } else {
        if (a.end_time < b.end_time) {
          return -1;
        } else if (a.end_time > b.end_time) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  
    if (!loggedIn) {
      sortedEvents = sortedEvents.filter(event => event.permission === "public");
    }

    setProcessedEvents(sortedEvents);
  }, [loggedIn, events]);

  useEffect(() => {
    setSearchResults(processedEvents);
  }, [processedEvents]);

  const handleSubmit = (e) => e.preventDefault()

  const handleSearchChange = (e) => {
    if (!e.target.value) {
      setSearchResults(processedEvents);
    } else {
      setSearchResults(processedEvents.filter(event => event.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }
  }

  // useEffect(() => {
  //   let filteredEvents = processedEvents;
  //   if (showActivities) {
  //     setSearchResults(setSearchResults.filter(event => event.type === "activity"));
  //   }
  //   if (showWorkshops) {
  //     setSearchResults(setSearchResults.filter(event => event.type === "workshop"));
  //   }
  //   if (showTechTalks) {
  //     setSearchResults(setSearchResults.filter(event => event.type === "tech_talk"));
  //   }
  //   setSearchResults(filteredEvents);

  // }, [showActivities, showWorkshops, showTechTalks]);

  return (
    <div>
      <Header>Events</Header>
      <SearchBar onSubmit={handleSubmit}>
        <Input 
          type='text'
          onChange={handleSearchChange}
        ></Input>
        <SearchButton>
          <HiOutlineMagnifyingGlass style={{fontSize: '30px'}}></HiOutlineMagnifyingGlass>
        </SearchButton>
      </SearchBar>

      {/* <FilterButton onClick={setShowActivities(!showActivities)} type="activity" active={showActivities}>Activities</FilterButton>
      <FilterButton onClick={setShowWorkshops(!showWorkshops)}>Workshops</FilterButton>
      <FilterButton onClick={setShowTechTalks(!showTechTalks)}>Tech Talks</FilterButton> */}

      {(searchResults.length) ? 
      <EventsContainer> 
        {searchResults.map(event => (
        <Event key={event.id} event={event}/>
      ))} </EventsContainer> 
          : <div> No events to display </div> 
      }
      

    </div>
  )
}

export default Events