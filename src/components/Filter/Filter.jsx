import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input onChange={onChange} value={value} type="text" />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
