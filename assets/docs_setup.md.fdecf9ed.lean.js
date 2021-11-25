import"./index.56618267.js";import{_ as n,A as s,c as a,o as t,m as p}from"./app.e7f9f7fe.js";const o={components:{Alert:s}},v=`{"title":"Installation","description":"","frontmatter":{},"headers":[{"level":2,"title":"NPM","slug":"npm"},{"level":3,"title":"React","slug":"react"},{"level":3,"title":"Vue 3","slug":"vue-3"},{"level":3,"title":"Angular","slug":"angular"},{"level":3,"title":"Svelte","slug":"svelte"},{"level":2,"title":"Browser (UMD)","slug":"browser-umd"},{"level":3,"title":"Vue","slug":"vue"},{"level":2,"title":"Browsers Supported","slug":"browsers-supported"},{"level":3,"title":"Why AgnosticUI doesn't support IE11","slug":"why-agnosticui-doesn-t-support-ie11"}],"relativePath":"docs/setup.md","lastUpdated":1637670811122}`,e=p(`__VP_STATIC_START__<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h1><p><em>Before you setup AgnosticUI, we recommend you first have a look at the <a href="#browsers-supported">browsers supported</a> list.</em></p><div class="mbs16"></div><p>Presently, the most reliable way to use AgnosticUI is ES modules via a package manager.</p><div class="mbs16"></div><h2 id="npm" tabindex="-1">NPM <a class="header-anchor" href="#npm" aria-hidden="true">#</a></h2><div class="mbs16"></div><div class="mbe16"></div><p>In your project&#39;s top-level directory install the AgnosticUI package of your choice:</p><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> agnostic-PACKAGE <span class="token comment"># or yarn add agnostic-PACKAGE</span>
</code></pre></div><p>For example, to install the <code>agnostic-react</code> package you&#39;d do:</p><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> agnostic-react <span class="token comment"># or yarn add agostic-react</span>
</code></pre></div><p>From there you can follow the appropriate framework-specific instructions below\u2026</p><h3 id="react" tabindex="-1">React <a class="header-anchor" href="#react" aria-hidden="true">#</a></h3><p>To use the <code>agnostic-react</code> package in your project do the following:</p><div class="mbe16"></div><ul><li><strong>Step 1:</strong> Import AgnosticUI&#39;s common CSS</li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;agnostic-react/dist/common.min.css&quot;</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><strong>Step 2:</strong> Import the AgnosticUI component-specific CSS</li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;agnostic-react/dist/esm/index.css&quot;</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><strong>Step. 3:</strong> Import the AgnosticUI component(s) you&#39;d like to use</li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-react&quot;</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><strong>Step 4:</strong> Use</li></ul><div class="language-jsx"><pre><code><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&#39;Alerts should be used for timely information.&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">YourComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Alert</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>message<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Alert</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Go</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="vue-3" tabindex="-1">Vue 3 <a class="header-anchor" href="#vue-3" aria-hidden="true">#</a></h3><p><strong>AgnosticUI supports Vue 3 only!</strong></p><div class="mbe24"></div><p>To use the agnostic-vue package in your project do the following:</p><div class="mbe16"></div><ul><li><strong>Step 1:</strong> Import AgnosticUI&#39;s common CSS</li></ul><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token string">&#39;agnostic-vue/dist/common.min.css&#39;</span>
<span class="token comment">// ...</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><strong>Step 2:</strong> Import the AgnosticUI component-specific CSS</li></ul><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// ...</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-vue/dist/index.css&quot;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><strong>Step. 3:</strong> Import the AgnosticUI component(s) you&#39;d like to use and declare component prop</li></ul><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// ...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;AlertExample&quot;</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    Alert<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><strong>Step 4:</strong> Use in your template</li></ul><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span>
    <span class="token attr-name">isBorderLeft</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>Example alert<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="angular" tabindex="-1">Angular <a class="header-anchor" href="#angular" aria-hidden="true">#</a></h3><p>To use the <code>agnostic-angular</code> package in your project do the following:</p><div class="mbe16"></div><p><strong>Step 1:</strong> Import AgnosticUI&#39;s common CSS</p><div class="mbe16"></div><p>In your Angular configuration (likely <code>angular.json</code>) ensure you&#39;re including the common AgnosticUI styles. Here&#39;s example if you&#39;ve used <code>nx</code>:</p><div class="mbe16"></div><div class="language-json"><pre><code>    <span class="token property">&quot;yourapp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      ...
      <span class="token property">&quot;architect&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            ...
            <span class="token property">&quot;styles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dist/common.min.css&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><div class="mbe16"></div><p><strong>Step. 2:</strong> Add AgnosticUI&#39;s <code>AgModule</code> module:</p><div class="language-js"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/platform-browser&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;agnostic-angular&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AppComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.component&#39;</span><span class="token punctuation">;</span>

@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  declarations<span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
  imports<span class="token operator">:</span> <span class="token punctuation">[</span>BrowserModule<span class="token punctuation">,</span> AgModule<span class="token punctuation">]</span><span class="token punctuation">,</span>
  providers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  bootstrap<span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p><strong>Step. 3:</strong> Now you can use AgnosticUI in your Angular components:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  selector<span class="token operator">:</span> <span class="token string">&#39;your-component&#39;</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;ag-avatar text=&quot;AB&quot;&gt;&lt;/ag-avatar&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">YourComponent</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><div class="mbs24"></div><p><em>You can also find an example application configured in AgnosticUI&#39;s Angular workspace at <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/angular.json" target="_blank" rel="noopener noreferrer">agnostic-angular/angular.json</a>, and view its <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/apps/examples/src/app/app.component.html" target="_blank" rel="noopener noreferrer">main app template</a>. See the getting started <a href="https://github.com/AgnosticUI/agnosticui/tree/master/agnostic-angular#getting-started" target="_blank" rel="noopener noreferrer">README</a> to run the Angular example app locally.</em></p><div class="mbe16"></div><h3 id="svelte" tabindex="-1">Svelte <a class="header-anchor" href="#svelte" aria-hidden="true">#</a></h3><p>To use the <code>agnostic-svelte</code> package in your project do the following:</p><div class="mbe16"></div><ul><li><strong>Step 1:</strong> Import AgnosticUI&#39;s common CSS</li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token string">&quot;../node_modules/agnostic-svelte/dist/common.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><strong>Step. 2:</strong> Import the AgnosticUI component(s) you&#39;d like to use and declare component prop</li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// ...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;agnostic-svelte&#39;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><strong>Step 3:</strong> Use in Svelte template</li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ... --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Go<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ... --&gt;</span>
</code></pre></div><h2 id="browser-umd" tabindex="-1">Browser (UMD) <a class="header-anchor" href="#browser-umd" aria-hidden="true">#</a></h2><h3 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-hidden="true">#</a></h3><p>Currently, <code>agnostic-vue</code>&#39;s support for CDN / UMD via <code>&lt;script&gt;</code> tags is unreliable and we suggest you follow the ES module installation from earlier until that stabilizes.</p><h2 id="browsers-supported" tabindex="-1">Browsers Supported <a class="header-anchor" href="#browsers-supported" aria-hidden="true">#</a></h2><p>The following is the current <code>.browserlistrc</code> configuration as per the <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">Can I Use</a> database:</p><div class="language-shell"><pre><code>last <span class="token number">2</span> versions and <span class="token operator">&gt;</span> <span class="token number">2</span>%
last <span class="token number">2</span> versions
Firefox ESR
not dead
not IE <span class="token number">11</span>
maintained node versions
not op_mini all
</code></pre></div><h3 id="why-agnosticui-doesn-t-support-ie11" tabindex="-1">Why AgnosticUI doesn&#39;t support IE11 <a class="header-anchor" href="#why-agnosticui-doesn-t-support-ie11" aria-hidden="true">#</a></h3><p>We use CSS <a href="https://css-tricks.com/css-logical-properties-and-values/" target="_blank" rel="noopener noreferrer">logical properties</a> which support <span class="quoted">direction-agnostic</span> <a href="https://css-tricks.com/almanac/properties/w/writing-mode/" target="_blank" rel="noopener noreferrer">writing modes</a> (e.g. <code>horizontal-tb</code>, <code>vertical-rl</code>, etc.) <em>See <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode" target="_blank" rel="noopener noreferrer">MDN writing-mode docs</a></em> to learn more.</p>__VP_STATIC_END__`,70),c=[e];function l(r,i,u,k,d,g){return t(),a("div",null,c)}var f=n(o,[["render",l]]);export{v as __pageData,f as default};