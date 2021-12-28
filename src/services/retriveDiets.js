import { useAuthState } from "react-firebase-hooks/auth";
import { useObjectVal } from "react-firebase-hooks/database";
import { ref } from "firebase/database";
import { auth, database } from "../libs/firebase";

const useRetrieveDiets = () => {
  const [user] = useAuthState(auth);
  const userId = user?.uid;
  const [snapshot, loading] = useObjectVal(ref(database, `users/${userId}`));

  return { diets: snapshot || [], loadingDiets: loading };
};

export default useRetrieveDiets;
