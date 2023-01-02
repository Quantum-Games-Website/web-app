/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function GridHome({}: Props) {
  return (
    <div className="container my-12 mx-auto   px-4 md:px-12">
      {/* <!-- title --> */}
      <div className="p-10 text-center">
        <h1 className="font-kanit mb-4 text-6xl hover:text-blue-500">
          FEATURED GAMES
        </h1>
        <h1 className="text-3xl"></h1>
      </div>
      <div className="-mx-1 flex flex-wrap place-content-center gap-8 lg:-mx-8">
        <div className="my-1 w-full px-1 duration-500 hover:scale-105 hover:shadow-xl md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src="https://picsum.photos/600/400/?random"
              />
            </a>

            <header className="flex items-center justify-between p-2 leading-tight md:p-4">
              <h1 className="text-lg">
                <a className="text-black no-underline hover:underline" href="#">
                  Quantum Jim
                </a>
              </h1>
              <p className="text-grey-darker text-sm">11/1/19</p>
            </header>

            <footer className="flex items-center justify-between p-2 leading-none md:p-4">
              <a
                className="flex items-center text-black no-underline hover:underline"
                href="#"
              >
                <img
                  alt="Placeholder"
                  className="block rounded-full"
                  src="https://picsum.photos/32/32/?random"
                />
                <p className="ml-2 text-sm">Asher M.</p>
              </a>
              <a
                className="text-grey-darker hover:text-red-dark no-underline"
                href="#"
              >
                <span className="hidden">Like</span>
                <i className="fa fa-heart"></i>
              </a>
            </footer>
          </article>
        </div>

        <div className="my-1 w-full px-1 duration-500 hover:scale-105 hover:shadow-xl md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src="https://picsum.photos/600/400/?random"
              />
            </a>

            <header className="flex items-center justify-between p-2 leading-tight md:p-4">
              <h1 className="text-lg">
                <a className="text-black no-underline hover:underline" href="#">
                  Quantum Minecraft
                </a>
              </h1>
              <p className="text-grey-darker text-sm">11/1/19</p>
            </header>

            <footer className="flex items-center justify-between p-2 leading-none md:p-4">
              <a
                className="flex items-center text-black no-underline hover:underline"
                href="#"
              >
                <img
                  alt="Placeholder"
                  className="block rounded-full"
                  src="https://picsum.photos/32/32/?random"
                />
                <p className="ml-2 text-sm">Asher M.</p>
              </a>
              <a
                className="text-grey-darker hover:text-red-dark no-underline"
                href="#"
              >
                <span className="hidden">Like</span>
                <i className="fa fa-heart"></i>
              </a>
            </footer>
          </article>
        </div>

        {/* <!-- title --> */}
        <div className="p-10 text-center">
          <h1 className="font-kanit mb-4 text-6xl hover:text-blue-500">
            LATEST GAMES
          </h1>
          <h1 className="text-3xl"></h1>
        </div>
      </div>
      <div className="-mx-1 flex flex-wrap place-content-center gap-8 lg:-mx-8">
        <div className="my-1 w-full px-1 duration-500 hover:scale-105 hover:shadow-xl md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src="https://picsum.photos/600/400/?random"
              />
            </a>

            <header className="flex items-center justify-between p-2 leading-tight md:p-4">
              <h1 className="text-lg">
                <a className="text-black no-underline hover:underline" href="#">
                  Quantum Jim
                </a>
              </h1>
              <p className="text-grey-darker text-sm">11/1/19</p>
            </header>

            <footer className="flex items-center justify-between p-2 leading-none md:p-4">
              <a
                className="flex items-center text-black no-underline hover:underline"
                href="#"
              >
                <img
                  alt="Placeholder"
                  className="block rounded-full"
                  src="https://picsum.photos/32/32/?random"
                />
                <p className="ml-2 text-sm">Asher M.</p>
              </a>
              <a
                className="text-grey-darker hover:text-red-dark no-underline"
                href="#"
              >
                <span className="hidden">Like</span>
                <i className="fa fa-heart"></i>
              </a>
            </footer>
          </article>
        </div>

        <div className="my-1 w-full px-1 duration-500 hover:scale-105 hover:shadow-xl md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src="https://picsum.photos/600/400/?random"
              />
            </a>

            <header className="flex items-center justify-between p-2 leading-tight md:p-4">
              <h1 className="text-lg">
                <a className="text-black no-underline hover:underline" href="#">
                  Quantum Craft
                </a>
              </h1>
              <p className="text-grey-darker text-sm">11/1/19</p>
            </header>

            <footer className="flex items-center justify-between p-2 leading-none md:p-4">
              <a
                className="flex items-center text-black no-underline hover:underline"
                href="#"
              >
                <img
                  alt="Placeholder"
                  className="block rounded-full"
                  src="https://picsum.photos/32/32/?random"
                />
                <p className="ml-2 text-sm">Asher M.</p>
              </a>
              <a
                className="text-grey-darker hover:text-red-dark no-underline"
                href="#"
              >
                <span className="hidden">Like</span>
                <i className="fa fa-heart"></i>
              </a>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
}
