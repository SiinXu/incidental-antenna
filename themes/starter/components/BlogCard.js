'use client'

import { FollowerPointerCard } from "./ui/following-pointer"

export function BlogCard() {
  return (
    <div className="w-80">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
          <div className="aspect-w-16 aspect-h-10 xl:aspect-w-16 xl:aspect-h-10 relative w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
            <img
              src={blogContent.image}
              alt="thumbnail"
              className={`transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl`}
            />
          </div>
          <div className="p-4">
            <h2 className="my-4 text-lg font-bold text-zinc-700 dark:text-zinc-300">
              {blogContent.title}
            </h2>
            <h2 className="my-4 text-sm font-normal text-zinc-500 dark:text-zinc-400">
              {blogContent.description}
            </h2>
            <div className="mt-10 flex flex-row items-center justify-between">
              <span className="text-sm text-gray-500">{blogContent.date}</span>
              <div className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
                Read More
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  )
}

const blogContent = {
  slug: "Making-Sense-of-React-Server-Components",
  author: "Nextify",
  date: "26th March, 2024",
  title: "Making Sense of React Server Components",
  description:
    "So, here's something that makes me feel old: React celebrated its 10th birthday this year!",
  image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  authorAvatar: "https://avatars.githubusercontent.com/u/124599?v=4",
}

function TitleComponent({
  title,
  avatar,
}) {
  return (
    <div className="flex flex-row items-center">
      <div className="relative h-8 w-8 overflow-hidden rounded-full">
        <img
          src={avatar}
          alt="avatar"
          className="absolute h-full w-full object-cover"
        />
      </div>
      <div className="ml-4 flex flex-col">
        <h3 className="text-sm font-bold text-zinc-700 dark:text-zinc-300">{title}</h3>
      </div>
    </div>
  )
}
