import React from 'react'

const Blogs = () => {
    return (
        <div className="p-4 cursor-default w-[350px]">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                    className="h-48 sm:h-40 md:h-48 lg:h-40 xl:h-48 w-full object-cover object-center"
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                />
                <div className="p-4 sm:p-5 md:p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">
                        CATEGORY
                    </h2>
                    <h1 className="title-font text-lg sm:text-xl font-medium text-gray-900 mb-3 line-clamp-2">
                        The Catalyzer
                    </h1>
                    <p className="leading-relaxed mb-3 text-sm sm:text-base text-gray-600 line-clamp-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <a className="text-indigo-500 hover:text-indigo-600 inline-flex items-center text-sm font-medium transition-colors duration-200" href="#">
                            Learn More
                            <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <div className="flex items-center gap-3 text-gray-400 text-sm">
                            <span className="inline-flex items-center">
                                <svg
                                    className="w-4 h-4 mr-1"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                                1.2K
                            </span>
                            <span className="inline-flex items-center">
                                <svg
                                    className="w-4 h-4 mr-1"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                </svg>
                                6
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs