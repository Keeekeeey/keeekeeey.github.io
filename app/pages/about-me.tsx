import SkillsTable from "./about-me-skills-table";

export default function AboutMePage (){

    return(
        <div>
            <div className="flex flex-row border-2 rounded p-2">
                <div className="">
                <header className="font-bold">My name is Kira Smith and I'm a developer seeking entry-level oppurtunites in software enginnering.</header>
                <div className="float-left mr-4 mb-4 w-32 h-32 min-h-30 min-w-30 rounded">
                    <img src='https://i.pinimg.com/736x/2d/1b/7a/2d1b7a9ec2057f97fe7107b210cb2615.jpg'></img>
                </div>
                <p>
                     
                    <strong>My journey started in technical arts,</strong> where I became confident in creating rigs,
                    weight painting and programming tools for the artists to use; <strong>which taught me how 
                    to troubleshoot complex technical problems and collaborate with cross-functional teams.</strong>
                </p>
                <p>
                    Over the past two years,<strong> I have been working to find oppurtunites
                    that broaden my knowledge of computer science and challenge me to understand more. </strong>
                    This columinated in me developing a full-stack application using <strong>React, Next.js, PostgreSQL 
                    and a personally trained fork of Ultralytics' YOLO model</strong>.
                </p>
                <p>
                    I am eagar to join a team where I can contribute while learning from experienced engineers.
                </p>
                </div>
                
            </div>
            <div className="p-2 min-h-10 bg-[url(https://i.pinimg.com/736x/49/22/b7/4922b7524905b3e25d32a8aa50133280.jpg)]"></div>
            <div className="flex flex-row border-2">
                <div className="basis-2/3 rounded bg-window-foreground">
                    <header className="font-bold items-center text-center border border-dashed p-3">
                        Skills</header>
                        <SkillsTable/>
                </div>
                
                <div className="basis-1/2 rounded border border-dashed bg-window-foreground">
                    <div className="font-bold border border-dashed p-3 text-center">Companies I've worked for</div>
                    <div className="flex flex-row p-2">
                    <div className="basis-1/4"></div>
                    <div className="basis-2/4 flex justify-center items-center gap-2">
                        <button className="bg-accent rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                            <img 
                            alt ='Apple Icon'
                            className="max-h-10 max-w-10 min-h-10 min-w-10" src="https://cdn-icons-png.flaticon.com/128/0/747.png"></img>
                        </button>
                        <button className="bg-accent rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                            <img 
                            alt ='Venture out Icon'
                            className="max-h-10 max-w-10" src='https://media.licdn.com/dms/image/v2/D4E0BAQEFsaef3WUVvg/company-logo_100_100/company-logo_100_100/0/1704902921627/ventr_out_logo?e=1771459200&v=beta&t=nQpoGMB_Uigs492n_VA3uOGlhAPvuuM67gjQop0iiwM'></img>
                        </button>
                        <button className="bg-accent rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                            <img 
                            alt ='Venture out Icon'
                            className="max-h-10 max-w-10 min-h-10 min-w-10" src='https://s3.amazonaws.com/cdn.kg.io/logos/logo-small.png'></img>
                        </button>
                    </div>
                    <div className="basis-1/4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}