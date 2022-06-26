import { LogoRocketseat } from "./LogoRocketseat";

export function Footer(){
    return(
        <div className="w-full pb-[1.25rem] px-5 flex items-center justify-center bg-black ">
            <div className="w-full max-w-[1100px] flex items-center justify-between border-t border-gray-600 text-gray-400">
                <div className="flex-1 flex items-center gap-3 pt-3">
                    <LogoRocketseat />
                    <span className="text-sm leading-relaxed">
                    Rocketseat- Todos os direitos reservados
                    </span>
                </div>
                <div className="text-sm leading-relaxed">
                    Políticas de privacidade
                </div>
            </div>
        </div>
    )
}