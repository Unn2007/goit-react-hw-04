import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";

function ErrorMessage({ toggleState }) {
  toast.error(`Error.Try again.`, {
    position: "top-left",
  });
  toggleState(false);
  return <></>;
}
export default ErrorMessage;

ErrorMessage.propTypes = {
  toggleState: PropTypes.func.isRequired,
};
