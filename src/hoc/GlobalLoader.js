import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/loading";
import { auth } from "../libs/firebase";
import { retrieveDiets } from "../services/diets";

const GlobalLoader = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const { loadingDiets } = retrieveDiets();
  const [, loading] = useAuthState(auth);

  if (!loading || !loadingDiets) setTimeout(() => setLoading(false), 1000);
  useEffect(() => {
    if (loading || loadingDiets) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [setLoading, loading, loadingDiets]);

  return isLoading ? <Loading /> : children;
};

GlobalLoader.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalLoader;
