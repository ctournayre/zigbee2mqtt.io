"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[87600],{380964:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-490c8e72","path":"/devices/ICTC-G-1.html","title":"IKEA ICTC-G-1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA ICTC-G-1 control via MQTT","description":"Integrate your IKEA ICTC-G-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Legacy integration","slug":"legacy-integration","link":"#legacy-integration","children":[]},{"level":3,"title":"Recommendation","slug":"recommendation","link":"#recommendation","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1709671190000},"filePathRelative":"devices/ICTC-G-1.md"}')},952110:(e,n,a)=>{a.r(n),a.d(n,{default:()=>y});var t=a(166252);const i=(0,t._)("h1",{id:"ikea-ictc-g-1",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#ikea-ictc-g-1","aria-hidden":"true"},"#"),(0,t.Uk)(" IKEA ICTC-G-1")],-1),s=(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th"),(0,t._)("th")])],-1),l=(0,t._)("tr",null,[(0,t._)("td",null,"Model"),(0,t._)("td",null,"ICTC-G-1")],-1),o=(0,t._)("td",null,"Vendor",-1),d=(0,t._)("tr",null,[(0,t._)("td",null,"Description"),(0,t._)("td",null,"TRADFRI wireless dimmer")],-1),r=(0,t._)("tr",null,[(0,t._)("td",null,"Exposes"),(0,t._)("td",null,"battery, action, linkquality")],-1),c=(0,t._)("tr",null,[(0,t._)("td",null,"Picture"),(0,t._)("td",null,[(0,t._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ICTC-G-1.png",alt:"IKEA ICTC-G-1"})])],-1),u=(0,t._)("h2",{id:"notes",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,t.Uk)(" Notes")],-1),p=(0,t._)("h3",{id:"pairing",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,t.Uk)(" Pairing")],-1),h={href:"https://github.com/Koenkk/zigbee2mqtt/issues/620",target:"_blank",rel:"noopener noreferrer"},m=(0,t.uE)('<h3 id="legacy-integration" tabindex="-1"><a class="header-anchor" href="#legacy-integration" aria-hidden="true">#</a> Legacy integration</h3><p>By default (for backwards compatibility purposes) the legacy integration is enabled. For new users it is recommended to <strong>disable</strong> this as it has several fundamental problems. To disable the legacy integration add the following to your <code>configuration.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">&#39;0xabc457fffe679xyz&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_remote\n    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The information below only applies to the legacy integration.</p><h3 id="recommendation" tabindex="-1"><a class="header-anchor" href="#recommendation" aria-hidden="true">#</a> Recommendation</h3><p>This device sends multiple messages in short time period with the same payload. It&#39;s worth setting <code>debounce</code> option with <code>debounce_ignore: - action</code> to throttle them without losing unique action payloads.</p><p>E.g. (devices.yaml)</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">&#39;0xabc457fffe679xyz&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_remote\n    <span class="token key atrule">debounce</span><span class="token punctuation">:</span> <span class="token number">0.5</span>\n    <span class="token key atrule">debounce_ignore</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> action\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To find optimal &quot;smoothness&quot; play with debounce time or if you need all unique rotation steps consider adding <code>brightness</code> to <code>debounce_ignore</code> option</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">&#39;0xabc457fffe679xyz&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_remote\n    <span class="token key atrule">debounce</span><span class="token punctuation">:</span> <span class="token number">0.1</span>\n    <span class="token key atrule">debounce_ignore</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> action\n    <span class="token punctuation">-</span> brightness\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',10),g=(0,t._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,t.Uk)(" OTA updates")],-1),b=(0,t._)("h2",{id:"options",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,t.Uk)(" Options")],-1),v=(0,t.uE)('<ul><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Note: will only work when legacy: false is set. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>brightness_move_to_level</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),k={},y=(0,a(983744).Z)(k,[["render",function(e,n){const a=(0,t.up)("RouterLink"),k=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.kq)(" !!!! "),(0,t.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,t.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,t.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,t.kq)(" !!!! "),i,(0,t._)("table",null,[s,(0,t._)("tbody",null,[l,(0,t._)("tr",null,[o,(0,t._)("td",null,[(0,t.Wm)(a,{to:"/supported-devices/#v=IKEA"},{default:(0,t.w5)((()=>[(0,t.Uk)("IKEA")])),_:1})])]),d,r,c])]),(0,t.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,p,(0,t._)("p",null,[(0,t.Uk)("To factory reset the TRADFRI wireless dimmer (ICTC-G-1) press the button 4 times (so the red lights starts blinking). After the blinks you might be willing to rotate the dimmer like you are trying to control your lights. It will prevent the device from going to sleep and ensure successful pairing. In case the dimmer was recognized but no actions seems to be detected, try to restart Zigbee2MQTT. See "),(0,t._)("a",h,[(0,t.Uk)("IKEA TRADFRI wireless dimmer (ICTC-G-1) not pairing"),(0,t.Wm)(k)]),(0,t.Uk)(".")]),m,(0,t.kq)(" Notes END: Do not edit below this line "),g,(0,t._)("p",null,[(0,t.Uk)("This device supports OTA updates, for more information see "),(0,t.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,t.w5)((()=>[(0,t.Uk)("OTA updates")])),_:1}),(0,t.Uk)(".")]),b,(0,t._)("p",null,[(0,t._)("em",null,[(0,t.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.w5)((()=>[(0,t.Uk)("How to use device type specific configuration")])),_:1})])]),v])}]])}}]);