import { Component } from "react";
// eslint-disable-next-line import/named, import/namespace
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This Listing has an error{" "}
          <Link to="/">Click Here to go back to home page </Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
