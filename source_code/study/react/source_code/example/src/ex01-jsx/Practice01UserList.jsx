import React from "react";
import Practice01UserInfo from "./Practice01UserInfo";

function Practice01UserList() {
  return (
    <div>
      <Practice01UserInfo name="홍길동" age={20} />
      <Practice01UserInfo name="이순신" age={24} />
      <Practice01UserInfo name="강감찬" age={18} />
    </div>
  );
}

export default Practice01UserList;
