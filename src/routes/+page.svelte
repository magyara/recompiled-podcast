<script>
  import { onMount } from "svelte";
  import Nav from "$lib/components/Nav.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import EpisodeList from "$lib/components/EpisodeList.svelte";
  import Hosts from "$lib/components/Hosts.svelte";
  import Footer from "$lib/components/Footer.svelte";

  export let data;

  let active = "home";
  const spotifyShowUrl = "https://open.spotify.com/show/7qAjYVQdRf2pLIHGBF8g24";
  const creatorsUrl =
    "https://creators.spotify.com/pod/profile/abi-lovelace/episodes";
  const sectionIds = ["home", "episodes", "hosts", "about"];

  /** @param {string} id */
  function navigate(id) {
    active = id;
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    }
  }

  function updateActiveSection() {
    const scrollPosition = window.scrollY + 120;
    let current = "home";

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.offsetTop <= scrollPosition) {
        current = id;
      }
    }

    active = current;
  }

  onMount(() => {
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  });

  function openSpotifyShow() {
    window.open(spotifyShowUrl, "_blank", "noopener");
  }

  function openCreatorsPage() {
    window.open(creatorsUrl, "_blank", "noopener");
  }
</script>

<Nav {active} onNavigate={navigate} onListen={openCreatorsPage} />
<div id="home">
  <Hero onListen={openSpotifyShow} />
</div>
<div id="episodes">
  <EpisodeList episodes={data.episodes} />
</div>
<Hosts />
<Footer />
