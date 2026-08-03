import{n as ug}from"./router.2W7FzLmj.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qu="169",hg=0,Yh=1,fg=2,Zd=1,dg=2,zi=3,Mr=0,Tn=1,Cn=2,qi=0,Is=1,$o=2,qh=3,$h=4,pg=5,Gr=100,mg=101,gg=102,_g=103,vg=104,xg=200,Mg=201,Sg=202,yg=203,Gc=204,Vc=205,wg=206,bg=207,Tg=208,Eg=209,Ag=210,Cg=211,Rg=212,Pg=213,Dg=214,Wc=0,Xc=1,Yc=2,Ws=3,qc=4,$c=5,Kc=6,Zc=7,jd=0,Lg=1,Ig=2,gr=0,Jd=1,Qd=2,ep=3,eh=4,Ug=5,tp=6,np=7,ip=300,Xs=301,Ys=302,jc=303,Jc=304,Il=306,_l=1e3,cr=1001,Qc=1002,Qt=1003,Ng=1004,da=1005,Rn=1006,ql=1007,Wr=1008,Li=1009,rp=1010,sp=1011,Ko=1012,th=1013,Sr=1014,Ci=1015,xi=1016,nh=1017,ih=1018,qs=1020,op=35902,ap=1021,lp=1022,_i=1023,cp=1024,up=1025,Us=1026,$s=1027,Ul=1028,rh=1029,hp=1030,sh=1031,oh=1033,Qa=33776,el=33777,tl=33778,nl=33779,eu=35840,tu=35841,nu=35842,iu=35843,ru=36196,su=37492,ou=37496,au=37808,lu=37809,cu=37810,uu=37811,hu=37812,fu=37813,du=37814,pu=37815,mu=37816,gu=37817,_u=37818,vu=37819,xu=37820,Mu=37821,il=36492,Su=36494,yu=36495,fp=36283,wu=36284,bu=36285,Tu=36286,Fg=3200,Og=3201,Bg=0,kg=1,lr="",ri="srgb",Ar="srgb-linear",ah="display-p3",Nl="display-p3-linear",vl="linear",St="srgb",xl="rec709",Ml="p3",os=7680,Kh=519,zg=512,Hg=513,Gg=514,dp=515,Vg=516,Wg=517,Xg=518,Yg=519,Zh=35044,jh=35048,Jh="300 es",Wi=2e3,Sl=2001;class ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qh=1234567;const Lo=Math.PI/180,Zo=180/Math.PI;function so(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function wn(r,e,t){return Math.max(e,Math.min(t,r))}function lh(r,e){return(r%e+e)%e}function qg(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function $g(r,e,t){return r!==e?(t-r)/(e-r):0}function Io(r,e,t){return(1-t)*r+t*e}function Kg(r,e,t,n){return Io(r,e,1-Math.exp(-t*n))}function Zg(r,e=1){return e-Math.abs(lh(r,e*2)-e)}function jg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Jg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Qg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function e_(r,e){return r+Math.random()*(e-r)}function t_(r){return r*(.5-Math.random())}function n_(r){r!==void 0&&(Qh=r);let e=Qh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function i_(r){return r*Lo}function r_(r){return r*Zo}function s_(r){return(r&r-1)===0&&r!==0}function o_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function a_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function l_(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Es(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xn={DEG2RAD:Lo,RAD2DEG:Zo,generateUUID:so,clamp:wn,euclideanModulo:lh,mapLinear:qg,inverseLerp:$g,lerp:Io,damp:Kg,pingpong:Zg,smoothstep:jg,smootherstep:Jg,randInt:Qg,randFloat:e_,randFloatSpread:t_,seededRandom:n_,degToRad:i_,radToDeg:r_,isPowerOfTwo:s_,ceilPowerOfTwo:o_,floorPowerOfTwo:a_,setQuaternionFromProperEuler:l_,normalize:gn,denormalize:Es};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],x=i[1],M=i[4],S=i[7],A=i[2],E=i[5],y=i[8];return s[0]=o*_+a*x+l*A,s[3]=o*p+a*M+l*E,s[6]=o*m+a*S+l*y,s[1]=c*_+u*x+h*A,s[4]=c*p+u*M+h*E,s[7]=c*m+u*S+h*y,s[2]=f*_+d*x+g*A,s[5]=f*p+d*M+g*E,s[8]=f*m+d*S+g*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($l.makeScale(e,t)),this}rotate(e){return this.premultiply($l.makeRotation(-e)),this}translate(e,t){return this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new Ze;function pp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function jo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function c_(){const r=jo("canvas");return r.style.display="block",r}const ef={};function rl(r){r in ef||(ef[r]=!0,console.warn(r))}function u_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function h_(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function f_(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tf=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nf=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),uo={[Ar]:{transfer:vl,primaries:xl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[ri]:{transfer:St,primaries:xl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Nl]:{transfer:vl,primaries:Ml,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(nf),fromReference:r=>r.applyMatrix3(tf)},[ah]:{transfer:St,primaries:Ml,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(nf),fromReference:r=>r.applyMatrix3(tf).convertLinearToSRGB()}},d_=new Set([Ar,Nl]),ut={enabled:!0,_workingColorSpace:Ar,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!d_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=uo[e].toReference,i=uo[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return uo[r].primaries},getTransfer:function(r){return r===lr?vl:uo[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(uo[e].luminanceCoefficients)}};function Ns(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Kl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let as;class p_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{as===void 0&&(as=jo("canvas")),as.width=e.width,as.height=e.height;const n=as.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=as}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ns(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ns(t[n]/255)*255):t[n]=Ns(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let m_=0;class mp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Zl(i[o].image)):s.push(Zl(i[o]))}else s=Zl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Zl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?p_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g_=0;class dn extends ro{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=cr,i=cr,s=Rn,o=Wr,a=_i,l=Li,c=dn.DEFAULT_ANISOTROPY,u=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=so(),this.name="",this.source=new mp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ip)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _l:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case Qc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _l:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case Qc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=ip;dn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,n=0,i=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(d+1)/2,A=(m+1)/2,E=(u+f)/4,y=(h+_)/4,C=(g+p)/4;return M>S&&M>A?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=E/n,s=y/n):S>A?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=E/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=y/s,i=C/s),this.set(n,i,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class __ extends ro{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends __{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gp extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class v_ extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-a;const m=l*f+c*d+u*g+h*_,x=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const A=Math.sqrt(M),E=Math.atan2(A,m*x);p=Math.sin(p*E)/A,a=Math.sin(a*E)/A}const S=a*x;if(l=l*p+f*S,c=c*p+d*S,u=u*p+g*S,h=h*p+_*S,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jl.copy(this).projectOnVector(e),this.sub(jl)}reflect(e){return this.sub(jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jl=new H,rf=new yr;class is{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fi):fi.fromBufferAttribute(s,o),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),ma.subVectors(this.max,ho),ls.subVectors(e.a,ho),cs.subVectors(e.b,ho),us.subVectors(e.c,ho),er.subVectors(cs,ls),tr.subVectors(us,cs),Rr.subVectors(ls,us);let t=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Rr.z,Rr.y,er.z,0,-er.x,tr.z,0,-tr.x,Rr.z,0,-Rr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Rr.y,Rr.x,0];return!Jl(t,ls,cs,us,ma)||(t=[1,0,0,0,1,0,0,0,1],!Jl(t,ls,cs,us,ma))?!1:(ga.crossVectors(er,tr),t=[ga.x,ga.y,ga.z],Jl(t,ls,cs,us,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new H,new H,new H,new H,new H,new H,new H,new H],fi=new H,pa=new is,ls=new H,cs=new H,us=new H,er=new H,tr=new H,Rr=new H,ho=new H,ma=new H,ga=new H,Pr=new H;function Jl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Pr.fromArray(r,s);const a=i.x*Math.abs(Pr.x)+i.y*Math.abs(Pr.y)+i.z*Math.abs(Pr.z),l=e.dot(Pr),c=t.dot(Pr),u=n.dot(Pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const x_=new is,fo=new H,Ql=new H;class oo{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):x_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const t=fo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(Ql)),this.expandByPoint(fo.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new H,ec=new H,_a=new H,nr=new H,tc=new H,va=new H,nc=new H;class _p{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ec.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),nr.copy(this.origin).sub(ec);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_a),a=nr.dot(this.direction),l=-nr.dot(_a),c=nr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ec).addScaledVector(_a,f),d}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const n=Ni.dot(this.direction),i=Ni.dot(Ni)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,i,s){tc.subVectors(t,e),va.subVectors(n,e),nc.crossVectors(tc,va);let o=this.direction.dot(nc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nr.subVectors(this.origin,e);const l=a*this.direction.dot(va.crossVectors(nr,va));if(l<0)return null;const c=a*this.direction.dot(tc.cross(nr));if(c<0||l+c>o)return null;const u=-a*nr.dot(nc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,p){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,p)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M_,e,S_)}lookAt(e,t,n){const i=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),ir.crossVectors(n,kn),ir.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),ir.crossVectors(n,kn)),ir.normalize(),xa.crossVectors(kn,ir),i[0]=ir.x,i[4]=xa.x,i[8]=kn.x,i[1]=ir.y,i[5]=xa.y,i[9]=kn.y,i[2]=ir.z,i[6]=xa.z,i[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],M=n[7],S=n[11],A=n[15],E=i[0],y=i[4],C=i[8],L=i[12],v=i[1],b=i[5],U=i[9],I=i[13],N=i[2],X=i[6],O=i[10],q=i[14],G=i[3],ne=i[7],P=i[11],ie=i[15];return s[0]=o*E+a*v+l*N+c*G,s[4]=o*y+a*b+l*X+c*ne,s[8]=o*C+a*U+l*O+c*P,s[12]=o*L+a*I+l*q+c*ie,s[1]=u*E+h*v+f*N+d*G,s[5]=u*y+h*b+f*X+d*ne,s[9]=u*C+h*U+f*O+d*P,s[13]=u*L+h*I+f*q+d*ie,s[2]=g*E+_*v+p*N+m*G,s[6]=g*y+_*b+p*X+m*ne,s[10]=g*C+_*U+p*O+m*P,s[14]=g*L+_*I+p*q+m*ie,s[3]=x*E+M*v+S*N+A*G,s[7]=x*y+M*b+S*X+A*ne,s[11]=x*C+M*U+S*O+A*P,s[15]=x*L+M*I+S*q+A*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],x=h*p*c-_*f*c+_*l*d-a*p*d-h*l*m+a*f*m,M=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,S=u*_*c-g*h*c+g*a*d-o*_*d-u*a*m+o*h*m,A=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,E=t*x+n*M+i*S+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/E;return e[0]=x*y,e[1]=(_*f*s-h*p*s-_*i*d+n*p*d+h*i*m-n*f*m)*y,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*y,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*y,e[4]=M*y,e[5]=(u*p*s-g*f*s+g*i*d-t*p*d-u*i*m+t*f*m)*y,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*m-t*l*m)*y,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*y,e[8]=S*y,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*m-t*h*m)*y,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*y,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*y,e[12]=A*y,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*p+t*h*p)*y,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*y,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*y,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,p=o*h,m=a*h,x=l*c,M=l*u,S=l*h,A=n.x,E=n.y,y=n.z;return i[0]=(1-(_+m))*A,i[1]=(d+S)*A,i[2]=(g-M)*A,i[3]=0,i[4]=(d-S)*E,i[5]=(1-(f+m))*E,i[6]=(p+x)*E,i[7]=0,i[8]=(g+M)*y,i[9]=(p-x)*y,i[10]=(1-(f+_))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=hs.set(i[0],i[1],i[2]).length();const o=hs.set(i[4],i[5],i[6]).length(),a=hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],di.copy(this);const c=1/s,u=1/o,h=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=h,di.elements[9]*=h,di.elements[10]*=h,t.setFromRotationMatrix(di),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Wi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(a===Wi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Sl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Wi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let g,_;if(a===Wi)g=(o+s)*h,_=-2*h;else if(a===Sl)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hs=new H,di=new dt,M_=new H(0,0,0),S_=new H(1,1,1),ir=new H,xa=new H,kn=new H,sf=new dt,of=new yr;class qn{constructor(e=0,t=0,n=0,i=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(wn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return of.setFromEuler(this),this.setFromQuaternion(of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class vp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y_=0;const af=new H,fs=new yr,Fi=new dt,Ma=new H,po=new H,w_=new H,b_=new yr,lf=new H(1,0,0),cf=new H(0,1,0),uf=new H(0,0,1),hf={type:"added"},T_={type:"removed"},ds={type:"childadded",child:null},ic={type:"childremoved",child:null};class Dn extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new H,t=new qn,n=new yr,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ze}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(lf,e)}rotateY(e){return this.rotateOnAxis(cf,e)}rotateZ(e){return this.rotateOnAxis(uf,e)}translateOnAxis(e,t){return af.copy(e).applyQuaternion(this.quaternion),this.position.add(af.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lf,e)}translateY(e){return this.translateOnAxis(cf,e)}translateZ(e){return this.translateOnAxis(uf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ma.copy(e):Ma.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(po,Ma,this.up):Fi.lookAt(Ma,po,this.up),this.quaternion.setFromRotationMatrix(Fi),i&&(Fi.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(Fi),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hf),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T_),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hf),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,w_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,b_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Dn.DEFAULT_UP=new H(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new H,Oi=new H,rc=new H,Bi=new H,ps=new H,ms=new H,ff=new H,sc=new H,oc=new H,ac=new H,lc=new zt,cc=new zt,uc=new zt;class gi{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pi.subVectors(e,t),i.cross(pi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pi.subVectors(i,t),Oi.subVectors(n,t),rc.subVectors(e,t);const o=pi.dot(pi),a=pi.dot(Oi),l=pi.dot(rc),c=Oi.dot(Oi),u=Oi.dot(rc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return lc.setScalar(0),cc.setScalar(0),uc.setScalar(0),lc.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,n),uc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(lc,s.x),o.addScaledVector(cc,s.y),o.addScaledVector(uc,s.z),o}static isFrontFacing(e,t,n,i){return pi.subVectors(n,t),Oi.subVectors(e,t),pi.cross(Oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),pi.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return gi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ps.subVectors(i,n),ms.subVectors(s,n),sc.subVectors(e,n);const l=ps.dot(sc),c=ms.dot(sc);if(l<=0&&c<=0)return t.copy(n);oc.subVectors(e,i);const u=ps.dot(oc),h=ms.dot(oc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ps,o);ac.subVectors(e,s);const d=ps.dot(ac),g=ms.dot(ac);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ms,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return ff.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(ff,a);const m=1/(p+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function hc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=lh(e,1),t=wn(t,0,1),n=wn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=hc(o,s,e+1/3),this.g=hc(o,s,e),this.b=hc(o,s,e-1/3)}return ut.toWorkingColorSpace(this,i),this}setStyle(e,t=ri){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ri){const n=xp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=Kl(e.r),this.g=Kl(e.g),this.b=Kl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return ut.fromWorkingColorSpace(ln.copy(this),e),Math.round(wn(ln.r*255,0,255))*65536+Math.round(wn(ln.g*255,0,255))*256+Math.round(wn(ln.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(ln.copy(this),t);const n=ln.r,i=ln.g,s=ln.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=ri){ut.fromWorkingColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,i=ln.b;return e!==ri?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(Sa);const n=Io(rr.h,Sa.h,t),i=Io(rr.s,Sa.s,t),s=Io(rr.l,Sa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new He;He.NAMES=xp;let E_=0;class ua extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Is,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Vc,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(n.blending=this.blending),this.side!==Mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==Vc&&(n.blendDst=this.blendDst),this.blendEquation!==Gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fl extends ua{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new H,ya=new Xe;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zh,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zh&&(e.usage=this.usage),e}}class Mp extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sp extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let A_=0;const ti=new dt,fc=new Dn,gs=new H,zn=new is,mo=new is,Zt=new H;class on extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pp(e)?Sp:Mp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return fc.lookAt(e),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(zn.min,mo.min),zn.expandByPoint(Zt),Zt.addVectors(zn.max,mo.max),zn.expandByPoint(Zt)):(zn.expandByPoint(mo.min),zn.expandByPoint(mo.max))}zn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Zt.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),Zt.add(gs)),i=Math.max(i,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new H,l[C]=new H;const c=new H,u=new H,h=new H,f=new Xe,d=new Xe,g=new Xe,_=new H,p=new H;function m(C,L,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,L),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,L),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const b=1/(d.x*g.y-g.x*d.y);isFinite(b)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(b),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(b),a[C].add(_),a[L].add(_),a[v].add(_),l[C].add(p),l[L].add(p),l[v].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,L=x.length;C<L;++C){const v=x[C],b=v.start,U=v.count;for(let I=b,N=b+U;I<N;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new H,S=new H,A=new H,E=new H;function y(C){A.fromBufferAttribute(i,C),E.copy(A);const L=a[C];M.copy(L),M.sub(A.multiplyScalar(A.dot(L))).normalize(),S.crossVectors(E,L);const b=S.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,b)}for(let C=0,L=x.length;C<L;++C){const v=x[C],b=v.start,U=v.count;for(let I=b,N=b+U;I<N;I+=3)y(e.getX(I+0)),y(e.getX(I+1)),y(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new Ht(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const df=new dt,Dr=new _p,wa=new oo,pf=new H,ba=new H,Ta=new H,Ea=new H,dc=new H,Aa=new H,mf=new H,Ca=new H;class It extends Dn{constructor(e=new on,t=new Fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Aa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(dc.fromBufferAttribute(h,e),o?Aa.addScaledVector(dc,u):Aa.addScaledVector(dc.sub(t),u))}t.add(Aa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(wa.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(wa,pf)===null||Dr.origin.distanceToSquared(pf)>(e.far-e.near)**2))&&(df.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(df),!(n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=x,A=M;S<A;S+=3){const E=a.getX(S),y=a.getX(S+1),C=a.getX(S+2);i=Ra(this,m,e,n,c,u,h,E,y,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=a.getX(p),M=a.getX(p+1),S=a.getX(p+2);i=Ra(this,o,e,n,c,u,h,x,M,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=x,A=M;S<A;S+=3){const E=S,y=S+1,C=S+2;i=Ra(this,m,e,n,c,u,h,E,y,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=p,M=p+1,S=p+2;i=Ra(this,o,e,n,c,u,h,x,M,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function C_(r,e,t,n,i,s,o,a){let l;if(e.side===Tn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Mr,a),l===null)return null;Ca.copy(a),Ca.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ca);return c<t.near||c>t.far?null:{distance:c,point:Ca.clone(),object:r}}function Ra(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ba),r.getVertexPosition(l,Ta),r.getVertexPosition(c,Ea);const u=C_(r,e,t,n,ba,Ta,Ea,mf);if(u){const h=new H;gi.getBarycoord(mf,ba,Ta,Ea,h),i&&(u.uv=gi.getInterpolatedAttribute(i,a,l,c,h,new Xe)),s&&(u.uv1=gi.getInterpolatedAttribute(s,a,l,c,h,new Xe)),o&&(u.normal=gi.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};gi.getNormal(ba,Ta,Ea,f.normal),u.face=f,u.barycoord=h}return u}class ao extends on{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(h,2));function g(_,p,m,x,M,S,A,E,y,C,L){const v=S/y,b=A/C,U=S/2,I=A/2,N=E/2,X=y+1,O=C+1;let q=0,G=0;const ne=new H;for(let P=0;P<O;P++){const ie=P*b-I;for(let Ae=0;Ae<X;Ae++){const Ue=Ae*v-U;ne[_]=Ue*x,ne[p]=ie*M,ne[m]=N,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[p]=0,ne[m]=E>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Ae/y),h.push(1-P/C),q+=1}}for(let P=0;P<C;P++)for(let ie=0;ie<y;ie++){const Ae=f+ie+X*P,Ue=f+ie+X*(P+1),$=f+(ie+1)+X*(P+1),Q=f+(ie+1)+X*P;l.push(Ae,Ue,Q),l.push(Ue,$,Q),G+=6}a.addGroup(d,G,L),d+=G,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function vn(r){const e={};for(let t=0;t<r.length;t++){const n=Ks(r[t]);for(const i in n)e[i]=n[i]}return e}function R_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function yp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Jo={clone:Ks,merge:vn};var P_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yt extends ua{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P_,this.fragmentShader=D_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=R_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wp extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new H,gf=new Xe,_f=new Xe;class si extends wp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,t){return this.getViewBounds(e,gf,_f),t.subVectors(_f,gf)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _s=-90,vs=1;class bp extends Dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new si(_s,vs,e,t);i.layers=this.layers,this.add(i);const s=new si(_s,vs,e,t);s.layers=this.layers,this.add(s);const o=new si(_s,vs,e,t);o.layers=this.layers,this.add(o);const a=new si(_s,vs,e,t);a.layers=this.layers,this.add(a);const l=new si(_s,vs,e,t);l.layers=this.layers,this.add(l);const c=new si(_s,vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Tp extends dn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ep extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Tp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ao(5,5,5),s=new yt({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:qi});s.uniforms.tEquirect.value=t;const o=new It(i,s),a=t.minFilter;return t.minFilter===Wr&&(t.minFilter=Rn),new bp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const pc=new H,L_=new H,I_=new Ze;class Or{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pc.subVectors(n,t).cross(L_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||I_.getNormalMatrix(e),i=this.coplanarPoint(pc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new oo,Pa=new H;class Ap{constructor(e=new Or,t=new Or,n=new Or,i=new Or,s=new Or,o=new Or){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],x=i[13],M=i[14],S=i[15];if(n[0].setComponents(l-s,f-c,p-d,S-m).normalize(),n[1].setComponents(l+s,f+c,p+d,S+m).normalize(),n[2].setComponents(l+o,f+u,p+g,S+x).normalize(),n[3].setComponents(l-o,f-u,p-g,S-x).normalize(),n[4].setComponents(l-a,f-h,p-_,S-M).normalize(),t===Wi)n[5].setComponents(l+a,f+h,p+_,S+M).normalize();else if(t===Sl)n[5].setComponents(a,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Pa.x=i.normal.x>0?e.max.x:e.min.x,Pa.y=i.normal.y>0?e.max.y:e.min.y,Pa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function U_(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Mi extends on{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const x=m*f-o;for(let M=0;M<c;M++){const S=M*h-s;g.push(S,-x,0),_.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const M=x+c*m,S=x+c*(m+1),A=x+1+c*(m+1),E=x+1+c*m;d.push(M,S,E),d.push(S,A,E)}this.setIndex(d),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.widthSegments,e.heightSegments)}}var N_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,O_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,G_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,W_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,K_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,r0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,s0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",f0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,v0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,A0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,C0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,I0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,j0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,av=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Av=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ov=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ix=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ux=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:N_,alphahash_pars_fragment:F_,alphamap_fragment:O_,alphamap_pars_fragment:B_,alphatest_fragment:k_,alphatest_pars_fragment:z_,aomap_fragment:H_,aomap_pars_fragment:G_,batching_pars_vertex:V_,batching_vertex:W_,begin_vertex:X_,beginnormal_vertex:Y_,bsdfs:q_,iridescence_fragment:$_,bumpmap_pars_fragment:K_,clipping_planes_fragment:Z_,clipping_planes_pars_fragment:j_,clipping_planes_pars_vertex:J_,clipping_planes_vertex:Q_,color_fragment:e0,color_pars_fragment:t0,color_pars_vertex:n0,color_vertex:i0,common:r0,cube_uv_reflection_fragment:s0,defaultnormal_vertex:o0,displacementmap_pars_vertex:a0,displacementmap_vertex:l0,emissivemap_fragment:c0,emissivemap_pars_fragment:u0,colorspace_fragment:h0,colorspace_pars_fragment:f0,envmap_fragment:d0,envmap_common_pars_fragment:p0,envmap_pars_fragment:m0,envmap_pars_vertex:g0,envmap_physical_pars_fragment:A0,envmap_vertex:_0,fog_vertex:v0,fog_pars_vertex:x0,fog_fragment:M0,fog_pars_fragment:S0,gradientmap_pars_fragment:y0,lightmap_pars_fragment:w0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:T0,lights_pars_begin:E0,lights_toon_fragment:C0,lights_toon_pars_fragment:R0,lights_phong_fragment:P0,lights_phong_pars_fragment:D0,lights_physical_fragment:L0,lights_physical_pars_fragment:I0,lights_fragment_begin:U0,lights_fragment_maps:N0,lights_fragment_end:F0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:z0,map_fragment:H0,map_pars_fragment:G0,map_particle_fragment:V0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:Y0,morphinstance_vertex:q0,morphcolor_vertex:$0,morphnormal_vertex:K0,morphtarget_pars_vertex:Z0,morphtarget_vertex:j0,normal_fragment_begin:J0,normal_fragment_maps:Q0,normal_pars_fragment:ev,normal_pars_vertex:tv,normal_vertex:nv,normalmap_pars_fragment:iv,clearcoat_normal_fragment_begin:rv,clearcoat_normal_fragment_maps:sv,clearcoat_pars_fragment:ov,iridescence_pars_fragment:av,opaque_fragment:lv,packing:cv,premultiplied_alpha_fragment:uv,project_vertex:hv,dithering_fragment:fv,dithering_pars_fragment:dv,roughnessmap_fragment:pv,roughnessmap_pars_fragment:mv,shadowmap_pars_fragment:gv,shadowmap_pars_vertex:_v,shadowmap_vertex:vv,shadowmask_pars_fragment:xv,skinbase_vertex:Mv,skinning_pars_vertex:Sv,skinning_vertex:yv,skinnormal_vertex:wv,specularmap_fragment:bv,specularmap_pars_fragment:Tv,tonemapping_fragment:Ev,tonemapping_pars_fragment:Av,transmission_fragment:Cv,transmission_pars_fragment:Rv,uv_pars_fragment:Pv,uv_pars_vertex:Dv,uv_vertex:Lv,worldpos_vertex:Iv,background_vert:Uv,background_frag:Nv,backgroundCube_vert:Fv,backgroundCube_frag:Ov,cube_vert:Bv,cube_frag:kv,depth_vert:zv,depth_frag:Hv,distanceRGBA_vert:Gv,distanceRGBA_frag:Vv,equirect_vert:Wv,equirect_frag:Xv,linedashed_vert:Yv,linedashed_frag:qv,meshbasic_vert:$v,meshbasic_frag:Kv,meshlambert_vert:Zv,meshlambert_frag:jv,meshmatcap_vert:Jv,meshmatcap_frag:Qv,meshnormal_vert:ex,meshnormal_frag:tx,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:rx,meshphysical_frag:sx,meshtoon_vert:ox,meshtoon_frag:ax,points_vert:lx,points_frag:cx,shadow_vert:ux,shadow_frag:hx,sprite_vert:fx,sprite_frag:dx},me={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},wi={basic:{uniforms:vn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:vn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new He(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:vn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:vn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:vn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new He(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:vn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:vn([me.points,me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:vn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:vn([me.common,me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:vn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:vn([me.sprite,me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:vn([me.common,me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:vn([me.lights,me.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};wi.physical={uniforms:vn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Da={r:0,b:0,g:0},Ir=new qn,px=new dt;function mx(r,e,t,n,i,s,o){const a=new He(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M)),M}function _(x){let M=!1;const S=g(x);S===null?m(a,l):S&&S.isColor&&(m(S,1),M=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(x,M){const S=g(M);S&&(S.isCubeTexture||S.mapping===Il)?(u===void 0&&(u=new It(new ao(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:Ks(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ir.copy(M.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(px.makeRotationFromEuler(Ir)),u.material.toneMapped=ut.getTransfer(S.colorSpace)!==St,(h!==S||f!==S.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new It(new Mi(2,2),new yt({name:"BackgroundMaterial",uniforms:Ks(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ut.getTransfer(S.colorSpace)!==St,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,M){x.getRGB(Da,yp(r)),n.buffers.color.setClear(Da.r,Da.g,Da.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:_,addToRenderList:p}}function gx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(v,b,U,I,N){let X=!1;const O=h(I,U,b);s!==O&&(s=O,c(s.object)),X=d(v,I,U,N),X&&g(v,I,U,N),N!==null&&e.update(N,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,S(v,b,U,I),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,b,U){const I=U.wireframe===!0;let N=n[v.id];N===void 0&&(N={},n[v.id]=N);let X=N[b.id];X===void 0&&(X={},N[b.id]=X);let O=X[I];return O===void 0&&(O=f(l()),X[I]=O),O}function f(v){const b=[],U=[],I=[];for(let N=0;N<t;N++)b[N]=0,U[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:U,attributeDivisors:I,object:v,attributes:{},index:null}}function d(v,b,U,I){const N=s.attributes,X=b.attributes;let O=0;const q=U.getAttributes();for(const G in q)if(q[G].location>=0){const P=N[G];let ie=X[G];if(ie===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor)),P===void 0||P.attribute!==ie||ie&&P.data!==ie.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function g(v,b,U,I){const N={},X=b.attributes;let O=0;const q=U.getAttributes();for(const G in q)if(q[G].location>=0){let P=X[G];P===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));const ie={};ie.attribute=P,P&&P.data&&(ie.data=P.data),N[G]=ie,O++}s.attributes=N,s.attributesNum=O,s.index=I}function _(){const v=s.newAttributes;for(let b=0,U=v.length;b<U;b++)v[b]=0}function p(v){m(v,0)}function m(v,b){const U=s.newAttributes,I=s.enabledAttributes,N=s.attributeDivisors;U[v]=1,I[v]===0&&(r.enableVertexAttribArray(v),I[v]=1),N[v]!==b&&(r.vertexAttribDivisor(v,b),N[v]=b)}function x(){const v=s.newAttributes,b=s.enabledAttributes;for(let U=0,I=b.length;U<I;U++)b[U]!==v[U]&&(r.disableVertexAttribArray(U),b[U]=0)}function M(v,b,U,I,N,X,O){O===!0?r.vertexAttribIPointer(v,b,U,N,X):r.vertexAttribPointer(v,b,U,I,N,X)}function S(v,b,U,I){_();const N=I.attributes,X=U.getAttributes(),O=b.defaultAttributeValues;for(const q in X){const G=X[q];if(G.location>=0){let ne=N[q];if(ne===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor)),ne!==void 0){const P=ne.normalized,ie=ne.itemSize,Ae=e.get(ne);if(Ae===void 0)continue;const Ue=Ae.buffer,$=Ae.type,Q=Ae.bytesPerElement,ce=$===r.INT||$===r.UNSIGNED_INT||ne.gpuType===th;if(ne.isInterleavedBufferAttribute){const ae=ne.data,we=ae.stride,xe=ne.offset;if(ae.isInstancedInterleavedBuffer){for(let ze=0;ze<G.locationSize;ze++)m(G.location+ze,ae.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ze=0;ze<G.locationSize;ze++)p(G.location+ze);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let ze=0;ze<G.locationSize;ze++)M(G.location+ze,ie/G.locationSize,$,P,we*Q,(xe+ie/G.locationSize*ze)*Q,ce)}else{if(ne.isInstancedBufferAttribute){for(let ae=0;ae<G.locationSize;ae++)m(G.location+ae,ne.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ae=0;ae<G.locationSize;ae++)p(G.location+ae);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let ae=0;ae<G.locationSize;ae++)M(G.location+ae,ie/G.locationSize,$,P,ie*Q,ie/G.locationSize*ae*Q,ce)}}else if(O!==void 0){const P=O[q];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(G.location,P);break;case 3:r.vertexAttrib3fv(G.location,P);break;case 4:r.vertexAttrib4fv(G.location,P);break;default:r.vertexAttrib1fv(G.location,P)}}}}x()}function A(){C();for(const v in n){const b=n[v];for(const U in b){const I=b[U];for(const N in I)u(I[N].object),delete I[N];delete b[U]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const b=n[v.id];for(const U in b){const I=b[U];for(const N in I)u(I[N].object),delete I[N];delete b[U]}delete n[v.id]}function y(v){for(const b in n){const U=n[b];if(U[v.id]===void 0)continue;const I=U[v.id];for(const N in I)u(I[N].object),delete I[N];delete U[v.id]}}function C(){L(),o=!0,s!==i&&(s=i,c(s.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function _x(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)t.update(g,n,f[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vx(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(y){return!(y!==_i&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const C=y===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Li&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Ci&&!C)}function l(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const y=e.get("EXT_clip_control");y.clipControlEXT(y.LOWER_LEFT_EXT,y.ZERO_TO_ONE_EXT)}const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:A,maxSamples:E}}function xx(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Or,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,M=x*4;let S=m.clippingState||null;l.value=S,S=u(g,f,M,d);for(let A=0;A!==M;++A)S[A]=t[A];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,S=d;M!==_;++M,S+=4)o.copy(h[M]).applyMatrix4(x,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Mx(r){let e=new WeakMap;function t(o,a){return a===jc?o.mapping=Xs:a===Jc&&(o.mapping=Ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===jc||a===Jc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ep(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ch extends wp{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Rs=4,vf=[.125,.215,.35,.446,.526,.582],Vr=20,mc=new ch,xf=new He;let gc=null,_c=0,vc=0,xc=!1;const Br=(1+Math.sqrt(5))/2,xs=1/Br,Mf=[new H(-Br,xs,0),new H(Br,xs,0),new H(-xs,0,Br),new H(xs,0,Br),new H(0,Br,-xs),new H(0,Br,xs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){gc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gc,_c,vc),this._renderer.xr.enabled=xc,e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:xi,format:_i,colorSpace:Ar,depthBuffer:!1},i=yf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sx(s)),this._blurMaterial=yx(s,e,t)}return i}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,mc)}_sceneToCubeUV(e,t,n,i){const a=new si(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(xf),u.toneMapping=gr,u.autoClear=!1;const d=new Fl({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new It(new ao,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(xf),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const M=this._cubeSize;La(i,x*M,m>2?M:0,M,M),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Xs||e.mapping===Ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;La(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,mc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mf[(i-s-1)%Mf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Vr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Vr;p>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vr}`);const m=[];let x=0;for(let y=0;y<Vr;++y){const C=y/_,L=Math.exp(-C*C/2);m.push(L),y===0?x+=L:y<p&&(x+=2*L)}for(let y=0;y<m.length;y++)m[y]=m[y]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const S=this._sizeLods[i],A=3*S*(i>M-Rs?i-M+Rs:0),E=4*(this._cubeSize-S);La(t,A,E,3*S,2*S),l.setRenderTarget(t),l.render(h,mc)}}function Sx(r){const e=[],t=[],n=[];let i=r;const s=r-Rs+1+vf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Rs?l=vf[o-r+Rs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*d),M=new Float32Array(p*g*d),S=new Float32Array(m*g*d);for(let E=0;E<d;E++){const y=E%3*2/3-1,C=E>2?0:-1,L=[y,C,0,y+2/3,C,0,y+2/3,C+1,0,y,C,0,y+2/3,C+1,0,y,C+1,0];x.set(L,_*g*E),M.set(f,p*g*E);const v=[E,E,E,E,E,E];S.set(v,m*g*E)}const A=new on;A.setAttribute("position",new Ht(x,_)),A.setAttribute("uv",new Ht(M,p)),A.setAttribute("faceIndex",new Ht(S,m)),e.push(A),i>Rs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yf(r,e,t){const n=new Zn(r,e,t);return n.texture.mapping=Il,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function La(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function yx(r,e,t){const n=new Float32Array(Vr),i=new H(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function wf(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function bf(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function uh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wx(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===jc||l===Jc,u=l===Xs||l===Ys;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Sf(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Sf(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function bx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&rl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tx(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let M=0,S=x.length;M<S;M+=3){const A=x[M+0],E=x[M+1],y=x[M+2];f.push(A,E,E,y,y,A)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,S=x.length/3-1;M<S;M+=3){const A=M+0,E=M+1,y=M+2;f.push(A,E,E,y,y,A)}}else return;const p=new(pp(f)?Sp:Mp)(f,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ex(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,n,1)}function h(f,d,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let m=0;for(let x=0;x<g;x++)m+=d[x];for(let x=0;x<_.length;x++)t.update(m,n,_[x])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ax(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cx(r,e,t){const n=new WeakMap,i=new zt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let L=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let S=a.attributes.position.count*M,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const E=new Float32Array(S*A*4*h),y=new gp(E,S,A,h);y.type=Ci,y.needsUpdate=!0;const C=M*4;for(let v=0;v<h;v++){const b=p[v],U=m[v],I=x[v],N=S*A*4*v;for(let X=0;X<b.count;X++){const O=X*C;d===!0&&(i.fromBufferAttribute(b,X),E[N+O+0]=i.x,E[N+O+1]=i.y,E[N+O+2]=i.z,E[N+O+3]=0),g===!0&&(i.fromBufferAttribute(U,X),E[N+O+4]=i.x,E[N+O+5]=i.y,E[N+O+6]=i.z,E[N+O+7]=0),_===!0&&(i.fromBufferAttribute(I,X),E[N+O+8]=i.x,E[N+O+9]=i.y,E[N+O+10]=i.z,E[N+O+11]=I.itemSize===4?i.w:1)}}f={count:h,texture:y,size:new Xe(S,A)},n.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Rx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class hh extends dn{constructor(e,t,n,i,s,o,a,l,c,u=Us){if(u!==Us&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Us&&(n=Sr),n===void 0&&u===$s&&(n=qs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Rp=new dn,Tf=new hh(1,1),Pp=new gp,Dp=new v_,Lp=new Tp,Ef=[],Af=[],Cf=new Float32Array(16),Rf=new Float32Array(9),Pf=new Float32Array(4);function lo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ef[i];if(s===void 0&&(s=new Float32Array(i),Ef[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function $t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ol(r,e){let t=Af[e];t===void 0&&(t=new Int32Array(e),Af[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Px(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Dx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2fv(this.addr,e),$t(t,e)}}function Lx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;r.uniform3fv(this.addr,e),$t(t,e)}}function Ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4fv(this.addr,e),$t(t,e)}}function Ux(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;Pf.set(n),r.uniformMatrix2fv(this.addr,!1,Pf),$t(t,n)}}function Nx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;Rf.set(n),r.uniformMatrix3fv(this.addr,!1,Rf),$t(t,n)}}function Fx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;Cf.set(n),r.uniformMatrix4fv(this.addr,!1,Cf),$t(t,n)}}function Ox(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Bx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2iv(this.addr,e),$t(t,e)}}function kx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3iv(this.addr,e),$t(t,e)}}function zx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4iv(this.addr,e),$t(t,e)}}function Hx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Gx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;r.uniform2uiv(this.addr,e),$t(t,e)}}function Vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;r.uniform3uiv(this.addr,e),$t(t,e)}}function Wx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;r.uniform4uiv(this.addr,e),$t(t,e)}}function Xx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Tf.compareFunction=dp,s=Tf):s=Rp,t.setTexture2D(e||s,i)}function Yx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dp,i)}function qx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Lp,i)}function $x(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pp,i)}function Kx(r){switch(r){case 5126:return Px;case 35664:return Dx;case 35665:return Lx;case 35666:return Ix;case 35674:return Ux;case 35675:return Nx;case 35676:return Fx;case 5124:case 35670:return Ox;case 35667:case 35671:return Bx;case 35668:case 35672:return kx;case 35669:case 35673:return zx;case 5125:return Hx;case 36294:return Gx;case 36295:return Vx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return $x}}function Zx(r,e){r.uniform1fv(this.addr,e)}function jx(r,e){const t=lo(e,this.size,2);r.uniform2fv(this.addr,t)}function Jx(r,e){const t=lo(e,this.size,3);r.uniform3fv(this.addr,t)}function Qx(r,e){const t=lo(e,this.size,4);r.uniform4fv(this.addr,t)}function eM(r,e){const t=lo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function tM(r,e){const t=lo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function nM(r,e){const t=lo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function iM(r,e){r.uniform1iv(this.addr,e)}function rM(r,e){r.uniform2iv(this.addr,e)}function sM(r,e){r.uniform3iv(this.addr,e)}function oM(r,e){r.uniform4iv(this.addr,e)}function aM(r,e){r.uniform1uiv(this.addr,e)}function lM(r,e){r.uniform2uiv(this.addr,e)}function cM(r,e){r.uniform3uiv(this.addr,e)}function uM(r,e){r.uniform4uiv(this.addr,e)}function hM(r,e,t){const n=this.cache,i=e.length,s=Ol(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Rp,s[o])}function fM(r,e,t){const n=this.cache,i=e.length,s=Ol(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Dp,s[o])}function dM(r,e,t){const n=this.cache,i=e.length,s=Ol(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Lp,s[o])}function pM(r,e,t){const n=this.cache,i=e.length,s=Ol(t,i);qt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Pp,s[o])}function mM(r){switch(r){case 5126:return Zx;case 35664:return jx;case 35665:return Jx;case 35666:return Qx;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return rM;case 35668:case 35672:return sM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return lM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return hM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return pM}}class gM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kx(t.type)}}class _M{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mM(t.type)}}class vM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Mc=/(\w+)(\])?(\[|\.)?/g;function Df(r,e){r.seq.push(e),r.map[e.id]=e}function xM(r,e,t){const n=r.name,i=n.length;for(Mc.lastIndex=0;;){const s=Mc.exec(n),o=Mc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Df(t,c===void 0?new gM(a,r,e):new _M(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new vM(a),Df(t,h)),t=h}}}class sl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);xM(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Lf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const MM=37297;let SM=0;function yM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function wM(r){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(r);let n;switch(e===t?n="":e===Ml&&t===xl?n="LinearDisplayP3ToLinearSRGB":e===xl&&t===Ml&&(n="LinearSRGBToLinearDisplayP3"),r){case Ar:case Nl:return[n,"LinearTransferOETF"];case ri:case ah:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function If(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+yM(r.getShaderSource(e),o)}else return i}function bM(r,e){const t=wM(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function TM(r,e){let t;switch(e){case Jd:t="Linear";break;case Qd:t="Reinhard";break;case ep:t="Cineon";break;case eh:t="ACESFilmic";break;case tp:t="AgX";break;case np:t="Neutral";break;case Ug:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ia=new H;function EM(){ut.getLuminanceCoefficients(Ia);const r=Ia.x.toFixed(4),e=Ia.y.toFixed(4),t=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function CM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function RM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function yo(r){return r!==""}function Uf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eu(r){return r.replace(PM,LM)}const DM=new Map;function LM(r,e){let t=Ke[e];if(t===void 0){const n=DM.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Eu(t)}const IM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ff(r){return r.replace(IM,UM)}function UM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Of(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===dg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function FM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Xs:case Ys:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function BM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case jd:e="ENVMAP_BLENDING_MULTIPLY";break;case Lg:e="ENVMAP_BLENDING_MIX";break;case Ig:e="ENVMAP_BLENDING_ADD";break}return e}function kM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=NM(t),c=FM(t),u=OM(t),h=BM(t),f=kM(t),d=AM(t),g=CM(s),_=i.createProgram();let p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yo).join(`
`),m.length>0&&(m+=`
`)):(p=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),m=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gr?"#define TONE_MAPPING":"",t.toneMapping!==gr?Ke.tonemapping_pars_fragment:"",t.toneMapping!==gr?TM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,bM("linearToOutputTexel",t.outputColorSpace),EM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),o=Eu(o),o=Uf(o,t),o=Nf(o,t),a=Eu(a),a=Uf(a,t),a=Nf(a,t),o=Ff(o),a=Ff(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=x+p+o,S=x+m+a,A=Lf(i,i.VERTEX_SHADER,M),E=Lf(i,i.FRAGMENT_SHADER,S);i.attachShader(_,A),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function y(b){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),I=i.getShaderInfoLog(A).trim(),N=i.getShaderInfoLog(E).trim();let X=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,E);else{const q=If(i,A,"vertex"),G=If(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+U+`
`+q+`
`+G)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(I===""||N==="")&&(O=!1);O&&(b.diagnostics={runnable:X,programLog:U,vertexShader:{log:I,prefix:p},fragmentShader:{log:N,prefix:m}})}i.deleteShader(A),i.deleteShader(E),C=new sl(i,_),L=RM(i,_)}let C;this.getUniforms=function(){return C===void 0&&y(this),C};let L;this.getAttributes=function(){return L===void 0&&y(this),L};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,MM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let HM=0;class GM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new VM(e),t.set(e,n)),n}}class VM{constructor(e){this.id=HM++,this.code=e,this.usedTimes=0}}function WM(r,e,t,n,i,s,o){const a=new vp,l=new GM,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,b,U,I,N){const X=I.fog,O=N.geometry,q=v.isMeshStandardMaterial?I.environment:null,G=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),ne=G&&G.mapping===Il?G.image.height:null,P=_[v.type];v.precision!==null&&(g=i.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ie=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ae=ie!==void 0?ie.length:0;let Ue=0;O.morphAttributes.position!==void 0&&(Ue=1),O.morphAttributes.normal!==void 0&&(Ue=2),O.morphAttributes.color!==void 0&&(Ue=3);let $,Q,ce,ae;if(P){const Re=wi[P];$=Re.vertexShader,Q=Re.fragmentShader}else $=v.vertexShader,Q=v.fragmentShader,l.update(v),ce=l.getVertexShaderID(v),ae=l.getFragmentShaderID(v);const we=r.getRenderTarget(),xe=N.isInstancedMesh===!0,ze=N.isBatchedMesh===!0,Ie=!!v.map,Ne=!!v.matcap,D=!!G,je=!!v.aoMap,Ce=!!v.lightMap,Ge=!!v.bumpMap,z=!!v.normalMap,Je=!!v.displacementMap,Le=!!v.emissiveMap,R=!!v.metalnessMap,w=!!v.roughnessMap,Y=v.anisotropy>0,j=v.clearcoat>0,te=v.dispersion>0,Z=v.iridescence>0,Se=v.sheen>0,se=v.transmission>0,de=Y&&!!v.anisotropyMap,We=j&&!!v.clearcoatMap,re=j&&!!v.clearcoatNormalMap,ve=j&&!!v.clearcoatRoughnessMap,Me=Z&&!!v.iridescenceMap,Oe=Z&&!!v.iridescenceThicknessMap,_e=Se&&!!v.sheenColorMap,Ye=Se&&!!v.sheenRoughnessMap,ke=!!v.specularMap,ot=!!v.specularColorMap,F=!!v.specularIntensityMap,ee=se&&!!v.transmissionMap,K=se&&!!v.thicknessMap,J=!!v.gradientMap,le=!!v.alphaMap,ue=v.alphaTest>0,qe=!!v.alphaHash,_t=!!v.extensions;let Tt=gr;v.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Tt=r.toneMapping);const rt={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:$,fragmentShader:Q,defines:v.defines,customVertexShaderID:ce,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:ze,batchingColor:ze&&N._colorsTexture!==null,instancing:xe,instancingColor:xe&&N.instanceColor!==null,instancingMorph:xe&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:we===null?r.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Ar,alphaToCoverage:!!v.alphaToCoverage,map:Ie,matcap:Ne,envMap:D,envMapMode:D&&G.mapping,envMapCubeUVHeight:ne,aoMap:je,lightMap:Ce,bumpMap:Ge,normalMap:z,displacementMap:d&&Je,emissiveMap:Le,normalMapObjectSpace:z&&v.normalMapType===kg,normalMapTangentSpace:z&&v.normalMapType===Bg,metalnessMap:R,roughnessMap:w,anisotropy:Y,anisotropyMap:de,clearcoat:j,clearcoatMap:We,clearcoatNormalMap:re,clearcoatRoughnessMap:ve,dispersion:te,iridescence:Z,iridescenceMap:Me,iridescenceThicknessMap:Oe,sheen:Se,sheenColorMap:_e,sheenRoughnessMap:Ye,specularMap:ke,specularColorMap:ot,specularIntensityMap:F,transmission:se,transmissionMap:ee,thicknessMap:K,gradientMap:J,opaque:v.transparent===!1&&v.blending===Is&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:ue,alphaHash:qe,combine:v.combine,mapUv:Ie&&p(v.map.channel),aoMapUv:je&&p(v.aoMap.channel),lightMapUv:Ce&&p(v.lightMap.channel),bumpMapUv:Ge&&p(v.bumpMap.channel),normalMapUv:z&&p(v.normalMap.channel),displacementMapUv:Je&&p(v.displacementMap.channel),emissiveMapUv:Le&&p(v.emissiveMap.channel),metalnessMapUv:R&&p(v.metalnessMap.channel),roughnessMapUv:w&&p(v.roughnessMap.channel),anisotropyMapUv:de&&p(v.anisotropyMap.channel),clearcoatMapUv:We&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&p(v.sheenRoughnessMap.channel),specularMapUv:ke&&p(v.specularMap.channel),specularColorMapUv:ot&&p(v.specularColorMap.channel),specularIntensityMapUv:F&&p(v.specularIntensityMap.channel),transmissionMapUv:ee&&p(v.transmissionMap.channel),thicknessMapUv:K&&p(v.thicknessMap.channel),alphaMapUv:le&&p(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(z||Y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(Ie||le),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Ie&&v.map.isVideoTexture===!0&&ut.getTransfer(v.map.colorSpace)===St,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Cn,flipSided:v.side===Tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_t&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&v.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function x(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)b.push(U),b.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(M(b,v),S(b,v),b.push(r.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function M(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function S(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),v.push(a.mask)}function A(v){const b=_[v.type];let U;if(b){const I=wi[b];U=Jo.clone(I.uniforms)}else U=v.uniforms;return U}function E(v,b){let U;for(let I=0,N=u.length;I<N;I++){const X=u[I];if(X.cacheKey===b){U=X,++U.usedTimes;break}}return U===void 0&&(U=new zM(r,b,v,s),u.push(U)),U}function y(v){if(--v.usedTimes===0){const b=u.indexOf(v);u[b]=u[u.length-1],u.pop(),v.destroy()}}function C(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:A,acquireProgram:E,releaseProgram:y,releaseShaderCache:C,programs:u,dispose:L}}function XM(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function YM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Bf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function kf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||YM),n.length>1&&n.sort(f||Bf),i.length>1&&i.sort(f||Bf)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function qM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new kf,r.set(n,[o])):i>=s.length?(o=new kf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function $M(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new He};break;case"SpotLight":t={position:new H,direction:new H,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function KM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ZM=0;function jM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function JM(r){const e=new $M,t=KM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const i=new H,s=new dt,o=new dt;function a(c){let u=0,h=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,x=0,M=0,S=0,A=0,E=0,y=0;c.sort(jM);for(let L=0,v=c.length;L<v;L++){const b=c[L],U=b.color,I=b.intensity,N=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=U.r*I,h+=U.g*I,f+=U.b*I;else if(b.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(b.sh.coefficients[O],I);y++}else if(b.isDirectionalLight){const O=e.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const q=b.shadow,G=t.get(b);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=b.shadow.matrix,x++}n.directional[d]=O,d++}else if(b.isSpotLight){const O=e.get(b);O.position.setFromMatrixPosition(b.matrixWorld),O.color.copy(U).multiplyScalar(I),O.distance=N,O.coneCos=Math.cos(b.angle),O.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),O.decay=b.decay,n.spot[_]=O;const q=b.shadow;if(b.map&&(n.spotLightMap[A]=b.map,A++,q.updateMatrices(b),b.castShadow&&E++),n.spotLightMatrix[_]=q.matrix,b.castShadow){const G=t.get(b);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=X,S++}_++}else if(b.isRectAreaLight){const O=e.get(b);O.color.copy(U).multiplyScalar(I),O.halfWidth.set(b.width*.5,0,0),O.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=O,p++}else if(b.isPointLight){const O=e.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),O.distance=b.distance,O.decay=b.decay,b.castShadow){const q=b.shadow,G=t.get(b);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=b.shadow.matrix,M++}n.point[g]=O,g++}else if(b.isHemisphereLight){const O=e.get(b);O.skyColor.copy(b.color).multiplyScalar(I),O.groundColor.copy(b.groundColor).multiplyScalar(I),n.hemi[m]=O,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==x||C.numPointShadows!==M||C.numSpotShadows!==S||C.numSpotMaps!==A||C.numLightProbes!==y)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=y,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=x,C.numPointShadows=M,C.numSpotShadows=S,C.numSpotMaps=A,C.numLightProbes=y,n.version=ZM++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const M=c[m];if(M.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),h++}else if(M.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function zf(r){const e=new JM(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function QM(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new zf(r),e.set(i,[a])):s>=o.length?(a=new zf(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class eS extends ua{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tS extends ua{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rS(r,e,t){let n=new Ap;const i=new Xe,s=new Xe,o=new zt,a=new eS({depthPacking:Og}),l=new tS,c={},u=t.maxTextureSize,h={[Mr]:Tn,[Tn]:Mr,[Cn]:Cn},f=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:nS,fragmentShader:iS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new It(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zd;let m=this.type;this.render=function(E,y,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const L=r.getRenderTarget(),v=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),U=r.state;U.setBlending(qi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const I=m!==zi&&this.type===zi,N=m===zi&&this.type!==zi;for(let X=0,O=E.length;X<O;X++){const q=E[X],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ne=G.getFrameExtents();if(i.multiply(ne),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ne.x),i.x=s.x*ne.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ne.y),i.y=s.y*ne.y,G.mapSize.y=s.y)),G.map===null||I===!0||N===!0){const ie=this.type!==zi?{minFilter:Qt,magFilter:Qt}:{};G.map!==null&&G.map.dispose(),G.map=new Zn(i.x,i.y,ie),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const P=G.getViewportCount();for(let ie=0;ie<P;ie++){const Ae=G.getViewport(ie);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),U.viewport(o),G.updateMatrices(q,ie),n=G.getFrustum(),S(y,C,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===zi&&x(G,C),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(L,v,b)};function x(E,y){const C=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Zn(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(y,null,C,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(y,null,C,d,_,null)}function M(E,y,C,L){let v=null;const b=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)v=b;else if(v=C.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const U=v.uuid,I=y.uuid;let N=c[U];N===void 0&&(N={},c[U]=N);let X=N[I];X===void 0&&(X=v.clone(),N[I]=X,y.addEventListener("dispose",A)),v=X}if(v.visible=y.visible,v.wireframe=y.wireframe,L===zi?v.side=y.shadowSide!==null?y.shadowSide:y.side:v.side=y.shadowSide!==null?y.shadowSide:h[y.side],v.alphaMap=y.alphaMap,v.alphaTest=y.alphaTest,v.map=y.map,v.clipShadows=y.clipShadows,v.clippingPlanes=y.clippingPlanes,v.clipIntersection=y.clipIntersection,v.displacementMap=y.displacementMap,v.displacementScale=y.displacementScale,v.displacementBias=y.displacementBias,v.wireframeLinewidth=y.wireframeLinewidth,v.linewidth=y.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=r.properties.get(v);U.light=C}return v}function S(E,y,C,L,v){if(E.visible===!1)return;if(E.layers.test(y.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===zi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const I=e.update(E),N=E.material;if(Array.isArray(N)){const X=I.groups;for(let O=0,q=X.length;O<q;O++){const G=X[O],ne=N[G.materialIndex];if(ne&&ne.visible){const P=M(E,ne,L,v);E.onBeforeShadow(r,E,y,C,I,P,G),r.renderBufferDirect(C,null,I,P,E,G),E.onAfterShadow(r,E,y,C,I,P,G)}}}else if(N.visible){const X=M(E,N,L,v);E.onBeforeShadow(r,E,y,C,I,X,null),r.renderBufferDirect(C,null,I,X,E,null),E.onAfterShadow(r,E,y,C,I,X,null)}}const U=E.children;for(let I=0,N=U.length;I<N;I++)S(U[I],y,C,L,v)}function A(E){E.target.removeEventListener("dispose",A);for(const C in c){const L=c[C],v=E.target.uuid;v in L&&(L[v].dispose(),delete L[v])}}}const sS={[Wc]:Xc,[Yc]:Kc,[qc]:Zc,[Ws]:$c,[Xc]:Wc,[Kc]:Yc,[Zc]:qc,[$c]:Ws};function oS(r){function e(){let F=!1;const ee=new zt;let K=null;const J=new zt(0,0,0,0);return{setMask:function(le){K!==le&&!F&&(r.colorMask(le,le,le,le),K=le)},setLocked:function(le){F=le},setClear:function(le,ue,qe,_t,Tt){Tt===!0&&(le*=_t,ue*=_t,qe*=_t),ee.set(le,ue,qe,_t),J.equals(ee)===!1&&(r.clearColor(le,ue,qe,_t),J.copy(ee))},reset:function(){F=!1,K=null,J.set(-1,0,0,0)}}}function t(){let F=!1,ee=!1,K=null,J=null,le=null;return{setReversed:function(ue){ee=ue},setTest:function(ue){ue?ce(r.DEPTH_TEST):ae(r.DEPTH_TEST)},setMask:function(ue){K!==ue&&!F&&(r.depthMask(ue),K=ue)},setFunc:function(ue){if(ee&&(ue=sS[ue]),J!==ue){switch(ue){case Wc:r.depthFunc(r.NEVER);break;case Xc:r.depthFunc(r.ALWAYS);break;case Yc:r.depthFunc(r.LESS);break;case Ws:r.depthFunc(r.LEQUAL);break;case qc:r.depthFunc(r.EQUAL);break;case $c:r.depthFunc(r.GEQUAL);break;case Kc:r.depthFunc(r.GREATER);break;case Zc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ue}},setLocked:function(ue){F=ue},setClear:function(ue){le!==ue&&(r.clearDepth(ue),le=ue)},reset:function(){F=!1,K=null,J=null,le=null}}}function n(){let F=!1,ee=null,K=null,J=null,le=null,ue=null,qe=null,_t=null,Tt=null;return{setTest:function(rt){F||(rt?ce(r.STENCIL_TEST):ae(r.STENCIL_TEST))},setMask:function(rt){ee!==rt&&!F&&(r.stencilMask(rt),ee=rt)},setFunc:function(rt,Re,be){(K!==rt||J!==Re||le!==be)&&(r.stencilFunc(rt,Re,be),K=rt,J=Re,le=be)},setOp:function(rt,Re,be){(ue!==rt||qe!==Re||_t!==be)&&(r.stencilOp(rt,Re,be),ue=rt,qe=Re,_t=be)},setLocked:function(rt){F=rt},setClear:function(rt){Tt!==rt&&(r.clearStencil(rt),Tt=rt)},reset:function(){F=!1,ee=null,K=null,J=null,le=null,ue=null,qe=null,_t=null,Tt=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,x=null,M=null,S=null,A=null,E=new He(0,0,0),y=0,C=!1,L=null,v=null,b=null,U=null,I=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,O=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=O>=1):q.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=O>=2);let G=null,ne={};const P=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),Ae=new zt().fromArray(P),Ue=new zt().fromArray(ie);function $(F,ee,K,J){const le=new Uint8Array(4),ue=r.createTexture();r.bindTexture(F,ue),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<K;qe++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ee,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(ee+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return ue}const Q={};Q[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(r.DEPTH_TEST),s.setFunc(Ws),Ce(!1),Ge(Yh),ce(r.CULL_FACE),D(qi);function ce(F){c[F]!==!0&&(r.enable(F),c[F]=!0)}function ae(F){c[F]!==!1&&(r.disable(F),c[F]=!1)}function we(F,ee){return u[F]!==ee?(r.bindFramebuffer(F,ee),u[F]=ee,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ee),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ee),!0):!1}function xe(F,ee){let K=f,J=!1;if(F){K=h.get(ee),K===void 0&&(K=[],h.set(ee,K));const le=F.textures;if(K.length!==le.length||K[0]!==r.COLOR_ATTACHMENT0){for(let ue=0,qe=le.length;ue<qe;ue++)K[ue]=r.COLOR_ATTACHMENT0+ue;K.length=le.length,J=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,J=!0);J&&r.drawBuffers(K)}function ze(F){return d!==F?(r.useProgram(F),d=F,!0):!1}const Ie={[Gr]:r.FUNC_ADD,[mg]:r.FUNC_SUBTRACT,[gg]:r.FUNC_REVERSE_SUBTRACT};Ie[_g]=r.MIN,Ie[vg]=r.MAX;const Ne={[xg]:r.ZERO,[Mg]:r.ONE,[Sg]:r.SRC_COLOR,[Gc]:r.SRC_ALPHA,[Ag]:r.SRC_ALPHA_SATURATE,[Tg]:r.DST_COLOR,[wg]:r.DST_ALPHA,[yg]:r.ONE_MINUS_SRC_COLOR,[Vc]:r.ONE_MINUS_SRC_ALPHA,[Eg]:r.ONE_MINUS_DST_COLOR,[bg]:r.ONE_MINUS_DST_ALPHA,[Cg]:r.CONSTANT_COLOR,[Rg]:r.ONE_MINUS_CONSTANT_COLOR,[Pg]:r.CONSTANT_ALPHA,[Dg]:r.ONE_MINUS_CONSTANT_ALPHA};function D(F,ee,K,J,le,ue,qe,_t,Tt,rt){if(F===qi){g===!0&&(ae(r.BLEND),g=!1);return}if(g===!1&&(ce(r.BLEND),g=!0),F!==pg){if(F!==_||rt!==C){if((p!==Gr||M!==Gr)&&(r.blendEquation(r.FUNC_ADD),p=Gr,M=Gr),rt)switch(F){case Is:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $o:r.blendFunc(r.ONE,r.ONE);break;case qh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $h:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Is:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $o:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case qh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $h:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}m=null,x=null,S=null,A=null,E.set(0,0,0),y=0,_=F,C=rt}return}le=le||ee,ue=ue||K,qe=qe||J,(ee!==p||le!==M)&&(r.blendEquationSeparate(Ie[ee],Ie[le]),p=ee,M=le),(K!==m||J!==x||ue!==S||qe!==A)&&(r.blendFuncSeparate(Ne[K],Ne[J],Ne[ue],Ne[qe]),m=K,x=J,S=ue,A=qe),(_t.equals(E)===!1||Tt!==y)&&(r.blendColor(_t.r,_t.g,_t.b,Tt),E.copy(_t),y=Tt),_=F,C=!1}function je(F,ee){F.side===Cn?ae(r.CULL_FACE):ce(r.CULL_FACE);let K=F.side===Tn;ee&&(K=!K),Ce(K),F.blending===Is&&F.transparent===!1?D(qi):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),i.setMask(F.colorWrite);const J=F.stencilWrite;o.setTest(J),J&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Je(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(F){L!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),L=F)}function Ge(F){F!==hg?(ce(r.CULL_FACE),F!==v&&(F===Yh?r.cullFace(r.BACK):F===fg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ae(r.CULL_FACE),v=F}function z(F){F!==b&&(X&&r.lineWidth(F),b=F)}function Je(F,ee,K){F?(ce(r.POLYGON_OFFSET_FILL),(U!==ee||I!==K)&&(r.polygonOffset(ee,K),U=ee,I=K)):ae(r.POLYGON_OFFSET_FILL)}function Le(F){F?ce(r.SCISSOR_TEST):ae(r.SCISSOR_TEST)}function R(F){F===void 0&&(F=r.TEXTURE0+N-1),G!==F&&(r.activeTexture(F),G=F)}function w(F,ee,K){K===void 0&&(G===null?K=r.TEXTURE0+N-1:K=G);let J=ne[K];J===void 0&&(J={type:void 0,texture:void 0},ne[K]=J),(J.type!==F||J.texture!==ee)&&(G!==K&&(r.activeTexture(K),G=K),r.bindTexture(F,ee||Q[F]),J.type=F,J.texture=ee)}function Y(){const F=ne[G];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(F){Ae.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Ae.copy(F))}function _e(F){Ue.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Ue.copy(F))}function Ye(F,ee){let K=l.get(ee);K===void 0&&(K=new WeakMap,l.set(ee,K));let J=K.get(F);J===void 0&&(J=r.getUniformBlockIndex(ee,F.name),K.set(F,J))}function ke(F,ee){const J=l.get(ee).get(F);a.get(ee)!==J&&(r.uniformBlockBinding(ee,J,F.__bindingPointIndex),a.set(ee,J))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},G=null,ne={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,x=null,M=null,S=null,A=null,E=new He(0,0,0),y=0,C=!1,L=null,v=null,b=null,U=null,I=null,Ae.set(0,0,r.canvas.width,r.canvas.height),Ue.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ce,disable:ae,bindFramebuffer:we,drawBuffers:xe,useProgram:ze,setBlending:D,setMaterial:je,setFlipSided:Ce,setCullFace:Ge,setLineWidth:z,setPolygonOffset:Je,setScissorTest:Le,activeTexture:R,bindTexture:w,unbindTexture:Y,compressedTexImage2D:j,compressedTexImage3D:te,texImage2D:ve,texImage3D:Me,updateUBOMapping:Ye,uniformBlockBinding:ke,texStorage2D:We,texStorage3D:re,texSubImage2D:Z,texSubImage3D:Se,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:Oe,viewport:_e,reset:ot}}function Hf(r,e,t,n){const i=aS(n);switch(t){case ap:return r*e;case cp:return r*e;case up:return r*e*2;case Ul:return r*e/i.components*i.byteLength;case rh:return r*e/i.components*i.byteLength;case hp:return r*e*2/i.components*i.byteLength;case sh:return r*e*2/i.components*i.byteLength;case lp:return r*e*3/i.components*i.byteLength;case _i:return r*e*4/i.components*i.byteLength;case oh:return r*e*4/i.components*i.byteLength;case Qa:case el:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case tl:case nl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case tu:case iu:return Math.max(r,16)*Math.max(e,8)/4;case eu:case nu:return Math.max(r,8)*Math.max(e,8)/2;case ru:case su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ou:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case cu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case uu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case hu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case fu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case du:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case pu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case mu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case gu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case _u:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case vu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case xu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Mu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case il:case Su:case yu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case fp:case wu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case bu:case Tu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function aS(r){switch(r){case Li:case rp:return{byteLength:1,components:1};case Ko:case sp:case xi:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case Sr:case th:case Ci:return{byteLength:4,components:1};case op:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function lS(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return d?new OffscreenCanvas(R,w):jo("canvas")}function _(R,w,Y){let j=1;const te=Le(R);if((te.width>Y||te.height>Y)&&(j=Y/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(j*te.width),Se=Math.floor(j*te.height);h===void 0&&(h=g(Z,Se));const se=w?g(Z,Se):h;return se.width=Z,se.height=Se,se.getContext("2d").drawImage(R,0,0,Z,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Se+")."),se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Qt&&R.minFilter!==Rn}function m(R){r.generateMipmap(R)}function x(R,w,Y,j,te=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=w;if(w===r.RED&&(Y===r.FLOAT&&(Z=r.R32F),Y===r.HALF_FLOAT&&(Z=r.R16F),Y===r.UNSIGNED_BYTE&&(Z=r.R8)),w===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(Z=r.R8UI),Y===r.UNSIGNED_SHORT&&(Z=r.R16UI),Y===r.UNSIGNED_INT&&(Z=r.R32UI),Y===r.BYTE&&(Z=r.R8I),Y===r.SHORT&&(Z=r.R16I),Y===r.INT&&(Z=r.R32I)),w===r.RG&&(Y===r.FLOAT&&(Z=r.RG32F),Y===r.HALF_FLOAT&&(Z=r.RG16F),Y===r.UNSIGNED_BYTE&&(Z=r.RG8)),w===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(Z=r.RG8UI),Y===r.UNSIGNED_SHORT&&(Z=r.RG16UI),Y===r.UNSIGNED_INT&&(Z=r.RG32UI),Y===r.BYTE&&(Z=r.RG8I),Y===r.SHORT&&(Z=r.RG16I),Y===r.INT&&(Z=r.RG32I)),w===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),Y===r.UNSIGNED_INT&&(Z=r.RGB32UI),Y===r.BYTE&&(Z=r.RGB8I),Y===r.SHORT&&(Z=r.RGB16I),Y===r.INT&&(Z=r.RGB32I)),w===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),Y===r.UNSIGNED_INT&&(Z=r.RGBA32UI),Y===r.BYTE&&(Z=r.RGBA8I),Y===r.SHORT&&(Z=r.RGBA16I),Y===r.INT&&(Z=r.RGBA32I)),w===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),w===r.RGBA){const Se=te?vl:ut.getTransfer(j);Y===r.FLOAT&&(Z=r.RGBA32F),Y===r.HALF_FLOAT&&(Z=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(Z=Se===St?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(R,w){let Y;return R?w===null||w===Sr||w===qs?Y=r.DEPTH24_STENCIL8:w===Ci?Y=r.DEPTH32F_STENCIL8:w===Ko&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Sr||w===qs?Y=r.DEPTH_COMPONENT24:w===Ci?Y=r.DEPTH_COMPONENT32F:w===Ko&&(Y=r.DEPTH_COMPONENT16),Y}function S(R,w){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==Rn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function A(R){const w=R.target;w.removeEventListener("dispose",A),y(w),w.isVideoTexture&&u.delete(w)}function E(R){const w=R.target;w.removeEventListener("dispose",E),L(w)}function y(R){const w=n.get(R);if(w.__webglInit===void 0)return;const Y=R.source,j=f.get(Y);if(j){const te=j[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(R),Object.keys(j).length===0&&f.delete(Y)}n.remove(R)}function C(R){const w=n.get(R);r.deleteTexture(w.__webglTexture);const Y=R.source,j=f.get(Y);delete j[w.__cacheKey],o.memory.textures--}function L(R){const w=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let te=0;te<w.__webglFramebuffer[j].length;te++)r.deleteFramebuffer(w.__webglFramebuffer[j][te]);else r.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)r.deleteFramebuffer(w.__webglFramebuffer[j]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=R.textures;for(let j=0,te=Y.length;j<te;j++){const Z=n.get(Y[j]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(Y[j])}n.remove(R)}let v=0;function b(){v=0}function U(){const R=v;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),v+=1,R}function I(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function N(R,w){const Y=n.get(R);if(R.isVideoTexture&&z(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(Y,R,w);return}}t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+w)}function X(R,w){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){Ue(Y,R,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+w)}function O(R,w){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){Ue(Y,R,w);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+w)}function q(R,w){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){$(Y,R,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+w)}const G={[_l]:r.REPEAT,[cr]:r.CLAMP_TO_EDGE,[Qc]:r.MIRRORED_REPEAT},ne={[Qt]:r.NEAREST,[Ng]:r.NEAREST_MIPMAP_NEAREST,[da]:r.NEAREST_MIPMAP_LINEAR,[Rn]:r.LINEAR,[ql]:r.LINEAR_MIPMAP_NEAREST,[Wr]:r.LINEAR_MIPMAP_LINEAR},P={[zg]:r.NEVER,[Yg]:r.ALWAYS,[Hg]:r.LESS,[dp]:r.LEQUAL,[Gg]:r.EQUAL,[Xg]:r.GEQUAL,[Vg]:r.GREATER,[Wg]:r.NOTEQUAL};function ie(R,w){if(w.type===Ci&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Rn||w.magFilter===ql||w.magFilter===da||w.magFilter===Wr||w.minFilter===Rn||w.minFilter===ql||w.minFilter===da||w.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,G[w.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,G[w.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,G[w.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ne[w.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ne[w.minFilter]),w.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,P[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Qt||w.minFilter!==da&&w.minFilter!==Wr||w.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ae(R,w){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",A));const j=w.source;let te=f.get(j);te===void 0&&(te={},f.set(j,te));const Z=I(w);if(Z!==R.__cacheKey){te[Z]===void 0&&(te[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),te[Z].usedTimes++;const Se=te[R.__cacheKey];Se!==void 0&&(te[R.__cacheKey].usedTimes--,Se.usedTimes===0&&C(w)),R.__cacheKey=Z,R.__webglTexture=te[Z].texture}return Y}function Ue(R,w,Y){let j=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=r.TEXTURE_3D);const te=Ae(R,w),Z=w.source;t.bindTexture(j,R.__webglTexture,r.TEXTURE0+Y);const Se=n.get(Z);if(Z.version!==Se.__version||te===!0){t.activeTexture(r.TEXTURE0+Y);const se=ut.getPrimaries(ut.workingColorSpace),de=w.colorSpace===lr?null:ut.getPrimaries(w.colorSpace),We=w.colorSpace===lr||se===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let re=_(w.image,!1,i.maxTextureSize);re=Je(w,re);const ve=s.convert(w.format,w.colorSpace),Me=s.convert(w.type);let Oe=x(w.internalFormat,ve,Me,w.colorSpace,w.isVideoTexture);ie(j,w);let _e;const Ye=w.mipmaps,ke=w.isVideoTexture!==!0,ot=Se.__version===void 0||te===!0,F=Z.dataReady,ee=S(w,re);if(w.isDepthTexture)Oe=M(w.format===$s,w.type),ot&&(ke?t.texStorage2D(r.TEXTURE_2D,1,Oe,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Oe,re.width,re.height,0,ve,Me,null));else if(w.isDataTexture)if(Ye.length>0){ke&&ot&&t.texStorage2D(r.TEXTURE_2D,ee,Oe,Ye[0].width,Ye[0].height);for(let K=0,J=Ye.length;K<J;K++)_e=Ye[K],ke?F&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,_e.width,_e.height,ve,Me,_e.data):t.texImage2D(r.TEXTURE_2D,K,Oe,_e.width,_e.height,0,ve,Me,_e.data);w.generateMipmaps=!1}else ke?(ot&&t.texStorage2D(r.TEXTURE_2D,ee,Oe,re.width,re.height),F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,ve,Me,re.data)):t.texImage2D(r.TEXTURE_2D,0,Oe,re.width,re.height,0,ve,Me,re.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ke&&ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,Oe,Ye[0].width,Ye[0].height,re.depth);for(let K=0,J=Ye.length;K<J;K++)if(_e=Ye[K],w.format!==_i)if(ve!==null)if(ke){if(F)if(w.layerUpdates.size>0){const le=Hf(_e.width,_e.height,w.format,w.type);for(const ue of w.layerUpdates){const qe=_e.data.subarray(ue*le/_e.data.BYTES_PER_ELEMENT,(ue+1)*le/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,ue,_e.width,_e.height,1,ve,qe,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,_e.width,_e.height,re.depth,ve,_e.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,Oe,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,_e.width,_e.height,re.depth,ve,Me,_e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,Oe,_e.width,_e.height,re.depth,0,ve,Me,_e.data)}else{ke&&ot&&t.texStorage2D(r.TEXTURE_2D,ee,Oe,Ye[0].width,Ye[0].height);for(let K=0,J=Ye.length;K<J;K++)_e=Ye[K],w.format!==_i?ve!==null?ke?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(r.TEXTURE_2D,K,Oe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?F&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,_e.width,_e.height,ve,Me,_e.data):t.texImage2D(r.TEXTURE_2D,K,Oe,_e.width,_e.height,0,ve,Me,_e.data)}else if(w.isDataArrayTexture)if(ke){if(ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,Oe,re.width,re.height,re.depth),F)if(w.layerUpdates.size>0){const K=Hf(re.width,re.height,w.format,w.type);for(const J of w.layerUpdates){const le=re.data.subarray(J*K/re.data.BYTES_PER_ELEMENT,(J+1)*K/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,ve,Me,le)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,Me,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,re.width,re.height,re.depth,0,ve,Me,re.data);else if(w.isData3DTexture)ke?(ot&&t.texStorage3D(r.TEXTURE_3D,ee,Oe,re.width,re.height,re.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,Me,re.data)):t.texImage3D(r.TEXTURE_3D,0,Oe,re.width,re.height,re.depth,0,ve,Me,re.data);else if(w.isFramebufferTexture){if(ot)if(ke)t.texStorage2D(r.TEXTURE_2D,ee,Oe,re.width,re.height);else{let K=re.width,J=re.height;for(let le=0;le<ee;le++)t.texImage2D(r.TEXTURE_2D,le,Oe,K,J,0,ve,Me,null),K>>=1,J>>=1}}else if(Ye.length>0){if(ke&&ot){const K=Le(Ye[0]);t.texStorage2D(r.TEXTURE_2D,ee,Oe,K.width,K.height)}for(let K=0,J=Ye.length;K<J;K++)_e=Ye[K],ke?F&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ve,Me,_e):t.texImage2D(r.TEXTURE_2D,K,Oe,ve,Me,_e);w.generateMipmaps=!1}else if(ke){if(ot){const K=Le(re);t.texStorage2D(r.TEXTURE_2D,ee,Oe,K.width,K.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,Me,re)}else t.texImage2D(r.TEXTURE_2D,0,Oe,ve,Me,re);p(w)&&m(j),Se.__version=Z.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function $(R,w,Y){if(w.image.length!==6)return;const j=Ae(R,w),te=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+Y);const Z=n.get(te);if(te.version!==Z.__version||j===!0){t.activeTexture(r.TEXTURE0+Y);const Se=ut.getPrimaries(ut.workingColorSpace),se=w.colorSpace===lr?null:ut.getPrimaries(w.colorSpace),de=w.colorSpace===lr||Se===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const We=w.isCompressedTexture||w.image[0].isCompressedTexture,re=w.image[0]&&w.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!We&&!re?ve[J]=_(w.image[J],!0,i.maxCubemapSize):ve[J]=re?w.image[J].image:w.image[J],ve[J]=Je(w,ve[J]);const Me=ve[0],Oe=s.convert(w.format,w.colorSpace),_e=s.convert(w.type),Ye=x(w.internalFormat,Oe,_e,w.colorSpace),ke=w.isVideoTexture!==!0,ot=Z.__version===void 0||j===!0,F=te.dataReady;let ee=S(w,Me);ie(r.TEXTURE_CUBE_MAP,w);let K;if(We){ke&&ot&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,Ye,Me.width,Me.height);for(let J=0;J<6;J++){K=ve[J].mipmaps;for(let le=0;le<K.length;le++){const ue=K[le];w.format!==_i?Oe!==null?ke?F&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,ue.width,ue.height,Oe,ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Ye,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,ue.width,ue.height,Oe,_e,ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Ye,ue.width,ue.height,0,Oe,_e,ue.data)}}}else{if(K=w.mipmaps,ke&&ot){K.length>0&&ee++;const J=Le(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ee,Ye,J.width,J.height)}for(let J=0;J<6;J++)if(re){ke?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Oe,_e,ve[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,ve[J].width,ve[J].height,0,Oe,_e,ve[J].data);for(let le=0;le<K.length;le++){const qe=K[le].image[J].image;ke?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,qe.width,qe.height,Oe,_e,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Ye,qe.width,qe.height,0,Oe,_e,qe.data)}}else{ke?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Oe,_e,ve[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,Oe,_e,ve[J]);for(let le=0;le<K.length;le++){const ue=K[le];ke?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Oe,_e,ue.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Ye,Oe,_e,ue.image[J])}}}p(w)&&m(r.TEXTURE_CUBE_MAP),Z.__version=te.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Q(R,w,Y,j,te,Z){const Se=s.convert(Y.format,Y.colorSpace),se=s.convert(Y.type),de=x(Y.internalFormat,Se,se,Y.colorSpace);if(!n.get(w).__hasExternalTextures){const re=Math.max(1,w.width>>Z),ve=Math.max(1,w.height>>Z);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,de,re,ve,w.depth,0,Se,se,null):t.texImage2D(te,Z,de,re,ve,0,Se,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Ge(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,te,n.get(Y).__webglTexture,0,Ce(w)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,te,n.get(Y).__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ce(R,w,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,R),w.depthBuffer){const j=w.depthTexture,te=j&&j.isDepthTexture?j.type:null,Z=M(w.stencilBuffer,te),Se=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=Ce(w);Ge(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,Z,w.width,w.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,Z,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Z,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,R)}else{const j=w.textures;for(let te=0;te<j.length;te++){const Z=j[te],Se=s.convert(Z.format,Z.colorSpace),se=s.convert(Z.type),de=x(Z.internalFormat,Se,se,Z.colorSpace),We=Ce(w);Y&&Ge(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,We,de,w.width,w.height):Ge(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,We,de,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,de,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ae(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const j=n.get(w.depthTexture).__webglTexture,te=Ce(w);if(w.depthTexture.format===Us)Ge(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(w.depthTexture.format===$s)Ge(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function we(R){const w=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){const te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),w.__depthDisposeCallback=te}w.__boundDepthTexture=j}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ae(w.__webglFramebuffer,R)}else if(Y){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=r.createRenderbuffer(),ce(w.__webglDepthbuffer[j],R,!1);else{const te=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),ce(w.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,te)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(R,w,Y){const j=n.get(R);w!==void 0&&Q(j.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&we(R)}function ze(R){const w=R.texture,Y=n.get(R),j=n.get(w);R.addEventListener("dispose",E);const te=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Se=te.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=w.version,o.memory.textures++),Z){Y.__webglFramebuffer=[];for(let se=0;se<6;se++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[se]=[];for(let de=0;de<w.mipmaps.length;de++)Y.__webglFramebuffer[se][de]=r.createFramebuffer()}else Y.__webglFramebuffer[se]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let se=0;se<w.mipmaps.length;se++)Y.__webglFramebuffer[se]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Se)for(let se=0,de=te.length;se<de;se++){const We=n.get(te[se]);We.__webglTexture===void 0&&(We.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&Ge(R)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let se=0;se<te.length;se++){const de=te[se];Y.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[se]);const We=s.convert(de.format,de.colorSpace),re=s.convert(de.type),ve=x(de.internalFormat,We,re,de.colorSpace,R.isXRRenderTarget===!0),Me=Ce(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,ve,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,Y.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),ce(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),ie(r.TEXTURE_CUBE_MAP,w);for(let se=0;se<6;se++)if(w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)Q(Y.__webglFramebuffer[se][de],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,de);else Q(Y.__webglFramebuffer[se],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(w)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let se=0,de=te.length;se<de;se++){const We=te[se],re=n.get(We);t.bindTexture(r.TEXTURE_2D,re.__webglTexture),ie(r.TEXTURE_2D,We),Q(Y.__webglFramebuffer,R,We,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,0),p(We)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),ie(se,w),w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)Q(Y.__webglFramebuffer[de],R,w,r.COLOR_ATTACHMENT0,se,de);else Q(Y.__webglFramebuffer,R,w,r.COLOR_ATTACHMENT0,se,0);p(w)&&m(se),t.unbindTexture()}R.depthBuffer&&we(R)}function Ie(R){const w=R.textures;for(let Y=0,j=w.length;Y<j;Y++){const te=w[Y];if(p(te)){const Z=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Se=n.get(te).__webglTexture;t.bindTexture(Z,Se),m(Z),t.unbindTexture()}}}const Ne=[],D=[];function je(R){if(R.samples>0){if(Ge(R)===!1){const w=R.textures,Y=R.width,j=R.height;let te=r.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=n.get(R),se=w.length>1;if(se)for(let de=0;de<w.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let de=0;de<w.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const We=n.get(w[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,We,0)}r.blitFramebuffer(0,0,Y,j,0,0,Y,j,te,r.NEAREST),l===!0&&(Ne.length=0,D.length=0,Ne.push(r.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ne.push(Z),D.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let de=0;de<w.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const We=n.get(w[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,We,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Ce(R){return Math.min(i.maxSamples,R.samples)}function Ge(R){const w=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function z(R){const w=o.render.frame;u.get(R)!==w&&(u.set(R,w),R.update())}function Je(R,w){const Y=R.colorSpace,j=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==Ar&&Y!==lr&&(ut.getTransfer(Y)===St?(j!==_i||te!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}function Le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=b,this.setTexture2D=N,this.setTexture2DArray=X,this.setTexture3D=O,this.setTextureCube=q,this.rebindTextures=xe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ge}function cS(r,e){function t(n,i=lr){let s;const o=ut.getTransfer(i);if(n===Li)return r.UNSIGNED_BYTE;if(n===nh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ih)return r.UNSIGNED_SHORT_5_5_5_1;if(n===op)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===rp)return r.BYTE;if(n===sp)return r.SHORT;if(n===Ko)return r.UNSIGNED_SHORT;if(n===th)return r.INT;if(n===Sr)return r.UNSIGNED_INT;if(n===Ci)return r.FLOAT;if(n===xi)return r.HALF_FLOAT;if(n===ap)return r.ALPHA;if(n===lp)return r.RGB;if(n===_i)return r.RGBA;if(n===cp)return r.LUMINANCE;if(n===up)return r.LUMINANCE_ALPHA;if(n===Us)return r.DEPTH_COMPONENT;if(n===$s)return r.DEPTH_STENCIL;if(n===Ul)return r.RED;if(n===rh)return r.RED_INTEGER;if(n===hp)return r.RG;if(n===sh)return r.RG_INTEGER;if(n===oh)return r.RGBA_INTEGER;if(n===Qa||n===el||n===tl||n===nl)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eu||n===tu||n===nu||n===iu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===eu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===iu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ru||n===su||n===ou)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ru||n===su)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ou)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===au||n===lu||n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===gu||n===_u||n===vu||n===xu||n===Mu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===au)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===du)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_u)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===Su||n===yu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===il)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Su)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fp||n===wu||n===bu||n===Tu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===il)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class uS extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xi extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hS={type:"move"};class Sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const fS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new dn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new yt({vertexShader:fS,fragmentShader:dS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mS extends ro{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new pS,p=t.getContextAttributes();let m=null,x=null;const M=[],S=[],A=new Xe;let E=null;const y=new si;y.layers.enable(1),y.viewport=new zt;const C=new si;C.layers.enable(2),C.viewport=new zt;const L=[y,C],v=new uS;v.layers.enable(1),v.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=M[$];return Q===void 0&&(Q=new Sc,M[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=M[$];return Q===void 0&&(Q=new Sc,M[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=M[$];return Q===void 0&&(Q=new Sc,M[$]=Q),Q.getHandSpace()};function I($){const Q=S.indexOf($.inputSource);if(Q===-1)return;const ce=M[Q];ce!==void 0&&(ce.update($.inputSource,$.frame,c||o),ce.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",X);for(let $=0;$<M.length;$++){const Q=S[$];Q!==null&&(S[$]=null,M[$].disconnect(Q))}b=null,U=null,_.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,x=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",N),i.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Zn(d.framebufferWidth,d.framebufferHeight,{format:_i,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ce=null,ae=null;p.depth&&(ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?$s:Us,ce=p.stencil?qs:Sr);const we={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(we),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Zn(f.textureWidth,f.textureHeight,{format:_i,type:Li,depthTexture:new hh(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X($){for(let Q=0;Q<$.removed.length;Q++){const ce=$.removed[Q],ae=S.indexOf(ce);ae>=0&&(S[ae]=null,M[ae].disconnect(ce))}for(let Q=0;Q<$.added.length;Q++){const ce=$.added[Q];let ae=S.indexOf(ce);if(ae===-1){for(let xe=0;xe<M.length;xe++)if(xe>=S.length){S.push(ce),ae=xe;break}else if(S[xe]===null){S[xe]=ce,ae=xe;break}if(ae===-1)break}const we=M[ae];we&&we.connect(ce)}}const O=new H,q=new H;function G($,Q,ce){O.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(ce.matrixWorld);const ae=O.distanceTo(q),we=Q.projectionMatrix.elements,xe=ce.projectionMatrix.elements,ze=we[14]/(we[10]-1),Ie=we[14]/(we[10]+1),Ne=(we[9]+1)/we[5],D=(we[9]-1)/we[5],je=(we[8]-1)/we[0],Ce=(xe[8]+1)/xe[0],Ge=ze*je,z=ze*Ce,Je=ae/(-je+Ce),Le=Je*-je;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Le),$.translateZ(Je),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),we[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const R=ze+Je,w=Ie+Je,Y=Ge-Le,j=z+(ae-Le),te=Ne*Ie/w*R,Z=D*Ie/w*R;$.projectionMatrix.makePerspective(Y,j,te,Z,R,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ne($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let Q=$.near,ce=$.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(ce=_.depthFar)),v.near=C.near=y.near=Q,v.far=C.far=y.far=ce,(b!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,U=v.far);const ae=$.parent,we=v.cameras;ne(v,ae);for(let xe=0;xe<we.length;xe++)ne(we[xe],ae);we.length===2?G(v,y,C):v.projectionMatrix.copy(y.projectionMatrix),P($,v,ae)};function P($,Q,ce){ce===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Zo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ie=null;function Ae($,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ae=!1;ce.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let xe=0;xe<ce.length;xe++){const ze=ce[xe];let Ie=null;if(d!==null)Ie=d.getViewport(ze);else{const D=h.getViewSubImage(f,ze);Ie=D.viewport,xe===0&&(e.setRenderTargetTextures(x,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(x))}let Ne=L[xe];Ne===void 0&&(Ne=new si,Ne.layers.enable(xe),Ne.viewport=new zt,L[xe]=Ne),Ne.matrix.fromArray(ze.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ze.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),xe===0&&(v.matrix.copy(Ne.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(Ne)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")){const xe=h.getDepthInformation(ce[0]);xe&&xe.isValid&&xe.texture&&_.init(e,xe,i.renderState)}}for(let ce=0;ce<M.length;ce++){const ae=S[ce],we=M[ce];ae!==null&&we!==void 0&&we.update(ae,Q,c||o)}ie&&ie($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ue=new Cp;Ue.setAnimationLoop(Ae),this.setAnimationLoop=function($){ie=$},this.dispose=function(){}}}const Ur=new qn,gS=new dt;function _S(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,yp(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,x,M,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Tn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Tn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),M=x.envMap,S=x.envMapRotation;M&&(p.envMap.value=M,Ur.copy(S),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),p.envMapRotation.value.setFromMatrix4(gS.makeRotationFromEuler(Ur)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vS(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const S=M.program;n.uniformBlockBinding(x,S)}function c(x,M){let S=i[x.id];S===void 0&&(g(x),S=u(x),i[x.id]=S,x.addEventListener("dispose",p));const A=M.program;n.updateUBOMapping(x,A);const E=e.render.frame;s[x.id]!==E&&(f(x),s[x.id]=E)}function u(x){const M=h();x.__bindingPointIndex=M;const S=r.createBuffer(),A=x.__size,E=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,A,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,S),S}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=i[x.id],S=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let E=0,y=S.length;E<y;E++){const C=Array.isArray(S[E])?S[E]:[S[E]];for(let L=0,v=C.length;L<v;L++){const b=C[L];if(d(b,E,L,A)===!0){const U=b.__offset,I=Array.isArray(b.value)?b.value:[b.value];let N=0;for(let X=0;X<I.length;X++){const O=I[X],q=_(O);typeof O=="number"||typeof O=="boolean"?(b.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,U+N,b.__data)):O.isMatrix3?(b.__data[0]=O.elements[0],b.__data[1]=O.elements[1],b.__data[2]=O.elements[2],b.__data[3]=0,b.__data[4]=O.elements[3],b.__data[5]=O.elements[4],b.__data[6]=O.elements[5],b.__data[7]=0,b.__data[8]=O.elements[6],b.__data[9]=O.elements[7],b.__data[10]=O.elements[8],b.__data[11]=0):(O.toArray(b.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,b.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,M,S,A){const E=x.value,y=M+"_"+S;if(A[y]===void 0)return typeof E=="number"||typeof E=="boolean"?A[y]=E:A[y]=E.clone(),!0;{const C=A[y];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return A[y]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(x){const M=x.uniforms;let S=0;const A=16;for(let y=0,C=M.length;y<C;y++){const L=Array.isArray(M[y])?M[y]:[M[y]];for(let v=0,b=L.length;v<b;v++){const U=L[v],I=Array.isArray(U.value)?U.value:[U.value];for(let N=0,X=I.length;N<X;N++){const O=I[N],q=_(O),G=S%A,ne=G%q.boundary,P=G+ne;S+=ne,P!==0&&A-P<q.storage&&(S+=A-P),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=q.storage}}}const E=S%A;return E>0&&(S+=A-E),x.__size=S,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function p(x){const M=x.target;M.removeEventListener("dispose",p);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class xS{constructor(e={}){const{canvas:t=c_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=gr,this.toneMappingExposure=1;const M=this;let S=!1,A=0,E=0,y=null,C=-1,L=null;const v=new zt,b=new zt;let U=null;const I=new He(0);let N=0,X=t.width,O=t.height,q=1,G=null,ne=null;const P=new zt(0,0,X,O),ie=new zt(0,0,X,O);let Ae=!1;const Ue=new Ap;let $=!1,Q=!1;const ce=new dt,ae=new dt,we=new H,xe=new zt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function Ne(){return y===null?q:1}let D=n;function je(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qu}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ue,!1),D===null){const k="webgl2";if(D=je(k,T),D===null)throw je(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ce,Ge,z,Je,Le,R,w,Y,j,te,Z,Se,se,de,We,re,ve,Me,Oe,_e,Ye,ke,ot,F;function ee(){Ce=new bx(D),Ce.init(),ke=new cS(D,Ce),Ge=new vx(D,Ce,e,ke),z=new oS(D),Ge.reverseDepthBuffer&&z.buffers.depth.setReversed(!0),Je=new Ax(D),Le=new XM,R=new lS(D,Ce,z,Le,Ge,ke,Je),w=new Mx(M),Y=new wx(M),j=new U_(D),ot=new gx(D,j),te=new Tx(D,j,Je,ot),Z=new Rx(D,te,j,Je),Oe=new Cx(D,Ge,R),re=new xx(Le),Se=new WM(M,w,Y,Ce,Ge,ot,re),se=new _S(M,Le),de=new qM,We=new QM(Ce),Me=new mx(M,w,Y,z,Z,f,l),ve=new rS(M,Z,Ge),F=new vS(D,Je,Ge,z),_e=new _x(D,Ce,Je),Ye=new Ex(D,Ce,Je),Je.programs=Se.programs,M.capabilities=Ge,M.extensions=Ce,M.properties=Le,M.renderLists=de,M.shadowMap=ve,M.state=z,M.info=Je}ee();const K=new mS(M,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(X,O,!1))},this.getSize=function(T){return T.set(X,O)},this.setSize=function(T,k,V=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,O=k,t.width=Math.floor(T*q),t.height=Math.floor(k*q),V===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(X*q,O*q).floor()},this.setDrawingBufferSize=function(T,k,V){X=T,O=k,q=V,t.width=Math.floor(T*V),t.height=Math.floor(k*V),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(P)},this.setViewport=function(T,k,V,W){T.isVector4?P.set(T.x,T.y,T.z,T.w):P.set(T,k,V,W),z.viewport(v.copy(P).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,k,V,W){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,k,V,W),z.scissor(b.copy(ie).multiplyScalar(q).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(T){z.setScissorTest(Ae=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){ne=T},this.getClearColor=function(T){return T.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(T=!0,k=!0,V=!0){let W=0;if(T){let B=!1;if(y!==null){const oe=y.texture.format;B=oe===oh||oe===sh||oe===rh}if(B){const oe=y.texture.type,ge=oe===Li||oe===Sr||oe===Ko||oe===qs||oe===nh||oe===ih,fe=Me.getClearColor(),he=Me.getClearAlpha(),Ee=fe.r,Be=fe.g,Te=fe.b;ge?(d[0]=Ee,d[1]=Be,d[2]=Te,d[3]=he,D.clearBufferuiv(D.COLOR,0,d)):(g[0]=Ee,g[1]=Be,g[2]=Te,g[3]=he,D.clearBufferiv(D.COLOR,0,g))}else W|=D.COLOR_BUFFER_BIT}k&&(W|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),de.dispose(),We.dispose(),Le.dispose(),w.dispose(),Y.dispose(),Z.dispose(),ot.dispose(),F.dispose(),Se.dispose(),K.dispose(),K.removeEventListener("sessionstart",ct),K.removeEventListener("sessionend",pe),Fe.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Je.autoReset,k=ve.enabled,V=ve.autoUpdate,W=ve.needsUpdate,B=ve.type;ee(),Je.autoReset=T,ve.enabled=k,ve.autoUpdate=V,ve.needsUpdate=W,ve.type=B}function ue(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qe(T){const k=T.target;k.removeEventListener("dispose",qe),_t(k)}function _t(T){Tt(T),Le.remove(T)}function Tt(T){const k=Le.get(T).programs;k!==void 0&&(k.forEach(function(V){Se.releaseProgram(V)}),T.isShaderMaterial&&Se.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,V,W,B,oe){k===null&&(k=ze);const ge=B.isMesh&&B.matrixWorld.determinant()<0,fe=pt(T,k,V,W,B);z.setMaterial(W,ge);let he=V.index,Ee=1;if(W.wireframe===!0){if(he=te.getWireframeAttribute(V),he===void 0)return;Ee=2}const Be=V.drawRange,Te=V.attributes.position;let at=Be.start*Ee,st=(Be.start+Be.count)*Ee;oe!==null&&(at=Math.max(at,oe.start*Ee),st=Math.min(st,(oe.start+oe.count)*Ee)),he!==null?(at=Math.max(at,0),st=Math.min(st,he.count)):Te!=null&&(at=Math.max(at,0),st=Math.min(st,Te.count));const gt=st-at;if(gt<0||gt===1/0)return;ot.setup(B,W,fe,V,he);let Kt,Qe=_e;if(he!==null&&(Kt=j.get(he),Qe=Ye,Qe.setIndex(Kt)),B.isMesh)W.wireframe===!0?(z.setLineWidth(W.wireframeLinewidth*Ne()),Qe.setMode(D.LINES)):Qe.setMode(D.TRIANGLES);else if(B.isLine){let De=W.linewidth;De===void 0&&(De=1),z.setLineWidth(De*Ne()),B.isLineSegments?Qe.setMode(D.LINES):B.isLineLoop?Qe.setMode(D.LINE_LOOP):Qe.setMode(D.LINE_STRIP)}else B.isPoints?Qe.setMode(D.POINTS):B.isSprite&&Qe.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Qe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))Qe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const De=B._multiDrawStarts,tn=B._multiDrawCounts,ht=B._multiDrawCount,hi=he?j.get(he).bytesPerElement:1,ss=Le.get(W).currentProgram.getUniforms();for(let Bn=0;Bn<ht;Bn++)ss.setValue(D,"_gl_DrawID",Bn),Qe.render(De[Bn]/hi,tn[Bn])}else if(B.isInstancedMesh)Qe.renderInstances(at,gt,B.count);else if(V.isInstancedBufferGeometry){const De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,tn=Math.min(V.instanceCount,De);Qe.renderInstances(at,gt,tn)}else Qe.render(at,gt)};function rt(T,k,V){T.transparent===!0&&T.side===Cn&&T.forceSinglePass===!1?(T.side=Tn,T.needsUpdate=!0,Ot(T,k,V),T.side=Mr,T.needsUpdate=!0,Ot(T,k,V),T.side=Cn):Ot(T,k,V)}this.compile=function(T,k,V=null){V===null&&(V=T),p=We.get(V),p.init(k),x.push(p),V.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==V&&T.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const W=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const oe=B.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){const fe=oe[ge];rt(fe,V,B),W.add(fe)}else rt(oe,V,B),W.add(oe)}),x.pop(),p=null,W},this.compileAsync=function(T,k,V=null){const W=this.compile(T,k,V);return new Promise(B=>{function oe(){if(W.forEach(function(ge){Le.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){B(T);return}setTimeout(oe,10)}Ce.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Re=null;function be(T){Re&&Re(T)}function ct(){Fe.stop()}function pe(){Fe.start()}const Fe=new Cp;Fe.setAnimationLoop(be),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(T){Re=T,K.setAnimationLoop(T),T===null?Fe.stop():Fe.start()},K.addEventListener("sessionstart",ct),K.addEventListener("sessionend",pe),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,k,y),p=We.get(T,x.length),p.init(k),x.push(p),ae.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ue.setFromProjectionMatrix(ae),Q=this.localClippingEnabled,$=re.init(this.clippingPlanes,Q),_=de.get(T,m.length),_.init(),m.push(_),K.enabled===!0&&K.isPresenting===!0){const oe=M.xr.getDepthSensingMesh();oe!==null&&Pe(oe,k,-1/0,M.sortObjects)}Pe(T,k,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(G,ne),Ie=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ie&&Me.addToRenderList(_,T),this.info.render.frame++,$===!0&&re.beginShadows();const V=p.state.shadowsArray;ve.render(V,T,k),$===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,B=_.transmissive;if(p.setupLights(),k.isArrayCamera){const oe=k.cameras;if(B.length>0)for(let ge=0,fe=oe.length;ge<fe;ge++){const he=oe[ge];Ft(W,B,T,he)}Ie&&Me.render(T);for(let ge=0,fe=oe.length;ge<fe;ge++){const he=oe[ge];Ve(_,T,he,he.viewport)}}else B.length>0&&Ft(W,B,T,k),Ie&&Me.render(T),Ve(_,T,k);y!==null&&(R.updateMultisampleRenderTarget(y),R.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(M,T,k),ot.resetDefaultState(),C=-1,L=null,x.pop(),x.length>0?(p=x[x.length-1],$===!0&&re.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Pe(T,k,V,W){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ue.intersectsSprite(T)){W&&xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ae);const ge=Z.update(T),fe=T.material;fe.visible&&_.push(T,ge,fe,V,xe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ue.intersectsObject(T))){const ge=Z.update(T),fe=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),xe.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),xe.copy(ge.boundingSphere.center)),xe.applyMatrix4(T.matrixWorld).applyMatrix4(ae)),Array.isArray(fe)){const he=ge.groups;for(let Ee=0,Be=he.length;Ee<Be;Ee++){const Te=he[Ee],at=fe[Te.materialIndex];at&&at.visible&&_.push(T,ge,at,V,xe.z,Te)}}else fe.visible&&_.push(T,ge,fe,V,xe.z,null)}}const oe=T.children;for(let ge=0,fe=oe.length;ge<fe;ge++)Pe(oe[ge],k,V,W)}function Ve(T,k,V,W){const B=T.opaque,oe=T.transmissive,ge=T.transparent;p.setupLightsView(V),$===!0&&re.setGlobalState(M.clippingPlanes,V),W&&z.viewport(v.copy(W)),B.length>0&&$e(B,k,V),oe.length>0&&$e(oe,k,V),ge.length>0&&$e(ge,k,V),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Ft(T,k,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Zn(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?xi:Li,minFilter:Wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const oe=p.state.transmissionRenderTarget[W.id],ge=W.viewport||v;oe.setSize(ge.z,ge.w);const fe=M.getRenderTarget();M.setRenderTarget(oe),M.getClearColor(I),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear(),Ie&&Me.render(V);const he=M.toneMapping;M.toneMapping=gr;const Ee=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),$===!0&&re.setGlobalState(M.clippingPlanes,W),$e(T,V,W),R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Te=0,at=k.length;Te<at;Te++){const st=k[Te],gt=st.object,Kt=st.geometry,Qe=st.material,De=st.group;if(Qe.side===Cn&&gt.layers.test(W.layers)){const tn=Qe.side;Qe.side=Tn,Qe.needsUpdate=!0,Et(gt,V,W,Kt,Qe,De),Qe.side=tn,Qe.needsUpdate=!0,Be=!0}}Be===!0&&(R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe))}M.setRenderTarget(fe),M.setClearColor(I,N),Ee!==void 0&&(W.viewport=Ee),M.toneMapping=he}function $e(T,k,V){const W=k.isScene===!0?k.overrideMaterial:null;for(let B=0,oe=T.length;B<oe;B++){const ge=T[B],fe=ge.object,he=ge.geometry,Ee=W===null?ge.material:W,Be=ge.group;fe.layers.test(V.layers)&&Et(fe,k,V,he,Ee,Be)}}function Et(T,k,V,W,B,oe){T.onBeforeRender(M,k,V,W,B,oe),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(M,k,V,W,T,oe),B.transparent===!0&&B.side===Cn&&B.forceSinglePass===!1?(B.side=Tn,B.needsUpdate=!0,M.renderBufferDirect(V,k,W,B,T,oe),B.side=Mr,B.needsUpdate=!0,M.renderBufferDirect(V,k,W,B,T,oe),B.side=Cn):M.renderBufferDirect(V,k,W,B,T,oe),T.onAfterRender(M,k,V,W,B,oe)}function Ot(T,k,V){k.isScene!==!0&&(k=ze);const W=Le.get(T),B=p.state.lights,oe=p.state.shadowsArray,ge=B.state.version,fe=Se.getParameters(T,B.state,oe,k,V),he=Se.getProgramCacheKey(fe);let Ee=W.programs;W.environment=T.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(T.isMeshStandardMaterial?Y:w).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ee===void 0&&(T.addEventListener("dispose",qe),Ee=new Map,W.programs=Ee);let Be=Ee.get(he);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===ge)return vt(T,fe),Be}else fe.uniforms=Se.getUniforms(T),T.onBeforeCompile(fe,M),Be=Se.acquireProgram(fe,he),Ee.set(he,Be),W.uniforms=fe.uniforms;const Te=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=re.uniform),vt(T,fe),W.needsLights=bt(T),W.lightsStateVersion=ge,W.needsLights&&(Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMap.value=B.state.directionalShadowMap,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotShadowMap.value=B.state.spotShadowMap,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMap.value=B.state.pointShadowMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function wt(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=sl.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function vt(T,k){const V=Le.get(T);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.batchingColor=k.batchingColor,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.instancingMorph=k.instancingMorph,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function pt(T,k,V,W,B){k.isScene!==!0&&(k=ze),R.resetTextureUnits();const oe=k.fog,ge=W.isMeshStandardMaterial?k.environment:null,fe=y===null?M.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Ar,he=(W.isMeshStandardMaterial?Y:w).get(W.envMap||ge),Ee=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!V.morphAttributes.position,at=!!V.morphAttributes.normal,st=!!V.morphAttributes.color;let gt=gr;W.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(gt=M.toneMapping);const Kt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qe=Kt!==void 0?Kt.length:0,De=Le.get(W),tn=p.state.lights;if($===!0&&(Q===!0||T!==L)){const ei=T===L&&W.id===C;re.setState(W,T,ei)}let ht=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==tn.state.version||De.outputColorSpace!==fe||B.isBatchedMesh&&De.batching===!1||!B.isBatchedMesh&&De.batching===!0||B.isBatchedMesh&&De.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&De.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&De.instancing===!1||!B.isInstancedMesh&&De.instancing===!0||B.isSkinnedMesh&&De.skinning===!1||!B.isSkinnedMesh&&De.skinning===!0||B.isInstancedMesh&&De.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&De.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&De.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&De.instancingMorph===!1&&B.morphTexture!==null||De.envMap!==he||W.fog===!0&&De.fog!==oe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==re.numPlanes||De.numIntersection!==re.numIntersection)||De.vertexAlphas!==Ee||De.vertexTangents!==Be||De.morphTargets!==Te||De.morphNormals!==at||De.morphColors!==st||De.toneMapping!==gt||De.morphTargetsCount!==Qe)&&(ht=!0):(ht=!0,De.__version=W.version);let hi=De.currentProgram;ht===!0&&(hi=Ot(W,k,B));let ss=!1,Bn=!1,Wl=!1;const Bt=hi.getUniforms(),Qi=De.uniforms;if(z.useProgram(hi.program)&&(ss=!0,Bn=!0,Wl=!0),W.id!==C&&(C=W.id,Bn=!0),ss||L!==T){Ge.reverseDepthBuffer?(ce.copy(T.projectionMatrix),h_(ce),f_(ce),Bt.setValue(D,"projectionMatrix",ce)):Bt.setValue(D,"projectionMatrix",T.projectionMatrix),Bt.setValue(D,"viewMatrix",T.matrixWorldInverse);const ei=Bt.map.cameraPosition;ei!==void 0&&ei.setValue(D,we.setFromMatrixPosition(T.matrixWorld)),Ge.logarithmicDepthBuffer&&Bt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Bt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),L!==T&&(L=T,Bn=!0,Wl=!0)}if(B.isSkinnedMesh){Bt.setOptional(D,B,"bindMatrix"),Bt.setOptional(D,B,"bindMatrixInverse");const ei=B.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),Bt.setValue(D,"boneTexture",ei.boneTexture,R))}B.isBatchedMesh&&(Bt.setOptional(D,B,"batchingTexture"),Bt.setValue(D,"batchingTexture",B._matricesTexture,R),Bt.setOptional(D,B,"batchingIdTexture"),Bt.setValue(D,"batchingIdTexture",B._indirectTexture,R),Bt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Bt.setValue(D,"batchingColorTexture",B._colorsTexture,R));const Xl=V.morphAttributes;if((Xl.position!==void 0||Xl.normal!==void 0||Xl.color!==void 0)&&Oe.update(B,V,hi),(Bn||De.receiveShadow!==B.receiveShadow)&&(De.receiveShadow=B.receiveShadow,Bt.setValue(D,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qi.envMap.value=he,Qi.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(Qi.envMapIntensity.value=k.environmentIntensity),Bn&&(Bt.setValue(D,"toneMappingExposure",M.toneMappingExposure),De.needsLights&&On(Qi,Wl),oe&&W.fog===!0&&se.refreshFogUniforms(Qi,oe),se.refreshMaterialUniforms(Qi,W,q,O,p.state.transmissionRenderTarget[T.id]),sl.upload(D,wt(De),Qi,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(sl.upload(D,wt(De),Qi,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Bt.setValue(D,"center",B.center),Bt.setValue(D,"modelViewMatrix",B.modelViewMatrix),Bt.setValue(D,"normalMatrix",B.normalMatrix),Bt.setValue(D,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ei=W.uniformsGroups;for(let Yl=0,cg=ei.length;Yl<cg;Yl++){const Xh=ei[Yl];F.update(Xh,hi),F.bind(Xh,hi)}}return hi}function On(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function bt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,k,V){Le.get(T.texture).__webglTexture=k,Le.get(T.depthTexture).__webglTexture=V;const W=Le.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const V=Le.get(T);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,V=0){y=T,A=k,E=V;let W=!0,B=null,oe=!1,ge=!1;if(T){const he=Le.get(T);if(he.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(he.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(he.__hasExternalTextures)R.rebindTextures(T,Le.get(T.texture).__webglTexture,Le.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Te=T.depthTexture;if(he.__boundDepthTexture!==Te){if(Te!==null&&Le.has(Te)&&(T.width!==Te.image.width||T.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Ee=T.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);const Be=Le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[k])?B=Be[k][V]:B=Be[k],oe=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?B=Le.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[V]:B=Be,v.copy(T.viewport),b.copy(T.scissor),U=T.scissorTest}else v.copy(P).multiplyScalar(q).floor(),b.copy(ie).multiplyScalar(q).floor(),U=Ae;if(z.bindFramebuffer(D.FRAMEBUFFER,B)&&W&&z.drawBuffers(T,B),z.viewport(v),z.scissor(b),z.setScissorTest(U),oe){const he=Le.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,he.__webglTexture,V)}else if(ge){const he=Le.get(T.texture),Ee=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,he.__webglTexture,V||0,Ee)}C=-1},this.readRenderTargetPixels=function(T,k,V,W,B,oe,ge){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(fe=fe[ge]),fe){z.bindFramebuffer(D.FRAMEBUFFER,fe);try{const he=T.texture,Ee=he.format,Be=he.type;if(!Ge.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-W&&V>=0&&V<=T.height-B&&D.readPixels(k,V,W,B,ke.convert(Ee),ke.convert(Be),oe)}finally{const he=y!==null?Le.get(y).__webglFramebuffer:null;z.bindFramebuffer(D.FRAMEBUFFER,he)}}},this.readRenderTargetPixelsAsync=async function(T,k,V,W,B,oe,ge){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(fe=fe[ge]),fe){const he=T.texture,Ee=he.format,Be=he.type;if(!Ge.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-W&&V>=0&&V<=T.height-B){z.bindFramebuffer(D.FRAMEBUFFER,fe);const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,oe.byteLength,D.STREAM_READ),D.readPixels(k,V,W,B,ke.convert(Ee),ke.convert(Be),0);const at=y!==null?Le.get(y).__webglFramebuffer:null;z.bindFramebuffer(D.FRAMEBUFFER,at);const st=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await u_(D,st,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,oe),D.deleteBuffer(Te),D.deleteSync(st),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,V=0){T.isTexture!==!0&&(rl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-V),B=Math.floor(T.image.width*W),oe=Math.floor(T.image.height*W),ge=k!==null?k.x:0,fe=k!==null?k.y:0;R.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ge,fe,B,oe),z.unbindTexture()},this.copyTextureToTexture=function(T,k,V=null,W=null,B=0){T.isTexture!==!0&&(rl("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],k=arguments[2],B=arguments[3]||0,V=null);let oe,ge,fe,he,Ee,Be;V!==null?(oe=V.max.x-V.min.x,ge=V.max.y-V.min.y,fe=V.min.x,he=V.min.y):(oe=T.image.width,ge=T.image.height,fe=0,he=0),W!==null?(Ee=W.x,Be=W.y):(Ee=0,Be=0);const Te=ke.convert(k.format),at=ke.convert(k.type);R.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const st=D.getParameter(D.UNPACK_ROW_LENGTH),gt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Kt=D.getParameter(D.UNPACK_SKIP_PIXELS),Qe=D.getParameter(D.UNPACK_SKIP_ROWS),De=D.getParameter(D.UNPACK_SKIP_IMAGES),tn=T.isCompressedTexture?T.mipmaps[B]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,tn.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tn.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,he),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Ee,Be,oe,ge,Te,at,tn.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Ee,Be,tn.width,tn.height,Te,tn.data):D.texSubImage2D(D.TEXTURE_2D,B,Ee,Be,oe,ge,Te,at,tn),D.pixelStorei(D.UNPACK_ROW_LENGTH,st),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Kt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),B===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(T,k,V=null,W=null,B=0){T.isTexture!==!0&&(rl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,T=arguments[2],k=arguments[3],B=arguments[4]||0);let oe,ge,fe,he,Ee,Be,Te,at,st;const gt=T.isCompressedTexture?T.mipmaps[B]:T.image;V!==null?(oe=V.max.x-V.min.x,ge=V.max.y-V.min.y,fe=V.max.z-V.min.z,he=V.min.x,Ee=V.min.y,Be=V.min.z):(oe=gt.width,ge=gt.height,fe=gt.depth,he=0,Ee=0,Be=0),W!==null?(Te=W.x,at=W.y,st=W.z):(Te=0,at=0,st=0);const Kt=ke.convert(k.format),Qe=ke.convert(k.type);let De;if(k.isData3DTexture)R.setTexture3D(k,0),De=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)R.setTexture2DArray(k,0),De=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const tn=D.getParameter(D.UNPACK_ROW_LENGTH),ht=D.getParameter(D.UNPACK_IMAGE_HEIGHT),hi=D.getParameter(D.UNPACK_SKIP_PIXELS),ss=D.getParameter(D.UNPACK_SKIP_ROWS),Bn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,he),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ee),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Be),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(De,B,Te,at,st,oe,ge,fe,Kt,Qe,gt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(De,B,Te,at,st,oe,ge,fe,Kt,gt.data):D.texSubImage3D(De,B,Te,at,st,oe,ge,fe,Kt,Qe,gt),D.pixelStorei(D.UNPACK_ROW_LENGTH,tn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht),D.pixelStorei(D.UNPACK_SKIP_PIXELS,hi),D.pixelStorei(D.UNPACK_SKIP_ROWS,ss),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Bn),B===0&&k.generateMipmaps&&D.generateMipmap(De),z.unbindTexture()},this.initRenderTarget=function(T){Le.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),z.unbindTexture()},this.resetState=function(){A=0,E=0,y=null,z.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ah?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Nl?"display-p3":"srgb"}}class Ip extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class fh extends dn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Qt,u=Qt,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii extends Ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ms=new dt,Gf=new dt,Ua=[],Vf=new is,MS=new dt,go=new It,_o=new oo;class wo extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,MS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new is),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),Vf.copy(e.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Vf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),_o.copy(e.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(_o)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(go.geometry=this.geometry,go.material=this.material,go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_o.copy(this.boundingSphere),_o.applyMatrix4(n),e.ray.intersectsSphere(_o)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ms),Gf.multiplyMatrices(n,Ms),go.matrixWorld=Gf,go.raycast(e,Ua);for(let o=0,a=Ua.length;o<a;o++){const l=Ua[o];l.instanceId=s,l.object=this,t.push(l)}Ua.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fh(new Float32Array(i*this.count),i,this.count,Ul,Ci));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class SS extends ua{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wf=new dt,Au=new _p,Na=new oo,Fa=new H;class yS extends Dn{constructor(e=new on,t=new SS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=s,e.ray.intersectsSphere(Na)===!1)return;Wf.copy(i).invert(),Au.copy(e.ray).applyMatrix4(Wf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);Fa.fromBufferAttribute(h,p),Xf(Fa,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Fa.fromBufferAttribute(h,g),Xf(Fa,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xf(r,e,t,n,i,s,o){const a=Au.distanceSqToPoint(r);if(a<t){const l=new H;Au.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class $i extends on{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],p=n/2;let m=0;x(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Nt(h,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(d,2));function x(){const S=new H,A=new H;let E=0;const y=(t-e)/n;for(let C=0;C<=s;C++){const L=[],v=C/s,b=v*(t-e)+e;for(let U=0;U<=i;U++){const I=U/i,N=I*l+a,X=Math.sin(N),O=Math.cos(N);A.x=b*X,A.y=-v*n+p,A.z=b*O,h.push(A.x,A.y,A.z),S.set(X,y,O).normalize(),f.push(S.x,S.y,S.z),d.push(I,1-v),L.push(g++)}_.push(L)}for(let C=0;C<i;C++)for(let L=0;L<s;L++){const v=_[L][C],b=_[L+1][C],U=_[L+1][C+1],I=_[L][C+1];e>0&&(u.push(v,b,I),E+=3),t>0&&(u.push(b,U,I),E+=3)}c.addGroup(m,E,0),m+=E}function M(S){const A=g,E=new Xe,y=new H;let C=0;const L=S===!0?e:t,v=S===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,p*v,0),f.push(0,v,0),d.push(.5,.5),g++;const b=g;for(let U=0;U<=i;U++){const N=U/i*l+a,X=Math.cos(N),O=Math.sin(N);y.x=L*O,y.y=p*v,y.z=L*X,h.push(y.x,y.y,y.z),f.push(0,v,0),E.x=X*.5+.5,E.y=O*.5*v+.5,d.push(E.x,E.y),g++}for(let U=0;U<i;U++){const I=A+U,N=b+U;S===!0?u.push(N,N+1,I):u.push(N+1,N,I),C+=3}c.addGroup(m,C,S===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qo extends $i{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Qo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dh extends on{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Nt(s,3)),this.setAttribute("normal",new Nt(s.slice(),3)),this.setAttribute("uv",new Nt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new H,S=new H,A=new H;for(let E=0;E<t.length;E+=3)d(t[E+0],M),d(t[E+1],S),d(t[E+2],A),l(M,S,A,x)}function l(x,M,S,A){const E=A+1,y=[];for(let C=0;C<=E;C++){y[C]=[];const L=x.clone().lerp(S,C/E),v=M.clone().lerp(S,C/E),b=E-C;for(let U=0;U<=b;U++)U===0&&C===E?y[C][U]=L:y[C][U]=L.clone().lerp(v,U/b)}for(let C=0;C<E;C++)for(let L=0;L<2*(E-C)-1;L++){const v=Math.floor(L/2);L%2===0?(f(y[C][v+1]),f(y[C+1][v]),f(y[C][v])):(f(y[C][v+1]),f(y[C+1][v+1]),f(y[C+1][v]))}}function c(x){const M=new H;for(let S=0;S<s.length;S+=3)M.x=s[S+0],M.y=s[S+1],M.z=s[S+2],M.normalize().multiplyScalar(x),s[S+0]=M.x,s[S+1]=M.y,s[S+2]=M.z}function u(){const x=new H;for(let M=0;M<s.length;M+=3){x.x=s[M+0],x.y=s[M+1],x.z=s[M+2];const S=p(x)/2/Math.PI+.5,A=m(x)/Math.PI+.5;o.push(S,1-A)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){const M=o[x+0],S=o[x+2],A=o[x+4],E=Math.max(M,S,A),y=Math.min(M,S,A);E>.9&&y<.1&&(M<.2&&(o[x+0]+=1),S<.2&&(o[x+2]+=1),A<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,M){const S=x*3;M.x=e[S+0],M.y=e[S+1],M.z=e[S+2]}function g(){const x=new H,M=new H,S=new H,A=new H,E=new Xe,y=new Xe,C=new Xe;for(let L=0,v=0;L<s.length;L+=9,v+=6){x.set(s[L+0],s[L+1],s[L+2]),M.set(s[L+3],s[L+4],s[L+5]),S.set(s[L+6],s[L+7],s[L+8]),E.set(o[v+0],o[v+1]),y.set(o[v+2],o[v+3]),C.set(o[v+4],o[v+5]),A.copy(x).add(M).add(S).divideScalar(3);const b=p(A);_(E,v+0,x,b),_(y,v+2,M,b),_(C,v+4,S,b)}}function _(x,M,S,A){A<0&&x.x===1&&(o[M]=x.x-1),S.x===0&&S.z===0&&(o[M]=A/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.vertices,e.indices,e.radius,e.details)}}class Bl extends dh{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bl(e.radius,e.detail)}}class Zs extends on{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new H,f=new H,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const x=[],M=m/n;let S=0;m===0&&o===0?S=.5/t:m===n&&l===Math.PI&&(S=-.5/t);for(let A=0;A<=t;A++){const E=A/t;h.x=-e*Math.cos(i+E*s)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(i+E*s)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(E+S,1-M),x.push(c++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const M=u[m][x+1],S=u[m][x],A=u[m+1][x],E=u[m+1][x+1];(m!==0||o>0)&&d.push(M,S,E),(m!==n-1||l<Math.PI)&&d.push(S,A,E)}this.setIndex(d),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ph extends on{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new H,h=new H,f=new H;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*s,p=d/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(_),h.y=(e+t*Math.cos(p))*Math.sin(_),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,x=(i+1)*d+g;o.push(_,p,x),o.push(p,m,x)}this.setIndex(o),this.setAttribute("position",new Nt(a,3)),this.setAttribute("normal",new Nt(l,3)),this.setAttribute("uv",new Nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wS extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const Yf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class bS{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const TS=new bS;class mh{constructor(e){this.manager=e!==void 0?e:TS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}mh.DEFAULT_MATERIAL_NAME="__DEFAULT";class ES extends mh{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Yf.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=jo("img");function l(){u(),Yf.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class AS extends mh{constructor(e){super(e)}load(e,t,n,i){const s=new dn,o=new ES(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Up{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qf(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qu);const bi={ATTACH:"attach",DETACH:"detach",RESIZE:"resize",SCROLL:"scroll",SLIDE:"slide"};class CS{#e=new Map;on(e,t){return this.#e.has(e)||this.#e.set(e,new Set),this.#e.get(e).add(t),()=>this.off(e,t)}off(e,t){this.#e.get(e)?.delete(t)}emit(e,t){this.#e.get(e)?.forEach(n=>n(t))}}const Ti=new CS,RS=[{at:0,sunColor:"#ffb27a",skyTop:"#2a4a7a",skyBottom:"#ffc39a",fog:"#c9b0a4",ambient:"#4a5a78",water:"#2b5a75",intensity:.75},{at:.28,sunColor:"#fff6e0",skyTop:"#2f7fc4",skyBottom:"#bfe4f2",fog:"#cfe6ee",ambient:"#7fa0bd",water:"#1f7fa0",intensity:1.15},{at:.55,sunColor:"#ff9d52",skyTop:"#3d5f96",skyBottom:"#ffbe7c",fog:"#e0b394",ambient:"#6b6a86",water:"#2d6a86",intensity:.95},{at:.75,sunColor:"#ff6f4d",skyTop:"#1e2c52",skyBottom:"#ff8a5c",fog:"#8f7086",ambient:"#404a70",water:"#1d4460",intensity:.6},{at:.88,sunColor:"#9db4d8",skyTop:"#070d1e",skyBottom:"#101c36",fog:"#0d1730",ambient:"#18233c",water:"#0a1a2e",intensity:.16},{at:1,sunColor:"#ffb27a",skyTop:"#2a4a7a",skyBottom:"#ffc39a",fog:"#c9b0a4",ambient:"#4a5a78",water:"#2b5a75",intensity:.75}],Ss=r=>new He(r),or=RS.map(r=>({at:r.at,sunColor:Ss(r.sunColor),skyTop:Ss(r.skyTop),skyBottom:Ss(r.skyBottom),fog:Ss(r.fog),ambient:Ss(r.ambient),water:Ss(r.water),intensity:r.intensity}));class PS{constructor(){this.sunDir=new H,this.sunColor=new He,this.skyTop=new He,this.skyBottom=new He,this.fogColor=new He,this.ambient=new He,this.waterColor=new He,this.intensity=1,this.update(0)}update(e){const t=(e%1+1)%1,n=t*Math.PI*2,i=Math.sin(n*.5+.35)*.62+.22;this.sunDir.set(Math.sin(n),Math.max(i,-.25),Math.cos(n)).normalize();let s=or[0],o=or[or.length-1];for(let u=0;u<or.length-1;u++)if(t>=or[u].at&&t<=or[u+1].at){s=or[u],o=or[u+1];break}const a=o.at-s.at||1,l=xn.clamp((t-s.at)/a,0,1),c=l*l*(3-2*l);this.sunColor.copy(s.sunColor).lerp(o.sunColor,c),this.skyTop.copy(s.skyTop).lerp(o.skyTop,c),this.skyBottom.copy(s.skyBottom).lerp(o.skyBottom,c),this.fogColor.copy(s.fog).lerp(o.fog,c),this.ambient.copy(s.ambient).lerp(o.ambient,c),this.waterColor.copy(s.water).lerp(o.water,c),this.intensity=xn.lerp(s.intensity,o.intensity,c)}}function Oa(r,e){let t=r*374761393+e*668265263;return t=(t^t>>13)*1274126177,((t^t>>16)>>>0)/4294967295}const $f=r=>r*r*(3-2*r),yc=(r,e,t)=>r+(e-r)*t;function DS(r,e){const t=Math.floor(r),n=Math.floor(e),i=r-t,s=e-n,o=Oa(t,n),a=Oa(t+1,n),l=Oa(t,n+1),c=Oa(t+1,n+1),u=$f(i),h=$f(s);return yc(yc(o,a,u),yc(l,c,u),h)*2-1}function Fs(r,e,t=5,n=2,i=.5){let s=.5,o=1,a=0,l=0;for(let c=0;c<t;c++)a+=s*DS(r*o,e*o),l+=s,o*=n,s*=i;return a/l}const An=512;function Kf(r,e){const t=r*r+e*e-1;return t*t*t-r*r*e*e*e}function LS(r){const e=Math.cos(r),t=Math.sin(r),n=.01,i=2;let s=0;for(let o=n;o<=i;o+=n){if(Kf(e*o,t*o)>0){let a=s,l=o;for(let c=0;c<24;c++){const u=(a+l)*.5;Kf(e*u,t*u)>0?l=u:a=u}return(a+l)*.5}s=o}return i}function IS(r=-.6){const e=new Float32Array(An);let t=0;for(let n=0;n<An;n++){const i=n/An*Math.PI*2-Math.PI,s=LS(i-r);e[n]=s,s>t&&(t=s)}for(let n=0;n<An;n++)e[n]/=t;return e}function Zf(r,e){const t=(e+Math.PI)/(Math.PI*2)*An,n=Math.floor(t),i=t-n,s=r[(n%An+An)%An],o=r[((n+1)%An+An)%An];return s+(o-s)*i}const Ji=`
/**
 * This is called 352 times per terrain pixel — eight per gnoise, four octaves
 * of gnoise per fbm3, eleven fbm3 per fragment — so it looks like the obvious
 * thing to optimise, and the sin() looks like the obvious thing to remove.
 *
 * It was measured. Swapping in the usual fract-multiply hash (Dave Hoskins'
 * hash33) made the frame 15% SLOWER on an Intel UHD 630: transcendentals run on
 * a dedicated unit that is otherwise idle here, while the fract version is a
 * chain of dependent multiplies competing for the same ALU as everything else
 * in the shader. The intuition that sin is expensive is a CPU intuition.
 *
 * Left alone deliberately. If this is ever revisited, measure it with
 * EXT_disjoint_timer_query on the target hardware — wall-clock timing around
 * readPixels was too noisy on this machine to tell the two apart, and would
 * have supported either conclusion.
 */
vec3 hash33(vec3 p){
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return fract(sin(p) * 43758.5453123) * 2.0 - 1.0;
}

float gnoise(vec3 p){
  vec3 i = floor(p);
  vec3 f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(dot(hash33(i + vec3(0,0,0)), f - vec3(0,0,0)),
            dot(hash33(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
        mix(dot(hash33(i + vec3(0,1,0)), f - vec3(0,1,0)),
            dot(hash33(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
    mix(mix(dot(hash33(i + vec3(0,0,1)), f - vec3(0,0,1)),
            dot(hash33(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
        mix(dot(hash33(i + vec3(0,1,1)), f - vec3(0,1,1)),
            dot(hash33(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y),
    u.z);
}

float fbm3(vec3 p){
  float a = 0.5;
  float s = 0.0;
  for (int i = 0; i < 4; i++) {
    s += a * gnoise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return s;
}
`,US=300,gh=`
const float CLOUD_H = ${US.toFixed(1)};

vec2 cloudWind(float t) {
  return vec2(t * 0.012, t * 0.006);
}

// Billowed fbm: warping the sample point by another fbm turns smooth blobs
// into structure with torn edges and wisps.
float cloudFbm(vec2 p, float t) {
  vec2 warp = vec2(
    fbm3(vec3(p * 0.9 + 11.3, t * 0.045)),
    fbm3(vec3(p * 0.9 - 7.1,  t * 0.045 + 3.7))
  );
  return fbm3(vec3(p + warp * 0.85, t * 0.03)) * 0.5 + 0.5;
}

// Density 0..1 on the cloud plane. Coverage moves it from clear to overcast.
// (No backticks in comments inside this template literal — one would close it.)
//
// Two things separate cloud from haze, and the old single wide smoothstep had
// neither. A cloud has an EDGE: the transition from cloud to sky happens over
// a short distance, not across the whole range of the noise. And cloud comes
// in SYSTEMS: there are tracts of sky with nothing in them, rather than a thin
// veil everywhere. Miss both and any amount of coverage reads as fog.
/**
 * OPTICAL DEPTH, not a mask.
 *
 * Coverage says how much of the sky has cloud over it. It says nothing about
 * how much cloud, and that is the difference between a cloud field and a
 * stencil. A threshold returns a cut-out: everything that passes is equally
 * opaque and the edge is a line. Real cloud varies continuously in thickness —
 * dense cores that shut out the sky, thin margins you can see blue through,
 * and every value between. That variation is most of what reads as real, and
 * it is also what makes the field look three-dimensional, because thickness is
 * what decides how much light gets through to any given part of it.
 *
 * So this returns depth, and the caller turns depth into opacity and into
 * lighting. Two scales combine: where the weather systems are at all, and how
 * far above the condensation level each parcel of air within them sits.
 */
float cloudDepth(vec2 p, float t, float coverage) {
  // Where the weather is. Low frequency and slow — this is the scale that
  // gives whole tracts of clear sky between one system and the next.
  float systems = fbm3(vec3(p * 0.21, t * 0.012)) * 0.5 + 0.5;
  float where = smoothstep(0.50 - coverage * 0.26, 0.70 - coverage * 0.22, systems);
  if (where <= 0.001) return 0.0;

  // How far this parcel rises above the level where it condenses. Below it
  // there is no cloud at all; above it, depth grows smoothly — which is what
  // gives a single cloud a thick middle and thin edges instead of one flat
  // opacity bounded by a hard line.
  float base = cloudFbm(p * 0.55, t);
  float lift = base - (0.545 - coverage * 0.10);
  if (lift <= 0.0) return 0.0;

  return lift * 7.0 * where;
}

/**
 * Depth to opacity. Beer-Lambert: thin margins let the sky through, cores do
 * not, and the falloff between them is smooth rather than stepped.
 */
float cloudOpacity(float depth) {
  return 1.0 - exp(-depth * 1.55);
}

/** Kept for callers that only need "how much cloud is over this point". */
float cloudDensity(vec2 p, float t, float coverage) {
  return cloudOpacity(cloudDepth(p, t, coverage));
}

/**
 * Plane coordinates for a view direction — this is what the sky samples.
 * Dividing by dir.y is what gives the deck perspective: overhead cells stay
 * large while distant ones crowd toward the horizon.
 */
vec2 cloudPlaneFromDir(vec3 dir, float t) {
  return (dir.xz / dir.y) * 0.30 + cloudWind(t);
}

/**
 * Push the cloud field away from a point, falling off with distance.
 *
 * This is what makes the pointer feel like it is stirring the deck rather than
 * sliding a texture. It works in cloud-plane coordinates so the sky sampling
 * and the ground shadows can be given the same centre — disturbing one but not
 * the other would be immediately obvious from above, where you see mostly
 * shadows.
 */
vec2 cloudStir(vec2 p, vec2 centre, float radius, float strength) {
  vec2 d = p - centre;
  float fall = smoothstep(radius, 0.0, length(d));
  return p + normalize(d + vec2(1e-4)) * fall * strength;
}

/**
 * Depth again, for shadows only — same field, a third of the cost.
 *
 * cloudDepth runs cloudFbm, which spends two of its three fbm calls warping the
 * sample point to give the deck torn edges and wisps. That detail is the
 * difference between cloud and a blob when you are looking at the sky. It is
 * invisible in a shadow cast from 300 units up onto sand: the projection is
 * soft, the ground is textured, and nobody has the original to compare against.
 *
 * So shadows read the unwarped field. Four fbm3 calls become two, on every
 * terrain and water fragment on screen — which is the majority of the frame.
 * The systems term is kept, because that is what decides where there is cloud
 * at all, and dropping it would put shadows under clear sky.
 */
float cloudShadowDepth(vec2 p, float t, float coverage) {
  float systems = fbm3(vec3(p * 0.21, t * 0.012)) * 0.5 + 0.5;
  float where = smoothstep(0.50 - coverage * 0.26, 0.70 - coverage * 0.22, systems);
  if (where <= 0.001) return 0.0;

  float base = fbm3(vec3(p * 0.55, t * 0.03)) * 0.5 + 0.5;
  float lift = base - (0.545 - coverage * 0.10);
  if (lift <= 0.0) return 0.0;

  return lift * 7.0 * where;
}

/**
 * Shadow multiplier for a point on the ground.
 *
 * Walks from the surface toward the sun until it reaches the deck, then reads
 * the same density the sky would draw there. Because both use
 * cloudPlaneFromDir's scale, a shadow always lands under an actual cloud.
 */
float cloudShadow(vec3 worldPos, vec3 sunDir, float t, float coverage,
                  float strength, vec2 stirCentre) {
  // Sun on or below the horizon: everything is in shadow anyway, and the
  // projection blows up as sunDir.y approaches zero.
  if (sunDir.y < 0.06) return 1.0;

  vec2 hit = worldPos.xz + sunDir.xz * ((CLOUD_H - worldPos.y) / sunDir.y);
  vec2 p = (hit / CLOUD_H) * 0.30 + cloudWind(t);
  p = cloudStir(p, stirCentre, 0.42, 0.10);

  // Opacity, so a thin margin barely dims the ground and a dense core throws
  // a real shadow — the same variation the sky is drawing.
  float d = cloudOpacity(cloudShadowDepth(p, t, coverage));
  return 1.0 - d * strength;
}
`,ha=`
/**
 * Per-channel extinction, per world unit travelled.
 *
 * Calibrated against this scene's scale (seabed ~30 units down, view distances
 * 30-60): red is ~90% gone by 20 units, green halves by 30, blue barely moves.
 * Getting these an order of magnitude too small is what makes an underwater
 * scene render in the sun's own colour — a dusk sun paints the seabed red,
 * which is exactly the giveaway that the water is not absorbing anything.
 */
const vec3 UW_ABSORB = vec3(0.115, 0.023, 0.0056);

/**
 * Apply the medium to a colour.
 *   dist     — how far the light travelled through water to reach the eye
 *   tint     — the colour of the surrounding water at this depth
 *   amount   — 0 above the surface, 1 fully submerged (smoothed at the cross)
 */
vec3 underwaterMedium(vec3 color, float dist, vec3 tint, float amount) {
  if (amount <= 0.001) return color;
  vec3 absorb = exp(-UW_ABSORB * dist);
  color *= mix(vec3(1.0), absorb, amount);
  // Visibility, roughly: at 0.022 everything past ~60 units is pure tint and
  // the reef reads as one flat colour. Clear tropical water is far clearer
  // than that, and the scene needs the depth cue more than it needs the haze.
  float scatter = 1.0 - exp(-dist * 0.0085);
  return mix(color, tint, scatter * amount);
}

/**
 * The colour distance converges to underwater.
 *
 * Deriving it purely from the atmosphere's water colour looks right on paper
 * and fails at dusk: that colour is stored linear, so a hex that reads as a
 * respectable teal is a near-black triple once it is scaled. The constant is a
 * floor — deep water at night is dark, never unlit.
 */
vec3 deepWater(vec3 waterColor) {
  return waterColor * 0.42 + vec3(0.035, 0.115, 0.175);
}

/**
 * Caustics — the moving light net on the seabed.
 *
 * Two drifting noise fields subtracted from each other: the ridge where they
 * cross is thin and branching, which is what the real thing looks like. Raised
 * to a high power so it stays as sharp filaments rather than soft blobs.
 */
float caustics(vec2 p, float t) {
  float n1 = fbm3(vec3(p * 0.36 + vec2(t * 0.048, -t * 0.031), t * 0.09));
  float n2 = fbm3(vec3(p * 0.51 - vec2(t * 0.037, t * 0.055), t * 0.11 + 4.7));
  float ridge = 1.0 - abs(n1 - n2);
  return pow(clamp(ridge, 0.0, 1.0), 9.0);
}
`,NS=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,FS=`
precision highp float;

uniform vec3 uSkyTop;
uniform vec3 uSkyBottom;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uAmbient;
uniform vec3 uFogColor;
uniform float uIntensity;
uniform float uTime;
uniform float uCoverage;
uniform vec2 uStir;
uniform float uUnderwater;
uniform vec3 uWaterColor;

varying vec3 vDir;

${Ji}
${gh}
${ha}

void main() {
  vec3 dir = normalize(vDir);
  vec3 sun = normalize(uSunDir);

  // --- Sky gradient ---------------------------------------------------
  float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
  vec3 col = mix(uSkyBottom, uSkyTop, pow(h, 0.85));

  // --- Sun glow + disc ------------------------------------------------
  float d = max(dot(dir, sun), 0.0);
  float glow = pow(d, 48.0) * 0.85 + pow(d, 6.0) * 0.18;
  float disc = smoothstep(0.9985, 0.9993, d);
  col += uSunColor * (glow + disc * 2.2) * uIntensity;

  float horizonWarm = pow(1.0 - abs(dir.y), 6.0)
    * max(dot(normalize(vec3(dir.x, 0.0, dir.z)),
              normalize(vec3(sun.x, 0.0, sun.z))), 0.0);
  col += uSunColor * horizonWarm * 0.12 * uIntensity;

  // --- Clouds ---------------------------------------------------------
  if (dir.y > 0.015) {
    // Stirred around the point the cursor touches the sea — the same centre
    // the shadows use, so deck and shadow are disturbed as one event.
    vec2 p1 = cloudStir(cloudPlaneFromDir(dir, uTime), uStir, 0.42, 0.10);

    // Thickness, not presence. Everything below reads off it: how much sky
    // shows through, and how much sunlight reaches this part of the cloud.
    float depth = cloudDepth(p1, uTime, uCoverage);
    float c1 = cloudOpacity(depth);

    // Cirrus. Deliberately thresholded high and kept faint: as a veil across
    // the whole sky it was doing more than anything else to make the frame
    // look hazy. It should be a few streaks, not a wash.
    vec2 uv = dir.xz / dir.y;
    vec2 p2 = vec2(uv.x * 0.10, uv.y * 0.42) + cloudWind(uTime) * 2.1;
    float c2 = smoothstep(0.66, 0.86, cloudFbm(p2, uTime * 1.6))
             * (0.10 + uCoverage * 0.16);

    // Light reaching this parcel, attenuated by however much cloud stands
    // between it and the sun. This is why a cumulus is brilliant at the rim and
    // grey in the middle: the core has the most cloud above it, so the least
    // light gets down to it. Comparing two opacities could never produce that —
    // opacity saturates, and depth does not.
    vec2 toSun = normalize(sun.xz + vec2(0.0001)) * 0.55;
    float depthSun = cloudDepth(p1 + toSun * 0.5, uTime, uCoverage)
                   + cloudDepth(p1 + toSun, uTime, uCoverage);
    float lit = exp(-depthSun * 0.55);

    vec3 sunlitTop = mix(vec3(1.0), uSunColor, 0.42) * (0.75 + 0.45 * uIntensity);
    vec3 shadedBase = mix(uSkyTop * 1.05, uAmbient, 0.55);
    vec3 cloudCol = mix(shadedBase, sunlitTop, lit);

    // Rim glow when looking near the sun through thinning cloud.
    float rim = pow(max(dot(dir, sun), 0.0), 9.0) * (1.0 - lit);
    cloudCol += uSunColor * rim * 0.85 * uIntensity;

    float density = clamp(c1 + c2 * (1.0 - c1), 0.0, 1.0);

    // Fade into haze at the horizon and thin out directly overhead, so the
    // deck has a believable near edge instead of ending at the dome seam.
    float horizonFade = smoothstep(0.015, 0.16, dir.y);
    float zenithThin  = 1.0 - smoothstep(0.72, 1.0, dir.y) * 0.35;
    density *= horizonFade * zenithThin;

    // Only the last of the fade goes to haze — clouds near the horizon are
    // still clouds, and pulling them to fog colour early greys the whole band.
    cloudCol = mix(cloudCol, uFogColor, (1.0 - horizonFade) * 0.45);
    col = mix(col, cloudCol, density);
  }

  // Underwater there is no sky to see: scattering closes the view long before
  // any horizon. Without this the dome shows through wherever the seabed ends,
  // and a dusk sky paints the whole dive orange.
  col = underwaterMedium(col, 420.0, deepWater(uWaterColor), uUnderwater);

  gl_FragColor = vec4(col, 1.0);
}
`,bo=2048,Ba=62,jf=260;class OS{constructor(e){this.renderer=e,this.target=new Zn(bo,bo),this.target.texture.minFilter=Qt,this.target.texture.magFilter=Qt,this.target.texture.generateMipmaps=!1,this.target.depthTexture=new hh(bo,bo),this.target.depthTexture.type=Sr,this.target.depthTexture.minFilter=Qt,this.target.depthTexture.magFilter=Qt,this.camera=new ch(-Ba,Ba,Ba,-Ba,1,jf),this.depthMaterial=new Fl({color:0}),this.matrix=new dt,this._bias=new dt().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1)}get texture(){return this.target.depthTexture}update(e,t,n){if(t.y<.06)return!1;this.camera.position.copy(t).multiplyScalar(jf*.55),this.camera.lookAt(0,0,0),this.camera.updateMatrixWorld(),this.camera.updateProjectionMatrix(),this.matrix.copy(this._bias).multiply(this.camera.projectionMatrix).multiply(this.camera.matrixWorldInverse);const i=[];e.traverse(a=>{(a.isMesh||a.isPoints)&&(i.push([a,a.visible]),a.visible=!1)});for(const a of n)a?.traverse?.(l=>{l.isMesh&&(l.visible=!0)}),a?.isMesh&&(a.visible=!0);const s=this.renderer.getRenderTarget(),o=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,this.renderer.setRenderTarget(this.target),this.renderer.clear(),this.renderer.render(e,this.camera),e.overrideMaterial=o,this.renderer.setRenderTarget(s);for(const[a,l]of i)a.visible=l;return!0}}const _h=`
uniform sampler2D uShadowMap;
uniform mat4 uShadowMatrix;
uniform float uShadowOn;

float sunShadow(vec3 worldPos, vec3 N, vec3 L) {
  if (uShadowOn < 0.5) return 1.0;

  vec4 lp = uShadowMatrix * vec4(worldPos, 1.0);
  vec3 c = lp.xyz / lp.w;
  if (c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0 || c.z > 1.0) return 1.0;

  float ndl = max(dot(N, L), 0.0);
  float bias = mix(0.0022, 0.00035, ndl);

  float lit = 0.0;
  float texel = 1.0 / ${bo}.0;
  for (int x = -1; x <= 1; x++) {
    for (int y = -1; y <= 1; y++) {
      float d = texture2D(uShadowMap, c.xy + vec2(float(x), float(y)) * texel).r;
      lit += (c.z - bias) > d ? 0.0 : 1.0;
    }
  }
  lit /= 9.0;

  // Fade the shadow out at the edge of the map instead of ending it on a line.
  vec2 e = min(c.xy, 1.0 - c.xy);
  float edge = smoothstep(0.0, 0.04, min(e.x, e.y));
  return mix(1.0, lit, edge);
}
`,BS=`
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vHeight;

void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = normalize(mat3(modelMatrix) * normal);
  vHeight = position.y;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,kS=`
precision highp float;

uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uAmbient;
uniform vec3 uFogColor;
uniform vec3 uWaterColor;
uniform float uIntensity;
uniform float uFogNear;
uniform float uFogFar;
uniform vec3 uCameraPos;

// --- Photo projection ------------------------------------------------
// An aerial photograph projected straight down onto the terrain. When one is
// present it replaces the procedural albedo; the lighting maths below is
// untouched, which is exactly why this hybrid keeps the light sweep working.
uniform sampler2D uPhotoMap;
uniform float uHasPhoto;   // 0 = procedural, 1 = photo
uniform float uPhotoSize;  // world units the photo spans
uniform float uDelight;    // how hard to flatten the photo's own baked shading

uniform float uTime;
uniform float uCoverage;
uniform vec2 uStir;
uniform float uUnderwater;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vHeight;

${Ji}
${gh}
${ha}
${_h}

/**
 * Surface detail the mesh cannot hold.
 *
 * The terrain is a 240x240 grid over 150 units, so a quad is more than half a
 * metre across — every grain of sand and every crack in the rock is below what
 * the geometry can express. Perturbing the normal from noise gradients puts it
 * back, and it is most of the difference between ground and a coloured shape.
 */
/**
 * Two scales, and they do NOT fade out together.
 *
 * Each scale costs three fbm3 calls, because a gradient by finite difference
 * needs the centre sample and one per axis. Six calls is the single most
 * expensive thing in this shader, so the question is how far away each scale
 * is still worth paying for.
 *
 * The coarse scale is undulation a half-metre quad cannot hold, and it reads
 * across the whole island. The fine scale is grain — at a frequency of 9.5 its
 * features are ~10cm, which is under a pixel by about thirty units out, where
 * it stops being detail and becomes noise for the mipmap chain to fight. It
 * used to fade on the same 20..120 ramp as the coarse scale, so most of the
 * island on screen was paying three fbm3 calls for something it could not
 * show. Ending it at 40 drops those calls for everything beyond, which on a
 * wide shot is nearly all of the island.
 */
vec3 detailNormal(vec3 p, vec3 N, float amount, float viewDist) {
  if (amount < 0.01) return N;
  float e = 0.16;
  float h  = fbm3(p * 2.6);
  float hx = fbm3(p + vec3(e, 0.0, 0.0) * 2.6);
  float hz = fbm3(p + vec3(0.0, 0.0, e) * 2.6);
  vec3 bump = vec3(h - hx, 0.0, h - hz) * 5.5;

  float fine = 1.0 - smoothstep(14.0, 40.0, viewDist);
  if (fine > 0.01) {
    float f = 0.05;
    float g  = fbm3(p * 9.5 + 13.0);
    float gx = fbm3(p * 9.5 + vec3(f, 0.0, 0.0) + 13.0);
    float gz = fbm3(p * 9.5 + vec3(0.0, 0.0, f) + 13.0);
    bump += vec3(g - gx, 0.0, g - gz) * 2.2 * fine;
  }

  return normalize(N + bump * amount);
}

void main() {
  vec3 N = normalize(vNormal);
  vec3 L = normalize(uSunDir);
  vec3 V = normalize(uCameraPos - vWorldPos);

  // Detail fades with distance so it never turns into aliasing.
  float viewDist = length(uCameraPos - vWorldPos);
  N = detailNormal(vWorldPos, N, (1.0 - smoothstep(20.0, 120.0, viewDist)) * 0.65, viewDist);

  float slope = 1.0 - clamp(N.y, 0.0, 1.0);
  float grain = fbm3(vWorldPos * 0.35) * 0.5 + 0.5;

  // --- Albedo: sand → grass → rock -----------------------------------
  vec3 sand  = mix(vec3(0.86, 0.77, 0.60), vec3(0.78, 0.68, 0.51), grain);
  vec3 grass = mix(vec3(0.25, 0.38, 0.22), vec3(0.34, 0.47, 0.26), grain);
  vec3 rock  = mix(vec3(0.36, 0.33, 0.30), vec3(0.47, 0.44, 0.40), grain);

  // Beach band sits just above the waterline.
  float beach = 1.0 - smoothstep(0.15, 1.5, vHeight);
  float veg   = smoothstep(0.9, 2.6, vHeight) * (1.0 - smoothstep(0.35, 0.62, slope));

  vec3 albedo = mix(grass, sand, beach);
  albedo = mix(albedo, rock, smoothstep(0.38, 0.70, slope));
  albedo = mix(albedo, grass, veg * 0.55);

  // --- Photo albedo (top-down projection) -----------------------------
  if (uHasPhoto > 0.5) {
    vec2 uv = vWorldPos.xz / uPhotoSize + 0.5;
    vec3 photo = texture2D(uPhotoMap, uv).rgb;

    // De-light: a photo already contains the sun that shot it. Normalising
    // toward its own luminance flattens that baked shading so OUR sun is the
    // only light in the scene — without this the photo fights the drag sweep.
    float lum = max(dot(photo, vec3(0.2126, 0.7152, 0.0722)), 0.04);
    vec3 flat_ = photo * (0.5 / lum);
    photo = mix(photo, flat_, uDelight);

    // Outside the photo's footprint, fall back to the procedural blend.
    vec2 edge = smoothstep(vec2(0.0), vec2(0.06), uv) *
                (1.0 - smoothstep(vec2(0.94), vec2(1.0), uv));
    float inside = edge.x * edge.y;

    albedo = mix(albedo, photo, inside);
  }

  // --- Lighting -------------------------------------------------------
  // Wrapped lambert keeps the terminator soft, which reads better than hard
  // N·L when the sun is low during the drag sweep.
  float ndl = dot(N, L);
  float wrapped = clamp((ndl + 0.35) / 1.35, 0.0, 1.0);

  // Cheap sky occlusion: valleys darker than exposed faces.
  float ao = mix(0.72, 1.0, clamp(N.y * 0.5 + 0.5, 0.0, 1.0));

  // Same cloud field the sky draws, so shadows land under actual clouds.
  // Cloud overhead, and anything standing between this point and the sun.
  float shade = cloudShadow(vWorldPos, L, uTime, uCoverage, 0.45, uStir)
              * sunShadow(vWorldPos, N, L);

  // Wet sand: a band that the water has just been over. It is darker, smoother
  // and it shines — the single cue that separates a beach from a sand-coloured
  // slope, and it sits exactly where the shore foam breaks.
  float wet = (1.0 - smoothstep(0.05, 1.35, vHeight)) * (1.0 - smoothstep(0.4, 0.75, slope));
  albedo *= mix(1.0, 0.62, wet);

  vec3 diffuse = uSunColor * wrapped * uIntensity * shade;
  vec3 ambient = uAmbient * ao * 0.85;

  // Rim light picks out the silhouette against the sky when the sun is behind.
  float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0) * max(dot(-V, L) * 0.5 + 0.5, 0.0);
  vec3 color = albedo * (diffuse + ambient) + uSunColor * rim * 0.35 * uIntensity;

  // Specular. Dry sand and rock are rough and barely glint; wet sand is close
  // to a mirror. One lobe, with roughness driven by how wet the ground is.
  vec3 H = normalize(L + V);
  float rough = mix(0.62, 0.16, wet);
  float a = rough * rough;
  float a2 = a * a;
  float ndh = max(dot(N, H), 0.0);
  float dTerm = ndh * ndh * (a2 - 1.0) + 1.0;
  float ggx = a2 / (3.14159265 * dTerm * dTerm + 1e-5);
  float fres = 0.03 + 0.97 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
  color += uSunColor * ggx * fres * max(dot(N, L), 0.0)
         * mix(0.05, 0.55, wet) * uIntensity * shade;

  // --- Fog ------------------------------------------------------------
  float dist = length(uCameraPos - vWorldPos);

  // Submerged parts of the island belong to the water, not the air.
  float submerged = max(uUnderwater, smoothstep(0.6, -1.2, vWorldPos.y));

  // Caustics on the sand. The lagoon floor IS this terrain, not the reef bed,
  // so without this the shallow water a diver swims over has no moving light
  // on it at all — which is most of why going under there looked like nothing
  // happened. Strongest in the shallows, gone by the time it is deep.
  if (submerged > 0.01) {
    float shallow = 1.0 - smoothstep(0.0, 16.0, -vWorldPos.y);
    float caus = caustics(vWorldPos.xz, uTime) * clamp(N.y, 0.0, 1.0);
    color += uSunColor * caus * shallow * submerged * 1.35 * uIntensity * shade;
  }

  color = underwaterMedium(color, dist, deepWater(uWaterColor), submerged);

  float fog = smoothstep(uFogNear, uFogFar, dist);
  color = mix(color, uFogColor, fog * (1.0 - uUnderwater));

  gl_FragColor = vec4(color, 1.0);
}
`,Np=.22,zS=`
float swellHeight(vec2 p, float t) {
  float h = 0.0;
  h += sin(dot(p, vec2( 0.62,  0.78)) * 0.42 + t * 0.95) * 0.34;
  h += sin(dot(p, vec2(-0.85,  0.52)) * 0.71 + t * 1.35) * 0.20;
  h += sin(dot(p, vec2( 0.31, -0.95)) * 1.28 + t * 1.85) * 0.10;
  return h;
}
`;function ol(r,e,t){let n=0;return n+=Math.sin((r*.62+e*.78)*.42+t*.95)*.34,n+=Math.sin((r*-.85+e*.52)*.71+t*1.35)*.2,n+=Math.sin((r*.31+e*-.95)*1.28+t*1.85)*.1,n}function HS(r,e,t,n=.6){const i=ol(r,e,t),s=ol(r+n,e,t),o=ol(r,e+n,t);return{x:i-s,y:n,z:i-o}}const GS=`
${zS}
float waveHeight(vec2 p, float t) {
  return swellHeight(p, t) + fbm3(vec3(p * 0.075, t * 0.16)) * ${Np.toFixed(2)};
}
`,VS=`
uniform sampler2D uHeartLUT;
uniform float uHeartScale;

float coastRadius(vec2 xz) {
  float theta = atan(xz.y, xz.x);
  float u = (theta + 3.14159265) / 6.28318530;
  return texture2D(uHeartLUT, vec2(u, 0.5)).r * uHeartScale;
}
`,WS=`
uniform float uTime;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vCrest;

${Ji}
${GS}

void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);

  float h = waveHeight(wp.xz, uTime);
  wp.y += h;

  // Finite-difference normal from the same height field.
  float e = 0.55;
  float hx = waveHeight(wp.xz + vec2(e, 0.0), uTime);
  float hz = waveHeight(wp.xz + vec2(0.0, e), uTime);
  vNormal = normalize(vec3(h - hx, e, h - hz));

  vCrest = h;
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,XS=`
precision highp float;

uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyTop;
uniform vec3 uSkyBottom;
uniform vec3 uWaterColor;
uniform vec3 uAmbient;
uniform vec3 uFogColor;
uniform vec3 uCameraPos;
uniform float uIntensity;
uniform float uTime;
uniform float uFogNear;
uniform float uFogFar;
uniform float uCoverage;
uniform vec2 uStir;
uniform float uUnderwater;
uniform samplerCube uEnvMap;
uniform float uHasEnv;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vCrest;

${Ji}
${gh}
${ha}
${VS}
${_h}

/**
 * Ripples below the mesh resolution.
 *
 * The vertex displacement carries the swell — metres of it, at the scale the
 * geometry can hold. Everything finer than a vertex has to arrive as normals,
 * and its absence is most of why untextured water reads as a plastic membrane:
 * a real surface is never smooth at the scale that catches light.
 *
 * Two octaves, drifting at different rates so they never lock into a pattern.
 */
vec3 rippleNormal(vec2 p, float t) {
  float e = 0.4;
  float h  = fbm3(vec3(p * 1.15, t * 0.85));
  float hx = fbm3(vec3((p + vec2(e, 0.0)) * 1.15, t * 0.85));
  float hz = fbm3(vec3((p + vec2(0.0, e)) * 1.15, t * 0.85));
  vec3 coarse = normalize(vec3(h - hx, e * 1.5, h - hz));

  float f = 0.12;
  float g  = fbm3(vec3(p * 5.2 + 37.0, t * 1.9));
  float gx = fbm3(vec3((p + vec2(f, 0.0)) * 5.2 + 37.0, t * 1.9));
  float gz = fbm3(vec3((p + vec2(0.0, f)) * 5.2 + 37.0, t * 1.9));
  vec3 fine = normalize(vec3(g - gx, f * 2.2, g - gz));

  return normalize(coarse + fine * 0.55);
}

/**
 * The island's own shadow, thrown across the water.
 *
 * Nothing in this scene casts a shadow, and at a low sun that absence is loud:
 * an island sitting in blazing water with no shadow reads as a sticker. This
 * marches back along the sun ray and asks whether it passed through the island,
 * using the same coastline the beach and the surf already agree on — so the
 * shadow lands under the actual shape rather than under a circle.
 */
float islandShadow(vec3 p, vec3 L) {
  if (L.y < 0.06) return 1.0;

  float lit = 1.0;
  for (int i = 1; i <= 7; i++) {
    vec3 q = p + L * (float(i) * 7.0);
    float rr = length(q.xz) / max(coastRadius(q.xz), 0.001);
    if (rr < 1.0) {
      // The island's profile, near enough: a dome inside the coastline.
      float top = pow(1.0 - rr, 1.15) * 12.5;
      lit = min(lit, smoothstep(0.0, 3.5, q.y - top));
    }
  }
  return mix(0.34, 1.0, lit);
}

/** GGX. A real specular lobe is what turns a dot of sun into a glitter path. */
float ggxSpec(vec3 N, vec3 V, vec3 L, float rough) {
  vec3 H = normalize(V + L);
  float a = rough * rough;
  float a2 = a * a;
  float ndh = max(dot(N, H), 0.0);
  float d = ndh * ndh * (a2 - 1.0) + 1.0;
  return a2 / (3.14159265 * d * d + 1e-5);
}

/**
 * The sky a reflected ray lands on — gradient AND sun.
 *
 * Reflecting a two-colour gradient is why calm water so often looks like
 * coloured glass: the sun is missing from the thing being reflected, so the
 * surface can never throw it back.
 */
vec3 skySample(vec3 dir, vec3 sun) {
  // The real sky, captured into a cube map — clouds, sun and all. This is why
  // the deck overhead now appears in the water instead of only above it.
  if (uHasEnv > 0.5) return textureCube(uEnvMap, dir).rgb;

  // Fallback until the first capture lands.
  float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
  vec3 col = mix(uSkyBottom, uSkyTop, pow(h, 0.85));
  float d = max(dot(dir, sun), 0.0);
  col += uSunColor * (pow(d, 46.0) * 0.75 + pow(d, 6.0) * 0.16) * uIntensity;
  return col;
}

/**
 * The surface seen from underneath.
 *
 * Refraction squeezes the entire sky into a cone about 48 degrees off vertical
 * — Snell's window. Look up and there is a bright disc of the world above;
 * look outward past the critical angle and the surface turns into a mirror of
 * the dark water behind you. Getting this right is most of what makes a dive
 * feel like being underwater rather than in a blue room.
 */
vec3 surfaceFromBelow(vec3 N, vec3 viewUp, vec3 L) {
  // Perturbing the vertical by the wave normal is what makes the rim of the
  // window ripple instead of sitting as a hard circle.
  vec3 up = normalize(vec3(0.0, 1.0, 0.0) + (N - vec3(0.0, 1.0, 0.0)) * 0.55);
  float ang = acos(clamp(dot(viewUp, up), -1.0, 1.0));

  const float CRITICAL = 0.8355;  // asin(1 / 1.333)
  float window = 1.0 - smoothstep(CRITICAL * 0.82, CRITICAL, ang);

  vec3 through = mix(uSkyBottom, uSkyTop, 0.35) * (0.85 + 0.5 * uIntensity);
  // Outside the window: total internal reflection of the water below.
  vec3 mirror = uWaterColor * 0.30 + uAmbient * 0.10;

  vec3 col = mix(mirror, through, window);

  // The sun, compressed toward the middle of the window.
  float sun = pow(max(dot(viewUp, L), 0.0), 34.0);
  col += uSunColor * sun * window * 1.7 * uIntensity;

  // Bright caustic filaments running along the underside.
  col += uSunColor * caustics(vWorldPos.xz * 1.4, uTime) * 0.28 * uIntensity * window;

  return col;
}

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(uCameraPos - vWorldPos);
  vec3 L = normalize(uSunDir);

  if (!gl_FrontFacing) {
    vec3 col = surfaceFromBelow(N, -V, L);
    float dist = length(uCameraPos - vWorldPos);
    col = underwaterMedium(col, dist, deepWater(uWaterColor), uUnderwater);
    gl_FragColor = vec4(col, 1.0);
    return;
  }

  float d = length(vWorldPos.xz);
  float coral = fbm3(vec3(vWorldPos.xz * 0.045, 0.0)) * 0.5 + 0.5;

  // TWO independent shapes, and keeping them independent matters.
  //
  //  - the sand shelf hugs the island, so it follows the heart outline
  //  - the reef is its own body of coral: a lopsided oval that happens to
  //    surround the island
  //
  // Deriving the reef from the coastline instead made the whole lagoon read as
  // one giant heart, which is not what the aerials look like.
  float shoreRatio = d / max(coastRadius(vWorldPos.xz), 0.001);

  // Irregular oval: a slow angular wobble plus coral noise, no heart in sight.
  float ang = atan(vWorldPos.z, vWorldPos.x);
  float lopsided = 1.0 + 0.16 * sin(ang * 1.0 + 0.9) + 0.09 * sin(ang * 2.0 - 2.1);
  float reefR = uHeartScale * 1.72 * lopsided * (0.92 + coral * 0.20);
  float reefRatio = d / reefR;

  // --- Depth bands ----------------------------------------------------
  vec3 sandShelf = vec3(0.62, 0.93, 0.90);  // white sand under clear water
  vec3 reefFlat  = vec3(0.13, 0.70, 0.74);  // coral shelf
  vec3 deep      = uWaterColor;

  float shelf = 1.0 - smoothstep(1.0, 1.36, shoreRatio);
  float reef  = 1.0 - smoothstep(1.0, 1.30, reefRatio);

  vec3 body = deep;
  body = mix(body, reefFlat, reef);
  body = mix(body, sandShelf, shelf);

  // Darker coral heads scattered over the flat.
  body = mix(body, body * 0.72, reef * smoothstep(0.62, 0.86, coral) * 0.55);

  // The band colours above are albedo, not final colour. Light them with the
  // same sun as everything else — otherwise the lagoon stays midday-turquoise
  // under a dusk sky, which is the exact incoherence this project exists to
  // avoid.
  // Partial, not full: a straight multiply crushes the lagoon to mud at golden
  // hour and throws away the turquoise entirely. 70% of the light lets the
  // water shift warm and dark with the sky while keeping its own identity.
  float sunUp = max(uSunDir.y, 0.0);
  vec3 waterLight = uSunColor * (0.55 + 0.45 * sunUp) * uIntensity + uAmbient * 0.28;

  // Cloud shadows drifting across the lagoon — the single most recognisable
  // feature of an aerial ocean shot, and the reason the clouds are worth
  // having at a camera angle that barely shows the sky.
  float shade = cloudShadow(vWorldPos, L, uTime, uCoverage, 0.42, uStir)
              * islandShadow(vWorldPos, L)
              * sunShadow(vWorldPos, N, L);

  body *= mix(vec3(1.0), waterLight * shade, 0.7);

  // --- Surface detail --------------------------------------------------
  // Ripples fade out with distance rather than being drawn at every range:
  // held on, the sub-pixel detail turns into a shimmering mess of aliasing,
  // which reads as noise rather than as water.
  float viewDist = length(uCameraPos - vWorldPos);
  float detail = 1.0 - smoothstep(30.0, 190.0, viewDist);
  if (detail > 0.01) {
    vec3 rip = rippleNormal(vWorldPos.xz, uTime);
    // Calmer inside the reef, where the island shelters the water.
    float exposure = mix(0.35, 1.0, smoothstep(0.9, 1.6, reefRatio));
    N = normalize(mix(N, normalize(N + rip * 1.5), detail * exposure));
  }

  // --- Reflection + fresnel -------------------------------------------
  vec3 R = reflect(-V, N);
  vec3 skyRefl = skySample(R, L);

  // Schlick, with water's actual F0. The old curve reflected 3% head-on and
  // reached full mirror far too readily; 0.02 with a fifth power is why real
  // water is glass at grazing angles and nearly clear straight down.
  float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
  // Shallow water is far less mirror-like — you see sand, not sky.
  fres *= mix(1.0, 0.30, shelf);

  // Light through the back of a wave, strongest looking into the sun.
  float sss = pow(clamp(dot(V, -L) * 0.5 + 0.5, 0.0, 1.0), 3.0)
            * clamp(vCrest * 0.9 + 0.4, 0.0, 1.0);
  body += uSunColor * sss * 0.16 * uIntensity;

  vec3 color = mix(body, skyRefl, fres);

  // --- Sun glitter ----------------------------------------------------
  // Roughness rises with distance, which spreads the highlight into the long
  // shimmering path you actually see on water instead of a single hot dot.
  float rough = mix(0.045, 0.30, smoothstep(20.0, 260.0, viewDist));
  float spec = ggxSpec(N, V, L, rough) * max(dot(N, L), 0.0);
  // Glitter is direct sun, so it has to disappear under cloud entirely —
  // shading the body but leaving the sparkle is a classic tell.
  color += uSunColor * spec * 0.055 * uIntensity * shade * fres * 14.0;

  // --- Foam: shoreline, and the break out on the reef ------------------
  float noiseF = fbm3(vec3(vWorldPos.xz * 0.55, uTime * 0.55)) * 0.5 + 0.5;

  float crest = smoothstep(0.44, 0.74, vCrest) * noiseF;

  // Shore break, just outside the sand line — follows the island.
  float shoreBand = 1.0 - smoothstep(0.0, 0.10, abs(shoreRatio - 1.03));
  float surge = sin(shoreRatio * 26.0 - uTime * 2.1) * 0.5 + 0.5;
  float shoreFoam = shoreBand * (0.45 + 0.55 * surge) * (0.55 + 0.45 * noiseF);

  // Reef break — the waves Tavarua is famous for, standing off the island on
  // the coral edge rather than tracing the coastline.
  float reefBand = 1.0 - smoothstep(0.0, 0.09, abs(reefRatio - 1.0));
  float reefSurge = sin(reefRatio * 26.0 - uTime * 1.4) * 0.5 + 0.5;
  float reefFoam = reefBand * (0.30 + 0.70 * reefSurge) * noiseF * 0.8;

  float foam = clamp(crest * 0.6 + shoreFoam + reefFoam, 0.0, 1.0);
  vec3 foamCol = mix(vec3(0.95), uSunColor, 0.16);
  color = mix(color, foamCol, foam * 0.88);

  // --- Fog ------------------------------------------------------------
  float dist = length(uCameraPos - vWorldPos);
  float fog = smoothstep(uFogNear, uFogFar, dist);
  color = mix(color, uFogColor, fog);

  gl_FragColor = vec4(color, 1.0);
}
`,wc=-30,Jf={approach:[[0,{h:124,d:100,look:1.5,az:0}],[1,{h:12,d:58,look:3.2,az:0}]],sail:[[0,{h:124,d:100,look:1.5,az:0}],[.26,{h:40,d:78,look:4,az:.04}],[.44,{h:1.6,d:56,look:0,az:.08}],[.58,{h:-2.6,d:48,look:-3.5,az:.11}],[.74,{h:-3.4,d:44,look:-2,az:.14}],[.86,{h:-1.6,d:42,look:2,az:.17}],[.94,{h:1,d:40,look:4.5,az:.19}],[1,{h:4,d:38,look:5.5,az:.2}]],island:[[0,{h:124,d:100,look:1.5,az:0}],[.45,{h:46,d:72,look:6,az:.05}],[.78,{h:19,d:50,look:7.5,az:.11}],[1,{h:10,d:40,look:7.5,az:.16}]],dive:[[0,{h:124,d:100,look:1.5,az:0}],[.4,{h:16,d:92,look:3,az:0}],[.54,{h:2.2,d:96,look:1,az:.03}],[.62,{h:-2.5,d:100,look:-4,az:.05}],[.78,{h:-12,d:104,look:-17,az:.1}],[1,{h:-20,d:108,look:-25,az:.16}]]},ka=(r,e,t)=>r+(e-r)*t,YS=r=>r*r*(3-2*r);function Qf(r,e){const t=Jf[r]||Jf.approach,n=Math.max(0,Math.min(1,e));let i=0;for(;i<t.length-2&&n>t[i+1][0];)i++;const[s,o]=t[i],[a,l]=t[i+1],c=YS(a===s?0:(n-s)/(a-s));return{h:ka(o.h,l.h,c),d:ka(o.d,l.d,c),look:ka(o.look,l.look,c),az:ka(o.az,l.az,c)}}const Fp=`
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uAmbient;
uniform vec3 uWaterColor;
uniform vec3 uSkyTop;
uniform vec3 uSkyBottom;
uniform vec3 uCameraPos;
uniform float uIntensity;
uniform float uTime;
uniform float uUnderwater;

/**
 * Sunlight that has already travelled down through the water column.
 * Depth is negative below the surface, so this darkens and blues with descent.
 */
vec3 sunThroughWater(float y) {
  float depth = max(-y, 0.0);
  // The light also travelled at an angle, so the path is longer than the depth.
  float path = depth / max(uSunDir.y, 0.25);
  vec3 absorb = exp(-UW_ABSORB * path);
  float above = smoothstep(-0.05, 0.35, uSunDir.y);
  return uSunColor * absorb * uIntensity * above;
}

/**
 * Downwelling skylight — the whole sky, not the sun.
 *
 * This is what keeps a dusk reef legible instead of black. Lighting the seabed
 * from the sun alone is technically defensible and looks wrong: the sun sets,
 * the term goes to zero, and the scene is a black rectangle. Underwater, most
 * of the light arriving at depth came from the sky dome, and it keeps arriving
 * after the sun has gone.
 */
vec3 waterAmbient(float y) {
  float depth = max(-y, 0.0);
  vec3 sky = mix(uSkyBottom, uSkyTop, 0.55);
  vec3 down = sky * exp(-UW_ABSORB * depth * 0.7);
  // The constant is the floor: the water itself is never truly unlit.
  return down * 0.62 + deepWater(uWaterColor) * 0.85;
}
`,qS=`
varying vec3 vWorldPos;
varying vec3 vNormal;

void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,$S=`
precision highp float;

${Ji}
${ha}
${Fp}

varying vec3 vWorldPos;
varying vec3 vNormal;

void main() {
  vec3 N = normalize(vNormal);
  vec3 L = normalize(uSunDir);

  // Sand, with a coarser darker grain in the hollows between ripples.
  float grain = fbm3(vWorldPos * 0.6) * 0.5 + 0.5;
  float rubble = fbm3(vWorldPos * 0.09 + 21.0) * 0.5 + 0.5;
  vec3 sand = mix(vec3(0.74, 0.70, 0.60), vec3(0.52, 0.53, 0.48), grain * 0.7);
  // Darker beds of rubble and seagrass, so the floor is not one flat tone.
  sand = mix(sand, vec3(0.22, 0.30, 0.28), smoothstep(0.55, 0.85, rubble) * 0.65);

  vec3 sun = sunThroughWater(vWorldPos.y);
  float ndl = clamp(dot(N, L) * 0.5 + 0.5, 0.0, 1.0);

  // Caustics are the whole reason a seabed reads as being underwater. They
  // land on upward-facing surfaces and fade as the sun drops.
  float caus = caustics(vWorldPos.xz, uTime) * clamp(N.y, 0.0, 1.0);

  vec3 color = sand * (sun * ndl + waterAmbient(vWorldPos.y));
  color += sun * caus * 1.5;

  float dist = length(uCameraPos - vWorldPos);
  color = underwaterMedium(color, dist, deepWater(uWaterColor), max(uUnderwater, 0.85));

  gl_FragColor = vec4(color, 1.0);
}
`,bc=`
attribute vec3 aTint;
attribute float aPhase;
attribute vec3 aFluor;

uniform float uTime;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vTint;
varying vec3 vFluor;
varying float vPhase;

void main() {
  vec3 p = position;

  // Everything alive sways a little. Amplitude rises with height above the
  // instance origin so the base stays planted and only the tips move.
  float sway = sin(uTime * 0.7 + aPhase) * 0.055 * max(p.y, 0.0);
  p.x += sway;
  p.z += sway * 0.6;

  vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
  vWorldPos = wp.xyz;
  vNormal = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
  vTint = aTint;
  vFluor = aFluor;
  vPhase = aPhase;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Tc=`
precision highp float;

${Ji}
${ha}
${Fp}

varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vTint;
varying vec3 vFluor;
varying float vPhase;

void main() {
  vec3 N = normalize(vNormal);
  vec3 L = normalize(uSunDir);
  vec3 V = normalize(uCameraPos - vWorldPos);

  vec3 sun = sunThroughWater(vWorldPos.y);
  float ndl = clamp(dot(N, L) * 0.5 + 0.5, 0.0, 1.0);

  vec3 color = vTint * (sun * ndl + waterAmbient(vWorldPos.y));

  // Caustic light also plays over the tops of the coral heads.
  color += sun * caustics(vWorldPos.xz * 1.15, uTime) * clamp(N.y, 0.0, 1.0) * 0.9;

  // Rim light against the darker water behind — this is what keeps silhouettes
  // legible once the water gets dim, which is most of the time down here.
  float rim = pow(1.0 - max(dot(N, V), 0.0), 2.6);
  color += mix(uWaterColor, vTint, 0.4) * rim * 0.55 * (0.4 + uIntensity * 0.6);

  // --- Fluorescence ---------------------------------------------------
  // Corals carry GFP-family proteins that absorb blue and ultraviolet light
  // and re-emit it at longer wavelengths. This is emission, not reflection:
  // it does not depend on the sun's angle, and it is the reason a night reef
  // can be vivid rather than merely dark.
  //
  // Gated on darkness because that is literally why you cannot see it by day —
  // daylight drowns it. Which conveniently means the midday reef stays a
  // daylight reef and only the dusk one lights up, from the same code.
  // Gated on how much light there is, not on the sun's angle: what hides
  // fluorescence is daylight drowning it, and intensity says that directly.
  float night = 1.0 - smoothstep(0.18, 0.55, uIntensity);
  if (night > 0.001) {
    // Slow, uneven breathing so a stand of coral is not one flat panel.
    float pulse = 0.82 + 0.18 * sin(uTime * 0.55 + vPhase * 2.3);
    // Brighter where the surface faces the eye, as the emitting tissue is
    // thickest through the line of sight.
    float face = 0.55 + 0.45 * max(dot(N, V), 0.0);
    color += vFluor * night * pulse * face * 1.35;
  }

  float dist = length(uCameraPos - vWorldPos);
  // The glow travels through water like any other light, so red fluorescence
  // dies with distance while green carries — which is exactly what a fluo dive
  // looks like.
  color = underwaterMedium(color, dist, deepWater(uWaterColor), max(uUnderwater, 0.85));

  gl_FragColor = vec4(color, 1.0);
}
`,KS=`
varying vec2 vUv;
varying vec3 vWorldPos;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,ZS=`
precision highp float;

${Ji}

uniform vec3 uSunColor;
uniform float uIntensity;
uniform float uTime;
uniform float uStrength;
uniform vec3 uCameraPos;

varying vec2 vUv;
varying vec3 vWorldPos;

void main() {
  // Soft along the width, fading downward: a shaft is brightest where it
  // enters the water and dissolves as it scatters.
  float across = 1.0 - abs(vUv.x - 0.5) * 2.0;
  across = pow(clamp(across, 0.0, 1.0), 1.8);
  float down = pow(clamp(1.0 - vUv.y, 0.0, 1.0), 1.5);

  // Slow flicker, as the surface above moves.
  float flick = fbm3(vec3(vUv * 3.0, uTime * 0.25)) * 0.5 + 0.6;

  float a = across * down * flick * uStrength;

  // Fade out close to the camera so shafts never wash over the lens.
  a *= smoothstep(6.0, 26.0, length(uCameraPos - vWorldPos));

  gl_FragColor = vec4(uSunColor * uIntensity * a, a);
}
`,jS=`
attribute float aPhase;
attribute float aSize;

uniform float uTime;
uniform vec2 uStirWorld;
uniform float uPixelRatio;

varying float vGlow;

void main() {
  vec3 p = position;

  // Slow individual drift, so the field never reads as a fixed lattice.
  p.x += sin(uTime * 0.11 + aPhase * 3.1) * 2.4;
  p.y += sin(uTime * 0.07 + aPhase * 5.7) * 1.1;
  p.z += cos(uTime * 0.09 + aPhase * 2.3) * 2.4;

  vec4 wp = modelMatrix * vec4(p, 1.0);
  vec4 mv = viewMatrix * wp;

  // Disturbance: brightest right under the cursor, falling away over ~26 units.
  float d = distance(wp.xz, uStirWorld);
  float stirred = smoothstep(26.0, 0.0, d);

  // Idle shimmer keeps the field alive without competing with the flare.
  float idle = 0.16 + 0.10 * sin(uTime * 0.8 + aPhase * 6.28);

  vGlow = idle + stirred * 1.5;

  // Flaring plankton also read as larger, which is most of what sells it.
  gl_PointSize = aSize * uPixelRatio * (1.0 + stirred * 1.6) * (240.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}
`,JS=`
precision highp float;

uniform vec3 uWaterColor;
uniform float uIntensity;

varying float vGlow;

void main() {
  // Soft round sprite — a squared falloff reads as a point of light rather
  // than a disc with an edge.
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float body = 1.0 - smoothstep(0.0, 1.0, r);
  body *= body;
  if (body <= 0.001) discard;

  float night = 1.0 - smoothstep(0.18, 0.55, uIntensity);
  if (night <= 0.001) discard;

  // Blue-green, the band that both dinoflagellates emit in and seawater
  // absorbs least.
  vec3 glow = vec3(0.35, 1.0, 0.85);

  float a = body * vGlow * night;
  gl_FragColor = vec4(glow * a, a);
}
`,Lt={coral:140,fish:260,resting:6,shafts:26,plankton:1400};function ed(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}const td=[[.85,.42,.38],[.92,.62,.3],[.55,.68,.42],[.42,.55,.72],[.78,.72,.45],[.62,.36,.58]],nd=[[.1,1,.3],[.1,1,.3],[1,.42,.06],[1,.1,.28],[.15,.85,1],[.72,1,.08]],id=[[.95,.78,.32],[.88,.52,.28],[.55,.75,.85],[.92,.9,.86]];class Uo{constructor(e){this.shared=e,this.group=new Xi,this.group.visible=!1,this.time=0,this.schools=[],this.#t(),this.#n(),this.#i(),this.#r(),this.#s(),this.#o()}static floorHeight(e,t){const n=Math.hypot(e,t),i=Math.max(0,1-n/150)**2*16,s=Fs(e*.035,t*.035,4)*3.4,o=Math.sin(e*.55+Fs(e*.05,t*.05,2)*3)*.16;return wc+i+s+o}#e(){const e=this.shared;return{uSunDir:e.uSunDir,uSunColor:e.uSunColor,uAmbient:e.uAmbient,uWaterColor:e.uWaterColor,uSkyTop:e.uSkyTop,uSkyBottom:e.uSkyBottom,uCameraPos:e.uCameraPos,uIntensity:e.uIntensity,uTime:e.uTime,uUnderwater:e.uUnderwater}}#t(){const e=new Mi(620,620,180,180);e.rotateX(-Math.PI/2);const t=e.attributes.position;for(let n=0;n<t.count;n++)t.setY(n,Uo.floorHeight(t.getX(n),t.getZ(n)));t.needsUpdate=!0,e.computeVertexNormals(),this.floor=new It(e,new yt({vertexShader:qS,fragmentShader:$S,uniforms:this.#e()})),this.group.add(this.floor)}#n(){const e=[],t=new Bl(1,2),n=t.attributes.position;for(let o=0;o<n.count;o++){const a=n.getX(o),l=n.getY(o),c=n.getZ(o),u=1+Fs(a*2.2,c*2.2,3)*.22;n.setXYZ(o,a*u,Math.max(l,-.1)*u*.75,c*u)}t.computeVertexNormals(),e.push(t);const i=new $i(.13,.3,2.1,6,1);i.translate(0,1.05,0),e.push(i);const s=new ph(.95,.09,5,14,Math.PI*1.15);s.rotateX(Math.PI/2),s.translate(0,.95,0),e.push(s),this.coral=e.map(o=>{const a=new wo(o,new yt({vertexShader:bc,fragmentShader:Tc,uniforms:this.#e()}),Lt.coral);return a.instanceMatrix.setUsage(jh),a.frustumCulled=!1,a.count=0,this.group.add(a),a});for(const o of this.coral)o.geometry.setAttribute("aTint",new ii(new Float32Array(Lt.coral*3),3)),o.geometry.setAttribute("aPhase",new ii(new Float32Array(Lt.coral),1)),o.geometry.setAttribute("aFluor",new ii(new Float32Array(Lt.coral*3),3))}#i(){const e=new Zs(.5,8,6);e.scale(1,.62,.34);const t=new Qo(.3,.55,4);t.rotateZ(Math.PI/2),t.translate(-.62,0,0),t.scale(1,1,.35);const n=rd([e,t]);this.fish=new wo(n,new yt({vertexShader:bc,fragmentShader:Tc,uniforms:this.#e()}),Lt.fish),this.fish.instanceMatrix.setUsage(jh),this.fish.frustumCulled=!1,this.fish.count=0,this.fish.geometry.setAttribute("aTint",new ii(new Float32Array(Lt.fish*3),3)),this.fish.geometry.setAttribute("aPhase",new ii(new Float32Array(Lt.fish),1)),this.fish.geometry.setAttribute("aFluor",new ii(new Float32Array(Lt.fish*3),3)),this.group.add(this.fish)}#r(){const e=new Zs(1,12,8);e.scale(1.5,.16,1.2);const t=new Qo(.1,2.4,4);t.rotateX(Math.PI/2),t.translate(0,0,1.9);const n=rd([e,t]);this.resting=new wo(n,new yt({vertexShader:bc,fragmentShader:Tc,uniforms:this.#e()}),Lt.resting),this.resting.frustumCulled=!1,this.resting.count=0,this.resting.geometry.setAttribute("aTint",new ii(new Float32Array(Lt.resting*3),3)),this.resting.geometry.setAttribute("aPhase",new ii(new Float32Array(Lt.resting),1)),this.resting.geometry.setAttribute("aFluor",new ii(new Float32Array(Lt.resting*3),3)),this.group.add(this.resting)}#s(){const e=new Mi(1,1,1,1);e.translate(0,-.5,0),this.shafts=new wo(e,new yt({vertexShader:KS,fragmentShader:ZS,transparent:!0,depthWrite:!1,blending:$o,side:Cn,uniforms:{uSunColor:this.shared.uSunColor,uIntensity:this.shared.uIntensity,uTime:this.shared.uTime,uCameraPos:this.shared.uCameraPos,uStrength:{value:1}}}),Lt.shafts),this.shafts.frustumCulled=!1,this.shafts.count=0,this.group.add(this.shafts)}#o(){const e=new on,t=new Float32Array(Lt.plankton*3),n=new Float32Array(Lt.plankton),i=new Float32Array(Lt.plankton),s=ed(90210);for(let o=0;o<Lt.plankton;o++){const a=s()*Math.PI*2,l=30+s()*190;t[o*3]=Math.cos(a)*l,t[o*3+1]=wc+2+s()*30,t[o*3+2]=Math.sin(a)*l,n[o]=s()*Math.PI*2,i[o]=.9+s()*2.1}e.setAttribute("position",new Ht(t,3)),e.setAttribute("aPhase",new Ht(n,1)),e.setAttribute("aSize",new Ht(i,1)),this.plankton=new yS(e,new yt({vertexShader:jS,fragmentShader:JS,transparent:!0,depthWrite:!1,blending:$o,uniforms:{uTime:this.shared.uTime,uStirWorld:this.shared.uStirWorld,uWaterColor:this.shared.uWaterColor,uIntensity:this.shared.uIntensity,uPixelRatio:{value:Math.min(window.devicePixelRatio||1,2)}}})),this.plankton.frustumCulled=!1,this.plankton.geometry.setDrawRange(0,0),this.group.add(this.plankton)}populate(e){const t=e||{coral:0,schools:0,resting:0,godrays:0},n=ed(20260731),i=new dt,s=new yr,o=new H,a=new H,l=new H(0,1,0),c=Math.floor(Math.min(t.coral,Lt.coral)/this.coral.length);for(const x of this.coral){const M=x.geometry.getAttribute("aTint"),S=x.geometry.getAttribute("aPhase"),A=x.geometry.getAttribute("aFluor");let E=0,y=0;for(;E<c&&y++<c*40;){const C=n()*Math.PI*2,L=46+n()*96,v=Math.cos(C)*L+(n()-.5)*22,b=Math.sin(C)*L+(n()-.5)*22,U=Math.hypot(v,b);if(U<44||U>190)continue;const I=Uo.floorHeight(v,b),N=.7+n()*2.3;o.set(v,I-.2,b),a.set(N,N*(.75+n()*.7),N),s.setFromAxisAngle(l,n()*Math.PI*2),i.compose(o,s,a),x.setMatrixAt(E,i);const X=td[n()*td.length|0];if(M.setXYZ(E,X[0],X[1],X[2]),S.setX(E,n()*Math.PI*2),n()<(t.fluorescent??0)){const q=nd[n()*nd.length|0],G=.5+n()*.75;A.setXYZ(E,q[0]*G,q[1]*G,q[2]*G)}else A.setXYZ(E,0,0,0);E++}x.count=E,x.instanceMatrix.needsUpdate=!0,M.needsUpdate=!0,S.needsUpdate=!0,A.needsUpdate=!0}this.schools=[];const u=34,h=Math.min(t.schools*u,Lt.fish),f=this.fish.geometry.getAttribute("aTint"),d=this.fish.geometry.getAttribute("aPhase");for(let x=0;x<t.schools;x++){const M=n()*Math.PI*2,S=55+n()*80;this.schools.push({centre:new H(Math.cos(M)*S,wc+9+n()*13,Math.sin(M)*S),radius:55+n()*70,angle:n()*Math.PI*2,speed:.045+n()*.05,bob:n()*Math.PI*2,from:x*u,count:Math.min(u,h-x*u)})}for(let x=0;x<h;x++){const M=id[n()*id.length|0];f.setXYZ(x,M[0],M[1],M[2]),d.setX(x,n()*Math.PI*2)}this.fishOffsets=new Float32Array(h*3);for(let x=0;x<h;x++)this.fishOffsets[x*3]=(n()-.5)*9,this.fishOffsets[x*3+1]=(n()-.5)*3.4,this.fishOffsets[x*3+2]=(n()-.5)*9;this.fish.count=h,f.needsUpdate=!0,d.needsUpdate=!0;const g=this.resting.geometry.getAttribute("aTint"),_=this.resting.geometry.getAttribute("aPhase"),p=Math.min(t.resting,Lt.resting);for(let x=0;x<p;x++){const M=n()*Math.PI*2,S=58+n()*70,A=Math.cos(M)*S,E=Math.sin(M)*S,y=1.5+n()*1.5;o.set(A,Uo.floorHeight(A,E)+.22*y,E),a.set(y,y,y),s.setFromAxisAngle(l,n()*Math.PI*2),i.compose(o,s,a),this.resting.setMatrixAt(x,i),g.setXYZ(x,.34,.33,.31),_.setX(x,n()*Math.PI*2)}this.resting.count=p,this.resting.instanceMatrix.needsUpdate=!0,g.needsUpdate=!0,_.needsUpdate=!0;const m=t.godrays>0?Lt.shafts:0;for(let x=0;x<m;x++){const M=n()*Math.PI*2,S=20+n()*130,A=Math.cos(M)*S,E=Math.sin(M)*S,y=5+n()*16,C=34+n()*26;o.set(A,.4,E),a.set(y,C,1),s.setFromAxisAngle(l,Math.atan2(this.shared.uSunDir.value.x,this.shared.uSunDir.value.z)),i.compose(o,s,a),this.shafts.setMatrixAt(x,i)}this.shafts.count=m,this.shafts.instanceMatrix.needsUpdate=!0,this.shafts.material.uniforms.uStrength.value=t.godrays??0,this.plankton.geometry.setDrawRange(0,Math.min(t.plankton??0,Lt.plankton))}update(e,t){if(this.group.visible=t<26,!this.group.visible||!this.schools.length)return;this.time+=e;const n=new dt,i=new yr,s=new H,o=new H(1,1,1),a=new H(0,1,0);for(const l of this.schools){l.angle+=l.speed*e;const c=Math.cos(l.angle)*l.radius,u=Math.sin(l.angle)*l.radius,h=l.centre.y+Math.sin(this.time*.3+l.bob)*1.6,f=l.angle+Math.PI/2;i.setFromAxisAngle(a,-f);for(let d=0;d<l.count;d++){const g=(l.from+d)*3,_=Math.sin(this.time*2.2+d*.7)*.35;s.set(c+this.fishOffsets[g],h+this.fishOffsets[g+1]+_,u+this.fishOffsets[g+2]),n.compose(s,i,o),this.fish.setMatrixAt(l.from+d,n)}}this.fish.instanceMatrix.needsUpdate=!0}}function rd(r){const e=new on;let t=0,n=0;for(const c of r)t+=c.attributes.position.count,n+=c.index?c.index.count:c.attributes.position.count;const i=new Float32Array(t*3),s=new Float32Array(t*3),o=new Uint16Array(n);let a=0,l=0;for(const c of r){const u=c.attributes.position,h=c.attributes.normal;if(i.set(u.array.subarray(0,u.count*3),a*3),h&&s.set(h.array.subarray(0,h.count*3),a*3),c.index)for(let f=0;f<c.index.count;f++)o[l++]=c.index.array[f]+a;else for(let f=0;f<u.count;f++)o[l++]=f+a;a+=u.count}return e.setAttribute("position",new Ht(i,3)),e.setAttribute("normal",new Ht(s,3)),e.setIndex(new Ht(o,1)),e.computeVertexNormals(),e}const Op=`
${_h}

uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uAmbient;
uniform vec3 uFogColor;
uniform vec3 uCameraPos;
uniform float uIntensity;
uniform float uFogNear;
uniform float uFogFar;

vec3 litSurface(vec3 albedo, vec3 N, vec3 worldPos, float translucency) {
  vec3 L = normalize(uSunDir);
  vec3 V = normalize(uCameraPos - worldPos);

  // Vegetation shadows itself and its neighbours; without this a grove is a
  // set of evenly lit cut-outs rather than a canopy.
  float shadow = sunShadow(worldPos, N, L);

  // Wrapped lambert: fronds and sails are thin, and a hard terminator on them
  // reads as cardboard.
  float wrapped = clamp((dot(N, L) + 0.4) / 1.4, 0.0, 1.0);

  // Light coming through the far side — what makes a leaf or a sail glow when
  // the sun is behind it.
  float back = pow(clamp(dot(-N, L) * 0.5 + 0.5, 0.0, 1.0), 2.0) * translucency;

  vec3 color = albedo * (uSunColor * (wrapped + back) * uIntensity * shadow + uAmbient * 0.75);

  float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0) * max(dot(-V, L) * 0.5 + 0.5, 0.0);
  color += uSunColor * rim * 0.25 * uIntensity;

  float dist = length(uCameraPos - worldPos);
  return mix(color, uFogColor, smoothstep(uFogNear, uFogFar, dist));
}
`,QS=`
attribute vec3 aTint;
attribute float aPhase;
attribute float aStiff;

uniform float uTime;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vTint;

void main() {
  vec3 p = position;

  float lift = max(p.y, 0.0);
  float gust = sin(uTime * 0.55 + aPhase) * 0.6 + sin(uTime * 1.7 + aPhase * 2.1) * 0.25;
  float sway = gust * aStiff * lift;

  p.x += sway;
  p.z += sway * 0.45;

  vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
  vWorldPos = wp.xyz;
  vNormal = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
  vTint = aTint;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,ey=`
precision highp float;

${Ji}
${Op}

uniform float uTranslucency;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vTint;

void main() {
  // Break up the flat instance colour so a stand of palms is not a stencil.
  float grain = fbm3(vWorldPos * 1.7) * 0.5 + 0.5;
  vec3 albedo = vTint * (0.82 + grain * 0.36);

  gl_FragColor = vec4(litSurface(albedo, normalize(vNormal), vWorldPos, uTranslucency), 1.0);
}
`,ty=`
varying vec3 vWorldPos;
varying vec3 vNormal;

void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,ny=`
precision highp float;

${Ji}
${Op}

uniform vec3 uColor;
uniform float uTranslucency;

varying vec3 vWorldPos;
varying vec3 vNormal;

void main() {
  gl_FragColor = vec4(litSurface(uColor, normalize(vNormal), vWorldPos, uTranslucency), 1.0);
}
`;function sd(r,e,t=1.2){const n=vi.height(r,e),i=vi.height(r+t,e),s=vi.height(r,e+t);return Math.hypot(n-i,n-s)/t}function od(r){const e=vi.coastT(Math.cos(r),Math.sin(r));return e>1e-6?1/e:34}function iy(r,e,t){const n=new dt,i=new yr,s=new H,o=new H,a=new H(0,1,0),l=(I,N,X,O,q)=>{I.geometry.getAttribute("aTint").setXYZ(N,X[0],X[1],X[2]),I.geometry.getAttribute("aPhase").setX(N,O),I.geometry.getAttribute("aStiff").setX(N,q)},c=(I,N)=>{I.count=N,I.instanceMatrix.needsUpdate=!0;for(const X of["aTint","aPhase","aStiff"])I.geometry.getAttribute(X).needsUpdate=!0},u=(I,N,X,O=40)=>{for(let q=0;q<O;q++){const G=t()*Math.PI*2,P=(I+t()*(N-I))*od(G),ie=Math.cos(G)*P,Ae=Math.sin(G)*P,Ue=vi.height(ie,Ae);if(!(Ue<.1)&&!(sd(ie,Ae)>X))return{x:ie,z:Ae,h:Ue,t:vi.coastT(ie,Ae),bearing:G}}return null},h=[];for(let I=0;I<7;I++)h.push({a:t()*Math.PI*2,t:.16+t()*.52});let f=0,d=0;const g=r.palmFronds.instanceMatrix.count,_=Math.min(e.palms??0,r.palmTrunk.instanceMatrix.count);let p=0;for(;f<_&&p++<_*30;){const I=h[t()*h.length|0],N=I.a+(t()-.5)*.6,O=Math.max(.1,Math.min(.9,I.t+(t()-.5)*.3))*od(N),q=Math.cos(N)*O,G=Math.sin(N)*O,ne=vi.height(q,G);if(ne<.6||sd(q,G)>.6)continue;const P=vi.coastT(q,G),ie=(.62+t()*.5)*(1.25-P*.45),Ae=Math.max(0,P-.55)*1.5,Ue=N+(t()-.5)*.6;s.set(q,ne-.3,G),o.setScalar(ie),i.setFromEuler(new qn(Math.sin(Ue)*Ae,-Ue,-Math.cos(Ue)*Ae)),n.compose(s,i,o),r.palmTrunk.setMatrixAt(f,n);const $=.4+t()*.12;l(r.palmTrunk,f,[$,$*.95,$*.84],t()*6.28,.011);const Q=ne-.3+9.5*ie*Math.cos(Ae),ce=1.5*ie+Ae*4*ie,ae=q+Math.cos(Ue)*ce,we=G-Math.sin(Ue)*ce,xe=9+(t()*3|0);for(let ze=0;ze<xe&&d<g;ze++){const Ie=ze/(xe-1),Ne=Ue+ze/xe*Math.PI*2*1.3+t()*.22,D=.75-Ie*1.5+(t()-.5)*.18;s.set(ae,Q-Ie*.5*ie,we),o.setScalar(ie*(.72+(1-Ie)*.45)),i.setFromEuler(new qn(0,-Ne,D)),n.compose(s,i,o),r.palmFronds.setMatrixAt(d,n);let je;if(Ie>.82){const Ce=.34+t()*.16;je=[Ce*1.5,Ce*1.05,Ce*.5]}else{const Ce=.34-Ie*.13+t()*.05;je=[Ce*(.62-Ie*.24),Ce*1.5,Ce*(.3+Ie*.08)]}l(r.palmFronds,d,je,t()*6.28,Ie>.82?.004:.02),d++}f++}c(r.palmTrunk,f),c(r.palmFronds,d);let m=0,x=0;const M=r.pandanusBlades.instanceMatrix.count,S=Math.min(e.pandanus??0,r.pandanusTrunk.instanceMatrix.count);for(p=0;m<S&&p++<S*30;){const I=u(.62,.93,.7,12);if(!I)continue;const N=.8+t()*.7;s.set(I.x,I.h-.2,I.z),o.setScalar(N),i.setFromAxisAngle(a,t()*Math.PI*2),n.compose(s,i,o),r.pandanusTrunk.setMatrixAt(m,n),l(r.pandanusTrunk,m,[.4,.33,.26],t()*6.28,.008);const X=I.h-.2+5.2*N,O=8+(t()*2|0);for(let q=0;q<O&&x<M;q++){const G=q/O*Math.PI*2*1.6+t()*.2;s.set(I.x,X-q*.09*N,I.z),o.setScalar(N*(.85+t()*.3)),i.setFromEuler(new qn(0,-G,.3+t()*.5)),n.compose(s,i,o),r.pandanusBlades.setMatrixAt(x,n);const ne=.3+t()*.13;l(r.pandanusBlades,x,[ne*.66,ne*1.34,ne*.62],t()*6.28,.012),x++}m++}c(r.pandanusTrunk,m),c(r.pandanusBlades,x);let A=0;const E=Math.min(e.shrubs??0,r.shrubs.instanceMatrix.count);for(p=0;A<E&&p++<E*14;){const I=u(.72,.99,.85,12);if(!I||t()>Math.min(1,(I.t-.64)*3))continue;const N=.55+t()*1.15;s.set(I.x,I.h+N*.22,I.z),o.set(N*1.3,N*(.5+t()*.4),N*1.3),i.setFromAxisAngle(a,t()*Math.PI*2),n.compose(s,i,o),r.shrubs.setMatrixAt(A,n);let X;if(t()<.34){const O=.42+t()*.14;X=[O*1.02,O*1.12,O*.92]}else{const O=.24+t()*.15;X=[O*.5,O*1.66,O*.46]}l(r.shrubs,A,X,t()*6.28,.014),A++}c(r.shrubs,A);let y=0;const C=Math.min(e.grass??0,r.grass.instanceMatrix.count);for(p=0;y<C&&p++<C*8;){const I=u(.12,.78,.62,8);if(!I)continue;const N=.45+t()*.85;s.set(I.x,I.h,I.z),o.set(N,N*(.7+t()*.8),N),i.setFromAxisAngle(a,t()*Math.PI*2),n.compose(s,i,o),r.grass.setMatrixAt(y,n);const X=.3+t()*.2;l(r.grass,y,[X*1.02,X*1.32,X*.36],t()*6.28,.05),y++}c(r.grass,y);let L=0;const v=Math.min(e.bures??0,r.bureWalls.instanceMatrix.count);for(p=0;L<v&&p++<v*50;){const I=u(.68,.88,.3,14);if(!I)continue;const N=I.bearing+Math.PI,X=.95+t()*.25;s.set(I.x,I.h,I.z),o.setScalar(X),i.setFromAxisAngle(a,-N),n.compose(s,i,o),r.bureWalls.setMatrixAt(L,n),r.bureRoofs.setMatrixAt(L,n),l(r.bureWalls,L,[.52,.44,.34],0,0),l(r.bureRoofs,L,[.62,.52,.33],0,0),L++}c(r.bureWalls,L),c(r.bureRoofs,L);let b=0;const U=Math.min(e.driftwood??0,r.wood.instanceMatrix.count);for(p=0;b<U&&p++<U*50;){const I=u(.93,1.02,.35,12);if(!I)continue;const N=.7+t()*.9;s.set(I.x,I.h+.16*N,I.z),o.setScalar(N),i.setFromEuler(new qn(t()*.3,t()*Math.PI*2,t()*.2)),n.compose(s,i,o),r.wood.setMatrixAt(b,n);const X=.5+t()*.2;l(r.wood,b,[X,X*.92,X*.8],t()*6.28,0),b++}return c(r.wood,b),{palms:f,fronds:d,pandanus:m,blades:x,shrubs:A,grass:y,bures:L,wood:b}}const ki={palm:120,shrub:420,grass:3200,wood:24,pandanus:70,bure:18};function ry(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}class sy{constructor(e){this.shared=e,this.group=new Xi,this.group.visible=!1,this.#n(),this.#i(),this.#r(),this.#s(),this.#o(),this.#a()}#e(e){return new yt({vertexShader:QS,fragmentShader:ey,side:Cn,uniforms:{uTranslucency:{value:e},uTime:this.shared.uTime,uSunDir:this.shared.uSunDir,uSunColor:this.shared.uSunColor,uAmbient:this.shared.uAmbient,uFogColor:this.shared.uFogColor,uCameraPos:this.shared.uCameraPos,uIntensity:this.shared.uIntensity,uFogNear:this.shared.uFogNear,uFogFar:this.shared.uFogFar,uShadowMap:this.shared.uShadowMap,uShadowMatrix:this.shared.uShadowMatrix,uShadowOn:this.shared.uShadowOn}})}#t(e,t,n){const i=new wo(e,this.#e(n),t);i.frustumCulled=!1,i.count=0;for(const[s,o]of[["aTint",3],["aPhase",1],["aStiff",1]])e.setAttribute(s,new ii(new Float32Array(t*o),o));return this.group.add(i),i}#n(){const e=[],t=new $i(.16,.42,9.5,7,8),n=t.attributes.position;for(let o=0;o<n.count;o++){const a=n.getY(o)+4.75,l=(a/9.5)**2*1.5;n.setXYZ(o,n.getX(o)+l,a,n.getZ(o))}t.computeVertexNormals(),e.push({geo:t,kind:"trunk"});const i=new Mi(6.2,1.15,10,2),s=i.attributes.position;for(let o=0;o<s.count;o++){const a=s.getX(o)+3.1,l=a/6.2,c=-(l**2)*2.6,u=1-l*.75;s.setXYZ(o,a,c,s.getY(o)*u)}i.computeVertexNormals(),e.push({geo:i,kind:"frond"}),this.palmTrunk=this.#t(e[0].geo,ki.palm,.1),this.palmFronds=this.#t(e[1].geo,ki.palm*7,.9)}#i(){const e=new Bl(1,1),t=e.attributes.position;for(let n=0;n<t.count;n++){const i=t.getX(n),s=t.getY(n),o=t.getZ(n),a=.75+Math.abs(Math.sin(i*4.1+o*2.7))*.5;t.setXYZ(n,i*a,Math.max(s,-.2)*a*.8,o*a)}e.computeVertexNormals(),this.shrubs=this.#t(e,ki.shrub,.5)}#r(){const e=new Mi(.5,1.5,1,3);e.translate(0,.75,0);const t=e.clone();t.rotateY(Math.PI/2),this.grass=this.#t(oy([e,t]),ki.grass,.85)}#s(){const e=new $i(.16,.34,5.2,6,4),t=e.attributes.position;for(let s=0;s<t.count;s++){const o=t.getY(s)+2.6;t.setXYZ(s,t.getX(s)+Math.sin(o*.42)*.5,o,t.getZ(s))}e.computeVertexNormals(),this.pandanusTrunk=this.#t(e,ki.pandanus,.08);const n=new Mi(3.4,.42,8,1),i=n.attributes.position;for(let s=0;s<i.count;s++){const o=i.getX(s)+1.7,a=o/3.4;i.setXYZ(s,o,-(a**2.4)*1.5,i.getY(s)*(1-a*.6))}n.computeVertexNormals(),this.pandanusBlades=this.#t(n,ki.pandanus*9,.85)}#o(){const e=new ao(3.4,2.2,4.2);e.translate(0,1.1,0),this.bureWalls=this.#t(e,ki.bure,0);const t=new Qo(3.5,2.8,4,1);t.rotateY(Math.PI/4),t.translate(0,3.6,0),this.bureRoofs=this.#t(t,ki.bure,.15)}#a(){const e=new $i(.16,.24,3.4,5);e.rotateZ(Math.PI/2),this.wood=this.#t(e,ki.wood,.05)}populate(e){iy(this,e||{},ry(775533))}setActive(e){this.group.visible=e}}function oy(r){const e=new on;let t=0,n=0;for(const u of r)t+=u.attributes.position.count,n+=u.index?u.index.count:u.attributes.position.count;const i=new Float32Array(t*3),s=new Float32Array(t*3),o=new Float32Array(t*2),a=new Uint16Array(n);let l=0,c=0;for(const u of r){const h=u.attributes.position;if(i.set(h.array.subarray(0,h.count*3),l*3),u.attributes.normal&&s.set(u.attributes.normal.array.subarray(0,h.count*3),l*3),u.attributes.uv&&o.set(u.attributes.uv.array.subarray(0,h.count*2),l*2),u.index)for(let f=0;f<u.index.count;f++)a[c++]=u.index.array[f]+l;else for(let f=0;f<h.count;f++)a[c++]=f+l;l+=h.count}return e.setAttribute("position",new Ht(i,3)),e.setAttribute("normal",new Ht(s,3)),e.setAttribute("uv",new Ht(o,2)),e.setIndex(new Ht(a,1)),e.computeVertexNormals(),e}const ay=15986660;class ly{constructor(e){this.shared=e,this.group=new Xi,this.group.visible=!1,this.anchor={x:0,z:28,bearing:0,placed:!1},this.time=0,this.#t()}#e(e,t=0){return new yt({vertexShader:ty,fragmentShader:ny,side:Cn,uniforms:{uColor:{value:new He(e)},uTranslucency:{value:t},uSunDir:this.shared.uSunDir,uSunColor:this.shared.uSunColor,uAmbient:this.shared.uAmbient,uFogColor:this.shared.uFogColor,uCameraPos:this.shared.uCameraPos,uIntensity:this.shared.uIntensity,uFogNear:this.shared.uFogNear,uFogFar:this.shared.uFogFar,uShadowMap:this.shared.uShadowMap,uShadowMatrix:this.shared.uShadowMatrix,uShadowOn:this.shared.uShadowOn}})}#t(){this.hull=new Xi,this.group.add(this.hull);const e=new Zs(1,20,12),t=e.attributes.position;for(let l=0;l<t.count;l++){const c=t.getX(l),u=t.getY(l),h=t.getZ(l),f=1-Math.max(h,0)*.55;t.setXYZ(l,c*1.05*f,Math.min(u,.35)*.85,h*3.1)}e.computeVertexNormals();const n=new It(e,this.#e(16250350));n.scale.setScalar(1.5),this.hull.add(n);const i=e.clone(),s=new It(i,this.#e(1913670));s.scale.setScalar(1.505),s.position.y=-.34,this.hull.add(s);const o=new It(new $i(.055,.085,7.6,6),this.#e(14209732));o.position.set(0,4,.2),this.hull.add(o);const a=new It(new $i(.05,.05,3.4,5),this.#e(14209732));a.rotation.x=Math.PI/2,a.position.set(0,1.05,-1.1),this.hull.add(a),this.hull.add(this.#n(3.2,6.4,.42,{x:0,y:1.1,z:-1.1},1)),this.hull.add(this.#n(2,4.1,.34,{x:0,y:1.4,z:1.5},-1))}#n(e,t,n,i,s){const a=[],l=[];for(let h=0;h<=8;h++){const f=h/8,d=e*(1-f);for(let g=0;g<=8;g++){const _=g/8,p=-d*_,m=Math.sin(_*Math.PI)*Math.sin(f*Math.PI)*n*s;a.push(m,f*t,p)}}for(let h=0;h<8;h++)for(let f=0;f<8;f++){const d=h*9+f;l.push(d,d+1,d+8+1,d+1,d+8+2,d+8+1)}const c=new on;c.setAttribute("position",new Nt(a,3)),c.setIndex(l),c.computeVertexNormals();const u=new It(c,this.#e(ay,.85));return u.position.set(i.x,i.y,i.z),u}setActive(e,t){if(this.group.visible=e,!e){this.anchor.placed=!1;return}if(!this.anchor.placed&&t){const i=Math.atan2(t.x,t.z)+.13,s=22;this.anchor.x=Math.sin(i)*s,this.anchor.z=Math.cos(i)*s,this.anchor.bearing=i+Math.PI*.38,this.anchor.placed=!0}}update(e,t){if(!this.group.visible)return;this.time=t;const n=this.anchor.x,i=this.anchor.z,s=ol(n,i,t);this.group.position.set(n,s-Np*.6,i);const o=this.anchor.bearing+Math.sin(t*.117)*.16+Math.sin(t*.041)*.09;this.group.rotation.y=o;const a=Math.sin(o),l=Math.cos(o),c=Math.cos(o),u=-Math.sin(o),h=HS(n,i,t),f=h.x*a+h.z*l,d=h.x*c+h.z*u;this.hull.rotation.x=f*.55,this.hull.rotation.z=-d*.55+.13}}const vo=34,Ec=IS(),Bp=new fh(new Uint8Array([255,255,255,255]),1,1);Bp.needsUpdate=!0;const cy=`${"/island-webgl".replace(/\/+$/,"")}/textures/island-aerial.webp`,Ac=(r,e,t)=>{const n=xn.clamp((t-r)/(e-r),0,1);return n*n*(3-2*n)};class vi{constructor(){this.scene=new Ip,this.group=new Xi,this.scene.add(this.group);const e=new Uint8Array(An);for(let n=0;n<An;n++)e[n]=Math.round(xn.clamp(Ec[n],0,1)*255);const t=new fh(e,An,1,Ul,Li);t.wrapS=_l,t.minFilter=t.magFilter=Rn,t.needsUpdate=!0,this.shared={uSunDir:{value:new H(0,1,0)},uSunColor:{value:new He(16777215)},uSkyTop:{value:new He(3112900)},uSkyBottom:{value:new He(12575986)},uAmbient:{value:new He(8364221)},uFogColor:{value:new He(13625070)},uWaterColor:{value:new He(2064288)},uIntensity:{value:1},uCameraPos:{value:new H},uTime:{value:0},uCoverage:{value:.5},uStir:{value:new Xe},uStirWorld:{value:new Xe},uShadowMap:{value:null},uShadowMatrix:{value:new dt},uShadowOn:{value:0},uEnvMap:{value:null},uHasEnv:{value:0},uUnderwater:{value:0},uFogNear:{value:110},uFogFar:{value:380},uHeartLUT:{value:t},uHeartScale:{value:vo},uPhotoMap:{value:Bp},uHasPhoto:{value:0},uPhotoSize:{value:vo*2.35},uDelight:{value:.6}},this.seabed=new Uo(this.shared),this.scene.add(this.seabed.group),this.flora=new sy(this.shared),this.scene.add(this.flora.group),this.boat=new ly(this.shared),this.scene.add(this.boat.group),this.#e(),this.#t(),this.#n(),this.loadPhoto()}static height(e,t){const n=Math.hypot(e,t),i=Zf(Ec,Math.atan2(t,e))*vo,s=n/Math.max(i,.001),o=Ac(1.05,.86,s),a=Math.pow(Ac(1,.15,s),1.35),l=Fs(e*.05,t*.05,5)*.5+.5,c=1-Math.abs(Fs(e*.021+11.3,t*.021-7.1,3)),u=l*.5+c*.3+.2,h=vo*(1.15+Fs(e*.011+4.7,t*.011-2.3,3)*.55),f=n/h,d=Ac(0,1.1,s-1),g=s*(1-d)+f*d,p=-(Math.max(0,g-1)**1.35)*26*(.82+u*.36);return o*2.3+a*u*13-1.35+p}static coastT(e,t){const n=Math.hypot(e,t),i=Zf(Ec,Math.atan2(t,e))*vo;return n/Math.max(i,.001)}setUnderwater(e,t){this.underwater=e,this.cameraY=t}applySection(e,t){this.seabed.populate(e.life),this.flora.populate(e.flora),this.flora.setActive(!!e.flora),this.boat.setActive(e.journey==="sail",t)}update(e,t,n){this.seabed.update(e,t),this.boat.update(e,n)}#e(){const e=new Zs(700,32,24),t=new yt({vertexShader:NS,fragmentShader:FS,side:Tn,depthWrite:!1,uniforms:{uSkyTop:this.shared.uSkyTop,uSkyBottom:this.shared.uSkyBottom,uSunDir:this.shared.uSunDir,uSunColor:this.shared.uSunColor,uIntensity:this.shared.uIntensity,uAmbient:this.shared.uAmbient,uFogColor:this.shared.uFogColor,uTime:this.shared.uTime,uCoverage:this.shared.uCoverage,uStir:this.shared.uStir,uUnderwater:this.shared.uUnderwater,uWaterColor:this.shared.uWaterColor}});this.skyGeometry=e,this.skyMaterial=t,this.sky=new It(e,t),this.sky.frustumCulled=!1,this.scene.add(this.sky)}#t(){const n=new Mi(150,150,240,240);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let o=0;o<i.count;o++)i.setY(o,vi.height(i.getX(o),i.getZ(o)));i.needsUpdate=!0,n.computeVertexNormals();const s=new yt({vertexShader:BS,fragmentShader:kS,uniforms:{uSunDir:this.shared.uSunDir,uSunColor:this.shared.uSunColor,uAmbient:this.shared.uAmbient,uFogColor:this.shared.uFogColor,uIntensity:this.shared.uIntensity,uCameraPos:this.shared.uCameraPos,uFogNear:this.shared.uFogNear,uFogFar:this.shared.uFogFar,uPhotoMap:this.shared.uPhotoMap,uHasPhoto:this.shared.uHasPhoto,uPhotoSize:this.shared.uPhotoSize,uDelight:this.shared.uDelight,uTime:this.shared.uTime,uCoverage:this.shared.uCoverage,uStir:this.shared.uStir,uUnderwater:this.shared.uUnderwater,uWaterColor:this.shared.uWaterColor,uShadowMap:this.shared.uShadowMap,uShadowMatrix:this.shared.uShadowMatrix,uShadowOn:this.shared.uShadowOn},side:Cn});this.terrain=new It(n,s),this.group.add(this.terrain)}#n(){const e=new Mi(1100,1100,220,220);e.rotateX(-Math.PI/2);const t=new yt({vertexShader:WS,fragmentShader:XS,uniforms:{uSunDir:this.shared.uSunDir,uSunColor:this.shared.uSunColor,uSkyTop:this.shared.uSkyTop,uSkyBottom:this.shared.uSkyBottom,uWaterColor:this.shared.uWaterColor,uAmbient:this.shared.uAmbient,uFogColor:this.shared.uFogColor,uCameraPos:this.shared.uCameraPos,uIntensity:this.shared.uIntensity,uTime:this.shared.uTime,uFogNear:this.shared.uFogNear,uFogFar:this.shared.uFogFar,uHeartLUT:this.shared.uHeartLUT,uHeartScale:this.shared.uHeartScale,uCoverage:this.shared.uCoverage,uStir:this.shared.uStir,uUnderwater:this.shared.uUnderwater,uEnvMap:this.shared.uEnvMap,uHasEnv:this.shared.uHasEnv,uShadowMap:this.shared.uShadowMap,uShadowMatrix:this.shared.uShadowMatrix,uShadowOn:this.shared.uShadowOn},side:Cn});this.water=new It(e,t),this.water.position.y=0,this.group.add(this.water)}loadPhoto(e=cy){new AS().load(e,t=>{t.colorSpace=ri,t.wrapS=t.wrapT=cr,t.anisotropy=8,this.shared.uPhotoMap.value=t,this.shared.uHasPhoto.value=1},void 0,()=>{})}dispose(){this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}const nn=[{slug:"",journey:"dive",life:{coral:110,schools:5,resting:0,godrays:1,fluorescent:0,plankton:0},clouds:.42,sun:.3,nav:"The Island",title:"A heart, seen from the air",tagline:"Tavarua · Mamanuca Islands",chapters:[{eyebrow:"01 — Shape",heading:"Twenty-nine acres in the shape of a heart",body:["The outline is not a metaphor. A sand ring closed on itself and left a cleft at one end, and from a few hundred feet up the island reads as a heart without any help.","The coastline here comes from an implicit heart curve, baked into a radius table that the terrain and the lagoon both read — so the beach and the shore break always agree."]},{eyebrow:"02 — Light",heading:"One value moves the sun",body:["Dragging sets a single number. That number places the sun and selects the entire palette: sky, sand, canopy, water, fog.","Because every shader reads the same uniforms, the island re-lights as one world rather than as several effects that happen to animate together."]}]},{slug:"reef",clouds:.62,sun:.55,nav:"The Reef",title:"The break that made it famous",tagline:"Coral shelf · Cloudbreak",chapters:[{eyebrow:"01 — Coral",heading:"The reef is its own shape",body:["It would be easy to draw the reef as a larger copy of the island. It would also be wrong — the water would read as one enormous heart, which is not what the aerials show.","So the reef is modelled separately: a lopsided oval with coral noise, surrounding the island without imitating it."]},{eyebrow:"02 — Surf",heading:"Waves break twice",body:["Once at the sand line, following the coastline. Once far out on the coral edge, standing off the island entirely.","Both are driven by the same wave field that displaces the surface, so the foam always sits on water that is actually moving."]}]},{slug:"lagoon",journey:"sail",clouds:.22,sun:.2,nav:"The Lagoon",title:"Where the sand shows through",tagline:"Shallows · Turquoise",chapters:[{eyebrow:"01 — Depth",heading:"Colour is a depth cue",body:["Shallow water over white sand throws light back before it can be absorbed. Deeper water keeps it. The gradient from turquoise to blue is doing the work of a depth map.","Reflection follows the same rule: the shelf is far less mirror-like than open water, because you are looking at sand rather than sky."]}]},{slug:"canopy",journey:"island",clouds:.5,sun:.66,nav:"The Canopy",title:"Green above the sand line",tagline:"Interior · Palms",chapters:[{eyebrow:"01 — Profile",heading:"Flat, not peaked",body:["A coral island is not a mountain. The profile is a wide sand shelf that lifts into a gently domed interior — get that wrong and the silhouette stops reading as tropical.","Vegetation is placed by height and slope rather than painted, so the canopy stops where the beach begins on its own."]}]},{slug:"horizon",journey:"dive",life:{coral:95,schools:1,resting:3,godrays:.35,fluorescent:.5,plankton:900},clouds:.78,sun:.88,nav:"The Horizon",title:"Everything past the reef",tagline:"Open water · Weather",chapters:[{eyebrow:"01 — Distance",heading:"Fog is the only sense of scale",body:["With no buildings and no trees at distance, an ocean scene loses depth fast. Atmospheric fade is what puts the horizon far away.","Its colour is taken from the same palette as the sun, so haze at dusk warms with everything else instead of staying a fixed grey."]}]}],No="/island-webgl".replace(/\/+$/,""),uy=r=>{const e=nn[(r%nn.length+nn.length)%nn.length];return e.slug?`${No}/${e.slug}/`:`${No}/`},hy=r=>{let e=r;No&&e.startsWith(No)&&(e=e.slice(No.length));const t=e.replace(/^\/|\/$/g,""),n=nn.findIndex(i=>i.slug===t);return n===-1?0:n},kp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class co{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fy=new ch(-1,1,1,-1,0,1);class dy extends on{constructor(){super(),this.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Nt([0,2,0,0,2,0],2))}}const py=new dy;class vh{constructor(e){this._mesh=new It(py,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class my extends co{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Jo.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new vh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ad extends co{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class gy extends co{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _y{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Xe);this._width=n.width,this._height=n.height,t=new Zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new my(kp),this.copyPass.material.blending=qi,this.clock=new Up}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ad!==void 0&&(o instanceof ad?n=!0:o instanceof gy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vy extends co{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const xy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class js extends co{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Xe(e.x,e.y):new Xe(256,256),this.clearColor=new He(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Zn(s,o,{type:xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Zn(s,o,{type:xi});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Zn(s,o,{type:xi});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=xy;this.highPassUniforms=Jo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Xe(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=kp;this.copyUniforms=Jo.clone(u.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:$o,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new He,this.oldClearAlpha=1,this.basic=new Fl,this.fsQuad=new vh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Xe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=js.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=js.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Xe(.5,.5)},direction:{value:new Xe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}js.BlurDirectionX=new Xe(1,0);js.BlurDirectionY=new Xe(0,1);const My={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Sy extends co{constructor(){super();const e=My;this.uniforms=Jo.clone(e.uniforms),this.material=new wS({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new vh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ep?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===eh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===tp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===np&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class yy{constructor(e,t,n){this.renderer=e;const i=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.composer=new _y(e,new Zn(1,1,{type:xi,samples:i?0:4})),this.composer.addPass(new vy(t,n)),this.bloom=new js(new Xe(1,1),.42,.75,.6),this.composer.addPass(this.bloom),this.composer.addPass(new Sy)}setSize(e,t,n){this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.bloom.setSize(e*n,t*n)}render(){this.composer.render()}}class wy{constructor(e,t,n){this.renderer=e,this.target=new Ep(128,{type:xi,generateMipmaps:!1,minFilter:Rn,magFilter:Rn}),this.camera=new bp(1,2e3,this.target),this.scene=new Ip;const i=new It(t,n);i.frustumCulled=!1,this.scene.add(i),this.frame=0}get texture(){return this.target.texture}update(e=!1){!e&&this.frame++%4!==0||this.camera.update(this.renderer,this.scene)}}const by=60;function Ty({coarse:r=!1}={}){return{scale:r?.6:1,samples:[],lastChange:0,lastWasDrop:!1,goodWindows:0,budgetMs:22,min:.35,max:1}}function Ey(r,e,t){if(t<1.5||e>500||(r.samples.push(e),r.samples.length<by))return null;const n=[...r.samples].sort((a,l)=>a-l),i=n[n.length>>1];if(r.samples.length=0,t-r.lastChange<(r.lastWasDrop?4:2))return null;let s=r.scale,o=!1;if(i>r.budgetMs&&r.scale>r.min){const a=Math.sqrt(r.budgetMs/i);s=Math.max(r.min,r.scale*a),o=!0}else if(i<r.budgetMs*.85&&r.scale<r.max){if(++r.goodWindows<2)return null;s=Math.min(r.max,r.scale+.1)}else return r.goodWindows=0,null;return r.goodWindows=0,Math.abs(s-r.scale)<.01?null:(r.scale=Math.round(s*100)/100,r.lastChange=t,r.lastWasDrop=o,r.scale)}class Ay{constructor(){this.ready=!1,this.atmosphere=new PS,this.slide={target:0,current:0},this.scroll={target:0,current:0},this.pointer={tx:0,ty:0,x:0,y:0},this._shadowFrame=0,this.clock=new Up,this.sizes={width:1,height:1,dpr:1},this.res=Ty({coarse:typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches}),this.#e()}#e(){Ti.on(bi.RESIZE,e=>this.resize(e)),Ti.on(bi.SLIDE,e=>{this.slide.target=e}),Ti.on(bi.SCROLL,e=>{this.scroll.target=e}),Ti.on(bi.ATTACH,()=>this.start()),Ti.on(bi.DETACH,()=>this.stop())}async init(e,t){this.ready||this.initializing||(this.initializing=!0,this.wrapper=e,this.canvas=t,this.renderer=new xS({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.toneMapping=eh,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=ri,window.addEventListener("beforeunload",()=>{this.renderer?.setAnimationLoop(null),this.renderer?.dispose(),this.renderer?.forceContextLoss()}),this.camera=new si(42,1,.5,1400),window.addEventListener("pointermove",n=>{this.pointer.tx=n.clientX/window.innerWidth*2-1,this.pointer.ty=-(n.clientY/window.innerHeight*2-1)},{passive:!0}),this.world=new vi,this.skyEnv=new wy(this.renderer,this.world.skyGeometry,this.world.skyMaterial),this.world.shared.uEnvMap.value=this.skyEnv.texture,this.world.shared.uHasEnv.value=1,this.shadow=new OS(this.renderer),this.world.shared.uShadowMap.value=this.shadow.texture,this.world.shared.uShadowMatrix.value=this.shadow.matrix,this.post=new yy(this.renderer,this.world.scene,this.camera),this.ready=!0,this.resize(this.viewportInfo()))}viewportInfo(){const e=window.innerWidth,t=window.innerHeight,i=window.matchMedia?.("(pointer: coarse)").matches?Math.sqrt(18e5/Math.max(e*t,1)):1/0,s=Math.max(1,Math.min(window.devicePixelRatio||1,2,i));return{width:e,height:t,dpr:s*this.res.scale}}resize(e=this.viewportInfo()){if(!this.ready)return;const{width:t,height:n,dpr:i}=e,s=this.sizes;if(s&&s.width===t&&s.height===n&&s.dpr===i)return;this.sizes={width:t,height:n,dpr:i},this.renderer.setPixelRatio(i),this.renderer.setSize(t,n,!1),this.post?.setSize(t,n,i),this.camera.aspect=t/n;const o=1.05,a=42,l=xn.degToRad(a)/2,c=2*Math.atan(Math.tan(l)*o),u=2*Math.atan(Math.tan(c/2)/Math.max(this.camera.aspect,.01));this.camera.fov=xn.clamp(xn.radToDeg(u),a,78),this.camera.updateProjectionMatrix()}start(){!this.ready||this.running||(this.running=!0,this.clock.start(),this.renderer.setAnimationLoop(()=>this.tick()))}stop(){this.running=!1,this.renderer?.setAnimationLoop(null)}tick(){const e=this.clock.getDelta(),t=this.clock.elapsedTime,n=Math.min(e,.1);Ey(this.res,e*1e3,t)!==null&&this.resize(this.viewportInfo());const i=(v,b)=>{const U=1-Math.pow(1-b,n*60);v.current+=(v.target-v.current)*U};i(this.slide,.075),i(this.scroll,.09);const s=this.slide.current,o=this.scroll.current,a=xn.clamp(Math.floor(s),0,nn.length-1),l=Math.min(a+1,nn.length-1),c=xn.lerp(nn[a].sun,nn[l].sun,s-a);this.atmosphere.update(c),this.world.shared.uCoverage.value=xn.lerp(nn[a].clouds,nn[l].clouds,s-a);const u=this.world.shared;u.uSunDir.value.copy(this.atmosphere.sunDir),u.uSunColor.value.copy(this.atmosphere.sunColor),u.uSkyTop.value.copy(this.atmosphere.skyTop),u.uSkyBottom.value.copy(this.atmosphere.skyBottom),u.uAmbient.value.copy(this.atmosphere.ambient),u.uFogColor.value.copy(this.atmosphere.fogColor),u.uWaterColor.value.copy(this.atmosphere.waterColor),u.uIntensity.value=this.atmosphere.intensity,u.uTime.value=t;const h=s/nn.length*Math.PI*2,f=Qf(nn[a].journey,o),d=Qf(nn[l].journey,o),g=s-a,_=xn.lerp(f.d,d.d,g),p=xn.lerp(f.h,d.h,g),m=xn.lerp(f.look,d.look,g),x=xn.lerp(f.az,d.az,g),M=1-Math.exp(-.5*n);this.pointer.x+=(this.pointer.tx-this.pointer.x)*M,this.pointer.y+=(this.pointer.ty-this.pointer.y)*M;const S=this.pointer.x,A=this.pointer.y,E=h+x+S*.05;this.camera.position.set(Math.sin(E)*_,p+A*2.4,Math.cos(E)*_),this.camera.lookAt(S*1.4,m-A*.5,0),this.camera.updateMatrixWorld(),u.uCameraPos.value.copy(this.camera.position);const y=xn.smoothstep(-this.camera.position.y,-.8,.8);u.uUnderwater.value=y,this.world.setUnderwater(y,this.camera.position.y),this.world.update(n,this.camera.position.y,u.uTime.value);const C=Math.round(s);C!==this._populatedFor&&(this._populatedFor=C,this.world.applySection(nn[C],this.camera.position)),this.#t(u,S,A),this.skyEnv.update();const L=this.world.flora.group.visible||this.world.boat.group.visible;if(L&&this._shadowFrame++%2===0){const v=this.shadow.update(this.world.scene,this.atmosphere.sunDir,[this.world.terrain,this.world.flora.group,this.world.boat.group]);u.uShadowOn.value=v?1:0}else L||(u.uShadowOn.value=0);this.post.render()}#t(e,t,n){this._ndc=this._ndc||new H;const i=this.camera.position,s=this._ndc.set(t,n,.5).unproject(this.camera).sub(i).normalize();let o=s.y!==0?-i.y/s.y:0;o>0||(o=0),o=Math.min(o,400);const a=i.x+s.x*o,l=i.z+s.z*o,c=300;e.uStir.value.set(a/c*.3,l/c*.3),e.uStirWorld.value.set(a,l)}}const al=new Ay;typeof window<"u"&&(window.__islandApp=al);function Hi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function zp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ea={duration:.5,overwrite:!1,delay:0},xh,sn,At,li=1e8,Mt=1/li,Cu=Math.PI*2,Cy=Cu/4,Ry=0,Hp=Math.sqrt,Py=Math.cos,Dy=Math.sin,en=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},Zi=function(e){return typeof e=="number"},Mh=function(e){return typeof e>"u"},Ii=function(e){return typeof e=="object"},Ln=function(e){return e!==!1},Sh=function(){return typeof window<"u"},za=function(e){return Ut(e)||en(e)},Gp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pn=Array.isArray,Ly=/random\([^)]+\)/g,Iy=/,\s*/g,ld=/(?:-?\.?\d|\.)+/gi,Vp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wp=/[+-]=-?[.\d]+/,Uy=/[^,'"\[\]\s]+/gi,Ny=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,Si,Ru,yh,Jn={},yl={},Xp,Yp=function(e){return(yl=Js(e,Jn))&&Fn},wh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ta=function(e,t){return!t&&console.warn(e)},qp=function(e,t){return e&&(Jn[e]=t)&&yl&&(yl[e]=t)||Jn},na=function(){return 0},Fy={suppressEvents:!0,isStart:!0,kill:!1},ll={suppressEvents:!0,kill:!1},Oy={suppressEvents:!0},bh={},_r=[],Pu={},$p,Vn={},Rc={},cd=30,cl=[],Th="",Eh=function(e){var t=e[0],n,i;if(Ii(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=cl.length;i--&&!cl[i].targetTest(t););n=cl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new gm(e[i],n)))||e.splice(i,1);return e},qr=function(e){return e._gsap||Eh(ci(e))[0]._gsap},Kp=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():Mh(n)&&e.getAttribute&&e.getAttribute(t)||n},In=function(e,t){return(e=e.split(",")).forEach(t)||e},kt=function(e){return Math.round(e*1e5)/1e5||0},Ct=function(e){return Math.round(e*1e7)/1e7||0},Os=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},By=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},wl=function(){var e=_r.length,t=_r.slice(0),n,i;for(Pu={},_r.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ah=function(e){return!!(e._initted||e._startAt||e.add)},Zp=function(e,t,n,i){_r.length&&!sn&&wl(),e.render(t,n,!!(sn&&t<0&&Ah(e))),_r.length&&!sn&&wl()},jp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Uy).length<2?t:en(e)?e.trim():e},Jp=function(e){return e},Qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ky=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Js=function(e,t){for(var n in t)e[n]=t[n];return e},ud=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ii(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},bl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Fo=function(e){var t=e.parent||Rt,n=e.keyframes?ky(pn(e.keyframes)):Qn;if(Ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},zy=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Qp=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},kl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},wr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},$r=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Hy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Du=function(e,t,n,i){return e._startAt&&(sn?e._startAt.revert(ll):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Gy=function r(e){return!e||e._ts&&r(e.parent)},hd=function(e){return e._repeat?Qs(e._tTime,e=e.duration()+e._rDelay)*e:0},Qs=function(e,t){var n=Math.floor(e=Ct(e/t));return e&&n===e?n-1:n},Tl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},zl=function(e){return e._end=Ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},Hl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),zl(e),n._dirty||$r(n,e)),e},em=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Tl(e.rawTime(),t),(!t._dur||fa(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),$r(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},Ei=function(e,t,n,i){return t.parent&&wr(t),t._start=Ct((Zi(n)?n:n||e!==Rt?ni(e,n,t):e._time)+t._delay),t._end=Ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Qp(e,t,"_first","_last",e._sort?"_start":0),Lu(t)||(e._recent=t),i||em(e,t),e._ts<0&&Hl(e,e._tTime),e},tm=function(e,t){return(Jn.ScrollTrigger||wh("scrollTrigger",t))&&Jn.ScrollTrigger.create(t,e)},nm=function(e,t,n,i,s){if(Rh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$p!==Xn.frame)return _r.push(e),e._lazy=[s,i],1},Vy=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Lu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Wy=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Vy(e)&&!(!e._initted&&Lu(e))||(e._ts<0||e._dp._ts<0)&&!Lu(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=fa(0,e._tDur,t),u=Qs(l,a),e._yoyo&&u&1&&(o=1-o),u!==Qs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||sn||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&nm(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Du(e,t,n,!0),e._onUpdate&&!n&&$n(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&$n(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&wr(e,1),!n&&!sn&&($n(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Xy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},eo=function(e,t,n,i){var s=e._repeat,o=Ct(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ct(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Hl(e,e._tTime=e._tDur*a),e.parent&&zl(e),n||$r(e.parent,e),e},fd=function(e){return e instanceof Pn?$r(e):eo(e,e._dur)},Yy={_start:0,endTime:na,totalDuration:na},ni=function r(e,t,n){var i=e.labels,s=e._recent||Yy,o=e.duration()>=li?s.endTime(!1):e._dur,a,l,c;return en(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(pn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Oo=function(e,t,n){var i=Zi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ln(l.vars.inherit)&&l.parent;o.immediateRender=Ln(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Wt(t[0],o,t[s+1])},Cr=function(e,t){return e||e===0?t(e):t},fa=function(e,t,n){return n<e?e:n>t?t:n},hn=function(e,t){return!en(e)||!(t=Ny.exec(e))?"":t[1]},qy=function(e,t,n){return Cr(n,function(i){return fa(e,t,i)})},Iu=[].slice,im=function(e,t){return e&&Ii(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ii(e[0]))&&!e.nodeType&&e!==Si},$y=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return en(i)&&!t||im(i,1)?(s=n).push.apply(s,ci(i)):n.push(i)})||n},ci=function(e,t,n){return At&&!t&&At.selector?At.selector(e):en(e)&&!n&&(Ru||!to())?Iu.call((t||yh).querySelectorAll(e),0):pn(e)?$y(e,n):im(e)?Iu.call(e,0):e?[e]:[]},Uu=function(e){return e=ci(e)[0]||ta("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ci(t,n.querySelectorAll?n:n===e?ta("Invalid scope")||yh.createElement("div"):e)}},rm=function(e){return e.sort(function(){return .5-Math.random()})},sm=function(e){if(Ut(e))return e;var t=Ii(e)?e:{each:e},n=Kr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return en(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,p=o[_],m,x,M,S,A,E,y,C,L;if(!p){if(L=t.grid==="auto"?0:(t.grid||[1,li])[1],!L){for(y=-li;y<(y=g[L++].getBoundingClientRect().left)&&L<_;);L<_&&L--}for(p=o[_]=[],m=l?Math.min(L,_)*u-.5:i%L,x=L===li?0:l?_*h/L-.5:i/L|0,y=0,C=li,E=0;E<_;E++)M=E%L-m,S=x-(E/L|0),p[E]=A=c?Math.abs(c==="y"?S:M):Hp(M*M+S*S),A>y&&(y=A),A<C&&(C=A);i==="random"&&rm(p),p.max=y-C,p.min=C,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(L>_?_-1:c?c==="y"?_/L:L:Math.max(L,_/L))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=hn(t.amount||t.each)||0,n=n&&_<0?aw(n):n}return _=(p[f]-p.min)/p.max||0,Ct(p.b+(n?n(_):_)*p.v)+p.u}},Nu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Zi(n)?0:hn(n))}},om=function(e,t){var n=pn(e),i,s;return!n&&Ii(e)&&(i=n=e.radius||li,e.values?(e=ci(e.values),(s=!Zi(e[0]))&&(i*=i)):e=Nu(e.increment)),Cr(t,n?Ut(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=li,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Zi(o)?u:u+hn(o)}:Nu(e))},am=function(e,t,n,i){return Cr(pn(e)?!t:n===!0?!!(n=0):!i,function(){return pn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Ky=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Zy=function(e,t){return function(n){return e(parseFloat(n))+(t||hn(n))}},jy=function(e,t,n){return cm(e,t,0,1,n)},lm=function(e,t,n){return Cr(n,function(i){return e[~~t(i)]})},Jy=function r(e,t,n){var i=t-e;return pn(e)?lm(e,r(0,e.length),t):Cr(n,function(s){return(i+(s-e)%i)%i+e})},Qy=function r(e,t,n){var i=t-e,s=i*2;return pn(e)?lm(e,r(0,e.length-1),t):Cr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ia=function(e){return e.replace(Ly,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Iy);return am(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},cm=function(e,t,n,i,s){var o=t-e,a=i-n;return Cr(s,function(l){return n+((l-e)/o*a||0)})},ew=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=en(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(pn(e)&&!pn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=Js(pn(e)?[]:{},e));if(!u){for(l in t)Ch.call(a,e,l,"get",t[l]);s=function(g){return Lh(g,a)||(o?e.p:e)}}}return Cr(n,s)},dd=function(e,t,n){var i=e.labels,s=li,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},$n=function(e,t,n){var i=e.vars,s=i[t],o=At,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&_r.length&&wl(),a&&(At=a),u=l?s.apply(c,l):s.call(c),At=o,u},To=function(e){return wr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&$n(e,"onInterrupt"),e},Ds,um=[],hm=function(e){if(e)if(e=!e.name&&e.default||e,Sh()||e.headless){var t=e.name,n=Ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:na,render:Lh,add:Ch,kill:_w,modifier:gw,rawVars:0},o={targetTest:0,get:0,getSetter:Dh,aliases:{},register:0};if(to(),e!==i){if(Vn[t])return;Qn(i,Qn(bl(e,s),o)),Js(i.prototype,Js(s,bl(e,o))),Vn[i.prop=t]=i,e.targetTest&&(cl.push(i),bh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qp(t,i),e.register&&e.register(Fn,i,Un)}else um.push(e)},xt=255,Eo={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},Pc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*xt+.5|0},fm=function(e,t,n){var i=e?Zi(e)?[e>>16,e>>8&xt,e&xt]:0:Eo.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Eo[e])i=Eo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&xt,i&xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&xt,e&xt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(ld),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Pc(l+1/3,s,o),i[1]=Pc(l,s,o),i[2]=Pc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Vp),n&&i.length<4&&(i[3]=1),i}else i=e.match(ld)||Eo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/xt,o=i[1]/xt,a=i[2]/xt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},dm=function(e){var t=[],n=[],i=-1;return e.split(vr).forEach(function(s){var o=s.match(Ps)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},pd=function(e,t,n){var i="",s=(e+i).match(vr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=fm(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=dm(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(vr,"1").split(Ps),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(vr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},vr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Eo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),tw=/hsl[a]?\(/,pm=function(e){var t=e.join(" "),n;if(vr.lastIndex=0,vr.test(t))return n=tw.test(t),e[1]=pd(e[1],n),e[0]=pd(e[0],n,dm(e[1])),!0},ra,Xn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(p){var m=r()-i,x=p===!0,M,S,A,E;if((m>e||m<0)&&(n+=m-t),i+=m,A=i-n,M=A-o,(M>0||x)&&(E=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=M+(M>=s?4:s-M),S=1),x||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](A,f,E,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Xp&&(!Ru&&Sh()&&(Si=Ru=window,yh=Si.document||{},Jn.gsap=Fn,(Si.gsapVersions||(Si.gsapVersions=[])).push(Fn.version),Yp(yl||Si.GreenSockGlobals||!Si.gsap&&Si||{}),um.forEach(hm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},ra=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ra=0,c=na},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,x){var M=m?function(S,A,E,y){p(S,A,E,y),h.remove(M)}:p;return h.remove(p),a[x?"unshift":"push"](M),to(),M},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h})(),to=function(){return!ra&&Xn.wake()},lt={},nw=/^[\d.\-M][\d.\-,\s]/,iw=/["']/g,rw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(iw,"").trim():+c,i=l.substr(a+1).trim();return t},sw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ow=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[rw(t[1])]:sw(e).split(",").map(jp)):lt._CE&&nw.test(e)?lt._CE("",e):n},aw=function(e){return function(t){return 1-e(1-t)}},Kr=function(e,t){return e&&(Ut(e)?e:lt[e]||ow(e))||t},rs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return In(e,function(a){lt[a]=Jn[a]=s,lt[o=a.toLowerCase()]=n;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},mm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Dc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Cu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Dy((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:mm(a);return s=Cu/s,l.config=function(c,u){return r(e,c,u)},l},Lc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:mm(n);return i.config=function(s){return r(e,s)},i};In("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;rs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;rs("Elastic",Dc("in"),Dc("out"),Dc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};rs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);rs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});rs("Circ",function(r){return-(Hp(1-r*r)-1)});rs("Sine",function(r){return r===1?1:-Py(r*Cy)+1});rs("Back",Lc("in"),Lc("out"),Lc());lt.SteppedEase=lt.steps=Jn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((i*fa(0,o,a)|0)+s)*n}}};ea.ease=lt["quad.out"];In("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Th+=r+","+r+"Params,"});var gm=function(e,t){this.id=Ry++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Kp,this.set=t?t.getSetter:Dh},sa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,eo(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),ra||Xn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,eo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(to(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Hl(this,n),!s._dp||s.parent||em(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ei(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+hd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+hd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Qs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Tl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts,this.totalTime(fa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),zl(this),Hy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(to(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ct(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ei(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Tl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Oy);var i=sn;return sn=n,Ah(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),sn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,fd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,fd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ni(this,n),Ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ln(i)),this._dur||(this._zTime=-Mt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ut(n)?n:Jp,l=function(){var u=i.then;i.then=null,s&&s(),Ut(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){To(this)},r})();Qn(sa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Pn=(function(r){zp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ln(n.sortChildren),Rt&&Ei(n.parent||Rt,Hi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&tm(Hi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Oo(0,arguments,this),this},t.from=function(i,s,o){return Oo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Oo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Fo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(i,s,ni(this,o),1),this},t.call=function(i,s,o){return Ei(this,Wt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Wt(i,o,ni(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Fo(o).immediateRender=Ln(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Fo(a).immediateRender=Ln(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ct(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,p,m,x,M,S,A,E,y;if(this!==Rt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,M=this._ts,m=!M,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=Ct(u%p),u===l?(_=this._repeat,f=c):(A=Ct(u/p),_=~~A,_&&_===A&&(f=c,_--),f>c&&(f=c)),A=Qs(this._tTime,p),!a&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),E&&_&1&&(f=c-f,y=1),_!==A&&!this._lock){var C=E&&A&1,L=C===(E&&_&1);if(_<A&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(y?0:Ct(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&$n(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,L&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Xy(this,Ct(a),Ct(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&($n(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){x=0,g&&(u+=this._zTime=-Mt);break}}d=g}else{d=this._last;for(var v=i<0?i:f;d;){if(g=d._prev,(d._act||v<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||sn&&Ah(d)),f!==this._time||!this._ts&&!m){x=0,g&&(u+=this._zTime=v?-Mt:Mt);break}}d=g}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-Mt)._zTime=f>=a?1:-1,this._ts))return this._start=S,zl(this),this.render(i,s,o);this._onUpdate&&!s&&$n(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&wr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&($n(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Zi(s)||(s=ni(this,s,i)),!(i instanceof sa)){if(pn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(en(i))return this.addLabel(i,s);if(Ut(i))i=Wt.delayedCall(0,i);else return this}return this!==i?Ei(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-li);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Wt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return en(i)?this.removeLabel(i):Ut(i)?this.killTweensOf(i):(i.parent===this&&kl(this,i),i===this._recent&&(this._recent=this._last),$r(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(Xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ni(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Wt.delayedCall(0,s||na,o);return a.data="isPause",this._hasPause=1,Ei(this,a,ni(this,i))},t.removePause=function(i){var s=this._first;for(i=ni(this,i);s;)s._start===i&&s.data==="isPause"&&wr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ur!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ci(i),l=this._first,c=Zi(s),u;l;)l instanceof Wt?By(l._targets,a)&&(c?(!ur||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ni(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Wt.to(o,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&eo(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Qn({startAt:{time:ni(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),dd(this,ni(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),dd(this,ni(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ct(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return $r(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$r(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=li,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ei(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ct(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;eo(o,o===Rt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Rt._ts&&(Zp(Rt,Tl(i,Rt)),$p=Xn.frame),Xn.frame>=cd){cd+=jn.autoSleep||120;var s=Rt._first;if((!s||!s._ts)&&jn.autoSleep&&Xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xn.sleep()}}},e})(sa);Qn(Pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var lw=function(e,t,n,i,s,o,a){var l=new Un(this._pt,e,t,0,1,ym,null,s),c=0,u=0,h,f,d,g,_,p,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ia(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),f=n.match(Cc)||[];h=Cc.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Os(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Cc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Wp.test(i)||m)&&(l.e=0),this._pt=l,l},Ch=function(e,t,n,i,s,o,a,l,c,u){Ut(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Ut(h)?c?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ut(h)?c?dw:Mm:Ph,g;if(en(i)&&(~i.indexOf("random(")&&(i=ia(i)),i.charAt(1)==="="&&(g=Os(f,i)+(hn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Fu)return!isNaN(f*i)&&i!==""?(g=new Un(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?mw:Sm,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&wh(t,i),lw.call(this,e,t,f,i,d,l||jn.stringFilter,c))},cw=function(e,t,n,i,s){if(Ut(e)&&(e=Bo(e,s,t,n,i)),!Ii(e)||e.style&&e.nodeType||pn(e)||Gp(e))return en(e)?Bo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Bo(e[a],s,t,n,i);return o},_m=function(e,t,n,i,s,o){var a,l,c,u;if(Vn[e]&&(a=new Vn[e]).init(s,a.rawVars?t[e]:cw(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Un(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ds))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ur,Fu,Rh=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:p,M=e._overwrite==="auto"&&!xh,S=e.timeline,A=i.easeReverse||h,E,y,C,L,v,b,U,I,N,X,O,q,G;if(S&&(!f||!s)&&(s="none"),e._ease=Kr(s,ea.ease),e._rEase=A&&(Kr(A)||e._ease),e._from=!S&&!!i.runBackwards,e._from&&(e.ratio=1),!S||f&&!i.stagger){if(I=p[0]?qr(p[0]).harness:0,q=I&&i[I.prop],E=bl(i,bh),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?ll:Fy),_._lazy=0),o){if(wr(e._startAt=Wt.set(p,Qn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Ln(l),startAt:null,delay:0,onUpdate:c&&function(){return $n(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn||!a&&!d)&&e._startAt.revert(ll),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),C=Qn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Ln(l),immediateRender:a,stagger:0,parent:m},E),q&&(C[I.prop]=q),wr(e._startAt=Wt.set(p,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn?e._startAt.revert(ll):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Ln(l)||l&&!g,y=0;y<p.length;y++){if(v=p[y],U=v._gsap||Eh(p)[y]._gsap,e._ptLookup[y]=X={},Pu[U.id]&&_r.length&&wl(),O=x===p?y:x.indexOf(v),I&&(N=new I).init(v,q||E,e,O,x)!==!1&&(e._pt=L=new Un(e._pt,v,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(ne){X[ne]=L}),N.priority&&(b=1)),!I||q)for(C in E)Vn[C]&&(N=_m(C,E,e,O,v,x))?N.priority&&(b=1):X[C]=L=Ch.call(e,v,C,"get",E[C],O,x,0,i.stringFilter);e._op&&e._op[y]&&e.kill(v,e._op[y]),M&&e._pt&&(ur=e,Rt.killTweensOf(v,X,e.globalTime(t)),G=!e.parent,ur=0),e._pt&&l&&(Pu[U.id]=1)}b&&wm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,f&&t<=0&&S.render(li,!0,!0)},uw=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Fu=1,e.vars[t]="+=0",Rh(e,a),Fu=0,l?ta(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=kt(n)+hn(h.e)),h.b&&(h.b=u.s+hn(h.b))},hw=function(e,t){var n=e[0]?qr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Js({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},fw=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(pn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Bo=function(e,t,n,i,s){return Ut(e)?e.call(t,n,i,s):en(e)&&~e.indexOf("random(")?ia(e):e},vm=Th+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",xm={};In(vm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return xm[r]=1});var Wt=(function(r){zp(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Fo(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Rt,x=(pn(n)||Gp(n)?Zi(n[0]):"length"in i)?[n]:ci(n),M,S,A,E,y,C,L,v;if(a._targets=x.length?Eh(x):ta("GSAP target "+n+" not found. https://gsap.com",!jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||za(c)||za(u)){i=a.vars;var b=i.easeReverse||i.yoyoEase;if(M=a.timeline=new Pn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:x}),M.kill(),M.parent=M._dp=Hi(a),M._start=0,f||za(c)||za(u)){if(E=x.length,L=f&&sm(f),Ii(f))for(y in f)~vm.indexOf(y)&&(v||(v={}),v[y]=f[y]);for(S=0;S<E;S++)A=bl(i,xm),A.stagger=0,b&&(A.easeReverse=b),v&&Js(A,v),C=x[S],A.duration=+Bo(c,Hi(a),S,C,x),A.delay=(+Bo(u,Hi(a),S,C,x)||0)-a._delay,!f&&E===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),M.to(C,A,L?L(S,C,x):0),M._ease=lt.none;M.duration()?c=u=0:a.timeline=0}else if(g){Fo(Qn(M.vars.defaults,{ease:"none"})),M._ease=Kr(g.ease||i.ease||"none");var U=0,I,N,X;if(pn(g))g.forEach(function(O){return M.to(x,O,">")}),M.duration();else{A={};for(y in g)y==="ease"||y==="easeEach"||fw(y,g[y],A,g.easeEach);for(y in A)for(I=A[y].sort(function(O,q){return O.t-q.t}),U=0,S=0;S<I.length;S++)N=I[S],X={ease:N.e,duration:(N.t-(S?I[S-1].t:0))/100*c},X[y]=N.v,M.to(x,X,U),U+=X.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!xh&&(ur=Hi(a),Rt.killTweensOf(x),ur=0),Ei(m,Hi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Ct(m._time)&&Ln(h)&&Gy(Hi(a))&&m.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-u)||0)),p&&tm(Hi(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Mt&&!u?l:i<Mt?0:i,f,d,g,_,p,m,x,M;if(!c)Wy(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=Ct(h%_),h===l?(g=this._repeat,f=c):(p=Ct(h/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(f=c-f),p=Qs(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ct(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(nm(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var S=f<a;if(S!==this._inv){var A=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(S?-1:1)/A:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(f/c);if(this._from&&(this.ratio=x=1-x),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!p&&($n(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Du(this,i,s,o),$n(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&$n(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Du(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&wr(this,1),!s&&!(u&&!a)&&(h||a||m)&&($n(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){ra||Xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Rh(this,c),u=this._ease(c/this._dur),uw(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Hl(this,0),this.parent||Qp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?To(this):this.scrollTrigger&&this.scrollTrigger.kill(!!sn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ur&&ur.vars.overwrite!==!0)._first||To(this),this.parent&&o!==this.timeline.totalDuration()&&eo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ci(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!s||s==="all")&&zy(a,l))return s==="all"&&(this._pt=0),To(this);for(h=this._op=this._op||[],s!=="all"&&(en(s)&&(_={},In(s,function(x){return _[x]=1}),s=_),s=hw(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,g=f,d={}):(d=h[m]=h[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&kl(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&To(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Oo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Oo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Rt.killTweensOf(i,s,o)},e})(sa);Qn(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});In("staggerTo,staggerFrom,staggerFromTo",function(r){Wt[r]=function(){var e=new Pn,t=Iu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ph=function(e,t,n){return e[t]=n},Mm=function(e,t,n){return e[t](n)},dw=function(e,t,n,i){return e[t](i.fp,n)},pw=function(e,t,n){return e.setAttribute(t,n)},Dh=function(e,t){return Ut(e[t])?Mm:Mh(e[t])&&e.setAttribute?pw:Ph},Sm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},mw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ym=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Lh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},gw=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},_w=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?kl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},vw=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},wm=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Un=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Sm,this.d=l||this,this.set=c||Ph,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=vw,this.m=n,this.mt=s,this.tween=i},r})();In(Th+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return bh[r]=1});Jn.TweenMax=Jn.TweenLite=Wt;Jn.TimelineLite=Jn.TimelineMax=Pn;Rt=new Pn({sortChildren:!1,defaults:ea,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jn.stringFilter=pm;var Zr=[],ul={},xw=[],md=0,Mw=0,Ic=function(e){return(ul[e]||xw).map(function(t){return t()})},Ou=function(){var e=Date.now(),t=[];e-md>2&&(Ic("matchMediaInit"),Zr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Si.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ic("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),md=e,Ic("matchMedia"))},bm=(function(){function r(t,n){this.selector=n&&Uu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Mw++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ut(n)&&(s=i,i=n,n=Ut);var o=this,a=function(){var c=At,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Uu(s)),At=o,h=i.apply(o,arguments),Ut(h)&&o._r.push(h),At=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ut?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Pn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Wt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Zr.length;o--;)Zr[o].id===this.id&&Zr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),Sw=(function(){function r(t){this.contexts=[],this.scope=t,At&&At.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ii(n)||(n={matches:n});var o=new bm(0,s||this.scope),a=o.conditions={},l,c,u;At&&!o.selector&&(o.selector=At.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Si.matchMedia(n[c]),l&&(Zr.indexOf(o)<0&&Zr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ou):l.addEventListener("change",Ou)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),El={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return hm(i)})},timeline:function(e){return new Pn(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){en(e)&&(e=ci(e)[0]);var s=qr(e||{}).get,o=n?Jp:jp;return n==="native"&&(n=""),e&&(t?o((Vn[t]&&Vn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Vn[a]&&Vn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ci(e),e.length>1){var i=e.map(function(u){return Fn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Vn[t],a=qr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Ds._pt=0,h.init(e,n?u+n:u,Ds,0,[e]),h.render(1,h),Ds._pt&&Lh(1,Ds)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Fn.to(e,Qn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Kr(e.ease,ea.ease)),ud(ea,e||{})},config:function(e){return ud(jn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Vn[a]&&!Jn[a]&&ta(t+" effect requires "+a+" plugin.")}),Rc[t]=function(a,l,c){return n(ci(a),Qn(l||{},s),c)},o&&(Pn.prototype[t]=function(a,l,c){return this.add(Rc[t](a,Ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=Kr(t)},parseEase:function(e,t){return arguments.length?Kr(e,t):lt},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Pn(e),i,s;for(n.smoothChildTiming=Ln(e.smoothChildTiming),Rt.remove(n),n._dp=0,n._time=n._tTime=Rt._time,i=Rt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Wt&&i.vars.onComplete===i._targets[0]))&&Ei(n,i,i._start-i._delay),i=s;return Ei(Rt,n,0),n},context:function(e,t){return e?new bm(e,t):At},matchMedia:function(e){return new Sw(e)},matchMediaRefresh:function(){return Zr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ou()},addEventListener:function(e,t){var n=ul[e]||(ul[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ul[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Jy,wrapYoyo:Qy,distribute:sm,random:am,snap:om,normalize:jy,getUnit:hn,clamp:qy,splitColor:fm,toArray:ci,selector:Uu,mapRange:cm,pipe:Ky,unitize:Zy,interpolate:ew,shuffle:rm},install:Yp,effects:Rc,ticker:Xn,updateRoot:Pn.updateRoot,plugins:Vn,globalTimeline:Rt,core:{PropTween:Un,globals:qp,Tween:Wt,Timeline:Pn,Animation:sa,getCache:qr,_removeLinkedListItem:kl,reverting:function(){return sn},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return xh=e}}};In("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return El[r]=Wt[r]});Xn.add(Pn.updateRoot);Ds=El.to({},{duration:0});var yw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ww=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=yw(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Uc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(en(s)&&(l={},In(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ww(a,s)}}}},Fn=El.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Uc("roundProps",Nu),Uc("modifiers"),Uc("snap",om))||El;Wt.version=Pn.version=Fn.version="3.15.0";Xp=1;Sh()&&to();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gd,hr,Bs,Ih,Xr,_d,Uh,bw=function(){return typeof window<"u"},ji={},kr=180/Math.PI,ks=Math.PI/180,ys=Math.atan2,vd=1e8,Nh=/([A-Z])/g,Tw=/(left|right|width|margin|padding|x)/i,Ew=/[\s,\(]\S/,Ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Aw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Cw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Rw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Pw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Tm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Em=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Dw=function(e,t,n){return e.style[t]=n},Lw=function(e,t,n){return e.style.setProperty(t,n)},Iw=function(e,t,n){return e._gsap[t]=n},Uw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Nw=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Fw=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Pt="transform",Nn=Pt+"Origin",Ow=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Gi(i,a)}):this.tfm[e]=o.x?o[e]:Gi(i,e),e===Nn&&(this.tfm.zOrigin=o.zOrigin);else return Ri.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Pt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Nn,t,"")),e=Pt}(s||t)&&this.props.push(e,t,s[e])},Am=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Bw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Nh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Uh(),(!s||!s.isStart)&&!n[Pt]&&(Am(n),i.zOrigin&&n[Nn]&&(n[Nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Cm=function(e,t){var n={target:e,props:[],revert:Bw,save:Ow};return e._gsap||Fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Rm,ku=function(e,t){var n=hr.createElementNS?hr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hr.createElement(e);return n&&n.style?n:hr.createElement(e)},Kn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Nh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,no(t)||t,1)||""},xd="O,Moz,ms,Ms,Webkit".split(","),no=function(e,t,n){var i=t||Xr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(xd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?xd[o]:"")+e},zu=function(){bw()&&window.document&&(gd=window,hr=gd.document,Bs=hr.documentElement,Xr=ku("div")||{style:{}},ku("div"),Pt=no(Pt),Nn=Pt+"Origin",Xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rm=!!no("perspective"),Uh=Fn.core.reverting,Ih=1)},Md=function(e){var t=e.ownerSVGElement,n=ku("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Bs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Bs.removeChild(n),s},Sd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Pm=function(e){var t,n;try{t=e.getBBox()}catch{t=Md(e),n=1}return t&&(t.width||t.height)||n||(t=Md(e)),t&&!t.width&&!t.x&&!t.y?{x:+Sd(e,["x","cx","x1"])||0,y:+Sd(e,["y","cy","y1"])||0,width:0,height:0}:t},Dm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Pm(e))},br=function(e,t){if(t){var n=e.style,i;t in ji&&t!==Nn&&(t=Pt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Nh,"-$1").toLowerCase())):n.removeAttribute(t)}},fr=function(e,t,n,i,s,o){var a=new Un(e._pt,t,n,0,1,o?Em:Tm);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},yd={deg:1,rad:1,turn:1},kw={grid:1,flex:1},Tr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Xr.style,l=Tw.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,p,m;if(i===o||!s||yd[i]||yd[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&Dm(e),(d||o==="%")&&(ji[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],kt(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===hr||!_.appendChild)&&(_=hr.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Xn.time&&!p.uncache)return kt(s/p.width*h);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,g=e[u],x?e.style[t]=x:br(e,t)}else(d||o==="%")&&!kw[Kn(_,"display")]&&(a.position=Kn(e,"position")),_===e&&(a.position="static"),_.appendChild(Xr),g=Xr[u],_.removeChild(Xr),a.position="absolute";return l&&d&&(p=qr(_),p.time=Xn.time,p.width=_[u]),kt(f?g*s/h:g&&s?h/g*s:0)},Gi=function(e,t,n,i){var s;return Ih||zu(),t in Ri&&t!=="transform"&&(t=Ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),ji[t]&&t!=="transform"?(s=aa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Cl(Kn(e,Nn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Al[t]&&Al[t](e,t,n)||Kn(e,t)||Kp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Tr(e,t,s,n)+n:s},zw=function(e,t,n,i){if(!n||n==="none"){var s=no(t,e,1),o=s&&Kn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Kn(e,"borderTopColor"))}var a=new Un(this._pt,e.style,t,0,1,ym),l=0,c=0,u,h,f,d,g,_,p,m,x,M,S,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Kn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Kn(e,t)||i,_?e.style[t]=_:br(e,t)),u=[n,i],pm(u),n=u[0],i=u[1],f=n.match(Ps)||[],A=i.match(Ps)||[],A.length){for(;h=Ps.exec(i);)p=h[0],x=i.substring(l,h.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),p.charAt(1)==="="&&(p=Os(d,p)+S),m=parseFloat(p),M=p.substr((m+"").length),l=Ps.lastIndex-M.length,M||(M=M||jn.units[t]||S,l===i.length&&(i+=M,a.e+=M)),S!==M&&(d=Tr(e,t,_,M)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Em:Tm;return Wp.test(i)&&(a.e=0),this._pt=a,a},wd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Hw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=wd[n]||n,t[1]=wd[i]||i,t.join(" ")},Gw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ji[a]&&(l=1,a=a==="transformOrigin"?Nn:Pt),br(n,a);l&&(br(n,Pt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",aa(n,1),o.uncache=1,Am(i)))}},Al={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Un(e._pt,t,n,0,0,Gw);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},oa=[1,0,0,1,0,0],Lm={},Im=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bd=function(e){var t=Kn(e,Pt);return Im(t)?oa:t.substr(7).match(Vp).map(kt)},Fh=function(e,t){var n=e._gsap||qr(e),i=e.style,s=bd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?oa:s):(s===oa&&!e.offsetParent&&e!==Bs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Bs.appendChild(e)),s=bd(e),l?i.display=l:br(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Bs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Hu=function(e,t,n,i,s,o){var a=e._gsap,l=s||Fh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],x=l[5],M=t.split(" "),S=parseFloat(M[0])||0,A=parseFloat(M[1])||0,E,y,C,L;n?l!==oa&&(y=d*p-g*_)&&(C=S*(p/y)+A*(-_/y)+(_*x-p*m)/y,L=S*(-g/y)+A*(d/y)-(d*x-g*m)/y,S=C,A=L):(E=Pm(e),S=E.x+(~M[0].indexOf("%")?S/100*E.width:S),A=E.y+(~(M[1]||M[0]).indexOf("%")?A/100*E.height:A)),i||i!==!1&&a.smooth?(m=S-c,x=A-u,a.xOffset=h+(m*d+x*_)-m,a.yOffset=f+(m*g+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Nn]="0px 0px",o&&(fr(o,a,"xOrigin",c,S),fr(o,a,"yOrigin",u,A),fr(o,a,"xOffset",h,a.xOffset),fr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+A)},aa=function(e,t){var n=e._gsap||new gm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Kn(e,Nn)||"0",u,h,f,d,g,_,p,m,x,M,S,A,E,y,C,L,v,b,U,I,N,X,O,q,G,ne,P,ie,Ae,Ue,$,Q;return u=h=f=_=p=m=x=M=S=0,d=g=1,n.svg=!!(e.getCTM&&Dm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pt]!=="none"?l[Pt]:"")),i.scale=i.rotate=i.translate="none"),y=Fh(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Hu(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,y)),A=n.xOrigin||0,E=n.yOrigin||0,y!==oa&&(b=y[0],U=y[1],I=y[2],N=y[3],u=X=y[4],h=O=y[5],y.length===6?(d=Math.sqrt(b*b+U*U),g=Math.sqrt(N*N+I*I),_=b||U?ys(U,b)*kr:0,x=I||N?ys(I,N)*kr+_:0,x&&(g*=Math.abs(Math.cos(x*ks))),n.svg&&(u-=A-(A*b+E*I),h-=E-(A*U+E*N))):(Q=y[6],Ue=y[7],P=y[8],ie=y[9],Ae=y[10],$=y[11],u=y[12],h=y[13],f=y[14],C=ys(Q,Ae),p=C*kr,C&&(L=Math.cos(-C),v=Math.sin(-C),q=X*L+P*v,G=O*L+ie*v,ne=Q*L+Ae*v,P=X*-v+P*L,ie=O*-v+ie*L,Ae=Q*-v+Ae*L,$=Ue*-v+$*L,X=q,O=G,Q=ne),C=ys(-I,Ae),m=C*kr,C&&(L=Math.cos(-C),v=Math.sin(-C),q=b*L-P*v,G=U*L-ie*v,ne=I*L-Ae*v,$=N*v+$*L,b=q,U=G,I=ne),C=ys(U,b),_=C*kr,C&&(L=Math.cos(C),v=Math.sin(C),q=b*L+U*v,G=X*L+O*v,U=U*L-b*v,O=O*L-X*v,b=q,X=G),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=kt(Math.sqrt(b*b+U*U+I*I)),g=kt(Math.sqrt(O*O+Q*Q)),C=ys(X,O),x=Math.abs(C)>2e-4?C*kr:0,S=$?1/($<0?-$:$):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Im(Kn(e,Pt)),q&&e.setAttribute("transform",q))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=kt(d),n.scaleY=kt(g),n.rotation=kt(_)+a,n.rotationX=kt(p)+a,n.rotationY=kt(m)+a,n.skewX=x+a,n.skewY=M+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Nn]=Cl(c)),n.xOffset=n.yOffset=0,n.force3D=jn.force3D,n.renderTransform=n.svg?Ww:Rm?Um:Vw,n.uncache=0,n},Cl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Nc=function(e,t,n){var i=hn(t);return kt(parseFloat(t)+parseFloat(Tr(e,"x",n+"px",i)))+i},Vw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Um(e,t)},Nr="0deg",xo="0px",Fr=") ",Um=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,x=n.target,M=n.zOrigin,S="",A=m==="auto"&&e&&e!==1||m===!0;if(M&&(h!==Nr||u!==Nr)){var E=parseFloat(u)*ks,y=Math.sin(E),C=Math.cos(E),L;E=parseFloat(h)*ks,L=Math.cos(E),o=Nc(x,o,y*L*-M),a=Nc(x,a,-Math.sin(E)*-M),l=Nc(x,l,C*L*-M+M)}p!==xo&&(S+="perspective("+p+Fr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(A||o!==xo||a!==xo||l!==xo)&&(S+=l!==xo||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Fr),c!==Nr&&(S+="rotate("+c+Fr),u!==Nr&&(S+="rotateY("+u+Fr),h!==Nr&&(S+="rotateX("+h+Fr),(f!==Nr||d!==Nr)&&(S+="skew("+f+", "+d+Fr),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Fr),x.style[Pt]=S||"translate(0, 0)"},Ww=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,x=n.forceCSS,M=parseFloat(o),S=parseFloat(a),A,E,y,C,L;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ks,c*=ks,A=Math.cos(l)*h,E=Math.sin(l)*h,y=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=ks,L=Math.tan(c-u),L=Math.sqrt(1+L*L),y*=L,C*=L,u&&(L=Math.tan(u),L=Math.sqrt(1+L*L),A*=L,E*=L)),A=kt(A),E=kt(E),y=kt(y),C=kt(C)):(A=h,C=f,E=y=0),(M&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(M=Tr(d,"x",o,"px"),S=Tr(d,"y",a,"px")),(g||_||p||m)&&(M=kt(M+g-(g*A+_*y)+p),S=kt(S+_-(g*E+_*C)+m)),(i||s)&&(L=d.getBBox(),M=kt(M+i/100*L.width),S=kt(S+s/100*L.height)),L="matrix("+A+","+E+","+y+","+C+","+M+","+S+")",d.setAttribute("transform",L),x&&(d.style[Pt]=L)},Xw=function(e,t,n,i,s){var o=360,a=en(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?kr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*vd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*vd)%o-~~(c/o)*o)),e._pt=f=new Un(e._pt,t,n,i,c,Aw),f.e=u,f.u="deg",e._props.push(n),f},Td=function(e,t){for(var n in t)e[n]=t[n];return e},Yw=function(e,t,n){var i=Td({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Pt]=t,a=aa(n,1),br(n,Pt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pt],o[Pt]=t,a=aa(n,1),o[Pt]=c);for(l in ji)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=hn(c),g=hn(u),h=d!==g?Tr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Un(e._pt,a,l,h,f-h,Bu),e._pt.u=g||0,e._props.push(l));Td(a,i)};In("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Al[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Gi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var Nm={name:"css",register:zu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,p,m,x,M,S,A,E,y,C,L;Ih||zu(),this.styles=this.styles||Cm(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Vn[_]&&_m(_,t,n,i,e,s)))){if(d=typeof u,g=Al[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ia(u)),g)g(this,e,_,u,n)&&(y=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",vr.lastIndex=0,vr.test(c)||(p=hn(c),m=hn(u),m?p!==m&&(c=Tr(e,_,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],en(c)&&~c.indexOf("random(")&&(c=ia(c)),hn(c+"")||c==="auto"||(c+=jn.units[_]||hn(Gi(e,_))||""),(c+"").charAt(1)==="="&&(c=Gi(e,_))):c=Gi(e,_),f=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in Ri&&(_==="autoAlpha"&&(f===1&&Gi(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),fr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ri[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in ji,M){if(this.styles.save(_),L=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Kn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=Kn(e,"perspective"),v?e.style.perspective=v:br(e,"perspective")}h=parseFloat(u)}if(S||(A=e._gsap,A.renderTransform&&!t.parseTransform||aa(e,t.parseTransform),E=t.smoothOrigin!==!1&&A.smooth,S=this._pt=new Un(this._pt,a,Pt,0,1,A.renderTransform,A,0,-1),S.dep=1),_==="scale")this._pt=new Un(this._pt,A,"scaleY",A.scaleY,(x?Os(A.scaleY,x+h):h)-A.scaleY||0,Bu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Nn,0,a[Nn]),u=Hw(u),A.svg?Hu(e,u,0,E,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&fr(this,A,"zOrigin",A.zOrigin,m),fr(this,a,_,Cl(c),Cl(u)));continue}else if(_==="svgOrigin"){Hu(e,u,1,E,0,this);continue}else if(_ in Lm){Xw(this,A,_,f,x?Os(f,x+u):u);continue}else if(_==="smoothOrigin"){fr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){Yw(this,u,e);continue}}else _ in a||(_=no(_)||_);if(M||(h||h===0)&&(f||f===0)&&!Ew.test(u)&&_ in a)p=(c+"").substr((f+"").length),h||(h=0),m=hn(u)||(_ in jn.units?jn.units[_]:p),p!==m&&(f=Tr(e,_,c,m)),this._pt=new Un(this._pt,M?A:a,_,f,(x?Os(f,x+h):h)-f,!M&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?Pw:Bu),this._pt.u=m||0,M&&L!==u?(this._pt.b=c,this._pt.e=L,this._pt.r=Rw):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Cw);else if(_ in a)zw.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){wh(_,u);continue}M||(_ in a?C.push(_,0,a[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),o.push(_)}}y&&wm(this)},render:function(e,t){if(t.tween._time||!Uh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gi,aliases:Ri,getSetter:function(e,t,n){var i=Ri[t];return i&&i.indexOf(",")<0&&(t=i),t in ji&&t!==Nn&&(e._gsap.x||Gi(e,"x"))?n&&_d===n?t==="scale"?Uw:Iw:(_d=n||{})&&(t==="scale"?Nw:Fw):e.style&&!Mh(e.style[t])?Dw:~t.indexOf("-")?Lw:Dh(e,t)},core:{_removeProperty:br,_getMatrix:Fh}};Fn.utils.checkPrefix=no;Fn.core.getStyleSaver=Cm;(function(r,e,t,n){var i=In(r+","+e+","+t,function(s){ji[s]=1});In(e,function(s){jn.units[s]="deg",Lm[s]=1}),Ri[i[13]]=r+","+e,In(n,function(s){var o=s.split(":");Ri[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");In("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){jn.units[r]="px"});Fn.registerPlugin(Nm);var dr=Fn.registerPlugin(Nm)||Fn;dr.core.Tween;function qw(){if(window.matchMedia("(hover: none), (pointer: coarse)").matches)return;const r=document.querySelector(".cursor-ring");if(!r)return;const e={x:innerWidth/2,y:innerHeight/2},t={...e};let n=!1;const i=a=>{e.x=a.clientX,e.y=a.clientY,n||(n=!0,t.x=e.x,t.y=e.y,document.body.classList.add("cursor-active"))};window.addEventListener("pointermove",i,{passive:!0}),window.addEventListener("pointerdown",()=>r.classList.add("is-down")),window.addEventListener("pointerup",()=>r.classList.remove("is-down")),document.addEventListener("mouseleave",()=>{document.body.classList.remove("cursor-active"),n=!1}),document.addEventListener("pointerover",a=>{const l=a.target instanceof Element?a.target.closest("[data-cursor]"):null;r.dataset.state=l?.getAttribute("data-cursor")??""});const s={"":1,draggable:2.18};let o=1;dr.ticker.add(()=>{t.x+=(e.x-t.x)*.16,t.y+=(e.y-t.y)*.16;const a=(s[r.dataset.state]??1)*(r.classList.contains("is-down")?.72:1);o+=(a-o)*.18,r.style.transform=`translate3d(${t.x}px, ${t.y}px, 0) translate(-50%, -50%) scale(${o.toFixed(3)})`})}function $w(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Kw(r,e,t){return e&&$w(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var rn,hl,Yn,pr,mr,zs,Fm,zr,Hs,Om,Yi,mi,Bm,km=function(){return rn||typeof window<"u"&&(rn=window.gsap)&&rn.registerPlugin&&rn},zm=1,Ls=[],it=[],Di=[],ko=Date.now,Gu=function(e,t){return t},Zw=function(){var e=Hs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,it),i.push.apply(i,Di),it=n,Di=i,Gu=function(o,a){return t[o](a)}},xr=function(e,t){return~Di.indexOf(e)&&Di[Di.indexOf(e)+1][t]},zo=function(e){return!!~Om.indexOf(e)},_n=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},mn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ha="scrollLeft",Ga="scrollTop",Vu=function(){return Yi&&Yi.isPressed||it.cache++},Rl=function(e,t){var n=function i(s){if(s||s===0){zm&&(Yn.history.scrollRestoration="manual");var o=Yi&&Yi.isPressed;s=i.v=Math.round(s)||(Yi&&Yi.iOS?1:0),e(s),i.cacheID=it.cache,o&&Gu("ss",s)}else(t||it.cache!==i.cacheID||Gu("ref"))&&(i.cacheID=it.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},bn={s:Ha,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Rl(function(r){return arguments.length?Yn.scrollTo(r,Yt.sc()):Yn.pageXOffset||pr[Ha]||mr[Ha]||zs[Ha]||0})},Yt={s:Ga,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:bn,sc:Rl(function(r){return arguments.length?Yn.scrollTo(bn.sc(),r):Yn.pageYOffset||pr[Ga]||mr[Ga]||zs[Ga]||0})},En=function(e,t){return(t&&t._ctx&&t._ctx.selector||rn.utils.toArray)(e)[0]||(typeof e=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},jw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Er=function(e,t){var n=t.s,i=t.sc;zo(e)&&(e=pr.scrollingElement||mr);var s=it.indexOf(e),o=i===Yt.sc?1:2;!~s&&(s=it.push(e)-1),it[s+o]||_n(e,"scroll",Vu);var a=it[s+o],l=a||(it[s+o]=Rl(xr(e,n),!0)||(zo(e)?i:Rl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=rn.getProperty(e,"scrollBehavior")==="smooth"),l},Wu=function(e,t,n){var i=e,s=e,o=ko(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=ko();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,p=s,m=ko();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Mo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Ed=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Hm=function(){Hs=rn.core.globals().ScrollTrigger,Hs&&Hs.core&&Zw()},Gm=function(e){return rn=e||km(),!hl&&rn&&typeof document<"u"&&document.body&&(Yn=window,pr=document,mr=pr.documentElement,zs=pr.body,Om=[Yn,pr,mr,zs],rn.utils.clamp,Bm=rn.core.context||function(){},zr="onpointerenter"in zs?"pointer":"mouse",Fm=Dt.isTouch=Yn.matchMedia&&Yn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,mi=Dt.eventTypes=("ontouchstart"in mr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in mr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return zm=0},500),hl=1),Hs||Hm(),hl};bn.op=Yt;it.cache=0;var Dt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){hl||Gm(rn)||console.warn("Please gsap.registerPlugin(Observer)"),Hs||Hm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,x=n.onDrag,M=n.onPress,S=n.onRelease,A=n.onRight,E=n.onLeft,y=n.onUp,C=n.onDown,L=n.onChangeX,v=n.onChangeY,b=n.onChange,U=n.onToggleX,I=n.onToggleY,N=n.onHover,X=n.onHoverEnd,O=n.onMove,q=n.ignoreCheck,G=n.isNormalizer,ne=n.onGestureStart,P=n.onGestureEnd,ie=n.onWheel,Ae=n.onEnable,Ue=n.onDisable,$=n.onClick,Q=n.scrollSpeed,ce=n.capture,ae=n.allowClicks,we=n.lockAxis,xe=n.onLockAxis;this.target=a=En(a)||mr,this.vars=n,d&&(d=rn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,Q=Q||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Yn.getComputedStyle(zs).lineHeight)||22);var ze,Ie,Ne,D,je,Ce,Ge,z=this,Je=0,Le=0,R=n.passive||!u&&n.passive!==!1,w=Er(a,bn),Y=Er(a,Yt),j=w(),te=Y(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&mi[0]==="pointerdown",Se=zo(a),se=a.ownerDocument||pr,de=[0,0,0],We=[0,0,0],re=0,ve=function(){return re=ko()},Me=function(be,ct){return(z.event=be)&&d&&jw(be.target,d)||ct&&Z&&be.pointerType!=="touch"||q&&q(be,ct)},Oe=function(){z._vx.reset(),z._vy.reset(),Ie.pause(),h&&h(z)},_e=function(){var be=z.deltaX=Ed(de),ct=z.deltaY=Ed(We),pe=Math.abs(be)>=i,Fe=Math.abs(ct)>=i;b&&(pe||Fe)&&b(z,be,ct,de,We),pe&&(A&&z.deltaX>0&&A(z),E&&z.deltaX<0&&E(z),L&&L(z),U&&z.deltaX<0!=Je<0&&U(z),Je=z.deltaX,de[0]=de[1]=de[2]=0),Fe&&(C&&z.deltaY>0&&C(z),y&&z.deltaY<0&&y(z),v&&v(z),I&&z.deltaY<0!=Le<0&&I(z),Le=z.deltaY,We[0]=We[1]=We[2]=0),(D||Ne)&&(O&&O(z),Ne&&(p&&Ne===1&&p(z),x&&x(z),Ne=0),D=!1),Ce&&!(Ce=!1)&&xe&&xe(z),je&&(ie(z),je=!1),ze=0},Ye=function(be,ct,pe){de[pe]+=be,We[pe]+=ct,z._vx.update(be),z._vy.update(ct),c?ze||(ze=requestAnimationFrame(_e)):_e()},ke=function(be,ct){we&&!Ge&&(z.axis=Ge=Math.abs(be)>Math.abs(ct)?"x":"y",Ce=!0),Ge!=="y"&&(de[2]+=be,z._vx.update(be,!0)),Ge!=="x"&&(We[2]+=ct,z._vy.update(ct,!0)),c?ze||(ze=requestAnimationFrame(_e)):_e()},ot=function(be){if(!Me(be,1)){be=Mo(be,u);var ct=be.clientX,pe=be.clientY,Fe=ct-z.x,Pe=pe-z.y,Ve=z.isDragging;z.x=ct,z.y=pe,(Ve||(Fe||Pe)&&(Math.abs(z.startX-ct)>=s||Math.abs(z.startY-pe)>=s))&&(Ne||(Ne=Ve?2:1),Ve||(z.isDragging=!0),ke(Fe,Pe))}},F=z.onPress=function(Re){Me(Re,1)||Re&&Re.button||(z.axis=Ge=null,Ie.pause(),z.isPressed=!0,Re=Mo(Re),Je=Le=0,z.startX=z.x=Re.clientX,z.startY=z.y=Re.clientY,z._vx.reset(),z._vy.reset(),_n(G?a:se,mi[1],ot,R,!0),z.deltaX=z.deltaY=0,M&&M(z))},ee=z.onRelease=function(Re){if(!Me(Re,1)){mn(G?a:se,mi[1],ot,!0);var be=!isNaN(z.y-z.startY),ct=z.isDragging,pe=ct&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Fe=Mo(Re);!pe&&be&&(z._vx.reset(),z._vy.reset(),u&&ae&&rn.delayedCall(.08,function(){if(ko()-re>300&&!Re.defaultPrevented){if(Re.target.click)Re.target.click();else if(se.createEvent){var Pe=se.createEvent("MouseEvents");Pe.initMouseEvent("click",!0,!0,Yn,1,Fe.screenX,Fe.screenY,Fe.clientX,Fe.clientY,!1,!1,!1,!1,0,null),Re.target.dispatchEvent(Pe)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,h&&ct&&!G&&Ie.restart(!0),Ne&&_e(),m&&ct&&m(z),S&&S(z,pe)}},K=function(be){return be.touches&&be.touches.length>1&&(z.isGesturing=!0)&&ne(be,z.isDragging)},J=function(){return(z.isGesturing=!1)||P(z)},le=function(be){if(!Me(be)){var ct=w(),pe=Y();Ye((ct-j)*Q,(pe-te)*Q,1),j=ct,te=pe,h&&Ie.restart(!0)}},ue=function(be){if(!Me(be)){be=Mo(be,u),ie&&(je=!0);var ct=(be.deltaMode===1?l:be.deltaMode===2?Yn.innerHeight:1)*g;Ye(be.deltaX*ct,be.deltaY*ct,0),h&&!G&&Ie.restart(!0)}},qe=function(be){if(!Me(be)){var ct=be.clientX,pe=be.clientY,Fe=ct-z.x,Pe=pe-z.y;z.x=ct,z.y=pe,D=!0,h&&Ie.restart(!0),(Fe||Pe)&&ke(Fe,Pe)}},_t=function(be){z.event=be,N(z)},Tt=function(be){z.event=be,X(z)},rt=function(be){return Me(be)||Mo(be,u)&&$(z)};Ie=z._dc=rn.delayedCall(f||.25,Oe).pause(),z.deltaX=z.deltaY=0,z._vx=Wu(0,50,!0),z._vy=Wu(0,50,!0),z.scrollX=w,z.scrollY=Y,z.isDragging=z.isGesturing=z.isPressed=!1,Bm(this),z.enable=function(Re){return z.isEnabled||(_n(Se?se:a,"scroll",Vu),o.indexOf("scroll")>=0&&_n(Se?se:a,"scroll",le,R,ce),o.indexOf("wheel")>=0&&_n(a,"wheel",ue,R,ce),(o.indexOf("touch")>=0&&Fm||o.indexOf("pointer")>=0)&&(_n(a,mi[0],F,R,ce),_n(se,mi[2],ee),_n(se,mi[3],ee),ae&&_n(a,"click",ve,!0,!0),$&&_n(a,"click",rt),ne&&_n(se,"gesturestart",K),P&&_n(se,"gestureend",J),N&&_n(a,zr+"enter",_t),X&&_n(a,zr+"leave",Tt),O&&_n(a,zr+"move",qe)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=D=Ne=!1,z._vx.reset(),z._vy.reset(),j=w(),te=Y(),Re&&Re.type&&F(Re),Ae&&Ae(z)),z},z.disable=function(){z.isEnabled&&(Ls.filter(function(Re){return Re!==z&&zo(Re.target)}).length||mn(Se?se:a,"scroll",Vu),z.isPressed&&(z._vx.reset(),z._vy.reset(),mn(G?a:se,mi[1],ot,!0)),mn(Se?se:a,"scroll",le,ce),mn(a,"wheel",ue,ce),mn(a,mi[0],F,ce),mn(se,mi[2],ee),mn(se,mi[3],ee),mn(a,"click",ve,!0),mn(a,"click",rt),mn(se,"gesturestart",K),mn(se,"gestureend",J),mn(a,zr+"enter",_t),mn(a,zr+"leave",Tt),mn(a,zr+"move",qe),z.isEnabled=z.isPressed=z.isDragging=!1,Ue&&Ue(z))},z.kill=z.revert=function(){z.disable();var Re=Ls.indexOf(z);Re>=0&&Ls.splice(Re,1),Yi===z&&(Yi=0)},Ls.push(z),G&&zo(a)&&(Yi=z),z.enable(_)},Kw(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Dt.version="3.15.0";Dt.create=function(r){return new Dt(r)};Dt.register=Gm;Dt.getAll=function(){return Ls.slice()};Dt.getById=function(r){return Ls.filter(function(e){return e.vars.id===r})[0]};km()&&rn.registerPlugin(Dt);dr.registerPlugin(Dt);const Jw=200,Ad=90,Qw=()=>window.matchMedia?.("(pointer: coarse)").matches?12:2,eb=nn.length-1,Gl=r=>Math.max(0,Math.min(eb,r));let Cd=null,Rd=null,Ai=0;function tb(){const r=document.querySelector('[data-cursor="draggable"]');r&&(Ai=hy(location.pathname),Xu(r,Ai),Cd?.kill(),Cd=Dt.create({target:r,type:"pointer,touch",dragMinimum:Qw(),lockAxis:!0,onPress:()=>r.setAttribute("data-cursor-state","dragging"),onRelease:()=>r.removeAttribute("data-cursor-state"),onDrag:e=>{if(e.lockedAxis==="y")return;const t=Math.max(-Ad,Math.min(Ad,e.deltaX));Ai=Gl(Ai-t/Jw),Xu(r,Ai)},onDragEnd:()=>Vm(r)}),Rd?.removeEventListener("keydown",Pd),r.addEventListener("keydown",Pd),Rd=r)}function Pd(r){const e=r.currentTarget;r.key==="ArrowRight"&&(r.preventDefault(),Dd(e,Math.round(Ai)+1)),r.key==="ArrowLeft"&&(r.preventDefault(),Dd(e,Math.round(Ai)-1))}function Dd(r,e){Ai=Gl(e),Vm(r)}function Vm(r){const e=Gl(Math.round(Ai));Ai=e,Xu(r,e);const t=uy(e);((i,s)=>i.replace(/\/+$/,"")===s.replace(/\/+$/,""))(t,location.pathname)||ug(t)}function Xu(r,e){r.style.setProperty("--slide-progress",String(Math.round(e))),Ti.emit(bi.SLIDE,e);const t=document.querySelector("[data-slide-readout]");t&&(t.textContent=nn[Gl(Math.round(e))].nav)}/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ye,As,nt,mt,Wn,ft,Oh,Pl,la,Ho,Ao,Va,cn,Vl,Yu,Sn,Ld,Id,Cs,Wm,Fc,Xm,Mn,qu,Ym,qm,ar,$u,Bh,Gs,kh,Go,Ku,Oc,Wa=1,un=Date.now,Bc=un(),ui=0,Co=0,Ud=function(e,t,n){var i=Gn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Nd=function(e,t){return t&&(!Gn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},nb=function r(){return Co&&requestAnimationFrame(r)},Fd=function(){return Vl=1},Od=function(){return Vl=0},yi=function(e){return e},Ro=function(e){return Math.round(e*1e5)/1e5||0},$m=function(){return typeof window<"u"},Km=function(){return ye||$m()&&(ye=window.gsap)&&ye.registerPlugin&&ye},es=function(e){return!!~Oh.indexOf(e)},Zm=function(e){return(e==="Height"?kh:nt["inner"+e])||Wn["client"+e]||ft["client"+e]},jm=function(e){return xr(e,"getBoundingClientRect")||(es(e)?function(){return gl.width=nt.innerWidth,gl.height=kh,gl}:function(){return Vi(e)})},ib=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=xr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Zm(s):e["client"+s])||0}},rb=function(e,t){return!t||~Di.indexOf(e)?jm(e):function(){return gl}},Pi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=xr(e,n))?o()-jm(e)()[s]:es(e)?(Wn[n]||ft[n])-Zm(i):e[n]-e["offset"+i])},Xa=function(e,t){for(var n=0;n<Cs.length;n+=3)(!t||~t.indexOf(Cs[n+1]))&&e(Cs[n],Cs[n+1],Cs[n+2])},Gn=function(e){return typeof e=="string"},fn=function(e){return typeof e=="function"},Po=function(e){return typeof e=="number"},Hr=function(e){return typeof e=="object"},So=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ws=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},bs=Math.abs,Jm="left",Qm="top",zh="right",Hh="bottom",jr="width",Jr="height",Vo="Right",Wo="Left",Xo="Top",Yo="Bottom",Vt="padding",oi="margin",io="Width",Gh="Height",Xt="px",ai=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},sb=function(e){var t=ai(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Bd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Vi=function(e,t){var n=t&&ai(e)[Yu]!=="matrix(1, 0, 0, 1, 0, 0)"&&ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Dl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},eg=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},ob=function(e){return function(t){return ye.utils.snap(eg(e),t)}},Vh=function(e){var t=ye.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},ab=function(e){return function(t,n){return Vh(eg(e))(t,n.direction)}},Ya=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Jt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},jt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},qa=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},kd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},$a={toggleActions:"play",anticipatePin:0},Ll={top:0,left:0,center:.5,bottom:1,right:1},fl=function(e,t){if(Gn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ll?Ll[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ka=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=mt.createElement("div"),_=es(n)||xr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?ft:n.tagName==="IFRAME"?n.contentDocument.body:n,x=e.indexOf("start")!==-1,M=x?c:u,S="border-color:"+M+";font-size:"+h+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(S+=(i===Yt?zh:Hh)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],dl(g,0,i,x),g},dl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+io]=1,s["border"+a+io]=0,s[n.p]=t+"px",ye.set(e,s)},et=[],Zu={},ca,zd=function(){return un()-ui>34&&(ca||(ca=requestAnimationFrame(Ki)))},Ts=function(){(!Mn||!Mn.isPressed||Mn.startX>ft.clientWidth)&&(it.cache++,Mn?ca||(ca=requestAnimationFrame(Ki)):Ki(),ui||ns("scrollStart"),ui=un())},kc=function(){qm=nt.innerWidth,Ym=nt.innerHeight},Do=function(e){it.cache++,(e===!0||!cn&&!Xm&&!mt.fullscreenElement&&!mt.webkitFullscreenElement&&(!qu||qm!==nt.innerWidth||Math.abs(nt.innerHeight-Ym)>nt.innerHeight*.25))&&Pl.restart(!0)},ts={},lb=[],tg=function r(){return jt(tt,"scrollEnd",r)||Yr(!0)},ns=function(e){return ts[e]&&ts[e].map(function(t){return t()})||lb},Hn=[],ng=function(e){for(var t=0;t<Hn.length;t+=5)(!e||Hn[t+4]&&Hn[t+4].query===e)&&(Hn[t].style.cssText=Hn[t+1],Hn[t].getBBox&&Hn[t].setAttribute("transform",Hn[t+2]||""),Hn[t+3].uncache=1)},ig=function(){return it.forEach(function(e){return fn(e)&&++e.cacheID&&(e.rec=e())})},Wh=function(e,t){var n;for(Sn=0;Sn<et.length;Sn++)n=et[Sn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Go=!0,t&&ng(t),t||ns("revert")},rg=function(e,t){it.cache++,(t||!yn)&&it.forEach(function(n){return fn(n)&&n.cacheID++&&(n.rec=0)}),Gn(e)&&(nt.history.scrollRestoration=Bh=e)},yn,Qr=0,Hd,cb=function(){if(Hd!==Qr){var e=Hd=Qr;requestAnimationFrame(function(){return e===Qr&&Yr(!0)})}},sg=function(){ft.appendChild(Gs),kh=!Mn&&Gs.offsetHeight||nt.innerHeight,ft.removeChild(Gs)},Gd=function(e){return la(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Yr=function(e,t){if(Wn=mt.documentElement,ft=mt.body,Oh=[nt,mt,Wn,ft],ui&&!e&&!Go){Jt(tt,"scrollEnd",tg);return}sg(),yn=tt.isRefreshing=!0,Go||ig();var n=ns("refreshInit");Wm&&tt.sort(),t||Wh(),it.forEach(function(i){fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),Go=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Ku=1,Gd(!0),et.forEach(function(i){var s=Pi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Gd(!1),Ku=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),it.forEach(function(i){fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),rg(Bh,1),Pl.pause(),Qr++,yn=2,Ki(2),et.forEach(function(i){return fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),yn=tt.isRefreshing=!1,ns("refresh")},ju=0,pl=1,qo,Ki=function(e){if(e===2||!yn&&!Go){tt.isUpdating=!0,qo&&qo.update(0);var t=et.length,n=un(),i=n-Bc>=50,s=t&&et[0].scroll();if(pl=ju>s?-1:1,yn||(ju=s),i&&(ui&&!Vl&&n-ui>200&&(ui=0,ns("scrollEnd")),Ao=Bc,Bc=n),pl<0){for(Sn=t;Sn-- >0;)et[Sn]&&et[Sn].update(0,i);pl=1}else for(Sn=0;Sn<t;Sn++)et[Sn]&&et[Sn].update(0,i);tt.isUpdating=!1}ca=0},Ju=[Jm,Qm,Hh,zh,oi+Yo,oi+Vo,oi+Xo,oi+Wo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ml=Ju.concat([jr,Jr,"boxSizing","max"+io,"max"+Gh,"position",oi,Vt,Vt+Xo,Vt+Vo,Vt+Yo,Vt+Wo]),ub=function(e,t,n){Vs(n);var i=e._gsap;if(i.spacerIsNative)Vs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},zc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Ju.length,o=t.style,a=e.style,l;s--;)l=Ju[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Hh]=a[zh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[jr]=Dl(e,bn)+Xt,o[Jr]=Dl(e,Yt)+Xt,o[Vt]=a[oi]=a[Qm]=a[Jm]="0",Vs(i),a[jr]=a["max"+io]=n[jr],a[Jr]=a["max"+Gh]=n[Jr],a[Vt]=n[Vt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},hb=/([A-Z])/g,Vs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||ye.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(hb,"-$1").toLowerCase())}},Za=function(e){for(var t=ml.length,n=e.style,i=[],s=0;s<t;s++)i.push(ml[s],n[ml[s]]);return i.t=e,i},fb=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},gl={left:0,top:0},Vd=function(e,t,n,i,s,o,a,l,c,u,h,f,d,g){fn(e)&&(e=e(l)),Gn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?fl("0"+e.substr(3),n):0));var _=d?d.time():0,p,m,x;if(d&&d.seek(0),isNaN(e)||(e=+e),Po(e))d&&(e=ye.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&dl(a,n,i,!0);else{fn(t)&&(t=t(l));var M=(e||"0").split(" "),S,A,E,y;x=En(t,l)||ft,S=Vi(x)||{},(!S||!S.left&&!S.top)&&ai(x).display==="none"&&(y=x.style.display,x.style.display="block",S=Vi(x),y?x.style.display=y:x.style.removeProperty("display")),A=fl(M[0],S[i.d]),E=fl(M[1]||"0",n),e=S[i.p]-c[i.p]-u+A+s-E,a&&dl(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var C=e+n,L=o._isStart;p="scroll"+i.d2,dl(o,C,i,L&&C>20||!L&&(h?Math.max(ft[p],Wn[p]):o.parentNode[p])<=C+1),h&&(c=Vi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Xt))}return d&&x&&(p=Vi(x),d.seek(f),m=Vi(x),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},db=/(webkit|moz|length|cssText|inset)/i,Wd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===ft){e._stOrig=s.cssText,a=ai(e);for(o in a)!+o&&!db.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;ye.core.getCache(e).uncache=1,t.appendChild(e)}},og=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ja=function(e,t,n){var i={};i[t.p]="+="+n,ye.set(e,i)},Xd=function(e,t){var n=Er(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=og(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){it.cache++,o.tween&&Ki()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=ye.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Jt(e,"wheel",n.wheelHandler),tt.isTouch&&Jt(e,"touchmove",n.wheelHandler),s},tt=(function(){function r(t,n){As||r.register(ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),$u(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Co){this.update=this.refresh=this.kill=yi;return}n=Bd(Gn(n)||Po(n)||n.nodeType?{trigger:n}:n,$a);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,x=s.onSnapComplete,M=s.once,S=s.snap,A=s.pinReparent,E=s.pinSpacer,y=s.containerAnimation,C=s.fastScrollEnd,L=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?bn:Yt,b=!h&&h!==0,U=En(n.scroller||nt),I=ye.core.getCache(U),N=es(U),X=("pinType"in n?n.pinType:xr(U,"pinType")||N&&"fixed")==="fixed",O=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],q=b&&n.toggleActions.split(" "),G="markers"in n?n.markers:$a.markers,ne=N?0:parseFloat(ai(U)["border"+v.p2+io])||0,P=this,ie=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Ae=ib(U,N,v),Ue=rb(U,N),$=0,Q=0,ce=0,ae=Er(U,v),we,xe,ze,Ie,Ne,D,je,Ce,Ge,z,Je,Le,R,w,Y,j,te,Z,Se,se,de,We,re,ve,Me,Oe,_e,Ye,ke,ot,F,ee,K,J,le,ue,qe,_t,Tt;if(P._startClamp=P._endClamp=!1,P._dir=v,p*=45,P.scroller=U,P.scroll=y?y.time.bind(y):ae,Ie=ae(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Wm=1,n.refreshPriority===-9999&&(qo=P)),I.tweenScroll=I.tweenScroll||{top:Xd(U,Yt),left:Xd(U,bn)},P.tweenTo=we=I.tweenScroll[v.p],P.scrubDuration=function(pe){K=Po(pe)&&pe,K?ee?ee.duration(pe):ee=ye.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return m&&m(P)}}):(ee&&ee.progress(1).kill(),ee=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),ot=0,l||(l=i.vars.id)),S&&((!Hr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in ft.style&&ye.set(N?[ft,Wn]:U,{scrollBehavior:"auto"}),it.forEach(function(pe){return fn(pe)&&pe.target===(N?mt.scrollingElement||Wn:U)&&(pe.smooth=!1)}),ze=fn(S.snapTo)?S.snapTo:S.snapTo==="labels"?ob(i):S.snapTo==="labelsDirectional"?ab(i):S.directional!==!1?function(pe,Fe){return Vh(S.snapTo)(pe,un()-Q<500?0:Fe.direction)}:ye.utils.snap(S.snapTo),J=S.duration||{min:.1,max:2},J=Hr(J)?Ho(J.min,J.max):Ho(J,J),le=ye.delayedCall(S.delay||K/2||.1,function(){var pe=ae(),Fe=un()-Q<500,Pe=we.tween;if((Fe||Math.abs(P.getVelocity())<10)&&!Pe&&!Vl&&$!==pe){var Ve=(pe-D)/w,Ft=i&&!b?i.totalProgress():Ve,$e=Fe?0:(Ft-F)/(un()-Ao)*1e3||0,Et=ye.utils.clamp(-Ve,1-Ve,bs($e/2)*$e/.185),Ot=Ve+(S.inertia===!1?0:Et),wt,vt,pt=S,On=pt.onStart,bt=pt.onInterrupt,T=pt.onComplete;if(wt=ze(Ot,P),Po(wt)||(wt=Ot),vt=Math.max(0,Math.round(D+wt*w)),pe<=je&&pe>=D&&vt!==pe){if(Pe&&!Pe._initted&&Pe.data<=bs(vt-pe))return;S.inertia===!1&&(Et=wt-Ve),we(vt,{duration:J(bs(Math.max(bs(Ot-Ft),bs(wt-Ft))*.185/$e/.05||0)),ease:S.ease||"power3",data:bs(vt-pe),onInterrupt:function(){return le.restart(!0)&&bt&&ws(P,bt)},onComplete:function(){P.update(),$=ae(),i&&!b&&(ee?ee.resetTo("totalProgress",wt,i._tTime/i._tDur):i.progress(wt)),ot=F=i&&!b?i.totalProgress():P.progress,x&&x(P),T&&ws(P,T)}},pe,Et*w,vt-pe-Et*w),On&&ws(P,On,we.tween)}}else P.isActive&&$!==pe&&le.restart(!0)}).pause()),l&&(Zu[l]=P),f=P.trigger=En(f||d!==!0&&d),Tt=f&&f._gsap&&f._gsap.stRevert,Tt&&(Tt=Tt(P)),d=d===!0?f:En(d),Gn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===oi||(g=!g&&d.parentNode&&d.parentNode.style&&ai(d.parentNode).display==="flex"?!1:Vt),P.pin=d,xe=ye.core.getCache(d),xe.spacer?Y=xe.pinState:(E&&(E=En(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),xe.spacerIsNative=!!E,E&&(xe.spacerState=Za(E))),xe.spacer=Z=E||mt.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),xe.pinState=Y=Za(d)),n.force3D!==!1&&ye.set(d,{force3D:!0}),P.spacer=Z=xe.spacer,ke=ai(d),ve=ke[g+v.os2],se=ye.getProperty(d),de=ye.quickSetter(d,v.a,Xt),zc(d,Z,ke),te=Za(d)),G){Le=Hr(G)?Bd(G,kd):kd,z=Ka("scroller-start",l,U,v,Le,0),Je=Ka("scroller-end",l,U,v,Le,0,z),Se=z["offset"+v.op.d2];var rt=En(xr(U,"content")||U);Ce=this.markerStart=Ka("start",l,rt,v,Le,Se,0,y),Ge=this.markerEnd=Ka("end",l,rt,v,Le,Se,0,y),y&&(_t=ye.quickSetter([Ce,Ge],v.a,Xt)),!X&&!(Di.length&&xr(U,"fixedMarkers")===!0)&&(sb(N?ft:U),ye.set([z,Je],{force3D:!0}),Oe=ye.quickSetter(z,v.a,Xt),Ye=ye.quickSetter(Je,v.a,Xt))}if(y){var Re=y.vars.onUpdate,be=y.vars.onUpdateParams;y.eventCallback("onUpdate",function(){P.update(0,0,1),Re&&Re.apply(y,be||[])})}if(P.previous=function(){return et[et.indexOf(P)-1]},P.next=function(){return et[et.indexOf(P)+1]},P.revert=function(pe,Fe){if(!Fe)return P.kill(!0);var Pe=pe!==!1||!P.enabled,Ve=cn;Pe!==P.isReverted&&(Pe&&(ue=Math.max(ae(),P.scroll.rec||0),ce=P.progress,qe=i&&i.progress()),Ce&&[Ce,Ge,z,Je].forEach(function(Ft){return Ft.style.display=Pe?"none":"block"}),Pe&&(cn=P,P.update(Pe)),d&&(!A||!P.isActive)&&(Pe?ub(d,Z,Y):zc(d,Z,ai(d),Me)),Pe||P.update(Pe),cn=Ve,P.isReverted=Pe)},P.refresh=function(pe,Fe,Pe,Ve){if(!((cn||!P.enabled)&&!Fe)){if(d&&pe&&ui){Jt(r,"scrollEnd",tg);return}!yn&&ie&&ie(P),cn=P,we.tween&&!Pe&&(we.tween.kill(),we.tween=0),ee&&ee.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Qe){return Qe.vars.immediateRender&&Qe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ft=Ae(),$e=Ue(),Et=y?y.duration():Pi(U,v),Ot=w<=.01||!w,wt=0,vt=Ve||0,pt=Hr(Pe)?Pe.end:n.end,On=n.endTrigger||f,bt=Hr(Pe)?Pe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),T=P.pinnedContainer=n.pinnedContainer&&En(n.pinnedContainer,P),k=f&&Math.max(0,et.indexOf(P))||0,V=k,W,B,oe,ge,fe,he,Ee,Be,Te,at,st,gt,Kt;for(G&&Hr(Pe)&&(gt=ye.getProperty(z,v.p),Kt=ye.getProperty(Je,v.p));V-- >0;)he=et[V],he.end||he.refresh(0,1)||(cn=P),Ee=he.pin,Ee&&(Ee===f||Ee===d||Ee===T)&&!he.isReverted&&(at||(at=[]),at.unshift(he),he.revert(!0,!0)),he!==et[V]&&(k--,V--);for(fn(bt)&&(bt=bt(P)),bt=Ud(bt,"start",P),D=Vd(bt,f,Ft,v,ae(),Ce,z,P,$e,ne,X,Et,y,P._startClamp&&"_startClamp")||(d?-.001:0),fn(pt)&&(pt=pt(P)),Gn(pt)&&!pt.indexOf("+=")&&(~pt.indexOf(" ")?pt=(Gn(bt)?bt.split(" ")[0]:"")+pt:(wt=fl(pt.substr(2),Ft),pt=Gn(bt)?bt:(y?ye.utils.mapRange(0,y.duration(),y.scrollTrigger.start,y.scrollTrigger.end,D):D)+wt,On=f)),pt=Ud(pt,"end",P),je=Math.max(D,Vd(pt||(On?"100% 0":Et),On,Ft,v,ae()+wt,Ge,Je,P,$e,ne,X,Et,y,P._endClamp&&"_endClamp"))||-.001,wt=0,V=k;V--;)he=et[V]||{},Ee=he.pin,Ee&&he.start-he._pinPush<=D&&!y&&he.end>0&&(W=he.end-(P._startClamp?Math.max(0,he.start):he.start),(Ee===f&&he.start-he._pinPush<D||Ee===T)&&isNaN(bt)&&(wt+=W*(1-he.progress)),Ee===d&&(vt+=W));if(D+=wt,je+=wt,P._startClamp&&(P._startClamp+=wt),P._endClamp&&!yn&&(P._endClamp=je||-.001,je=Math.min(je,Pi(U,v))),w=je-D||(D-=.01)&&.001,Ot&&(ce=ye.utils.clamp(0,1,ye.utils.normalize(D,je,ue))),P._pinPush=vt,Ce&&wt&&(W={},W[v.a]="+="+wt,T&&(W[v.p]="-="+ae()),ye.set([Ce,Ge],W)),d&&!(Ku&&P.end>=Pi(U,v)))W=ai(d),ge=v===Yt,oe=ae(),We=parseFloat(se(v.a))+vt,!Et&&je>1&&(st=(N?mt.scrollingElement||Wn:U).style,st={style:st,value:st["overflow"+v.a.toUpperCase()]},N&&ai(ft)["overflow"+v.a.toUpperCase()]!=="scroll"&&(st.style["overflow"+v.a.toUpperCase()]="scroll")),zc(d,Z,W),te=Za(d),B=Vi(d,!0),Be=X&&Er(U,ge?bn:Yt)(),g?(Me=[g+v.os2,w+vt+Xt],Me.t=Z,V=g===Vt?Dl(d,v)+w+vt:0,V&&(Me.push(v.d,V+Xt),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=V+Xt)),Vs(Me),T&&et.forEach(function(Qe){Qe.pin===T&&Qe.vars.pinSpacing!==!1&&(Qe._subPinOffset=!0)}),X&&ae(ue)):(V=Dl(d,v),V&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=V+Xt)),X&&(fe={top:B.top+(ge?oe-D:Be)+Xt,left:B.left+(ge?Be:oe-D)+Xt,boxSizing:"border-box",position:"fixed"},fe[jr]=fe["max"+io]=Math.ceil(B.width)+Xt,fe[Jr]=fe["max"+Gh]=Math.ceil(B.height)+Xt,fe[oi]=fe[oi+Xo]=fe[oi+Vo]=fe[oi+Yo]=fe[oi+Wo]="0",fe[Vt]=W[Vt],fe[Vt+Xo]=W[Vt+Xo],fe[Vt+Vo]=W[Vt+Vo],fe[Vt+Yo]=W[Vt+Yo],fe[Vt+Wo]=W[Vt+Wo],j=fb(Y,fe,A),yn&&ae(0)),i?(Te=i._initted,Fc(1),i.render(i.duration(),!0,!0),re=se(v.a)-We+w+vt,_e=Math.abs(w-re)>1,X&&_e&&j.splice(j.length-2,2),i.render(0,!0,!0),Te||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Fc(0)):re=w,st&&(st.value?st.style["overflow"+v.a.toUpperCase()]=st.value:st.style.removeProperty("overflow-"+v.a));else if(f&&ae()&&!y)for(B=f.parentNode;B&&B!==ft;)B._pinOffset&&(D-=B._pinOffset,je-=B._pinOffset),B=B.parentNode;at&&at.forEach(function(Qe){return Qe.revert(!1,!0)}),P.start=D,P.end=je,Ie=Ne=yn?ue:ae(),!y&&!yn&&(Ie<ue&&ae(ue),P.scroll.rec=0),P.revert(!1,!0),Q=un(),le&&($=-1,le.restart(!0)),cn=0,i&&b&&(i._initted||qe)&&i.progress()!==qe&&i.progress(qe||0,!0).render(i.time(),!0,!0),(Ot||ce!==P.progress||y||_||i&&!i._initted)&&(i&&!b&&(i._initted||ce||i.vars.immediateRender!==!1)&&i.totalProgress(y&&D<-.001&&!ce?ye.utils.normalize(D,je,0):ce,!0),P.progress=Ot||(Ie-D)/w===ce?0:ce),d&&g&&(Z._pinOffset=Math.round(P.progress*re)),ee&&ee.invalidate(),isNaN(gt)||(gt-=ye.getProperty(z,v.p),Kt-=ye.getProperty(Je,v.p),ja(z,v,gt),ja(Ce,v,gt-(Ve||0)),ja(Je,v,Kt),ja(Ge,v,Kt-(Ve||0))),Ot&&!yn&&P.update(),u&&!yn&&!R&&(R=!0,u(P),R=!1)}},P.getVelocity=function(){return(ae()-Ne)/(un()-Ao)*1e3||0},P.endAnimation=function(){So(P.callbackAnimation),i&&(ee?ee.progress(1):i.paused()?b||So(i,P.direction<0,1):So(i,i.reversed()))},P.labelToScroll=function(pe){return i&&i.labels&&(D||P.refresh()||D)+i.labels[pe]/i.duration()*w||0},P.getTrailing=function(pe){var Fe=et.indexOf(P),Pe=P.direction>0?et.slice(0,Fe).reverse():et.slice(Fe+1);return(Gn(pe)?Pe.filter(function(Ve){return Ve.vars.preventOverlaps===pe}):Pe).filter(function(Ve){return P.direction>0?Ve.end<=D:Ve.start>=je})},P.update=function(pe,Fe,Pe){if(!(y&&!Pe&&!pe)){var Ve=yn===!0?ue:P.scroll(),Ft=pe?0:(Ve-D)/w,$e=Ft<0?0:Ft>1?1:Ft||0,Et=P.progress,Ot,wt,vt,pt,On,bt,T,k;if(Fe&&(Ne=Ie,Ie=y?ae():Ve,S&&(F=ot,ot=i&&!b?i.totalProgress():$e)),p&&d&&!cn&&!Wa&&ui&&(!$e&&D<Ve+(Ve-Ne)/(un()-Ao)*p?$e=1e-4:$e===1&&je>Ve+(Ve-Ne)/(un()-Ao)*p&&($e=.9999)),$e!==Et&&P.enabled){if(Ot=P.isActive=!!$e&&$e<1,wt=!!Et&&Et<1,bt=Ot!==wt,On=bt||!!$e!=!!Et,P.direction=$e>Et?1:-1,P.progress=$e,On&&!cn&&(vt=$e&&!Et?0:$e===1?1:Et===1?2:3,b&&(pt=!bt&&q[vt+1]!=="none"&&q[vt+1]||q[vt],k=i&&(pt==="complete"||pt==="reset"||pt in i))),L&&(bt||k)&&(k||h||!i)&&(fn(L)?L(P):P.getTrailing(L).forEach(function(oe){return oe.endAnimation()})),b||(ee&&!cn&&!Wa?(ee._dp._time-ee._start!==ee._time&&ee.render(ee._dp._time-ee._start),ee.resetTo?ee.resetTo("totalProgress",$e,i._tTime/i._tDur):(ee.vars.totalProgress=$e,ee.invalidate().restart())):i&&i.totalProgress($e,!!(cn&&(Q||pe)))),d){if(pe&&g&&(Z.style[g+v.os2]=ve),!X)de(Ro(We+re*$e));else if(On){if(T=!pe&&$e>Et&&je+1>Ve&&Ve+1>=Pi(U,v),A)if(!pe&&(Ot||T)){var V=Vi(d,!0),W=Ve-D;Wd(d,ft,V.top+(v===Yt?W:0)+Xt,V.left+(v===Yt?0:W)+Xt)}else Wd(d,Z);Vs(Ot||T?j:te),_e&&$e<1&&Ot||de(We+($e===1&&!T?re:0))}}S&&!we.tween&&!cn&&!Wa&&le.restart(!0),a&&(bt||M&&$e&&($e<1||!Oc))&&la(a.targets).forEach(function(oe){return oe.classList[Ot||M?"add":"remove"](a.className)}),o&&!b&&!pe&&o(P),On&&!cn?(b&&(k&&(pt==="complete"?i.pause().totalProgress(1):pt==="reset"?i.restart(!0).pause():pt==="restart"?i.restart(!0):i[pt]()),o&&o(P)),(bt||!Oc)&&(c&&bt&&ws(P,c),O[vt]&&ws(P,O[vt]),M&&($e===1?P.kill(!1,1):O[vt]=0),bt||(vt=$e===1?1:3,O[vt]&&ws(P,O[vt]))),C&&!Ot&&Math.abs(P.getVelocity())>(Po(C)?C:2500)&&(So(P.callbackAnimation),ee?ee.progress(1):So(i,pt==="reverse"?1:!$e,1))):b&&o&&!cn&&o(P)}if(Ye){var B=y?Ve/y.duration()*(y._caScrollDist||0):Ve;Oe(B+(z._isFlipped?1:0)),Ye(B)}_t&&_t(-Ve/y.duration()*(y._caScrollDist||0))}},P.enable=function(pe,Fe){P.enabled||(P.enabled=!0,Jt(U,"resize",Do),N||Jt(U,"scroll",Ts),ie&&Jt(r,"refreshInit",ie),pe!==!1&&(P.progress=ce=0,Ie=Ne=$=ae()),Fe!==!1&&P.refresh())},P.getTween=function(pe){return pe&&we?we.tween:ee},P.setPositions=function(pe,Fe,Pe,Ve){if(y){var Ft=y.scrollTrigger,$e=y.duration(),Et=Ft.end-Ft.start;pe=Ft.start+Et*pe/$e,Fe=Ft.start+Et*Fe/$e}P.refresh(!1,!1,{start:Nd(pe,Pe&&!!P._startClamp),end:Nd(Fe,Pe&&!!P._endClamp)},Ve),P.update()},P.adjustPinSpacing=function(pe){if(Me&&pe){var Fe=Me.indexOf(v.d)+1;Me[Fe]=parseFloat(Me[Fe])+pe+Xt,Me[1]=parseFloat(Me[1])+pe+Xt,Vs(Me)}},P.disable=function(pe,Fe){if(pe!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Fe||ee&&ee.pause(),ue=0,xe&&(xe.uncache=1),ie&&jt(r,"refreshInit",ie),le&&(le.pause(),we.tween&&we.tween.kill()&&(we.tween=0)),!N)){for(var Pe=et.length;Pe--;)if(et[Pe].scroller===U&&et[Pe]!==P)return;jt(U,"resize",Do),N||jt(U,"scroll",Ts)}},P.kill=function(pe,Fe){P.disable(pe,Fe),ee&&!Fe&&ee.kill(),l&&delete Zu[l];var Pe=et.indexOf(P);Pe>=0&&et.splice(Pe,1),Pe===Sn&&pl>0&&Sn--,Pe=0,et.forEach(function(Ve){return Ve.scroller===P.scroller&&(Pe=1)}),Pe||yn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Fe||i.kill()),Ce&&[Ce,Ge,z,Je].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),qo===P&&(qo=0),d&&(xe&&(xe.uncache=1),Pe=0,et.forEach(function(Ve){return Ve.pin===d&&Pe++}),Pe||(xe.spacer=0)),n.onKill&&n.onKill(P)},et.push(P),P.enable(!1,!1),Tt&&Tt(P),i&&i.add&&!w){var ct=P.update;P.update=function(){P.update=ct,it.cache++,D||je||P.refresh()},ye.delayedCall(.01,P.update),w=.01,D=je=0}else P.refresh();d&&cb()},r.register=function(n){return As||(ye=n||Km(),$m()&&window.document&&r.enable(),As=Co),As},r.defaults=function(n){if(n)for(var i in n)$a[i]=n[i];return $a},r.disable=function(n,i){Co=0,et.forEach(function(o){return o[i?"kill":"disable"](n)}),jt(nt,"wheel",Ts),jt(mt,"scroll",Ts),clearInterval(Va),jt(mt,"touchcancel",yi),jt(ft,"touchstart",yi),Ya(jt,mt,"pointerdown,touchstart,mousedown",Fd),Ya(jt,mt,"pointerup,touchend,mouseup",Od),Pl.kill(),Xa(jt);for(var s=0;s<it.length;s+=3)qa(jt,it[s],it[s+1]),qa(jt,it[s],it[s+2])},r.enable=function(){if(nt=window,mt=document,Wn=mt.documentElement,ft=mt.body,ye){if(la=ye.utils.toArray,Ho=ye.utils.clamp,$u=ye.core.context||yi,Fc=ye.core.suppressOverwrites||yi,Bh=nt.history.scrollRestoration||"auto",ju=nt.pageYOffset||0,ye.core.globals("ScrollTrigger",r),ft){Co=1,Gs=document.createElement("div"),Gs.style.height="100vh",Gs.style.position="absolute",sg(),nb(),Dt.register(ye),r.isTouch=Dt.isTouch,ar=Dt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),qu=Dt.isTouch===1,Jt(nt,"wheel",Ts),Oh=[nt,mt,Wn,ft],ye.matchMedia?(r.matchMedia=function(u){var h=ye.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},ye.addEventListener("matchMediaInit",function(){ig(),Wh()}),ye.addEventListener("matchMediaRevert",function(){return ng()}),ye.addEventListener("matchMedia",function(){Yr(0,1),ns("matchMedia")}),ye.matchMedia().add("(orientation: portrait)",function(){return kc(),kc})):console.warn("Requires GSAP 3.11.0 or later"),kc(),Jt(mt,"scroll",Ts);var n=ft.hasAttribute("style"),i=ft.style,s=i.borderTopStyle,o=ye.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Vi(ft),Yt.m=Math.round(a.top+Yt.sc())||0,bn.m=Math.round(a.left+bn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ft.setAttribute("style",""),ft.removeAttribute("style")),Va=setInterval(zd,250),ye.delayedCall(.5,function(){return Wa=0}),Jt(mt,"touchcancel",yi),Jt(ft,"touchstart",yi),Ya(Jt,mt,"pointerdown,touchstart,mousedown",Fd),Ya(Jt,mt,"pointerup,touchend,mouseup",Od),Yu=ye.utils.checkPrefix("transform"),ml.push(Yu),As=un(),Pl=ye.delayedCall(.2,Yr).pause(),Cs=[mt,"visibilitychange",function(){var u=nt.innerWidth,h=nt.innerHeight;mt.hidden?(Ld=u,Id=h):(Ld!==u||Id!==h)&&Do()},mt,"DOMContentLoaded",Yr,nt,"load",Yr,nt,"resize",Do],Xa(Jt),et.forEach(function(u){return u.enable(0,1)}),l=0;l<it.length;l+=3)qa(jt,it[l],it[l+1]),qa(jt,it[l],it[l+2])}else if(mt){var c=function u(){r.enable(),mt.removeEventListener("DOMContentLoaded",u)};mt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Oc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Va)||(Va=i)&&setInterval(zd,i),"ignoreMobileResize"in n&&(qu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Xa(jt)||Xa(Jt,n.autoRefreshEvents||"none"),Xm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=En(n),o=it.indexOf(s),a=es(s);~o&&it.splice(o,a?6:2),i&&(a?Di.unshift(nt,i,ft,i,Wn,i):Di.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Gn(n)?En(n):n).getBoundingClientRect(),a=o[s?jr:Jr]*i||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},r.positionInViewport=function(n,i,s){Gn(n)&&(n=En(n));var o=n.getBoundingClientRect(),a=o[s?jr:Jr],l=i==null?a/2:i in Ll?Ll[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ts.killAll||[];ts={},i.forEach(function(s){return s()})}},r})();tt.version="3.15.0";tt.saveStyles=function(r){return r?la(r).forEach(function(e){if(e&&e.style){var t=Hn.indexOf(e);t>=0&&Hn.splice(t,5),Hn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ye.core.getCache(e),$u())}}):Hn};tt.revert=function(r,e){return Wh(!r,e)};tt.create=function(r,e){return new tt(r,e)};tt.refresh=function(r){return r?Do(!0):(As||tt.register())&&Yr(!0)};tt.update=function(r){return++it.cache&&Ki(r===!0?2:0)};tt.clearScrollMemory=rg;tt.maxScroll=function(r,e){return Pi(r,e?bn:Yt)};tt.getScrollFunc=function(r,e){return Er(En(r),e?bn:Yt)};tt.getById=function(r){return Zu[r]};tt.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!ui};tt.snapDirectional=Vh;tt.addEventListener=function(r,e){var t=ts[r]||(ts[r]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(r,e){var t=ts[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=ye.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&fn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return fn(s)&&(s=s(),Jt(tt,"refresh",function(){return s=e.batchMax()})),la(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(tt.create(c))}),t};var Yd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Hc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Dt.isTouch?" pinch-zoom":""):"none",e===Wn&&r(ft,t)},Ja={auto:1,scroll:1},pb=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ye.core.getCache(s),a=un(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ft&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ja[(l=ai(s)).overflowY]||Ja[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!es(s)&&(Ja[(l=ai(s)).overflowY]||Ja[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ag=function(e,t,n,i){return Dt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&pb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Jt(mt,Dt.eventTypes[0],$d,!1,!0)},onDisable:function(){return jt(mt,Dt.eventTypes[0],$d,!0)}})},mb=/(input|label|select|textarea)/i,qd,$d=function(e){var t=mb.test(e.target.tagName);(t||qd)&&(e._gsapAllow=!0,qd=t)},gb=function(e){Hr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=En(e.target)||Wn,u=ye.core.globals().ScrollSmoother,h=u&&u.get(),f=ar&&(e.content&&En(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Er(c,Yt),g=Er(c,bn),_=1,p=(Dt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,m=0,x=fn(i)?function(){return i(a)}:function(){return i||2.8},M,S,A=ag(c,e.type,!0,s),E=function(){return S=!1},y=yi,C=yi,L=function(){l=Pi(c,Yt),C=Ho(ar?1:0,l),n&&(y=Ho(0,Pi(c,bn))),M=Qr},v=function(){f._gsap.y=Ro(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},b=function(){if(S){requestAnimationFrame(E);var G=Ro(a.deltaY/2),ne=C(d.v-G);if(f&&ne!==d.v+d.offset){d.offset=ne-d.v;var P=Ro((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=it.cache,Ki()}return!0}d.offset&&v(),S=!0},U,I,N,X,O=function(){L(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return f&&ye.set(f,{y:"+=0"}),e.ignoreCheck=function(q){return ar&&q.type==="touchmove"&&b()||_>1.05&&q.type!=="touchstart"||a.isGesturing||q.touches&&q.touches.length>1},e.onPress=function(){S=!1;var q=_;_=Ro((nt.visualViewport&&nt.visualViewport.scale||1)/p),U.pause(),q!==_&&Hc(c,_>1.01?!0:n?!1:"x"),I=g(),N=d(),L(),M=Qr},e.onRelease=e.onGestureStart=function(q,G){if(d.offset&&v(),!G)X.restart(!0);else{it.cache++;var ne=x(),P,ie;n&&(P=g(),ie=P+ne*.05*-q.velocityX/.227,ne*=Yd(g,P,ie,Pi(c,bn)),U.vars.scrollX=y(ie)),P=d(),ie=P+ne*.05*-q.velocityY/.227,ne*=Yd(d,P,ie,Pi(c,Yt)),U.vars.scrollY=C(ie),U.invalidate().duration(ne).play(.01),(ar&&U.vars.scrollY>=l||P>=l-1)&&ye.to({},{onUpdate:O,duration:ne})}o&&o(q)},e.onWheel=function(){U._ts&&U.pause(),un()-m>1e3&&(M=0,m=un())},e.onChange=function(q,G,ne,P,ie){if(Qr!==M&&L(),G&&n&&g(y(P[2]===G?I+(q.startX-q.x):g()+G-P[1])),ne){d.offset&&v();var Ae=ie[2]===ne,Ue=Ae?N+q.startY-q.y:d()+ne-ie[1],$=C(Ue);Ae&&Ue!==$&&(N+=$-Ue),d($)}(ne||G)&&Ki()},e.onEnable=function(){Hc(c,n?!1:"x"),tt.addEventListener("refresh",O),Jt(nt,"resize",O),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){Hc(c,!0),jt(nt,"resize",O),tt.removeEventListener("refresh",O),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new Dt(e),a.iOS=ar,ar&&!d()&&d(1),ar&&ye.ticker.add(yi),X=a._dc,U=ye.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:og(d,d(),function(){return U.pause()})},onUpdate:Ki,onComplete:X.vars.onComplete}),a};tt.sort=function(r){if(fn(r))return et.sort(r);var e=nt.pageYOffset||0;return tt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};tt.observe=function(r){return new Dt(r)};tt.normalizeScroll=function(r){if(typeof r>"u")return Mn;if(r===!0&&Mn)return Mn.enable();if(r===!1){Mn&&Mn.kill(),Mn=r;return}var e=r instanceof Dt?r:gb(r);return Mn&&Mn.target===e.target&&Mn.kill(),es(e.target)&&(Mn=e),e};tt.core={_getVelocityProp:Wu,_inputObserver:ag,_scrollers:it,_proxies:Di,bridge:{ss:function(){ui||ns("scrollStart"),ui=un()},ref:function(){return cn}}};Km()&&ye.registerPlugin(tt);dr.registerPlugin(tt);function _b(){const r=document.querySelector("[data-scroll-root]");r&&(tt.create({trigger:r,start:"top top",end:"bottom bottom",scrub:!0,onUpdate:e=>Ti.emit(bi.SCROLL,e.progress)}),dr.utils.toArray("[data-parallax]").forEach(e=>{const t=parseFloat(e.dataset.parallax)||1;dr.to(e,{yPercent:-18*t,ease:"none",scrollTrigger:{trigger:e.closest("[data-chapter]")||e,start:"top bottom",end:"bottom top",scrub:!0}})}),dr.utils.toArray("[data-chapter]").forEach(e=>{const t=e.querySelectorAll("[data-reveal]");t.length&&dr.from(t,{y:34,opacity:0,duration:1.1,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 72%",once:!0}})}))}let Kd=!1;window.__islandBoot={scriptRan:!0,calls:0,error:null};async function lg(){try{await vb()}catch(r){window.__islandBoot.error=String(r&&r.stack||r),console.error("[island] boot failed:",r)}}async function vb(){window.__islandBoot.calls++;const r=document.querySelector("#canvas-wrapper"),e=r?.querySelector("canvas");if(!(!r||!e)){if(!Kd){await al.init(r,e),Ti.emit(bi.ATTACH),Ti.emit(bi.RESIZE,al.viewportInfo());const t=()=>Ti.emit(bi.RESIZE,al.viewportInfo());new ResizeObserver(t).observe(r),window.addEventListener("resize",t),window.addEventListener("orientationchange",t),qw(),Kd=!0}tt.getAll().forEach(t=>t.kill()),tb(),_b(),requestAnimationFrame(()=>document.body.classList.add("loaded"))}}document.addEventListener("astro:after-swap",()=>document.body.classList.add("loaded"));document.addEventListener("astro:page-load",lg);document.readyState!=="loading"&&lg();
