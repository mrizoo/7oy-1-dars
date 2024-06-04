import React from "react";
import { useDispatch } from "react-redux";
import { addUser, deleteUser } from "../features/counter/userSlice";
function List({ user, modalSlice }) {
  let dispetch = useDispatch();

  return (
    modalSlice && (
      <ul className="lg:grid-cols-3 grid grid-cols-1 gap-8 mt-16 max-h-full md:grid-cols-2">
        {user.map((item, id) => {
          return (
            <li
              key={id}
              className="card card-compact w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={item.item3} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.item1}</h2>
                <p>{item.item2}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => {
                      let filter = user.filter((itemFilter) => {
                        return !(item.item1 == itemFilter.item1);
                      });
                      dispetch(deleteUser(filter));
                    }}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    )
  );
}

export default List;
