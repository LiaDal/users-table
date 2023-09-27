import React from 'react'
import Userfront from '@userfront/toolkit'
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Toolbar from './Toolbar'

const Dashboard = () => {
   const userData = JSON.stringify(Userfront.user, null, 2);
   const createdDate = Userfront.user.createdAt.slice(0,10);
   const logindDate = Userfront.user.updatedAt.slice(0,10);
  
    return (
      <>
      <Toolbar/>
        <div className="d-flex justify-content-center m-5">
        <div className=" shadow">
        <Table className="table-primary" striped>
          <thead>
            <tr>
              <th>
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  value="" 
                />
              </th>
              <th>ID</th>
              <th>login</th>
              <th>Email</th>
              <th>Registration date</th>
              <th>Last login date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              <input 
                  className="form-check-input" 
                  type="checkbox" 
                  value="" 
                  id="flexCheckDefault" 
                />
              </td>
              <th>{Userfront.user.userId}</th>
              <td>{Userfront.user.username}</td>
              <td>{Userfront.user.email}</td>
              <td>{createdDate}</td>
              <td>{logindDate}</td>
            </tr>
            <tr>
              <td>
              <input 
                  className="form-check-input" 
                  type="checkbox" 
                  value="" 
                  id="flexCheckDefault" 
                />
              </td>
              <th></th>
              <td>{userData}</td>
              <td>Jacob.@mail.com</td>
              <td>01.08.2023</td>
              <td>05.08.2023</td>
            </tr>
            <tr>
              <td>
              <input 
                  className="form-check-input" 
                  type="checkbox" 
                  value="" 
                  id="flexCheckDefault" 
                />
              </td>
              <th>ID</th>
              <td>login</td>
              <td>Larry.@mail.com</td>
              <td>07.08.2023</td>
              <td>10.08.2023</td>
            </tr>
          </tbody>
        </Table>
        </div>
        </div>
      </>
      );
}

export default Dashboard
