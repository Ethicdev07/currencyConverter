/* eslint-disable react/prop-types */

const ErrorPage = ({ errorMessage }) => {
    return (
      <div
        style={{
          width: "300px",
          height: "300px",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          margin: "5% auto",
          padding: "20px",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          An error occured
        </h3>
        <p
          style={{
            textAlign: "center",
          }}
        >
          {errorMessage}
        </p>
      </div>
    );
  };
  
  export default ErrorPage
  