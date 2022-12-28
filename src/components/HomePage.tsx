/* eslint-disable simple-import-sort/imports */
import { FaLessThan, FaHome } from 'react-icons/fa';
import React, { useState } from 'react';

type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function HomePage({}: Props) {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`${
          open ? 'w-72' : 'w-20'
        } relative h-screen w-72 bg-dark-purple p-5 pt-8 duration-700`}
      >
        <FaLessThan
          className={`absolute -right-3 top-9 h-6 w-6 cursor-pointer rounded border-2 border-dark-purple bg-white ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex flex-row items-center gap-x-4">
          <FaHome
            className={`h-10 w-10 cursor-pointer bg-white duration-300`}
          />
          <h1
            className={`origin-left text-xl font-medium text-white duration-300 ${
              !open && 'hidden'
            } `}
          >
            Designer
          </h1>
        </div>
      </div>

      <div className="h-screen flex-1 p-7 text-2xl font-semibold">
        Home Page
      </div>
    </div>
  );
}
