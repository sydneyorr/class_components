import React from "react";
import { Button, Form } from "semantic-ui-react";

class SongForm extends React.Component {
  state = {
    title: this.props.title ? this.props.title : "",
    artist: this.props.artist ? this.props.artist : "",
  };
  handleChange = (e, { value }) => {
    this.setState({
      [e.target.name]: value,
    });
  };
  handleSubmit = (e) => {

    if (this.props.id) {
      this.props.updateSong({ id: this.props.id, ...this.state });
      this.props.toggleForm();
    } else {
      this.props.addSong({ id: Math.random(), ...this.state });
    }
    this.setState({
      title: "",
      artist: "",
    });
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              name={"title"}
              onChange={this.handleChange}
              value={this.state.title}
              label="Title"
            />
            <Form.Input
              name={"artist"}
              onChange={this.handleChange}
              value={this.state.artist}
              label="Artist"
            />
          </Form.Group>
          <Button color="blue">{this.props.id ? "Update" : "Add"}</Button>
        </Form>
      </div>
    );
  }
}

export default SongForm;