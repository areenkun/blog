<script lang="ts">
  import { site } from '$lib/config/site'
  import { footer as footerConfig } from '$lib/config/general'
  let className: string | undefined = undefined
  export { className as class }
  export let sticky: boolean = false
  export let rounded: boolean = false
</script>

<footer
  id="footer"
  class="footer footer-center bg-base-300 text-base-content shadow-inner p-8 {rounded
    ? 'rounded-box'
    : 'md:rounded-box'} {sticky ? 'sticky bottom-0 z-0 md:static' : ''} {className ?? ''}">
  <div class="prose">
    <p>
      {#if footerConfig.nav}
        {#each footerConfig.nav as { text, link }, i}
          <a href={link} rel="noopener noreferrer external" target="_blank">{text}</a>
          {#if i + 1 < footerConfig.nav.length}
            <span class="mr-1">·</span>
          {/if}
        {/each}
      <br />
      Developer Insights Hub
      <a
        rel="noopener noreferrer external"
        target="_blank"
        class="tooltip tooltip-secondary hover:text-secondary"
        data-tip="Developer Resource Center"
        href="https://blog.areen-c.is-a.dev/">
        (Dev Diary Dump)
      </a>
        <br />
      {/if}
      Copyright © 2019-{footerConfig.since && footerConfig.since !== new Date().toJSON().substring(0, 4)
        ? `${footerConfig.since} - ${new Date().toJSON().substring(0, 4)}`
        : new Date().toJSON().substring(0, 4)}
       <a
        rel="noopener noreferrer external"
        target="_blank"
        class="tooltip tooltip-secondary hover:text-secondary"
        data-tip="Areen el-Haq"
        href="https://areen-c.is-a.dev/">
           · arèén-c ·    
      </a>
      All rights reserved.
      {#if footerConfig.html}
        <br />
        {@html footerConfig.html}
      {/if}
    </p>
  </div>
</footer>
