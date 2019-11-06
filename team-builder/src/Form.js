import React, { useState } from "react";
import S from "styled-components";

const Form = (props) => {

    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: '',
    });

    const changeHandler = (event) => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value});
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const newTeamMember = {
            ...teamMember,
        };

        props.addNewTeamMember(newTeamMember);
        setTeamMember({name: '', email: '', role: ''})
    }
  return (
      <div>
    <StyledForm onSubmit={submitHandler}>
      <StyledLabel>
        {"Name"}
        <StyledInput type="text" name="name" id="name" onChange={changeHandler} value={teamMember.name}/>
      </StyledLabel>

      <StyledLabel>
        {"Email"}
        <StyledInput type="text" name="email" id="email" onChange={changeHandler}  value={teamMember.email}/>
      </StyledLabel>

      <StyledLabel>
        {"Role"}
        <StyledInput type="text" name="role" id="role" onChange={changeHandler}  value={teamMember.role}/>
      </StyledLabel>
      <StyledButton >Submit</StyledButton>
    </StyledForm>
    </div>
  );
};

export default Form;

const StyledForm = S.form`
    width: 800px;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: flex-start;
    background-color: #d6d6d6;
    padding: 20px;
    border-radius: 50px;
`;
const StyledInput = S.input`
    width: 80%;
    font-size: 20px;
    outline: none;
    border-radius: 50px;
    padding: 10px;
`;
const StyledLabel = S.label`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 20px;
    font-size: 24px;
`;
const StyledButton = S.button`
    border-radius: 25px;
    color: #000;
    background-color: #fff;
    font-size: 40px;
    border: none;
    margin-top: 20px;
    width: 200px;
    padding: 10px 15px;
`;
