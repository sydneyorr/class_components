import React from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import SongForm from "./SongForm";
import styled, { keyframes } from "styled-components";


class Song extends React.Component {
  state = { showForm: false };
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };
  render() {
    if (this.state.showForm) {
      return (
        <>
          <SongForm
            toggleForm={this.toggleForm}
            updateSong={this.props.updateSong}
            {...this.props}
          />
          <Button onClick={this.toggleForm} color="blue">
            Cancel
          </Button>
        </>
      );
    }
    return (
      <Table.Row key={this.props.id}>
        <Table.Cell>{this.props.title}</Table.Cell>
        <Table.Cell>{this.props.artist}</Table.Cell>
        <Table.Cell>
          <Button
            onClick={() => this.props.deleteSong(this.props.id)}
            color="blue"
          >
            Delete
          </Button>
          <Button onClick={this.toggleForm} color="blue">
            Update
          </Button>
          <StyleIcon>
            <Icon name="volume up" />
          </StyleIcon>
        </Table.Cell>
      </Table.Row>
    );
  }
}

const rotate360 = keyframes`
from {
  transform:rotate(0deg);
  color: purple;
}
to {
  transform:rotate(360deg);
  color: white;
}
`;
const StyleIcon = styled.div`
  fontsize: 30px;
  display: inline-block;
  color: red;
  animation: ${rotate360} 2s linear infinite;
`;

export default Song;

