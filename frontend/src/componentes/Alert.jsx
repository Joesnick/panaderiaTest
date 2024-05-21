import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
  return (
    <div className={`notification ${alert.error ? 'is-danger is-size-5' : 'is-success is-size-5'} mt-1`}>
      <span className="has-text-weight-bold">{alert.msg}</span>
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
