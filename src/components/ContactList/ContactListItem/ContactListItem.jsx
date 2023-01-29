import PropTypes from 'prop-types';
import { Item, Text, Button } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Button onClick={() => onDelete(id)} type="button">
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
