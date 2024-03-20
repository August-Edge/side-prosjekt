import { ProjectList } from "./components/project-list";
import { NoodleHelp } from "./components/noodle-help";
export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-5xl"> August's playhouse</h1> 
      <h3 className="text-3xl">Nå blire morro!</h3>
      <NoodleHelp/>
      <h2 className="text-3xl">Quote of the day</h2>
      <h4>Rick Ross: Damn, life so short. Fuck it, ion wanna go to court.</h4>
      <p></p>
      <ProjectList/>
    </div>
    );
}
