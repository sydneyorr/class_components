import React from "react";
import { Button, Table } from "semantic-ui-react";
import SongForm from "./SongForm";

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
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default Song;