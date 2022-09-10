import PropTypes from 'prop-types';
import { HiSearch } from 'react-icons/hi';
import { SearchbarContainer,
    SearchForm,
    SearchFormButton,
    SearchFormInput } from './SearchBox.styled';


const SearchBox = ({ onSubmit }) => {
        return (
            <SearchbarContainer>
                <SearchForm onSubmit={onSubmit}>
                    <SearchFormButton type="submit">
                        <HiSearch size={24} />
                    </SearchFormButton>
                    <SearchFormInput
                        type="text"
                        name="query"
                        autoComplete="off"
                        autoFocus
                        placeholder="Movie search"
                    />
                </SearchForm>
            </SearchbarContainer>
        );
};

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;