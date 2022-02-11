import React from 'react';

import Card from '../Card';

import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        <button type='button'>
          <MdAdd size={24} color="#fff" />
        </button>
      </header>

      <ul>
        {data.cards.map((card, index) => <Card key={card.id} listIndex={listIndex} index={index} data={card} />)}
      </ul>

    </Container>
  );
}

export default List;