import { ArrowCircleRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Event(){

    const {slug} = useParams<{slug: string}>()

    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug ? (
                    <Video lessonSlug={slug} />
                )  : (
                    <div className="flex flex-1 flex-col items-center justify-center gap-1">
                        <div className="flex items-center justify-center">
                            <Logo />
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <span>Escolha algum conteúdo</span>
                            <ArrowCircleRight size={24} weight="light" className="animate-pulse text-green-500"/>
                        </div>
                    </div>
                )}
                <Sidebar />
            </main>
        </div>    
    )
}