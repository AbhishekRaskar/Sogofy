import React, { useEffect, useState } from "react";

const User = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((Data) => setData(Data.data));
  }, []);

  const handleShowPhoto = (index) => {
    setShow(show === index ? null : index);
  };

  return (
    <div>
      {data.map((user, index) => (
        <div key={index} style={{ border: "3px dotted black", margin: 5 }}>
          <h3>
            Name: {user.first_name} {user.last_name}
          </h3>
          <h3>Email: {user.email}</h3>
          <h5 onClick={() => handleShowPhoto(index)}>
            {show === index ? "Hide Photo" : "Show Photo"}
          </h5>
          {show === index && user.avatar && (
            <img style={{borderRadius : "50%"}} src={user.avatar} alt={`${user.first_name}'s avatar`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default User;
