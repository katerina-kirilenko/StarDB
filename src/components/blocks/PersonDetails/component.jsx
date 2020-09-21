import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SwapiService from '@/api/SwapiService';
import Spinner from '@/components/blocks/Spinner';
import PersonView from '@/components/blocks/PersonDetails/components/PersonView';

import './style.css';

function PersonDetails({ personId }) {
  const swapiService = new SwapiService();

  const [person, setPerson] = useState({});

  useEffect(() => {
    swapiService.getPerson(personId).then((personData) => {
      setPerson(personData);
    });
    return () => setPerson({});
  }, [personId]);

  return (
    <div className="person-details card">
      {Object.keys(person).length === 0 ? <Spinner /> : <PersonView person={person} />}
    </div>
  );
}

PersonDetails.propTypes = {
  personId: PropTypes.string.isRequired,
};

export default PersonDetails;
