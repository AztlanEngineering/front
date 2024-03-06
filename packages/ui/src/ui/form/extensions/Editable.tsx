import * as React from 'react'

type EditableProps = {
  setIsEditable:(isEditable: boolean) => void;
  value        :string;
}

function Editable({
  setIsEditable, value,
}: EditableProps) {
  return (
    <div className="grid container">
      <span
        style={{ 'grid-column': '1/-2' } as React.CSSProperties}
        onClick={() => setIsEditable(false)}
      >
        {value}
      </span>
      <button
        type="button"
        onClick={() => setIsEditable(false)}
      >
        Edit
      </button>
    </div>
  )
}

export default Editable
