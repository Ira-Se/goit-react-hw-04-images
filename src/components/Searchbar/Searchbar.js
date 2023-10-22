import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Button, Input } from './Searchbar.styled';
import { Form } from 'components/Searchbar/Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    setQuery(evt.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search value');
      return;
    }
    onSubmit(query);
    evt.target.reset();
  };

  return (
    <header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <span>Search</span>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </Form>
    </header>
  );
};
