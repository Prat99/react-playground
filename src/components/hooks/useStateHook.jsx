import React, { useState, useEffect } from 'react';

const UpdatePerson = props => {
  const [personState, setPersonState] = useState({
    person: {
      name: 'John',
      age: 28
    }
  });

  const updatePerson = () => {
    setPersonState({
        person: {
            name: 'Simon',
            age: 40
          }
    });
  };

  useEffect(() => {
      console.log('use effect calls');
  })

  return (
    <div>
      <div>
        <p>Person name is : {personState.person.name}</p>
        <p>Person age is : {personState.person.age}</p>
      </div>
      <button onClick={updatePerson} className="btn btn-primary">
        Update
      </button>
    </div>
  );
};

export default UpdatePerson;
