import React, { createContext, useContext, useState } from 'react';


const RequestContext = createContext();

export function useRequestContext() {
  return useContext(RequestContext);
}

const STATUS_DONE = 'done';

export function RequestContextProvider({ children }) {
  const [requests, setRequests] = useState([]);
  const [pendingCount, setPendingCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0); 
  const [latestRequestNo, setLatestRequestNo] = useState(0);


  const addRequest = (newRequest) => {
    setRequests([...requests, newRequest]);
    setPendingCount(pendingCount + 1); // Increment pending count
    setLatestRequestNo((prevRequestNo) => prevRequestNo + 1);
  };

  const markRequestAsDone = (requestId) => {
    const updatedRequests = requests.map((request) =>
      request.id === requestId ? { ...request, status: STATUS_DONE } : request
    );
    setRequests(updatedRequests);
    setPendingCount(pendingCount - 1);
    setDoneCount(doneCount + 1);
  };

  return (
    <RequestContext.Provider
      value={{ requests, addRequest, markRequestAsDone, pendingCount, doneCount, latestRequestNo}} >
      {children}
    </RequestContext.Provider>
  );
}
