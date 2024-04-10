import React, { useState, useEffect } from "react";
import { FiCalendar } from "react-icons/fi";
import AdminPostService from "./AdminPostService"; // Import the renamed service
import tw from 'tailwind-styled-components';

const SidebarContainer = tw.div`
  
`;

const EventContainer = tw.div`
  mb-6 bg-blue-900 rounded p-4
`;

const EventTitle = tw.h3`
  text-xl font-semibold mb-2
`;

const EventDescription = tw.p`
 text-white
`;

const Sidebar = () => {
  const [events, setEvents] = useState({ classEvents: [], clubEvents: [] });

  useEffect(() => {
    const fetchAdminPosts = async () => {
      try {
        const posts = await AdminPostService.getAdminPosts();
        const classEvents = [];
        const clubEvents = [];

        posts.forEach((post) => {
          if (post.type === "class") {
            classEvents.push(post);
          } else if (post.type === "club") {
            clubEvents.push(post);
          }
        });

        setEvents({ classEvents, clubEvents });
      } catch (error) {
        console.error("Error fetching admin posts:", error);
      }
    };

    fetchAdminPosts();
  }, []);

  return (
    <div className="w-100 h-full bg-white text-gray-800 p-6">
      {events.classEvents.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Class Events</h3>
          {events.classEvents.map((event) => (
            <div className="mb-6 bg-blue-900 rounded p-4" key={event.id}>
              <p className="text-white">
                <FiCalendar className="w-6 h-6 mr-2" />
                {event.description}
              </p>
            </div>
          ))}
        </div>
      )}
      {events.clubEvents.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Club Events</h3>
          {events.clubEvents.map((event) => (
            <div className="mb-6 bg-blue-900 rounded p-4" key={event.id}>
              <p className="text-white">
                <FiCalendar className="w-6 h-6 mr-2" />
                {event.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
