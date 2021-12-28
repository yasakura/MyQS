import { useAuthState } from "react-firebase-hooks/auth";
import { useObjectVal } from "react-firebase-hooks/database";
import { ref, set } from "firebase/database";
import { auth, database } from "../libs/firebase";

const useRetrieveDiets = () => {
  const [user] = useAuthState(auth);
  const userId = user?.uid;
  const [diets, loadingDiets] = useObjectVal(ref(database, `users/${userId}`));

  return { diets: diets || [], loadingDiets };
};

const useSendDiets = (user, data) =>
  set(ref(database, `users/${user?.uid}`), data);

export { useRetrieveDiets as retrieveDiets, useSendDiets as sendDiets };
