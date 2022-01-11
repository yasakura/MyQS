import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loading from "../components/Loading";
import { retrieveDiets } from "../services/diets";
import { retrieveUser } from "../services/auth";

const GlobalLoader = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const { loadingDiets } = retrieveDiets();
  const { loadingUser } = retrieveUser();
  const shouldShowLoader = loadingUser || loadingDiets;

  useEffect(() => {
    if (shouldShowLoader) {
      setTimeout(() => setLoading(true), 500);
    } else {
      setTimeout(() => setLoading(false), 500);
    }
  }, [setLoading, shouldShowLoader]);

  return isLoading ? <Loading /> : children;
};

GlobalLoader.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalLoader;
