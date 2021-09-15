import React, { Component } from "react";
import { Container, Table } from "semantic-ui-react";
import "./App.css";
import SongForm from "./SongForm";
import { Header, Button, Segment, Card, Icon } from 'semantic-ui-react';
import styled from "styled-components";
import Song from "./Song"

const Songs = ({ songs, deleteSong, updateSong }) => (
  <Table celled padded as={TransparentTable}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Title:</Table.HeaderCell>
        <Table.HeaderCell>Artist:</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        songs.map( song => ( 
          <Song 
          key={song.id} 
          {...song}
          deleteSong={deleteSong}
          updateSong={updateSong}
          />
          ))
        }
    </Table.Body>
  </Table>
);

const TransparentTable= styled.div`
background: transparent !important;
`


export default Songs;

