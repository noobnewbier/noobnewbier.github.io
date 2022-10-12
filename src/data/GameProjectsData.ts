import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-frogger-in-toy-town", "Frogger in Toy Town", "img/projects/project-frogger.jpg", 
    `
    <div class="paragraph">
        During my time with <a href="https://www.q-games.com/en/">Q-Games</a>, I contributed to the continuous development of the famous franchise <a href="https://apps.apple.com/us/app/frogger-in-toy-town/id1464883929">Frogger in Toy Town</a>. 
        Some of the more significant works include releasing a major update featuring a whole new game mode and the new "miniature" collectibles. 
        The release was a huge success for the company as we see a spike in both retention rate and playtime.
    </div>

    <div class="paragraph">
        In the process, I contributed by creating an interactive user interface that supports various input devices ranging from standard gamepads to the apple tv remote. 
        I also assisted in other general bug fixes for gameplay.
    </div>

    <div class="paragraph">
        My contribution is recognized and is therefore transitioned to another team to work on another work in progress project. In which I am responsible for both gameplay features and the UI.
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/project-frogger-endurance-gameplay.jpg" alt="Gameplay on the endurance mode(new game mode of the update)" />
        <img class="phone-screenshot" src="img/projects/project-frogger-gameplay.jpg" alt="Gameplay on the adventure mode" />
    </div>

    <div class="paragraph">
        Highlights:
        <ul>
            <li>Creating interactive UI that supports various input devices and has a heavy focus on UX.</li>
            <li>Experience in developing for Apple Arcade's product in a double-A studio.</li>
            <li>Experience in localization to help the content reach a wider audience. Capable of supporting some of the "harder to deal with" languages such as Japanese and Arabic.</li>
        </ul>
    </div>

    `, "#23bd69", false, true),

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
    `, "#e80fb7"),

    new ProjectData("project-green2", "Frogger and the Rumbling Ruins", "img/projects/frogger-in-rumbling-ruins.jpg", `
    <div class="paragraph">
        After working for roughly 5-months for the <a href="https://apps.apple.com/us/app/frogger-in-toy-town/id1464883929">Frogger</a> Team in <a href="https://www.q-games.com/en/">Q-Games</a>, 
        my quality of work is recognized and therefore transitioned into another team to help work on a project that was still under heavy development.
    </div>
    
    <div class="paragraph"> 
        In the process, I contributed by cooperating with our animator to bring our main character to life in a 3D grid-based environment, 
        implementing physics-related gameplay features, and developing most of the UIs for both the prototype and the final product. I am glad that the game was generally well received.
    </div>
    
    <div class="paragraph center">
        <iframe  width="560" height="315" src="https://www.youtube.com/embed/XnHyJo7cm6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    
    <div class="paragraph">
        I am hence tainted with general gameplay programming and elementary maths for game development.
    </div>

    <div class="paragraph">
        Highlights :
        <ul>
            <li>Cooperating with animators to create commercial-level animation for the main character.</li>
            <li>Implementing gameplay features that are vital to the core gameplay.</li>
            <li>Developing custom tools for Unity editor to assist debugging.</li>
            <li>Creating interactive UI for commercial purposes.</li>
        </ul>
    </div>
    
    `, "#5a78af", false, true),

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
    `, "#383838")
];