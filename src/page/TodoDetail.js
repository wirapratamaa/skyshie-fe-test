import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { addTodoItem, deleteTodoItem, getTodoDetail } from "../api/todo-api";
import { TodoEmptyState } from "../components/EmptyState/TodoEmptyState";
import { ItemList } from "../components/List/ItemList";
import { AddModal } from "../components/Modal/AddModal";
import { DeleteModal } from "../components/Modal/DeleteModal";
import { InformationModal } from "../components/Modal/InformationModal";
import TodoMenu from "../components/TodoMenu";
import { findSelection, options } from "../utils/utils";

const TodoDetail = () => {
  const location = useLocation();
  const [detailTodo, setDetailTodo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [itemTitle, setItemTitle] = useState("");
  const [prioritySelected, setPrioritySelected] = useState({});
  const [itemTodo, setItemTodo] = useState({});
  const [mode, setMode] = useState("");

  const handleSubmit = () => {
    const payload = {
      activity_group_id: location.state.id,
      priority: prioritySelected.value,
      title: itemTitle,
    };
    addTodoItem(payload)
      .then((resp) => {
        openModal();
        setItemTitle("");
        getTodoItem(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openModal = () => {
    setIsOpen(!isOpen);
  };
  const openModalDelete = () => {
    setIsOpenDelete(!isOpenDelete);
  };

  const handleTitleName = (val) => {
    setItemTitle(val.target.value);
  };
  const handlePriority = (val) => {
    setPrioritySelected(val);
  };
  const getTodoItem = useCallback(
    (init) => {
      getTodoDetail(location.state.id)
        .then((resp) => {
          if (init) {
            setDetailTodo(resp.data.todo_items);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [location]
  );

  const removeItemTodo = (id) => {
    deleteTodoItem(id)
      .then((resp) => {
        setMode("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let isActive = true;
    getTodoItem(isActive);
    return () => {
      isActive = false;
    };
  }, [getTodoItem, location]);

  useEffect(() => {
    if (isOpen) {
      setPrioritySelected(findSelection(options, "very-high"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <>
      <div className="flex flex-col">
        <TodoMenu
          titleActivity={location.state.title}
          buttonTitle={"Tambah"}
          addNew={openModal}
          btnDataCy={"todo-add-button"}
          titleDataCy={"todo-title"}
        />
        <div className="">
          {detailTodo?.length > 0 ? (
            <ItemList
              listItem={detailTodo}
              getTodoItem={getTodoItem}
              deleteItem={() => {
                openModalDelete();
                setMode("delete");
              }}
              setItemTodo={setItemTodo}
            />
          ) : (
            <TodoEmptyState addNew={openModal} />
          )}
        </div>
      </div>
      <AddModal
        isOpen={isOpen}
        close={() => {
          openModal();
          setItemTitle("");
        }}
        value={prioritySelected}
        handlePriority={handlePriority}
        itemTitle={itemTitle}
        handleTitleName={handleTitleName}
        options={options}
        handleSubmit={handleSubmit}
      />
      {mode === "delete" ? (
        <DeleteModal
          isOpen={isOpenDelete}
          onClick={removeItemTodo}
          itemTodo={itemTodo}
          close={openModalDelete}
          activity="List Item"
        />
      ) : (
        <InformationModal
          isOpen={isOpenDelete}
          close={() => {
            getTodoItem(true);
            openModalDelete();
          }}
        />
      )}
    </>
  );
};

export default TodoDetail;
