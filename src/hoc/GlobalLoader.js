import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useAuthState } from "react-firebase-hooks/auth";
import {useObjectVal} from "react-firebase-hooks/database";
import {ref} from "firebase/database";
import Loading from "../components/loading";
import {auth, database} from "../libs/firebase";

const GlobalLoader = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [, loading] = useAuthState(auth);
  const [user] = useAuthState(auth);
  const userId = user?.uid;

  // eslint-disable-next-line no-unused-vars
  const [, loadingDatabase] = useObjectVal(
      ref(database, `users/${userId}`)
  );

  if(!loading || !loadingDatabase) setTimeout(() => setLoading(false), 1000);
  useContext(() => {
    if (loading || loadingDatabase) {
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
