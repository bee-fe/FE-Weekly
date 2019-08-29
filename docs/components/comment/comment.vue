<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
export default {
  name: "comment",
  data() {
    return {};
  },
  mounted() {
    const linkGitalk = document.createElement("link");
    linkGitalk.href = "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css";
    linkGitalk.rel = "stylesheet";
    document.body.appendChild(linkGitalk);
    let body = document.querySelector(".gitalk-container");
    let script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js";
    body.appendChild(script);
    script.onload = () => {
      const commentConfig = {
        clientID: "5d586ac3b9a1825cd400",
        clientSecret: "7836f8301165c3a7243066fbd508a36db3b28f7c",
        repo: "FE-Weekly",
        owner: "G-Grant",
        admin: ["G-Grant"],
        id: location.pathname,
        distractionFreeMode: false
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render("gitalk-container");
    };
  }
};
</script>
