'use client'
import React, {useEffect, useState} from 'react';
import Pagination from "@/components/basic/Pagination";
import {log} from "next/dist/server/typescript/utils";
import EmptyData from "@/components/basic/EmptyData";

const Table = ({data, page, columns, pageChange}) => {
  if (!data) return (
    <div className="flex justify-center items-center">
      <div className="loading loading-spinner loading-lg mt-7"></div>
    </div>
  )

  return (
    <div className="overflow-x-auto w-full">
      {data?.length > 0 ? (
        <>

          <table className="table">
            {/* head */}
            <thead>
            <tr className="text-slate-700">
              <th></th>
              {columns?.map((column, index) => (
                <th key={index} className="capitalize">{columns[index]}</th>
              ))}
            </tr>
            </thead>

            <tbody>
            {data?.map((item, index) => (
              <tr key={index} className="">
                <td>{index + 1}</td>
                {columns?.map((column, index) => (
                  <td key={index}>{item[column]}</td>
                ))}
              </tr>
            ))}
            </tbody>
          </table>
          {page &&
            <Pagination currentPage={page.currentPage} maxPages={page.maxPages} onPageChange={(e) => pageChange(e)}/>
          }
        </>
      ) : (<EmptyData/>)}
    </div>
  )
    ;
};

export default Table;