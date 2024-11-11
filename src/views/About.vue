<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Tsun To</strong>(more often known as
        <strong>Peter</strong>). Currently a tool programmer in UK working on
        <a href="https://store.steampowered.com/app/2281620/Mars_Horizon_2_The_Search_for_Life/">Mars Horizon 2</a>. Have commercial experience in C#, Unity, WPF, Apple Arcade, and
        Android Development.
      </div>

      <div style="margin-top: 20px;">
        I've worked in both
        <router-link to="/game-projects">games</router-link>, and
        <router-link to="/other-projects">non-games</router-link> industries.
        Pragmatic and quick to adapt given my
        <router-link to="/resume">working experience</router-link> in various
        fields.
      </div>

      <div style="margin-top: 20px;">
        Inspired by the
        <a href="https://youtu.be/KRJkBxKv1VM">GDC talk from Guerilla Games</a>,
        I believe by empowering other team members to create content at their max capacity, my work
        will reach a wider audience and make a greater impact.
      </div>

      <div style="margin-top: 40px;">
        You can reach me through
        <a href="mailto:peter789b@gmail.com">emails</a>
        or <router-link to="/contact">through here</router-link>.
      </div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Peter" />
    </div>

    <div style="clear:both"></div>

    <div style="margin-top:20px; margin-bottom:20px;">
      <a
        class="download-link"
        href="d/Resume - Tsun To - Game Programmer.pdf"
        target="_blank"
        ><i class="fa fa-download fa-lg fa-fw"></i>Resume(PDF)</a
      >
      <div style="clear:both"></div>
    </div>
  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}
</style>
