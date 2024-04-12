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
    <div className="w-[370px] h-full bg-white text-gray-800 p-6 rounded-[30px]">
      {events.classEvents.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Class Events</h3>
          {events.classEvents.map((event) => (
            <div className="mb-6 bg-[#041643] rounded-[20px] p-4 h-[80px] flex items-center relative" key={event.id}>
              <p className="text-white flex items-center">
                <FiCalendar className="w-6 h-6 mr-2" />
                {event.description}
              </p>
              <img src="./images/PaperIcon.png" alt="event" className="w-[50px] h-[70px] absolute right-0 top-0" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
