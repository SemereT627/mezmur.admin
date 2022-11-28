import React, { useEffect, useMemo, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

export const SubCategoryPageLayout = () => {
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
  const [categoryId, setCategoryId] = useState(null);

  /**
   * selectors
   */

  const { subCategories, fetchSubCategoriesLoading, fetchSubCategoriesError } =
    useSelector((state) => state.subcategory);

  /**
   * functions
   */

  /**
   * effects
   */
  useEffect(() => {
    // dispatch(fetchSubCategoriesAsync());
  }, []);

  return (
    <>
      <div className="font-poppins flex flex-col w-full h-12 justify-between mt-4">
        <span className="">Select Category</span>
      </div>
    </>
  );
};
