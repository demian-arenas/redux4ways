import { FETCHING_DATA } from "./constants";
import { getDataSuccess, getDataFailure } from "./actions";
import getPeople from "./api";

import "rxjs";
import { Observable } from "rxjs/Observable";

//$ is a common RxJS convention to identify variables that reference a stream
const fetchUserEpic = action$ =>
  action$.ofType(FETCHING_DATA).mergeMap(action =>
    Observable.fromPromise(getPeople())
      .map(response => getDataSuccess(response))
      .catch(error => Observable.of(getDataFailure(error)))
  );

export default fetchUserEpic;
