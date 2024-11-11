import ProjectData from "@/data/ProjectData";

export default [
    new ProjectData("noneb-ni", "Ongoing Personal Project", "img/projects/scene-demo.png", `
    <div class="paragraph">
        This is an experiment project primarily created for experiment, where I play with ideas such as custom editor tooling and try out new technology. 
    </div>
    
    <div class="paragraph">
        The project is for prototyping purposes and serves no commercial value. However it should serve a demo to my interest and ability. 
    </div>

    <div class="paragraph center">
        <img class="paragraph-img" src="img/projects/scene-demo.png"/>
    </div>

    <div class="paragraph">
        <div class="notice">
            Please feel free to poke with the source code <a href="https://github.com/noobnewbier/NonebNi">here</a>.
        </div>
    </div>
    
    `, "#1565c0"),

new ProjectData("project-procedural-tree-generation", "Procedural Tree Generation", "img/projects/project-proc-gen-tree.png", `
    <div class="paragraph">
        This is an experimental project I worked on to learn more about procedural generation and to play with another shiny new toy.
    </div>
    
    <div class="paragraph">
        The project is for prototyping purposes and serves no commercial value. However, the possibility of creating a wide variety of trees using such a simple algorithm is fascinating to me.
    </div>

    <div class="paragraph">
        I hence have a basic understanding of mesh manipulation and procedural generation.
    </div>
    <div class="paragraph center">
        <img class="paragraph-img" src="img/projects/procgen-tree-3.png"/>
    </div>

    <div class="paragraph">
        <div class="notice">
            Please feel free to poke with the source code <a href="https://github.com/noobnewbier/Transport-Oriented-Growth-Unity">here</a>.
            </br>
            Also, note that the algorithm was <a href="https://nickmcd.me/2020/10/19/transport-oriented-growth-and-procedural-trees/">created by Nick</a> and I held no credit for it. This work is done given Nick's acknowledgment.
        </div>
    </div>

    <div class="paragraph center">
        <img class="fix-300x300" src="img/projects/procgen-tree-1.jpg"/>
        <img class="fix-300x300" src="img/projects/procgen-tree-2.jpg"/>
    </div>
    `, "#383838"),

    new ProjectData("project-4", "Reinforcement Learning", "img/projects/project-towerdefense-rendered-cropped.jpg", `
    <div class="paragraph">
        This is an experimental project I worked on to learn some cutting-edge technologies and expose myself to various components of game development.

        </br>

        The primary purpose of the project is to explore the possibility of using <a href="https://github.com/noobnewbier/TowerDefense">Reinforcement Learning</a> in game development. 
        And more importantly, every programmer needs some new toys now and then :). 
        I also used this opportunity to try out some other things like procedural animation and 3D modeling.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
            <li>Ability to understand and incorporate cutting-edge technologies.</li>
            <li>Working and debugging third-party beta libraries.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
            Please feel free to poke with the source code <a href="https://github.com/noobnewbier/TowerDefense">here</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="paragraph-img" src="img/projects/towerdefense-gameplay-annotated.png" alt="Annotated Screenshot of gameplay" />
    </div>
    `, "#e80fb7")
]