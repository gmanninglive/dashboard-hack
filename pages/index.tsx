import dynamic from "next/dynamic";
import React, { Suspense, useState } from "react";
import Feed from "../components/feed";
const AppWebsiteVisits = dynamic(import("../components/chart"), {
  ssr: false,
});

const Home = () => {
  const [enquiryIsOpen, setEnquiryIsOpen] = useState(false);
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pb-32">
      <h1 className="sr-only">Page title</h1>
      {/* Main 3 column grid */}

      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
        {/* Left column */}
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <section aria-labelledby="section-1-title">
            <h2 className="sr-only" id="section-1-title">
              Section title
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow p-2 sm:p-6">
              <Suspense fallback={<Loading />}>
                <AppWebsiteVisits
                  title="Monthly spend"
                  subheader="(+43%) than last year"
                  chartLabels={[
                    "01/01/2003",
                    "02/01/2003",
                    "03/01/2003",
                    "04/01/2003",
                    "05/01/2003",
                    "06/01/2003",
                    "07/01/2003",
                    "08/01/2003",
                    "09/01/2003",
                    "10/01/2003",
                    "11/01/2003",
                  ]}
                  chartData={[
                    {
                      name: "Project A",
                      type: "bar",
                      fill: "solid",
                      stacked: true,
                      data: [
                        2300, 1100, 2200, 2700, 1300, 2200, 3700, 2100, 4400,
                        2200, 3000,
                      ],
                    },
                    {
                      name: "Project B",
                      type: "bar",
                      fill: "solid",
                      stacked: true,
                      data: [
                        4400, 5500, 4100, 6700, 2200, 4300, 2100, 4100, 5600,
                        2700, 4300,
                      ],
                    },
                    {
                      name: "Project C",
                      type: "bar",
                      fill: "solid",
                      stacked: true,
                      data: [
                        3000, 2500, 3600, 3000, 4500, 3500, 6400, 5200, 5900,
                        3600, 3900,
                      ],
                    },
                  ]}
                />
              </Suspense>
            </div>
          </section>
          <section aria-labelledby="section-1-title">
            <h2 className="sr-only" id="section-1-title">
              Section title
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow p-6">
              <NewProject />
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="grid grid-cols-1 gap-4">
          <section aria-labelledby="section-2-title">
            <h2 className="sr-only" id="section-2-title">
              Section title
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow p-6">
              <Feed />
            </div>
          </section>
        </div>
      </div>
      {enquiryIsOpen && (
        <QuoteModal open={enquiryIsOpen} setOpen={setEnquiryIsOpen} />
      )}
      <div className="fixed bottom-2 right-2 sm:bottom-12 sm:right-12 grid gap-6">
        <NewQuote onClick={() => setEnquiryIsOpen(true)} />
        <Chat />
      </div>
    </div>
  );
};

export default Home;

export const Loading = () => (
  <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 flex justify-center items-center">
    <div role="status">
      <svg
        aria-hidden="true"
        className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

import { PlusIcon } from "@heroicons/react/20/solid";
import { Chat, NewQuote } from "../components/action-buttons";

export function NewProject() {
  return (
    <div className="text-center">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">No projects</h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by creating a new project.
      </p>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New Project
        </button>
      </div>
    </div>
  );
}

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";

import {
  UsersIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { classNames } from "../utils";

const products = [
  {
    id: 1,
    name: "5t Digger",
    url: "https://example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1605910347035-59a2b94f2061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=256&q=80",
  },
  {
    id: 2,
    name: "10m Mobile Crane",
    url: "https://example.com",

    imageUrl:
      "https://images.unsplash.com/photo-1581360818940-0d8ddcb99409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=256&q=80",
  },
  {
    id: 3,
    name: "Cordless Drill",

    url: "https://example.com",

    imageUrl:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=256&q=80",
  },
];

const recent = products;

export function QuoteModal({ open, setOpen }: { open: any; setOpen: any }) {
  const [query, setQuery] = useState("");

  const filteredProducts =
    query === ""
      ? []
      : products.filter((product) => {
          return product.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <Dialog.Panel className="transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <Combobox onChange={() => {}}>
                  {({ activeOption }) => (
                    <>
                      <div className="relative flex">
                        <MagnifyingGlassIcon
                          className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <Combobox.Input
                          className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                          placeholder="Search Products"
                          onChange={(event) => setQuery(event.target.value)}
                        />
                        <button onClick={() => setOpen(false)} className="px-4">
                          <XMarkIcon
                            className="pointer-events-none h-6 w-6 text-gray-800"
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      {(query === "" || filteredProducts.length > 0) && (
                        <Combobox.Options
                          as="div"
                          static
                          hold
                          className="flex divide-x divide-gray-100"
                        >
                          <div
                            className={classNames(
                              "max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4",
                              activeOption && "sm:h-96"
                            )}
                          >
                            {query === "" && (
                              <h2 className="mt-2 mb-4 text-xs font-semibold text-gray-500">
                                Recent searches
                              </h2>
                            )}
                            <div className="-mx-2 text-sm text-gray-700">
                              {(query === "" ? recent : filteredProducts).map(
                                (product) => (
                                  <Combobox.Option
                                    as="div"
                                    key={product.id}
                                    value={product}
                                    className={({ active }) =>
                                      classNames(
                                        "flex cursor-default select-none items-center rounded-md p-2",
                                        active && "bg-gray-100 text-gray-900"
                                      )
                                    }
                                  >
                                    {({ active }) => (
                                      <>
                                        <img
                                          src={product.imageUrl}
                                          alt=""
                                          className="h-8 w-8 flex-none rounded-full"
                                        />
                                        <span className="ml-3 flex-auto truncate">
                                          {product.name}
                                        </span>
                                        {active && (
                                          <ChevronRightIcon
                                            className="ml-3 h-5 w-5 flex-none text-gray-400"
                                            aria-hidden="true"
                                          />
                                        )}
                                      </>
                                    )}
                                  </Combobox.Option>
                                )
                              )}
                            </div>
                          </div>

                          <div className="hidden h-96 w-1/2 flex-none flex-col justify-between divide-y divide-gray-100 overflow-y-auto sm:flex">
                            <div className="relative">
                              <Combobox.Input
                                className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                                placeholder="Add to Project"
                                onChange={() => {}}
                                // onChange={(event) => setQuery(event.target.value)}
                              />
                            </div>
                            <div className="flex-none p-6 ">
                              <div className="text-xl font-bold text-right">
                                Estimate: <span>£0.00</span>
                              </div>
                              <button
                                type="button"
                                className="text-center mt-6 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                Send enquiry
                              </button>
                            </div>
                          </div>
                        </Combobox.Options>
                      )}

                      {query !== "" && filteredProducts.length === 0 && (
                        <div className="py-14 px-6 text-center text-sm sm:px-14">
                          <WrenchScrewdriverIcon
                            className="mx-auto h-6 w-6 text-gray-400"
                            aria-hidden="true"
                          />
                          <p className="mt-4 font-semibold text-gray-900">
                            No products found
                          </p>
                          <p className="mt-2 text-gray-500">
                            We couldn’t find anything with that term. Please try
                            again.
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </Combobox>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
