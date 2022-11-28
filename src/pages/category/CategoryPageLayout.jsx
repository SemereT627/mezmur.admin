import React, { useEffect, useMemo } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "../../components/common/table/DataTable";
import { fetchCategoriesAsync } from "../../store/category/categorySlice";

export const CategoryPageLayout = () => {
  /**
   * states
   */
  const dispatch = useDispatch();
  const COLUMNS = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "SubCategory",
        accessor: "hasSubCategory",
        Cell: ({ value }) => {
          return (
            <div className="flex flex-row justify-between items-center">
              <span>{value ? "Yes" : "No"}</span>
              <span
                className={`text-end w-2 h-2 rounded-full ${
                  value ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </div>
          );
        },
      },
      {
        Header: "Created At",
        accessor: "createdAt",
      },
      {
        Header: "Updated At",
        accessor: "updatedAt",
      },
      {
        header: "Actions",
        accessor: "id",
        Cell: ({ value }) => {
          return (
            <div className="flex gap-4">
              <span className="text-info-main" onClick={() => {}}>
                <FiEdit />
              </span>
              <span className="text-red-main" onClick={() => {}}>
                <AiFillDelete />
              </span>
            </div>
          );
        },
      },
    ],
    []
  );

  /**
   * selectors
   */

  const { categories, fetchCategoriesLoading, fetchCategoriesError } =
    useSelector((state) => state.category);

  const memoizedCategories = useMemo(() => categories, [categories]);

  /**
   * functions
   */

  /**
   * effects
   */
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  /**
   * destructured variables
   */

  return (
    <>
      <div className="font-poppins flex flex-col w-full h-12 justify-between mt-4">
        <DataTable
          name={"Category"}
          columns={COLUMNS}
          data={memoizedCategories}
        />
      </div>
    </>
  );
};
