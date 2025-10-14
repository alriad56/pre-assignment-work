import React, { use,useState } from 'react';
import Container from './Container';
import Toggles_btns from './Toggle_btns';
import Countbox from './Countbox';
const IssuesManagement = ({fetchPromise}) => {
    const [toggleStatus,setToggleStatus] = useState("All")
    const initialData = use(fetchPromise)
    console.log(initialData)
    return (
        <div>
  <Countbox/>
  {/*Toggle buttons*/}
    <Toggles_btns toggleStatus={toggleStatus} setToggleStatus={setToggleStatus} />

    {/*cards*/}

    
        </div>
    );
};

export default IssuesManagement;