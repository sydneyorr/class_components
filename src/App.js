import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import SongForm from "./SongForm";
import Songs from "./Songs";
import { Header, Button, Segment, Card, Icon } from 'semantic-ui-react';
import styled from "styled-components";
import HeaderText from "./HeaderText";
import AppContainer from "./AppContainer";

class App extends Component {
  state = {
    songs: [
      {id: 1, title: "Possum Kingdom", artist: "Toadies"},
      {id: 2, title: "Love You Madly", artist: "Cake"},
      {id: 3, title: "Someday", artist: "Sugar Ray"},
    ],
  };
 
  async componentDidMount() {
    console.log("mounted");
  }
  
  componentDidUpdate() {
    console.log("updated");
  }

  addSong = (song) => {
    console.log(song);
    this.setState({
      songs: [song, ...this.state.songs],
    });
  };

  updateSong = (song) => {
    let updateSongs = this.state.songs.map((s) =>
      s.id === song.id ? song : s
    );
    this.setState({
      songs: updateSongs,
    });
  };

  deleteSong = (id) => {
    let filteredSongs = this.state.songs.filter((s) => s.id !== id);
    this.setState({
      songs: filteredSongs,
    });
  };
  render() {
    return (
      <AppContainer>
        <HeaderText size="large">Songs</HeaderText>
        <SongForm addSong={this.addSong} />
        <Songs
          updateSong={this.updateSong}
          deleteSong={this.deleteSong}
          songs={this.state.songs}
        />
      </AppContainer>
    );
  }
}




export default App;