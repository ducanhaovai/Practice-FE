import './NamesTable.css'

export default function NamesTable ({ names, onEdit }) {
    return (
        <table className="table-container">
          <thead className="table-header">
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {names.map((name, index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>
                  <button  className="edit-button" onClick={() => onEdit(index)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    };

  
  