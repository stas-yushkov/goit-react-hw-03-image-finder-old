import PropTypes from 'prop-types';
import {
  SearchbarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormLabel,
} from './Searchbar.styled';
import { Component } from 'react';

class Searchbar extends Component {
  state = {
    input: '',
  };

  submit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  setInput = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <SearchbarStyled>
        <SearchForm onSubmit={this.submit}>
          <SearchFormButton type="submit">
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchFormButton>

          <SearchFormInput
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.setInput}
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
