import * as React from "react";
import "./Style.css";
import { Card } from "react-bootstrap";
import axios from "axios";

export default function Harsh(props) {
  const { setLoaderActivity } = props;
  const [users, setUsers] = React.useState([]);
  const [Singleuser, setSingleuser] = React.useState([]);
  const first = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    first();
  }, []);

  async function GetSelectedUserDetails(id) {
    var SingleUserId = id;
    console.log(SingleUserId);
    setLoaderActivity(true);
    axios(`https://reqres.in/api/users/${SingleUserId}`)
      .then((response) => {
        // console.log(response);
        setSingleuser(response?.data?.data);
        setLoaderActivity(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <h1> Total number of users = {users.length}</h1>
      <br />
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <center>
                  <button onClick={() => GetSelectedUserDetails(user.id)}>
                    Get Detail
                  </button>
                </center>
              </div>
            );
          })}
      </div>
      <br />
      <br />
      <div className="Card">
        <h4>Click on any of the button to view a specific user details</h4>
        <center>
          <Card style={{ width: "16.5rem" }}>
            <Card.Img variant="top" src={Singleuser.avatar} />
            <Card.Body>
              <Card.Title>{Singleuser.email}</Card.Title>
              <Card.Title>
                {Singleuser.first_name} {Singleuser.last_name}
              </Card.Title>

              <Card.Text> {Singleuser.id}</Card.Text>
            </Card.Body>
          </Card>
        </center>
      </div>
    </div>
  );
}
