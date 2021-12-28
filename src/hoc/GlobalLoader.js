import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/loading";
import { auth } from "../libs/firebase";
import retrieveDiets from "../services/retriveDiets";

const GlobalLoader = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [, loading] = useAuthState(auth);
  const { loadingDiets } = retrieveDiets();

  if (!loading || !loadingDiets) setTimeout(() => setLoading(false), 1000);
  useContext(() => {
    if (loading || loadingDiets) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  });

  return isLoading ? <Loading /> : children;
};

GlobalLoader.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalLoader;
