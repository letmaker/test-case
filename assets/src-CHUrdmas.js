import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,I as c,J as l,K as u,L as d,M as f,N as p,O as m,Q as h,R as g,S as _,T as v,U as y,V as b,W as x,X as S,Y as C,Z as w,_ as T,a as E,b as D,c as O,d as k,et as A,f as j,g as M,h as N,j as P,k as F,l as I,m as L,nt as ee,o as te,p as ne,q as re,r as ie,t as ae,u as oe,v as se,w as R,x as ce,y as z,z as B}from"./graphics-CNyvjOPs.js";var le=class e extends B{resolution;format;version=0;_nearest;constructor(e){super(),this.resolution=e.resolution??1,this._nearest=e.scaleMode===`nearest`,this.format=e.format===`rgba16float`&&z.floatRenderable?`rgba16float`:`rgba8`,e.format===`rgba16float`&&this.format!==e.format&&console.warn(`[Liko] RenderTexture rgba16float unsupported; using rgba8`),this.resize(e.width,e.height)}static create(t){return new e(t)}get dynamic(){return!0}get premultiplied(){return!0}resize(e,t){if(this.destroyed)throw Error(`RenderTexture: target is destroyed`);let r=this.resolution;if(![e,t,r].every(e=>Number.isFinite(e)&&e>0)||Math.ceil(e*r)>z.maxTextureSize||Math.ceil(t*r)>z.maxTextureSize)throw RangeError(`RenderTexture: dimensions/resolution must be positive, finite and within device limits`);(e!==this.width||t!==this.height)&&(this.setBuffer(new n(Math.ceil(e*r),Math.ceil(t*r),this.format===`rgba16float`?this.format:void 0,this._nearest)),this.setSourceSize(e,t),this.trimRect.set(0,0,e,t),this.version++,this.notifyUpdate(`resize`))}complete(){this.version++,this.notifyUpdate(`content`)}getTilingTexture(){throw Error(`RenderTexture does not support TilingSprite or static tiling copies`)}},V=1e-9,ue=new WeakMap,de=new WeakMap,fe=new WeakMap,pe=class extends p{renderObject=new g(this);autoPlay=!0;constructor(e){super(),Object.assign(this.pp,{texture:B.BLANK,currentFrame:0,frameTime:0,eventCursor:-1,isPlaying:!1,isPaused:!1,speed:1,currentLoop:!0,configVersion:0,loadVersion:0,playVersion:0,loadingConfig:!1,settingProps:!1,autoWidth:!0,autoHeight:!0}),this.on(h.addedToStage,this._$onAddedToStage,this),this.on(h.removedFromStage,this._$onRemovedFromStage,this),this.setProps(e)}get isPlaying(){return this.pp.isPlaying}get speed(){return this.pp.speed}set speed(e){if(!Number.isFinite(e))throw Error(`ActionSprite.speed must be finite`);this.pp.speed=e>0?e:0}get width(){return super.width}set width(e){this.pp.autoWidth=e<0,super.width=e<0?this.pp.poster?.width??-1:e}get height(){return super.height}set height(e){this.pp.autoHeight=e<0,super.height=e<0?this.pp.poster?.height??-1:e}get url(){return this.pp.url}set url(e){let t=this.pp;if(t.url===e)return;t.url=e;let n=++t.configVersion;t.loadingConfig=!!e,t.currentAction=void 0,t.loopOverride=void 0,t.actions=void 0,t.frameTime=t.currentFrame=0,this._$invalidateAction(),e?t.configPromise=this._$loadConfig(e,n):(this.stop(),t.poster&&this._$loadPoster(t.poster))}get currentAction(){return this.pp.currentAction}set currentAction(e){let t=this.pp;t.currentAction!==e&&(e!==void 0&&t.actions&&!t.actions[e]&&!t.loadingConfig||(this._$invalidateAction(),t.currentAction=e,t.loopOverride=void 0,t.frameTime=t.currentFrame=0,t.currentLoop=t.actions?.[e??``]?.loop??!0,e===void 0?this.stop():t.settingProps||(!t.isPaused&&(t.isPlaying||this.autoPlay)&&this._$onStage()?this.play(e):this._$ensureAction())))}get currentFrame(){return this.pp.currentFrame}set currentFrame(e){if(!Number.isFinite(e))throw Error(`ActionSprite.currentFrame must be finite`);let t=this.pp;t.playVersion++,t.currentFrame=this._$clampFrame(e),t.frameTime=t.timeline?this._$frameStart(t.currentFrame):t.currentFrame,t.eventCursor=-1,this._$renderFrame(),this._$ensureAction()}get duration(){let{timeline:e,actions:t,currentAction:n}=this.pp;return e?e.total/t[n].fps:0}get currentTime(){let{timeline:e,actions:t,currentAction:n,frameTime:r}=this.pp;return e?r/t[n].fps:0}get totalFrames(){return this.pp.frames?.textures.length??0}get texture(){return this.pp.texture}get poster(){return this.pp.poster}set poster(e){e&&me(e),this._$cancelConfig(),this._$setPoster(e),this.pp.settingProps||this._$ensureAction()}get actions(){return this.pp.actions}set actions(e){e&&he(e);let t=this.pp,n=t.actions?.[t.currentAction??``];this._$cancelConfig(),t.actions=e?Object.assign(Object.create(null),e):void 0,!(n&&n===t.actions?.[t.currentAction??``])&&(this._$invalidateAction(),t.actions?.[t.currentAction??``]||(t.currentAction=t.actions&&Object.keys(t.actions)[0],t.loopOverride=void 0,t.frameTime=t.currentFrame=0),t.currentLoop=t.loopOverride??t.actions?.[t.currentAction??``]?.loop??!0,t.currentAction||(this.stop(),t.poster&&this._$loadPoster(t.poster)),t.settingProps||this._$ensureAction())}get onComplete(){return this.pp.onComplete}set onComplete(e){this.pp.onComplete&&this.off(h.complete,this.pp.onComplete,this),e&&this.on(h.complete,e,this),this.pp.onComplete=e}get onLoop(){return this.pp.onLoop}set onLoop(e){this.pp.onLoop&&this.off(h.loop,this.pp.onLoop,this),e&&this.on(h.loop,e,this),this.pp.onLoop=e}get onFrameEvent(){return this.pp.onFrameEvent}set onFrameEvent(e){this.pp.onFrameEvent&&this.off(h.frameEvent,this.pp.onFrameEvent,this),e&&this.on(h.frameEvent,e,this),this.pp.onFrameEvent=e}async preload(e){let t=this.pp;t.configPromise&&await t.configPromise;let n=t.actions;if(!n)throw Error(`ActionSprite.preload: no actions configured, label: "${this.label}"`);let r=e??Object.keys(n);for(let e of r)if(!n[e])throw Error(`ActionSprite.preload: unknown action "${e}", label: "${this.label}"`);let i=await Promise.all(r.map(e=>I.load(n[e].url,`atlas`)));for(let e=0;e<r.length;e++){let a=i[e],o=n[r[e]];if(!a?.length)throw Error(`ActionSprite.preload: failed to load atlas ${o.url}`);let s=t.poster;s&&ge(o,ve(a,s,o).textures.length)}}setProps(e){if(!e)return super.setProps();let{url:t,poster:n,actions:r,currentAction:i,currentFrame:a,parent:o,...s}=e;if(t!==void 0&&(n!==void 0||r!==void 0))throw Error(`ActionSprite: use url or poster/actions, not both`);let c=this.pp;c.settingProps=!0;try{super.setProps(s),`url`in e&&(this.url=t),`poster`in e&&(this.poster=n),`actions`in e&&(this.actions=r),`currentAction`in e&&(this.currentAction=i)}finally{c.settingProps=!1}return`currentAction`in e&&i&&!c.isPaused&&(c.isPlaying||this.autoPlay)&&this._$onStage()?this.play(i):this._$ensureAction(),o&&(this.parent=o),`currentFrame`in e&&a!==void 0&&(this.currentFrame=a),this}play(e,t){if(!this._$onStage())throw Error(`ActionSprite.play: add to stage first, label: "${this.label}"`);let n=this.pp,r=e??n.currentAction,i=n.actions?.[r??``];if(!i&&!n.loadingConfig)return this;let a=r!==n.currentAction,o=!a&&n.isPaused,s=n.isPlaying;return a&&(this._$invalidateAction(),n.currentAction=r),a||!n.isPlaying&&!o?(n.frameTime=n.currentFrame=0,n.eventCursor=-1,n.loopOverride=t,n.currentLoop=t??i?.loop??!0,n.playVersion++):t!==void 0&&(n.currentLoop!==t&&n.playVersion++,n.loopOverride=t,n.currentLoop=t),n.isPaused=!1,n.isPlaying=!0,this._$renderFrame(),this._$ensureAction(),n.isPlaying&&(a||!s)&&this.emit(o?h.resume:h.play),this}stop(){let e=this.pp,t=e.isPlaying||e.isPaused;return e.isPlaying=e.isPaused=!1,e.playVersion++,this._$clearTimer(),t&&this.emit(h.stop),this}pause(){let e=this.pp;return(e.isPlaying||e.loadingConfig||e.loadingAction)&&(e.isPlaying=!1,e.isPaused=!0,e.playVersion++,this._$clearTimer(),this.emit(h.pause)),this}resume(){let e=this.pp;return e.isPaused&&this._$onStage()&&(e.isPaused=!1,e.isPlaying=!0,this._$ensureAction(),this.emit(h.resume)),this}gotoAndStop(e){return this.stop(),this.currentFrame=e,this}gotoAndPlay(e){return this.play(),this.currentFrame=e,this}_customLocalBounds(e){let{poster:t,width:n,height:r}=this.pp;t&&e.addFrame(0,0,n>=0?n:t.width,r>=0?r:t.height)}_customRenderBounds(e){let{displayBounds:t,poster:n,width:r,height:i}=this.pp;if(!t){e.addBounds(this.getLocalBounds());return}e.addBounds(t);let a=r>=0?r/n.width:1,o=i>=0?i/n.height:1;(a!==1||o!==1)&&e.scale(a,o)}destroy(){this._$clearTimer();let e=this.pp;e.configVersion++,e.loadVersion++,e.frames=e.displayBounds=e.timeline=void 0,e.texture=B.BLANK,e.isPlaying=e.isPaused=!1,super.destroy()}_$onAddedToStage(){this._$clearTimer(),this.autoPlay&&!this.pp.isPaused?this.play():this._$ensureAction()}_$onRemovedFromStage(e){e||this.stop()}_$cancelConfig(){let e=this.pp;e.configVersion++,e.loadingConfig=!1,e.url=void 0}_$invalidateAction(){this._$clearTimer();let e=this.pp;e.loadVersion++,e.playVersion++;let t=e.timeline?.starts;if(t){let n=e.currentFrame;e.frameTime=n+(e.frameTime-t[n])/(t[n+1]-t[n])}e.frames=e.timeline=void 0,e.loadedAction=e.loadingAction=void 0}_$setPoster(e){this._$invalidateAction();let t=this.pp;t.poster=e?{...e}:void 0,t.autoWidth&&(super.width=e?.width??-1),t.autoHeight&&(super.height=e?.height??-1),this.markDirty(S.size),(t.anchor._x||t.anchor._y)&&(this.anchor=t.anchor),t.poster?this._$loadPoster(t.poster):(this.stop(),this._$setDisplayBounds(void 0),this._$commitTexture(B.BLANK))}async _$loadConfig(e,t){let n=this.pp;try{let r=await I.load(e,`json`);if(this.destroyed||t!==n.configVersion)return;if(!r)throw Error(`ActionSprite: failed to load ${e}`);if(r.version!==void 0&&r.version!==1)throw Error(`ActionSprite: unsupported config version`);me(r.poster),he(r.actions);let i=n.currentAction??r.defaultAction??Object.keys(r.actions)[0];if(i!==void 0&&!(i in r.actions))throw Error(`ActionSprite: unknown action "${i}"`);let a=new URL(e,document.baseURI),o=Object.create(null);for(let[e,t]of Object.entries(r.actions))o[e]={...t,url:new URL(t.url,a).href};n.loadingConfig=!1,n.actions=o,n.currentAction=i,n.currentLoop=n.loopOverride??o[i??``]?.loop??!0,this._$setPoster({...r.poster,url:new URL(r.poster.url,a).href}),i===void 0&&this.stop(),this._$ensureAction()}catch(e){!this.destroyed&&t===n.configVersion&&(n.loadingConfig=!1,n.configPromise=void 0,this.stop(),this.emit(h.error,e))}}async _$loadPoster(e){let t=this.pp;try{let n=await I.load(e.url,`image`);if(this.destroyed||t.poster!==e)return;if(!n)throw Error(`ActionSprite: failed to load ${e.url}`);let r=fe.get(n);r||(r=new Map,fe.set(n,r));let i=`${e.width},${e.height}`,a=r.get(i);if(!a){a=B.fromBuffer(n.buffer,void 0,n.sheet,!0),Object.assign(a.uvs,n.uvs);let t=n.trimRect;a.trimRect.set(t.x*e.width/n.width,t.y*e.height/n.height,t.width*e.width/n.width,t.height*e.height/n.height),a.setSourceSize(e.width,e.height),r.set(i,a)}t.frames||(this._$setDisplayBounds(new b(0,0,e.width,e.height)),this._$commitTexture(a))}catch(n){!this.destroyed&&t.poster===e&&this.emit(h.error,n)}}_$ensureAction(){let e=this.pp;if(e.settingProps||e.loadingConfig||!e.poster||!e.currentAction||this.destroyed)return;let t=e.actions?.[e.currentAction];if(t){if(e.loadedAction===e.currentAction)this._$startTimer();else if(e.loadingAction!==e.currentAction){let n=I.get(t.url,`atlas`);n?.length?this._$install(e.currentAction,t,n,e.loadVersion):(e.loadingAction=e.currentAction,this._$loadAction(e.currentAction,t,e.loadVersion))}}}_$install(e,t,n,r){let i=this.pp;i.frames=ve(n,i.poster,t),i.timeline=ge(t,i.frames.textures.length),this._$setDisplayBounds(i.frames.bounds),i.loadedAction=e,i.loadingAction=void 0,i.currentFrame=this._$clampFrame(i.frameTime);let a=i.timeline.starts,o=i.currentFrame;i.frameTime=a?a[o]+Math.min(Math.max(i.frameTime-o,0),1)*(a[o+1]-a[o]):i.frameTime<i.timeline.count?i.frameTime:o,i.eventCursor=-1,this._$renderFrame(),this.emit(h.loaded),!this.destroyed&&i.loadVersion===r&&this._$startTimer()}async _$loadAction(e,t,n){let r=this.pp;try{let i=await I.load(t.url,`atlas`);if(this.destroyed||r.loadVersion!==n)return;if(!i?.length)throw Error(`ActionSprite: empty or missing atlas ${t.url}`);this._$install(e,t,i,n)}catch(e){!this.destroyed&&r.loadVersion===n&&(r.loadingAction=void 0,this.stop(),this.emit(h.error,e))}}_$clampFrame(e){return Math.max(0,Math.min(Math.trunc(e),this.totalFrames?this.totalFrames-1:1/0))}_$renderFrame(){let{frames:e,currentFrame:t}=this.pp;e&&this._$commitTexture(e.textures[t])}_$setDisplayBounds(e){let t=this.pp.displayBounds;this.pp.displayBounds=e,t!==e&&(!t||!e||!_e(t,e))&&this.markDirty(S.child)}_$commitTexture(e){let t=this.pp.texture;if(t===e)return;this.pp.texture=e;let n=e.trimRect,r=t.trimRect;(n.x!==r.x||n.y!==r.y||n.width!==r.width||n.height!==r.height)&&this.markDirty(S.size),this.markDirty(S.texture)}_$startTimer(){let e=this.pp;e.timer||!e.isPlaying||!e.frames||(e.timer=this._$animClock(),e.timer?.onFrame(this._$tick,this))}_$clearTimer(){let e=this.pp;e.timer?.clearTimer(this._$tick,this),e.timer=void 0}_$frameStart(e){let t=this.pp.timeline?.starts;return t?t[e]:e}_$frameAt(e){let{timeline:t,currentFrame:n}=this.pp,{starts:r,count:i}=t;if(!r)return Math.min(Math.floor(e+V),i-1);let a=n>=0&&n<i&&r[n]<=e+V?n:0;for(;a+1<i&&r[a+1]<=e+V;)a++;return a}_$dispatchEvents(e,t){let n=this.pp,r=n.timeline.events;if(!r)return!0;let i=n.currentAction;for(;n.eventCursor<r.length&&r[n.eventCursor].t<=e+V;){let e=r[n.eventCursor++];if(this.emit(h.frameEvent,e.name,e.data,i),this._$halted(t))return!1}return!0}_$halted(e){let t=this.pp;return t.destroyed||t.playVersion!==e||!!t.timer?.paused}_$tick(){let e=this.pp,t=e.timer.delta;if(!e.enabled||t<=0||e.speed<=0)return;let n=e.currentAction,r=e.actions[n],{total:i,count:a,events:o}=e.timeline,s=e.playVersion;if(o&&e.eventCursor<0){let t=0;for(;t<o.length&&o[t].t<e.frameTime-V;)t++;e.eventCursor=t}let c=e.frameTime+t*r.fps*e.speed;if(!e.currentLoop&&c+V>=i){if(e.frameTime=i,this._$showFrame(a-1),!this._$dispatchEvents(i,s))return;this.stop(),this.emit(h.complete,n);return}for(let t=0;c+V>=i;t++){if(t>=100){c%=i,e.frameTime=0,e.eventCursor=0;break}if(e.frameTime=i,o&&e.eventCursor<o.length&&this._$showFrame(a-1),!this._$dispatchEvents(i,s)||(c-=i,e.frameTime=0,e.eventCursor=0,this.hasListener(h.loop)&&(this._$showFrame(0),this.emit(h.loop,n),this._$halted(s))))return}e.frameTime=c>0?c:0,this._$showFrame(this._$frameAt(e.frameTime)),this._$dispatchEvents(e.frameTime,s)}_$showFrame(e){let t=this.pp;e!==t.currentFrame&&(t.currentFrame=e,this._$renderFrame())}};pe=P([c(`ActionSprite`),f(`design:paramtypes`,[Object])],pe);function me(e){if(!e||typeof e.url!=`string`||!e.url||!Number.isFinite(e.width)||e.width<=0||!Number.isFinite(e.height)||e.height<=0)throw Error(`ActionSprite: poster requires url and positive finite width/height`)}function he(e){if(!e||typeof e!=`object`||Array.isArray(e))throw Error(`ActionSprite: invalid actions`);for(let[t,n]of Object.entries(e))if(!t||!n||typeof n.url!=`string`||!n.url||!Array.isArray(n.offset)||n.offset.length!==2||!n.offset.every(Number.isFinite)||!Number.isFinite(n.fps)||n.fps<=0||typeof n.loop!=`boolean`||n.durations!==void 0&&(!Array.isArray(n.durations)||!n.durations.every(e=>Number.isFinite(e)&&e>0))||n.events!==void 0&&(!Array.isArray(n.events)||!n.events.every(e=>e&&typeof e.name==`string`&&Number.isFinite(e.time)&&e.time>=0)))throw Error(`ActionSprite: invalid action "${t}"`)}function ge(e,t){let n=de.get(e);if(n&&n.count===t)return n;let r=t,i,a=e.durations;if(a){i=new Float64Array(t+1);let e=0;for(let n=0;n<t;n++)i[n]=e,e+=a[n]??1;i[t]=r=e}let o=e.events?.length?e.events.map(t=>({t:t.time*e.fps,name:t.name,data:t.data})).sort((e,t)=>e.t-t.t):void 0,s={count:t,total:r,starts:i,events:o};return de.set(e,s),s}function _e(e,t){return e.minX===t.minX&&e.minY===t.minY&&e.maxX===t.maxX&&e.maxY===t.maxY}function ve(e,t,n){let{width:r,height:i}=t,[a,o]=n.offset,s=`${r},${i},${a},${o}`,c=ue.get(e);c||(c=new Map,ue.set(e,c));let l=c.get(s);if(l)return l;let u=new b(0,0,r,i),d={textures:e.map(e=>{let t=B.fromBuffer(e.buffer,void 0,e.sheet,!0);Object.assign(t.uvs,e.uvs);let n=e.trimRect,s=e.sheet?.spriteSourceSize;return t.trimRect.set(n.x-a,n.y-o,s?.w??n.width,s?.h??n.height),t.setSourceSize(r,i),u.addRect(t.trimRect),t}),bounds:u};return c.set(s,d),d}var ye=new WeakMap;function be(e,t){let n=ye.get(e);n||(n=new Map,ye.set(e,n));let r=t?.toLowerCase()??``,i=n.get(r);if(i)return i;let a=e;if(t&&(a=e.filter(e=>e.label?.toLowerCase().startsWith(r)),a.length||(a=e.filter(e=>e.label?.toLowerCase().includes(r))),!a.length))return;if(!a.length)return[];let{x:o,y:s,width:c,height:l}=a[0].trimRect,u=a.map(e=>{let t=B.fromBuffer(e.buffer,void 0,e.sheet,!0);Object.assign(t.uvs,e.uvs);let n=e.trimRect;return t.trimRect.set(n.x-o,n.y-s,n.width,n.height),t.setSourceSize(c,l),t.label=e.label,t});return n.set(r,u),u}var xe=class extends p{renderObject=new g(this);autoPlay=!0;loop=!0;get isPlaying(){return this.pp.isPlaying}get frameRate(){return this.pp.frameRate}set frameRate(e){let t=this.pp;t.frameRate!==e&&(t.frameRate=e,t.isPlaying&&this._$syncTimer())}get totalFrames(){return this.pp.textures.length}get onLoaded(){return this.pp.onLoaded}set onLoaded(e){this.pp.onLoaded&&this.off(h.loaded,this.pp.onLoaded,this),e&&this.on(h.loaded,e,this),this.pp.onLoaded=e}get onPlay(){return this.pp.onPlay}set onPlay(e){this.pp.onPlay&&this.off(h.play,this.pp.onPlay,this),e&&this.on(h.play,e,this),this.pp.onPlay=e}get onStop(){return this.pp.onStop}set onStop(e){this.pp.onStop&&this.off(h.stop,this.pp.onStop,this),e&&this.on(h.stop,e,this),this.pp.onStop=e}get onComplete(){return this.pp.onComplete}set onComplete(e){this.pp.onComplete&&this.off(h.complete,this.pp.onComplete,this),e&&this.on(h.complete,e,this),this.pp.onComplete=e}get animationSpeed(){return this.frameRate/60}set animationSpeed(e){this.frameRate=e*60}get currentAction(){return this.pp.currentAction}set currentAction(e){this.pp.currentAction!==e&&((this.pp.isPlaying||this.autoPlay)&&this._$onStage()?this.play(e):(this.pp.currentAction=e,this._$selectFrames(e)))}get textures(){return this.pp.textures}set textures(e){let t=this.pp;t.url=``,t.loadTask=void 0,this._$setSource(e)}_$setSource(e){let t=this.pp;e!==t.originalTextures&&e!==t.textures&&(t.originalTextures=e,this._$setFrames(be(e,t.currentAction)??be(e,void 0)))}_$selectFrames(e){let t=this.pp;if(!t.originalTextures.length)return;let n=be(t.originalTextures,e);n?this._$setFrames(n):console.warn(`No textures found for action: ${e}`)}_$setFrames(e){let t=this.pp;if(t.textures===e)return;t.textures=e,t.frameTime=t.currentFrame=0;let n=t.texture,r=e[0]??B.BLANK;this.texture=r,t.isPlaying&&this._$syncTimer(),(t.width<0&&n.width!==r.width||t.height<0&&n.height!==r.height)&&((t.anchor._x||t.anchor._y)&&(this.anchor=t.anchor),this.emit(h.resize))}get texture(){return this.pp.texture}set texture(e){let t=this.pp,n=t.texture;n!==e&&(t.texture=e,(n.width!==e.width||n.height!==e.height||!n.trimRect.equals(e.trimRect))&&this.markDirty(S.size),this.markDirty(S.texture))}get duration(){return this.frameRate?this.totalFrames/Math.abs(this.frameRate):1/0}get currentFrame(){return this.pp.currentFrame}set currentFrame(e){let t=this.pp,n=Math.max(0,Math.min(Math.trunc(e),t.textures.length-1));t.frameTime=n,n!==t.currentFrame&&(t.currentFrame=n,this.texture=t.textures[n])}get url(){return this.pp.url}set url(e){if(e.endsWith(`.png`))throw Error(`AnimatedSprite only support atlas url, got: "${e}", label: "${this.label}"`);this.load(e)}constructor(e){super(),this.pp.url=``,this.pp.frameRate=10,this.pp.currentFrame=0,this.pp.frameTime=0,this.pp.texture=B.BLANK,this.pp.textures=[],this.pp.originalTextures=[],this.pp.isPlaying=!1,this.on(h.addedToStage,this._$onAddedToStage,this),this.on(h.removedFromStage,this._$onRemovedFromStage,this),this.setProps(e)}setProps(e){if(e?.textures&&e.url){let{url:t,...n}=e;return super.setProps(n)}return super.setProps(e)}_$onAddedToStage(){let e=this.pp;e.isPlaying?(this._$clearTimer(),this._$syncTimer()):this.autoPlay&&this.play(e.currentAction)}_$onRemovedFromStage(e){e||this.stop()}load(e){let t=this.pp;if(t.url===e){if(t.loadTask)return t.loadTask;if(I.get(e,`atlas`)===t.originalTextures)return Promise.resolve()}t.url=e;let n=I.load(e,`atlas`).then(e=>{this.destroyed||t.loadTask!==n||!e||(this._$setSource(e),!this.destroyed&&t.loadTask===n&&this.emit(h.loaded))}).finally(()=>{t.loadTask===n&&(t.loadTask=void 0)});return t.loadTask=n,n}_customLocalBounds(e){let{texture:t}=this.pp;t&&e.addFrame(0,0,t.width,t.height)}play(e){if(!this.pp.isPlaying||this.pp.currentAction!==e){if(!this._$onStage())throw Error(`AnimatedSprite.play: please add to stage first before play, label: "${this.label}"`);let t=this.pp;t.isPlaying=!0,t.currentAction=e,this._$selectFrames(e),t.isPlaying&&t.currentAction===e&&(this._$syncTimer(),this.emit(h.play))}return this}stop(){return this.pp.isPlaying&&(this.pp.isPlaying=!1,this._$clearTimer(),this.emit(h.stop)),this}_$syncTimer(){let e=this.pp;!e.textures.length||e.frameRate===0?e.timer&&this._$clearTimer():e.timer||(e.timer=this._$animClock(),e.timer?.onFrame(this._$update,this))}_$clearTimer(){let e=this.pp;e.timer?.clearTimer(this._$update,this),e.timer=void 0}gotoAndStop(e){return this.stop(),this.currentFrame=e,this}gotoAndPlay(e){return this.currentFrame=e,this.play(this.pp.currentAction),this}_$update(){let e=this.pp,t=e.textures.length;if(!t||!e.enabled)return;let n=e.frameTime+e.timer.delta*e.frameRate,r=Math.floor(n+1e-9);if(!this.loop&&(r>=t||r<0)){this.currentFrame=r<0?0:t-1,this.stop(),this.emit(h.complete);return}let i=Math.floor(r/t);e.frameTime=n-i*t;let a=r-i*t;a!==e.currentFrame&&(e.currentFrame=a,this.texture=e.textures[a])}destroy(){this.stop(),super.destroy()}};xe=P([c(`AnimatedSprite`),f(`design:paramtypes`,[Object])],xe);var H=class{id=re(`filter`);label=``;shader=``;glVertex=``;glFragment=``;_resources={};get resources(){return this._resources}set resources(e){this._resources!==e&&(this._resources=e,this.syncResources(),this.dirty=!0)}_enabled=!0;_padding=0;_resolution=1;_hdr=!1;get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this._structural())}get padding(){return this._padding}set padding(e){this._padding!==e&&(this._padding=e,this._structural())}get resolution(){return this._resolution}set resolution(e){this._resolution!==e&&(this._resolution=e,this._structural())}get hdr(){return this._hdr}set hdr(e){this._hdr!==e&&(this._hdr=e,this._structural())}blendRequired=!1;replaceBackdrop=!1;backdropOffset=[0,0];onDirty;_isDirty=!0;_version=0;_dynamicTextures;resourceVersion=0;_textureUpdate;syncResources(){let e=++this.resourceVersion;for(let t in this.resources){let n=this.resources[t];!(n instanceof B)||!n.dynamic||(this._dynamicTextures??=new Map,this._dynamicTextures.has(n)||(this._textureUpdate??=(e,t)=>{if(t===`destroy`){for(let t in this.resources)this.resources[t]===e&&(this.resources[t]=B.BLANK);this._dynamicTextures?.delete(e)}this.dirty=!0},n.onUpdate(this._textureUpdate)),this._dynamicTextures.set(n,e))}if(this._dynamicTextures&&this._textureUpdate)for(let[t,n]of this._dynamicTextures)n!==e&&(t.offUpdate(this._textureUpdate),this._dynamicTextures.delete(t))}get version(){return this._version}getSourceVersion(e){return 0}get dirty(){return this._isDirty}set dirty(e){this._isDirty=e,e&&(this._version++,this.onDirty?.())}_structural(){this._isDirty=!0,this._version++,this.onDirty?.(!0)}get passes(){return[this]}constructor(e){this.shader=e.shader,e.glVertex&&(this.glVertex=e.glVertex),e.glFragment&&(this.glFragment=e.glFragment),e.resources&&(this.resources=e.resources),e.padding!==void 0&&(this.padding=e.padding),e.resolution!==void 0&&(this.resolution=e.resolution)}setProps(e){if(e){let t=Object.keys(e);for(let n of t)n in this&&(this[n]=e[n])}}destroy(){if(this._dynamicTextures&&this._textureUpdate){for(let e of this._dynamicTextures.keys())e.offUpdate(this._textureUpdate);this._dynamicTextures.clear()}let e=Object.keys(this.resources);for(let t of e){let e=this.resources[t];e instanceof F&&e.destroy()}}},U=`#version 300 es
in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;

void main() {
    gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    vUV = aUV;
}
`,Se=`#version 300 es
precision mediump float;

in vec2 vUV;
out vec4 finalColor;

// uColorMatrix: 4x5 颜色矩阵，按 vec4 数组传入（5 个 vec4）
uniform vec4 uColorMatrix[5];
uniform vec4 uAlpha;
uniform sampler2D uTex;

void main() {
    vec4 color = texture(uTex, vUV);
    float alpha = uAlpha.x;

    if (alpha == 0.0) {
        finalColor = color;
        return;
    }

    vec4 cm0 = uColorMatrix[0];
    vec4 cm1 = uColorMatrix[1];
    vec4 cm2 = uColorMatrix[2];
    vec4 cm3 = uColorMatrix[3];
    vec4 cm4 = uColorMatrix[4];

    // 纯加法发光像素（rgb>0、alpha=0）：同 color.wgsl，只对预乘 rgb 应用矩阵 RGB 部分并保持 alpha=0，否则发光被乘 0 吃掉
    if (color.a == 0.0 && max(color.r, max(color.g, color.b)) > 0.0) {
        vec3 m = vec3(cm0.x * color.r + cm0.y * color.g + cm0.z * color.b,
                      cm1.y * color.r + cm1.z * color.g + cm1.w * color.b,
                      cm2.z * color.r + cm2.w * color.g + cm3.x * color.b);
        finalColor = vec4(max(mix(color.rgb, m, alpha), vec3(0.0)), 0.0);
        return;
    }

    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    vec4 result;
    result.r = cm0.x * color.r + cm0.y * color.g + cm0.z * color.b + cm0.w * color.a + cm1.x;
    result.g = cm1.y * color.r + cm1.z * color.g + cm1.w * color.b + cm2.x * color.a + cm2.y;
    result.b = cm2.z * color.r + cm2.w * color.g + cm3.x * color.b + cm3.y * color.a + cm3.z;
    result.a = cm3.w * color.r + cm4.x * color.g + cm4.y * color.b + cm4.z * color.a + cm4.w;

    vec3 rgb = mix(color.rgb, result.rgb, alpha);
    rgb *= result.a;

    finalColor = vec4(rgb, result.a);
}
`,Ce=`struct VertexInput {
  @location(0) xy: vec2<f32>,
  @location(1) uv: vec2<f32>,
};

struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv: vec2<f32>,
};

@group(0) @binding(0) var<uniform> projection: mat4x4<f32>;
@group(0) @binding(1) var tex: texture_2d<f32>;
@group(0) @binding(2) var samp: sampler;

@vertex
fn vert_main(input: VertexInput) -> VertexOutput {
    var out: VertexOutput;
    out.position = projection * vec4<f32>(input.xy, 0.0, 1.0);
    out.uv = input.uv;
    return out;
}

struct FilterUniforms {
  uColorMatrix: array<vec4<f32>, 5>,
  uAlpha: f32,
};
@group(1) @binding(0) var<uniform> filterUniforms : FilterUniforms;

@fragment
fn frag_main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
    var color = textureSample(tex, samp, uv);
    if filterUniforms.uAlpha == 0.0 {
        return color;
    }

    let cm = filterUniforms.uColorMatrix;
    // 纯加法发光像素（rgb>0、alpha=0，见 BLEND_STATE[Add]）：无法还原直通色，只对预乘 rgb 应用矩阵的 RGB 部分并保持 alpha=0；
    // ⚠️ 不能走下面的还原/再预乘路径，result.a 为 0 会把发光整块吃掉
    if color.a == 0.0 && max(color.r, max(color.g, color.b)) > 0.0 {
        let m = mat3x3<f32>(cm[0][0], cm[1][1], cm[2][2], cm[0][1], cm[1][2], cm[2][3], cm[0][2], cm[1][3], cm[3][0]);
        return vec4(max(mix(color.rgb, m * color.rgb, filterUniforms.uAlpha), vec3<f32>(0.0)), 0.0);
    }

    if color.a > 0.0 {
        color.r /= color.a;
        color.g /= color.a;
        color.b /= color.a;
    }

    var result = vec4<f32>(0.);

    result.r = (cm[0][0] * color.r);
    result.r += (cm[0][1] * color.g);
    result.r += (cm[0][2] * color.b);
    result.r += (cm[0][3] * color.a);
    result.r += cm[1][0];

    result.g = (cm[1][1] * color.r);
    result.g += (cm[1][2] * color.g);
    result.g += (cm[1][3] * color.b);
    result.g += (cm[2][0] * color.a);
    result.g += cm[2][1];

    result.b = (cm[2][2] * color.r);
    result.b += (cm[2][3] * color.g);
    result.b += (cm[3][0] * color.b);
    result.b += (cm[3][1] * color.a);
    result.b += cm[3][2];

    result.a = (cm[3][3] * color.r);
    result.a += (cm[4][0] * color.g);
    result.a += (cm[4][1] * color.b);
    result.a += (cm[4][2] * color.a);
    result.a += cm[4][3];

    var rgb = mix(color.rgb, result.rgb, filterUniforms.uAlpha);

    rgb.r *= result.a;
    rgb.g *= result.a;
    rgb.b *= result.a;

    return vec4(rgb, result.a);
}
`,we=class extends H{constructor(){let e=new F({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:`f32`,size:20},uAlpha:{value:1,type:`f32`}});super({shader:Ce,glVertex:U,glFragment:Se,resources:{filterUniforms:e}})}get matrix(){return this.resources.filterUniforms.getValue(`uColorMatrix`)}set matrix(e){this.dirty=!0,this.resources.filterUniforms.setValue(`uColorMatrix`,e)}brightness(e,t=!1){let n=[e,0,0,0,0,0,e,0,0,0,0,0,e,0,0,0,0,0,1,0];this._loadMatrix(n,t)}contrast(e,t=!1){let n=-.5*(e-1),r=[e,0,0,0,n,0,e,0,0,n,0,0,e,0,n,0,0,0,1,0];this._loadMatrix(r,t)}saturate(e,t=!1){let n=e*2/3+1/3,r=(n-1)*-.5,i=[n,r,r,0,0,r,n,r,0,0,r,r,n,0,0,0,0,0,1,0];this._loadMatrix(i,t)}hue(e,t=!1){let n=e*Math.PI/180,r=Math.cos(n),i=Math.sin(n),a=.213,o=.715,s=.072,c=[a+r*(1-a)+i*-.213,o+r*-.715+i*-.715,s+r*-.072+i*(1-s),0,0,a+r*-.213+i*.143,o+r*(1-o)+i*.14,s+r*-.072+i*-.283,0,0,a+r*-.213+i*-.787,o+r*-.715+i*o,s+r*(1-s)+i*s,0,0,0,0,0,1,0];this._loadMatrix(c,t)}greyscale(e,t=!1){let n=.213,r=.715,i=.072,a=1-e,o=[n*e+a,r*e,i*e,0,0,n*e,r*e+a,i*e,0,0,n*e,r*e,i*e+a,0,0,0,0,0,1,0];this._loadMatrix(o,t)}tint(e,t,n,r=!1){let i=[e,0,0,0,0,0,t,0,0,0,0,0,n,0,0,0,0,0,1,0];this._loadMatrix(i,r)}sepia(e=!1){this._loadMatrix([.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0],e)}negative(e=!1){this._loadMatrix([-1,0,0,0,1,0,-1,0,0,1,0,0,-1,0,1,0,0,0,1,0],e)}reset(){let e=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this.matrix=e}_loadMatrix(e,t=!1){if(t){let t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this._multiply(t,this.matrix,e),this.matrix=t}else this.matrix=e}_multiply(e,t,n){return e[0]=t[0]*n[0]+t[1]*n[5]+t[2]*n[10]+t[3]*n[15],e[1]=t[0]*n[1]+t[1]*n[6]+t[2]*n[11]+t[3]*n[16],e[2]=t[0]*n[2]+t[1]*n[7]+t[2]*n[12]+t[3]*n[17],e[3]=t[0]*n[3]+t[1]*n[8]+t[2]*n[13]+t[3]*n[18],e[4]=t[0]*n[4]+t[1]*n[9]+t[2]*n[14]+t[3]*n[19]+t[4],e[5]=t[5]*n[0]+t[6]*n[5]+t[7]*n[10]+t[8]*n[15],e[6]=t[5]*n[1]+t[6]*n[6]+t[7]*n[11]+t[8]*n[16],e[7]=t[5]*n[2]+t[6]*n[7]+t[7]*n[12]+t[8]*n[17],e[8]=t[5]*n[3]+t[6]*n[8]+t[7]*n[13]+t[8]*n[18],e[9]=t[5]*n[4]+t[6]*n[9]+t[7]*n[14]+t[8]*n[19]+t[9],e[10]=t[10]*n[0]+t[11]*n[5]+t[12]*n[10]+t[13]*n[15],e[11]=t[10]*n[1]+t[11]*n[6]+t[12]*n[11]+t[13]*n[16],e[12]=t[10]*n[2]+t[11]*n[7]+t[12]*n[12]+t[13]*n[17],e[13]=t[10]*n[3]+t[11]*n[8]+t[12]*n[13]+t[13]*n[18],e[14]=t[10]*n[4]+t[11]*n[9]+t[12]*n[14]+t[13]*n[19]+t[14],e[15]=t[15]*n[0]+t[16]*n[5]+t[17]*n[10]+t[18]*n[15],e[16]=t[15]*n[1]+t[16]*n[6]+t[17]*n[11]+t[18]*n[16],e[17]=t[15]*n[2]+t[16]*n[7]+t[17]*n[12]+t[18]*n[17],e[18]=t[15]*n[3]+t[16]*n[8]+t[17]*n[13]+t[18]*n[18],e[19]=t[15]*n[4]+t[16]*n[9]+t[17]*n[14]+t[18]*n[19]+t[19],e}},Te=class extends p{_textNode=new E;_bgSprite=new t;_bgShape=new ae;_hovered=!1;_disabled=!1;_greyFilter;constructor(e){super();let t=this.pp;t.width=80,t.height=40,t.textFill=`#ffffff`,t.bgStyle={fill:`#333333`,cornerRadius:10},t.bgHoverStyle={fill:`#555555`},this._initNodes(),this.setProps(e)}_initNodes(){this._textNode.anchor.set(.5,.5),this._textNode.fontWeight=`bold`,this._textNode.align=`center`,this._bgSprite.visible=!1,this.addChild(this._bgShape),this.addChild(this._bgSprite),this.addChild(this._textNode),this._$redraw(),this.on(h.pointerOver,()=>{this._disabled||(this.stage&&(this.stage.cursor=`pointer`),this._hovered=!0,this._$redraw())}),this.on(h.pointerOut,()=>{this.stage&&(this.stage.cursor=`default`),this._hovered=!1,this._$redraw()})}get width(){return this.pp.width}set width(e){this.pp.width!==e&&(super.width=e,this._$redraw())}get height(){return this.pp.height}set height(e){this.pp.height!==e&&(super.height=e,this._$redraw())}get url(){return this.pp.url}set url(e){if(this.pp.url!==e)if(this.pp.url=e,e){let t=e;this._bgSprite.load(t).then(()=>{this.pp.url===t&&this._$redraw()}),this._bgSprite.visible=!0,this._bgShape.visible=!1}else this._bgSprite.visible=!1,this._bgShape.visible=!0}get text(){return this._textNode.text}set text(e){this._textNode.text=e}get fontSize(){return this._textNode.fontSize}set fontSize(e){this._textNode.fontSize=e}get fontWeight(){return this._textNode.fontWeight}set fontWeight(e){this._textNode.fontWeight=e}get textFill(){return this.pp.textFill}set textFill(e){this.pp.textFill!==e&&(this.pp.textFill=e,this._textNode.fill=e)}get textColor(){return this.pp.textFill}set textColor(e){this.textFill=e}get textHoverFill(){return this.pp.textHoverFill??this.textFill}set textHoverFill(e){this.pp.textHoverFill=e}get textStroke(){return this._textNode.stroke}set textStroke(e){this._textNode.stroke=e}get bgStyle(){return{...this.pp.bgStyle}}set bgStyle(e){this.pp.bgStyle={...this.pp.bgStyle,...e},this._$redraw()}get bgHoverStyle(){return this.pp.bgHoverStyle??this.pp.bgStyle}set bgHoverStyle(e){this.pp.bgHoverStyle={...this.pp.bgHoverStyle??this.pp.bgStyle,...e},this._$redraw()}get bgFill(){return this.pp.bgStyle.fill}set bgFill(e){this.pp.bgStyle={...this.pp.bgStyle,fill:e},this._$redraw()}get bgStroke(){return this.pp.bgStyle.stroke}set bgStroke(e){this.pp.bgStyle={...this.pp.bgStyle,stroke:e},this._$redraw()}get bgCornerRadius(){return this.pp.bgStyle.cornerRadius??0}set bgCornerRadius(e){this.pp.bgStyle={...this.pp.bgStyle,cornerRadius:e},this._$redraw()}get bgHoverFill(){return(this.pp.bgHoverStyle??this.pp.bgStyle).fill}set bgHoverFill(e){this.pp.bgHoverStyle={...this.pp.bgHoverStyle??this.pp.bgStyle,fill:e},this._$redraw()}get bgHoverStroke(){return(this.pp.bgHoverStyle??this.pp.bgStyle).stroke}set bgHoverStroke(e){this.pp.bgHoverStyle={...this.pp.bgHoverStyle??this.pp.bgStyle,stroke:e},this._$redraw()}get bgHoverCornerRadius(){return(this.pp.bgHoverStyle??this.pp.bgStyle).cornerRadius??0}set bgHoverCornerRadius(e){this.pp.bgHoverStyle={...this.pp.bgHoverStyle??this.pp.bgStyle,cornerRadius:e},this._$redraw()}_$redraw(){let{width:e,height:t}=this.pp;if(this._bgSprite.width=e,this._bgSprite.height=t,this._bgShape.clear(),this._bgShape.visible){let n=this._hovered?this.bgHoverStyle:this.pp.bgStyle,{fill:r,stroke:i}=n,a=n.cornerRadius??this.pp.bgStyle.cornerRadius??0;a?this._bgShape.roundRect(0,0,e,t,a):this._bgShape.rect(0,0,e,t),r&&this._bgShape.fill(r),i&&this._bgShape.stroke(i)}this._textNode.position.set(e/2,t/2),this._textNode.fill=this._hovered?this.textHoverFill:this.textFill}get disabled(){return this._disabled}set disabled(e){this._disabled!==e&&(this._disabled=e,e?(this._greyFilter||(this._greyFilter=new we,this._greyFilter.greyscale(1)),this.addFilter(this._greyFilter)):this._greyFilter&&this.removeFilter(this._greyFilter),this.interactive=!e)}click(){this._disabled||this.emit(h.click)}};Te=P([c(`Button`),f(`design:paramtypes`,[Object])],Te);var Ee=0,De=class extends p{constructor(e){super();let t=this.pp;t.width=200,t.height=36,t.inputType=`text`,t.text=``,t.placeholder=``,t.fontSize=14,t.fontFamily=`Arial`,t.textFill=`#000000`,t.bgStyle={fill:`#ffffff`,stroke:{color:`#cccccc`,width:1},cornerRadius:4},t.maxLength=-1,t.readOnly=!1,t.disabled=!1,t.synced=new Float64Array(11).fill(NaN),this.on(h.addedToStage,this._$onAddedToStage,this),this.on(h.removedFromStage,this._$onRemovedFromStage,this),this.setProps(e)}get onInput(){return this.pp.onInput}set onInput(e){this.pp.onInput&&this.off(h.input,this.pp.onInput,this),e&&this.on(h.input,e,this),this.pp.onInput=e}get onFocus(){return this.pp.onFocus}set onFocus(e){this.pp.onFocus&&this.off(h.focus,this.pp.onFocus,this),e&&this.on(h.focus,e,this),this.pp.onFocus=e}get onBlur(){return this.pp.onBlur}set onBlur(e){this.pp.onBlur&&this.off(h.blur,this.pp.onBlur,this),e&&this.on(h.blur,e,this),this.pp.onBlur=e}get onEnter(){return this.pp.onEnter}set onEnter(e){this.pp.onEnter&&this.off(h.enter,this.pp.onEnter,this),e&&this.on(h.enter,e,this),this.pp.onEnter=e}get inputType(){return this.pp.inputType}set inputType(e){if(this.pp.inputType!==e){this.pp.inputType=e;let t=this.pp.inputElement;t&&(t.type=e)}}get text(){return this.pp.text}set text(e){if(this.pp.text!==e){this.pp.text=e;let t=this.pp.inputElement;t&&(t.value=e)}}get placeholder(){return this.pp.placeholder}set placeholder(e){if(this.pp.placeholder!==e){this.pp.placeholder=e;let t=this.pp.inputElement;t&&(t.placeholder=e)}}get fontSize(){return this.pp.fontSize}set fontSize(e){this.pp.fontSize!==e&&(this.pp.fontSize=e,this._$applyStyle())}get fontFamily(){return this.pp.fontFamily}set fontFamily(e){this.pp.fontFamily!==e&&(this.pp.fontFamily=e,this._$applyStyle())}get textFill(){return this.pp.textFill}set textFill(e){this.pp.textFill!==e&&(this.pp.textFill=e,this._$applyStyle())}get textColor(){return this.pp.textFill}set textColor(e){this.textFill=e}get bgStyle(){return{...this.pp.bgStyle}}set bgStyle(e){this.pp.bgStyle={...this.pp.bgStyle,...e},this._$applyStyle()}get maxLength(){return this.pp.maxLength}set maxLength(e){if(this.pp.maxLength!==e){this.pp.maxLength=e;let t=this.pp.inputElement;t&&(e>=0?t.maxLength=e:t.removeAttribute(`maxlength`))}}get readOnly(){return this.pp.readOnly}set readOnly(e){if(this.pp.readOnly!==e){this.pp.readOnly=e;let t=this.pp.inputElement;t&&(t.readOnly=e)}}get disabled(){return this.pp.disabled}set disabled(e){if(this.pp.disabled!==e){this.pp.disabled=e;let t=this.pp.inputElement;t&&(t.disabled=e)}}get inputElement(){return this.pp.inputElement}focus(){this.pp.inputElement?.focus()}blur(){this.pp.inputElement?.blur()}_customLocalBounds(e){e.addFrame(0,0,this.pp.width,this.pp.height)}destroy(){this._$unmountInput(),super.destroy()}_$onAddedToStage(){this.pp.inputElement?this._$sync(!0):this._$mountInput()}_$onRemovedFromStage(e){e||this._$unmountInput()}_$mountInput(){let e=this.stage;if(!e||this.pp.inputElement)return;let t=document.createElement(`input`);this.pp.inputElement=t,t.id=`liko-input-${Ee++}`,t.type=this.pp.inputType,t.value=this.pp.text,t.placeholder=this.pp.placeholder,t.readOnly=this.pp.readOnly,t.disabled=this.pp.disabled,this.pp.maxLength>=0&&(t.maxLength=this.pp.maxLength),t.style.cssText=`position:absolute;left:0;top:0;margin:0;padding:2px 4px;box-sizing:border-box;outline:none;transform-origin:0 0;pointer-events:auto`,this._$applyStyle(),t.addEventListener(`input`,this._$onInput),t.addEventListener(`focus`,this._$onFocus),t.addEventListener(`blur`,this._$onBlur),t.addEventListener(`keydown`,this._$onKeyDown);let n=e.canvas.parentElement;n&&n.appendChild(t),this._$sync(!0),e.on(h.resize,this._$onResize,this),l.system.onFrame(this._$sync,this)}_$unmountInput(){let e=this.pp.inputElement;e&&(this.stage?.off(h.resize,this._$onResize,this),l.system.clearTimer(this._$sync,this),e.removeEventListener(`input`,this._$onInput),e.removeEventListener(`focus`,this._$onFocus),e.removeEventListener(`blur`,this._$onBlur),e.removeEventListener(`keydown`,this._$onKeyDown),e.remove(),this.pp.inputElement=void 0,this.pp.synced.fill(NaN))}_$applyStyle(){let e=this.pp.inputElement;if(!e)return;let t=this.pp,n=e.style;n.font=`${t.fontSize}px ${t.fontFamily}`,n.color=this._toCss(t.textFill);let{fill:r,stroke:i}=t.bgStyle;if(n.backgroundColor=r?this._toCss(r):``,i&&typeof i==`object`){let e=i.width??0;n.border=e>0?`${e}px solid ${this._toCss(i.color)}`:`none`}else i?n.border=`1px solid ${this._toCss(i)}`:n.border=`none`;n.borderRadius=`${t.bgStyle.cornerRadius??0}px`}_toCss(e){return e==null?``:typeof e==`string`?e:typeof e==`number`?`#${e.toString(16).padStart(6,`0`)}`:typeof e==`object`&&`color`in e?this._toCss(e.color):``}_$onResize(){this._$sync(!0)}_$sync(e){let t=this.pp,n=t.inputElement,r=this.stage;if(!n||!r)return;let i=t.synced;e&&(i[9]=NaN);let a=1;for(let e=this;e;e=e.pp.parent){let t=e.pp;if(!t.visible||!t.enabled){a=-1;break}a*=t.alpha}let o=n.style;if(a!==i[8]&&(i[8]=a,o.display=a<0?`none`:``,a>=0&&(o.opacity=`${a}`)),(t.width!==i[6]||t.height!==i[7])&&(i[6]=t.width,i[7]=t.height,o.width=`${t.width}px`,o.height=`${t.height}px`),a<0)return;let s=!1;if(Number.isNaN(i[9])){let e=r.canvas.getBoundingClientRect(),t=n.offsetParent,a=t?t.getBoundingClientRect():{left:0,top:0};i[9]=e.left-a.left+(t?t.scrollLeft-t.clientLeft:0),i[10]=e.top-a.top+(t?t.scrollTop-t.clientTop:0),s=!0}let c=this.worldMatrix,l=r.renderScale,u=c.a*l.x,d=c.b*l.y,f=c.c*l.x,p=c.d*l.y,m=c.tx*l.x,h=c.ty*l.y;(s||u!==i[0]||d!==i[1]||f!==i[2]||p!==i[3]||m!==i[4]||h!==i[5])&&(i[0]=u,i[1]=d,i[2]=f,i[3]=p,i[4]=m,i[5]=h,o.transform=`matrix(${u},${d},${f},${p},${m+i[9]},${h+i[10]})`)}_$onInput=()=>{let e=this.pp.inputElement;e&&(this.pp.text=e.value,this.emit(h.input,e.value))};_$onFocus=()=>{this.emit(h.focus)};_$onBlur=()=>{this.emit(h.blur)};_$onKeyDown=e=>{e.key===`Enter`&&this.emit(h.enter,this.pp.text)}};De=P([c(`Input`),f(`design:paramtypes`,[Object])],De);var Oe=new Map,ke=[],Ae=0,W=class extends p{static _$lights(e){return Oe.get(e.scene??e.stage)?.lights??ke}static _$version(e,t){let n=Oe.get(e.scene??e.stage);if(!n)return 0;if(n.frame!==t){n.frame=t;let e=!1,r=n.lights;for(let t of r)te._$prepare(t),t._$snapshot()&&(e=!0);e&&(n.version=++Ae)}return n.version}constructor(e){super();let t=this.pp;t.type=`point`,t.lightColor=new u(16777215),t.intensity=1,t.radius=200,t.innerRadius=0,t.falloff=1,t.innerAngle=30,t.outerAngle=60,t.cookieUrl=``,t.falloffSize=20,t.layers=1,t.blend=`multiply`,t.snap=new Float64Array(7).fill(NaN),this.on(h.addedToStage,this._$register,this),this.on(h.removedFromStage,this._$onRemovedFromStage,this),this.setProps(e)}get type(){return this.pp.type}set type(e){this.pp.type!==e&&(this.pp.type=e,this._$changed())}get color(){return this.pp.lightColor.value}set color(e){this.pp.lightColor.value!==e&&(this.pp.lightColor.value=e,this._$changed())}get intensity(){return this.pp.intensity}set intensity(e){this.pp.intensity!==e&&(this.pp.intensity=e,this._$changed())}get radius(){return this.pp.radius}set radius(e){this.pp.radius!==e&&(this.pp.radius=e,this._$changed())}get innerRadius(){return this.pp.innerRadius}set innerRadius(e){this.pp.innerRadius!==e&&(this.pp.innerRadius=e,this._$changed())}get falloff(){return this.pp.falloff}set falloff(e){this.pp.falloff!==e&&(this.pp.falloff=e,this._$changed())}get innerAngle(){return this.pp.innerAngle}set innerAngle(e){this.pp.innerAngle!==e&&(this.pp.innerAngle=e,this._$changed())}get outerAngle(){return this.pp.outerAngle}set outerAngle(e){this.pp.outerAngle!==e&&(this.pp.outerAngle=e,this._$changed())}get cookie(){return this.pp.cookieUrl}set cookie(e){let t=this.pp;t.cookieUrl=e,this._setCookieTexture(void 0),this._$changed(),e&&I.load(e,`image`).then(n=>{t.cookieUrl!==e||t.cookie||this.destroyed||(this._setCookieTexture(n),this._$changed())})}get cookieTexture(){return this.pp.cookie}set cookieTexture(e){let t=this.pp;t.cookieUrl=e?.url??``,t.cookie!==e&&(this._setCookieTexture(e),this._$changed())}_setCookieTexture(e){let t=this.pp;t.cookieUpdate&&t.cookie?.offUpdate(t.cookieUpdate),t.cookie=e,e?.dynamic&&(t.cookieUpdate??=(e,t)=>{t===`destroy`?this.cookieTexture=void 0:this._$changed()},e.onUpdate(t.cookieUpdate))}get points(){return this.pp.points}set points(e){this.pp.points=e,this.pp.mesh=void 0,this._$changed()}get falloffSize(){return this.pp.falloffSize}set falloffSize(e){this.pp.falloffSize!==e&&(this.pp.falloffSize=e,this.pp.mesh=void 0,this._$changed())}get layers(){return this.pp.layers}set layers(e){this.pp.layers!==e&&(this.pp.layers=e,this._$changed())}get blend(){return this.pp.blend}set blend(e){this.pp.blend!==e&&(this.pp.blend=e,this._$changed())}get lightColor(){return this.pp.lightColor}get active(){if(!this.pp.group)return!1;for(let e=this;e;e=e.pp.parent)if(!e.pp.enabled||!e.pp.visible)return!1;return!0}get mesh(){let e=this.pp;return!e.mesh&&e.points&&e.points.length>=6&&(e.mesh=je(e.points,e.falloffSize)),e.mesh}_customRenderBounds(e){}destroy(){this._setCookieTexture(void 0),this._$unregister(),super.destroy()}_$snapshot(){let e=this.pp.snap,t=this.worldMatrix,n=+!!this.active;return e[0]===t.a&&e[1]===t.b&&e[2]===t.c&&e[3]===t.d&&e[4]===t.tx&&e[5]===t.ty&&e[6]===n?!1:(e[0]=t.a,e[1]=t.b,e[2]=t.c,e[3]=t.d,e[4]=t.tx,e[5]=t.ty,e[6]=n,!0)}_$changed(){let e=this.pp.group;e&&(e.version=++Ae),this.markDirty(S.texture)}_$register(){let e=this.scene??this.stage;if(this.pp.group?.owner===e)return;this._$unregister();let t=Oe.get(e);t||(t={owner:e,lights:[],version:0,frame:-1},Oe.set(e,t)),t.lights.push(this),this.pp.group=t,this._$changed()}_$onRemovedFromStage(e){e||this._$unregister()}_$unregister(){let e=this.pp.group;if(!e)return;this.pp.group=void 0;let t=e.lights,n=t.indexOf(this);n>=0&&(t[n]=t[t.length-1],t.pop()),e.version=++Ae,t.length||Oe.delete(e.owner)}};W=P([c(`Light2D`),f(`design:paramtypes`,[Object])],W);function je(e,t){let n=e.length>>1,r=0;for(let t=0;t<n;t++){let i=(t+1)%n;r+=e[t*2]*e[i*2+1]-e[i*2]*e[t*2+1]}let i=r>0?1:-1,a=[],o=[];for(let e=0;e<n;e++)o.push(e);let s=n*n;for(;o.length>3&&s-->0;){let t=!1;for(let n=0;n<o.length;n++){let r=o[(n+o.length-1)%o.length],s=o[n],c=o[(n+1)%o.length],l=e[r*2],u=e[r*2+1],d=e[s*2],f=e[s*2+1],p=e[c*2],m=e[c*2+1];if(((d-l)*(m-u)-(f-u)*(p-l))*i<=0)continue;let h=!1;for(let t of o)if(t!==r&&t!==s&&t!==c&&Me(e[t*2],e[t*2+1],l,u,d,f,p,m)){h=!0;break}if(!h){a.push(l,u,1,d,f,1,p,m,1),o.splice(n,1),t=!0;break}}if(!t)break}if(o.length===3)for(let t of o)a.push(e[t*2],e[t*2+1],1);if(t>0){let r=[],o=[];for(let a=0;a<n;a++){let s=(a+n-1)%n,c=(a+1)%n,l=0,u=0;for(let[t,n]of[[s,a],[a,c]]){let r=e[n*2]-e[t*2],a=e[n*2+1]-e[t*2+1],o=Math.hypot(r,a)||1;l+=a/o*i,u+=-r/o*i}let d=Math.hypot(l,u)||1;r.push(e[a*2]+l/d*t),o.push(e[a*2+1]+u/d*t)}for(let t=0;t<n;t++){let i=(t+1)%n,s=e[t*2],c=e[t*2+1],l=e[i*2],u=e[i*2+1];a.push(s,c,1,l,u,1,r[i],o[i],0),a.push(s,c,1,r[i],o[i],0,r[t],o[t],0)}}return new Float32Array(a)}function Me(e,t,n,r,i,a,o,s){let c=(e-i)*(r-a)-(n-i)*(t-a),l=(e-o)*(a-s)-(i-o)*(t-s),u=(e-n)*(s-r)-(o-n)*(t-r);return!((c<0||l<0||u<0)&&(c>0||l>0||u>0))}function Ne({positions:e,uvs:t,indices:n}){if(e.length%2||t.length!==e.length||n.length%3)throw RangeError(`Mesh requires paired positions and UVs of equal length, and three indices per triangle`);let r=e.length/2,i=Array.from(n);for(let e of i)if(!Number.isInteger(e)||e<0||e>=r)throw RangeError(`Mesh index outside vertex range`);let a=Float32Array.from(e),o=Float32Array.from(t);if(!a.every(Number.isFinite)||!o.every(Number.isFinite))throw RangeError(`Mesh positions and UVs must be finite`);return Object.freeze({positions:a,uvs:o,indices:Object.freeze(i)})}var Pe={positions:[0,0,1,0,1,1,0,1],uvs:[0,0,1,0,1,1,0,1],indices:[0,1,2,0,2,3]},Fe=class extends p{renderObject=new Ie(this);constructor(e){super(),this.setProps(e)}setProps(e={}){let{geometry:t,texture:n,...r}=e;return(t!==void 0||!this.pp.geometry)&&(this.geometry=t??Pe),(n!==void 0||!this.pp.texture)&&(this.texture=n??B.WHITE),super.setProps(r)}get geometry(){return this.pp.geometry}set geometry(e){let t=this.pp;t.geometry=Ne(e),this._geometryChanged(S.child)}get texture(){return this.pp.texture}set texture(e){let t=this.pp;if(!(e instanceof B))throw TypeError(`Mesh.texture requires a Texture instance`);e.destroyed&&(e=B.BLANK);let n=t.texture;n!==e&&(n?.dynamic&&t.textureUpdate&&n.offUpdate(t.textureUpdate),t.texture=e,t.extra=t.extra&~w|(e.premultiplied?w:0),e.dynamic&&(t.textureUpdate??=(e,t)=>{t===`destroy`?this.texture=B.BLANK:this.markDirty(t===`resize`?S.child:S.parent)},e.onUpdate(t.textureUpdate)),this.markDirty(n?.buffer===e.buffer?S.texture:S.child))}get width(){return super.width}get height(){return super.height}updateVertices(){this.geometry.positions.length&&this._geometryChanged(S.size)}updateUvs(){this.geometry.uvs.length&&this.markDirty(S.texture)}_geometryChanged(e){let t=this.pp;if(this.markDirty(e),t.anchorSet&&this._syncAnchor(),!this.hasListener(h.resize))return;let{width:n,height:r}=this.getLocalBounds();(t.observedWidth!==n||t.observedHeight!==r)&&(t.observedWidth=n,t.observedHeight=r,this.emit(h.resize))}_syncAnchor(){let e=this.pp;e.anchorSet=!0;let{minX:t,minY:n,width:r,height:i}=this.getLocalBounds();this.transform.pivot.set(t+r*e.anchor._x,n+i*e.anchor._y)}_$ensureEvent(e){if(e.toLowerCase()===h.resize&&!this.hasListener(h.resize)){let e=this.pp,{width:t,height:n}=this.getLocalBounds();e.observedWidth=t,e.observedHeight=n}super._$ensureEvent(e)}_customLocalBounds(e){let{positions:t}=this.geometry;for(let n=0;n<t.length;n+=2){let r=t[n],i=t[n+1];r<e.minX&&(e.minX=r),r>e.maxX&&(e.maxX=r),i<e.minY&&(e.minY=i),i>e.maxY&&(e.maxY=i)}t.length||e.set(0,0,0,0)}hitTest(e){let{x:t,y:n}=this.toLocal(e,s.TEMP);if(!this.getLocalBounds().contains(t,n))return!1;let{positions:r,indices:i}=this.geometry;for(let e=0;e<i.length;e+=3){let a=i[e]*2,o=i[e+1]*2,s=i[e+2]*2,c=r[a],l=r[a+1],u=r[o]-c,d=r[o+1]-l,f=r[s]-c,p=r[s+1]-l,m=u*p-d*f,h=(t-c)*p-(n-l)*f,g=u*(n-l)-d*(t-c);if(m>0?h>=0&&g>=0&&h+g<=m:m<0&&h<=0&&g<=0&&h+g>=m)return!0}return!1}destroy(){let e=this.pp;e.textureUpdate&&e.texture.offUpdate(e.textureUpdate),super.destroy()}};Fe=P([c(`Mesh`),f(`design:paramtypes`,[Object])],Fe);var Ie=class{node;vertexStart=0;indexStart=0;uvStart=0;colorStart=0;textureId=0;batch;constructor(e){this.node=e}get vertexSize(){return this.node.geometry.positions.length}get colorSize(){return this.vertexSize/2}get uvSize(){return this.vertexSize*2}get indexSize(){return this.node.geometry.indices.length}packVertex(e){let{positions:t}=this.node.geometry,{a:n,b:r,c:i,d:a,tx:o,ty:s}=this.node.pp.worldMatrix,c=e.f32Data,l=this.vertexStart;for(let e=0;e<t.length;e+=2){let u=t[e],d=t[e+1];c[l++]=n*u+i*d+o,c[l++]=r*u+a*d+s}}packIndex(e){let t=this.vertexStart/2,n=this.node.geometry.indices;for(let r=0;r<n.length;r++)e.data[this.indexStart+r]=t+n[r]}packColor(e){e.u32Data.fill(this.node.pp.tint.abgr,this.colorStart,this.colorStart+this.colorSize)}packUV(e){let{uvs:t}=this.node.geometry,{x0:n,y0:r,x1:i,y1:a,x3:o,y3:s}=this.node.texture.uvs,c=i-n,l=a-r,u=o-n,d=s-r,{f32Data:f,u32Data:p}=e,m=this.node.pp.extra,h=this.uvStart;for(let e=0;e<t.length;e+=2){let i=t[e],a=t[e+1];f[h++]=n+i*c+a*u,f[h++]=r+i*l+a*d,p[h++]=this.textureId,p[h++]=m}}},G=new Float32Array(4),K=new Float32Array(4),Le=class extends g{vertexSize=32;indexSize=54;colorSize=16;uvSize=64;_grid(){let e=this.node,{leftWidth:t,rightWidth:n,topHeight:r,bottomHeight:i}=e,a=e.width,o=e.height,s=t+n>a&&t+n>0?a/(t+n):1,c=r+i>o&&r+i>0?o/(r+i):1,l=Math.min(s,c);G[0]=0,G[1]=t*l,G[2]=a-n*l,G[3]=a,K[0]=0,K[1]=r*l,K[2]=o-i*l,K[3]=o}packVertex(e){this._grid();let{f32Data:t}=e,{a:n,b:r,c:i,d:a,tx:o,ty:s}=this.node.pp.worldMatrix,c=this.vertexStart;for(let e=0;e<4;e++){let l=K[e];for(let e=0;e<4;e++){let u=G[e];t[c++]=n*u+i*l+o,t[c++]=r*u+a*l+s}}}updateAndPackVertex(e,t,n,r){let i=this.node.pp;t.updateMatrix(i.localMatrix,i.worldMatrix,n,r),this.packVertex(e)}packIndex(e){let{data:t}=e,n=this.vertexStart*.5,r=this.indexStart;for(let e=0;e<3;e++)for(let i=0;i<3;i++){let a=n+e*4+i;t[r]=a,t[r+1]=a+1,t[r+2]=a+5,t[r+3]=a,t[r+4]=a+5,t[r+5]=a+4,r+=6}}packColor(e){e.u32Data.fill(this.node.pp.tint.abgr,this.colorStart,this.colorStart+16)}packUV(e){let t=this.node,{uvs:n,trimRect:r}=t.texture,{f32Data:i,u32Data:a}=e,o=this.textureId,s=t.pp.extra;G[0]=K[0]=0,G[1]=t.leftWidth/(r.width||1),G[2]=1-t.rightWidth/(r.width||1),K[1]=t.topHeight/(r.height||1),K[2]=1-t.bottomHeight/(r.height||1),G[3]=K[3]=1;let c=n.x1-n.x0,l=n.y1-n.y0,u=n.x3-n.x0,d=n.y3-n.y0,f=this.uvStart;for(let e=0;e<4;e++)for(let t=0;t<4;t++)i[f]=n.x0+c*G[t]+u*K[e],i[f+1]=n.y0+l*G[t]+d*K[e],a[f+2]=o,a[f+3]=s,f+=4}},Re=class extends t{renderObject=new Le(this);constructor(e){super();let t=this.pp;t.leftWidth=t.topHeight=t.rightWidth=t.bottomHeight=10,this.setProps(e)}get leftWidth(){return this.pp.leftWidth}set leftWidth(e){this._setBorder(`leftWidth`,e)}get topHeight(){return this.pp.topHeight}set topHeight(e){this._setBorder(`topHeight`,e)}get rightWidth(){return this.pp.rightWidth}set rightWidth(e){this._setBorder(`rightWidth`,e)}get bottomHeight(){return this.pp.bottomHeight}set bottomHeight(e){this._setBorder(`bottomHeight`,e)}_setBorder(e,t){let n=this.pp;n[e]!==t&&(n[e]=t,this.markDirty(S.size),this.markDirty(S.texture))}};Re=P([c(`NineSliceSprite`),f(`design:paramtypes`,[Object])],Re);var ze=class extends p{_bgShape=new ae;_bgSprite=new t;_barShape=new ae;_barSprite=new t;_barContainer=new O;constructor(e){super();let t=this.pp;t.width=200,t.height=20,t.progress=0,t.bgStyle={fill:`#333333`},t.barStyle={fill:`#4CAF50`},this._bgSprite.visible=!1,this._barSprite.visible=!1,this._barContainer.overflow=`hidden`,this._barContainer.addChild(this._barShape),this._barContainer.addChild(this._barSprite),this.addChild(this._bgShape),this.addChild(this._bgSprite),this.addChild(this._barContainer),this._redraw(),this.setProps(e)}get width(){return this.pp.width}set width(e){this.pp.width!==e&&(super.width=e,this._redraw())}get height(){return this.pp.height}set height(e){this.pp.height!==e&&(super.height=e,this._redraw())}get progress(){return this.pp.progress}set progress(e){let t=Math.max(0,Math.min(1,e));this.pp.progress!==t&&(this.pp.progress=t,this._updateProgress(),this.emit(h.progress,t))}get bgUrl(){return this.pp.bgUrl}set bgUrl(e){if(this.pp.bgUrl!==e){if(this.pp.bgUrl=e,e){this._bgSprite.visible=!0,this._bgShape.visible=!1;let t=e;this._bgSprite.load(t).then(()=>{this.pp.bgUrl===t&&this._redrawBg()})}else this._bgSprite.visible=!1,this._bgShape.visible=!0;this._redrawBg()}}get barUrl(){return this.pp.barUrl}set barUrl(e){if(this.pp.barUrl!==e){if(this.pp.barUrl=e,e){this._barSprite.visible=!0,this._barShape.visible=!1;let t=e;this._barSprite.load(t).then(()=>{this.pp.barUrl===t&&this._redrawBar()})}else this._barSprite.visible=!1,this._barShape.visible=!0;this._redrawBar()}}get bgStyle(){return{...this.pp.bgStyle}}set bgStyle(e){this._setBgStyle({...this.pp.bgStyle,...e})}get barStyle(){return{...this.pp.barStyle}}set barStyle(e){this.pp.barStyle={...this.pp.barStyle,...e},this._redrawBar()}get bgFill(){return this.pp.bgStyle.fill}set bgFill(e){this._setBgStyle({...this.pp.bgStyle,fill:e})}get bgStroke(){return this.pp.bgStyle.stroke}set bgStroke(e){this._setBgStyle({...this.pp.bgStyle,stroke:e})}get bgCornerRadius(){return this.pp.bgStyle.cornerRadius??0}set bgCornerRadius(e){this._setBgStyle({...this.pp.bgStyle,cornerRadius:e})}get barFill(){return this.pp.barStyle.fill}set barFill(e){this.pp.barStyle={...this.pp.barStyle,fill:e},this._redrawBar()}get barStroke(){return this.pp.barStyle.stroke}set barStroke(e){this.pp.barStyle={...this.pp.barStyle,stroke:e},this._redrawBar()}get barCornerRadius(){return this.pp.barStyle.cornerRadius??0}set barCornerRadius(e){this.pp.barStyle={...this.pp.barStyle,cornerRadius:e},this._redrawBar()}get padding(){return this.pp.padding??0}set padding(e){this.pp.padding!==e&&(this.pp.padding=e,this._redrawBar())}get cornerRadius(){return this.pp.cornerRadius??0}set cornerRadius(e){this.pp.cornerRadius!==e&&(this.pp.cornerRadius=e,this._redraw())}_redraw(){this._redrawBg(),this._redrawBar()}_setBgStyle(e){let t=this._getEffectivePadding();this.pp.bgStyle=e,this._redrawBg(),this._getEffectivePadding()!==t&&this._redrawBar()}_redrawBg(){let{width:e,height:t}=this.pp,n=this.pp.bgStyle.cornerRadius??this.pp.cornerRadius??0;if(this._bgSprite.width=e,this._bgSprite.height=t,this._bgShape.clear(),this._bgShape.visible){let{fill:r,stroke:i}=this.pp.bgStyle;n>0?this._bgShape.roundRect(0,0,e,t,n):this._bgShape.rect(0,0,e,t),r&&this._bgShape.fill(r),i&&this._bgShape.stroke(i)}}_redrawBar(){let{width:e,height:t}=this.pp,n=this.pp.barStyle.cornerRadius??this.pp.cornerRadius??0,r=this._getEffectivePadding(),i=Math.max(0,e-r*2),a=Math.max(0,t-r*2);if(this._barContainer.position.set(r,r),this._barSprite.width=i,this._barSprite.height=a,this._barShape.clear(),this._barShape.visible){let{fill:e,stroke:t}=this.pp.barStyle;n>0?this._barShape.roundRect(0,0,i,a,n):this._barShape.rect(0,0,i,a),e&&this._barShape.fill(e),t&&this._barShape.stroke(t)}this._updateProgress()}_updateProgress(){let{width:e,height:t,progress:n}=this.pp,r=this._getEffectivePadding(),i=Math.max(0,e-r*2);this._barContainer.width=i*n,this._barContainer.height=Math.max(0,t-r*2)}_getEffectivePadding(){return this.pp.padding===void 0?this.pp.barUrl?0:this.pp.bgStyle.stroke?.width||0:this.pp.padding}};ze=P([c(`ProgressBar`),f(`design:paramtypes`,[Object])],ze);var Be,Ve=Be=class extends p{constructor(e){super();let t=this.pp;t.width=300,t.height=400,t.scrollX=0,t.scrollY=0,t.directionX=!1,t.directionY=!0,t.elasticity=.5,t.deceleration=.97,t.dragThreshold=5,t.contentWidth=-1,t.contentHeight=-1,t.overflow=`hidden`,t.content=new O,t.vx=0,t.vy=0,t.smoothVx=0,t.smoothVy=0,t.rawScrollX=0,t.rawScrollY=0,t.dragPointer=-1,t.startX=0,t.startY=0,t.lastX=0,t.lastY=0,t.animating=!1,t.cachedMaxX=0,t.cachedMaxY=0,t.maxDirty=!0,super.addChild(t.content),this.interactive=!0,this._bindEvents(),this.setProps(e)}get content(){return this.pp.content}get width(){return this.pp.width}set width(e){this.pp.width!==e&&(super.width=e,this._invalidateMax(),this._clampScroll())}get height(){return this.pp.height}set height(e){this.pp.height!==e&&(super.height=e,this._invalidateMax(),this._clampScroll())}get scrollX(){return this.pp.scrollX}set scrollX(e){let t=this.pp;if(!t.directionX)return;let n=this._clampValue(e,this._maxScrollX);t.scrollX!==n&&(t.scrollX=n,this._applyScroll())}get scrollY(){return this.pp.scrollY}set scrollY(e){let t=this.pp;if(!t.directionY)return;let n=this._clampValue(e,this._maxScrollY);t.scrollY!==n&&(t.scrollY=n,this._applyScroll())}get directionX(){return this.pp.directionX}set directionX(e){this.pp.directionX=e}get directionY(){return this.pp.directionY}set directionY(e){this.pp.directionY=e}get elasticity(){return this.pp.elasticity}set elasticity(e){this.pp.elasticity=Math.max(0,Math.min(1,e))}get deceleration(){return this.pp.deceleration}set deceleration(e){this.pp.deceleration=Math.max(0,Math.min(1,e))}get dragThreshold(){return this.pp.dragThreshold}set dragThreshold(e){this.pp.dragThreshold=Math.max(0,e)}get contentWidth(){return this.pp.contentWidth}set contentWidth(e){this.pp.contentWidth!==e&&(this.pp.contentWidth=e,this._invalidateMax())}get contentHeight(){return this.pp.contentHeight}set contentHeight(e){this.pp.contentHeight!==e&&(this.pp.contentHeight=e,this._invalidateMax())}get _maxScrollX(){let e=this.pp;return e.maxDirty&&this._calcMax(),e.cachedMaxX}get _maxScrollY(){let e=this.pp;return e.maxDirty&&this._calcMax(),e.cachedMaxY}scrollTo(e,t){this._stopAnimation();let n=this.pp;n.directionX&&(n.scrollX=this._clampValue(e,this._maxScrollX)),n.directionY&&(n.scrollY=this._clampValue(t,this._maxScrollY)),this._applyScroll()}invalidateContent(){this._invalidateMax()}addChild(e,t){return this.pp.content.addChild(e,t),this._invalidateMax(),this}removeChild(e){return e&&(this.pp.content.removeChild(e),this._invalidateMax()),this}removeChildren(){return this.pp.content.removeChildren(),this._invalidateMax(),this}destroyChildren(){return this.pp.content.destroyChildren(),this._invalidateMax(),this}destroy(){this._onRemoved(),super.destroy()}_bindEvents(){this.on(h.pointerDown,this._onPointerDown,this),this.on(h.pointerMove,this._$onTrackedPointer,this),this.on(h.wheel,this._onWheel,this),this.on(h.removedFromStage,this._onRemoved,this)}_onRemoved(){this._stopAnimation(),this._finishDrag()}_finishDrag(){let e=this.pp;e.releasePress?.(!!e.dragView),e.releasePress=void 0,e.dragView?.pp.dragPointer===e.dragPointer&&(e.dragView.pp.dragPointer=-1),e.dragPointer=-1,e.dragView=void 0}_onPointerDown(e){let t=this.pp;t.dragPointer===-1&&(t.releasePress=this.stage?.pointer._$trackPress(e.pointerId,this),t.releasePress&&(this._stopAnimation(),t.dragPointer=e.pointerId,t.startX=e.global.x,t.startY=e.global.y))}_$onTrackedPointer(e){let t=this.pp;if(!t.releasePress||e&&t.dragPointer!==e.pointerId)return;if(e?.type!==`pointermove`){let n=t.dragView;if(n&&n.pp.dragPointer===t.dragPointer){let t=!e||e.nativeEvent.type===`pointercancel`;n.pp.vx=t?0:n.pp.smoothVx,n.pp.vy=t?0:n.pp.smoothVy,n._startAnimation()}this._finishDrag();return}if(!t.dragView){let n=e.x-t.startX,r=e.y-t.startY;if(n*n+r*r<t.dragThreshold*t.dragThreshold)return;let i=Math.abs(n)>Math.abs(r);for(let n=this;n;n=n.parent){if(!(n instanceof Be)||!(i?n.directionX:n.directionY)||n!==this&&n.pp.dragPointer!==-1)continue;let r=n.pp;t.dragView=n,r.dragPointer=e.pointerId,n._stopAnimation(),n._invalidateMax(),r.rawScrollX=r.scrollX,r.rawScrollY=r.scrollY,r.lastX=e.x,r.lastY=e.y,r.smoothVx=r.smoothVy=0,e.stopPropagation();break}return}let n=t.dragView;n.pp.dragPointer===e.pointerId&&n._dragTo(e.x,e.y)}_dragTo(e,t){let n=this.pp,r=e-n.lastX,i=t-n.lastY;n.directionX&&(n.rawScrollX-=r),n.directionY&&(n.rawScrollY-=i),n.directionX&&(n.scrollX=this._rubberBandPosition(n.rawScrollX,this._maxScrollX,n.width)),n.directionY&&(n.scrollY=this._rubberBandPosition(n.rawScrollY,this._maxScrollY,n.height)),this._applyScroll(),n.smoothVx=n.smoothVx*.8+r*.2,n.smoothVy=n.smoothVy*.8+i*.2,n.lastX=e,n.lastY=t}_onWheel(e){let t=this.pp,{scrollX:n,scrollY:r}=t,i=t.directionY?e.deltaX:e.deltaX||e.deltaY;t.directionX&&(t.scrollX=this._clampValue(n+i*.5,this._maxScrollX)),t.directionY&&(t.scrollY=this._clampValue(r+e.deltaY*.5,this._maxScrollY)),(t.scrollX!==n||t.scrollY!==r)&&(this._stopAnimation(),this._applyScroll(),e.stopPropagation(),e.preventDefault())}_invalidateMax(){this.pp.maxDirty=!0}_calcMax(){let e=this.pp;if(e.contentWidth>=0&&e.contentHeight>=0){e.maxDirty=!1,e.cachedMaxX=Math.max(0,e.contentWidth-e.width),e.cachedMaxY=Math.max(0,e.contentHeight-e.height);return}let t=e.content.children;e.maxDirty=t.length===0;let n=e.contentWidth>=0?e.contentWidth:0,r=e.contentHeight>=0?e.contentHeight:0;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.getLocalBounds();if(e.contentWidth<0){let e=a.x+o.maxX;e>n&&(n=e)}if(e.contentHeight<0){let e=a.y+o.maxY;e>r&&(r=e)}}e.cachedMaxX=Math.max(0,n-e.width),e.cachedMaxY=Math.max(0,r-e.height)}_rubberBandPosition(e,t,n){return e<0?-this._rubberBand(-e,n):e>t?t+this._rubberBand(e-t,n):e}_rubberBand(e,t){let n=t*this.pp.elasticity;return e*n/(e+n)}_clampValue(e,t){return Math.max(0,Math.min(e,t))}_clampScroll(){let e=this.pp;e.scrollX=this._clampValue(e.scrollX,this._maxScrollX),e.scrollY=this._clampValue(e.scrollY,this._maxScrollY),this._applyScroll()}_applyScroll(){let e=this.pp;e.content.position.set(-e.scrollX,-e.scrollY),this.emit(h.scroll,e.scrollX,e.scrollY)}_startAnimation(){let e=this.pp,t=e.directionX&&(e.scrollX<0||e.scrollX>this._maxScrollX),n=e.directionY&&(e.scrollY<0||e.scrollY>this._maxScrollY),r=e.directionX&&Math.abs(e.vx)>.5||e.directionY&&Math.abs(e.vy)>.5;!t&&!n&&!r||(e.animating=!0,this.stage?.timer.onFrame(this._tickAnimation,this))}_stopAnimation(){let e=this.pp;e.animating&&(e.animating=!1,this.stage?.timer.clearTimer(this._tickAnimation,this))}_tickAnimation(){let e=this.pp,t=!0;e.directionX&&(t=this._tickAxis(`scrollX`,`vx`,this._maxScrollX)&&t),e.directionY&&(t=this._tickAxis(`scrollY`,`vy`,this._maxScrollY)&&t),this._applyScroll(),t&&this._stopAnimation()}_tickAxis(e,t,n){let r=this.pp,i=r[t],a=r[e];if(a<0){if(a+=-a*.2,i=0,a>-.5)return r[e]=0,r[t]=0,!0}else if(a>n){if(a+=(n-a)*.2,i=0,a-n<.5)return r[e]=n,r[t]=0,!0}else if(i*=r.deceleration,a-=i,Math.abs(i)<.5)return r[e]=this._clampValue(a,n),r[t]=0,!0;return r[e]=a,r[t]=i,!1}};Ve=Be=P([c(`ScrollView`),f(`design:paramtypes`,[Object])],Ve);var He=60,Ue=1/He,We=Ue*.25,q={x:0,y:0},Ge=new x,Ke=class extends p{renderObject=new qe(this);constructor(e){super();let t=this.pp;t.texture=B.WHITE,t.time=.5,t.headWidth=10,t.endWidth=0,t.color=new u(16777215),t.endAlpha=0,t.minDistance=1,t.emitting=!0,t.capacity=0,t.fixedCapacity=!1,t.points=new Float64Array,t.first=0,t.count=0,t.now=0,t.nextSample=0,t.sampled=!1,t.lastX=0,t.lastY=0,this._$alloc(Math.ceil(t.time*He)+1),this.on(h.addedToStage,this._$onAddedToStage,this),this.on(h.removedFromStage,this._$onRemovedFromStage,this),this.setProps(e)}get texture(){return this.pp.texture}set texture(e){e??=B.WHITE,this.pp.texture!==e&&(this.pp.texture=e,this.markDirty(S.child))}get time(){return this.pp.time}set time(e){let t=this.pp;e=Math.max(.01,e),t.time!==e&&(t.time=e,t.fixedCapacity||this._$alloc(Math.ceil(e*He)+1),t.count&&(this.markDirty(S.size),this.markDirty(S.color)))}get width(){return this.pp.headWidth}set width(e){this.pp.headWidth!==e&&(this.pp.headWidth=e,this.markDirty(S.size))}get height(){return 0}set height(e){}get endWidth(){return this.pp.endWidth}set endWidth(e){this.pp.endWidth!==e&&(this.pp.endWidth=e,this.markDirty(S.size))}get color(){return this.pp.color.value}set color(e){let t=this.pp.color;t.value!==e&&(t.value=e,this.markDirty(S.color))}get endAlpha(){return this.pp.endAlpha}set endAlpha(e){this.pp.endAlpha!==e&&(this.pp.endAlpha=e,this.markDirty(S.color))}get minDistance(){return this.pp.minDistance}set minDistance(e){this.pp.minDistance=e}get emitting(){return this.pp.emitting}set emitting(e){let t=this.pp;t.emitting!==e&&(t.emitting=e,t.sampled=!1,e?this._$startTimer():t.count||this._$stopTimer())}get maxPoints(){return this.pp.capacity}set maxPoints(e){this.pp.fixedCapacity=!0,this._$alloc(Math.max(1,e|0))}get pointCount(){return this.pp.count}clear(){let e=this.pp;return e.count&&this.markDirty(S.size),e.first=0,e.count=0,e.sampled=!1,this}destroy(){this._$stopTimer(),super.destroy()}_customRenderBounds(e){let t=this.pp,{count:n,root:r}=t;if(!n||!r)return;let i=Math.max(t.headWidth,t.endWidth)*.5,a=Ge.copyFrom(this.worldMatrix).invert().append(r.worldMatrix),{points:o,capacity:s,first:c}=t;for(let t=0;t<n;t++){let n=(c+t)%s*3,r=o[n],l=o[n+1];e.addFrame(r-i,l-i,r+i,l+i,a)}let l=i*(Math.abs(a.a)+Math.abs(a.c)),u=i*(Math.abs(a.b)+Math.abs(a.d));e.addFrame(-l,-u,l,u)}_$alloc(e){let t=this.pp;if(t.capacity===e)return;let{points:n,first:r,count:i,capacity:a}=t,o=i<e?i:e,s=new Float64Array(e*3);for(let e=0;e<o;e++){let t=(r+i-o+e)%a*3;s[e*3]=n[t],s[e*3+1]=n[t+1],s[e*3+2]=n[t+2]}t.capacity=e,t.points=s,t.first=0,t.count=o,this.renderObject.resize(e),this.markDirty(S.child)}_$onAddedToStage(){let e=this.pp,t=this.scene??this.stage;e.root!==t&&(e.root=t,this.clear()),(e.emitting||e.count)&&this._$startTimer()}_$onRemovedFromStage(e){this._$stopTimer(),e||this.clear()}_$startTimer(){let e=this.pp;e.timer||e.destroyed||(e.timer=this._$animClock(),e.timer&&(e.now=e.timer.currentTime,e.timer.onFrame(this._$tick,this)))}_$stopTimer(){let e=this.pp;e.timer?.clearTimer(this._$tick,this),e.timer=void 0}_$tick(){let e=this.pp,t=e.timer;if(!t||t.delta===0)return;let n=t.currentTime;e.now=n;let r=e.count,{points:i,capacity:a,time:o}=e;for(;e.count>0&&n-i[e.first*3+2]>=o;)e.first=(e.first+1)%a,e.count--;e.emitting&&this._$sample(n),(e.count>0||r>0)&&(this.markDirty(S.size),this.markDirty(S.color),e.count!==r&&this.markDirty(S.texture)),!e.count&&!e.emitting&&this._$stopTimer()}_$sample(e){let t=this.pp,n=this.worldMatrix;q.x=n.tx,q.y=n.ty,t.root.worldMatrix.applyInverse(q,q);let r=q.x,i=q.y;if(t.count===0)t.sampled&&(r!==t.lastX||i!==t.lastY)&&(this._$push(t.lastX,t.lastY,e),t.nextSample=e+Ue);else if(e+We>=t.nextSample){let n=(t.first+t.count-1)%t.capacity*3,a=r-t.points[n],o=i-t.points[n+1];if(a*a+o*o>=t.minDistance*t.minDistance){this._$push(r,i,e);let n=t.nextSample+Ue,a=e+Ue-We;t.nextSample=n>a?n:a}}t.sampled=!0,t.lastX=r,t.lastY=i}_$push(e,t,n){let r=this.pp,{capacity:i,points:a}=r;r.count===i&&(r.first=(r.first+1)%i,r.count--);let o=(r.first+r.count)%i*3;a[o]=e,a[o+1]=t,a[o+2]=n,r.count++}};Ke=P([c(`Trail`),f(`design:paramtypes`,[Object])],Ke);var qe=class{node;pipeline=`batch`;vertexSize=0;indexSize=0;colorSize=0;uvSize=0;vertexStart=0;indexStart=0;colorStart=0;uvStart=0;batch;textureId=0;_xy=new Float64Array;constructor(e){this.node=e}resize(e){let t=(e+1)*2;this.vertexSize=t*2,this.colorSize=t,this.uvSize=t*4,this.indexSize=e*6,this._xy=new Float64Array((e+1)*2)}packVertex(e){let t=e.f32Data,n=this.node.pp,{count:r,root:i,points:a,capacity:o,first:s}=n,c=this.vertexStart,l=c+this.vertexSize;if(r===0||!i){t.fill(0,c,l);return}let u=i.worldMatrix,d=this._xy,f=n.worldMatrix;q.x=f.tx,q.y=f.ty,u.applyInverse(q,q),d[0]=q.x,d[1]=q.y;for(let e=1;e<=r;e++){let t=(s+r-e)%o*3;d[e*2]=a[t],d[e*2+1]=a[t+1]}let p=r+1,{headWidth:m,now:h}=n,g=n.endWidth-m,_=1/n.time,{a:v,b:y,c:b,d:x,tx:S,ty:C}=u,w=0,T=1;for(let e=0;e<p-1;e++){let t=d[e*2]-d[e*2+2],n=d[e*2+1]-d[e*2+3],r=Math.sqrt(t*t+n*n);if(r>1e-6){w=-n/r,T=t/r;break}}let E=c;for(let e=0;e<p;e++){let n=e>0?e-1:0,i=e<p-1?e+1:e,c=d[n*2]-d[i*2],l=d[n*2+1]-d[i*2+1],u=Math.sqrt(c*c+l*l);u>1e-6&&(w=-l/u,T=c/u);let f=e===0?0:(h-a[(s+r-e)%o*3+2])*_;f>1&&(f=1);let D=(m+g*f)*.5,O=d[e*2],k=d[e*2+1],A=O+w*D,j=k+T*D,M=O-w*D,N=k-T*D;t[E]=v*A+b*j+S,t[E+1]=y*A+x*j+C,t[E+2]=v*M+b*N+S,t[E+3]=y*M+x*N+C,E+=4}let D=t[E-2],O=t[E-1];for(;E<l;E+=2)t[E]=D,t[E+1]=O}packIndex(e){let t=e.data,n=this.vertexStart*.5,r=this.indexStart,i=this.node.pp.capacity;for(let e=0;e<i;e++){let i=n+e*2;t[r]=i,t[r+1]=i+1,t[r+2]=i+2,t[r+3]=i+1,t[r+4]=i+3,t[r+5]=i+2,r+=6}}packColor(e){let t=e.u32Data,n=this.node.pp,{color:r,tint:i,count:a,points:o,capacity:s,first:c,now:l}=n,u=r.red*i.red*255+.5|0,d=r.green*i.green*255+.5|0,f=(r.blue*i.blue*255+.5|0)<<16|d<<8|u,p=r.alpha*i.alpha*255,m=n.endAlpha-1,h=1/n.time,g=a>0?a+1:0,_=this.colorStart;for(let e=0;e<g;e++){let n=e===0?0:(l-o[(c+a-e)%s*3+2])*h;n>1&&(n=1);let r=(p*(1+m*n)+.5|0)<<24|f;t[_]=r,t[_+1]=r,_+=2}t.fill(0,_,this.colorStart+this.colorSize)}packUV(e){let{f32Data:t,u32Data:n}=e,r=this.textureId,i=this.node.pp,a=i.texture.uvs,o=i.count>0?i.count+1:0,s=o>1?1/(o-1):0,c=i.capacity+1,l=this.uvStart;for(let e=0;e<c;e++){let i=e<o?e*s:1;t[l]=a.x0+(a.x1-a.x0)*i,t[l+1]=a.y0+(a.y1-a.y0)*i,n[l+2]=r,n[l+3]=0,t[l+4]=a.x3+(a.x2-a.x3)*i,t[l+5]=a.y3+(a.y2-a.y3)*i,n[l+6]=r,n[l+7]=0,l+=8}}},Je=class{uid=re(`VTB`);bitmap;texture;sampler;view;width;height;repeat=!1;nearest=!1;destroyed=!1;loaded=!1;constructor(e,t,n){this.bitmap=e,this.width=t,this.height=n,this.texture=z.createTexture(`video`,t,n),this.sampler=z.defaultSampler,this.view=this.texture.createView()}upload(){if(this.destroyed||this.loaded)return;let e=this.bitmap;e.readyState<e.HAVE_CURRENT_DATA||e.videoWidth<=0||e.videoHeight<=0||(this.loaded=!0,z.uploadTexture(e,this.texture))}dirty(){this.loaded=!1}destroy(){this.destroyed||(this.destroyed=!0,z.destroyTexture(this.texture))}},Ye=class{url;_onEnded;_onError;_destroyed=!1;_video;_buffer;_texture;_cancelLoad;_playRequest;_videoFrameCallbackId;loop=!0;muted=!0;volume=1;playbackRate=1;preload=`auto`;constructor(e,t,n){this.url=e,this._onEnded=t,this._onError=n}get texture(){return this._texture}getVideo(){return this._video}loadTexture(){return new Promise((e,t)=>{this._cancelLoad=()=>e(void 0);let n=document.createElement(`video`);n.crossOrigin=`anonymous`,n.playsInline=!0,n.loop=this.loop,n.muted=this.muted,n.defaultMuted=this.muted,n.volume=this.volume,n.playbackRate=this.playbackRate,n.preload=this.preload,this._video=n,n.addEventListener(`loadedmetadata`,()=>{if(this._destroyed||this._video!==n)return;let t=n.videoWidth,r=n.videoHeight;t<=0||r<=0||(this._buffer||(this._buffer=new Je(n,t,r),this._texture=B.fromBuffer(this._buffer,this.url)),this._cancelLoad=void 0,e(this._texture))},{once:!0}),n.addEventListener(`ended`,()=>{this._destroyed||this._video!==n||this._onEnded()}),n.addEventListener(`error`,e=>{this._destroyed||this._video!==n||(this._texture?this._onError(e):t(e))}),I.load(this.url,`video`).then(e=>{this._destroyed||this._video!==n||(n.src=e?.src??this.url)}).catch(t)})}play(e){let t=this._video;if(typeof t.requestVideoFrameCallback!=`function`)throw Error(`requestVideoFrameCallback is required for Video node, url: "${this.url}"`);let n=t.play();this._playRequest=n,n.catch(e=>{this._playRequest===n&&this._onError(e)});let r=()=>{let n=this._buffer;n&&t.readyState>=t.HAVE_CURRENT_DATA&&!(t.paused&&!t.ended)&&(n.dirty(),e.renderer.requestRender()),this._videoFrameCallbackId=t.requestVideoFrameCallback(r)};this._videoFrameCallbackId=t.requestVideoFrameCallback(r)}stop(){this._playRequest=void 0,this._videoFrameCallbackId!==void 0&&(this._video.cancelVideoFrameCallback(this._videoFrameCallbackId),this._videoFrameCallbackId=void 0),this._video?.pause()}destroy(){if(this._destroyed)return;this._destroyed=!0,this.stop(),this._cancelLoad?.(),this._cancelLoad=void 0;let e=this._video;this._video=void 0,e&&(M.cancelUnmute(e),e.removeAttribute(`src`),e.load()),this._texture?.destroy(),this._texture=void 0,this._buffer=void 0}},Xe=class extends p{renderObject=new g(this);autoPlay=!0;constructor(e){super(),this.pp.url=``,this.pp.texture=B.BLANK,this.pp.isPlaying=!1,this.pp.playingSubscribed=!1,this.pp.loop=!0,this.pp.muted=!1,this.pp.volume=1,this.pp.playbackRate=1,this.pp.preload=`auto`,this.on(h.removedFromStage,this._$onRemoved,this),this.setProps(e),this.on(h.addedToStage,this._$onAddedToStage,this),this.stage&&this._$onAddedToStage()}get onLoaded(){return this.pp.onLoaded}set onLoaded(e){this.pp.onLoaded&&this.off(h.loaded,this.pp.onLoaded,this),e&&this.on(h.loaded,e,this),this.pp.onLoaded=e}get onPlay(){return this.pp.onPlay}set onPlay(e){this.pp.onPlay&&this.off(h.play,this.pp.onPlay,this),e&&this.on(h.play,e,this),this.pp.onPlay=e}get onStop(){return this.pp.onStop}set onStop(e){this.pp.onStop&&this.off(h.stop,this.pp.onStop,this),e&&this.on(h.stop,e,this),this.pp.onStop=e}get onComplete(){return this.pp.onComplete}set onComplete(e){this.pp.onComplete&&this.off(h.complete,this.pp.onComplete,this),e&&this.on(h.complete,e,this),this.pp.onComplete=e}get onError(){return this.pp.onError}set onError(e){this.pp.onError&&this.off(h.error,this.pp.onError,this),e&&this.on(h.error,e,this),this.pp.onError=e}get url(){return this.pp.url}set url(e){this.pp.url!==e&&this.load(e)}get loop(){return this.pp.loop}set loop(e){if(this.pp.loop!==e){this.pp.loop=e;let t=this.pp.player?.getVideo();t&&(t.loop=e)}}get muted(){return this.pp.muted}set muted(e){if(this.pp.muted!==e){this.pp.muted=e;let t=this.pp.player?.getVideo();if(!t)return;e?(M.cancelUnmute(t),t.muted=!0,t.defaultMuted=!0):M.deferUnmute(t)}}get volume(){return this.pp.volume}set volume(e){if(this.pp.volume!==e){this.pp.volume=e;let t=this.pp.player?.getVideo();t&&(t.volume=e)}}get playbackRate(){return this.pp.playbackRate}set playbackRate(e){if(this.pp.playbackRate!==e){this.pp.playbackRate=e;let t=this.pp.player?.getVideo();t&&(t.playbackRate=e)}}get preload(){return this.pp.preload}set preload(e){if(this.pp.preload!==e){this.pp.preload=e;let t=this.pp.player?.getVideo();t&&(t.preload=e)}}get currentTime(){return this.pp.player?.getVideo()?.currentTime??0}set currentTime(e){let t=this.pp.player?.getVideo();t&&(t.currentTime=e)}get duration(){let e=this.pp.player?.getVideo()?.duration;return Number.isFinite(e)?e:0}get isPlaying(){return this.pp.isPlaying}get texture(){let e=this.pp.texture;return!e||e.destroyed?B.BLANK:e}async load(e){this.pp.url=e,this._$detachPlayer(),this.autoPlay&&this._$onStage()&&(this.pp.isPlaying=!0);let t=new Ye(e,()=>{this.stop(),this.emit(h.complete)},e=>{this._$unsubscribePlaying(),this.pp.isPlaying=!1,this.emit(h.error,e)});t.loop=this.pp.loop,t.muted=!0,t.volume=this.pp.volume,t.playbackRate=this.pp.playbackRate,t.preload=this.pp.preload,this.pp.player=t;try{let e=await t.loadTexture();if(!e||this.pp.player!==t)return;if(!this.pp.muted){let e=t.getVideo();e&&M.deferUnmute(e)}if(this._$applyTexture(e),this.pp.player!==t||(this.emit(h.loaded),this.pp.player!==t))return;let n=t.getVideo();n.addEventListener(`seeked`,()=>{n.paused&&this.pp.player===t&&(e.buffer.dirty(),this._$onStage()&&this.stage.renderer.requestRender())}),!this.pp.isPlaying&&n.readyState<n.HAVE_CURRENT_DATA&&n.addEventListener(`canplay`,()=>{this.destroyed||this.pp.player!==t||(this.markDirty(S.child),this.stage?.renderer.requestRender())},{once:!0}),this.pp.isPlaying&&this._$onStage()&&this._$subscribePlaying()&&this.emit(h.play)}catch(e){this.pp.player===t&&(this.pp.isPlaying=!1,this.emit(h.error,e))}}play(){if(!this._$onStage())throw Error(`Video.play: please add to stage first before play, label: "${this.label}"`);return this.pp.isPlaying=!0,this._$subscribePlaying()&&this.emit(h.play),this}stop(){return this.pp.isPlaying?(this.pp.isPlaying=!1,this._$unsubscribePlaying(),this.emit(h.stop),this):this}pause(){return this.stop()}_customLocalBounds(e){let t=this.pp.texture,n=this.pp.width>=0?this.pp.width:t.width,r=this.pp.height>=0?this.pp.height:t.height;e.addFrame(0,0,n,r)}destroy(){this.stop(),this._$detachPlayer(),this.pp.texture=B.BLANK,super.destroy()}_$onAddedToStage(){this.autoPlay&&(this.pp.isPlaying=!0),this.pp.isPlaying&&this._$subscribePlaying()&&this.emit(h.play)}_$onRemoved(e){e||this._$unsubscribePlaying()}_$detachPlayer(){let e=this.pp.player;e&&(this._$unsubscribePlaying(),e.destroy(),this.pp.player=void 0),this.pp.texture?.destroyed&&(this.renderObject.textureId=0,this.markDirty(S.child))}_$subscribePlaying(){if(this.pp.playingSubscribed)return!1;let e=this.stage,t=this.pp.player;return!e||!t?.texture?!1:(t.play(e),this.pp.playingSubscribed=!0,!0)}_$unsubscribePlaying(){if(!this.pp.playingSubscribed)return!1;this.pp.playingSubscribed=!1;let e=this.pp.player;return e&&e.stop(),!0}_$applyTexture(e){let t=this.pp,n=t.texture;t.texture=e,this.markDirty(S.texture),(t.width<0&&n.width!==e.width||t.height<0&&n.height!==e.height)&&(this.markDirty(S.size),(t.anchor._x||t.anchor._y)&&(this.anchor=t.anchor),this.emit(h.resize))}};Xe=P([c(`Video`),f(`design:paramtypes`,[Object])],Xe);var J=32,Ze={r:1,g:1,b:1,a:0},Qe={r:1,g:1,b:1,a:1},$e={x:0,y:0},Y=new u,et=class{posX;posY;velX;velY;colorR;colorG;colorB;colorA;size;rotation;life;maxLife;_startSize;_endSize;_startRot;_endRot;_startR;_startG;_startB;_startA;_endR;_endG;_endB;_endA;_radAccel;_tanAccel;_radAngle;_radRadius;_radDegreesPerSecond;_startRadius;_endRadius;emitWorldX;emitWorldY;frame;_lvX;_lvY;_colorLut;_alphaLut;_colorKeys;_alphaKeys;_noiseTime=0;aliveCount=0;maxParticles;constructor(e){this.maxParticles=e;let t=e;this.posX=new Float32Array(t),this.posY=new Float32Array(t),this.velX=new Float32Array(t),this.velY=new Float32Array(t),this.colorR=new Float32Array(t),this.colorG=new Float32Array(t),this.colorB=new Float32Array(t),this.colorA=new Float32Array(t),this.size=new Float32Array(t),this.rotation=new Float32Array(t),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this._startSize=new Float32Array(t),this._endSize=new Float32Array(t),this._startRot=new Float32Array(t),this._endRot=new Float32Array(t),this._startR=new Float32Array(t),this._startG=new Float32Array(t),this._startB=new Float32Array(t),this._startA=new Float32Array(t),this._endR=new Float32Array(t),this._endG=new Float32Array(t),this._endB=new Float32Array(t),this._endA=new Float32Array(t),this._radAccel=new Float32Array(t),this._tanAccel=new Float32Array(t),this._radAngle=new Float32Array(t),this._radRadius=new Float32Array(t),this._radDegreesPerSecond=new Float32Array(t),this._startRadius=new Float32Array(t),this._endRadius=new Float32Array(t),this.emitWorldX=new Float32Array(t),this.emitWorldY=new Float32Array(t)}update(e,t,n,r,i,a=1){let o=n>0?this.spawn(n,t,r,i,a):0;if(!this.aliveCount)return!1;o||this._syncLuts(t);let s=o>0&&a>1,c=t.emitterMode??_.GRAVITY,l=t.gravityX??0,u=t.gravityY??0,d=t.lifetimeVelocityX?this._lvX:void 0,f=t.lifetimeVelocityY?this._lvY:void 0,p=t.noise&&t.noise.strength!==0?t.noise:void 0,m=p?.frequency??.02,h=p?.strength??0;p&&(this._noiseTime+=e*(p.scrollSpeed??0));let g=this._noiseTime,v=(t.positionType??R.RELATIVE)===R.FREE,y=t.colorGradient?.length?this._colorLut:void 0,b=t.alphaGradient?.length?this._alphaLut:void 0,x=a>1&&t.frameMode===`lifetime`?this.frame:void 0;for(let t=0;t<this.maxParticles;t++){if(this.life[t]<=0)continue;if(this.life[t]-=e,this.life[t]<=0){this.life[t]=0,this.aliveCount--;continue}let n=1-this.life[t]/this.maxLife[t];if(c===_.GRAVITY){let n=this._radAccel[t],r=this._tanAccel[t];if(n!==0||r!==0){let i=this.posX[t],a=this.posY[t],o=Math.sqrt(i*i+a*a)||1,s=i/o,c=a/o;this.velX[t]+=s*n*e,this.velY[t]+=c*n*e,this.velX[t]+=-c*r*e,this.velY[t]+=s*r*e}this.velX[t]+=l*e,this.velY[t]+=u*e;let i=this.velX[t],a=this.velY[t];if(d&&(i+=d[t]),f&&(a+=f[t]),p){let e=v?this.posX[t]+this.emitWorldX[t]:this.posX[t],n=v?this.posY[t]+this.emitWorldY[t]:this.posY[t];it(e*m,n*m+g),i+=$e.x*h,a+=$e.y*h}this.posX[t]+=i*e,this.posY[t]+=a*e}else{this._radAngle[t]+=this._radDegreesPerSecond[t]*e*C;let r=this._startRadius[t]+(this._endRadius[t]-this._startRadius[t])*n;this._radRadius[t]=r,this.posX[t]=Math.cos(this._radAngle[t])*r,this.posY[t]=Math.sin(this._radAngle[t])*r}if(this.size[t]=this._startSize[t]+(this._endSize[t]-this._startSize[t])*n,this.rotation[t]=this._startRot[t]+(this._endRot[t]-this._startRot[t])*n,y){let e=(n*(J-1)+.5|0)*3;this.colorR[t]=this._startR[t]*y[e],this.colorG[t]=this._startG[t]*y[e+1],this.colorB[t]=this._startB[t]*y[e+2]}else this.colorR[t]=this._startR[t]+(this._endR[t]-this._startR[t])*n,this.colorG[t]=this._startG[t]+(this._endG[t]-this._startG[t])*n,this.colorB[t]=this._startB[t]+(this._endB[t]-this._startB[t])*n;if(this.colorA[t]=b?this._startA[t]*b[n*(J-1)+.5|0]:this._startA[t]+(this._endA[t]-this._startA[t])*n,x){let e=Math.min(a-1,n*a|0);x[t]!==e&&(x[t]=e,s=!0)}}return s}_syncLuts(e){let t=e.colorGradient;t?.length&&t!==this._colorKeys&&(this._colorKeys=t,this._colorLut=at(t,this._colorLut??new Float32Array(J*3)));let n=e.alphaGradient;n?.length&&n!==this._alphaKeys&&(this._alphaKeys=n,this._alphaLut=ot(n,this._alphaLut??new Float32Array(J)))}clampFrames(e){e>1&&(this.frame??=new Uint16Array(this.maxParticles));let t=this.frame;if(!t)return;let n=e>0?e-1:0;for(let e=0;e<t.length;e++)t[e]>n&&(t[e]=n)}spawn(e,t,n,r,i){this._syncLuts(t),i>1&&!this.frame&&(this.frame=new Uint16Array(this.maxParticles));let a=0,o=Math.min(Math.floor(e),this.maxParticles-this.aliveCount);for(let e=0;a<o;e++)this.life[e]>0||(this._emit(e,t,n,r,i),a++);return a}reset(){this.life.fill(0),this.aliveCount=0,this._noiseTime=0}_emit(e,t,n,r,i){let a=Math.max(.01,(t.life??1)+X(t.lifeVariance));this.life[e]=a,this.maxLife[e]=a;let o=0,s=0,c=t.shape;if(c)if(c.type===`circle`){let e=c.radius??0,t=Math.random()*Math.PI*2,n=c.edge?e:e*Math.sqrt(Math.random());o=Math.cos(t)*n,s=Math.sin(t)*n}else{let e=c.width??0,t=c.height??0;if(c.edge&&e+t>0){let n=Math.random()*(e+t),r=Math.random()<.5?-.5:.5;n<e?(o=n-e*.5,s=r*t):(o=r*e,s=n-e-t*.5)}else o=(Math.random()-.5)*e,s=(Math.random()-.5)*t}this.posX[e]=o+X(t.sourceX),this.posY[e]=s+X(t.sourceY),this.emitWorldX[e]=n,this.emitWorldY[e]=r;let l=Math.max(0,(t.startSize??16)+X(t.startSizeVariance)),u=Math.max(0,(t.endSize??0)+X(t.endSizeVariance));this._startSize[e]=l,this._endSize[e]=u,this.size[e]=l;let d=(t.startRotation??0)+X(t.startRotationVariance),f=(t.endRotation??0)+X(t.endRotationVariance);this._startRot[e]=d*C,this._endRot[e]=f*C,this.rotation[e]=d*C;let p=t.startColor??Qe,m=t.startColorVariance,h=t.endColor??Ze,g=t.endColorVariance;if(Array.isArray(p)){let[t,n]=p,r=Math.random();this._startR[e]=Z(t.r+(n.r-t.r)*r),this._startG[e]=Z(t.g+(n.g-t.g)*r),this._startB[e]=Z(t.b+(n.b-t.b)*r),this._startA[e]=Z(t.a+(n.a-t.a)*r)}else this._startR[e]=Z(p.r+X(m?.r)),this._startG[e]=Z(p.g+X(m?.g)),this._startB[e]=Z(p.b+X(m?.b)),this._startA[e]=Z(p.a+X(m?.a));this._endR[e]=Z(h.r+X(g?.r)),this._endG[e]=Z(h.g+X(g?.g)),this._endB[e]=Z(h.b+X(g?.b)),this._endA[e]=Z(h.a+X(g?.a));let v=t.colorGradient?.length?this._colorLut:void 0;if(this.colorR[e]=v?this._startR[e]*v[0]:this._startR[e],this.colorG[e]=v?this._startG[e]*v[1]:this._startG[e],this.colorB[e]=v?this._startB[e]*v[2]:this._startB[e],this.colorA[e]=t.alphaGradient?.length&&this._alphaLut?this._startA[e]*this._alphaLut[0]:this._startA[e],t.lifetimeVelocityX&&(this._lvX??=new Float32Array(this.maxParticles),this._lvX[e]=tt(t.lifetimeVelocityX)),t.lifetimeVelocityY&&(this._lvY??=new Float32Array(this.maxParticles),this._lvY[e]=tt(t.lifetimeVelocityY)),this.frame&&(this.frame[e]=i>1&&t.frameMode!==`lifetime`?Math.random()*i|0:0),(t.emitterMode??_.GRAVITY)===_.GRAVITY){let n=(c?.radial&&(o!==0||s!==0)?Math.atan2(s,o):(t.angle??0)*C)+X(t.angleVariance)*C,r=(t.speed??0)+X(t.speedVariance);this.velX[e]=Math.cos(n)*r,this.velY[e]=Math.sin(n)*r,this._radAccel[e]=(t.radialAccel??0)+X(t.radialAccelVariance),this._tanAccel[e]=(t.tangentialAccel??0)+X(t.tangentialAccelVariance)}else{let n=(t.startRadius??0)+X(t.startRadiusVariance),r=(t.endRadius??0)+X(t.endRadiusVariance),i=((t.angle??0)+X(t.angleVariance))*C,a=(t.rotatePerSecond??0)+X(t.rotatePerSecondVariance);this._radAngle[e]=i,this._startRadius[e]=n,this._endRadius[e]=r,this._radRadius[e]=n,this._radDegreesPerSecond[e]=a,this.velX[e]=0,this.velY[e]=0,this.posX[e]=Math.cos(i)*n,this.posY[e]=Math.sin(i)*n}this.aliveCount++}};function X(e){return e?(Math.random()*2-1)*e:0}function tt(e){return typeof e==`number`?e:e[0]+Math.random()*(e[1]-e[0])}function Z(e){return e<0?0:e>1?1:e}function nt(e,t){let n=Math.imul(e,374761393)+Math.imul(t,668265263)|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function rt(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=nt(n,r),l=nt(n+1,r),u=nt(n,r+1),d=nt(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}function it(e,t){let n=.1,r=rt(e+n,t)-rt(e-n,t);$e.x=(rt(e,t+n)-rt(e,t-n))*2.5,$e.y=-r*2.5}function at(e,t){let n=e.length;for(let r=0;r<J;r++){let i=r/(J-1),a=0;for(;a<n-1&&e[a+1].time<i;)a++;let o=e[a],s=e[Math.min(a+1,n-1)],c=s.time-o.time,l=c>0?Z((i-o.time)/c):0;Y.value=o.color;let u=Y.red,d=Y.green,f=Y.blue;Y.value=s.color,t[r*3]=u+(Y.red-u)*l,t[r*3+1]=d+(Y.green-d)*l,t[r*3+2]=f+(Y.blue-f)*l}return t}function ot(e,t){let n=e.length;for(let r=0;r<J;r++){let i=r/(J-1),a=0;for(;a<n-1&&e[a+1].time<i;)a++;let o=e[a],s=e[Math.min(a+1,n-1)],c=s.time-o.time,l=c>0?Z((i-o.time)/c):0;t[r]=o.alpha+(s.alpha-o.alpha)*l}return t}var st=class{pipeline=`batch`;vertexSize;indexSize;colorSize;uvSize;vertexStart=0;indexStart=0;colorStart=0;uvStart=0;batch;textureId=0;node;_emitter;_maxParticles;positionType;stretch=0;frames;constructor(e,t,n,r){this.node=e,this._emitter=t,this._maxParticles=n,this.positionType=r,this.vertexSize=n*8,this.indexSize=n*6,this.colorSize=n*4,this.uvSize=n*16}packVertex(e){let t=this.node.pp.worldMatrix;if(this.positionType===R.RELATIVE&&(t.a!==1||t.b!==0||t.c!==0||t.d!==1)){this._packTransformed(e.f32Data);return}if(this.stretch>0){this._packStretched(e.f32Data);return}let{f32Data:n}=e,r=this._emitter,i=this.positionType,{tx:a,ty:o}=this.node.pp.worldMatrix,s=this.vertexStart;for(let e=0;e<this._maxParticles;e++){if(r.life[e]<=0)n[s]=0,n[s+1]=0,n[s+2]=0,n[s+3]=0,n[s+4]=0,n[s+5]=0,n[s+6]=0,n[s+7]=0;else{let t,c;i===R.FREE?(t=r.posX[e]+r.emitWorldX[e],c=r.posY[e]+r.emitWorldY[e]):(t=r.posX[e]+a,c=r.posY[e]+o);let l=r.size[e]*.5,u=r.rotation[e];if(u===0){let e=t-l,r=c-l,i=t+l,a=c+l;n[s]=e,n[s+1]=r,n[s+2]=i,n[s+3]=r,n[s+4]=i,n[s+5]=a,n[s+6]=e,n[s+7]=a}else{let e=Math.cos(u),r=Math.sin(u),i=-l*e+l*r,a=-l*r-l*e,o=l*e+l*r,d=l*r-l*e;n[s]=t+i,n[s+1]=c+a,n[s+2]=t+o,n[s+3]=c+d,n[s+4]=t-i,n[s+5]=c-a,n[s+6]=t-o,n[s+7]=c-d}}s+=8}}_packTransformed(e){let{a:t,b:n,c:r,d:i,tx:a,ty:o}=this.node.pp.worldMatrix,{life:s,posX:c,posY:l,size:u,rotation:d,velX:f,velY:p}=this._emitter,m=this.stretch,h=this.vertexStart;for(let g=0;g<this._maxParticles;g++){if(s[g]<=0){e[h]=0,e[h+1]=0,e[h+2]=0,e[h+3]=0,e[h+4]=0,e[h+5]=0,e[h+6]=0,e[h+7]=0,h+=8;continue}let _=u[g]*.5,v=_,y=1,b=0;if(m>0){let e=f[g],t=p[g],n=Math.sqrt(e*e+t*t);n>1e-4&&(y=e/n,b=t/n,v=Math.max(_,n*m*.5))}else d[g]!==0&&(y=Math.cos(d[g]),b=Math.sin(d[g]));let x=t*c[g]+r*l[g]+a,S=n*c[g]+i*l[g]+o,C=(t*y+r*b)*v,w=(n*y+i*b)*v,T=(r*y-t*b)*_,E=(i*y-n*b)*_;e[h]=x-C-T,e[h+1]=S-w-E,e[h+2]=x+C-T,e[h+3]=S+w-E,e[h+4]=x+C+T,e[h+5]=S+w+E,e[h+6]=x-C+T,e[h+7]=S-w+E,h+=8}}_packStretched(e){let t=this._emitter,n=this.positionType===R.FREE,{tx:r,ty:i}=this.node.pp.worldMatrix,a=this.stretch,{life:o,posX:s,posY:c,velX:l,velY:u,size:d,emitWorldX:f,emitWorldY:p}=t,m=this.vertexStart;for(let t=0;t<this._maxParticles;t++){if(o[t]<=0){e[m]=0,e[m+1]=0,e[m+2]=0,e[m+3]=0,e[m+4]=0,e[m+5]=0,e[m+6]=0,e[m+7]=0,m+=8;continue}let h=n?s[t]+f[t]:s[t]+r,g=n?c[t]+p[t]:c[t]+i,_=l[t],v=u[t],y=d[t],b=Math.sqrt(_*_+v*v),x=1,S=0,C=y;b>1e-4&&(x=_/b,S=v/b,b*a>y&&(C=b*a));let w=x*C*.5,T=S*C*.5,E=-S*y*.5,D=x*y*.5;e[m]=h-w-E,e[m+1]=g-T-D,e[m+2]=h+w-E,e[m+3]=g+T-D,e[m+4]=h+w+E,e[m+5]=g+T+D,e[m+6]=h-w+E,e[m+7]=g-T+D,m+=8}}packIndex(e){let t=this.vertexStart*.5,{data:n}=e,r=this.indexStart;for(let e=0;e<this._maxParticles;e++){let i=t+e*4;n[r]=i,n[r+1]=i+1,n[r+2]=i+2,n[r+3]=i,n[r+4]=i+2,n[r+5]=i+3,r+=6}}packColor(e){let{u32Data:t}=e,n=this._emitter,r=this.node.pp.tint.alpha,i=this.colorStart;for(let e=0;e<this._maxParticles;e++){let a=0;if(n.life[e]>0){let t=n.colorA[e]*r*255|0,i=n.colorB[e]*255|0,o=n.colorG[e]*255|0,s=n.colorR[e]*255|0;a=(t<<24|i<<16|o<<8|s)>>>0}t[i]=a,t[i+1]=a,t[i+2]=a,t[i+3]=a,i+=4}}packUV(e){let{f32Data:t,u32Data:n}=e,r=this.textureId,i=this.frames,a=i&&i.length>1?this._emitter.frame:void 0,o=this.node.texture.uvs,s=this.uvStart;for(let e=0;e<this._maxParticles;e++)a&&(o=i[a[e]].uvs),t[s]=o.x0,t[s+1]=o.y0,n[s+2]=r,n[s+3]=0,t[s+4]=o.x1,t[s+5]=o.y1,n[s+6]=r,n[s+7]=0,t[s+8]=o.x2,t[s+9]=o.y2,n[s+10]=r,n[s+11]=0,t[s+12]=o.x3,t[s+13]=o.y3,n[s+14]=r,n[s+15]=0,s+=16}},ct=class{particleBatch;maxParticles;_seed=0;remainingLife=0;constructor(e,t){this.maxParticles=t,this.particleBatch=new ce(e,t)}update(e,t,n,r,i){if(n=Math.min(Math.floor(n),this.maxParticles),n>0){let e=Math.max(.01,(t.life??1)+Math.abs(t.lifeVariance??0));this.remainingLife=Math.max(this.remainingLife,Math.fround(e))}return this.remainingLife<=0?!1:(this.remainingLife=Math.max(0,Math.fround(this.remainingLife-Math.fround(e))),this._seed+=1+e*1e3,this.particleBatch.updateUniforms(e,n,this._seed,r,i,t),!0)}reset(){this._seed=0,this.remainingLife=0,this.particleBatch.clearParticles()}destroy(){this.particleBatch.destroy()}},lt=1/30,ut=2,dt=-1,ft=0,pt=!1,mt;function ht(){if(!mt){let e=document.createElement(`canvas`);e.width=8,e.height=8;let t=e.getContext(`2d`),n=t.createRadialGradient(8/2,8/2,0,8/2,8/2,8/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,8,8),mt=B.fromCanvas(e)}return mt}var gt=class extends p{config;autoPlay=!0;autoDestroy=!1;useGPU;renderObject;particleBatch;constructor(e){super();let t=this.pp;t.url=``,t.isPlaying=!1,t.isPaused=!1,t.elapsed=0,t.emitFraction=0,t.prewarm=0;let n=e?.config??{};this.config=n;let i=n.maxParticles??150,o=e?.mode??r.AUTO,s=a(n,e?.frames?.length??0);s&&o===r.GPU&&console.warn(`[Liko] ParticleSystem: extended features are CPU-only, GPU mode ignored`),this.useGPU=D&&!s&&(o===r.GPU||o===r.AUTO&&i>256),this.useGPU?(t.gpu=new ct(this,i),this.particleBatch=t.gpu.particleBatch):(t.cpu=new et(i),this.renderObject=new st(this,t.cpu,i,n.positionType??R.RELATIVE)),this.on(h.addedToStage,this._$onAddedToStage,this),this.on(h.removedFromStage,this._$onRemovedFromStage,this),this.setProps(e),t.texture||=ht()}get texture(){return this.pp.texture}set texture(e){this.pp.texture!==e&&(this.pp.texture=e,this.markDirty(this.useGPU?S.texture:S.child))}get frames(){return this.pp.frames}set frames(e){let t=this.pp,n=e?.length?e:void 0;if(t.frames=n,n&&(this.texture=n[0]),this.useGPU){n&&n.length>1&&!pt&&(pt=!0,console.warn(`[Liko] ParticleSystem.frames: multi-frame is CPU-only, GPU path shows the first frame only`));return}if(this.renderObject.frames=n,t.cpu.clampFrames(n?.length??1),n){let e=n[0].buffer;n.some(t=>t.buffer!==e)&&console.warn(`[Liko] ParticleSystem.frames must share one atlas`)}this.markDirty(S.texture)}get url(){return this.pp.url}set url(e){e&&this.pp.url!==e&&this._$loadTexture(e)}get isPlaying(){return this.pp.isPlaying}get isPaused(){return this.pp.isPaused}get particleCount(){return this.pp.cpu?.aliveCount??0}play(){let e=this.pp;if(!e.isPlaying){e.isPlaying=!0,e.isPaused=!1,e.elapsed=0,e.emitFraction=0;let t=this.config;t.prewarm&&!this.useGPU&&(t.duration??-1)<0&&(e.prewarm=(t.life??1)+(t.lifeVariance??0)),this._$startTimer()}return this}pause(){return!this.pp.isPaused&&(this.pp.isPlaying||this._$hasParticles())&&(this.pp.isPaused=!0,this._$stopTimer()),this}resume(){return this.pp.isPaused&&(this.pp.isPaused=!1,this._$startTimer()),this}stop(){let e=this.pp;return(e.isPlaying||e.isPaused)&&(e.isPlaying=!1,e.isPaused=!1,e.prewarm=0,this._$hasParticles()||this.autoDestroy?this._$startTimer():this._$stopTimer()),this}reset(){return this.pp.isPlaying=!1,this.pp.isPaused=!1,this.pp.elapsed=0,this.pp.prewarm=0,this.useGPU?(this.pp.gpu.reset(),this.markDirty(S.size)):(this.pp.cpu.reset(),this.markDirty(S.size),this.markDirty(S.color)),this._$stopTimer(),this}burst(e){let t=this.pp;if(e<=0||t.destroyed||!this._$onStage())return this;let n=this.config.positionType===R.FREE?this.worldMatrix:void 0,r=n?.tx??0,i=n?.ty??0;if(this.useGPU)t.gpu.update(0,this.config,e,r,i);else{let n=t.frames?.length??1;if(t.cpu.spawn(e,this.config,r,i,n)===0)return this;this.markDirty(S.color),n>1&&this.markDirty(S.texture)}return this.markDirty(S.size),t.isPaused||this._$startTimer(),this}destroy(){this._$stopTimer(),this.useGPU&&this.pp.gpu.destroy(),super.destroy()}_customLocalBounds(e){let t=this.config,n=t.shape,r=n?n.type===`circle`?n.radius??0:(n.width??0)*.5:0,i=n?n.type===`circle`?n.radius??0:(n.height??0)*.5:0,a=(t.startSize??16)*2;e.addFrame(-a-r,-a-i,a+r,a+i)}_$hasParticles(){let{cpu:e,gpu:t}=this.pp;return e?e.aliveCount>0:t.remainingLife>0}_$onAddedToStage(){let e=this.pp;e.timer&&this._$stopTimer(),!e.isPaused&&(e.isPlaying||this._$hasParticles()?this._$startTimer():this.autoPlay&&this.play())}_$onRemovedFromStage(e){e||this._$stopTimer()}_$startTimer(){let e=this.pp;e.timer||(e.timer=this._$animClock(),e.timer?.onFrame(this._$tick,this))}_$stopTimer(){let e=this.pp;e.timer?.clearTimer(this._$tick,this),e.timer=void 0}_$tick(){let e=this.pp,t=e.timer?.delta;if(!t)return;let n=this.config,r=n.positionType===R.FREE?this.worldMatrix:void 0,i=r?.tx??0,a=r?.ty??0;e.gpu?e.gpu.update(t,n,this._$emitCount(t),i,a)&&this.markDirty(S.size):this._$tickCpu(t,n,i,a),!e.isPlaying&&!this._$hasParticles()&&(this._$stopTimer(),this.autoDestroy&&this.destroy())}_$emitCount(e){let t=this.pp;if(!t.isPlaying)return 0;let{duration:n=-1,emissionRate:r=10,bursts:i}=this.config,a=t.elapsed,o=e;n>=0&&a+e>=n&&(o=Math.max(0,n-a),t.isPlaying=!1),t.elapsed=a+o;let s=t.emitFraction+Math.max(0,r)*o,c=Math.floor(s+1e-9);return t.emitFraction=s-c,i?.length?c+v(i,a,t.elapsed):c}_$tickCpu(e,t,n,r){let i=this.pp,a=this.renderObject;a.positionType=t.positionType??R.RELATIVE,a.stretch=(t.emitterMode??_.GRAVITY)===_.GRAVITY?t.stretch??0:0;let o=i.cpu,s=o.aliveCount,c=i.frames?.length??1,u=!1;if(i.prewarm>0){let e=l.system.currentFrame;for(e!==dt&&(dt=e,ft=performance.now()+ut);i.prewarm>0&&performance.now()<ft;){let e=Math.min(lt,i.prewarm);i.prewarm-=e,o.update(e,t,this._$emitCount(e),n,r,c)&&(u=!0)}}else u=o.update(e,t,this._$emitCount(e),n,r,c);u&&this.markDirty(S.texture);let d=o.aliveCount;(d>0||s>0)&&this.markDirty(S.size),d>0&&this.markDirty(S.color)}async _$loadTexture(e){let t=this.pp;t.url=e;let n=await I.load(e,`image`);this.destroyed||!n||t.url!==e||(this.texture=n,this.emit(h.loaded))}};gt=P([c(`ParticleSystem`),f(`design:paramtypes`,[Object])],gt);var _t=new WeakMap;function vt(e,t){let n=_t.get(e);if(!n){let t=e.markDirty,r=new Set,i=n=>{t.call(e,n);for(let e of r)e(n)};e.markDirty=i,n={listeners:r,stop:()=>{e.markDirty===i&&(e.markDirty=t),_t.delete(e)}},_t.set(e,n)}let{stop:r,listeners:i}=n;return i.add(t),()=>{i.delete(t)&&!i.size&&r()}}function yt(e,t){if(!e.body)return e.joints.push(t),null;let{physics:n,body:r}=e,{pl:i,world:a,toPhPos:o,toPh:s}=n,c=typeof t.bodyB==`string`?bt(e.scene,t.bodyB):t.bodyB;if(!c)throw Error(`bodyB is not set${t.label?`,label:${t.label}`:``}${t.bodyB?`,bodyB:${t.bodyB}`:``}`);if(c.body?.getWorld()!==a)throw Error(`Joint endpoints must have bodies in the same physics world`);switch(t.jointType){case`revolute`:{let{localAnchorA:n,localAnchorB:o}=Q(e,c,t);return a.createJoint(new i.RevoluteJoint({bodyA:r,bodyB:c.body,localAnchorA:n,localAnchorB:o,collideConnected:t.collideConnected,enableLimit:t.enableLimit,lowerAngle:t.lowerAngle,upperAngle:t.upperAngle,enableMotor:t.enableMotor,maxMotorTorque:t.maxMotorTorque==null?void 0:s(s(t.maxMotorTorque)),motorSpeed:t.motorSpeed==null?void 0:-t.motorSpeed,referenceAngle:t.referenceAngle}))}case`distance`:{let{localAnchorA:n,localAnchorB:o}=Q(e,c,t);return a.createJoint(new i.DistanceJoint({bodyA:r,bodyB:c.body,localAnchorA:n,localAnchorB:o,collideConnected:t.collideConnected,length:s(t.length??10),frequencyHz:t.frequencyHz,dampingRatio:t.dampingRatio}))}case`fixed`:{let{localAnchorA:n,localAnchorB:o}=Q(e,c,t);return a.createJoint(new i.WeldJoint({bodyA:r,bodyB:c.body,localAnchorA:n,localAnchorB:o,collideConnected:t.collideConnected,frequencyHz:t.frequencyHz,dampingRatio:t.dampingRatio,referenceAngle:t.referenceAngle}))}case`prismatic`:{let{localAnchorA:n,localAnchorB:o}=Q(e,c,t);return a.createJoint(new i.PrismaticJoint({bodyA:r,bodyB:c.body,localAnchorA:n,localAnchorB:o,localAxisA:{x:-t.localAxisA.x,y:-t.localAxisA.y},collideConnected:t.collideConnected,enableLimit:t.enableLimit,lowerTranslation:t.lowerTranslation==null?void 0:s(t.lowerTranslation),upperTranslation:t.upperTranslation==null?void 0:s(t.upperTranslation),enableMotor:t.enableMotor,maxMotorForce:t.maxMotorForce==null?void 0:s(t.maxMotorForce),motorSpeed:t.motorSpeed==null?void 0:s(t.motorSpeed),referenceAngle:t.referenceAngle}))}case`wheel`:{let{localAnchorA:n,localAnchorB:o}=Q(e,c,t);return a.createJoint(new i.WheelJoint({bodyA:r,bodyB:c.body,localAnchorA:n,localAnchorB:o,localAxisA:{x:-t.localAxisA.x,y:-t.localAxisA.y},collideConnected:t.collideConnected,enableMotor:t.enableMotor,maxMotorTorque:t.maxMotorTorque==null?void 0:s(s(t.maxMotorTorque)),motorSpeed:t.motorSpeed==null?void 0:-t.motorSpeed,frequencyHz:t.frequencyHz??2,dampingRatio:t.dampingRatio??.7}))}case`rope`:{let{localAnchorA:n,localAnchorB:o}=Q(e,c,t);return a.createJoint(new i.RopeJoint({bodyA:r,bodyB:c.body,localAnchorA:n,localAnchorB:o,maxLength:s(t.maxLength),collideConnected:t.collideConnected}))}case`motor`:return a.createJoint(new i.MotorJoint({bodyA:r,bodyB:c.body,collideConnected:t.collideConnected!==!1,linearOffset:t.linearOffset?o(t.linearOffset):void 0,angularOffset:t.angularOffset??0,maxForce:s(t.maxForce??1),maxTorque:s(s(t.maxTorque??1)),correctionFactor:t.correctionFactor??.3}));case`pulley`:{let{localAnchorA:n,localAnchorB:l}=Q(e,c,t);return a.createJoint(new i.PulleyJoint({bodyA:r,bodyB:c.body,localAnchorA:n,localAnchorB:l,groundAnchorA:o(t.groundAnchorA),groundAnchorB:o(t.groundAnchorB),lengthA:s(t.lengthA),lengthB:s(t.lengthB),ratio:t.ratio,collideConnected:t.collideConnected!==!1}))}}}function Q(e,t,n){let{physics:r,target:i}=e,a=t.target,o=e.scene;if(`localAnchorA`in n&&n.localAnchorA){let e=i.getWorldScale(o),t=r.toPhPos({x:(n.localAnchorA.x+i.pivot.x)*e.x,y:(n.localAnchorA.y+i.pivot.y)*e.y});if(`localAnchorB`in n&&n.localAnchorB){let e=a.getWorldScale(o);return{localAnchorA:t,localAnchorB:r.toPhPos({x:(n.localAnchorB.x+a.pivot.x)*e.x,y:(n.localAnchorB.y+a.pivot.y)*e.y})}}let s=i.toGlobal({x:n.localAnchorA.x+i.pivot.x,y:n.localAnchorA.y+i.pivot.y},void 0,o),c=a.toLocal(s,void 0,o),l=a.getWorldScale(o);return{localAnchorA:t,localAnchorB:r.toPhPos({x:c.x*l.x,y:c.y*l.y})}}return{localAnchorA:{x:0,y:0},localAnchorB:{x:0,y:0}}}function bt(e,t){if(e){if(e.scripts){for(let n of e.scripts)if(n instanceof wt&&n.label===t)return n}if(e.children)for(let n of e.children){if(n.scene!==e.scene)continue;let r=bt(n,t);if(r)return r}}}var xt={bottom:[0,-1],top:[0,1],left:[1,0],right:[-1,0]};function St(e,t,n){let{physics:r,body:i}=e,a=t.crossSide??e.crossSide,o={shape:t};if(a){let n=t.surfaceArc??e.surfaceArc,[r,i]=xt[a];o.oneWay={x:r,y:i,cos:n>=360?-2:Math.cos(n*.5*C)}}let s={density:t.density??1,isSensor:t.isSensor??e.isSensor,friction:t.friction??e.friction,restitution:t.restitution??e.restitution,filterGroupIndex:t.filterGroupIndex??0,filterCategoryBits:t.filterCategoryBits??r.getCategoryBit(e.category),filterMaskBits:t.filterMaskBits??r.getCategoryMask(e.categoryAccepted),userData:o},c=e.target.getLocalBounds(),{pl:l,toPh:u,toPhPos:d}=r,f=t.type===`box`||t.type===`rect`||t.type===`circle`||t.type===`capsule`,p=t.x!=null||t.y!=null,m,h;switch(p?(m=(t.x??0)*n.x,h=(t.y??0)*n.y):f?(m=(c.x+c.width/2)*n.x,h=(c.y+c.height/2)*n.y):(m=0,h=0),t.type){case`box`:case`rect`:{let e=(t.width??c.width)*Math.abs(n.x),r=(t.height??c.height)*Math.abs(n.y);i.createFixture(new l.Box(u(e)/2,u(r)/2,{x:u(m),y:u(h)}),s);break}case`circle`:{let e=(t.radius??c.height/2)*Math.abs(n.y);i.createFixture(new l.Circle({x:u(m),y:u(h)},u(e)),s);break}case`capsule`:{let e=(t.width??c.width)*Math.abs(n.x),r=Math.max(e,(t.height??c.height)*Math.abs(n.y)),a=u(e/2),d=u((r-e)/2),f=u(m),p=u(h);if(d<=0){i.createFixture(new l.Circle({x:f,y:p},a),s);break}let g=e=>({...s,userData:{...o,capsule:{part:e,half:d,r:a}}});i.createFixture(new l.Box(a,d,{x:f,y:p}),g(0)),i.createFixture(new l.Circle({x:f,y:p-d},a),g(-1)),i.createFixture(new l.Circle({x:f,y:p+d},a),g(1));break}case`polygon`:{let e=t.points,r=[],a=p?m:0,o=p?h:0;for(let t=0;t<e.length;t+=2)r.push(d({x:e[t]*n.x+a,y:e[t+1]*n.y+o}));if(r.length<3||r.length>8)return;i.createFixture(new l.Polygon(r),s);break}case`chain`:case`line`:{let e=t.points,r=[],a=p?m:0,o=p?h:0;for(let t=0;t<e.length;t+=2)r.push(d({x:e[t]*n.x+a,y:e[t+1]*n.y+o}));if(r.length<2)return;i.createFixture(new l.Chain(r,!1),s);break}}}function Ct(e){let t=e.body;if(!t||!t.isDynamic())return;let n=!1;for(let e=t.getFixtureList();e;e=e.getNext())if(e.getUserData().shape.type===`capsule`){n=!0;break}if(!n)return;let r=e.physics.pl,i={mass:0,center:r.Vec2.zero(),I:0},a={mass:0,center:r.Vec2.zero(),I:0},o=0,s=0,c=0,l=0,u,d=0,f=0,p=0,m=0,h=0,g=0,_=1/0,v=-1/0,y=()=>{if(d>0){let e=h*(2*g*(v-_)+Math.PI*g*g)/d;o+=d*e,s+=f*e,c+=p*e,l+=m*e}d=f=p=m=0,_=1/0,v=-1/0};for(let e=t.getFixtureList();e;e=e.getNext()){let t=e.getUserData().shape;if(t!==u&&(u&&y(),u=t.type===`capsule`?t:void 0),e.getDensity()!==0)if(e.getMassData(a),u){d+=a.mass,f+=a.I,p+=a.mass*a.center.x,m+=a.mass*a.center.y,h=e.getDensity();let t=e.getShape();if(t.getType()===`circle`){g=t.getRadius();let e=t.getCenter().y;e<_&&(_=e),e>v&&(v=e)}}else o+=a.mass,s+=a.I,c+=a.mass*a.center.x,l+=a.mass*a.center.y}u&&y(),!(o<=0)&&(i.mass=o,i.center.set(c/o,l/o),i.I=s,t.setMassData(i))}var wt=class extends o{_zeroPoint={x:0,y:0};_tempPos={x:0,y:0};_tempWorldPos={x:0,y:0};_truePos={x:0,y:0};_joints=[];_updatingByRigid=!1;_unobserveDirty;_lastSync={x:NaN,y:NaN,rotation:NaN,scaleX:NaN,scaleY:NaN,pivotX:NaN,pivotY:NaN,parent:void 0};_fixtureScale={x:1,y:1};_scaleDebounceId=0;_def={gravityScale:1,linearVelocity:{x:0,y:0},linearDamping:0,angularVelocity:0,angularDamping:0,bullet:!1,allowRotation:!1,allowSleeping:!0,sleeping:!1};_prevX=0;_prevY=0;_prevA=0;_settled=!1;_$queryStamp=0;_$contactCounts=new Map;physics;body;interpolate;_rigidType=`static`;get rigidType(){return this._rigidType}set rigidType(e){this._rigidType!==e&&(this._rigidType=e,this.body&&(this.body.setType(e),Ct(this)))}_shapes=[];get shapes(){return this._shapes}set shapes(e){this._shapes=e,this.body&&this._resetShapes()}joints=[];crossSide;surfaceArc=180;_category=``;get category(){return this._category}set category(e){if(this._category===e||(this._category=e,!this.body))return;let t=this.physics.getCategoryBit(e);for(let e=this.body.getFixtureList();e;e=e.getNext())e.getUserData().shape.filterCategoryBits??e.setFilterCategoryBits(t)}_categoryAccepted;get categoryAccepted(){return this._categoryAccepted}set categoryAccepted(e){if(this._categoryAccepted=typeof e==`string`?e.split(/[,，]/):e,!this.body)return;let t=this.physics.getCategoryMask(this._categoryAccepted);for(let e=this.body.getFixtureList();e;e=e.getNext())e.getUserData().shape.filterMaskBits??e.setFilterMaskBits(t)}_isSensor=!1;get isSensor(){return this._isSensor}set isSensor(e){if(this._isSensor=e,this.body)for(let t=this.body.getFixtureList();t;t=t.getNext())t.getUserData().shape.isSensor??t.setSensor(e)}_friction=.2;get friction(){return this._friction}set friction(e){if(this._friction=e,this.body){for(let t=this.body.getFixtureList();t;t=t.getNext())t.getUserData().shape.friction??t.setFriction(e);for(let e=this.body.getContactList();e;e=e.next)e.contact.resetFriction()}}_restitution=0;get restitution(){return this._restitution}set restitution(e){if(this._restitution=e,this.body){for(let t=this.body.getFixtureList();t;t=t.getNext())t.getUserData().shape.restitution??t.setRestitution(e);for(let e=this.body.getContactList();e;e=e.next)e.contact.resetRestitution()}}_onCollisionStart;get onCollisionStart(){return this._onCollisionStart}set onCollisionStart(e){this._onCollisionStart&&this.awaked&&this.target.off(h.collisionStart,this._onCollisionStart,this),this._onCollisionStart=e,e&&this.awaked&&this.target.on(h.collisionStart,e,this)}_onCollisionEnd;get onCollisionEnd(){return this._onCollisionEnd}set onCollisionEnd(e){this._onCollisionEnd&&this.awaked&&this.target.off(h.collisionEnd,this._onCollisionEnd,this),this._onCollisionEnd=e,e&&this.awaked&&this.target.on(h.collisionEnd,e,this)}get angularVelocity(){return this.body?this.body.getAngularVelocity():this._def.angularVelocity}set angularVelocity(e){this.body?this.body.setAngularVelocity(e):this._def.angularVelocity=e}get angularDamping(){return this.body?this.body.getAngularDamping():this._def.angularDamping}set angularDamping(e){this.body?this.body.setAngularDamping(e):this._def.angularDamping=e}get gravityScale(){return this.body?this.body.getGravityScale():this._def.gravityScale}set gravityScale(e){if(!this.body){this._def.gravityScale=e;return}this.body.setGravityScale(e),this.body.setAwake(!0)}get linearVelocity(){return this.body?this.physics.to2DPos(this.body.getLinearVelocity()):{...this._def.linearVelocity}}set linearVelocity(e){this.body?this.body.setLinearVelocity(this.physics.toPhPos(e)):this._def.linearVelocity={x:e.x,y:e.y}}get linearDamping(){return this.body?this.body.getLinearDamping():this._def.linearDamping}set linearDamping(e){this.body?this.body.setLinearDamping(e):this._def.linearDamping=e}get bullet(){return this.body?this.body.isBullet():this._def.bullet}set bullet(e){this.body?this.body.setBullet(e):this._def.bullet=e}get allowRotation(){return this.body?!this.body.isFixedRotation():this._def.allowRotation}set allowRotation(e){this.body?this.body.setFixedRotation(!e):this._def.allowRotation=e}get allowSleeping(){return this.body?this.body.isSleepingAllowed():this._def.allowSleeping}set allowSleeping(e){this.body?this.body.setSleepingAllowed(e):this._def.allowSleeping=e}get sleeping(){return this.body?!this.body.isAwake():this._def.sleeping}set sleeping(e){this.body?this.body.setAwake(!e):this._def.sleeping=e}get mass(){return this.body?.getMass()??0}get x(){return this.position.x}set x(e){this.setPosition(e,this.position.y)}get y(){return this.position.y}set y(e){this.setPosition(this.position.x,e)}get angle(){return this.rotation*A}set angle(e){this.setAngle(e)}get rotation(){return this.body&&this._rigidType!==`static`?this._localRotation(this.body.getAngle()):this.target.rotation}set rotation(e){this.setRotation(e)}get position(){let e=this.target,t=this._truePos;if(!this.body||this._rigidType===`static`)return t.x=e.position.x,t.y=e.position.y,t;let n=this.body.getPosition(),r=this.physics.pixelsPerMeter;return this._computeTargetPos(n.x*r,n.y*r,this._localRotation(this.body.getAngle()),t),t}set position(e){this.setPosition(e.x,e.y)}priority=-100;constructor(e){super(),e&&this.setProps(e)}get target(){return super.target}set target(e){super.target=e,e.pp.rigidBody=this}_$awake(){this.awaked||!this.enabled||this._unobserveDirty||this.target._$onStage()&&(this._unobserveDirty=vt(this.target,this._handleMarkDirty.bind(this)),super._$awake())}_handleMarkDirty(e){this._updatingByRigid||!this.body||!(e&S.transform)||(this._syncBodyFromTarget(),this._checkScaleChange())}_bodyOrigin(e){let t=this.target,n=this.scene,r=t.parent;if(!r||r===n){let n=t.localMatrix;e.x=n.tx,e.y=n.ty}else n&&t.toGlobal(this._zeroPoint,e,n);return e}_syncBodyFromTarget(e=!1){let t=this.target,{x:n,y:r}=t.position,i=t.rotation,a=t.scale._x,o=t.scale._y,s=t.pivot.x,c=t.pivot.y,l=t.parent,u=this._lastSync;if(!e&&n===u.x&&r===u.y&&i===u.rotation&&a===u.scaleX&&o===u.scaleY&&s===u.pivotX&&c===u.pivotY&&l===u.parent||!this.scene)return;let d=this.physics.toPhPos(this._bodyOrigin(this._tempWorldPos),this._tempWorldPos);this.body.setTransform(d,this._getWorldRotation()),this._teleported(),u.x=n,u.y=r,u.rotation=i,u.pivotX=s,u.pivotY=c,u.parent=l}onAwake(){let e=this.scene;if(!e)throw Error(`RigidBody must be inside a Scene, node: "${this.target.label}"`);this._createBody(e.physics),this._onCollisionStart&&this.target.on(h.collisionStart,this._onCollisionStart,this),this._onCollisionEnd&&this.target.on(h.collisionEnd,this._onCollisionEnd,this)}_createBody(e){this.physics=e,this._$queryStamp=0;let t=this.target,n=this._def,r=e.toPhPos(this._bodyOrigin(this._tempWorldPos),this._tempWorldPos),i=e.world.createBody({type:this._rigidType,position:{x:r.x,y:r.y},angle:this._getWorldRotation(),angularVelocity:n.angularVelocity,linearDamping:n.linearDamping,angularDamping:n.angularDamping,gravityScale:n.gravityScale,bullet:n.bullet,fixedRotation:!n.allowRotation,allowSleep:n.allowSleeping,awake:!n.sleeping,active:this.enabled,userData:this});this.body=i,this._shapes.length||this._shapes.push({type:`box`}),this._buildShapes(),i.setLinearVelocity(e.toPhPos(n.linearVelocity)),this._teleported(),n.sleeping&&i.setAwake(!1);let a=this._lastSync;a.x=t.position.x,a.y=t.position.y,a.rotation=t.rotation,a.pivotX=t.pivot.x,a.pivotY=t.pivot.y,a.parent=t.parent}_destroyBody(){let e=this.body;if(e){for(let t=e.getJointList();t;t=t.next){let e=t.other.getUserData();e.destroyed||e._$removeJoint(t.joint)}this._joints.length=0,this.physics.destroyed||this.physics.world.destroyBody(e),this.body=void 0,this._$contactCounts.clear()}}_$leaveStage(e){super._$leaveStage(e),e||this.body?.setActive(!1)}_$enterStage(){if(super._$enterStage(),!this.body||this.destroyed)return;let e=this.target.scene;if(!e){this.body.setActive(!1);return}let t=e.physics;if(t===this.physics){this._syncBodyFromTarget(!0),this._fixtureScaleChanged()&&this._resetShapes(),this.enabled&&this.body.setActive(!0);return}this._saveDef(),this._destroyBody(),this._createBody(t)}_saveDef(){let e=this.body,t=this._def,n=e.getLinearVelocity(),r=this.physics.pixelsPerMeter;t.linearVelocity={x:n.x*r,y:n.y*r},t.angularVelocity=e.getAngularVelocity(),t.linearDamping=e.getLinearDamping(),t.angularDamping=e.getAngularDamping(),t.gravityScale=e.getGravityScale(),t.bullet=e.isBullet(),t.allowRotation=!e.isFixedRotation(),t.allowSleeping=e.isSleepingAllowed(),t.sleeping=!e.isAwake()}onStart(){this.joints.length&&this._createPendingJoints()}_createPendingJoints(){if(!this.body||!this.joints.length)return;let e=this.joints;this.joints=[];for(let t of e)this.addJoint(t)}_fixtureScaleChanged(){let e=this.target.getWorldScale(this.scene,this._tempWorldPos);return e.x!==this._fixtureScale.x||e.y!==this._fixtureScale.y}_buildShapes(){let e=this.target.getWorldScale(this.scene,this._fixtureScale);for(let t of this._shapes)St(this,t,e);Ct(this),this._lastSync.scaleX=this.target.scale._x,this._lastSync.scaleY=this.target.scale._y}_resetShapes(){let e=this.body.getFixtureList();for(;e;){let t=e.getNext();this.body.destroyFixture(e),e=t}this._buildShapes(),this._rigidType!==`static`&&this.body.setAwake(!0)}_checkScaleChange(){if(!this.body||!this._shapes.length)return;let e=this.target.scale._x,t=this.target.scale._y,n=this._lastSync;(e!==n.scaleX||t!==n.scaleY)&&(this._scaleDebounceId||=window.setTimeout(()=>{if(this._scaleDebounceId=0,this.destroyed||!this.body||!this._shapes.length)return;let e=this.target.scale._x,t=this.target.scale._y;(e!==this._lastSync.scaleX||t!==this._lastSync.scaleY)&&this._resetShapes()},100))}_teleported(){let e=this.body,t=e.getPosition();this._prevX=t.x,this._prevY=t.y,this._prevA=e.getAngle(),this._settled=!1,this._rigidType!==`static`&&e.setAwake(!0)}_$savePrev(){let e=this.body,t=e.getPosition();this._prevX=t.x,this._prevY=t.y,this._prevA=e.getAngle()}_$syncToTarget(e){let t=this.body;if(!t.isActive())return!1;let n=t.isAwake();if(!n&&this._settled)return!1;this._settled=!n,n||this._$savePrev();let r=this.physics,i=r.pixelsPerMeter,a=t.getPosition(),o=this._tempPos;if(o.x=a.x*i,o.y=a.y*i,!r.inBoundaryArea(o))return!0;let s=t.getAngle();n&&e<1&&(this.interpolate??r.interpolate)&&(o.x=(this._prevX+(a.x-this._prevX)*e)*i,o.y=(this._prevY+(a.y-this._prevY)*e)*i,s=this._prevA+(s-this._prevA)*e),this._updatingByRigid=!0;let c=this.target;t.isFixedRotation()||(c.rotation=this._localRotation(s));let l=this._computeTargetPos(o.x,o.y,c.rotation,o);c.position.set(l.x,l.y);let u=this._lastSync;return u.x=c.position.x,u.y=c.position.y,u.rotation=c.rotation,this._updatingByRigid=!1,!1}_computeTargetPos(e,t,n,r){let i=this.target,a=this.scene,o=i.parent,s=e,c=t;if(o&&o!==a&&a){r.x=e,r.y=t;let n=o.toLocal(r,r,a);s=n.x,c=n.y}let l=i.pivot.x,u=i.pivot.y;if(l===0&&u===0)r.x=s,r.y=c;else{let e=Math.cos(n),t=Math.sin(n),a=i.scale._x,o=i.scale._y;r.x=s+l*e*a-u*t*o,r.y=c+l*t*a+u*e*o}return r}_localRotation(t){return(t-this._getParentWorldRotation())%e}onEnable(){this.target._$onStage()&&this.body?.setActive(!0)}onDisable(){this.body?.setActive(!1)}setPosition(e,t){this._setPose(e,t,this.rotation)}getRotation(){return this.rotation}setRotation(e){let{x:t,y:n}=this.body&&this.scene?this.position:this.target.position;this._setPose(t,n,e)}_setPose(e,t,n){this._updatingByRigid=!0;try{this.target.position.set(e,t),this.target.rotation=n,this.body&&this._syncBodyFromTarget(!0)}finally{this._updatingByRigid=!1}}setAngle(e){this.setRotation(e*C)}setLinearVelocity(e,t){let n=this.linearVelocity,r=typeof e==`object`?e?.x:e,i=typeof e==`object`?e?.y:t;this.linearVelocity={x:r??n.x,y:i??n.y},this.body&&this._rigidType!==`static`&&this.body.setAwake(!0)}getLinearVelocity(){return this.linearVelocity}setAngularVelocity(e){this.angularVelocity=e,this.body&&this._rigidType!==`static`&&this.body.setAwake(!0)}applyLinearImpulse(e,t={x:0,y:0}){console.assert(this.rigidType===`dynamic`,`applyLinearImpulse only works on dynamic bodies`);let n=this.physics.toPhPos(e),r=this.physics.toPhPos(t),i=this.body.getWorldCenter();this.body.applyLinearImpulse(n,{x:i.x+r.x,y:i.y+r.y},!0)}applyForce(e,t={x:0,y:0}){console.assert(this.rigidType===`dynamic`,`applyForce only works on dynamic bodies`);let n=this.physics.toPhPos(e),r=this.physics.toPhPos(t),i=this.body.getWorldCenter();this.body.applyForce(n,{x:i.x+r.x,y:i.y+r.y},!0)}applyForceToCenter(e){console.assert(this.rigidType===`dynamic`,`applyForceToCenter only works on dynamic bodies`),this.body.applyForceToCenter(this.physics.toPhPos(e),!0)}applyTorque(e){console.assert(this.rigidType===`dynamic`&&this.allowRotation,`applyTorque only works on dynamic bodies with allowRotation`),this.body.applyTorque(this.physics.toPh(this.physics.toPh(e)),!0)}applyAngularImpulse(e){console.assert(this.rigidType===`dynamic`&&this.allowRotation,`applyAngularImpulse only works on dynamic bodies with allowRotation`),this.body.applyAngularImpulse(this.physics.toPh(this.physics.toPh(e)),!0)}addShape(e){this._shapes.push(e),this.body&&(this._fixtureScaleChanged()?this._resetShapes():(St(this,e,this._fixtureScale),Ct(this)))}addJoint(e){try{let t=yt(this,e);t&&(t.setUserData(e.label),this._joints.push(t))}catch(e){console.error(`addJoint error:`,e)}}destroyJoint(e){let t=this._joints.findIndex(t=>t.getUserData()===e);if(t!==-1){let e=this._joints[t];this._joints.splice(t,1),this.physics.world.destroyJoint(e)}}destroyAllJoints(){let e=this._joints;this._joints=[];for(let t of e)this.physics.world.destroyJoint(t)}removeJoint(e){this.destroyJoint(e)}getJointCount(){return this._joints.length}_$removeJoint(e){let t=this._joints.indexOf(e);t!==-1&&this._joints.splice(t,1)}onDestroy(){this._scaleDebounceId&&clearTimeout(this._scaleDebounceId),this._destroyBody(),this._unobserveDirty?.(),this._unobserveDirty=void 0,this.target.pp.rigidBody=void 0}_getWorldRotation(){return this.target.rotation+this._getParentWorldRotation()}_getParentWorldRotation(){let e=0,t=this.scene,n=this.target.parent;for(;n&&n!==t;)e+=n.rotation,n=n.parent;return e}};wt=P([d(`RigidBody`),f(`design:paramtypes`,[Object])],wt);var Tt=`#version 300 es
precision highp float;

in vec2 vUV;
out vec4 finalColor;

uniform sampler2D uTex;
uniform sampler2D uBloom;
// x = 强度（已含各级权重归一化）
uniform vec4 uParams;

// 与 bloom-composite.wgsl 相同
void main() {
    vec4 src = texture(uTex, vUV);
    vec3 b = texture(uBloom, vUV).rgb * uParams.x;
    float a = max(src.a, min(1.0, max(b.r, max(b.g, b.b))));
    finalColor = vec4(src.rgb + b, a);
}
`,Et=`struct VertexInput {
  @location(0) xy: vec2<f32>,
  @location(1) uv: vec2<f32>,
};

struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv: vec2<f32>,
};

@group(0) @binding(0) var<uniform> projection: mat4x4<f32>;
@group(0) @binding(1) var tex: texture_2d<f32>;
@group(0) @binding(2) var samp: sampler;

struct BloomUniforms {
  // x = 强度（已含各级权重归一化）
  uParams: vec4<f32>,
};
@group(1) @binding(0) var<uniform> bloom: BloomUniforms;
@group(1) @binding(1) var uBloom: texture_2d<f32>;
@group(1) @binding(2) var uBloomSampler: sampler;

@vertex
fn vert_main(input: VertexInput) -> VertexOutput {
    var out: VertexOutput;
    out.position = projection * vec4<f32>(input.xy, 0.0, 1.0);
    out.uv = input.uv;
    return out;
}

// 合成：原图 + 泛光 × 强度（预乘 alpha）；透明区域的光晕用泛光亮度补 alpha，否则会被父级混合吃掉
@fragment
fn frag_main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
    let src = textureSample(tex, samp, uv);
    let b = textureSample(uBloom, uBloomSampler, uv).rgb * bloom.uParams.x;
    let a = max(src.a, min(1.0, max(b.r, max(b.g, b.b))));
    return vec4<f32>(src.rgb + b, a);
}
`,Dt=`#version 300 es
precision highp float;

in vec2 vUV;
out vec4 finalColor;

uniform sampler2D uTex;
// inputPixel: [physicalW, physicalH, 1/physicalW, 1/physicalH]
uniform vec4 inputPixel;
// x = 阈值，y = 软膝宽度，z = 1 时做阈值提取（第一级）
uniform vec4 uParams;

// 与 bloom-down.wgsl 相同的软膝阈值
vec4 prefilter(vec4 c) {
    vec3 rgb = min(c.rgb, vec3(64.0));
    float br = max(rgb.r, max(rgb.g, rgb.b));
    float t = uParams.x;
    float k = uParams.y;
    float soft = clamp(br - t + k, 0.0, 2.0 * k);
    soft = soft * soft / (4.0 * k + 1e-4);
    return vec4(rgb * (max(br - t, soft) / max(br, 1e-4)), 0.0);
}

vec4 tap(vec2 uv) {
    vec4 c = texture(uTex, uv);
    return uParams.z > 0.5 ? prefilter(c) : c;
}

// 双滤波降采样（同 bloom-down.wgsl）
void main() {
    vec2 o = inputPixel.zw;
    vec4 sum = tap(vUV) * 4.0;
    sum += tap(vUV - o);
    sum += tap(vUV + o);
    sum += tap(vUV + vec2(o.x, -o.y));
    sum += tap(vUV - vec2(o.x, -o.y));
    finalColor = sum * 0.125;
}
`,Ot=`struct VertexInput {
  @location(0) xy: vec2<f32>,
  @location(1) uv: vec2<f32>,
};

struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv: vec2<f32>,
};

@group(0) @binding(0) var<uniform> projection: mat4x4<f32>;
@group(0) @binding(1) var tex: texture_2d<f32>;
@group(0) @binding(2) var samp: sampler;

struct InputInfo {
  inputSize: vec4<f32>,
  inputPixel: vec4<f32>,
  inputClamp: vec4<f32>,
};
@group(0) @binding(3) var<uniform> inputInfo: InputInfo;

struct BloomUniforms {
  // x = 阈值，y = 软膝宽度，z = 1 时做阈值提取（第一级），w 未用
  uParams: vec4<f32>,
};
@group(1) @binding(0) var<uniform> bloom: BloomUniforms;

@vertex
fn vert_main(input: VertexInput) -> VertexOutput {
    var out: VertexOutput;
    out.position = projection * vec4<f32>(input.xy, 0.0, 1.0);
    out.uv = input.uv;
    return out;
}

// 软膝阈值（同 URP）：亮度低于 阈值-膝 为 0，膝区内二次过渡；先钳制极亮像素，避免闪烁
fn prefilter(c: vec4<f32>) -> vec4<f32> {
    let rgb = min(c.rgb, vec3<f32>(64.0));
    let br = max(rgb.r, max(rgb.g, rgb.b));
    let t = bloom.uParams.x;
    let k = bloom.uParams.y;
    var soft = clamp(br - t + k, 0.0, 2.0 * k);
    soft = soft * soft / (4.0 * k + 1e-4);
    return vec4<f32>(rgb * (max(br - t, soft) / max(br, 1e-4)), 0.0);
}

fn tap(uv: vec2<f32>) -> vec4<f32> {
    let c = textureSample(tex, samp, uv);
    if (bloom.uParams.z > 0.5) {
        return prefilter(c);
    }
    return c;
}

// 双滤波降采样：中心 ×4 + 四个对角（偏移 1 个输入纹素，双线性各覆盖 2×2），覆盖 4×4 输入纹素
@fragment
fn frag_main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
    let o = inputInfo.inputPixel.zw;
    var sum = tap(uv) * 4.0;
    sum += tap(uv - o);
    sum += tap(uv + o);
    sum += tap(uv + vec2<f32>(o.x, -o.y));
    sum += tap(uv - vec2<f32>(o.x, -o.y));
    return sum * 0.125;
}
`,kt=`#version 300 es
precision highp float;

in vec2 vUV;
out vec4 finalColor;

uniform sampler2D uTex;
uniform vec4 inputPixel;
// x = 扩散权重
uniform vec4 uParams;

// 双滤波升采样（同 bloom-up.wgsl）
void main() {
    vec2 o = inputPixel.zw * 0.5;
    vec4 sum = texture(uTex, vUV + vec2(-o.x * 2.0, 0.0));
    sum += texture(uTex, vUV + vec2(o.x * 2.0, 0.0));
    sum += texture(uTex, vUV + vec2(0.0, -o.y * 2.0));
    sum += texture(uTex, vUV + vec2(0.0, o.y * 2.0));
    sum += texture(uTex, vUV + vec2(-o.x, o.y)) * 2.0;
    sum += texture(uTex, vUV + vec2(o.x, o.y)) * 2.0;
    sum += texture(uTex, vUV + vec2(-o.x, -o.y)) * 2.0;
    sum += texture(uTex, vUV + vec2(o.x, -o.y)) * 2.0;
    finalColor = sum * (uParams.x / 12.0);
}
`,At=`struct VertexInput {
  @location(0) xy: vec2<f32>,
  @location(1) uv: vec2<f32>,
};

struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv: vec2<f32>,
};

@group(0) @binding(0) var<uniform> projection: mat4x4<f32>;
@group(0) @binding(1) var tex: texture_2d<f32>;
@group(0) @binding(2) var samp: sampler;

struct InputInfo {
  inputSize: vec4<f32>,
  inputPixel: vec4<f32>,
  inputClamp: vec4<f32>,
};
@group(0) @binding(3) var<uniform> inputInfo: InputInfo;

struct BloomUniforms {
  // x = 扩散权重（叠加到上一级时的系数）
  uParams: vec4<f32>,
};
@group(1) @binding(0) var<uniform> bloom: BloomUniforms;

@vertex
fn vert_main(input: VertexInput) -> VertexOutput {
    var out: VertexOutput;
    out.position = projection * vec4<f32>(input.xy, 0.0, 1.0);
    out.uv = input.uv;
    return out;
}

// 双滤波升采样（8 点帐篷）：输入为低一级纹理，结果按扩散权重加法混合到高一级
@fragment
fn frag_main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
    let o = inputInfo.inputPixel.zw * 0.5;
    var sum = textureSample(tex, samp, uv + vec2<f32>(-o.x * 2.0, 0.0));
    sum += textureSample(tex, samp, uv + vec2<f32>(o.x * 2.0, 0.0));
    sum += textureSample(tex, samp, uv + vec2<f32>(0.0, -o.y * 2.0));
    sum += textureSample(tex, samp, uv + vec2<f32>(0.0, o.y * 2.0));
    sum += textureSample(tex, samp, uv + vec2<f32>(-o.x, o.y)) * 2.0;
    sum += textureSample(tex, samp, uv + vec2<f32>(o.x, o.y)) * 2.0;
    sum += textureSample(tex, samp, uv + vec2<f32>(-o.x, -o.y)) * 2.0;
    sum += textureSample(tex, samp, uv + vec2<f32>(o.x, -o.y)) * 2.0;
    return sum * (bloom.uParams.x / 12.0);
}
`,jt=6,Mt=.75,Nt=class extends H{uniforms;constructor(e,t){let n=new F({uParams:{value:[0,0,0,0],type:`f32`,size:4}});super({shader:e,glVertex:U,glFragment:t,resources:{bloom:n}}),this.uniforms=n}},Pt=class extends H{_uniforms;_prefilter=new Nt(Ot,Dt);_down=new Nt(Ot,Dt);_up=new Nt(At,kt);_levels=[];_threshold;_intensity;_radius;_paramsDirty=!0;_bloomResolution;constructor(e={}){let t=new F({uParams:{value:[1,0,0,0],type:`f32`,size:4}});super({shader:Et,glVertex:U,glFragment:Tt,resources:{bloom:t,uBloom:B.BLANK},padding:e.padding??32}),this._uniforms=t,this.hdr=!0,this._threshold=e.threshold??1,this._intensity=e.intensity??1,this._radius=e.radius??.5,this._bloomResolution=e.bloomResolution??.5}get bloomResolution(){return this._bloomResolution}set bloomResolution(e){this._bloomResolution!==e&&(this._bloomResolution=e,this.dirty=!0)}get threshold(){return this._threshold}set threshold(e){this._threshold!==e&&(this._threshold=e,this._markParams())}get intensity(){return this._intensity}set intensity(e){this._intensity!==e&&(this._intensity=e,this._markParams())}get radius(){return this._radius}set radius(e){this._radius!==e&&(this._radius=e,this._markParams())}_markParams(){this._paramsDirty=!0,this.dirty=!0}_syncParams(){this._paramsDirty=!1;let e=z.floatRenderable?this._threshold:Math.min(this._threshold,Mt);this._prefilter.uniforms.setValue(`uParams`,[e,Math.max(e*.5,1e-4),1,0]);let t=.05+.9*Math.min(1,Math.max(0,this._radius));this._up.uniforms.setValue(`uParams`,[t,0,0,0]),this._uniforms.setValue(`uParams`,[this._intensity*(1-t),0,0,0])}execute(e,t,n){if(this._paramsDirty&&this._syncParams(),this._intensity===0){this.resources.uBloom=B.BLANK,e.pass(this,t,n);return}let r=z.floatRenderable?`rgba16float`:void 0,a=this._levels,o=Math.max(1,Math.round(t.width*this._bloomResolution)),s=Math.max(1,Math.round(t.height*this._bloomResolution)),c=0,l=t;try{for(;c<jt;){let t=e.acquire(o,s,r);if(a[c++]=t,e.pass(c===1?this._prefilter:this._down,l,t),l=t,o<4||s<4)break;o=Math.ceil(o/2),s=Math.ceil(s/2)}for(let t=c-1;t>0;t--)e.pass(this._up,a[t],a[t-1],`add`);this.resources.uBloom=i(a[0]),e.pass(this,t,n)}finally{for(let t=0;t<c;t++)e.release(a[t]);a.length=0}}destroy(){super.destroy(),this._prefilter.destroy(),this._down.destroy(),this._up.destroy()}},Ft=`#version 300 es
precision highp float;

in vec2 vLocal;
in vec4 vColor;
in vec2 vCookieUV;
flat in vec4 vParams;
flat in vec4 vAngles;
out vec4 finalColor;

uniform sampler2D uCookie;

// 与 light.wgsl 相同的衰减模型；vParams.w = 1 时光罩按 sRGB 解码为线性
void main() {
    vec4 s = texture(uCookie, vCookieUV);
    // RTT 光罩是预乘颜色，线性解码前先取回直通 RGB。
    if (vAngles.z > 0.5 && s.a > 0.0) s.rgb /= s.a;
    vec3 ck = (vParams.w > 0.5 ? pow(s.rgb, vec3(2.2)) : s.rgb) * s.a;
    float kind = vParams.x;
    float att;
    if (kind > 1.5) {
        att = pow(clamp(vLocal.x, 0.0, 1.0), vParams.z);
    } else {
        float d = length(vLocal);
        float k = clamp((1.0 - d) / max(1.0 - vParams.y, 0.0001), 0.0, 1.0);
        att = pow(k, vParams.z);
        if (kind > 0.5) {
            float c = d > 0.00001 ? vLocal.x / d : 1.0;
            att *= smoothstep(vAngles.y, vAngles.x, c);
        }
    }
    finalColor = vec4(vColor.rgb * att * ck, 0.0);
}
`,It=`#version 300 es
in vec2 aPos;
in vec2 aLocal;
in vec4 aColor;
in vec4 aParams;
in vec4 aAngles;

out vec2 vLocal;
out vec4 vColor;
out vec2 vCookieUV;
flat out vec4 vParams;
flat out vec4 vAngles;

// 顶点位置已在 CPU 换算为 NDC（WebGL 离屏约定：区域顶部在 NDC -1，即纹理第 0 行）
void main() {
    gl_Position = vec4(aPos, 0.0, 1.0);
    vLocal = aLocal;
    vColor = aColor;
    vCookieUV = vec2(aColor.w, aAngles.w);
    vParams = aParams;
    vAngles = aAngles;
}
`,Lt=`// 光照贴图：每盏灯一组三角形，加法混合（见 lighting-filter.ts）。顶点位置已在 CPU 换算为 NDC，无 uniform
struct VertexInput {
  @location(0) pos: vec2<f32>,
  @location(1) local: vec2<f32>,
  @location(2) color: vec4<f32>,
  @location(3) params: vec4<f32>,
  @location(4) angles: vec4<f32>,
};

struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(4) cookieUV: vec2<f32>,
  @location(0) local: vec2<f32>,
  @location(1) color: vec4<f32>,
  @location(2) @interpolate(flat) params: vec4<f32>,
  @location(3) @interpolate(flat) angles: vec4<f32>,
};

@group(0) @binding(0) var cookie: texture_2d<f32>;
@group(0) @binding(1) var cookieSampler: sampler;

@vertex
fn vert_main(input: VertexInput) -> VertexOutput {
  var out: VertexOutput;
  out.position = vec4<f32>(input.pos, 0.0, 1.0);
  out.local = input.local;
  out.cookieUV = vec2<f32>(input.color.w, input.angles.w);
  out.color = input.color;
  out.params = input.params;
  out.angles = input.angles;
  return out;
}

// params: x = 类型（0 point/global，1 spot，2 shape）、y = 内半径比例、z = 衰减指数、w = 1 时光罩按 sRGB 解码为线性
// angles: x = cos(内角/2)、y = cos(外角/2)
@fragment
fn frag_main(in: VertexOutput) -> @location(0) vec4<f32> {
  // 光罩必须在 uniform 控制流中采样；无光罩的灯绑定白色纹理
  var s = textureSample(cookie, cookieSampler, in.cookieUV);
  // 线性模式用 2.2 次幂近似 sRGB 解码（光罩是低频遮罩，误差不可见）；白色纹理解码后仍为 1
  // 与 GLSL 相同，光罩 alpha 仅在形成覆盖度时乘一次。
  if (in.angles.z > 0.5 && s.a > 0.0) { s = vec4<f32>(s.rgb / s.a, s.a); }
  let ck = select(s.rgb, pow(s.rgb, vec3<f32>(2.2)), in.params.w > 0.5) * s.a;
  let kind = in.params.x;
  var att: f32;
  if (kind > 1.5) {
    // shape：local.x 为网格插值的衰减（多边形内 1，外扩环外缘 0）
    att = pow(clamp(in.local.x, 0.0, 1.0), in.params.z);
  } else {
    // point / spot：local 为按半径归一化的坐标，内半径以内满强度
    let d = length(in.local);
    let k = clamp((1.0 - d) / max(1.0 - in.params.y, 0.0001), 0.0, 1.0);
    att = pow(k, in.params.z);
    if (kind > 0.5) {
      // spot：沿本地 +X 方向，内外角之间平滑过渡
      let c = select(1.0, in.local.x / d, d > 0.00001);
      att *= smoothstep(in.angles.y, in.angles.x, c);
    }
  }
  return vec4<f32>(in.color.rgb * att * ck, 0.0);
}
`,Rt=`#version 300 es
precision highp float;

in vec2 vUV;
out vec4 finalColor;

uniform sampler2D uTex;
uniform sampler2D uLightMap;
uniform sampler2D uAddMap;
uniform vec4 uAmbient;

// 与 lighting.wgsl 相同：rgb × (环境光 + Multiply 灯) + Additive 灯 × alpha；预乘 alpha 输入输出；uAmbient.a = 1 为线性空间光照
void main() {
    vec4 c = texture(uTex, vUV);
    vec3 light = texture(uLightMap, vUV).rgb + uAmbient.rgb;
    vec3 add = texture(uAddMap, vUV).rgb;
    if (uAmbient.a > 0.5) {
        // (rgb^2.2 × L)^(1/2.2) = rgb × L^(1/2.2)；只有存在 Additive 灯时才逐像素解码 → 叠加 → 编码
        float g = 1.0 / 2.2;
        if (c.a > 0.0 && max(add.r, max(add.g, add.b)) > 0.0) {
            vec3 s = pow(c.rgb / c.a, vec3(2.2));
            finalColor = vec4(pow(s * light + add, vec3(g)) * c.a, c.a);
        } else {
            finalColor = vec4(c.rgb * pow(light, vec3(g)), c.a);
        }
        return;
    }
    finalColor = vec4(c.rgb * light + add * c.a, c.a);
}
`,zt=`struct VertexInput {
  @location(0) xy: vec2<f32>,
  @location(1) uv: vec2<f32>,
};

struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv: vec2<f32>,
};

@group(0) @binding(0) var<uniform> projection: mat4x4<f32>;
@group(0) @binding(1) var tex: texture_2d<f32>;
@group(0) @binding(2) var samp: sampler;

struct LightingUniforms {
  // rgb = 环境光（可 >1），a = 1 时线性空间光照（光照贴图与环境光已是线性值）
  uAmbient: vec4<f32>,
};
@group(1) @binding(0) var<uniform> lighting: LightingUniforms;
@group(1) @binding(1) var uLightMap: texture_2d<f32>;
@group(1) @binding(2) var uLightMapSampler: sampler;
@group(1) @binding(3) var uAddMap: texture_2d<f32>;
@group(1) @binding(4) var uAddMapSampler: sampler;

@vertex
fn vert_main(input: VertexInput) -> VertexOutput {
    var out: VertexOutput;
    out.position = projection * vec4<f32>(input.xy, 0.0, 1.0);
    out.uv = input.uv;
    return out;
}

// 合成：rgb × (环境光 + Multiply 灯) + Additive 灯 × alpha；输入输出均为预乘 alpha
// 线性模式（gamma 按 2.2 次幂）：(rgb^2.2 × L)^(1/2.2) = rgb × L^(1/2.2)，Multiply 部分无需解码内容，预乘与 alpha=0 的加法像素都保持正确；
// 只有存在 Additive 灯时才逐像素解码 → 叠加 → 编码
@fragment
fn frag_main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
    let c = textureSample(tex, samp, uv);
    let light = textureSample(uLightMap, uLightMapSampler, uv).rgb + lighting.uAmbient.rgb;
    let add = textureSample(uAddMap, uAddMapSampler, uv).rgb;
    if (lighting.uAmbient.a > 0.5) {
        let g = 1.0 / 2.2;
        if (c.a > 0.0 && max(add.r, max(add.g, add.b)) > 0.0) {
            let s = pow(c.rgb / c.a, vec3<f32>(2.2));
            return vec4<f32>(pow(s * light + add, vec3<f32>(g)) * c.a, c.a);
        }
        return vec4<f32>(c.rgb * pow(light, vec3<f32>(g)), c.a);
    }
    return vec4<f32>(c.rgb * light + add * c.a, c.a);
}
`,$=16,Bt=class extends H{_layer=1;_lightmapResolution=.5;_uniforms;_ambient=new u(0);_ambientIntensity=1;_linear=!1;_node;_lightVersion=-1;_data=new Float32Array($*6*64);_ranges=[];_rangeCount=0;_gpuBuffer;_glBuffer=null;constructor(e={}){let t=new F({uAmbient:{value:[0,0,0,0],type:`f32`,size:4}});super({shader:zt,glVertex:U,glFragment:Rt,resources:{lighting:t,uLightMap:B.BLANK,uAddMap:B.BLANK}}),this._uniforms=t,this.hdr=!0,e.layer!==void 0&&(this._layer=e.layer),e.lightmapResolution!==void 0&&(this._lightmapResolution=e.lightmapResolution),this._linear=e.linear??!1,this._ambientIntensity=e.ambientIntensity??1,this._ambient.value=e.ambient??0,this._syncAmbient()}get layer(){return this._layer}set layer(e){this._layer!==e&&(this._layer=e,this.dirty=!0)}get lightmapResolution(){return this._lightmapResolution}set lightmapResolution(e){this._lightmapResolution!==e&&(this._lightmapResolution=e,this.dirty=!0)}get linear(){return this._linear}set linear(e){this._linear!==e&&(this._linear=e,this._syncAmbient())}get ambient(){return this._ambient.value}set ambient(e){this._ambient.value!==e&&(this._ambient.value=e,this._syncAmbient())}get ambientIntensity(){return this._ambientIntensity}set ambientIntensity(e){this._ambientIntensity!==e&&(this._ambientIntensity=e,this._syncAmbient())}_syncAmbient(){let e=this._ambient,t=this._ambientIntensity,n=this._linear;this._uniforms.setValue(`uAmbient`,[Wt(e.red,n)*t,Wt(e.green,n)*t,Wt(e.blue,n)*t,+!!n]),this.dirty=!0}get dirty(){let e=this._node;return super.dirty||!!e&&W._$version(e,ie.frame)!==this._lightVersion}getSourceVersion(e){return W._$version(e,ie.frame)}set dirty(e){super.dirty=e}execute(e,t,n){let r=e.area;this._node&&this._node!==r.node&&!Ut&&(Ut=!0,console.warn(`[Liko] LightingFilter: one instance must not be shared by multiple nodes`)),this._node=r.node,this._lightVersion=W._$version(r.node,ie.frame);let a=Math.max(1,Math.ceil(t.width*this._lightmapResolution)),o=Math.max(1,Math.ceil(t.height*this._lightmapResolution)),s=z.floatRenderable?`rgba16float`:void 0,c=this._build(r,`multiply`),l=this._build(r,`additive`);this._ranges.length=this._rangeCount,this._vertexEnd>0&&this._upload(e.encoder!==void 0);let u,d;try{c&&(d=e.acquire(a,o,s),this._draw(e,d,c,0)),this.resources.uLightMap=d?i(d):B.BLANK,l>0?(u=e.acquire(a,o,s),this._draw(e,u,l,c),this.resources.uAddMap=i(u)):this.resources.uAddMap=B.BLANK,e.pass(this,t,n)}finally{u&&e.release(u),d&&e.release(d)}}_build(e,t){let n=e.node,r=t===`multiply`?0:this._vertexEnd;t===`multiply`&&(this._rangeCount=0);let i=r,a=2/e.width,o=(D?-2:2)/e.height,s=-1-e.x*a,c=(D?1:-1)-e.y*o,l=n.worldMatrix,u=l.a*l.d-l.b*l.c===0?Ht.identity():Ht.copyFrom(l).invert(),d=W._$lights(n),f=this._layer,p=this._linear;for(let e=0;e<d.length;e++){let n=d[e];if(!(n.layers&f)||n.blend!==t||n.intensity<=0||!n.active)continue;let l=n.lightColor,h=n.intensity,g=Wt(l.red,p)*h,_=Wt(l.green,p)*h,v=Wt(l.blue,p)*h,y=n.type,b=(y===`point`||y===`spot`)&&n.cookieTexture||B.WHITE,x=n.worldMatrix,S=(u.a*x.a+u.c*x.b)*a,C=(u.b*x.a+u.d*x.b)*o,w=(u.a*x.c+u.c*x.d)*a,T=(u.b*x.c+u.d*x.d)*o,E=(u.a*x.tx+u.c*x.ty+u.tx)*a+s,D=(u.b*x.tx+u.d*x.ty+u.ty)*o+c,O=i;if(y===`global`)i=this._quad(i,-1,-1,2,0,0,2,0,g,_,v,0,1,1,1,!0);else if(y===`shape`){let e=n.mesh;if(!e||!this._visible(e,3,S,C,w,T,E,D))continue;let t=e.length/3;this._ensure(i+t);let r=this._data;for(let a=0;a<t;a++){let t=e[a*3],o=e[a*3+1],s=i*$;r[s]=S*t+w*o+E,r[s+1]=C*t+T*o+D,r[s+2]=e[a*3+2],r[s+3]=0,r[s+4]=g,r[s+5]=_,r[s+6]=v,r[s+7]=1,r[s+8]=2,r[s+9]=0,r[s+10]=n.falloff,r[s+11]=0,r[s+12]=r[s+13]=r[s+14]=r[s+15]=0,i++}}else{let e=n.radius,t=Math.abs(S*e)+Math.abs(w*e),r=Math.abs(C*e)+Math.abs(T*e);if(E+t<-1||E-t>1||D+r<-1||D-r>1)continue;let a=e>0?Math.min(.999,n.innerRadius/e):0,o=+(y===`spot`),s=Math.cos(n.innerAngle*Math.PI/360),c=Math.cos(n.outerAngle*Math.PI/360);i=this._quad(i,E-(S+w)*e,D-(C+T)*e,S*2*e,C*2*e,w*2*e,T*2*e,o,g,_,v,a,n.falloff,s,c,!1,b)}let k=b.buffer;m.target&&m.validate(k);let A=this._ranges,j=this._rangeCount>0?A[this._rangeCount-1]:void 0;if(j&&j.cookie===k&&j.start+j.count===O&&j.start>=r)j.count+=i-O;else{A[this._rangeCount]??={cookie:k,start:0,count:0};let e=A[this._rangeCount];e.cookie=k,e.start=O,e.count=i-O,this._rangeCount++}}return this._vertexEnd=i,i-r}_vertexEnd=0;_quad(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g=B.WHITE){this._ensure(e+6);let _=this._data,v=g.uvs;for(let y=0;y<6;y++){let b=Vt[y*2],x=Vt[y*2+1],S=(e+y)*$;_[S]=t+r*b+a*x,_[S+1]=n+i*b+o*x,_[S+2]=h?0:b*2-1,_[S+3]=h?0:x*2-1,_[S+4]=c,_[S+5]=l,_[S+6]=u,_[S+7]=v.x0+(v.x1-v.x0)*b+(v.x3-v.x0)*x,_[S+8]=s,_[S+9]=d,_[S+10]=f,_[S+11]=+!!this._linear,_[S+12]=p,_[S+13]=m,_[S+14]=+!!g.premultiplied,_[S+15]=v.y0+(v.y1-v.y0)*b+(v.y3-v.y0)*x}return e+6}_visible(e,t,n,r,i,a,o,s){let c=1/0,l=1/0,u=-1/0,d=-1/0;for(let f=0;f<e.length;f+=t){let t=n*e[f]+i*e[f+1]+o,p=r*e[f]+a*e[f+1]+s;t<c&&(c=t),t>u&&(u=t),p<l&&(l=p),p>d&&(d=p)}return!(u<-1||c>1||d<-1||l>1)}_ensure(e){if(e*$<=this._data.length)return;let t=this._data.length;for(;t<e*$;)t*=2;let n=new Float32Array(t);n.set(this._data),this._data=n}_upload(e){let t=this._vertexEnd*$;if(e){let e=z.device;(!this._gpuBuffer||this._gpuBuffer.size<t*4)&&(this._gpuBuffer?.destroy(),this._gpuBuffer=e.createBuffer({size:this._data.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),e.queue.writeBuffer(this._gpuBuffer,0,this._data.buffer,0,t*4)}else{let e=z.gl;this._glBuffer??=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this._glBuffer),e.bufferData(e.ARRAY_BUFFER,this._data,e.DYNAMIC_DRAW,0,t)}}_draw(e,t,n,r){e.encoder?this._drawGPU(e.encoder,t,n,r):this._drawGL(t,n,r)}_drawGPU(e,t,n,r){let i=e.beginRenderPass({colorAttachments:[{view:t.view,clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}]});if(n>0){i.setPipeline(Yt(t.texture.format)),i.setVertexBuffer(0,this._gpuBuffer);let e=r+n;for(let t=0;t<this._rangeCount;t++){let n=this._ranges[t];n.start<r||n.start>=e||(i.setBindGroup(0,Xt(n.cookie)),i.draw(n.count,1,n.start),y.enabled&&y.totalDraws++)}}i.end()}_drawGL(e,t,n){let r=z,i=r.gl;if(r.bindRenderTarget(e.texture),i.disable(i.SCISSOR_TEST),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),t>0){let e=Qt();r.useProgram(e.program),i.bindVertexArray(e.vao),i.bindBuffer(i.ARRAY_BUFFER,this._glBuffer),$t(i,e),i.enable(i.BLEND),i.blendFuncSeparate(i.ONE,i.ONE,i.ONE,i.ONE),i.activeTexture(i.TEXTURE0),i.uniform1i(e.cookieLoc,0);let a=n+t;for(let e=0;e<this._rangeCount;e++){let t=this._ranges[e];t.start<n||t.start>=a||(t.cookie.upload(),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t.cookie.texture.data),i.drawArrays(i.TRIANGLES,t.start,t.count),y.enabled&&y.totalDraws++)}i.bindVertexArray(null),r.invalidateTextureCache()}}destroy(){super.destroy(),this._gpuBuffer?.destroy(),this._gpuBuffer=void 0,this._glBuffer&&z.gl.deleteBuffer(this._glBuffer),this._glBuffer=null}},Vt=[0,0,1,0,1,1,0,0,1,1,0,1],Ht=new x,Ut=!1;function Wt(e,t){return t?e**2.2:e}var Gt=new Map,Kt,qt=new WeakMap;function Jt(){return Kt||=z.device.createBindGroupLayout({label:`light-cookie-layout`,entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{}}]}),Kt}function Yt(e){let t=Gt.get(e);if(!t){let n=z.device,r=n.createShaderModule({code:Lt});t=n.createRenderPipeline({label:`light-pipeline`,layout:n.createPipelineLayout({bindGroupLayouts:[Jt()]}),vertex:{module:r,entryPoint:`vert_main`,buffers:[{arrayStride:$*4,attributes:[{shaderLocation:0,format:`float32x2`,offset:0},{shaderLocation:1,format:`float32x2`,offset:8},{shaderLocation:2,format:`float32x4`,offset:16},{shaderLocation:3,format:`float32x4`,offset:32},{shaderLocation:4,format:`float32x4`,offset:48}]}]},fragment:{module:r,entryPoint:`frag_main`,targets:[{format:e,blend:{color:{srcFactor:`one`,dstFactor:`one`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one`,operation:`add`}}}]},primitive:{topology:`triangle-list`}}),Gt.set(e,t)}return t}function Xt(e){let t=qt.get(e);return t||(e.upload(),t=z.device.createBindGroup({layout:Jt(),entries:[{binding:0,resource:e.view},{binding:1,resource:e.sampler}]}),qt.set(e,t)),t}var Zt;function Qt(){if(!Zt){let e=z,t=e.gl,n=e.createProgram(It,Ft);Zt={program:n,vao:t.createVertexArray(),cookieLoc:t.getUniformLocation(n,`uCookie`),locs:[`aPos`,`aLocal`,`aColor`,`aParams`,`aAngles`].map(e=>t.getAttribLocation(n,e))}}return Zt}function $t(e,t){let n=[2,2,4,4,4],r=0;for(let i=0;i<5;i++){let a=t.locs[i];a>=0&&(e.enableVertexAttribArray(a),e.vertexAttribPointer(a,n[i],e.FLOAT,!1,$*4,r)),r+=n[i]*4}}var en=`#version 300 es
precision mediump float;

in vec2 vUV;
out vec4 finalColor;

// 仿射变换矩阵：将 filter UV 映射到 mask 纹理 UV
// uTransform[0] = (a, b, c, d), uTransform[1] = (tx, ty, 0, 0)
uniform vec4 uTransform[2];
uniform sampler2D uTex;
uniform sampler2D mapTexture;

void main() {
    vec2 maskUv = vec2(
        uTransform[0].x * vUV.x + uTransform[0].z * vUV.y + uTransform[1].x,
        uTransform[0].y * vUV.x + uTransform[0].w * vUV.y + uTransform[1].y
    );

    vec4 color = texture(uTex, vUV);
    vec4 map = texture(mapTexture, clamp(maskUv, vec2(0.0), vec2(1.0)));

    // 基于屏幕空间导数的抗锯齿边界：在 UV [0,1] 边缘平滑过渡
    vec2 fw = fwidth(maskUv);
    vec2 edge = smoothstep(vec2(0.0), fw, maskUv) * smoothstep(vec2(0.0), fw, vec2(1.0) - maskUv);
    finalColor = vec4(color.rgb, color.a) * map.a * edge.x * edge.y;
}
`,tn=`struct VertexInput {
  @location(0) xy: vec2<f32>,
  @location(1) uv: vec2<f32>,
};

struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv: vec2<f32>,
};

@group(0) @binding(0) var<uniform> projection: mat4x4<f32>;
@group(0) @binding(1) var tex: texture_2d<f32>;
@group(0) @binding(2) var samp: sampler;

// 仿射变换矩阵：将 filter UV 映射到 mask 纹理 UV
// [0] = (a, b, c, d)  [1] = (tx, ty, 0, 0)
struct MaskUniforms {
  uTransform: array<vec4<f32>, 2>,
};
@group(1) @binding(0) var<uniform> maskUniforms: MaskUniforms;
@group(1) @binding(1) var mapTexture: texture_2d<f32>;
@group(1) @binding(2) var mapSampler: sampler;

@vertex
fn vert_main(input: VertexInput) -> VertexOutput {
    var out: VertexOutput;
    out.position = projection * vec4<f32>(input.xy, 0.0, 1.0);
    out.uv = input.uv;
    return out;
}

@fragment
fn frag_main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
    let t0 = maskUniforms.uTransform[0];
    let t1 = maskUniforms.uTransform[1];
    let maskUv = vec2<f32>(
        t0.x * uv.x + t0.z * uv.y + t1.x,
        t0.y * uv.x + t0.w * uv.y + t1.y
    );

    let color = textureSample(tex, samp, uv);
    let map = textureSample(mapTexture, mapSampler, clamp(maskUv, vec2<f32>(0.0), vec2<f32>(1.0)));

    // 基于屏幕空间导数的抗锯齿边界：在 UV [0,1] 边缘平滑过渡
    let fw = fwidth(maskUv);
    let edge = smoothstep(vec2<f32>(0.0), fw, maskUv) * smoothstep(vec2<f32>(0.0), fw, vec2<f32>(1.0) - maskUv);
    return vec4<f32>(color.rgb, color.a) * map.a * edge.x * edge.y;
}
`,nn=class extends H{_mask;_maskUniforms;_matrix=new x;_unobserve;_applying=!1;_destroyed=!1;constructor(e){let t=new F({uTransform:{value:[1,0,0,1,0,0,0,0],type:`f32`,size:8}}),n=e.mask;`renderMode`in n&&(n.renderMode=`canvas`),super({shader:tn,glVertex:U,glFragment:en,resources:{maskUniforms:t,mapTexture:B.BLANK}}),this._mask=n,this._maskUniforms=t,this._unobserve=vt(n,()=>{this._applying||(this.dirty=!0)})}getSourceVersion(e){return te._$prepare(this._mask),this.version}get mask(){return this._mask}apply(e){this._applying=!0;try{let t=this._mask.texture;t&&this.resources.mapTexture!==t&&(this.resources.mapTexture=t,this.syncResources()),this._computeMatrix(e.width,e.height,e.x,e.y)}finally{this._applying=!1}}destroy(){this._destroyed||(this._destroyed=!0,this._unobserve(),super.destroy())}_computeMatrix(e,t,n,r){let i=this._mask.getLocalBounds(),a=i.width,o=i.height;if(a<=0||o<=0)return;let s=this._matrix;s.copyFrom(this._mask.localMatrix).invert();let{a:c,b:l,c:u,d,tx:f,ty:p}=s,m=i.minX,h=i.minY,g=e*c/a,_=e*l/o,v=t*u/a,y=t*d/o,b=(n*c+r*u+f-m)/a,x=(n*l+r*d+p-h)/o;this._maskUniforms.setValue(`uTransform`,[g,_,v,y,b,x,0,0])}},rn=`#version 300 es
precision mediump float;

in vec2 vUV;
out vec4 finalColor;

uniform sampler2D uTex;
uniform vec4 inputSize;
uniform vec4 inputClamp;
uniform vec4 uCenter;
uniform vec4 uTime;
uniform vec4 uAmplitude;
uniform vec4 uWavelength;
uniform vec4 uSpeed;

void main() {
    float aspect = inputSize.x / inputSize.y;
    vec2 coord = vec2((vUV.x - uCenter.x) * aspect, vUV.y - uCenter.y);
    float dist = length(coord);

    float radius = uTime.x * uSpeed.x;
    float diff = dist - radius;
    float ring = uWavelength.x * 0.5;

    vec2 displaced = vUV;
    // dist > 0 才 normalize（中心像素是零向量）；位移乘 clamp(radius / ring)：time<=0 输出原图，波纹从零幅度渐入
    if (abs(diff) < ring && dist > 0.0) {
        float factor = (1.0 - abs(diff) / ring) * uAmplitude.x * clamp(radius / ring, 0.0, 1.0);
        vec2 dir = normalize(vUV - uCenter.xy);
        displaced = vUV + dir * factor * cos(diff / ring * 3.14159);
    }

    vec2 clamped = clamp(displaced, inputClamp.xy, inputClamp.zw);
    finalColor = texture(uTex, clamped);
}
`,an=`struct VertexInput {
  @location(0) xy: vec2<f32>,
  @location(1) uv: vec2<f32>,
};

struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv: vec2<f32>,
};

@group(0) @binding(0) var<uniform> projection: mat4x4<f32>;
@group(0) @binding(1) var tex: texture_2d<f32>;
@group(0) @binding(2) var samp: sampler;

struct InputInfo {
  inputSize: vec4<f32>,
  inputPixel: vec4<f32>,
  inputClamp: vec4<f32>,
};
@group(0) @binding(3) var<uniform> inputInfo: InputInfo;

struct ShockwaveUniforms {
  uCenter: vec2<f32>,
  uTime: f32,
  uAmplitude: f32,
  uWavelength: f32,
  uSpeed: f32,
};
@group(1) @binding(0) var<uniform> sw: ShockwaveUniforms;

@vertex
fn vert_main(input: VertexInput) -> VertexOutput {
    var out: VertexOutput;
    out.position = projection * vec4<f32>(input.xy, 0.0, 1.0);
    out.uv = input.uv;
    return out;
}

@fragment
fn frag_main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
    // 宽高比矫正，确保冲击波是正圆
    let aspect = inputInfo.inputSize.x / inputInfo.inputSize.y;
    let coord = vec2((uv.x - sw.uCenter.x) * aspect, uv.y - sw.uCenter.y);
    let dist = length(coord);

    let radius = sw.uTime * sw.uSpeed;
    let diff = dist - radius;
    let ring = sw.uWavelength * 0.5;

    var displaced = uv;
    // dist > 0 才 normalize（中心像素是零向量）；位移乘 clamp(radius / ring)：time<=0 输出原图，波纹从零幅度渐入
    if (abs(diff) < ring && dist > 0.0) {
        // 环形区域内：线性衰减 × 余弦波形 → 径向 UV 位移
        let factor = (1.0 - abs(diff) / ring) * sw.uAmplitude * clamp(radius / ring, 0.0, 1.0);
        let dir = normalize(uv - sw.uCenter);
        displaced = uv + dir * factor * cos(diff / ring * 3.14159);
    }

    let clamped = clamp(displaced, inputInfo.inputClamp.xy, inputInfo.inputClamp.zw);
    return textureSample(tex, samp, clamped);
}
`,on=`#version 300 es
// highp：背景 UV 位移在移动端 mediump 下精度不足，会出现块状扭曲
precision highp float;

in vec2 vUV;
out vec4 finalColor;

uniform sampler2D uTex;
uniform sampler2D uBackdrop;
uniform vec4 inputSize;
uniform vec4 inputClamp;
uniform vec4 uCenter;
uniform vec4 uTime;
uniform vec4 uAmplitude;
uniform vec4 uWavelength;
uniform vec4 uSpeed;

// 与 shockwave-backdrop.wgsl 相同：扭曲背景，节点内容只作遮罩
void main() {
    float mask = texture(uTex, vUV).a;
    float aspect = inputSize.x / inputSize.y;
    vec2 coord = vec2((vUV.x - uCenter.x) * aspect, vUV.y - uCenter.y);
    float dist = length(coord);
    float radius = uTime.x * uSpeed.x;
    float diff = dist - radius;
    float ring = uWavelength.x * 0.5;

    vec2 displaced = vUV;
    // dist > 0 才 normalize（中心像素是零向量）；位移乘 clamp(radius / ring)：time<=0 输出原图，波纹从零幅度渐入
    if (abs(diff) < ring && dist > 0.0) {
        float factor = (1.0 - abs(diff) / ring) * uAmplitude.x * clamp(radius / ring, 0.0, 1.0);
        vec2 dir = normalize(vUV - uCenter.xy);
        displaced = vUV + dir * factor * cos(diff / ring * 3.14159);
    }
    vec4 bg = texture(uBackdrop, clamp(displaced, inputClamp.xy, inputClamp.zw));
    finalColor = bg * mask;
}
`,sn=`struct VertexInput {
  @location(0) xy: vec2<f32>,
  @location(1) uv: vec2<f32>,
};

struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv: vec2<f32>,
};

@group(0) @binding(0) var<uniform> projection: mat4x4<f32>;
@group(0) @binding(1) var tex: texture_2d<f32>;
@group(0) @binding(2) var samp: sampler;

struct InputInfo {
  inputSize: vec4<f32>,
  inputPixel: vec4<f32>,
  inputClamp: vec4<f32>,
};
@group(0) @binding(3) var<uniform> inputInfo: InputInfo;

struct ShockwaveUniforms {
  uCenter: vec2<f32>,
  uTime: f32,
  uAmplitude: f32,
  uWavelength: f32,
  uSpeed: f32,
};
@group(1) @binding(0) var<uniform> sw: ShockwaveUniforms;
@group(1) @binding(1) var uBackdrop: texture_2d<f32>;
@group(1) @binding(2) var uBackdropSampler: sampler;

@vertex
fn vert_main(input: VertexInput) -> VertexOutput {
    var out: VertexOutput;
    out.position = projection * vec4<f32>(input.xy, 0.0, 1.0);
    out.uv = input.uv;
    return out;
}

// 背景扭曲模式：扭曲的是节点下方已绘制的画面（屏幕空间冲击波）；节点自身内容只作为作用范围遮罩
@fragment
fn frag_main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
    let mask = textureSample(tex, samp, uv).a;
    let aspect = inputInfo.inputSize.x / inputInfo.inputSize.y;
    let coord = vec2((uv.x - sw.uCenter.x) * aspect, uv.y - sw.uCenter.y);
    let dist = length(coord);
    let radius = sw.uTime * sw.uSpeed;
    let diff = dist - radius;
    let ring = sw.uWavelength * 0.5;

    var displaced = uv;
    // dist > 0 才 normalize（中心像素是零向量）；位移乘 clamp(radius / ring)：time<=0 输出原图，波纹从零幅度渐入
    if (abs(diff) < ring && dist > 0.0) {
        // 环形区域内：线性衰减 × 余弦波形 → 径向 UV 位移
        let factor = (1.0 - abs(diff) / ring) * sw.uAmplitude * clamp(radius / ring, 0.0, 1.0);
        let dir = normalize(uv - sw.uCenter);
        displaced = uv + dir * factor * cos(diff / ring * 3.14159);
    }
    let bg = textureSample(uBackdrop, uBackdropSampler, clamp(displaced, inputInfo.inputClamp.xy, inputInfo.inputClamp.zw));
    // 保留扭曲背景的预乘 RGB 与 alpha；父通道已按同一遮罩擦除原背景。
    return bg * mask;
}
`,cn=class extends H{_uniforms;constructor(e={}){let t=e.center??[.5,.5],n=e.time??0,r=e.amplitude??.05,i=e.wavelength??.1,a=e.speed??1,o=new F({uCenter:{value:[t[0],t[1]],type:`f32`,size:2},uTime:{value:n,type:`f32`},uAmplitude:{value:r,type:`f32`},uWavelength:{value:i,type:`f32`},uSpeed:{value:a,type:`f32`}}),s=!!e.backdrop;super({shader:s?sn:an,glVertex:U,glFragment:s?on:rn,resources:s?{sw:o,uBackdrop:B.BLANK}:{sw:o}}),this._uniforms=o,this.blendRequired=this.replaceBackdrop=s}get center(){let e=this._uniforms.getValue(`uCenter`);return[e[0],e[1]]}set center(e){let t=this._uniforms.getValue(`uCenter`);(t[0]!==e[0]||t[1]!==e[1])&&(this._uniforms.setValue(`uCenter`,[e[0],e[1]]),this.dirty=!0)}get time(){return this._uniforms.getValue(`uTime`)}set time(e){this._uniforms.getValue(`uTime`)!==e&&(this._uniforms.setValue(`uTime`,e),this.dirty=!0)}get amplitude(){return this._uniforms.getValue(`uAmplitude`)}set amplitude(e){this._uniforms.getValue(`uAmplitude`)!==e&&(this._uniforms.setValue(`uAmplitude`,e),this.dirty=!0)}get wavelength(){return this._uniforms.getValue(`uWavelength`)}set wavelength(e){this._uniforms.getValue(`uWavelength`)!==e&&(this._uniforms.setValue(`uWavelength`,e),this.dirty=!0)}get speed(){return this._uniforms.getValue(`uSpeed`)}set speed(e){this._uniforms.getValue(`uSpeed`)!==e&&(this._uniforms.setValue(`uSpeed`,e),this.dirty=!0)}},ln=`#version 300 es
precision mediump float;

in vec2 vUV;
out vec4 finalColor;

uniform sampler2D uTex;
// inputSize: [logicalW, logicalH, 1/logicalW, 1/logicalH]
uniform vec4 inputSize;
// inputClamp: [0.5/pw, 0.5/ph, (pw-0.5)/pw, (ph-0.5)/ph]
uniform vec4 inputClamp;
uniform vec4 uTime;
uniform vec4 uAmplitude;
uniform vec4 uFrequency;
uniform vec4 uSpeed;

void main() {
    float t = uTime.x * uSpeed.x;
    float freq = uFrequency.x;
    float amp = uAmplitude.x;

    // 振幅随时间缓慢波动，避免机械感
    float ampMod = 1.0 + sin(t * 0.37) * 0.3;
    amp *= ampMod;

    // 三层正弦波叠加，模拟自然水波
    float distX = sin(vUV.y * freq + t) * amp
                + sin(vUV.y * freq * 1.7 + t * 1.3) * amp * 0.4
                + sin(vUV.y * freq * 3.1 + t * 2.7) * amp * 0.15;
    float distY = cos(vUV.x * freq * 0.8 + t * 0.7) * amp * 0.6
                + cos(vUV.x * freq * 1.4 + t * 1.1) * amp * 0.3
                + cos(vUV.x * freq * 2.6 + t * 1.9) * amp * 0.12;

    vec2 distortedUV = clamp(vUV + vec2(distX, distY), inputClamp.xy, inputClamp.zw);

    finalColor = texture(uTex, distortedUV);
}
`,un=`struct VertexInput {
  @location(0) xy: vec2<f32>,
  @location(1) uv: vec2<f32>,
};

struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv: vec2<f32>,
};

@group(0) @binding(0) var<uniform> projection: mat4x4<f32>;
@group(0) @binding(1) var tex: texture_2d<f32>;
@group(0) @binding(2) var samp: sampler;

struct InputInfo {
  inputSize: vec4<f32>,
  inputPixel: vec4<f32>,
  inputClamp: vec4<f32>,
};
@group(0) @binding(3) var<uniform> inputInfo: InputInfo;

struct WaterUniforms {
  uTime: f32,
  uAmplitude: f32,
  uFrequency: f32,
  uSpeed: f32,
};
@group(1) @binding(0) var<uniform> waterUniforms: WaterUniforms;

@vertex
fn vert_main(input: VertexInput) -> VertexOutput {
    var out: VertexOutput;
    out.position = projection * vec4<f32>(input.xy, 0.0, 1.0);
    out.uv = input.uv;
    return out;
}

@fragment
fn frag_main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
    let p = waterUniforms;
    let t = p.uTime * p.uSpeed;

    // 振幅随时间缓慢波动，避免机械感
    let ampMod = 1.0 + sin(t * 0.37) * 0.3;
    let amp = p.uAmplitude * ampMod;

    // 三层正弦波叠加，模拟自然水波
    let distX = sin(uv.y * p.uFrequency + t) * amp
              + sin(uv.y * p.uFrequency * 1.7 + t * 1.3) * amp * 0.4
              + sin(uv.y * p.uFrequency * 3.1 + t * 2.7) * amp * 0.15;
    let distY = cos(uv.x * p.uFrequency * 0.8 + t * 0.7) * amp * 0.6
              + cos(uv.x * p.uFrequency * 1.4 + t * 1.1) * amp * 0.3
              + cos(uv.x * p.uFrequency * 2.6 + t * 1.9) * amp * 0.12;

    let distortedUV = clamp(uv + vec2f(distX, distY), inputInfo.inputClamp.xy, inputInfo.inputClamp.zw);

    return textureSample(tex, samp, distortedUV);
}
`,dn=class extends H{_uniforms;constructor(e={}){let t=e.amplitude??.02,n=e.frequency??12,r=e.speed??2,i=new F({uTime:{value:0,type:`f32`},uAmplitude:{value:t,type:`f32`},uFrequency:{value:n,type:`f32`},uSpeed:{value:r,type:`f32`}});super({shader:un,glVertex:U,glFragment:ln,resources:{waterUniforms:i},padding:Math.ceil(t*200)}),this._uniforms=i}get time(){return this._uniforms.getValue(`uTime`)}set time(e){this.dirty=!0,this._uniforms.setValue(`uTime`,e)}get amplitude(){return this._uniforms.getValue(`uAmplitude`)}set amplitude(e){this.dirty=!0,this._uniforms.setValue(`uAmplitude`,e),this.padding=Math.ceil(e*200)}get frequency(){return this._uniforms.getValue(`uFrequency`)}set frequency(e){this.dirty=!0,this._uniforms.setValue(`uFrequency`,e)}get speed(){return this._uniforms.getValue(`uSpeed`)}set speed(e){this.dirty=!0,this._uniforms.setValue(`uSpeed`,e)}},fn=Symbol(`sceneRef`),pn=Object.prototype.hasOwnProperty,mn=class e extends o{_moveAxis={dx:0,dy:0};_waits;_hitScene;static singleton(){}sceneRef(){return{[fn]:!0}}_$awake(){if(this.awaked||!this.enabled||!this.target.stage)return;let t=this.target,n=this.constructor;pn.call(n,`instance`)&&(n.instance=this);let r=Object.keys(this);for(let e=0;e<r.length;e++){let t=r[e],n=this[t];if(n&&typeof n==`object`&&n[fn]){let e=this._$resolveSceneRef(t);if(!e)throw Error(`Script sceneRef "${t}" not found in ${this.constructor.name}`);this[t]=e}}let i=e.prototype,{onClick:a,onPointerDown:o,onPointerUp:s,onPointerMove:c,onPointerOver:l,onPointerOut:u,onCollisionStart:d,onCollisionEnd:f,onBroadcast:p,onHit:m}=i;this.onClick!==a&&t.on(h.click,this.onClick,this),this.onPointerDown!==o&&t.on(h.pointerDown,this.onPointerDown,this),this.onPointerUp!==s&&t.on(h.pointerUp,this.onPointerUp,this),this.onPointerMove!==c&&t.on(h.pointerMove,this.onPointerMove,this),this.onPointerOver!==l&&t.on(h.pointerOver,this.onPointerOver,this),this.onPointerOut!==u&&t.on(h.pointerOut,this.onPointerOut,this),this.onCollisionStart!==d&&t.on(h.collisionStart,this.onCollisionStart,this),this.onCollisionEnd!==f&&t.on(h.collisionEnd,this.onCollisionEnd,this),this.onBroadcast!==p&&this.stage.on(h.broadcast,this.onBroadcast,this);let g=this.stage,{onStageClick:_,onStagePointerDown:v,onStagePointerUp:y,onStagePointerMove:b,onKeyDown:x,onKeyUp:S,onDataChange:C}=i;this.onStageClick!==_&&g.on(h.click,this.onStageClick,this),this.onStagePointerDown!==v&&g.on(h.pointerDown,this.onStagePointerDown,this),this.onStagePointerUp!==y&&g.on(h.pointerUp,this.onStagePointerUp,this),this.onStagePointerMove!==b&&g.on(h.pointerMove,this.onStagePointerMove,this),this.onKeyDown!==x&&g.on(h.keydown,this.onKeyDown,this),this.onKeyUp!==S&&g.on(h.keyup,this.onKeyUp,this),this.onDataChange!==C&&g.on(h.dataChanged,this.onDataChange,this),this.onHit!==m&&`hits`in this&&this.hits&&(this._hitScene=this.scene,this._hitScene.collisionSystem.addPair(this,this.hits)),super._$awake()}_$enterStage(){super._$enterStage();let t=this._hitScene,n=this.target.scene;this.destroyed||this.onHit===e.prototype.onHit||!(`hits`in this)||!this.hits||(t!==n&&t?.collisionSystem.removePair(this),this._hitScene=n,n?.collisionSystem.addPair(this,this.hits))}_$leaveStage(e){super._$leaveStage(e),this._hitScene?.collisionSystem.removePair(this,!0)}onClick(e){}onPointerDown(e){}onPointerUp(e){}onPointerMove(e){}onPointerOver(e){}onPointerOut(e){}onCollisionStart(e){}onCollisionEnd(e){}onBroadcast(e,t){}onStageClick(e){}onStagePointerDown(e){}onStagePointerUp(e){}onStagePointerMove(e){}onKeyDown(e){}onKeyUp(e){}onDataChange(e,t){}isPressed(e){return this.stage.keyboard.isPressed(e)}isJustPressed(e){return this.stage.keyboard.isJustPressed(e)}isJustReleased(e){return this.stage.keyboard.isJustReleased(e)}getAxis(e,t){return!!this.isPressed(t)-+!!this.isPressed(e)}getMoveAxis(){return this._moveAxis.dx=this.getAxis(`left`,`right`),this._moveAxis.dy=this.getAxis(`up`,`down`),this._moveAxis}spawn(e,t){return this.scene.spawn(e,{parent:this.target,...t})}findByTag(e){return this.scene.getByTag(e)}find(e,t=!0){return this.scene.getChildByLabel(e,t)}showScene(e,t){return this.stage.showScene(e,t)}replaceScene(e,t,n){return this.stage.replaceScene(e,t,n)}popupScene(e,t){return this.stage.popupScene(e,t)}closeScene(e,t){return this.stage.closeScene(e,t)}_trackWait(e){return new Promise(t=>{this._waits??=new Set;let n=this._waits,r=e(e=>{n.delete(r),t(e)});n.add(r)})}_waitSeconds(e,t){return this._trackWait(n=>{let r=this[e].timer,i=r.setTimeout(t,n,this);return()=>r.clearTimer(i)})}_waitFrames(e){return this._trackWait(t=>{let n=this.scene.timer,r=n.onFrame(()=>{e()&&(n.clearTimer(r),t())},this);return()=>n.clearTimer(r)})}wait(e){return this._waitSeconds(`scene`,e)}timeout(e){return this._waitSeconds(`stage`,e)}waitFrame(e=1){return this._waitFrames(()=>--e<=0)}waitEvent(e,t){return this._trackWait(n=>{let r=(...e)=>n(e.length<=1?e[0]:e);return e.once(t,r,this),()=>e.off(t,r,this)})}waitUntil(e){return e()?Promise.resolve():this._waitFrames(e)}waitBroadcast(e){return this._trackWait(t=>{let n=this.stage,r=(i,a)=>{i===e&&(n.off(h.broadcast,r,this),t(a))};return n.on(h.broadcast,r,this),()=>n.off(h.broadcast,r,this)})}destroy(){if(this.destroyed)return;let e=this._waits;if(e){for(let t of e)t();this._waits=void 0}this._hitScene?.collisionSystem.removePair(this),this._hitScene=void 0;let t=this.constructor;t.instance===this&&(t.instance=void 0),super.destroy()}onHit(e,t){}resetHits(){this.scene.collisionSystem.resetOnce(this)}queryHits(e,t,n,r){let i=r??[];return this.scene.queryCircleByTag(e,t,n,i)}nearestHit(e,t,n){return this.scene.nearestByTag(e,t,n)}_$resolveSceneRef(e){return this.target.scene?._$getRef(e)}},hn=class{bus;points;buffer;frequency;slide;wave;source;gain;detach;offset=0;when;delay;paused;released=!1;constructor(e,t,n,r,i=440,a=i,o=`sine`){this.bus=e,this.points=t,this.buffer=r,this.frequency=i,this.slide=a,this.wave=o,this.when=n,this.delay=Math.max(0,n-ne.currentTime),this.paused=e.paused,this.detach=e.attach(this),this.paused||this.start()}get duration(){return this.points[this.points.length-1][0]}start(){let e=ne,t=Math.max(e.currentTime,this.when);this.when=t;let n=e.createGain();this.gain=n;let r=this.points[0][1];for(let e=1;e<this.points.length;e++){let[t,n]=this.points[e],[i,a]=this.points[e-1];if(t<=this.offset)r=n;else{r=a+(n-a)*(this.offset-i)/(t-i);break}}n.gain.setValueAtTime(r,t);for(let[e,r]of this.points)e>this.offset&&n.gain.linearRampToValueAtTime(r,t+e-this.offset);let i;if(this.buffer){let t=e.createBufferSource();t.buffer=this.buffer,i=t}else{let n=e.createOscillator();n.type=this.wave,n.frequency.setValueAtTime(this.frequency+(this.slide-this.frequency)*this.offset/this.duration,t),n.frequency.linearRampToValueAtTime(this.slide,t+this.duration-this.offset),i=n}this.source=i,i.connect(n).connect(this.bus.input),this.buffer?i.start(t,this.offset):i.start(t),i.onended=()=>{this.source===i&&this.destroy()},i.stop(t+this.duration-this.offset)}release(){this.source&&=(this.source.onended=null,this.source.stop(),this.source.disconnect(),void 0),this.gain?.disconnect(),this.gain=void 0}syncPause(){if(!(this.released||this.paused===this.bus.paused))if(this.paused=this.bus.paused,this.paused){let e=ne.currentTime;this.offset=Math.min(this.duration,this.offset+Math.max(0,e-this.when)),this.delay=Math.max(0,this.when-e),this.release()}else this.offset>=this.duration?this.destroy():(this.when=ne.currentTime+this.delay,this.start())}stop(){this.destroy()}destroy(){this.released||(this.released=!0,this.release(),this.buffer=void 0,this.detach())}},gn={attack:.01,decay:.1,sustain:.3,release:.1},_n=class{bus=j.effects;get _ctx(){return oe.audioContext}playTone(e){this.tone(e,this._ctx.currentTime)}tone(e,t){let n=e.bus??this.bus;if(n.destroyed)throw Error(`Cannot play on a destroyed AudioBus`);let r={...gn,...e.envelope},i=Math.max(0,L(r.attack,`attack`)),a=Math.max(0,L(r.decay,`decay`)),o=Math.max(0,L(r.release,`release`)),s=Math.max(0,L(e.duration??.1,`duration`)),c=i+a+s+o;if(!c)return;let l=N(e.volume??.5),u=l*N(r.sustain),d=L(e.freq,`frequency`),f=L(e.slide??d,`slide`);new hn(n,[[0,0],[i,l],[i+a,u],[c-o,u],[c,0]],t,void 0,d,f,e.wave??`square`)}playNoise(e=.1,t=.5,n=this.bus){if(n.destroyed)throw Error(`Cannot play on a destroyed AudioBus`);if(e=Math.max(0,L(e,`duration`)),t=N(t),!e)return;let r=this._ctx,i=r.createBuffer(1,Math.ceil(r.sampleRate*e),r.sampleRate),a=i.getChannelData(0);for(let e=0;e<a.length;e++)a[e]=Math.random()*2-1;new hn(n,[[0,t],[e,0]],r.currentTime,i)}playSequence(e,t=.5){let n=this._ctx.currentTime;for(let r of e){let e=Math.max(0,L(r.delay??0,`delay`));this.tone({...r,volume:r.volume??t},n+e)}}preset={coin:(e=.5)=>{this.playSequence([{freq:987,duration:.05},{freq:1319,duration:.1,delay:.05}],e)},jump:(e=.5)=>{this.playTone({freq:200,duration:.15,slide:600,volume:e})},hit:(e=.5)=>{this.playNoise(.08,e*.6),this.playTone({freq:100,duration:.08,volume:e,envelope:{release:.05}})},explosion:(e=.5)=>{this.playNoise(.3,e),this.playTone({freq:120,duration:.3,slide:30,volume:e*.5,wave:`sawtooth`})},powerUp:(e=.5)=>{this.playSequence([{freq:440,duration:.06},{freq:554,duration:.06,delay:.06},{freq:659,duration:.06,delay:.12},{freq:880,duration:.12,delay:.18}],e)},laser:(e=.5)=>{this.playTone({freq:1200,duration:.1,slide:200,volume:e,wave:`sawtooth`})},select:(e=.5)=>{this.playTone({freq:660,duration:.06,volume:e,wave:`square`})},gameOver:(e=.5)=>{this.playSequence([{freq:494,duration:.15,wave:`triangle`},{freq:440,duration:.15,delay:.2,wave:`triangle`},{freq:370,duration:.15,delay:.4,wave:`triangle`},{freq:330,duration:.4,delay:.6,wave:`triangle`,envelope:{release:.3}}],e)},click:(e=.5)=>{this.playTone({freq:1e3,duration:.03,volume:e,envelope:{attack:.005,decay:.02,sustain:.1,release:.02}})},error:(e=.5)=>{this.playSequence([{freq:300,duration:.1,wave:`square`},{freq:200,duration:.15,delay:.12,wave:`square`}],e)},success:(e=.5)=>{this.playSequence([{freq:523,duration:.08},{freq:659,duration:.08,delay:.08},{freq:784,duration:.08,delay:.16},{freq:1047,duration:.2,delay:.24,wave:`triangle`}],e)},heal:(e=.5)=>{this.playSequence([{freq:440,duration:.1,wave:`triangle`},{freq:554,duration:.1,delay:.1,wave:`triangle`},{freq:659,duration:.15,delay:.2,wave:`triangle`,envelope:{release:.15}}],e)},dash:(e=.5)=>{this.playNoise(.03,e*.3),this.playTone({freq:150,duration:.05,slide:900,volume:e,wave:`square`,envelope:{attack:.003,decay:.015,sustain:.15,release:.015}})},drop:(e=.5)=>{this.playTone({freq:300,duration:.12,slide:50,volume:e,envelope:{attack:.005,decay:.05,sustain:.4,release:.04}}),this.playNoise(.05,e*.35)},alert:(e=.5)=>{this.playSequence([{freq:880,duration:.06,wave:`square`},{freq:880,duration:.06,delay:.1,wave:`square`}],e)},levelUp:(e=.5)=>{this.playSequence([{freq:523,duration:.06},{freq:587,duration:.06,delay:.06},{freq:659,duration:.06,delay:.12},{freq:784,duration:.06,delay:.18},{freq:880,duration:.06,delay:.24},{freq:1047,duration:.2,delay:.3,wave:`triangle`,envelope:{release:.2}}],e)},shoot:(e=.5)=>{this.playNoise(.03,e*.3),this.playTone({freq:600,duration:.05,slide:200,volume:e,envelope:{attack:.005,decay:.02,sustain:.2,release:.02}})},popup:(e=.5)=>{this.playSequence([{freq:523,duration:.06,wave:`triangle`},{freq:784,duration:.1,delay:.06,wave:`triangle`,envelope:{release:.1}}],e)},stomp:(e=.5)=>{this.playNoise(.03,e*.25),this.playTone({freq:220,duration:.06,slide:80,volume:e,wave:`square`,envelope:{attack:.005,decay:.03,sustain:.3,release:.03}})},lightning:(e=.5)=>{this.playNoise(.05,e*.7),this.playSequence([{freq:1200,duration:.05,slide:300,wave:`sawtooth`,envelope:{attack:.001,decay:.02,sustain:.6,release:.02}},{freq:900,duration:.04,slide:200,delay:.06,wave:`square`,envelope:{attack:.001,decay:.015,sustain:.5,release:.015}},{freq:1400,duration:.05,slide:400,delay:.11,wave:`sawtooth`,envelope:{attack:.001,decay:.02,sustain:.6,release:.02}},{freq:800,duration:.04,slide:180,delay:.16,wave:`square`,envelope:{attack:.001,decay:.015,sustain:.4,release:.015}},{freq:1e3,duration:.06,slide:250,delay:.2,wave:`sawtooth`,envelope:{attack:.002,decay:.025,sustain:.3,release:.025}}],e),this.playTone({freq:300,duration:.15,slide:80,volume:e*.4,wave:`square`,envelope:{attack:.005,decay:.05,sustain:.25,release:.08}})},shield:(e=.5)=>{this.playTone({freq:1400,duration:.04,slide:2200,volume:e*.6,wave:`sine`,envelope:{attack:.005,decay:.03,sustain:.2,release:.05}}),this.playTone({freq:600,duration:.06,volume:e*.3,wave:`triangle`,envelope:{attack:.01,decay:.04,sustain:.1,release:.04}})},swoosh:(e=.5)=>{this.playNoise(.08,e*.4),this.playTone({freq:300,duration:.08,slide:800,volume:e*.3,wave:`sawtooth`,envelope:{attack:.005,decay:.03,sustain:.1,release:.03}})}}},vn=class{_music=new Set;urls=new Set;_pools=new WeakMap;bus;ownsBus;destroyed=!1;constructor(e){this.bus=e??new k,this.ownsBus=!e}get volume(){return this.bus.volume}set volume(e){this.bus.volume=e}play(e,t){let{bus:n=this.bus,volume:r=1,playbackRate:i=1,loop:a=!0,autoDestroy:o=!0,onEnd:s}=t??{};if(this.destroyed)throw Error(`MusicManager is destroyed`);if(N(r),L(i,`playbackRate`),n.destroyed)throw Error(`Cannot play on a destroyed AudioBus`);let c=this._pools.get(n);c||(c=new Map,this._pools.set(n,c));let l=c.get(e);if(l)l.loop=a,l.volume=r;else{l=new oe(e,{bus:n,loop:a,volume:r,playbackRate:i}),c.set(e,l),this._music.add(l),this.urls.add(e);let t=l,o=c;l.onDispose=()=>{o.delete(e),this._music.delete(t)}}l.playbackRate=i;let u=s||o?e=>{try{s?.(e)}finally{o&&l.onEnd===u&&!l.isPlaying&&!l.paused&&l.destroy(!1)}}:void 0;return l.onEnd=u,l.paused?l.resume():l.play(),l}pause(e){for(let t of this._music)t.url===e&&t.pause()}pauseAll(){for(let e of this._music)e.pause()}resume(e){for(let t of this._music)t.url===e&&t.resume()}resumeAll(){for(let e of this._music)e.resume()}stop(e){if(e)for(let t of this._music)t.url===e&&t.stop();else this.stopAll()}stopAll(){for(let e of this._music)e.stop()}setVolume(e,t){for(let n of this._music)n.url===e&&(n.volume=t)}setVolumeAll(e){for(let t of this._music)t.volume=e}fadeIn(e,t=1){for(let n of this._music)n.url===e&&n.fadeIn(t)}fadeInAll(e=1){for(let t of this._music)t.fadeIn(e)}fadeOut(e,t=1){for(let n of this._music)n.url===e&&n.fadeOut(t)}fadeOutAll(e=1){for(let t of this._music)t.fadeOut(e)}setLoop(e,t){for(let n of this._music)n.url===e&&(n.loop=t)}setLoopAll(e){for(let t of this._music)t.loop=e}setPlaybackRate(e,t){for(let n of this._music)n.url===e&&(n.playbackRate=t)}setPlaybackRateAll(e){for(let t of this._music)t.playbackRate=e}destroyAll(){for(let e of this._music)e.destroy(!1);for(let e of this.urls)I.unload(e,`sound`);this.urls.clear()}destroy(e){if(e!==void 0){for(let t of this._music)t.url===e&&t.destroy(!1);I.unload(e,`sound`),this.urls.delete(e);return}if(!this.destroyed){this.destroyed=!0;for(let e of this._music)e.destroy(!1);this.urls.clear(),this.ownsBus&&this.bus.destroy()}}},yn=new class{maxConcurrent=8;bus;ownsBus;destroyed=!1;pools=new WeakMap;sounds=new Set;urls=new Set;order=new WeakMap;sequence=0;constructor(e){this.bus=e??new k,this.ownsBus=!e}get volume(){return this.bus.volume}set volume(e){this.bus.volume=e}play(e,t={}){let{bus:n=this.bus,volume:r=1,playbackRate:i=1,autoDestroy:a=!1,onEnd:o}=t;if(this.destroyed)throw Error(`SoundManager is destroyed`);if(N(r),L(i,`playbackRate`),n.destroyed)throw Error(`Cannot play on a destroyed AudioBus`);if(!Number.isFinite(this.maxConcurrent)||this.maxConcurrent<1)throw RangeError(`maxConcurrent must be at least 1`);let s=this.pools.get(n);s||(s=new Map,this.pools.set(n,s));let c=s.get(e);c||(c=[],s.set(e,c));let l,u,d=0;for(let e of c)e.isPlaying||e.paused?(d++,(!u||this.order.get(e)<this.order.get(u))&&(u=e)):l||=e;if(d>=Math.floor(this.maxConcurrent)&&u&&(l=u),l)l.stop(),l.loop=!1,l.volume=r,l.playbackRate=i;else{l=new oe(e,{bus:n,volume:r,playbackRate:i}),c.push(l),this.sounds.add(l),this.urls.add(e);let t=l,a=c,o=s;l.onDispose=()=>{this.sounds.delete(t);let n=a.indexOf(t);n>=0&&a.splice(n,1),a.length||o.delete(e)}}let f=l;return l.onEnd=a?e=>{f.destroy(!1),o?.(e)}:o,this.order.set(l,++this.sequence),l.play(),l}stop(e){for(let t of this.sounds)t.url===e&&t.stop()}stopAll(){for(let e of this.sounds)e.stop()}destroyAll(){for(let e of this.sounds)e.destroy(!1);for(let e of this.urls)I.unload(e,`sound`);this.urls.clear()}destroy(e){if(e!==void 0){for(let t of this.sounds)t.url===e&&t.destroy(!1);I.unload(e,`sound`),this.urls.delete(e);return}if(!this.destroyed){this.destroyed=!0;for(let e of this.sounds)e.destroy(!1);this.urls.clear(),this.ownsBus&&this.bus.destroy()}}}(j.effects),bn=new vn(j.music);new _n;var xn=class{texture;tileWidth;tileHeight;columns;rows;tileCount;uvCache;_$tileIds;_spacing;_margin;constructor(e){this.texture=e.texture,this.tileWidth=e.tileWidth,this.tileHeight=e.tileHeight,this._spacing=e.spacing??0,this._margin=e.margin??0;let t=this.texture.width,n=this.texture.height;this.columns=e.columns??Math.floor((t-this._margin+this._spacing)/(this.tileWidth+this._spacing)),this.rows=Math.floor((n-this._margin+this._spacing)/(this.tileHeight+this._spacing)),this.tileCount=this.columns*this.rows,this.uvCache=new Float32Array((this.tileCount+1)*8),this._$tileIds=this.tileCount<65536?new Uint16Array(this.tileCount+1):new Uint32Array(this.tileCount+1),this._buildUVCache()}getUVOffset(e){return e*8}_buildUVCache(){let{tileWidth:e,tileHeight:t,columns:n,_spacing:r,_margin:i}=this,a=this.texture.width,o=this.texture.height,s=this.uvCache;for(let c=1;c<=this.tileCount;c++){this._$tileIds[c]=c;let l=c-1,u=l%n,d=Math.floor(l/n),f=i+u*(e+r),p=i+d*(t+r),m=f/a,h=p/o,g=(f+e)/a,_=(p+t)/o,v=c*8;s[v]=m,s[v+1]=h,s[v+2]=g,s[v+3]=h,s[v+4]=g,s[v+5]=_,s[v+6]=m,s[v+7]=_}}},Sn=class{test(e){return e===`tiled`}async load(e,t){let n=t.generation,r=await se.loadJson(e);if(n!==t.generation)throw Error(`Tilemap ${e} aborted by loader.clear()`);let i=await Promise.all(r.tilesets.map(n=>{let r=new URL(n.image,e);return r.hash||=`nearest`,t.load(r.href,`image`)}));if(n!==t.generation)throw Error(`Tilemap ${e} aborted by loader.clear()`);let{minX:a,minY:o,maxX:s,maxY:c}=this._calcBounds(r),l=s-a,u=c-o,d=r.tilewidth,f=r.tileheight,p=r.tilesets.map((e,t)=>{let n=i[t];return n&&new xn({texture:n,tileWidth:e.tilewidth,tileHeight:e.tileheight,columns:e.columns,spacing:e.spacing,margin:e.margin})}),m=r.tilesets.map(e=>this._parseAnimations(e)),h=[],g=[],_=new Map,v=0;for(let e of r.layers)if(e.type===`tilelayer`){if(!e.visible){v++;continue}g.push({name:e.name,type:`tilelayer`,order:v++});let t=this._splitLayer(e,r.tilesets,l,u,a,o);for(let n=0;n<t.length;n++){let r=t[n],i=p[n];r&&i&&h.push({name:e.name,data:r,tileset:i,animatedTiles:m[n]})}}else e.type===`objectgroup`?(g.push({name:e.name,type:`objectgroup`,order:v++}),_.set(e.name,this._parseObjects(e))):g.push({name:e.name,type:`imagelayer`,order:v++});return{columns:l,rows:u,tileWidth:d,tileHeight:f,tileLayers:h,layerInfos:g,objectLayers:_}}_calcBounds(e){if(!e.infinite)return{minX:0,minY:0,maxX:e.width,maxY:e.height};let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e.layers)if(!(a.type!==`tilelayer`||!a.chunks))for(let e of a.chunks)t=Math.min(t,e.x),n=Math.min(n,e.y),r=Math.max(r,e.x+e.width),i=Math.max(i,e.y+e.height);return t===1/0?{minX:0,minY:0,maxX:0,maxY:0}:{minX:t,minY:n,maxX:r,maxY:i}}_splitLayer(e,t,n,r,i,a){if(!e.chunks&&t.length===1&&t[0].firstgid===1&&e.data?.length===n*r){let t=e.data;for(let e=0;e<t.length;e++){if(!t[e])continue;let n=new Uint32Array(t.length);return n.set(t),[n]}return[]}let o=[],s=(e,i,a,s)=>{let c=i+a,l=s-i;for(let a=i;a<c;a++){let i=e[a];if(!i)continue;let s=i&536870911,c=t.length-1;for(;c>=0&&t[c].firstgid>s;)c--;if(c<0)continue;let u=o[c];u||(u=new Uint32Array(n*r),o[c]=u),u[a+l]=s-t[c].firstgid+1|i&3758096384}};if(e.chunks)for(let t of e.chunks)for(let e=0;e<t.height;e++){let r=(t.y-a+e)*n+t.x-i;s(t.data,e*t.width,t.width,r)}else e.data&&s(e.data,0,e.data.length,0);return o}_parseObjects(e){return e.objects?e.objects.map(e=>{let t={};if(e.properties)for(let n of e.properties)t[n.name]=n.value;return{name:e.name,type:e.type,x:e.x,y:e.y,width:e.width,height:e.height,properties:t}}):[]}_parseAnimations(e){if(!e.tiles)return;let t=[];for(let n of e.tiles)!n.animation||n.animation.length===0||t.push({tileId:n.id+1,frames:n.animation.map(e=>e.tileid+1),duration:n.animation.map(e=>e.duration/1e3)});return t.length?t:void 0}},Cn=class{node;pipeline=`batch`;vertexSize=0;indexSize=0;colorSize=0;uvSize=0;maxVisibleTiles=0;vertexStart=0;indexStart=0;colorStart=0;uvStart=0;batch;textureId=0;_colX;_rowY;_uvDirty=!1;_lastActiveTileCount=0;_packedGroup;_packedGen=-1;constructor(e,t,n){this.node=e,this.resize(t,n)}resize(e,t){let n=e*t;this.maxVisibleTiles=n,this.vertexSize=n*8,this.indexSize=n*6,this.colorSize=n*4,this.uvSize=n*16,this._colX=new Float32Array(e+1),this._rowY=new Float32Array(t+1)}packVertex(e){let t=this.batch.batchGroup,n=t!==this._packedGroup||t.resetCount!==this._packedGen;n&&(this._packedGroup=t,this._packedGen=t.resetCount,this._uvDirty=!0,this._lastActiveTileCount=this.maxVisibleTiles),this.node._updateViewRange(t.camera)&&(this._uvDirty=!0);let{f32Data:r}=e,{pp:i}=this.node,{a,d:o,tx:s,ty:c}=i.worldMatrix,{tileWidth:l,tileHeight:u,columns:d,data:f,viewRange:p}=i,{startCol:m,startRow:h,endCol:g,endRow:_}=p,v=g-m+1,y=_-h+1;this._colX.length<=v&&(this._colX=new Float32Array(v+1)),this._rowY.length<=y&&(this._rowY=new Float32Array(y+1));let b=this._colX,x=this._rowY;for(let e=0;e<=v;e++)b[e]=a*((m+e)*l)+s;for(let e=0;e<=y;e++)x[e]=o*((h+e)*u)+c;let S=this.vertexStart,C=0;for(let e=0;e<y;e++){let t=x[e],n=x[e+1];for(let i=0;i<v;i++){if(!(f[(h+e)*d+(m+i)]&536870911))r[S]=r[S+2]=r[S+4]=r[S+6]=0,r[S+1]=r[S+3]=r[S+5]=r[S+7]=0;else{let e=b[i],a=b[i+1];r[S]=e,r[S+1]=t,r[S+2]=a,r[S+3]=t,r[S+4]=a,r[S+5]=n,r[S+6]=e,r[S+7]=n}S+=8,C++}}if(C<this._lastActiveTileCount&&r.fill(0,S,this.vertexStart+this.maxVisibleTiles*8),this._lastActiveTileCount=C,!n&&this._uvDirty){let e=t.uvBuffer;this.packUV(e),e.markDirtyRange(this.uvStart,this.uvStart+this.uvSize)}}packUV(e){if(!this._uvDirty)return;this._uvDirty=!1;let{f32Data:t,u32Data:n}=e,{pp:r}=this.node,{data:i,viewRange:a,columns:o,tileset:s,animReplacementTable:c}=r,{startCol:l,startRow:u,endCol:d,endRow:f}=a,p=s.uvCache,m=this.textureId,h=this.uvStart;for(let e=u;e<=f;e++)for(let r=l;r<=d;r++){let a=i[e*o+r],s=a&3758096384,l=a&536870911;if(l=c[l],l===0){t[h]=0,t[h+1]=0,n[h+2]=m,n[h+3]=0,t[h+4]=0,t[h+5]=0,n[h+6]=m,n[h+7]=0,t[h+8]=0,t[h+9]=0,n[h+10]=m,n[h+11]=0,t[h+12]=0,t[h+13]=0,n[h+14]=m,n[h+15]=0,h+=16;continue}let u=l*8,d=p[u],f=p[u+1],g=p[u+2],_=p[u+3],v=p[u+4],y=p[u+5],b=p[u+6],x=p[u+7];if(s){if(s&2147483648){let e=d;d=g,g=e,e=b,b=v,v=e}if(s&1073741824){let e=f;f=x,x=e,e=_,_=y,y=e}if(s&536870912){let e=d,t=f;d=b,f=x,b=v,x=y,v=g,y=_,g=e,_=t}}t[h]=d,t[h+1]=f,n[h+2]=m,n[h+3]=0,t[h+4]=g,t[h+5]=_,n[h+6]=m,n[h+7]=0,t[h+8]=v,t[h+9]=y,n[h+10]=m,n[h+11]=0,t[h+12]=b,t[h+13]=x,n[h+14]=m,n[h+15]=0,h+=16}}packColor(e){let t=this.node.pp.tint.abgr;e.u32Data.fill(t,this.colorStart,this.colorStart+this.colorSize)}packIndex(e){let t=this.vertexStart*.5,{data:n}=e,r=this.indexStart;for(let e=0;e<this.maxVisibleTiles;e++){let i=t+e*4;n[r]=i,n[r+1]=i+1,n[r+2]=i+2,n[r+3]=i,n[r+4]=i+2,n[r+5]=i+3,r+=6}}},wn=new ee;function Tn(e,t,n){let r=t.map((e,t)=>Math.max(.001,(typeof n==`number`?n:n[t])||0)),i=0;for(let e of r)i+=e;return{tileId:e,frames:t,durations:r,total:i,elapsed:0,frameIdx:0}}var En=class extends p{renderObject;constructor(e){super();let t=this.pp;t.columns=e.columns,t.rows=e.rows,t.tileWidth=e.tileWidth,t.tileHeight=e.tileHeight,t.data=e.data instanceof Uint32Array?e.data:new Uint32Array(e.data),t.tileset=e.tileset,t.viewRange={startCol:0,startRow:0,endCol:0,endRow:0};let n=e.minScale??1,r=e.viewWidth??960,i=e.viewHeight??640,a=Math.min(t.columns,Math.ceil(r/(t.tileWidth*n))+3),o=Math.min(t.rows,Math.ceil(i/(t.tileHeight*n))+3);if(t.maxVisibleTiles=a*o,t.animReplacementTable=t.tileset._$tileIds,this.renderObject=new Cn(this,a,o),e.animatedTiles)for(let t of e.animatedTiles)this.addAnimatedTile(t.tileId,t.frames,t.duration);this.setProps(e),this.pp.dirty|=S.child}get texture(){let e=this.pp,t=e.pendingGrow;return t&&(e.pendingGrow=void 0,this.renderObject.resize(t.cols,t.rows),e.maxVisibleTiles=this.renderObject.maxVisibleTiles),e.tileset.texture}get mapWidth(){return this.pp.columns*this.pp.tileWidth}get mapHeight(){return this.pp.rows*this.pp.tileHeight}getTile(e,t){let{columns:n,rows:r,data:i}=this.pp;return e<0||e>=n||t<0||t>=r?0:i[t*n+e]}setTile(e,t,n){let{data:r,columns:i,rows:a}=this.pp;if(e<0||e>=i||t<0||t>=a)return;let o=t*i+e;r[o]!==n&&(r[o]=n,this.renderObject._uvDirty=!0,this.markDirty(S.texture),this.markDirty(S.size))}setData(e){this.pp.data=e instanceof Uint32Array?e:new Uint32Array(e),this.renderObject._uvDirty=!0,this.markDirty(S.texture),this.markDirty(S.size)}fill(e,t,n,r,i){let{data:a,columns:o,rows:s}=this.pp;if(e=Math.max(0,e),n=Math.min(n,o-1),t=Math.max(0,t),r=Math.min(r,s-1),!(e>n||t>r)){for(let s=t;s<=r;s++){let t=s*o;a.fill(i,t+e,t+n+1)}this.renderObject._uvDirty=!0,this.markDirty(S.texture),this.markDirty(S.size)}}worldToTile(e,t){let n=s.TEMP.set(e,t);return this.toLocal(n,n),{col:Math.floor(n.x/this.pp.tileWidth),row:Math.floor(n.y/this.pp.tileHeight)}}tileToWorld(e,t){return this.toGlobal(s.TEMP.set(e*this.pp.tileWidth,t*this.pp.tileHeight))}_updateViewRange(e){let t=this.pp,{tileWidth:n,tileHeight:r,columns:i,rows:a,maxVisibleTiles:o}=t,s=t.worldMatrix,c=Math.abs(s.a),l=Math.abs(s.d),u=0,d=0,f=t.stage?.width??960,p=t.stage?.height??640;if(e.width>0){let t=e.getViewRect(wn);u=t.x,d=t.y,f=t.width,p=t.height}let m=(u-s.tx)/s.a,h=(u+f-s.tx)/s.a,g=(d-s.ty)/s.d,_=(d+p-s.ty)/s.d,v=Math.min(m,h),y=Math.min(g,_),b=f/c,x=p/l,C=Math.max(0,Math.floor(v/n)-1),w=Math.max(0,Math.floor(y/r)-1),T=Math.min(i-1,Math.ceil((v+b)/n)),E=Math.min(a-1,Math.ceil((y+x)/r)),D=T-C+1,O=E-w+1;if(D>0&&O>0&&D*O>o){t.pendingGrow={cols:Math.min(i,D+(D>>2)+2),rows:Math.min(a,O+(O>>2)+2)},this._$dirtyParent(S.child);let e=Math.max(1,Math.floor(Math.sqrt(o*D/O)));T=Math.min(T,C+e-1),E=Math.min(E,w+Math.floor(o/e)-1)}let k=t.viewRange;return k.startCol!==C||k.startRow!==w||k.endCol!==T||k.endRow!==E?(k.startCol=C,k.startRow=w,k.endCol=T,k.endRow=E,!0):!1}_$startAnim(){this.pp.animTimer?.clearTimer(this._$tickAnim,this),this.pp.animTimer=this._$animClock(),this.pp.animTimer?.onFrame(this._$tickAnim,this)}_$stopAnim(){this.pp.animTimer?.clearTimer(this._$tickAnim,this),this.pp.animTimer=void 0}_$tickAnim(){this.onUpdate(this.pp.animTimer.delta)}onUpdate(e){let{anims:t,animReplacementTable:n}=this.pp;if(!t)return;let r=!1;for(let i=0;i<t.length;i++){let a=t[i],{durations:o}=a,s=a.frameIdx,c=a.elapsed+e;if(c>=o[s]){for(c>=a.total&&(c%=a.total);c>=o[s];)c-=o[s],s=(s+1)%o.length;s!==a.frameIdx&&(a.frameIdx=s,n[a.tileId]=a.frames[s],r=!0)}a.elapsed=c}r&&(this.renderObject._uvDirty=!0,this.markDirty(S.texture))}addAnimatedTile(e,t,n){if(!t.length)return;let r=this.pp;r.anims||(r.animReplacementTable=r.animReplacementTable.slice(),r.anims=[],this.on(h.addedToStage,this._$startAnim,this),this.on(h.removedFromStage,this._$stopAnim,this),this._$onStage()&&this._$startAnim()),r.anims.push(Tn(e,t,n)),r.animReplacementTable[e]=t[0],this.renderObject._uvDirty=!0,this.markDirty(S.texture)}_customLocalBounds(e){e.addFrame(0,0,this.mapWidth,this.mapHeight)}},Dn=class extends p{constructor(e){super();let t=this.pp;t.url=``,t.loadId=0,t.columns=0,t.rows=0,t.tileWidth=0,t.tileHeight=0,t.layerInfos=[],t.objectLayers=new Map,t.layerNodes=new Map,this.setProps(e)}get url(){return this.pp.url}set url(e){this.pp.url!==e&&this._load(e)}get columns(){return this.pp.columns}get rows(){return this.pp.rows}get tileWidth(){return this.pp.tileWidth}get tileHeight(){return this.pp.tileHeight}get mapWidth(){return this.pp.columns*this.pp.tileWidth}get mapHeight(){return this.pp.rows*this.pp.tileHeight}addAboveLayer(e,t){let n=this._getLayerOrder(e);return n===-1?(this.addChild(t),this):(t.zIndex=n+.5,this.addChild(t),this)}addBelowLayer(e,t){let n=this._getLayerOrder(e);return n===-1?(this.addChild(t),this):(t.zIndex=n-.5,this.addChild(t),this)}getObjects(e){return this.pp.objectLayers.get(e)??[]}setLayerVisible(e,t){let n=this.pp.layerNodes.get(e);if(n)for(let e of n)e.visible=t}getTile(e,t,n){let r=this.pp.layerNodes.get(e);if(!r)return 0;for(let e of r){let r=e.getTile(t,n);if(r!==0)return r}return 0}setTile(e,t,n,r){let i=this.pp.layerNodes.get(e);if(!i||i.length===0)return;let a=i[0];if(i.length>1){for(let e of i)if(e.getTile(t,n)){a=e;break}}a.setTile(t,n,r)}worldToTile(e,t){let n=s.TEMP.set(e,t);return this.toLocal(n,n),{col:Math.floor(n.x/this.pp.tileWidth),row:Math.floor(n.y/this.pp.tileHeight)}}tileToWorld(e,t){return this.toGlobal(s.TEMP.set(e*this.pp.tileWidth,t*this.pp.tileHeight))}_customLocalBounds(e){e.addFrame(0,0,this.mapWidth,this.mapHeight)}async _load(e){let t=this.pp;t.url=e;let n=++t.loadId,r=await I.load(e,`tiled`);this.destroyed||!r||t.loadId!==n||(this._buildFromResource(r),t.loadId===n&&!this.destroyed&&this.emit(h.loaded))}_buildFromResource(e){let t=this.pp;for(let e of t.layerNodes.values())for(let t of e)t.destroy();t.columns=e.columns,t.rows=e.rows,t.tileWidth=e.tileWidth,t.tileHeight=e.tileHeight,t.layerInfos=e.layerInfos,t.objectLayers=e.objectLayers,t.layerNodes=new Map;for(let n of e.tileLayers){let r=this._getLayerOrder(n.name),i=new En({columns:e.columns,rows:e.rows,tileWidth:e.tileWidth,tileHeight:e.tileHeight,data:n.data.slice(),tileset:n.tileset,animatedTiles:n.animatedTiles});i.label=n.name,i.zIndex=r>=0?r:0,this.addChild(i);let a=t.layerNodes.get(n.name);a?a.push(i):t.layerNodes.set(n.name,[i])}}_getLayerOrder(e){let t=this.pp.layerInfos;for(let n=0;n<t.length;n++)if(t[n].name===e)return t[n].order;return-1}};Dn=P([c(`Tilemap`),f(`design:paramtypes`,[Object])],Dn),T.regLoader(new Sn);export{le as _,cn as a,Pt as c,Re as d,Fe as f,H as g,U as h,dn as i,gt as l,Te as m,yn as n,nn as o,De as p,mn as r,Bt as s,bn as t,Ve as u};