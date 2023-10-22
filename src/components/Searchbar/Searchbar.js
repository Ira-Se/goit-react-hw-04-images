import { Component } from 'react';
import { toast } from 'react-hot-toast';
import { Button, Input } from './Searchbar.styled';
import { Form } from 'components/Searchbar/Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = evt => {
    this.setState({ query: evt.target.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error('Please enter a search value');
      return;
    }
    this.props.onSubmit(this.state.query);
    evt.target.reset();
  };

  render() {
    return (
      <header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit" className="button">
            <span>Search</span>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </Form>
      </header>
    );
  }
}
