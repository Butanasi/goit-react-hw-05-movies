import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import style from './Index.module.scss';
import { ImSearch } from 'react-icons/im';

export function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = event => {
    setSearchQuery(event.currentTarget.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      toast.warn('please enter name images', {
        theme: 'colored',
      });
      return;
    }
    onSubmit(searchQuery.toLowerCase());
    setSearchQuery('');
  };

  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={handleSubmit}>
        <button className={style.SearchFormButton} type="submit">
          <ImSearch />
        </button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          className={style.Input}
          value={searchQuery}
          placeholder="Search movies"
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
