import React from "react";

export default function CondisnlRendering_1() {
  return (
    <div>
      <div>Packing List</div>
      <ul>
        <Item name="wheat" isPacked={true} />
        <Item name="chocos" isPacked={true} />
        <Item name="sugar" isPacked={false} />
      </ul>
    </div>
  );
}

function Item({ name, isPacked }) {
  return (
    <div>
      {name} {isPacked && "✅"}
    </div>
  );
}
