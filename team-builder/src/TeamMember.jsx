import React,{useState} from 'react';
import S from 'styled-components';

const TeamMember = (props) => {
    return(
        <TeamMembersContainer>
            {props.teamMembers.map( (member,index) => {
                return(
                    <StyledContainer key={index}>
                        <StyledText>{member.name}</StyledText>
                        <StyledText>{member.email}</StyledText>
                        <StyledText>{member.role}</StyledText>
                        <StyledButton onClick={props.handleMembersToEdit.bind(props.handleMembersToEdit, member)}>Edit
                        </StyledButton>
                    </StyledContainer>
                );
            })}
        </TeamMembersContainer>
    );
}
export default TeamMember;
const TeamMembersContainer = S.div`
    width: 80%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

const StyledContainer = S.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 300px;
    background-color: #000;
    border-radius: 20px;
`;
const StyledText = S.p`
    font-size: 20px;
    color: #fff;
`;
const StyledButton = S.div`
  width: 200px;
  background: #fff;
  color: #000;
  border-radius: 20px;
  border: none;
`;