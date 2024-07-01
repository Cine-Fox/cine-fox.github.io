import{_ as s,c as a,o as e,a1 as i}from"./chunks/framework.CdEAfm75.js";const F=JSON.parse('{"title":"External SSD","description":"","frontmatter":{},"headers":[],"relativePath":"external_ssd.md","filePath":"external_ssd.md","lastUpdated":1719825753000}'),t={name:"external_ssd.md"},n=i(`<h1 id="external-ssd" tabindex="-1">External SSD <a class="header-anchor" href="#external-ssd" aria-label="Permalink to &quot;External SSD&quot;">​</a></h1><p>Use External SSD with USB 3.0 in Pi5</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>External SSD is also a common storage way, like Samsung T5, T7. It can be easily removed and plugged into a computer to edit your files. However, after <a href="https://github.com/schoolpost" target="_blank" rel="noreferrer">Csaba Nagy</a> test, the read and write speed of USB3.0 is limited on Pi5. Here are his original words in Discord:</p><blockquote><p>In general I would recommend the CFE HAT if you want to do above 30p or the 16-bit mode ( which is limited to 25p ) as those can easily exceed 400MB/s +</p></blockquote><p>Therefore, if it is not used for high FPS and high-quality shooting, then External SSD can meet the requirements. Otherwise, <a href="/cfehat.html">RPI5-CFE-Hat</a> is still recommended.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><ol><li>Flash image, you can do <a href="/software.html#install-cine-fox">this step</a> first.</li><li>Run command</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/cinepi/udev-media-automount.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> udev-media-automount</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> udevadm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> control</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --reload-rules</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> udevadm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> trigger</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reboot</span></span></code></pre></div><p>Now it can auto mount your SSD now.</p>`,10),l=[n];function h(o,r,d,p,k,c){return e(),a("div",null,l)}const g=s(t,[["render",h]]);export{F as __pageData,g as default};
