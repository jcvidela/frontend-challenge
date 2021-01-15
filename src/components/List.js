import React from "react";
import { ListItem } from "./index";

export default function ({ data }) {
  return (
    <div className="row pl-2 pr-2">
      <ul className="list-group list-group-flush">
        {data?.map((item, index) => (
          <ListItem
            key={`item-${index}`}
            name={item.name}
            childRoute={`/genre/${item.code}`}
          />
        ))}
      </ul>
    </div>
  );
}
