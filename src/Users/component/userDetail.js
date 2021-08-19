import axios from "axios";
import { useEffect, useState } from "react";

function UserDetail(props) {
  const [userDetail, setUserDetail] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${props.userId}`)
      .then((response) => {
        setUserDetail(response.data);
      });
  }, []);

  console.log(userDetail);
  return (
    <div className="container m-4">
      <div className="row">
        {userDetail && (
          <div className="card col-md-4" style={{margin:'0px auto'}}>
            <div className="card-body">
                <img
                    src={`https://ui-avatars.com/api/?name=${userDetail.name}&color=7F9CF5&background=EBF4FF`}
                    class="card-img-top"
                    style={{marginBottom:'20 px'}}
                    alt=""
                  />
              <h5 className="card-title">Name: {userDetail.name}</h5>
              <p className="card-text">Username: @{userDetail.username}</p>
              <p className="card-text">
                Email:
                <a href={userDetail.email}>{userDetail.email}</a>
              </p>
              <p className="card-text">Phone: {userDetail.phone}</p>

              <p className="card-text">Website: {userDetail.website}</p>
              <p className="card-text">
                Address:
                <ul className="streetDetail">
                  <li>Street: {userDetail.address.street}</li>
                  <li>Suite:{userDetail.address.suite} </li>
                  <li>City: {userDetail.address.city}</li>
                  <li>Zipcode: {userDetail.address.zipcode}</li>
                </ul>
              </p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                props.setShowUserDetail(false);
              }}
            >
              back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDetail;
