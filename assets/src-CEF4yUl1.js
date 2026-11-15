import{A as e,B as t,C as n,D as r,E as i,F as a,G as o,H as s,I as c,J as l,K as u,L as d,M as f,N as p,O as m,P as h,Q as g,R as _,S as v,T as y,U as b,V as x,W as S,X as C,Y as w,_ as T,b as E,c as D,d as O,f as k,g as A,h as ee,i as te,k as j,l as ne,m as re,o as ie,p as M,q as N,r as ae,s as P,t as oe,u as se,v as F,w as ce,x as I,y as le}from"./graphics-BW-3Zj9I.js";var ue=class e extends c{resolution;format;version=0;_nearest;constructor(e){super(),this.resolution=e.resolution??1,this._nearest=e.scaleMode===`nearest`,this.format=e.format===`rgba16float`&&T.floatRenderable?`rgba16float`:`rgba8`,e.format===`rgba16float`&&this.format!==e.format&&console.warn(`[Liko] RenderTexture rgba16float unsupported; using rgba8`),this.resize(e.width,e.height)}static create(t){return new e(t)}get dynamic(){return!0}get premultiplied(){return!0}resize(e,t){if(this.destroyed)throw Error(`RenderTexture: target is destroyed`);let n=this.resolution;if(![e,t,n].every(e=>Number.isFinite(e)&&e>0)||Math.ceil(e*n)>T.maxTextureSize||Math.ceil(t*n)>T.maxTextureSize)throw RangeError(`RenderTexture: dimensions/resolution must be positive, finite and within device limits`);(e!==this.width||t!==this.height)&&(this.setBuffer(new d(Math.ceil(e*n),Math.ceil(t*n),this.format===`rgba16float`?this.format:void 0,this._nearest)),this.setSourceSize(e,t),this.trimRect.set(0,0,e,t),this.version++,this.notifyUpdate(`resize`))}complete(){this.version++,this.notifyUpdate(`content`)}getTilingTexture(){throw Error(`RenderTexture does not support TilingSprite or static tiling copies`)}},L=1e-9,de=new WeakMap,fe=new WeakMap,pe=new WeakMap,me=class extends e{renderObject=new a(this);autoPlay=!0;constructor(e){super(),Object.assign(this.pp,{texture:c.BLANK,currentFrame:0,frameTime:0,eventCursor:-1,isPlaying:!1,isPaused:!1,speed:1,currentLoop:!0,configVersion:0,loadVersion:0,playVersion:0,loadingConfig:!1,settingProps:!1,autoWidth:!0,autoHeight:!0}),this.on(l.addedToStage,this._$onAddedToStage,this),this.on(l.removedFromStage,this._$onRemovedFromStage,this),this.setProps(e)}get isPlaying(){return this.pp.isPlaying}get speed(){return this.pp.speed}set speed(e){if(!Number.isFinite(e))throw Error(`ActionSprite.speed must be finite`);this.pp.speed=e>0?e:0}get width(){return super.width}set width(e){this.pp.autoWidth=e<0,super.width=e<0?this.pp.poster?.width??-1:e}get height(){return super.height}set height(e){this.pp.autoHeight=e<0,super.height=e<0?this.pp.poster?.height??-1:e}get url(){return this.pp.url}set url(e){let t=this.pp;if(t.url===e)return;t.url=e;let n=++t.configVersion;t.loadingConfig=!!e,t.currentAction=void 0,t.loopOverride=void 0,t.actions=void 0,t.frameTime=t.currentFrame=0,this._$invalidateAction(),e?t.configPromise=this._$loadConfig(e,n):(this.stop(),t.poster&&this._$loadPoster(t.poster))}get currentAction(){return this.pp.currentAction}set currentAction(e){let t=this.pp;t.currentAction!==e&&(e!==void 0&&t.actions&&!t.actions[e]&&!t.loadingConfig||(this._$invalidateAction(),t.currentAction=e,t.loopOverride=void 0,t.frameTime=t.currentFrame=0,t.currentLoop=t.actions?.[e??``]?.loop??!0,e===void 0?this.stop():t.settingProps||(!t.isPaused&&(t.isPlaying||this.autoPlay)&&this._$onStage()?this.play(e):this._$ensureAction())))}get currentFrame(){return this.pp.currentFrame}set currentFrame(e){if(!Number.isFinite(e))throw Error(`ActionSprite.currentFrame must be finite`);let t=this.pp;t.playVersion++,t.currentFrame=this._$clampFrame(e),t.frameTime=t.timeline?this._$frameStart(t.currentFrame):t.currentFrame,t.eventCursor=-1,this._$renderFrame(),this._$ensureAction()}get duration(){let{timeline:e,actions:t,currentAction:n}=this.pp;return e?e.total/t[n].fps:0}get currentTime(){let{timeline:e,actions:t,currentAction:n,frameTime:r}=this.pp;return e?r/t[n].fps:0}get totalFrames(){return this.pp.frames?.textures.length??0}get texture(){return this.pp.texture}get poster(){return this.pp.poster}set poster(e){e&&he(e),this._$cancelConfig(),this._$setPoster(e),this.pp.settingProps||this._$ensureAction()}get actions(){return this.pp.actions}set actions(e){e&&ge(e);let t=this.pp,n=t.actions?.[t.currentAction??``];this._$cancelConfig(),t.actions=e?Object.assign(Object.create(null),e):void 0,!(n&&n===t.actions?.[t.currentAction??``])&&(this._$invalidateAction(),t.actions?.[t.currentAction??``]||(t.currentAction=t.actions&&Object.keys(t.actions)[0],t.loopOverride=void 0,t.frameTime=t.currentFrame=0),t.currentLoop=t.loopOverride??t.actions?.[t.currentAction??``]?.loop??!0,t.currentAction||(this.stop(),t.poster&&this._$loadPoster(t.poster)),t.settingProps||this._$ensureAction())}get onComplete(){return this.pp.onComplete}set onComplete(e){this.pp.onComplete&&this.off(l.complete,this.pp.onComplete,this),e&&this.on(l.complete,e,this),this.pp.onComplete=e}get onLoop(){return this.pp.onLoop}set onLoop(e){this.pp.onLoop&&this.off(l.loop,this.pp.onLoop,this),e&&this.on(l.loop,e,this),this.pp.onLoop=e}get onFrameEvent(){return this.pp.onFrameEvent}set onFrameEvent(e){this.pp.onFrameEvent&&this.off(l.frameEvent,this.pp.onFrameEvent,this),e&&this.on(l.frameEvent,e,this),this.pp.onFrameEvent=e}async preload(e){let t=this.pp;t.configPromise&&await t.configPromise;let n=t.actions;if(!n)throw Error(`ActionSprite.preload: no actions configured, label: "${this.label}"`);let r=e??Object.keys(n);for(let e of r)if(!n[e])throw Error(`ActionSprite.preload: unknown action "${e}", label: "${this.label}"`);let i=await Promise.all(r.map(e=>P.load(n[e].url,`atlas`)));for(let e=0;e<r.length;e++){let a=i[e],o=n[r[e]];if(!a?.length)throw Error(`ActionSprite.preload: failed to load atlas ${o.url}`);let s=t.poster;s&&_e(o,ye(a,s,o).textures.length)}}setProps(e){if(!e)return super.setProps();let{url:t,poster:n,actions:r,currentAction:i,currentFrame:a,parent:o,...s}=e;if(t!==void 0&&(n!==void 0||r!==void 0))throw Error(`ActionSprite: use url or poster/actions, not both`);let c=this.pp;c.settingProps=!0;try{super.setProps(s),`url`in e&&(this.url=t),`poster`in e&&(this.poster=n),`actions`in e&&(this.actions=r),`currentAction`in e&&(this.currentAction=i)}finally{c.settingProps=!1}return`currentAction`in e&&i&&!c.isPaused&&(c.isPlaying||this.autoPlay)&&this._$onStage()?this.play(i):this._$ensureAction(),o&&(this.parent=o),`currentFrame`in e&&a!==void 0&&(this.currentFrame=a),this}play(e,t){if(!this._$onStage())throw Error(`ActionSprite.play: add to stage first, label: "${this.label}"`);let n=this.pp,r=e??n.currentAction,i=n.actions?.[r??``];if(!i&&!n.loadingConfig)return this;let a=r!==n.currentAction,o=!a&&n.isPaused,s=n.isPlaying;return a&&(this._$invalidateAction(),n.currentAction=r),a||!n.isPlaying&&!o?(n.frameTime=n.currentFrame=0,n.eventCursor=-1,n.loopOverride=t,n.currentLoop=t??i?.loop??!0,n.playVersion++):t!==void 0&&(n.currentLoop!==t&&n.playVersion++,n.loopOverride=t,n.currentLoop=t),n.isPaused=!1,n.isPlaying=!0,this._$renderFrame(),this._$ensureAction(),n.isPlaying&&(a||!s)&&this.emit(o?l.resume:l.play),this}stop(){let e=this.pp,t=e.isPlaying||e.isPaused;return e.isPlaying=e.isPaused=!1,e.playVersion++,this._$clearTimer(),t&&this.emit(l.stop),this}pause(){let e=this.pp;return(e.isPlaying||e.loadingConfig||e.loadingAction)&&(e.isPlaying=!1,e.isPaused=!0,e.playVersion++,this._$clearTimer(),this.emit(l.pause)),this}resume(){let e=this.pp;return e.isPaused&&this._$onStage()&&(e.isPaused=!1,e.isPlaying=!0,this._$ensureAction(),this.emit(l.resume)),this}gotoAndStop(e){return this.stop(),this.currentFrame=e,this}gotoAndPlay(e){return this.play(),this.currentFrame=e,this}_customLocalBounds(e){let{poster:t,width:n,height:r}=this.pp;t&&e.addFrame(0,0,n>=0?n:t.width,r>=0?r:t.height)}_customRenderBounds(e){let{displayBounds:t,poster:n,width:r,height:i}=this.pp;if(!t){e.addBounds(this.getLocalBounds());return}e.addBounds(t);let a=r>=0?r/n.width:1,o=i>=0?i/n.height:1;(a!==1||o!==1)&&e.scale(a,o)}destroy(){this._$clearTimer();let e=this.pp;e.configVersion++,e.loadVersion++,e.frames=e.displayBounds=e.timeline=void 0,e.texture=c.BLANK,e.isPlaying=e.isPaused=!1,super.destroy()}_$onAddedToStage(){this._$clearTimer(),this.autoPlay&&!this.pp.isPaused?this.play():this._$ensureAction()}_$onRemovedFromStage(e){e||this.stop()}_$cancelConfig(){let e=this.pp;e.configVersion++,e.loadingConfig=!1,e.url=void 0}_$invalidateAction(){this._$clearTimer();let e=this.pp;e.loadVersion++,e.playVersion++;let t=e.timeline?.starts;if(t){let n=e.currentFrame;e.frameTime=n+(e.frameTime-t[n])/(t[n+1]-t[n])}e.frames=e.timeline=void 0,e.loadedAction=e.loadingAction=void 0}_$setPoster(e){this._$invalidateAction();let t=this.pp;t.poster=e?{...e}:void 0,t.autoWidth&&(super.width=e?.width??-1),t.autoHeight&&(super.height=e?.height??-1),this.markDirty(N.size),(t.anchor._x||t.anchor._y)&&(this.anchor=t.anchor),t.poster?this._$loadPoster(t.poster):(this.stop(),this._$setDisplayBounds(void 0),this._$commitTexture(c.BLANK))}async _$loadConfig(e,t){let n=this.pp;try{let r=await P.load(e,`json`);if(this.destroyed||t!==n.configVersion)return;if(!r)throw Error(`ActionSprite: failed to load ${e}`);if(r.version!==void 0&&r.version!==1)throw Error(`ActionSprite: unsupported config version`);he(r.poster),ge(r.actions);let i=n.currentAction??r.defaultAction??Object.keys(r.actions)[0];if(i!==void 0&&!(i in r.actions))throw Error(`ActionSprite: unknown action "${i}"`);let a=new URL(e,document.baseURI),o=Object.create(null);for(let[e,t]of Object.entries(r.actions))o[e]={...t,url:new URL(t.url,a).href};n.loadingConfig=!1,n.actions=o,n.currentAction=i,n.currentLoop=n.loopOverride??o[i??``]?.loop??!0,this._$setPoster({...r.poster,url:new URL(r.poster.url,a).href}),i===void 0&&this.stop(),this._$ensureAction()}catch(e){!this.destroyed&&t===n.configVersion&&(n.loadingConfig=!1,n.configPromise=void 0,this.stop(),this.emit(l.error,e))}}async _$loadPoster(e){let t=this.pp;try{let n=await P.load(e.url,`image`);if(this.destroyed||t.poster!==e)return;if(!n)throw Error(`ActionSprite: failed to load ${e.url}`);let r=pe.get(n);r||(r=new Map,pe.set(n,r));let i=`${e.width},${e.height}`,a=r.get(i);if(!a){a=c.fromBuffer(n.buffer,void 0,n.sheet,!0),Object.assign(a.uvs,n.uvs);let t=n.trimRect;a.trimRect.set(t.x*e.width/n.width,t.y*e.height/n.height,t.width*e.width/n.width,t.height*e.height/n.height),a.setSourceSize(e.width,e.height),r.set(i,a)}t.frames||(this._$setDisplayBounds(new _(0,0,e.width,e.height)),this._$commitTexture(a))}catch(n){!this.destroyed&&t.poster===e&&this.emit(l.error,n)}}_$ensureAction(){let e=this.pp;if(e.settingProps||e.loadingConfig||!e.poster||!e.currentAction||this.destroyed)return;let t=e.actions?.[e.currentAction];if(t){if(e.loadedAction===e.currentAction)this._$startTimer();else if(e.loadingAction!==e.currentAction){let n=P.get(t.url,`atlas`);n?.length?this._$install(e.currentAction,t,n,e.loadVersion):(e.loadingAction=e.currentAction,this._$loadAction(e.currentAction,t,e.loadVersion))}}}_$install(e,t,n,r){let i=this.pp;i.frames=ye(n,i.poster,t),i.timeline=_e(t,i.frames.textures.length),this._$setDisplayBounds(i.frames.bounds),i.loadedAction=e,i.loadingAction=void 0,i.currentFrame=this._$clampFrame(i.frameTime);let a=i.timeline.starts,o=i.currentFrame;i.frameTime=a?a[o]+Math.min(Math.max(i.frameTime-o,0),1)*(a[o+1]-a[o]):Math.min(i.frameTime,i.timeline.count-1),i.eventCursor=-1,this._$renderFrame(),this.emit(l.loaded),!this.destroyed&&i.loadVersion===r&&this._$startTimer()}async _$loadAction(e,t,n){let r=this.pp;try{let i=await P.load(t.url,`atlas`);if(this.destroyed||r.loadVersion!==n)return;if(!i?.length)throw Error(`ActionSprite: empty or missing atlas ${t.url}`);this._$install(e,t,i,n)}catch(e){!this.destroyed&&r.loadVersion===n&&(r.loadingAction=void 0,this.stop(),this.emit(l.error,e))}}_$clampFrame(e){return Math.max(0,Math.min(Math.trunc(e),this.totalFrames?this.totalFrames-1:1/0))}_$renderFrame(){let{frames:e,currentFrame:t}=this.pp;e&&this._$commitTexture(e.textures[t])}_$setDisplayBounds(e){let t=this.pp.displayBounds;this.pp.displayBounds=e,t!==e&&(!t||!e||!ve(t,e))&&this.markDirty(N.child)}_$commitTexture(e){let t=this.pp.texture;if(t===e)return;if(this.pp.texture=e,t.buffer!==e.buffer){let t=this.renderObject.batch,n=t?.getTextureId(e)??t?.add(e);n!==void 0&&n>=0?this.renderObject.textureId=n:this.markDirty(N.child)}let n=e.trimRect,r=t.trimRect;(n.x!==r.x||n.y!==r.y||n.width!==r.width||n.height!==r.height)&&this.markDirty(N.size),this.markDirty(N.texture)}_$startTimer(){let e=this.pp;e.timer||!e.isPlaying||!e.frames||(e.timer=this._$animClock(),e.timer?.onFrame(this._$tick,this))}_$clearTimer(){let e=this.pp;e.timer?.clearTimer(this._$tick,this),e.timer=void 0}_$frameStart(e){let t=this.pp.timeline?.starts;return t?t[e]:e}_$frameAt(e){let{timeline:t,currentFrame:n}=this.pp,{starts:r,count:i}=t;if(!r)return Math.min(Math.floor(e+L),i-1);let a=n>=0&&n<i&&r[n]<=e+L?n:0;for(;a+1<i&&r[a+1]<=e+L;)a++;return a}_$dispatchEvents(e,t){let n=this.pp,r=n.timeline.events;if(!r)return!0;let i=n.currentAction;for(;n.eventCursor<r.length&&r[n.eventCursor].t<=e+L;){let e=r[n.eventCursor++];if(this.emit(l.frameEvent,e.name,e.data,i),this._$halted(t))return!1}return!0}_$halted(e){let t=this.pp;return t.destroyed||t.playVersion!==e||!!t.timer?.paused}_$tick(){let e=this.pp,t=e.timer.delta;if(!e.enabled||t<=0||e.speed<=0)return;let n=e.currentAction,r=e.actions[n],{total:i,count:a,events:o}=e.timeline,s=e.playVersion;if(o&&e.eventCursor<0){let t=0;for(;t<o.length&&o[t].t<e.frameTime-L;)t++;e.eventCursor=t}let c=e.frameTime+t*r.fps*e.speed;if(!e.currentLoop&&c+L>=i){if(e.frameTime=i,this._$showFrame(a-1),!this._$dispatchEvents(i,s))return;this.stop(),this.emit(l.complete,n);return}for(let t=0;c+L>=i;t++){if(t>=100){c%=i,e.frameTime=0,e.eventCursor=0;break}if(e.frameTime=i,o&&e.eventCursor<o.length&&this._$showFrame(a-1),!this._$dispatchEvents(i,s)||(c-=i,e.frameTime=0,e.eventCursor=0,this.emit(l.loop,n),this._$halted(s)))return}e.frameTime=c>0?c:0,this._$showFrame(this._$frameAt(e.frameTime)),this._$dispatchEvents(e.frameTime,s)}_$showFrame(e){let t=this.pp;e!==t.currentFrame&&(t.currentFrame=e,this._$renderFrame())}};me=m([p(`ActionSprite`),j(`design:paramtypes`,[Object])],me);function he(e){if(!e||typeof e.url!=`string`||!e.url||!Number.isFinite(e.width)||e.width<=0||!Number.isFinite(e.height)||e.height<=0)throw Error(`ActionSprite: poster requires url and positive finite width/height`)}function ge(e){if(!e||typeof e!=`object`||Array.isArray(e))throw Error(`ActionSprite: invalid actions`);for(let[t,n]of Object.entries(e))if(!t||!n||typeof n.url!=`string`||!n.url||!Array.isArray(n.offset)||n.offset.length!==2||!n.offset.every(Number.isFinite)||!Number.isFinite(n.fps)||n.fps<=0||typeof n.loop!=`boolean`||n.durations!==void 0&&(!Array.isArray(n.durations)||!n.durations.every(e=>Number.isFinite(e)&&e>0))||n.events!==void 0&&(!Array.isArray(n.events)||!n.events.every(e=>e&&typeof e.name==`string`&&Number.isFinite(e.time)&&e.time>=0)))throw Error(`ActionSprite: invalid action "${t}"`)}function _e(e,t){let n=fe.get(e);if(n&&n.count===t)return n;let r=t,i,a=e.durations;if(a){i=new Float64Array(t+1);let e=0;for(let n=0;n<t;n++)i[n]=e,e+=a[n]??1;i[t]=r=e}let o=e.events?.length?e.events.map(t=>({t:t.time*e.fps,name:t.name,data:t.data})).sort((e,t)=>e.t-t.t):void 0,s={count:t,total:r,starts:i,events:o};return fe.set(e,s),s}function ve(e,t){return e.minX===t.minX&&e.minY===t.minY&&e.maxX===t.maxX&&e.maxY===t.maxY}function ye(e,t,n){let{width:r,height:i}=t,[a,o]=n.offset,s=`${r},${i},${a},${o}`,l=de.get(e);l||(l=new Map,de.set(e,l));let u=l.get(s);if(u)return u;let d=new _(0,0,r,i),f={textures:e.map(e=>{let t=c.fromBuffer(e.buffer,void 0,e.sheet,!0);Object.assign(t.uvs,e.uvs);let n=e.trimRect,s=e.sheet?.spriteSourceSize;return t.trimRect.set(n.x-a,n.y-o,s?.w??n.width,s?.h??n.height),t.setSourceSize(r,i),d.addRect(t.trimRect),t}),bounds:d};return l.set(s,f),f}var be=new WeakMap;function xe(e,t){let n=be.get(e);n||(n=new Map,be.set(e,n));let r=t??``,i=n.get(r);if(i)return i;let a=e;if(t){let n=t.toLowerCase();if(a=e.filter(e=>e.label?.toLowerCase().startsWith(n)),a.length||(a=e.filter(e=>e.label?.toLowerCase().includes(n))),!a.length)return}if(!a.length)return[];let{x:o,y:s,width:l,height:u}=a[0].trimRect,d=a.map(e=>{let t=c.fromBuffer(e.buffer,void 0,e.sheet,!0);Object.assign(t.uvs,e.uvs);let n=e.trimRect;return t.trimRect.set(n.x-o,n.y-s,n.width,n.height),t.setSourceSize(l,u),t.label=e.label,t});return n.set(r,d),d}var Se=class extends e{renderObject=new a(this);autoPlay=!0;loop=!0;get isPlaying(){return this.pp.isPlaying}get frameRate(){return this.pp.frameRate}set frameRate(e){this.pp.frameRate=e}get totalFrames(){return this.pp.textures.length}get onLoaded(){return this.pp.onLoaded}set onLoaded(e){this.pp.onLoaded&&this.off(l.loaded,this.pp.onLoaded,this),e&&this.on(l.loaded,e,this),this.pp.onLoaded=e}get onPlay(){return this.pp.onPlay}set onPlay(e){this.pp.onPlay&&this.off(l.play,this.pp.onPlay,this),e&&this.on(l.play,e,this),this.pp.onPlay=e}get onStop(){return this.pp.onStop}set onStop(e){this.pp.onStop&&this.off(l.stop,this.pp.onStop,this),e&&this.on(l.stop,e,this),this.pp.onStop=e}get onComplete(){return this.pp.onComplete}set onComplete(e){this.pp.onComplete&&this.off(l.complete,this.pp.onComplete,this),e&&this.on(l.complete,e,this),this.pp.onComplete=e}get animationSpeed(){return this.frameRate/60}set animationSpeed(e){this.frameRate=e*60}get currentAction(){return this.pp.currentAction}set currentAction(e){this.pp.currentAction!==e&&((this.pp.isPlaying||this.autoPlay)&&this._$onStage()?this.play(e):this.pp.currentAction=e)}get textures(){return this.pp.textures}set textures(e){let t=this.pp;t.textures!==e&&t.originalTextures!==e&&(t.originalTextures=e,t.textures=xe(e,t.currentAction)??xe(e,void 0),t.currentFrame=-1,this.currentFrame=0,this.markDirty(N.child),this.markDirty(N.size),this.anchor=this.anchor)}get texture(){return this.pp.texture}set texture(e){if(this.pp.texture!==e){this.pp.texture=e,this.markDirty(N.size);let t=this.renderObject.batch,n=t?.getTextureId(e)??t?.add(e);n!==void 0&&n>-1?(this.renderObject.textureId=n,this.markDirty(N.texture)):this.markDirty(N.child)}}get duration(){return this.pp.textures.length/this.frameRate}get currentFrame(){return this.pp.currentFrame}set currentFrame(e){let t=this.pp;t.frameTime=e,t.currentFrame!==e&&(t.currentFrame=e,this._$renderFrame(e))}_$renderFrame(e){let{textures:t}=this.pp;if(t.length){let n=e;n>=t.length&&(this.loop?(n=0,this.pp.currentFrame=0):(n=t.length-1,this.pp.currentFrame=n,this.stop(),this.emit(l.complete))),this.texture=t[n]}}get url(){return this.pp.url}set url(e){if(e.endsWith(`.png`))throw Error(`AnimatedSprite only support atlas url, got: "${e}", label: "${this.label}"`);this.pp.url!==e&&this.load(e)}constructor(e){super(),this.pp.url=``,this.pp.frameRate=10,this.pp.currentFrame=0,this.pp.frameTime=0,this.pp.textures=[],this.pp.originalTextures=[],this.pp.isPlaying=!1,this.on(l.addedToStage,this._$onAddedToStage,this),this.on(l.removedFromStage,this._$onRemovedFromStage,this),this.setProps(e),this._$renderFrame(this.pp.currentFrame)}_$onAddedToStage(){let e=this.pp;e.isPlaying?(this._$clearTimer(),this._$startTimer()):this.autoPlay&&this.play(e.currentAction)}_$onRemovedFromStage(e){e||this.stop()}async load(e){if(this.pp.url!==e){this.pp.url=e;let t=await P.load(e,`atlas`);if(this.destroyed||!t||this.pp.url!==e)return;console.assert(t.length>0),this.textures=t,this.emit(l.loaded)}}_customLocalBounds(e){let{texture:t}=this.pp;t&&e.addFrame(0,0,t.width,t.height)}play(e){if(!this.pp.isPlaying||this.pp.currentAction!==e){if(!this._$onStage())throw Error(`AnimatedSprite.play: please add to stage first before play, label: "${this.label}"`);let t=this.pp;if(t.isPlaying=!0,t.currentAction=e,t.originalTextures.length>0){let n=xe(t.originalTextures,e);n?t.textures!==n&&(t.textures=n,this.markDirty(N.size),t.currentFrame=-1,this.currentFrame=0):console.warn(`No textures found for action: ${e}`)}this._$clearTimer(),this._$startTimer(),this.emit(l.play)}return this}stop(){return this.pp.isPlaying&&(this.pp.isPlaying=!1,this._$clearTimer(),this.emit(l.stop)),this}_$startTimer(){let e=this.pp;e.timer=this._$animClock(),e.timer?.onFrame(this._$update,this)}_$clearTimer(){let e=this.pp;e.timer?.clearTimer(this._$update,this),e.timer=void 0}gotoAndStop(e){return this.stop(),this.currentFrame=e,this}gotoAndPlay(e){return this.currentFrame=e,this.play(this.pp.currentAction),this}_$update(){let e=this.pp,t=e.textures.length;if(!t||!e.enabled)return;let n=e.frameTime+e.timer.delta*e.frameRate,r=Math.floor(n+1e-9);if(!this.loop&&r>=t){e.frameTime=t,e.currentFrame=t,this._$renderFrame(t);return}e.frameTime=n-Math.floor(r/t)*t;let i=r%t;i!==e.currentFrame&&(e.currentFrame=i,this._$renderFrame(i))}destroy(){this.stop(),super.destroy()}};Se=m([p(`AnimatedSprite`),j(`design:paramtypes`,[Object])],Se);var R=class{id=S(`filter`);label=``;shader=``;glVertex=``;glFragment=``;_resources={};get resources(){return this._resources}set resources(e){this._resources!==e&&(this._resources=e,this.syncResources(),this.dirty=!0)}_enabled=!0;_padding=0;_resolution=1;_hdr=!1;get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this._structural())}get padding(){return this._padding}set padding(e){this._padding!==e&&(this._padding=e,this._structural())}get resolution(){return this._resolution}set resolution(e){this._resolution!==e&&(this._resolution=e,this._structural())}get hdr(){return this._hdr}set hdr(e){this._hdr!==e&&(this._hdr=e,this._structural())}blendRequired=!1;backdropOffset=[0,0];onDirty;_isDirty=!0;_version=0;_dynamicTextures;_resourceEpoch=0;_textureUpdate;syncResources(){let e=++this._resourceEpoch;for(let t in this.resources){let n=this.resources[t];!(n instanceof c)||!n.dynamic||(this._dynamicTextures??=new Map,this._dynamicTextures.has(n)||(this._textureUpdate??=(e,t)=>{if(t===`destroy`){for(let t in this.resources)this.resources[t]===e&&(this.resources[t]=c.BLANK);this._dynamicTextures?.delete(e)}this.dirty=!0},n.onUpdate(this._textureUpdate)),this._dynamicTextures.set(n,e))}if(this._dynamicTextures&&this._textureUpdate)for(let[t,n]of this._dynamicTextures)n!==e&&(t.offUpdate(this._textureUpdate),this._dynamicTextures.delete(t))}get version(){return this._version}getSourceVersion(e){return 0}get dirty(){return this._isDirty}set dirty(e){this._isDirty=e,e&&(this._version++,this.onDirty?.())}_structural(){this._isDirty=!0,this._version++,this.onDirty?.(!0)}get passes(){return[this]}constructor(e){this.shader=e.shader,e.glVertex&&(this.glVertex=e.glVertex),e.glFragment&&(this.glFragment=e.glFragment),e.resources&&(this.resources=e.resources),e.padding!==void 0&&(this.padding=e.padding),e.resolution!==void 0&&(this.resolution=e.resolution)}setProps(e){if(e){let t=Object.keys(e);for(let n of t)n in this&&(this[n]=e[n])}}destroy(){if(this._dynamicTextures&&this._textureUpdate){for(let e of this._dynamicTextures.keys())e.offUpdate(this._textureUpdate);this._dynamicTextures.clear()}let e=Object.keys(this.resources);for(let t of e){let e=this.resources[t];e instanceof i&&e.destroy()}}},z=`#version 300 es
in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;

void main() {
    gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    vUV = aUV;
}
`,Ce=`#version 300 es
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
`,we=`struct VertexInput {
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
`,Te=class extends R{constructor(){let e=new i({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:`f32`,size:20},uAlpha:{value:1,type:`f32`}});super({shader:we,glVertex:z,glFragment:Ce,resources:{filterUniforms:e}})}get matrix(){return this.resources.filterUniforms.getValue(`uColorMatrix`)}set matrix(e){this.dirty=!0,this.resources.filterUniforms.setValue(`uColorMatrix`,e)}brightness(e,t=!1){let n=[e,0,0,0,0,0,e,0,0,0,0,0,e,0,0,0,0,0,1,0];this._loadMatrix(n,t)}contrast(e,t=!1){let n=-.5*(e-1),r=[e,0,0,0,n,0,e,0,0,n,0,0,e,0,n,0,0,0,1,0];this._loadMatrix(r,t)}saturate(e,t=!1){let n=e*2/3+1/3,r=(n-1)*-.5,i=[n,r,r,0,0,r,n,r,0,0,r,r,n,0,0,0,0,0,1,0];this._loadMatrix(i,t)}hue(e,t=!1){let n=e*Math.PI/180,r=Math.cos(n),i=Math.sin(n),a=.213,o=.715,s=.072,c=[a+r*(1-a)+i*-.213,o+r*-.715+i*-.715,s+r*-.072+i*(1-s),0,0,a+r*-.213+i*.143,o+r*(1-o)+i*.14,s+r*-.072+i*-.283,0,0,a+r*-.213+i*-.787,o+r*-.715+i*o,s+r*(1-s)+i*s,0,0,0,0,0,1,0];this._loadMatrix(c,t)}greyscale(e,t=!1){let n=.213,r=.715,i=.072,a=1-e,o=[n*e+a,r*e,i*e,0,0,n*e,r*e+a,i*e,0,0,n*e,r*e,i*e+a,0,0,0,0,0,1,0];this._loadMatrix(o,t)}tint(e,t,n,r=!1){let i=[e,0,0,0,0,0,t,0,0,0,0,0,n,0,0,0,0,0,1,0];this._loadMatrix(i,r)}sepia(e=!1){this._loadMatrix([.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0],e)}negative(e=!1){this._loadMatrix([-1,0,0,0,1,0,-1,0,0,1,0,0,-1,0,1,0,0,0,1,0],e)}reset(){let e=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this.matrix=e}_loadMatrix(e,t=!1){if(t){let t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this._multiply(t,this.matrix,e),this.matrix=t}else this.matrix=e}_multiply(e,t,n){return e[0]=t[0]*n[0]+t[1]*n[5]+t[2]*n[10]+t[3]*n[15],e[1]=t[0]*n[1]+t[1]*n[6]+t[2]*n[11]+t[3]*n[16],e[2]=t[0]*n[2]+t[1]*n[7]+t[2]*n[12]+t[3]*n[17],e[3]=t[0]*n[3]+t[1]*n[8]+t[2]*n[13]+t[3]*n[18],e[4]=t[0]*n[4]+t[1]*n[9]+t[2]*n[14]+t[3]*n[19]+t[4],e[5]=t[5]*n[0]+t[6]*n[5]+t[7]*n[10]+t[8]*n[15],e[6]=t[5]*n[1]+t[6]*n[6]+t[7]*n[11]+t[8]*n[16],e[7]=t[5]*n[2]+t[6]*n[7]+t[7]*n[12]+t[8]*n[17],e[8]=t[5]*n[3]+t[6]*n[8]+t[7]*n[13]+t[8]*n[18],e[9]=t[5]*n[4]+t[6]*n[9]+t[7]*n[14]+t[8]*n[19]+t[9],e[10]=t[10]*n[0]+t[11]*n[5]+t[12]*n[10]+t[13]*n[15],e[11]=t[10]*n[1]+t[11]*n[6]+t[12]*n[11]+t[13]*n[16],e[12]=t[10]*n[2]+t[11]*n[7]+t[12]*n[12]+t[13]*n[17],e[13]=t[10]*n[3]+t[11]*n[8]+t[12]*n[13]+t[13]*n[18],e[14]=t[10]*n[4]+t[11]*n[9]+t[12]*n[14]+t[13]*n[19]+t[14],e[15]=t[15]*n[0]+t[16]*n[5]+t[17]*n[10]+t[18]*n[15],e[16]=t[15]*n[1]+t[16]*n[6]+t[17]*n[11]+t[18]*n[16],e[17]=t[15]*n[2]+t[16]*n[7]+t[17]*n[12]+t[18]*n[17],e[18]=t[15]*n[3]+t[16]*n[8]+t[17]*n[13]+t[18]*n[18],e[19]=t[15]*n[4]+t[16]*n[9]+t[17]*n[14]+t[18]*n[19]+t[19],e}},Ee=class extends e{_textNode=new te;_bgSprite=new r;_bgShape=new oe;_hovered=!1;_disabled=!1;_greyFilter;constructor(e){super();let t=this.pp;t.width=80,t.height=40,t.textFill=`#ffffff`,t.bgStyle={fill:`#333333`,cornerRadius:10},t.bgHoverStyle={fill:`#555555`},this._initNodes(),this.setProps(e)}_initNodes(){this._textNode.anchor.set(.5,.5),this._textNode.fontWeight=`bold`,this._textNode.align=`center`,this._bgSprite.visible=!1,this.addChild(this._bgShape),this.addChild(this._bgSprite),this.addChild(this._textNode),this._$redraw(),this.on(l.pointerOver,()=>{this._disabled||(this.stage&&(this.stage.cursor=`pointer`),this._hovered=!0,this._$redraw())}),this.on(l.pointerOut,()=>{this.stage&&(this.stage.cursor=`default`),this._hovered=!1,this._$redraw()})}get width(){return this.pp.width}set width(e){this.pp.width!==e&&(super.width=e,this._$redraw())}get height(){return this.pp.height}set height(e){this.pp.height!==e&&(super.height=e,this._$redraw())}get url(){return this.pp.url}set url(e){if(this.pp.url!==e)if(this.pp.url=e,e){let t=e;this._bgSprite.load(t).then(()=>{this.pp.url===t&&this._$redraw()}),this._bgSprite.visible=!0,this._bgShape.visible=!1}else this._bgSprite.visible=!1,this._bgShape.visible=!0}get text(){return this._textNode.text}set text(e){this._textNode.text=e}get fontSize(){return this._textNode.fontSize}set fontSize(e){this._textNode.fontSize=e}get fontWeight(){return this._textNode.fontWeight}set fontWeight(e){this._textNode.fontWeight=e}get textFill(){return this.pp.textFill}set textFill(e){this.pp.textFill!==e&&(this.pp.textFill=e,this._textNode.fill=e)}get textColor(){return this.pp.textFill}set textColor(e){this.textFill=e}get textHoverFill(){return this.pp.textHoverFill??this.textFill}set textHoverFill(e){this.pp.textHoverFill=e}get textStroke(){return this._textNode.stroke}set textStroke(e){this._textNode.stroke=e}get bgStyle(){return{...this.pp.bgStyle}}set bgStyle(e){this.pp.bgStyle={...this.pp.bgStyle,...e},this._$redraw()}get bgHoverStyle(){return this.pp.bgHoverStyle??this.pp.bgStyle}set bgHoverStyle(e){this.pp.bgHoverStyle={...this.pp.bgHoverStyle??this.pp.bgStyle,...e},this._$redraw()}get bgFill(){return this.pp.bgStyle.fill}set bgFill(e){this.pp.bgStyle={...this.pp.bgStyle,fill:e},this._$redraw()}get bgStroke(){return this.pp.bgStyle.stroke}set bgStroke(e){this.pp.bgStyle={...this.pp.bgStyle,stroke:e},this._$redraw()}get bgCornerRadius(){return this.pp.bgStyle.cornerRadius??0}set bgCornerRadius(e){this.pp.bgStyle={...this.pp.bgStyle,cornerRadius:e},this._$redraw()}get bgHoverFill(){return(this.pp.bgHoverStyle??this.pp.bgStyle).fill}set bgHoverFill(e){this.pp.bgHoverStyle={...this.pp.bgHoverStyle??this.pp.bgStyle,fill:e},this._$redraw()}get bgHoverStroke(){return(this.pp.bgHoverStyle??this.pp.bgStyle).stroke}set bgHoverStroke(e){this.pp.bgHoverStyle={...this.pp.bgHoverStyle??this.pp.bgStyle,stroke:e},this._$redraw()}get bgHoverCornerRadius(){return(this.pp.bgHoverStyle??this.pp.bgStyle).cornerRadius??0}set bgHoverCornerRadius(e){this.pp.bgHoverStyle={...this.pp.bgHoverStyle??this.pp.bgStyle,cornerRadius:e},this._$redraw()}_$redraw(){let{width:e,height:t}=this.pp;if(this._bgSprite.width=e,this._bgSprite.height=t,this._bgShape.clear(),this._bgShape.visible){let n=this._hovered?this.bgHoverStyle:this.pp.bgStyle,{fill:r,stroke:i}=n,a=n.cornerRadius??this.pp.bgStyle.cornerRadius??0;a?this._bgShape.roundRect(0,0,e,t,a):this._bgShape.rect(0,0,e,t),r&&this._bgShape.fill(r),i&&this._bgShape.stroke(i)}this._textNode.position.set(e/2,t/2),this._textNode.fill=this._hovered?this.textHoverFill:this.textFill}get disabled(){return this._disabled}set disabled(e){this._disabled!==e&&(this._disabled=e,e?(this._greyFilter||(this._greyFilter=new Te,this._greyFilter.greyscale(1)),this.addFilter(this._greyFilter)):this._greyFilter&&this.removeFilter(this._greyFilter),this.interactive=!e)}click(){this._disabled||this.emit(l.click)}};Ee=m([p(`Button`),j(`design:paramtypes`,[Object])],Ee);var De=0,Oe=class extends e{constructor(e){super();let t=this.pp;t.width=200,t.height=36,t.inputType=`text`,t.text=``,t.placeholder=``,t.fontSize=14,t.fontFamily=`Arial`,t.textFill=`#000000`,t.bgStyle={fill:`#ffffff`,stroke:{color:`#cccccc`,width:1},cornerRadius:4},t.maxLength=-1,t.readOnly=!1,t.disabled=!1,t.mounted=!1,t.synced=new Float64Array(11).fill(NaN),this.on(l.addedToStage,this._$onAddedToStage,this),this.on(l.removedFromStage,this._$onRemovedFromStage,this),this.setProps(e)}get onInput(){return this.pp.onInput}set onInput(e){this.pp.onInput&&this.off(l.input,this.pp.onInput,this),e&&this.on(l.input,e,this),this.pp.onInput=e}get onFocus(){return this.pp.onFocus}set onFocus(e){this.pp.onFocus&&this.off(l.focus,this.pp.onFocus,this),e&&this.on(l.focus,e,this),this.pp.onFocus=e}get onBlur(){return this.pp.onBlur}set onBlur(e){this.pp.onBlur&&this.off(l.blur,this.pp.onBlur,this),e&&this.on(l.blur,e,this),this.pp.onBlur=e}get onEnter(){return this.pp.onEnter}set onEnter(e){this.pp.onEnter&&this.off(l.enter,this.pp.onEnter,this),e&&this.on(l.enter,e,this),this.pp.onEnter=e}get inputType(){return this.pp.inputType}set inputType(e){if(this.pp.inputType!==e){this.pp.inputType=e;let t=this.pp.inputElement;t&&(t.type=e)}}get text(){return this.pp.text}set text(e){if(this.pp.text!==e){this.pp.text=e;let t=this.pp.inputElement;t&&(t.value=e)}}get placeholder(){return this.pp.placeholder}set placeholder(e){if(this.pp.placeholder!==e){this.pp.placeholder=e;let t=this.pp.inputElement;t&&(t.placeholder=e)}}get fontSize(){return this.pp.fontSize}set fontSize(e){this.pp.fontSize!==e&&(this.pp.fontSize=e,this._$applyStyle())}get fontFamily(){return this.pp.fontFamily}set fontFamily(e){this.pp.fontFamily!==e&&(this.pp.fontFamily=e,this._$applyStyle())}get textFill(){return this.pp.textFill}set textFill(e){this.pp.textFill!==e&&(this.pp.textFill=e,this._$applyStyle())}get textColor(){return this.pp.textFill}set textColor(e){this.textFill=e}get bgStyle(){return{...this.pp.bgStyle}}set bgStyle(e){this.pp.bgStyle={...this.pp.bgStyle,...e},this._$applyStyle()}get maxLength(){return this.pp.maxLength}set maxLength(e){if(this.pp.maxLength!==e){this.pp.maxLength=e;let t=this.pp.inputElement;t&&(t.maxLength=e>0?e:-1)}}get readOnly(){return this.pp.readOnly}set readOnly(e){if(this.pp.readOnly!==e){this.pp.readOnly=e;let t=this.pp.inputElement;t&&(t.readOnly=e)}}get disabled(){return this.pp.disabled}set disabled(e){if(this.pp.disabled!==e){this.pp.disabled=e;let t=this.pp.inputElement;t&&(t.disabled=e)}}get inputElement(){return this.pp.inputElement}focus(){this.pp.inputElement?.focus()}blur(){this.pp.inputElement?.blur()}_customLocalBounds(e){e.addFrame(0,0,this.pp.width,this.pp.height)}destroy(){this._$unmountInput(),super.destroy()}_$onAddedToStage(){this.pp.mounted?this._$sync(!0):this._$mountInput()}_$onRemovedFromStage(e){e||this._$unmountInput()}_$mountInput(){let e=this.stage;if(!e||this.pp.mounted)return;let t=document.createElement(`input`);this.pp.inputElement=t,t.id=`liko-input-${De++}`,t.type=this.pp.inputType,t.value=this.pp.text,t.placeholder=this.pp.placeholder,t.readOnly=this.pp.readOnly,t.disabled=this.pp.disabled,this.pp.maxLength>0&&(t.maxLength=this.pp.maxLength),t.style.cssText=`position:absolute;left:0;top:0;margin:0;padding:2px 4px;box-sizing:border-box;outline:none;transform-origin:0 0;pointer-events:auto`,this._$applyStyle(),t.addEventListener(`input`,this._$onInput),t.addEventListener(`focus`,this._$onFocus),t.addEventListener(`blur`,this._$onBlur),t.addEventListener(`keydown`,this._$onKeyDown);let n=e.canvas.parentElement;n&&n.appendChild(t),this._$sync(!0),e.on(l.resize,this._$onResize,this),o.system.onFrame(this._$sync,this),this.pp.mounted=!0}_$unmountInput(){let e=this.pp.inputElement;e&&(this.stage?.off(l.resize,this._$onResize,this),o.system.clearTimer(this._$sync,this),e.removeEventListener(`input`,this._$onInput),e.removeEventListener(`focus`,this._$onFocus),e.removeEventListener(`blur`,this._$onBlur),e.removeEventListener(`keydown`,this._$onKeyDown),e.remove(),this.pp.inputElement=void 0,this.pp.mounted=!1,this.pp.synced.fill(NaN))}_$applyStyle(){let e=this.pp.inputElement;if(!e)return;let t=this.pp,n=e.style;n.font=`${t.fontSize}px ${t.fontFamily}`,n.color=this._toCss(t.textFill);let{fill:r,stroke:i}=t.bgStyle;if(n.backgroundColor=r?this._toCss(r):``,i&&typeof i==`object`){let e=i.width??0;n.border=e>0?`${e}px solid ${this._toCss(i.color)}`:`none`}else i?n.border=`1px solid ${this._toCss(i)}`:n.border=`none`;n.borderRadius=`${t.bgStyle.cornerRadius??0}px`}_toCss(e){return e==null?``:typeof e==`string`?e:typeof e==`number`?`#${e.toString(16).padStart(6,`0`)}`:typeof e==`object`&&`color`in e?this._toCss(e.color):``}_$onResize(){this._$sync(!0)}_$sync(e){let t=this.pp,n=t.inputElement,r=this.stage;if(!n||!r)return;let i=t.synced;e&&(i[9]=NaN);let a=1;for(let e=this;e;e=e.pp.parent){let t=e.pp;if(!t.visible||!t.enabled){a=-1;break}a*=t.alpha}let o=n.style;if(a!==i[8]&&(i[8]=a,o.display=a<0?`none`:``,a>=0&&(o.opacity=`${a}`)),(t.width!==i[6]||t.height!==i[7])&&(i[6]=t.width,i[7]=t.height,o.width=`${t.width}px`,o.height=`${t.height}px`),a<0)return;let s=!1;if(Number.isNaN(i[9])){let e=r.canvas.getBoundingClientRect(),t=n.offsetParent,a=t?t.getBoundingClientRect():{left:0,top:0};i[9]=e.left-a.left,i[10]=e.top-a.top,s=!0}let c=this.worldMatrix,l=r.renderScale,u=c.a*l.x,d=c.b*l.x,f=c.c*l.y,p=c.d*l.y,m=c.tx*l.x,h=c.ty*l.y;(s||u!==i[0]||d!==i[1]||f!==i[2]||p!==i[3]||m!==i[4]||h!==i[5])&&(i[0]=u,i[1]=d,i[2]=f,i[3]=p,i[4]=m,i[5]=h,o.transform=`matrix(${u},${d},${f},${p},${m+i[9]},${h+i[10]})`)}_$onInput=()=>{let e=this.pp.inputElement;e&&(this.pp.text=e.value,this.emit(l.input,e.value))};_$onFocus=()=>{this.emit(l.focus)};_$onBlur=()=>{this.emit(l.blur)};_$onKeyDown=e=>{e.key===`Enter`&&this.emit(l.enter,this.pp.text)}};Oe=m([p(`Input`),j(`design:paramtypes`,[Object])],Oe);var ke=class extends ie{constructor(e){super();let t=this.pp;t.direction=`row`,t.gap=0,t.alignItems=`start`,t.justifyContent=`start`,t.wrap=!1,t.padding=0,t.layoutDirty=!1,t.prevBW=0,t.prevBH=0,t.cMains=[],t.cCrosses=[],t.cVisible=[],t.cLines=[],this.setProps(e)}get width(){return this.pp.width>=0?this.pp.width:this.getLocalBounds().width}set width(e){this.pp.width!==e&&(super.width=e,this._invalidateLayout())}get height(){return this.pp.height>=0?this.pp.height:this.getLocalBounds().height}set height(e){this.pp.height!==e&&(super.height=e,this._invalidateLayout())}get direction(){return this.pp.direction}set direction(e){this.pp.direction!==e&&(this.pp.direction=e,this._invalidateLayout())}get gap(){return this.pp.gap}set gap(e){this.pp.gap!==e&&(this.pp.gap=e,this._invalidateLayout())}get alignItems(){return this.pp.alignItems}set alignItems(e){this.pp.alignItems!==e&&(this.pp.alignItems=e,this._invalidateLayout())}get justifyContent(){return this.pp.justifyContent}set justifyContent(e){this.pp.justifyContent!==e&&(this.pp.justifyContent=e,this._invalidateLayout())}get wrap(){return this.pp.wrap}set wrap(e){this.pp.wrap!==e&&(this.pp.wrap=e,this._invalidateLayout())}get padding(){return this.pp.padding}set padding(e){this.pp.padding!==e&&(this.pp.padding=e,this._invalidateLayout())}addChild(e,t){return super.addChild(e,t),e.on(l.resize,this._invalidateLayout,this),this._invalidateLayout(),this}removeChild(e){return e?(e.off(l.resize,this._invalidateLayout,this),super.removeChild(e),this._invalidateLayout(),this):this}setChildIndex(e,t){return super.setChildIndex(e,t),this._invalidateLayout(),this}removeChildren(){let{children:e}=this.pp;for(let t=e.length-1;t>=0;t--)e[t].off(l.resize,this._invalidateLayout,this);return super.removeChildren(),this._invalidateLayout(),this}destroyChildren(){let{children:e}=this.pp;for(let t=e.length-1;t>=0;t--)e[t].off(l.resize,this._invalidateLayout,this);return super.destroyChildren(),this._invalidateLayout(),this}invalidateLayout(){this._invalidateLayout()}_$childVisibleChanged(){this._invalidateLayout()}getLocalBounds(){return this.pp.layoutDirty&&this._applyLayout(),super.getLocalBounds()}_customLocalBounds(e){for(let t of this.children){if(!t.visible)continue;let n=t.getLocalBounds();n!==_.EMPTY&&e.addBounds(n,t.localMatrix)}e.isValid||e.addFrame(0,0,0,0)}destroy(){let{children:e}=this.pp;for(let t=e.length-1;t>=0;t--)e[t].off(l.resize,this._invalidateLayout,this);super.destroy()}_invalidateLayout(){this.pp.layoutDirty=!0,o.callLater(this._applyLayout,this)}_applyLayout(){let e=this.pp;if(this.destroyed||!e.layoutDirty)return;e.layoutDirty=!1;let{children:t,direction:n,gap:r,alignItems:i,justifyContent:a,padding:o,wrap:s,cMains:c,cCrosses:l,cVisible:u,cLines:d}=e,f=t.length,p=n===`row`,{width:m,height:h}=e,g=m,_=h;if(m<0||h<0){let e=this.getLocalBounds();m<0&&(g=e.width),h<0&&(_=e.height)}let v=s?(p?g:_)-o*2:1/0,y=(p?g:_)-o*2;c.length=0,l.length=0,u.length=0;for(let e=0;e<f;e++){let n=t[e];if(!n.visible)continue;let r=n.pp,i,a;if(r.width>=0&&r.height>=0)i=r.width,a=r.height;else{let e=n.getLocalBounds();i=r.width>=0?r.width:e.width,a=r.height>=0?r.height:e.height}u.push(n),c.push(p?i:a),l.push(p?a:i)}let b=u.length;if(b===0){d.length=0,this._completeLayout();return}let x=0,S=0,C=0,w=0;for(let e=0;e<b;e++){let t=c[e];if(s&&e>S&&C+t>v){d[x]||(d[x]={start:0,end:0,totalMain:0,crossMax:0});let t=d[x];t.start=S,t.end=e,t.totalMain=C-r,t.crossMax=w,x++,S=e,C=0,w=0}C+=t+r,l[e]>w&&(w=l[e])}d[x]||(d[x]={start:0,end:0,totalMain:0,crossMax:0});let T=d[x];T.start=S,T.end=b,T.totalMain=C-r,T.crossMax=w;let E=x+1;d.length=E;let D=o;for(let e=0;e<E;e++){let t=d[e],n=t.end-t.start,f=o,m=0;if(a!==`start`&&y>0){let e=y-t.totalMain;if(e>0)switch(a){case`center`:f=o+e*.5;break;case`end`:f=o+e;break;case`space-between`:n>1&&(m=e/(n-1));break;case`space-around`:m=e/n,f=o+m*.5;break}}let h=f;for(let e=t.start;e<t.end;e++){let n=D;if(i!==`start`){let r=s?t.crossMax:(p?_:g)-o*2;if(r>0){let t=r-l[e];n=i===`center`?D+t*.5:D+t}}u[e].position.set(p?h:n,p?n:h),h+=c[e]+r+m}D+=t.crossMax+r}this._completeLayout()}_completeLayout(){let e=this.pp,t=!1;if(e.width<0||e.height<0){e.boundsDirty=!0;let n=this.getLocalBounds();(n.width!==e.prevBW||n.height!==e.prevBH)&&(e.prevBW=n.width,e.prevBH=n.height,t=!0)}e.layoutDirty=!1,t&&this.emit(l.resize)}};ke=m([p(`Layout`),j(`design:paramtypes`,[Object])],ke);var B=new Map,Ae=[],je=0,V=class extends e{static _$lights(e){return B.get(e.scene??e.stage)?.lights??Ae}static _$version(e,t){let n=B.get(e.scene??e.stage);if(!n)return 0;if(n.frame!==t){n.frame=t;let e=!1,r=n.lights;for(let t=0;t<r.length;t++)r[t]._$snapshot()&&(e=!0);e&&(n.version=++je)}return n.version}constructor(e){super();let t=this.pp;t.type=`point`,t.lightColor=new s(16777215),t.intensity=1,t.radius=200,t.innerRadius=0,t.falloff=1,t.innerAngle=30,t.outerAngle=60,t.cookieUrl=``,t.falloffSize=20,t.layers=1,t.blend=`multiply`,t.snap=new Float64Array(7).fill(NaN),this.on(l.addedToStage,this._$register,this),this.on(l.removedFromStage,this._$onRemovedFromStage,this),this.setProps(e)}get type(){return this.pp.type}set type(e){this.pp.type=e,this._$changed()}get color(){return this.pp.lightColor.value}set color(e){this.pp.lightColor.value=e,this._$changed()}get intensity(){return this.pp.intensity}set intensity(e){this.pp.intensity=e,this._$changed()}get radius(){return this.pp.radius}set radius(e){this.pp.radius=e,this._$changed()}get innerRadius(){return this.pp.innerRadius}set innerRadius(e){this.pp.innerRadius=e,this._$changed()}get falloff(){return this.pp.falloff}set falloff(e){this.pp.falloff=e,this._$changed()}get innerAngle(){return this.pp.innerAngle}set innerAngle(e){this.pp.innerAngle=e,this._$changed()}get outerAngle(){return this.pp.outerAngle}set outerAngle(e){this.pp.outerAngle=e,this._$changed()}get cookie(){return this.pp.cookieUrl}set cookie(e){let t=this.pp;t.cookieUrl=e,t.cookie=void 0,this._$changed(),e&&P.load(e,`image`).then(n=>{t.cookieUrl!==e||this.destroyed||(t.cookie=n,this._$changed())})}get cookieTexture(){return this.pp.cookie}set cookieTexture(e){this.pp.cookie=e,this.pp.cookieUrl=e?.url??``,this._$changed()}get points(){return this.pp.points}set points(e){this.pp.points=e,this.pp.mesh=void 0,this._$changed()}get falloffSize(){return this.pp.falloffSize}set falloffSize(e){this.pp.falloffSize=e,this.pp.mesh=void 0,this._$changed()}get layers(){return this.pp.layers}set layers(e){this.pp.layers=e,this._$changed()}get blend(){return this.pp.blend}set blend(e){this.pp.blend=e,this._$changed()}get lightColor(){return this.pp.lightColor}get active(){if(!this.pp.group)return!1;for(let e=this;e;e=e.pp.parent)if(!e.pp.enabled||!e.pp.visible)return!1;return!0}get mesh(){let e=this.pp;return!e.mesh&&e.points&&e.points.length>=6&&(e.mesh=Me(e.points,e.falloffSize)),e.mesh}_customRenderBounds(e){}destroy(){this._$unregister(),super.destroy()}_$snapshot(){let e=this.pp.snap,t=this.worldMatrix,n=+!!this.active;return e[0]===t.a&&e[1]===t.b&&e[2]===t.c&&e[3]===t.d&&e[4]===t.tx&&e[5]===t.ty&&e[6]===n?!1:(e[0]=t.a,e[1]=t.b,e[2]=t.c,e[3]=t.d,e[4]=t.tx,e[5]=t.ty,e[6]=n,!0)}_$changed(){let e=this.pp.group;e&&(e.version=++je),this.markDirty(N.texture)}_$register(){let e=this.scene??this.stage;if(this.pp.group?.owner===e)return;this._$unregister();let t=B.get(e);t||(t={owner:e,lights:[],version:0,frame:-1},B.set(e,t)),t.lights.push(this),this.pp.group=t,this._$changed()}_$onRemovedFromStage(e){e||this._$unregister()}_$unregister(){let e=this.pp.group;if(!e)return;this.pp.group=void 0;let t=e.lights,n=t.indexOf(this);n>=0&&(t[n]=t[t.length-1],t.pop()),e.version=++je,t.length||B.delete(e.owner)}};V=m([p(`Light2D`),j(`design:paramtypes`,[Object])],V);function Me(e,t){let n=e.length>>1,r=0;for(let t=0;t<n;t++){let i=(t+1)%n;r+=e[t*2]*e[i*2+1]-e[i*2]*e[t*2+1]}let i=r>0?1:-1,a=[],o=[];for(let e=0;e<n;e++)o.push(e);let s=n*n;for(;o.length>3&&s-->0;){let t=!1;for(let n=0;n<o.length;n++){let r=o[(n+o.length-1)%o.length],s=o[n],c=o[(n+1)%o.length],l=e[r*2],u=e[r*2+1],d=e[s*2],f=e[s*2+1],p=e[c*2],m=e[c*2+1];if(((d-l)*(m-u)-(f-u)*(p-l))*i<=0)continue;let h=!1;for(let t of o)if(t!==r&&t!==s&&t!==c&&Ne(e[t*2],e[t*2+1],l,u,d,f,p,m)){h=!0;break}if(!h){a.push(l,u,1,d,f,1,p,m,1),o.splice(n,1),t=!0;break}}if(!t)break}if(o.length===3)for(let t of o)a.push(e[t*2],e[t*2+1],1);if(t>0){let r=[],o=[];for(let a=0;a<n;a++){let s=(a+n-1)%n,c=(a+1)%n,l=0,u=0;for(let[t,n]of[[s,a],[a,c]]){let r=e[n*2]-e[t*2],a=e[n*2+1]-e[t*2+1],o=Math.hypot(r,a)||1;l+=a/o*i,u+=-r/o*i}let d=Math.hypot(l,u)||1;r.push(e[a*2]+l/d*t),o.push(e[a*2+1]+u/d*t)}for(let t=0;t<n;t++){let i=(t+1)%n,s=e[t*2],c=e[t*2+1],l=e[i*2],u=e[i*2+1];a.push(s,c,1,l,u,1,r[i],o[i],0),a.push(s,c,1,r[i],o[i],0,r[t],o[t],0)}}return new Float32Array(a)}function Ne(e,t,n,r,i,a,o,s){let c=(e-i)*(r-a)-(n-i)*(t-a),l=(e-o)*(a-s)-(i-o)*(t-s),u=(e-n)*(s-r)-(o-n)*(t-r);return!((c<0||l<0||u<0)&&(c>0||l>0||u>0))}var H=new Float32Array(4),U=new Float32Array(4),Pe=class extends a{vertexSize=32;indexSize=54;colorSize=16;uvSize=64;_grid(){let e=this.node,{leftWidth:t,rightWidth:n,topHeight:r,bottomHeight:i}=e,a=e.width,o=e.height,s=t+n>a&&t+n>0?a/(t+n):1,c=r+i>o&&r+i>0?o/(r+i):1;H[0]=0,H[1]=t*s,H[2]=a-n*s,H[3]=a,U[0]=0,U[1]=r*c,U[2]=o-i*c,U[3]=o}packVertex(e){this._grid();let{f32Data:t}=e,{a:n,b:r,c:i,d:a,tx:o,ty:s}=this.node.pp.worldMatrix,c=this.vertexStart;for(let e=0;e<4;e++){let l=U[e];for(let e=0;e<4;e++){let u=H[e];t[c++]=n*u+i*l+o,t[c++]=r*u+a*l+s}}}updateAndPackVertex(e,t,n,r){let i=this.node.pp;t.updateMatrix(i.localMatrix,i.worldMatrix,n,r),this.packVertex(e)}packIndex(e){let{data:t}=e,n=this.vertexStart*.5,r=this.indexStart;for(let e=0;e<3;e++)for(let i=0;i<3;i++){let a=n+e*4+i;t[r]=a,t[r+1]=a+1,t[r+2]=a+5,t[r+3]=a,t[r+4]=a+5,t[r+5]=a+4,r+=6}}packColor(e){e.u32Data.fill(this.node.pp.tint.abgr,this.colorStart,this.colorStart+16)}packUV(e){let t=this.node,{uvs:n,trimRect:r}=t.texture,{f32Data:i,u32Data:a}=e,o=this.textureId,s=t.pp.extra,c=(n.x1-n.x0)/(r.width||1),l=(n.y3-n.y0)/(r.height||1);H[0]=n.x0,H[1]=n.x0+t.leftWidth*c,H[2]=n.x1-t.rightWidth*c,H[3]=n.x1,U[0]=n.y0,U[1]=n.y0+t.topHeight*l,U[2]=n.y3-t.bottomHeight*l,U[3]=n.y3;let u=this.uvStart;for(let e=0;e<4;e++)for(let t=0;t<4;t++)i[u]=H[t],i[u+1]=U[e],a[u+2]=o,a[u+3]=s,u+=4}},Fe=!1,Ie=class extends r{renderObject=new Pe(this);constructor(e){super();let t=this.pp;t.leftWidth=t.topHeight=t.rightWidth=t.bottomHeight=10,this.setProps(e)}get texture(){return super.texture}set texture(e){e?.rotated&&!Fe&&(Fe=!0,console.warn(`[Liko] NineSliceSprite does not support rotated atlas frames, label: "${this.label}"`)),super.texture=e}get leftWidth(){return this.pp.leftWidth}set leftWidth(e){this._setBorder(`leftWidth`,e)}get topHeight(){return this.pp.topHeight}set topHeight(e){this._setBorder(`topHeight`,e)}get rightWidth(){return this.pp.rightWidth}set rightWidth(e){this._setBorder(`rightWidth`,e)}get bottomHeight(){return this.pp.bottomHeight}set bottomHeight(e){this._setBorder(`bottomHeight`,e)}_setBorder(e,t){let n=this.pp;n[e]!==t&&(n[e]=t,this.markDirty(N.size),this.markDirty(N.texture))}};Ie=m([p(`NineSliceSprite`),j(`design:paramtypes`,[Object])],Ie);var Le=class extends e{_bgShape=new oe;_bgSprite=new r;_barShape=new oe;_barSprite=new r;_barContainer=new ie;constructor(e){super();let t=this.pp;t.width=200,t.height=20,t.progress=0,t.bgStyle={fill:`#333333`},t.barStyle={fill:`#4CAF50`},this._bgSprite.visible=!1,this._barSprite.visible=!1,this._barContainer.overflow=`hidden`,this._barContainer.addChild(this._barShape),this._barContainer.addChild(this._barSprite),this.addChild(this._bgShape),this.addChild(this._bgSprite),this.addChild(this._barContainer),this._redraw(),this.setProps(e)}get width(){return this.pp.width}set width(e){this.pp.width!==e&&(super.width=e,this._redraw())}get height(){return this.pp.height}set height(e){this.pp.height!==e&&(super.height=e,this._redraw())}get progress(){return this.pp.progress}set progress(e){let t=Math.max(0,Math.min(1,e));this.pp.progress!==t&&(this.pp.progress=t,this._updateProgress(),this.emit(l.progress,t))}get bgUrl(){return this.pp.bgUrl}set bgUrl(e){if(this.pp.bgUrl!==e){if(this.pp.bgUrl=e,e){this._bgSprite.visible=!0,this._bgShape.visible=!1;let t=e;this._bgSprite.load(t).then(()=>{this.pp.bgUrl===t&&this._redrawBg()})}else this._bgSprite.visible=!1,this._bgShape.visible=!0;this._redrawBg()}}get barUrl(){return this.pp.barUrl}set barUrl(e){if(this.pp.barUrl!==e){if(this.pp.barUrl=e,e){this._barSprite.visible=!0,this._barShape.visible=!1;let t=e;this._barSprite.load(t).then(()=>{this.pp.barUrl===t&&this._redrawBar()})}else this._barSprite.visible=!1,this._barShape.visible=!0;this._redrawBar()}}get bgStyle(){return{...this.pp.bgStyle}}set bgStyle(e){this._setBgStyle({...this.pp.bgStyle,...e})}get barStyle(){return{...this.pp.barStyle}}set barStyle(e){this.pp.barStyle={...this.pp.barStyle,...e},this._redrawBar()}get bgFill(){return this.pp.bgStyle.fill}set bgFill(e){this._setBgStyle({...this.pp.bgStyle,fill:e})}get bgStroke(){return this.pp.bgStyle.stroke}set bgStroke(e){this._setBgStyle({...this.pp.bgStyle,stroke:e})}get bgCornerRadius(){return this.pp.bgStyle.cornerRadius??0}set bgCornerRadius(e){this._setBgStyle({...this.pp.bgStyle,cornerRadius:e})}get barFill(){return this.pp.barStyle.fill}set barFill(e){this.pp.barStyle={...this.pp.barStyle,fill:e},this._redrawBar()}get barStroke(){return this.pp.barStyle.stroke}set barStroke(e){this.pp.barStyle={...this.pp.barStyle,stroke:e},this._redrawBar()}get barCornerRadius(){return this.pp.barStyle.cornerRadius??0}set barCornerRadius(e){this.pp.barStyle={...this.pp.barStyle,cornerRadius:e},this._redrawBar()}get padding(){return this.pp.padding??0}set padding(e){this.pp.padding!==e&&(this.pp.padding=e,this._redrawBar())}get cornerRadius(){return this.pp.cornerRadius??0}set cornerRadius(e){this.pp.cornerRadius!==e&&(this.pp.cornerRadius=e,this._redraw())}_redraw(){this._redrawBg(),this._redrawBar()}_setBgStyle(e){let t=this._getEffectivePadding();this.pp.bgStyle=e,this._redrawBg(),this._getEffectivePadding()!==t&&this._redrawBar()}_redrawBg(){let{width:e,height:t}=this.pp,n=this.pp.bgStyle.cornerRadius??this.pp.cornerRadius??0;if(this._bgSprite.width=e,this._bgSprite.height=t,this._bgShape.clear(),this._bgShape.visible){let{fill:r,stroke:i}=this.pp.bgStyle;n>0?this._bgShape.roundRect(0,0,e,t,n):this._bgShape.rect(0,0,e,t),r&&this._bgShape.fill(r),i&&this._bgShape.stroke(i)}}_redrawBar(){let{width:e,height:t}=this.pp,n=this.pp.barStyle.cornerRadius??this.pp.cornerRadius??0,r=this._getEffectivePadding(),i=Math.max(0,e-r*2),a=Math.max(0,t-r*2);if(this._barContainer.position.set(r,r),this._barSprite.width=i,this._barSprite.height=a,this._barShape.clear(),this._barShape.visible){let{fill:e,stroke:t}=this.pp.barStyle;n>0?this._barShape.roundRect(0,0,i,a,n):this._barShape.rect(0,0,i,a),e&&this._barShape.fill(e),t&&this._barShape.stroke(t)}this._updateProgress()}_updateProgress(){let{width:e,height:t,progress:n}=this.pp,r=this._getEffectivePadding(),i=Math.max(0,e-r*2);this._barContainer.width=i*n,this._barContainer.height=Math.max(0,t-r*2)}_getEffectivePadding(){return this.pp.padding===void 0?this.pp.barUrl?0:this.pp.bgStyle.stroke?.width||0:this.pp.padding}};Le=m([p(`ProgressBar`),j(`design:paramtypes`,[Object])],Le);var Re=class extends e{constructor(e){super();let t=this.pp;t.width=300,t.height=400,t.scrollX=0,t.scrollY=0,t.directionX=!1,t.directionY=!0,t.elasticity=.5,t.deceleration=.97,t.dragThreshold=5,t.contentWidth=-1,t.contentHeight=-1,t.overflow=`hidden`,t.content=new ie,t.vx=0,t.vy=0,t.smoothVx=0,t.smoothVy=0,t.rawScrollX=0,t.rawScrollY=0,t.dragState=!1,t.startX=0,t.startY=0,t.lastX=0,t.lastY=0,t.animating=!1,t.cachedMaxX=0,t.cachedMaxY=0,t.maxDirty=!0,super.addChild(t.content),this.interactive=!0,this._bindEvents(),this.setProps(e)}get content(){return this.pp.content}get width(){return this.pp.width}set width(e){this.pp.width!==e&&(super.width=e,this._invalidateMax(),this._clampScroll())}get height(){return this.pp.height}set height(e){this.pp.height!==e&&(super.height=e,this._invalidateMax(),this._clampScroll())}get scrollX(){return this.pp.scrollX}set scrollX(e){let t=this.pp;if(!t.directionX)return;let n=this._clampValue(e,this._maxScrollX);t.scrollX!==n&&(t.scrollX=n,this._applyScroll())}get scrollY(){return this.pp.scrollY}set scrollY(e){let t=this.pp;if(!t.directionY)return;let n=this._clampValue(e,this._maxScrollY);t.scrollY!==n&&(t.scrollY=n,this._applyScroll())}get directionX(){return this.pp.directionX}set directionX(e){this.pp.directionX=e}get directionY(){return this.pp.directionY}set directionY(e){this.pp.directionY=e}get elasticity(){return this.pp.elasticity}set elasticity(e){this.pp.elasticity=Math.max(0,Math.min(1,e))}get deceleration(){return this.pp.deceleration}set deceleration(e){this.pp.deceleration=Math.max(0,Math.min(1,e))}get dragThreshold(){return this.pp.dragThreshold}set dragThreshold(e){this.pp.dragThreshold=Math.max(0,e)}get contentWidth(){return this.pp.contentWidth}set contentWidth(e){this.pp.contentWidth!==e&&(this.pp.contentWidth=e,this._invalidateMax())}get contentHeight(){return this.pp.contentHeight}set contentHeight(e){this.pp.contentHeight!==e&&(this.pp.contentHeight=e,this._invalidateMax())}get _maxScrollX(){let e=this.pp;return e.maxDirty&&this._calcMax(),e.cachedMaxX}get _maxScrollY(){let e=this.pp;return e.maxDirty&&this._calcMax(),e.cachedMaxY}scrollTo(e,t){this._stopAnimation();let n=this.pp;n.directionX&&(n.scrollX=this._clampValue(e,this._maxScrollX)),n.directionY&&(n.scrollY=this._clampValue(t,this._maxScrollY)),this._applyScroll()}invalidateContent(){this._invalidateMax()}addChild(e,t){return this.pp.content.addChild(e,t),this._invalidateMax(),this}removeChild(e){return e&&(this.pp.content.removeChild(e),this._invalidateMax()),this}removeChildren(){return this.pp.content.removeChildren(),this._invalidateMax(),this}destroyChildren(){return this.pp.content.destroyChildren(),this._invalidateMax(),this}destroy(){this._stopAnimation(),this.pp.dragState=!1,this.stage?.off(l.pointerUp,this._onGlobalPointerUp,this),super.destroy()}hitTest(e){return this.pp.dragState?!0:super.hitTest(e)}_bindEvents(){this.on(l.pointerDown,this._onPointerDown,this),this.on(l.pointerMove,this._onPointerMove,this),this.on(l.pointerUp,this._onPointerUp,this),this.on(l.pointerUpOutside,this._onPointerUp,this),this.on(l.wheel,this._onWheel,this),this.on(l.removedFromStage,this._onRemoved,this)}_onRemoved(){this.pp.animating&&(this.stage?.timer.clearTimer(this._tickAnimation,this),this.pp.animating=!1),this.pp.dragState=!1,this.stage?.off(l.pointerUp,this._onGlobalPointerUp,this)}_onPointerDown(e){this._stopAnimation();let t=this.pp;t.dragState=`pending`,t.startX=e.global.x,t.startY=e.global.y,t.lastX=e.global.x,t.lastY=e.global.y,t.rawScrollX=t.scrollX,t.rawScrollY=t.scrollY,t.vx=0,t.vy=0,t.smoothVx=0,t.smoothVy=0,this._invalidateMax(),this.stage?.on(l.pointerUp,this._onGlobalPointerUp,this)}_onPointerMove(e){let t=this.pp;if(!t.dragState)return;let n=e.global.x,r=e.global.y;if(t.dragState===`pending`){let i=n-t.startX,a=r-t.startY;if(i*i+a*a<t.dragThreshold*t.dragThreshold)return;t.dragState=`dragging`,t.lastX=n,t.lastY=r,e.stopPropagation();return}let i=n-t.lastX,a=r-t.lastY;t.directionX&&(t.rawScrollX-=i),t.directionY&&(t.rawScrollY-=a),t.directionX&&(t.scrollX=this._rubberBandPosition(t.rawScrollX,this._maxScrollX,t.width)),t.directionY&&(t.scrollY=this._rubberBandPosition(t.rawScrollY,this._maxScrollY,t.height)),this._applyScroll(),t.smoothVx=t.smoothVx*.8+i*.2,t.smoothVy=t.smoothVy*.8+a*.2,t.lastX=n,t.lastY=r}_onPointerUp(e){let t=this.pp;if(!t.dragState)return;let n=t.dragState===`dragging`;t.dragState=!1,this.stage?.off(l.pointerUp,this._onGlobalPointerUp,this),n&&(e.preventDefault(),t.vx=t.smoothVx,t.vy=t.smoothVy,this._startAnimation())}_onGlobalPointerUp(){let e=this.pp;if(!e.dragState)return;let t=e.dragState===`dragging`;e.dragState=!1,this.stage?.off(l.pointerUp,this._onGlobalPointerUp,this),t&&(e.vx=e.smoothVx,e.vy=e.smoothVy,this._startAnimation())}_onWheel(e){let t=this.pp,{scrollX:n,scrollY:r}=t,i=t.directionY?e.deltaX:e.deltaX||e.deltaY;t.directionX&&(t.scrollX=this._clampValue(n+i*.5,this._maxScrollX)),t.directionY&&(t.scrollY=this._clampValue(r+e.deltaY*.5,this._maxScrollY)),(t.scrollX!==n||t.scrollY!==r)&&(this._stopAnimation(),this._applyScroll(),e.stopPropagation(),e.preventDefault())}_invalidateMax(){this.pp.maxDirty=!0}_calcMax(){let e=this.pp;if(e.contentWidth>=0&&e.contentHeight>=0){e.maxDirty=!1,e.cachedMaxX=Math.max(0,e.contentWidth-e.width),e.cachedMaxY=Math.max(0,e.contentHeight-e.height);return}let t=e.content.children;if(t.length===0)return;e.maxDirty=!1;let n=e.contentWidth>=0?e.contentWidth:0,r=e.contentHeight>=0?e.contentHeight:0;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.getLocalBounds();if(e.contentWidth<0){let e=a.x+o.maxX;e>n&&(n=e)}if(e.contentHeight<0){let e=a.y+o.maxY;e>r&&(r=e)}}e.cachedMaxX=Math.max(0,n-e.width),e.cachedMaxY=Math.max(0,r-e.height)}_rubberBandPosition(e,t,n){return e<0?-this._rubberBand(-e,n):e>t?t+this._rubberBand(e-t,n):e}_rubberBand(e,t){let n=t*this.pp.elasticity;return e*n/(e+n)}_clampValue(e,t){return Math.max(0,Math.min(e,t))}_clampScroll(){let e=this.pp;e.scrollX=this._clampValue(e.scrollX,this._maxScrollX),e.scrollY=this._clampValue(e.scrollY,this._maxScrollY),this._applyScroll()}_applyScroll(){let e=this.pp;e.content.position.set(-e.scrollX,-e.scrollY),this.emit(l.scroll,e.scrollX,e.scrollY)}_startAnimation(){let e=this.pp,t=e.directionX&&(e.scrollX<0||e.scrollX>this._maxScrollX),n=e.directionY&&(e.scrollY<0||e.scrollY>this._maxScrollY),r=e.directionX&&Math.abs(e.vx)>.5||e.directionY&&Math.abs(e.vy)>.5;!t&&!n&&!r||(e.animating=!0,this.stage?.timer.onFrame(this._tickAnimation,this))}_stopAnimation(){let e=this.pp;e.animating&&(e.animating=!1,this.stage?.timer.clearTimer(this._tickAnimation,this))}_tickAnimation(){let e=this.pp,t=!0;e.directionX&&(t=this._tickAxis(`scrollX`,`vx`,this._maxScrollX)&&t),e.directionY&&(t=this._tickAxis(`scrollY`,`vy`,this._maxScrollY)&&t),this._applyScroll(),t&&this._stopAnimation()}_tickAxis(e,t,n){let r=this.pp,i=r[t],a=r[e];if(a<0){if(a+=-a*.2,i=0,a>-.5)return r[e]=0,r[t]=0,!0}else if(a>n){if(a+=(n-a)*.2,i=0,a-n<.5)return r[e]=n,r[t]=0,!0}else if(i*=r.deceleration,a-=i,Math.abs(i)<.5)return r[e]=this._clampValue(a,n),r[t]=0,!0;return r[e]=a,r[t]=i,!1}};Re=m([p(`ScrollView`),j(`design:paramtypes`,[Object])],Re);var ze=60,W=1/ze,Be=W*.25,G={x:0,y:0},Ve=new x,He=class extends e{renderObject=new Ue(this);constructor(e){super();let t=this.pp;t.texture=c.WHITE,t.time=.5,t.headWidth=10,t.endWidth=0,t.color=new s(16777215),t.endAlpha=0,t.minDistance=1,t.emitting=!0,t.capacity=0,t.fixedCapacity=!1,t.points=new Float64Array,t.first=0,t.count=0,t.now=0,t.nextSample=0,t.sampled=!1,t.lastX=0,t.lastY=0,this._$alloc(Math.ceil(t.time*ze)+1),this.on(l.addedToStage,this._$onAddedToStage,this),this.on(l.removedFromStage,this._$onRemovedFromStage,this),this.setProps(e)}get texture(){return this.pp.texture}set texture(e){e??=c.WHITE,this.pp.texture!==e&&(this.pp.texture=e,this.markDirty(N.child))}get time(){return this.pp.time}set time(e){let t=this.pp;e=Math.max(.01,e),t.time!==e&&(t.time=e,t.fixedCapacity||this._$alloc(Math.ceil(e*ze)+1),t.count&&(this.markDirty(N.size),this.markDirty(N.color)))}get width(){return this.pp.headWidth}set width(e){this.pp.headWidth!==e&&(this.pp.headWidth=e,this.markDirty(N.size))}get height(){return 0}set height(e){}get endWidth(){return this.pp.endWidth}set endWidth(e){this.pp.endWidth!==e&&(this.pp.endWidth=e,this.markDirty(N.size))}get color(){return this.pp.color.value}set color(e){let t=this.pp.color;t.value!==e&&(t.value=e,this.markDirty(N.color))}get endAlpha(){return this.pp.endAlpha}set endAlpha(e){this.pp.endAlpha!==e&&(this.pp.endAlpha=e,this.markDirty(N.color))}get minDistance(){return this.pp.minDistance}set minDistance(e){this.pp.minDistance=e}get emitting(){return this.pp.emitting}set emitting(e){this.pp.emitting=e,e&&this._$startTimer()}get maxPoints(){return this.pp.capacity}set maxPoints(e){this.pp.fixedCapacity=!0,this._$alloc(Math.max(1,e|0))}get pointCount(){return this.pp.count}clear(){let e=this.pp;return e.count&&this.markDirty(N.size),e.first=0,e.count=0,e.sampled=!1,this}destroy(){this._$stopTimer(),super.destroy()}_customRenderBounds(e){let t=this.pp,{count:n,root:r}=t;if(!n||!r)return;let i=Math.max(t.headWidth,t.endWidth)*.5,a=Ve.copyFrom(this.worldMatrix).invert().append(r.worldMatrix),{points:o,capacity:s,first:c}=t;for(let t=0;t<n;t++){let n=(c+t)%s*3,r=o[n],l=o[n+1];e.addFrame(r-i,l-i,r+i,l+i,a)}e.addFrame(-i,-i,i,i)}_$alloc(e){let t=this.pp;if(t.capacity===e)return;let{points:n,first:r,count:i,capacity:a}=t,o=i<e?i:e,s=new Float64Array(e*3);for(let e=0;e<o;e++){let t=(r+i-o+e)%a*3;s[e*3]=n[t],s[e*3+1]=n[t+1],s[e*3+2]=n[t+2]}t.capacity=e,t.points=s,t.first=0,t.count=o,this.renderObject.resize(e),this.markDirty(N.child)}_$onAddedToStage(){let e=this.pp,t=this.scene??this.stage;e.root!==t&&(e.root=t,this.clear()),(e.emitting||e.count)&&this._$startTimer()}_$onRemovedFromStage(e){this._$stopTimer(),e||this.clear()}_$startTimer(){let e=this.pp;e.timer||e.destroyed||(e.timer=this._$animClock(),e.timer&&(e.now=e.timer.currentTime,e.timer.onFrame(this._$tick,this)))}_$stopTimer(){let e=this.pp;e.timer?.clearTimer(this._$tick,this),e.timer=void 0}_$tick(){let e=this.pp,t=e.timer;if(!t||t.delta===0)return;let n=t.currentTime;e.now=n;let r=e.count,{points:i,capacity:a,time:o}=e;for(;e.count>0&&n-i[e.first*3+2]>=o;)e.first=(e.first+1)%a,e.count--;e.emitting&&this._$sample(n),e.count>0||r>0?(this.markDirty(N.size),this.markDirty(N.color),e.count!==r&&this.markDirty(N.texture)):e.emitting||this._$stopTimer()}_$sample(e){let t=this.pp,n=this.worldMatrix;G.x=n.tx,G.y=n.ty,t.root.worldMatrix.applyInverse(G,G);let r=G.x,i=G.y;if(t.count===0)t.sampled&&(r!==t.lastX||i!==t.lastY)&&(this._$push(t.lastX,t.lastY,e),t.nextSample=e+W);else if(e+Be>=t.nextSample){let n=(t.first+t.count-1)%t.capacity*3,a=r-t.points[n],o=i-t.points[n+1];if(a*a+o*o>=t.minDistance*t.minDistance){this._$push(r,i,e);let n=t.nextSample+W,a=e+W-Be;t.nextSample=n>a?n:a}}t.sampled=!0,t.lastX=r,t.lastY=i}_$push(e,t,n){let r=this.pp,{capacity:i,points:a}=r;r.count===i&&(r.first=(r.first+1)%i,r.count--);let o=(r.first+r.count)%i*3;a[o]=e,a[o+1]=t,a[o+2]=n,r.count++}};He=m([p(`Trail`),j(`design:paramtypes`,[Object])],He);var Ue=class{node;pipeline=`batch`;vertexSize=0;indexSize=0;colorSize=0;uvSize=0;vertexStart=0;indexStart=0;colorStart=0;uvStart=0;batch;textureId=0;_xy=new Float64Array;constructor(e){this.node=e}resize(e){let t=(e+1)*2;this.vertexSize=t*2,this.colorSize=t,this.uvSize=t*4,this.indexSize=e*6,this._xy=new Float64Array((e+1)*2)}packVertex(e){let t=e.f32Data,n=this.node.pp,{count:r,root:i,points:a,capacity:o,first:s}=n,c=this.vertexStart,l=c+this.vertexSize;if(r===0||!i){t.fill(0,c,l);return}let u=i.worldMatrix,d=this._xy,f=n.worldMatrix;G.x=f.tx,G.y=f.ty,u.applyInverse(G,G),d[0]=G.x,d[1]=G.y;for(let e=1;e<=r;e++){let t=(s+r-e)%o*3;d[e*2]=a[t],d[e*2+1]=a[t+1]}let p=r+1,{headWidth:m,now:h}=n,g=n.endWidth-m,_=1/n.time,{a:v,b:y,c:b,d:x,tx:S,ty:C}=u,w=0,T=1;for(let e=0;e<p-1;e++){let t=d[e*2]-d[e*2+2],n=d[e*2+1]-d[e*2+3],r=Math.sqrt(t*t+n*n);if(r>1e-6){w=-n/r,T=t/r;break}}let E=c;for(let e=0;e<p;e++){let n=e>0?e-1:0,i=e<p-1?e+1:e,c=d[n*2]-d[i*2],l=d[n*2+1]-d[i*2+1],u=Math.sqrt(c*c+l*l);u>1e-6&&(w=-l/u,T=c/u);let f=e===0?0:(h-a[(s+r-e)%o*3+2])*_;f>1&&(f=1);let D=(m+g*f)*.5,O=d[e*2],k=d[e*2+1],A=O+w*D,ee=k+T*D,te=O-w*D,j=k-T*D;t[E]=v*A+b*ee+S,t[E+1]=y*A+x*ee+C,t[E+2]=v*te+b*j+S,t[E+3]=y*te+x*j+C,E+=4}let D=t[E-2],O=t[E-1];for(;E<l;E+=2)t[E]=D,t[E+1]=O}packIndex(e){let t=e.data,n=this.vertexStart*.5,r=this.indexStart,i=this.node.pp.capacity;for(let e=0;e<i;e++){let i=n+e*2;t[r]=i,t[r+1]=i+1,t[r+2]=i+2,t[r+3]=i+1,t[r+4]=i+3,t[r+5]=i+2,r+=6}}packColor(e){let t=e.u32Data,n=this.node.pp,{color:r,tint:i,count:a,points:o,capacity:s,first:c,now:l}=n,u=r.red*i.red*255+.5|0,d=r.green*i.green*255+.5|0,f=(r.blue*i.blue*255+.5|0)<<16|d<<8|u,p=r.alpha*i.alpha*255,m=n.endAlpha-1,h=1/n.time,g=a>0?a+1:0,_=this.colorStart;for(let e=0;e<g;e++){let n=e===0?0:(l-o[(c+a-e)%s*3+2])*h;n>1&&(n=1);let r=(p*(1+m*n)+.5|0)<<24|f;t[_]=r,t[_+1]=r,_+=2}t.fill(0,_,this.colorStart+this.colorSize)}packUV(e){let{f32Data:t,u32Data:n}=e,r=this.textureId,i=this.node.pp,a=i.texture.uvs,o=i.count>0?i.count+1:0,s=o>1?1/(o-1):0,c=i.capacity+1,l=this.uvStart;for(let e=0;e<c;e++){let i=e<o?e*s:1;t[l]=a.x0+(a.x1-a.x0)*i,t[l+1]=a.y0+(a.y1-a.y0)*i,n[l+2]=r,n[l+3]=0,t[l+4]=a.x3+(a.x2-a.x3)*i,t[l+5]=a.y3+(a.y2-a.y3)*i,n[l+6]=r,n[l+7]=0,l+=8}}},We=class{uid=S(`VTB`);bitmap;texture;sampler;view;width;height;repeat=!1;nearest=!1;destroyed=!1;loaded=!1;constructor(e,t,n){this.bitmap=e,this.width=t,this.height=n,this.texture=T.createTexture(`video`,t,n),this.sampler=T.defaultSampler,this.view=this.texture.createView()}upload(){if(this.destroyed||this.loaded)return;let e=this.bitmap;e.readyState<e.HAVE_CURRENT_DATA||e.videoWidth<=0||e.videoHeight<=0||(this.loaded=!0,T.uploadTexture(e,this.texture))}dirty(){this.loaded=!1}destroy(){this.destroyed||(this.destroyed=!0,T.destroyTexture(this.texture))}},Ge=class{url;_onEnded;_onError;_destroyed=!1;_video;_buffer;_texture;_texturePromise;_stage;_playing=!1;_driving=!1;_videoFrameCallbackId;loop=!0;muted=!0;volume=1;playbackRate=1;preload=`auto`;constructor(e,t,n){this.url=e,this._onEnded=t,this._onError=n}get texture(){return this._texture}getVideo(){return this._video}ensureTexture(){return this._texture?Promise.resolve(this._texture):(this._texturePromise||=new Promise((e,t)=>{if(this._destroyed)return;let n=document.createElement(`video`);n.crossOrigin=`anonymous`,n.playsInline=!0,n.loop=this.loop,n.muted=this.muted,n.defaultMuted=this.muted,n.volume=this.volume,n.playbackRate=this.playbackRate,n.preload=this.preload,this._video=n,n.addEventListener(`loadedmetadata`,()=>{if(this._destroyed||this._video!==n)return;let t=n.videoWidth,r=n.videoHeight;t<=0||r<=0||(this._buffer||(this._buffer=new We(n,t,r),this._texture=c.fromBuffer(this._buffer,this.url)),e(this._texture))},{once:!0}),n.addEventListener(`ended`,()=>{this._destroyed||this._video!==n||this._onEnded()}),n.addEventListener(`error`,e=>{this._destroyed||this._video!==n||(this._onError(e),t(e))}),P.load(this.url,`video`).then(e=>{this._destroyed||this._video!==n||(n.src=e?.src??this.url)}).catch(e=>{this._onError(e),t(e)})}),this._texturePromise)}async play(e){this._stage=e,this._playing=!0,await this.ensureTexture(),!this._destroyed&&(this._startDriving(),this._safePlayVideo(),e.renderer.requestRender())}stop(){this._playing=!1,this._stopDriving(),this._video?.pause(),this._stage=void 0}_safePlayVideo(){let e=this._video;if(!e)return;let t=e.play();t instanceof Promise&&t.catch(t=>{this._video===e&&(this._onError(t),this._playing=!1,this._stage=void 0,this._stopDriving())})}_startDriving(){if(this._driving||!this._playing)return;let e=this._video;if(!e)return;if(typeof e.requestVideoFrameCallback!=`function`)throw Error(`requestVideoFrameCallback is required for Video node, url: "${this.url}"`);this._driving=!0;let t=()=>{if(this._destroyed||!this._driving||this._video!==e||!this._playing)return;let n=this._buffer;n&&e.readyState>=e.HAVE_CURRENT_DATA&&!(e.paused&&!e.ended)&&(n.dirty(),this._stage?.renderer.requestRender()),this._videoFrameCallbackId=e.requestVideoFrameCallback(t)};this._videoFrameCallbackId=e.requestVideoFrameCallback(t)}_stopDriving(){if(!this._driving)return;this._driving=!1;let e=this._video;if(e){let t=this._videoFrameCallbackId;t!==void 0&&e.cancelVideoFrameCallback(t)}this._videoFrameCallbackId=void 0}destroy(){if(this._destroyed)return;this._destroyed=!0,this._stopDriving();let e=this._video;this._video=void 0,this._stage=void 0,this._playing=!1,e&&(re.cancelUnmute(e),e.pause(),e.removeAttribute(`src`),e.load()),this._texturePromise=void 0,this._texture?.destroy(),this._texture=void 0,this._buffer=void 0}},Ke=class extends e{renderObject=new a(this);autoPlay=!0;constructor(e){super(),this.pp.url=``,this.pp.texture=c.BLANK,this.pp.isPlaying=!1,this.pp.playingSubscribed=!1,this.pp.loadVersion=0,this.pp.loop=!0,this.pp.muted=!1,this.pp.volume=1,this.pp.playbackRate=1,this.pp.preload=`auto`,this.on(l.removedFromStage,this._$onRemoved,this),this.setProps(e),this.on(l.addedToStage,this._$onAddedToStage,this),this.stage&&this._$onAddedToStage()}get onLoaded(){return this.pp.onLoaded}set onLoaded(e){this.pp.onLoaded&&this.off(l.loaded,this.pp.onLoaded,this),e&&this.on(l.loaded,e,this),this.pp.onLoaded=e}get onPlay(){return this.pp.onPlay}set onPlay(e){this.pp.onPlay&&this.off(l.play,this.pp.onPlay,this),e&&this.on(l.play,e,this),this.pp.onPlay=e}get onStop(){return this.pp.onStop}set onStop(e){this.pp.onStop&&this.off(l.stop,this.pp.onStop,this),e&&this.on(l.stop,e,this),this.pp.onStop=e}get onComplete(){return this.pp.onComplete}set onComplete(e){this.pp.onComplete&&this.off(l.complete,this.pp.onComplete,this),e&&this.on(l.complete,e,this),this.pp.onComplete=e}get onError(){return this.pp.onError}set onError(e){this.pp.onError&&this.off(l.error,this.pp.onError,this),e&&this.on(l.error,e,this),this.pp.onError=e}get url(){return this.pp.url}set url(e){this.pp.url!==e&&this.load(e)}get loop(){return this.pp.loop}set loop(e){if(this.pp.loop!==e){this.pp.loop=e;let t=this.pp.player?.getVideo();t&&(t.loop=e)}}get muted(){return this.pp.muted}set muted(e){if(this.pp.muted!==e){this.pp.muted=e;let t=this.pp.player?.getVideo();if(!t)return;e?(re.cancelUnmute(t),t.muted=!0,t.defaultMuted=!0):re.deferUnmute(t)}}get volume(){return this.pp.volume}set volume(e){if(this.pp.volume!==e){this.pp.volume=e;let t=this.pp.player?.getVideo();t&&(t.volume=e)}}get playbackRate(){return this.pp.playbackRate}set playbackRate(e){if(this.pp.playbackRate!==e){this.pp.playbackRate=e;let t=this.pp.player?.getVideo();t&&(t.playbackRate=e)}}get preload(){return this.pp.preload}set preload(e){if(this.pp.preload!==e){this.pp.preload=e;let t=this.pp.player?.getVideo();t&&(t.preload=e)}}get currentTime(){return this.pp.player?.getVideo()?.currentTime??0}set currentTime(e){let t=this.pp.player?.getVideo();t&&(t.currentTime=e)}get duration(){let e=this.pp.player?.getVideo()?.duration;return Number.isFinite(e)?e:0}get isPlaying(){return this.pp.isPlaying}get texture(){let e=this.pp.texture;return!e||e.destroyed?c.BLANK:e}async load(e){this.pp.url=e;let t=++this.pp.loadVersion,n=this.pp.isPlaying;this._$detachPlayer(),this.pp.isPlaying=n,this.pp.playingSubscribed=!1;let r=new Ge(e,()=>{this.stop(),this.emit(l.complete)},e=>this.emit(l.error,e));r.loop=this.pp.loop,r.muted=!0,r.volume=this.pp.volume,r.playbackRate=this.pp.playbackRate,r.preload=this.pp.preload,this.pp.player=r;try{let e=await r.ensureTexture();if(this.destroyed||this.pp.loadVersion!==t||this.pp.player!==r)return;if(!this.pp.muted){let e=r.getVideo();e&&re.deferUnmute(e)}this._$applyTexture(e),this.emit(l.loaded),this._$onStage()&&(this.pp.isPlaying||this.autoPlay)&&(this.pp.isPlaying=!0,this._$subscribePlaying()&&this.emit(l.play));let n=r.getVideo();n&&!this.pp.isPlaying&&n.readyState<n.HAVE_CURRENT_DATA&&n.addEventListener(`canplay`,()=>{this.destroyed||this.pp.player!==r||(this.markDirty(N.child),this.stage?.renderer.requestRender())},{once:!0})}catch(e){this.pp.loadVersion===t&&this.emit(l.error,e)}}play(){if(!this.stage)throw Error(`Video.play: please add to stage first before play, label: "${this.label}"`);let e=this.pp.isPlaying;this.pp.isPlaying=!0;let t=this.pp.player;if(!t)return this;t.ensureTexture().then(e=>{this.destroyed||this.pp.player!==t||this.pp.isPlaying&&this._$applyTexture(e)});let n=this._$subscribePlaying();return(!e||n)&&this.emit(l.play),this}stop(){return this.pp.isPlaying?(this.pp.isPlaying=!1,this._$unsubscribePlaying(),this.emit(l.stop),this):this}pause(){return this.stop()}_customLocalBounds(e){let t=this.texture,n=this.pp.width>=0?this.pp.width:t.width,r=this.pp.height>=0?this.pp.height:t.height;e.addFrame(0,0,n,r)}destroy(){this.stop(),this._$detachPlayer(),super.destroy()}_$onAddedToStage(){this.autoPlay&&(this.pp.isPlaying=!0),this.pp.isPlaying&&this._$subscribePlaying()&&this.emit(l.play)}_$onRemoved(e){e||this._$unsubscribePlaying()}_$detachPlayer(){let e=this.pp.player;e&&(this._$unsubscribePlaying(),e.destroy(),this.pp.player=void 0),this.pp.texture?.destroyed&&(this.pp.texture=c.BLANK,this.renderObject.textureId=0,this.markDirty(N.child))}_$subscribePlaying(){if(this.pp.playingSubscribed)return!1;let e=this.stage,t=this.pp.player;return!e||!t?!1:(this.pp.playingSubscribed=!0,t.play(e),!0)}_$unsubscribePlaying(){if(!this.pp.playingSubscribed)return!1;this.pp.playingSubscribed=!1;let e=this.pp.player;return e&&e.stop(),!0}_$applyTexture(e){let t=this.pp;t.texture=e,t.width===-1&&(this.width=e.width),t.height===-1&&(this.height=e.height),this.markDirty(N.size),this.emit(l.resize);let n=this.renderObject.batch,r=n?.getTextureId(e)??n?.add(e);r!==void 0&&r>-1?(this.renderObject.textureId=r,this.markDirty(N.texture)):this.markDirty(N.child)}};Ke=m([p(`Video`),j(`design:paramtypes`,[Object])],Ke);var K=32,qe={r:1,g:1,b:1,a:1},Je={x:0,y:0},q=new s,Ye=class{posX;posY;velX;velY;colorR;colorG;colorB;colorA;size;rotation;life;maxLife;_startSize;_endSize;_startRot;_endRot;_startR;_startG;_startB;_startA;_endR;_endG;_endB;_endA;_radAccel;_tanAccel;_radAngle;_radRadius;_radDegreesPerSecond;_startRadius;_endRadius;emitWorldX;emitWorldY;frame;_lvX;_lvY;_colorLut;_alphaLut;_colorKeys;_alphaKeys;_noiseTime=0;aliveCount=0;maxParticles;_emitCounter=0;constructor(e){this.maxParticles=e;let t=e;this.posX=new Float32Array(t),this.posY=new Float32Array(t),this.velX=new Float32Array(t),this.velY=new Float32Array(t),this.colorR=new Float32Array(t),this.colorG=new Float32Array(t),this.colorB=new Float32Array(t),this.colorA=new Float32Array(t),this.size=new Float32Array(t),this.rotation=new Float32Array(t),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this._startSize=new Float32Array(t),this._endSize=new Float32Array(t),this._startRot=new Float32Array(t),this._endRot=new Float32Array(t),this._startR=new Float32Array(t),this._startG=new Float32Array(t),this._startB=new Float32Array(t),this._startA=new Float32Array(t),this._endR=new Float32Array(t),this._endG=new Float32Array(t),this._endB=new Float32Array(t),this._endA=new Float32Array(t),this._radAccel=new Float32Array(t),this._tanAccel=new Float32Array(t),this._radAngle=new Float32Array(t),this._radRadius=new Float32Array(t),this._radDegreesPerSecond=new Float32Array(t),this._startRadius=new Float32Array(t),this._endRadius=new Float32Array(t),this.emitWorldX=new Float32Array(t),this.emitWorldY=new Float32Array(t)}update(e,t,r,i,a,o=1){this._syncLuts(t),o>1&&!this.frame&&(this.frame=new Uint16Array(this.maxParticles));let s=!1;if(r){let n=t.emissionRate??10;this._emitCounter+=e;let r=1/n;for(;this._emitCounter>=r&&this.aliveCount<this.maxParticles;)this._emit(t,i,a,o),this._emitCounter-=r,o>1&&(s=!0)}let c=t.emitterMode??I.GRAVITY,l=t.gravityX??0,d=t.gravityY??0,f=t.lifetimeVelocityX?this._lvX:void 0,p=t.lifetimeVelocityY?this._lvY:void 0,m=t.noise&&t.noise.strength!==0?t.noise:void 0,h=m?.frequency??.02,g=m?.strength??0;m&&(this._noiseTime+=e*(m.scrollSpeed??0));let _=this._noiseTime,v=(t.positionType??n.RELATIVE)===n.FREE,y=t.colorGradient?.length?this._colorLut:void 0,b=t.alphaGradient?.length?this._alphaLut:void 0,x=o>1&&t.frameMode===`lifetime`?this.frame:void 0;for(let t=0;t<this.maxParticles;t++){if(this.life[t]<=0)continue;if(this.life[t]-=e,this.life[t]<=0){this.life[t]=0,this.aliveCount--;continue}let n=1-this.life[t]/this.maxLife[t];if(c===I.GRAVITY){let n=this._radAccel[t],r=this._tanAccel[t];if(n!==0||r!==0){let i=this.posX[t],a=this.posY[t],o=Math.sqrt(i*i+a*a)||1,s=i/o,c=a/o;this.velX[t]+=s*n*e,this.velY[t]+=c*n*e,this.velX[t]+=-c*r*e,this.velY[t]+=s*r*e}this.velX[t]+=l*e,this.velY[t]+=d*e;let i=this.velX[t],a=this.velY[t];if(f&&(i+=f[t]),p&&(a+=p[t]),m){let e=v?this.posX[t]+this.emitWorldX[t]:this.posX[t],n=v?this.posY[t]+this.emitWorldY[t]:this.posY[t];Qe(e*h,n*h+_),i+=Je.x*g,a+=Je.y*g}this.posX[t]+=i*e,this.posY[t]+=a*e}else{this._radAngle[t]+=this._radDegreesPerSecond[t]*e*u;let r=this._startRadius[t]+(this._endRadius[t]-this._startRadius[t])*n;this._radRadius[t]=r,this.posX[t]=Math.cos(this._radAngle[t])*r,this.posY[t]=Math.sin(this._radAngle[t])*r}if(this.size[t]=this._startSize[t]+(this._endSize[t]-this._startSize[t])*n,this.rotation[t]=this._startRot[t]+(this._endRot[t]-this._startRot[t])*n,y){let e=(n*(K-1)+.5|0)*3;this.colorR[t]=this._startR[t]*y[e],this.colorG[t]=this._startG[t]*y[e+1],this.colorB[t]=this._startB[t]*y[e+2]}else this.colorR[t]=this._startR[t]+(this._endR[t]-this._startR[t])*n,this.colorG[t]=this._startG[t]+(this._endG[t]-this._startG[t])*n,this.colorB[t]=this._startB[t]+(this._endB[t]-this._startB[t])*n;if(this.colorA[t]=b?this._startA[t]*b[n*(K-1)+.5|0]:this._startA[t]+(this._endA[t]-this._startA[t])*n,x){let e=Math.min(o-1,n*o|0);x[t]!==e&&(x[t]=e,s=!0)}}return s}_syncLuts(e){let t=e.colorGradient;t?.length&&t!==this._colorKeys&&(this._colorKeys=t,this._colorLut=$e(t,this._colorLut??new Float32Array(K*3)));let n=e.alphaGradient;n?.length&&n!==this._alphaKeys&&(this._alphaKeys=n,this._alphaLut=et(n,this._alphaLut??new Float32Array(K)))}clampFrames(e){let t=this.frame;if(!t)return;let n=e>0?e-1:0;for(let e=0;e<t.length;e++)t[e]>n&&(t[e]=n)}spawn(e,t,n,r,i){this._syncLuts(t),i>1&&!this.frame&&(this.frame=new Uint16Array(this.maxParticles));let a=0;for(;a<e&&this.aliveCount<this.maxParticles;a++)this._emit(t,n,r,i);return a}reset(){this.life.fill(0),this.aliveCount=0,this._emitCounter=0}_emit(e,t,n,r){let i=-1;for(let e=0;e<this.maxParticles;e++)if(this.life[e]<=0){i=e;break}if(i===-1)return;let a=Math.max(.01,(e.life??1)+J(e.lifeVariance));this.life[i]=a,this.maxLife[i]=a;let o=0,s=0,c=e.shape;if(c)if(c.type===`circle`){let e=c.radius??0,t=Math.random()*Math.PI*2,n=c.edge?e:e*Math.sqrt(Math.random());o=Math.cos(t)*n,s=Math.sin(t)*n}else{let e=c.width??0,t=c.height??0;if(c.edge&&e+t>0){let n=Math.random()*(e+t),r=Math.random()<.5?-.5:.5;n<e?(o=n-e*.5,s=r*t):(o=r*e,s=n-e-t*.5)}else o=(Math.random()-.5)*e,s=(Math.random()-.5)*t}this.posX[i]=o+J(e.sourceX),this.posY[i]=s+J(e.sourceY),this.emitWorldX[i]=t,this.emitWorldY[i]=n;let l=Math.max(0,(e.startSize??16)+J(e.startSizeVariance)),d=Math.max(0,(e.endSize??0)+J(e.endSizeVariance));this._startSize[i]=l,this._endSize[i]=d,this.size[i]=l;let f=(e.startRotation??0)+J(e.startRotationVariance),p=(e.endRotation??0)+J(e.endRotationVariance);this._startRot[i]=f*u,this._endRot[i]=p*u,this.rotation[i]=f*u;let m=e.startColor??qe,h=e.startColorVariance,g=e.endColor??{r:1,g:1,b:1,a:0},_=e.endColorVariance;if(Array.isArray(m)){let[e,t]=m,n=Math.random();this._startR[i]=Y(e.r+(t.r-e.r)*n),this._startG[i]=Y(e.g+(t.g-e.g)*n),this._startB[i]=Y(e.b+(t.b-e.b)*n),this._startA[i]=Y(e.a+(t.a-e.a)*n)}else this._startR[i]=Y(m.r+J(h?.r)),this._startG[i]=Y(m.g+J(h?.g)),this._startB[i]=Y(m.b+J(h?.b)),this._startA[i]=Y(m.a+J(h?.a));this._endR[i]=Y(g.r+J(_?.r)),this._endG[i]=Y(g.g+J(_?.g)),this._endB[i]=Y(g.b+J(_?.b)),this._endA[i]=Y(g.a+J(_?.a));let v=e.colorGradient?.length?this._colorLut:void 0;if(this.colorR[i]=v?this._startR[i]*v[0]:this._startR[i],this.colorG[i]=v?this._startG[i]*v[1]:this._startG[i],this.colorB[i]=v?this._startB[i]*v[2]:this._startB[i],this.colorA[i]=e.alphaGradient?.length&&this._alphaLut?this._startA[i]*this._alphaLut[0]:this._startA[i],e.lifetimeVelocityX&&(this._lvX??=new Float32Array(this.maxParticles),this._lvX[i]=Xe(e.lifetimeVelocityX)),e.lifetimeVelocityY&&(this._lvY??=new Float32Array(this.maxParticles),this._lvY[i]=Xe(e.lifetimeVelocityY)),this.frame&&(this.frame[i]=r>1&&e.frameMode!==`lifetime`?Math.random()*r|0:0),(e.emitterMode??I.GRAVITY)===I.GRAVITY){let t=(c?.radial&&(o!==0||s!==0)?Math.atan2(s,o):(e.angle??0)*u)+J(e.angleVariance)*u,n=(e.speed??0)+J(e.speedVariance);this.velX[i]=Math.cos(t)*n,this.velY[i]=Math.sin(t)*n,this._radAccel[i]=(e.radialAccel??0)+J(e.radialAccelVariance),this._tanAccel[i]=(e.tangentialAccel??0)+J(e.tangentialAccelVariance)}else{let t=(e.startRadius??0)+J(e.startRadiusVariance),n=(e.endRadius??0)+J(e.endRadiusVariance),r=((e.angle??0)+J(e.angleVariance))*u,a=(e.rotatePerSecond??0)+J(e.rotatePerSecondVariance);this._radAngle[i]=r,this._startRadius[i]=t,this._endRadius[i]=n,this._radRadius[i]=t,this._radDegreesPerSecond[i]=a,this.velX[i]=0,this.velY[i]=0,this.posX[i]=Math.cos(r)*t,this.posY[i]=Math.sin(r)*t}this.aliveCount++}};function J(e){return e?(Math.random()*2-1)*e:0}function Xe(e){return typeof e==`number`?e:e[0]+Math.random()*(e[1]-e[0])}function Y(e){return e<0?0:e>1?1:e}function Ze(e,t){let n=Math.imul(e,374761393)+Math.imul(t,668265263)|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function X(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=Ze(n,r),l=Ze(n+1,r),u=Ze(n,r+1),d=Ze(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}function Qe(e,t){let n=.1,r=X(e+n,t)-X(e-n,t);Je.x=(X(e,t+n)-X(e,t-n))*2.5,Je.y=-r*2.5}function $e(e,t){let n=e.length;for(let r=0;r<K;r++){let i=r/(K-1),a=0;for(;a<n-1&&e[a+1].time<i;)a++;let o=e[a],s=e[Math.min(a+1,n-1)],c=s.time-o.time,l=c>0?Y((i-o.time)/c):0;q.value=o.color;let u=q.red,d=q.green,f=q.blue;q.value=s.color,t[r*3]=u+(q.red-u)*l,t[r*3+1]=d+(q.green-d)*l,t[r*3+2]=f+(q.blue-f)*l}return t}function et(e,t){let n=e.length;for(let r=0;r<K;r++){let i=r/(K-1),a=0;for(;a<n-1&&e[a+1].time<i;)a++;let o=e[a],s=e[Math.min(a+1,n-1)],c=s.time-o.time,l=c>0?Y((i-o.time)/c):0;t[r]=o.alpha+(s.alpha-o.alpha)*l}return t}var tt=class{pipeline=`batch`;vertexSize;indexSize;colorSize;uvSize;vertexStart=0;indexStart=0;colorStart=0;uvStart=0;batch;textureId=0;node;_emitter;_maxParticles;positionType;stretch=0;frames;constructor(e,t,n,r){this.node=e,this._emitter=t,this._maxParticles=n,this.positionType=r,this.vertexSize=n*8,this.indexSize=n*6,this.colorSize=n*4,this.uvSize=n*16}packVertex(e){let t=this.node.pp.worldMatrix;if(this.positionType===n.RELATIVE&&(t.a!==1||t.b!==0||t.c!==0||t.d!==1)){this._packTransformed(e.f32Data);return}if(this.stretch>0){this._packStretched(e.f32Data);return}let{f32Data:r}=e,i=this._emitter,a=this.positionType,{tx:o,ty:s}=this.node.pp.worldMatrix,c=this.vertexStart;for(let e=0;e<this._maxParticles;e++){if(i.life[e]<=0)r[c]=0,r[c+1]=0,r[c+2]=0,r[c+3]=0,r[c+4]=0,r[c+5]=0,r[c+6]=0,r[c+7]=0;else{let t,l;a===n.FREE?(t=i.posX[e]+i.emitWorldX[e],l=i.posY[e]+i.emitWorldY[e]):(t=i.posX[e]+o,l=i.posY[e]+s);let u=i.size[e]*.5,d=i.rotation[e];if(d===0){let e=t-u,n=l-u,i=t+u,a=l+u;r[c]=e,r[c+1]=n,r[c+2]=i,r[c+3]=n,r[c+4]=i,r[c+5]=a,r[c+6]=e,r[c+7]=a}else{let e=Math.cos(d),n=Math.sin(d),i=-u*e+u*n,a=-u*n-u*e,o=u*e+u*n,s=u*n-u*e;r[c]=t+i,r[c+1]=l+a,r[c+2]=t+o,r[c+3]=l+s,r[c+4]=t-i,r[c+5]=l-a,r[c+6]=t-o,r[c+7]=l-s}}c+=8}}_packTransformed(e){let{a:t,b:n,c:r,d:i,tx:a,ty:o}=this.node.pp.worldMatrix,{life:s,posX:c,posY:l,size:u,rotation:d,velX:f,velY:p}=this._emitter,m=this.stretch,h=this.vertexStart;for(let g=0;g<this._maxParticles;g++){if(s[g]<=0){e[h]=0,e[h+1]=0,e[h+2]=0,e[h+3]=0,e[h+4]=0,e[h+5]=0,e[h+6]=0,e[h+7]=0,h+=8;continue}let _=u[g]*.5,v=_,y=1,b=0;if(m>0){let e=f[g],t=p[g],n=Math.sqrt(e*e+t*t);n>1e-4&&(y=e/n,b=t/n,v=Math.max(_,n*m*.5))}else d[g]!==0&&(y=Math.cos(d[g]),b=Math.sin(d[g]));let x=t*c[g]+r*l[g]+a,S=n*c[g]+i*l[g]+o,C=(t*y+r*b)*v,w=(n*y+i*b)*v,T=(r*y-t*b)*_,E=(i*y-n*b)*_;e[h]=x-C-T,e[h+1]=S-w-E,e[h+2]=x+C-T,e[h+3]=S+w-E,e[h+4]=x+C+T,e[h+5]=S+w+E,e[h+6]=x-C+T,e[h+7]=S-w+E,h+=8}}_packStretched(e){let t=this._emitter,r=this.positionType===n.FREE,{tx:i,ty:a}=this.node.pp.worldMatrix,o=this.stretch,{life:s,posX:c,posY:l,velX:u,velY:d,size:f,emitWorldX:p,emitWorldY:m}=t,h=this.vertexStart;for(let t=0;t<this._maxParticles;t++){if(s[t]<=0){e[h]=0,e[h+1]=0,e[h+2]=0,e[h+3]=0,e[h+4]=0,e[h+5]=0,e[h+6]=0,e[h+7]=0,h+=8;continue}let n=r?c[t]+p[t]:c[t]+i,g=r?l[t]+m[t]:l[t]+a,_=u[t],v=d[t],y=f[t],b=Math.sqrt(_*_+v*v),x=1,S=0,C=y;b>1e-4&&(x=_/b,S=v/b,b*o>y&&(C=b*o));let w=x*C*.5,T=S*C*.5,E=-S*y*.5,D=x*y*.5;e[h]=n-w-E,e[h+1]=g-T-D,e[h+2]=n+w-E,e[h+3]=g+T-D,e[h+4]=n+w+E,e[h+5]=g+T+D,e[h+6]=n-w+E,e[h+7]=g-T+D,h+=8}}packIndex(e){let t=this.vertexStart*.5,{data:n}=e,r=this.indexStart;for(let e=0;e<this._maxParticles;e++){let i=t+e*4;n[r]=i,n[r+1]=i+1,n[r+2]=i+2,n[r+3]=i,n[r+4]=i+2,n[r+5]=i+3,r+=6}}packColor(e){let{u32Data:t}=e,n=this._emitter,r=this.node.pp.tint.alpha,i=this.colorStart;for(let e=0;e<this._maxParticles;e++){let a=0;if(n.life[e]>0){let t=n.colorA[e]*r*255|0,i=n.colorB[e]*255|0,o=n.colorG[e]*255|0,s=n.colorR[e]*255|0;a=(t<<24|i<<16|o<<8|s)>>>0}t[i]=a,t[i+1]=a,t[i+2]=a,t[i+3]=a,i+=4}}packUV(e){let{f32Data:t,u32Data:n}=e,r=this.textureId,i=this.frames,a=i&&i.length>1?this._emitter.frame:void 0,o=this.node.texture.uvs,s=this.uvStart;for(let e=0;e<this._maxParticles;e++)a&&(o=i[a[e]].uvs),t[s]=o.x0,t[s+1]=o.y0,n[s+2]=r,n[s+3]=0,t[s+4]=o.x1,t[s+5]=o.y1,n[s+6]=r,n[s+7]=0,t[s+8]=o.x2,t[s+9]=o.y2,n[s+10]=r,n[s+11]=0,t[s+12]=o.x3,t[s+13]=o.y3,n[s+14]=r,n[s+15]=0,s+=16}},nt=class{particleBatch;maxParticles;_seed=0;_emitCounter=0;_hasAlive=!1;_stopElapsed=0;constructor(e,t){this.maxParticles=t,this.particleBatch=new E(e,t)}update(e,t,n,r,i,a=0){let o=a;if(n){let n=t.emissionRate??10;this._emitCounter+=e;let r=1/n;for(;this._emitCounter>=r;)o++,this._emitCounter-=r}if(o=Math.min(o,this.maxParticles),n||o>0)this._hasAlive=!0,this._stopElapsed=0;else if(this._hasAlive){this._stopElapsed+=e;let n=(t.life??1)+(t.lifeVariance??0);this._stopElapsed>n&&(this._hasAlive=!1)}return this._seed+=1+e*1e3,this.particleBatch.updateUniforms(e,o,this._seed,r,i,t),this._hasAlive||o>0}reset(){this._emitCounter=0,this._seed=0,this._hasAlive=!1,this._stopElapsed=0,this.particleBatch.clearParticles()}destroy(){this.particleBatch.destroy()}},rt=1/30,it=2,at=-1,ot=0,st=!1,ct;function lt(){if(!ct){let e=document.createElement(`canvas`);e.width=8,e.height=8;let t=e.getContext(`2d`),n=t.createRadialGradient(8/2,8/2,0,8/2,8/2,8/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,8,8),ct=c.fromCanvas(e)}return ct}var ut=class extends e{config;autoPlay=!0;autoDestroy=!1;useGPU;_cpuEmitter;renderObject;_gpuEmitter;particleBatch;constructor(e){super();let t=this.pp;t.url=``,t.isPlaying=!1,t.isPaused=!1,t.elapsed=0,t.prewarm=0;let r=e?.config??{};this.config=r;let i=r.maxParticles??150,a=e?.mode??v.AUTO;y(r,e?.frames?.length??0)?(a===v.GPU&&console.warn(`[Liko] ParticleSystem: extended features are CPU-only, GPU mode ignored`),this.useGPU=!1):a===v.GPU?this.useGPU=F:a===v.CPU?this.useGPU=!1:this.useGPU=F&&i>256,this.useGPU?(this._gpuEmitter=new nt(this,i),this.particleBatch=this._gpuEmitter.particleBatch):(this._cpuEmitter=new Ye(i),this.renderObject=new tt(this,this._cpuEmitter,i,r.positionType??n.RELATIVE)),this.on(l.addedToStage,this._$onAddedToStage,this),this.on(l.removedFromStage,this._$onRemovedFromStage,this),this.setProps(e),t.texture||=lt(),this.autoPlay&&this._$onStage()&&!t.isPlaying&&this.play()}get texture(){return this.pp.texture}set texture(e){this.pp.texture!==e&&(this.pp.texture=e,this.markDirty(this.useGPU?N.texture:N.child))}get frames(){return this.pp.frames}set frames(e){let t=this.pp,n=e?.length?e:void 0;if(t.frames=n,n&&(this.texture=n[0]),this.useGPU){n&&n.length>1&&!st&&(st=!0,console.warn(`[Liko] ParticleSystem.frames: multi-frame is CPU-only, GPU path shows the first frame only`));return}if(this.renderObject.frames=n,this._cpuEmitter.clampFrames(n?.length??1),n){let e=n[0].buffer;n.some(t=>t.buffer!==e)&&console.warn(`[Liko] ParticleSystem.frames must share one atlas`)}this.markDirty(N.texture)}get url(){return this.pp.url}set url(e){e&&this.pp.url!==e&&this._$loadTexture(e)}get isPlaying(){return this.pp.isPlaying}get isPaused(){return this.pp.isPaused}get particleCount(){return this._cpuEmitter?.aliveCount??0}play(){let e=this.pp;if(!e.isPlaying){e.isPlaying=!0,e.isPaused=!1,e.elapsed=0;let t=this.config;t.prewarm&&!this.useGPU&&(t.duration??-1)<0&&(e.prewarm=(t.life??1)+(t.lifeVariance??0)),this._$startTimer()}return this}pause(){return this.pp.isPlaying&&!this.pp.isPaused&&(this.pp.isPaused=!0,this._$stopTimer()),this}resume(){return this.pp.isPlaying&&this.pp.isPaused&&(this.pp.isPaused=!1,this._$startTimer()),this}stop(){let e=this.pp;return e.isPlaying&&(e.isPlaying=!1,e.isPaused=!1,!this.useGPU&&this._cpuEmitter.aliveCount===0&&this._$stopTimer()),this}reset(){return this.pp.isPlaying=!1,this.pp.isPaused=!1,this.pp.elapsed=0,this.pp.prewarm=0,this.useGPU?(this._gpuEmitter.reset(),this.markDirty(N.size)):(this._cpuEmitter.reset(),this.markDirty(N.size),this.markDirty(N.color)),this._$stopTimer(),this}burst(e){let t=this.pp;if(e<=0||t.destroyed||!this._$onStage())return this;let n=this._$syncWorldMatrix();if(this.useGPU)this._gpuEmitter.update(0,this.config,!1,n.tx,n.ty,e);else{let r=t.frames?.length??1;if(this._cpuEmitter.spawn(e,this.config,n.tx,n.ty,r)===0)return this;this.markDirty(N.color),r>1&&this.markDirty(N.texture)}return this.markDirty(N.size),t.isPaused||this._$startTimer(),this}destroy(){this._$stopTimer(),this.useGPU&&this._gpuEmitter.destroy(),super.destroy()}_customLocalBounds(e){let t=this.config,n=t.shape,r=n?n.type===`circle`?n.radius??0:(n.width??0)*.5:0,i=n?n.type===`circle`?n.radius??0:(n.height??0)*.5:0,a=(t.startSize??16)*2;e.addFrame(-a-r,-a-i,a+r,a+i)}_$onAddedToStage(){let e=this.pp;e.timer?(this._$stopTimer(),this._$startTimer()):e.isPlaying&&!e.isPaused?this._$startTimer():this.autoPlay&&!e.isPlaying&&this.play()}_$onRemovedFromStage(e){e||this._$stopTimer()}_$startTimer(){let e=this.pp;e.timer||(e.timer=this._$animClock(),e.timer?.onFrame(this._$tick,this))}_$stopTimer(){let e=this.pp;e.timer?.clearTimer(this._$tick,this),e.timer=void 0}_$tick(){let e=this.pp.timer;if(!e)return;let t=e.delta,n=this.pp,r=this.config,i=n.isPlaying,a=0;if(i){let e=n.elapsed,o=e+t,s=r.duration??-1;s>=0&&o>=s&&(o=s,i=!1,n.isPlaying=!1),n.elapsed=o,r.bursts?.length&&(a=ce(r.bursts,e,o))}let o=this._$syncWorldMatrix(),s=o.tx,c=o.ty;this.useGPU?this._$tickGpu(t,r,i,s,c,a):this._$tickCpu(t,r,i,s,c,a)}_$syncWorldMatrix(){let e=this.pp;return e.dirty&N.transform&&e.transform.updateMatrix(e.localMatrix,e.worldMatrix,e.position,e.parent?.pp.worldMatrix??x.IDENTITY),e.worldMatrix}_$tickCpu(e,t,r,i,a,s){let c=this.pp,l=this.renderObject;l.positionType=t.positionType??n.RELATIVE,l.stretch=(t.emitterMode??I.GRAVITY)===I.GRAVITY?t.stretch??0:0;let u=this._cpuEmitter,d=u.aliveCount,f=c.frames?.length??1,p=!1;if(s>0&&u.spawn(s,t,i,a,f)>0&&f>1&&(p=!0),c.prewarm>0){if(e>0){let e=o.system.currentFrame;for(e!==at&&(at=e,ot=performance.now()+it);c.prewarm>0&&performance.now()<ot;){let e=Math.min(rt,c.prewarm);c.prewarm-=e,u.update(e,t,c.isPlaying,i,a,f)&&(p=!0)}}}else u.update(e,t,r,i,a,f)&&(p=!0);p&&this.markDirty(N.texture);let m=u.aliveCount;(m>0||d>0)&&this.markDirty(N.size),m>0?this.markDirty(N.color):c.isPlaying||(this._$stopTimer(),this.autoDestroy&&this.destroy())}_$tickGpu(e,t,n,r,i,a){let o=this.pp;this._gpuEmitter.update(e,t,n,r,i,a)?this.markDirty(N.size):o.isPlaying||(this._$stopTimer(),this.autoDestroy&&this.destroy())}async _$loadTexture(e){let t=this.pp;t.url=e;let n=await P.load(e,`image`);this.destroyed||!n||t.url!==e||(this.texture=n,this.emit(l.loaded))}};ut=m([p(`ParticleSystem`),j(`design:paramtypes`,[Object])],ut);function dt(e,t){if(!e.body)return e.joints.push(t),null;let{physics:n,body:r}=e,{pl:i,world:a,toPhPos:o,toPh:s}=n,c=typeof t.bodyB==`string`?ft(e.scene,t.bodyB):t.bodyB;if(!c)throw Error(`bodyB is not set${t.label?`,label:${t.label}`:``}${t.bodyB?`,bodyB:${t.bodyB}`:``}`);switch(t.jointType){case`revolute`:{let{localAnchorA:n,localAnchorB:o}=Z(e,c,t);return a.createJoint(new i.RevoluteJoint({bodyA:r,bodyB:c.body,localAnchorA:n,localAnchorB:o,collideConnected:t.collideConnected,enableLimit:t.enableLimit,lowerAngle:t.lowerAngle,upperAngle:t.upperAngle,enableMotor:t.enableMotor,maxMotorTorque:t.maxMotorTorque==null?void 0:s(s(t.maxMotorTorque)),motorSpeed:t.motorSpeed==null?void 0:-t.motorSpeed,referenceAngle:t.referenceAngle}))}case`distance`:{let{localAnchorA:n,localAnchorB:o}=Z(e,c,t);return a.createJoint(new i.DistanceJoint({bodyA:r,bodyB:c.body,localAnchorA:n,localAnchorB:o,collideConnected:t.collideConnected,length:s(t.length??10),frequencyHz:t.frequencyHz,dampingRatio:t.dampingRatio}))}case`fixed`:{let{localAnchorA:n,localAnchorB:o}=Z(e,c,t);return a.createJoint(new i.WeldJoint({bodyA:r,bodyB:c.body,localAnchorA:n,localAnchorB:o,collideConnected:t.collideConnected,frequencyHz:t.frequencyHz,dampingRatio:t.dampingRatio,referenceAngle:t.referenceAngle}))}case`prismatic`:{let{localAnchorA:n,localAnchorB:o}=Z(e,c,t);return a.createJoint(new i.PrismaticJoint({bodyA:r,bodyB:c.body,localAnchorA:n,localAnchorB:o,localAxisA:{x:-t.localAxisA.x,y:-t.localAxisA.y},collideConnected:t.collideConnected,enableLimit:t.enableLimit,lowerTranslation:t.lowerTranslation==null?void 0:s(t.lowerTranslation),upperTranslation:t.upperTranslation==null?void 0:s(t.upperTranslation),enableMotor:t.enableMotor,maxMotorForce:t.maxMotorForce==null?void 0:s(t.maxMotorForce),motorSpeed:t.motorSpeed==null?void 0:s(t.motorSpeed),referenceAngle:t.referenceAngle}))}case`wheel`:{let{localAnchorA:n,localAnchorB:o}=Z(e,c,t);return a.createJoint(new i.WheelJoint({bodyA:r,bodyB:c.body,localAnchorA:n,localAnchorB:o,localAxisA:{x:-t.localAxisA.x,y:-t.localAxisA.y},collideConnected:t.collideConnected,enableMotor:t.enableMotor,maxMotorTorque:t.maxMotorTorque==null?void 0:s(s(t.maxMotorTorque)),motorSpeed:t.motorSpeed==null?void 0:-t.motorSpeed,frequencyHz:t.frequencyHz??2,dampingRatio:t.dampingRatio??.7}))}case`rope`:{let{localAnchorA:n,localAnchorB:o}=Z(e,c,t);return a.createJoint(new i.RopeJoint({bodyA:r,bodyB:c.body,localAnchorA:n,localAnchorB:o,maxLength:s(t.maxLength),collideConnected:t.collideConnected}))}case`motor`:return a.createJoint(new i.MotorJoint({bodyA:r,bodyB:c.body,collideConnected:t.collideConnected!==!1,linearOffset:t.linearOffset?o(t.linearOffset):void 0,angularOffset:t.angularOffset??0,maxForce:s(t.maxForce??1),maxTorque:s(s(t.maxTorque??1)),correctionFactor:t.correctionFactor??.3}));case`pulley`:{let{localAnchorA:n,localAnchorB:l}=Z(e,c,t);return a.createJoint(new i.PulleyJoint({bodyA:r,bodyB:c.body,localAnchorA:n,localAnchorB:l,groundAnchorA:o(t.groundAnchorA),groundAnchorB:o(t.groundAnchorB),lengthA:s(t.lengthA),lengthB:s(t.lengthB),ratio:t.ratio,collideConnected:t.collideConnected!==!1}))}}}function Z(e,t,n){let{physics:r,target:i}=e,a=t.target,o=e.scene;if(`localAnchorA`in n&&n.localAnchorA){let e=i.getWorldScale(o),t=r.toPhPos({x:(n.localAnchorA.x+i.pivot.x)*e.x,y:(n.localAnchorA.y+i.pivot.y)*e.y});if(`localAnchorB`in n&&n.localAnchorB){let e=a.getWorldScale(o);return{localAnchorA:t,localAnchorB:r.toPhPos({x:(n.localAnchorB.x+a.pivot.x)*e.x,y:(n.localAnchorB.y+a.pivot.y)*e.y})}}let s=i.toGlobal({x:n.localAnchorA.x+i.pivot.x,y:n.localAnchorA.y+i.pivot.y},void 0,o),c=a.toLocal(s,void 0,o),l=a.getWorldScale(o);return{localAnchorA:t,localAnchorB:r.toPhPos({x:c.x*l.x,y:c.y*l.y})}}return{localAnchorA:{x:0,y:0},localAnchorB:{x:0,y:0}}}function ft(e,t){if(e){if(e.scripts){for(let n of e.scripts)if(n instanceof _t&&n.label===t)return n}if(e.children)for(let n of e.children){let e=ft(n,t);if(e)return e}}}var pt={bottom:[0,-1],top:[0,1],left:[1,0],right:[-1,0]};function mt(e,t){let n=e.scale._x,r=e.scale._y,i=e.parent;for(;i&&i!==t;)n*=i.scale._x,r*=i.scale._y,i=i.parent;return{x:n,y:r}}function ht(e,t){if(!e.body){e.shapes.push(t);return}let{physics:n,body:r}=e,i=t.crossSide??e.crossSide,a={shape:t};if(i){let n=t.surfaceArc??e.surfaceArc,[r,o]=pt[i];a.oneWay={x:r,y:o,cos:n>=360?-2:Math.cos(n*.5*u)}}let o={density:t.density??1,isSensor:t.isSensor??e.isSensor,friction:t.friction??e.friction,restitution:t.restitution??e.restitution,filterGroupIndex:t.filterGroupIndex??0,filterCategoryBits:t.filterCategoryBits??n.getCategoryBit(e.category),filterMaskBits:t.filterMaskBits??n.getCategoryMask(e.categoryAccepted),userData:a},s=e.target,c=s.getLocalBounds(),l=e.scene,d=mt(s,l),{pl:f,toPh:p,toPhPos:m}=n,h=t.type===`box`||t.type===`rect`||t.type===`circle`||t.type===`capsule`,g=t.x!=null||t.y!=null,_,v;switch(g?(_=(t.x??0)*d.x,v=(t.y??0)*d.y):h?(_=(c.x+c.width/2)*d.x,v=(c.y+c.height/2)*d.y):(_=0,v=0),t.type){case`box`:case`rect`:{let e=(t.width??c.width)*Math.abs(d.x),n=(t.height??c.height)*Math.abs(d.y);r.createFixture(new f.Box(p(e)/2,p(n)/2,{x:p(_),y:p(v)}),o);break}case`circle`:{let e=(t.radius??c.height/2)*Math.abs(d.y);r.createFixture(new f.Circle({x:p(_),y:p(v)},p(e)),o);break}case`capsule`:{let e=(t.width??c.width)*Math.abs(d.x),n=Math.max(e,(t.height??c.height)*Math.abs(d.y)),i=p(e/2),s=p((n-e)/2),l=p(_),u=p(v);if(s<=0){r.createFixture(new f.Circle({x:l,y:u},i),o);break}let m=e=>({...o,userData:{...a,capsule:{part:e,half:s,r:i}}});r.createFixture(new f.Box(i,s,{x:l,y:u}),m(0)),r.createFixture(new f.Circle({x:l,y:u-s},i),m(-1)),r.createFixture(new f.Circle({x:l,y:u+s},i),m(1));break}case`polygon`:{let e=t.points,n=[],i=g?_:0,a=g?v:0;for(let t=0;t<e.length;t+=2)n.push(m({x:e[t]*d.x+i,y:e[t+1]*d.y+a}));if(n.length<3||n.length>8)return;r.createFixture(new f.Polygon(n),o);break}case`chain`:case`line`:{let e=t.points,n=[],i=g?_:0,a=g?v:0;for(let t=0;t<e.length;t+=2)n.push(m({x:e[t]*d.x+i,y:e[t+1]*d.y+a}));if(n.length<2)return;r.createFixture(new f.Chain(n,!1),o);break}}}function gt(e){let t=e.body;if(!t||!t.isDynamic())return;let n=!1;for(let e=t.getFixtureList();e;e=e.getNext())if(e.getUserData().shape.type===`capsule`){n=!0;break}if(!n)return;let r=e.physics.pl,i={mass:0,center:r.Vec2.zero(),I:0},a={mass:0,center:r.Vec2.zero(),I:0},o=0,s=0,c=0,l=0,u,d=0,f=0,p=0,m=0,h=0,g=0,_=1/0,v=-1/0,y=()=>{if(d>0){let e=h*(2*g*(v-_)+Math.PI*g*g)/d;o+=d*e,s+=f*e,c+=p*e,l+=m*e}d=f=p=m=0,_=1/0,v=-1/0};for(let e=t.getFixtureList();e;e=e.getNext()){let t=e.getUserData().shape;if(t!==u&&(u&&y(),u=t.type===`capsule`?t:void 0),e.getDensity()!==0)if(e.getMassData(a),u){d+=a.mass,f+=a.I,p+=a.mass*a.center.x,m+=a.mass*a.center.y,h=e.getDensity();let t=e.getShape();if(t.getType()===`circle`){g=t.getRadius();let e=t.getCenter().y;e<_&&(_=e),e>v&&(v=e)}}else o+=a.mass,s+=a.I,c+=a.mass*a.center.x,l+=a.mass*a.center.y}u&&y(),!(o<=0)&&(i.mass=o,i.center.set(c/o,l/o),i.I=s,t.setMassData(i))}var _t=class extends f{_zeroPoint={x:0,y:0};_tempPos={x:0,y:0};_tempWorldPos={x:0,y:0};_truePos={x:0,y:0};_joints=[];_updatingByRigid=!1;_originMarkDirty;_lastSync={x:NaN,y:NaN,rotation:NaN,scaleX:NaN,scaleY:NaN,pivotX:NaN,pivotY:NaN,parent:void 0};_scaleDebounceId=0;_def={gravityScale:1,linearVelocity:{x:0,y:0},linearDamping:0,angularVelocity:0,angularDamping:0,bullet:!1,allowRotation:!1,allowSleeping:!0,sleeping:!1};_prevX=0;_prevY=0;_prevA=0;_settled=!1;_$queryStamp=0;_$contactCounts=new Map;physics;body;interpolate;_rigidType=`static`;get rigidType(){return this._rigidType}set rigidType(e){this._rigidType!==e&&(this._rigidType=e,this.body&&(this.body.setType(e),gt(this)))}_shapes=[];get shapes(){return this._shapes}set shapes(e){this._shapes=e,this.body&&this._resetShapes()}joints=[];crossSide;surfaceArc=180;_category=``;get category(){return this._category}set category(e){if(this._category===e||(this._category=e,!this.body))return;let t=this.physics.getCategoryBit(e);for(let e=this.body.getFixtureList();e;e=e.getNext())e.getUserData().shape.filterCategoryBits??e.setFilterCategoryBits(t)}_categoryAccepted;get categoryAccepted(){return this._categoryAccepted}set categoryAccepted(e){if(this._categoryAccepted=typeof e==`string`?e.split(/[,，]/):e,!this.body)return;let t=this.physics.getCategoryMask(this._categoryAccepted);for(let e=this.body.getFixtureList();e;e=e.getNext())e.getUserData().shape.filterMaskBits??e.setFilterMaskBits(t)}_isSensor=!1;get isSensor(){return this._isSensor}set isSensor(e){if(this._isSensor=e,this.body)for(let t=this.body.getFixtureList();t;t=t.getNext())t.getUserData().shape.isSensor??t.setSensor(e)}_friction=.2;get friction(){return this._friction}set friction(e){if(this._friction=e,this.body){for(let t=this.body.getFixtureList();t;t=t.getNext())t.getUserData().shape.friction??t.setFriction(e);for(let e=this.body.getContactList();e;e=e.next)e.contact.resetFriction()}}_restitution=0;get restitution(){return this._restitution}set restitution(e){if(this._restitution=e,this.body){for(let t=this.body.getFixtureList();t;t=t.getNext())t.getUserData().shape.restitution??t.setRestitution(e);for(let e=this.body.getContactList();e;e=e.next)e.contact.resetRestitution()}}_onCollisionStart;get onCollisionStart(){return this._onCollisionStart}set onCollisionStart(e){this._onCollisionStart&&this.awaked&&this.target.off(l.collisionStart,this._onCollisionStart,this),this._onCollisionStart=e,e&&this.awaked&&this.target.on(l.collisionStart,e,this)}_onCollisionEnd;get onCollisionEnd(){return this._onCollisionEnd}set onCollisionEnd(e){this._onCollisionEnd&&this.awaked&&this.target.off(l.collisionEnd,this._onCollisionEnd,this),this._onCollisionEnd=e,e&&this.awaked&&this.target.on(l.collisionEnd,e,this)}get angularVelocity(){return this.body?this.body.getAngularVelocity():this._def.angularVelocity}set angularVelocity(e){this.body?this.body.setAngularVelocity(e):this._def.angularVelocity=e}get angularDamping(){return this.body?this.body.getAngularDamping():this._def.angularDamping}set angularDamping(e){this.body?this.body.setAngularDamping(e):this._def.angularDamping=e}get gravityScale(){return this.body?this.body.getGravityScale():this._def.gravityScale}set gravityScale(e){if(!this.body){this._def.gravityScale=e;return}this.body.setGravityScale(e),this.body.setAwake(!0)}get linearVelocity(){return this.body?this.physics.to2DPos(this.body.getLinearVelocity()):{...this._def.linearVelocity}}set linearVelocity(e){this.body?this.body.setLinearVelocity(this.physics.toPhPos(e)):this._def.linearVelocity={x:e.x,y:e.y}}get linearDamping(){return this.body?this.body.getLinearDamping():this._def.linearDamping}set linearDamping(e){this.body?this.body.setLinearDamping(e):this._def.linearDamping=e}get bullet(){return this.body?this.body.isBullet():this._def.bullet}set bullet(e){this.body?this.body.setBullet(e):this._def.bullet=e}get allowRotation(){return this.body?!this.body.isFixedRotation():this._def.allowRotation}set allowRotation(e){this.body?this.body.setFixedRotation(!e):this._def.allowRotation=e}get allowSleeping(){return this.body?this.body.isSleepingAllowed():this._def.allowSleeping}set allowSleeping(e){this.body?this.body.setSleepingAllowed(e):this._def.allowSleeping=e}get sleeping(){return this.body?!this.body.isAwake():this._def.sleeping}set sleeping(e){this.body?this.body.setAwake(!e):this._def.sleeping=e}get mass(){return this.body?.getMass()??0}get x(){return this.position.x}set x(e){this.setPosition(e,this.position.y)}get y(){return this.position.y}set y(e){this.setPosition(this.position.x,e)}get angle(){return this.target.rotation*C}set angle(e){this.setAngle(e)}get rotation(){return this.target.rotation}set rotation(e){this.setRotation(e)}get position(){let e=this.target,t=this._truePos;if(!this.body||this._rigidType===`static`)return t.x=e.position.x,t.y=e.position.y,t;let n=this.body.getPosition(),r=this.physics.pixelsPerMeter;return this._computeTargetPos(n.x*r,n.y*r,this._localRotation(this.body.getAngle()),t),t}set position(e){this.setPosition(e.x,e.y)}priority=-100;constructor(e){super(),e&&this.setProps(e)}get target(){return super.target}set target(e){super.target=e,e.pp.rigidBody=this}_$awake(){this.awaked||!this.enabled||this._originMarkDirty||this.target._$onStage()&&(this._originMarkDirty=this.target.markDirty.bind(this.target),this.target.markDirty=this._handleMarkDirty.bind(this),super._$awake())}_handleMarkDirty(e){this._originMarkDirty(e),!(this._updatingByRigid||!this.body||e!==N.transform)&&(this._syncBodyFromTarget(),this._checkScaleChange())}_bodyOrigin(e){let t=this.target,n=this.scene,r=t.parent;if(!r||r===n){let n=t.localMatrix;e.x=n.tx,e.y=n.ty}else n&&t.toGlobal(this._zeroPoint,e,n);return e}_syncBodyFromTarget(e=!1){let t=this.target,{x:n,y:r}=t.position,i=t.rotation,a=t.scale._x,o=t.scale._y,s=t.pivot.x,c=t.pivot.y,l=t.parent,u=this._lastSync;if(!e&&n===u.x&&r===u.y&&i===u.rotation&&a===u.scaleX&&o===u.scaleY&&s===u.pivotX&&c===u.pivotY&&l===u.parent||!this.scene)return;let d=this.physics.toPhPos(this._bodyOrigin(this._tempWorldPos),this._tempWorldPos);this.body.setTransform(d,this._getWorldRotation()),this._teleported(),u.x=n,u.y=r,u.rotation=i,u.pivotX=s,u.pivotY=c,u.parent=l}onAwake(){let e=this.scene;if(!e)throw Error(`RigidBody must be inside a Scene, node: "${this.target.label}"`);this._createBody(e.physics),this._onCollisionStart&&this.target.on(l.collisionStart,this._onCollisionStart,this),this._onCollisionEnd&&this.target.on(l.collisionEnd,this._onCollisionEnd,this)}_createBody(e){this.physics=e;let t=this.target,n=this._def,r=e.toPhPos(this._bodyOrigin(this._tempWorldPos),this._tempWorldPos),i=e.world.createBody({type:this._rigidType,position:{x:r.x,y:r.y},angle:this._getWorldRotation(),angularVelocity:n.angularVelocity,linearDamping:n.linearDamping,angularDamping:n.angularDamping,gravityScale:n.gravityScale,bullet:n.bullet,fixedRotation:!n.allowRotation,allowSleep:n.allowSleeping,awake:!n.sleeping,active:this.enabled,userData:this});this.body=i,this._shapes.length||this._shapes.push({type:`box`});for(let e of this._shapes)ht(this,e);gt(this),i.setLinearVelocity(e.toPhPos(n.linearVelocity)),this._teleported(),n.sleeping&&i.setAwake(!1);let a=this._lastSync;a.x=t.position.x,a.y=t.position.y,a.rotation=t.rotation,a.scaleX=t.scale._x,a.scaleY=t.scale._y,a.pivotX=t.pivot.x,a.pivotY=t.pivot.y,a.parent=t.parent}_destroyBody(){let e=this.body;if(e){for(let t=e.getJointList();t;t=t.next){let e=t.other.getUserData();e.destroyed||e._$removeJoint(t.joint)}this._joints.length=0,this.physics.destroyed||this.physics.world.destroyBody(e),this.body=void 0,this._$contactCounts.clear()}}_$leaveStage(e){e||this.body?.setActive(!1)}_$enterStage(){if(super._$enterStage(),!this.body||this.destroyed)return;let e=this.target.scene;if(!e){this.body.setActive(!1);return}let t=e.physics;if(t===this.physics){this._syncBodyFromTarget(!0),this.enabled&&this.body.setActive(!0);return}this._saveDef(),this._destroyBody(),this._createBody(t)}_saveDef(){let e=this.body,t=this._def,n=e.getLinearVelocity(),r=this.physics.pixelsPerMeter;t.linearVelocity={x:n.x*r,y:n.y*r},t.angularVelocity=e.getAngularVelocity(),t.linearDamping=e.getLinearDamping(),t.angularDamping=e.getAngularDamping(),t.gravityScale=e.getGravityScale(),t.bullet=e.isBullet(),t.allowRotation=!e.isFixedRotation(),t.allowSleeping=e.isSleepingAllowed(),t.sleeping=!e.isAwake()}onStart(){this.joints.length&&this._createPendingJoints()}_createPendingJoints(){if(!this.body||!this.joints.length)return;let e=this.joints;this.joints=[];for(let t of e)this.addJoint(t)}_resetShapes(){let e=this.body.getFixtureList();for(;e;){let t=e.getNext();this.body.destroyFixture(e),e=t}for(let e of this._shapes)ht(this,e);gt(this),this._rigidType!==`static`&&this.body.setAwake(!0),this._lastSync.scaleX=this.target.scale._x,this._lastSync.scaleY=this.target.scale._y}_checkScaleChange(){if(!this.body||!this._shapes.length)return;let e=this.target.scale._x,t=this.target.scale._y,n=this._lastSync;(e!==n.scaleX||t!==n.scaleY)&&(this._scaleDebounceId||=window.setTimeout(()=>{if(this._scaleDebounceId=0,this.destroyed||!this.body||!this._shapes.length)return;let e=this.target.scale._x,t=this.target.scale._y;(e!==this._lastSync.scaleX||t!==this._lastSync.scaleY)&&this._resetShapes()},100))}_teleported(){let e=this.body,t=e.getPosition();this._prevX=t.x,this._prevY=t.y,this._prevA=e.getAngle(),this._settled=!1,this._rigidType!==`static`&&e.setAwake(!0)}_$savePrev(){let e=this.body,t=e.getPosition();this._prevX=t.x,this._prevY=t.y,this._prevA=e.getAngle()}_$syncToTarget(e){let t=this.body;if(!t.isActive())return!1;let n=t.isAwake();if(!n&&this._settled)return!1;this._settled=!n,n||this._$savePrev();let r=this.physics,i=r.pixelsPerMeter,a=t.getPosition(),o=this._tempPos;if(o.x=a.x*i,o.y=a.y*i,!r.inBoundaryArea(o))return!0;let s=t.getAngle();n&&e<1&&(this.interpolate??r.interpolate)&&(o.x=(this._prevX+(a.x-this._prevX)*e)*i,o.y=(this._prevY+(a.y-this._prevY)*e)*i,s=this._prevA+(s-this._prevA)*e),this._updatingByRigid=!0;let c=this.target;t.isFixedRotation()||(c.rotation=this._localRotation(s));let l=this._computeTargetPos(o.x,o.y,c.rotation,o);c.position.set(l.x,l.y);let u=this._lastSync;return u.x=c.position.x,u.y=c.position.y,u.rotation=c.rotation,this._updatingByRigid=!1,!1}_computeTargetPos(e,t,n,r){let i=this.target,a=this.scene,o=i.parent,s=e,c=t;if(o&&o!==a&&a){r.x=e,r.y=t;let n=o.toLocal(r,r,a);s=n.x,c=n.y}let l=i.pivot.x,u=i.pivot.y;if(l===0&&u===0)r.x=s,r.y=c;else{let e=Math.cos(n),t=Math.sin(n),a=i.scale._x,o=i.scale._y;r.x=s+l*e*a-u*t*o,r.y=c+l*t*a+u*e*o}return r}_localRotation(e){return(e-this._getParentWorldRotation())%w}onEnable(){this.target._$onStage()&&this.body?.setActive(!0)}onDisable(){this.body?.setActive(!1)}setPosition(e,t){if(this._updatingByRigid=!0,this.target.position.set(e,t),this.body&&this.scene){let e=this.physics.toPhPos(this._bodyOrigin(this._tempWorldPos),this._tempWorldPos);this.body.setPosition(e),this._teleported()}let n=this._lastSync;n.x=e,n.y=t,this._updatingByRigid=!1}getRotation(){return this.target.rotation}setRotation(e){this._updatingByRigid=!0;let t=this.target;if(t.rotation=e,this.body&&this.scene){let e=this.physics.toPhPos(this._bodyOrigin(this._tempWorldPos),this._tempWorldPos);this.body.setTransform(e,this._getWorldRotation()),this._teleported()}let n=this._lastSync;n.x=t.position.x,n.y=t.position.y,n.rotation=e,this._updatingByRigid=!1}setAngle(e){this.setRotation(e*u)}setLinearVelocity(e,t){let n=this.linearVelocity,r=typeof e==`object`?e?.x:e,i=typeof e==`object`?e?.y:t;this.linearVelocity={x:r??n.x,y:i??n.y},this.body&&this._rigidType!==`static`&&this.body.setAwake(!0)}getLinearVelocity(){return this.linearVelocity}setAngularVelocity(e){this.angularVelocity=e,this.body&&this._rigidType!==`static`&&this.body.setAwake(!0)}applyLinearImpulse(e,t={x:0,y:0}){console.assert(this.rigidType===`dynamic`,`applyLinearImpulse only works on dynamic bodies`);let n=this.physics.toPhPos(e),r=this.physics.toPhPos(t),i=this.body.getWorldCenter();this.body.applyLinearImpulse(n,{x:i.x+r.x,y:i.y+r.y},!0)}applyForce(e,t={x:0,y:0}){console.assert(this.rigidType===`dynamic`,`applyForce only works on dynamic bodies`);let n=this.physics.toPhPos(e),r=this.physics.toPhPos(t),i=this.body.getWorldCenter();this.body.applyForce(n,{x:i.x+r.x,y:i.y+r.y},!0)}applyForceToCenter(e){console.assert(this.rigidType===`dynamic`,`applyForceToCenter only works on dynamic bodies`),this.body.applyForceToCenter(this.physics.toPhPos(e),!0)}applyTorque(e){console.assert(this.rigidType===`dynamic`&&this.allowRotation,`applyTorque only works on dynamic bodies with allowRotation`),this.body.applyTorque(this.physics.toPh(this.physics.toPh(e)),!0)}applyAngularImpulse(e){console.assert(this.rigidType===`dynamic`&&this.allowRotation,`applyAngularImpulse only works on dynamic bodies with allowRotation`),this.body.applyAngularImpulse(this.physics.toPh(this.physics.toPh(e)),!0)}addShape(e){this._shapes.push(e),this.body&&(ht(this,e),gt(this))}addJoint(e){try{let t=dt(this,e);t&&(t.setUserData(e.label),this._joints.push(t))}catch(e){console.error(`addJoint error:`,e)}}destroyJoint(e){let t=this._joints.findIndex(t=>t.getUserData()===e);if(t!==-1){let e=this._joints[t];this._joints.splice(t,1),this.physics.world.destroyJoint(e)}}destroyAllJoints(){let e=this._joints;this._joints=[];for(let t of e)this.physics.world.destroyJoint(t)}removeJoint(e){this.destroyJoint(e)}getJointCount(){return this._joints.length}_$removeJoint(e){let t=this._joints.indexOf(e);t!==-1&&this._joints.splice(t,1)}onDestroy(){this._scaleDebounceId&&clearTimeout(this._scaleDebounceId),this._destroyBody(),this._originMarkDirty&&(this.target.markDirty=this._originMarkDirty),this.target.pp.rigidBody=void 0}_getWorldRotation(){return this.target.rotation+this._getParentWorldRotation()}_getParentWorldRotation(){let e=0,t=this.scene,n=this.target.parent;for(;n&&n!==t;)e+=n.rotation,n=n.parent;return e}};_t=m([h(`RigidBody`),j(`design:paramtypes`,[Object])],_t);var vt=`#version 300 es
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
`,yt=`struct VertexInput {
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
`,bt=`#version 300 es
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
`,xt=`struct VertexInput {
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
`,St=`#version 300 es
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
`,Ct=`struct VertexInput {
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
`,wt=6,Tt=.75,Et=class extends R{uniforms;constructor(e,t){let n=new i({uParams:{value:[0,0,0,0],type:`f32`,size:4}});super({shader:e,glVertex:z,glFragment:t,resources:{bloom:n}}),this.uniforms=n}},Dt=class extends R{_uniforms;_prefilter=new Et(xt,bt);_down=new Et(xt,bt);_up=new Et(Ct,St);_levels=[];_threshold;_intensity;_radius;_paramsDirty=!0;_bloomResolution;constructor(e={}){let t=new i({uParams:{value:[1,0,0,0],type:`f32`,size:4}});super({shader:yt,glVertex:z,glFragment:vt,resources:{bloom:t,uBloom:c.BLANK},padding:e.padding??32}),this._uniforms=t,this.hdr=!0,this._threshold=e.threshold??1,this._intensity=e.intensity??1,this._radius=e.radius??.5,this._bloomResolution=e.bloomResolution??.5}get bloomResolution(){return this._bloomResolution}set bloomResolution(e){this._bloomResolution!==e&&(this._bloomResolution=e,this.dirty=!0)}get threshold(){return this._threshold}set threshold(e){this._threshold=e,this._markParams()}get intensity(){return this._intensity}set intensity(e){this._intensity=e,this._markParams()}get radius(){return this._radius}set radius(e){this._radius=e,this._markParams()}_markParams(){this._paramsDirty=!0,this.dirty=!0}_syncParams(){this._paramsDirty=!1;let e=T.floatRenderable?this._threshold:Math.min(this._threshold,Tt);this._prefilter.uniforms.setValue(`uParams`,[e,Math.max(e*.5,1e-4),1,0]);let t=.05+.9*Math.min(1,Math.max(0,this._radius));this._up.uniforms.setValue(`uParams`,[t,0,0,0]),this._uniforms.setValue(`uParams`,[this._intensity*(1-t),0,0,0])}execute(e,t,n){this._paramsDirty&&this._syncParams();let r=T.floatRenderable?`rgba16float`:void 0,i=this._levels,a=Math.max(1,Math.round(t.width*this._bloomResolution)),o=Math.max(1,Math.round(t.height*this._bloomResolution)),s=0,c=t;for(;s<wt;){let t=e.acquire(a,o,r);if(e.pass(s===0?this._prefilter:this._down,c,t),i[s++]=t,c=t,a<4||o<4)break;a=Math.ceil(a/2),o=Math.ceil(o/2)}for(let t=s-1;t>0;t--)e.pass(this._up,i[t],i[t-1],`add`);this.resources.uBloom=le(i[0]),e.pass(this,t,n);for(let t=0;t<s;t++)e.release(i[t]);i.length=0}destroy(){super.destroy(),this._prefilter.destroy(),this._down.destroy(),this._up.destroy()}},Ot=`#version 300 es
precision highp float;

in vec2 vLocal;
in vec4 vColor;
flat in vec4 vParams;
flat in vec4 vAngles;
out vec4 finalColor;

uniform sampler2D uCookie;

// 与 light.wgsl 相同的衰减模型；vParams.w = 1 时光罩按 sRGB 解码为线性
void main() {
    vec4 s = texture(uCookie, vLocal * 0.5 + 0.5);
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
`,kt=`#version 300 es
in vec2 aPos;
in vec2 aLocal;
in vec4 aColor;
in vec4 aParams;
in vec4 aAngles;

out vec2 vLocal;
out vec4 vColor;
flat out vec4 vParams;
flat out vec4 vAngles;

// 顶点位置已在 CPU 换算为 NDC（WebGL 离屏约定：区域顶部在 NDC -1，即纹理第 0 行）
void main() {
    gl_Position = vec4(aPos, 0.0, 1.0);
    vLocal = aLocal;
    vColor = aColor;
    vParams = aParams;
    vAngles = aAngles;
}
`,At=`// 光照贴图：每盏灯一组三角形，加法混合（见 lighting-filter.ts）。顶点位置已在 CPU 换算为 NDC，无 uniform
struct VertexInput {
  @location(0) pos: vec2<f32>,
  @location(1) local: vec2<f32>,
  @location(2) color: vec4<f32>,
  @location(3) params: vec4<f32>,
  @location(4) angles: vec4<f32>,
};

struct VertexOutput {
  @builtin(position) position: vec4<f32>,
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
  let s = textureSample(cookie, cookieSampler, in.local * 0.5 + 0.5);
  // 线性模式用 2.2 次幂近似 sRGB 解码（光罩是低频遮罩，误差不可见）；白色纹理解码后仍为 1
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
`,jt=`#version 300 es
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
`,Mt=`struct VertexInput {
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
`,Q=16,Nt=class extends R{_layer=1;_lightmapResolution=.5;_uniforms;_ambient=new s(0);_ambientIntensity=1;_linear=!1;_node;_lightVersion=-1;_data=new Float32Array(Q*6*64);_ranges=[];_rangeCount=0;_gpuBuffer;_glBuffer=null;constructor(e={}){let t=new i({uAmbient:{value:[0,0,0,0],type:`f32`,size:4}});super({shader:Mt,glVertex:z,glFragment:jt,resources:{lighting:t,uLightMap:c.BLANK,uAddMap:c.BLANK}}),this._uniforms=t,this.hdr=!0,e.layer!==void 0&&(this._layer=e.layer),e.lightmapResolution!==void 0&&(this._lightmapResolution=e.lightmapResolution),this._linear=e.linear??!1,this._ambientIntensity=e.ambientIntensity??1,this.ambient=e.ambient??0}get layer(){return this._layer}set layer(e){this._layer!==e&&(this._layer=e,this.dirty=!0)}get lightmapResolution(){return this._lightmapResolution}set lightmapResolution(e){this._lightmapResolution!==e&&(this._lightmapResolution=e,this.dirty=!0)}get linear(){return this._linear}set linear(e){this._linear!==e&&(this._linear=e,this._syncAmbient())}get ambient(){return this._ambient.value}set ambient(e){this._ambient.value=e,this._syncAmbient()}get ambientIntensity(){return this._ambientIntensity}set ambientIntensity(e){this._ambientIntensity=e,this._syncAmbient()}_syncAmbient(){let e=this._ambient,t=this._ambientIntensity,n=this._linear;this._uniforms.setValue(`uAmbient`,[$(e.red,n)*t,$(e.green,n)*t,$(e.blue,n)*t,+!!n]),this.dirty=!0}get dirty(){let e=this._node;return super.dirty||!!e&&V._$version(e,ae.frame)!==this._lightVersion}getSourceVersion(e){return V._$version(e,ae.frame)}set dirty(e){super.dirty=e}execute(e,t,n){let r=e.area;this._node&&this._node!==r.node&&!It&&(It=!0,console.warn(`[Liko] LightingFilter: one instance must not be shared by multiple nodes`)),this._node=r.node,this._lightVersion=V._$version(r.node,ae.frame);let i=Math.max(1,Math.ceil(t.width*this._lightmapResolution)),a=Math.max(1,Math.ceil(t.height*this._lightmapResolution)),o=T.floatRenderable?`rgba16float`:void 0,s=this._build(r,`multiply`),c=this._build(r,`additive`);this._vertexEnd>0&&this._upload(e.encoder!==void 0);let l=e.acquire(i,a,o);this._draw(e,l,s,0),this.resources.uLightMap=le(l);let u;c>0?(u=e.acquire(i,a,o),this._draw(e,u,c,s),this.resources.uAddMap=le(u)):this.resources.uAddMap=Rt(),e.pass(this,t,n),e.release(l),u&&e.release(u)}_build(e,t){let n=e.node,r=t===`multiply`?0:this._vertexEnd;t===`multiply`&&(this._rangeCount=0);let i=r,a=2/e.width,o=(F?-2:2)/e.height,s=-1-e.x*a,l=(F?1:-1)-e.y*o,u=n.worldMatrix,d=u.a*u.d-u.b*u.c===0?Ft.identity():Ft.copyFrom(u).invert(),f=V._$lights(n),p=this._layer,m=this._linear;for(let e=0;e<f.length;e++){let n=f[e];if(!(n.layers&p)||n.blend!==t||n.intensity<=0||!n.active)continue;let u=n.lightColor,h=n.intensity,g=$(u.red,m)*h,_=$(u.green,m)*h,v=$(u.blue,m)*h,y=n.type,b=(y===`point`||y===`spot`)&&n.cookieTexture?n.cookieTexture.buffer:c.WHITE.buffer,x=n.worldMatrix,S=(d.a*x.a+d.c*x.b)*a,C=(d.b*x.a+d.d*x.b)*o,w=(d.a*x.c+d.c*x.d)*a,T=(d.b*x.c+d.d*x.d)*o,E=(d.a*x.tx+d.c*x.ty+d.tx)*a+s,D=(d.b*x.tx+d.d*x.ty+d.ty)*o+l,O=i;if(y===`global`)i=this._quad(i,-1,-1,2,0,0,2,0,g,_,v,0,1,1,1,!0);else if(y===`shape`){let e=n.mesh;if(!e||!this._visible(e,3,S,C,w,T,E,D))continue;let t=e.length/3;this._ensure(i+t);let r=this._data;for(let a=0;a<t;a++){let t=e[a*3],o=e[a*3+1],s=i*Q;r[s]=S*t+w*o+E,r[s+1]=C*t+T*o+D,r[s+2]=e[a*3+2],r[s+3]=0,r[s+4]=g,r[s+5]=_,r[s+6]=v,r[s+7]=1,r[s+8]=2,r[s+9]=0,r[s+10]=n.falloff,r[s+11]=0,r[s+12]=r[s+13]=r[s+14]=r[s+15]=0,i++}}else{let e=n.radius,t=Math.abs(S*e)+Math.abs(w*e),r=Math.abs(C*e)+Math.abs(T*e);if(E+t<-1||E-t>1||D+r<-1||D-r>1)continue;let a=e>0?Math.min(.999,n.innerRadius/e):0,o=+(y===`spot`),s=Math.cos(n.innerAngle*Math.PI/360),c=Math.cos(n.outerAngle*Math.PI/360);i=this._quad(i,E-(S+w)*e,D-(C+T)*e,S*2*e,C*2*e,w*2*e,T*2*e,o,g,_,v,a,n.falloff,s,c,!1)}let k=this._ranges,A=this._rangeCount>0?k[this._rangeCount-1]:void 0;if(A&&A.cookie===b&&A.start+A.count===O&&A.start>=r)A.count+=i-O;else{k[this._rangeCount]??={cookie:b,start:0,count:0};let e=k[this._rangeCount];e.cookie=b,e.start=O,e.count=i-O,this._rangeCount++}}return this._vertexEnd=i,i-r}_vertexEnd=0;_quad(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this._ensure(e+6);let g=this._data;for(let _=0;_<6;_++){let v=Pt[_*2],y=Pt[_*2+1],b=(e+_)*Q;g[b]=t+r*v+a*y,g[b+1]=n+i*v+o*y,g[b+2]=h?0:v*2-1,g[b+3]=h?0:y*2-1,g[b+4]=c,g[b+5]=l,g[b+6]=u,g[b+7]=1,g[b+8]=s,g[b+9]=d,g[b+10]=f,g[b+11]=+!!this._linear,g[b+12]=p,g[b+13]=m,g[b+14]=0,g[b+15]=0}return e+6}_visible(e,t,n,r,i,a,o,s){let c=1/0,l=1/0,u=-1/0,d=-1/0;for(let f=0;f<e.length;f+=t){let t=n*e[f]+i*e[f+1]+o,p=r*e[f]+a*e[f+1]+s;t<c&&(c=t),t>u&&(u=t),p<l&&(l=p),p>d&&(d=p)}return!(u<-1||c>1||d<-1||l>1)}_ensure(e){if(e*Q<=this._data.length)return;let t=this._data.length;for(;t<e*Q;)t*=2;let n=new Float32Array(t);n.set(this._data),this._data=n}_upload(e){let t=this._vertexEnd*Q;if(e){let e=T.device;(!this._gpuBuffer||this._gpuBuffer.size<t*4)&&(this._gpuBuffer?.destroy(),this._gpuBuffer=e.createBuffer({size:this._data.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),e.queue.writeBuffer(this._gpuBuffer,0,this._data.buffer,0,t*4)}else{let e=T.gl;this._glBuffer??=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this._glBuffer),e.bufferData(e.ARRAY_BUFFER,this._data,e.DYNAMIC_DRAW,0,t)}}_draw(e,t,n,r){e.encoder?this._drawGPU(e.encoder,t,n,r):this._drawGL(t,n,r)}_drawGPU(e,n,r,i){let a=e.beginRenderPass({colorAttachments:[{view:n.view,clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}]});if(r>0){a.setPipeline(Ut(n.texture.format)),a.setVertexBuffer(0,this._gpuBuffer);let e=i+r;for(let n=0;n<this._rangeCount;n++){let r=this._ranges[n];r.start<i||r.start>=e||(a.setBindGroup(0,Wt(r.cookie)),a.draw(r.count,1,r.start),t.enabled&&t.totalDraws++)}}a.end()}_drawGL(e,n,r){let i=T,a=i.gl;if(i.bindRenderTarget(e.texture),a.disable(a.SCISSOR_TEST),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),n>0){let e=Kt();i.useProgram(e.program),a.bindVertexArray(e.vao),a.bindBuffer(a.ARRAY_BUFFER,this._glBuffer),qt(a,e),a.enable(a.BLEND),a.blendFuncSeparate(a.ONE,a.ONE,a.ONE,a.ONE),a.activeTexture(a.TEXTURE0),a.uniform1i(e.cookieLoc,0);let o=r+n;for(let e=0;e<this._rangeCount;e++){let n=this._ranges[e];n.start<r||n.start>=o||(n.cookie.upload(),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,n.cookie.texture.data),a.drawArrays(a.TRIANGLES,n.start,n.count),t.enabled&&t.totalDraws++)}a.bindVertexArray(null),i.invalidateTextureCache()}}destroy(){super.destroy(),this._gpuBuffer?.destroy(),this._gpuBuffer=void 0,this._glBuffer&&T.gl.deleteBuffer(this._glBuffer),this._glBuffer=null}},Pt=[0,0,1,0,1,1,0,0,1,1,0,1],Ft=new x,It=!1,Lt;function $(e,t){return t?e**2.2:e}function Rt(){return Lt??=c.fromBuffer(new d(1,1)),Lt}var zt=new Map,Bt,Vt=new WeakMap;function Ht(){return Bt||=T.device.createBindGroupLayout({label:`light-cookie-layout`,entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{}}]}),Bt}function Ut(e){let t=zt.get(e);if(!t){let n=T.device,r=n.createShaderModule({code:At});t=n.createRenderPipeline({label:`light-pipeline`,layout:n.createPipelineLayout({bindGroupLayouts:[Ht()]}),vertex:{module:r,entryPoint:`vert_main`,buffers:[{arrayStride:Q*4,attributes:[{shaderLocation:0,format:`float32x2`,offset:0},{shaderLocation:1,format:`float32x2`,offset:8},{shaderLocation:2,format:`float32x4`,offset:16},{shaderLocation:3,format:`float32x4`,offset:32},{shaderLocation:4,format:`float32x4`,offset:48}]}]},fragment:{module:r,entryPoint:`frag_main`,targets:[{format:e,blend:{color:{srcFactor:`one`,dstFactor:`one`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one`,operation:`add`}}}]},primitive:{topology:`triangle-list`}}),zt.set(e,t)}return t}function Wt(e){let t=Vt.get(e);return t||(e.upload(),t=T.device.createBindGroup({layout:Ht(),entries:[{binding:0,resource:e.view},{binding:1,resource:e.sampler}]}),Vt.set(e,t)),t}var Gt;function Kt(){if(!Gt){let e=T,t=e.gl,n=e.createProgram(kt,Ot);Gt={program:n,vao:t.createVertexArray(),cookieLoc:t.getUniformLocation(n,`uCookie`),locs:[`aPos`,`aLocal`,`aColor`,`aParams`,`aAngles`].map(e=>t.getAttribLocation(n,e))}}return Gt}function qt(e,t){let n=[2,2,4,4,4],r=0;for(let i=0;i<5;i++){let a=t.locs[i];a>=0&&(e.enableVertexAttribArray(a),e.vertexAttribPointer(a,n[i],e.FLOAT,!1,Q*4,r)),r+=n[i]*4}}var Jt=`#version 300 es
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
`,Yt=`struct VertexInput {
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
`,Xt=class extends R{_mask;_maskUniforms;_matrix=new x;_originMarkDirty;_hookMarkDirty;_applying=!1;_destroyed=!1;constructor(e){let t=new i({uTransform:{value:[1,0,0,1,0,0,0,0],type:`f32`,size:8}}),n=e.mask;`renderMode`in n&&(n.renderMode=`canvas`),super({shader:Yt,glVertex:z,glFragment:Jt,resources:{maskUniforms:t,mapTexture:c.BLANK}}),this._mask=n,this._maskUniforms=t;let r=n.markDirty;this._originMarkDirty=r,this._hookMarkDirty=e=>{r.call(n,e),!this._applying&&!this._destroyed&&(this.dirty=!0)},n.markDirty=this._hookMarkDirty}get mask(){return this._mask}apply(e){this._applying=!0;let t=this._mask.texture;t&&this.resources.mapTexture!==t&&(this.resources.mapTexture=t,this.syncResources()),this._computeMatrix(e.width,e.height,e.x,e.y),this._applying=!1}destroy(){if(this._destroyed)return;this._destroyed=!0;let e=this._mask;e.markDirty===this._hookMarkDirty&&(e.markDirty=this._originMarkDirty),super.destroy()}_computeMatrix(e,t,n,r){let i=this._mask.getLocalBounds(),a=i.width,o=i.height;if(a<=0||o<=0)return;let s=this._matrix;s.copyFrom(this._mask.localMatrix).invert();let{a:c,b:l,c:u,d,tx:f,ty:p}=s,m=i.minX,h=i.minY,g=e*c/a,_=e*l/o,v=t*u/a,y=t*d/o,b=(n*c+r*u+f-m)/a,x=(n*l+r*d+p-h)/o;this._maskUniforms.setValue(`uTransform`,[g,_,v,y,b,x,0,0])}},Zt=`#version 300 es
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
`,Qt=`struct VertexInput {
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
`,$t=`#version 300 es
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
`,en=`struct VertexInput {
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
    // 输出不透明背景（按遮罩），覆盖到原背景之上
    return bg * mask;
}
`,tn=class extends R{_uniforms;constructor(e={}){let t=e.center??[.5,.5],n=e.time??0,r=e.amplitude??.05,a=e.wavelength??.1,o=e.speed??1,s=new i({uCenter:{value:[t[0],t[1]],type:`f32`,size:2},uTime:{value:n,type:`f32`},uAmplitude:{value:r,type:`f32`},uWavelength:{value:a,type:`f32`},uSpeed:{value:o,type:`f32`}}),l=!!e.backdrop;super({shader:l?en:Qt,glVertex:z,glFragment:l?$t:Zt,resources:l?{sw:s,uBackdrop:c.BLANK}:{sw:s}}),this._uniforms=s,this.blendRequired=l}get center(){let e=this._uniforms.getValue(`uCenter`);return[e[0],e[1]]}set center(e){this.dirty=!0,this._uniforms.setValue(`uCenter`,[e[0],e[1]])}get time(){return this._uniforms.getValue(`uTime`)}set time(e){this.dirty=!0,this._uniforms.setValue(`uTime`,e)}get amplitude(){return this._uniforms.getValue(`uAmplitude`)}set amplitude(e){this.dirty=!0,this._uniforms.setValue(`uAmplitude`,e)}get wavelength(){return this._uniforms.getValue(`uWavelength`)}set wavelength(e){this.dirty=!0,this._uniforms.setValue(`uWavelength`,e)}get speed(){return this._uniforms.getValue(`uSpeed`)}set speed(e){this.dirty=!0,this._uniforms.setValue(`uSpeed`,e)}},nn=`#version 300 es
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
`,rn=`struct VertexInput {
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
`,an=class extends R{_uniforms;constructor(e={}){let t=e.amplitude??.02,n=e.frequency??12,r=e.speed??2,a=new i({uTime:{value:0,type:`f32`},uAmplitude:{value:t,type:`f32`},uFrequency:{value:n,type:`f32`},uSpeed:{value:r,type:`f32`}});super({shader:rn,glVertex:z,glFragment:nn,resources:{waterUniforms:a},padding:Math.ceil(t*200)}),this._uniforms=a}get time(){return this._uniforms.getValue(`uTime`)}set time(e){this.dirty=!0,this._uniforms.setValue(`uTime`,e)}get amplitude(){return this._uniforms.getValue(`uAmplitude`)}set amplitude(e){this.dirty=!0,this._uniforms.setValue(`uAmplitude`,e),this.padding=Math.ceil(e*200)}get frequency(){return this._uniforms.getValue(`uFrequency`)}set frequency(e){this.dirty=!0,this._uniforms.setValue(`uFrequency`,e)}get speed(){return this._uniforms.getValue(`uSpeed`)}set speed(e){this.dirty=!0,this._uniforms.setValue(`uSpeed`,e)}},on=Symbol(`sceneRef`),sn=Object.prototype.hasOwnProperty,cn=class e extends f{_moveAxis={dx:0,dy:0};_waits;_hitScene;static singleton(){}sceneRef(){return{[on]:!0}}_$awake(){if(this.awaked||!this.enabled||!this.target.stage)return;let t=this.target,n=this.constructor;sn.call(n,`instance`)&&(n.instance=this);let r=Object.keys(this);for(let e=0;e<r.length;e++){let t=r[e],n=this[t];if(n&&typeof n==`object`&&n[on]){let e=this._$resolveSceneRef(t);if(!e)throw Error(`Script sceneRef "${t}" not found in ${this.constructor.name}`);this[t]=e}}let i=e.prototype,{onClick:a,onPointerDown:o,onPointerUp:s,onPointerMove:c,onPointerOver:u,onPointerOut:d,onCollisionStart:f,onCollisionEnd:p,onBroadcast:m,onHit:h}=i;this.onClick!==a&&t.on(l.click,this.onClick,this),this.onPointerDown!==o&&t.on(l.pointerDown,this.onPointerDown,this),this.onPointerUp!==s&&t.on(l.pointerUp,this.onPointerUp,this),this.onPointerMove!==c&&t.on(l.pointerMove,this.onPointerMove,this),this.onPointerOver!==u&&t.on(l.pointerOver,this.onPointerOver,this),this.onPointerOut!==d&&t.on(l.pointerOut,this.onPointerOut,this),this.onCollisionStart!==f&&t.on(l.collisionStart,this.onCollisionStart,this),this.onCollisionEnd!==p&&t.on(l.collisionEnd,this.onCollisionEnd,this),this.onBroadcast!==m&&this.stage.on(l.broadcast,this.onBroadcast,this);let g=this.stage,{onStageClick:_,onStagePointerDown:v,onStagePointerUp:y,onStagePointerMove:b,onKeyDown:x,onKeyUp:S,onDataChange:C}=i;this.onStageClick!==_&&g.on(l.click,this.onStageClick,this),this.onStagePointerDown!==v&&g.on(l.pointerDown,this.onStagePointerDown,this),this.onStagePointerUp!==y&&g.on(l.pointerUp,this.onStagePointerUp,this),this.onStagePointerMove!==b&&g.on(l.pointerMove,this.onStagePointerMove,this),this.onKeyDown!==x&&g.on(l.keydown,this.onKeyDown,this),this.onKeyUp!==S&&g.on(l.keyup,this.onKeyUp,this),this.onDataChange!==C&&g.on(l.dataChanged,this.onDataChange,this),this.onHit!==h&&`hits`in this&&this.hits&&(this._hitScene=this.scene,this._hitScene.collisionSystem.addPair(this,this.hits)),super._$awake()}_$enterStage(){super._$enterStage();let t=this._hitScene,n=this.target.scene;this.destroyed||this.onHit===e.prototype.onHit||!(`hits`in this)||!this.hits||(t!==n&&t?.collisionSystem.removePair(this),this._hitScene=n,n?.collisionSystem.addPair(this,this.hits))}_$leaveStage(e){super._$leaveStage(e),this._hitScene?.collisionSystem.removePair(this,!0)}onClick(e){}onPointerDown(e){}onPointerUp(e){}onPointerMove(e){}onPointerOver(e){}onPointerOut(e){}onCollisionStart(e){}onCollisionEnd(e){}onBroadcast(e,t){}onStageClick(e){}onStagePointerDown(e){}onStagePointerUp(e){}onStagePointerMove(e){}onKeyDown(e){}onKeyUp(e){}onDataChange(e,t){}isPressed(e){return this.stage.keyboard.isPressed(e)}isJustPressed(e){return this.stage.keyboard.isJustPressed(e)}isJustReleased(e){return this.stage.keyboard.isJustReleased(e)}getAxis(e,t){return!!this.isPressed(t)-+!!this.isPressed(e)}getMoveAxis(){return this._moveAxis.dx=this.getAxis(`left`,`right`),this._moveAxis.dy=this.getAxis(`up`,`down`),this._moveAxis}spawn(e,t){return this.scene.spawn(e,{parent:this.target,...t})}findByTag(e){return this.scene.getByTag(e)}find(e,t=!0){return this.scene.getChildByLabel(e,t)}showScene(e,t){return this.stage.showScene(e,t)}replaceScene(e,t,n){return this.stage.replaceScene(e,t,n)}popupScene(e,t){return this.stage.popupScene(e,t)}closeScene(e,t){return this.stage.closeScene(e,t)}wait(e){return new Promise(t=>{this.scene.timer.setTimeout(e,t,this)})}timeout(e){return new Promise(t=>{this.stage.timer.setTimeout(e,t,this)})}waitFrame(e=1){return new Promise(t=>{let n=e,r=()=>{--n<=0&&(this.scene.timer.clearTimer(r,this),t())};this.scene.timer.onFrame(r,this)})}waitEvent(e,t){return new Promise(n=>{this._waits||=[];let r=this._waits,i={target:e,event:t,fn:(...e)=>{let t=r.indexOf(i);t>=0&&r.splice(t,1),n(e.length<=1?e[0]:e)}};r.push(i),e.once(t,i.fn,this)})}waitUntil(e){return e()?Promise.resolve():new Promise(t=>{let n=()=>{e()&&(this.scene.timer.clearTimer(n,this),t())};this.scene.timer.onFrame(n,this)})}waitBroadcast(e){return new Promise(t=>{let n=(r,i)=>{r===e&&(this.stage.off(l.broadcast,n,this),t(i))};this.stage.on(l.broadcast,n,this)})}destroy(){if(this.destroyed)return;let e=this._waits;if(e){for(let t of e)t.target.off(t.event,t.fn,this);this._waits=void 0}this._hitScene?.collisionSystem.removePair(this),this._hitScene=void 0;let t=this.constructor;t.instance===this&&(t.instance=void 0),super.destroy()}onHit(e,t){}resetHits(){this.scene.collisionSystem.resetOnce(this)}queryHits(e,t,n,r){let i=r??[];return this.scene.queryCircleByTag(e,t,n,i)}nearestHit(e,t,n){return this.scene.nearestByTag(e,t,n)}_$resolveSceneRef(e){return this.target.scene?._$getRef(e)}},ln=class{bus;points;buffer;frequency;slide;wave;source;gain;detach;offset=0;when;delay;paused;released=!1;constructor(e,t,n,r,i=440,a=i,o=`sine`){this.bus=e,this.points=t,this.buffer=r,this.frequency=i,this.slide=a,this.wave=o,this.when=n,this.delay=Math.max(0,n-O.currentTime),this.paused=e.paused,this.detach=e.attach(this),this.paused||this.start()}get duration(){return this.points[this.points.length-1][0]}start(){let e=O,t=Math.max(e.currentTime,this.when);this.when=t;let n=e.createGain();this.gain=n;let r=this.points[0][1];for(let e=1;e<this.points.length;e++){let[t,n]=this.points[e],[i,a]=this.points[e-1];if(t<=this.offset)r=n;else{r=a+(n-a)*(this.offset-i)/(t-i);break}}n.gain.setValueAtTime(r,t);for(let[e,r]of this.points)e>this.offset&&n.gain.linearRampToValueAtTime(r,t+e-this.offset);let i;if(this.buffer){let t=e.createBufferSource();t.buffer=this.buffer,i=t}else{let n=e.createOscillator();n.type=this.wave,n.frequency.setValueAtTime(this.frequency+(this.slide-this.frequency)*this.offset/this.duration,t),n.frequency.linearRampToValueAtTime(this.slide,t+this.duration-this.offset),i=n}this.source=i,i.connect(n).connect(this.bus.input),this.buffer?i.start(t,this.offset):i.start(t),i.onended=()=>{this.source===i&&this.destroy()},i.stop(t+this.duration-this.offset)}release(){this.source&&=(this.source.onended=null,this.source.stop(),this.source.disconnect(),void 0),this.gain?.disconnect(),this.gain=void 0}syncPause(){if(!(this.released||this.paused===this.bus.paused))if(this.paused=this.bus.paused,this.paused){let e=O.currentTime;this.offset=Math.min(this.duration,this.offset+Math.max(0,e-this.when)),this.delay=Math.max(0,this.when-e),this.release()}else this.offset>=this.duration?this.destroy():(this.when=O.currentTime+this.delay,this.start())}stop(){this.destroy()}destroy(){this.released||(this.released=!0,this.release(),this.buffer=void 0,this.detach())}},un={attack:.01,decay:.1,sustain:.3,release:.1},dn=class{bus=se.effects;get _ctx(){return D.audioContext}playTone(e){this.tone(e,this._ctx.currentTime)}tone(e,t){let n=e.bus??this.bus;if(n.destroyed)throw Error(`Cannot play on a destroyed AudioBus`);let r={...un,...e.envelope},i=Math.max(0,k(r.attack,`attack`)),a=Math.max(0,k(r.decay,`decay`)),o=Math.max(0,k(r.release,`release`)),s=Math.max(0,k(e.duration??.1,`duration`)),c=i+a+s+o;if(!c)return;let l=M(e.volume??.5),u=l*M(r.sustain),d=k(e.freq,`frequency`),f=k(e.slide??d,`slide`);new ln(n,[[0,0],[i,l],[i+a,u],[c-o,u],[c,0]],t,void 0,d,f,e.wave??`square`)}playNoise(e=.1,t=.5,n=this.bus){if(n.destroyed)throw Error(`Cannot play on a destroyed AudioBus`);if(e=Math.max(0,k(e,`duration`)),t=M(t),!e)return;let r=this._ctx,i=r.createBuffer(1,Math.ceil(r.sampleRate*e),r.sampleRate),a=i.getChannelData(0);for(let e=0;e<a.length;e++)a[e]=Math.random()*2-1;new ln(n,[[0,t],[e,0]],r.currentTime,i)}playSequence(e,t=.5){let n=this._ctx.currentTime;for(let r of e){let e=Math.max(0,k(r.delay??0,`delay`));this.tone({...r,volume:r.volume??t},n+e)}}preset={coin:(e=.5)=>{this.playSequence([{freq:987,duration:.05},{freq:1319,duration:.1,delay:.05}],e)},jump:(e=.5)=>{this.playTone({freq:200,duration:.15,slide:600,volume:e})},hit:(e=.5)=>{this.playNoise(.08,e*.6),this.playTone({freq:100,duration:.08,volume:e,envelope:{release:.05}})},explosion:(e=.5)=>{this.playNoise(.3,e),this.playTone({freq:120,duration:.3,slide:30,volume:e*.5,wave:`sawtooth`})},powerUp:(e=.5)=>{this.playSequence([{freq:440,duration:.06},{freq:554,duration:.06,delay:.06},{freq:659,duration:.06,delay:.12},{freq:880,duration:.12,delay:.18}],e)},laser:(e=.5)=>{this.playTone({freq:1200,duration:.1,slide:200,volume:e,wave:`sawtooth`})},select:(e=.5)=>{this.playTone({freq:660,duration:.06,volume:e,wave:`square`})},gameOver:(e=.5)=>{this.playSequence([{freq:494,duration:.15,wave:`triangle`},{freq:440,duration:.15,delay:.2,wave:`triangle`},{freq:370,duration:.15,delay:.4,wave:`triangle`},{freq:330,duration:.4,delay:.6,wave:`triangle`,envelope:{release:.3}}],e)},click:(e=.5)=>{this.playTone({freq:1e3,duration:.03,volume:e,envelope:{attack:.005,decay:.02,sustain:.1,release:.02}})},error:(e=.5)=>{this.playSequence([{freq:300,duration:.1,wave:`square`},{freq:200,duration:.15,delay:.12,wave:`square`}],e)},success:(e=.5)=>{this.playSequence([{freq:523,duration:.08},{freq:659,duration:.08,delay:.08},{freq:784,duration:.08,delay:.16},{freq:1047,duration:.2,delay:.24,wave:`triangle`}],e)},heal:(e=.5)=>{this.playSequence([{freq:440,duration:.1,wave:`triangle`},{freq:554,duration:.1,delay:.1,wave:`triangle`},{freq:659,duration:.15,delay:.2,wave:`triangle`,envelope:{release:.15}}],e)},dash:(e=.5)=>{this.playNoise(.03,e*.3),this.playTone({freq:150,duration:.05,slide:900,volume:e,wave:`square`,envelope:{attack:.003,decay:.015,sustain:.15,release:.015}})},drop:(e=.5)=>{this.playTone({freq:300,duration:.12,slide:50,volume:e,envelope:{attack:.005,decay:.05,sustain:.4,release:.04}}),this.playNoise(.05,e*.35)},alert:(e=.5)=>{this.playSequence([{freq:880,duration:.06,wave:`square`},{freq:880,duration:.06,delay:.1,wave:`square`}],e)},levelUp:(e=.5)=>{this.playSequence([{freq:523,duration:.06},{freq:587,duration:.06,delay:.06},{freq:659,duration:.06,delay:.12},{freq:784,duration:.06,delay:.18},{freq:880,duration:.06,delay:.24},{freq:1047,duration:.2,delay:.3,wave:`triangle`,envelope:{release:.2}}],e)},shoot:(e=.5)=>{this.playNoise(.03,e*.3),this.playTone({freq:600,duration:.05,slide:200,volume:e,envelope:{attack:.005,decay:.02,sustain:.2,release:.02}})},popup:(e=.5)=>{this.playSequence([{freq:523,duration:.06,wave:`triangle`},{freq:784,duration:.1,delay:.06,wave:`triangle`,envelope:{release:.1}}],e)},stomp:(e=.5)=>{this.playNoise(.03,e*.25),this.playTone({freq:220,duration:.06,slide:80,volume:e,wave:`square`,envelope:{attack:.005,decay:.03,sustain:.3,release:.03}})},lightning:(e=.5)=>{this.playNoise(.05,e*.7),this.playSequence([{freq:1200,duration:.05,slide:300,wave:`sawtooth`,envelope:{attack:.001,decay:.02,sustain:.6,release:.02}},{freq:900,duration:.04,slide:200,delay:.06,wave:`square`,envelope:{attack:.001,decay:.015,sustain:.5,release:.015}},{freq:1400,duration:.05,slide:400,delay:.11,wave:`sawtooth`,envelope:{attack:.001,decay:.02,sustain:.6,release:.02}},{freq:800,duration:.04,slide:180,delay:.16,wave:`square`,envelope:{attack:.001,decay:.015,sustain:.4,release:.015}},{freq:1e3,duration:.06,slide:250,delay:.2,wave:`sawtooth`,envelope:{attack:.002,decay:.025,sustain:.3,release:.025}}],e),this.playTone({freq:300,duration:.15,slide:80,volume:e*.4,wave:`square`,envelope:{attack:.005,decay:.05,sustain:.25,release:.08}})},shield:(e=.5)=>{this.playTone({freq:1400,duration:.04,slide:2200,volume:e*.6,wave:`sine`,envelope:{attack:.005,decay:.03,sustain:.2,release:.05}}),this.playTone({freq:600,duration:.06,volume:e*.3,wave:`triangle`,envelope:{attack:.01,decay:.04,sustain:.1,release:.04}})},swoosh:(e=.5)=>{this.playNoise(.08,e*.4),this.playTone({freq:300,duration:.08,slide:800,volume:e*.3,wave:`sawtooth`,envelope:{attack:.005,decay:.03,sustain:.1,release:.03}})}}},fn=class{_music=new Set;urls=new Set;_pools=new WeakMap;bus;ownsBus;destroyed=!1;constructor(e){this.bus=e??new ne,this.ownsBus=!e}get volume(){return this.bus.volume}set volume(e){this.bus.volume=e}play(e,t){let{bus:n=this.bus,volume:r=1,playbackRate:i=1,loop:a=!0,autoDestroy:o=!0,onEnd:s}=t??{};if(this.destroyed)throw Error(`MusicManager is destroyed`);if(M(r),k(i,`playbackRate`),n.destroyed)throw Error(`Cannot play on a destroyed AudioBus`);let c=this._pools.get(n);c||(c=new Map,this._pools.set(n,c));let l=c.get(e);if(l)l.loop=a,l.volume=r;else{l=new D(e,{bus:n,loop:a,volume:r,playbackRate:i}),c.set(e,l),this._music.add(l),this.urls.add(e);let t=l,o=c;l.onDispose=()=>{o.delete(e),this._music.delete(t)}}l.playbackRate=i;let u=s||o?e=>{try{s?.(e)}finally{o&&l.onEnd===u&&l.destroy(!1)}}:void 0;return l.onEnd=u,l.paused?l.resume():l.play(),l}pause(e){for(let t of this._music)t.url===e&&t.pause()}pauseAll(){for(let e of this._music)e.pause()}resume(e){for(let t of this._music)t.url===e&&t.resume()}resumeAll(){for(let e of this._music)e.resume()}stop(e){if(e)for(let t of this._music)t.url===e&&t.stop();else this.stopAll()}stopAll(){for(let e of this._music)e.stop()}setVolume(e,t){for(let n of this._music)n.url===e&&(n.volume=t)}setVolumeAll(e){for(let t of this._music)t.volume=e}fadeIn(e,t=1){for(let n of this._music)n.url===e&&n.fadeIn(t)}fadeInAll(e=1){for(let t of this._music)t.fadeIn(e)}fadeOut(e,t=1){for(let n of this._music)n.url===e&&n.fadeOut(t)}fadeOutAll(e=1){for(let t of this._music)t.fadeOut(e)}setLoop(e,t){for(let n of this._music)n.url===e&&(n.loop=t)}setLoopAll(e){for(let t of this._music)t.loop=e}setPlaybackRate(e,t){for(let n of this._music)n.url===e&&(n.playbackRate=t)}setPlaybackRateAll(e){for(let t of this._music)t.playbackRate=e}destroyAll(){for(let e of this._music)e.destroy(!1);for(let e of this.urls)P.unload(e,`sound`);this.urls.clear()}destroy(e){if(e!==void 0){for(let t of this._music)t.url===e&&t.destroy(!1);P.unload(e,`sound`),this.urls.delete(e);return}if(!this.destroyed){this.destroyed=!0;for(let e of this._music)e.destroy(!1);this.urls.clear(),this.ownsBus&&this.bus.destroy()}}},pn=new class{maxConcurrent=8;bus;ownsBus;destroyed=!1;pools=new WeakMap;sounds=new Set;urls=new Set;order=new WeakMap;sequence=0;constructor(e){this.bus=e??new ne,this.ownsBus=!e}get volume(){return this.bus.volume}set volume(e){this.bus.volume=e}play(e,t={}){let{bus:n=this.bus,volume:r=1,playbackRate:i=1,autoDestroy:a=!1,onEnd:o}=t;if(this.destroyed)throw Error(`SoundManager is destroyed`);if(M(r),k(i,`playbackRate`),n.destroyed)throw Error(`Cannot play on a destroyed AudioBus`);if(!Number.isFinite(this.maxConcurrent)||this.maxConcurrent<1)throw RangeError(`maxConcurrent must be at least 1`);let s=this.pools.get(n);s||(s=new Map,this.pools.set(n,s));let c=s.get(e);c||(c=[],s.set(e,c));let l,u,d=0;for(let e of c)e.isPlaying||e.paused?(d++,(!u||this.order.get(e)<this.order.get(u))&&(u=e)):l||=e;if(d>=Math.floor(this.maxConcurrent)&&u&&(l=u),l)l.stop(),l.loop=!1,l.volume=r,l.playbackRate=i;else{l=new D(e,{bus:n,volume:r,playbackRate:i}),c.push(l),this.sounds.add(l),this.urls.add(e);let t=l,a=c,o=s;l.onDispose=()=>{this.sounds.delete(t);let n=a.indexOf(t);n>=0&&a.splice(n,1),a.length||o.delete(e)}}let f=l;return l.onEnd=a?e=>{f.destroy(!1),o?.(e)}:o,this.order.set(l,++this.sequence),l.play(),l}stop(e){for(let t of this.sounds)t.url===e&&t.stop()}stopAll(){for(let e of this.sounds)e.stop()}destroyAll(){for(let e of this.sounds)e.destroy(!1);for(let e of this.urls)P.unload(e,`sound`);this.urls.clear()}destroy(e){if(e!==void 0){for(let t of this.sounds)t.url===e&&t.destroy(!1);P.unload(e,`sound`),this.urls.delete(e);return}if(!this.destroyed){this.destroyed=!0;for(let e of this.sounds)e.destroy(!1);this.urls.clear(),this.ownsBus&&this.bus.destroy()}}}(se.effects),mn=new fn(se.music);new dn;var hn=class{texture;tileWidth;tileHeight;columns;rows;tileCount;uvCache;_spacing;_margin;constructor(e){this.texture=e.texture,this.tileWidth=e.tileWidth,this.tileHeight=e.tileHeight,this._spacing=e.spacing??0,this._margin=e.margin??0;let t=this.texture.width,n=this.texture.height;this.columns=e.columns??Math.floor((t-this._margin+this._spacing)/(this.tileWidth+this._spacing)),this.rows=Math.floor((n-this._margin+this._spacing)/(this.tileHeight+this._spacing)),this.tileCount=this.columns*this.rows,this.uvCache=new Float32Array((this.tileCount+1)*8),this._buildUVCache()}getUVOffset(e){return e*8}_buildUVCache(){let{tileWidth:e,tileHeight:t,columns:n,_spacing:r,_margin:i}=this,a=this.texture.width,o=this.texture.height,s=this.uvCache;for(let c=1;c<=this.tileCount;c++){let l=c-1,u=l%n,d=Math.floor(l/n),f=i+u*(e+r),p=i+d*(t+r),m=f/a,h=p/o,g=(f+e)/a,_=(p+t)/o,v=c*8;s[v]=m,s[v+1]=h,s[v+2]=g,s[v+3]=h,s[v+4]=g,s[v+5]=_,s[v+6]=m,s[v+7]=_}}},gn=class{test(e){return e===`tiled`}async load(e,t){let n=await A.loadJson(e),r=b(e),{minX:i,minY:a,maxX:o,maxY:s}=this._calcBounds(n),c=o-i,l=s-a,u=n.tilewidth,d=n.tileheight,f=await this._loadTilesets(n.tilesets,r,t),p=[],m=[],h=new Map,g=0;for(let e of n.layers)if(e.type===`tilelayer`){if(!e.visible){g++;continue}m.push({name:e.name,type:`tilelayer`,order:g++});for(let t of f){let n=this._mergeChunks(e,c,l,i,a,t.firstgid,t.lastgid);this._hasData(n)&&p.push({name:e.name,data:n,tileset:t.tileset,animatedTiles:t.anims.length>0?t.anims:void 0})}}else e.type===`objectgroup`?(m.push({name:e.name,type:`objectgroup`,order:g++}),h.set(e.name,this._parseObjects(e))):m.push({name:e.name,type:`imagelayer`,order:g++});return{columns:c,rows:l,tileWidth:u,tileHeight:d,tileLayers:p,layerInfos:m,objectLayers:h}}_calcBounds(e){if(!e.infinite)return{minX:0,minY:0,maxX:e.width,maxY:e.height};let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e.layers)if(!(a.type!==`tilelayer`||!a.chunks))for(let e of a.chunks)t=Math.min(t,e.x),n=Math.min(n,e.y),r=Math.max(r,e.x+e.width),i=Math.max(i,e.y+e.height);return{minX:t,minY:n,maxX:r,maxY:i}}async _loadTilesets(e,t,n){let r=new Map,i=[];for(let a=0;a<e.length;a++){let o=e[a],s=e[a+1]?.firstgid??1/0,c=o.image.startsWith(`http`)?o.image:t+o.image,l=r.get(o.image);if(!l){if(l=await n.load(c.includes(`#`)?c:`${c}#nearest`,`image`),!l)continue;r.set(o.image,l)}let u=new hn({texture:l,tileWidth:o.tilewidth,tileHeight:o.tileheight,columns:o.columns,spacing:o.spacing,margin:o.margin}),d=this._parseAnimations(o);i.push({tileset:u,firstgid:o.firstgid,lastgid:s,anims:d})}return i}_hasData(e){for(let t=0;t<e.length;t++)if(e[t]!==0)return!0;return!1}_mergeChunks(e,t,n,r,i,a,o){let s=new Uint32Array(t*n),c=e.chunks?void 0:e.data;if(c){for(let e=0;e<c.length;e++){let t=c[e];if(t===0)continue;let n=t&3758096384,r=t&536870911;r<a||r>=o||(s[e]=r-a+1|n)}return s}if(!e.chunks)return s;for(let c of e.chunks)for(let e=0;e<c.height;e++)for(let l=0;l<c.width;l++){let u=c.data[e*c.width+l];if(u===0)continue;let d=u&3758096384,f=u&536870911;if(f<a||f>=o)continue;let p=f-a+1,m=c.x-r+l,h=c.y-i+e;m>=0&&m<t&&h>=0&&h<n&&(s[h*t+m]=p|d)}return s}_parseObjects(e){return e.objects?e.objects.map(e=>{let t={};if(e.properties)for(let n of e.properties)t[n.name]=n.value;return{name:e.name,type:e.type,x:e.x,y:e.y,width:e.width,height:e.height,properties:t}}):[]}_parseAnimations(e){if(!e.tiles)return[];let t=[];for(let n of e.tiles)!n.animation||n.animation.length===0||t.push({tileId:n.id+1,frames:n.animation.map(e=>e.tileid+1),duration:n.animation.map(e=>e.duration/1e3)});return t}},_n=class{node;pipeline=`batch`;vertexSize=0;indexSize=0;colorSize=0;uvSize=0;maxVisibleTiles=0;vertexStart=0;indexStart=0;colorStart=0;uvStart=0;batch;textureId=0;_colX;_rowY;_uvDirty=!1;_lastActiveTileCount=0;_packedGroup;_packedGen=-1;constructor(e,t,n){this.node=e,this.resize(t,n)}resize(e,t){let n=e*t;this.maxVisibleTiles=n,this.vertexSize=n*8,this.indexSize=n*6,this.colorSize=n*4,this.uvSize=n*16,this._colX=new Float32Array(e+1),this._rowY=new Float32Array(t+1)}packVertex(e){let t=this.batch.batchGroup,n=t!==this._packedGroup||t.resetCount!==this._packedGen;n&&(this._packedGroup=t,this._packedGen=t.resetCount,this._uvDirty=!0,this._lastActiveTileCount=this.maxVisibleTiles),this.node._updateViewRange(t.camera)&&(this._uvDirty=!0);let{f32Data:r}=e,{pp:i}=this.node,{a,d:o,tx:s,ty:c}=i.worldMatrix,{tileWidth:l,tileHeight:u,columns:d,data:f,viewRange:p}=i,{startCol:m,startRow:h,endCol:g,endRow:_}=p,v=g-m+1,y=_-h+1;this._colX.length<=v&&(this._colX=new Float32Array(v+1)),this._rowY.length<=y&&(this._rowY=new Float32Array(y+1));let b=this._colX,x=this._rowY;for(let e=0;e<=v;e++)b[e]=a*((m+e)*l)+s;for(let e=0;e<=y;e++)x[e]=o*((h+e)*u)+c;let S=this.vertexStart,C=0;for(let e=0;e<y;e++){let t=x[e],n=x[e+1];for(let i=0;i<v;i++){if(!(f[(h+e)*d+(m+i)]&536870911))r[S]=r[S+2]=r[S+4]=r[S+6]=0,r[S+1]=r[S+3]=r[S+5]=r[S+7]=0;else{let e=b[i],a=b[i+1];r[S]=e,r[S+1]=t,r[S+2]=a,r[S+3]=t,r[S+4]=a,r[S+5]=n,r[S+6]=e,r[S+7]=n}S+=8,C++}}if(C<this._lastActiveTileCount&&r.fill(0,S,this.vertexStart+this.maxVisibleTiles*8),this._lastActiveTileCount=C,!n&&this._uvDirty){let e=t.uvBuffer;this.packUV(e),e.markDirtyRange(this.uvStart,this.uvStart+this.uvSize)}}packUV(e){if(!this._uvDirty)return;this._uvDirty=!1;let{f32Data:t,u32Data:n}=e,{pp:r}=this.node,{data:i,viewRange:a,columns:o,tileset:s,animReplacementTable:c}=r,{startCol:l,startRow:u,endCol:d,endRow:f}=a,p=s.uvCache,m=this.textureId,h=this.uvStart;for(let e=u;e<=f;e++)for(let r=l;r<=d;r++){let a=i[e*o+r],s=a&3758096384,l=a&536870911;if(l=c[l],l===0){t[h]=0,t[h+1]=0,n[h+2]=m,n[h+3]=0,t[h+4]=0,t[h+5]=0,n[h+6]=m,n[h+7]=0,t[h+8]=0,t[h+9]=0,n[h+10]=m,n[h+11]=0,t[h+12]=0,t[h+13]=0,n[h+14]=m,n[h+15]=0,h+=16;continue}let u=l*8,d=p[u],f=p[u+1],g=p[u+2],_=p[u+3],v=p[u+4],y=p[u+5],b=p[u+6],x=p[u+7];if(s){if(s&2147483648){let e=d;d=g,g=e,e=b,b=v,v=e}if(s&1073741824){let e=f;f=x,x=e,e=_,_=y,y=e}if(s&536870912){let e=d,t=f;d=b,f=x,b=v,x=y,v=g,y=_,g=e,_=t}}t[h]=d,t[h+1]=f,n[h+2]=m,n[h+3]=0,t[h+4]=g,t[h+5]=_,n[h+6]=m,n[h+7]=0,t[h+8]=v,t[h+9]=y,n[h+10]=m,n[h+11]=0,t[h+12]=b,t[h+13]=x,n[h+14]=m,n[h+15]=0,h+=16}}packColor(e){let t=this.node.pp.tint.abgr;e.u32Data.fill(t,this.colorStart,this.colorStart+this.colorSize)}packIndex(e){let t=this.vertexStart*.5,{data:n}=e,r=this.indexStart;for(let e=0;e<this.maxVisibleTiles;e++){let i=t+e*4;n[r]=i,n[r+1]=i+1,n[r+2]=i+2,n[r+3]=i,n[r+4]=i+2,n[r+5]=i+3,r+=6}}},vn=new g;function yn(e,t,n){let r=t.map((e,t)=>Math.max(.001,(typeof n==`number`?n:n[t])||0)),i=0;for(let e of r)i+=e;return{tileId:e,frames:t,durations:r,total:i,elapsed:0,frameIdx:0}}var bn=class extends e{renderObject;_anims=[];_animTimer;constructor(e){super();let t=this.pp;t.columns=e.columns,t.rows=e.rows,t.tileWidth=e.tileWidth,t.tileHeight=e.tileHeight,t.data=e.data instanceof Uint32Array?e.data:new Uint32Array(e.data),t.tileset=e.tileset,t.viewRange={startCol:0,startRow:0,endCol:0,endRow:0};let n=e.minScale??1,r=e.viewWidth??960,i=e.viewHeight??640,a=Math.ceil(r/(e.tileWidth*n))+3,o=Math.ceil(i/(e.tileHeight*n))+3;t.maxVisibleTiles=a*o;let s=t.tileset.tileCount,c=new Uint16Array(s+1);for(let e=0;e<=s;e++)c[e]=e;if(t.animReplacementTable=c,this.renderObject=new _n(this,a,o),e.animatedTiles)for(let t of e.animatedTiles)this._anims.push(yn(t.tileId,t.frames,t.duration)),c[t.tileId]=t.frames[0];this._anims.length>0&&(this.on(l.addedToStage,this._$startAnim,this),this.on(l.removedFromStage,this._$stopAnim,this)),this.setProps(e),this.pp.dirty|=N.child}get texture(){let e=this.pp,t=e.pendingGrow;return t&&(e.pendingGrow=void 0,this.renderObject.resize(t.cols,t.rows),e.maxVisibleTiles=this.renderObject.maxVisibleTiles),e.tileset.texture}get mapWidth(){return this.pp.columns*this.pp.tileWidth}get mapHeight(){return this.pp.rows*this.pp.tileHeight}getTile(e,t){return this.pp.data[t*this.pp.columns+e]}setTile(e,t,n){this.pp.data[t*this.pp.columns+e]=n,this.renderObject._uvDirty=!0,this.markDirty(N.texture),this.markDirty(N.size)}setData(e){this.pp.data=e instanceof Uint32Array?e:new Uint32Array(e),this.renderObject._uvDirty=!0,this.markDirty(N.texture),this.markDirty(N.size)}fill(e,t,n,r,i){let{data:a,columns:o}=this.pp;for(let s=t;s<=r;s++){let t=s*o;for(let r=e;r<=n;r++)a[t+r]=i}this.renderObject._uvDirty=!0,this.markDirty(N.texture),this.markDirty(N.size)}worldToTile(e,t){let n=this.toLocal({x:e,y:t});return{col:Math.floor(n.x/this.pp.tileWidth),row:Math.floor(n.y/this.pp.tileHeight)}}tileToWorld(e,t){return this.toGlobal({x:e*this.pp.tileWidth,y:t*this.pp.tileHeight})}_updateViewRange(e){let t=this.pp,{tileWidth:n,tileHeight:r,columns:i,rows:a,maxVisibleTiles:o}=t,s=t.worldMatrix,c=Math.abs(s.a),l=Math.abs(s.d),u=0,d=0,f=t.stage?.width??960,p=t.stage?.height??640;if(e.width>0){let t=e.getViewRect(vn);u=t.x,d=t.y,f=t.width,p=t.height}let m=(u-s.tx)/s.a,h=(u+f-s.tx)/s.a,g=(d-s.ty)/s.d,_=(d+p-s.ty)/s.d,v=Math.min(m,h),y=Math.min(g,_),b=f/c,x=p/l,S=Math.max(0,Math.floor(v/n)-1),C=Math.max(0,Math.floor(y/r)-1),w=Math.min(i-1,Math.ceil((v+b)/n)),T=Math.min(a-1,Math.ceil((y+x)/r)),E=w-S+1,D=T-C+1;if(E>0&&D>0&&E*D>o){t.pendingGrow={cols:Math.min(i,E+(E>>2)+2),rows:Math.min(a,D+(D>>2)+2)},this._$dirtyParent(N.child);let e=Math.max(1,Math.floor(Math.sqrt(o*E/D)));w=Math.min(w,S+e-1),T=Math.min(T,C+Math.floor(o/e)-1)}let O=t.viewRange;return O.startCol!==S||O.startRow!==C||O.endCol!==w||O.endRow!==T?(O.startCol=S,O.startRow=C,O.endCol=w,O.endRow=T,!0):!1}_$startAnim(){this._animTimer?.clearTimer(this._$tickAnim,this),this._animTimer=this._$animClock(),this._animTimer?.onFrame(this._$tickAnim,this)}_$stopAnim(){this._animTimer?.clearTimer(this._$tickAnim,this),this._animTimer=void 0}_$tickAnim(){this.onUpdate(this._animTimer.delta)}onUpdate(e){if(this._anims.length===0)return;let t=!1,n=this.pp.animReplacementTable;for(let r=0;r<this._anims.length;r++){let i=this._anims[r],{durations:a}=i,o=i.frameIdx,s=i.elapsed+e;if(s>=a[o]){for(s>=i.total&&(s%=i.total);s>=a[o];)s-=a[o],o=(o+1)%a.length;o!==i.frameIdx&&(i.frameIdx=o,n[i.tileId]=i.frames[o],t=!0)}i.elapsed=s}t&&(this.renderObject._uvDirty=!0,this.markDirty(N.texture))}addAnimatedTile(e,t,n){this._anims.push(yn(e,t,n)),this.pp.animReplacementTable[e]=t[0]}_customLocalBounds(e){e.addFrame(0,0,this.mapWidth,this.mapHeight)}},xn=class extends e{constructor(e){super();let t=this.pp;t.url=``,t.columns=0,t.rows=0,t.tileWidth=0,t.tileHeight=0,t.layerInfos=[],t.objectLayers=new Map,t.layerNodes=new Map,this.setProps(e)}get url(){return this.pp.url}set url(e){this.pp.url!==e&&this._load(e)}get columns(){return this.pp.columns}get rows(){return this.pp.rows}get tileWidth(){return this.pp.tileWidth}get tileHeight(){return this.pp.tileHeight}get mapWidth(){return this.pp.columns*this.pp.tileWidth}get mapHeight(){return this.pp.rows*this.pp.tileHeight}addAboveLayer(e,t){let n=this._getLayerOrder(e);return n===-1?(this.addChild(t),this):(t.zIndex=n+.5,this.addChild(t),this)}addBelowLayer(e,t){let n=this._getLayerOrder(e);return n===-1?(this.addChild(t),this):(t.zIndex=n-.5,this.addChild(t),this)}getObjects(e){return this.pp.objectLayers.get(e)??[]}setLayerVisible(e,t){let n=this.pp.layerNodes.get(e);if(n)for(let e of n)e.visible=t}getTile(e,t,n){let r=this.pp.layerNodes.get(e);if(!r)return 0;for(let e of r){let r=e.getTile(t,n);if(r!==0)return r}return 0}setTile(e,t,n,r){let i=this.pp.layerNodes.get(e);!i||i.length===0||i[0].setTile(t,n,r)}worldToTile(e,t){return{col:Math.floor(e/this.pp.tileWidth),row:Math.floor(t/this.pp.tileHeight)}}tileToWorld(e,t){return{x:e*this.pp.tileWidth,y:t*this.pp.tileHeight}}_customLocalBounds(e){e.addFrame(0,0,this.mapWidth,this.mapHeight)}async _load(e){let t=this.pp;t.url=e;let n=await P.load(e,`tiled`);this.destroyed||!n||t.url!==e||(this._buildFromResource(n),this.emit(l.loaded))}_buildFromResource(e){let t=this.pp;for(let e of t.layerNodes.values())for(let t of e)t.destroy();t.columns=e.columns,t.rows=e.rows,t.tileWidth=e.tileWidth,t.tileHeight=e.tileHeight,t.layerInfos=e.layerInfos,t.objectLayers=e.objectLayers,t.layerNodes=new Map;for(let n of e.tileLayers){let r=this._getLayerOrder(n.name),i=new bn({columns:e.columns,rows:e.rows,tileWidth:e.tileWidth,tileHeight:e.tileHeight,data:n.data.slice(),tileset:n.tileset,animatedTiles:n.animatedTiles});i.label=n.name,i.zIndex=r>=0?r:0,this.addChild(i);let a=t.layerNodes.get(n.name);a?a.push(i):t.layerNodes.set(n.name,[i])}}_getLayerOrder(e){let t=this.pp.layerInfos;for(let n=0;n<t.length;n++)if(t[n].name===e)return t[n].order;return-1}};xn=m([p(`Tilemap`),j(`design:paramtypes`,[Object])],xn),ee.regLoader(new gn);export{tn as a,Dt as c,ke as d,Oe as f,ue as g,R as h,an as i,ut as l,z as m,pn as n,Xt as o,Ee as p,cn as r,Nt as s,mn as t,Re as u};