import { useEffect,useRef, useState } from "react";
import competitionImage from '../../public/competitions.svg'
import musicGenre from '../../public/competitionGenre/musicGenre.svg'
import gameGenre from '../../public/competitionGenre/Game.svg'
import danceGenre from '../../public/competitionGenre/Dance.svg'
import allGenre from '../../public/competitionGenre/allGenre.svg'
import nrityaBG from '../../public/competitionGenre/nrityaBg.svg'
const genres=[{
    source:allGenre.src,
    genreId:1,
    genreName:'All Categories',
    genreDescription:"All categories"
},{
    source:musicGenre.src,
    genreId:2,
    genreName:'Music',
    genreDescription:"Music Competitions"
},{
    source:gameGenre.src,
    genreId:3,
    genreName:"Games",
    genreDescription:'Gameing and Tech Competitions',
},{
    source:danceGenre.src,
    genreId:4,
    genreName:'Dance',
    genreDescription:'Dance Competitions',
}]
const competitons=[{
    source:nrityaBG.src,
    genreId:1,
    compName:"Nritya",
    by:"By Genesis",
    compDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quam fuga quibusdam vel quod, tempora minima consectetur natus. Commodi consequuntur ea consequatur temporibus at nostrum quos rerum error dolore odio.' ,
    date:"",
    venue:"",
}]
const CompetitionGenre=({genre,handleGenreIdChange})=>{
    return(
        <div className="flex flex-col justify-center flex-1 gap-2 hover:scale-150" onClick={()=>handleGenreIdChange(genre.id)}>
            <img src={genre.source} alt={genre.genreDescription} />
            <div className="text-center">{genre.genreName}</div>
        </div>
    )
}
const CompetitionBLock=({competition})=>{
    return(
        <div className="competition min-h-8">
            <div className="border bg-[url(../../public/competitionGenre/border.svg)]" >
                <div className="innerBorder bg-[url(../../public/competitionGenre/innerBorder.svg)]" >
                   <div className="bgImg">
                    <h1>{competition.compName}</h1>
                    <img src="../../public/competitionGenre/innerBorder.svg" alt="Arrow" />
                    <p>{competition.by}</p>
                   </div>
                </div>
            </div>
        </div>
    )
}
export default function Competitioon(){
    const [genreId,setGenreId]=useState(1);
    function handleGenreIdChange({genreId}){
        setGenreId(genreId)
    }
    return (
        <div id="competitions" className="flex flex-col justify-center mx-auto max-w-7xl gap-4 px-4">
            <img src={competitionImage.src} alt="Competitions Title" />
            <div className="genreAndCompCont">
                <div className="genres flex flex-row gap-6 mt-8">
                    {genres.map((genre)=>{
                        return (<CompetitionGenre genre={genre} handleGenreIdChange={handleGenreIdChange}/>)
                    })}
                </div>
                <div className="comps">
                    {
                        competitons.map((competition)=>{
                            if(competition.genreId==genreId)
                            return (<CompetitionBLock competition={competition}/>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}