import PropTypes from "prop-types";
function LoadMoreBtn({ searchMore }) {
  return (
    <button type="button" onClick={searchMore}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  searchMore: PropTypes.func.isRequired,
};
