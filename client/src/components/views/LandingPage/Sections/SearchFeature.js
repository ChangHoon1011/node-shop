import React, { useState, props } from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

function SearchFeature(props) {
  const [SearchTerm, setSearchTerm] = useState("");

  const searchHandler = (event) => {
    setSearchTerm(event.currentTarget.value);
    props.refreshFunction(event.currentTarget.value);
  };
  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        onChange={searchHandler}
        style={{ width: 304 }}
        value={SearchTerm}
      />
    </div>
  );
}

export default SearchFeature;
