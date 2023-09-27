import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Checkbox() {
  const [isCheckAll, setIsCheckAll] = useState(false)
  const [isCheck, setIsCheck] = useState([])
  const [list, setList] = useState([])

//   useEffect(() => {
//     setList(Users);
//   }, [list]);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(li => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };


  const checkbox = list.map(({ id, name }) => {
  return (
    <input 
        className="form-check-input" 
        type="checkbox" 
        value="" 
        id="selectAll" 
        isChecked={isCheckAll}
        handleClick={handleClick}
     />
  );
});

return (
    <input 
    className="form-check-input" 
    type="checkbox" 
    value="" 
    id="selectAll" 
    isChecked={isCheckAll}
    handleClick={handleSelectAll}
 >
    {checkbox}
 </input>
)}

export default Checkbox