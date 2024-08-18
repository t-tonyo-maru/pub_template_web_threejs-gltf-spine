var Cu=Object.defineProperty;var Pu=(r,e,t)=>e in r?Cu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var y=(r,e,t)=>Pu(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const al="167",Vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lu=0,Fl=1,Iu=2,yh=1,Du=2,kn=3,qn=0,qt=1,ln=2,di=0,Xn=1,co=2,Ol=3,Bl=4,ho=5,Ai=100,Nu=101,Uu=102,Fu=103,Ou=104,Bu=200,Yr=201,ku=202,uo=203,fo=204,Qs=205,Vu=206,zu=207,Mh=208,Hu=209,Gu=210,Wu=211,Xu=212,Yu=213,qu=214,$u=0,ju=1,Ku=2,ta=3,Zu=4,Ju=5,Qu=6,ed=7,Sh=0,td=1,nd=2,fi=0,id=1,sd=2,rd=3,ad=4,od=5,ld=6,cd=7,kl="attached",hd="detached",bh=300,xs=301,vs=302,po=303,mo=304,pa=306,Ii=1e3,Hn=1001,er=1002,Ft=1003,Eh=1004,ud=1004,Ys=1005,dd=1005,Yt=1006,qr=1007,fd=1007,Gn=1008,pd=1008,$n=1009,Ah=1010,wh=1011,tr=1012,ol=1013,Di=1014,gn=1015,lr=1016,ll=1017,cl=1018,ys=1020,Th=35902,Rh=1021,Ch=1022,cn=1023,Ph=1024,Lh=1025,us=1026,Ms=1027,hl=1028,ul=1029,Ih=1030,dl=1031,fl=1033,$r=33776,jr=33777,Kr=33778,Zr=33779,go=35840,_o=35841,xo=35842,vo=35843,yo=36196,Mo=37492,So=37496,bo=37808,Eo=37809,Ao=37810,wo=37811,To=37812,Ro=37813,Co=37814,Po=37815,Lo=37816,Io=37817,Do=37818,No=37819,Uo=37820,Fo=37821,Jr=36492,Oo=36494,Bo=36495,Dh=36283,ko=36284,Vo=36285,zo=36286,nr=2300,ir=2301,Ea=2302,Vl=2400,zl=2401,Hl=2402,md=2500,gd=0,Nh=1,Ho=2,_d=3200,xd=3201,Uh=0,vd=1,li="",Vt="srgb",Dt="srgb-linear",pl="display-p3",ma="display-p3-linear",na="linear",ht="srgb",ia="rec709",sa="p3",Hi=7680,Gl=519,yd=512,Md=513,Sd=514,Fh=515,bd=516,Ed=517,Ad=518,wd=519,Go=35044,Wl="300 es",Wn=2e3,ra=2001;class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xl=1234567;const js=Math.PI/180,Ss=180/Math.PI;function _n(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Lt(r,e,t){return Math.max(e,Math.min(t,r))}function ml(r,e){return(r%e+e)%e}function Td(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Rd(r,e,t){return r!==e?(t-r)/(e-r):0}function Ks(r,e,t){return(1-t)*r+t*e}function Cd(r,e,t,n){return Ks(r,e,1-Math.exp(-t*n))}function Pd(r,e=1){return e-Math.abs(ml(r,e*2)-e)}function Ld(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Id(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Dd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Nd(r,e){return r+Math.random()*(e-r)}function Ud(r){return r*(.5-Math.random())}function Fd(r){r!==void 0&&(Xl=r);let e=Xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Od(r){return r*js}function Bd(r){return r*Ss}function kd(r){return(r&r-1)===0&&r!==0}function Vd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Hd(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*f,o*l);break;case"YXY":r.set(c*f,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function rt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Oh={DEG2RAD:js,RAD2DEG:Ss,generateUUID:_n,clamp:Lt,euclideanModulo:ml,mapLinear:Td,inverseLerp:Rd,lerp:Ks,damp:Cd,pingpong:Pd,smoothstep:Ld,smootherstep:Id,randInt:Dd,randFloat:Nd,randFloatSpread:Ud,seededRandom:Fd,degToRad:Od,radToDeg:Bd,isPowerOfTwo:kd,ceilPowerOfTwo:Vd,floorPowerOfTwo:zd,setQuaternionFromProperEuler:Hd,normalize:rt,denormalize:mn};let Be=class Bh{constructor(e=0,t=0){Bh.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};class We{constructor(e,t,n,i,s,a,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],x=i[4],v=i[7],w=i[2],S=i[5],b=i[8];return s[0]=a*_+o*M+c*w,s[3]=a*m+o*x+c*S,s[6]=a*p+o*v+c*b,s[1]=l*_+h*M+u*w,s[4]=l*m+h*x+u*S,s[7]=l*p+h*v+u*b,s[2]=d*_+f*M+g*w,s[5]=d*m+f*x+g*S,s[8]=d*p+f*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Aa.makeScale(e,t)),this}rotate(e){return this.premultiply(Aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new We;function kh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function sr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gd(){const r=sr("canvas");return r.style.display="block",r}const Yl={};function ds(r){r in Yl||(Yl[r]=!0,console.warn(r))}function Wd(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ql=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$l=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fs={[Dt]:{transfer:na,primaries:ia,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Vt]:{transfer:ht,primaries:ia,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ma]:{transfer:na,primaries:sa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3($l),fromReference:r=>r.applyMatrix3(ql)},[pl]:{transfer:ht,primaries:sa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3($l),fromReference:r=>r.applyMatrix3(ql).convertLinearToSRGB()}},Xd=new Set([Dt,ma]),tt={enabled:!0,_workingColorSpace:Dt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Xd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Fs[e].toReference,i=Fs[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Fs[r].primaries},getTransfer:function(r){return r===li?na:Fs[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Fs[e].luminanceCoefficients)}};function fs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function wa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Gi;class Yd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=sr("canvas")),Gi.width=e.width,Gi.height=e.height;const n=Gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=fs(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fs(t[n]/255)*255):t[n]=fs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qd=0;class Vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ta(i[a].image)):s.push(Ta(i[a]))}else s=Ta(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ta(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $d=0,Ot=class Qr extends Fi{constructor(e=Qr.DEFAULT_IMAGE,t=Qr.DEFAULT_MAPPING,n=Hn,i=Hn,s=Yt,a=Gn,o=cn,c=$n,l=Qr.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=_n(),this.name="",this.source=new Vh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=bh;Ot.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(f+1)/2,w=(p+1)/2,S=(h+d)/4,b=(u+_)/4,C=(g+m)/4;return x>v&&x>w?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=S/n,s=b/n):v>w?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=S/i,s=C/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=b/s,i=C/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jd extends Fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends jd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zh extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kd extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),S=Math.atan2(w,p*M);m=Math.sin(m*S)/w,o=Math.sin(o*S)/w}const v=o*M;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ra.copy(this).projectOnVector(e),this.sub(Ra)}reflect(e){return this.sub(Ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new O,jl=new En;class Tn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(e.matrixWorld),this.union(gr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),_r.subVectors(this.max,Os),Wi.subVectors(e.a,Os),Xi.subVectors(e.b,Os),Yi.subVectors(e.c,Os),Jn.subVectors(Xi,Wi),Qn.subVectors(Yi,Xi),_i.subVectors(Wi,Yi);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-_i.z,_i.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,_i.z,0,-_i.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-_i.y,_i.x,0];return!Ca(t,Wi,Xi,Yi,_r)||(t=[1,0,0,0,1,0,0,0,1],!Ca(t,Wi,Xi,Yi,_r))?!1:(xr.crossVectors(Jn,Qn),t=[xr.x,xr.y,xr.z],Ca(t,Wi,Xi,Yi,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new O,new O,new O,new O,new O,new O,new O,new O],un=new O,gr=new Tn,Wi=new O,Xi=new O,Yi=new O,Jn=new O,Qn=new O,_i=new O,Os=new O,_r=new O,xr=new O,xi=new O;function Ca(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){xi.fromArray(r,s);const o=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),c=e.dot(xi),l=t.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Zd=new Tn,Bs=new O,Pa=new O;class Rn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Bs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(Pa)),this.expandByPoint(Bs.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new O,La=new O,vr=new O,ei=new O,Ia=new O,yr=new O,Da=new O;class cr{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){La.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(La);const s=e.distanceTo(t)*.5,a=-this.direction.dot(vr),o=ei.dot(this.direction),c=-ei.dot(vr),l=ei.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(La).addScaledVector(vr,d),f}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,i,s){Ia.subVectors(t,e),yr.subVectors(n,e),Da.crossVectors(Ia,yr);let a=this.direction.dot(Da),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,e);const c=o*this.direction.dot(yr.crossVectors(ei,yr));if(c<0)return null;const l=o*this.direction.dot(Ia.cross(ei));if(l<0||c+l>a)return null;const h=-o*ei.dot(Da);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,s,a,o,c,l,h,u,d,f,g,_,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,s,a,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jd,e,Qd)}lookAt(e,t,n){const i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ti.crossVectors(n,Kt),ti.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ti.crossVectors(n,Kt)),ti.normalize(),Mr.crossVectors(Kt,ti),i[0]=ti.x,i[4]=Mr.x,i[8]=Kt.x,i[1]=ti.y,i[5]=Mr.y,i[9]=Kt.y,i[2]=ti.z,i[6]=Mr.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],v=n[11],w=n[15],S=i[0],b=i[4],C=i[8],E=i[12],A=i[1],P=i[5],k=i[9],F=i[13],I=i[2],N=i[6],V=i[10],Y=i[14],W=i[3],Q=i[7],ie=i[11],ae=i[15];return s[0]=a*S+o*A+c*I+l*W,s[4]=a*b+o*P+c*N+l*Q,s[8]=a*C+o*k+c*V+l*ie,s[12]=a*E+o*F+c*Y+l*ae,s[1]=h*S+u*A+d*I+f*W,s[5]=h*b+u*P+d*N+f*Q,s[9]=h*C+u*k+d*V+f*ie,s[13]=h*E+u*F+d*Y+f*ae,s[2]=g*S+_*A+m*I+p*W,s[6]=g*b+_*P+m*N+p*Q,s[10]=g*C+_*k+m*V+p*ie,s[14]=g*E+_*F+m*Y+p*ae,s[3]=M*S+x*A+v*I+w*W,s[7]=M*b+x*P+v*N+w*Q,s[11]=M*C+x*k+v*V+w*ie,s[15]=M*E+x*F+v*Y+w*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*u-i*l*u-s*o*d+n*l*d+i*o*f-n*c*f)+_*(+t*c*f-t*l*d+s*a*d-i*a*f+i*l*h-s*c*h)+m*(+t*l*u-t*o*f-s*a*u+n*a*f+s*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,x=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,v=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,w=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,S=t*M+n*x+i*v+s*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/S;return e[0]=M*b,e[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*b,e[2]=(o*m*s-_*c*s+_*i*l-n*m*l-o*i*p+n*c*p)*b,e[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*f-n*c*f)*b,e[4]=x*b,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*b,e[6]=(g*c*s-a*m*s-g*i*l+t*m*l+a*i*p-t*c*p)*b,e[7]=(a*d*s-h*c*s+h*i*l-t*d*l-a*i*f+t*c*f)*b,e[8]=v*b,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*b,e[10]=(a*_*s-g*o*s+g*n*l-t*_*l-a*n*p+t*o*p)*b,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*f-t*o*f)*b,e[12]=w*b,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*b,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*m-t*o*m)*b,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,g=s*u,_=a*h,m=a*u,p=o*u,M=c*l,x=c*h,v=c*u,w=n.x,S=n.y,b=n.z;return i[0]=(1-(_+p))*w,i[1]=(f+v)*w,i[2]=(g-x)*w,i[3]=0,i[4]=(f-v)*S,i[5]=(1-(d+p))*S,i[6]=(m+M)*S,i[7]=0,i[8]=(g+x)*b,i[9]=(m-M)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=qi.set(i[0],i[1],i[2]).length();const a=qi.set(i[4],i[5],i[6]).length(),o=qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],dn.copy(this);const l=1/s,h=1/a,u=1/o;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,t.setFromRotationMatrix(dn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Wn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===Wn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ra)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Wn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*l,f=(n+i)*h;let g,_;if(o===Wn)g=(a+s)*u,_=-2*u;else if(o===ra)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new O,dn=new Xe,Jd=new O(0,0,0),Qd=new O(1,1,1),ti=new O,Mr=new O,Kt=new O,Kl=new Xe,Zl=new En;class An{constructor(e=0,t=0,n=0,i=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Hh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ef=0;const Jl=new O,$i=new En,Un=new Xe,Sr=new O,ks=new O,tf=new O,nf=new En,Ql=new O(1,0,0),ec=new O(0,1,0),tc=new O(0,0,1),nc={type:"added"},sf={type:"removed"},ji={type:"childadded",child:null},Na={type:"childremoved",child:null};class ut extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new O,t=new An,n=new En,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new We}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(ks,Sr,this.up):Un.lookAt(Sr,ks,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(Un),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nc),ji.child=e,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sf),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nc),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new O(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new O,Fn=new O,Ua=new O,On=new O,Ki=new O,Zi=new O,ic=new O,Fa=new O,Oa=new O,Ba=new O;class Mn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fn.subVectors(e,t),i.cross(fn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){fn.subVectors(i,t),Fn.subVectors(n,t),Ua.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(Fn),c=fn.dot(Ua),l=Fn.dot(Fn),h=Fn.dot(Ua),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static isFrontFacing(e,t,n,i){return fn.subVectors(n,t),Fn.subVectors(e,t),fn.cross(Fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),fn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ki.subVectors(i,n),Zi.subVectors(s,n),Fa.subVectors(e,n);const c=Ki.dot(Fa),l=Zi.dot(Fa);if(c<=0&&l<=0)return t.copy(n);Oa.subVectors(e,i);const h=Ki.dot(Oa),u=Zi.dot(Oa);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ki,a);Ba.subVectors(e,s);const f=Ki.dot(Ba),g=Zi.dot(Ba);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Zi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ic.subVectors(s,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(ic,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Ki,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},br={h:0,s:0,l:0};function ka(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=ml(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ka(a,s,e+1/3),this.g=ka(a,s,e),this.b=ka(a,s,e-1/3)}return tt.toWorkingColorSpace(this,i),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Gh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return tt.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Lt(Ut.r*255,0,255))*65536+Math.round(Lt(Ut.g*255,0,255))*256+Math.round(Lt(Ut.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,i=Ut.g,s=Ut.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Vt){tt.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,i=Ut.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(br);const n=Ks(ni.h,br.h,t),i=Ks(ni.s,br.s,t),s=Ks(ni.l,br.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ut=new Ve;Ve.NAMES=Gh;let rf=0;class en extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=Xn,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fo,this.blendDst=Qs,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xn&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fo&&(n.blendSrc=this.blendSrc),this.blendDst!==Qs&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ri extends en{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new O,Er=new Be;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Go,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ds("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),e}}class Wh extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xh extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Sn extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let af=0;const sn=new Xe,Va=new ut,Ji=new O,Zt=new Tn,Vs=new Tn,wt=new O;class tn extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kh(e)?Xh:Wh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Zt.min,Vs.min),Zt.expandByPoint(wt),wt.addVectors(Zt.max,Vs.max),Zt.expandByPoint(wt)):(Zt.expandByPoint(Vs.min),Zt.expandByPoint(Vs.max))}Zt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)wt.fromBufferAttribute(o,l),c&&(Ji.fromBufferAttribute(e,l),wt.add(Ji)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new O,c[C]=new O;const l=new O,h=new O,u=new O,d=new Be,f=new Be,g=new Be,_=new O,m=new O;function p(C,E,A){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,A),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,E),g.fromBufferAttribute(s,A),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(_),o[E].add(_),o[A].add(_),c[C].add(m),c[E].add(m),c[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,E=M.length;C<E;++C){const A=M[C],P=A.start,k=A.count;for(let F=P,I=P+k;F<I;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new O,v=new O,w=new O,S=new O;function b(C){w.fromBufferAttribute(i,C),S.copy(w);const E=o[C];x.copy(E),x.sub(w.multiplyScalar(w.dot(E))).normalize(),v.crossVectors(S,E);const P=v.dot(c[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,E=M.length;C<E;++C){const A=M[C],P=A.start,k=A.count;for(let F=P,I=P+k;F<I;F+=3)b(e.getX(F+0)),b(e.getX(F+1)),b(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new O,s=new O,a=new O,o=new O,c=new O,l=new O,h=new O,u=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Tt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new Xe,vi=new cr,Ar=new Rn,rc=new O,Qi=new O,es=new O,ts=new O,za=new O,wr=new O,Tr=new Be,Rr=new Be,Cr=new Be,ac=new O,oc=new O,lc=new O,Pr=new O,Lr=new O;class It extends ut{constructor(e=new tn,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){wr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(za.fromBufferAttribute(u,e),a?wr.addScaledVector(za,h):wr.addScaledVector(za.sub(t),h))}t.add(wr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),vi.copy(e.ray).recast(e.near),!(Ar.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Ar,rc)===null||vi.origin.distanceToSquared(rc)>(e.far-e.near)**2))&&(sc.copy(s).invert(),vi.copy(e.ray).applyMatrix4(sc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,w=x;v<w;v+=3){const S=o.getX(v),b=o.getX(v+1),C=o.getX(v+2);i=Ir(this,p,e,n,l,h,u,S,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);i=Ir(this,a,e,n,l,h,u,M,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,w=x;v<w;v+=3){const S=v,b=v+1,C=v+2;i=Ir(this,p,e,n,l,h,u,S,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,v=m+2;i=Ir(this,a,e,n,l,h,u,M,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function of(r,e,t,n,i,s,a,o){let c;if(e.side===qt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===qn,o),c===null)return null;Lr.copy(o),Lr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Lr);return l<t.near||l>t.far?null:{distance:l,point:Lr.clone(),object:r}}function Ir(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Qi),r.getVertexPosition(c,es),r.getVertexPosition(l,ts);const h=of(r,e,t,n,Qi,es,ts,Pr);if(h){i&&(Tr.fromBufferAttribute(i,o),Rr.fromBufferAttribute(i,c),Cr.fromBufferAttribute(i,l),h.uv=Mn.getInterpolation(Pr,Qi,es,ts,Tr,Rr,Cr,new Be)),s&&(Tr.fromBufferAttribute(s,o),Rr.fromBufferAttribute(s,c),Cr.fromBufferAttribute(s,l),h.uv1=Mn.getInterpolation(Pr,Qi,es,ts,Tr,Rr,Cr,new Be)),a&&(ac.fromBufferAttribute(a,o),oc.fromBufferAttribute(a,c),lc.fromBufferAttribute(a,l),h.normal=Mn.getInterpolation(Pr,Qi,es,ts,ac,oc,lc,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new O,materialIndex:0};Mn.getNormal(Qi,es,ts,u.normal),h.face=u}return h}class Oi extends tn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Sn(l,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(u,2));function g(_,m,p,M,x,v,w,S,b,C,E){const A=v/b,P=w/C,k=v/2,F=w/2,I=S/2,N=b+1,V=C+1;let Y=0,W=0;const Q=new O;for(let ie=0;ie<V;ie++){const ae=ie*P-F;for(let ve=0;ve<N;ve++){const oe=ve*A-k;Q[_]=oe*M,Q[m]=ae*x,Q[p]=I,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=S>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(ve/b),u.push(1-ie/C),Y+=1}}for(let ie=0;ie<C;ie++)for(let ae=0;ae<b;ae++){const ve=d+ae+N*ie,oe=d+ae+N*(ie+1),G=d+(ae+1)+N*(ie+1),J=d+(ae+1)+N*ie;c.push(ve,oe,J),c.push(oe,G,J),W+=6}o.addGroup(f,W,E),f+=W,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(r){const e={};for(let t=0;t<r.length;t++){const n=bs(r[t]);for(const i in n)e[i]=n[i]}return e}function lf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const cf={clone:bs,merge:kt};var hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends en{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=lf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qh extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new O,cc=new Be,hc=new Be;class Ht extends qh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,cc,hc),t.subVectors(hc,cc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class df extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(ns,is,e,t);i.layers=this.layers,this.add(i);const s=new Ht(ns,is,e,t);s.layers=this.layers,this.add(s);const a=new Ht(ns,is,e,t);a.layers=this.layers,this.add(a);const o=new Ht(ns,is,e,t);o.layers=this.layers,this.add(o);const c=new Ht(ns,is,e,t);c.layers=this.layers,this.add(c);const l=new Ht(ns,is,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $h extends Ot{constructor(e,t,n,i,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:xs,super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ff extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $h(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Oi(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:di});s.uniforms.tEquirect.value=t;const a=new It(i,s),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Yt),new df(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Ha=new O,pf=new O,mf=new We;class ri{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ha.subVectors(n,t).cross(pf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ha),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||mf.getNormalMatrix(e),i=this.coplanarPoint(Ha).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Rn,Dr=new O;class gl{constructor(e=new ri,t=new ri,n=new ri,i=new ri,s=new ri,a=new ri){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],x=i[14],v=i[15];if(n[0].setComponents(c-s,d-l,m-f,v-p).normalize(),n[1].setComponents(c+s,d+l,m+f,v+p).normalize(),n[2].setComponents(c+a,d+h,m+g,v+M).normalize(),n[3].setComponents(c-a,d-h,m-g,v-M).normalize(),n[4].setComponents(c-o,d-u,m-_,v-x).normalize(),t===Wn)n[5].setComponents(c+o,d+u,m+_,v+x).normalize();else if(t===ra)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Dr.x=i.normal.x>0?e.max.x:e.min.x,Dr.y=i.normal.y>0?e.max.y:e.min.y,Dr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function gf(r){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(r.bindBuffer(l,o),u.count===-1&&d.length===0&&r.bufferSubData(l,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}u.count!==-1&&(r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}class hr extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let x=0;x<l;x++){const v=x*u-s;g.push(v,-M,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const x=M+l*p,v=M+l*(p+1),w=M+1+l*(p+1),S=M+1+l*p;f.push(x,v,S),f.push(v,w,S)}this.setIndex(f),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.widthSegments,e.heightSegments)}}var _f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xf=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
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
#endif`,Ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
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
#endif`,wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pf=`#ifdef USE_IRIDESCENCE
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
#endif`,Lf=`#ifdef USE_BUMPMAP
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vf=`#define PI 3.141592653589793
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
} // validated`,zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hf=`vec3 transformedNormal = objectNormal;
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
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",$f=`
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
}`,jf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
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
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
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
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
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
#endif`,mp=`struct PhysicalMaterial {
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
}`,gp=`
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wp=`#if defined( USE_POINTS_UV )
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
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
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
#endif`,Dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,Vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tm=`float getShadowMask() {
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
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,Em=`#define DISTANCE
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
}`,Am=`#define DISTANCE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Im=`#define LAMBERT
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
}`,Dm=`#define LAMBERT
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
}`,Nm=`#define MATCAP
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
}`,Um=`#define MATCAP
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
}`,Fm=`#define NORMAL
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
}`,Om=`#define NORMAL
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
}`,Bm=`#define PHONG
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
}`,km=`#define PHONG
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
}`,Vm=`#define STANDARD
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
}`,zm=`#define STANDARD
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
}`,Hm=`#define TOON
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
}`,Gm=`#define TOON
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
}`,Wm=`uniform float size;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,qm=`uniform vec3 color;
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
}`,$m=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,jm=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:_f,alphahash_pars_fragment:xf,alphamap_fragment:vf,alphamap_pars_fragment:yf,alphatest_fragment:Mf,alphatest_pars_fragment:Sf,aomap_fragment:bf,aomap_pars_fragment:Ef,batching_pars_vertex:Af,batching_vertex:wf,begin_vertex:Tf,beginnormal_vertex:Rf,bsdfs:Cf,iridescence_fragment:Pf,bumpmap_pars_fragment:Lf,clipping_planes_fragment:If,clipping_planes_pars_fragment:Df,clipping_planes_pars_vertex:Nf,clipping_planes_vertex:Uf,color_fragment:Ff,color_pars_fragment:Of,color_pars_vertex:Bf,color_vertex:kf,common:Vf,cube_uv_reflection_fragment:zf,defaultnormal_vertex:Hf,displacementmap_pars_vertex:Gf,displacementmap_vertex:Wf,emissivemap_fragment:Xf,emissivemap_pars_fragment:Yf,colorspace_fragment:qf,colorspace_pars_fragment:$f,envmap_fragment:jf,envmap_common_pars_fragment:Kf,envmap_pars_fragment:Zf,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:cp,envmap_vertex:Qf,fog_vertex:ep,fog_pars_vertex:tp,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:ap,lights_lambert_pars_fragment:op,lights_pars_begin:lp,lights_toon_fragment:hp,lights_toon_pars_fragment:up,lights_phong_fragment:dp,lights_phong_pars_fragment:fp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:_p,lights_fragment_end:xp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:Mp,logdepthbuf_vertex:Sp,map_fragment:bp,map_pars_fragment:Ep,map_particle_fragment:Ap,map_particle_pars_fragment:wp,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:Rp,morphinstance_vertex:Cp,morphcolor_vertex:Pp,morphnormal_vertex:Lp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Dp,normal_fragment_begin:Np,normal_fragment_maps:Up,normal_pars_fragment:Fp,normal_pars_vertex:Op,normal_vertex:Bp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Vp,clearcoat_normal_fragment_maps:zp,clearcoat_pars_fragment:Hp,iridescence_pars_fragment:Gp,opaque_fragment:Wp,packing:Xp,premultiplied_alpha_fragment:Yp,project_vertex:qp,dithering_fragment:$p,dithering_pars_fragment:jp,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Qp,shadowmap_vertex:em,shadowmask_pars_fragment:tm,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:am,specularmap_pars_fragment:om,tonemapping_fragment:lm,tonemapping_pars_fragment:cm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:dm,uv_pars_vertex:fm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:_m,backgroundCube_vert:xm,backgroundCube_frag:vm,cube_vert:ym,cube_frag:Mm,depth_vert:Sm,depth_frag:bm,distanceRGBA_vert:Em,distanceRGBA_frag:Am,equirect_vert:wm,equirect_frag:Tm,linedashed_vert:Rm,linedashed_frag:Cm,meshbasic_vert:Pm,meshbasic_frag:Lm,meshlambert_vert:Im,meshlambert_frag:Dm,meshmatcap_vert:Nm,meshmatcap_frag:Um,meshnormal_vert:Fm,meshnormal_frag:Om,meshphong_vert:Bm,meshphong_frag:km,meshphysical_vert:Vm,meshphysical_frag:zm,meshtoon_vert:Hm,meshtoon_frag:Gm,points_vert:Wm,points_frag:Xm,shadow_vert:Ym,shadow_frag:qm,sprite_vert:$m,sprite_frag:jm},pe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},yn={basic:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:kt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:kt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:kt([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:kt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:kt([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:kt([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:kt([pe.common,pe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:kt([pe.lights,pe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};yn.physical={uniforms:kt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Nr={r:0,b:0,g:0},Mi=new An,Km=new Xe;function Zm(r,e,t,n,i,s,a){const o=new Ve(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const v=g(M);v===null?p(o,c):v&&v.isColor&&(p(v,1),x=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===pa)?(h===void 0&&(h=new It(new Oi(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:bs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Mi.copy(x.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Km.makeRotationFromEuler(Mi)),h.material.toneMapped=tt.getTransfer(v.colorSpace)!==ht,(u!==v||d!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new It(new hr(2,2),new jn({name:"BackgroundMaterial",uniforms:bs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=tt.getTransfer(v.colorSpace)!==ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(Nr,Yh(r)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:_,addToRenderList:m}}function Jm(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(A,P,k,F,I){let N=!1;const V=u(F,k,P);s!==V&&(s=V,l(s.object)),N=f(A,F,k,I),N&&g(A,F,k,I),I!==null&&e.update(I,r.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,v(A,P,k,F),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return r.createVertexArray()}function l(A){return r.bindVertexArray(A)}function h(A){return r.deleteVertexArray(A)}function u(A,P,k){const F=k.wireframe===!0;let I=n[A.id];I===void 0&&(I={},n[A.id]=I);let N=I[P.id];N===void 0&&(N={},I[P.id]=N);let V=N[F];return V===void 0&&(V=d(c()),N[F]=V),V}function d(A){const P=[],k=[],F=[];for(let I=0;I<t;I++)P[I]=0,k[I]=0,F[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:F,object:A,attributes:{},index:null}}function f(A,P,k,F){const I=s.attributes,N=P.attributes;let V=0;const Y=k.getAttributes();for(const W in Y)if(Y[W].location>=0){const ie=I[W];let ae=N[W];if(ae===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor)),ie===void 0||ie.attribute!==ae||ae&&ie.data!==ae.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function g(A,P,k,F){const I={},N=P.attributes;let V=0;const Y=k.getAttributes();for(const W in Y)if(Y[W].location>=0){let ie=N[W];ie===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(ie=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(ie=A.instanceColor));const ae={};ae.attribute=ie,ie&&ie.data&&(ae.data=ie.data),I[W]=ae,V++}s.attributes=I,s.attributesNum=V,s.index=F}function _(){const A=s.newAttributes;for(let P=0,k=A.length;P<k;P++)A[P]=0}function m(A){p(A,0)}function p(A,P){const k=s.newAttributes,F=s.enabledAttributes,I=s.attributeDivisors;k[A]=1,F[A]===0&&(r.enableVertexAttribArray(A),F[A]=1),I[A]!==P&&(r.vertexAttribDivisor(A,P),I[A]=P)}function M(){const A=s.newAttributes,P=s.enabledAttributes;for(let k=0,F=P.length;k<F;k++)P[k]!==A[k]&&(r.disableVertexAttribArray(k),P[k]=0)}function x(A,P,k,F,I,N,V){V===!0?r.vertexAttribIPointer(A,P,k,I,N):r.vertexAttribPointer(A,P,k,F,I,N)}function v(A,P,k,F){_();const I=F.attributes,N=k.getAttributes(),V=P.defaultAttributeValues;for(const Y in N){const W=N[Y];if(W.location>=0){let Q=I[Y];if(Q===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor)),Q!==void 0){const ie=Q.normalized,ae=Q.itemSize,ve=e.get(Q);if(ve===void 0)continue;const oe=ve.buffer,G=ve.type,J=ve.bytesPerElement,de=G===r.INT||G===r.UNSIGNED_INT||Q.gpuType===ol;if(Q.isInterleavedBufferAttribute){const ue=Q.data,ye=ue.stride,Ae=Q.offset;if(ue.isInstancedInterleavedBuffer){for(let we=0;we<W.locationSize;we++)p(W.location+we,ue.meshPerAttribute);A.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let we=0;we<W.locationSize;we++)m(W.location+we);r.bindBuffer(r.ARRAY_BUFFER,oe);for(let we=0;we<W.locationSize;we++)x(W.location+we,ae/W.locationSize,G,ie,ye*J,(Ae+ae/W.locationSize*we)*J,de)}else{if(Q.isInstancedBufferAttribute){for(let ue=0;ue<W.locationSize;ue++)p(W.location+ue,Q.meshPerAttribute);A.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ue=0;ue<W.locationSize;ue++)m(W.location+ue);r.bindBuffer(r.ARRAY_BUFFER,oe);for(let ue=0;ue<W.locationSize;ue++)x(W.location+ue,ae/W.locationSize,G,ie,ae*J,ae/W.locationSize*ue*J,de)}}else if(V!==void 0){const ie=V[Y];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(W.location,ie);break;case 3:r.vertexAttrib3fv(W.location,ie);break;case 4:r.vertexAttrib4fv(W.location,ie);break;default:r.vertexAttrib1fv(W.location,ie)}}}}M()}function w(){C();for(const A in n){const P=n[A];for(const k in P){const F=P[k];for(const I in F)h(F[I].object),delete F[I];delete P[k]}delete n[A]}}function S(A){if(n[A.id]===void 0)return;const P=n[A.id];for(const k in P){const F=P[k];for(const I in F)h(F[I].object),delete F[I];delete P[k]}delete n[A.id]}function b(A){for(const P in n){const k=n[P];if(k[A.id]===void 0)continue;const F=k[A.id];for(const I in F)h(F[I].object),delete F[I];delete k[A.id]}}function C(){E(),a=!0,s!==i&&(s=i,l(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Qm(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function eg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){return!(S!==cn&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const b=S===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==$n&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==gn&&!b)}function c(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:v,maxSamples:w}}function tg(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ri,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const M=s?0:n,x=M*4;let v=p.clippingState||null;c.value=v,v=h(g,d,x,f);for(let w=0;w!==x;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)a.copy(u[x]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ng(r){let e=new WeakMap;function t(a,o){return o===po?a.mapping=xs:o===mo&&(a.mapping=vs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===po||o===mo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ff(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class _l extends qh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const os=4,uc=[.125,.215,.35,.446,.526,.582],wi=20,Ga=new _l,dc=new Ve;let Wa=null,Xa=0,Ya=0,qa=!1;const Ei=(1+Math.sqrt(5))/2,ss=1/Ei,fc=[new O(-Ei,ss,0),new O(Ei,ss,0),new O(-ss,0,Ei),new O(ss,0,Ei),new O(0,Ei,-ss),new O(0,Ei,ss),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class pc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa,Xa,Ya),this._renderer.xr.enabled=qa,e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:lr,format:cn,colorSpace:Dt,depthBuffer:!1},i=mc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ig(s)),this._blurMaterial=sg(s,e,t)}return i}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,n,i){const o=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(dc),h.toneMapping=fi,h.autoClear=!1;const f=new Ri({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new It(new Oi,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(dc),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):M===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;Ur(i,M*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xs||e.mapping===vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_c()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ur(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ga)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fc[(i-s-1)%fc.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new It(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*wi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):wi;m>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const p=[];let M=0;for(let b=0;b<wi;++b){const C=b/_,E=Math.exp(-C*C/2);p.push(E),b===0?M+=E:b<m&&(M+=2*E)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[i],w=3*v*(i>x-os?i-x+os:0),S=4*(this._cubeSize-v);Ur(t,w,S,3*v,2*v),c.setRenderTarget(t),c.render(u,Ga)}}function ig(r){const e=[],t=[],n=[];let i=r;const s=r-os+1+uc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-os?c=uc[a-r+os-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let S=0;S<f;S++){const b=S%3*2/3-1,C=S>2?0:-1,E=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];M.set(E,_*g*S),x.set(d,m*g*S);const A=[S,S,S,S,S,S];v.set(A,p*g*S)}const w=new tn;w.setAttribute("position",new Tt(M,_)),w.setAttribute("uv",new Tt(x,m)),w.setAttribute("faceIndex",new Tt(v,p)),e.push(w),i>os&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mc(r,e,t){const n=new Ni(r,e,t);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function sg(r,e,t){const n=new Float32Array(wi),i=new O(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function gc(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function _c(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function xl(){return`

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
	`}function rg(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===po||c===mo,h=c===xs||c===vs;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new pc(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new pc(r)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ag(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function og(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let x=0,v=M.length;x<v;x+=3){const w=M[x+0],S=M[x+1],b=M[x+2];d.push(w,S,S,b,b,w)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const w=x+0,S=x+1,b=x+2;d.push(w,S,S,b,b,w)}}else return;const m=new(kh(d)?Xh:Wh)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function lg(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M];for(let M=0;M<_.length;M++)t.update(p,n,_[M])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hg(r,e,t){const n=new WeakMap,i=new ot;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let A=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",A)};var f=A;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let w=o.attributes.position.count*v,S=1;w>e.maxTextureSize&&(S=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*S*4*u),C=new zh(b,w,S,u);C.type=gn,C.needsUpdate=!0;const E=v*4;for(let P=0;P<u;P++){const k=p[P],F=M[P],I=x[P],N=w*S*4*P;for(let V=0;V<k.count;V++){const Y=V*E;g===!0&&(i.fromBufferAttribute(k,V),b[N+Y+0]=i.x,b[N+Y+1]=i.y,b[N+Y+2]=i.z,b[N+Y+3]=0),_===!0&&(i.fromBufferAttribute(F,V),b[N+Y+4]=i.x,b[N+Y+5]=i.y,b[N+Y+6]=i.z,b[N+Y+7]=0),m===!0&&(i.fromBufferAttribute(I,V),b[N+Y+8]=i.x,b[N+Y+9]=i.y,b[N+Y+10]=i.z,b[N+Y+11]=I.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Be(w,S)},n.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function ug(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Kh extends Ot{constructor(e,t,n,i,s,a,o,c,l,h=us){if(h!==us&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===us&&(n=Di),n===void 0&&h===Ms&&(n=ys),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ft,this.minFilter=c!==void 0?c:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zh=new Ot,xc=new Kh(1,1),Jh=new zh,Qh=new Kd,eu=new $h,vc=[],yc=[],Mc=new Float32Array(16),Sc=new Float32Array(9),bc=new Float32Array(4);function Cs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=vc[i];if(s===void 0&&(s=new Float32Array(i),vc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Et(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function At(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ga(r,e){let t=yc[e];t===void 0&&(t=new Int32Array(e),yc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function dg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function fg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2fv(this.addr,e),At(t,e)}}function pg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;r.uniform3fv(this.addr,e),At(t,e)}}function mg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4fv(this.addr,e),At(t,e)}}function gg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;bc.set(n),r.uniformMatrix2fv(this.addr,!1,bc),At(t,n)}}function _g(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Sc.set(n),r.uniformMatrix3fv(this.addr,!1,Sc),At(t,n)}}function xg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Mc.set(n),r.uniformMatrix4fv(this.addr,!1,Mc),At(t,n)}}function vg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2iv(this.addr,e),At(t,e)}}function Mg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3iv(this.addr,e),At(t,e)}}function Sg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4iv(this.addr,e),At(t,e)}}function bg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Eg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2uiv(this.addr,e),At(t,e)}}function Ag(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3uiv(this.addr,e),At(t,e)}}function wg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4uiv(this.addr,e),At(t,e)}}function Tg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(xc.compareFunction=Fh,s=xc):s=Zh,t.setTexture2D(e||s,i)}function Rg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qh,i)}function Cg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||eu,i)}function Pg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jh,i)}function Lg(r){switch(r){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return xg;case 5124:case 35670:return vg;case 35667:case 35671:return yg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return bg;case 36294:return Eg;case 36295:return Ag;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Ig(r,e){r.uniform1fv(this.addr,e)}function Dg(r,e){const t=Cs(e,this.size,2);r.uniform2fv(this.addr,t)}function Ng(r,e){const t=Cs(e,this.size,3);r.uniform3fv(this.addr,t)}function Ug(r,e){const t=Cs(e,this.size,4);r.uniform4fv(this.addr,t)}function Fg(r,e){const t=Cs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Og(r,e){const t=Cs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Bg(r,e){const t=Cs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function kg(r,e){r.uniform1iv(this.addr,e)}function Vg(r,e){r.uniform2iv(this.addr,e)}function zg(r,e){r.uniform3iv(this.addr,e)}function Hg(r,e){r.uniform4iv(this.addr,e)}function Gg(r,e){r.uniform1uiv(this.addr,e)}function Wg(r,e){r.uniform2uiv(this.addr,e)}function Xg(r,e){r.uniform3uiv(this.addr,e)}function Yg(r,e){r.uniform4uiv(this.addr,e)}function qg(r,e,t){const n=this.cache,i=e.length,s=ga(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Zh,s[a])}function $g(r,e,t){const n=this.cache,i=e.length,s=ga(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Qh,s[a])}function jg(r,e,t){const n=this.cache,i=e.length,s=ga(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||eu,s[a])}function Kg(r,e,t){const n=this.cache,i=e.length,s=ga(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Jh,s[a])}function Zg(r){switch(r){case 5126:return Ig;case 35664:return Dg;case 35665:return Ng;case 35666:return Ug;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return kg;case 35667:case 35671:return Vg;case 35668:case 35672:return zg;case 35669:case 35673:return Hg;case 5125:return Gg;case 36294:return Wg;case 36295:return Xg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Kg}}class Jg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lg(t.type)}}class Qg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zg(t.type)}}class e0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function Ec(r,e){r.seq.push(e),r.map[e.id]=e}function t0(r,e,t){const n=r.name,i=n.length;for($a.lastIndex=0;;){const s=$a.exec(n),a=$a.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Ec(t,l===void 0?new Jg(o,r,e):new Qg(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new e0(o),Ec(t,u)),t=u}}}class ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);t0(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ac(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const n0=37297;let i0=0;function s0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function r0(r){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(r);let n;switch(e===t?n="":e===sa&&t===ia?n="LinearDisplayP3ToLinearSRGB":e===ia&&t===sa&&(n="LinearSRGBToLinearDisplayP3"),r){case Dt:case ma:return[n,"LinearTransferOETF"];case Vt:case pl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function wc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+s0(r.getShaderSource(e),a)}else return i}function a0(r,e){const t=r0(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function o0(r,e){let t;switch(e){case id:t="Linear";break;case sd:t="Reinhard";break;case rd:t="OptimizedCineon";break;case ad:t="ACESFilmic";break;case ld:t="AgX";break;case cd:t="Neutral";break;case od:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fr=new O;function l0(){tt.getLuminanceCoefficients(Fr);const r=Fr.x.toFixed(4),e=Fr.y.toFixed(4),t=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function h0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function u0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function qs(r){return r!==""}function Tc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(r){return r.replace(d0,p0)}const f0=new Map;function p0(r,e){let t=Ge[e];if(t===void 0){const n=f0.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wo(t)}const m0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(r){return r.replace(m0,g0)}function g0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pc(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function _0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function x0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case xs:case vs:e="ENVMAP_TYPE_CUBE";break;case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function y0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Sh:e="ENVMAP_BLENDING_MULTIPLY";break;case td:e="ENVMAP_BLENDING_MIX";break;case nd:e="ENVMAP_BLENDING_ADD";break}return e}function M0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function S0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=_0(t),l=x0(t),h=v0(t),u=y0(t),d=M0(t),f=c0(t),g=h0(s),_=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),p.length>0&&(p+=`
`)):(m=[Pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),p=[Pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==fi?o0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,a0("linearToOutputTexel",t.outputColorSpace),l0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),a=Wo(a),a=Tc(a,t),a=Rc(a,t),o=Wo(o),o=Tc(o,t),o=Rc(o,t),a=Cc(a),o=Cc(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+a,v=M+p+o,w=Ac(i,i.VERTEX_SHADER,x),S=Ac(i,i.FRAGMENT_SHADER,v);i.attachShader(_,w),i.attachShader(_,S),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(w).trim(),I=i.getShaderInfoLog(S).trim();let N=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,w,S);else{const Y=wc(i,w,"vertex"),W=wc(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+Y+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||I==="")&&(V=!1);V&&(P.diagnostics={runnable:N,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:I,prefix:p}})}i.deleteShader(w),i.deleteShader(S),C=new ea(i,_),E=u0(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(_,n0)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=S,this}let b0=0;class E0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new A0(e),t.set(e,n)),n}}class A0{constructor(e){this.id=b0++,this.code=e,this.usedTimes=0}}function w0(r,e,t,n,i,s,a){const o=new Hh,c=new E0,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,A,P,k,F){const I=k.fog,N=F.geometry,V=E.isMeshStandardMaterial?k.environment:null,Y=(E.isMeshStandardMaterial?t:e).get(E.envMap||V),W=Y&&Y.mapping===pa?Y.image.height:null,Q=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ie=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ae=ie!==void 0?ie.length:0;let ve=0;N.morphAttributes.position!==void 0&&(ve=1),N.morphAttributes.normal!==void 0&&(ve=2),N.morphAttributes.color!==void 0&&(ve=3);let oe,G,J,de;if(Q){const Qe=yn[Q];oe=Qe.vertexShader,G=Qe.fragmentShader}else oe=E.vertexShader,G=E.fragmentShader,c.update(E),J=c.getVertexShaderID(E),de=c.getFragmentShaderID(E);const ue=r.getRenderTarget(),ye=F.isInstancedMesh===!0,Ae=F.isBatchedMesh===!0,we=!!E.map,Je=!!E.matcap,U=!!Y,lt=!!E.aoMap,Ye=!!E.lightMap,je=!!E.bumpMap,Ee=!!E.normalMap,ct=!!E.displacementMap,Pe=!!E.emissiveMap,Ie=!!E.metalnessMap,D=!!E.roughnessMap,R=E.anisotropy>0,$=E.clearcoat>0,ne=E.dispersion>0,se=E.iridescence>0,te=E.sheen>0,Ce=E.transmission>0,fe=R&&!!E.anisotropyMap,_e=$&&!!E.clearcoatMap,ze=$&&!!E.clearcoatNormalMap,ce=$&&!!E.clearcoatRoughnessMap,xe=se&&!!E.iridescenceMap,$e=se&&!!E.iridescenceThicknessMap,De=te&&!!E.sheenColorMap,Me=te&&!!E.sheenRoughnessMap,Ue=!!E.specularMap,ke=!!E.specularColorMap,ft=!!E.specularIntensityMap,T=Ce&&!!E.transmissionMap,X=Ce&&!!E.thicknessMap,q=!!E.gradientMap,Z=!!E.alphaMap,re=E.alphaTest>0,Te=!!E.alphaHash,Fe=!!E.extensions;let _t=fi;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(_t=r.toneMapping);const Mt={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:oe,fragmentShader:G,defines:E.defines,customVertexShaderID:J,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&F._colorsTexture!==null,instancing:ye,instancingColor:ye&&F.instanceColor!==null,instancingMorph:ye&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Dt,alphaToCoverage:!!E.alphaToCoverage,map:we,matcap:Je,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:W,aoMap:lt,lightMap:Ye,bumpMap:je,normalMap:Ee,displacementMap:d&&ct,emissiveMap:Pe,normalMapObjectSpace:Ee&&E.normalMapType===vd,normalMapTangentSpace:Ee&&E.normalMapType===Uh,metalnessMap:Ie,roughnessMap:D,anisotropy:R,anisotropyMap:fe,clearcoat:$,clearcoatMap:_e,clearcoatNormalMap:ze,clearcoatRoughnessMap:ce,dispersion:ne,iridescence:se,iridescenceMap:xe,iridescenceThicknessMap:$e,sheen:te,sheenColorMap:De,sheenRoughnessMap:Me,specularMap:Ue,specularColorMap:ke,specularIntensityMap:ft,transmission:Ce,transmissionMap:T,thicknessMap:X,gradientMap:q,opaque:E.transparent===!1&&E.blending===Xn&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:re,alphaHash:Te,combine:E.combine,mapUv:we&&_(E.map.channel),aoMapUv:lt&&_(E.aoMap.channel),lightMapUv:Ye&&_(E.lightMap.channel),bumpMapUv:je&&_(E.bumpMap.channel),normalMapUv:Ee&&_(E.normalMap.channel),displacementMapUv:ct&&_(E.displacementMap.channel),emissiveMapUv:Pe&&_(E.emissiveMap.channel),metalnessMapUv:Ie&&_(E.metalnessMap.channel),roughnessMapUv:D&&_(E.roughnessMap.channel),anisotropyMapUv:fe&&_(E.anisotropyMap.channel),clearcoatMapUv:_e&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ze&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(E.sheenRoughnessMap.channel),specularMapUv:Ue&&_(E.specularMap.channel),specularColorMapUv:ke&&_(E.specularColorMap.channel),specularIntensityMapUv:ft&&_(E.specularIntensityMap.channel),transmissionMapUv:T&&_(E.transmissionMap.channel),thicknessMapUv:X&&_(E.thicknessMap.channel),alphaMapUv:Z&&_(E.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ee||R),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(we||Z),fog:!!I,useFog:E.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:_t,decodeVideoTexture:we&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ln,flipSided:E.side===qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function p(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)A.push(P),A.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(M(A,E),x(A,E),A.push(r.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function M(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function x(E,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),A.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.doubleSided&&o.enable(10),A.flipSided&&o.enable(11),A.useDepthPacking&&o.enable(12),A.dithering&&o.enable(13),A.transmission&&o.enable(14),A.sheen&&o.enable(15),A.opaque&&o.enable(16),A.pointsUvs&&o.enable(17),A.decodeVideoTexture&&o.enable(18),A.alphaToCoverage&&o.enable(19),E.push(o.mask)}function v(E){const A=g[E.type];let P;if(A){const k=yn[A];P=cf.clone(k.uniforms)}else P=E.uniforms;return P}function w(E,A){let P;for(let k=0,F=h.length;k<F;k++){const I=h[k];if(I.cacheKey===A){P=I,++P.usedTimes;break}}return P===void 0&&(P=new S0(r,A,E,s),h.push(P)),P}function S(E){if(--E.usedTimes===0){const A=h.indexOf(E);h[A]=h[h.length-1],h.pop(),E.destroy()}}function b(E){c.remove(E)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:S,releaseShaderCache:b,programs:h,dispose:C}}function T0(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function R0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Lc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ic(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||R0),n.length>1&&n.sort(d||Lc),i.length>1&&i.sort(d||Lc)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function C0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ic,r.set(n,[a])):i>=s.length?(a=new Ic,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function P0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ve};break;case"SpotLight":t={position:new O,direction:new O,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function L0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let I0=0;function D0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function N0(r){const e=new P0,t=L0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const i=new O,s=new Xe,a=new Xe;function o(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,x=0,v=0,w=0,S=0,b=0;l.sort(D0);for(let E=0,A=l.length;E<A;E++){const P=l[E],k=P.color,F=P.intensity,I=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*F,u+=k.g*F,d+=k.b*F;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],F);b++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,W=t.get(P);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=V,f++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(k).multiplyScalar(F),V.distance=I,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const Y=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,Y.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=N,v++}_++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(k).multiplyScalar(F),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const Y=P.shadow,W=t.get(P);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(F),V.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==w||C.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+w-S,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=b,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=w,C.numLightProbes=b,n.version=I0++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Dc(r){const e=new N0(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function U0(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Dc(r),e.set(i,[o])):s>=a.length?(o=new Dc(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class F0 extends en{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O0 extends en{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
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
}`;function V0(r,e,t){let n=new gl;const i=new Be,s=new Be,a=new ot,o=new F0({depthPacking:xd}),c=new O0,l={},h=t.maxTextureSize,u={[qn]:qt,[qt]:qn,[ln]:ln},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:B0,fragmentShader:k0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new It(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let p=this.type;this.render=function(S,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const E=r.getRenderTarget(),A=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),k=r.state;k.setBlending(di),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=p!==kn&&this.type===kn,I=p===kn&&this.type!==kn;for(let N=0,V=S.length;N<V;N++){const Y=S[N],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const Q=W.getFrameExtents();if(i.multiply(Q),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Q.x),i.x=s.x*Q.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Q.y),i.y=s.y*Q.y,W.mapSize.y=s.y)),W.map===null||F===!0||I===!0){const ae=this.type!==kn?{minFilter:Ft,magFilter:Ft}:{};W.map!==null&&W.map.dispose(),W.map=new Ni(i.x,i.y,ae),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const ie=W.getViewportCount();for(let ae=0;ae<ie;ae++){const ve=W.getViewport(ae);a.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),k.viewport(a),W.updateMatrices(Y,ae),n=W.getFrustum(),v(b,C,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===kn&&M(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(E,A,P)};function M(S,b){const C=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ni(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(b,null,C,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(b,null,C,f,_,null)}function x(S,b,C,E){let A=null;const P=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)A=P;else if(A=C.isPointLight===!0?c:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=A.uuid,F=b.uuid;let I=l[k];I===void 0&&(I={},l[k]=I);let N=I[F];N===void 0&&(N=A.clone(),I[F]=N,b.addEventListener("dispose",w)),A=N}if(A.visible=b.visible,A.wireframe=b.wireframe,E===kn?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:u[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,C.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const k=r.properties.get(A);k.light=C}return A}function v(S,b,C,E,A){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===kn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const F=e.update(S),I=S.material;if(Array.isArray(I)){const N=F.groups;for(let V=0,Y=N.length;V<Y;V++){const W=N[V],Q=I[W.materialIndex];if(Q&&Q.visible){const ie=x(S,Q,E,A);S.onBeforeShadow(r,S,b,C,F,ie,W),r.renderBufferDirect(C,null,F,ie,S,W),S.onAfterShadow(r,S,b,C,F,ie,W)}}}else if(I.visible){const N=x(S,I,E,A);S.onBeforeShadow(r,S,b,C,F,N,null),r.renderBufferDirect(C,null,F,N,S,null),S.onAfterShadow(r,S,b,C,F,N,null)}}const k=S.children;for(let F=0,I=k.length;F<I;F++)v(k[F],b,C,E,A)}function w(S){S.target.removeEventListener("dispose",w);for(const C in l){const E=l[C],A=S.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function z0(r){function e(){let T=!1;const X=new ot;let q=null;const Z=new ot(0,0,0,0);return{setMask:function(re){q!==re&&!T&&(r.colorMask(re,re,re,re),q=re)},setLocked:function(re){T=re},setClear:function(re,Te,Fe,_t,Mt){Mt===!0&&(re*=_t,Te*=_t,Fe*=_t),X.set(re,Te,Fe,_t),Z.equals(X)===!1&&(r.clearColor(re,Te,Fe,_t),Z.copy(X))},reset:function(){T=!1,q=null,Z.set(-1,0,0,0)}}}function t(){let T=!1,X=null,q=null,Z=null;return{setTest:function(re){re?de(r.DEPTH_TEST):ue(r.DEPTH_TEST)},setMask:function(re){X!==re&&!T&&(r.depthMask(re),X=re)},setFunc:function(re){if(q!==re){switch(re){case $u:r.depthFunc(r.NEVER);break;case ju:r.depthFunc(r.ALWAYS);break;case Ku:r.depthFunc(r.LESS);break;case ta:r.depthFunc(r.LEQUAL);break;case Zu:r.depthFunc(r.EQUAL);break;case Ju:r.depthFunc(r.GEQUAL);break;case Qu:r.depthFunc(r.GREATER);break;case ed:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}q=re}},setLocked:function(re){T=re},setClear:function(re){Z!==re&&(r.clearDepth(re),Z=re)},reset:function(){T=!1,X=null,q=null,Z=null}}}function n(){let T=!1,X=null,q=null,Z=null,re=null,Te=null,Fe=null,_t=null,Mt=null;return{setTest:function(Qe){T||(Qe?de(r.STENCIL_TEST):ue(r.STENCIL_TEST))},setMask:function(Qe){X!==Qe&&!T&&(r.stencilMask(Qe),X=Qe)},setFunc:function(Qe,St,xt){(q!==Qe||Z!==St||re!==xt)&&(r.stencilFunc(Qe,St,xt),q=Qe,Z=St,re=xt)},setOp:function(Qe,St,xt){(Te!==Qe||Fe!==St||_t!==xt)&&(r.stencilOp(Qe,St,xt),Te=Qe,Fe=St,_t=xt)},setLocked:function(Qe){T=Qe},setClear:function(Qe){Mt!==Qe&&(r.clearStencil(Qe),Mt=Qe)},reset:function(){T=!1,X=null,q=null,Z=null,re=null,Te=null,Fe=null,_t=null,Mt=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,M=null,x=null,v=null,w=null,S=new Ve(0,0,0),b=0,C=!1,E=null,A=null,P=null,k=null,F=null;const I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,V=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Y)[1]),N=V>=1):Y.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),N=V>=2);let W=null,Q={};const ie=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),ve=new ot().fromArray(ie),oe=new ot().fromArray(ae);function G(T,X,q,Z){const re=new Uint8Array(4),Te=r.createTexture();r.bindTexture(T,Te),r.texParameteri(T,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(T,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Fe=0;Fe<q;Fe++)T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY?r.texImage3D(X,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(X+Fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return Te}const J={};J[r.TEXTURE_2D]=G(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=G(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=G(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=G(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),de(r.DEPTH_TEST),s.setFunc(ta),je(!1),Ee(Fl),de(r.CULL_FACE),lt(di);function de(T){l[T]!==!0&&(r.enable(T),l[T]=!0)}function ue(T){l[T]!==!1&&(r.disable(T),l[T]=!1)}function ye(T,X){return h[T]!==X?(r.bindFramebuffer(T,X),h[T]=X,T===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=X),T===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=X),!0):!1}function Ae(T,X){let q=d,Z=!1;if(T){q=u.get(X),q===void 0&&(q=[],u.set(X,q));const re=T.textures;if(q.length!==re.length||q[0]!==r.COLOR_ATTACHMENT0){for(let Te=0,Fe=re.length;Te<Fe;Te++)q[Te]=r.COLOR_ATTACHMENT0+Te;q.length=re.length,Z=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,Z=!0);Z&&r.drawBuffers(q)}function we(T){return f!==T?(r.useProgram(T),f=T,!0):!1}const Je={[Ai]:r.FUNC_ADD,[Nu]:r.FUNC_SUBTRACT,[Uu]:r.FUNC_REVERSE_SUBTRACT};Je[Fu]=r.MIN,Je[Ou]=r.MAX;const U={[Bu]:r.ZERO,[Yr]:r.ONE,[ku]:r.SRC_COLOR,[fo]:r.SRC_ALPHA,[Gu]:r.SRC_ALPHA_SATURATE,[Mh]:r.DST_COLOR,[Vu]:r.DST_ALPHA,[uo]:r.ONE_MINUS_SRC_COLOR,[Qs]:r.ONE_MINUS_SRC_ALPHA,[Hu]:r.ONE_MINUS_DST_COLOR,[zu]:r.ONE_MINUS_DST_ALPHA,[Wu]:r.CONSTANT_COLOR,[Xu]:r.ONE_MINUS_CONSTANT_COLOR,[Yu]:r.CONSTANT_ALPHA,[qu]:r.ONE_MINUS_CONSTANT_ALPHA};function lt(T,X,q,Z,re,Te,Fe,_t,Mt,Qe){if(T===di){g===!0&&(ue(r.BLEND),g=!1);return}if(g===!1&&(de(r.BLEND),g=!0),T!==ho){if(T!==_||Qe!==C){if((m!==Ai||x!==Ai)&&(r.blendEquation(r.FUNC_ADD),m=Ai,x=Ai),Qe)switch(T){case Xn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case co:r.blendFunc(r.ONE,r.ONE);break;case Ol:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Xn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case co:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ol:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}p=null,M=null,v=null,w=null,S.set(0,0,0),b=0,_=T,C=Qe}return}re=re||X,Te=Te||q,Fe=Fe||Z,(X!==m||re!==x)&&(r.blendEquationSeparate(Je[X],Je[re]),m=X,x=re),(q!==p||Z!==M||Te!==v||Fe!==w)&&(r.blendFuncSeparate(U[q],U[Z],U[Te],U[Fe]),p=q,M=Z,v=Te,w=Fe),(_t.equals(S)===!1||Mt!==b)&&(r.blendColor(_t.r,_t.g,_t.b,Mt),S.copy(_t),b=Mt),_=T,C=!1}function Ye(T,X){T.side===ln?ue(r.CULL_FACE):de(r.CULL_FACE);let q=T.side===qt;X&&(q=!q),je(q),T.blending===Xn&&T.transparent===!1?lt(di):lt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),i.setMask(T.colorWrite);const Z=T.stencilWrite;a.setTest(Z),Z&&(a.setMask(T.stencilWriteMask),a.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),a.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Pe(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function je(T){E!==T&&(T?r.frontFace(r.CW):r.frontFace(r.CCW),E=T)}function Ee(T){T!==Lu?(de(r.CULL_FACE),T!==A&&(T===Fl?r.cullFace(r.BACK):T===Iu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ue(r.CULL_FACE),A=T}function ct(T){T!==P&&(N&&r.lineWidth(T),P=T)}function Pe(T,X,q){T?(de(r.POLYGON_OFFSET_FILL),(k!==X||F!==q)&&(r.polygonOffset(X,q),k=X,F=q)):ue(r.POLYGON_OFFSET_FILL)}function Ie(T){T?de(r.SCISSOR_TEST):ue(r.SCISSOR_TEST)}function D(T){T===void 0&&(T=r.TEXTURE0+I-1),W!==T&&(r.activeTexture(T),W=T)}function R(T,X,q){q===void 0&&(W===null?q=r.TEXTURE0+I-1:q=W);let Z=Q[q];Z===void 0&&(Z={type:void 0,texture:void 0},Q[q]=Z),(Z.type!==T||Z.texture!==X)&&(W!==q&&(r.activeTexture(q),W=q),r.bindTexture(T,X||J[T]),Z.type=T,Z.texture=X)}function $(){const T=Q[W];T!==void 0&&T.type!==void 0&&(r.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function ne(){try{r.compressedTexImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ce(){try{r.texSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function fe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function _e(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ze(){try{r.texStorage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ce(){try{r.texStorage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function xe(){try{r.texImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function $e(){try{r.texImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function De(T){ve.equals(T)===!1&&(r.scissor(T.x,T.y,T.z,T.w),ve.copy(T))}function Me(T){oe.equals(T)===!1&&(r.viewport(T.x,T.y,T.z,T.w),oe.copy(T))}function Ue(T,X){let q=c.get(X);q===void 0&&(q=new WeakMap,c.set(X,q));let Z=q.get(T);Z===void 0&&(Z=r.getUniformBlockIndex(X,T.name),q.set(T,Z))}function ke(T,X){const Z=c.get(X).get(T);o.get(X)!==Z&&(r.uniformBlockBinding(X,Z,T.__bindingPointIndex),o.set(X,Z))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},W=null,Q={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,M=null,x=null,v=null,w=null,S=new Ve(0,0,0),b=0,C=!1,E=null,A=null,P=null,k=null,F=null,ve.set(0,0,r.canvas.width,r.canvas.height),oe.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:de,disable:ue,bindFramebuffer:ye,drawBuffers:Ae,useProgram:we,setBlending:lt,setMaterial:Ye,setFlipSided:je,setCullFace:Ee,setLineWidth:ct,setPolygonOffset:Pe,setScissorTest:Ie,activeTexture:D,bindTexture:R,unbindTexture:$,compressedTexImage2D:ne,compressedTexImage3D:se,texImage2D:xe,texImage3D:$e,updateUBOMapping:Ue,uniformBlockBinding:ke,texStorage2D:ze,texStorage3D:ce,texSubImage2D:te,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:De,viewport:Me,reset:ft}}function Nc(r,e,t,n){const i=H0(n);switch(t){case Rh:return r*e;case Ph:return r*e;case Lh:return r*e*2;case hl:return r*e/i.components*i.byteLength;case ul:return r*e/i.components*i.byteLength;case Ih:return r*e*2/i.components*i.byteLength;case dl:return r*e*2/i.components*i.byteLength;case Ch:return r*e*3/i.components*i.byteLength;case cn:return r*e*4/i.components*i.byteLength;case fl:return r*e*4/i.components*i.byteLength;case $r:case jr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Kr:case Zr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _o:case vo:return Math.max(r,16)*Math.max(e,8)/4;case go:case xo:return Math.max(r,8)*Math.max(e,8)/2;case yo:case Mo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case So:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case wo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case To:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Co:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Po:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Io:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Do:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case No:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Jr:case Oo:case Bo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Dh:case ko:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Vo:case zo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function H0(r){switch(r){case $n:case Ah:return{byteLength:1,components:1};case tr:case wh:case lr:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case Di:case ol:case gn:return{byteLength:4,components:1};case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function G0(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,R){return f?new OffscreenCanvas(D,R):sr("canvas")}function _(D,R,$){let ne=1;const se=Ie(D);if((se.width>$||se.height>$)&&(ne=$/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const te=Math.floor(ne*se.width),Ce=Math.floor(ne*se.height);u===void 0&&(u=g(te,Ce));const fe=R?g(te,Ce):u;return fe.width=te,fe.height=Ce,fe.getContext("2d").drawImage(D,0,0,te,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+te+"x"+Ce+")."),fe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==Ft&&D.minFilter!==Yt}function p(D){r.generateMipmap(D)}function M(D,R,$,ne,se=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let te=R;if(R===r.RED&&($===r.FLOAT&&(te=r.R32F),$===r.HALF_FLOAT&&(te=r.R16F),$===r.UNSIGNED_BYTE&&(te=r.R8)),R===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(te=r.R8UI),$===r.UNSIGNED_SHORT&&(te=r.R16UI),$===r.UNSIGNED_INT&&(te=r.R32UI),$===r.BYTE&&(te=r.R8I),$===r.SHORT&&(te=r.R16I),$===r.INT&&(te=r.R32I)),R===r.RG&&($===r.FLOAT&&(te=r.RG32F),$===r.HALF_FLOAT&&(te=r.RG16F),$===r.UNSIGNED_BYTE&&(te=r.RG8)),R===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(te=r.RG8UI),$===r.UNSIGNED_SHORT&&(te=r.RG16UI),$===r.UNSIGNED_INT&&(te=r.RG32UI),$===r.BYTE&&(te=r.RG8I),$===r.SHORT&&(te=r.RG16I),$===r.INT&&(te=r.RG32I)),R===r.RGB&&$===r.UNSIGNED_INT_5_9_9_9_REV&&(te=r.RGB9_E5),R===r.RGBA){const Ce=se?na:tt.getTransfer(ne);$===r.FLOAT&&(te=r.RGBA32F),$===r.HALF_FLOAT&&(te=r.RGBA16F),$===r.UNSIGNED_BYTE&&(te=Ce===ht?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(D,R){let $;return D?R===null||R===Di||R===ys?$=r.DEPTH24_STENCIL8:R===gn?$=r.DEPTH32F_STENCIL8:R===tr&&($=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Di||R===ys?$=r.DEPTH_COMPONENT24:R===gn?$=r.DEPTH_COMPONENT32F:R===tr&&($=r.DEPTH_COMPONENT16),$}function v(D,R){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ft&&D.minFilter!==Yt?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function w(D){const R=D.target;R.removeEventListener("dispose",w),b(R),R.isVideoTexture&&h.delete(R)}function S(D){const R=D.target;R.removeEventListener("dispose",S),E(R)}function b(D){const R=n.get(D);if(R.__webglInit===void 0)return;const $=D.source,ne=d.get($);if(ne){const se=ne[R.__cacheKey];se.usedTimes--,se.usedTimes===0&&C(D),Object.keys(ne).length===0&&d.delete($)}n.remove(D)}function C(D){const R=n.get(D);r.deleteTexture(R.__webglTexture);const $=D.source,ne=d.get($);delete ne[R.__cacheKey],a.memory.textures--}function E(D){const R=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(R.__webglFramebuffer[ne]))for(let se=0;se<R.__webglFramebuffer[ne].length;se++)r.deleteFramebuffer(R.__webglFramebuffer[ne][se]);else r.deleteFramebuffer(R.__webglFramebuffer[ne]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[ne])}else{if(Array.isArray(R.__webglFramebuffer))for(let ne=0;ne<R.__webglFramebuffer.length;ne++)r.deleteFramebuffer(R.__webglFramebuffer[ne]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ne=0;ne<R.__webglColorRenderbuffer.length;ne++)R.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[ne]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const $=D.textures;for(let ne=0,se=$.length;ne<se;ne++){const te=n.get($[ne]);te.__webglTexture&&(r.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove($[ne])}n.remove(D)}let A=0;function P(){A=0}function k(){const D=A;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),A+=1,D}function F(D){const R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function I(D,R){const $=n.get(D);if(D.isVideoTexture&&ct(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const ne=D.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe($,D,R);return}}t.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+R)}function N(D,R){const $=n.get(D);if(D.version>0&&$.__version!==D.version){oe($,D,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+R)}function V(D,R){const $=n.get(D);if(D.version>0&&$.__version!==D.version){oe($,D,R);return}t.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+R)}function Y(D,R){const $=n.get(D);if(D.version>0&&$.__version!==D.version){G($,D,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+R)}const W={[Ii]:r.REPEAT,[Hn]:r.CLAMP_TO_EDGE,[er]:r.MIRRORED_REPEAT},Q={[Ft]:r.NEAREST,[Eh]:r.NEAREST_MIPMAP_NEAREST,[Ys]:r.NEAREST_MIPMAP_LINEAR,[Yt]:r.LINEAR,[qr]:r.LINEAR_MIPMAP_NEAREST,[Gn]:r.LINEAR_MIPMAP_LINEAR},ie={[yd]:r.NEVER,[wd]:r.ALWAYS,[Md]:r.LESS,[Fh]:r.LEQUAL,[Sd]:r.EQUAL,[Ad]:r.GEQUAL,[bd]:r.GREATER,[Ed]:r.NOTEQUAL};function ae(D,R){if(R.type===gn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Yt||R.magFilter===qr||R.magFilter===Ys||R.magFilter===Gn||R.minFilter===Yt||R.minFilter===qr||R.minFilter===Ys||R.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,W[R.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,W[R.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,W[R.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,Q[R.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,Q[R.minFilter]),R.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,ie[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ft||R.minFilter!==Ys&&R.minFilter!==Gn||R.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ve(D,R){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",w));const ne=R.source;let se=d.get(ne);se===void 0&&(se={},d.set(ne,se));const te=F(R);if(te!==D.__cacheKey){se[te]===void 0&&(se[te]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,$=!0),se[te].usedTimes++;const Ce=se[D.__cacheKey];Ce!==void 0&&(se[D.__cacheKey].usedTimes--,Ce.usedTimes===0&&C(R)),D.__cacheKey=te,D.__webglTexture=se[te].texture}return $}function oe(D,R,$){let ne=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ne=r.TEXTURE_3D);const se=ve(D,R),te=R.source;t.bindTexture(ne,D.__webglTexture,r.TEXTURE0+$);const Ce=n.get(te);if(te.version!==Ce.__version||se===!0){t.activeTexture(r.TEXTURE0+$);const fe=tt.getPrimaries(tt.workingColorSpace),_e=R.colorSpace===li?null:tt.getPrimaries(R.colorSpace),ze=R.colorSpace===li||fe===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ce=_(R.image,!1,i.maxTextureSize);ce=Pe(R,ce);const xe=s.convert(R.format,R.colorSpace),$e=s.convert(R.type);let De=M(R.internalFormat,xe,$e,R.colorSpace,R.isVideoTexture);ae(ne,R);let Me;const Ue=R.mipmaps,ke=R.isVideoTexture!==!0,ft=Ce.__version===void 0||se===!0,T=te.dataReady,X=v(R,ce);if(R.isDepthTexture)De=x(R.format===Ms,R.type),ft&&(ke?t.texStorage2D(r.TEXTURE_2D,1,De,ce.width,ce.height):t.texImage2D(r.TEXTURE_2D,0,De,ce.width,ce.height,0,xe,$e,null));else if(R.isDataTexture)if(Ue.length>0){ke&&ft&&t.texStorage2D(r.TEXTURE_2D,X,De,Ue[0].width,Ue[0].height);for(let q=0,Z=Ue.length;q<Z;q++)Me=Ue[q],ke?T&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Me.width,Me.height,xe,$e,Me.data):t.texImage2D(r.TEXTURE_2D,q,De,Me.width,Me.height,0,xe,$e,Me.data);R.generateMipmaps=!1}else ke?(ft&&t.texStorage2D(r.TEXTURE_2D,X,De,ce.width,ce.height),T&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ce.width,ce.height,xe,$e,ce.data)):t.texImage2D(r.TEXTURE_2D,0,De,ce.width,ce.height,0,xe,$e,ce.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ke&&ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,X,De,Ue[0].width,Ue[0].height,ce.depth);for(let q=0,Z=Ue.length;q<Z;q++)if(Me=Ue[q],R.format!==cn)if(xe!==null)if(ke){if(T)if(R.layerUpdates.size>0){const re=Nc(Me.width,Me.height,R.format,R.type);for(const Te of R.layerUpdates){const Fe=Me.data.subarray(Te*re/Me.data.BYTES_PER_ELEMENT,(Te+1)*re/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,Te,Me.width,Me.height,1,xe,Fe,0,0)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,ce.depth,xe,Me.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,De,Me.width,Me.height,ce.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?T&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,ce.depth,xe,$e,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,De,Me.width,Me.height,ce.depth,0,xe,$e,Me.data)}else{ke&&ft&&t.texStorage2D(r.TEXTURE_2D,X,De,Ue[0].width,Ue[0].height);for(let q=0,Z=Ue.length;q<Z;q++)Me=Ue[q],R.format!==cn?xe!==null?ke?T&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,Me.width,Me.height,xe,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,q,De,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?T&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Me.width,Me.height,xe,$e,Me.data):t.texImage2D(r.TEXTURE_2D,q,De,Me.width,Me.height,0,xe,$e,Me.data)}else if(R.isDataArrayTexture)if(ke){if(ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,X,De,ce.width,ce.height,ce.depth),T)if(R.layerUpdates.size>0){const q=Nc(ce.width,ce.height,R.format,R.type);for(const Z of R.layerUpdates){const re=ce.data.subarray(Z*q/ce.data.BYTES_PER_ELEMENT,(Z+1)*q/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ce.width,ce.height,1,xe,$e,re)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,xe,$e,ce.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,xe,$e,ce.data);else if(R.isData3DTexture)ke?(ft&&t.texStorage3D(r.TEXTURE_3D,X,De,ce.width,ce.height,ce.depth),T&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,xe,$e,ce.data)):t.texImage3D(r.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,xe,$e,ce.data);else if(R.isFramebufferTexture){if(ft)if(ke)t.texStorage2D(r.TEXTURE_2D,X,De,ce.width,ce.height);else{let q=ce.width,Z=ce.height;for(let re=0;re<X;re++)t.texImage2D(r.TEXTURE_2D,re,De,q,Z,0,xe,$e,null),q>>=1,Z>>=1}}else if(Ue.length>0){if(ke&&ft){const q=Ie(Ue[0]);t.texStorage2D(r.TEXTURE_2D,X,De,q.width,q.height)}for(let q=0,Z=Ue.length;q<Z;q++)Me=Ue[q],ke?T&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,xe,$e,Me):t.texImage2D(r.TEXTURE_2D,q,De,xe,$e,Me);R.generateMipmaps=!1}else if(ke){if(ft){const q=Ie(ce);t.texStorage2D(r.TEXTURE_2D,X,De,q.width,q.height)}T&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,$e,ce)}else t.texImage2D(r.TEXTURE_2D,0,De,xe,$e,ce);m(R)&&p(ne),Ce.__version=te.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function G(D,R,$){if(R.image.length!==6)return;const ne=ve(D,R),se=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+$);const te=n.get(se);if(se.version!==te.__version||ne===!0){t.activeTexture(r.TEXTURE0+$);const Ce=tt.getPrimaries(tt.workingColorSpace),fe=R.colorSpace===li?null:tt.getPrimaries(R.colorSpace),_e=R.colorSpace===li||Ce===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ze=R.isCompressedTexture||R.image[0].isCompressedTexture,ce=R.image[0]&&R.image[0].isDataTexture,xe=[];for(let Z=0;Z<6;Z++)!ze&&!ce?xe[Z]=_(R.image[Z],!0,i.maxCubemapSize):xe[Z]=ce?R.image[Z].image:R.image[Z],xe[Z]=Pe(R,xe[Z]);const $e=xe[0],De=s.convert(R.format,R.colorSpace),Me=s.convert(R.type),Ue=M(R.internalFormat,De,Me,R.colorSpace),ke=R.isVideoTexture!==!0,ft=te.__version===void 0||ne===!0,T=se.dataReady;let X=v(R,$e);ae(r.TEXTURE_CUBE_MAP,R);let q;if(ze){ke&&ft&&t.texStorage2D(r.TEXTURE_CUBE_MAP,X,Ue,$e.width,$e.height);for(let Z=0;Z<6;Z++){q=xe[Z].mipmaps;for(let re=0;re<q.length;re++){const Te=q[re];R.format!==cn?De!==null?ke?T&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,0,0,Te.width,Te.height,De,Te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,Ue,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,0,0,Te.width,Te.height,De,Me,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,Ue,Te.width,Te.height,0,De,Me,Te.data)}}}else{if(q=R.mipmaps,ke&&ft){q.length>0&&X++;const Z=Ie(xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,X,Ue,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ce){ke?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xe[Z].width,xe[Z].height,De,Me,xe[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,xe[Z].width,xe[Z].height,0,De,Me,xe[Z].data);for(let re=0;re<q.length;re++){const Fe=q[re].image[Z].image;ke?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,0,0,Fe.width,Fe.height,De,Me,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,Ue,Fe.width,Fe.height,0,De,Me,Fe.data)}}else{ke?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,Me,xe[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,De,Me,xe[Z]);for(let re=0;re<q.length;re++){const Te=q[re];ke?T&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,0,0,De,Me,Te.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,Ue,De,Me,Te.image[Z])}}}m(R)&&p(r.TEXTURE_CUBE_MAP),te.__version=se.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function J(D,R,$,ne,se,te){const Ce=s.convert($.format,$.colorSpace),fe=s.convert($.type),_e=M($.internalFormat,Ce,fe,$.colorSpace);if(!n.get(R).__hasExternalTextures){const ce=Math.max(1,R.width>>te),xe=Math.max(1,R.height>>te);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,te,_e,ce,xe,R.depth,0,Ce,fe,null):t.texImage2D(se,te,_e,ce,xe,0,Ce,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),Ee(R)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,se,n.get($).__webglTexture,0,je(R)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,se,n.get($).__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function de(D,R,$){if(r.bindRenderbuffer(r.RENDERBUFFER,D),R.depthBuffer){const ne=R.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,te=x(R.stencilBuffer,se),Ce=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=je(R);Ee(R)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,te,R.width,R.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,te,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,te,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ce,r.RENDERBUFFER,D)}else{const ne=R.textures;for(let se=0;se<ne.length;se++){const te=ne[se],Ce=s.convert(te.format,te.colorSpace),fe=s.convert(te.type),_e=M(te.internalFormat,Ce,fe,te.colorSpace),ze=je(R);$&&Ee(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,_e,R.width,R.height):Ee(R)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ze,_e,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,_e,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ue(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),I(R.depthTexture,0);const ne=n.get(R.depthTexture).__webglTexture,se=je(R);if(R.depthTexture.format===us)Ee(R)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(R.depthTexture.format===Ms)Ee(R)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ye(D){const R=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");ue(R.__webglFramebuffer,D)}else if($){R.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[ne]),R.__webglDepthbuffer[ne]=r.createRenderbuffer(),de(R.__webglDepthbuffer[ne],D,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=r.createRenderbuffer(),de(R.__webglDepthbuffer,D,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(D,R,$){const ne=n.get(D);R!==void 0&&J(ne.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&ye(D)}function we(D){const R=D.texture,$=n.get(D),ne=n.get(R);D.addEventListener("dispose",S);const se=D.textures,te=D.isWebGLCubeRenderTarget===!0,Ce=se.length>1;if(Ce||(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=R.version,a.memory.textures++),te){$.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer[fe]=[];for(let _e=0;_e<R.mipmaps.length;_e++)$.__webglFramebuffer[fe][_e]=r.createFramebuffer()}else $.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer=[];for(let fe=0;fe<R.mipmaps.length;fe++)$.__webglFramebuffer[fe]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Ce)for(let fe=0,_e=se.length;fe<_e;fe++){const ze=n.get(se[fe]);ze.__webglTexture===void 0&&(ze.__webglTexture=r.createTexture(),a.memory.textures++)}if(D.samples>0&&Ee(D)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){const _e=se[fe];$.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[fe]);const ze=s.convert(_e.format,_e.colorSpace),ce=s.convert(_e.type),xe=M(_e.internalFormat,ze,ce,_e.colorSpace,D.isXRRenderTarget===!0),$e=je(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,xe,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,$.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),de($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),ae(r.TEXTURE_CUBE_MAP,R);for(let fe=0;fe<6;fe++)if(R.mipmaps&&R.mipmaps.length>0)for(let _e=0;_e<R.mipmaps.length;_e++)J($.__webglFramebuffer[fe][_e],D,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else J($.__webglFramebuffer[fe],D,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(R)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,_e=se.length;fe<_e;fe++){const ze=se[fe],ce=n.get(ze);t.bindTexture(r.TEXTURE_2D,ce.__webglTexture),ae(r.TEXTURE_2D,ze),J($.__webglFramebuffer,D,ze,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,0),m(ze)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,ne.__webglTexture),ae(fe,R),R.mipmaps&&R.mipmaps.length>0)for(let _e=0;_e<R.mipmaps.length;_e++)J($.__webglFramebuffer[_e],D,R,r.COLOR_ATTACHMENT0,fe,_e);else J($.__webglFramebuffer,D,R,r.COLOR_ATTACHMENT0,fe,0);m(R)&&p(fe),t.unbindTexture()}D.depthBuffer&&ye(D)}function Je(D){const R=D.textures;for(let $=0,ne=R.length;$<ne;$++){const se=R[$];if(m(se)){const te=D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ce=n.get(se).__webglTexture;t.bindTexture(te,Ce),p(te),t.unbindTexture()}}}const U=[],lt=[];function Ye(D){if(D.samples>0){if(Ee(D)===!1){const R=D.textures,$=D.width,ne=D.height;let se=r.COLOR_BUFFER_BIT;const te=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=n.get(D),fe=R.length>1;if(fe)for(let _e=0;_e<R.length;_e++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let _e=0;_e<R.length;_e++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const ze=n.get(R[_e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ze,0)}r.blitFramebuffer(0,0,$,ne,0,0,$,ne,se,r.NEAREST),c===!0&&(U.length=0,lt.length=0,U.push(r.COLOR_ATTACHMENT0+_e),D.depthBuffer&&D.resolveDepthBuffer===!1&&(U.push(te),lt.push(te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,lt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<R.length;_e++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const ze=n.get(R[_e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const R=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function je(D){return Math.min(i.maxSamples,D.samples)}function Ee(D){const R=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ct(D){const R=a.render.frame;h.get(D)!==R&&(h.set(D,R),D.update())}function Pe(D,R){const $=D.colorSpace,ne=D.format,se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Dt&&$!==li&&(tt.getTransfer($)===ht?(ne!==cn||se!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),R}function Ie(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=P,this.setTexture2D=I,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=Ae,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ee}function W0(r,e){function t(n,i=li){let s;const a=tt.getTransfer(i);if(n===$n)return r.UNSIGNED_BYTE;if(n===ll)return r.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ah)return r.BYTE;if(n===wh)return r.SHORT;if(n===tr)return r.UNSIGNED_SHORT;if(n===ol)return r.INT;if(n===Di)return r.UNSIGNED_INT;if(n===gn)return r.FLOAT;if(n===lr)return r.HALF_FLOAT;if(n===Rh)return r.ALPHA;if(n===Ch)return r.RGB;if(n===cn)return r.RGBA;if(n===Ph)return r.LUMINANCE;if(n===Lh)return r.LUMINANCE_ALPHA;if(n===us)return r.DEPTH_COMPONENT;if(n===Ms)return r.DEPTH_STENCIL;if(n===hl)return r.RED;if(n===ul)return r.RED_INTEGER;if(n===Ih)return r.RG;if(n===dl)return r.RG_INTEGER;if(n===fl)return r.RGBA_INTEGER;if(n===$r||n===jr||n===Kr||n===Zr)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===$r)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===$r)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===_o||n===xo||n===vo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===go)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_o)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===Mo||n===So)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yo||n===Mo)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===So)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bo||n===Eo||n===Ao||n===wo||n===To||n===Ro||n===Co||n===Po||n===Lo||n===Io||n===Do||n===No||n===Uo||n===Fo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===bo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===To)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ro)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Co)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Po)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Io)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Do)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jr||n===Oo||n===Bo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Jr)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dh||n===ko||n===Vo||n===zo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Jr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ko)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class X0 extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ci extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y0={type:"move"};class ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Y0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ci;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$0=`
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

}`;class j0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ot,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jn({vertexShader:q0,fragmentShader:$0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new hr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K0 extends Fi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new j0,m=t.getContextAttributes();let p=null,M=null;const x=[],v=[],w=new Be;let S=null;const b=new Ht;b.layers.enable(1),b.viewport=new ot;const C=new Ht;C.layers.enable(2),C.viewport=new ot;const E=[b,C],A=new X0;A.layers.enable(1),A.layers.enable(2);let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=x[G];return J===void 0&&(J=new ja,x[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=x[G];return J===void 0&&(J=new ja,x[G]=J),J.getGripSpace()},this.getHand=function(G){let J=x[G];return J===void 0&&(J=new ja,x[G]=J),J.getHandSpace()};function F(G){const J=v.indexOf(G.inputSource);if(J===-1)return;const de=x[J];de!==void 0&&(de.update(G.inputSource,G.frame,l||a),de.dispatchEvent({type:G.type,data:G.inputSource}))}function I(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",N);for(let G=0;G<x.length;G++){const J=v[G];J!==null&&(v[G]=null,x[G].disconnect(J))}P=null,k=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",I),i.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ni(f.framebufferWidth,f.framebufferHeight,{format:cn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,de=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?Ms:us,de=m.stencil?ys:Di);const ye={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Ni(d.textureWidth,d.textureHeight,{format:cn,type:$n,depthTexture:new Kh(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),oe.setContext(i),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function N(G){for(let J=0;J<G.removed.length;J++){const de=G.removed[J],ue=v.indexOf(de);ue>=0&&(v[ue]=null,x[ue].disconnect(de))}for(let J=0;J<G.added.length;J++){const de=G.added[J];let ue=v.indexOf(de);if(ue===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=v.length){v.push(de),ue=Ae;break}else if(v[Ae]===null){v[Ae]=de,ue=Ae;break}if(ue===-1)break}const ye=x[ue];ye&&ye.connect(de)}}const V=new O,Y=new O;function W(G,J,de){V.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);const ue=V.distanceTo(Y),ye=J.projectionMatrix.elements,Ae=de.projectionMatrix.elements,we=ye[14]/(ye[10]-1),Je=ye[14]/(ye[10]+1),U=(ye[9]+1)/ye[5],lt=(ye[9]-1)/ye[5],Ye=(ye[8]-1)/ye[0],je=(Ae[8]+1)/Ae[0],Ee=we*Ye,ct=we*je,Pe=ue/(-Ye+je),Ie=Pe*-Ye;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ie),G.translateZ(Pe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const D=we+Pe,R=Je+Pe,$=Ee-Ie,ne=ct+(ue-Ie),se=U*Je/R*D,te=lt*Je/R*D;G.projectionMatrix.makePerspective($,ne,se,te,D,R),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Q(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;_.texture!==null&&(G.near=_.depthNear,G.far=_.depthFar),A.near=C.near=b.near=G.near,A.far=C.far=b.far=G.far,(P!==A.near||k!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,k=A.far,b.near=P,b.far=k,C.near=P,C.far=k,b.updateProjectionMatrix(),C.updateProjectionMatrix(),G.updateProjectionMatrix());const J=G.parent,de=A.cameras;Q(A,J);for(let ue=0;ue<de.length;ue++)Q(de[ue],J);de.length===2?W(A,b,C):A.projectionMatrix.copy(b.projectionMatrix),ie(G,A,J)};function ie(G,J,de){de===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ss*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)};let ae=null;function ve(G,J){if(h=J.getViewerPose(l||a),g=J,h!==null){const de=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ue=!1;de.length!==A.cameras.length&&(A.cameras.length=0,ue=!0);for(let Ae=0;Ae<de.length;Ae++){const we=de[Ae];let Je=null;if(f!==null)Je=f.getViewport(we);else{const lt=u.getViewSubImage(d,we);Je=lt.viewport,Ae===0&&(e.setRenderTargetTextures(M,lt.colorTexture,d.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(M))}let U=E[Ae];U===void 0&&(U=new Ht,U.layers.enable(Ae),U.viewport=new ot,E[Ae]=U),U.matrix.fromArray(we.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(we.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Je.x,Je.y,Je.width,Je.height),Ae===0&&(A.matrix.copy(U.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ue===!0&&A.cameras.push(U)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const Ae=u.getDepthInformation(de[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,i.renderState)}}for(let de=0;de<x.length;de++){const ue=v[de],ye=x[de];ue!==null&&ye!==void 0&&ye.update(ue,J,l||a)}ae&&ae(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const oe=new jh;oe.setAnimationLoop(ve),this.setAnimationLoop=function(G){ae=G},this.dispose=function(){}}}const Si=new An,Z0=new Xe;function J0(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,Si.copy(v),Si.x*=-1,Si.y*=-1,Si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(Si)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Q0(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function l(M,x){let v=i[M.id];v===void 0&&(g(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",m));const w=x.program;n.updateUBOMapping(M,w);const S=e.render.frame;s[M.id]!==S&&(d(M),s[M.id]=S)}function h(M){const x=u();M.__bindingPointIndex=x;const v=r.createBuffer(),w=M.__size,S=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,w,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=i[M.id],v=M.uniforms,w=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let S=0,b=v.length;S<b;S++){const C=Array.isArray(v[S])?v[S]:[v[S]];for(let E=0,A=C.length;E<A;E++){const P=C[E];if(f(P,S,E,w)===!0){const k=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let I=0;for(let N=0;N<F.length;N++){const V=F[N],Y=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,k+I,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,x,v,w){const S=M.value,b=x+"_"+v;if(w[b]===void 0)return typeof S=="number"||typeof S=="boolean"?w[b]=S:w[b]=S.clone(),!0;{const C=w[b];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return w[b]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(M){const x=M.uniforms;let v=0;const w=16;for(let b=0,C=x.length;b<C;b++){const E=Array.isArray(x[b])?x[b]:[x[b]];for(let A=0,P=E.length;A<P;A++){const k=E[A],F=Array.isArray(k.value)?k.value:[k.value];for(let I=0,N=F.length;I<N;I++){const V=F[I],Y=_(V),W=v%w,Q=W%Y.boundary,ie=W+Q;v+=Q,ie!==0&&w-ie<Y.storage&&(v+=w-ie),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=Y.storage}}}const S=v%w;return S>0&&(v+=w-S),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}class e_{constructor(e={}){const{canvas:t=Gd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=fi,this.toneMappingExposure=1;const x=this;let v=!1,w=0,S=0,b=null,C=-1,E=null;const A=new ot,P=new ot;let k=null;const F=new Ve(0);let I=0,N=t.width,V=t.height,Y=1,W=null,Q=null;const ie=new ot(0,0,N,V),ae=new ot(0,0,N,V);let ve=!1;const oe=new gl;let G=!1,J=!1;const de=new Xe,ue=new O,ye=new ot,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function Je(){return b===null?Y:1}let U=n;function lt(L,z){return t.getContext(L,z)}try{const L={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${al}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",re,!1),U===null){const z="webgl2";if(U=lt(z,L),U===null)throw lt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Ye,je,Ee,ct,Pe,Ie,D,R,$,ne,se,te,Ce,fe,_e,ze,ce,xe,$e,De,Me,Ue,ke,ft;function T(){Ye=new ag(U),Ye.init(),Ue=new W0(U,Ye),je=new eg(U,Ye,e,Ue),Ee=new z0(U),ct=new cg(U),Pe=new T0,Ie=new G0(U,Ye,Ee,Pe,je,Ue,ct),D=new ng(x),R=new rg(x),$=new gf(U),ke=new Jm(U,$),ne=new og(U,$,ct,ke),se=new ug(U,ne,$,ct),$e=new hg(U,je,Ie),ze=new tg(Pe),te=new w0(x,D,R,Ye,je,ke,ze),Ce=new J0(x,Pe),fe=new C0,_e=new U0(Ye),xe=new Zm(x,D,R,Ee,se,d,c),ce=new V0(x,se,je),ft=new Q0(U,ct,je,Ee),De=new Qm(U,Ye,ct),Me=new lg(U,Ye,ct),ct.programs=te.programs,x.capabilities=je,x.extensions=Ye,x.properties=Pe,x.renderLists=fe,x.shadowMap=ce,x.state=Ee,x.info=ct}T();const X=new K0(x,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const L=Ye.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ye.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(L){L!==void 0&&(Y=L,this.setSize(N,V,!1))},this.getSize=function(L){return L.set(N,V)},this.setSize=function(L,z,j=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=L,V=z,t.width=Math.floor(L*Y),t.height=Math.floor(z*Y),j===!0&&(t.style.width=L+"px",t.style.height=z+"px"),this.setViewport(0,0,L,z)},this.getDrawingBufferSize=function(L){return L.set(N*Y,V*Y).floor()},this.setDrawingBufferSize=function(L,z,j){N=L,V=z,Y=j,t.width=Math.floor(L*j),t.height=Math.floor(z*j),this.setViewport(0,0,L,z)},this.getCurrentViewport=function(L){return L.copy(A)},this.getViewport=function(L){return L.copy(ie)},this.setViewport=function(L,z,j,K){L.isVector4?ie.set(L.x,L.y,L.z,L.w):ie.set(L,z,j,K),Ee.viewport(A.copy(ie).multiplyScalar(Y).round())},this.getScissor=function(L){return L.copy(ae)},this.setScissor=function(L,z,j,K){L.isVector4?ae.set(L.x,L.y,L.z,L.w):ae.set(L,z,j,K),Ee.scissor(P.copy(ae).multiplyScalar(Y).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(L){Ee.setScissorTest(ve=L)},this.setOpaqueSort=function(L){W=L},this.setTransparentSort=function(L){Q=L},this.getClearColor=function(L){return L.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(L=!0,z=!0,j=!0){let K=0;if(L){let H=!1;if(b!==null){const he=b.texture.format;H=he===fl||he===dl||he===ul}if(H){const he=b.texture.type,ge=he===$n||he===Di||he===tr||he===ys||he===ll||he===cl,Se=xe.getClearColor(),be=xe.getClearAlpha(),Ne=Se.r,Oe=Se.g,Le=Se.b;ge?(f[0]=Ne,f[1]=Oe,f[2]=Le,f[3]=be,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=Ne,g[1]=Oe,g[2]=Le,g[3]=be,U.clearBufferiv(U.COLOR,0,g))}else K|=U.COLOR_BUFFER_BIT}z&&(K|=U.DEPTH_BUFFER_BIT),j&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",re,!1),fe.dispose(),_e.dispose(),Pe.dispose(),D.dispose(),R.dispose(),se.dispose(),ke.dispose(),ft.dispose(),te.dispose(),X.dispose(),X.removeEventListener("sessionstart",xt),X.removeEventListener("sessionend",Kn),Rt.stop()};function q(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const L=ct.autoReset,z=ce.enabled,j=ce.autoUpdate,K=ce.needsUpdate,H=ce.type;T(),ct.autoReset=L,ce.enabled=z,ce.autoUpdate=j,ce.needsUpdate=K,ce.type=H}function re(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Te(L){const z=L.target;z.removeEventListener("dispose",Te),Fe(z)}function Fe(L){_t(L),Pe.remove(L)}function _t(L){const z=Pe.get(L).programs;z!==void 0&&(z.forEach(function(j){te.releaseProgram(j)}),L.isShaderMaterial&&te.releaseShaderCache(L))}this.renderBufferDirect=function(L,z,j,K,H,he){z===null&&(z=Ae);const ge=H.isMesh&&H.matrixWorld.determinant()<0,Se=Au(L,z,j,K,H);Ee.setMaterial(K,ge);let be=j.index,Ne=1;if(K.wireframe===!0){if(be=ne.getWireframeAttribute(j),be===void 0)return;Ne=2}const Oe=j.drawRange,Le=j.attributes.position;let nt=Oe.start*Ne,mt=(Oe.start+Oe.count)*Ne;he!==null&&(nt=Math.max(nt,he.start*Ne),mt=Math.min(mt,(he.start+he.count)*Ne)),be!==null?(nt=Math.max(nt,0),mt=Math.min(mt,be.count)):Le!=null&&(nt=Math.max(nt,0),mt=Math.min(mt,Le.count));const gt=mt-nt;if(gt<0||gt===1/0)return;ke.setup(H,K,Se,j,be);let $t,it=De;if(be!==null&&($t=$.get(be),it=Me,it.setIndex($t)),H.isMesh)K.wireframe===!0?(Ee.setLineWidth(K.wireframeLinewidth*Je()),it.setMode(U.LINES)):it.setMode(U.TRIANGLES);else if(H.isLine){let Re=K.linewidth;Re===void 0&&(Re=1),Ee.setLineWidth(Re*Je()),H.isLineSegments?it.setMode(U.LINES):H.isLineLoop?it.setMode(U.LINE_LOOP):it.setMode(U.LINE_STRIP)}else H.isPoints?it.setMode(U.POINTS):H.isSprite&&it.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)it.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))it.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Re=H._multiDrawStarts,Ct=H._multiDrawCounts,st=H._multiDrawCount,hn=be?$.get(be).bytesPerElement:1,ki=Pe.get(K).currentProgram.getUniforms();for(let jt=0;jt<st;jt++)ki.setValue(U,"_gl_DrawID",jt),it.render(Re[jt]/hn,Ct[jt])}else if(H.isInstancedMesh)it.renderInstances(nt,gt,H.count);else if(j.isInstancedBufferGeometry){const Re=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ct=Math.min(j.instanceCount,Re);it.renderInstances(nt,gt,Ct)}else it.render(nt,gt)};function Mt(L,z,j){L.transparent===!0&&L.side===ln&&L.forceSinglePass===!1?(L.side=qt,L.needsUpdate=!0,mr(L,z,j),L.side=qn,L.needsUpdate=!0,mr(L,z,j),L.side=ln):mr(L,z,j)}this.compile=function(L,z,j=null){j===null&&(j=L),m=_e.get(j),m.init(z),M.push(m),j.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),L!==j&&L.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const K=new Set;return L.traverse(function(H){const he=H.material;if(he)if(Array.isArray(he))for(let ge=0;ge<he.length;ge++){const Se=he[ge];Mt(Se,j,H),K.add(Se)}else Mt(he,j,H),K.add(he)}),M.pop(),m=null,K},this.compileAsync=function(L,z,j=null){const K=this.compile(L,z,j);return new Promise(H=>{function he(){if(K.forEach(function(ge){Pe.get(ge).currentProgram.isReady()&&K.delete(ge)}),K.size===0){H(L);return}setTimeout(he,10)}Ye.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Qe=null;function St(L){Qe&&Qe(L)}function xt(){Rt.stop()}function Kn(){Rt.start()}const Rt=new jh;Rt.setAnimationLoop(St),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(L){Qe=L,X.setAnimationLoop(L),L===null?Rt.stop():Rt.start()},X.addEventListener("sessionstart",xt),X.addEventListener("sessionend",Kn),this.render=function(L,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(z),z=X.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,z,b),m=_e.get(L,M.length),m.init(z),M.push(m),de.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),oe.setFromProjectionMatrix(de),J=this.localClippingEnabled,G=ze.init(this.clippingPlanes,J),_=fe.get(L,p.length),_.init(),p.push(_),X.enabled===!0&&X.isPresenting===!0){const he=x.xr.getDepthSensingMesh();he!==null&&In(he,z,-1/0,x.sortObjects)}In(L,z,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,Q),we=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,we&&xe.addToRenderList(_,L),this.info.render.frame++,G===!0&&ze.beginShadows();const j=m.state.shadowsArray;ce.render(j,L,z),G===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=_.opaque,H=_.transmissive;if(m.setupLights(),z.isArrayCamera){const he=z.cameras;if(H.length>0)for(let ge=0,Se=he.length;ge<Se;ge++){const be=he[ge];Us(K,H,L,be)}we&&xe.render(L);for(let ge=0,Se=he.length;ge<Se;ge++){const be=he[ge];gi(_,L,be,be.viewport)}}else H.length>0&&Us(K,H,L,z),we&&xe.render(L),gi(_,L,z);b!==null&&(Ie.updateMultisampleRenderTarget(b),Ie.updateRenderTargetMipmap(b)),L.isScene===!0&&L.onAfterRender(x,L,z),ke.resetDefaultState(),C=-1,E=null,M.pop(),M.length>0?(m=M[M.length-1],G===!0&&ze.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function In(L,z,j,K){if(L.visible===!1)return;if(L.layers.test(z.layers)){if(L.isGroup)j=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(z);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||oe.intersectsSprite(L)){K&&ye.setFromMatrixPosition(L.matrixWorld).applyMatrix4(de);const ge=se.update(L),Se=L.material;Se.visible&&_.push(L,ge,Se,j,ye.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||oe.intersectsObject(L))){const ge=se.update(L),Se=L.material;if(K&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ye.copy(L.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ye.copy(ge.boundingSphere.center)),ye.applyMatrix4(L.matrixWorld).applyMatrix4(de)),Array.isArray(Se)){const be=ge.groups;for(let Ne=0,Oe=be.length;Ne<Oe;Ne++){const Le=be[Ne],nt=Se[Le.materialIndex];nt&&nt.visible&&_.push(L,ge,nt,j,ye.z,Le)}}else Se.visible&&_.push(L,ge,Se,j,ye.z,null)}}const he=L.children;for(let ge=0,Se=he.length;ge<Se;ge++)In(he[ge],z,j,K)}function gi(L,z,j,K){const H=L.opaque,he=L.transmissive,ge=L.transparent;m.setupLightsView(j),G===!0&&ze.setGlobalState(x.clippingPlanes,j),K&&Ee.viewport(A.copy(K)),H.length>0&&pr(H,z,j),he.length>0&&pr(he,z,j),ge.length>0&&pr(ge,z,j),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Us(L,z,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Ni(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?lr:$n,minFilter:Gn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const he=m.state.transmissionRenderTarget[K.id],ge=K.viewport||A;he.setSize(ge.z,ge.w);const Se=x.getRenderTarget();x.setRenderTarget(he),x.getClearColor(F),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear(),we&&xe.render(j);const be=x.toneMapping;x.toneMapping=fi;const Ne=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),G===!0&&ze.setGlobalState(x.clippingPlanes,K),pr(L,j,K),Ie.updateMultisampleRenderTarget(he),Ie.updateRenderTargetMipmap(he),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Le=0,nt=z.length;Le<nt;Le++){const mt=z[Le],gt=mt.object,$t=mt.geometry,it=mt.material,Re=mt.group;if(it.side===ln&&gt.layers.test(K.layers)){const Ct=it.side;it.side=qt,it.needsUpdate=!0,Il(gt,j,K,$t,it,Re),it.side=Ct,it.needsUpdate=!0,Oe=!0}}Oe===!0&&(Ie.updateMultisampleRenderTarget(he),Ie.updateRenderTargetMipmap(he))}x.setRenderTarget(Se),x.setClearColor(F,I),Ne!==void 0&&(K.viewport=Ne),x.toneMapping=be}function pr(L,z,j){const K=z.isScene===!0?z.overrideMaterial:null;for(let H=0,he=L.length;H<he;H++){const ge=L[H],Se=ge.object,be=ge.geometry,Ne=K===null?ge.material:K,Oe=ge.group;Se.layers.test(j.layers)&&Il(Se,z,j,be,Ne,Oe)}}function Il(L,z,j,K,H,he){L.onBeforeRender(x,z,j,K,H,he),L.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),H.transparent===!0&&H.side===ln&&H.forceSinglePass===!1?(H.side=qt,H.needsUpdate=!0,x.renderBufferDirect(j,z,K,H,L,he),H.side=qn,H.needsUpdate=!0,x.renderBufferDirect(j,z,K,H,L,he),H.side=ln):x.renderBufferDirect(j,z,K,H,L,he),L.onAfterRender(x,z,j,K,H,he)}function mr(L,z,j){z.isScene!==!0&&(z=Ae);const K=Pe.get(L),H=m.state.lights,he=m.state.shadowsArray,ge=H.state.version,Se=te.getParameters(L,H.state,he,z,j),be=te.getProgramCacheKey(Se);let Ne=K.programs;K.environment=L.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(L.isMeshStandardMaterial?R:D).get(L.envMap||K.environment),K.envMapRotation=K.environment!==null&&L.envMap===null?z.environmentRotation:L.envMapRotation,Ne===void 0&&(L.addEventListener("dispose",Te),Ne=new Map,K.programs=Ne);let Oe=Ne.get(be);if(Oe!==void 0){if(K.currentProgram===Oe&&K.lightsStateVersion===ge)return Nl(L,Se),Oe}else Se.uniforms=te.getUniforms(L),L.onBeforeCompile(Se,x),Oe=te.acquireProgram(Se,be),Ne.set(be,Oe),K.uniforms=Se.uniforms;const Le=K.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Le.clippingPlanes=ze.uniform),Nl(L,Se),K.needsLights=Tu(L),K.lightsStateVersion=ge,K.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.directionalShadowMap.value=H.state.directionalShadowMap,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotShadowMap.value=H.state.spotShadowMap,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMap.value=H.state.pointShadowMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=Oe,K.uniformsList=null,Oe}function Dl(L){if(L.uniformsList===null){const z=L.currentProgram.getUniforms();L.uniformsList=ea.seqWithValue(z.seq,L.uniforms)}return L.uniformsList}function Nl(L,z){const j=Pe.get(L);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function Au(L,z,j,K,H){z.isScene!==!0&&(z=Ae),Ie.resetTextureUnits();const he=z.fog,ge=K.isMeshStandardMaterial?z.environment:null,Se=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Dt,be=(K.isMeshStandardMaterial?R:D).get(K.envMap||ge),Ne=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Oe=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Le=!!j.morphAttributes.position,nt=!!j.morphAttributes.normal,mt=!!j.morphAttributes.color;let gt=fi;K.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(gt=x.toneMapping);const $t=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,it=$t!==void 0?$t.length:0,Re=Pe.get(K),Ct=m.state.lights;if(G===!0&&(J===!0||L!==E)){const nn=L===E&&K.id===C;ze.setState(K,L,nn)}let st=!1;K.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Ct.state.version||Re.outputColorSpace!==Se||H.isBatchedMesh&&Re.batching===!1||!H.isBatchedMesh&&Re.batching===!0||H.isBatchedMesh&&Re.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Re.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Re.instancing===!1||!H.isInstancedMesh&&Re.instancing===!0||H.isSkinnedMesh&&Re.skinning===!1||!H.isSkinnedMesh&&Re.skinning===!0||H.isInstancedMesh&&Re.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Re.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Re.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Re.instancingMorph===!1&&H.morphTexture!==null||Re.envMap!==be||K.fog===!0&&Re.fog!==he||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ze.numPlanes||Re.numIntersection!==ze.numIntersection)||Re.vertexAlphas!==Ne||Re.vertexTangents!==Oe||Re.morphTargets!==Le||Re.morphNormals!==nt||Re.morphColors!==mt||Re.toneMapping!==gt||Re.morphTargetsCount!==it)&&(st=!0):(st=!0,Re.__version=K.version);let hn=Re.currentProgram;st===!0&&(hn=mr(K,z,H));let ki=!1,jt=!1,Ma=!1;const vt=hn.getUniforms(),Zn=Re.uniforms;if(Ee.useProgram(hn.program)&&(ki=!0,jt=!0,Ma=!0),K.id!==C&&(C=K.id,jt=!0),ki||E!==L){vt.setValue(U,"projectionMatrix",L.projectionMatrix),vt.setValue(U,"viewMatrix",L.matrixWorldInverse);const nn=vt.map.cameraPosition;nn!==void 0&&nn.setValue(U,ue.setFromMatrixPosition(L.matrixWorld)),je.logarithmicDepthBuffer&&vt.setValue(U,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&vt.setValue(U,"isOrthographic",L.isOrthographicCamera===!0),E!==L&&(E=L,jt=!0,Ma=!0)}if(H.isSkinnedMesh){vt.setOptional(U,H,"bindMatrix"),vt.setOptional(U,H,"bindMatrixInverse");const nn=H.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),vt.setValue(U,"boneTexture",nn.boneTexture,Ie))}H.isBatchedMesh&&(vt.setOptional(U,H,"batchingTexture"),vt.setValue(U,"batchingTexture",H._matricesTexture,Ie),vt.setOptional(U,H,"batchingIdTexture"),vt.setValue(U,"batchingIdTexture",H._indirectTexture,Ie),vt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&vt.setValue(U,"batchingColorTexture",H._colorsTexture,Ie));const Sa=j.morphAttributes;if((Sa.position!==void 0||Sa.normal!==void 0||Sa.color!==void 0)&&$e.update(H,j,hn),(jt||Re.receiveShadow!==H.receiveShadow)&&(Re.receiveShadow=H.receiveShadow,vt.setValue(U,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Zn.envMap.value=be,Zn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(Zn.envMapIntensity.value=z.environmentIntensity),jt&&(vt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&wu(Zn,Ma),he&&K.fog===!0&&Ce.refreshFogUniforms(Zn,he),Ce.refreshMaterialUniforms(Zn,K,Y,V,m.state.transmissionRenderTarget[L.id]),ea.upload(U,Dl(Re),Zn,Ie)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ea.upload(U,Dl(Re),Zn,Ie),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&vt.setValue(U,"center",H.center),vt.setValue(U,"modelViewMatrix",H.modelViewMatrix),vt.setValue(U,"normalMatrix",H.normalMatrix),vt.setValue(U,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const nn=K.uniformsGroups;for(let ba=0,Ru=nn.length;ba<Ru;ba++){const Ul=nn[ba];ft.update(Ul,hn),ft.bind(Ul,hn)}}return hn}function wu(L,z){L.ambientLightColor.needsUpdate=z,L.lightProbe.needsUpdate=z,L.directionalLights.needsUpdate=z,L.directionalLightShadows.needsUpdate=z,L.pointLights.needsUpdate=z,L.pointLightShadows.needsUpdate=z,L.spotLights.needsUpdate=z,L.spotLightShadows.needsUpdate=z,L.rectAreaLights.needsUpdate=z,L.hemisphereLights.needsUpdate=z}function Tu(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(L,z,j){Pe.get(L.texture).__webglTexture=z,Pe.get(L.depthTexture).__webglTexture=j;const K=Pe.get(L);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,z){const j=Pe.get(L);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(L,z=0,j=0){b=L,w=z,S=j;let K=!0,H=null,he=!1,ge=!1;if(L){const be=Pe.get(L);be.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(U.FRAMEBUFFER,null),K=!1):be.__webglFramebuffer===void 0?Ie.setupRenderTarget(L):be.__hasExternalTextures&&Ie.rebindTextures(L,Pe.get(L.texture).__webglTexture,Pe.get(L.depthTexture).__webglTexture);const Ne=L.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ge=!0);const Oe=Pe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?H=Oe[z][j]:H=Oe[z],he=!0):L.samples>0&&Ie.useMultisampledRTT(L)===!1?H=Pe.get(L).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[j]:H=Oe,A.copy(L.viewport),P.copy(L.scissor),k=L.scissorTest}else A.copy(ie).multiplyScalar(Y).floor(),P.copy(ae).multiplyScalar(Y).floor(),k=ve;if(Ee.bindFramebuffer(U.FRAMEBUFFER,H)&&K&&Ee.drawBuffers(L,H),Ee.viewport(A),Ee.scissor(P),Ee.setScissorTest(k),he){const be=Pe.get(L.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,be.__webglTexture,j)}else if(ge){const be=Pe.get(L.texture),Ne=z||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.__webglTexture,j||0,Ne)}C=-1},this.readRenderTargetPixels=function(L,z,j,K,H,he,ge){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Pe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){Ee.bindFramebuffer(U.FRAMEBUFFER,Se);try{const be=L.texture,Ne=be.format,Oe=be.type;if(!je.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=L.width-K&&j>=0&&j<=L.height-H&&U.readPixels(z,j,K,H,Ue.convert(Ne),Ue.convert(Oe),he)}finally{const be=b!==null?Pe.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(L,z,j,K,H,he,ge){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Pe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){Ee.bindFramebuffer(U.FRAMEBUFFER,Se);try{const be=L.texture,Ne=be.format,Oe=be.type;if(!je.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=L.width-K&&j>=0&&j<=L.height-H){const Le=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Le),U.bufferData(U.PIXEL_PACK_BUFFER,he.byteLength,U.STREAM_READ),U.readPixels(z,j,K,H,Ue.convert(Ne),Ue.convert(Oe),0),U.flush();const nt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await Wd(U,nt,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Le),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,he)}finally{U.deleteBuffer(Le),U.deleteSync(nt)}return he}}finally{const be=b!==null?Pe.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(L,z=null,j=0){L.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,L=arguments[1]);const K=Math.pow(2,-j),H=Math.floor(L.image.width*K),he=Math.floor(L.image.height*K),ge=z!==null?z.x:0,Se=z!==null?z.y:0;Ie.setTexture2D(L,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,ge,Se,H,he),Ee.unbindTexture()},this.copyTextureToTexture=function(L,z,j=null,K=null,H=0){L.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,L=arguments[1],z=arguments[2],H=arguments[3]||0,j=null);let he,ge,Se,be,Ne,Oe;j!==null?(he=j.max.x-j.min.x,ge=j.max.y-j.min.y,Se=j.min.x,be=j.min.y):(he=L.image.width,ge=L.image.height,Se=0,be=0),K!==null?(Ne=K.x,Oe=K.y):(Ne=0,Oe=0);const Le=Ue.convert(z.format),nt=Ue.convert(z.type);Ie.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const mt=U.getParameter(U.UNPACK_ROW_LENGTH),gt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),$t=U.getParameter(U.UNPACK_SKIP_PIXELS),it=U.getParameter(U.UNPACK_SKIP_ROWS),Re=U.getParameter(U.UNPACK_SKIP_IMAGES),Ct=L.isCompressedTexture?L.mipmaps[H]:L.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ct.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ct.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),U.pixelStorei(U.UNPACK_SKIP_ROWS,be),L.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,Ne,Oe,he,ge,Le,nt,Ct.data):L.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,Ne,Oe,Ct.width,Ct.height,Le,Ct.data):U.texSubImage2D(U.TEXTURE_2D,H,Ne,Oe,he,ge,Le,nt,Ct),U.pixelStorei(U.UNPACK_ROW_LENGTH,mt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$t),U.pixelStorei(U.UNPACK_SKIP_ROWS,it),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Re),H===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(L,z,j=null,K=null,H=0){L.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,K=arguments[1]||null,L=arguments[2],z=arguments[3],H=arguments[4]||0);let he,ge,Se,be,Ne,Oe,Le,nt,mt;const gt=L.isCompressedTexture?L.mipmaps[H]:L.image;j!==null?(he=j.max.x-j.min.x,ge=j.max.y-j.min.y,Se=j.max.z-j.min.z,be=j.min.x,Ne=j.min.y,Oe=j.min.z):(he=gt.width,ge=gt.height,Se=gt.depth,be=0,Ne=0,Oe=0),K!==null?(Le=K.x,nt=K.y,mt=K.z):(Le=0,nt=0,mt=0);const $t=Ue.convert(z.format),it=Ue.convert(z.type);let Re;if(z.isData3DTexture)Ie.setTexture3D(z,0),Re=U.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Ie.setTexture2DArray(z,0),Re=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Ct=U.getParameter(U.UNPACK_ROW_LENGTH),st=U.getParameter(U.UNPACK_IMAGE_HEIGHT),hn=U.getParameter(U.UNPACK_SKIP_PIXELS),ki=U.getParameter(U.UNPACK_SKIP_ROWS),jt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,gt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,be),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ne),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Oe),L.isDataTexture||L.isData3DTexture?U.texSubImage3D(Re,H,Le,nt,mt,he,ge,Se,$t,it,gt.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Re,H,Le,nt,mt,he,ge,Se,$t,gt.data):U.texSubImage3D(Re,H,Le,nt,mt,he,ge,Se,$t,it,gt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ct),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),U.pixelStorei(U.UNPACK_SKIP_PIXELS,hn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ki),U.pixelStorei(U.UNPACK_SKIP_IMAGES,jt),H===0&&z.generateMipmaps&&U.generateMipmap(Re),Ee.unbindTexture()},this.initRenderTarget=function(L){Pe.get(L).__webglFramebuffer===void 0&&Ie.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Ie.setTextureCube(L,0):L.isData3DTexture?Ie.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Ie.setTexture2DArray(L,0):Ie.setTexture2D(L,0),Ee.unbindTexture()},this.resetState=function(){w=0,S=0,b=null,Ee.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===pl?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===ma?"display-p3":"srgb"}}class t_ extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class tu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Go,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ds("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new O;class ps{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ps(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Uc=new O,Fc=new ot,Oc=new ot,n_=new O,Bc=new Xe,Or=new O,Ka=new Rn,kc=new Xe,Za=new cr;class i_ extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kl,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingBox.expandByPoint(Or)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingSphere.expandByPoint(Or)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ka.copy(this.boundingSphere),Ka.applyMatrix4(i),e.ray.intersectsSphere(Ka)!==!1&&(kc.copy(i).invert(),Za.copy(e.ray).applyMatrix4(kc),!(this.boundingBox!==null&&Za.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Za)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Fc.fromBufferAttribute(i.attributes.skinIndex,e),Oc.fromBufferAttribute(i.attributes.skinWeight,e),Uc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Oc.getComponent(s);if(a!==0){const o=Fc.getComponent(s);Bc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(n_.copy(Uc).applyMatrix4(Bc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}let nu=class extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}};class iu extends Ot{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Ft,h=Ft,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vc=new Xe,s_=new Xe;let r_=class su{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:s_;Vc.multiplyMatrices(o,t[s]),Vc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new su(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new iu(t,e,e,cn,gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new nu),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}};class Xo extends Tt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rs=new Xe,zc=new Xe,Br=[],Hc=new Tn,a_=new Xe,zs=new It,Hs=new Rn;class o_ extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,a_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),Hc.copy(e.boundingBox).applyMatrix4(rs),this.boundingBox.union(Hc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),Hs.copy(e.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),e.ray.intersectsSphere(Hs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,rs),zc.multiplyMatrices(n,rs),zs.matrixWorld=zc,zs.raycast(e,Br);for(let a=0,o=Br.length;a<o;a++){const c=Br[a];c.instanceId=s,c.object=this,t.push(c)}Br.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new iu(new Float32Array(i*this.count),i,this.count,hl,gn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class _a extends en{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const aa=new O,oa=new O,Gc=new Xe,Gs=new cr,kr=new Rn,Ja=new O,Wc=new O;class vl extends ut{constructor(e=new tn,t=new _a){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)aa.fromBufferAttribute(t,i-1),oa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=aa.distanceTo(oa);e.setAttribute("lineDistance",new Sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=s,e.ray.intersectsSphere(kr)===!1)return;Gc.copy(i).invert(),Gs.copy(e.ray).applyMatrix4(Gc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),M=h.getX(_+1),x=Vr(this,e,Gs,c,p,M);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Vr(this,e,Gs,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=Vr(this,e,Gs,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Vr(this,e,Gs,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vr(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(aa.fromBufferAttribute(a,i),oa.fromBufferAttribute(a,s),t.distanceSqToSegment(aa,oa,Ja,Wc)>n)return;Ja.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ja);if(!(c<e.near||c>e.far))return{distance:c,point:Wc.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const Xc=new O,Yc=new O;class yl extends vl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Xc.fromBufferAttribute(t,i),Yc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xc.distanceTo(Yc);e.setAttribute("lineDistance",new Sn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class l_ extends vl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ru extends en{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qc=new Xe,Yo=new cr,zr=new Rn,Hr=new O;class c_ extends ut{constructor(e=new tn,t=new ru){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(i),zr.radius+=s,e.ray.intersectsSphere(zr)===!1)return;qc.copy(i).invert(),Yo.copy(e.ray).applyMatrix4(qc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Hr.fromBufferAttribute(u,m),$c(Hr,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Hr.fromBufferAttribute(u,g),$c(Hr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $c(r,e,t,n,i,s,a){const o=Yo.distanceSqToPoint(r);if(o<t){const c=new O;Yo.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class h_ extends Ot{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ps extends en{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uh,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cn extends Ps{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Gr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function u_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function d_(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function jc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function au(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class ur{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class f_ extends ur{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vl,endingEnd:Vl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case zl:s=e,o=2*t-n;break;case Hl:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zl:a=e,c=2*n-t;break;case Hl:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let w=0;w!==o;++w)s[w]=p*a[h+w]+M*a[l+w]+x*a[c+w]+v*a[u+w];return s}}class p_ extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}}class m_ extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gr(t,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gr(e.times,Array),values:Gr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new m_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new p_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new f_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case ir:t=this.InterpolantFactoryMethodLinear;break;case Ea:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return ir;case this.InterpolantFactoryMethodSmooth:return Ea}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&u_(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ea,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=ir;class Ls extends Pn{constructor(e,t,n){super(e,t,n)}}Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=nr;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class ou extends Pn{}ou.prototype.ValueTypeName="color";class Es extends Pn{}Es.prototype.ValueTypeName="number";class g_ extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)En.slerpFlat(s,0,a,l-o,a,l,c);return s}}class As extends Pn{InterpolantFactoryMethodLinear(e){return new g_(this.times,this.values,this.getValueSize(),e)}}As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends Pn{constructor(e,t,n){super(e,t,n)}}Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=nr;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends Pn{}ws.prototype.ValueTypeName="vector";class __{constructor(e="",t=-1,n=[],i=md){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(v_(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Pn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=d_(c);c=jc(c,1,h),l=jc(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Es(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];au(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Es(".morphTargetInfluence["+_+"]",m,p))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(ws,f+".position",d,"pos",i),n(As,f+".quaternion",d,"rot",i),n(ws,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function x_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Es;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return ou;case"quaternion":return As;case"bool":case"boolean":return Ls;case"string":return Is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function v_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=x_(r.type);if(r.times===void 0){const t=[],n=[];au(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const hi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class y_{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const M_=new y_;class Ds{constructor(e){this.manager=e!==void 0?e:M_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ds.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class S_ extends Error{constructor(e,t){super(e),this.response=t}}class lu extends Ds{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=hi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:i});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Bn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){u.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let S=0,b=h.length;S<b;S++){const C=h[S];C.onProgress&&C.onProgress(w)}p.enqueue(v),M()}},x=>{p.error(x)})}}});return new Response(m)}else throw new S_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{hi.add(e,l);const h=Bn[e];delete Bn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Bn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Bn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class b_ extends Ds{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=hi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=sr("img");function c(){h(),hi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class cu extends Ds{constructor(e){super(e)}load(e,t,n,i){const s=new Ot,a=new b_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class xa extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Qa=new Xe,Kc=new O,Zc=new O;class Ml{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kc),Zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zc),t.updateMatrixWorld(),Qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class E_ extends Ml{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hu extends xa{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new E_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Jc=new Xe,Ws=new O,eo=new O;class A_ extends Ml{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ws),eo.copy(n.position),eo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(eo),n.updateMatrixWorld(),i.makeTranslation(-Ws.x,-Ws.y,-Ws.z),Jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc)}}class w_ extends xa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new A_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class T_ extends Ml{constructor(){super(new _l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uu extends xa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new T_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class R_ extends xa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class C_ extends Ds{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=hi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return hi.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),hi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});hi.add(e,c),s.manager.itemStart(e)}}const Sl="\\[\\]\\.:\\/",P_=new RegExp("["+Sl+"]","g"),bl="[^"+Sl+"]",L_="[^"+Sl.replace("\\.","")+"]",I_=/((?:WC+[\/:])*)/.source.replace("WC",bl),D_=/(WCOD+)?/.source.replace("WCOD",L_),N_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),U_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),F_=new RegExp("^"+I_+D_+N_+U_+"$"),O_=["material","materials","bones","map"];class B_{constructor(e,t,n){const i=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(P_,"")}static parseTrackName(e){const t=F_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);O_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=B_;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Qc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const eh=new O;class k_ extends ut{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new tn,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){const l=a/c*Math.PI*2,h=o/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Sn(i,3));const s=new _a({fog:!1,toneMapped:!1});this.cone=new yl(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),eh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(eh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Wr=new Tn;class V_ extends yl{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new tn;s.setIndex(new Tt(n,1)),s.setAttribute("position",new Tt(i,3)),super(s,new _a({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Wr.setFromObject(this.object),Wr.isEmpty())return;const t=Wr.min,n=Wr.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);if(typeof window<"u"&&window.THREE){let r=window.require;window.require=e=>{if(r)return r(e);if(e==="three")return window.THREE}}class du{constructor(){y(this,"entries",{});y(this,"size",0)}add(e){let t=this.entries[e];return this.entries[e]=!0,t?!1:(this.size++,!0)}addAll(e){let t=this.size;for(var n=0,i=e.length;n<i;n++)this.add(e[n]);return t!=this.size}contains(e){return this.entries[e]}clear(){this.entries={},this.size=0}}const Jt=class Jt{constructor(e=0,t=0,n=0,i=0){y(this,"r");y(this,"g");y(this,"b");y(this,"a");this.r=e,this.g=t,this.b=n,this.a=i}set(e,t,n,i){return this.r=e,this.g=t,this.b=n,this.a=i,this.clamp()}setFromColor(e){return this.r=e.r,this.g=e.g,this.b=e.b,this.a=e.a,this}setFromString(e){return e=e.charAt(0)=="#"?e.substr(1):e,this.r=parseInt(e.substr(0,2),16)/255,this.g=parseInt(e.substr(2,2),16)/255,this.b=parseInt(e.substr(4,2),16)/255,this.a=e.length!=8?1:parseInt(e.substr(6,2),16)/255,this}add(e,t,n,i){return this.r+=e,this.g+=t,this.b+=n,this.a+=i,this.clamp()}clamp(){return this.r<0?this.r=0:this.r>1&&(this.r=1),this.g<0?this.g=0:this.g>1&&(this.g=1),this.b<0?this.b=0:this.b>1&&(this.b=1),this.a<0?this.a=0:this.a>1&&(this.a=1),this}static rgba8888ToColor(e,t){e.r=((t&4278190080)>>>24)/255,e.g=((t&16711680)>>>16)/255,e.b=((t&65280)>>>8)/255,e.a=(t&255)/255}static rgb888ToColor(e,t){e.r=((t&16711680)>>>16)/255,e.g=((t&65280)>>>8)/255,e.b=(t&255)/255}toRgb888(){const e=t=>("0"+(t*255).toString(16)).slice(-2);return+("0x"+e(this.r)+e(this.g)+e(this.b))}static fromString(e){return new Jt().setFromString(e)}};y(Jt,"WHITE",new Jt(1,1,1,1)),y(Jt,"RED",new Jt(1,0,0,1)),y(Jt,"GREEN",new Jt(0,1,0,1)),y(Jt,"BLUE",new Jt(0,0,1,1)),y(Jt,"MAGENTA",new Jt(1,0,1,1));let et=Jt;const bt=class bt{static clamp(e,t,n){return e<t?t:e>n?n:e}static cosDeg(e){return Math.cos(e*bt.degRad)}static sinDeg(e){return Math.sin(e*bt.degRad)}static atan2Deg(e,t){return Math.atan2(e,t)*bt.degRad}static signum(e){return e>0?1:e<0?-1:0}static toInt(e){return e>0?Math.floor(e):Math.ceil(e)}static cbrt(e){let t=Math.pow(Math.abs(e),.3333333333333333);return e<0?-t:t}static randomTriangular(e,t){return bt.randomTriangularWith(e,t,(e+t)*.5)}static randomTriangularWith(e,t,n){let i=Math.random(),s=t-e;return i<=(n-e)/s?e+Math.sqrt(i*s*(n-e)):t-Math.sqrt((1-i)*s*(t-n))}static isPowerOfTwo(e){return e&&(e&e-1)===0}};y(bt,"PI",3.1415927),y(bt,"PI2",bt.PI*2),y(bt,"invPI2",1/bt.PI2),y(bt,"radiansToDegrees",180/bt.PI),y(bt,"radDeg",bt.radiansToDegrees),y(bt,"degreesToRadians",bt.PI/180),y(bt,"degRad",bt.degreesToRadians);let le=bt;const ai=class ai{static arrayCopy(e,t,n,i,s){for(let a=t,o=i;a<t+s;a++,o++)n[o]=e[a]}static arrayFill(e,t,n,i){for(let s=t;s<n;s++)e[s]=i}static setArraySize(e,t,n=0){let i=e.length;if(i==t)return e;if(e.length=t,i<t)for(let s=i;s<t;s++)e[s]=n;return e}static ensureArrayCapacity(e,t,n=0){return e.length>=t?e:ai.setArraySize(e,t,n)}static newArray(e,t){let n=new Array(e);for(let i=0;i<e;i++)n[i]=t;return n}static newFloatArray(e){if(ai.SUPPORTS_TYPED_ARRAYS)return new Float32Array(e);{let t=new Array(e);for(let n=0;n<t.length;n++)t[n]=0;return t}}static newShortArray(e){if(ai.SUPPORTS_TYPED_ARRAYS)return new Int16Array(e);{let t=new Array(e);for(let n=0;n<t.length;n++)t[n]=0;return t}}static toFloatArray(e){return ai.SUPPORTS_TYPED_ARRAYS?new Float32Array(e):e}static toSinglePrecision(e){return ai.SUPPORTS_TYPED_ARRAYS?Math.fround(e):e}static webkit602BugfixHelper(e,t){}static contains(e,t,n=!0){for(var i=0;i<e.length;i++)if(e[i]==t)return!0;return!1}static enumValue(e,t){return e[t[0].toUpperCase()+t.slice(1)]}};y(ai,"SUPPORTS_TYPED_ARRAYS",typeof Float32Array<"u");let me=ai;class qo{constructor(e){y(this,"items",new Array);y(this,"instantiator");this.instantiator=e}obtain(){return this.items.length>0?this.items.pop():this.instantiator()}free(e){e.reset&&e.reset(),this.items.push(e)}freeAll(e){for(let t=0;t<e.length;t++)this.free(e[t])}clear(){this.items.length=0}}class rr{constructor(e=0,t=0){y(this,"x");y(this,"y");this.x=e,this.y=t}set(e,t){return this.x=e,this.y=t,this}length(){let e=this.x,t=this.y;return Math.sqrt(e*e+t*t)}normalize(){let e=this.length();return e!=0&&(this.x/=e,this.y/=e),this}}class fu{constructor(e){y(this,"name");if(!e)throw new Error("name cannot be null.");this.name=e}}const ha=class ha extends fu{constructor(t){super(t);y(this,"id",ha.nextID++);y(this,"bones",null);y(this,"vertices",[]);y(this,"worldVerticesLength",0);y(this,"timelineAttachment",this)}computeWorldVertices(t,n,i,s,a,o){i=a+(i>>1)*o;let c=t.bone.skeleton,l=t.deform,h=this.vertices,u=this.bones;if(!u){l.length>0&&(h=l);let _=t.bone,m=_.worldX,p=_.worldY,M=_.a,x=_.b,v=_.c,w=_.d;for(let S=n,b=a;b<i;S+=2,b+=o){let C=h[S],E=h[S+1];s[b]=C*M+E*x+m,s[b+1]=C*v+E*w+p}return}let d=0,f=0;for(let _=0;_<n;_+=2){let m=u[d];d+=m+1,f+=m}let g=c.bones;if(l.length==0)for(let _=a,m=f*3;_<i;_+=o){let p=0,M=0,x=u[d++];for(x+=d;d<x;d++,m+=3){let v=g[u[d]],w=h[m],S=h[m+1],b=h[m+2];p+=(w*v.a+S*v.b+v.worldX)*b,M+=(w*v.c+S*v.d+v.worldY)*b}s[_]=p,s[_+1]=M}else{let _=l;for(let m=a,p=f*3,M=f<<1;m<i;m+=o){let x=0,v=0,w=u[d++];for(w+=d;d<w;d++,p+=3,M+=2){let S=g[u[d]],b=h[p]+_[M],C=h[p+1]+_[M+1],E=h[p+2];x+=(b*S.a+C*S.b+S.worldX)*E,v+=(b*S.c+C*S.d+S.worldY)*E}s[m]=x,s[m+1]=v}}}copyTo(t){this.bones?(t.bones=new Array(this.bones.length),me.arrayCopy(this.bones,0,t.bones,0,this.bones.length)):t.bones=null,this.vertices&&(t.vertices=me.newFloatArray(this.vertices.length),me.arrayCopy(this.vertices,0,t.vertices,0,this.vertices.length)),t.worldVerticesLength=this.worldVerticesLength,t.timelineAttachment=this.timelineAttachment}};y(ha,"nextID",0);let xn=ha;const ls=class ls{constructor(e){y(this,"id",ls.nextID());y(this,"regions");y(this,"start",0);y(this,"digits",0);y(this,"setupIndex",0);this.regions=new Array(e)}copy(){let e=new ls(this.regions.length);return me.arrayCopy(this.regions,0,e.regions,0,this.regions.length),e.start=this.start,e.digits=this.digits,e.setupIndex=this.setupIndex,e}apply(e,t){let n=e.sequenceIndex;n==-1&&(n=this.setupIndex),n>=this.regions.length&&(n=this.regions.length-1);let i=this.regions[n];t.region!=i&&(t.region=i,t.updateRegion())}getPath(e,t){let n=e,i=(this.start+t).toString();for(let s=this.digits-i.length;s>0;s--)n+="0";return n+=i,n}static nextID(){return ls._nextID++}};y(ls,"_nextID",0);let $o=ls;var Pt;(function(r){r[r.hold=0]="hold",r[r.once=1]="once",r[r.loop=2]="loop",r[r.pingpong=3]="pingpong",r[r.onceReverse=4]="onceReverse",r[r.loopReverse=5]="loopReverse",r[r.pingpongReverse=6]="pingpongReverse"})(Pt||(Pt={}));const z_=[Pt.hold,Pt.once,Pt.loop,Pt.pingpong,Pt.onceReverse,Pt.loopReverse,Pt.pingpongReverse];class pu{constructor(e,t,n){y(this,"name");y(this,"timelines",[]);y(this,"timelineIds",new du);y(this,"duration");if(!e)throw new Error("name cannot be null.");this.name=e,this.setTimelines(t),this.duration=n}setTimelines(e){if(!e)throw new Error("timelines cannot be null.");this.timelines=e,this.timelineIds.clear();for(var t=0;t<e.length;t++)this.timelineIds.addAll(e[t].getPropertyIds())}hasTimeline(e){for(let t=0;t<e.length;t++)if(this.timelineIds.contains(e[t]))return!0;return!1}apply(e,t,n,i,s,a,o,c){if(!e)throw new Error("skeleton cannot be null.");i&&this.duration!=0&&(n%=this.duration,t>0&&(t%=this.duration));let l=this.timelines;for(let h=0,u=l.length;h<u;h++)l[h].apply(e,t,n,s,a,o,c)}}var ee;(function(r){r[r.setup=0]="setup",r[r.first=1]="first",r[r.replace=2]="replace",r[r.add=3]="add"})(ee||(ee={}));var Gt;(function(r){r[r.mixIn=0]="mixIn",r[r.mixOut=1]="mixOut"})(Gt||(Gt={}));const He={rotate:0,x:1,y:2,scaleX:3,scaleY:4,shearX:5,shearY:6,inherit:7,rgb:8,alpha:9,rgb2:10,attachment:11,deform:12,event:13,drawOrder:14,ikConstraint:15,transformConstraint:16,pathConstraintPosition:17,pathConstraintSpacing:18,pathConstraintMix:19,physicsConstraintInertia:20,physicsConstraintStrength:21,physicsConstraintDamping:22,physicsConstraintMass:23,physicsConstraintWind:24,physicsConstraintGravity:25,physicsConstraintMix:26,physicsConstraintReset:27,sequence:28};class dt{constructor(e,t){y(this,"propertyIds");y(this,"frames");this.propertyIds=t,this.frames=me.newFloatArray(e*this.getFrameEntries())}getPropertyIds(){return this.propertyIds}getFrameEntries(){return 1}getFrameCount(){return this.frames.length/this.getFrameEntries()}getDuration(){return this.frames[this.frames.length-this.getFrameEntries()]}static search1(e,t){let n=e.length;for(let i=1;i<n;i++)if(e[i]>t)return i-1;return n-1}static search(e,t,n){let i=e.length;for(let s=n;s<i;s+=n)if(e[s]>t)return s-n;return i-n}}class Ln extends dt{constructor(t,n,i){super(t,i);y(this,"curves");this.curves=me.newFloatArray(t+n*18),this.curves[t-1]=1}setLinear(t){this.curves[t]=0}setStepped(t){this.curves[t]=1}shrink(t){let n=this.getFrameCount()+t*18;if(this.curves.length>n){let i=me.newFloatArray(n);me.arrayCopy(this.curves,0,i,0,n),this.curves=i}}setBezier(t,n,i,s,a,o,c,l,h,u,d){let f=this.curves,g=this.getFrameCount()+t*18;i==0&&(f[n]=2+g);let _=(s-o*2+l)*.03,m=(a-c*2+h)*.03,p=((o-l)*3-s+u)*.006,M=((c-h)*3-a+d)*.006,x=_*2+p,v=m*2+M,w=(o-s)*.3+_+p*.16666667,S=(c-a)*.3+m+M*.16666667,b=s+w,C=a+S;for(let E=g+18;g<E;g+=2)f[g]=b,f[g+1]=C,w+=x,S+=v,x+=p,v+=M,b+=w,C+=S}getBezierValue(t,n,i,s){let a=this.curves;if(a[s]>t){let h=this.frames[n],u=this.frames[n+i];return u+(t-h)/(a[s]-h)*(a[s+1]-u)}let o=s+18;for(s+=2;s<o;s+=2)if(a[s]>=t){let h=a[s-2],u=a[s-1];return u+(t-h)/(a[s]-h)*(a[s+1]-u)}n+=this.getFrameEntries();let c=a[o-2],l=a[o-1];return l+(t-c)/(this.frames[n]-c)*(this.frames[n+i]-l)}}class vn extends Ln{constructor(e,t,n){super(e,t,[n])}getFrameEntries(){return 2}setFrame(e,t,n){e<<=1,this.frames[e]=t,this.frames[e+1]=n}getCurveValue(e){let t=this.frames,n=t.length-2;for(let s=2;s<=n;s+=2)if(t[s]>e){n=s-2;break}let i=this.curves[n>>1];switch(i){case 0:let s=t[n],a=t[n+1];return a+(e-s)/(t[n+2]-s)*(t[n+2+1]-a);case 1:return t[n+1]}return this.getBezierValue(e,n,1,i-2)}getRelativeValue(e,t,n,i,s){if(e<this.frames[0]){switch(n){case ee.setup:return s;case ee.first:return i+(s-i)*t}return i}let a=this.getCurveValue(e);switch(n){case ee.setup:return s+a*t;case ee.first:case ee.replace:a+=s-i}return i+a*t}getAbsoluteValue(e,t,n,i,s){if(e<this.frames[0]){switch(n){case ee.setup:return s;case ee.first:return i+(s-i)*t}return i}let a=this.getCurveValue(e);return n==ee.setup?s+(a-s)*t:i+(a-i)*t}getAbsoluteValue2(e,t,n,i,s,a){if(e<this.frames[0]){switch(n){case ee.setup:return s;case ee.first:return i+(s-i)*t}return i}return n==ee.setup?s+(a-s)*t:i+(a-i)*t}getScaleValue(e,t,n,i,s,a){const o=this.frames;if(e<o[0]){switch(n){case ee.setup:return a;case ee.first:return s+(a-s)*t}return s}let c=this.getCurveValue(e)*a;if(t==1)return n==ee.add?s+c-a:c;if(i==Gt.mixOut)switch(n){case ee.setup:return a+(Math.abs(c)*le.signum(a)-a)*t;case ee.first:case ee.replace:return s+(Math.abs(c)*le.signum(s)-s)*t}else{let l=0;switch(n){case ee.setup:return l=Math.abs(a)*le.signum(c),l+(c-l)*t;case ee.first:case ee.replace:return l=Math.abs(s)*le.signum(c),l+(c-l)*t}}return s+(c-a)*t}}class El extends Ln{constructor(e,t,n,i){super(e,t,[n,i])}getFrameEntries(){return 3}setFrame(e,t,n,i){e*=3,this.frames[e]=t,this.frames[e+1]=n,this.frames[e+2]=i}}class jo extends vn{constructor(t,n,i){super(t,n,He.rotate+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(t,n,i,s,a,o,c){let l=t.bones[this.boneIndex];l.active&&(l.rotation=this.getRelativeValue(i,a,o,l.rotation,l.data.rotation))}}class H_ extends El{constructor(t,n,i){super(t,n,He.x+"|"+i,He.y+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(t,n,i,s,a,o,c){let l=t.bones[this.boneIndex];if(!l.active)return;let h=this.frames;if(i<h[0]){switch(o){case ee.setup:l.x=l.data.x,l.y=l.data.y;return;case ee.first:l.x+=(l.data.x-l.x)*a,l.y+=(l.data.y-l.y)*a}return}let u=0,d=0,f=dt.search(h,i,3),g=this.curves[f/3];switch(g){case 0:let _=h[f];u=h[f+1],d=h[f+2];let m=(i-_)/(h[f+3]-_);u+=(h[f+3+1]-u)*m,d+=(h[f+3+2]-d)*m;break;case 1:u=h[f+1],d=h[f+2];break;default:u=this.getBezierValue(i,f,1,g-2),d=this.getBezierValue(i,f,2,g+18-2)}switch(o){case ee.setup:l.x=l.data.x+u*a,l.y=l.data.y+d*a;break;case ee.first:case ee.replace:l.x+=(l.data.x+u-l.x)*a,l.y+=(l.data.y+d-l.y)*a;break;case ee.add:l.x+=u*a,l.y+=d*a}}}class G_ extends vn{constructor(t,n,i){super(t,n,He.x+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(t,n,i,s,a,o,c){let l=t.bones[this.boneIndex];l.active&&(l.x=this.getRelativeValue(i,a,o,l.x,l.data.x))}}class W_ extends vn{constructor(t,n,i){super(t,n,He.y+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(t,n,i,s,a,o,c){let l=t.bones[this.boneIndex];l.active&&(l.y=this.getRelativeValue(i,a,o,l.y,l.data.y))}}class X_ extends El{constructor(t,n,i){super(t,n,He.scaleX+"|"+i,He.scaleY+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(t,n,i,s,a,o,c){let l=t.bones[this.boneIndex];if(!l.active)return;let h=this.frames;if(i<h[0]){switch(o){case ee.setup:l.scaleX=l.data.scaleX,l.scaleY=l.data.scaleY;return;case ee.first:l.scaleX+=(l.data.scaleX-l.scaleX)*a,l.scaleY+=(l.data.scaleY-l.scaleY)*a}return}let u,d,f=dt.search(h,i,3),g=this.curves[f/3];switch(g){case 0:let _=h[f];u=h[f+1],d=h[f+2];let m=(i-_)/(h[f+3]-_);u+=(h[f+3+1]-u)*m,d+=(h[f+3+2]-d)*m;break;case 1:u=h[f+1],d=h[f+2];break;default:u=this.getBezierValue(i,f,1,g-2),d=this.getBezierValue(i,f,2,g+18-2)}if(u*=l.data.scaleX,d*=l.data.scaleY,a==1)o==ee.add?(l.scaleX+=u-l.data.scaleX,l.scaleY+=d-l.data.scaleY):(l.scaleX=u,l.scaleY=d);else{let _=0,m=0;if(c==Gt.mixOut)switch(o){case ee.setup:_=l.data.scaleX,m=l.data.scaleY,l.scaleX=_+(Math.abs(u)*le.signum(_)-_)*a,l.scaleY=m+(Math.abs(d)*le.signum(m)-m)*a;break;case ee.first:case ee.replace:_=l.scaleX,m=l.scaleY,l.scaleX=_+(Math.abs(u)*le.signum(_)-_)*a,l.scaleY=m+(Math.abs(d)*le.signum(m)-m)*a;break;case ee.add:l.scaleX+=(u-l.data.scaleX)*a,l.scaleY+=(d-l.data.scaleY)*a}else switch(o){case ee.setup:_=Math.abs(l.data.scaleX)*le.signum(u),m=Math.abs(l.data.scaleY)*le.signum(d),l.scaleX=_+(u-_)*a,l.scaleY=m+(d-m)*a;break;case ee.first:case ee.replace:_=Math.abs(l.scaleX)*le.signum(u),m=Math.abs(l.scaleY)*le.signum(d),l.scaleX=_+(u-_)*a,l.scaleY=m+(d-m)*a;break;case ee.add:l.scaleX+=(u-l.data.scaleX)*a,l.scaleY+=(d-l.data.scaleY)*a}}}}class Y_ extends vn{constructor(t,n,i){super(t,n,He.scaleX+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(t,n,i,s,a,o,c){let l=t.bones[this.boneIndex];l.active&&(l.scaleX=this.getScaleValue(i,a,o,c,l.scaleX,l.data.scaleX))}}class q_ extends vn{constructor(t,n,i){super(t,n,He.scaleY+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(t,n,i,s,a,o,c){let l=t.bones[this.boneIndex];l.active&&(l.scaleY=this.getScaleValue(i,a,o,c,l.scaleY,l.data.scaleY))}}class $_ extends El{constructor(t,n,i){super(t,n,He.shearX+"|"+i,He.shearY+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(t,n,i,s,a,o,c){let l=t.bones[this.boneIndex];if(!l.active)return;let h=this.frames;if(i<h[0]){switch(o){case ee.setup:l.shearX=l.data.shearX,l.shearY=l.data.shearY;return;case ee.first:l.shearX+=(l.data.shearX-l.shearX)*a,l.shearY+=(l.data.shearY-l.shearY)*a}return}let u=0,d=0,f=dt.search(h,i,3),g=this.curves[f/3];switch(g){case 0:let _=h[f];u=h[f+1],d=h[f+2];let m=(i-_)/(h[f+3]-_);u+=(h[f+3+1]-u)*m,d+=(h[f+3+2]-d)*m;break;case 1:u=h[f+1],d=h[f+2];break;default:u=this.getBezierValue(i,f,1,g-2),d=this.getBezierValue(i,f,2,g+18-2)}switch(o){case ee.setup:l.shearX=l.data.shearX+u*a,l.shearY=l.data.shearY+d*a;break;case ee.first:case ee.replace:l.shearX+=(l.data.shearX+u-l.shearX)*a,l.shearY+=(l.data.shearY+d-l.shearY)*a;break;case ee.add:l.shearX+=u*a,l.shearY+=d*a}}}class j_ extends vn{constructor(t,n,i){super(t,n,He.shearX+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(t,n,i,s,a,o,c){let l=t.bones[this.boneIndex];l.active&&(l.shearX=this.getRelativeValue(i,a,o,l.shearX,l.data.shearX))}}class K_ extends vn{constructor(t,n,i){super(t,n,He.shearY+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(t,n,i,s,a,o,c){let l=t.bones[this.boneIndex];l.active&&(l.shearY=this.getRelativeValue(i,a,o,l.shearY,l.data.shearY))}}class Z_ extends dt{constructor(t,n){super(t,[He.inherit+"|"+n]);y(this,"boneIndex",0);this.boneIndex=n}getFrameEntries(){return 2}setFrame(t,n,i){t*=2,this.frames[t]=n,this.frames[t+1]=i}apply(t,n,i,s,a,o,c){let l=t.bones[this.boneIndex];if(!l.active)return;if(c==Gt.mixOut){o==ee.setup&&(l.inherit=l.data.inherit);return}let h=this.frames;if(i<h[0]){(o==ee.setup||o==ee.first)&&(l.inherit=l.data.inherit);return}l.inherit=this.frames[dt.search(h,i,2)+1]}}class J_ extends Ln{constructor(t,n,i){super(t,n,[He.rgb+"|"+i,He.alpha+"|"+i]);y(this,"slotIndex",0);this.slotIndex=i}getFrameEntries(){return 5}setFrame(t,n,i,s,a,o){t*=5,this.frames[t]=n,this.frames[t+1]=i,this.frames[t+2]=s,this.frames[t+3]=a,this.frames[t+4]=o}apply(t,n,i,s,a,o,c){let l=t.slots[this.slotIndex];if(!l.bone.active)return;let h=this.frames,u=l.color;if(i<h[0]){let M=l.data.color;switch(o){case ee.setup:u.setFromColor(M);return;case ee.first:u.add((M.r-u.r)*a,(M.g-u.g)*a,(M.b-u.b)*a,(M.a-u.a)*a)}return}let d=0,f=0,g=0,_=0,m=dt.search(h,i,5),p=this.curves[m/5];switch(p){case 0:let M=h[m];d=h[m+1],f=h[m+2],g=h[m+3],_=h[m+4];let x=(i-M)/(h[m+5]-M);d+=(h[m+5+1]-d)*x,f+=(h[m+5+2]-f)*x,g+=(h[m+5+3]-g)*x,_+=(h[m+5+4]-_)*x;break;case 1:d=h[m+1],f=h[m+2],g=h[m+3],_=h[m+4];break;default:d=this.getBezierValue(i,m,1,p-2),f=this.getBezierValue(i,m,2,p+18-2),g=this.getBezierValue(i,m,3,p+18*2-2),_=this.getBezierValue(i,m,4,p+18*3-2)}a==1?u.set(d,f,g,_):(o==ee.setup&&u.setFromColor(l.data.color),u.add((d-u.r)*a,(f-u.g)*a,(g-u.b)*a,(_-u.a)*a))}}class Q_ extends Ln{constructor(t,n,i){super(t,n,[He.rgb+"|"+i]);y(this,"slotIndex",0);this.slotIndex=i}getFrameEntries(){return 4}setFrame(t,n,i,s,a){t<<=2,this.frames[t]=n,this.frames[t+1]=i,this.frames[t+2]=s,this.frames[t+3]=a}apply(t,n,i,s,a,o,c){let l=t.slots[this.slotIndex];if(!l.bone.active)return;let h=this.frames,u=l.color;if(i<h[0]){let p=l.data.color;switch(o){case ee.setup:u.r=p.r,u.g=p.g,u.b=p.b;return;case ee.first:u.r+=(p.r-u.r)*a,u.g+=(p.g-u.g)*a,u.b+=(p.b-u.b)*a}return}let d=0,f=0,g=0,_=dt.search(h,i,4),m=this.curves[_>>2];switch(m){case 0:let p=h[_];d=h[_+1],f=h[_+2],g=h[_+3];let M=(i-p)/(h[_+4]-p);d+=(h[_+4+1]-d)*M,f+=(h[_+4+2]-f)*M,g+=(h[_+4+3]-g)*M;break;case 1:d=h[_+1],f=h[_+2],g=h[_+3];break;default:d=this.getBezierValue(i,_,1,m-2),f=this.getBezierValue(i,_,2,m+18-2),g=this.getBezierValue(i,_,3,m+18*2-2)}if(a==1)u.r=d,u.g=f,u.b=g;else{if(o==ee.setup){let p=l.data.color;u.r=p.r,u.g=p.g,u.b=p.b}u.r+=(d-u.r)*a,u.g+=(f-u.g)*a,u.b+=(g-u.b)*a}}}class ex extends vn{constructor(t,n,i){super(t,n,He.alpha+"|"+i);y(this,"slotIndex",0);this.slotIndex=i}apply(t,n,i,s,a,o,c){let l=t.slots[this.slotIndex];if(!l.bone.active)return;let h=l.color;if(i<this.frames[0]){let d=l.data.color;switch(o){case ee.setup:h.a=d.a;return;case ee.first:h.a+=(d.a-h.a)*a}return}let u=this.getCurveValue(i);a==1?h.a=u:(o==ee.setup&&(h.a=l.data.color.a),h.a+=(u-h.a)*a)}}class tx extends Ln{constructor(t,n,i){super(t,n,[He.rgb+"|"+i,He.alpha+"|"+i,He.rgb2+"|"+i]);y(this,"slotIndex",0);this.slotIndex=i}getFrameEntries(){return 8}setFrame(t,n,i,s,a,o,c,l,h){t<<=3,this.frames[t]=n,this.frames[t+1]=i,this.frames[t+2]=s,this.frames[t+3]=a,this.frames[t+4]=o,this.frames[t+5]=c,this.frames[t+6]=l,this.frames[t+7]=h}apply(t,n,i,s,a,o,c){let l=t.slots[this.slotIndex];if(!l.bone.active)return;let h=this.frames,u=l.color,d=l.darkColor;if(i<h[0]){let S=l.data.color,b=l.data.darkColor;switch(o){case ee.setup:u.setFromColor(S),d.r=b.r,d.g=b.g,d.b=b.b;return;case ee.first:u.add((S.r-u.r)*a,(S.g-u.g)*a,(S.b-u.b)*a,(S.a-u.a)*a),d.r+=(b.r-d.r)*a,d.g+=(b.g-d.g)*a,d.b+=(b.b-d.b)*a}return}let f=0,g=0,_=0,m=0,p=0,M=0,x=0,v=dt.search(h,i,8),w=this.curves[v>>3];switch(w){case 0:let S=h[v];f=h[v+1],g=h[v+2],_=h[v+3],m=h[v+4],p=h[v+5],M=h[v+6],x=h[v+7];let b=(i-S)/(h[v+8]-S);f+=(h[v+8+1]-f)*b,g+=(h[v+8+2]-g)*b,_+=(h[v+8+3]-_)*b,m+=(h[v+8+4]-m)*b,p+=(h[v+8+5]-p)*b,M+=(h[v+8+6]-M)*b,x+=(h[v+8+7]-x)*b;break;case 1:f=h[v+1],g=h[v+2],_=h[v+3],m=h[v+4],p=h[v+5],M=h[v+6],x=h[v+7];break;default:f=this.getBezierValue(i,v,1,w-2),g=this.getBezierValue(i,v,2,w+18-2),_=this.getBezierValue(i,v,3,w+18*2-2),m=this.getBezierValue(i,v,4,w+18*3-2),p=this.getBezierValue(i,v,5,w+18*4-2),M=this.getBezierValue(i,v,6,w+18*5-2),x=this.getBezierValue(i,v,7,w+18*6-2)}if(a==1)u.set(f,g,_,m),d.r=p,d.g=M,d.b=x;else{if(o==ee.setup){u.setFromColor(l.data.color);let S=l.data.darkColor;d.r=S.r,d.g=S.g,d.b=S.b}u.add((f-u.r)*a,(g-u.g)*a,(_-u.b)*a,(m-u.a)*a),d.r+=(p-d.r)*a,d.g+=(M-d.g)*a,d.b+=(x-d.b)*a}}}class nx extends Ln{constructor(t,n,i){super(t,n,[He.rgb+"|"+i,He.rgb2+"|"+i]);y(this,"slotIndex",0);this.slotIndex=i}getFrameEntries(){return 7}setFrame(t,n,i,s,a,o,c,l){t*=7,this.frames[t]=n,this.frames[t+1]=i,this.frames[t+2]=s,this.frames[t+3]=a,this.frames[t+4]=o,this.frames[t+5]=c,this.frames[t+6]=l}apply(t,n,i,s,a,o,c){let l=t.slots[this.slotIndex];if(!l.bone.active)return;let h=this.frames,u=l.color,d=l.darkColor;if(i<h[0]){let w=l.data.color,S=l.data.darkColor;switch(o){case ee.setup:u.r=w.r,u.g=w.g,u.b=w.b,d.r=S.r,d.g=S.g,d.b=S.b;return;case ee.first:u.r+=(w.r-u.r)*a,u.g+=(w.g-u.g)*a,u.b+=(w.b-u.b)*a,d.r+=(S.r-d.r)*a,d.g+=(S.g-d.g)*a,d.b+=(S.b-d.b)*a}return}let f=0,g=0,_=0,m=0,p=0,M=0,x=dt.search(h,i,7),v=this.curves[x/7];switch(v){case 0:let w=h[x];f=h[x+1],g=h[x+2],_=h[x+3],m=h[x+4],p=h[x+5],M=h[x+6];let S=(i-w)/(h[x+7]-w);f+=(h[x+7+1]-f)*S,g+=(h[x+7+2]-g)*S,_+=(h[x+7+3]-_)*S,m+=(h[x+7+4]-m)*S,p+=(h[x+7+5]-p)*S,M+=(h[x+7+6]-M)*S;break;case 1:f=h[x+1],g=h[x+2],_=h[x+3],m=h[x+4],p=h[x+5],M=h[x+6];break;default:f=this.getBezierValue(i,x,1,v-2),g=this.getBezierValue(i,x,2,v+18-2),_=this.getBezierValue(i,x,3,v+18*2-2),m=this.getBezierValue(i,x,4,v+18*3-2),p=this.getBezierValue(i,x,5,v+18*4-2),M=this.getBezierValue(i,x,6,v+18*5-2)}if(a==1)u.r=f,u.g=g,u.b=_,d.r=m,d.g=p,d.b=M;else{if(o==ee.setup){let w=l.data.color,S=l.data.darkColor;u.r=w.r,u.g=w.g,u.b=w.b,d.r=S.r,d.g=S.g,d.b=S.b}u.r+=(f-u.r)*a,u.g+=(g-u.g)*a,u.b+=(_-u.b)*a,d.r+=(m-d.r)*a,d.g+=(p-d.g)*a,d.b+=(M-d.b)*a}}}class $s extends dt{constructor(t,n){super(t,[He.attachment+"|"+n]);y(this,"slotIndex",0);y(this,"attachmentNames");this.slotIndex=n,this.attachmentNames=new Array(t)}getFrameCount(){return this.frames.length}setFrame(t,n,i){this.frames[t]=n,this.attachmentNames[t]=i}apply(t,n,i,s,a,o,c){let l=t.slots[this.slotIndex];if(l.bone.active){if(c==Gt.mixOut){o==ee.setup&&this.setAttachment(t,l,l.data.attachmentName);return}if(i<this.frames[0]){(o==ee.setup||o==ee.first)&&this.setAttachment(t,l,l.data.attachmentName);return}this.setAttachment(t,l,this.attachmentNames[dt.search1(this.frames,i)])}}setAttachment(t,n,i){n.setAttachment(i?t.getAttachment(this.slotIndex,i):null)}}class ix extends Ln{constructor(t,n,i,s){super(t,n,[He.deform+"|"+i+"|"+s.id]);y(this,"slotIndex",0);y(this,"attachment");y(this,"vertices");this.slotIndex=i,this.attachment=s,this.vertices=new Array(t)}getFrameCount(){return this.frames.length}setFrame(t,n,i){this.frames[t]=n,this.vertices[t]=i}setBezier(t,n,i,s,a,o,c,l,h,u,d){let f=this.curves,g=this.getFrameCount()+t*18;i==0&&(f[n]=2+g);let _=(s-o*2+l)*.03,m=h*.03-c*.06,p=((o-l)*3-s+u)*.006,M=(c-h+.33333333)*.018,x=_*2+p,v=m*2+M,w=(o-s)*.3+_+p*.16666667,S=c*.3+m+M*.16666667,b=s+w,C=S;for(let E=g+18;g<E;g+=2)f[g]=b,f[g+1]=C,w+=x,S+=v,x+=p,v+=M,b+=w,C+=S}getCurvePercent(t,n){let i=this.curves,s=i[n];switch(s){case 0:let l=this.frames[n];return(t-l)/(this.frames[n+this.getFrameEntries()]-l);case 1:return 0}if(s-=2,i[s]>t){let l=this.frames[n];return i[s+1]*(t-l)/(i[s]-l)}let a=s+18;for(s+=2;s<a;s+=2)if(i[s]>=t){let l=i[s-2],h=i[s-1];return h+(t-l)/(i[s]-l)*(i[s+1]-h)}let o=i[a-2],c=i[a-1];return c+(1-c)*(t-o)/(this.frames[n+this.getFrameEntries()]-o)}apply(t,n,i,s,a,o,c){let l=t.slots[this.slotIndex];if(!l.bone.active)return;let h=l.getAttachment();if(!h||!(h instanceof xn)||h.timelineAttachment!=this.attachment)return;let u=l.deform;u.length==0&&(o=ee.setup);let d=this.vertices,f=d[0].length,g=this.frames;if(i<g[0]){switch(o){case ee.setup:u.length=0;return;case ee.first:if(a==1){u.length=0;return}u.length=f;let v=h;if(v.bones){a=1-a;for(var _=0;_<f;_++)u[_]*=a}else{let w=v.vertices;for(var _=0;_<f;_++)u[_]+=(w[_]-u[_])*a}}return}if(u.length=f,i>=g[g.length-1]){let v=d[g.length-1];if(a==1)if(o==ee.add){let w=h;if(w.bones)for(let S=0;S<f;S++)u[S]+=v[S];else{let S=w.vertices;for(let b=0;b<f;b++)u[b]+=v[b]-S[b]}}else me.arrayCopy(v,0,u,0,f);else switch(o){case ee.setup:{let S=h;if(S.bones)for(let b=0;b<f;b++)u[b]=v[b]*a;else{let b=S.vertices;for(let C=0;C<f;C++){let E=b[C];u[C]=E+(v[C]-E)*a}}break}case ee.first:case ee.replace:for(let S=0;S<f;S++)u[S]+=(v[S]-u[S])*a;break;case ee.add:let w=h;if(w.bones)for(let S=0;S<f;S++)u[S]+=v[S]*a;else{let S=w.vertices;for(let b=0;b<f;b++)u[b]+=(v[b]-S[b])*a}}return}let m=dt.search1(g,i),p=this.getCurvePercent(i,m),M=d[m],x=d[m+1];if(a==1)if(o==ee.add){let v=h;if(v.bones)for(let w=0;w<f;w++){let S=M[w];u[w]+=S+(x[w]-S)*p}else{let w=v.vertices;for(let S=0;S<f;S++){let b=M[S];u[S]+=b+(x[S]-b)*p-w[S]}}}else for(let v=0;v<f;v++){let w=M[v];u[v]=w+(x[v]-w)*p}else switch(o){case ee.setup:{let w=h;if(w.bones)for(let S=0;S<f;S++){let b=M[S];u[S]=(b+(x[S]-b)*p)*a}else{let S=w.vertices;for(let b=0;b<f;b++){let C=M[b],E=S[b];u[b]=E+(C+(x[b]-C)*p-E)*a}}break}case ee.first:case ee.replace:for(let w=0;w<f;w++){let S=M[w];u[w]+=(S+(x[w]-S)*p-u[w])*a}break;case ee.add:let v=h;if(v.bones)for(let w=0;w<f;w++){let S=M[w];u[w]+=(S+(x[w]-S)*p)*a}else{let w=v.vertices;for(let S=0;S<f;S++){let b=M[S];u[S]+=(b+(x[S]-b)*p-w[S])*a}}}}}const ua=class ua extends dt{constructor(t){super(t,ua.propertyIds);y(this,"events");this.events=new Array(t)}getFrameCount(){return this.frames.length}setFrame(t,n){this.frames[t]=n.time,this.events[t]=n}apply(t,n,i,s,a,o,c){if(!s)return;let l=this.frames,h=this.frames.length;if(n>i)this.apply(t,n,Number.MAX_VALUE,s,a,o,c),n=-1;else if(n>=l[h-1])return;if(i<l[0])return;let u=0;if(n<l[0])u=0;else{u=dt.search1(l,n)+1;let d=l[u];for(;u>0&&l[u-1]==d;)u--}for(;u<h&&i>=l[u];u++)s.push(this.events[u])}};y(ua,"propertyIds",[""+He.event]);let la=ua;const da=class da extends dt{constructor(t){super(t,da.propertyIds);y(this,"drawOrders");this.drawOrders=new Array(t)}getFrameCount(){return this.frames.length}setFrame(t,n,i){this.frames[t]=n,this.drawOrders[t]=i}apply(t,n,i,s,a,o,c){if(c==Gt.mixOut){o==ee.setup&&me.arrayCopy(t.slots,0,t.drawOrder,0,t.slots.length);return}if(i<this.frames[0]){(o==ee.setup||o==ee.first)&&me.arrayCopy(t.slots,0,t.drawOrder,0,t.slots.length);return}let l=dt.search1(this.frames,i),h=this.drawOrders[l];if(!h)me.arrayCopy(t.slots,0,t.drawOrder,0,t.slots.length);else{let u=t.drawOrder,d=t.slots;for(let f=0,g=h.length;f<g;f++)u[f]=d[h[f]]}}};y(da,"propertyIds",[""+He.drawOrder]);let ms=da;class sx extends Ln{constructor(t,n,i){super(t,n,[He.ikConstraint+"|"+i]);y(this,"constraintIndex",0);this.constraintIndex=i}getFrameEntries(){return 6}setFrame(t,n,i,s,a,o,c){t*=6,this.frames[t]=n,this.frames[t+1]=i,this.frames[t+2]=s,this.frames[t+3]=a,this.frames[t+4]=o?1:0,this.frames[t+5]=c?1:0}apply(t,n,i,s,a,o,c){let l=t.ikConstraints[this.constraintIndex];if(!l.active)return;let h=this.frames;if(i<h[0]){switch(o){case ee.setup:l.mix=l.data.mix,l.softness=l.data.softness,l.bendDirection=l.data.bendDirection,l.compress=l.data.compress,l.stretch=l.data.stretch;return;case ee.first:l.mix+=(l.data.mix-l.mix)*a,l.softness+=(l.data.softness-l.softness)*a,l.bendDirection=l.data.bendDirection,l.compress=l.data.compress,l.stretch=l.data.stretch}return}let u=0,d=0,f=dt.search(h,i,6),g=this.curves[f/6];switch(g){case 0:let _=h[f];u=h[f+1],d=h[f+2];let m=(i-_)/(h[f+6]-_);u+=(h[f+6+1]-u)*m,d+=(h[f+6+2]-d)*m;break;case 1:u=h[f+1],d=h[f+2];break;default:u=this.getBezierValue(i,f,1,g-2),d=this.getBezierValue(i,f,2,g+18-2)}o==ee.setup?(l.mix=l.data.mix+(u-l.data.mix)*a,l.softness=l.data.softness+(d-l.data.softness)*a,c==Gt.mixOut?(l.bendDirection=l.data.bendDirection,l.compress=l.data.compress,l.stretch=l.data.stretch):(l.bendDirection=h[f+3],l.compress=h[f+4]!=0,l.stretch=h[f+5]!=0)):(l.mix+=(u-l.mix)*a,l.softness+=(d-l.softness)*a,c==Gt.mixIn&&(l.bendDirection=h[f+3],l.compress=h[f+4]!=0,l.stretch=h[f+5]!=0))}}class rx extends Ln{constructor(t,n,i){super(t,n,[He.transformConstraint+"|"+i]);y(this,"constraintIndex",0);this.constraintIndex=i}getFrameEntries(){return 7}setFrame(t,n,i,s,a,o,c,l){let h=this.frames;t*=7,h[t]=n,h[t+1]=i,h[t+2]=s,h[t+3]=a,h[t+4]=o,h[t+5]=c,h[t+6]=l}apply(t,n,i,s,a,o,c){let l=t.transformConstraints[this.constraintIndex];if(!l.active)return;let h=this.frames;if(i<h[0]){let x=l.data;switch(o){case ee.setup:l.mixRotate=x.mixRotate,l.mixX=x.mixX,l.mixY=x.mixY,l.mixScaleX=x.mixScaleX,l.mixScaleY=x.mixScaleY,l.mixShearY=x.mixShearY;return;case ee.first:l.mixRotate+=(x.mixRotate-l.mixRotate)*a,l.mixX+=(x.mixX-l.mixX)*a,l.mixY+=(x.mixY-l.mixY)*a,l.mixScaleX+=(x.mixScaleX-l.mixScaleX)*a,l.mixScaleY+=(x.mixScaleY-l.mixScaleY)*a,l.mixShearY+=(x.mixShearY-l.mixShearY)*a}return}let u,d,f,g,_,m,p=dt.search(h,i,7),M=this.curves[p/7];switch(M){case 0:let x=h[p];u=h[p+1],d=h[p+2],f=h[p+3],g=h[p+4],_=h[p+5],m=h[p+6];let v=(i-x)/(h[p+7]-x);u+=(h[p+7+1]-u)*v,d+=(h[p+7+2]-d)*v,f+=(h[p+7+3]-f)*v,g+=(h[p+7+4]-g)*v,_+=(h[p+7+5]-_)*v,m+=(h[p+7+6]-m)*v;break;case 1:u=h[p+1],d=h[p+2],f=h[p+3],g=h[p+4],_=h[p+5],m=h[p+6];break;default:u=this.getBezierValue(i,p,1,M-2),d=this.getBezierValue(i,p,2,M+18-2),f=this.getBezierValue(i,p,3,M+18*2-2),g=this.getBezierValue(i,p,4,M+18*3-2),_=this.getBezierValue(i,p,5,M+18*4-2),m=this.getBezierValue(i,p,6,M+18*5-2)}if(o==ee.setup){let x=l.data;l.mixRotate=x.mixRotate+(u-x.mixRotate)*a,l.mixX=x.mixX+(d-x.mixX)*a,l.mixY=x.mixY+(f-x.mixY)*a,l.mixScaleX=x.mixScaleX+(g-x.mixScaleX)*a,l.mixScaleY=x.mixScaleY+(_-x.mixScaleY)*a,l.mixShearY=x.mixShearY+(m-x.mixShearY)*a}else l.mixRotate+=(u-l.mixRotate)*a,l.mixX+=(d-l.mixX)*a,l.mixY+=(f-l.mixY)*a,l.mixScaleX+=(g-l.mixScaleX)*a,l.mixScaleY+=(_-l.mixScaleY)*a,l.mixShearY+=(m-l.mixShearY)*a}}class ax extends vn{constructor(t,n,i){super(t,n,He.pathConstraintPosition+"|"+i);y(this,"constraintIndex",0);this.constraintIndex=i}apply(t,n,i,s,a,o,c){let l=t.pathConstraints[this.constraintIndex];l.active&&(l.position=this.getAbsoluteValue(i,a,o,l.position,l.data.position))}}class ox extends vn{constructor(t,n,i){super(t,n,He.pathConstraintSpacing+"|"+i);y(this,"constraintIndex",0);this.constraintIndex=i}apply(t,n,i,s,a,o,c){let l=t.pathConstraints[this.constraintIndex];l.active&&(l.spacing=this.getAbsoluteValue(i,a,o,l.spacing,l.data.spacing))}}class lx extends Ln{constructor(t,n,i){super(t,n,[He.pathConstraintMix+"|"+i]);y(this,"constraintIndex",0);this.constraintIndex=i}getFrameEntries(){return 4}setFrame(t,n,i,s,a){let o=this.frames;t<<=2,o[t]=n,o[t+1]=i,o[t+2]=s,o[t+3]=a}apply(t,n,i,s,a,o,c){let l=t.pathConstraints[this.constraintIndex];if(!l.active)return;let h=this.frames;if(i<h[0]){switch(o){case ee.setup:l.mixRotate=l.data.mixRotate,l.mixX=l.data.mixX,l.mixY=l.data.mixY;return;case ee.first:l.mixRotate+=(l.data.mixRotate-l.mixRotate)*a,l.mixX+=(l.data.mixX-l.mixX)*a,l.mixY+=(l.data.mixY-l.mixY)*a}return}let u,d,f,g=dt.search(h,i,4),_=this.curves[g>>2];switch(_){case 0:let m=h[g];u=h[g+1],d=h[g+2],f=h[g+3];let p=(i-m)/(h[g+4]-m);u+=(h[g+4+1]-u)*p,d+=(h[g+4+2]-d)*p,f+=(h[g+4+3]-f)*p;break;case 1:u=h[g+1],d=h[g+2],f=h[g+3];break;default:u=this.getBezierValue(i,g,1,_-2),d=this.getBezierValue(i,g,2,_+18-2),f=this.getBezierValue(i,g,3,_+18*2-2)}if(o==ee.setup){let m=l.data;l.mixRotate=m.mixRotate+(u-m.mixRotate)*a,l.mixX=m.mixX+(d-m.mixX)*a,l.mixY=m.mixY+(f-m.mixY)*a}else l.mixRotate+=(u-l.mixRotate)*a,l.mixX+=(d-l.mixX)*a,l.mixY+=(f-l.mixY)*a}}class Bi extends vn{constructor(t,n,i,s){super(t,n,s+"|"+i);y(this,"constraintIndex",0);this.constraintIndex=i}apply(t,n,i,s,a,o,c){let l;if(this.constraintIndex==-1){const h=i>=this.frames[0]?this.getCurveValue(i):0;for(const u of t.physicsConstraints)u.active&&this.global(u.data)&&this.set(u,this.getAbsoluteValue2(i,a,o,this.get(u),this.setup(u),h))}else l=t.physicsConstraints[this.constraintIndex],l.active&&this.set(l,this.getAbsoluteValue(i,a,o,this.get(l),this.setup(l)))}}class cx extends Bi{constructor(e,t,n){super(e,t,n,He.physicsConstraintInertia)}setup(e){return e.data.inertia}get(e){return e.inertia}set(e,t){e.inertia=t}global(e){return e.inertiaGlobal}}class hx extends Bi{constructor(e,t,n){super(e,t,n,He.physicsConstraintStrength)}setup(e){return e.data.strength}get(e){return e.strength}set(e,t){e.strength=t}global(e){return e.strengthGlobal}}class ux extends Bi{constructor(e,t,n){super(e,t,n,He.physicsConstraintDamping)}setup(e){return e.data.damping}get(e){return e.damping}set(e,t){e.damping=t}global(e){return e.dampingGlobal}}class dx extends Bi{constructor(e,t,n){super(e,t,n,He.physicsConstraintMass)}setup(e){return 1/e.data.massInverse}get(e){return 1/e.massInverse}set(e,t){e.massInverse=1/t}global(e){return e.massGlobal}}class fx extends Bi{constructor(e,t,n){super(e,t,n,He.physicsConstraintWind)}setup(e){return e.data.wind}get(e){return e.wind}set(e,t){e.wind=t}global(e){return e.windGlobal}}class px extends Bi{constructor(e,t,n){super(e,t,n,He.physicsConstraintGravity)}setup(e){return e.data.gravity}get(e){return e.gravity}set(e,t){e.gravity=t}global(e){return e.gravityGlobal}}class mx extends Bi{constructor(e,t,n){super(e,t,n,He.physicsConstraintMix)}setup(e){return e.data.mix}get(e){return e.mix}set(e,t){e.mix=t}global(e){return e.mixGlobal}}const fa=class fa extends dt{constructor(t,n){super(t,fa.propertyIds);y(this,"constraintIndex");this.constraintIndex=n}getFrameCount(){return this.frames.length}setFrame(t,n){this.frames[t]=n}apply(t,n,i,s,a,o,c){let l;if(this.constraintIndex!=-1&&(l=t.physicsConstraints[this.constraintIndex],!l.active))return;const h=this.frames;if(n>i)this.apply(t,n,Number.MAX_VALUE,[],a,o,c),n=-1;else if(n>=h[h.length-1])return;if(!(i<h[0])&&(n<h[0]||i>=h[dt.search1(h,n)+1]))if(l!=null)l.reset();else for(const u of t.physicsConstraints)u.active&&u.reset()}};y(fa,"propertyIds",[He.physicsConstraintReset.toString()]);let Ko=fa;const rn=class rn extends dt{constructor(t,n,i){super(t,[He.sequence+"|"+n+"|"+i.sequence.id]);y(this,"slotIndex");y(this,"attachment");this.slotIndex=n,this.attachment=i}getFrameEntries(){return rn.ENTRIES}getSlotIndex(){return this.slotIndex}getAttachment(){return this.attachment}setFrame(t,n,i,s,a){let o=this.frames;t*=rn.ENTRIES,o[t]=n,o[t+rn.MODE]=i|s<<4,o[t+rn.DELAY]=a}apply(t,n,i,s,a,o,c){let l=t.slots[this.slotIndex];if(!l.bone.active)return;let h=l.attachment,u=this.attachment;if(h!=u&&(!(h instanceof xn)||h.timelineAttachment!=u))return;let d=this.frames;if(i<d[0]){(o==ee.setup||o==ee.first)&&(l.sequenceIndex=-1);return}let f=dt.search(d,i,rn.ENTRIES),g=d[f],_=d[f+rn.MODE],m=d[f+rn.DELAY];if(!this.attachment.sequence)return;let p=_>>4,M=this.attachment.sequence.regions.length,x=z_[_&15];if(x!=Pt.hold)switch(p+=(i-g)/m+1e-5|0,x){case Pt.once:p=Math.min(M-1,p);break;case Pt.loop:p%=M;break;case Pt.pingpong:{let v=(M<<1)-2;p=v==0?0:p%v,p>=M&&(p=v-p);break}case Pt.onceReverse:p=Math.max(M-1-p,0);break;case Pt.loopReverse:p=M-1-p%M;break;case Pt.pingpongReverse:{let v=(M<<1)-2;p=v==0?0:(p+M-1)%v,p>=M&&(p=v-p)}}l.sequenceIndex=p}};y(rn,"ENTRIES",3),y(rn,"MODE",1),y(rn,"DELAY",2);let Zo=rn;const cs=class cs{constructor(e){y(this,"data");y(this,"tracks",new Array);y(this,"timeScale",1);y(this,"unkeyedState",0);y(this,"events",new Array);y(this,"listeners",new Array);y(this,"queue",new _x(this));y(this,"propertyIDs",new du);y(this,"animationsChanged",!1);y(this,"trackEntryPool",new qo(()=>new gx));this.data=e}static emptyAnimation(){return cs._emptyAnimation}update(e){e*=this.timeScale;let t=this.tracks;for(let n=0,i=t.length;n<i;n++){let s=t[n];if(!s)continue;s.animationLast=s.nextAnimationLast,s.trackLast=s.nextTrackLast;let a=e*s.timeScale;if(s.delay>0){if(s.delay-=a,s.delay>0)continue;a=-s.delay,s.delay=0}let o=s.next;if(o){let c=s.trackLast-o.delay;if(c>=0){for(o.delay=0,o.trackTime+=s.timeScale==0?0:(c/s.timeScale+e)*o.timeScale,s.trackTime+=a,this.setCurrent(n,o,!0);o.mixingFrom;)o.mixTime+=e,o=o.mixingFrom;continue}}else if(s.trackLast>=s.trackEnd&&!s.mixingFrom){t[n]=null,this.queue.end(s),this.clearNext(s);continue}if(s.mixingFrom&&this.updateMixingFrom(s,e)){let c=s.mixingFrom;for(s.mixingFrom=null,c&&(c.mixingTo=null);c;)this.queue.end(c),c=c.mixingFrom}s.trackTime+=a}this.queue.drain()}updateMixingFrom(e,t){let n=e.mixingFrom;if(!n)return!0;let i=this.updateMixingFrom(n,t);return n.animationLast=n.nextAnimationLast,n.trackLast=n.nextTrackLast,e.mixTime>0&&e.mixTime>=e.mixDuration?((n.totalAlpha==0||e.mixDuration==0)&&(e.mixingFrom=n.mixingFrom,n.mixingFrom&&(n.mixingFrom.mixingTo=e),e.interruptAlpha=n.interruptAlpha,this.queue.end(n)),i):(n.trackTime+=t*n.timeScale,e.mixTime+=t,!1)}apply(e){if(!e)throw new Error("skeleton cannot be null.");this.animationsChanged&&this._animationsChanged();let t=this.events,n=this.tracks,i=!1;for(let d=0,f=n.length;d<f;d++){let g=n[d];if(!g||g.delay>0)continue;i=!0;let _=d==0?ee.first:g.mixBlend,m=g.alpha;g.mixingFrom?m*=this.applyMixingFrom(g,e,_):g.trackTime>=g.trackEnd&&!g.next&&(m=0);let p=m>=g.alphaAttachmentThreshold,M=g.animationLast,x=g.getAnimationTime(),v=x,w=t;g.reverse&&(v=g.animation.duration-v,w=null);let S=g.animation.timelines,b=S.length;if(d==0&&m==1||_==ee.add){d==0&&(p=!0);for(let C=0;C<b;C++){var s=S[C];s instanceof $s?this.applyAttachmentTimeline(s,e,v,_,p):s.apply(e,M,v,w,m,_,Gt.mixIn)}}else{let C=g.timelineMode,E=g.shortestRotation,A=!E&&g.timelinesRotation.length!=b<<1;A&&(g.timelinesRotation.length=b<<1);for(let P=0;P<b;P++){let k=S[P],F=C[P]==to?_:ee.setup;!E&&k instanceof jo?this.applyRotateTimeline(k,e,v,m,F,g.timelinesRotation,P<<1,A):k instanceof $s?this.applyAttachmentTimeline(k,e,v,_,p):k.apply(e,M,v,w,m,F,Gt.mixIn)}}this.queueEvents(g,x),t.length=0,g.nextAnimationLast=x,g.nextTrackLast=g.trackTime}for(var a=this.unkeyedState+ih,o=e.slots,c=0,l=e.slots.length;c<l;c++){var h=o[c];if(h.attachmentState==a){var u=h.data.attachmentName;h.setAttachment(u?e.getAttachment(h.data.index,u):null)}}return this.unkeyedState+=2,this.queue.drain(),i}applyMixingFrom(e,t,n){let i=e.mixingFrom;i.mixingFrom&&this.applyMixingFrom(i,t,n);let s=0;e.mixDuration==0?(s=1,n==ee.first&&(n=ee.setup)):(s=e.mixTime/e.mixDuration,s>1&&(s=1),n!=ee.first&&(n=i.mixBlend));let a=s<i.mixAttachmentThreshold,o=s<i.mixDrawOrderThreshold,c=i.animation.timelines,l=c.length,h=i.alpha*e.interruptAlpha,u=h*(1-s),d=i.animationLast,f=i.getAnimationTime(),g=f,_=null;if(i.reverse?g=i.animation.duration-g:s<i.eventThreshold&&(_=this.events),n==ee.add)for(let m=0;m<l;m++)c[m].apply(t,d,g,_,u,n,Gt.mixOut);else{let m=i.timelineMode,p=i.timelineHoldMix,M=i.shortestRotation,x=!M&&i.timelinesRotation.length!=l<<1;x&&(i.timelinesRotation.length=l<<1),i.totalAlpha=0;for(let v=0;v<l;v++){let w=c[v],S=Gt.mixOut,b,C=0;switch(m[v]){case to:if(!o&&w instanceof ms)continue;b=n,C=u;break;case th:b=ee.setup,C=u;break;case nh:b=n,C=h;break;case no:b=ee.setup,C=h;break;default:b=ee.setup;let E=p[v];C=h*Math.max(0,1-E.mixTime/E.mixDuration);break}i.totalAlpha+=C,!M&&w instanceof jo?this.applyRotateTimeline(w,t,g,C,b,i.timelinesRotation,v<<1,x):w instanceof $s?this.applyAttachmentTimeline(w,t,g,b,a&&C>=i.alphaAttachmentThreshold):(o&&w instanceof ms&&b==ee.setup&&(S=Gt.mixIn),w.apply(t,d,g,_,C,b,S))}}return e.mixDuration>0&&this.queueEvents(i,f),this.events.length=0,i.nextAnimationLast=f,i.nextTrackLast=i.trackTime,s}applyAttachmentTimeline(e,t,n,i,s){var a=t.slots[e.slotIndex];a.bone.active&&(n<e.frames[0]?(i==ee.setup||i==ee.first)&&this.setAttachment(t,a,a.data.attachmentName,s):this.setAttachment(t,a,e.attachmentNames[dt.search1(e.frames,n)],s),a.attachmentState<=this.unkeyedState&&(a.attachmentState=this.unkeyedState+ih))}setAttachment(e,t,n,i){t.setAttachment(n?e.getAttachment(t.data.index,n):null),i&&(t.attachmentState=this.unkeyedState+vx)}applyRotateTimeline(e,t,n,i,s,a,o,c){if(c&&(a[o]=0),i==1){e.apply(t,0,n,null,1,s,Gt.mixIn);return}let l=t.bones[e.boneIndex];if(!l.active)return;let h=e.frames,u=0,d=0;if(n<h[0])switch(s){case ee.setup:l.rotation=l.data.rotation;default:return;case ee.first:u=l.rotation,d=l.data.rotation}else u=s==ee.setup?l.data.rotation:l.rotation,d=l.data.rotation+e.getCurveValue(n);let f=0,g=d-u;if(g-=Math.ceil(g/360-.5)*360,g==0)f=a[o];else{let _=0,m=0;c?(_=0,m=g):(_=a[o],m=a[o+1]);let p=_-_%360;f=g+p;let M=g>=0,x=_>=0;Math.abs(m)<=90&&le.signum(m)!=le.signum(g)&&(Math.abs(_-p)>180?(f+=360*le.signum(_),x=M):p!=0?f-=360*le.signum(_):x=M),x!=M&&(f+=360*le.signum(_)),a[o]=f}a[o+1]=g,l.rotation=u+f*i}queueEvents(e,t){let n=e.animationStart,i=e.animationEnd,s=i-n,a=e.trackLast%s,o=this.events,c=0,l=o.length;for(;c<l;c++){let u=o[c];if(u.time<a)break;u.time>i||this.queue.event(e,u)}let h=!1;if(e.loop)if(s==0)h=!0;else{const u=Math.floor(e.trackTime/s);h=u>0&&u>Math.floor(e.trackLast/s)}else h=t>=i&&e.animationLast<i;for(h&&this.queue.complete(e);c<l;c++){let u=o[c];u.time<n||this.queue.event(e,u)}}clearTracks(){let e=this.queue.drainDisabled;this.queue.drainDisabled=!0;for(let t=0,n=this.tracks.length;t<n;t++)this.clearTrack(t);this.tracks.length=0,this.queue.drainDisabled=e,this.queue.drain()}clearTrack(e){if(e>=this.tracks.length)return;let t=this.tracks[e];if(!t)return;this.queue.end(t),this.clearNext(t);let n=t;for(;;){let i=n.mixingFrom;if(!i)break;this.queue.end(i),n.mixingFrom=null,n.mixingTo=null,n=i}this.tracks[t.trackIndex]=null,this.queue.drain()}setCurrent(e,t,n){let i=this.expandToIndex(e);this.tracks[e]=t,t.previous=null,i&&(n&&this.queue.interrupt(i),t.mixingFrom=i,i.mixingTo=t,t.mixTime=0,i.mixingFrom&&i.mixDuration>0&&(t.interruptAlpha*=Math.min(1,i.mixTime/i.mixDuration)),i.timelinesRotation.length=0),this.queue.start(t)}setAnimation(e,t,n=!1){let i=this.data.skeletonData.findAnimation(t);if(!i)throw new Error("Animation not found: "+t);return this.setAnimationWith(e,i,n)}setAnimationWith(e,t,n=!1){if(!t)throw new Error("animation cannot be null.");let i=!0,s=this.expandToIndex(e);s&&(s.nextTrackLast==-1?(this.tracks[e]=s.mixingFrom,this.queue.interrupt(s),this.queue.end(s),this.clearNext(s),s=s.mixingFrom,i=!1):this.clearNext(s));let a=this.trackEntry(e,t,n,s);return this.setCurrent(e,a,i),this.queue.drain(),a}addAnimation(e,t,n=!1,i=0){let s=this.data.skeletonData.findAnimation(t);if(!s)throw new Error("Animation not found: "+t);return this.addAnimationWith(e,s,n,i)}addAnimationWith(e,t,n=!1,i=0){if(!t)throw new Error("animation cannot be null.");let s=this.expandToIndex(e);if(s)for(;s.next;)s=s.next;let a=this.trackEntry(e,t,n,s);return s?(s.next=a,a.previous=s,i<=0&&(i+=s.getTrackComplete()-a.mixDuration)):(this.setCurrent(e,a,!0),this.queue.drain()),a.delay=i,a}setEmptyAnimation(e,t=0){let n=this.setAnimationWith(e,cs.emptyAnimation(),!1);return n.mixDuration=t,n.trackEnd=t,n}addEmptyAnimation(e,t=0,n=0){let i=this.addAnimationWith(e,cs.emptyAnimation(),!1,n);return n<=0&&(i.delay+=i.mixDuration-t),i.mixDuration=t,i.trackEnd=t,i}setEmptyAnimations(e=0){let t=this.queue.drainDisabled;this.queue.drainDisabled=!0;for(let n=0,i=this.tracks.length;n<i;n++){let s=this.tracks[n];s&&this.setEmptyAnimation(s.trackIndex,e)}this.queue.drainDisabled=t,this.queue.drain()}expandToIndex(e){return e<this.tracks.length?this.tracks[e]:(me.ensureArrayCapacity(this.tracks,e+1,null),this.tracks.length=e+1,null)}trackEntry(e,t,n,i){let s=this.trackEntryPool.obtain();return s.reset(),s.trackIndex=e,s.animation=t,s.loop=n,s.holdPrevious=!1,s.reverse=!1,s.shortestRotation=!1,s.eventThreshold=0,s.alphaAttachmentThreshold=0,s.mixAttachmentThreshold=0,s.mixDrawOrderThreshold=0,s.animationStart=0,s.animationEnd=t.duration,s.animationLast=-1,s.nextAnimationLast=-1,s.delay=0,s.trackTime=0,s.trackLast=-1,s.nextTrackLast=-1,s.trackEnd=Number.MAX_VALUE,s.timeScale=1,s.alpha=1,s.mixTime=0,s.mixDuration=i?this.data.getMix(i.animation,t):0,s.interruptAlpha=1,s.totalAlpha=0,s.mixBlend=ee.replace,s}clearNext(e){let t=e.next;for(;t;)this.queue.dispose(t),t=t.next;e.next=null}_animationsChanged(){this.animationsChanged=!1,this.propertyIDs.clear();let e=this.tracks;for(let t=0,n=e.length;t<n;t++){let i=e[t];if(i){for(;i.mixingFrom;)i=i.mixingFrom;do(!i.mixingTo||i.mixBlend!=ee.add)&&this.computeHold(i),i=i.mixingTo;while(i)}}}computeHold(e){let t=e.mixingTo,n=e.animation.timelines,i=e.animation.timelines.length,s=e.timelineMode;s.length=i;let a=e.timelineHoldMix;a.length=0;let o=this.propertyIDs;if(t&&t.holdPrevious){for(let c=0;c<i;c++)s[c]=o.addAll(n[c].getPropertyIds())?no:nh;return}e:for(let c=0;c<i;c++){let l=n[c],h=l.getPropertyIds();if(!o.addAll(h))s[c]=to;else if(!t||l instanceof $s||l instanceof ms||l instanceof la||!t.animation.hasTimeline(h))s[c]=th;else{for(let u=t.mixingTo;u;u=u.mixingTo)if(!u.animation.hasTimeline(h)){if(e.mixDuration>0){s[c]=xx,a[c]=u;continue e}break}s[c]=no}}}getCurrent(e){return e>=this.tracks.length?null:this.tracks[e]}addListener(e){if(!e)throw new Error("listener cannot be null.");this.listeners.push(e)}removeListener(e){let t=this.listeners.indexOf(e);t>=0&&this.listeners.splice(t,1)}clearListeners(){this.listeners.length=0}clearListenerNotifications(){this.queue.clear()}};y(cs,"_emptyAnimation",new pu("<empty>",[],0));let Jo=cs;class gx{constructor(){y(this,"animation",null);y(this,"previous",null);y(this,"next",null);y(this,"mixingFrom",null);y(this,"mixingTo",null);y(this,"listener",null);y(this,"trackIndex",0);y(this,"loop",!1);y(this,"holdPrevious",!1);y(this,"reverse",!1);y(this,"shortestRotation",!1);y(this,"eventThreshold",0);y(this,"mixAttachmentThreshold",0);y(this,"alphaAttachmentThreshold",0);y(this,"mixDrawOrderThreshold",0);y(this,"animationStart",0);y(this,"animationEnd",0);y(this,"animationLast",0);y(this,"nextAnimationLast",0);y(this,"delay",0);y(this,"trackTime",0);y(this,"trackLast",0);y(this,"nextTrackLast",0);y(this,"trackEnd",0);y(this,"timeScale",0);y(this,"alpha",0);y(this,"mixTime",0);y(this,"_mixDuration",0);y(this,"interruptAlpha",0);y(this,"totalAlpha",0);y(this,"mixBlend",ee.replace);y(this,"timelineMode",new Array);y(this,"timelineHoldMix",new Array);y(this,"timelinesRotation",new Array)}get mixDuration(){return this._mixDuration}set mixDuration(e){this._mixDuration=e}setMixDurationWithDelay(e,t){this._mixDuration=e,this.previous!=null&&t<=0&&(t+=this.previous.getTrackComplete()-e),this.delay=t}reset(){this.next=null,this.previous=null,this.mixingFrom=null,this.mixingTo=null,this.animation=null,this.listener=null,this.timelineMode.length=0,this.timelineHoldMix.length=0,this.timelinesRotation.length=0}getAnimationTime(){if(this.loop){let e=this.animationEnd-this.animationStart;return e==0?this.animationStart:this.trackTime%e+this.animationStart}return Math.min(this.trackTime+this.animationStart,this.animationEnd)}setAnimationLast(e){this.animationLast=e,this.nextAnimationLast=e}isComplete(){return this.trackTime>=this.animationEnd-this.animationStart}resetRotationDirections(){this.timelinesRotation.length=0}getTrackComplete(){let e=this.animationEnd-this.animationStart;if(e!=0){if(this.loop)return e*(1+(this.trackTime/e|0));if(this.trackTime<e)return e}return this.trackTime}wasApplied(){return this.nextTrackLast!=-1}isNextReady(){return this.next!=null&&this.nextTrackLast-this.next.delay>=0}}class _x{constructor(e){y(this,"objects",[]);y(this,"drainDisabled",!1);y(this,"animState");this.animState=e}start(e){this.objects.push(Wt.start),this.objects.push(e),this.animState.animationsChanged=!0}interrupt(e){this.objects.push(Wt.interrupt),this.objects.push(e)}end(e){this.objects.push(Wt.end),this.objects.push(e),this.animState.animationsChanged=!0}dispose(e){this.objects.push(Wt.dispose),this.objects.push(e)}complete(e){this.objects.push(Wt.complete),this.objects.push(e)}event(e,t){this.objects.push(Wt.event),this.objects.push(e),this.objects.push(t)}drain(){if(this.drainDisabled)return;this.drainDisabled=!0;let e=this.objects,t=this.animState.listeners;for(let n=0;n<e.length;n+=2){let i=e[n],s=e[n+1];switch(i){case Wt.start:s.listener&&s.listener.start&&s.listener.start(s);for(let o=0;o<t.length;o++){let c=t[o];c.start&&c.start(s)}break;case Wt.interrupt:s.listener&&s.listener.interrupt&&s.listener.interrupt(s);for(let o=0;o<t.length;o++){let c=t[o];c.interrupt&&c.interrupt(s)}break;case Wt.end:s.listener&&s.listener.end&&s.listener.end(s);for(let o=0;o<t.length;o++){let c=t[o];c.end&&c.end(s)}case Wt.dispose:s.listener&&s.listener.dispose&&s.listener.dispose(s);for(let o=0;o<t.length;o++){let c=t[o];c.dispose&&c.dispose(s)}this.animState.trackEntryPool.free(s);break;case Wt.complete:s.listener&&s.listener.complete&&s.listener.complete(s);for(let o=0;o<t.length;o++){let c=t[o];c.complete&&c.complete(s)}break;case Wt.event:let a=e[n+++2];s.listener&&s.listener.event&&s.listener.event(s,a);for(let o=0;o<t.length;o++){let c=t[o];c.event&&c.event(s,a)}break}}this.clear(),this.drainDisabled=!1}clear(){this.objects.length=0}}var Wt;(function(r){r[r.start=0]="start",r[r.interrupt=1]="interrupt",r[r.end=2]="end",r[r.dispose=3]="dispose",r[r.complete=4]="complete",r[r.event=5]="event"})(Wt||(Wt={}));const to=0,th=1,nh=2,no=3,xx=4,ih=1,vx=2;class yx{constructor(e){y(this,"skeletonData");y(this,"animationToMixTime",{});y(this,"defaultMix",0);if(!e)throw new Error("skeletonData cannot be null.");this.skeletonData=e}setMix(e,t,n){let i=this.skeletonData.findAnimation(e);if(!i)throw new Error("Animation not found: "+e);let s=this.skeletonData.findAnimation(t);if(!s)throw new Error("Animation not found: "+t);this.setMixWith(i,s,n)}setMixWith(e,t,n){if(!e)throw new Error("from cannot be null.");if(!t)throw new Error("to cannot be null.");let i=e.name+"."+t.name;this.animationToMixTime[i]=n}getMix(e,t){let n=e.name+"."+t.name,i=this.animationToMixTime[n];return i===void 0?this.defaultMix:i}}class Al extends xn{constructor(t){super(t);y(this,"color",new et(1,1,1,1))}copy(){let t=new Al(this.name);return this.copyTo(t),t.color.setFromColor(this.color),t}}class dr extends xn{constructor(t){super(t);y(this,"endSlot",null);y(this,"color",new et(.2275,.2275,.8078,1))}copy(){let t=new dr(this.name);return this.copyTo(t),t.endSlot=this.endSlot,t.color.setFromColor(this.color),t}}class Mx{constructor(e){y(this,"_image");this._image=e}getImage(){return this._image}}var on;(function(r){r[r.Nearest=9728]="Nearest",r[r.Linear=9729]="Linear",r[r.MipMap=9987]="MipMap",r[r.MipMapNearestNearest=9984]="MipMapNearestNearest",r[r.MipMapLinearNearest=9985]="MipMapLinearNearest",r[r.MipMapNearestLinear=9986]="MipMapNearestLinear",r[r.MipMapLinearLinear=9987]="MipMapLinearLinear"})(on||(on={}));var Yn;(function(r){r[r.MirroredRepeat=33648]="MirroredRepeat",r[r.ClampToEdge=33071]="ClampToEdge",r[r.Repeat=10497]="Repeat"})(Yn||(Yn={}));class Sx{constructor(){y(this,"texture");y(this,"u",0);y(this,"v",0);y(this,"u2",0);y(this,"v2",0);y(this,"width",0);y(this,"height",0);y(this,"degrees",0);y(this,"offsetX",0);y(this,"offsetY",0);y(this,"originalWidth",0);y(this,"originalHeight",0)}}class bx{constructor(e){y(this,"pages",new Array);y(this,"regions",new Array);let t=new Ex(e),n=new Array(4),i={};i.size=h=>{h.width=parseInt(n[1]),h.height=parseInt(n[2])},i.format=()=>{},i.filter=h=>{h.minFilter=me.enumValue(on,n[1]),h.magFilter=me.enumValue(on,n[2])},i.repeat=h=>{n[1].indexOf("x")!=-1&&(h.uWrap=Yn.Repeat),n[1].indexOf("y")!=-1&&(h.vWrap=Yn.Repeat)},i.pma=h=>{h.pma=n[1]=="true"};var s={};s.xy=h=>{h.x=parseInt(n[1]),h.y=parseInt(n[2])},s.size=h=>{h.width=parseInt(n[1]),h.height=parseInt(n[2])},s.bounds=h=>{h.x=parseInt(n[1]),h.y=parseInt(n[2]),h.width=parseInt(n[3]),h.height=parseInt(n[4])},s.offset=h=>{h.offsetX=parseInt(n[1]),h.offsetY=parseInt(n[2])},s.orig=h=>{h.originalWidth=parseInt(n[1]),h.originalHeight=parseInt(n[2])},s.offsets=h=>{h.offsetX=parseInt(n[1]),h.offsetY=parseInt(n[2]),h.originalWidth=parseInt(n[3]),h.originalHeight=parseInt(n[4])},s.rotate=h=>{let u=n[1];u=="true"?h.degrees=90:u!="false"&&(h.degrees=parseInt(u))},s.index=h=>{h.index=parseInt(n[1])};let a=t.readLine();for(;a&&a.trim().length==0;)a=t.readLine();for(;!(!a||a.trim().length==0||t.readEntry(n,a)==0);)a=t.readLine();let o=null,c=null,l=null;for(;a!==null;)if(a.trim().length==0)o=null,a=t.readLine();else if(o){let h=new mu(o,a);for(;;){let u=t.readEntry(n,a=t.readLine());if(u==0)break;let d=s[n[0]];if(d)d(h);else{c||(c=[]),l||(l=[]),c.push(n[0]);let f=[];for(let g=0;g<u;g++)f.push(parseInt(n[g+1]));l.push(f)}}h.originalWidth==0&&h.originalHeight==0&&(h.originalWidth=h.width,h.originalHeight=h.height),c&&c.length>0&&l&&l.length>0&&(h.names=c,h.values=l,c=null,l=null),h.u=h.x/o.width,h.v=h.y/o.height,h.degrees==90?(h.u2=(h.x+h.height)/o.width,h.v2=(h.y+h.width)/o.height):(h.u2=(h.x+h.width)/o.width,h.v2=(h.y+h.height)/o.height),this.regions.push(h)}else{for(o=new Ax(a.trim());t.readEntry(n,a=t.readLine())!=0;){let h=i[n[0]];h&&h(o)}this.pages.push(o)}}findRegion(e){for(let t=0;t<this.regions.length;t++)if(this.regions[t].name==e)return this.regions[t];return null}setTextures(e,t=""){for(let n of this.pages)n.setTexture(e.get(t+n.name))}dispose(){var e;for(let t=0;t<this.pages.length;t++)(e=this.pages[t].texture)==null||e.dispose()}}class Ex{constructor(e){y(this,"lines");y(this,"index",0);this.lines=e.split(/\r\n|\r|\n/)}readLine(){return this.index>=this.lines.length?null:this.lines[this.index++]}readEntry(e,t){if(!t||(t=t.trim(),t.length==0))return 0;let n=t.indexOf(":");if(n==-1)return 0;e[0]=t.substr(0,n).trim();for(let i=1,s=n+1;;i++){let a=t.indexOf(",",s);if(a==-1)return e[i]=t.substr(s).trim(),i;if(e[i]=t.substr(s,a-s).trim(),s=a+1,i==4)return 4}}}class Ax{constructor(e){y(this,"name");y(this,"minFilter",on.Nearest);y(this,"magFilter",on.Nearest);y(this,"uWrap",Yn.ClampToEdge);y(this,"vWrap",Yn.ClampToEdge);y(this,"texture",null);y(this,"width",0);y(this,"height",0);y(this,"pma",!1);y(this,"regions",new Array);this.name=e}setTexture(e){this.texture=e,e.setFilters(this.minFilter,this.magFilter),e.setWraps(this.uWrap,this.vWrap);for(let t of this.regions)t.texture=e}}class mu extends Sx{constructor(t,n){super();y(this,"page");y(this,"name");y(this,"x",0);y(this,"y",0);y(this,"offsetX",0);y(this,"offsetY",0);y(this,"originalWidth",0);y(this,"originalHeight",0);y(this,"index",0);y(this,"degrees",0);y(this,"names",null);y(this,"values",null);this.page=t,this.name=n,t.regions.push(this)}}class Ui extends xn{constructor(t,n){super(t);y(this,"region",null);y(this,"path");y(this,"regionUVs",[]);y(this,"uvs",[]);y(this,"triangles",[]);y(this,"color",new et(1,1,1,1));y(this,"width",0);y(this,"height",0);y(this,"hullLength",0);y(this,"edges",[]);y(this,"parentMesh",null);y(this,"sequence",null);y(this,"tempColor",new et(0,0,0,0));this.path=n}updateRegion(){if(!this.region)throw new Error("Region not set.");let t=this.regionUVs;(!this.uvs||this.uvs.length!=t.length)&&(this.uvs=me.newFloatArray(t.length));let n=this.uvs,i=this.uvs.length,s=this.region.u,a=this.region.v,o=0,c=0;if(this.region instanceof mu){let l=this.region,h=l.page,u=h.width,d=h.height;switch(l.degrees){case 90:s-=(l.originalHeight-l.offsetY-l.height)/u,a-=(l.originalWidth-l.offsetX-l.width)/d,o=l.originalHeight/u,c=l.originalWidth/d;for(let f=0;f<i;f+=2)n[f]=s+t[f+1]*o,n[f+1]=a+(1-t[f])*c;return;case 180:s-=(l.originalWidth-l.offsetX-l.width)/u,a-=l.offsetY/d,o=l.originalWidth/u,c=l.originalHeight/d;for(let f=0;f<i;f+=2)n[f]=s+(1-t[f])*o,n[f+1]=a+(1-t[f+1])*c;return;case 270:s-=l.offsetY/u,a-=l.offsetX/d,o=l.originalHeight/u,c=l.originalWidth/d;for(let f=0;f<i;f+=2)n[f]=s+(1-t[f+1])*o,n[f+1]=a+t[f]*c;return}s-=l.offsetX/u,a-=(l.originalHeight-l.offsetY-l.height)/d,o=l.originalWidth/u,c=l.originalHeight/d}else this.region?(o=this.region.u2-s,c=this.region.v2-a):(s=a=0,o=c=1);for(let l=0;l<i;l+=2)n[l]=s+t[l]*o,n[l+1]=a+t[l+1]*c}getParentMesh(){return this.parentMesh}setParentMesh(t){this.parentMesh=t,t&&(this.bones=t.bones,this.vertices=t.vertices,this.worldVerticesLength=t.worldVerticesLength,this.regionUVs=t.regionUVs,this.triangles=t.triangles,this.hullLength=t.hullLength,this.worldVerticesLength=t.worldVerticesLength)}copy(){if(this.parentMesh)return this.newLinkedMesh();let t=new Ui(this.name,this.path);return t.region=this.region,t.color.setFromColor(this.color),this.copyTo(t),t.regionUVs=new Array(this.regionUVs.length),me.arrayCopy(this.regionUVs,0,t.regionUVs,0,this.regionUVs.length),t.uvs=new Array(this.uvs.length),me.arrayCopy(this.uvs,0,t.uvs,0,this.uvs.length),t.triangles=new Array(this.triangles.length),me.arrayCopy(this.triangles,0,t.triangles,0,this.triangles.length),t.hullLength=this.hullLength,t.sequence=this.sequence!=null?this.sequence.copy():null,this.edges&&(t.edges=new Array(this.edges.length),me.arrayCopy(this.edges,0,t.edges,0,this.edges.length)),t.width=this.width,t.height=this.height,t}computeWorldVertices(t,n,i,s,a,o){this.sequence!=null&&this.sequence.apply(t,this),super.computeWorldVertices(t,n,i,s,a,o)}newLinkedMesh(){let t=new Ui(this.name,this.path);return t.region=this.region,t.color.setFromColor(this.color),t.timelineAttachment=this.timelineAttachment,t.setParentMesh(this.parentMesh?this.parentMesh:this),t.region!=null&&t.updateRegion(),t}}class Ts extends xn{constructor(t){super(t);y(this,"lengths",[]);y(this,"closed",!1);y(this,"constantSpeed",!1);y(this,"color",new et(1,1,1,1))}copy(){let t=new Ts(this.name);return this.copyTo(t),t.lengths=new Array(this.lengths.length),me.arrayCopy(this.lengths,0,t.lengths,0,this.lengths.length),t.closed=closed,t.constantSpeed=this.constantSpeed,t.color.setFromColor(this.color),t}}class wl extends xn{constructor(t){super(t);y(this,"x",0);y(this,"y",0);y(this,"rotation",0);y(this,"color",new et(.38,.94,0,1))}computeWorldPosition(t,n){return n.x=this.x*t.a+this.y*t.b+t.worldX,n.y=this.x*t.c+this.y*t.d+t.worldY,n}computeWorldRotation(t){const n=this.rotation*le.degRad,i=Math.cos(n),s=Math.sin(n),a=i*t.a+s*t.b,o=i*t.c+s*t.d;return le.atan2Deg(o,a)}copy(){let t=new wl(this.name);return t.x=this.x,t.y=this.y,t.rotation=this.rotation,t.color.setFromColor(this.color),t}}const Ke=class Ke extends fu{constructor(t,n){super(t);y(this,"x",0);y(this,"y",0);y(this,"scaleX",1);y(this,"scaleY",1);y(this,"rotation",0);y(this,"width",0);y(this,"height",0);y(this,"color",new et(1,1,1,1));y(this,"path");y(this,"region",null);y(this,"sequence",null);y(this,"offset",me.newFloatArray(8));y(this,"uvs",me.newFloatArray(8));y(this,"tempColor",new et(1,1,1,1));this.path=n}updateRegion(){if(!this.region)throw new Error("Region not set.");let t=this.region,n=this.uvs;if(t==null){n[0]=0,n[1]=0,n[2]=0,n[3]=1,n[4]=1,n[5]=1,n[6]=1,n[7]=0;return}let i=this.width/this.region.originalWidth*this.scaleX,s=this.height/this.region.originalHeight*this.scaleY,a=-this.width/2*this.scaleX+this.region.offsetX*i,o=-this.height/2*this.scaleY+this.region.offsetY*s,c=a+this.region.width*i,l=o+this.region.height*s,h=this.rotation*le.degRad,u=Math.cos(h),d=Math.sin(h),f=this.x,g=this.y,_=a*u+f,m=a*d,p=o*u+g,M=o*d,x=c*u+f,v=c*d,w=l*u+g,S=l*d,b=this.offset;b[0]=_-M,b[1]=p+m,b[2]=_-S,b[3]=w+m,b[4]=x-S,b[5]=w+v,b[6]=x-M,b[7]=p+v,t.degrees==90?(n[0]=t.u2,n[1]=t.v2,n[2]=t.u,n[3]=t.v2,n[4]=t.u,n[5]=t.v,n[6]=t.u2,n[7]=t.v):(n[0]=t.u,n[1]=t.v2,n[2]=t.u,n[3]=t.v,n[4]=t.u2,n[5]=t.v,n[6]=t.u2,n[7]=t.v2)}computeWorldVertices(t,n,i,s){this.sequence!=null&&this.sequence.apply(t,this);let a=t.bone,o=this.offset,c=a.worldX,l=a.worldY,h=a.a,u=a.b,d=a.c,f=a.d,g=0,_=0;g=o[0],_=o[1],n[i]=g*h+_*u+c,n[i+1]=g*d+_*f+l,i+=s,g=o[2],_=o[3],n[i]=g*h+_*u+c,n[i+1]=g*d+_*f+l,i+=s,g=o[4],_=o[5],n[i]=g*h+_*u+c,n[i+1]=g*d+_*f+l,i+=s,g=o[6],_=o[7],n[i]=g*h+_*u+c,n[i+1]=g*d+_*f+l}copy(){let t=new Ke(this.name,this.path);return t.region=this.region,t.x=this.x,t.y=this.y,t.scaleX=this.scaleX,t.scaleY=this.scaleY,t.rotation=this.rotation,t.width=this.width,t.height=this.height,me.arrayCopy(this.uvs,0,t.uvs,0,8),me.arrayCopy(this.offset,0,t.offset,0,8),t.color.setFromColor(this.color),t.sequence=this.sequence!=null?this.sequence.copy():null,t}};y(Ke,"X1",0),y(Ke,"Y1",1),y(Ke,"C1R",2),y(Ke,"C1G",3),y(Ke,"C1B",4),y(Ke,"C1A",5),y(Ke,"U1",6),y(Ke,"V1",7),y(Ke,"X2",8),y(Ke,"Y2",9),y(Ke,"C2R",10),y(Ke,"C2G",11),y(Ke,"C2B",12),y(Ke,"C2A",13),y(Ke,"U2",14),y(Ke,"V2",15),y(Ke,"X3",16),y(Ke,"Y3",17),y(Ke,"C3R",18),y(Ke,"C3G",19),y(Ke,"C3B",20),y(Ke,"C3A",21),y(Ke,"U3",22),y(Ke,"V3",23),y(Ke,"X4",24),y(Ke,"Y4",25),y(Ke,"C4R",26),y(Ke,"C4G",27),y(Ke,"C4B",28),y(Ke,"C4A",29),y(Ke,"U4",30),y(Ke,"V4",31);let ar=Ke;class wx{constructor(e){y(this,"atlas");this.atlas=e}loadSequence(e,t,n){let i=n.regions;for(let s=0,a=i.length;s<a;s++){let o=n.getPath(t,s),c=this.atlas.findRegion(o);if(c==null)throw new Error("Region not found in atlas: "+o+" (sequence: "+e+")");i[s]=c}}newRegionAttachment(e,t,n,i){let s=new ar(t,n);if(i!=null)this.loadSequence(t,n,i);else{let a=this.atlas.findRegion(n);if(!a)throw new Error("Region not found in atlas: "+n+" (region attachment: "+t+")");s.region=a}return s}newMeshAttachment(e,t,n,i){let s=new Ui(t,n);if(i!=null)this.loadSequence(t,n,i);else{let a=this.atlas.findRegion(n);if(!a)throw new Error("Region not found in atlas: "+n+" (mesh attachment: "+t+")");s.region=a}return s}newBoundingBoxAttachment(e,t){return new Al(t)}newPathAttachment(e,t){return new Ts(t)}newPointAttachment(e,t){return new wl(t)}newClippingAttachment(e,t){return new dr(t)}}class Tx{constructor(e,t,n){y(this,"index",0);y(this,"name");y(this,"parent",null);y(this,"length",0);y(this,"x",0);y(this,"y",0);y(this,"rotation",0);y(this,"scaleX",1);y(this,"scaleY",1);y(this,"shearX",0);y(this,"shearY",0);y(this,"inherit",pt.Normal);y(this,"skinRequired",!1);y(this,"color",new et);y(this,"icon");y(this,"visible",!1);if(e<0)throw new Error("index must be >= 0.");if(!t)throw new Error("name cannot be null.");this.index=e,this.name=t,this.parent=n}}var pt;(function(r){r[r.Normal=0]="Normal",r[r.OnlyTranslation=1]="OnlyTranslation",r[r.NoRotationOrReflection=2]="NoRotationOrReflection",r[r.NoScale=3]="NoScale",r[r.NoScaleOrReflection=4]="NoScaleOrReflection"})(pt||(pt={}));class sh{constructor(e,t,n){y(this,"data");y(this,"skeleton");y(this,"parent",null);y(this,"children",new Array);y(this,"x",0);y(this,"y",0);y(this,"rotation",0);y(this,"scaleX",0);y(this,"scaleY",0);y(this,"shearX",0);y(this,"shearY",0);y(this,"ax",0);y(this,"ay",0);y(this,"arotation",0);y(this,"ascaleX",0);y(this,"ascaleY",0);y(this,"ashearX",0);y(this,"ashearY",0);y(this,"a",0);y(this,"b",0);y(this,"c",0);y(this,"d",0);y(this,"worldY",0);y(this,"worldX",0);y(this,"inherit",pt.Normal);y(this,"sorted",!1);y(this,"active",!1);if(!e)throw new Error("data cannot be null.");if(!t)throw new Error("skeleton cannot be null.");this.data=e,this.skeleton=t,this.parent=n,this.setToSetupPose()}isActive(){return this.active}update(e){this.updateWorldTransformWith(this.ax,this.ay,this.arotation,this.ascaleX,this.ascaleY,this.ashearX,this.ashearY)}updateWorldTransform(){this.updateWorldTransformWith(this.x,this.y,this.rotation,this.scaleX,this.scaleY,this.shearX,this.shearY)}updateWorldTransformWith(e,t,n,i,s,a,o){this.ax=e,this.ay=t,this.arotation=n,this.ascaleX=i,this.ascaleY=s,this.ashearX=a,this.ashearY=o;let c=this.parent;if(!c){let f=this.skeleton;const g=f.scaleX,_=f.scaleY,m=(n+a)*le.degRad,p=(n+90+o)*le.degRad;this.a=Math.cos(m)*i*g,this.b=Math.cos(p)*s*g,this.c=Math.sin(m)*i*_,this.d=Math.sin(p)*s*_,this.worldX=e*g+f.x,this.worldY=t*_+f.y;return}let l=c.a,h=c.b,u=c.c,d=c.d;switch(this.worldX=l*e+h*t+c.worldX,this.worldY=u*e+d*t+c.worldY,this.inherit){case pt.Normal:{const f=(n+a)*le.degRad,g=(n+90+o)*le.degRad,_=Math.cos(f)*i,m=Math.cos(g)*s,p=Math.sin(f)*i,M=Math.sin(g)*s;this.a=l*_+h*p,this.b=l*m+h*M,this.c=u*_+d*p,this.d=u*m+d*M;return}case pt.OnlyTranslation:{const f=(n+a)*le.degRad,g=(n+90+o)*le.degRad;this.a=Math.cos(f)*i,this.b=Math.cos(g)*s,this.c=Math.sin(f)*i,this.d=Math.sin(g)*s;break}case pt.NoRotationOrReflection:{let f=l*l+u*u,g=0;f>1e-4?(f=Math.abs(l*d-h*u)/f,l/=this.skeleton.scaleX,u/=this.skeleton.scaleY,h=u*f,d=l*f,g=Math.atan2(u,l)*le.radDeg):(l=0,u=0,g=90-Math.atan2(d,h)*le.radDeg);const _=(n+a-g)*le.degRad,m=(n+o-g+90)*le.degRad,p=Math.cos(_)*i,M=Math.cos(m)*s,x=Math.sin(_)*i,v=Math.sin(m)*s;this.a=l*p-h*x,this.b=l*M-h*v,this.c=u*p+d*x,this.d=u*M+d*v;break}case pt.NoScale:case pt.NoScaleOrReflection:{n*=le.degRad;const f=Math.cos(n),g=Math.sin(n);let _=(l*f+h*g)/this.skeleton.scaleX,m=(u*f+d*g)/this.skeleton.scaleY,p=Math.sqrt(_*_+m*m);p>1e-5&&(p=1/p),_*=p,m*=p,p=Math.sqrt(_*_+m*m),this.inherit==pt.NoScale&&l*d-h*u<0!=(this.skeleton.scaleX<0!=this.skeleton.scaleY<0)&&(p=-p),n=Math.PI/2+Math.atan2(m,_);const M=Math.cos(n)*p,x=Math.sin(n)*p;a*=le.degRad,o=(90+o)*le.degRad;const v=Math.cos(a)*i,w=Math.cos(o)*s,S=Math.sin(a)*i,b=Math.sin(o)*s;this.a=_*v+M*S,this.b=_*w+M*b,this.c=m*v+x*S,this.d=m*w+x*b;break}}this.a*=this.skeleton.scaleX,this.b*=this.skeleton.scaleX,this.c*=this.skeleton.scaleY,this.d*=this.skeleton.scaleY}setToSetupPose(){let e=this.data;this.x=e.x,this.y=e.y,this.rotation=e.rotation,this.scaleX=e.scaleX,this.scaleY=e.scaleY,this.shearX=e.shearX,this.shearY=e.shearY,this.inherit=e.inherit}updateAppliedTransform(){let e=this.parent;if(!e){this.ax=this.worldX-this.skeleton.x,this.ay=this.worldY-this.skeleton.y,this.arotation=Math.atan2(this.c,this.a)*le.radDeg,this.ascaleX=Math.sqrt(this.a*this.a+this.c*this.c),this.ascaleY=Math.sqrt(this.b*this.b+this.d*this.d),this.ashearX=0,this.ashearY=Math.atan2(this.a*this.b+this.c*this.d,this.a*this.d-this.b*this.c)*le.radDeg;return}let t=e.a,n=e.b,i=e.c,s=e.d,a=1/(t*s-n*i),o=s*a,c=n*a,l=i*a,h=t*a,u=this.worldX-e.worldX,d=this.worldY-e.worldY;this.ax=u*o-d*c,this.ay=d*h-u*l;let f,g,_,m;if(this.inherit==pt.OnlyTranslation)f=this.a,g=this.b,_=this.c,m=this.d;else{switch(this.inherit){case pt.NoRotationOrReflection:{let w=Math.abs(t*s-n*i)/(t*t+i*i),S=t/this.skeleton.scaleX;n=-(i/this.skeleton.scaleY)*w*this.skeleton.scaleX,s=S*w*this.skeleton.scaleY,a=1/(t*s-n*i),o=s*a,c=n*a;break}case pt.NoScale:case pt.NoScaleOrReflection:let p=le.cosDeg(this.rotation),M=le.sinDeg(this.rotation);t=(t*p+n*M)/this.skeleton.scaleX,i=(i*p+s*M)/this.skeleton.scaleY;let x=Math.sqrt(t*t+i*i);x>1e-5&&(x=1/x),t*=x,i*=x,x=Math.sqrt(t*t+i*i),this.inherit==pt.NoScale&&a<0!=(this.skeleton.scaleX<0!=this.skeleton.scaleY<0)&&(x=-x);let v=le.PI/2+Math.atan2(i,t);n=Math.cos(v)*x,s=Math.sin(v)*x,a=1/(t*s-n*i),o=s*a,c=n*a,l=i*a,h=t*a}f=o*this.a-c*this.c,g=o*this.b-c*this.d,_=h*this.c-l*this.a,m=h*this.d-l*this.b}if(this.ashearX=0,this.ascaleX=Math.sqrt(f*f+_*_),this.ascaleX>1e-4){let p=f*m-g*_;this.ascaleY=p/this.ascaleX,this.ashearY=-Math.atan2(f*g+_*m,p)*le.radDeg,this.arotation=Math.atan2(_,f)*le.radDeg}else this.ascaleX=0,this.ascaleY=Math.sqrt(g*g+m*m),this.ashearY=0,this.arotation=90-Math.atan2(m,g)*le.radDeg}getWorldRotationX(){return Math.atan2(this.c,this.a)*le.radDeg}getWorldRotationY(){return Math.atan2(this.d,this.b)*le.radDeg}getWorldScaleX(){return Math.sqrt(this.a*this.a+this.c*this.c)}getWorldScaleY(){return Math.sqrt(this.b*this.b+this.d*this.d)}worldToLocal(e){let t=1/(this.a*this.d-this.b*this.c),n=e.x-this.worldX,i=e.y-this.worldY;return e.x=n*this.d*t-i*this.b*t,e.y=i*this.a*t-n*this.c*t,e}localToWorld(e){let t=e.x,n=e.y;return e.x=t*this.a+n*this.b+this.worldX,e.y=t*this.c+n*this.d+this.worldY,e}worldToParent(e){if(e==null)throw new Error("world cannot be null.");return this.parent==null?e:this.parent.worldToLocal(e)}parentToWorld(e){if(e==null)throw new Error("world cannot be null.");return this.parent==null?e:this.parent.localToWorld(e)}worldToLocalRotation(e){let t=le.sinDeg(e),n=le.cosDeg(e);return Math.atan2(this.a*t-this.c*n,this.d*n-this.b*t)*le.radDeg+this.rotation-this.shearX}localToWorldRotation(e){e-=this.rotation-this.shearX;let t=le.sinDeg(e),n=le.cosDeg(e);return Math.atan2(n*this.c+t*this.d,n*this.a+t*this.b)*le.radDeg}rotateWorld(e){e*=le.degRad;const t=Math.sin(e),n=Math.cos(e),i=this.a,s=this.b;this.a=n*i-t*this.c,this.b=n*s-t*this.d,this.c=t*i+n*this.c,this.d=t*s+n*this.d}}class va{constructor(e,t,n){y(this,"name");y(this,"order");y(this,"skinRequired");this.name=e,this.order=t,this.skinRequired=n}}class Rx{constructor(e,t="",n=new gu){y(this,"pathPrefix","");y(this,"textureLoader");y(this,"downloader");y(this,"assets",{});y(this,"errors",{});y(this,"toLoad",0);y(this,"loaded",0);this.textureLoader=e,this.pathPrefix=t,this.downloader=n}start(e){return this.toLoad++,this.pathPrefix+e}success(e,t,n){this.toLoad--,this.loaded++,this.assets[t]=n,e&&e(t,n)}error(e,t,n){this.toLoad--,this.loaded++,this.errors[t]=n,e&&e(t,n)}loadAll(){return new Promise((t,n)=>{let i=()=>{if(this.isLoadingComplete()){this.hasErrors()?n(this.errors):t(this);return}requestAnimationFrame(i)};requestAnimationFrame(i)})}setRawDataURI(e,t){this.downloader.rawDataUris[this.pathPrefix+e]=t}loadBinary(e,t=()=>{},n=()=>{}){e=this.start(e),this.downloader.downloadBinary(e,i=>{this.success(t,e,i)},(i,s)=>{this.error(n,e,`Couldn't load binary ${e}: status ${i}, ${s}`)})}loadText(e,t=()=>{},n=()=>{}){e=this.start(e),this.downloader.downloadText(e,i=>{this.success(t,e,i)},(i,s)=>{this.error(n,e,`Couldn't load text ${e}: status ${i}, ${s}`)})}loadJson(e,t=()=>{},n=()=>{}){e=this.start(e),this.downloader.downloadJson(e,i=>{this.success(t,e,i)},(i,s)=>{this.error(n,e,`Couldn't load JSON ${e}: status ${i}, ${s}`)})}loadTexture(e,t=()=>{},n=()=>{}){if(e=this.start(e),!!!(typeof window<"u"&&typeof navigator<"u"&&window.document))fetch(e,{mode:"cors"}).then(a=>a.ok?a.blob():(this.error(n,e,`Couldn't load image: ${e}`),null)).then(a=>a?createImageBitmap(a,{premultiplyAlpha:"none",colorSpaceConversion:"none"}):null).then(a=>{a&&this.success(t,e,this.textureLoader(a))});else{let a=new Image;a.crossOrigin="anonymous",a.onload=()=>{this.success(t,e,this.textureLoader(a))},a.onerror=()=>{this.error(n,e,`Couldn't load image: ${e}`)},this.downloader.rawDataUris[e]&&(e=this.downloader.rawDataUris[e]),a.src=e}}loadTextureAtlas(e,t=()=>{},n=()=>{},i){let s=e.lastIndexOf("/"),a=s>=0?e.substring(0,s+1):"";e=this.start(e),this.downloader.downloadText(e,o=>{try{let c=new bx(o),l=c.pages.length,h=!1;for(let u of c.pages)this.loadTexture(i?i[u.name]:a+u.name,(d,f)=>{h||(u.setTexture(f),--l==0&&this.success(t,e,c))},(d,f)=>{h||this.error(n,e,`Couldn't load texture atlas ${e} page image: ${d}`),h=!0})}catch(c){this.error(n,e,`Couldn't parse texture atlas ${e}: ${c.message}`)}},(o,c)=>{this.error(n,e,`Couldn't load texture atlas ${e}: status ${o}, ${c}`)})}get(e){return this.assets[this.pathPrefix+e]}require(e){e=this.pathPrefix+e;let t=this.assets[e];if(t)return t;let n=this.errors[e];throw Error("Asset not found: "+e+(n?`
`+n:""))}remove(e){e=this.pathPrefix+e;let t=this.assets[e];return t.dispose&&t.dispose(),delete this.assets[e],t}removeAll(){for(let e in this.assets){let t=this.assets[e];t.dispose&&t.dispose()}this.assets={}}isLoadingComplete(){return this.toLoad==0}getToLoad(){return this.toLoad}getLoaded(){return this.loaded}dispose(){this.removeAll()}hasErrors(){return Object.keys(this.errors).length>0}getErrors(){return this.errors}}class gu{constructor(){y(this,"callbacks",{});y(this,"rawDataUris",{})}dataUriToString(e){if(!e.startsWith("data:"))throw new Error("Not a data URI.");let t=e.indexOf("base64,");return t!=-1?(t+=7,atob(e.substr(t))):e.substr(e.indexOf(",")+1)}base64ToUint8Array(e){for(var t=window.atob(e),n=t.length,i=new Uint8Array(n),s=0;s<n;s++)i[s]=t.charCodeAt(s);return i}dataUriToUint8Array(e){if(!e.startsWith("data:"))throw new Error("Not a data URI.");let t=e.indexOf("base64,");if(t==-1)throw new Error("Not a binary data URI.");return t+=7,this.base64ToUint8Array(e.substr(t))}downloadText(e,t,n){if(this.start(e,t,n))return;if(this.rawDataUris[e]){try{let a=this.rawDataUris[e];this.finish(e,200,this.dataUriToString(a))}catch(a){this.finish(e,400,JSON.stringify(a))}return}let i=new XMLHttpRequest;i.overrideMimeType("text/html"),i.open("GET",e,!0);let s=()=>{this.finish(e,i.status,i.responseText)};i.onload=s,i.onerror=s,i.send()}downloadJson(e,t,n){this.downloadText(e,i=>{t(JSON.parse(i))},n)}downloadBinary(e,t,n){if(this.start(e,t,n))return;if(this.rawDataUris[e]){try{let a=this.rawDataUris[e];this.finish(e,200,this.dataUriToUint8Array(a))}catch(a){this.finish(e,400,JSON.stringify(a))}return}let i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="arraybuffer";let s=()=>{this.finish(e,i.status,i.response)};i.onload=()=>{i.status==200||i.status==0?this.finish(e,200,new Uint8Array(i.response)):s()},i.onerror=s,i.send()}start(e,t,n){let i=this.callbacks[e];try{if(i)return!0;this.callbacks[e]=i=[]}finally{i.push(t,n)}}finish(e,t,n){let i=this.callbacks[e];delete this.callbacks[e];let s=t==200||t==0?[n]:[t,n];for(let a=s.length-1,o=i.length;a<o;a+=2)i[a].apply(null,s)}}class Cx{constructor(e,t){y(this,"data");y(this,"intValue",0);y(this,"floatValue",0);y(this,"stringValue",null);y(this,"time",0);y(this,"volume",0);y(this,"balance",0);if(!t)throw new Error("data cannot be null.");this.time=e,this.data=t}}class Px{constructor(e){y(this,"name");y(this,"intValue",0);y(this,"floatValue",0);y(this,"stringValue",null);y(this,"audioPath",null);y(this,"volume",0);y(this,"balance",0);this.name=e}}class Lx{constructor(e,t){y(this,"data");y(this,"bones");y(this,"target");y(this,"bendDirection",0);y(this,"compress",!1);y(this,"stretch",!1);y(this,"mix",1);y(this,"softness",0);y(this,"active",!1);if(!e)throw new Error("data cannot be null.");if(!t)throw new Error("skeleton cannot be null.");this.data=e,this.bones=new Array;for(let i=0;i<e.bones.length;i++){let s=t.findBone(e.bones[i].name);if(!s)throw new Error(`Couldn't find bone ${e.bones[i].name}`);this.bones.push(s)}let n=t.findBone(e.target.name);if(!n)throw new Error(`Couldn't find bone ${e.target.name}`);this.target=n,this.mix=e.mix,this.softness=e.softness,this.bendDirection=e.bendDirection,this.compress=e.compress,this.stretch=e.stretch}isActive(){return this.active}setToSetupPose(){const e=this.data;this.mix=e.mix,this.softness=e.softness,this.bendDirection=e.bendDirection,this.compress=e.compress,this.stretch=e.stretch}update(e){if(this.mix==0)return;let t=this.target,n=this.bones;switch(n.length){case 1:this.apply1(n[0],t.worldX,t.worldY,this.compress,this.stretch,this.data.uniform,this.mix);break;case 2:this.apply2(n[0],n[1],t.worldX,t.worldY,this.bendDirection,this.stretch,this.data.uniform,this.softness,this.mix);break}}apply1(e,t,n,i,s,a,o){let c=e.parent;if(!c)throw new Error("IK bone must have parent.");let l=c.a,h=c.b,u=c.c,d=c.d,f=-e.ashearX-e.arotation,g=0,_=0;switch(e.inherit){case pt.OnlyTranslation:g=(t-e.worldX)*le.signum(e.skeleton.scaleX),_=(n-e.worldY)*le.signum(e.skeleton.scaleY);break;case pt.NoRotationOrReflection:let M=Math.abs(l*d-h*u)/Math.max(1e-4,l*l+u*u),x=l/e.skeleton.scaleX,v=u/e.skeleton.scaleY;h=-v*M*e.skeleton.scaleX,d=x*M*e.skeleton.scaleY,f+=Math.atan2(v,x)*le.radDeg;default:let w=t-c.worldX,S=n-c.worldY,b=l*d-h*u;Math.abs(b)<=1e-4?(g=0,_=0):(g=(w*d-S*h)/b-e.ax,_=(S*l-w*u)/b-e.ay)}f+=Math.atan2(_,g)*le.radDeg,e.ascaleX<0&&(f+=180),f>180?f-=360:f<-180&&(f+=360);let m=e.ascaleX,p=e.ascaleY;if(i||s){switch(e.inherit){case pt.NoScale:case pt.NoScaleOrReflection:g=t-e.worldX,_=n-e.worldY}const M=e.data.length*m;if(M>1e-4){const x=g*g+_*_;if(i&&x<M*M||s&&x>M*M){const v=(Math.sqrt(x)/M-1)*o+1;m*=v,a&&(p*=v)}}}e.updateWorldTransformWith(e.ax,e.ay,e.arotation+f*o,m,p,e.ashearX,e.ashearY)}apply2(e,t,n,i,s,a,o,c,l){if(e.inherit!=pt.Normal||t.inherit!=pt.Normal)return;let h=e.ax,u=e.ay,d=e.ascaleX,f=e.ascaleY,g=d,_=f,m=t.ascaleX,p=0,M=0,x=0;d<0?(d=-d,p=180,x=-1):(p=0,x=1),f<0&&(f=-f,x=-x),m<0?(m=-m,M=180):M=0;let v=t.ax,w=0,S=0,b=0,C=e.a,E=e.b,A=e.c,P=e.d,k=Math.abs(d-f)<=1e-4;!k||a?(w=0,S=C*v+e.worldX,b=A*v+e.worldY):(w=t.ay,S=C*v+E*w+e.worldX,b=A*v+P*w+e.worldY);let F=e.parent;if(!F)throw new Error("IK parent must itself have a parent.");C=F.a,E=F.b,A=F.c,P=F.d;let I=C*P-E*A,N=S-F.worldX,V=b-F.worldY;I=Math.abs(I)<=1e-4?0:1/I;let Y=(N*P-V*E)*I-h,W=(V*C-N*A)*I-u,Q=Math.sqrt(Y*Y+W*W),ie=t.data.length*m,ae,ve;if(Q<1e-4){this.apply1(e,n,i,!1,a,!1,l),t.updateWorldTransformWith(v,w,0,t.ascaleX,t.ascaleY,t.ashearX,t.ashearY);return}N=n-F.worldX,V=i-F.worldY;let oe=(N*P-V*E)*I-h,G=(V*C-N*A)*I-u,J=oe*oe+G*G;if(c!=0){c*=d*(m+1)*.5;let ye=Math.sqrt(J),Ae=ye-Q-ie*d+c;if(Ae>0){let we=Math.min(1,Ae/(c*2))-1;we=(Ae-c*(1-we*we))/ye,oe-=we*oe,G-=we*G,J=oe*oe+G*G}}e:if(k){ie*=d;let ye=(J-Q*Q-ie*ie)/(2*Q*ie);ye<-1?(ye=-1,ve=Math.PI*s):ye>1?(ye=1,ve=0,a&&(C=(Math.sqrt(J)/(Q+ie)-1)*l+1,g*=C,o&&(_*=C))):ve=Math.acos(ye)*s,C=Q+ie*ye,E=ie*Math.sin(ve),ae=Math.atan2(G*C-oe*E,oe*C+G*E)}else{C=d*ie,E=f*ie;let ye=C*C,Ae=E*E,we=Math.atan2(G,oe);A=Ae*Q*Q+ye*J-ye*Ae;let Je=-2*Ae*Q,U=Ae-ye;if(P=Je*Je-4*U*A,P>=0){let R=Math.sqrt(P);Je<0&&(R=-R),R=-(Je+R)*.5;let $=R/U,ne=A/R,se=Math.abs($)<Math.abs(ne)?$:ne;if($=J-se*se,$>=0){V=Math.sqrt($)*s,ae=we-Math.atan2(V,se),ve=Math.atan2(V/f,(se-Q)/d);break e}}let lt=le.PI,Ye=Q-C,je=Ye*Ye,Ee=0,ct=0,Pe=Q+C,Ie=Pe*Pe,D=0;A=-C*Q/(ye-Ae),A>=-1&&A<=1&&(A=Math.acos(A),N=C*Math.cos(A)+Q,V=E*Math.sin(A),P=N*N+V*V,P<je&&(lt=A,je=P,Ye=N,Ee=V),P>Ie&&(ct=A,Ie=P,Pe=N,D=V)),J<=(je+Ie)*.5?(ae=we-Math.atan2(Ee*s,Ye),ve=lt*s):(ae=we-Math.atan2(D*s,Pe),ve=ct*s)}let de=Math.atan2(w,v)*x,ue=e.arotation;ae=(ae-de)*le.radDeg+p-ue,ae>180?ae-=360:ae<-180&&(ae+=360),e.updateWorldTransformWith(h,u,ue+ae*l,g,_,0,0),ue=t.arotation,ve=((ve+de)*le.radDeg-t.ashearX)*x+M-ue,ve>180?ve-=360:ve<-180&&(ve+=360),t.updateWorldTransformWith(v,w,ue+ve*l,t.ascaleX,t.ascaleY,t.ashearX,t.ashearY)}}class Ix extends va{constructor(t){super(t,0,!1);y(this,"bones",new Array);y(this,"_target",null);y(this,"bendDirection",0);y(this,"compress",!1);y(this,"stretch",!1);y(this,"uniform",!1);y(this,"mix",0);y(this,"softness",0)}set target(t){this._target=t}get target(){if(this._target)return this._target;throw new Error("BoneData not set.")}}class Dx extends va{constructor(t){super(t,0,!1);y(this,"bones",new Array);y(this,"_target",null);y(this,"positionMode",pi.Fixed);y(this,"spacingMode",zt.Fixed);y(this,"rotateMode",Li.Chain);y(this,"offsetRotation",0);y(this,"position",0);y(this,"spacing",0);y(this,"mixRotate",0);y(this,"mixX",0);y(this,"mixY",0)}set target(t){this._target=t}get target(){if(this._target)return this._target;throw new Error("SlotData not set.")}}var pi;(function(r){r[r.Fixed=0]="Fixed",r[r.Percent=1]="Percent"})(pi||(pi={}));var zt;(function(r){r[r.Length=0]="Length",r[r.Fixed=1]="Fixed",r[r.Percent=2]="Percent",r[r.Proportional=3]="Proportional"})(zt||(zt={}));var Li;(function(r){r[r.Tangent=0]="Tangent",r[r.Chain=1]="Chain",r[r.ChainScale=2]="ChainScale"})(Li||(Li={}));const Qt=class Qt{constructor(e,t){y(this,"data");y(this,"bones");y(this,"target");y(this,"position",0);y(this,"spacing",0);y(this,"mixRotate",0);y(this,"mixX",0);y(this,"mixY",0);y(this,"spaces",new Array);y(this,"positions",new Array);y(this,"world",new Array);y(this,"curves",new Array);y(this,"lengths",new Array);y(this,"segments",new Array);y(this,"active",!1);if(!e)throw new Error("data cannot be null.");if(!t)throw new Error("skeleton cannot be null.");this.data=e,this.bones=new Array;for(let i=0,s=e.bones.length;i<s;i++){let a=t.findBone(e.bones[i].name);if(!a)throw new Error(`Couldn't find bone ${e.bones[i].name}.`);this.bones.push(a)}let n=t.findSlot(e.target.name);if(!n)throw new Error(`Couldn't find target bone ${e.target.name}`);this.target=n,this.position=e.position,this.spacing=e.spacing,this.mixRotate=e.mixRotate,this.mixX=e.mixX,this.mixY=e.mixY}isActive(){return this.active}setToSetupPose(){const e=this.data;this.position=e.position,this.spacing=e.spacing,this.mixRotate=e.mixRotate,this.mixX=e.mixX,this.mixY=e.mixY}update(e){let t=this.target.getAttachment();if(!(t instanceof Ts))return;let n=this.mixRotate,i=this.mixX,s=this.mixY;if(n==0&&i==0&&s==0)return;let a=this.data,o=a.rotateMode==Li.Tangent,c=a.rotateMode==Li.ChainScale,l=this.bones,h=l.length,u=o?h:h+1,d=me.setArraySize(this.spaces,u),f=c?this.lengths=me.setArraySize(this.lengths,h):[],g=this.spacing;switch(a.spacingMode){case zt.Percent:if(c)for(let S=0,b=u-1;S<b;S++){let C=l[S],E=C.data.length,A=E*C.a,P=E*C.c;f[S]=Math.sqrt(A*A+P*P)}me.arrayFill(d,1,u,g);break;case zt.Proportional:let v=0;for(let S=0,b=u-1;S<b;){let C=l[S],E=C.data.length;if(E<Qt.epsilon)c&&(f[S]=0),d[++S]=g;else{let A=E*C.a,P=E*C.c,k=Math.sqrt(A*A+P*P);c&&(f[S]=k),d[++S]=k,v+=k}}if(v>0){v=u/v*g;for(let S=1;S<u;S++)d[S]*=v}break;default:let w=a.spacingMode==zt.Length;for(let S=0,b=u-1;S<b;){let C=l[S],E=C.data.length;if(E<Qt.epsilon)c&&(f[S]=0),d[++S]=g;else{let A=E*C.a,P=E*C.c,k=Math.sqrt(A*A+P*P);c&&(f[S]=k),d[++S]=(w?E+g:g)*k/E}}}let _=this.computeWorldPositions(t,u,o),m=_[0],p=_[1],M=a.offsetRotation,x=!1;if(M==0)x=a.rotateMode==Li.Chain;else{x=!1;let v=this.target.bone;M*=v.a*v.d-v.b*v.c>0?le.degRad:-le.degRad}for(let v=0,w=3;v<h;v++,w+=3){let S=l[v];S.worldX+=(m-S.worldX)*i,S.worldY+=(p-S.worldY)*s;let b=_[w],C=_[w+1],E=b-m,A=C-p;if(c){let P=f[v];if(P!=0){let k=(Math.sqrt(E*E+A*A)/P-1)*n+1;S.a*=k,S.c*=k}}if(m=b,p=C,n>0){let P=S.a,k=S.b,F=S.c,I=S.d,N=0,V=0,Y=0;if(o?N=_[w-1]:d[v+1]==0?N=_[w+2]:N=Math.atan2(A,E),N-=Math.atan2(F,P),x){V=Math.cos(N),Y=Math.sin(N);let W=S.data.length;m+=(W*(V*P-Y*F)-E)*n,p+=(W*(Y*P+V*F)-A)*n}else N+=M;N>le.PI?N-=le.PI2:N<-le.PI&&(N+=le.PI2),N*=n,V=Math.cos(N),Y=Math.sin(N),S.a=V*P-Y*F,S.b=V*k-Y*I,S.c=Y*P+V*F,S.d=Y*k+V*I}S.updateAppliedTransform()}}computeWorldPositions(e,t,n){let i=this.target,s=this.position,a=this.spaces,o=me.setArraySize(this.positions,t*3+2),c=this.world,l=e.closed,h=e.worldVerticesLength,u=h/6,d=Qt.NONE;if(!e.constantSpeed){let W=e.lengths;u-=l?1:2;let Q=W[u];this.data.positionMode==pi.Percent&&(s*=Q);let ie;switch(this.data.spacingMode){case zt.Percent:ie=Q;break;case zt.Proportional:ie=Q/t;break;default:ie=1}c=me.setArraySize(this.world,8);for(let ae=0,ve=0,oe=0;ae<t;ae++,ve+=3){let G=a[ae]*ie;s+=G;let J=s;if(l)J%=Q,J<0&&(J+=Q),oe=0;else if(J<0){d!=Qt.BEFORE&&(d=Qt.BEFORE,e.computeWorldVertices(i,2,4,c,0,2)),this.addBeforePosition(J,c,0,o,ve);continue}else if(J>Q){d!=Qt.AFTER&&(d=Qt.AFTER,e.computeWorldVertices(i,h-6,4,c,0,2)),this.addAfterPosition(J-Q,c,0,o,ve);continue}for(;;oe++){let de=W[oe];if(!(J>de)){if(oe==0)J/=de;else{let ue=W[oe-1];J=(J-ue)/(de-ue)}break}}oe!=d&&(d=oe,l&&oe==u?(e.computeWorldVertices(i,h-4,4,c,0,2),e.computeWorldVertices(i,0,4,c,4,2)):e.computeWorldVertices(i,oe*6+2,8,c,0,2)),this.addCurvePosition(J,c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],o,ve,n||ae>0&&G==0)}return o}l?(h+=2,c=me.setArraySize(this.world,h),e.computeWorldVertices(i,2,h-4,c,0,2),e.computeWorldVertices(i,0,2,c,h-4,2),c[h-2]=c[0],c[h-1]=c[1]):(u--,h-=4,c=me.setArraySize(this.world,h),e.computeWorldVertices(i,2,h,c,0,2));let f=me.setArraySize(this.curves,u),g=0,_=c[0],m=c[1],p=0,M=0,x=0,v=0,w=0,S=0,b=0,C=0,E=0,A=0,P=0,k=0,F=0,I=0;for(let W=0,Q=2;W<u;W++,Q+=6)p=c[Q],M=c[Q+1],x=c[Q+2],v=c[Q+3],w=c[Q+4],S=c[Q+5],b=(_-p*2+x)*.1875,C=(m-M*2+v)*.1875,E=((p-x)*3-_+w)*.09375,A=((M-v)*3-m+S)*.09375,P=b*2+E,k=C*2+A,F=(p-_)*.75+b+E*.16666667,I=(M-m)*.75+C+A*.16666667,g+=Math.sqrt(F*F+I*I),F+=P,I+=k,P+=E,k+=A,g+=Math.sqrt(F*F+I*I),F+=P,I+=k,g+=Math.sqrt(F*F+I*I),F+=P+E,I+=k+A,g+=Math.sqrt(F*F+I*I),f[W]=g,_=w,m=S;this.data.positionMode==pi.Percent&&(s*=g);let N;switch(this.data.spacingMode){case zt.Percent:N=g;break;case zt.Proportional:N=g/t;break;default:N=1}let V=this.segments,Y=0;for(let W=0,Q=0,ie=0,ae=0;W<t;W++,Q+=3){let ve=a[W]*N;s+=ve;let oe=s;if(l)oe%=g,oe<0&&(oe+=g),ie=0;else if(oe<0){this.addBeforePosition(oe,c,0,o,Q);continue}else if(oe>g){this.addAfterPosition(oe-g,c,h-4,o,Q);continue}for(;;ie++){let G=f[ie];if(!(oe>G)){if(ie==0)oe/=G;else{let J=f[ie-1];oe=(oe-J)/(G-J)}break}}if(ie!=d){d=ie;let G=ie*6;for(_=c[G],m=c[G+1],p=c[G+2],M=c[G+3],x=c[G+4],v=c[G+5],w=c[G+6],S=c[G+7],b=(_-p*2+x)*.03,C=(m-M*2+v)*.03,E=((p-x)*3-_+w)*.006,A=((M-v)*3-m+S)*.006,P=b*2+E,k=C*2+A,F=(p-_)*.3+b+E*.16666667,I=(M-m)*.3+C+A*.16666667,Y=Math.sqrt(F*F+I*I),V[0]=Y,G=1;G<8;G++)F+=P,I+=k,P+=E,k+=A,Y+=Math.sqrt(F*F+I*I),V[G]=Y;F+=P,I+=k,Y+=Math.sqrt(F*F+I*I),V[8]=Y,F+=P+E,I+=k+A,Y+=Math.sqrt(F*F+I*I),V[9]=Y,ae=0}for(oe*=Y;;ae++){let G=V[ae];if(!(oe>G)){if(ae==0)oe/=G;else{let J=V[ae-1];oe=ae+(oe-J)/(G-J)}break}}this.addCurvePosition(oe*.1,_,m,p,M,x,v,w,S,o,Q,n||W>0&&ve==0)}return o}addBeforePosition(e,t,n,i,s){let a=t[n],o=t[n+1],c=t[n+2]-a,l=t[n+3]-o,h=Math.atan2(l,c);i[s]=a+e*Math.cos(h),i[s+1]=o+e*Math.sin(h),i[s+2]=h}addAfterPosition(e,t,n,i,s){let a=t[n+2],o=t[n+3],c=a-t[n],l=o-t[n+1],h=Math.atan2(l,c);i[s]=a+e*Math.cos(h),i[s+1]=o+e*Math.sin(h),i[s+2]=h}addCurvePosition(e,t,n,i,s,a,o,c,l,h,u,d){if(e==0||isNaN(e)){h[u]=t,h[u+1]=n,h[u+2]=Math.atan2(s-n,i-t);return}let f=e*e,g=f*e,_=1-e,m=_*_,p=m*_,M=_*e,x=M*3,v=_*x,w=x*e,S=t*p+i*v+a*w+c*g,b=n*p+s*v+o*w+l*g;h[u]=S,h[u+1]=b,d&&(e<.001?h[u+2]=Math.atan2(s-n,i-t):h[u+2]=Math.atan2(b-(n*m+s*M*2+o*f),S-(t*m+i*M*2+a*f)))}};y(Qt,"NONE",-1),y(Qt,"BEFORE",-2),y(Qt,"AFTER",-3),y(Qt,"epsilon",1e-5);let Qo=Qt;class Nx{constructor(e,t){y(this,"data");y(this,"_bone",null);y(this,"inertia",0);y(this,"strength",0);y(this,"damping",0);y(this,"massInverse",0);y(this,"wind",0);y(this,"gravity",0);y(this,"mix",0);y(this,"_reset",!0);y(this,"ux",0);y(this,"uy",0);y(this,"cx",0);y(this,"cy",0);y(this,"tx",0);y(this,"ty",0);y(this,"xOffset",0);y(this,"xVelocity",0);y(this,"yOffset",0);y(this,"yVelocity",0);y(this,"rotateOffset",0);y(this,"rotateVelocity",0);y(this,"scaleOffset",0);y(this,"scaleVelocity",0);y(this,"active",!1);y(this,"skeleton");y(this,"remaining",0);y(this,"lastTime",0);this.data=e,this.skeleton=t,this.bone=t.bones[e.bone.index],this.inertia=e.inertia,this.strength=e.strength,this.damping=e.damping,this.massInverse=e.massInverse,this.wind=e.wind,this.gravity=e.gravity,this.mix=e.mix}set bone(e){this._bone=e}get bone(){if(this._bone)return this._bone;throw new Error("Bone not set.")}reset(){this.remaining=0,this.lastTime=this.skeleton.time,this._reset=!0,this.xOffset=0,this.xVelocity=0,this.yOffset=0,this.yVelocity=0,this.rotateOffset=0,this.rotateVelocity=0,this.scaleOffset=0,this.scaleVelocity=0}setToSetupPose(){const e=this.data;this.inertia=e.inertia,this.strength=e.strength,this.damping=e.damping,this.massInverse=e.massInverse,this.wind=e.wind,this.gravity=e.gravity,this.mix=e.mix}isActive(){return this.active}update(e){const t=this.mix;if(t==0)return;const n=this.data.x>0,i=this.data.y>0,s=this.data.rotate>0||this.data.shearX>0,a=this.data.scaleX>0,o=this.bone,c=o.data.length;switch(e){case ci.none:return;case ci.reset:this.reset();case ci.update:const l=this.skeleton,h=Math.max(this.skeleton.time-this.lastTime,0);this.remaining+=h,this.lastTime=l.time;const u=o.worldX,d=o.worldY;if(this._reset)this._reset=!1,this.ux=u,this.uy=d;else{let f=this.remaining,g=this.inertia,_=this.data.step,m=this.skeleton.data.referenceScale,p=-1,M=this.data.limit*h,x=M*Math.abs(l.scaleY);if(M*=Math.abs(l.scaleX),n||i){if(n){const v=(this.ux-u)*g;this.xOffset+=v>M?M:v<-M?-M:v,this.ux=u}if(i){const v=(this.uy-d)*g;this.yOffset+=v>x?x:v<-x?-x:v,this.uy=d}if(f>=_){p=Math.pow(this.damping,60*_);const v=this.massInverse*_,w=this.strength,S=this.wind*m,b=this.gravity*m;do n&&(this.xVelocity+=(S-this.xOffset*w)*v,this.xOffset+=this.xVelocity*_,this.xVelocity*=p),i&&(this.yVelocity-=(b+this.yOffset*w)*v,this.yOffset+=this.yVelocity*_,this.yVelocity*=p),f-=_;while(f>=_)}n&&(o.worldX+=this.xOffset*t*this.data.x),i&&(o.worldY+=this.yOffset*t*this.data.y)}if(s||a){let v=Math.atan2(o.c,o.a),w=0,S=0,b=0,C=this.cx-o.worldX,E=this.cy-o.worldY;if(C>M?C=M:C<-M&&(C=-M),E>x?E=x:E<-x&&(E=-x),s){b=(this.data.rotate+this.data.shearX)*t;let A=Math.atan2(E+this.ty,C+this.tx)-v-this.rotateOffset*b;this.rotateOffset+=(A-Math.ceil(A*le.invPI2-.5)*le.PI2)*g,A=this.rotateOffset*b+v,w=Math.cos(A),S=Math.sin(A),a&&(A=c*o.getWorldScaleX(),A>0&&(this.scaleOffset+=(C*w+E*S)*g/A))}else{w=Math.cos(v),S=Math.sin(v);const A=c*o.getWorldScaleX();A>0&&(this.scaleOffset+=(C*w+E*S)*g/A)}if(f=this.remaining,f>=_){p==-1&&(p=Math.pow(this.damping,60*_));const A=this.massInverse*_,P=this.strength,k=this.wind,F=this.gravity,I=c/m;for(;;)if(f-=_,a&&(this.scaleVelocity+=(k*w-F*S-this.scaleOffset*P)*A,this.scaleOffset+=this.scaleVelocity*_,this.scaleVelocity*=p),s){if(this.rotateVelocity-=((k*S+F*w)*I+this.rotateOffset*P)*A,this.rotateOffset+=this.rotateVelocity*_,this.rotateVelocity*=p,f<_)break;const N=this.rotateOffset*b+v;w=Math.cos(N),S=Math.sin(N)}else if(f<_)break}}this.remaining=f}this.cx=o.worldX,this.cy=o.worldY;break;case ci.pose:n&&(o.worldX+=this.xOffset*t*this.data.x),i&&(o.worldY+=this.yOffset*t*this.data.y)}if(s){let l=this.rotateOffset*t,h=0,u=0,d=0;if(this.data.shearX>0){let f=0;this.data.rotate>0&&(f=l*this.data.rotate,h=Math.sin(f),u=Math.cos(f),d=o.b,o.b=u*d-h*o.d,o.d=h*d+u*o.d),f+=l*this.data.shearX,h=Math.sin(f),u=Math.cos(f),d=o.a,o.a=u*d-h*o.c,o.c=h*d+u*o.c}else l*=this.data.rotate,h=Math.sin(l),u=Math.cos(l),d=o.a,o.a=u*d-h*o.c,o.c=h*d+u*o.c,d=o.b,o.b=u*d-h*o.d,o.d=h*d+u*o.d}if(a){const l=1+this.scaleOffset*t*this.data.scaleX;o.a*=l,o.c*=l}e!=ci.pose&&(this.tx=c*o.a,this.ty=c*o.c),o.updateAppliedTransform()}translate(e,t){this.ux-=e,this.uy-=t,this.cx-=e,this.cy-=t}rotate(e,t,n){const i=n*le.degRad,s=Math.cos(i),a=Math.sin(i),o=this.cx-e,c=this.cy-t;this.translate(o*s-c*a-o,o*a+c*s-c)}}class Ux{constructor(e,t){y(this,"data");y(this,"bone");y(this,"color");y(this,"darkColor",null);y(this,"attachment",null);y(this,"attachmentState",0);y(this,"sequenceIndex",-1);y(this,"deform",new Array);if(!e)throw new Error("data cannot be null.");if(!t)throw new Error("bone cannot be null.");this.data=e,this.bone=t,this.color=new et,this.darkColor=e.darkColor?new et:null,this.setToSetupPose()}getSkeleton(){return this.bone.skeleton}getAttachment(){return this.attachment}setAttachment(e){this.attachment!=e&&((!(e instanceof xn)||!(this.attachment instanceof xn)||e.timelineAttachment!=this.attachment.timelineAttachment)&&(this.deform.length=0),this.attachment=e,this.sequenceIndex=-1)}setToSetupPose(){this.color.setFromColor(this.data.color),this.darkColor&&this.darkColor.setFromColor(this.data.darkColor),this.data.attachmentName?(this.attachment=null,this.setAttachment(this.bone.skeleton.getAttachment(this.data.index,this.data.attachmentName))):this.attachment=null}}class Fx{constructor(e,t){y(this,"data");y(this,"bones");y(this,"target");y(this,"mixRotate",0);y(this,"mixX",0);y(this,"mixY",0);y(this,"mixScaleX",0);y(this,"mixScaleY",0);y(this,"mixShearY",0);y(this,"temp",new rr);y(this,"active",!1);if(!e)throw new Error("data cannot be null.");if(!t)throw new Error("skeleton cannot be null.");this.data=e,this.bones=new Array;for(let i=0;i<e.bones.length;i++){let s=t.findBone(e.bones[i].name);if(!s)throw new Error(`Couldn't find bone ${e.bones[i].name}.`);this.bones.push(s)}let n=t.findBone(e.target.name);if(!n)throw new Error(`Couldn't find target bone ${e.target.name}.`);this.target=n,this.mixRotate=e.mixRotate,this.mixX=e.mixX,this.mixY=e.mixY,this.mixScaleX=e.mixScaleX,this.mixScaleY=e.mixScaleY,this.mixShearY=e.mixShearY}isActive(){return this.active}setToSetupPose(){const e=this.data;this.mixRotate=e.mixRotate,this.mixX=e.mixX,this.mixY=e.mixY,this.mixScaleX=e.mixScaleX,this.mixScaleY=e.mixScaleY,this.mixShearY=e.mixShearY}update(e){this.mixRotate==0&&this.mixX==0&&this.mixY==0&&this.mixScaleX==0&&this.mixScaleY==0&&this.mixShearY==0||(this.data.local?this.data.relative?this.applyRelativeLocal():this.applyAbsoluteLocal():this.data.relative?this.applyRelativeWorld():this.applyAbsoluteWorld())}applyAbsoluteWorld(){let e=this.mixRotate,t=this.mixX,n=this.mixY,i=this.mixScaleX,s=this.mixScaleY,a=this.mixShearY,o=t!=0||n!=0,c=this.target,l=c.a,h=c.b,u=c.c,d=c.d,f=l*d-h*u>0?le.degRad:-le.degRad,g=this.data.offsetRotation*f,_=this.data.offsetShearY*f,m=this.bones;for(let p=0,M=m.length;p<M;p++){let x=m[p];if(e!=0){let v=x.a,w=x.b,S=x.c,b=x.d,C=Math.atan2(u,l)-Math.atan2(S,v)+g;C>le.PI?C-=le.PI2:C<-le.PI&&(C+=le.PI2),C*=e;let E=Math.cos(C),A=Math.sin(C);x.a=E*v-A*S,x.b=E*w-A*b,x.c=A*v+E*S,x.d=A*w+E*b}if(o){let v=this.temp;c.localToWorld(v.set(this.data.offsetX,this.data.offsetY)),x.worldX+=(v.x-x.worldX)*t,x.worldY+=(v.y-x.worldY)*n}if(i!=0){let v=Math.sqrt(x.a*x.a+x.c*x.c);v!=0&&(v=(v+(Math.sqrt(l*l+u*u)-v+this.data.offsetScaleX)*i)/v),x.a*=v,x.c*=v}if(s!=0){let v=Math.sqrt(x.b*x.b+x.d*x.d);v!=0&&(v=(v+(Math.sqrt(h*h+d*d)-v+this.data.offsetScaleY)*s)/v),x.b*=v,x.d*=v}if(a>0){let v=x.b,w=x.d,S=Math.atan2(w,v),b=Math.atan2(d,h)-Math.atan2(u,l)-(S-Math.atan2(x.c,x.a));b>le.PI?b-=le.PI2:b<-le.PI&&(b+=le.PI2),b=S+(b+_)*a;let C=Math.sqrt(v*v+w*w);x.b=Math.cos(b)*C,x.d=Math.sin(b)*C}x.updateAppliedTransform()}}applyRelativeWorld(){let e=this.mixRotate,t=this.mixX,n=this.mixY,i=this.mixScaleX,s=this.mixScaleY,a=this.mixShearY,o=t!=0||n!=0,c=this.target,l=c.a,h=c.b,u=c.c,d=c.d,f=l*d-h*u>0?le.degRad:-le.degRad,g=this.data.offsetRotation*f,_=this.data.offsetShearY*f,m=this.bones;for(let p=0,M=m.length;p<M;p++){let x=m[p];if(e!=0){let v=x.a,w=x.b,S=x.c,b=x.d,C=Math.atan2(u,l)+g;C>le.PI?C-=le.PI2:C<-le.PI&&(C+=le.PI2),C*=e;let E=Math.cos(C),A=Math.sin(C);x.a=E*v-A*S,x.b=E*w-A*b,x.c=A*v+E*S,x.d=A*w+E*b}if(o){let v=this.temp;c.localToWorld(v.set(this.data.offsetX,this.data.offsetY)),x.worldX+=v.x*t,x.worldY+=v.y*n}if(i!=0){let v=(Math.sqrt(l*l+u*u)-1+this.data.offsetScaleX)*i+1;x.a*=v,x.c*=v}if(s!=0){let v=(Math.sqrt(h*h+d*d)-1+this.data.offsetScaleY)*s+1;x.b*=v,x.d*=v}if(a>0){let v=Math.atan2(d,h)-Math.atan2(u,l);v>le.PI?v-=le.PI2:v<-le.PI&&(v+=le.PI2);let w=x.b,S=x.d;v=Math.atan2(S,w)+(v-le.PI/2+_)*a;let b=Math.sqrt(w*w+S*S);x.b=Math.cos(v)*b,x.d=Math.sin(v)*b}x.updateAppliedTransform()}}applyAbsoluteLocal(){let e=this.mixRotate,t=this.mixX,n=this.mixY,i=this.mixScaleX,s=this.mixScaleY,a=this.mixShearY,o=this.target,c=this.bones;for(let l=0,h=c.length;l<h;l++){let u=c[l],d=u.arotation;e!=0&&(d+=(o.arotation-d+this.data.offsetRotation)*e);let f=u.ax,g=u.ay;f+=(o.ax-f+this.data.offsetX)*t,g+=(o.ay-g+this.data.offsetY)*n;let _=u.ascaleX,m=u.ascaleY;i!=0&&_!=0&&(_=(_+(o.ascaleX-_+this.data.offsetScaleX)*i)/_),s!=0&&m!=0&&(m=(m+(o.ascaleY-m+this.data.offsetScaleY)*s)/m);let p=u.ashearY;a!=0&&(p+=(o.ashearY-p+this.data.offsetShearY)*a),u.updateWorldTransformWith(f,g,d,_,m,u.ashearX,p)}}applyRelativeLocal(){let e=this.mixRotate,t=this.mixX,n=this.mixY,i=this.mixScaleX,s=this.mixScaleY,a=this.mixShearY,o=this.target,c=this.bones;for(let l=0,h=c.length;l<h;l++){let u=c[l],d=u.arotation+(o.arotation+this.data.offsetRotation)*e,f=u.ax+(o.ax+this.data.offsetX)*t,g=u.ay+(o.ay+this.data.offsetY)*n,_=u.ascaleX*((o.ascaleX-1+this.data.offsetScaleX)*i+1),m=u.ascaleY*((o.ascaleY-1+this.data.offsetScaleY)*s+1),p=u.ashearY+(o.ashearY+this.data.offsetShearY)*a;u.updateWorldTransformWith(f,g,d,_,m,u.ashearX,p)}}}const hs=class hs{constructor(e){y(this,"data");y(this,"bones");y(this,"slots");y(this,"drawOrder");y(this,"ikConstraints");y(this,"transformConstraints");y(this,"pathConstraints");y(this,"physicsConstraints");y(this,"_updateCache",new Array);y(this,"skin",null);y(this,"color");y(this,"scaleX",1);y(this,"_scaleY",1);y(this,"x",0);y(this,"y",0);y(this,"time",0);if(!e)throw new Error("data cannot be null.");this.data=e,this.bones=new Array;for(let t=0;t<e.bones.length;t++){let n=e.bones[t],i;if(!n.parent)i=new sh(n,this,null);else{let s=this.bones[n.parent.index];i=new sh(n,this,s),s.children.push(i)}this.bones.push(i)}this.slots=new Array,this.drawOrder=new Array;for(let t=0;t<e.slots.length;t++){let n=e.slots[t],i=this.bones[n.boneData.index],s=new Ux(n,i);this.slots.push(s),this.drawOrder.push(s)}this.ikConstraints=new Array;for(let t=0;t<e.ikConstraints.length;t++){let n=e.ikConstraints[t];this.ikConstraints.push(new Lx(n,this))}this.transformConstraints=new Array;for(let t=0;t<e.transformConstraints.length;t++){let n=e.transformConstraints[t];this.transformConstraints.push(new Fx(n,this))}this.pathConstraints=new Array;for(let t=0;t<e.pathConstraints.length;t++){let n=e.pathConstraints[t];this.pathConstraints.push(new Qo(n,this))}this.physicsConstraints=new Array;for(let t=0;t<e.physicsConstraints.length;t++){let n=e.physicsConstraints[t];this.physicsConstraints.push(new Nx(n,this))}this.color=new et(1,1,1,1),this.updateCache()}get scaleY(){return hs.yDown?-this._scaleY:this._scaleY}set scaleY(e){this._scaleY=e}updateCache(){let e=this._updateCache;e.length=0;let t=this.bones;for(let d=0,f=t.length;d<f;d++){let g=t[d];g.sorted=g.data.skinRequired,g.active=!g.sorted}if(this.skin){let d=this.skin.bones;for(let f=0,g=this.skin.bones.length;f<g;f++){let _=this.bones[d[f].index];do _.sorted=!1,_.active=!0,_=_.parent;while(_)}}let n=this.ikConstraints,i=this.transformConstraints,s=this.pathConstraints,a=this.physicsConstraints,o=n.length,c=i.length,l=s.length,h=this.physicsConstraints.length,u=o+c+l+h;e:for(let d=0;d<u;d++){for(let f=0;f<o;f++){let g=n[f];if(g.data.order==d){this.sortIkConstraint(g);continue e}}for(let f=0;f<c;f++){let g=i[f];if(g.data.order==d){this.sortTransformConstraint(g);continue e}}for(let f=0;f<l;f++){let g=s[f];if(g.data.order==d){this.sortPathConstraint(g);continue e}}for(let f=0;f<h;f++){const g=a[f];if(g.data.order==d){this.sortPhysicsConstraint(g);continue e}}}for(let d=0,f=t.length;d<f;d++)this.sortBone(t[d])}sortIkConstraint(e){if(e.active=e.target.isActive()&&(!e.data.skinRequired||this.skin&&me.contains(this.skin.constraints,e.data,!0)),!e.active)return;let t=e.target;this.sortBone(t);let n=e.bones,i=n[0];if(this.sortBone(i),n.length==1)this._updateCache.push(e),this.sortReset(i.children);else{let s=n[n.length-1];this.sortBone(s),this._updateCache.push(e),this.sortReset(i.children),s.sorted=!0}}sortPathConstraint(e){if(e.active=e.target.bone.isActive()&&(!e.data.skinRequired||this.skin&&me.contains(this.skin.constraints,e.data,!0)),!e.active)return;let t=e.target,n=t.data.index,i=t.bone;this.skin&&this.sortPathConstraintAttachment(this.skin,n,i),this.data.defaultSkin&&this.data.defaultSkin!=this.skin&&this.sortPathConstraintAttachment(this.data.defaultSkin,n,i);for(let c=0,l=this.data.skins.length;c<l;c++)this.sortPathConstraintAttachment(this.data.skins[c],n,i);let s=t.getAttachment();s instanceof Ts&&this.sortPathConstraintAttachmentWith(s,i);let a=e.bones,o=a.length;for(let c=0;c<o;c++)this.sortBone(a[c]);this._updateCache.push(e);for(let c=0;c<o;c++)this.sortReset(a[c].children);for(let c=0;c<o;c++)a[c].sorted=!0}sortTransformConstraint(e){if(e.active=e.target.isActive()&&(!e.data.skinRequired||this.skin&&me.contains(this.skin.constraints,e.data,!0)),!e.active)return;this.sortBone(e.target);let t=e.bones,n=t.length;if(e.data.local)for(let i=0;i<n;i++){let s=t[i];this.sortBone(s.parent),this.sortBone(s)}else for(let i=0;i<n;i++)this.sortBone(t[i]);this._updateCache.push(e);for(let i=0;i<n;i++)this.sortReset(t[i].children);for(let i=0;i<n;i++)t[i].sorted=!0}sortPathConstraintAttachment(e,t,n){let i=e.attachments[t];if(i)for(let s in i)this.sortPathConstraintAttachmentWith(i[s],n)}sortPathConstraintAttachmentWith(e,t){if(!(e instanceof Ts))return;let n=e.bones;if(!n)this.sortBone(t);else{let i=this.bones;for(let s=0,a=n.length;s<a;){let o=n[s++];for(o+=s;s<o;)this.sortBone(i[n[s++]])}}}sortPhysicsConstraint(e){const t=e.bone;e.active=t.active&&(!e.data.skinRequired||this.skin!=null&&me.contains(this.skin.constraints,e.data,!0)),e.active&&(this.sortBone(t),this._updateCache.push(e),this.sortReset(t.children),t.sorted=!0)}sortBone(e){if(!e||e.sorted)return;let t=e.parent;t&&this.sortBone(t),e.sorted=!0,this._updateCache.push(e)}sortReset(e){for(let t=0,n=e.length;t<n;t++){let i=e[t];i.active&&(i.sorted&&this.sortReset(i.children),i.sorted=!1)}}updateWorldTransform(e){if(e==null)throw new Error("physics is undefined");let t=this.bones;for(let i=0,s=t.length;i<s;i++){let a=t[i];a.ax=a.x,a.ay=a.y,a.arotation=a.rotation,a.ascaleX=a.scaleX,a.ascaleY=a.scaleY,a.ashearX=a.shearX,a.ashearY=a.shearY}let n=this._updateCache;for(let i=0,s=n.length;i<s;i++)n[i].update(e)}updateWorldTransformWith(e,t){let n=this.getRootBone();if(!n)throw new Error("Root bone must not be null.");let i=t.a,s=t.b,a=t.c,o=t.d;n.worldX=i*this.x+s*this.y+t.worldX,n.worldY=a*this.x+o*this.y+t.worldY;const c=(n.rotation+n.shearX)*le.degRad,l=(n.rotation+90+n.shearY)*le.degRad,h=Math.cos(c)*n.scaleX,u=Math.cos(l)*n.scaleY,d=Math.sin(c)*n.scaleX,f=Math.sin(l)*n.scaleY;n.a=(i*h+s*d)*this.scaleX,n.b=(i*u+s*f)*this.scaleX,n.c=(a*h+o*d)*this.scaleY,n.d=(a*u+o*f)*this.scaleY;let g=this._updateCache;for(let _=0,m=g.length;_<m;_++){let p=g[_];p!=n&&p.update(e)}}setToSetupPose(){this.setBonesToSetupPose(),this.setSlotsToSetupPose()}setBonesToSetupPose(){for(const e of this.bones)e.setToSetupPose();for(const e of this.ikConstraints)e.setToSetupPose();for(const e of this.transformConstraints)e.setToSetupPose();for(const e of this.pathConstraints)e.setToSetupPose();for(const e of this.physicsConstraints)e.setToSetupPose()}setSlotsToSetupPose(){let e=this.slots;me.arrayCopy(e,0,this.drawOrder,0,e.length);for(let t=0,n=e.length;t<n;t++)e[t].setToSetupPose()}getRootBone(){return this.bones.length==0?null:this.bones[0]}findBone(e){if(!e)throw new Error("boneName cannot be null.");let t=this.bones;for(let n=0,i=t.length;n<i;n++){let s=t[n];if(s.data.name==e)return s}return null}findSlot(e){if(!e)throw new Error("slotName cannot be null.");let t=this.slots;for(let n=0,i=t.length;n<i;n++){let s=t[n];if(s.data.name==e)return s}return null}setSkinByName(e){let t=this.data.findSkin(e);if(!t)throw new Error("Skin not found: "+e);this.setSkin(t)}setSkin(e){if(e!=this.skin){if(e)if(this.skin)e.attachAll(this,this.skin);else{let t=this.slots;for(let n=0,i=t.length;n<i;n++){let s=t[n],a=s.data.attachmentName;if(a){let o=e.getAttachment(n,a);o&&s.setAttachment(o)}}}this.skin=e,this.updateCache()}}getAttachmentByName(e,t){let n=this.data.findSlot(e);if(!n)throw new Error(`Can't find slot with name ${e}`);return this.getAttachment(n.index,t)}getAttachment(e,t){if(!t)throw new Error("attachmentName cannot be null.");if(this.skin){let n=this.skin.getAttachment(e,t);if(n)return n}return this.data.defaultSkin?this.data.defaultSkin.getAttachment(e,t):null}setAttachment(e,t){if(!e)throw new Error("slotName cannot be null.");let n=this.slots;for(let i=0,s=n.length;i<s;i++){let a=n[i];if(a.data.name==e){let o=null;if(t&&(o=this.getAttachment(i,t),!o))throw new Error("Attachment not found: "+t+", for slot: "+e);a.setAttachment(o);return}}throw new Error("Slot not found: "+e)}findIkConstraint(e){if(!e)throw new Error("constraintName cannot be null.");return this.ikConstraints.find(t=>t.data.name==e)??null}findTransformConstraint(e){if(!e)throw new Error("constraintName cannot be null.");return this.transformConstraints.find(t=>t.data.name==e)??null}findPathConstraint(e){if(!e)throw new Error("constraintName cannot be null.");return this.pathConstraints.find(t=>t.data.name==e)??null}findPhysicsConstraint(e){if(e==null)throw new Error("constraintName cannot be null.");return this.physicsConstraints.find(t=>t.data.name==e)??null}getBoundsRect(){let e=new rr,t=new rr;return this.getBounds(e,t),{x:e.x,y:e.y,width:t.x,height:t.y}}getBounds(e,t,n=new Array(2),i=null){if(!e)throw new Error("offset cannot be null.");if(!t)throw new Error("size cannot be null.");let s=this.drawOrder,a=Number.POSITIVE_INFINITY,o=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,l=Number.NEGATIVE_INFINITY;for(let h=0,u=s.length;h<u;h++){let d=s[h];if(!d.bone.active)continue;let f=0,g=null,_=null,m=d.getAttachment();if(m instanceof ar)f=8,g=me.setArraySize(n,f,0),m.computeWorldVertices(d,g,0,2),_=hs.quadTriangles;else if(m instanceof Ui){let p=m;f=p.worldVerticesLength,g=me.setArraySize(n,f,0),p.computeWorldVertices(d,0,f,g,0,2),_=p.triangles}else if(m instanceof dr&&i!=null){i.clipStart(d,m);continue}if(g&&_){i!=null&&i.isClipping()&&(i.clipTriangles(g,_,_.length),g=i.clippedVertices,f=i.clippedVertices.length);for(let p=0,M=g.length;p<M;p+=2){let x=g[p],v=g[p+1];a=Math.min(a,x),o=Math.min(o,v),c=Math.max(c,x),l=Math.max(l,v)}}i!=null&&i.clipEndWithSlot(d)}i!=null&&i.clipEnd(),e.set(a,o),t.set(c-a,l-o)}update(e){this.time+=e}physicsTranslate(e,t){const n=this.physicsConstraints;for(let i=0,s=n.length;i<s;i++)n[i].translate(e,t)}physicsRotate(e,t,n){const i=this.physicsConstraints;for(let s=0,a=i.length;s<a;s++)i[s].rotate(e,t,n)}};y(hs,"quadTriangles",[0,1,2,2,3,0]),y(hs,"yDown",!1);let el=hs;var ci;(function(r){r[r.none=0]="none",r[r.reset=1]="reset",r[r.update=2]="update",r[r.pose=3]="pose"})(ci||(ci={}));class Ox extends va{constructor(t){super(t,0,!1);y(this,"_bone",null);y(this,"x",0);y(this,"y",0);y(this,"rotate",0);y(this,"scaleX",0);y(this,"shearX",0);y(this,"limit",0);y(this,"step",0);y(this,"inertia",0);y(this,"strength",0);y(this,"damping",0);y(this,"massInverse",0);y(this,"wind",0);y(this,"gravity",0);y(this,"mix",0);y(this,"inertiaGlobal",!1);y(this,"strengthGlobal",!1);y(this,"dampingGlobal",!1);y(this,"massGlobal",!1);y(this,"windGlobal",!1);y(this,"gravityGlobal",!1);y(this,"mixGlobal",!1)}set bone(t){this._bone=t}get bone(){if(this._bone)return this._bone;throw new Error("BoneData not set.")}}class Bx{constructor(){y(this,"name",null);y(this,"bones",new Array);y(this,"slots",new Array);y(this,"skins",new Array);y(this,"defaultSkin",null);y(this,"events",new Array);y(this,"animations",new Array);y(this,"ikConstraints",new Array);y(this,"transformConstraints",new Array);y(this,"pathConstraints",new Array);y(this,"physicsConstraints",new Array);y(this,"x",0);y(this,"y",0);y(this,"width",0);y(this,"height",0);y(this,"referenceScale",100);y(this,"version",null);y(this,"hash",null);y(this,"fps",0);y(this,"imagesPath",null);y(this,"audioPath",null)}findBone(e){if(!e)throw new Error("boneName cannot be null.");let t=this.bones;for(let n=0,i=t.length;n<i;n++){let s=t[n];if(s.name==e)return s}return null}findSlot(e){if(!e)throw new Error("slotName cannot be null.");let t=this.slots;for(let n=0,i=t.length;n<i;n++){let s=t[n];if(s.name==e)return s}return null}findSkin(e){if(!e)throw new Error("skinName cannot be null.");let t=this.skins;for(let n=0,i=t.length;n<i;n++){let s=t[n];if(s.name==e)return s}return null}findEvent(e){if(!e)throw new Error("eventDataName cannot be null.");let t=this.events;for(let n=0,i=t.length;n<i;n++){let s=t[n];if(s.name==e)return s}return null}findAnimation(e){if(!e)throw new Error("animationName cannot be null.");let t=this.animations;for(let n=0,i=t.length;n<i;n++){let s=t[n];if(s.name==e)return s}return null}findIkConstraint(e){if(!e)throw new Error("constraintName cannot be null.");const t=this.ikConstraints;for(let n=0,i=t.length;n<i;n++){const s=t[n];if(s.name==e)return s}return null}findTransformConstraint(e){if(!e)throw new Error("constraintName cannot be null.");const t=this.transformConstraints;for(let n=0,i=t.length;n<i;n++){const s=t[n];if(s.name==e)return s}return null}findPathConstraint(e){if(!e)throw new Error("constraintName cannot be null.");const t=this.pathConstraints;for(let n=0,i=t.length;n<i;n++){const s=t[n];if(s.name==e)return s}return null}findPhysicsConstraint(e){if(!e)throw new Error("constraintName cannot be null.");const t=this.physicsConstraints;for(let n=0,i=t.length;n<i;n++){const s=t[n];if(s.name==e)return s}return null}}class rh{constructor(e=0,t,n){y(this,"slotIndex");y(this,"name");y(this,"attachment");this.slotIndex=e,this.name=t,this.attachment=n}}class kx{constructor(e){y(this,"name");y(this,"attachments",new Array);y(this,"bones",Array());y(this,"constraints",new Array);y(this,"color",new et(.99607843,.61960787,.30980393,1));if(!e)throw new Error("name cannot be null.");this.name=e}setAttachment(e,t,n){if(!n)throw new Error("attachment cannot be null.");let i=this.attachments;e>=i.length&&(i.length=e+1),i[e]||(i[e]={}),i[e][t]=n}addSkin(e){for(let i=0;i<e.bones.length;i++){let s=e.bones[i],a=!1;for(let o=0;o<this.bones.length;o++)if(this.bones[o]==s){a=!0;break}a||this.bones.push(s)}for(let i=0;i<e.constraints.length;i++){let s=e.constraints[i],a=!1;for(let o=0;o<this.constraints.length;o++)if(this.constraints[o]==s){a=!0;break}a||this.constraints.push(s)}let t=e.getAttachments();for(let i=0;i<t.length;i++){var n=t[i];this.setAttachment(n.slotIndex,n.name,n.attachment)}}copySkin(e){for(let i=0;i<e.bones.length;i++){let s=e.bones[i],a=!1;for(let o=0;o<this.bones.length;o++)if(this.bones[o]==s){a=!0;break}a||this.bones.push(s)}for(let i=0;i<e.constraints.length;i++){let s=e.constraints[i],a=!1;for(let o=0;o<this.constraints.length;o++)if(this.constraints[o]==s){a=!0;break}a||this.constraints.push(s)}let t=e.getAttachments();for(let i=0;i<t.length;i++){var n=t[i];n.attachment&&(n.attachment instanceof Ui?(n.attachment=n.attachment.newLinkedMesh(),this.setAttachment(n.slotIndex,n.name,n.attachment)):(n.attachment=n.attachment.copy(),this.setAttachment(n.slotIndex,n.name,n.attachment)))}}getAttachment(e,t){let n=this.attachments[e];return n?n[t]:null}removeAttachment(e,t){let n=this.attachments[e];n&&delete n[t]}getAttachments(){let e=new Array;for(var t=0;t<this.attachments.length;t++){let n=this.attachments[t];if(n)for(let i in n){let s=n[i];s&&e.push(new rh(t,i,s))}}return e}getAttachmentsForSlot(e,t){let n=this.attachments[e];if(n)for(let i in n){let s=n[i];s&&t.push(new rh(e,i,s))}}clear(){this.attachments.length=0,this.bones.length=0,this.constraints.length=0}attachAll(e,t){let n=0;for(let i=0;i<e.slots.length;i++){let s=e.slots[i],a=s.getAttachment();if(a&&n<t.attachments.length){let o=t.attachments[n];for(let c in o){let l=o[c];if(a==l){let h=this.getAttachment(n,c);h&&s.setAttachment(h);break}}}n++}}}class Vx{constructor(e,t,n){y(this,"index",0);y(this,"name");y(this,"boneData");y(this,"color",new et(1,1,1,1));y(this,"darkColor",null);y(this,"attachmentName",null);y(this,"blendMode",ui.Normal);y(this,"visible",!0);if(e<0)throw new Error("index must be >= 0.");if(!t)throw new Error("name cannot be null.");if(!n)throw new Error("boneData cannot be null.");this.index=e,this.name=t,this.boneData=n}}var ui;(function(r){r[r.Normal=0]="Normal",r[r.Additive=1]="Additive",r[r.Multiply=2]="Multiply",r[r.Screen=3]="Screen"})(ui||(ui={}));class zx extends va{constructor(t){super(t,0,!1);y(this,"bones",new Array);y(this,"_target",null);y(this,"mixRotate",0);y(this,"mixX",0);y(this,"mixY",0);y(this,"mixScaleX",0);y(this,"mixScaleY",0);y(this,"mixShearY",0);y(this,"offsetRotation",0);y(this,"offsetX",0);y(this,"offsetY",0);y(this,"offsetScaleX",0);y(this,"offsetScaleY",0);y(this,"offsetShearY",0);y(this,"relative",!1);y(this,"local",!1)}set target(t){this._target=t}get target(){if(this._target)return this._target;throw new Error("BoneData not set.")}}var ah;(function(r){r[r.Region=0]="Region",r[r.BoundingBox=1]="BoundingBox",r[r.Mesh=2]="Mesh",r[r.LinkedMesh=3]="LinkedMesh",r[r.Path=4]="Path",r[r.Point=5]="Point",r[r.Clipping=6]="Clipping"})(ah||(ah={}));class Xt{constructor(){y(this,"convexPolygons",new Array);y(this,"convexPolygonsIndices",new Array);y(this,"indicesArray",new Array);y(this,"isConcaveArray",new Array);y(this,"triangles",new Array);y(this,"polygonPool",new qo(()=>new Array));y(this,"polygonIndicesPool",new qo(()=>new Array))}triangulate(e){let t=e,n=e.length>>1,i=this.indicesArray;i.length=0;for(let o=0;o<n;o++)i[o]=o;let s=this.isConcaveArray;s.length=0;for(let o=0,c=n;o<c;++o)s[o]=Xt.isConcave(o,n,t,i);let a=this.triangles;for(a.length=0;n>3;){let o=n-1,c=0,l=1;for(;;){e:if(!s[c]){let d=i[o]<<1,f=i[c]<<1,g=i[l]<<1,_=t[d],m=t[d+1],p=t[f],M=t[f+1],x=t[g],v=t[g+1];for(let w=(l+1)%n;w!=o;w=(w+1)%n){if(!s[w])continue;let S=i[w]<<1,b=t[S],C=t[S+1];if(Xt.positiveArea(x,v,_,m,b,C)&&Xt.positiveArea(_,m,p,M,b,C)&&Xt.positiveArea(p,M,x,v,b,C))break e}break}if(l==0){do{if(!s[c])break;c--}while(c>0);break}o=c,c=l,l=(l+1)%n}a.push(i[(n+c-1)%n]),a.push(i[c]),a.push(i[(c+1)%n]),i.splice(c,1),s.splice(c,1),n--;let h=(n+c-1)%n,u=c==n?0:c;s[h]=Xt.isConcave(h,n,t,i),s[u]=Xt.isConcave(u,n,t,i)}return n==3&&(a.push(i[2]),a.push(i[0]),a.push(i[1])),a}decompose(e,t){let n=e,i=this.convexPolygons;this.polygonPool.freeAll(i),i.length=0;let s=this.convexPolygonsIndices;this.polygonIndicesPool.freeAll(s),s.length=0;let a=this.polygonIndicesPool.obtain();a.length=0;let o=this.polygonPool.obtain();o.length=0;let c=-1,l=0;for(let h=0,u=t.length;h<u;h+=3){let d=t[h]<<1,f=t[h+1]<<1,g=t[h+2]<<1,_=n[d],m=n[d+1],p=n[f],M=n[f+1],x=n[g],v=n[g+1],w=!1;if(c==d){let S=o.length-4,b=Xt.winding(o[S],o[S+1],o[S+2],o[S+3],x,v),C=Xt.winding(x,v,o[0],o[1],o[2],o[3]);b==l&&C==l&&(o.push(x),o.push(v),a.push(g),w=!0)}w||(o.length>0?(i.push(o),s.push(a)):(this.polygonPool.free(o),this.polygonIndicesPool.free(a)),o=this.polygonPool.obtain(),o.length=0,o.push(_),o.push(m),o.push(p),o.push(M),o.push(x),o.push(v),a=this.polygonIndicesPool.obtain(),a.length=0,a.push(d),a.push(f),a.push(g),l=Xt.winding(_,m,p,M,x,v),c=d)}o.length>0&&(i.push(o),s.push(a));for(let h=0,u=i.length;h<u;h++){if(a=s[h],a.length==0)continue;let d=a[0],f=a[a.length-1];o=i[h];let g=o.length-4,_=o[g],m=o[g+1],p=o[g+2],M=o[g+3],x=o[0],v=o[1],w=o[2],S=o[3],b=Xt.winding(_,m,p,M,x,v);for(let C=0;C<u;C++){if(C==h)continue;let E=s[C];if(E.length!=3)continue;let A=E[0],P=E[1],k=E[2],F=i[C],I=F[F.length-2],N=F[F.length-1];if(A!=d||P!=f)continue;let V=Xt.winding(_,m,p,M,I,N),Y=Xt.winding(I,N,x,v,w,S);V==b&&Y==b&&(F.length=0,E.length=0,o.push(I),o.push(N),a.push(k),_=p,m=M,p=I,M=N,C=0)}}for(let h=i.length-1;h>=0;h--)o=i[h],o.length==0&&(i.splice(h,1),this.polygonPool.free(o),a=s[h],s.splice(h,1),this.polygonIndicesPool.free(a));return i}static isConcave(e,t,n,i){let s=i[(t+e-1)%t]<<1,a=i[e]<<1,o=i[(e+1)%t]<<1;return!this.positiveArea(n[s],n[s+1],n[a],n[a+1],n[o],n[o+1])}static positiveArea(e,t,n,i,s,a){return e*(a-i)+n*(t-a)+s*(i-t)>=0}static winding(e,t,n,i,s,a){let o=n-e,c=i-t;return s*c-a*o+o*t-e*c>=0?1:-1}}class ca{constructor(){y(this,"triangulator",new Xt);y(this,"clippingPolygon",new Array);y(this,"clipOutput",new Array);y(this,"clippedVertices",new Array);y(this,"clippedUVs",new Array);y(this,"clippedTriangles",new Array);y(this,"scratch",new Array);y(this,"clipAttachment",null);y(this,"clippingPolygons",null)}clipStart(e,t){if(this.clipAttachment)return 0;this.clipAttachment=t;let n=t.worldVerticesLength,i=me.setArraySize(this.clippingPolygon,n);t.computeWorldVertices(e,0,n,i,0,2);let s=this.clippingPolygon;ca.makeClockwise(s);let a=this.clippingPolygons=this.triangulator.decompose(s,this.triangulator.triangulate(s));for(let o=0,c=a.length;o<c;o++){let l=a[o];ca.makeClockwise(l),l.push(l[0]),l.push(l[1])}return a.length}clipEndWithSlot(e){this.clipAttachment&&this.clipAttachment.endSlot==e.data&&this.clipEnd()}clipEnd(){this.clipAttachment&&(this.clipAttachment=null,this.clippingPolygons=null,this.clippedVertices.length=0,this.clippedTriangles.length=0,this.clippingPolygon.length=0)}isClipping(){return this.clipAttachment!=null}clipTriangles(e,t,n,i,s,a,o,c){let l,h,u,d,f,g;typeof t=="number"?(l=n,h=i,u=s,d=a,f=o,g=c):(l=t,h=n,u=i,d=s,f=a,g=o),u&&d&&f&&typeof g=="boolean"?this.clipTrianglesRender(e,l,h,u,d,f,g):this.clipTrianglesNoRender(e,l,h)}clipTrianglesNoRender(e,t,n){let i=this.clipOutput,s=this.clippedVertices,a=this.clippedTriangles,o=this.clippingPolygons,c=o.length,l=0;s.length=0,a.length=0;for(let h=0;h<n;h+=3){let u=t[h]<<1,d=e[u],f=e[u+1];u=t[h+1]<<1;let g=e[u],_=e[u+1];u=t[h+2]<<1;let m=e[u],p=e[u+1];for(let M=0;M<c;M++){let x=s.length;if(this.clip(d,f,g,_,m,p,o[M],i)){let v=i.length;if(v==0)continue;let w=v>>1,S=this.clipOutput,b=me.setArraySize(s,x+w*2);for(let E=0;E<v;E+=2,x+=2){let A=S[E],P=S[E+1];b[x]=A,b[x+1]=P}x=a.length;let C=me.setArraySize(a,x+3*(w-2));w--;for(let E=1;E<w;E++,x+=3)C[x]=l,C[x+1]=l+E,C[x+2]=l+E+1;l+=w+1}else{let v=me.setArraySize(s,x+6);v[x]=d,v[x+1]=f,v[x+2]=g,v[x+3]=_,v[x+4]=m,v[x+5]=p,x=a.length;let w=me.setArraySize(a,x+3);w[x]=l,w[x+1]=l+1,w[x+2]=l+2,l+=3;break}}}}clipTrianglesRender(e,t,n,i,s,a,o){let c=this.clipOutput,l=this.clippedVertices,h=this.clippedTriangles,u=this.clippingPolygons,d=u.length,f=o?12:8,g=0;l.length=0,h.length=0;for(let _=0;_<n;_+=3){let m=t[_]<<1,p=e[m],M=e[m+1],x=i[m],v=i[m+1];m=t[_+1]<<1;let w=e[m],S=e[m+1],b=i[m],C=i[m+1];m=t[_+2]<<1;let E=e[m],A=e[m+1],P=i[m],k=i[m+1];for(let F=0;F<d;F++){let I=l.length;if(this.clip(p,M,w,S,E,A,u[F],c)){let N=c.length;if(N==0)continue;let V=S-A,Y=E-w,W=p-E,Q=A-M,ie=1/(V*W+Y*(M-A)),ae=N>>1,ve=this.clipOutput,oe=me.setArraySize(l,I+ae*f);for(let J=0;J<N;J+=2,I+=f){let de=ve[J],ue=ve[J+1];oe[I]=de,oe[I+1]=ue,oe[I+2]=s.r,oe[I+3]=s.g,oe[I+4]=s.b,oe[I+5]=s.a;let ye=de-E,Ae=ue-A,we=(V*ye+Y*Ae)*ie,Je=(Q*ye+W*Ae)*ie,U=1-we-Je;oe[I+6]=x*we+b*Je+P*U,oe[I+7]=v*we+C*Je+k*U,o&&(oe[I+8]=a.r,oe[I+9]=a.g,oe[I+10]=a.b,oe[I+11]=a.a)}I=h.length;let G=me.setArraySize(h,I+3*(ae-2));ae--;for(let J=1;J<ae;J++,I+=3)G[I]=g,G[I+1]=g+J,G[I+2]=g+J+1;g+=ae+1}else{let N=me.setArraySize(l,I+3*f);N[I]=p,N[I+1]=M,N[I+2]=s.r,N[I+3]=s.g,N[I+4]=s.b,N[I+5]=s.a,o?(N[I+6]=x,N[I+7]=v,N[I+8]=a.r,N[I+9]=a.g,N[I+10]=a.b,N[I+11]=a.a,N[I+12]=w,N[I+13]=S,N[I+14]=s.r,N[I+15]=s.g,N[I+16]=s.b,N[I+17]=s.a,N[I+18]=b,N[I+19]=C,N[I+20]=a.r,N[I+21]=a.g,N[I+22]=a.b,N[I+23]=a.a,N[I+24]=E,N[I+25]=A,N[I+26]=s.r,N[I+27]=s.g,N[I+28]=s.b,N[I+29]=s.a,N[I+30]=P,N[I+31]=k,N[I+32]=a.r,N[I+33]=a.g,N[I+34]=a.b,N[I+35]=a.a):(N[I+6]=x,N[I+7]=v,N[I+8]=w,N[I+9]=S,N[I+10]=s.r,N[I+11]=s.g,N[I+12]=s.b,N[I+13]=s.a,N[I+14]=b,N[I+15]=C,N[I+16]=E,N[I+17]=A,N[I+18]=s.r,N[I+19]=s.g,N[I+20]=s.b,N[I+21]=s.a,N[I+22]=P,N[I+23]=k),I=h.length;let V=me.setArraySize(h,I+3);V[I]=g,V[I+1]=g+1,V[I+2]=g+2,g+=3;break}}}}clipTrianglesUnpacked(e,t,n,i){let s=this.clipOutput,a=this.clippedVertices,o=this.clippedUVs,c=this.clippedTriangles,l=this.clippingPolygons,h=l.length,u=0;a.length=0,o.length=0,c.length=0;for(let d=0;d<n;d+=3){let f=t[d]<<1,g=e[f],_=e[f+1],m=i[f],p=i[f+1];f=t[d+1]<<1;let M=e[f],x=e[f+1],v=i[f],w=i[f+1];f=t[d+2]<<1;let S=e[f],b=e[f+1],C=i[f],E=i[f+1];for(let A=0;A<h;A++){let P=a.length;if(this.clip(g,_,M,x,S,b,l[A],s)){let k=s.length;if(k==0)continue;let F=x-b,I=S-M,N=g-S,V=b-_,Y=1/(F*N+I*(_-b)),W=k>>1,Q=this.clipOutput,ie=me.setArraySize(a,P+W*2),ae=me.setArraySize(o,P+W*2);for(let oe=0;oe<k;oe+=2,P+=2){let G=Q[oe],J=Q[oe+1];ie[P]=G,ie[P+1]=J;let de=G-S,ue=J-b,ye=(F*de+I*ue)*Y,Ae=(V*de+N*ue)*Y,we=1-ye-Ae;ae[P]=m*ye+v*Ae+C*we,ae[P+1]=p*ye+w*Ae+E*we}P=c.length;let ve=me.setArraySize(c,P+3*(W-2));W--;for(let oe=1;oe<W;oe++,P+=3)ve[P]=u,ve[P+1]=u+oe,ve[P+2]=u+oe+1;u+=W+1}else{let k=me.setArraySize(a,P+6);k[P]=g,k[P+1]=_,k[P+2]=M,k[P+3]=x,k[P+4]=S,k[P+5]=b;let F=me.setArraySize(o,P+3*2);F[P]=m,F[P+1]=p,F[P+2]=v,F[P+3]=w,F[P+4]=C,F[P+5]=E,P=c.length;let I=me.setArraySize(c,P+3);I[P]=u,I[P+1]=u+1,I[P+2]=u+2,u+=3;break}}}}clip(e,t,n,i,s,a,o,c){let l=c,h=!1,u;o.length%4>=2?(u=c,c=this.scratch):u=this.scratch,u.length=0,u.push(e),u.push(t),u.push(n),u.push(i),u.push(s),u.push(a),u.push(e),u.push(t),c.length=0;let d=o.length-4,f=o;for(let g=0;;g+=2){let _=f[g],m=f[g+1],p=_-f[g+2],M=m-f[g+3],x=c.length,v=u;for(let S=0,b=u.length-2;S<b;){let C=v[S],E=v[S+1];S+=2;let A=v[S],P=v[S+1],k=M*(_-A)>p*(m-P),F=M*(_-C)-p*(m-E);if(F>0){if(k){c.push(A),c.push(P);continue}let I=A-C,N=P-E,V=F/(I*M-N*p);if(V>=0&&V<=1)c.push(C+I*V),c.push(E+N*V);else{c.push(A),c.push(P);continue}}else if(k){let I=A-C,N=P-E,V=F/(I*M-N*p);if(V>=0&&V<=1)c.push(C+I*V),c.push(E+N*V),c.push(A),c.push(P);else{c.push(A),c.push(P);continue}}h=!0}if(x==c.length)return l.length=0,!0;if(c.push(c[0]),c.push(c[1]),g==d)break;let w=c;c=u,c.length=0,u=w}if(l!=c){l.length=0;for(let g=0,_=c.length-2;g<_;g++)l[g]=c[g]}else l.length=l.length-2;return h}static makeClockwise(e){let t=e,n=e.length,i=t[n-2]*t[1]-t[0]*t[n-1],s=0,a=0,o=0,c=0;for(let l=0,h=n-3;l<h;l+=2)s=t[l],a=t[l+1],o=t[l+2],c=t[l+3],i+=s*c-o*a;if(!(i<0))for(let l=0,h=n-2,u=n>>1;l<u;l+=2){let d=t[l],f=t[l+1],g=h-l;t[l]=t[g],t[l+1]=t[g+1],t[g]=d,t[g+1]=f}}}class Hx{constructor(e){y(this,"attachmentLoader");y(this,"scale",1);y(this,"linkedMeshes",new Array);this.attachmentLoader=e}readSkeletonData(e){let t=this.scale,n=new Bx,i=typeof e=="string"?JSON.parse(e):e,s=i.skeleton;if(s&&(n.hash=s.hash,n.version=s.spine,n.x=s.x,n.y=s.y,n.width=s.width,n.height=s.height,n.referenceScale=B(s,"referenceScale",100)*t,n.fps=s.fps,n.imagesPath=s.images??null,n.audioPath=s.audio??null),i.bones)for(let a=0;a<i.bones.length;a++){let o=i.bones[a],c=null,l=B(o,"parent",null);l&&(c=n.findBone(l));let h=new Tx(n.bones.length,o.name,c);h.length=B(o,"length",0)*t,h.x=B(o,"x",0)*t,h.y=B(o,"y",0)*t,h.rotation=B(o,"rotation",0),h.scaleX=B(o,"scaleX",1),h.scaleY=B(o,"scaleY",1),h.shearX=B(o,"shearX",0),h.shearY=B(o,"shearY",0),h.inherit=me.enumValue(pt,B(o,"inherit","Normal")),h.skinRequired=B(o,"skin",!1);let u=B(o,"color",null);u&&h.color.setFromString(u),n.bones.push(h)}if(i.slots)for(let a=0;a<i.slots.length;a++){let o=i.slots[a],c=o.name,l=n.findBone(o.bone);if(!l)throw new Error(`Couldn't find bone ${o.bone} for slot ${c}`);let h=new Vx(n.slots.length,c,l),u=B(o,"color",null);u&&h.color.setFromString(u);let d=B(o,"dark",null);d&&(h.darkColor=et.fromString(d)),h.attachmentName=B(o,"attachment",null),h.blendMode=me.enumValue(ui,B(o,"blend","normal")),h.visible=B(o,"visible",!0),n.slots.push(h)}if(i.ik)for(let a=0;a<i.ik.length;a++){let o=i.ik[a],c=new Ix(o.name);c.order=B(o,"order",0),c.skinRequired=B(o,"skin",!1);for(let h=0;h<o.bones.length;h++){let u=n.findBone(o.bones[h]);if(!u)throw new Error(`Couldn't find bone ${o.bones[h]} for IK constraint ${o.name}.`);c.bones.push(u)}let l=n.findBone(o.target);if(!l)throw new Error(`Couldn't find target bone ${o.target} for IK constraint ${o.name}.`);c.target=l,c.mix=B(o,"mix",1),c.softness=B(o,"softness",0)*t,c.bendDirection=B(o,"bendPositive",!0)?1:-1,c.compress=B(o,"compress",!1),c.stretch=B(o,"stretch",!1),c.uniform=B(o,"uniform",!1),n.ikConstraints.push(c)}if(i.transform)for(let a=0;a<i.transform.length;a++){let o=i.transform[a],c=new zx(o.name);c.order=B(o,"order",0),c.skinRequired=B(o,"skin",!1);for(let u=0;u<o.bones.length;u++){let d=o.bones[u],f=n.findBone(d);if(!f)throw new Error(`Couldn't find bone ${d} for transform constraint ${o.name}.`);c.bones.push(f)}let l=o.target,h=n.findBone(l);if(!h)throw new Error(`Couldn't find target bone ${l} for transform constraint ${o.name}.`);c.target=h,c.local=B(o,"local",!1),c.relative=B(o,"relative",!1),c.offsetRotation=B(o,"rotation",0),c.offsetX=B(o,"x",0)*t,c.offsetY=B(o,"y",0)*t,c.offsetScaleX=B(o,"scaleX",0),c.offsetScaleY=B(o,"scaleY",0),c.offsetShearY=B(o,"shearY",0),c.mixRotate=B(o,"mixRotate",1),c.mixX=B(o,"mixX",1),c.mixY=B(o,"mixY",c.mixX),c.mixScaleX=B(o,"mixScaleX",1),c.mixScaleY=B(o,"mixScaleY",c.mixScaleX),c.mixShearY=B(o,"mixShearY",1),n.transformConstraints.push(c)}if(i.path)for(let a=0;a<i.path.length;a++){let o=i.path[a],c=new Dx(o.name);c.order=B(o,"order",0),c.skinRequired=B(o,"skin",!1);for(let u=0;u<o.bones.length;u++){let d=o.bones[u],f=n.findBone(d);if(!f)throw new Error(`Couldn't find bone ${d} for path constraint ${o.name}.`);c.bones.push(f)}let l=o.target,h=n.findSlot(l);if(!h)throw new Error(`Couldn't find target slot ${l} for path constraint ${o.name}.`);c.target=h,c.positionMode=me.enumValue(pi,B(o,"positionMode","Percent")),c.spacingMode=me.enumValue(zt,B(o,"spacingMode","Length")),c.rotateMode=me.enumValue(Li,B(o,"rotateMode","Tangent")),c.offsetRotation=B(o,"rotation",0),c.position=B(o,"position",0),c.positionMode==pi.Fixed&&(c.position*=t),c.spacing=B(o,"spacing",0),(c.spacingMode==zt.Length||c.spacingMode==zt.Fixed)&&(c.spacing*=t),c.mixRotate=B(o,"mixRotate",1),c.mixX=B(o,"mixX",1),c.mixY=B(o,"mixY",c.mixX),n.pathConstraints.push(c)}if(i.physics)for(let a=0;a<i.physics.length;a++){const o=i.physics[a],c=new Ox(o.name);c.order=B(o,"order",0),c.skinRequired=B(o,"skin",!1);const l=o.bone,h=n.findBone(l);if(h==null)throw new Error("Physics bone not found: "+l);c.bone=h,c.x=B(o,"x",0),c.y=B(o,"y",0),c.rotate=B(o,"rotate",0),c.scaleX=B(o,"scaleX",0),c.shearX=B(o,"shearX",0),c.limit=B(o,"limit",5e3)*t,c.step=1/B(o,"fps",60),c.inertia=B(o,"inertia",1),c.strength=B(o,"strength",100),c.damping=B(o,"damping",1),c.massInverse=1/B(o,"mass",1),c.wind=B(o,"wind",0),c.gravity=B(o,"gravity",0),c.mix=B(o,"mix",1),c.inertiaGlobal=B(o,"inertiaGlobal",!1),c.strengthGlobal=B(o,"strengthGlobal",!1),c.dampingGlobal=B(o,"dampingGlobal",!1),c.massGlobal=B(o,"massGlobal",!1),c.windGlobal=B(o,"windGlobal",!1),c.gravityGlobal=B(o,"gravityGlobal",!1),c.mixGlobal=B(o,"mixGlobal",!1),n.physicsConstraints.push(c)}if(i.skins)for(let a=0;a<i.skins.length;a++){let o=i.skins[a],c=new kx(o.name);if(o.bones)for(let l=0;l<o.bones.length;l++){let h=o.bones[l],u=n.findBone(h);if(!u)throw new Error(`Couldn't find bone ${h} for skin ${o.name}.`);c.bones.push(u)}if(o.ik)for(let l=0;l<o.ik.length;l++){let h=o.ik[l],u=n.findIkConstraint(h);if(!u)throw new Error(`Couldn't find IK constraint ${h} for skin ${o.name}.`);c.constraints.push(u)}if(o.transform)for(let l=0;l<o.transform.length;l++){let h=o.transform[l],u=n.findTransformConstraint(h);if(!u)throw new Error(`Couldn't find transform constraint ${h} for skin ${o.name}.`);c.constraints.push(u)}if(o.path)for(let l=0;l<o.path.length;l++){let h=o.path[l],u=n.findPathConstraint(h);if(!u)throw new Error(`Couldn't find path constraint ${h} for skin ${o.name}.`);c.constraints.push(u)}if(o.physics)for(let l=0;l<o.physics.length;l++){let h=o.physics[l],u=n.findPhysicsConstraint(h);if(!u)throw new Error(`Couldn't find physics constraint ${h} for skin ${o.name}.`);c.constraints.push(u)}for(let l in o.attachments){let h=n.findSlot(l);if(!h)throw new Error(`Couldn't find slot ${l} for skin ${o.name}.`);let u=o.attachments[l];for(let d in u){let f=this.readAttachment(u[d],c,h.index,d,n);f&&c.setAttachment(h.index,d,f)}}n.skins.push(c),c.name=="default"&&(n.defaultSkin=c)}for(let a=0,o=this.linkedMeshes.length;a<o;a++){let c=this.linkedMeshes[a],l=c.skin?n.findSkin(c.skin):n.defaultSkin;if(!l)throw new Error(`Skin not found: ${c.skin}`);let h=l.getAttachment(c.slotIndex,c.parent);if(!h)throw new Error(`Parent mesh not found: ${c.parent}`);c.mesh.timelineAttachment=c.inheritTimeline?h:c.mesh,c.mesh.setParentMesh(h),c.mesh.region!=null&&c.mesh.updateRegion()}if(this.linkedMeshes.length=0,i.events)for(let a in i.events){let o=i.events[a],c=new Px(a);c.intValue=B(o,"int",0),c.floatValue=B(o,"float",0),c.stringValue=B(o,"string",""),c.audioPath=B(o,"audio",null),c.audioPath&&(c.volume=B(o,"volume",1),c.balance=B(o,"balance",0)),n.events.push(c)}if(i.animations)for(let a in i.animations){let o=i.animations[a];this.readAnimation(o,a,n)}return n}readAttachment(e,t,n,i,s){let a=this.scale;switch(i=B(e,"name",i),B(e,"type","region")){case"region":{let o=B(e,"path",i),c=this.readSequence(B(e,"sequence",null)),l=this.attachmentLoader.newRegionAttachment(t,i,o,c);if(!l)return null;l.path=o,l.x=B(e,"x",0)*a,l.y=B(e,"y",0)*a,l.scaleX=B(e,"scaleX",1),l.scaleY=B(e,"scaleY",1),l.rotation=B(e,"rotation",0),l.width=e.width*a,l.height=e.height*a,l.sequence=c;let h=B(e,"color",null);return h&&l.color.setFromString(h),l.region!=null&&l.updateRegion(),l}case"boundingbox":{let o=this.attachmentLoader.newBoundingBoxAttachment(t,i);if(!o)return null;this.readVertices(e,o,e.vertexCount<<1);let c=B(e,"color",null);return c&&o.color.setFromString(c),o}case"mesh":case"linkedmesh":{let o=B(e,"path",i),c=this.readSequence(B(e,"sequence",null)),l=this.attachmentLoader.newMeshAttachment(t,i,o,c);if(!l)return null;l.path=o;let h=B(e,"color",null);h&&l.color.setFromString(h),l.width=B(e,"width",0)*a,l.height=B(e,"height",0)*a,l.sequence=c;let u=B(e,"parent",null);if(u)return this.linkedMeshes.push(new Gx(l,B(e,"skin",null),n,u,B(e,"timelines",!0))),l;let d=e.uvs;return this.readVertices(e,l,d.length),l.triangles=e.triangles,l.regionUVs=d,l.region!=null&&l.updateRegion(),l.edges=B(e,"edges",null),l.hullLength=B(e,"hull",0)*2,l}case"path":{let o=this.attachmentLoader.newPathAttachment(t,i);if(!o)return null;o.closed=B(e,"closed",!1),o.constantSpeed=B(e,"constantSpeed",!0);let c=e.vertexCount;this.readVertices(e,o,c<<1);let l=me.newArray(c/3,0);for(let u=0;u<e.lengths.length;u++)l[u]=e.lengths[u]*a;o.lengths=l;let h=B(e,"color",null);return h&&o.color.setFromString(h),o}case"point":{let o=this.attachmentLoader.newPointAttachment(t,i);if(!o)return null;o.x=B(e,"x",0)*a,o.y=B(e,"y",0)*a,o.rotation=B(e,"rotation",0);let c=B(e,"color",null);return c&&o.color.setFromString(c),o}case"clipping":{let o=this.attachmentLoader.newClippingAttachment(t,i);if(!o)return null;let c=B(e,"end",null);c&&(o.endSlot=s.findSlot(c));let l=e.vertexCount;this.readVertices(e,o,l<<1);let h=B(e,"color",null);return h&&o.color.setFromString(h),o}}return null}readSequence(e){if(e==null)return null;let t=new $o(B(e,"count",0));return t.start=B(e,"start",1),t.digits=B(e,"digits",0),t.setupIndex=B(e,"setup",0),t}readVertices(e,t,n){let i=this.scale;t.worldVerticesLength=n;let s=e.vertices;if(n==s.length){let c=me.toFloatArray(s);if(i!=1)for(let l=0,h=s.length;l<h;l++)c[l]*=i;t.vertices=c;return}let a=new Array,o=new Array;for(let c=0,l=s.length;c<l;){let h=s[c++];o.push(h);for(let u=c+h*4;c<u;c+=4)o.push(s[c]),a.push(s[c+1]*i),a.push(s[c+2]*i),a.push(s[c+3])}t.bones=o,t.vertices=me.toFloatArray(a)}readAnimation(e,t,n){let i=this.scale,s=new Array;if(e.slots)for(let o in e.slots){let c=e.slots[o],l=n.findSlot(o);if(!l)throw new Error("Slot not found: "+o);let h=l.index;for(let u in c){let d=c[u];if(!d)continue;let f=d.length;if(u=="attachment"){let g=new $s(f,h);for(let _=0;_<f;_++){let m=d[_];g.setFrame(_,B(m,"time",0),B(m,"name",null))}s.push(g)}else if(u=="rgba"){let g=new J_(f,f<<2,h),_=d[0],m=B(_,"time",0),p=et.fromString(_.color);for(let M=0,x=0;;M++){g.setFrame(M,m,p.r,p.g,p.b,p.a);let v=d[M+1];if(!v){g.shrink(x);break}let w=B(v,"time",0),S=et.fromString(v.color),b=_.curve;b&&(x=Ze(b,g,x,M,0,m,w,p.r,S.r,1),x=Ze(b,g,x,M,1,m,w,p.g,S.g,1),x=Ze(b,g,x,M,2,m,w,p.b,S.b,1),x=Ze(b,g,x,M,3,m,w,p.a,S.a,1)),m=w,p=S,_=v}s.push(g)}else if(u=="rgb"){let g=new Q_(f,f*3,h),_=d[0],m=B(_,"time",0),p=et.fromString(_.color);for(let M=0,x=0;;M++){g.setFrame(M,m,p.r,p.g,p.b);let v=d[M+1];if(!v){g.shrink(x);break}let w=B(v,"time",0),S=et.fromString(v.color),b=_.curve;b&&(x=Ze(b,g,x,M,0,m,w,p.r,S.r,1),x=Ze(b,g,x,M,1,m,w,p.g,S.g,1),x=Ze(b,g,x,M,2,m,w,p.b,S.b,1)),m=w,p=S,_=v}s.push(g)}else if(u=="alpha")s.push(pn(d,new ex(f,f,h),0,1));else if(u=="rgba2"){let g=new tx(f,f*7,h),_=d[0],m=B(_,"time",0),p=et.fromString(_.light),M=et.fromString(_.dark);for(let x=0,v=0;;x++){g.setFrame(x,m,p.r,p.g,p.b,p.a,M.r,M.g,M.b);let w=d[x+1];if(!w){g.shrink(v);break}let S=B(w,"time",0),b=et.fromString(w.light),C=et.fromString(w.dark),E=_.curve;E&&(v=Ze(E,g,v,x,0,m,S,p.r,b.r,1),v=Ze(E,g,v,x,1,m,S,p.g,b.g,1),v=Ze(E,g,v,x,2,m,S,p.b,b.b,1),v=Ze(E,g,v,x,3,m,S,p.a,b.a,1),v=Ze(E,g,v,x,4,m,S,M.r,C.r,1),v=Ze(E,g,v,x,5,m,S,M.g,C.g,1),v=Ze(E,g,v,x,6,m,S,M.b,C.b,1)),m=S,p=b,M=C,_=w}s.push(g)}else if(u=="rgb2"){let g=new nx(f,f*6,h),_=d[0],m=B(_,"time",0),p=et.fromString(_.light),M=et.fromString(_.dark);for(let x=0,v=0;;x++){g.setFrame(x,m,p.r,p.g,p.b,M.r,M.g,M.b);let w=d[x+1];if(!w){g.shrink(v);break}let S=B(w,"time",0),b=et.fromString(w.light),C=et.fromString(w.dark),E=_.curve;E&&(v=Ze(E,g,v,x,0,m,S,p.r,b.r,1),v=Ze(E,g,v,x,1,m,S,p.g,b.g,1),v=Ze(E,g,v,x,2,m,S,p.b,b.b,1),v=Ze(E,g,v,x,3,m,S,M.r,C.r,1),v=Ze(E,g,v,x,4,m,S,M.g,C.g,1),v=Ze(E,g,v,x,5,m,S,M.b,C.b,1)),m=S,p=b,M=C,_=w}s.push(g)}}}if(e.bones)for(let o in e.bones){let c=e.bones[o],l=n.findBone(o);if(!l)throw new Error("Bone not found: "+o);let h=l.index;for(let u in c){let d=c[u],f=d.length;if(f!=0){if(u==="rotate")s.push(pn(d,new jo(f,f,h),0,1));else if(u==="translate"){let g=new H_(f,f<<1,h);s.push(io(d,g,"x","y",0,i))}else if(u==="translatex"){let g=new G_(f,f,h);s.push(pn(d,g,0,i))}else if(u==="translatey"){let g=new W_(f,f,h);s.push(pn(d,g,0,i))}else if(u==="scale"){let g=new X_(f,f<<1,h);s.push(io(d,g,"x","y",1,1))}else if(u==="scalex"){let g=new Y_(f,f,h);s.push(pn(d,g,1,1))}else if(u==="scaley"){let g=new q_(f,f,h);s.push(pn(d,g,1,1))}else if(u==="shear"){let g=new $_(f,f<<1,h);s.push(io(d,g,"x","y",0,1))}else if(u==="shearx"){let g=new j_(f,f,h);s.push(pn(d,g,0,1))}else if(u==="sheary"){let g=new K_(f,f,h);s.push(pn(d,g,0,1))}else if(u==="inherit"){let g=new Z_(f,l.index);for(let _=0;_<d.length;_++){let m=d[_];g.setFrame(_,B(m,"time",0),me.enumValue(pt,B(m,"inherit","Normal")))}s.push(g)}}}}if(e.ik)for(let o in e.ik){let c=e.ik[o],l=c[0];if(!l)continue;let h=n.findIkConstraint(o);if(!h)throw new Error("IK Constraint not found: "+o);let u=n.ikConstraints.indexOf(h),d=new sx(c.length,c.length<<1,u),f=B(l,"time",0),g=B(l,"mix",1),_=B(l,"softness",0)*i;for(let m=0,p=0;;m++){d.setFrame(m,f,g,_,B(l,"bendPositive",!0)?1:-1,B(l,"compress",!1),B(l,"stretch",!1));let M=c[m+1];if(!M){d.shrink(p);break}let x=B(M,"time",0),v=B(M,"mix",1),w=B(M,"softness",0)*i,S=l.curve;S&&(p=Ze(S,d,p,m,0,f,x,g,v,1),p=Ze(S,d,p,m,1,f,x,_,w,i)),f=x,g=v,_=w,l=M}s.push(d)}if(e.transform)for(let o in e.transform){let c=e.transform[o],l=c[0];if(!l)continue;let h=n.findTransformConstraint(o);if(!h)throw new Error("Transform constraint not found: "+o);let u=n.transformConstraints.indexOf(h),d=new rx(c.length,c.length*6,u),f=B(l,"time",0),g=B(l,"mixRotate",1),_=B(l,"mixX",1),m=B(l,"mixY",_),p=B(l,"mixScaleX",1),M=B(l,"mixScaleY",p),x=B(l,"mixShearY",1);for(let v=0,w=0;;v++){d.setFrame(v,f,g,_,m,p,M,x);let S=c[v+1];if(!S){d.shrink(w);break}let b=B(S,"time",0),C=B(S,"mixRotate",1),E=B(S,"mixX",1),A=B(S,"mixY",E),P=B(S,"mixScaleX",1),k=B(S,"mixScaleY",P),F=B(S,"mixShearY",1),I=l.curve;I&&(w=Ze(I,d,w,v,0,f,b,g,C,1),w=Ze(I,d,w,v,1,f,b,_,E,1),w=Ze(I,d,w,v,2,f,b,m,A,1),w=Ze(I,d,w,v,3,f,b,p,P,1),w=Ze(I,d,w,v,4,f,b,M,k,1),w=Ze(I,d,w,v,5,f,b,x,F,1)),f=b,g=C,_=E,m=A,p=P,M=k,p=P,l=S}s.push(d)}if(e.path)for(let o in e.path){let c=e.path[o],l=n.findPathConstraint(o);if(!l)throw new Error("Path constraint not found: "+o);let h=n.pathConstraints.indexOf(l);for(let u in c){let d=c[u],f=d[0];if(!f)continue;let g=d.length;if(u==="position"){let _=new ax(g,g,h);s.push(pn(d,_,0,l.positionMode==pi.Fixed?i:1))}else if(u==="spacing"){let _=new ox(g,g,h);s.push(pn(d,_,0,l.spacingMode==zt.Length||l.spacingMode==zt.Fixed?i:1))}else if(u==="mix"){let _=new lx(g,g*3,h),m=B(f,"time",0),p=B(f,"mixRotate",1),M=B(f,"mixX",1),x=B(f,"mixY",M);for(let v=0,w=0;;v++){_.setFrame(v,m,p,M,x);let S=d[v+1];if(!S){_.shrink(w);break}let b=B(S,"time",0),C=B(S,"mixRotate",1),E=B(S,"mixX",1),A=B(S,"mixY",E),P=f.curve;P&&(w=Ze(P,_,w,v,0,m,b,p,C,1),w=Ze(P,_,w,v,1,m,b,M,E,1),w=Ze(P,_,w,v,2,m,b,x,A,1)),m=b,p=C,M=E,x=A,f=S}s.push(_)}}}if(e.physics)for(let o in e.physics){let c=e.physics[o],l=-1;if(o.length>0){let h=n.findPhysicsConstraint(o);if(!h)throw new Error("Physics constraint not found: "+o);l=n.physicsConstraints.indexOf(h)}for(let h in c){let u=c[h],d=u[0];if(!d)continue;let f=u.length;if(h=="reset"){const _=new Ko(f,l);for(let m=0;d!=null;d=u[m+1],m++)_.setFrame(m,B(d,"time",0));s.push(_);continue}let g;if(h=="inertia")g=new cx(f,f,l);else if(h=="strength")g=new hx(f,f,l);else if(h=="damping")g=new ux(f,f,l);else if(h=="mass")g=new dx(f,f,l);else if(h=="wind")g=new fx(f,f,l);else if(h=="gravity")g=new px(f,f,l);else if(h=="mix")g=new mx(f,f,l);else continue;s.push(pn(u,g,0,1))}}if(e.attachments)for(let o in e.attachments){let c=e.attachments[o],l=n.findSkin(o);if(!l)throw new Error("Skin not found: "+o);for(let h in c){let u=c[h],d=n.findSlot(h);if(!d)throw new Error("Slot not found: "+h);let f=d.index;for(let g in u){let _=u[g],m=l.getAttachment(f,g);for(let p in _){let M=_[p],x=M[0];if(x){if(p=="deform"){let v=m.bones,w=m.vertices,S=v?w.length/3*2:w.length,b=new ix(M.length,M.length,f,m),C=B(x,"time",0);for(let E=0,A=0;;E++){let P,k=B(x,"vertices",null);if(!k)P=v?me.newFloatArray(S):w;else{P=me.newFloatArray(S);let V=B(x,"offset",0);if(me.arrayCopy(k,0,P,V,k.length),i!=1)for(let Y=V,W=Y+k.length;Y<W;Y++)P[Y]*=i;if(!v)for(let Y=0;Y<S;Y++)P[Y]+=w[Y]}b.setFrame(E,C,P);let F=M[E+1];if(!F){b.shrink(A);break}let I=B(F,"time",0),N=x.curve;N&&(A=Ze(N,b,A,E,0,C,I,0,1,1)),C=I,x=F}s.push(b)}else if(p=="sequence"){let v=new Zo(M.length,f,m),w=0;for(let S=0;S<M.length;S++){let b=B(x,"delay",w),C=B(x,"time",0),E=Pt[B(x,"mode","hold")],A=B(x,"index",0);v.setFrame(S,C,E,A,b),w=b,x=M[S+1]}s.push(v)}}}}}}if(e.drawOrder){let o=new ms(e.drawOrder.length),c=n.slots.length,l=0;for(let h=0;h<e.drawOrder.length;h++,l++){let u=e.drawOrder[h],d=null,f=B(u,"offsets",null);if(f){d=me.newArray(c,-1);let g=me.newArray(c-f.length,0),_=0,m=0;for(let p=0;p<f.length;p++){let M=f[p],x=n.findSlot(M.slot);if(!x)throw new Error("Slot not found: "+x);let v=x.index;for(;_!=v;)g[m++]=_++;d[_+M.offset]=_++}for(;_<c;)g[m++]=_++;for(let p=c-1;p>=0;p--)d[p]==-1&&(d[p]=g[--m])}o.setFrame(l,B(u,"time",0),d)}s.push(o)}if(e.events){let o=new la(e.events.length),c=0;for(let l=0;l<e.events.length;l++,c++){let h=e.events[l],u=n.findEvent(h.name);if(!u)throw new Error("Event not found: "+h.name);let d=new Cx(me.toSinglePrecision(B(h,"time",0)),u);d.intValue=B(h,"int",u.intValue),d.floatValue=B(h,"float",u.floatValue),d.stringValue=B(h,"string",u.stringValue),d.data.audioPath&&(d.volume=B(h,"volume",1),d.balance=B(h,"balance",0)),o.setFrame(c,d)}s.push(o)}let a=0;for(let o=0,c=s.length;o<c;o++)a=Math.max(a,s[o].getDuration());n.animations.push(new pu(t,s,a))}}class Gx{constructor(e,t,n,i,s){y(this,"parent");y(this,"skin");y(this,"slotIndex");y(this,"mesh");y(this,"inheritTimeline");this.mesh=e,this.skin=t,this.slotIndex=n,this.parent=i,this.inheritTimeline=s}}function pn(r,e,t,n){let i=r[0],s=B(i,"time",0),a=B(i,"value",t)*n,o=0;for(let c=0;;c++){e.setFrame(c,s,a);let l=r[c+1];if(!l)return e.shrink(o),e;let h=B(l,"time",0),u=B(l,"value",t)*n;i.curve&&(o=Ze(i.curve,e,o,c,0,s,h,a,u,n)),s=h,a=u,i=l}}function io(r,e,t,n,i,s){let a=r[0],o=B(a,"time",0),c=B(a,t,i)*s,l=B(a,n,i)*s,h=0;for(let u=0;;u++){e.setFrame(u,o,c,l);let d=r[u+1];if(!d)return e.shrink(h),e;let f=B(d,"time",0),g=B(d,t,i)*s,_=B(d,n,i)*s,m=a.curve;m&&(h=Ze(m,e,h,u,0,o,f,c,g,s),h=Ze(m,e,h,u,1,o,f,l,_,s)),o=f,c=g,l=_,a=d}}function Ze(r,e,t,n,i,s,a,o,c,l){if(r=="stepped")return e.setStepped(n),t;let h=i<<2,u=r[h],d=r[h+1]*l,f=r[h+2],g=r[h+3]*l;return e.setBezier(t,n,i,s,o,u,d,f,g,a,c),t+1}function B(r,e,t){return r[e]!==void 0?r[e]:t}typeof Math.fround>"u"&&(Math.fround=function(r){return function(e){return r[0]=e,r[0]}}(new Float32Array(1)));class Pi extends Mx{constructor(t,n=!1){super(t);y(this,"texture");t instanceof ImageBitmap?this.texture=new h_(t):this.texture=new Ot(t),this.texture.premultiplyAlpha=!n,this.texture.flipY=!1,this.texture.needsUpdate=!0}setFilters(t,n){this.texture.minFilter=Pi.toThreeJsTextureFilter(t),this.texture.magFilter=Pi.toThreeJsTextureFilter(n)}setWraps(t,n){this.texture.wrapS=Pi.toThreeJsTextureWrap(t),this.texture.wrapT=Pi.toThreeJsTextureWrap(n)}dispose(){this.texture.dispose()}static toThreeJsTextureFilter(t){if(t===on.Linear)return Yt;if(t===on.MipMap)return pd;if(t===on.MipMapLinearNearest)return fd;if(t===on.MipMapNearestLinear)return dd;if(t===on.MipMapNearestNearest)return ud;if(t===on.Nearest)return Ft;throw new Error("Unknown texture filter: "+t)}static toThreeJsTextureWrap(t){if(t===Yn.ClampToEdge)return Hn;if(t===Yn.MirroredRepeat)return er;if(t===Yn.Repeat)return Ii;throw new Error("Unknown texture wrap: "+t)}static toThreeJsBlending(t){if(t===ui.Normal)return{blending:Xn};if(t===ui.Additive)return{blending:co};if(t===ui.Multiply)return{blending:ho,blendSrc:Mh,blendDst:Qs,blendSrcAlpha:Yr,blendDstAlpha:Qs};if(t===ui.Screen)return{blending:ho,blendSrc:Yr,blendDst:uo,blendSrcAlpha:Yr,blendDstAlpha:uo};throw new Error("Unknown blendMode: "+t)}}class Wx extends Rx{constructor(e="",t=new gu,n=!1){super(i=>new Pi(i,n),e,t)}}class oh extends jn{constructor(e){let i={uniforms:{map:{value:null}},vertexShader:`
			attribute vec4 color;
			varying vec2 vUv;
			varying vec4 vColor;
			void main() {
				vUv = uv;
				vColor = color;
				gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
			}
		`,fragmentShader:`
			uniform sampler2D map;
			#ifdef USE_SPINE_ALPHATEST
			uniform float alphaTest;
			#endif
			varying vec2 vUv;
			varying vec4 vColor;
			void main(void) {
				gl_FragColor = texture2D(map, vUv)*vColor;
				#ifdef USE_SPINE_ALPHATEST
				if (gl_FragColor.a < alphaTest) discard;
				#endif
			}
		`,side:ln,transparent:!0,depthWrite:!0,alphaTest:0};e(i),i.alphaTest&&i.alphaTest>0&&(i.defines={USE_SPINE_ALPHATEST:1},i.uniforms||(i.uniforms={}),i.uniforms.alphaTest={value:i.alphaTest}),super(i),this.premultipliedAlpha=!0}}const Ti=class Ti extends ut{constructor(t,n=i=>{}){super();y(this,"materialCustomerizer");y(this,"tempPos",new rr);y(this,"tempUv",new rr);y(this,"tempLight",new et);y(this,"tempDark",new et);y(this,"skeleton");y(this,"state");y(this,"zOffset",.1);y(this,"batches",new Array);y(this,"nextBatchIndex",0);y(this,"clipper",new ca);y(this,"vertices",me.newFloatArray(1024));y(this,"tempColor",new et);this.materialCustomerizer=n,this.skeleton=new el(t);let i=new yx(t);this.state=new Jo(i)}update(t){let n=this.state,i=this.skeleton;n.update(t),n.apply(i),i.update(t),i.updateWorldTransform(ci.update),this.updateGeometry()}dispose(){for(var t=0;t<this.batches.length;t++)this.batches[t].dispose()}clearBatches(){for(var t=0;t<this.batches.length;t++)this.batches[t].clear(),this.batches[t].visible=!1;this.nextBatchIndex=0}nextBatch(){if(this.batches.length==this.nextBatchIndex){let n=new nl(10920,this.materialCustomerizer);this.add(n),this.batches.push(n)}let t=this.batches[this.nextBatchIndex++];return t.visible=!0,t}updateGeometry(){this.clearBatches(),this.tempPos,this.tempUv;let t=this.tempLight;this.tempDark;let n=this.clipper,i=this.vertices,s=null,a=null,o=this.skeleton.drawOrder,c=this.nextBatch();c.begin();let l=0,h=this.zOffset;for(let u=0,d=o.length;u<d;u++){let f=n.isClipping()?2:Ti.VERTEX_SIZE,g=o[u];if(!g.bone.active){n.clipEndWithSlot(g);continue}let _=g.getAttachment(),m,p,M=0;if(_ instanceof ar){let x=_;m=x.color,i=this.vertices,M=f*4,x.computeWorldVertices(g,i,0,f),s=Ti.QUAD_TRIANGLES,a=x.uvs,p=x.region.texture}else if(_ instanceof Ui){let x=_;m=x.color,i=this.vertices,M=(x.worldVerticesLength>>1)*f,M>i.length&&(i=this.vertices=me.newFloatArray(M)),x.computeWorldVertices(g,0,x.worldVerticesLength,i,0,f),s=x.triangles,a=x.uvs,p=x.region.texture}else if(_ instanceof dr){let x=_;n.clipStart(g,x);continue}else{n.clipEndWithSlot(g);continue}if(p!=null){let v=g.bone.skeleton.color,w=g.color,S=v.a*w.a*m.a,b=this.tempColor;b.set(v.r*w.r*m.r*S,v.g*w.g*m.g*S,v.b*w.b*m.b*S,S);let C,E,A,P;if(n.isClipping()){n.clipTriangles(i,s,s.length,a,b,t,!1);let N=n.clippedVertices,V=n.clippedTriangles;C=N,E=N.length,A=V,P=V.length}else{let N=i;for(let V=2,Y=0,W=M;V<W;V+=f,Y+=2)N[V]=b.r,N[V+1]=b.g,N[V+2]=b.b,N[V+3]=b.a,N[V+4]=a[Y],N[V+5]=a[Y+1];C=i,E=M,A=s,P=s.length}if(E==0||P==0){n.clipEndWithSlot(g);continue}c.canBatch(E/Ti.VERTEX_SIZE,P)||(c.end(),c=this.nextBatch(),c.begin());const k=g.data.blendMode,F=p.texture,I=c.findMaterialGroup(F,k);c.addMaterialGroup(P,I),c.batch(C,E,A,P,l),l+=h}n.clipEndWithSlot(g)}n.clipEnd(),c.end()}};y(Ti,"QUAD_TRIANGLES",[0,1,2,2,3,0]),y(Ti,"VERTEX_SIZE",8);let tl=Ti;const oi=class oi extends It{constructor(t=10920,n=i=>{}){super();y(this,"materialCustomizer");y(this,"vertexBuffer");y(this,"vertices");y(this,"verticesLength",0);y(this,"indices");y(this,"indicesLength",0);y(this,"materialGroups",[]);if(this.materialCustomizer=n,t>10920)throw new Error("Can't have more than 10920 triangles per batch: "+t);let i=this.vertices=new Float32Array(t*oi.VERTEX_SIZE),s=this.indices=new Uint16Array(t*3),a=new tn,o=this.vertexBuffer=new tu(i,oi.VERTEX_SIZE);o.usage=WebGLRenderingContext.DYNAMIC_DRAW,a.setAttribute("position",new ps(o,3,0,!1)),a.setAttribute("color",new ps(o,4,3,!1)),a.setAttribute("uv",new ps(o,2,7,!1)),a.setIndex(new Tt(s,1)),a.getIndex().usage=WebGLRenderingContext.DYNAMIC_DRAW,a.drawRange.start=0,a.drawRange.count=0,this.geometry=a,this.material=[new oh(n)]}dispose(){if(this.geometry.dispose(),this.material instanceof en)this.material.dispose();else if(this.material)for(let t=0;t<this.material.length;t++){let n=this.material[t];n instanceof en&&n.dispose()}}clear(){let t=this.geometry;if(t.drawRange.start=0,t.drawRange.count=0,t.clearGroups(),this.materialGroups=[],this.material instanceof en){const n=this.material;n.uniforms.map.value=null,n.blending=Xn}else if(Array.isArray(this.material))for(let n=0;n<this.material.length;n++){const i=this.material[n];i.uniforms.map.value=null,i.blending=Xn}return this}begin(){this.verticesLength=0,this.indicesLength=0}canBatch(t,n){return!(this.indicesLength+n>=this.indices.byteLength/2||this.verticesLength/oi.VERTEX_SIZE+t>=this.vertices.byteLength/4/oi.VERTEX_SIZE)}batch(t,n,i,s,a=0){let o=this.verticesLength/oi.VERTEX_SIZE,c=this.vertices,l=this.verticesLength,h=0;for(;h<n;)c[l++]=t[h++],c[l++]=t[h++],c[l++]=a,c[l++]=t[h++],c[l++]=t[h++],c[l++]=t[h++],c[l++]=t[h++],c[l++]=t[h++],c[l++]=t[h++];this.verticesLength=l;let u=this.indices;for(l=this.indicesLength,h=0;h<s;l++,h++)u[l]=i[h]+o;this.indicesLength+=s}end(){this.vertexBuffer.needsUpdate=this.verticesLength>0,this.vertexBuffer.updateRange.offset=0,this.vertexBuffer.updateRange.count=this.verticesLength;let t=this.geometry;this.closeMaterialGroups();let n=t.getIndex();if(!n)throw new Error("BufferAttribute must not be null.");n.needsUpdate=this.indicesLength>0,n.updateRange.offset=0,n.updateRange.count=this.indicesLength,t.drawRange.start=0,t.drawRange.count=this.indicesLength}addMaterialGroup(t,n){const i=this.materialGroups[this.materialGroups.length-1];i===void 0||i[2]!==n?this.materialGroups.push([this.indicesLength,t,n]):i[1]+=t}closeMaterialGroups(){const t=this.geometry;for(let n=0;n<this.materialGroups.length;n++){const[i,s,a]=this.materialGroups[n];t.addGroup(i,s,a)}}findMaterialGroup(t,n){const i=Pi.toThreeJsBlending(n);let s=-1;if(Array.isArray(this.material)){for(let o=0;o<this.material.length;o++){const c=this.material[o];if(!c.uniforms.map.value)return lh(c,t,i),o;if(c.uniforms.map.value===t&&i.blending===c.blending&&(i.blendSrc===void 0||i.blendSrc===c.blendSrc)&&(i.blendDst===void 0||i.blendDst===c.blendDst)&&(i.blendSrcAlpha===void 0||i.blendSrcAlpha===c.blendSrcAlpha)&&(i.blendDstAlpha===void 0||i.blendDstAlpha===c.blendDstAlpha))return o}const a=new oh(this.materialCustomizer);lh(a,t,i),this.material.push(a),s=this.material.length-1}else throw new Error("MeshBatcher.material needs to be an array for geometry groups to work");return s}};y(oi,"VERTEX_SIZE",9);let nl=oi;function lh(r,e,t){r.uniforms.map.value=e,Object.assign(r,t),r.needsUpdate=!0}function ch(r,e){if(e===gd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ho||e===Nh){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ho)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Xx extends Ds{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Kx(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new lv(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new jx(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new hv(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Zs.extractUrlBase(e);a=Zs.resolveURL(l,this.path)}else a=Zs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new lu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===_u){try{a[qe.KHR_BINARY_GLTF]=new uv(e)}catch(u){i&&i(u);return}s=JSON.parse(a[qe.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ev(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:a[u]=new $x;break;case qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new dv(s,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:a[u]=new fv;break;case qe.KHR_MESH_QUANTIZATION:a[u]=new pv;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Yx(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class qx{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ve(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Dt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new uu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new w_(h),l.distance=u;break;case"spot":l=new hu(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Vn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class $x{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ri}extendParams(e,t,n){const i=[];e.color=new Ve(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Dt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Vt))}return Promise.all(i)}}class jx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Kx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(o,o)}return Promise.all(s)}}class Zx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Jx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Qx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Dt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Vt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class ev{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class tv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(o[0],o[1],o[2],Dt),Promise.all(s)}}class nv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class iv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(o[0],o[1],o[2],Dt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Vt)),Promise.all(s)}}class sv{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class rv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class av{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class ov{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lv{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class cv{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class hv{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==an.TRIANGLES&&l.mode!==an.TRIANGLE_STRIP&&l.mode!==an.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Xe,m=new O,p=new En,M=new O(1,1,1),x=new o_(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&M.fromBufferAttribute(c.SCALE,v),x.setMatrixAt(v,_.compose(m,p,M));for(const v in c)if(v==="_COLOR_0"){const w=c[v];x.instanceColor=new Xo(w.array,w.itemSize,w.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);ut.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const _u="glTF",Xs=12,hh={JSON:1313821514,BIN:5130562};class uv{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Xs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_u)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Xs,s=new DataView(e,Xs);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===hh.JSON){const l=new Uint8Array(e,Xs+a,o);this.content=n.decode(l)}else if(c===hh.BIN){const l=Xs+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=il[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=il[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=gs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},o,l,Dt,d)})})}}class fv{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class pv{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class xu extends ur{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,M=1-m,x=p-d+u;for(let v=0;v!==o;v++){const w=a[_+v+o],S=a[_+v+c]*h,b=a[g+v+o],C=a[g+v]*h;s[v]=M*w+x*S+m*b+p*C}return s}}const mv=new En;class gv extends xu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return mv.fromArray(s).normalize().toArray(s),s}}const an={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uh={9728:Ft,9729:Yt,9984:Eh,9985:qr,9986:Ys,9987:Gn},dh={33071:Hn,33648:er,10497:Ii},so={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},il={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_v={CUBICSPLINE:void 0,LINEAR:ir,STEP:nr},ro={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ps({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),r.DefaultMaterial}function bi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vv(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function yv(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Mv(r){let e;const t=r.extensions&&r.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ao(t.attributes):e=r.indices+":"+ao(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ao(r.targets[n]);return e}function ao(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function sl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Sv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const bv=new Xe;class Ev{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Yx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new cu(this.options.manager):this.textureLoader=new C_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return bi(s,o,i),Vn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Zs.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=so[i.type],o=gs[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Tt(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=so[i.type],l=gs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(M);x||(_=new l(o,p*f,i.count*f/h),x=new tu(_,f/h),t.cache.add(M,x)),m=new ps(x,c,d%f/h,g)}else o===null?_=new l(i.count*c):_=new l(o,d,i.count*c),m=new Tt(_,c,g);if(i.sparse!==void 0){const p=so.SCALAR,M=gs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,w=new M(a[1],x,i.sparse.count*p),S=new l(a[2],v,i.sparse.count*c);o!==null&&(m=new Tt(m.array.slice(),m.itemSize,m.normalized));for(let b=0,C=w.length;b<C;b++){const E=w[b];if(m.setX(E,S[b*c]),c>=2&&m.setY(E,S[b*c+1]),c>=3&&m.setZ(E,S[b*c+2]),c>=4&&m.setW(E,S[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=uh[d.magFilter]||Yt,h.minFilter=uh[d.minFilter]||Gn,h.wrapS=dh[d.wrapS]||Ii,h.wrapT=dh[d.wrapT]||Ii,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ot(_);m.needsUpdate=!0,d(m)}),t.load(Zs.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Vn(u,a),u.userData.mimeType=a.mimeType||Sv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[qe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ru,en.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new _a,en.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ps}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[qe.KHR_MATERIALS_UNLIT]){const u=i[qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Ve(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Dt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Vt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=ln);const h=s.alphaMode||ro.OPAQUE;if(h===ro.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ro.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Ri&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Be(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Ri&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Ri){const u=s.emissiveFactor;o.emissive=new Ve().setRGB(u[0],u[1],u[2],Dt)}return s.emissiveTexture!==void 0&&a!==Ri&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Vt)),Promise.all(l).then(function(){const u=new a(o);return s.name&&(u.name=s.name),Vn(u,s),t.associations.set(u,{materials:e}),s.extensions&&bi(i,u,s),u})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return fh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=Mv(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=fh(new tn,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?xv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const M=l[f];if(m.mode===an.TRIANGLES||m.mode===an.TRIANGLE_STRIP||m.mode===an.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new i_(_,M):new It(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===an.TRIANGLE_STRIP?p.geometry=ch(p.geometry,Nh):m.mode===an.TRIANGLE_FAN&&(p.geometry=ch(p.geometry,Ho));else if(m.mode===an.LINES)p=new yl(_,M);else if(m.mode===an.LINE_STRIP)p=new vl(_,M);else if(m.mode===an.LINE_LOOP)p=new l_(_,M);else if(m.mode===an.POINTS)p=new c_(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&yv(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Vn(p,s),m.extensions&&bi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&bi(i,u[0],s),u[0];const d=new Ci;s.extensions&&bi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Oh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new _l(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new Xe;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new r_(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let M=0,x=d.length;M<x;M++){const v=d[M],w=f[M],S=g[M],b=_[M],C=m[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const E=n._createAnimationTracks(v,w,S,b,C);if(E)for(let A=0;A<E.length;A++)p.push(E[A])}return new __(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,bv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new nu:l.length>1?h=new Ci:l.length===1?h=l[0]:h=new ut,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Vn(h,s),s.extensions&&bi(n,h,s),s.matrix!==void 0){const u=new Xe;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Ci;n.name&&(s.name=i.createUniqueName(n.name)),Vn(s,n),n.extensions&&bi(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof en||d instanceof Ot)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];si[s.path]===si.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(si[s.path]){case si.weights:l=Es;break;case si.rotation:l=As;break;case si.position:case si.scale:l=ws;break;default:switch(n.itemSize){case 1:l=Es;break;case 2:case 3:default:l=ws;break}break}const h=i.interpolation!==void 0?_v[i.interpolation]:ir,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+si[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=sl(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof As?gv:xu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Av(r,e,t){const n=e.attributes,i=new Tn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),o.normalized){const h=sl(gs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new O,c=new O;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=sl(gs[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Rn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function fh(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=il[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return tt.workingColorSpace!==Dt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Vn(r,e),Av(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?vv(r,e.targets,t):r})}const ph={type:"change"},oo={type:"start"},mh={type:"end"},Xr=new cr,gh=new ri,wv=Math.cos(70*Oh.DEG2RAD);class Tv extends Fi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vi.ROTATE,MIDDLE:Vi.DOLLY,RIGHT:Vi.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",_e),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ph),n.update(),s=i.NONE},this.update=function(){const T=new O,X=new En().setFromUnitVectors(e.up,new O(0,1,0)),q=X.clone().invert(),Z=new O,re=new En,Te=new O,Fe=2*Math.PI;return function(Mt=null){const Qe=n.object.position;T.copy(Qe).sub(n.target),T.applyQuaternion(X),o.setFromVector3(T),n.autoRotate&&s===i.NONE&&k(A(Mt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let St=n.minAzimuthAngle,xt=n.maxAzimuthAngle;isFinite(St)&&isFinite(xt)&&(St<-Math.PI?St+=Fe:St>Math.PI&&(St-=Fe),xt<-Math.PI?xt+=Fe:xt>Math.PI&&(xt-=Fe),St<=xt?o.theta=Math.max(St,Math.min(xt,o.theta)):o.theta=o.theta>(St+xt)/2?Math.max(St,o.theta):Math.min(xt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Kn=!1;if(n.zoomToCursor&&S||n.object.isOrthographicCamera)o.radius=ie(o.radius);else{const Rt=o.radius;o.radius=ie(o.radius*l),Kn=Rt!=o.radius}if(T.setFromSpherical(o),T.applyQuaternion(q),Qe.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&S){let Rt=null;if(n.object.isPerspectiveCamera){const In=T.length();Rt=ie(In*l);const gi=In-Rt;n.object.position.addScaledVector(v,gi),n.object.updateMatrixWorld(),Kn=!!gi}else if(n.object.isOrthographicCamera){const In=new O(w.x,w.y,0);In.unproject(n.object);const gi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Kn=gi!==n.object.zoom;const Us=new O(w.x,w.y,0);Us.unproject(n.object),n.object.position.sub(Us).add(In),n.object.updateMatrixWorld(),Rt=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Rt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Rt).add(n.object.position):(Xr.origin.copy(n.object.position),Xr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Xr.direction))<wv?e.lookAt(n.target):(gh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Xr.intersectPlane(gh,n.target))))}else if(n.object.isOrthographicCamera){const Rt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Rt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Kn=!0)}return l=1,S=!1,Kn||Z.distanceToSquared(n.object.position)>a||8*(1-re.dot(n.object.quaternion))>a||Te.distanceToSquared(n.target)>a?(n.dispatchEvent(ph),Z.copy(n.object.position),re.copy(n.object.quaternion),Te.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",xe),n.domElement.removeEventListener("pointerdown",Ie),n.domElement.removeEventListener("pointercancel",R),n.domElement.removeEventListener("wheel",se),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",R),n.domElement.getRootNode().removeEventListener("keydown",Ce,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_e),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Qc,c=new Qc;let l=1;const h=new O,u=new Be,d=new Be,f=new Be,g=new Be,_=new Be,m=new Be,p=new Be,M=new Be,x=new Be,v=new O,w=new Be;let S=!1;const b=[],C={};let E=!1;function A(T){return T!==null?2*Math.PI/60*n.autoRotateSpeed*T:2*Math.PI/60/60*n.autoRotateSpeed}function P(T){const X=Math.abs(T*.01);return Math.pow(.95,n.zoomSpeed*X)}function k(T){c.theta-=T}function F(T){c.phi-=T}const I=function(){const T=new O;return function(q,Z){T.setFromMatrixColumn(Z,0),T.multiplyScalar(-q),h.add(T)}}(),N=function(){const T=new O;return function(q,Z){n.screenSpacePanning===!0?T.setFromMatrixColumn(Z,1):(T.setFromMatrixColumn(Z,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(q),h.add(T)}}(),V=function(){const T=new O;return function(q,Z){const re=n.domElement;if(n.object.isPerspectiveCamera){const Te=n.object.position;T.copy(Te).sub(n.target);let Fe=T.length();Fe*=Math.tan(n.object.fov/2*Math.PI/180),I(2*q*Fe/re.clientHeight,n.object.matrix),N(2*Z*Fe/re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(q*(n.object.right-n.object.left)/n.object.zoom/re.clientWidth,n.object.matrix),N(Z*(n.object.top-n.object.bottom)/n.object.zoom/re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(T,X){if(!n.zoomToCursor)return;S=!0;const q=n.domElement.getBoundingClientRect(),Z=T-q.left,re=X-q.top,Te=q.width,Fe=q.height;w.x=Z/Te*2-1,w.y=-(re/Fe)*2+1,v.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function ie(T){return Math.max(n.minDistance,Math.min(n.maxDistance,T))}function ae(T){u.set(T.clientX,T.clientY)}function ve(T){Q(T.clientX,T.clientX),p.set(T.clientX,T.clientY)}function oe(T){g.set(T.clientX,T.clientY)}function G(T){d.set(T.clientX,T.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const X=n.domElement;k(2*Math.PI*f.x/X.clientHeight),F(2*Math.PI*f.y/X.clientHeight),u.copy(d),n.update()}function J(T){M.set(T.clientX,T.clientY),x.subVectors(M,p),x.y>0?Y(P(x.y)):x.y<0&&W(P(x.y)),p.copy(M),n.update()}function de(T){_.set(T.clientX,T.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),V(m.x,m.y),g.copy(_),n.update()}function ue(T){Q(T.clientX,T.clientY),T.deltaY<0?W(P(T.deltaY)):T.deltaY>0&&Y(P(T.deltaY)),n.update()}function ye(T){let X=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),X=!0;break}X&&(T.preventDefault(),n.update())}function Ae(T){if(b.length===1)u.set(T.pageX,T.pageY);else{const X=ke(T),q=.5*(T.pageX+X.x),Z=.5*(T.pageY+X.y);u.set(q,Z)}}function we(T){if(b.length===1)g.set(T.pageX,T.pageY);else{const X=ke(T),q=.5*(T.pageX+X.x),Z=.5*(T.pageY+X.y);g.set(q,Z)}}function Je(T){const X=ke(T),q=T.pageX-X.x,Z=T.pageY-X.y,re=Math.sqrt(q*q+Z*Z);p.set(0,re)}function U(T){n.enableZoom&&Je(T),n.enablePan&&we(T)}function lt(T){n.enableZoom&&Je(T),n.enableRotate&&Ae(T)}function Ye(T){if(b.length==1)d.set(T.pageX,T.pageY);else{const q=ke(T),Z=.5*(T.pageX+q.x),re=.5*(T.pageY+q.y);d.set(Z,re)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const X=n.domElement;k(2*Math.PI*f.x/X.clientHeight),F(2*Math.PI*f.y/X.clientHeight),u.copy(d)}function je(T){if(b.length===1)_.set(T.pageX,T.pageY);else{const X=ke(T),q=.5*(T.pageX+X.x),Z=.5*(T.pageY+X.y);_.set(q,Z)}m.subVectors(_,g).multiplyScalar(n.panSpeed),V(m.x,m.y),g.copy(_)}function Ee(T){const X=ke(T),q=T.pageX-X.x,Z=T.pageY-X.y,re=Math.sqrt(q*q+Z*Z);M.set(0,re),x.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),Y(x.y),p.copy(M);const Te=(T.pageX+X.x)*.5,Fe=(T.pageY+X.y)*.5;Q(Te,Fe)}function ct(T){n.enableZoom&&Ee(T),n.enablePan&&je(T)}function Pe(T){n.enableZoom&&Ee(T),n.enableRotate&&Ye(T)}function Ie(T){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",D),n.domElement.addEventListener("pointerup",R)),!Me(T)&&($e(T),T.pointerType==="touch"?ze(T):$(T)))}function D(T){n.enabled!==!1&&(T.pointerType==="touch"?ce(T):ne(T))}function R(T){switch(De(T),b.length){case 0:n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",R),n.dispatchEvent(mh),s=i.NONE;break;case 1:const X=b[0],q=C[X];ze({pointerId:X,pageX:q.x,pageY:q.y});break}}function $(T){let X;switch(T.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case Vi.DOLLY:if(n.enableZoom===!1)return;ve(T),s=i.DOLLY;break;case Vi.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;oe(T),s=i.PAN}else{if(n.enableRotate===!1)return;ae(T),s=i.ROTATE}break;case Vi.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;ae(T),s=i.ROTATE}else{if(n.enablePan===!1)return;oe(T),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(oo)}function ne(T){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;G(T);break;case i.DOLLY:if(n.enableZoom===!1)return;J(T);break;case i.PAN:if(n.enablePan===!1)return;de(T);break}}function se(T){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(T.preventDefault(),n.dispatchEvent(oo),ue(te(T)),n.dispatchEvent(mh))}function te(T){const X=T.deltaMode,q={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch(X){case 1:q.deltaY*=16;break;case 2:q.deltaY*=100;break}return T.ctrlKey&&!E&&(q.deltaY*=10),q}function Ce(T){T.key==="Control"&&(E=!0,n.domElement.getRootNode().addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(T){T.key==="Control"&&(E=!1,n.domElement.getRootNode().removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function _e(T){n.enabled===!1||n.enablePan===!1||ye(T)}function ze(T){switch(Ue(T),b.length){case 1:switch(n.touches.ONE){case zi.ROTATE:if(n.enableRotate===!1)return;Ae(T),s=i.TOUCH_ROTATE;break;case zi.PAN:if(n.enablePan===!1)return;we(T),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case zi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(T),s=i.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;lt(T),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(oo)}function ce(T){switch(Ue(T),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ye(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;je(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ct(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(T),n.update();break;default:s=i.NONE}}function xe(T){n.enabled!==!1&&T.preventDefault()}function $e(T){b.push(T.pointerId)}function De(T){delete C[T.pointerId];for(let X=0;X<b.length;X++)if(b[X]==T.pointerId){b.splice(X,1);return}}function Me(T){for(let X=0;X<b.length;X++)if(b[X]==T.pointerId)return!0;return!1}function Ue(T){let X=C[T.pointerId];X===void 0&&(X=new Be,C[T.pointerId]=X),X.set(T.pageX,T.pageY)}function ke(T){const X=T.pointerId===b[0]?b[1]:b[0];return C[X]}n.domElement.addEventListener("contextmenu",xe),n.domElement.addEventListener("pointerdown",Ie),n.domElement.addEventListener("pointercancel",R),n.domElement.addEventListener("wheel",se,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ce,{passive:!0,capture:!0}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class bn{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),bn.nextNameID=bn.nextNameID||0,this.$name.id=`lil-gui-name-${++bn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Rv extends bn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function rl(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Cv={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:rl,toHexString:rl},or={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},Pv={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const n=or.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return or.toHexString(i)}},Lv={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=or.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return or.toHexString(i)}},Iv=[Cv,or,Pv,Lv];function Dv(r){return Iv.find(e=>e.match(r))}class Nv extends bn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Dv(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=rl(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class lo extends bn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Uv extends bn{constructor(e,t,n,i,s,a){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))},n=M=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+M),this.$input.value=this.getValue())},i=M=>{M.key==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M)*-1))},s=M=>{this._inputFocused&&(M.preventDefault(),n(this._step*this._normalizeMouseWheel(M)))};let a=!1,o,c,l,h,u;const d=5,f=M=>{o=M.clientX,c=l=M.clientY,a=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=M=>{if(a){const x=M.clientX-o,v=M.clientY-c;Math.abs(v)>d?(M.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&_()}if(!a){const x=M.clientY-l;u-=x*this._step*this._arrowKeyMultiplier(M),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}l=M.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,M,x,v,w)=>(p-M)/(x-M)*(w-v)+v,t=p=>{const M=this.$slider.getBoundingClientRect();let x=e(p,M.left,M.right,this._min,this._max);this._snapClampSetValue(x)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let a=!1,o,c;const l=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),a=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(o=p.touches[0].clientX,c=p.touches[0].clientY,a=!0):l(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=p=>{if(a){const M=p.touches[0].clientX-o,x=p.touches[0].clientY-c;Math.abs(M)>Math.abs(x)?l(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const x=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Fv extends bn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class Ov extends bn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Bv=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function kv(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let _h=!1;class Tl{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!_h&&o&&(kv(Bv),_h=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=a}add(e,t,n,i,s){if(Object(n)===n)return new Fv(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new Uv(this,e,t,n,i,s);case"boolean":return new Rv(this,e,t);case"string":return new Ov(this,e,t);case"function":return new lo(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new Nv(this,e,t,n)}addFolder(e){const t=new Tl({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof lo||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof lo)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Vv=({throttlingMsTime:r=.5*1e3,onResize:e=()=>{}})=>{let t=0;window.addEventListener("resize",()=>{t>0&&clearTimeout(t),t=window.setTimeout(e,r)})},zv="/pub_template_web_threejs-gltf-spine",Rl=`${zv}/assets`,vu=window.innerWidth||800,yu=window.innerHeight||600,Hv=window.devicePixelRatio||1,mi=new e_({antialias:!0,alpha:!0});mi.setPixelRatio(Hv);mi.setSize(vu,yu);mi.shadowMap.enabled=!0;const Mu=new Tl,wn=new t_,Rs=new Ht(45,vu/yu,1,1e4);Rs.position.set(10,10,10);Rs.lookAt(new O(0,0,0));const Gv=new hr(16,16),Wv=new Ps({color:2176371}),ya=new It(Gv,Wv);ya.rotation.x=-Math.PI/2;ya.material.side=ln;ya.receiveShadow=!0;wn.add(ya);const Su=new uu(16777215);Su.position.set(1,1,1);wn.add(Su);const bu=new R_(16777215,1);wn.add(bu);const Ns=new hu(16777215,24,12,Math.PI/4,10,.5);Ns.position.set(0,8,0);Ns.castShadow=!0;Ns.shadow.mapSize.set(4096,4096);wn.add(Ns);const Cl=new k_(Ns);wn.add(Cl);const Pl=Mu.addFolder("SpotLight");Pl.addColor({color:16777215},"color").onChange(r=>{Ns.color=new Ve(r)});Pl.add({showLight:!0},"showLight").onChange(r=>{bu.visible=r});Pl.add({showHelper:!0},"showHelper").onChange(r=>{Cl.visible=r});const Xv=new cu,Yv=Xv.load(`${Rl}/models/texture.jpg`),qv=new Oi(3,3,3),$v=new Ps({map:Yv,metalness:.75,roughness:0}),_s=new It(qv,$v);_s.position.set(0,1.5,0);_s.castShadow=!0;wn.add(_s);let as;const jv=new Xx;jv.load(`${Rl}/models/boombox.glb`,r=>{as=r,as.scene.traverse(t=>{t.castShadow=!0}),as.scene.scale.set(100,100,100),as.scene.position.set(-4,1,0),wn.add(as.scene);const e=new V_(as.scene,16776960);wn.add(e)});let xh=!1,zn;const Kv=new Oi(5,5,.1),Zv=new Ps({wireframe:!0}),Ll=new It(Kv,Zv);Ll.position.set(5.5,2.5,0);wn.add(Ll);const Js=new Wx(`${Rl}/spines/`);Js.loadText("model.json");Js.loadTextureAtlas("model.atlas");const Jv=Mu.addFolder("SpineFolder");Jv.add({wind:0},"wind",-20,20,.1).onChange(r=>{zn&&zn.skeleton.physicsConstraints.map(e=>{e.wind=r})});const fr=new Tv(Rs,mi.domElement);fr.maxPolarAngle=Math.PI;fr.minDistance=.1;fr.maxDistance=1e4;fr.autoRotateSpeed=1;const Qv=document.querySelector("#app");Qv.appendChild(mi.domElement);Vv({onResize:()=>{const r=window.innerWidth,e=window.innerHeight;mi.setPixelRatio(window.devicePixelRatio||1),mi.setSize(r,e),Rs.aspect=r/e,Rs.updateProjectionMatrix()}});let vh=Date.now()/1e3;const Eu=()=>{requestAnimationFrame(Eu);const r=Date.now()/1e3,e=r-vh;if(vh=r,Js.isLoadingComplete()){if(!xh){const t=Js.require("model.atlas"),n=new wx(t),s=new Hx(n).readSkeletonData(Js.require("model.json"));zn=new tl(s,l=>{l.depthWrite=!1,l.depthTest=!0,l.alphaTest=.001});const a=s.width,o=s.height,c=a/o;zn.scale.set(5/a*c,5/o,0),zn.position.set(0,5*-.5,0),zn.state.setAnimation(0,"animation",!0),Ll.add(zn)}xh=!0}_s.rotation.x+=.01,_s.rotation.y+=.01,_s.rotation.z+=.01,zn&&zn.update(e),Cl.update(),fr.update(),mi.render(wn,Rs)};Eu();
