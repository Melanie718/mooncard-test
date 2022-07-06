import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const ErrorAlert = (content) => {
  const [show, setShow] = useState(true);
  console.log("Alert : ", content);
  if (show) {
    return (
      <Alert
        className="d-flex justify-content-center"
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
      >
        <p row>{`This is an error alert due to ${content.content}`}</p>
      </Alert>
    );
  }
  return (
    <Button
      type="button"
      className="btn btn-danger"
      onClick={() => setShow(true)}
    >
      Show Alert
    </Button>
  );
};

export default ErrorAlert;
