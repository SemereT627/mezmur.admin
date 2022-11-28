import React from "react";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";
import { BiSortUp } from "react-icons/bi";
import { AiFillCaretDown, AiOutlineArrowDown } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

import { Search } from "../search-input/Search";
import { Checkbox } from "../others/Checkbox";
import { Button } from "../others/Button";

export const DataTable = ({ name, columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // footerGroups,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const { globalFilter } = state;

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <Search filter={globalFilter} setFilter={setGlobalFilter} />
        <Button name={name} />
        <div className="flex flex-row gap-x-8 mr-8">
          <div className="flex flex-row">
            <div className="flex flex-row items-center justify-center gap-x-1 border-r border-secondary px-4">
              <BiSortUp className="!text-primary" size={20} />
              <span>Sort</span>
              <AiFillCaretDown />
            </div>
            <div className="flex flex-row items-center justify-center gap-x-1 px-4">
              <FaFilter className="!text-primary" size={16} />
              <span>Filter</span>
              <AiFillCaretDown />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-x-8">
            <FiRefreshCw className="!text-primary" />
            <AiOutlineArrowDown className="!text-primary" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="align-middle inline-block min-w-full shadow rounded-2xl overflow-clip">
          <table {...getTableProps()} className={"min-w-full"}>
            <thead className="bg-[#F4F6F8]">
              {headerGroups.map((headerGroup, idx) => (
                <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, idx) => (
                    <th
                      key={idx}
                      {...column.getHeaderProps()}
                      className="px-6 py-5 font-poppins-regular text-left"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, idx) => {
                prepareRow(row);
                return (
                  <tr
                    key={idx}
                    {...row.getRowProps()}
                    className="bg-white-main"
                  >
                    {row.cells.map((cell, idx) => {
                      return (
                        <td
                          key={idx}
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap text-md"
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
