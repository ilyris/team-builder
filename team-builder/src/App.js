import React,{useState,useEffect} from 'react';
import S from 'styled-components';
import Form from './Form.js';
import TeamMember from './TeamMember.jsx';
import './App.css';

function App() {
  const [membersToEdit, setMembersToEdit] = useState({});
  const [teamMembers, setTeamMembers] = useState([{
    name: 'Dylan',
    email: 'jimmy@gmail.com',
    role: "Front-End Engineer",
  }]);

  const addNewTeamMember = (teamMember) => {
    setTeamMembers([...teamMembers, teamMember]);
  }

  const handleMembersToEdit = (member) => {
    setMembersToEdit(member);
  }

console.log(membersToEdit);

  return (
    <StyledAppContainer>
        <TeamMember teamMembers={teamMembers} handleMembersToEdit={handleMembersToEdit} />
        <Form addNewTeamMember={addNewTeamMember} membersToEdit={membersToEdit}/>
    </StyledAppContainer>
  );
}

export default App;

const StyledAppContainer = S.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-flow: row wrap;
`;
