<template>
  <div>
    <h1>Let's get in touch</h1>

    <div style="margin-bottom:40px;">
      Feel free to send me an email or message me in LinkedIn.
    </div>

    <ul>
      <li>
        <i class="fa fa-envelope-o fa-lg fa-fw"></i>
        <a href="mailto:peter789b@gmail.com">peter789b@gmail.com</a>
      </li>
      <li>
        <i class="fa fa-linkedin fa-lg fa-fw" style="vertical-align: -5%;"></i>
        <a href="https://linkedin.com/in/tsun-to-gamedev" target="_blank"
          >linkedin.com/in/tsun-to-gamedev</a
        >
      </li>
      <li>
        <i class="fa fa-github fa-lg fa-fw"></i>
        <a href="https://github.com/noobnewbier" target="_blank"
          >github.com/noobnewbier</a
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding-inline-start: 0px;
}

li {
  line-height: 1.8em;
  font-size: 1.2em;
}

@media only screen and (min-width: 620px) {
  ul {
    padding-inline-start: 40px;
  }

  li {
    line-height: 2em;
    font-size: 1.4em;
  }
}

i {
  margin-right: 20px;
}
</style>
