import React, {useState, useEffect} from 'react';
import {getNunis} from '../../helpers/api';

import {Container, Heading, ScrollContainer} from '../common.styles';
import {Loader} from '../common/loader';
import {Nuni} from '../nuni/nuni';

export const Search = () => {
  const [loading, setLoading] = useState(false);
  const [nunis, setNunis] = useState([]);

  const fetchNunis = () => {
    setLoading(true);
    getNunis()
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        const {data: nunisData} = data;
        setNunis(nunisData);
      })
      .catch(e => {
        setLoading(false);
        console.error(e);
      });
  };

  useEffect(() => {
    fetchNunis();
  }, []);

  return (
    <Container edges={['top']}>
      <ScrollContainer>
        <Heading>Search</Heading>
        {loading && <Loader />}
        {nunis.length > 0 &&
          nunis.map((nuni, index) => <Nuni nuni={nuni} key={index} />)}
      </ScrollContainer>
    </Container>
  );
};
