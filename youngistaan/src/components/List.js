import React from 'react'
import Person from './Person';
export const List = () => {
  function compareArray(a, b) {
    if (a.mmr < b.mmr) return 1;
    if (a.mmr > b.mmr) return -1;
    return 0;
  }
  function sortArray() {
    return this.props.people.sort(compareArray);
  }
    let peopleList = sortArray();

    let people = peopleList.map(function (person, i) {
      return <Person name={person.player} mmr={person.mmr} />;
    });

    return <ul>{people}</ul>;
  
}

