import React, { useEffect, useState } from 'react';
import Container from './Container';
import Toggles_btns from './Toggle_btns';
import Countbox from './Countbox';

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    // Wait for the fetchPromise to resolve
    fetchPromise.then((data) => {
      setInitialData(data);
    });
  }, [fetchPromise]);

  console.log(initialData);

  return (
    <div>
      <Countbox />

      {/* Toggle buttons */}
      <Toggles_btns toggleStatus={toggleStatus} setToggleStatus={setToggleStatus} />

      {/* Cards */}
      {initialData.map((issue) => {
        console.log(issue);
       return (
       <div className='shadow-md rounded-md cursor pointer bg-state-100'>
        <div>
        <img src={issue.image} alt="" 
        className='h-[80px] w-[80px] rounded-full'
        />
        <h2 className='font-semibold text-lg'>{issue.requestedBy}</h2>
        </div>
       <div className='flex justify-between'>
       <h2 className='font-bold text-[26px]'>{issue.subject}</h2>
        <span>{issue.priority}</span>
        <span>{issue.status}</span>
       </div>
        <p className='text-[17px] text-slate-700'>{issue.description}</p>
       </div>

       );
      })}
    </div>
  );
};

export default IssuesManagement;
