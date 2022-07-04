import DeleteIcon from "@mui/icons-material/Delete";

const List = (props) => {
  let OnSelect = (id) => {
    props.OnDeleteHandler(id);
  };

  return (
    <>
      <li className="DeleteIcon">
        {" "}
        <DeleteIcon
          onClick={() => {
            OnSelect(props.id);
          }}
          style={{ cursor: "pointer" }}
        />{" "}
        {props.text}{" "}
      </li>
    </>
  );
};

export default List;
