import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/loading";
import { auth } from "../libs/firebase";
import { retrieveDiets } from "../services/diets";

const GlobalLoader = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const { loadingDiets } = retrieveDiets();
  const [, loadingUser] = useAuthState(auth);
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
