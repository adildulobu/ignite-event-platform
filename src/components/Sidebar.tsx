import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

import { List, X } from 'phosphor-react'

const GET_LESSON_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            availableAt
            title
            slug
        }
    }
`

interface GetLessonsQueryResponse {
    lessons: {
      id: string;
      title: string;
      slug: string;
      availableAt: string;
      lessonType: 'live' | 'class';
    }[]
  }

export function Sidebar(){
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSON_QUERY)
    const [isOpen, setIsOpen] = useState(true)
    const { slug } = useParams<{ slug: string}>()

    function handleToggleSidebar(){
        setIsOpen(!isOpen)
    }

    useEffect(() =>{
        if (isOpen)
            setIsOpen(false)
    },[slug])

    return(
        <>
            <button
                onClick={handleToggleSidebar}
                className="absolute top-6 right-8 z-[49] flex items-start gap-2 text-white md:hidden md:items-start"
            >
                  <List weight="bold" width="24" height="24" />
            </button>
            <aside 
                className={`${
                            isOpen
                    ? 'fixed right-0 top-0 md:static md:flex'
                    : 'fixed -right-full top-0 md:static md:flex'
                    } z-50 mt-[1px]  max-h-full  w-screen animate-slideFromRight flex-col overflow-y-scroll
                    lg:w-[348px] bg-gray-700 p-6 border-l border-gray-600 transition-all scrollbar-thin
                    scrollbar-thumb-ignite-primary-dark scrollbar-track-green-500 md:w-[21.75rem]
                }`}
            >
                <div >
                    <span className="flex items-center justify-between font-bold text-2xl pb-6 mb-6 border-b border-gray-500 lg:justify-start">
                        Cronograma de aulas
                    </span>
                    <button
                        className="absolute top-7 right-8 z-[49] text-red-500 lg:hidden"
                        onClick={handleToggleSidebar}
                    >
                        <X weight="bold" width="24" height="24" />
                    </button>
                </div>
                

                <div className="flex flex-col gap-8">
                        {data?.lessons.map(lesson =>{
                                return(
                                    <Lesson
                                        key={lesson.id}
                                        title={lesson.title}
                                        slug={lesson.slug}
                                        availableAt={new Date(lesson.availableAt)}
                                        type={lesson.lessonType}
                                    />
                                )
                            })} 
                </div>
            </aside>
        </>
    )
}