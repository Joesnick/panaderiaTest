import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
  return (
    <div className={`notification ${alert.error ? 'is-danger' : 'is-info'} mt-1`}>
      {alert.msg}
    </div>
  );
};

Alert.propTypes = {
  alert: PropTypes.shape({
    error: PropTypes.bool.isRequired,
    msg: PropTypes.string.isRequired
  }).isRequired
};

export default Alert;
