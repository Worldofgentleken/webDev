import React from "react";
import Practice02UserInfo from "./Practice02UserInfo";

function Practice02UserList() {
  return React.createElement("div", null, [
    React.createElement(Practice02UserInfo, {
      key: "user1",
      name: "홍길동",
      age: "20",
    }),
    React.createElement(Practice02UserInfo, {
      key: "user2",
      name: "강감찬",
      age: "43",
    }),
    React.createElement(Practice02UserInfo, {
      key: "user3",
      name: "이순신",
      age: "28",
    }),
  ]);
}

export default Practice02UserList;
