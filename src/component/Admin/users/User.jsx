import React from "react";
// import DashBoard from './DashBoard.jsx';
import SearchHeader from "./Usertable.jsx";
import StudentsData from "./StudentsData.js";

function Overall() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = StudentsData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="flex">
      <SearchHeader />
      {searchTerm && (
        <SearchHeader
          searchTerm={searchTerm}
          filteredStudents={filteredStudents}
        />
      )}
      {/* {!searchTerm && <DashBoard /> } */}
    </div>
  );
}

export default Overall;
