import SkillsTable from "./about-me-skills-table";

export default function AboutMePage (){

    return(
        <div className="p-4 md:overflow-auto md:max-w-200">
            <div className="flex flex-row md:border-2 rounded p-2 ">
                <div className="">
                <header className="font-bold lg:text-lg md:text-md bg-window-foreground p-2 ">My name is Kira Smith and I'm a developer seeking entry-level opportunities
                    in software engineering.</header>
                <div className="float-left mr-4 mb-4 min-h-60 min-w-60 max-h-100 max-w-100 rounded">
                    <img src='https://i.pinimg.com/736x/2d/1b/7a/2d1b7a9ec2057f97fe7107b210cb2615.jpg'></img>
                </div>
                <p>
                     
                    <strong></strong> My journey started in technical arts, where I became
                     confident creating rigs, weight painting, and programming tools for artists—experience 
                     that taught me to <strong>troubleshoot complex technical problems and collaborate with 
                     cross-functional teams.</strong>
                </p>
                <p>
                    Over the past two years, I've worked to find opportunities that broaden my knowledge
                    of computer science and challenge my understanding. This culminated in developing a 
                    full-stack application using React, Next.js, PostgreSQL, and a personally trained fork 
                    of Ultralytics' YOLO model.
                </p>
                <p>
                    <strong>I am eagar to join a team where I can contribute while learning from 
                        experienced engineers.</strong>
                </p>
                </div>
                
            </div>
            <div className="p-2 min-h-10 bg-[url(https://i.pinimg.com/736x/49/22/b7/4922b7524905b3e25d32a8aa50133280.jpg)]"></div>
            <div className="flex flex-row md:border-2">
                <div className="basis-2/3 bg-window-foreground">
                        <SkillsTable/>
                </div>
                <div className="basis-1/2 border-l rounded bg-window-foreground">
                    <div className="font-bold p-3 text-center">Companies I've worked for</div>
                    <div className="flex flex-row p-2 border-b">
                    <div className="basis-1/4"></div>
                    <div className="basis-2/4 flex flex-col md:flex-row justify-center items-center text-center gap-2">
                    <a href='https://www.linkedin.com/company/apple/posts/?feedView=all'>
                        <button className="hover:cursor-pointer bg-window-header-light rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                            <img 
                            alt ='Apple Icon'
                            className="size-10" src="https://cdn-icons-png.flaticon.com/128/0/747.png"></img>
                        </button>
                        </a>
                        <a href='https://www.linkedin.com/company/ventr-out/'>
                        <button className="hover:cursor-pointer bg-window-header-light rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                            <img 
                            alt ='VentR-out Icon'
                            className="size-10" src='https://media.licdn.com/dms/image/v2/D4E0BAQEFsaef3WUVvg/company-logo_100_100/company-logo_100_100/0/1704902921627/ventr_out_logo?e=1771459200&v=beta&t=nQpoGMB_Uigs492n_VA3uOGlhAPvuuM67gjQop0iiwM'></img>
                        </button>
                        </a>
                        <a href='https://www.linkedin.com/company/koin-games/posts/?feedView=all'>
                        <button className="hover:cursor-pointer bg-window-header-light rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                            <img
                            alt ='Koin Icon'
                            className="size-10" src='https://s3.amazonaws.com/cdn.kg.io/logos/logo-small.png'></img>
                        </button>
                        </a>
                       
                    </div>
                    <div className="basis-1/4"></div>
                    </div>
                    <div className="font-bold border-b p-4 text-center justify-center">
                        <a href="https://docs.google.com/document/d/15v0Xzpo4t8l4ANTc3FjpkujUPwb9Fymqho-_yMLDHHM/edit?usp=sharing">
                        My Resume - TEMP LINK
                        </a>
                        </div>
                    <div className="font-bold p-3 text-center justify-center ">
                        <a href="https://www.linkedin.com/in/kira-smith-rigging/">
                            My Linkedin
                        </a></div>
                </div>
                
            </div>
        </div>
    );
}