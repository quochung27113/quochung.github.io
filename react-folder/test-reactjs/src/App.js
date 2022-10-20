import logo from "./logo.svg";
import "./App.css";
import { useMemo, useState } from "react";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Heading,
  Input,
} from "@chakra-ui/react";

const sortTypes = ["All", "Completed Tasks", "Active Tasks"];

function App() {
  const [taskName, setTaskName] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [sortType, setSortType] = useState(sortTypes[0]);

  const onChangeTaskName = (e) => {
    setTaskName(e.target.value);
  };


  const onAddTodoItem = () => {
    setList((list) => [...list, { name: taskName, isDone: false }]);
    setTaskName("");
  };

  const onRemoveTodoItem = (selectedItem) => () => {
    setList((list) => list.filter((item) => item.name !== selectedItem.name));
  };

  const onToggleTodoItem = (selectedItem) => () => {
    setList((list) =>
      list.map((item) => {
        if (item.name === selectedItem.name) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
  };

  const toggleEdit = () => {
    setIsEdit((edit) => !edit);
  };

  const onEditItem = (selectedItem) => () => {
    setSelectedItem(selectedItem);
    setTaskName(selectedItem.name);
    toggleEdit();
  };

  const handleEditItem = () => {
    setList((list) =>
      list.map((item) => {
        if (item.name === selectedItem.name) {
          return { ...item, name: taskName };
        }
        return item;
      })
    );
    setTaskName("");
    toggleEdit();
  };

  const setSortTypeValue = (sortValue) => () => {
    setSortType(sortValue);
  };

  const listData = useMemo(() => {
    switch (sortType) {
      case sortTypes[1]:
        return list.filter((item) => item.isDone === true);

      case sortTypes[2]:
        return list.filter((item) => item.isDone === false);

      default:
        return list;
    }
  }, [sortType, list]);

  return (
    <div className="App">
      <h1 className="app-name">
        <img className="App-logo" src={logo} alt="logo" />
        Todo Matic
      </h1>
      <h1>What need to be done?</h1>
      <div className={"flex-col"}>
        <div className="mb-4">
          <Input
            placeholder="Basic usage"
            value={taskName}
            onChange={onChangeTaskName}
          />
          <Button
            onClick={isEdit ? handleEditItem : onAddTodoItem}
            type="primary"
          >
            {isEdit ? "Save" : "Add"}
          </Button>
        </div>
        {!isEdit && (
          <>
            <ButtonGroup variant="outline" spacing="6">
              {sortTypes.map((value) => (
                <Button
                  key={value}
                  colorScheme={value === sortType ? "blue" : undefined}
                  onClick={setSortTypeValue(value)}
                >
                  {value}
                </Button>
              ))}
            </ButtonGroup>
            <Heading>{listData.length} tasks remaining</Heading>
            {listData.map((item, index) => {
              return (
                <div className="mv-12" key={`${index}-${item.name}`}>
                  <Checkbox
                    isChecked={item.isDone}
                    onChange={onToggleTodoItem(item)}
                  >
                    {item.name}
                  </Checkbox>
                  <br />
                  <div className="flex-row">
                    <Button className="mr-4" onClick={onEditItem(item)}>
                      Edit
                    </Button>
                    <Button className="mr-4" onClick={onRemoveTodoItem(item)}>
                      Delete
                    </Button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default App;