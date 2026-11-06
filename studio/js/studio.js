var _h=0,Hl=1,xh=2;var Fr=1,yh=2,Us=3,Di=0,an=1,Rn=2,si=0,Fs=1,Wl=2,Xl=3,ql=4,vh=5;var $i=100,Mh=101,Sh=102,bh=103,Th=104,Eh=200,wh=201,Ah=202,Ch=203,Yl=204,Zl=205,Rh=206,Ph=207,Ih=208,Lh=209,Nh=210,Dh=211,Uh=212,Fh=213,Oh=214,Sa=0,ba=1,Ta=2,ys=3,Ea=4,wa=5,Aa=6,Ca=7,so=0,Bh=1,zh=2,Xn=0,Jl=1,$l=2,Kl=3,jl=4,Ql=5,tc=6,Or=7;var ec=300,Ui=301,Ki=302,ro=303,ao=304,Br=306,vs=1e3,Ln=1001,Ms=1002,Qe=1003,kh=1004;var zr=1005;var nn=1006,oo=1007;var Fi=1008;var _n=1009,nc=1010,ic=1011,Os=1012,lo=1013,qn=1014,Dn=1015,Yn=1016,co=1017,ho=1018,Bs=1020,sc=35902,rc=35899,ac=1021,oc=1022,Un=1023,jn=1026,Oi=1027,uo=1028,fo=1029,Bi=1030,po=1031;var mo=1033,kr=33776,Vr=33777,Gr=33778,Hr=33779,go=35840,_o=35841,xo=35842,yo=35843,vo=36196,Mo=37492,So=37496,bo=37488,To=37489,Wr=37490,Eo=37491,wo=37808,Ao=37809,Co=37810,Ro=37811,Po=37812,Io=37813,Lo=37814,No=37815,Do=37816,Uo=37817,Fo=37818,Oo=37819,Bo=37820,zo=37821,ko=36492,Vo=36494,Go=36495,Ho=36283,Wo=36284,Xr=36285,Xo=36286;var ar=2300,Ra=2301,va=2302,Rl=2303,Pl=2400,Il=2401,Ll=2402;var Vh=3200;var qr=0,Gh=1,gi="",Ye="srgb",or="srgb-linear",lr="linear",Ce="srgb";var Ma=7680;var Hh=519,Wh=512,Xh=513,qh=514,qo=515,Yh=516,Zh=517,Yo=518,Jh=519,$h=35044;var lc="300 es",Gn=2e3,Ss=2001;function ku(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kh(){let i=cr("canvas");return i.style.display="block",i}var kc={},bs=null;function cc(...i){let t="THREE."+i.shift();bs?bs("log",t,...i):console.log(t,...i)}function jh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ee(...i){i=jh(i);let t="THREE."+i.shift();if(bs)bs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=jh(i);let t="THREE."+i.shift();if(bs)bs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Hi(...i){let t=i.join(" ");t in kc||(kc[t]=!0,ee(...i))}function Qh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var tu={[Sa]:ba,[Ta]:Aa,[Ea]:Ca,[ys]:wa,[ba]:Sa,[Aa]:Ta,[Ca]:Ea,[wa]:ys},Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var il=Math.PI/180,Pa=180/Math.PI;function zs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function Gu(i,t){return(i%t+t)%t}function sl(i,t,e){return(1-e)*i+e*t}function $s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var mc=class mc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mc.prototype.isVector2=!0;var _t=mc,Tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let E=Math.acos(m),I=Math.sin(E);p=Math.sin(p*E)/I,o=Math.sin(o*E)/I,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+v*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+v*o;let E=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=E,l*=E,h*=E,d*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-o*f,t[e+2]=l*g+h*f+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gc=class gc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rl.copy(this).projectOnVector(t),this.sub(rl)}reflect(t){return this.sub(rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gc.prototype.isVector3=!0;var k=gc,rl=new k,Vc=new Tn,_c=class _c{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],E=s[1],I=s[4],M=s[7],T=s[2],A=s[5],U=s[8];return r[0]=a*v+o*E+c*T,r[3]=a*m+o*I+c*A,r[6]=a*p+o*M+c*U,r[1]=l*v+h*E+d*T,r[4]=l*m+h*I+d*A,r[7]=l*p+h*M+d*U,r[2]=u*v+f*E+g*T,r[5]=u*m+f*I+g*A,r[8]=u*p+f*M+g*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(al.makeScale(t,e)),this}rotate(t){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(al.makeRotation(-t)),this}translate(t,e){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_c.prototype.isMatrix3=!0;var $t=_c,al=new $t,Gc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hu(){let i={enabled:!0,workingColorSpace:or,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ce&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ce&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[or]:{primaries:t,whitePoint:n,transfer:lr,toXYZ:Gc,fromXYZ:Hc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:n,transfer:Ce,toXYZ:Gc,fromXYZ:Hc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),i}var ge=Hu();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ss,Ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ss===void 0&&(ss=cr("canvas")),ss.width=t.width,ss.height=t.height;let s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ss}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=cr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Wu=0,Ts=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=zs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ol(s[a].image)):r.push(ol(s[a]))}else r=ol(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}var Xu=0,ll=new k,sn=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=nn,a=Fi,o=Un,c=_n,l=i.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=zs(),this.name="",this.source=new Ts(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ll).x}get height(){return this.source.getSize(ll).y}get depth(){return this.source.getSize(ll).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case Ms:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case Ms:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=ec;sn.DEFAULT_ANISOTROPY=1;var xc=class xc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(l+1)/2,M=(f+1)/2,T=(p+1)/2,A=(h+u)/4,U=(d+v)/4,x=(g+m)/4;return I>M&&I>T?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=A/n,r=U/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=U/r,s=x/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-v)/E,this.z=(u-h)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xc.prototype.isVector4=!0;var Be=xc,La=class extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new sn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ts(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends La{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},hr=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Na=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var io=class io{constructor(t,e,n,s,r,a,o,c,l,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,u,f,g,v,m)}set(t,e,n,s,r,a,o,c,l,h,d,u,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new io().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-v*l,e[9]=-o*c,e[2]=v-u*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u+v*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){let u=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qu,t,Yu)}lookAt(t,e,n){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),bi.crossVectors(n,vn),bi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),bi.crossVectors(n,vn)),bi.normalize(),jr.crossVectors(vn,bi),s[0]=bi.x,s[4]=jr.x,s[8]=vn.x,s[1]=bi.y,s[5]=jr.y,s[9]=vn.y,s[2]=bi.z,s[6]=jr.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],E=n[3],I=n[7],M=n[11],T=n[15],A=s[0],U=s[4],x=s[8],C=s[12],B=s[1],H=s[5],V=s[9],tt=s[13],G=s[2],$=s[6],ct=s[10],J=s[14],Z=s[3],at=s[7],ht=s[11],ut=s[15];return r[0]=a*A+o*B+c*G+l*Z,r[4]=a*U+o*H+c*$+l*at,r[8]=a*x+o*V+c*ct+l*ht,r[12]=a*C+o*tt+c*J+l*ut,r[1]=h*A+d*B+u*G+f*Z,r[5]=h*U+d*H+u*$+f*at,r[9]=h*x+d*V+u*ct+f*ht,r[13]=h*C+d*tt+u*J+f*ut,r[2]=g*A+v*B+m*G+p*Z,r[6]=g*U+v*H+m*$+p*at,r[10]=g*x+v*V+m*ct+p*ht,r[14]=g*C+v*tt+m*J+p*ut,r[3]=E*A+I*B+M*G+T*Z,r[7]=E*U+I*H+M*$+T*at,r[11]=E*x+I*V+M*ct+T*ht,r[15]=E*C+I*tt+M*J+T*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],E=c*f-l*u,I=o*f-l*d,M=o*u-c*d,T=a*f-l*h,A=a*u-c*h,U=a*d-o*h;return e*(v*E-m*I+p*M)-n*(g*E-m*T+p*A)+s*(g*I-v*T+p*U)-r*(g*M-v*A+m*U)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],E=e*o-n*a,I=e*c-s*a,M=e*l-r*a,T=n*c-s*o,A=n*l-r*o,U=s*l-r*c,x=h*v-d*g,C=h*m-u*g,B=h*p-f*g,H=d*m-u*v,V=d*p-f*v,tt=u*p-f*m,G=E*tt-I*V+M*H+T*B-A*C+U*x;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/G;return t[0]=(o*tt-c*V+l*H)*$,t[1]=(s*V-n*tt-r*H)*$,t[2]=(v*U-m*A+p*T)*$,t[3]=(u*A-d*U-f*T)*$,t[4]=(c*B-a*tt-l*C)*$,t[5]=(e*tt-s*B+r*C)*$,t[6]=(m*M-g*U-p*I)*$,t[7]=(h*U-u*M+f*I)*$,t[8]=(a*V-o*B+l*x)*$,t[9]=(n*B-e*V-r*x)*$,t[10]=(g*A-v*M+p*E)*$,t[11]=(d*M-h*A-f*E)*$,t[12]=(o*C-a*H-c*x)*$,t[13]=(e*H-n*C+s*x)*$,t[14]=(v*I-g*T-m*E)*$,t[15]=(h*T-d*I+u*E)*$,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,E=c*l,I=c*h,M=c*d,T=n.x,A=n.y,U=n.z;return s[0]=(1-(v+p))*T,s[1]=(f+M)*T,s[2]=(g-I)*T,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(u+p))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+I)*U,s[9]=(m-E)*U,s[10]=(1-(u+v))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=rs.set(s[0],s[1],s[2]).length(),o=rs.set(s[4],s[5],s[6]).length(),c=rs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Bn.copy(this);let l=1/a,h=1/o,d=1/c;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,e.setFromRotationMatrix(Bn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Gn,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===Gn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ss)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Gn,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===Gn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ss)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};io.prototype.isMatrix4=!0;var Ne=io,rs=new k,Bn=new Ne,qu=new k(0,0,0),Yu=new k(1,1,1),bi=new k,jr=new k,vn=new k,Wc=new Ne,Xc=new Tn,Nn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(de(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zu=0,qc=new k,as=new Tn,oi=new Ne,Qr=new k,Ks=new k,Ju=new k,$u=new Tn,Yc=new k(1,0,0),Zc=new k(0,1,0),Jc=new k(0,0,1),$c={type:"added"},Ku={type:"removed"},os={type:"childadded",child:null},cl={type:"childremoved",child:null},rn=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Nn,n=new Tn,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new $t}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis(Zc,t)}rotateZ(t){return this.rotateOnAxis(Jc,t)}translateOnAxis(t,e){return qc.copy(t).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis(Zc,t)}translateZ(t){return this.translateOnAxis(Jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Ks,Qr,this.up):oi.lookAt(Qr,Ks,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),as.setFromRotationMatrix(oi),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($c),os.child=t,this.dispatchEvent(os),os.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ku),cl.child=t,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($c),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,Ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,$u,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new k(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var We=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ju={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ju)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new We;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},ta={h:0,s:0,l:0};function hl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var le=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=Gu(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=hl(a,r,t+1/3),this.g=hl(a,r,t),this.b=hl(a,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){let n=eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return ge.workingToColorSpace(hn.copy(this),t),Math.round(de(hn.r*255,0,255))*65536+Math.round(de(hn.g*255,0,255))*256+Math.round(de(hn.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(hn.copy(this),e);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Ye){ge.workingToColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,s=hn.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(ta);let n=sl(Ti.h,ta.h,e),s=sl(Ti.s,ta.s,e),r=sl(Ti.l,ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new le;le.NAMES=eu;var Wi=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},zn=new k,li=new k,ul=new k,ci=new k,ls=new k,cs=new k,Kc=new k,dl=new k,fl=new k,pl=new k,ml=new Be,gl=new Be,_l=new Be,Ci=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),li.subVectors(n,e),ul.subVectors(t,e);let a=zn.dot(zn),o=zn.dot(li),c=zn.dot(ul),l=li.dot(li),h=li.dot(ul),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ci.x),c.addScaledVector(a,ci.y),c.addScaledVector(o,ci.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ml.setScalar(0),gl.setScalar(0),_l.setScalar(0),ml.fromBufferAttribute(t,e),gl.fromBufferAttribute(t,n),_l.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ml,r.x),a.addScaledVector(gl,r.y),a.addScaledVector(_l,r.z),a}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),li.subVectors(t,e),zn.cross(li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),zn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ls.subVectors(s,n),cs.subVectors(r,n),dl.subVectors(t,n);let c=ls.dot(dl),l=cs.dot(dl);if(c<=0&&l<=0)return e.copy(n);fl.subVectors(t,s);let h=ls.dot(fl),d=cs.dot(fl);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ls,a);pl.subVectors(t,r);let f=ls.dot(pl),g=cs.dot(pl);if(g>=0&&f<=g)return e.copy(r);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(cs,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Kc.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Kc,o);let p=1/(m+v+u);return a=v*p,o=u*p,e.copy(n).addScaledVector(ls,a).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ti=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(t.matrixWorld),this.union(ea)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),na.subVectors(this.max,js),hs.subVectors(t.a,js),us.subVectors(t.b,js),ds.subVectors(t.c,js),Ei.subVectors(us,hs),wi.subVectors(ds,us),zi.subVectors(hs,ds);let e=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-zi.z,zi.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,zi.z,0,-zi.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-zi.y,zi.x,0];return!xl(e,hs,us,ds,na)||(e=[1,0,0,0,1,0,0,0,1],!xl(e,hs,us,ds,na))?!1:(ia.crossVectors(Ei,wi),e=[ia.x,ia.y,ia.z],xl(e,hs,us,ds,na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hi=[new k,new k,new k,new k,new k,new k,new k,new k],kn=new k,ea=new ti,hs=new k,us=new k,ds=new k,Ei=new k,wi=new k,zi=new k,js=new k,na=new k,ia=new k,ki=new k;function xl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ki.fromArray(i,r);let o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=t.dot(ki),l=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var qe=new k,sa=new _t,Qu=0,bn=class extends Qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$h,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$s(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$s(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$s(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var dr=class extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fr=class extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}},td=new ti,Qs=new k,yl=new k,Ri=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):td.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(yl)),this.expandByPoint(Qs.copy(t.center).sub(yl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ed=0,In=new Ne,vl=new rn,fs=new k,Mn=new ti,tr=new ti,je=new k,Je=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ku(t)?fr:dr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return vl.lookAt(t),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(Mn.min,tr.min),Mn.expandByPoint(je),je.addVectors(Mn.max,tr.max),Mn.expandByPoint(je)):(Mn.expandByPoint(tr.min),Mn.expandByPoint(tr.max))}Mn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)je.fromBufferAttribute(o,l),c&&(fs.fromBufferAttribute(t,l),je.add(fs)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new k,c[x]=new k;let l=new k,h=new k,d=new k,u=new _t,f=new _t,g=new _t,v=new k,m=new k;function p(x,C,B){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,B),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,C),g.fromBufferAttribute(r,B),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let H=1/(f.x*g.y-g.x*f.y);isFinite(H)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(H),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(H),o[x].add(v),o[C].add(v),o[B].add(v),c[x].add(m),c[C].add(m),c[B].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,C=E.length;x<C;++x){let B=E[x],H=B.start,V=B.count;for(let tt=H,G=H+V;tt<G;tt+=3)p(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}let I=new k,M=new k,T=new k,A=new k;function U(x){T.fromBufferAttribute(s,x),A.copy(T);let C=o[x];I.copy(C),I.sub(T.multiplyScalar(T.dot(C))).normalize(),M.crossVectors(A,C);let H=M.dot(c[x])<0?-1:1;a.setXYZW(x,I.x,I.y,I.z,H)}for(let x=0,C=E.length;x<C;++x){let B=E[x],H=B.start,V=B.count;for(let tt=H,G=H+V;tt<G;tt+=3)U(t.getX(tt+0)),U(t.getX(tt+1)),U(t.getX(tt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new k,r=new k,a=new k,o=new k,c=new k,l=new k,h=new k,d=new k;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new bn(u,h,d)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ml=new k,nd=new k,id=new $t,Vn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ml.subVectors(n,e).cross(nd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||id.getNormalMatrix(t),s=this.coplanarPoint(Ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},sd=0,pi=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=Fs,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=Zl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Vn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ui=new k,Sl=new k,ra=new k,aa=new k,Da=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sl.copy(t).add(e).multiplyScalar(.5),ra.copy(e).sub(t).normalize(),aa.copy(this.origin).sub(Sl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ra),o=aa.dot(this.direction),c=-aa.dot(ra),l=aa.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Sl).addScaledVector(ra,u),f}intersectSphere(t,e){if(t.radius<0)return null;ui.subVectors(t.center,this.origin);let n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=n.x-a.x,E=n.y-a.y,I=n.z-a.z,M=Math.abs(c),T=Math.abs(l),A=Math.abs(h),U,x,C,B,H,V,tt,G,$,ct,J,Z;if(M>=T&&M>=A?(C=c,V=d,$=g,Z=p,c>=0?(U=l,x=h,B=u,H=f,tt=v,G=m,ct=E,J=I):(U=h,x=l,B=f,H=u,tt=m,G=v,ct=I,J=E)):T>=A?(C=l,V=u,$=v,Z=E,l>=0?(U=h,x=c,B=f,H=d,tt=m,G=g,ct=I,J=p):(U=c,x=h,B=d,H=f,tt=g,G=m,ct=p,J=I)):(C=h,V=f,$=m,Z=I,h>=0?(U=c,x=l,B=d,H=u,tt=g,G=v,ct=p,J=E):(U=l,x=c,B=u,H=d,tt=v,G=g,ct=E,J=p)),C===0)return null;let at=U/C,ht=x/C,ut=1/C,Mt=B-at*V,At=H-ht*V,Jt=tt-at*$,ne=G-ht*$,ce=ct-at*Z,F=J-ht*Z,L=ce*ne-F*Jt,P=Mt*F-At*ce,R=Jt*At-ne*Mt;if(s){if(L<0||P<0||R<0)return null}else if((L<0||P<0||R<0)&&(L>0||P>0||R>0))return null;let O=L+P+R;if(O===0)return null;let st=ut*(L*V+P*$+R*Z);return(O>0?st<0:st>0)?null:this.at(st/O,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jc=new Ne,Vi=new Da,oa=new Ri,Qc=new k,la=new k,ca=new k,ha=new k,bl=new k,ua=new k,th=new k,da=new k,ze=class extends rn{constructor(t=new Je,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ua.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(bl.fromBufferAttribute(d,t),a?ua.addScaledVector(bl,h):ua.addScaledVector(bl.sub(e),h))}e.add(ua)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(oa.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(oa,Qc)===null||Vi.origin.distanceToSquared(Qc)>(t.far-t.near)**2))&&(jc.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(jc),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),I=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,T=I;M<T;M+=3){let A=o.getX(M),U=o.getX(M+1),x=o.getX(M+2);s=fa(this,p,t,n,l,h,d,A,U,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let E=o.getX(m),I=o.getX(m+1),M=o.getX(m+2);s=fa(this,a,t,n,l,h,d,E,I,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),I=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,T=I;M<T;M+=3){let A=M,U=M+1,x=M+2;s=fa(this,p,t,n,l,h,d,A,U,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let E=m,I=m+1,M=m+2;s=fa(this,a,t,n,l,h,d,E,I,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function rd(i,t,e,n,s,r,a,o){let c;if(t.side===an?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Di,o),c===null)return null;da.copy(o),da.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(da);return l<e.near||l>e.far?null:{distance:l,point:da.clone(),object:i}}function fa(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,la),i.getVertexPosition(c,ca),i.getVertexPosition(l,ha);let h=rd(i,t,e,n,la,ca,ha,th);if(h){let d=new k;Ci.getBarycoord(th,la,ca,ha,d),s&&(h.uv=Ci.getInterpolatedAttribute(s,o,c,l,d,new _t)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,o,c,l,d,new _t)),a&&(h.normal=Ci.getInterpolatedAttribute(a,o,c,l,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new k,materialIndex:0};Ci.getNormal(la,ca,ha,u.normal),h.face=u,h.barycoord=d}return h}var Xi=class extends sn{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Qe,h=Qe,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class extends bn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ps=new Ne,eh=new Ne,pa=[],nh=new ti,ad=new Ne,er=new ze,nr=new Ri,mr=class extends ze{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ad)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),nh.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(nh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),nr.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),t.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),eh.multiplyMatrices(n,ps),er.matrixWorld=eh,er.raycast(t,pa);for(let a=0,o=pa.length;a<o;a++){let c=pa[a];c.instanceId=r,c.object=this,e.push(c)}pa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xi(new Float32Array(s*this.count),s,this.count,uo,Dn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gi=new Ri,od=new _t(.5,.5),ma=new k,ws=class{constructor(t=new Vn,e=new Vn,n=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],E=r[12],I=r[13],M=r[14],T=r[15];if(s[0].setComponents(l-a,f-h,p-g,T-E).normalize(),s[1].setComponents(l+a,f+h,p+g,T+E).normalize(),s[2].setComponents(l+o,f+d,p+v,T+I).normalize(),s[3].setComponents(l-o,f-d,p-v,T-I).normalize(),n)s[4].setComponents(c,u,m,M).normalize(),s[5].setComponents(l-c,f-u,p-m,T-M).normalize();else if(s[4].setComponents(l-c,f-u,p-m,T-M).normalize(),e===Gn)s[5].setComponents(l+c,f+u,p+m,T+M).normalize();else if(e===Ss)s[5].setComponents(c,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=od.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ma.x=s.normal.x>0?t.max.x:t.min.x,ma.y=s.normal.y>0?t.max.y:t.min.y,ma.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gr=class extends sn{constructor(t=[],e=Ui,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qi=class extends sn{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Pi=class extends sn{constructor(t,e,n=qn,s,r,a,o=Qe,c=Qe,l,h=jn,d=1){if(h!==jn&&h!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ts(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ua=class extends Pi{constructor(t,e=qn,n=Ui,s,r,a=Qe,o=Qe,c,l=jn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},_r=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ei=class i extends Je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(d,2));function g(v,m,p,E,I,M,T,A,U,x,C){let B=M/U,H=T/x,V=M/2,tt=T/2,G=A/2,$=U+1,ct=x+1,J=0,Z=0,at=new k;for(let ht=0;ht<ct;ht++){let ut=ht*H-tt;for(let Mt=0;Mt<$;Mt++){let At=Mt*B-V;at[v]=At*E,at[m]=ut*I,at[p]=G,l.push(at.x,at.y,at.z),at[v]=0,at[m]=0,at[p]=A>0?1:-1,h.push(at.x,at.y,at.z),d.push(Mt/U),d.push(1-ht/x),J+=1}}for(let ht=0;ht<x;ht++)for(let ut=0;ut<U;ut++){let Mt=u+ut+$*ht,At=u+ut+$*(ht+1),Jt=u+(ut+1)+$*(ht+1),ne=u+(ut+1)+$*ht;c.push(Mt,At,ne),c.push(At,Jt,ne),Z+=6}o.addGroup(f,Z,C),f+=Z,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var As=class i extends Je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new k,h=new _t;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(o,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fa=class i extends Je{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,v=[],m=n/2,p=0;E(),a===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new _e(d,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(f,2));function E(){let M=new k,T=new k,A=0,U=(e-t)/n;for(let x=0;x<=r;x++){let C=[],B=x/r,H=B*(e-t)+t;for(let V=0;V<=s;V++){let tt=V/s,G=tt*c+o,$=Math.sin(G),ct=Math.cos(G);T.x=H*$,T.y=-B*n+m,T.z=H*ct,d.push(T.x,T.y,T.z),M.set($,U,ct).normalize(),u.push(M.x,M.y,M.z),f.push(tt,1-B),C.push(g++)}v.push(C)}for(let x=0;x<s;x++)for(let C=0;C<r;C++){let B=v[C][x],H=v[C+1][x],V=v[C+1][x+1],tt=v[C][x+1];(t>0||C!==0)&&(h.push(B,H,tt),A+=3),(e>0||C!==r-1)&&(h.push(H,V,tt),A+=3)}l.addGroup(p,A,0),p+=A}function I(M){let T=g,A=new _t,U=new k,x=0,C=M===!0?t:e,B=M===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,m*B,0),u.push(0,B,0),f.push(.5,.5),g++;let H=g;for(let V=0;V<=s;V++){let G=V/s*c+o,$=Math.cos(G),ct=Math.sin(G);U.x=C*ct,U.y=m*B,U.z=C*$,d.push(U.x,U.y,U.z),u.push(0,B,0),A.x=$*.5+.5,A.y=ct*.5*B+.5,f.push(A.x,A.y),g++}for(let V=0;V<s;V++){let tt=T+V,G=H+V;M===!0?h.push(G,G+1,tt):h.push(G+1,G,tt),x+=3}l.addGroup(p,x,M===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xr=class i extends Fa{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ee("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new _t:new k);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new k,s=[],r=[],a=[],o=new k,c=new Ne;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new k)}r[0]=new k,a[0]=new k;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(de(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(de(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cs=class extends En{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new _t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Oa=class extends Cs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function hc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ih=new k,sh=new k,Tl=new hc,El=new hc,wl=new hc,Ba=class extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(sh.subVectors(s[0],s[1]).add(s[0]),l=sh);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ih.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ih),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Tl.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,v,m),El.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,v,m),wl.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),El.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),wl.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Tl.calc(c),El.calc(c),wl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function rh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function ld(i,t){let e=1-i;return e*e*t}function cd(i,t){return 2*(1-i)*i*t}function hd(i,t){return i*i*t}function sr(i,t,e,n){return ld(i,t)+cd(i,e)+hd(i,n)}function ud(i,t){let e=1-i;return e*e*e*t}function dd(i,t){let e=1-i;return 3*e*e*i*t}function fd(i,t){return 3*(1-i)*i*i*t}function pd(i,t){return i*i*i*t}function rr(i,t,e,n,s){return ud(i,t)+dd(i,e)+fd(i,n)+pd(i,s)}var yr=class extends En{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rr(t,s.x,r.x,a.x,o.x),rr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends En{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rr(t,s.x,r.x,a.x,o.x),rr(t,s.y,r.y,a.y,o.y),rr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vr=class extends En{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ka=class extends En{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mr=class extends En{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(sr(t,s.x,r.x,a.x),sr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends En{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(sr(t,s.x,r.x,a.x),sr(t,s.y,r.y,a.y),sr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sr=class extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(rh(o,c.x,l.x,h.x,d.x),rh(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},Nl=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:Ba,CubicBezierCurve:yr,CubicBezierCurve3:za,EllipseCurve:Cs,LineCurve:vr,LineCurve3:ka,QuadraticBezierCurve:Mr,QuadraticBezierCurve3:Va,SplineCurve:Sr}),Ga=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Nl[s.type]().fromJSON(s))}return this}},ni=class extends Ga{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new vr(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Mr(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new yr(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Sr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Cs(t,e,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},mi=class extends ni{constructor(t){super(t),this.uuid=zs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ni().fromJSON(s))}return this}};function md(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=nu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=vd(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let h=o,d=c;for(let u=e;u<s;u+=e){let f=i[u],g=i[u+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>d&&(d=g)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return br(r,a,e,o,c,l,0),a}function nu(i,t,e,n,s){let r;if(s===Id(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=ah(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ah(a/n|0,i[a],i[a+1],r);return r&&Rs(r,r.next)&&(Er(r),r=r.next),r}function Yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Rs(e,e.next)||ke(e.prev,e,e.next)===0)){if(Er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function br(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ed(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?_d(i,n,s,r):gd(i)){t.push(c.i,i.i,l.i),Er(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=xd(Yi(i),t),br(i,t,e,n,s,r,2)):a===2&&yd(i,t,e,n,s,r):br(Yi(i),t,e,n,s,r,1);break}}}function gd(i){let t=i.prev,e=i,n=i.next;if(ke(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),u=Math.max(s,r,a),f=Math.max(o,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&ir(s,o,r,c,a,l,g.x,g.y)&&ke(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _d(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ke(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,c,l),g=Math.min(h,d,u),v=Math.max(o,c,l),m=Math.max(h,d,u),p=Dl(f,g,t,e,n),E=Dl(v,m,t,e,n),I=i.prevZ,M=i.nextZ;for(;I&&I.z>=p&&M&&M.z<=E;){if(I.x>=f&&I.x<=v&&I.y>=g&&I.y<=m&&I!==s&&I!==a&&ir(o,h,c,d,l,u,I.x,I.y)&&ke(I.prev,I,I.next)>=0||(I=I.prevZ,M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&ir(o,h,c,d,l,u,M.x,M.y)&&ke(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;I&&I.z>=p;){if(I.x>=f&&I.x<=v&&I.y>=g&&I.y<=m&&I!==s&&I!==a&&ir(o,h,c,d,l,u,I.x,I.y)&&ke(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;M&&M.z<=E;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&ir(o,h,c,d,l,u,M.x,M.y)&&ke(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function xd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Rs(n,s)&&su(n,e,e.next,s)&&Tr(n,s)&&Tr(s,n)&&(t.push(n.i,e.i,s.i),Er(e),Er(e.next),e=i=s),e=e.next}while(e!==i);return Yi(e)}function yd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cd(a,o)){let c=ru(a,o);a=Yi(a,a.next),c=Yi(c,c.next),br(a,t,e,n,s,r,0),br(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function vd(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=nu(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Ad(l))}s.sort(Md);for(let r=0;r<s.length;r++)e=Sd(s[r],e);return e}function Md(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Sd(i,t){let e=bd(i,t);if(!e)return t;let n=ru(e,i);return Yi(n,n.next),Yi(e,e.next)}function bd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Rs(i,e))return e;do{if(Rs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&iu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Tr(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Td(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Td(i,t){return ke(i.prev,i,t.prev)<0&&ke(t.next,i,i.next)<0}function Ed(i,t,e,n){let s=i;do s.z===0&&(s.z=Dl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wd(s)}function wd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Dl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ad(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function iu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ir(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&iu(i,t,e,n,s,r,a,o)}function Cd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Rd(i,t)&&(Tr(i,t)&&Tr(t,i)&&Pd(i,t)&&(ke(i.prev,i,t.prev)||ke(i,t.prev,t))||Rs(i,t)&&ke(i.prev,i,i.next)>0&&ke(t.prev,t,t.next)>0)}function ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Rs(i,t){return i.x===t.x&&i.y===t.y}function su(i,t,e,n){let s=_a(ke(i,t,e)),r=_a(ke(i,t,n)),a=_a(ke(e,n,i)),o=_a(ke(e,n,t));return!!(s!==r&&a!==o||s===0&&ga(i,e,t)||r===0&&ga(i,n,t)||a===0&&ga(e,i,n)||o===0&&ga(e,t,n))}function ga(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _a(i){return i>0?1:i<0?-1:0}function Rd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&su(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Tr(i,t){return ke(i.prev,i,i.next)<0?ke(i,t,i.next)>=0&&ke(i,i.prev,t)>=0:ke(i,t,i.prev)<0||ke(i,i.next,t)<0}function Pd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ru(i,t){let e=Ul(i.i,i.x,i.y),n=Ul(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ah(i,t,e,n){let s=Ul(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ul(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Id(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Fl=class{static triangulate(t,e,n=2){return md(t,e,n)}},Sn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];oh(t),lh(n,t);let a=t.length;e.forEach(oh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,lh(n,e[c]);let o=Fl.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function oh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function lh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ps=class i extends Je{constructor(t=new mi([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new _e(s,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Ld,I,M=!1,T,A,U,x;if(p){I=p.getSpacedPoints(h),M=!0,u=!1;let b=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(h,b),A=new k,U=new k,x=new k}u||(m=0,f=0,g=0,v=0);let C=o.extractPoints(l),B=C.shape,H=C.holes;if(!Sn.isClockWise(B)){B=B.reverse();for(let b=0,D=H.length;b<D;b++){let N=H[b];Sn.isClockWise(N)&&(H[b]=N.reverse())}}function tt(b){let N=10000000000000001e-36,Y=b[0];for(let Q=1;Q<=b.length;Q++){let ot=Q%b.length,yt=b[ot],mt=yt.x-Y.x,q=yt.y-Y.y,y=mt*mt+q*q,St=Math.max(Math.abs(yt.x),Math.abs(yt.y),Math.abs(Y.x),Math.abs(Y.y)),Gt=N*St*St;if(y<=Gt){b.splice(ot,1),Q--;continue}Y=yt}}tt(B),H.forEach(tt);let G=H.length,$=B;for(let b=0;b<G;b++){let D=H[b];B=B.concat(D)}function ct(b,D,N){return D||se("ExtrudeGeometry: vec does not exist"),b.clone().addScaledVector(D,N)}let J=B.length;function Z(b,D,N){let Y,Q,ot,yt=b.x-D.x,mt=b.y-D.y,q=N.x-b.x,y=N.y-b.y,St=yt*yt+mt*mt,Gt=yt*y-mt*q;if(Math.abs(Gt)>Number.EPSILON){let w=Math.sqrt(St),_=Math.sqrt(q*q+y*y),W=D.x-mt/w,j=D.y+yt/w,dt=N.x-y/_,bt=N.y+q/_,Ct=((dt-W)*y-(bt-j)*q)/(yt*y-mt*q);Y=W+yt*Ct-b.x,Q=j+mt*Ct-b.y;let it=Y*Y+Q*Q;if(it<=2)return new _t(Y,Q);ot=Math.sqrt(it/2)}else{let w=!1;yt>Number.EPSILON?q>Number.EPSILON&&(w=!0):yt<-Number.EPSILON?q<-Number.EPSILON&&(w=!0):Math.sign(mt)===Math.sign(y)&&(w=!0),w?(Y=-mt,Q=yt,ot=Math.sqrt(St)):(Y=yt,Q=mt,ot=Math.sqrt(St/2))}return new _t(Y/ot,Q/ot)}let at=[];for(let b=0,D=$.length,N=D-1,Y=b+1;b<D;b++,N++,Y++)N===D&&(N=0),Y===D&&(Y=0),at[b]=Z($[b],$[N],$[Y]);let ht=[],ut,Mt=at.concat();for(let b=0,D=G;b<D;b++){let N=H[b];ut=[];for(let Y=0,Q=N.length,ot=Q-1,yt=Y+1;Y<Q;Y++,ot++,yt++)ot===Q&&(ot=0),yt===Q&&(yt=0),ut[Y]=Z(N[Y],N[ot],N[yt]);ht.push(ut),Mt=Mt.concat(ut)}let At;if(m===0)At=Sn.triangulateShape($,H);else{let b=[],D=[];for(let N=0;N<m;N++){let Y=N/m,Q=f*Math.cos(Y*Math.PI/2),ot=g*Math.sin(Y*Math.PI/2)+v;for(let yt=0,mt=$.length;yt<mt;yt++){let q=ct($[yt],at[yt],ot);P(q.x,q.y,-Q),Y===0&&b.push(q)}for(let yt=0,mt=G;yt<mt;yt++){let q=H[yt];ut=ht[yt];let y=[];for(let St=0,Gt=q.length;St<Gt;St++){let w=ct(q[St],ut[St],ot);P(w.x,w.y,-Q),Y===0&&y.push(w)}Y===0&&D.push(y)}}At=Sn.triangulateShape(b,D)}let Jt=At.length,ne=g+v;for(let b=0;b<J;b++){let D=u?ct(B[b],Mt[b],ne):B[b];M?(U.copy(T.normals[0]).multiplyScalar(D.x),A.copy(T.binormals[0]).multiplyScalar(D.y),x.copy(I[0]).add(U).add(A),P(x.x,x.y,x.z)):P(D.x,D.y,0)}for(let b=1;b<=h;b++)for(let D=0;D<J;D++){let N=u?ct(B[D],Mt[D],ne):B[D];M?(U.copy(T.normals[b]).multiplyScalar(N.x),A.copy(T.binormals[b]).multiplyScalar(N.y),x.copy(I[b]).add(U).add(A),P(x.x,x.y,x.z)):P(N.x,N.y,d/h*b)}for(let b=m-1;b>=0;b--){let D=b/m,N=f*Math.cos(D*Math.PI/2),Y=g*Math.sin(D*Math.PI/2)+v;for(let Q=0,ot=$.length;Q<ot;Q++){let yt=ct($[Q],at[Q],Y);P(yt.x,yt.y,d+N)}for(let Q=0,ot=H.length;Q<ot;Q++){let yt=H[Q];ut=ht[Q];for(let mt=0,q=yt.length;mt<q;mt++){let y=ct(yt[mt],ut[mt],Y);M?P(y.x,y.y+I[h-1].y,I[h-1].x+N):P(y.x,y.y,d+N)}}}ce(),F();function ce(){let b=s.length/3;if(u){let D=0,N=J*D;for(let Y=0;Y<Jt;Y++){let Q=At[Y];R(Q[2]+N,Q[1]+N,Q[0]+N)}D=h+m*2,N=J*D;for(let Y=0;Y<Jt;Y++){let Q=At[Y];R(Q[0]+N,Q[1]+N,Q[2]+N)}}else{for(let D=0;D<Jt;D++){let N=At[D];R(N[2],N[1],N[0])}for(let D=0;D<Jt;D++){let N=At[D];R(N[0]+J*h,N[1]+J*h,N[2]+J*h)}}n.addGroup(b,s.length/3-b,0)}function F(){let b=s.length/3,D=0;L($,D),D+=$.length;for(let N=0,Y=H.length;N<Y;N++){let Q=H[N];L(Q,D),D+=Q.length}n.addGroup(b,s.length/3-b,1)}function L(b,D){let N=b.length;for(;--N>=0;){let Y=N,Q=N-1;Q<0&&(Q=b.length-1);for(let ot=0,yt=h+m*2;ot<yt;ot++){let mt=J*ot,q=J*(ot+1),y=D+Y+mt,St=D+Q+mt,Gt=D+Q+q,w=D+Y+q;O(y,St,Gt,w)}}}function P(b,D,N){c.push(b),c.push(D),c.push(N)}function R(b,D,N){st(b),st(D),st(N);let Y=s.length/3,Q=E.generateTopUV(n,s,Y-3,Y-2,Y-1);xt(Q[0]),xt(Q[1]),xt(Q[2])}function O(b,D,N,Y){st(b),st(D),st(Y),st(D),st(N),st(Y);let Q=s.length/3,ot=E.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);xt(ot[0]),xt(ot[1]),xt(ot[3]),xt(ot[1]),xt(ot[2]),xt(ot[3])}function st(b){s.push(c[b*3+0]),s.push(c[b*3+1]),s.push(c[b*3+2])}function xt(b){r.push(b.x),r.push(b.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Nd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Nl[s.type]().fromJSON(s)),new i(n,t.options)}},Ld={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new _t(r,a),new _t(o,c),new _t(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new _t(a,1-c),new _t(l,1-d),new _t(u,1-g),new _t(v,1-p)]:[new _t(o,1-c),new _t(h,1-d),new _t(f,1-g),new _t(m,1-p)]}};function Nd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Hn=class i extends Je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let E=p*u-a;for(let I=0;I<l;I++){let M=I*d-r;g.push(M,-E,0),v.push(0,0,1),m.push(I/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){let I=E+l*p,M=E+l*(p+1),T=E+1+l*(p+1),A=E+1+l*p;f.push(I,M,A),f.push(M,T,A)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(v,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Zi=class i extends Je{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],d=t,u=(e-t)/s,f=new k,g=new _t;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let E=p+m,I=E,M=E+n+1,T=E+n+2,A=E+1;o.push(I,M,A),o.push(M,T,A)}}this.setIndex(o),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},wr=class i extends Je{constructor(t=new mi([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new _e(s,3)),this.setAttribute("normal",new _e(r,3)),this.setAttribute("uv",new _e(a,2));function l(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,g=u.holes;Sn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let E=g[m];Sn.isClockWise(E)===!0&&(g[m]=E.reverse())}let v=Sn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let E=g[m];f=f.concat(E)}for(let m=0,p=f.length;m<p;m++){let E=f[m];s.push(E.x,E.y,0),r.push(0,0,1),a.push(E.x,E.y)}for(let m=0,p=v.length;m<p;m++){let E=v[m],I=E[0]+d,M=E[1]+d,T=E[2]+d;n.push(I,M,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Dd(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Dd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ar=class i extends Je{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new k,u=new k,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let E=[],I=p/n,M=a+I*o,T=t*Math.cos(M),A=Math.sqrt(t*t-T*T),U=0;p===0&&a===0?U=.5/e:p===n&&c===Math.PI&&(U=-.5/e);for(let x=0;x<=e;x++){let C=x/e,B=s+C*r;d.x=-A*Math.cos(B),d.y=T,d.z=A*Math.sin(B),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(C+U,1-I),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let I=h[p][E+1],M=h[p][E],T=h[p+1][E],A=h[p+1][E+1];(p!==0||a>0)&&f.push(I,M,A),(p!==n-1||c<Math.PI)&&f.push(M,T,A)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(v,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Cr=class i extends Je{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new k,f=new k,g=new k;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let E=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(E),f.y=(t+e*Math.cos(m))*Math.sin(E),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),u.x=t*Math.cos(E),u.y=t*Math.sin(E),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,E=(s+1)*(v-1)+m-1,I=(s+1)*(v-1)+m,M=(s+1)*v+m;c.push(p,E,M),c.push(E,I,M)}this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ch(s))s.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ch(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=ji(i[e]);for(let s in n)t[s]=n[s]}return t}function ch(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ud(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var au={clone:ji,merge:un},Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=Ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new le().setHex(s.value);break;case"v2":this.uniforms[n].value=new _t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ne().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ha=class extends wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},An=class extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ii=class extends An{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Rr=class extends pi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=so,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Wa=class extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xa=class extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ms(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Al(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ii=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qa=class extends Ii{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Il:r=t,o=2*e-n;break;case Ll:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Il:a=t,c=2*n-e;break;case Ll:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,E=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,I=(-1-f)*m+(1.5+f)*v+.5*g,M=f*m-f*v;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+E*a[l+T]+I*a[c+T]+M*a[d+T];return r}},Ya=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},Za=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ja=class extends Ii{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),v=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*v+a[c+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let v=a[l+g],m=a[c+g],p=f*u+g*2,E=d[p],I=d[p+1],M=t*u+g*2,T=h[M],A=h[M+1],U=zd(n,e,E,T,s);r[g]=ou(U,v,I,A,m)}return r}};function ou(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Bd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function zd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ou(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Bd(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ms(e,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ms(t.times,Array),values:ms(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Al(t.settings)&&(n.settings={inTangents:ms(t.settings.inTangents,Array),outTangents:ms(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ja(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ar:e=this.InterpolantFactoryMethodDiscrete;break;case Ra:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break;case Rl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ee("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Al(this.settings)&&(hh(this.settings.inTangents,t),hh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(se("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(se("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){se("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){se("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Vu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){se("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===va,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let v=e[d+g];if(v!==e[u+g]||v!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Al(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function hh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Ra;var Li=class extends Cn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=ar;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="color";var Ka=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Ka.prototype.ValueTypeName="number";var ja=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Tn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Pr=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}};Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Cn{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=ar;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Qa.prototype.ValueTypeName="vector";var Ol={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(uh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!uh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function uh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var to=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lu=new to,Ji=class{constructor(t){this.manager=t!==void 0?t:lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";var di={},Bl=class extends Error{constructor(t,e){super(t),this.response=e}},Ir=class extends Ji{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Ol.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(di[t]!==void 0){di[t].push({onLoad:e,onProgress:n,onError:s});return}di[t]=[],di[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=di[t],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0,v=0,m=new ReadableStream({start(p){E();function E(){d.read().then(({done:I,value:M})=>{if(I)p.close();else{v+=M.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let A=0,U=h.length;A<U;A++){let x=h[A];x.onProgress&&x.onProgress(T)}p.enqueue(M),E()}},I=>{p.error(I)})}}});return new Response(m)}else throw new Bl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ol.add(`file:${t}`,l);let h=di[t];delete di[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=di[t];if(h===void 0)throw this.manager.itemError(t),l;delete di[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Is=class extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Cl=new Ne,dh=new k,fh=new k,Lr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(dh),fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Cl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ss||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},xa=new k,ya=new Tn,Kn=new k,Nr=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xa,ya,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,Kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(xa,ya,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ai=new k,ph=new _t,mh=new _t,en=class extends Nr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,ph,mh),e.subVectors(mh,ph)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(il*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var zl=class extends Lr{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},Dr=class extends Is{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ls=class extends Nr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},kl=class extends Lr{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ns=class extends Is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new kl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ur=class extends Is{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var gs=-90,_s=1,eo=class extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(gs,_s,t,e);s.layers=this.layers,this.add(s);let r=new en(gs,_s,t,e);r.layers=this.layers,this.add(r);let a=new en(gs,_s,t,e);a.layers=this.layers,this.add(a);let o=new en(gs,_s,t,e);o.layers=this.layers,this.add(o);let c=new en(gs,_s,t,e);c.layers=this.layers,this.add(c);let l=new en(gs,_s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},no=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var dc="\\[\\]\\.:\\/",kd=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",Vd="[^"+dc.replace("\\.","")+"]",Gd=/((?:WC+[\/:])*)/.source.replace("WC",fc),Hd=/(WCOD+)?/.source.replace("WCOD",Vd),Wd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),Xd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),qd=new RegExp("^"+Gd+Hd+Wd+Xd+"$"),Yd=["material","materials","bones","map"],Vl=class{constructor(t,e,n){let s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kd,"")}static parseTrackName(t){let e=qd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;se("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Vl;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var s_=new Float32Array(1);var yc=class yc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};yc.prototype.isMatrix2=!0;var Gl=yc,gh=new _t,Ds=class{constructor(t=new _t(1/0,1/0),e=new _t(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gh.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gh).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var Wn=class{constructor(){this.type="ShapePath",this.color=new le,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new ni,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(c,l){let h=!1,d=l.length;for(let u=0,f=d-1;u<d;f=u++){let g=l[u],v=l[f];g.y>c.y!=v.y>c.y&&c.x<(v.x-g.x)*(c.y-g.y)/(v.y-g.y)+g.x&&(h=!h)}return h}function e(c,l){let h=l.getCenter(new _t);if(t(h,c))return h;let d=h.y,u=[],f=c.length;for(let g=0;g<f;g++){let v=c[g],m=c[(g+1)%f];if(v.y>d!=m.y>d){let p=v.x+(d-v.y)*(m.x-v.x)/(m.y-v.y);u.push(p)}}return u.length>1&&(u.sort((g,v)=>g-v),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(ee('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let s=n==="nonzero"?(c=>c!==0):(c=>(c&1)!==0),r=[];for(let c of this.subPaths){let l=c.getPoints();if(l.length<3)continue;let h=Sn.area(l);if(h===0)continue;let d=new Ds;for(let u=0;u<l.length;u++)d.expandByPoint(l[u]);r.push({subPath:c,points:l,boundingBox:d,interiorPoint:e(l,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((c,l)=>l.absArea-c.absArea);for(let c=0;c<r.length;c++){let l=r[c],h=0;for(let d=c-1;d>=0;d--){let u=r[d];if(u.boundingBox.containsBox(l.boundingBox)&&t(l.interiorPoint,u.points)){l.container=u.exclude?u.container:u,h=u.winding,l.winding+=h;break}}s(l.winding)===s(h)&&(l.exclude=!0)}for(let c of r)c.exclude||(c.role=c.container===null||c.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let c of r){if(c.exclude||c.role!=="outer")continue;let l=new mi;l.curves=c.subPath.curves,a.push(l),o.set(c,l)}for(let c of r){if(c.exclude||c.role!=="hole")continue;let l=o.get(c.container);if(!l)continue;let h=new ni;h.curves=c.subPath.curves,l.holes.push(h)}return a}};function pc(i,t,e,n){let s=Zd(n);switch(e){case ac:return i*t;case uo:return i*t/s.components*s.byteLength;case fo:return i*t/s.components*s.byteLength;case Bi:return i*t*2/s.components*s.byteLength;case po:return i*t*2/s.components*s.byteLength;case oc:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case mo:return i*t*4/s.components*s.byteLength;case kr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:case yo:return Math.max(i,16)*Math.max(t,8)/4;case go:case xo:return Math.max(i,8)*Math.max(t,8)/2;case vo:case Mo:case bo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:case Wr:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ko:case Vo:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ho:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xr:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zd(i){switch(i){case _n:case nc:return{byteLength:1,components:1};case Os:case ic:case Yn:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case qn:case lo:case Dn:return{byteLength:4,components:1};case sc:case rc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Pu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $d(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
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
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
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
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,af=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uf=`#ifdef USE_IRIDESCENCE
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
#endif`,df=`#ifdef USE_BUMPMAP
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bf=`vec3 transformedNormal = objectNormal;
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
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
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
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hf=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,$f=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kf=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lp=`#if defined( USE_POINTS_UV )
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
#endif`,cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
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
#endif`,mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mp=`#ifdef USE_NORMALMAP
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
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yp=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
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
}`,rm=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,am=`#define DISTANCE
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
}`,om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
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
}`,um=`uniform vec3 diffuse;
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
}`,dm=`#include <common>
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
}`,fm=`uniform vec3 diffuse;
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,gm=`#define MATCAP
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
}`,_m=`#define MATCAP
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
}`,xm=`#define NORMAL
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
}`,ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vm=`#define PHONG
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
}`,Mm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Sm=`#define STANDARD
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
}`,bm=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Tm=`#define TOON
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
}`,Em=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,wm=`uniform float size;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Rm=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Pm=`uniform float rotation;
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
}`,Im=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:Kd,alphahash_pars_fragment:jd,alphamap_fragment:Qd,alphamap_pars_fragment:tf,alphatest_fragment:ef,alphatest_pars_fragment:nf,aomap_fragment:sf,aomap_pars_fragment:rf,batching_pars_vertex:af,batching_vertex:of,begin_vertex:lf,beginnormal_vertex:cf,bsdfs:hf,iridescence_fragment:uf,bumpmap_pars_fragment:df,clipping_planes_fragment:ff,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:mf,clipping_planes_vertex:gf,color_fragment:_f,color_pars_fragment:xf,color_pars_vertex:yf,color_vertex:vf,common:Mf,cube_uv_reflection_fragment:Sf,defaultnormal_vertex:bf,displacementmap_pars_vertex:Tf,displacementmap_vertex:Ef,emissivemap_fragment:wf,emissivemap_pars_fragment:Af,colorspace_fragment:Cf,colorspace_pars_fragment:Rf,envmap_fragment:Pf,envmap_common_pars_fragment:If,envmap_pars_fragment:Lf,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:Wf,envmap_vertex:Df,fog_vertex:Uf,fog_pars_vertex:Ff,fog_fragment:Of,fog_pars_fragment:Bf,gradientmap_pars_fragment:zf,lightmap_pars_fragment:kf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Hf,lights_toon_fragment:Xf,lights_toon_pars_fragment:qf,lights_phong_fragment:Yf,lights_phong_pars_fragment:Zf,lights_physical_fragment:Jf,lights_physical_pars_fragment:$f,lights_fragment_begin:Kf,lights_fragment_maps:jf,lights_fragment_end:Qf,lightprobes_pars_fragment:tp,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:ap,map_particle_fragment:op,map_particle_pars_fragment:lp,metalnessmap_fragment:cp,metalnessmap_pars_fragment:hp,morphinstance_vertex:up,morphcolor_vertex:dp,morphnormal_vertex:fp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:_p,normal_pars_fragment:xp,normal_pars_vertex:yp,normal_vertex:vp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:Tp,iridescence_pars_fragment:Ep,opaque_fragment:wp,packing:Ap,premultiplied_alpha_fragment:Cp,project_vertex:Rp,dithering_fragment:Pp,dithering_pars_fragment:Ip,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Up,shadowmap_vertex:Fp,shadowmask_pars_fragment:Op,skinbase_vertex:Bp,skinning_pars_vertex:zp,skinning_vertex:kp,skinnormal_vertex:Vp,specularmap_fragment:Gp,specularmap_pars_fragment:Hp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:Zp,uv_pars_vertex:Jp,uv_vertex:$p,worldpos_vertex:Kp,background_vert:jp,background_frag:Qp,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distance_vert:am,distance_frag:om,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:um,meshbasic_vert:dm,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:_m,meshnormal_vert:xm,meshnormal_frag:ym,meshphong_vert:vm,meshphong_frag:Mm,meshphysical_vert:Sm,meshphysical_frag:bm,meshtoon_vert:Tm,meshtoon_frag:Em,points_vert:wm,points_frag:Am,shadow_vert:Cm,shadow_frag:Rm,sprite_vert:Pm,sprite_frag:Im},Ot={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},ai={basic:{uniforms:un([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:un([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:un([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:un([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:un([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new le(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:un([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:un([Ot.points,Ot.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:un([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:un([Ot.common,Ot.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:un([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:un([Ot.sprite,Ot.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:un([Ot.common,Ot.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:un([Ot.lights,Ot.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};ai.physical={uniforms:un([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var Zo={r:0,b:0,g:0},Lm=new Ne,Iu=new $t;Iu.set(-1,0,0,0,1,0,0,0,1);function Nm(i,t,e,n,s,r){let a=new le(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(E){let I=E.isScene===!0?E.background:null;if(I&&I.isTexture){let M=E.backgroundBlurriness>0;I=t.get(I,M)}return I}function g(E){let I=!1,M=f(E);M===null?m(a,o):M&&M.isColor&&(m(M,1),I=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(E,I){let M=f(I);M&&(M.isCubeTexture||M.mapping===Br)?(l===void 0&&(l=new ze(new ei(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:ji(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(I.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Iu),l.material.toneMapped=ge.getTransfer(M.colorSpace)!==Ce,(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ze(new Hn(2,2),new wn({name:"BackgroundMaterial",uniforms:ji(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=ge.getTransfer(M.colorSpace)!==Ce,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,I){E.getRGB(Zo,uc(i)),e.buffers.color.setClear(Zo.r,Zo.g,Zo.b,I,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,I=1){a.set(E),o=I,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Dm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(H,V,tt,G,$){let ct=!1,J=d(H,G,tt,V);r!==J&&(r=J,l(r.object)),ct=f(H,G,tt,$),ct&&g(H,G,tt,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(ct||a)&&(a=!1,M(H,V,tt,G),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return i.createVertexArray()}function l(H){return i.bindVertexArray(H)}function h(H){return i.deleteVertexArray(H)}function d(H,V,tt,G){let $=G.wireframe===!0,ct=n[V.id];ct===void 0&&(ct={},n[V.id]=ct);let J=H.isInstancedMesh===!0?H.id:0,Z=ct[J];Z===void 0&&(Z={},ct[J]=Z);let at=Z[tt.id];at===void 0&&(at={},Z[tt.id]=at);let ht=at[$];return ht===void 0&&(ht=u(c()),at[$]=ht),ht}function u(H){let V=[],tt=[],G=[];for(let $=0;$<e;$++)V[$]=0,tt[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:tt,attributeDivisors:G,object:H,attributes:{},index:null}}function f(H,V,tt,G){let $=r.attributes,ct=V.attributes,J=0,Z=tt.getAttributes();for(let at in Z)if(Z[at].location>=0){let ut=$[at],Mt=ct[at];if(Mt===void 0&&(at==="instanceMatrix"&&H.instanceMatrix&&(Mt=H.instanceMatrix),at==="instanceColor"&&H.instanceColor&&(Mt=H.instanceColor)),ut===void 0||ut.attribute!==Mt||Mt&&ut.data!==Mt.data)return!0;J++}return r.attributesNum!==J||r.index!==G}function g(H,V,tt,G){let $={},ct=V.attributes,J=0,Z=tt.getAttributes();for(let at in Z)if(Z[at].location>=0){let ut=ct[at];ut===void 0&&(at==="instanceMatrix"&&H.instanceMatrix&&(ut=H.instanceMatrix),at==="instanceColor"&&H.instanceColor&&(ut=H.instanceColor));let Mt={};Mt.attribute=ut,ut&&ut.data&&(Mt.data=ut.data),$[at]=Mt,J++}r.attributes=$,r.attributesNum=J,r.index=G}function v(){let H=r.newAttributes;for(let V=0,tt=H.length;V<tt;V++)H[V]=0}function m(H){p(H,0)}function p(H,V){let tt=r.newAttributes,G=r.enabledAttributes,$=r.attributeDivisors;tt[H]=1,G[H]===0&&(i.enableVertexAttribArray(H),G[H]=1),$[H]!==V&&(i.vertexAttribDivisor(H,V),$[H]=V)}function E(){let H=r.newAttributes,V=r.enabledAttributes;for(let tt=0,G=V.length;tt<G;tt++)V[tt]!==H[tt]&&(i.disableVertexAttribArray(tt),V[tt]=0)}function I(H,V,tt,G,$,ct,J){J===!0?i.vertexAttribIPointer(H,V,tt,$,ct):i.vertexAttribPointer(H,V,tt,G,$,ct)}function M(H,V,tt,G){v();let $=G.attributes,ct=tt.getAttributes(),J=V.defaultAttributeValues;for(let Z in ct){let at=ct[Z];if(at.location>=0){let ht=$[Z];if(ht===void 0&&(Z==="instanceMatrix"&&H.instanceMatrix&&(ht=H.instanceMatrix),Z==="instanceColor"&&H.instanceColor&&(ht=H.instanceColor)),ht!==void 0){let ut=ht.normalized,Mt=ht.itemSize,At=t.get(ht);if(At===void 0)continue;let Jt=At.buffer,ne=At.type,ce=At.bytesPerElement,F=ne===i.INT||ne===i.UNSIGNED_INT||ht.gpuType===lo;if(ht.isInterleavedBufferAttribute){let L=ht.data,P=L.stride,R=ht.offset;if(L.isInstancedInterleavedBuffer){for(let O=0;O<at.locationSize;O++)p(at.location+O,L.meshPerAttribute);H.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let O=0;O<at.locationSize;O++)m(at.location+O);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let O=0;O<at.locationSize;O++)I(at.location+O,Mt/at.locationSize,ne,ut,P*ce,(R+Mt/at.locationSize*O)*ce,F)}else{if(ht.isInstancedBufferAttribute){for(let L=0;L<at.locationSize;L++)p(at.location+L,ht.meshPerAttribute);H.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let L=0;L<at.locationSize;L++)m(at.location+L);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let L=0;L<at.locationSize;L++)I(at.location+L,Mt/at.locationSize,ne,ut,Mt*ce,Mt/at.locationSize*L*ce,F)}}else if(J!==void 0){let ut=J[Z];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(at.location,ut);break;case 3:i.vertexAttrib3fv(at.location,ut);break;case 4:i.vertexAttrib4fv(at.location,ut);break;default:i.vertexAttrib1fv(at.location,ut)}}}}E()}function T(){C();for(let H in n){let V=n[H];for(let tt in V){let G=V[tt];for(let $ in G){let ct=G[$];for(let J in ct)h(ct[J].object),delete ct[J];delete G[$]}}delete n[H]}}function A(H){if(n[H.id]===void 0)return;let V=n[H.id];for(let tt in V){let G=V[tt];for(let $ in G){let ct=G[$];for(let J in ct)h(ct[J].object),delete ct[J];delete G[$]}}delete n[H.id]}function U(H){for(let V in n){let tt=n[V];for(let G in tt){let $=tt[G];if($[H.id]===void 0)continue;let ct=$[H.id];for(let J in ct)h(ct[J].object),delete ct[J];delete $[H.id]}}}function x(H){for(let V in n){let tt=n[V],G=H.isInstancedMesh===!0?H.id:0,$=tt[G];if($!==void 0){for(let ct in $){let J=$[ct];for(let Z in J)h(J[Z].object),delete J[Z];delete $[ct]}delete tt[G],Object.keys(tt).length===0&&delete n[V]}}}function C(){B(),a=!0,r!==s&&(r=s,l(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:B,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function Um(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Fm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==Un&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){let x=U===Yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==_n&&U!==Dn&&!x&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(ee("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:I,maxFragmentUniforms:M,maxSamples:T,samples:A}}function Om(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Vn,o=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let E=r?0:n,I=E*4,M=p.clippingState||null;c.value=M,M=h(g,u,I,f);for(let T=0;T!==I;++T)M[T]=e[T];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let I=0,M=f;I!==v;++I,M+=4)a.copy(d[I]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Vs=4,Bm=6,zm=20,km=256,Yr=new Ls,cu=new le,vc=null,Mc=0,Sc=0,bc=!1,Vm=new k,Qi=new k,Hs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Vm}=r;vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vc,Mc,Sc),this._renderer.xr.enabled=bc,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Yn,format:Un,colorSpace:or,depthBuffer:!1},s=hu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gm(r)),this._blurMaterial=Wm(r,t,e),this._ggxMaterial=Hm(r,t,e)}return s}_compileMaterial(t){let e=new ze(new Je,t);this._renderer.compile(e,Yr)}_sceneToCubeUV(t,e,n,s,r){let c=new en(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(cu),d.toneMapping=Xn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new ei,new tn({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,p=!0):(m.color.copy(cu),p=!0);for(let I=0;I<6;I++){let M=I%3;M===0?(c.up.set(0,l[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[I],r.y,r.z)):M===1?(c.up.set(0,0,l[I]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[I],r.z)):(c.up.set(0,l[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[I]));let T=this._cubeSize;ks(s,M*T,I>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(v,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ui||t.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ks(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Yr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Vs?n-g+Vs:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,ks(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Yr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ks(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,Yr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Vs?s-this._lodMax+Vs:0),u=4*(this._cubeSize-h);ks(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(c,Yr)}};function Gm(i){let t=[],e=[],n=i,s=i-Vs+1+Bm;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){let E=p%3*2/3-1,I=p>2?0:-1,M=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];g.set(M,f*u*p);for(let T=0;T<u;T++){let A=h[T*2]*2-1,U=h[T*2+1]*2-1;p===0?Qi.set(1,U,A):p===1?Qi.set(-A,1,-U):p===2?Qi.set(-A,U,1):p===3?Qi.set(-1,U,-A):p===4?Qi.set(-A,-1,U):Qi.set(A,U,-1),Qi.toArray(v,(p*u+T)*f)}}let m=new Je;m.setAttribute("position",new bn(g,f)),m.setAttribute("outputDirection",new bn(v,f)),e.push(new ze(m,null)),n>Vs&&n--}return{lodMeshes:e,sizeLods:t}}function hu(i,t,e){let n=new gn(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Hm(i,t,e){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:km,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Wm(i,t,e){return new wn({name:"SphericalGaussianBlur",defines:{SAMPLES:zm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function uu(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function du(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function jo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $o=class extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ei(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:si});r.uniforms.tEquirect.value=e;let a=new ze(s,r),o=e.minFilter;return e.minFilter===Fi&&(e.minFilter=nn),new eo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Xm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ro||f===ao)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new $o(g.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",l),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===ro||f===ao,v=f===Ui||f===Ki;if(g||v){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Hs(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let E=u.image;return g&&E&&E.height>0||v&&E&&c(E)?(n===null&&(n=new Hs(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===ro?u.mapping=Ui:f===ao&&(u.mapping=Ki),u}function c(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function qm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Hi("WebGLRenderer: "+n+" extension not supported."),s}}}function Ym(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(f!==null){let E=f.array;v=f.version;for(let I=0,M=E.length;I<M;I+=3){let T=E[I+0],A=E[I+1],U=E[I+2];u.push(T,A,A,U,U,T)}}else{let E=g.array;v=g.version;for(let I=0,M=E.length/3-1;I<M;I+=3){let T=I+0,A=I+1,U=I+2;u.push(T,A,A,U,U,T)}}let m=new(g.count>=65535?fr:dr)(u,1);m.version=v;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Zm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Jm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:se("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $m(i,t,e){let n=new WeakMap,s=new Be;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let C=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],I=0;f===!0&&(I=1),g===!0&&(I=2),v===!0&&(I=3);let M=o.attributes.position.count*I,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let A=new Float32Array(M*T*4*d),U=new hr(A,M,T,d);U.type=Dn,U.needsUpdate=!0;let x=I*4;for(let B=0;B<d;B++){let H=m[B],V=p[B],tt=E[B],G=M*T*4*B;for(let $=0;$<H.count;$++){let ct=$*x;f===!0&&(s.fromBufferAttribute(H,$),A[G+ct+0]=s.x,A[G+ct+1]=s.y,A[G+ct+2]=s.z,A[G+ct+3]=0),g===!0&&(s.fromBufferAttribute(V,$),A[G+ct+4]=s.x,A[G+ct+5]=s.y,A[G+ct+6]=s.z,A[G+ct+7]=0),v===!0&&(s.fromBufferAttribute(tt,$),A[G+ct+8]=s.x,A[G+ct+9]=s.y,A[G+ct+10]=s.z,A[G+ct+11]=tt.itemSize===4?s.w:1)}}u={count:d,texture:U,size:new _t(M,T)},n.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Km(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var jm={[Jl]:"LINEAR_TONE_MAPPING",[$l]:"REINHARD_TONE_MAPPING",[Kl]:"CINEON_TONE_MAPPING",[jl]:"ACES_FILMIC_TONE_MAPPING",[tc]:"AGX_TONE_MAPPING",[Or]:"NEUTRAL_TONE_MAPPING",[Ql]:"CUSTOM_TONE_MAPPING"};function Qm(i,t,e,n,s,r){let a=new gn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Je;l.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new _e([0,2,0,0,2,0],2));let h=new Ha({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ze(l,h),u=new Ls(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,E=[],I=!1;this.setSize=function(M,T){a.setSize(M,T),o!==null&&o.setSize(M,T),c!==null&&c.setSize(M,T);for(let A=0;A<E.length;A++){let U=E[A];U.setSize&&U.setSize(M,T)}},this.setEffects=function(M){E=M,I=E.length>0&&E[0].isRenderPass===!0;let T=a.width,A=a.height;E.length>0&&o===null&&(o=new gn(T,A,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),c=new gn(T,A,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<E.length;U++){let x=E[U];x.setSize&&x.setSize(T,A)}},this.begin=function(M,T){if(v||M.toneMapping===Xn&&E.length===0)return!1;if(p=T,T!==null){let A=T.width,U=T.height;(a.width!==A||a.height!==U)&&this.setSize(A,U)}return I===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Xn,!0},this.hasRenderPass=function(){return I},this.end=function(M,T){M.toneMapping=m,v=!0;let A=a,U=o;for(let x=0;x<E.length;x++){let C=E[x];C.enabled!==!1&&(C.render(M,U,A,T),C.needsSwap!==!1&&(A=U,U=U===o?c:o))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,h.defines={},ge.getTransfer(f)===Ce&&(h.defines.SRGB_TRANSFER="");let x=jm[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,M.setRenderTarget(p),M.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Lu=new sn,wc=new Pi(1,1),Nu=new hr,Du=new Na,Uu=new gr,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),_u=new Float32Array(4);function Ws(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=fu[s];if(r===void 0&&(r=new Float32Array(s),fu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function $e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qo(i,t){let e=pu[t];e===void 0&&(e=new Int32Array(t),pu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;_u.set(n),i.uniformMatrix2fv(this.addr,!1,_u),Ke(e,n)}}function rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;gu.set(n),i.uniformMatrix3fv(this.addr,!1,gu),Ke(e,n)}}function ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;mu.set(n),i.uniformMatrix4fv(this.addr,!1,mu),Ke(e,n)}}function og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function ug(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wc.compareFunction=e.isReversedDepthBuffer()?Yo:qo,r=wc):r=Lu,e.setTexture2D(t||r,s)}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Du,s)}function _g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uu,s)}function xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nu,s)}function yg(i){switch(i){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return xg}}function vg(i,t){i.uniform1fv(this.addr,t)}function Mg(i,t){let e=Ws(t,this.size,2);i.uniform2fv(this.addr,e)}function Sg(i,t){let e=Ws(t,this.size,3);i.uniform3fv(this.addr,e)}function bg(i,t){let e=Ws(t,this.size,4);i.uniform4fv(this.addr,e)}function Tg(i,t){let e=Ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Eg(i,t){let e=Ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wg(i,t){let e=Ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ag(i,t){i.uniform1iv(this.addr,t)}function Cg(i,t){i.uniform2iv(this.addr,t)}function Rg(i,t){i.uniform3iv(this.addr,t)}function Pg(i,t){i.uniform4iv(this.addr,t)}function Ig(i,t){i.uniform1uiv(this.addr,t)}function Lg(i,t){i.uniform2uiv(this.addr,t)}function Ng(i,t){i.uniform3uiv(this.addr,t)}function Dg(i,t){i.uniform4uiv(this.addr,t)}function Ug(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=wc:a=Lu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Fg(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Du,r[a])}function Og(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Uu,r[a])}function Bg(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Nu,r[a])}function zg(i){switch(i){case 5126:return vg;case 35664:return Mg;case 35665:return Sg;case 35666:return bg;case 35674:return Tg;case 35675:return Eg;case 35676:return wg;case 5124:case 35670:return Ag;case 35667:case 35671:return Cg;case 35668:case 35672:return Rg;case 35669:case 35673:return Pg;case 5125:return Ig;case 36294:return Lg;case 36295:return Ng;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}var Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yg(e.type)}},Cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zg(e.type)}},Rc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Tc=/(\w+)(\])?(\[|\.)?/g;function xu(i,t){i.seq.push(t),i.map[t.id]=t}function kg(i,t,e){let n=i.name,s=n.length;for(Tc.lastIndex=0;;){let r=Tc.exec(n),a=Tc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){xu(e,l===void 0?new Ac(o,i,t):new Cc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Rc(o),xu(e,d)),e=d}}}var Gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);kg(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function yu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Vg=37297,Gg=0;function Hg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var vu=new $t;function Wg(i){ge._getMatrix(vu,ge.workingColorSpace,i);let t=`mat3( ${vu.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case lr:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Hg(i.getShaderSource(t),o)}else return r}function Xg(i,t){let e=Wg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var qg={[Jl]:"Linear",[$l]:"Reinhard",[Kl]:"Cineon",[jl]:"ACESFilmic",[tc]:"AgX",[Or]:"Neutral",[Ql]:"Custom"};function Yg(i,t){let e=qg[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jo=new k;function Zg(){ge.getLuminanceCoefficients(Jo);let i=Jo.x.toFixed(4),t=Jo.y.toFixed(4),e=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function $g(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Jr(i){return i!==""}function Su(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(i){return i.replace(jg,t0)}var Qg=new Map;function t0(i,t){let e=ue[t];if(e===void 0){let n=Qg.get(t);if(n!==void 0)e=ue[n],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Pc(e)}var e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(i){return i.replace(e0,n0)}function n0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var i0={[Fr]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function s0(i){return i0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var r0={[Ui]:"ENVMAP_TYPE_CUBE",[Ki]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE_UV"};function a0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":r0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var o0={[Ki]:"ENVMAP_MODE_REFRACTION"};function l0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":o0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var c0={[so]:"ENVMAP_BLENDING_MULTIPLY",[Bh]:"ENVMAP_BLENDING_MIX",[zh]:"ENVMAP_BLENDING_ADD"};function h0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":c0[i.combine]||"ENVMAP_BLENDING_NONE"}function u0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function d0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=s0(e),l=a0(e),h=l0(e),d=h0(e),u=u0(e),f=Jg(e),g=$g(r),v=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jr).join(`
`),p.length>0&&(p+=`
`)):(m=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),p=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?ue.tonemapping_pars_fragment:"",e.toneMapping!==Xn?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,Xg("linearToOutputTexel",e.outputColorSpace),Zg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jr).join(`
`)),a=Pc(a),a=Su(a,e),a=bu(a,e),o=Pc(o),o=Su(o,e),o=bu(o,e),a=Tu(a),o=Tu(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let I=E+m+a,M=E+p+o,T=yu(s,s.VERTEX_SHADER,I),A=yu(s,s.FRAGMENT_SHADER,M);s.attachShader(v,T),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function U(H){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(v)||"",tt=s.getShaderInfoLog(T)||"",G=s.getShaderInfoLog(A)||"",$=V.trim(),ct=tt.trim(),J=G.trim(),Z=!0,at=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,A);else{let ht=Mu(s,T,"vertex"),ut=Mu(s,A,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+$+`
`+ht+`
`+ut)}else $!==""?ee("WebGLProgram: Program Info Log:",$):(ct===""||J==="")&&(at=!1);at&&(H.diagnostics={runnable:Z,programLog:$,vertexShader:{log:ct,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(T),s.deleteShader(A),x=new Gs(s,v),C=Kg(s,v)}let x;this.getUniforms=function(){return x===void 0&&U(this),x};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(v,Vg)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=A,this}var f0=0,Ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lc(t),e.set(t,n)),n}},Lc=class{constructor(t){this.id=f0++,this.code=t,this.usedTimes=0}};function p0(i){return i===Bi||i===Wr||i===Xr}function m0(i,t,e,n,s,r){let a=new ur,o=new Ic,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,C,B,H,V,tt){let G=H.fog,$=V.geometry,ct=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?H.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=t.get(x.envMap||ct,J),at=Z&&Z.mapping===Br?Z.image.height:null,ht=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&ee("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Mt=ut!==void 0?ut.length:0,At=0;$.morphAttributes.position!==void 0&&(At=1),$.morphAttributes.normal!==void 0&&(At=2),$.morphAttributes.color!==void 0&&(At=3);let Jt,ne,ce,F;if(ht){let Re=ai[ht];Jt=Re.vertexShader,ne=Re.fragmentShader}else{Jt=x.vertexShader,ne=x.fragmentShader;let Re=o.getVertexShaderStage(x),fe=o.getFragmentShaderStage(x);o.update(x,Re,fe),ce=Re.id,F=fe.id}let L=i.getRenderTarget(),P=i.state.buffers.depth.getReversed(),R=V.isInstancedMesh===!0,O=V.isBatchedMesh===!0,st=!!x.map,xt=!!x.matcap,b=!!Z,D=!!x.aoMap,N=!!x.lightMap,Y=!!x.bumpMap&&x.wireframe===!1,Q=!!x.normalMap,ot=!!x.displacementMap,yt=!!x.emissiveMap,mt=!!x.metalnessMap,q=!!x.roughnessMap,y=x.anisotropy>0,St=x.clearcoat>0,Gt=x.dispersion>0,w=x.retroreflectivity>0,_=x.iridescence>0,W=x.sheen>0,j=x.transmission>0,dt=y&&!!x.anisotropyMap,bt=St&&!!x.clearcoatMap,Ct=St&&!!x.clearcoatNormalMap,it=St&&!!x.clearcoatRoughnessMap,ft=_&&!!x.iridescenceMap,Pt=_&&!!x.iridescenceThicknessMap,Ht=W&&!!x.sheenColorMap,Lt=W&&!!x.sheenRoughnessMap,Et=!!x.specularMap,Yt=!!x.specularColorMap,Kt=!!x.specularIntensityMap,oe=j&&!!x.transmissionMap,X=j&&!!x.thicknessMap,Nt=!!x.gradientMap,pt=!!x.alphaMap,It=x.alphaTest>0,Ut=!!x.alphaHash,vt=!!x.extensions,Zt=Xn;x.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let Wt={shaderID:ht,shaderType:x.type,shaderName:x.name,vertexShader:Jt,fragmentShader:ne,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:F,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:O,batchingColor:O&&V._colorsTexture!==null,instancing:R,instancingColor:R&&V.instanceColor!==null,instancingMorph:R&&V.morphTexture!==null,outputColorSpace:L===null?i.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:st,matcap:xt,envMap:b,envMapMode:b&&Z.mapping,envMapCubeUVHeight:at,aoMap:D,lightMap:N,bumpMap:Y,normalMap:Q,displacementMap:ot,emissiveMap:yt,normalMapObjectSpace:Q&&x.normalMapType===Gh,normalMapTangentSpace:Q&&x.normalMapType===qr,packedNormalMap:Q&&x.normalMapType===qr&&p0(x.normalMap.format),metalnessMap:mt,roughnessMap:q,anisotropy:y,anisotropyMap:dt,clearcoat:St,clearcoatMap:bt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:it,dispersion:Gt,retroreflection:w,iridescence:_,iridescenceMap:ft,iridescenceThicknessMap:Pt,sheen:W,sheenColorMap:Ht,sheenRoughnessMap:Lt,specularMap:Et,specularColorMap:Yt,specularIntensityMap:Kt,transmission:j,transmissionMap:oe,thicknessMap:X,gradientMap:Nt,opaque:x.transparent===!1&&x.blending===Fs&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:It,alphaHash:Ut,combine:x.combine,mapUv:st&&g(x.map.channel),aoMapUv:D&&g(x.aoMap.channel),lightMapUv:N&&g(x.lightMap.channel),bumpMapUv:Y&&g(x.bumpMap.channel),normalMapUv:Q&&g(x.normalMap.channel),displacementMapUv:ot&&g(x.displacementMap.channel),emissiveMapUv:yt&&g(x.emissiveMap.channel),metalnessMapUv:mt&&g(x.metalnessMap.channel),roughnessMapUv:q&&g(x.roughnessMap.channel),anisotropyMapUv:dt&&g(x.anisotropyMap.channel),clearcoatMapUv:bt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&g(x.sheenRoughnessMap.channel),specularMapUv:Et&&g(x.specularMap.channel),specularColorMapUv:Yt&&g(x.specularColorMap.channel),specularIntensityMapUv:Kt&&g(x.specularIntensityMap.channel),transmissionMapUv:oe&&g(x.transmissionMap.channel),thicknessMapUv:X&&g(x.thicknessMap.channel),alphaMapUv:pt&&g(x.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Q||y),vertexNormals:!!$.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!$.attributes.uv&&(st||pt),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||$.attributes.normal===void 0&&Q===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:P,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:At,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:tt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:st&&x.map.isVideoTexture===!0&&ge.getTransfer(x.map.colorSpace)===Ce,decodeVideoTextureEmissive:yt&&x.emissiveMap.isVideoTexture===!0&&ge.getTransfer(x.emissiveMap.colorSpace)===Ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Rn,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:vt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&x.extensions.multiDraw===!0||O)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function m(x){let C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(let B in x.defines)C.push(B),C.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(p(C,x),E(C,x),C.push(i.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function p(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numSunLights),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numSunLightShadows),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function E(x,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function I(x){let C=f[x.type],B;if(C){let H=ai[C];B=au.clone(H.uniforms)}else B=x.uniforms;return B}function M(x,C){let B=h.get(C);return B!==void 0?++B.usedTimes:(B=new d0(i,C,x,s),l.push(B),h.set(C,B)),B}function T(x){if(--x.usedTimes===0){let C=l.indexOf(x);l[C]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function U(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:I,acquireProgram:M,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:U}}function g0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function wu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Au(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,m,p){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},i[t]=E):(E.id=u.id,E.object=u,E.geometry=f,E.material=g,E.materialVariant=a(u),E.groupOrder=v,E.renderOrder=u.renderOrder,E.z=m,E.group=p),t++,E}function c(u,f,g,v,m,p,E){E.reversedDepth===!0&&(m=-m);let I=o(u,f,g,v,m,p);g.transmission>0?n.push(I):g.transparent===!0?s.push(I):e.push(I)}function l(u,f,g,v,m,p){let E=o(u,f,g,v,m,p);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,f){e.length>1&&e.sort(u||_0),n.length>1&&n.sort(f||wu),s.length>1&&s.sort(f||wu)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function x0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Au,i.set(n,[a])):s>=r.length?(a=new Au,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function y0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new le};break;case"SpotLight":e={position:new k,direction:new k,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function v0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var M0=0;function S0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function b0(i){let t=new y0,e=v0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);let s=new k,r=new Ne,a=new Ne;function o(l){let h=0,d=0,u=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,E=0,I=0,M=0,T=0,A=0,U=0,x=0,C=0,B=0;l.sort(S0);for(let V=0,tt=l.length;V<tt;V++){let G=l[V],$=G.color,ct=G.intensity,J=G.distance,Z=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Bi?Z=G.shadow.map.texture:Z=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)h+=$.r*ct,d+=$.g*ct,u+=$.b*ct;else if(G.isLightProbe){for(let at=0;at<9;at++)n.probe[at].addScaledVector(G.sh.coefficients[at],ct);B++}else if(G.isSunLight){let at=t.get(G);if(at.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let ht=G.shadow,ut=e.get(G);ut.shadowIntensity=ht.intensity,ut.shadowBias=ht.bias,ut.shadowNormalBias=ht.normalBias,ut.shadowRadius=ht.radius,ut.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),n.sunShadow[g]=ut,n.sunShadowMap[g]=Z;let Mt=ht.getViewportCount();for(let At=0;At<Mt;At++)n.sunShadowMatrix[v+At]=ht.getMatrix(At),n.sunShadowCascade[v+At]=ht._cascadeData[At];v+=Mt,g++}n.sun[f]=at,f++}else if(G.isDirectionalLight){let at=t.get(G);if(at.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let ht=G.shadow,ut=e.get(G);ut.shadowIntensity=ht.intensity,ut.shadowBias=ht.bias,ut.shadowNormalBias=ht.normalBias,ut.shadowRadius=ht.radius,ut.shadowMapSize=ht.mapSize,n.directionalShadow[m]=ut,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=G.shadow.matrix,T++}n.directional[m]=at,m++}else if(G.isSpotLight){let at=t.get(G);at.position.setFromMatrixPosition(G.matrixWorld),at.color.copy($).multiplyScalar(ct),at.distance=J,at.coneCos=Math.cos(G.angle),at.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),at.decay=G.decay,n.spot[E]=at;let ht=G.shadow;if(G.map&&(n.spotLightMap[x]=G.map,x++,ht.updateMatrices(G),G.castShadow&&C++),n.spotLightMatrix[E]=ht.matrix,G.castShadow){let ut=e.get(G);ut.shadowIntensity=ht.intensity,ut.shadowBias=ht.bias,ut.shadowNormalBias=ht.normalBias,ut.shadowRadius=ht.radius,ut.shadowMapSize=ht.mapSize,n.spotShadow[E]=ut,n.spotShadowMap[E]=Z,U++}E++}else if(G.isRectAreaLight){let at=t.get(G);at.color.copy($).multiplyScalar(ct),at.halfWidth.set(G.width*.5,0,0),at.halfHeight.set(0,G.height*.5,0),n.rectArea[I]=at,I++}else if(G.isPointLight){let at=t.get(G);if(at.color.copy(G.color).multiplyScalar(G.intensity),at.distance=G.distance,at.decay=G.decay,G.castShadow){let ht=G.shadow,ut=e.get(G);ut.shadowIntensity=ht.intensity,ut.shadowBias=ht.bias,ut.shadowNormalBias=ht.normalBias,ut.shadowRadius=ht.radius,ut.shadowMapSize=ht.mapSize,ut.shadowCameraNear=ht.camera.near,ut.shadowCameraFar=ht.camera.far,n.pointShadow[p]=ut,n.pointShadowMap[p]=Z,n.pointShadowMatrix[p]=G.shadow.matrix,A++}n.point[p]=at,p++}else if(G.isHemisphereLight){let at=t.get(G);at.skyColor.copy(G.color).multiplyScalar(ct),at.groundColor.copy(G.groundColor).multiplyScalar(ct),n.hemi[M]=at,M++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let H=n.hash;(H.sunLength!==f||H.directionalLength!==m||H.pointLength!==p||H.spotLength!==E||H.rectAreaLength!==I||H.hemiLength!==M||H.numSunShadows!==g||H.numDirectionalShadows!==T||H.numPointShadows!==A||H.numSpotShadows!==U||H.numSpotMaps!==x||H.numLightProbes!==B)&&(n.sun.length=f,n.directional.length=m,n.spot.length=E,n.rectArea.length=I,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=U,n.spotShadowMap.length=U,n.spotLightMatrix.length=U+x-C,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=B,H.sunLength=f,H.directionalLength=m,H.pointLength=p,H.spotLength=E,H.rectAreaLength=I,H.hemiLength=M,H.numSunShadows=g,H.numDirectionalShadows=T,H.numPointShadows=A,H.numSpotShadows=U,H.numSpotMaps=x,H.numLightProbes=B,n.version=M0++)}function c(l,h){let d=0,u=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let E=0,I=l.length;E<I;E++){let M=l[E];if(M.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(M.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let T=n.rectArea[v];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Cu(i){let t=new b0(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function T0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Cu(i),t.set(s,[o])):r>=a.length?(o=new Cu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var E0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,A0=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],C0=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Ru=new Ne,Zr=new k,Ec=new k;function R0(i,t,e){let n=new ws,s=new _t,r=new _t,a=new Be,o=new Wa,c=new Xa,l={},h=e.maxTextureSize,d={[Di]:an,[an]:Di,[Rn]:Rn},u=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:E0,fragmentShader:w0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Je;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ze(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fr;let p=this.type;this.render=function(A,U,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===yh&&(ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fr);let C=i.getRenderTarget(),B=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),V=i.state;V.setBlending(si),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let tt=p!==this.type;tt&&U.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach($=>$.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,$=A.length;G<$;G++){let ct=A[G],J=ct.shadow;if(J===void 0){ee("WebGLShadowMap:",ct,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let Z=J.getFrameExtents();s.multiply(Z),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,J.mapSize.y=r.y));let at=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=at,J.map===null||tt===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Us){if(ct.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new gn(s.x,s.y,{format:Bi,type:Yn,minFilter:nn,magFilter:nn,generateMipmaps:!1}),J.map.texture.name=ct.name+".shadowMap",J.map.depthTexture=new Pi(s.x,s.y,Dn),J.map.depthTexture.name=ct.name+".shadowMapDepth",J.map.depthTexture.format=jn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Qe,J.map.depthTexture.magFilter=Qe}else ct.isPointLight?(J.map=new $o(s.x),J.map.depthTexture=new Ua(s.x,qn)):(J.map=new gn(s.x,s.y),J.map.depthTexture=new Pi(s.x,s.y,qn)),J.map.depthTexture.name=ct.name+".shadowMap",J.map.depthTexture.format=jn,this.type===Fr?(J.map.depthTexture.compareFunction=at?Yo:qo,J.map.depthTexture.minFilter=nn,J.map.depthTexture.magFilter=nn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Qe,J.map.depthTexture.magFilter=Qe);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let ht=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();ct.isPointLight!==!0&&J.updateMatrices(ct,x);for(let ut=0;ut<ht;ut++){let Mt=J.getCamera(ut);if(ct.isPointLight){let At=J.camera,Jt=J.matrix,ne=ct.distance||At.far;ne!==At.far&&(At.far=ne,At.updateProjectionMatrix()),Zr.setFromMatrixPosition(ct.matrixWorld),At.position.copy(Zr),Ec.copy(At.position),Ec.add(A0[ut]),At.up.copy(C0[ut]),At.lookAt(Ec),At.updateMatrixWorld(),Jt.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Ru.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Ru,At.coordinateSystem,At.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,ut),i.clear();else{ut===0&&(i.setRenderTarget(J.map),i.clear());let At=J.getViewport(ut);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),V.viewport(a)}n=J.getFrustum(ut),M(U,x,Mt,ct,this.type)}J.isPointLightShadow!==!0&&this.type===Us&&E(J,x),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(C,B,H)};function E(A,U){let x=t.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new gn(s.x,s.y,{format:Bi,type:Yn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(U,null,x,u,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(U,null,x,f,v,null)}function I(A,U,x,C){let B=null,H=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(H!==void 0)B=H;else if(B=x.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let V=B.uuid,tt=U.uuid,G=l[V];G===void 0&&(G={},l[V]=G);let $=G[tt];$===void 0&&($=B.clone(),G[tt]=$,U.addEventListener("dispose",T)),B=$}if(B.visible=U.visible,B.wireframe=U.wireframe,C===Us?B.side=U.shadowSide!==null?U.shadowSide:U.side:B.side=U.shadowSide!==null?U.shadowSide:d[U.side],B.alphaMap=U.alphaMap,B.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,B.map=U.map,B.clipShadows=U.clipShadows,B.clippingPlanes=U.clippingPlanes,B.clipIntersection=U.clipIntersection,B.displacementMap=U.displacementMap,B.displacementScale=U.displacementScale,B.displacementBias=U.displacementBias,B.wireframeLinewidth=U.wireframeLinewidth,B.linewidth=U.linewidth,x.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let V=i.properties.get(B);V.light=x}return B}function M(A,U,x,C,B){if(A.visible===!1)return;if(A.layers.test(U.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&B===Us)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let tt=t.update(A),G=A.material;if(Array.isArray(G)){let $=tt.groups;for(let ct=0,J=$.length;ct<J;ct++){let Z=$[ct],at=G[Z.materialIndex];if(at&&at.visible){let ht=I(A,at,C,B);A.onBeforeShadow(i,A,U,x,tt,ht,Z),i.renderBufferDirect(x,null,tt,ht,A,Z),A.onAfterShadow(i,A,U,x,tt,ht,Z)}}}else if(G.visible){let $=I(A,G,C,B);A.onBeforeShadow(i,A,U,x,tt,$,null),i.renderBufferDirect(x,null,tt,$,A,null),A.onAfterShadow(i,A,U,x,tt,$,null)}}let V=A.children;for(let tt=0,G=V.length;tt<G;tt++)M(V[tt],U,x,C,B)}function T(A){A.target.removeEventListener("dispose",T);for(let x in l){let C=l[x],B=A.target.uuid;B in C&&(C[B].dispose(),delete C[B])}}}function P0(i,t){function e(){let X=!1,Nt=new Be,pt=null,It=new Be(0,0,0,0);return{setMask:function(Ut){pt!==Ut&&!X&&(i.colorMask(Ut,Ut,Ut,Ut),pt=Ut)},setLocked:function(Ut){X=Ut},setClear:function(Ut,vt,Zt,Wt,Re){Re===!0&&(Ut*=Wt,vt*=Wt,Zt*=Wt),Nt.set(Ut,vt,Zt,Wt),It.equals(Nt)===!1&&(i.clearColor(Ut,vt,Zt,Wt),It.copy(Nt))},reset:function(){X=!1,pt=null,It.set(-1,0,0,0)}}}function n(){let X=!1,Nt=!1,pt=null,It=null,Ut=null;return{setReversed:function(vt){if(Nt!==vt){let Zt=t.get("EXT_clip_control");vt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Nt=vt;let Wt=Ut;Ut=null,this.setClear(Wt)}},getReversed:function(){return Nt},setTest:function(vt){vt?L(i.DEPTH_TEST):P(i.DEPTH_TEST)},setMask:function(vt){pt!==vt&&!X&&(i.depthMask(vt),pt=vt)},setFunc:function(vt){if(Nt&&(vt=tu[vt]),It!==vt){switch(vt){case Sa:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case Ea:i.depthFunc(i.EQUAL);break;case wa:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=vt}},setLocked:function(vt){X=vt},setClear:function(vt){Ut!==vt&&(Ut=vt,Nt&&(vt=1-vt),i.clearDepth(vt))},reset:function(){X=!1,pt=null,It=null,Ut=null,Nt=!1}}}function s(){let X=!1,Nt=null,pt=null,It=null,Ut=null,vt=null,Zt=null,Wt=null,Re=null;return{setTest:function(fe){X||(fe?L(i.STENCIL_TEST):P(i.STENCIL_TEST))},setMask:function(fe){Nt!==fe&&!X&&(i.stencilMask(fe),Nt=fe)},setFunc:function(fe,on,yn){(pt!==fe||It!==on||Ut!==yn)&&(i.stencilFunc(fe,on,yn),pt=fe,It=on,Ut=yn)},setOp:function(fe,on,yn){(vt!==fe||Zt!==on||Wt!==yn)&&(i.stencilOp(fe,on,yn),vt=fe,Zt=on,Wt=yn)},setLocked:function(fe){X=fe},setClear:function(fe){Re!==fe&&(i.clearStencil(fe),Re=fe)},reset:function(){X=!1,Nt=null,pt=null,It=null,Ut=null,vt=null,Zt=null,Wt=null,Re=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,E=null,I=null,M=null,T=null,A=null,U=null,x=new le(0,0,0),C=0,B=!1,H=null,V=null,tt=null,G=null,$=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Z=0,at=i.getParameter(i.VERSION);at.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(at)[1]),J=Z>=1):at.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),J=Z>=2);let ht=null,ut={},Mt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),Jt=new Be().fromArray(Mt),ne=new Be().fromArray(At);function ce(X,Nt,pt,It){let Ut=new Uint8Array(4),vt=i.createTexture();i.bindTexture(X,vt),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<pt;Zt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Nt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(Nt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return vt}let F={};F[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),F[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),F[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),L(i.DEPTH_TEST),a.setFunc(ys),Y(!1),Q(Hl),L(i.CULL_FACE),D(si);function L(X){h[X]!==!0&&(i.enable(X),h[X]=!0)}function P(X){h[X]!==!1&&(i.disable(X),h[X]=!1)}function R(X,Nt){return u[X]!==Nt?(i.bindFramebuffer(X,Nt),u[X]=Nt,X===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Nt),X===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Nt),!0):!1}function O(X,Nt){let pt=g,It=!1;if(X){pt=f.get(Nt),pt===void 0&&(pt=[],f.set(Nt,pt));let Ut=X.textures;if(pt.length!==Ut.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Zt=Ut.length;vt<Zt;vt++)pt[vt]=i.COLOR_ATTACHMENT0+vt;pt.length=Ut.length,It=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,It=!0);It&&i.drawBuffers(pt)}function st(X){return v!==X?(i.useProgram(X),v=X,!0):!1}let xt={[$i]:i.FUNC_ADD,[Mh]:i.FUNC_SUBTRACT,[Sh]:i.FUNC_REVERSE_SUBTRACT};xt[bh]=i.MIN,xt[Th]=i.MAX;let b={[Eh]:i.ZERO,[wh]:i.ONE,[Ah]:i.SRC_COLOR,[Yl]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[Ih]:i.DST_COLOR,[Rh]:i.DST_ALPHA,[Ch]:i.ONE_MINUS_SRC_COLOR,[Zl]:i.ONE_MINUS_SRC_ALPHA,[Lh]:i.ONE_MINUS_DST_COLOR,[Ph]:i.ONE_MINUS_DST_ALPHA,[Dh]:i.CONSTANT_COLOR,[Uh]:i.ONE_MINUS_CONSTANT_COLOR,[Fh]:i.CONSTANT_ALPHA,[Oh]:i.ONE_MINUS_CONSTANT_ALPHA};function D(X,Nt,pt,It,Ut,vt,Zt,Wt,Re,fe){if(X===si){m===!0&&(P(i.BLEND),m=!1);return}if(m===!1&&(L(i.BLEND),m=!0),X!==vh){if(X!==p||fe!==B){if((E!==$i||T!==$i)&&(i.blendEquation(i.FUNC_ADD),E=$i,T=$i),fe)switch(X){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",X);break}else switch(X){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xl:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ql:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",X);break}I=null,M=null,A=null,U=null,x.set(0,0,0),C=0,p=X,B=fe}return}Ut=Ut||Nt,vt=vt||pt,Zt=Zt||It,(Nt!==E||Ut!==T)&&(i.blendEquationSeparate(xt[Nt],xt[Ut]),E=Nt,T=Ut),(pt!==I||It!==M||vt!==A||Zt!==U)&&(i.blendFuncSeparate(b[pt],b[It],b[vt],b[Zt]),I=pt,M=It,A=vt,U=Zt),(Wt.equals(x)===!1||Re!==C)&&(i.blendColor(Wt.r,Wt.g,Wt.b,Re),x.copy(Wt),C=Re),p=X,B=!1}function N(X,Nt){X.side===Rn?P(i.CULL_FACE):L(i.CULL_FACE);let pt=X.side===an;Nt&&(pt=!pt),Y(pt),X.blending===Fs&&X.transparent===!1?D(si):D(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),r.setMask(X.colorWrite);let It=X.stencilWrite;o.setTest(It),It&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),yt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?L(i.SAMPLE_ALPHA_TO_COVERAGE):P(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(X){H!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),H=X)}function Q(X){X!==_h?(L(i.CULL_FACE),X!==V&&(X===Hl?i.cullFace(i.BACK):X===xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):P(i.CULL_FACE),V=X}function ot(X){X!==tt&&(J&&i.lineWidth(X),tt=X)}function yt(X,Nt,pt){X?(L(i.POLYGON_OFFSET_FILL),(G!==Nt||$!==pt)&&(G=Nt,$=pt,a.getReversed()&&(Nt=-Nt),i.polygonOffset(Nt,pt))):P(i.POLYGON_OFFSET_FILL)}function mt(X){X?L(i.SCISSOR_TEST):P(i.SCISSOR_TEST)}function q(X){X===void 0&&(X=i.TEXTURE0+ct-1),ht!==X&&(i.activeTexture(X),ht=X)}function y(X,Nt,pt){pt===void 0&&(ht===null?pt=i.TEXTURE0+ct-1:pt=ht);let It=ut[pt];It===void 0&&(It={type:void 0,texture:void 0},ut[pt]=It),(It.type!==X||It.texture!==Nt)&&(ht!==pt&&(i.activeTexture(pt),ht=pt),i.bindTexture(X,Nt||F[X]),It.type=X,It.texture=Nt)}function St(){let X=ut[ht];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Gt(){try{i.compressedTexImage2D(...arguments)}catch(X){se("WebGLState:",X)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(X){se("WebGLState:",X)}}function _(){try{i.texSubImage2D(...arguments)}catch(X){se("WebGLState:",X)}}function W(){try{i.texSubImage3D(...arguments)}catch(X){se("WebGLState:",X)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(X){se("WebGLState:",X)}}function dt(){try{i.compressedTexSubImage3D(...arguments)}catch(X){se("WebGLState:",X)}}function bt(){try{i.texStorage2D(...arguments)}catch(X){se("WebGLState:",X)}}function Ct(){try{i.texStorage3D(...arguments)}catch(X){se("WebGLState:",X)}}function it(){try{i.texImage2D(...arguments)}catch(X){se("WebGLState:",X)}}function ft(){try{i.texImage3D(...arguments)}catch(X){se("WebGLState:",X)}}function Pt(X){return d[X]!==void 0?d[X]:i.getParameter(X)}function Ht(X,Nt){d[X]!==Nt&&(i.pixelStorei(X,Nt),d[X]=Nt)}function Lt(X){Jt.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Jt.copy(X))}function Et(X){ne.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),ne.copy(X))}function Yt(X,Nt){let pt=l.get(Nt);pt===void 0&&(pt=new WeakMap,l.set(Nt,pt));let It=pt.get(X);It===void 0&&(It=i.getUniformBlockIndex(Nt,X.name),pt.set(X,It))}function Kt(X,Nt){let It=l.get(Nt).get(X);c.get(Nt)!==It&&(i.uniformBlockBinding(Nt,It,X.__bindingPointIndex),c.set(Nt,It))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ht=null,ut={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,E=null,I=null,M=null,T=null,A=null,U=null,x=new le(0,0,0),C=0,B=!1,H=null,V=null,tt=null,G=null,$=null,Jt.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:L,disable:P,bindFramebuffer:R,drawBuffers:O,useProgram:st,setBlending:D,setMaterial:N,setFlipSided:Y,setCullFace:Q,setLineWidth:ot,setPolygonOffset:yt,setScissorTest:mt,activeTexture:q,bindTexture:y,unbindTexture:St,compressedTexImage2D:Gt,compressedTexImage3D:w,texImage2D:it,texImage3D:ft,pixelStorei:Ht,getParameter:Pt,updateUBOMapping:Yt,uniformBlockBinding:Kt,texStorage2D:bt,texStorage3D:Ct,texSubImage2D:_,texSubImage3D:W,compressedTexSubImage2D:j,compressedTexSubImage3D:dt,scissor:Lt,viewport:Et,reset:oe}}function I0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,_){return g?new OffscreenCanvas(w,_):cr("canvas")}function m(w,_,W){let j=1,dt=Gt(w);if((dt.width>W||dt.height>W)&&(j=W/Math.max(dt.width,dt.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let bt=Math.floor(j*dt.width),Ct=Math.floor(j*dt.height);u===void 0&&(u=v(bt,Ct));let it=_?v(bt,Ct):u;return it.width=bt,it.height=Ct,it.getContext("2d").drawImage(w,0,0,bt,Ct),ee("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+bt+"x"+Ct+")."),it}else return"data"in w&&ee("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),w;return w}function p(w){return w.generateMipmaps}function E(w){i.generateMipmap(w)}function I(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(w,_,W,j,dt,bt=!1){if(w!==null){if(i[w]!==void 0)return i[w];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Ct;j&&(Ct=t.get("EXT_texture_norm16"),Ct||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=_;if(_===i.RED&&(W===i.FLOAT&&(it=i.R32F),W===i.HALF_FLOAT&&(it=i.R16F),W===i.UNSIGNED_BYTE&&(it=i.R8),W===i.UNSIGNED_SHORT&&Ct&&(it=Ct.R16_EXT),W===i.SHORT&&Ct&&(it=Ct.R16_SNORM_EXT)),_===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.R8UI),W===i.UNSIGNED_SHORT&&(it=i.R16UI),W===i.UNSIGNED_INT&&(it=i.R32UI),W===i.BYTE&&(it=i.R8I),W===i.SHORT&&(it=i.R16I),W===i.INT&&(it=i.R32I)),_===i.RG&&(W===i.FLOAT&&(it=i.RG32F),W===i.HALF_FLOAT&&(it=i.RG16F),W===i.UNSIGNED_BYTE&&(it=i.RG8),W===i.UNSIGNED_SHORT&&Ct&&(it=Ct.RG16_EXT),W===i.SHORT&&Ct&&(it=Ct.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RG8UI),W===i.UNSIGNED_SHORT&&(it=i.RG16UI),W===i.UNSIGNED_INT&&(it=i.RG32UI),W===i.BYTE&&(it=i.RG8I),W===i.SHORT&&(it=i.RG16I),W===i.INT&&(it=i.RG32I)),_===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGB8UI),W===i.UNSIGNED_SHORT&&(it=i.RGB16UI),W===i.UNSIGNED_INT&&(it=i.RGB32UI),W===i.BYTE&&(it=i.RGB8I),W===i.SHORT&&(it=i.RGB16I),W===i.INT&&(it=i.RGB32I)),_===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),W===i.UNSIGNED_INT&&(it=i.RGBA32UI),W===i.BYTE&&(it=i.RGBA8I),W===i.SHORT&&(it=i.RGBA16I),W===i.INT&&(it=i.RGBA32I)),_===i.RGB&&(W===i.UNSIGNED_SHORT&&Ct&&(it=Ct.RGB16_EXT),W===i.SHORT&&Ct&&(it=Ct.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),_===i.RGBA){let ft=bt?lr:ge.getTransfer(dt);W===i.FLOAT&&(it=i.RGBA32F),W===i.HALF_FLOAT&&(it=i.RGBA16F),W===i.UNSIGNED_BYTE&&(it=ft===Ce?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&Ct&&(it=Ct.RGBA16_EXT),W===i.SHORT&&Ct&&(it=Ct.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function T(w,_){let W;return w?_===null||_===qn||_===Bs?W=i.DEPTH24_STENCIL8:_===Dn?W=i.DEPTH32F_STENCIL8:_===Os&&(W=i.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qn||_===Bs?W=i.DEPTH_COMPONENT24:_===Dn?W=i.DEPTH_COMPONENT32F:_===Os&&(W=i.DEPTH_COMPONENT16),W}function A(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Qe&&w.minFilter!==nn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function U(w){let _=w.target;_.removeEventListener("dispose",U),C(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(w){let _=w.target;_.removeEventListener("dispose",x),H(_)}function C(w){let _=n.get(w);if(_.__webglInit===void 0)return;let W=w.source,j=f.get(W);if(j){let dt=j[_.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&B(w),Object.keys(j).length===0&&f.delete(W)}n.remove(w)}function B(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let W=w.source,j=f.get(W);delete j[_.__cacheKey],a.memory.textures--}function H(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let dt=0;dt<_.__webglFramebuffer[j].length;dt++)i.deleteFramebuffer(_.__webglFramebuffer[j][dt]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let W=w.textures;for(let j=0,dt=W.length;j<dt;j++){let bt=n.get(W[j]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(W[j])}n.remove(w)}let V=0;function tt(){V=0}function G(){return V}function $(w){V=w}function ct(){let w=V;return w>=s.maxTextures&&ee("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,w}function J(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function Z(w,_){let W=n.get(w);if(w.isVideoTexture&&y(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&W.__version!==w.version){let j=w.image;if(j===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{P(W,w,_);return}}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+_)}function at(w,_){let W=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){P(W,w,_);return}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+_)}function ht(w,_){let W=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){P(W,w,_);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+_)}function ut(w,_){let W=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&W.__version!==w.version){R(W,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+_)}let Mt={[vs]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[Ms]:i.MIRRORED_REPEAT},At={[Qe]:i.NEAREST,[kh]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},Jt={[Wh]:i.NEVER,[Jh]:i.ALWAYS,[Xh]:i.LESS,[qo]:i.LEQUAL,[qh]:i.EQUAL,[Yo]:i.GEQUAL,[Yh]:i.GREATER,[Zh]:i.NOTEQUAL};function ne(w,_){if(_.type===Dn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===nn||_.magFilter===oo||_.magFilter===zr||_.magFilter===Fi||_.minFilter===nn||_.minFilter===oo||_.minFilter===zr||_.minFilter===Fi)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Mt[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Mt[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Mt[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,At[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,At[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Jt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Qe||_.minFilter!==zr&&_.minFilter!==Fi||_.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ce(w,_){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",U));let j=_.source,dt=f.get(j);dt===void 0&&(dt={},f.set(j,dt));let bt=J(_);if(bt!==w.__cacheKey){dt[bt]===void 0&&(dt[bt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),dt[bt].usedTimes++;let Ct=dt[w.__cacheKey];Ct!==void 0&&(dt[w.__cacheKey].usedTimes--,Ct.usedTimes===0&&B(_)),w.__cacheKey=bt,w.__webglTexture=dt[bt].texture}return W}function F(w,_,W){return Math.floor(Math.floor(w/W)/_)}function L(w,_,W,j){let bt=w.updateRanges;if(bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,W,j,_.data);else{bt.sort((Ht,Lt)=>Ht.start-Lt.start);let Ct=0;for(let Ht=1;Ht<bt.length;Ht++){let Lt=bt[Ct],Et=bt[Ht],Yt=Lt.start+Lt.count,Kt=F(Et.start,_.width,4),oe=F(Lt.start,_.width,4);Et.start<=Yt+1&&Kt===oe&&F(Et.start+Et.count-1,_.width,4)===Kt?Lt.count=Math.max(Lt.count,Et.start+Et.count-Lt.start):(++Ct,bt[Ct]=Et)}bt.length=Ct+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),ft=e.getParameter(i.UNPACK_SKIP_PIXELS),Pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ht=0,Lt=bt.length;Ht<Lt;Ht++){let Et=bt[Ht],Yt=Math.floor(Et.start/4),Kt=Math.ceil(Et.count/4),oe=Yt%_.width,X=Math.floor(Yt/_.width),Nt=Kt,pt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,oe,X,Nt,pt,W,j,_.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function P(w,_,W){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);let dt=ce(w,_),bt=_.source;e.bindTexture(j,w.__webglTexture,i.TEXTURE0+W);let Ct=n.get(bt);if(bt.version!==Ct.__version||dt===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let pt=ge.getPrimaries(ge.workingColorSpace),It=_.colorSpace===gi?null:ge.getPrimaries(_.colorSpace),Ut=_.colorSpace===gi||pt===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ft=m(_.image,!1,s.maxTextureSize);ft=St(_,ft);let Pt=r.convert(_.format,_.colorSpace),Ht=r.convert(_.type),Lt=M(_.internalFormat,Pt,Ht,_.normalized,_.colorSpace,_.isVideoTexture);ne(j,_);let Et,Yt=_.mipmaps,Kt=_.isVideoTexture!==!0,oe=Ct.__version===void 0||dt===!0,X=bt.dataReady,Nt=A(_,ft);if(_.isDepthTexture)Lt=T(_.format===Oi,_.type),oe&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Lt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Lt,ft.width,ft.height,0,Pt,Ht,null));else if(_.isDataTexture)if(Yt.length>0){Kt&&oe&&e.texStorage2D(i.TEXTURE_2D,Nt,Lt,Yt[0].width,Yt[0].height);for(let pt=0,It=Yt.length;pt<It;pt++)Et=Yt[pt],Kt?X&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Et.width,Et.height,Pt,Ht,Et.data):e.texImage2D(i.TEXTURE_2D,pt,Lt,Et.width,Et.height,0,Pt,Ht,Et.data);_.generateMipmaps=!1}else Kt?(oe&&e.texStorage2D(i.TEXTURE_2D,Nt,Lt,ft.width,ft.height),X&&L(_,ft,Pt,Ht)):e.texImage2D(i.TEXTURE_2D,0,Lt,ft.width,ft.height,0,Pt,Ht,ft.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Kt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,Lt,Yt[0].width,Yt[0].height,ft.depth);for(let pt=0,It=Yt.length;pt<It;pt++)if(Et=Yt[pt],_.format!==Un)if(Pt!==null)if(Kt){if(X)if(_.layerUpdates.size>0){let Ut=pc(Et.width,Et.height,_.format,_.type);for(let vt of _.layerUpdates){let Zt=Et.data.subarray(vt*Ut/Et.data.BYTES_PER_ELEMENT,(vt+1)*Ut/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,vt,Et.width,Et.height,1,Pt,Zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Et.width,Et.height,ft.depth,Pt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Lt,Et.width,Et.height,ft.depth,0,Et.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Et.width,Et.height,ft.depth,Pt,Ht,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Lt,Et.width,Et.height,ft.depth,0,Pt,Ht,Et.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Kt&&oe&&e.texStorage2D(i.TEXTURE_2D,Nt,Lt,Yt[0].width,Yt[0].height);for(let pt=0,It=Yt.length;pt<It;pt++)Et=Yt[pt],_.format!==Un?Pt!==null?Kt?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,Et.width,Et.height,Pt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Lt,Et.width,Et.height,0,Et.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?X&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Et.width,Et.height,Pt,Ht,Et.data):e.texImage2D(i.TEXTURE_2D,pt,Lt,Et.width,Et.height,0,Pt,Ht,Et.data)}else if(_.isDataArrayTexture)if(Kt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,Lt,ft.width,ft.height,ft.depth),X)if(_.layerUpdates.size>0){let pt=pc(ft.width,ft.height,_.format,_.type);for(let It of _.layerUpdates){let Ut=ft.data.subarray(It*pt/ft.data.BYTES_PER_ELEMENT,(It+1)*pt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,It,ft.width,ft.height,1,Pt,Ht,Ut)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Pt,Ht,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,ft.width,ft.height,ft.depth,0,Pt,Ht,ft.data);else if(_.isData3DTexture)Kt?(oe&&e.texStorage3D(i.TEXTURE_3D,Nt,Lt,ft.width,ft.height,ft.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Pt,Ht,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,ft.width,ft.height,ft.depth,0,Pt,Ht,ft.data);else if(_.isFramebufferTexture){if(oe)if(Kt)e.texStorage2D(i.TEXTURE_2D,Nt,Lt,ft.width,ft.height);else{let pt=ft.width,It=ft.height;for(let Ut=0;Ut<Nt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Lt,pt,It,0,Pt,Ht,null),pt>>=1,It>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let pt=i.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),ft.parentNode!==pt){pt.appendChild(ft),d.add(_),pt.onpaint=It=>{let Ut=It.changedElements;for(let vt of d)Ut.includes(vt.image)&&(vt.needsUpdate=!0)},pt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ft);else{let Ut=i.RGBA,vt=i.RGBA,Zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ut,vt,Zt,ft)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(Kt&&oe){let pt=Gt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Nt,Lt,pt.width,pt.height)}for(let pt=0,It=Yt.length;pt<It;pt++)Et=Yt[pt],Kt?X&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Pt,Ht,Et):e.texImage2D(i.TEXTURE_2D,pt,Lt,Pt,Ht,Et);_.generateMipmaps=!1}else if(Kt){if(oe){let pt=Gt(ft);e.texStorage2D(i.TEXTURE_2D,Nt,Lt,pt.width,pt.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Ht,ft)}else e.texImage2D(i.TEXTURE_2D,0,Lt,Pt,Ht,ft);p(_)&&E(j),Ct.__version=bt.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function R(w,_,W){if(_.image.length!==6)return;let j=ce(w,_),dt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+W);let bt=n.get(dt);if(dt.version!==bt.__version||j===!0){e.activeTexture(i.TEXTURE0+W);let Ct=ge.getPrimaries(ge.workingColorSpace),it=_.colorSpace===gi?null:ge.getPrimaries(_.colorSpace),ft=_.colorSpace===gi||Ct===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Pt=_.isCompressedTexture||_.image[0].isCompressedTexture,Ht=_.image[0]&&_.image[0].isDataTexture,Lt=[];for(let vt=0;vt<6;vt++)!Pt&&!Ht?Lt[vt]=m(_.image[vt],!0,s.maxCubemapSize):Lt[vt]=Ht?_.image[vt].image:_.image[vt],Lt[vt]=St(_,Lt[vt]);let Et=Lt[0],Yt=r.convert(_.format,_.colorSpace),Kt=r.convert(_.type),oe=M(_.internalFormat,Yt,Kt,_.normalized,_.colorSpace),X=_.isVideoTexture!==!0,Nt=bt.__version===void 0||j===!0,pt=dt.dataReady,It=A(_,Et);ne(i.TEXTURE_CUBE_MAP,_);let Ut;if(Pt){X&&Nt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,oe,Et.width,Et.height);for(let vt=0;vt<6;vt++){Ut=Lt[vt].mipmaps;for(let Zt=0;Zt<Ut.length;Zt++){let Wt=Ut[Zt];_.format!==Un?Yt!==null?X?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt,0,0,Wt.width,Wt.height,Yt,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt,oe,Wt.width,Wt.height,0,Wt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt,0,0,Wt.width,Wt.height,Yt,Kt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt,oe,Wt.width,Wt.height,0,Yt,Kt,Wt.data)}}}else{if(Ut=_.mipmaps,X&&Nt){Ut.length>0&&It++;let vt=Gt(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,oe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Ht){X?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Lt[vt].width,Lt[vt].height,Yt,Kt,Lt[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Lt[vt].width,Lt[vt].height,0,Yt,Kt,Lt[vt].data);for(let Zt=0;Zt<Ut.length;Zt++){let Re=Ut[Zt].image[vt].image;X?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt+1,0,0,Re.width,Re.height,Yt,Kt,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt+1,oe,Re.width,Re.height,0,Yt,Kt,Re.data)}}else{X?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Yt,Kt,Lt[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Yt,Kt,Lt[vt]);for(let Zt=0;Zt<Ut.length;Zt++){let Wt=Ut[Zt];X?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt+1,0,0,Yt,Kt,Wt.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt+1,oe,Yt,Kt,Wt.image[vt])}}}p(_)&&E(i.TEXTURE_CUBE_MAP),bt.__version=dt.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function O(w,_,W,j,dt,bt){let Ct=r.convert(W.format,W.colorSpace),it=r.convert(W.type),ft=M(W.internalFormat,Ct,it,W.normalized,W.colorSpace),Pt=n.get(_),Ht=n.get(W);if(Ht.__renderTarget=_,!Pt.__hasExternalTextures){let Lt=Math.max(1,_.width>>bt),Et=Math.max(1,_.height>>bt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,bt,ft,Lt,Et,_.depth,0,Ct,it,null):e.texImage2D(dt,bt,ft,Lt,Et,0,Ct,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),q(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,dt,Ht.__webglTexture,0,mt(_)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,dt,Ht.__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(w,_,W){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let j=_.depthTexture,dt=j&&j.isDepthTexture?j.type:null,bt=T(_.stencilBuffer,dt),Ct=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;q(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(_),bt,_.width,_.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(_),bt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,bt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,w)}else{let j=_.textures;for(let dt=0;dt<j.length;dt++){let bt=j[dt],Ct=r.convert(bt.format,bt.colorSpace),it=r.convert(bt.type),ft=M(bt.internalFormat,Ct,it,bt.normalized,bt.colorSpace);q(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(_),ft,_.width,_.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(_),ft,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ft,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(w,_,W){let j=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=n.get(_.depthTexture);if(dt.__renderTarget=_,(!dt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,_.depthTexture.addEventListener("dispose",U)),dt.__webglTexture===void 0){dt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),ne(i.TEXTURE_CUBE_MAP,_.depthTexture);let Pt=r.convert(_.depthTexture.format),Ht=r.convert(_.depthTexture.type),Lt;_.depthTexture.format===jn?Lt=i.DEPTH_COMPONENT24:_.depthTexture.format===Oi&&(Lt=i.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Lt,_.width,_.height,0,Pt,Ht,null)}}else Z(_.depthTexture,0);let bt=dt.__webglTexture,Ct=mt(_),it=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ft=_.depthTexture.format===Oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===jn)q(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,it,bt,0,Ct):i.framebufferTexture2D(i.FRAMEBUFFER,ft,it,bt,0);else if(_.depthTexture.format===Oi)q(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,it,bt,0,Ct):i.framebufferTexture2D(i.FRAMEBUFFER,ft,it,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function b(w){let _=n.get(w),W=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let j=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){let dt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",dt)};j.addEventListener("dispose",dt),_.__depthDisposeCallback=dt}_.__boundDepthTexture=j}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(W)for(let j=0;j<6;j++)xt(_.__webglFramebuffer[j],w,j);else{let j=w.texture.mipmaps;j&&j.length>0?xt(_.__webglFramebuffer[0],w,0):xt(_.__webglFramebuffer,w,0)}else if(W){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),st(_.__webglDepthbuffer[j],w,!1);else{let dt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,bt)}}else{let j=w.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),st(_.__webglDepthbuffer,w,!1);else{let dt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,bt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function D(w,_,W){let j=n.get(w);_!==void 0&&O(j.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&b(w)}function N(w){let _=w.texture,W=n.get(w),j=n.get(_);w.addEventListener("dispose",x);let dt=w.textures,bt=w.isWebGLCubeRenderTarget===!0,Ct=dt.length>1;if(Ct||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,a.memory.textures++),bt){W.__webglFramebuffer=[];for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer[it]=[];for(let ft=0;ft<_.mipmaps.length;ft++)W.__webglFramebuffer[it][ft]=i.createFramebuffer()}else W.__webglFramebuffer[it]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer=[];for(let it=0;it<_.mipmaps.length;it++)W.__webglFramebuffer[it]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let it=0,ft=dt.length;it<ft;it++){let Pt=n.get(dt[it]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&q(w)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let it=0;it<dt.length;it++){let ft=dt[it];W.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[it]);let Pt=r.convert(ft.format,ft.colorSpace),Ht=r.convert(ft.type),Lt=M(ft.internalFormat,Pt,Ht,ft.normalized,ft.colorSpace,w.isXRRenderTarget===!0),Et=mt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,Lt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,W.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),st(W.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ne(i.TEXTURE_CUBE_MAP,_);for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)O(W.__webglFramebuffer[it][ft],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ft);else O(W.__webglFramebuffer[it],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(_)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let it=0,ft=dt.length;it<ft;it++){let Pt=dt[it],Ht=n.get(Pt),Lt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Lt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Lt,Ht.__webglTexture),ne(Lt,Pt),O(W.__webglFramebuffer,w,Pt,i.COLOR_ATTACHMENT0+it,Lt,0),p(Pt)&&E(Lt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(it=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,j.__webglTexture),ne(it,_),_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)O(W.__webglFramebuffer[ft],w,_,i.COLOR_ATTACHMENT0,it,ft);else O(W.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,it,0);p(_)&&E(it),e.unbindTexture()}w.depthBuffer&&b(w)}function Y(w){let _=w.textures;for(let W=0,j=_.length;W<j;W++){let dt=_[W];if(p(dt)){let bt=I(w),Ct=n.get(dt).__webglTexture;e.bindTexture(bt,Ct),E(bt),e.unbindTexture()}}}let Q=[],ot=[];function yt(w){if(w.samples>0){if(q(w)===!1){let _=w.textures,W=w.width,j=w.height,dt=i.COLOR_BUFFER_BIT,bt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(w),it=_.length>1;if(it)for(let Pt=0;Pt<_.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);let ft=w.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Pt=0;Pt<_.length;Pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Pt]);let Ht=n.get(_[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,W,j,0,0,W,j,dt,i.NEAREST),c===!0&&(Q.length=0,ot.length=0,Q.push(i.COLOR_ATTACHMENT0+Pt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(Q.push(bt),ot.push(bt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let Pt=0;Pt<_.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Pt]);let Ht=n.get(_[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function mt(w){return Math.min(s.maxSamples,w.samples)}function q(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function y(w){let _=a.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function St(w,_){let W=w.colorSpace,j=w.format,dt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||W!==or&&W!==gi&&(ge.getTransfer(W)===Ce?(j!==Un||dt!==_n)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",W)),_}function Gt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=ct,this.resetTextureUnits=tt,this.getTextureUnits=G,this.setTextureUnits=$,this.setTexture2D=Z,this.setTexture2DArray=at,this.setTexture3D=ht,this.setTextureCube=ut,this.rebindTextures=D,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=b,this.setupFrameBufferTexture=O,this.useMultisampledRTT=q,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function L0(i,t){function e(n,s=gi){let r,a=ge.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nc)return i.BYTE;if(n===ic)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===lo)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===ac)return i.ALPHA;if(n===oc)return i.RGB;if(n===Un)return i.RGBA;if(n===jn)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===uo)return i.RED;if(n===fo)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===po)return i.RG_INTEGER;if(n===mo)return i.RGBA_INTEGER;if(n===kr||n===Vr||n===Gr||n===Hr)if(a===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===_o||n===xo||n===yo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vo||n===Mo||n===So||n===bo||n===To||n===Wr||n===Eo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vo||n===Mo)return a===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===So)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bo)return r.COMPRESSED_R11_EAC;if(n===To)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Wr)return r.COMPRESSED_RG11_EAC;if(n===Eo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wo||n===Ao||n===Co||n===Ro||n===Po||n===Io||n===Lo||n===No||n===Do||n===Uo||n===Fo||n===Oo||n===Bo||n===zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ao)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Io)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zo)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===Vo||n===Go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ko)return a===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ho||n===Wo||n===Xr||n===Xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var N0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D0=`
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

}`,Nc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new _r(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new wn({vertexShader:N0,fragmentShader:D0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ze(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new Nc,p={},E=e.getContextAttributes(),I=null,M=null,T=[],A=[],U=new _t,x=null,C=null,B=new en;B.viewport=new Be;let H=new en;H.viewport=new Be;let V=[B,H],tt=new no,G=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let L=T[F];return L===void 0&&(L=new Es,T[F]=L),L.getTargetRaySpace()},this.getControllerGrip=function(F){let L=T[F];return L===void 0&&(L=new Es,T[F]=L),L.getGripSpace()},this.getHand=function(F){let L=T[F];return L===void 0&&(L=new Es,T[F]=L),L.getHandSpace()};function ct(F){let L=A.indexOf(F.inputSource);if(L===-1)return;let P=T[L];P!==void 0&&(P.update(F.inputSource,F.frame,l||a),P.dispatchEvent({type:F.type,data:F.inputSource}))}function J(){s.removeEventListener("select",ct),s.removeEventListener("selectstart",ct),s.removeEventListener("selectend",ct),s.removeEventListener("squeeze",ct),s.removeEventListener("squeezestart",ct),s.removeEventListener("squeezeend",ct),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",Z);for(let F=0;F<T.length;F++){let L=A[F];L!==null&&(A[F]=null,T[F].disconnect(L))}G=null,$=null,m.reset();for(let F in p)delete p[F];if(t.setRenderTarget(I),f=null,u=null,d=null,s=null,M=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(U.width,U.height,!1),C!==null){let F=C.camera;F.fov=C.fov,F.zoom=C.zoom,F.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",ct),s.addEventListener("selectstart",ct),s.addEventListener("selectend",ct),s.addEventListener("squeeze",ct),s.addEventListener("squeezestart",ct),s.addEventListener("squeezeend",ct),s.addEventListener("end",J),s.addEventListener("inputsourceschange",Z),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(U),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let P=null,R=null,O=null;E.depth&&(O=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,P=E.stencil?Oi:jn,R=E.stencil?Bs:qn);let st={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(st),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new gn(u.textureWidth,u.textureHeight,{format:Un,type:_n,depthTexture:new Pi(u.textureWidth,u.textureHeight,R,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let P={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,P),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new gn(f.framebufferWidth,f.framebufferHeight,{format:Un,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(F){for(let L=0;L<F.removed.length;L++){let P=F.removed[L],R=A.indexOf(P);R>=0&&(A[R]=null,T[R].disconnect(P))}for(let L=0;L<F.added.length;L++){let P=F.added[L],R=A.indexOf(P);if(R===-1){for(let st=0;st<T.length;st++)if(st>=A.length){A.push(P),R=st;break}else if(A[st]===null){A[st]=P,R=st;break}if(R===-1)break}let O=T[R];O&&O.connect(P)}}let at=new k,ht=new k;function ut(F,L,P){at.setFromMatrixPosition(L.matrixWorld),ht.setFromMatrixPosition(P.matrixWorld);let R=at.distanceTo(ht),O=L.projectionMatrix.elements,st=P.projectionMatrix.elements,xt=O[14]/(O[10]-1),b=O[14]/(O[10]+1),D=(O[9]+1)/O[5],N=(O[9]-1)/O[5],Y=(O[8]-1)/O[0],Q=(st[8]+1)/st[0],ot=xt*Y,yt=xt*Q,mt=R/(-Y+Q),q=mt*-Y;if(L.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(q),F.translateZ(mt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),O[10]===-1)F.projectionMatrix.copy(L.projectionMatrix),F.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{let y=xt+mt,St=b+mt,Gt=ot-q,w=yt+(R-q),_=D*b/St*y,W=N*b/St*y;F.projectionMatrix.makePerspective(Gt,w,_,W,y,St),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function Mt(F,L){L===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(L.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let L=F.near,P=F.far;m.texture!==null&&(m.depthNear>0&&(L=m.depthNear),m.depthFar>0&&(P=m.depthFar)),tt.near=H.near=B.near=L,tt.far=H.far=B.far=P,(G!==tt.near||$!==tt.far)&&(s.updateRenderState({depthNear:tt.near,depthFar:tt.far}),G=tt.near,$=tt.far),tt.layers.mask=F.layers.mask|6,B.layers.mask=tt.layers.mask&-5,H.layers.mask=tt.layers.mask&-3;let R=F.parent,O=tt.cameras;Mt(tt,R);for(let st=0;st<O.length;st++)Mt(O[st],R);O.length===2?ut(tt,B,H):tt.projectionMatrix.copy(B.projectionMatrix),C===null&&F.isPerspectiveCamera&&(C={camera:F,fov:F.fov,zoom:F.zoom}),At(F,tt,R)};function At(F,L,P){P===null?F.matrix.copy(L.matrixWorld):(F.matrix.copy(P.matrixWorld),F.matrix.invert(),F.matrix.multiply(L.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(L.projectionMatrix),F.projectionMatrixInverse.copy(L.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Pa*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(F){c=F,u!==null&&(u.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(tt)},this.getCameraTexture=function(F){return p[F]};let Jt=null;function ne(F,L){if(h=L.getViewerPose(l||a),g=L,h!==null){let P=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let R=!1;P.length!==tt.cameras.length&&(tt.cameras.length=0,R=!0);for(let b=0;b<P.length;b++){let D=P[b],N=null;if(f!==null)N=f.getViewport(D);else{let Q=d.getViewSubImage(u,D);N=Q.viewport,b===0&&(t.setRenderTargetTextures(M,Q.colorTexture,Q.depthStencilTexture),t.setRenderTarget(M))}let Y=V[b];Y===void 0&&(Y=new en,Y.layers.enable(b),Y.viewport=new Be,V[b]=Y),Y.matrix.fromArray(D.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(D.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(N.x,N.y,N.width,N.height),b===0&&(tt.matrix.copy(Y.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),R===!0&&tt.cameras.push(Y)}let O=s.enabledFeatures;if(O&&O.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let b=d.getDepthInformation(P[0]);b&&b.isValid&&b.texture&&m.init(b,s.renderState)}if(O&&O.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let b=0;b<P.length;b++){let D=P[b].camera;if(D){let N=p[D];N||(N=new _r,p[D]=N);let Y=d.getCameraImage(D);N.sourceTexture=Y}}}}for(let P=0;P<T.length;P++){let R=A[P],O=T[P];R!==null&&O!==void 0&&O.update(R,L,l||a)}Jt&&Jt(F,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),g=null}let ce=new Pu;ce.setAnimationLoop(ne),this.setAnimationLoop=function(F){Jt=F},this.dispose=function(){}}},U0=new Ne,Fu=new $t;Fu.set(-1,0,0,0,1,0,0,0,1);function F0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,I,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,I):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),I=E.envMap,M=E.envMapRotation;I&&(m.envMap.value=I,m.envMapRotation.value.setFromMatrix4(U0.makeRotationFromEuler(M)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Fu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,I){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=I*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function O0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,T){let A=T.program;n.uniformBlockBinding(M,A)}function l(M,T){let A=s[M.id];A===void 0&&(m(M),A=h(M),s[M.id]=A,M.addEventListener("dispose",E));let U=T.program;n.updateUBOMapping(M,U);let x=t.render.frame;r[M.id]!==x&&(u(M),r[M.id]=x)}function h(M){let T=d();M.__bindingPointIndex=T;let A=i.createBuffer(),U=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,U,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,A),A}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let T=s[M.id],A=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,C=A.length;x<C;x++){let B=A[x];if(Array.isArray(B))for(let H=0,V=B.length;H<V;H++)f(B[H],x,H,U);else f(B,x,0,U)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,T,A,U){if(v(M,T,A,U)===!0){let x=M.__offset,C=M.value;if(Array.isArray(C)){let B=0;for(let H=0;H<C.length;H++){let V=C[H],tt=p(V);g(V,M.__data,B),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(B+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function g(M,T,A){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,A)}function v(M,T,A,U){let x=M.value,C=T+"_"+A;if(U[C]===void 0)return typeof x=="number"||typeof x=="boolean"?U[C]=x:ArrayBuffer.isView(x)?U[C]=x.slice():U[C]=x.clone(),!0;{let B=U[C];if(typeof x=="number"||typeof x=="boolean"){if(B!==x)return U[C]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(B.equals(x)===!1)return B.copy(x),!0}}return!1}function m(M){let T=M.uniforms,A=0,U=16;for(let C=0,B=T.length;C<B;C++){let H=Array.isArray(T[C])?T[C]:[T[C]];for(let V=0,tt=H.length;V<tt;V++){let G=H[V],$=Array.isArray(G.value)?G.value:[G.value];for(let ct=0,J=$.length;ct<J;ct++){let Z=$[ct],at=p(Z),ht=A%U,ut=ht%at.boundary,Mt=ht+ut;A+=ut,Mt!==0&&U-Mt<at.storage&&(A+=U-Mt),G.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=A,A+=at.storage}}}let x=A%U;return x>0&&(A+=U-x),M.__size=A,M.__cache={},this}function p(M){let T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",M),T}function E(M){let T=M.target;T.removeEventListener("dispose",E);let A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function I(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:I}}var B0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function z0(){return ri===null&&(ri=new Xi(B0,16,16,Bi,Yn),ri.name="DFG_LUT",ri.minFilter=nn,ri.magFilter=nn,ri.wrapS=Ln,ri.wrapT=Ln,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var Ko=class{constructor(t={}){let{canvas:e=Kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=_n}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,m=new Set([mo,po,fo]),p=new Set([_n,qn,Os,Bs,co,ho]),E=new Uint32Array(4),I=new Int32Array(4),M=new k,T=null,A=null,U=[],x=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,H=!1,V=null,tt=null,G=null,$=null;this._outputColorSpace=Ye;let ct=0,J=0,Z=null,at=-1,ht=null,ut=new Be,Mt=new Be,At=null,Jt=new le(0),ne=0,ce=e.width,F=e.height,L=1,P=null,R=null,O=new Be(0,0,ce,F),st=new Be(0,0,ce,F),xt=!1,b=new ws,D=!1,N=!1,Y=new Ne,Q=new k,ot=new Be,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function q(){return Z===null?L:1}let y=n;function St(S,z){return e.getContext(S,z)}let Gt,w,_,W,j,dt,bt,Ct,it,ft,Pt,Ht,Lt,Et,Yt,Kt,oe,X,Nt,pt,It,Ut,vt;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",on,!1),y===null){let z="webgl2";if(y=St(z,S),y===null)throw St(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(S){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",on,!1),se("WebGLRenderer: "+S.message),S}function Zt(){Gt=new qm(y),Gt.init(),It=new L0(y,Gt),w=new Fm(y,Gt,t,It),_=new P0(y,Gt),w.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),tt=y.createFramebuffer(),G=y.createFramebuffer(),$=y.createFramebuffer(),W=new Jm(y),j=new g0,dt=new I0(y,Gt,_,j,w,It,W),bt=new Xm(B),Ct=new $d(y),Ut=new Dm(y,Ct),it=new Ym(y,Ct,W,Ut),ft=new Km(y,it,Ct,Ut,W),X=new $m(y,w,dt),Yt=new Om(j),Pt=new m0(B,bt,Gt,w,Ut,Yt),Ht=new F0(B,j),Lt=new x0,Et=new T0(Gt),oe=new Nm(B,bt,_,ft,g,c),Kt=new R0(B,ft,w),vt=new O0(y,W,w,_),Nt=new Um(y,Gt,W),pt=new Zm(y,Gt,W),W.programs=Pt.programs,B.capabilities=w,B.extensions=Gt,B.properties=j,B.renderLists=Lt,B.shadowMap=Kt,B.state=_,B.info=W}v!==_n&&(C=new Qm(v,e.width,e.height,o,s,r));let Wt=new Dc(B,y);this.xr=Wt,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){let S=Gt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Gt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(S){S!==void 0&&(L=S,this.setSize(ce,F,!1))},this.getSize=function(S){return S.set(ce,F)},this.setSize=function(S,z,rt=!0){if(Wt.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=S,F=z,e.width=Math.floor(S*L),e.height=Math.floor(z*L),rt===!0&&(e.style.width=S+"px",e.style.height=z+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(ce*L,F*L).floor()},this.setDrawingBufferSize=function(S,z,rt){ce=S,F=z,L=rt,e.width=Math.floor(S*rt),e.height=Math.floor(z*rt),this.setViewport(0,0,S,z)},this.setEffects=function(S){if(v===_n){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let z=0;z<S.length;z++)if(S[z].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ut)},this.getViewport=function(S){return S.copy(O)},this.setViewport=function(S,z,rt,et){S.isVector4?O.set(S.x,S.y,S.z,S.w):O.set(S,z,rt,et),_.viewport(ut.copy(O).multiplyScalar(L).round())},this.getScissor=function(S){return S.copy(st)},this.setScissor=function(S,z,rt,et){S.isVector4?st.set(S.x,S.y,S.z,S.w):st.set(S,z,rt,et),_.scissor(Mt.copy(st).multiplyScalar(L).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(S){_.setScissorTest(xt=S)},this.setOpaqueSort=function(S){P=S},this.setTransparentSort=function(S){R=S},this.getClearColor=function(S){return S.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,rt=!0){let et=0;if(S){let nt=!1;if(Z!==null){let Ft=Z.texture.format;nt=m.has(Ft)}if(nt){let Ft=Z.texture.type,zt=p.has(Ft),Dt=oe.getClearColor(),Vt=oe.getClearAlpha(),Xt=Dt.r,he=Dt.g,pe=Dt.b;zt?(E[0]=Xt,E[1]=he,E[2]=pe,E[3]=Vt,y.clearBufferuiv(y.COLOR,0,E)):(I[0]=Xt,I[1]=he,I[2]=pe,I[3]=Vt,y.clearBufferiv(y.COLOR,0,I))}else et|=y.COLOR_BUFFER_BIT}z&&(et|=y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(et|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&y.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),V=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",on,!1),oe.dispose(),Lt.dispose(),Et.dispose(),j.dispose(),bt.dispose(),ft.dispose(),Ut.dispose(),vt.dispose(),Pt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Bt),Wt.removeEventListener("sessionend",Ee),ie.stop()};function Re(S){S.preventDefault(),cc("WebGLRenderer: Context Lost."),H=!0}function fe(){cc("WebGLRenderer: Context Restored."),H=!1;let S=W.autoReset,z=Kt.enabled,rt=Kt.autoUpdate,et=Kt.needsUpdate,nt=Kt.type;Zt(),W.autoReset=S,Kt.enabled=z,Kt.autoUpdate=rt,Kt.needsUpdate=et,Kt.type=nt}function on(S){se("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function yn(S){let z=S.target;z.removeEventListener("dispose",yn),lt(z)}function lt(S){K(S),j.remove(S)}function K(S){let z=j.get(S).programs;z!==void 0&&(z.forEach(function(rt){Pt.releaseProgram(rt)}),S.isShaderMaterial&&Pt.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,rt,et,nt,Ft){z===null&&(z=yt);let zt=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Dt=we(S,z,rt,et,nt);_.setMaterial(et,zt);let Vt=rt.index,Xt=1;if(et.wireframe===!0){if(Vt=it.getWireframeAttribute(rt),Vt===void 0)return;Xt=2}let he=rt.drawRange,pe=rt.attributes.position,qt=he.start*Xt,Ae=(he.start+he.count)*Xt;Ft!==null&&(qt=Math.max(qt,Ft.start*Xt),Ae=Math.min(Ae,(Ft.start+Ft.count)*Xt)),Vt!==null?(qt=Math.max(qt,0),Ae=Math.min(Ae,Vt.count)):pe!=null&&(qt=Math.max(qt,0),Ae=Math.min(Ae,pe.count));let Xe=Ae-qt;if(Xe<0||Xe===1/0)return;Ut.setup(nt,et,Dt,rt,Vt);let Ue,Le=Nt;if(Vt!==null&&(Ue=Ct.get(Vt),Le=pt,Le.setIndex(Ue)),nt.isMesh)et.wireframe===!0?(_.setLineWidth(et.wireframeLinewidth*q()),Le.setMode(y.LINES)):Le.setMode(y.TRIANGLES);else if(nt.isLine){let ln=et.linewidth;ln===void 0&&(ln=1),_.setLineWidth(ln*q()),nt.isLineSegments?Le.setMode(y.LINES):nt.isLineLoop?Le.setMode(y.LINE_LOOP):Le.setMode(y.LINE_STRIP)}else nt.isPoints?Le.setMode(y.POINTS):nt.isSprite&&Le.setMode(y.TRIANGLES);if(nt.isBatchedMesh)if(Gt.get("WEBGL_multi_draw"))Le.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let ln=nt._multiDrawStarts,kt=nt._multiDrawCounts,pn=nt._multiDrawCount,be=Vt?Ct.get(Vt).bytesPerElement:1,Pn=j.get(et).currentProgram.getUniforms();for(let $n=0;$n<pn;$n++)Pn.setValue(y,"_gl_DrawID",$n),Le.render(ln[$n]/be,kt[$n])}else if(nt.isInstancedMesh)Le.renderInstances(qt,Xe,nt.count);else if(rt.isInstancedBufferGeometry){let ln=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,kt=Math.min(rt.instanceCount,ln);Le.renderInstances(qt,Xe,kt)}else Le.render(qt,Xe)};function gt(S,z,rt,et){V!==null&&S.isNodeMaterial&&V.setObject(et,S),D===!0&&Yt.setState(S,rt,!1),S.transparent===!0&&S.side===Rn&&S.forceSinglePass===!1?(S.side=an,S.needsUpdate=!0,ve(S,z,et),S.side=Di,S.needsUpdate=!0,ve(S,z,et),S.side=Rn):ve(S,z,et)}this.compile=function(S,z,rt=null){rt===null&&(rt=S),V!==null&&V.renderStart(S,z,rt),A=Et.get(rt),A.init(z),x.push(A),rt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(z.layers)&&(A.pushLight(nt),nt.castShadow&&A.pushShadow(nt))}),S!==rt&&S.traverseVisible(function(nt){nt.isLight&&nt.layers.test(z.layers)&&(A.pushLight(nt),nt.castShadow&&A.pushShadow(nt))}),A.setupLights(),V!==null&&V.updateLights(A.state.lightsArray),N=this.localClippingEnabled,D=Yt.init(this.clippingPlanes,N),D===!0&&Yt.setGlobalState(this.clippingPlanes,z),V!==null&&Kt.render(A.state.shadowsArray,rt,z);let et=new Set;return S.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Ft=nt.material;if(Ft)if(Array.isArray(Ft))for(let zt=0;zt<Ft.length;zt++){let Dt=Ft[zt];gt(Dt,rt,z,nt),et.add(Dt)}else gt(Ft,rt,z,nt),et.add(Ft)}),A=x.pop(),V!==null&&V.renderEnd(),et},this.compileAsync=function(S,z,rt=null){let et=this.compile(S,z,rt);return new Promise(nt=>{function Ft(){if(et.forEach(function(zt){let Vt=j.get(zt).currentProgram;(Vt===void 0||Vt.isReady())&&et.delete(zt)}),et.size===0){nt(S);return}setTimeout(Ft,10)}Gt.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Tt=null;function wt(S){Tt&&Tt(S)}function Bt(){ie.stop()}function Ee(){ie.start()}let ie=new Pu;ie.setAnimationLoop(wt),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(S){Tt=S,Wt.setAnimationLoop(S),S===null?ie.stop():ie.start()},Wt.addEventListener("sessionstart",Bt),Wt.addEventListener("sessionend",Ee),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;V!==null&&V.renderStart(S,z);let rt=Wt.enabled===!0&&Wt.isPresenting===!0,et=C!==null&&(Z===null||rt)&&C.begin(B,Z);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(z),z=Wt.getCamera()),S.isScene===!0&&S.onBeforeRender(B,S,z,Z),A=Et.get(S,x.length),A.init(z),A.state.textureUnits=dt.getTextureUnits(),x.push(A),Y.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),b.setFromProjectionMatrix(Y,Gn,z.reversedDepth),N=this.localClippingEnabled,D=Yt.init(this.clippingPlanes,N),T=Lt.get(S,U.length),T.init(),U.push(T),Wt.enabled===!0&&Wt.isPresenting===!0){let zt=B.xr.getDepthSensingMesh();zt!==null&&re(zt,z,-1/0,B.sortObjects)}re(S,z,0,B.sortObjects),T.finish(),V!==null&&V.updateLights(A.state.lightsArray),B.sortObjects===!0&&T.sort(P,R),mt=Wt.enabled===!1||Wt.isPresenting===!1||Wt.hasDepthSensing()===!1,mt&&oe.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),D===!0&&Yt.beginShadows();let nt=A.state.shadowsArray;if(Kt.render(nt,S,z),D===!0&&Yt.endShadows(),(et&&C.hasRenderPass())===!1){let zt=T.opaque,Dt=T.transmissive;if(A.setupLights(),z.isArrayCamera){let Vt=z.cameras;if(Dt.length>0)for(let Xt=0,he=Vt.length;Xt<he;Xt++){let pe=Vt[Xt];ye(zt,Dt,S,pe)}mt&&oe.render(S);for(let Xt=0,he=Vt.length;Xt<he;Xt++){let pe=Vt[Xt];xe(T,S,pe,pe.viewport)}}else Dt.length>0&&ye(zt,Dt,S,z),mt&&oe.render(S),xe(T,S,z)}Z!==null&&J===0&&(dt.updateMultisampleRenderTarget(Z),dt.updateRenderTargetMipmap(Z)),et&&C.end(B),S.isScene===!0&&S.onAfterRender(B,S,z),Ut.resetDefaultState(),at=-1,ht=null,x.pop(),x.length>0?(A=x[x.length-1],dt.setTextureUnits(A.state.textureUnits),D===!0&&Yt.setGlobalState(B.clippingPlanes,A.state.camera)):A=null,U.pop(),U.length>0?T=U[U.length-1]:T=null,V!==null&&V.renderEnd()};function re(S,z,rt,et){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)rt=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLightProbeGrid)A.pushLightProbeGrid(S);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(b)){et&&ot.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Y);let zt=ft.update(S),Dt=S.material;Dt.visible&&T.push(S,zt,Dt,rt,ot.z,null,z)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(b))){let zt=ft.update(S),Dt=S.material;if(et&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ot.copy(S.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),ot.copy(zt.boundingSphere.center)),ot.applyMatrix4(S.matrixWorld).applyMatrix4(Y)),Array.isArray(Dt)){let Vt=zt.groups;for(let Xt=0,he=Vt.length;Xt<he;Xt++){let pe=Vt[Xt],qt=Dt[pe.materialIndex];qt&&qt.visible&&T.push(S,zt,qt,rt,ot.z,pe,z)}}else Dt.visible&&T.push(S,zt,Dt,rt,ot.z,null,z)}}let Ft=S.children;for(let zt=0,Dt=Ft.length;zt<Dt;zt++)re(Ft[zt],z,rt,et)}function xe(S,z,rt,et){let{opaque:nt,transmissive:Ft,transparent:zt}=S;A.setupLightsView(rt),D===!0&&Yt.setGlobalState(B.clippingPlanes,rt),et&&_.viewport(ut.copy(et)),nt.length>0&&Pe(nt,z,rt),Ft.length>0&&Pe(Ft,z,rt),zt.length>0&&Pe(zt,z,rt),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ye(S,z,rt,et){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[et.id]===void 0){let qt=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[et.id]=new gn(1,1,{generateMipmaps:!0,type:qt?Yn:_n,minFilter:Fi,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let Ft=A.state.transmissionRenderTarget[et.id],zt=et.viewport||ut;Ft.setSize(zt.z*B.transmissionResolutionScale,zt.w*B.transmissionResolutionScale);let Dt=B.getRenderTarget(),Vt=B.getActiveCubeFace(),Xt=B.getActiveMipmapLevel();B.setRenderTarget(Ft),B.getClearColor(Jt),ne=B.getClearAlpha(),ne<1&&B.setClearColor(16777215,.5),B.clear(),mt&&oe.render(rt);let he=B.toneMapping;B.toneMapping=Xn;let pe=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),A.setupLightsView(et),D===!0&&Yt.setGlobalState(B.clippingPlanes,et),Pe(S,rt,et),dt.updateMultisampleRenderTarget(Ft),dt.updateRenderTargetMipmap(Ft),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ae=0,Xe=z.length;Ae<Xe;Ae++){let Ue=z[Ae],{object:Le,geometry:ln,material:kt,group:pn}=Ue;if(kt.side===Rn&&Le.layers.test(et.layers)){let be=kt.side;kt.side=an,kt.needsUpdate=!0,Qt(Le,rt,et,ln,kt,pn),kt.side=be,kt.needsUpdate=!0,qt=!0}}qt===!0&&(dt.updateMultisampleRenderTarget(Ft),dt.updateRenderTargetMipmap(Ft))}B.setRenderTarget(Dt,Vt,Xt),B.setClearColor(Jt,ne),pe!==void 0&&(et.viewport=pe),B.toneMapping=he}function Pe(S,z,rt){let et=z.isScene===!0?z.overrideMaterial:null;for(let nt=0,Ft=S.length;nt<Ft;nt++){let zt=S[nt],{object:Dt,geometry:Vt,group:Xt}=zt,he=zt.material;he.allowOverride===!0&&et!==null&&(he=et),Dt.layers.test(rt.layers)&&Qt(Dt,z,rt,Vt,he,Xt)}}function Qt(S,z,rt,et,nt,Ft){V!==null&&nt.isNodeMaterial&&V.setObject(S,nt),S.onBeforeRender(B,z,rt,et,nt,Ft),S.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),nt.onBeforeRender(B,z,rt,et,S,Ft),nt.transparent===!0&&nt.side===Rn&&nt.forceSinglePass===!1?(nt.side=an,nt.needsUpdate=!0,B.renderBufferDirect(rt,z,et,nt,S,Ft),nt.side=Di,nt.needsUpdate=!0,B.renderBufferDirect(rt,z,et,nt,S,Ft),nt.side=Rn):B.renderBufferDirect(rt,z,et,nt,S,Ft),S.onAfterRender(B,z,rt,et,nt,Ft)}function ve(S,z,rt){z.isScene!==!0&&(z=yt);let et=j.get(S),nt=A.state.lights,Ft=A.state.shadowsArray,zt=nt.state.version,Dt=Pt.getParameters(S,nt.state,Ft,z,rt,A.state.lightProbeGridArray),Vt=Pt.getProgramCacheKey(Dt),Xt=et.programs;et.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?z.environment:null,et.fog=z.fog;let he=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;et.envMap=bt.get(S.envMap||et.environment,he),et.envMapRotation=et.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Xt===void 0&&(S.addEventListener("dispose",yn),Xt=new Map,et.programs=Xt);let pe=Xt.get(Vt);if(pe!==void 0){if(et.currentProgram===pe&&et.lightsStateVersion===zt)return Rt(S,Dt),pe}else Dt.uniforms=Pt.getUniforms(S),V!==null&&S.isNodeMaterial&&V.build(S,rt,Dt),S.onBeforeCompile(Dt,B),pe=Pt.acquireProgram(Dt,Vt),Xt.set(Vt,pe),et.uniforms=Dt.uniforms;let qt=et.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(qt.clippingPlanes=Yt.uniform),Rt(S,Dt),et.needsLights=te(S),et.lightsStateVersion=zt,et.needsLights&&(qt.ambientLightColor.value=nt.state.ambient,qt.lightProbe.value=nt.state.probe,qt.sunLights.value=nt.state.sun,qt.sunLightShadows.value=nt.state.sunShadow,qt.directionalLights.value=nt.state.directional,qt.directionalLightShadows.value=nt.state.directionalShadow,qt.spotLights.value=nt.state.spot,qt.spotLightShadows.value=nt.state.spotShadow,qt.rectAreaLights.value=nt.state.rectArea,qt.ltc_1.value=nt.state.rectAreaLTC1,qt.ltc_2.value=nt.state.rectAreaLTC2,qt.pointLights.value=nt.state.point,qt.pointLightShadows.value=nt.state.pointShadow,qt.hemisphereLights.value=nt.state.hemi,qt.sunShadowMatrix.value=nt.state.sunShadowMatrix,qt.sunShadowCascade.value=nt.state.sunShadowCascade,qt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,qt.spotLightMatrix.value=nt.state.spotLightMatrix,qt.spotLightMap.value=nt.state.spotLightMap,qt.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=A.state.lightProbeGridArray.length>0,et.currentProgram=pe,et.uniformsList=null,pe}function Se(S){if(S.uniformsList===null){let z=S.currentProgram.getUniforms();S.uniformsList=Gs.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function Rt(S,z){let rt=j.get(S);rt.outputColorSpace=z.outputColorSpace,rt.batching=z.batching,rt.batchingColor=z.batchingColor,rt.instancing=z.instancing,rt.instancingColor=z.instancingColor,rt.instancingMorph=z.instancingMorph,rt.skinning=z.skinning,rt.morphTargets=z.morphTargets,rt.morphNormals=z.morphNormals,rt.morphColors=z.morphColors,rt.morphTargetsCount=z.morphTargetsCount,rt.numClippingPlanes=z.numClippingPlanes,rt.numIntersection=z.numClipIntersection,rt.vertexAlphas=z.vertexAlphas,rt.vertexTangents=z.vertexTangents,rt.toneMapping=z.toneMapping}function me(S,z){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(z.matrixWorld);for(let rt=0,et=S.length;rt<et;rt++){let nt=S[rt];if(nt.texture!==null&&nt.boundingBox.containsPoint(M))return nt}return null}function we(S,z,rt,et,nt){z.isScene!==!0&&(z=yt),dt.resetTextureUnits();let Ft=z.fog,zt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?z.environment:null,Dt=Z===null?B.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ge.workingColorSpace,Vt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Xt=bt.get(et.envMap||zt,Vt),he=et.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pe=!!rt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),qt=!!rt.morphAttributes.position,Ae=!!rt.morphAttributes.normal,Xe=!!rt.morphAttributes.color,Ue=Xn;et.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ue=B.toneMapping);let Le=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ln=Le!==void 0?Le.length:0,kt=j.get(et),pn=A.state.lights;if(D===!0&&(N===!0||S!==ht)){let De=S===ht&&et.id===at;Yt.setState(et,S,De)}let be=!1;et.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==pn.state.version||kt.outputColorSpace!==Dt||nt.isBatchedMesh&&kt.batching===!1||!nt.isBatchedMesh&&kt.batching===!0||nt.isBatchedMesh&&kt.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&kt.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&kt.instancing===!1||!nt.isInstancedMesh&&kt.instancing===!0||nt.isSkinnedMesh&&kt.skinning===!1||!nt.isSkinnedMesh&&kt.skinning===!0||nt.isInstancedMesh&&kt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&kt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&kt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&kt.instancingMorph===!1&&nt.morphTexture!==null||kt.envMap!==Xt||et.fog===!0&&kt.fog!==Ft||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Yt.numPlanes||kt.numIntersection!==Yt.numIntersection)||kt.vertexAlphas!==he||kt.vertexTangents!==pe||kt.morphTargets!==qt||kt.morphNormals!==Ae||kt.morphColors!==Xe||kt.toneMapping!==Ue||kt.morphTargetsCount!==ln||!!kt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(be=!0):(be=!0,kt.__version=et.version);let Pn=kt.currentProgram;be===!0&&(Pn=ve(et,z,nt),V&&et.isNodeMaterial&&V.onUpdateProgram(et,Pn,kt));let $n=!1,vi=!1,ns=!1,Ie=Pn.getUniforms(),He=kt.uniforms;if(_.useProgram(Pn.program)&&($n=!0,vi=!0,ns=!0),et.id!==at&&(at=et.id,vi=!0),kt.needsLights){let De=me(A.state.lightProbeGridArray,nt);kt.lightProbeGrid!==De&&(kt.lightProbeGrid=De,vi=!0)}if($n||ht!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ie.setValue(y,"projectionMatrix",S.projectionMatrix),Ie.setValue(y,"viewMatrix",S.matrixWorldInverse);let Si=Ie.map.cameraPosition;Si!==void 0&&Si.setValue(y,Q.setFromMatrixPosition(S.matrixWorld)),w.logarithmicDepthBuffer&&Ie.setValue(y,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ie.setValue(y,"isOrthographic",S.isOrthographicCamera===!0),ht!==S&&(ht=S,vi=!0,ns=!0)}if(kt.needsLights&&(pn.state.sunShadowMap.length>0&&Ie.setValue(y,"sunShadowMap",pn.state.sunShadowMap,dt),pn.state.directionalShadowMap.length>0&&Ie.setValue(y,"directionalShadowMap",pn.state.directionalShadowMap,dt),pn.state.spotShadowMap.length>0&&Ie.setValue(y,"spotShadowMap",pn.state.spotShadowMap,dt),pn.state.pointShadowMap.length>0&&Ie.setValue(y,"pointShadowMap",pn.state.pointShadowMap,dt)),nt.isSkinnedMesh){Ie.setOptional(y,nt,"bindMatrix"),Ie.setOptional(y,nt,"bindMatrixInverse");let De=nt.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Ie.setValue(y,"boneTexture",De.boneTexture,dt))}nt.isBatchedMesh&&(Ie.setOptional(y,nt,"batchingTexture"),Ie.setValue(y,"batchingTexture",nt._matricesTexture,dt),Ie.setOptional(y,nt,"batchingIdTexture"),Ie.setValue(y,"batchingIdTexture",nt._indirectTexture,dt),Ie.setOptional(y,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Ie.setValue(y,"batchingColorTexture",nt._colorsTexture,dt));let Mi=rt.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&X.update(nt,rt,Pn),(vi||kt.receiveShadow!==nt.receiveShadow)&&(kt.receiveShadow=nt.receiveShadow,Ie.setValue(y,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&z.environment!==null&&(He.envMapIntensity.value=z.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=z0()),vi){if(Ie.setValue(y,"toneMappingExposure",B.toneMappingExposure),kt.needsLights&&ae(He,ns),Ft&&et.fog===!0&&Ht.refreshFogUniforms(He,Ft),Ht.refreshMaterialUniforms(He,et,L,F,A.state.transmissionRenderTarget[S.id]),kt.needsLights&&kt.lightProbeGrid){let De=kt.lightProbeGrid;He.probesSH.value=De.texture,He.probesMin.value.copy(De.boundingBox.min),He.probesMax.value.copy(De.boundingBox.max),He.probesResolution.value.copy(De.resolution)}Gs.upload(y,Se(kt),He,dt)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Gs.upload(y,Se(kt),He,dt),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ie.setValue(y,"center",nt.center),Ie.setValue(y,"modelViewMatrix",nt.modelViewMatrix),Ie.setValue(y,"normalMatrix",nt.normalMatrix),Ie.setValue(y,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){let De=et.uniformsGroups;for(let Si=0,is=De.length;Si<is;Si++){let zc=De[Si];vt.update(zc,Pn),vt.bind(zc,Pn)}}return Pn}function ae(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.sunLights.needsUpdate=z,S.sunLightShadows.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function te(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(S,z,rt){let et=j.get(S);et.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),j.get(S.texture).__webglTexture=z,j.get(S.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:rt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){let rt=j.get(S);rt.__webglFramebuffer=z,rt.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,rt=0){Z=S,ct=z,J=rt;let et=null,nt=!1,Ft=!1;if(S){let Dt=j.get(S);if(Dt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(y.FRAMEBUFFER,Dt.__webglFramebuffer),ut.copy(S.viewport),Mt.copy(S.scissor),At=S.scissorTest,_.viewport(ut),_.scissor(Mt),_.setScissorTest(At),at=-1;return}else if(Dt.__webglFramebuffer===void 0)dt.setupRenderTarget(S);else if(Dt.__hasExternalTextures)dt.rebindTextures(S,j.get(S.texture).__webglTexture,j.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let he=S.depthTexture;if(Dt.__boundDepthTexture!==he){if(he!==null&&j.has(he)&&(S.width!==he.image.width||S.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(S)}}let Vt=S.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Ft=!0);let Xt=j.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Xt[z])?et=Xt[z][rt]:et=Xt[z],nt=!0):S.samples>0&&dt.useMultisampledRTT(S)===!1?et=j.get(S).__webglMultisampledFramebuffer:Array.isArray(Xt)?et=Xt[rt]:et=Xt,ut.copy(S.viewport),Mt.copy(S.scissor),At=S.scissorTest}else ut.copy(O).multiplyScalar(L).floor(),Mt.copy(st).multiplyScalar(L).floor(),At=xt;if(rt!==0&&(et=tt),_.bindFramebuffer(y.FRAMEBUFFER,et)&&_.drawBuffers(S,et),_.viewport(ut),_.scissor(Mt),_.setScissorTest(At),nt){let Dt=j.get(S.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+z,Dt.__webglTexture,rt)}else if(Ft){let Dt=z;for(let Vt=0;Vt<S.textures.length;Vt++){let Xt=j.get(S.textures[Vt]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+Vt,Xt.__webglTexture,rt,Dt)}}else if(S!==null&&rt!==0){let Dt=j.get(S.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Dt.__webglTexture,rt)}at=-1};function jt(S){let z=j.get(S);return(z.__readFormat!==S.format||z.__readType!==S.type)&&(z.__readFormat=S.format,z.__readType=S.type,z.__formatReadable=w.textureFormatReadable(S.format),z.__typeReadable=w.textureTypeReadable(S.type)),z}this.readRenderTargetPixels=function(S,z,rt,et,nt,Ft,zt,Dt=0){if(!(S&&S.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&zt!==void 0&&(Vt=Vt[zt]),Vt){_.bindFramebuffer(y.FRAMEBUFFER,Vt);try{let Xt=S.textures[Dt],he=Xt.format,pe=Xt.type;S.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Dt);let qt=jt(Xt);if(qt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-et&&rt>=0&&rt<=S.height-nt&&y.readPixels(z,rt,et,nt,It.convert(he),It.convert(pe),Ft)}finally{let Xt=Z!==null?j.get(Z).__webglFramebuffer:null;_.bindFramebuffer(y.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(S,z,rt,et,nt,Ft,zt,Dt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&zt!==void 0&&(Vt=Vt[zt]),Vt)if(z>=0&&z<=S.width-et&&rt>=0&&rt<=S.height-nt){_.bindFramebuffer(y.FRAMEBUFFER,Vt);let Xt=S.textures[Dt],he=Xt.format,pe=Xt.type;S.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Dt);let qt=jt(Xt);if(qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Ae),y.bufferData(y.PIXEL_PACK_BUFFER,Ft.byteLength,y.STREAM_READ),y.readPixels(z,rt,et,nt,It.convert(he),It.convert(pe),0),y.bindBuffer(y.PIXEL_PACK_BUFFER,null);let Xe=Z!==null?j.get(Z).__webglFramebuffer:null;_.bindFramebuffer(y.FRAMEBUFFER,Xe);let Ue=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Qh(y,Ue,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Ae),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,Ft),y.bindBuffer(y.PIXEL_PACK_BUFFER,null),y.deleteBuffer(Ae),y.deleteSync(Ue),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,rt=0){let et=Math.pow(2,-rt),nt=Math.floor(S.image.width*et),Ft=Math.floor(S.image.height*et),zt=z!==null?z.x:0,Dt=z!==null?z.y:0;dt.setTexture2D(S,0),y.copyTexSubImage2D(y.TEXTURE_2D,rt,0,0,zt,Dt,nt,Ft),_.unbindTexture()},this.copyTextureToTexture=function(S,z,rt=null,et=null,nt=0,Ft=0){let zt,Dt,Vt,Xt,he,pe,qt,Ae,Xe,Ue=S.isCompressedTexture?S.mipmaps[Ft]:S.image;if(rt!==null)zt=rt.max.x-rt.min.x,Dt=rt.max.y-rt.min.y,Vt=rt.isBox3?rt.max.z-rt.min.z:1,Xt=rt.min.x,he=rt.min.y,pe=rt.isBox3?rt.min.z:0;else{let He=Math.pow(2,-nt);zt=Math.floor(Ue.width*He),Dt=Math.floor(Ue.height*He),S.isDataArrayTexture?Vt=Ue.depth:S.isData3DTexture?Vt=Math.floor(Ue.depth*He):Vt=1,Xt=0,he=0,pe=0}et!==null?(qt=et.x,Ae=et.y,Xe=et.z):(qt=0,Ae=0,Xe=0);let Le=It.convert(z.format),ln=It.convert(z.type),kt;z.isData3DTexture?(dt.setTexture3D(z,0),kt=y.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(dt.setTexture2DArray(z,0),kt=y.TEXTURE_2D_ARRAY):(dt.setTexture2D(z,0),kt=y.TEXTURE_2D),_.activeTexture(y.TEXTURE0),_.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,z.flipY),_.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),_.pixelStorei(y.UNPACK_ALIGNMENT,z.unpackAlignment);let pn=_.getParameter(y.UNPACK_ROW_LENGTH),be=_.getParameter(y.UNPACK_IMAGE_HEIGHT),Pn=_.getParameter(y.UNPACK_SKIP_PIXELS),$n=_.getParameter(y.UNPACK_SKIP_ROWS),vi=_.getParameter(y.UNPACK_SKIP_IMAGES);_.pixelStorei(y.UNPACK_ROW_LENGTH,Ue.width),_.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Ue.height),_.pixelStorei(y.UNPACK_SKIP_PIXELS,Xt),_.pixelStorei(y.UNPACK_SKIP_ROWS,he),_.pixelStorei(y.UNPACK_SKIP_IMAGES,pe);let ns=S.isDataArrayTexture||S.isData3DTexture,Ie=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){let He=j.get(S),Mi=j.get(z),De=j.get(He.__renderTarget),Si=j.get(Mi.__renderTarget);_.bindFramebuffer(y.READ_FRAMEBUFFER,De.__webglFramebuffer),_.bindFramebuffer(y.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let is=0;is<Vt;is++)ns&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,j.get(S).__webglTexture,nt,pe+is),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,j.get(z).__webglTexture,Ft,Xe+is)),y.blitFramebuffer(Xt,he,zt,Dt,qt,Ae,zt,Dt,y.DEPTH_BUFFER_BIT,y.NEAREST);_.bindFramebuffer(y.READ_FRAMEBUFFER,null),_.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(nt!==0||S.isRenderTargetTexture||j.has(S)){let He=j.get(S),Mi=j.get(z);_.bindFramebuffer(y.READ_FRAMEBUFFER,G),_.bindFramebuffer(y.DRAW_FRAMEBUFFER,$);for(let De=0;De<Vt;De++)ns?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,He.__webglTexture,nt,pe+De):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,He.__webglTexture,nt),Ie?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Mi.__webglTexture,Ft,Xe+De):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Mi.__webglTexture,Ft),nt!==0?y.blitFramebuffer(Xt,he,zt,Dt,qt,Ae,zt,Dt,y.COLOR_BUFFER_BIT,y.NEAREST):Ie?y.copyTexSubImage3D(kt,Ft,qt,Ae,Xe+De,Xt,he,zt,Dt):y.copyTexSubImage2D(kt,Ft,qt,Ae,Xt,he,zt,Dt);_.bindFramebuffer(y.READ_FRAMEBUFFER,null),_.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else Ie?S.isDataTexture||S.isData3DTexture?y.texSubImage3D(kt,Ft,qt,Ae,Xe,zt,Dt,Vt,Le,ln,Ue.data):z.isCompressedArrayTexture?y.compressedTexSubImage3D(kt,Ft,qt,Ae,Xe,zt,Dt,Vt,Le,Ue.data):y.texSubImage3D(kt,Ft,qt,Ae,Xe,zt,Dt,Vt,Le,ln,Ue):S.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,Ft,qt,Ae,zt,Dt,Le,ln,Ue.data):S.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,Ft,qt,Ae,Ue.width,Ue.height,Le,Ue.data):y.texSubImage2D(y.TEXTURE_2D,Ft,qt,Ae,zt,Dt,Le,ln,Ue);_.pixelStorei(y.UNPACK_ROW_LENGTH,pn),_.pixelStorei(y.UNPACK_IMAGE_HEIGHT,be),_.pixelStorei(y.UNPACK_SKIP_PIXELS,Pn),_.pixelStorei(y.UNPACK_SKIP_ROWS,$n),_.pixelStorei(y.UNPACK_SKIP_IMAGES,vi),Ft===0&&z.generateMipmaps&&y.generateMipmap(kt),_.unbindTexture()},this.initRenderTarget=function(S){j.get(S).__webglFramebuffer===void 0&&dt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?dt.setTextureCube(S,0):S.isData3DTexture?dt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?dt.setTexture2DArray(S,0):dt.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){ct=0,J=0,Z=null,_.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};var $r=new k;function Fn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;$r.copy(t),$r[n]=0,$r.normalize();let l=.5*a/(a+o),h=1-$r.angleTo(i)/c;return Math.sign($r[e])===1?h*l:o/(a+o)+l+l*(1-h)}var tl=class i extends ei{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new k,l=new k,h=new k(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,v=new k,m=.5/a;for(let p=0,E=0;p<d.length;p+=3,E+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=h.x*Math.sign(c.x)+l.x*r,d[p+1]=h.y*Math.sign(c.y)+l.y*r,d[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/g)){case 0:v.set(1,0,0),f[E+0]=Fn(v,l,"z","y",r,n),f[E+1]=1-Fn(v,l,"y","z",r,e);break;case 1:v.set(-1,0,0),f[E+0]=1-Fn(v,l,"z","y",r,n),f[E+1]=1-Fn(v,l,"y","z",r,e);break;case 2:v.set(0,1,0),f[E+0]=1-Fn(v,l,"x","z",r,t),f[E+1]=Fn(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),f[E+0]=1-Fn(v,l,"x","z",r,t),f[E+1]=1-Fn(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),f[E+0]=1-Fn(v,l,"x","y",r,t),f[E+1]=1-Fn(v,l,"y","x",r,e);break;case 5:v.set(0,0,-1),f[E+0]=Fn(v,l,"x","y",r,t),f[E+1]=1-Fn(v,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var el=class extends Wi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ei;t.deleteAttribute("uv");let e=new An({side:an}),n=new An,s=new Dr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ze(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new mr(t,n,6),o=new rn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ze(t,Xs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ze(t,Xs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new ze(t,Xs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new ze(t,Xs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new ze(t,Xs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new ze(t,Xs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Xs(i){return new Rr({color:0,emissive:16777215,emissiveIntensity:i})}var Kr=Ye,nl=class i extends Ji{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){let r=this,a=new Ir(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){let e=this;function n(L,P){if(L.nodeType!==1)return;L.hasAttribute("filter")&&console.warn("THREE.SVGLoader: Filters are not supported.");let R=T(L),O=!1,st=null;switch(L.nodeName){case"svg":P=v(L,P);break;case"style":r(L);break;case"g":P=v(L,P);break;case"path":P=v(L,P),L.hasAttribute("d")&&(st=s(L));break;case"rect":P=v(L,P),st=c(L);break;case"polygon":P=v(L,P),st=l(L);break;case"polyline":P=v(L,P),st=h(L);break;case"circle":P=v(L,P),st=d(L);break;case"ellipse":P=v(L,P),st=u(L);break;case"line":P=v(L,P),st=f(L);break;case"defs":O=!0;break;case"use":P=v(L,P);let D=(L.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),N=L.viewportElement.getElementById(D);N?n(N,P):console.warn("SVGLoader: 'use node' references non-existent node id: "+D);break;default:}if(st){P.fill!==void 0&&P.fill!=="none"&&!P.fill.startsWith("url")&&st.color.setStyle(P.fill,Kr),x(st,ne),$.push(st);let b=Object.assign({},P);b.strokeWidth=P.strokeWidth*tt(ne),st.userData={node:L,style:b,transform:ne.clone(),gradients:J}}let xt=L.childNodes;for(let b=0;b<xt.length;b++){let D=xt[b];O&&D.nodeName!=="style"&&D.nodeName!=="defs"||n(D,P)}R&&(Z.pop(),Z.length>0?ne.copy(Z[Z.length-1]):ne.identity())}function s(L){let P=new Wn,R=new _t,O=new _t,st=new _t,xt=!0,b=!1,D=L.getAttribute("d");if(D===""||D==="none")return null;let N=D.match(/[a-df-z][^a-df-z]*/ig);for(let Y=0,Q=N.length;Y<Q;Y++){let ot=N[Y],yt=ot.charAt(0),mt=ot.slice(1).trim();xt===!0&&(b=!0,xt=!1);let q;switch(yt){case"M":q=p(mt);for(let y=0,St=q.length;y<St;y+=2)R.x=q[y+0],R.y=q[y+1],O.x=R.x,O.y=R.y,y===0?P.moveTo(R.x,R.y):P.lineTo(R.x,R.y),y===0&&st.copy(R);break;case"H":q=p(mt);for(let y=0,St=q.length;y<St;y++)R.x=q[y],O.x=R.x,O.y=R.y,P.lineTo(R.x,R.y),y===0&&b===!0&&st.copy(R);break;case"V":q=p(mt);for(let y=0,St=q.length;y<St;y++)R.y=q[y],O.x=R.x,O.y=R.y,P.lineTo(R.x,R.y),y===0&&b===!0&&st.copy(R);break;case"L":q=p(mt);for(let y=0,St=q.length;y<St;y+=2)R.x=q[y+0],R.y=q[y+1],O.x=R.x,O.y=R.y,P.lineTo(R.x,R.y),y===0&&b===!0&&st.copy(R);break;case"C":q=p(mt);for(let y=0,St=q.length;y<St;y+=6)P.bezierCurveTo(q[y+0],q[y+1],q[y+2],q[y+3],q[y+4],q[y+5]),O.x=q[y+2],O.y=q[y+3],R.x=q[y+4],R.y=q[y+5],y===0&&b===!0&&st.copy(R);break;case"S":q=p(mt);for(let y=0,St=q.length;y<St;y+=4)P.bezierCurveTo(m(R.x,O.x),m(R.y,O.y),q[y+0],q[y+1],q[y+2],q[y+3]),O.x=q[y+0],O.y=q[y+1],R.x=q[y+2],R.y=q[y+3],y===0&&b===!0&&st.copy(R);break;case"Q":q=p(mt);for(let y=0,St=q.length;y<St;y+=4)P.quadraticCurveTo(q[y+0],q[y+1],q[y+2],q[y+3]),O.x=q[y+0],O.y=q[y+1],R.x=q[y+2],R.y=q[y+3],y===0&&b===!0&&st.copy(R);break;case"T":q=p(mt);for(let y=0,St=q.length;y<St;y+=2){let Gt=m(R.x,O.x),w=m(R.y,O.y);P.quadraticCurveTo(Gt,w,q[y+0],q[y+1]),O.x=Gt,O.y=w,R.x=q[y+0],R.y=q[y+1],y===0&&b===!0&&st.copy(R)}break;case"A":q=p(mt,[3,4],7);for(let y=0,St=q.length;y<St;y+=7){if(q[y+5]==R.x&&q[y+6]==R.y)continue;let Gt=R.clone();R.x=q[y+5],R.y=q[y+6],O.x=R.x,O.y=R.y,a(P,q[y],q[y+1],q[y+2],q[y+3],q[y+4],Gt,R),y===0&&b===!0&&st.copy(R)}break;case"m":q=p(mt);for(let y=0,St=q.length;y<St;y+=2)R.x+=q[y+0],R.y+=q[y+1],O.x=R.x,O.y=R.y,y===0?P.moveTo(R.x,R.y):P.lineTo(R.x,R.y),y===0&&st.copy(R);break;case"h":q=p(mt);for(let y=0,St=q.length;y<St;y++)R.x+=q[y],O.x=R.x,O.y=R.y,P.lineTo(R.x,R.y),y===0&&b===!0&&st.copy(R);break;case"v":q=p(mt);for(let y=0,St=q.length;y<St;y++)R.y+=q[y],O.x=R.x,O.y=R.y,P.lineTo(R.x,R.y),y===0&&b===!0&&st.copy(R);break;case"l":q=p(mt);for(let y=0,St=q.length;y<St;y+=2)R.x+=q[y+0],R.y+=q[y+1],O.x=R.x,O.y=R.y,P.lineTo(R.x,R.y),y===0&&b===!0&&st.copy(R);break;case"c":q=p(mt);for(let y=0,St=q.length;y<St;y+=6)P.bezierCurveTo(R.x+q[y+0],R.y+q[y+1],R.x+q[y+2],R.y+q[y+3],R.x+q[y+4],R.y+q[y+5]),O.x=R.x+q[y+2],O.y=R.y+q[y+3],R.x+=q[y+4],R.y+=q[y+5],y===0&&b===!0&&st.copy(R);break;case"s":q=p(mt);for(let y=0,St=q.length;y<St;y+=4)P.bezierCurveTo(m(R.x,O.x),m(R.y,O.y),R.x+q[y+0],R.y+q[y+1],R.x+q[y+2],R.y+q[y+3]),O.x=R.x+q[y+0],O.y=R.y+q[y+1],R.x+=q[y+2],R.y+=q[y+3],y===0&&b===!0&&st.copy(R);break;case"q":q=p(mt);for(let y=0,St=q.length;y<St;y+=4)P.quadraticCurveTo(R.x+q[y+0],R.y+q[y+1],R.x+q[y+2],R.y+q[y+3]),O.x=R.x+q[y+0],O.y=R.y+q[y+1],R.x+=q[y+2],R.y+=q[y+3],y===0&&b===!0&&st.copy(R);break;case"t":q=p(mt);for(let y=0,St=q.length;y<St;y+=2){let Gt=m(R.x,O.x),w=m(R.y,O.y);P.quadraticCurveTo(Gt,w,R.x+q[y+0],R.y+q[y+1]),O.x=Gt,O.y=w,R.x=R.x+q[y+0],R.y=R.y+q[y+1],y===0&&b===!0&&st.copy(R)}break;case"a":q=p(mt,[3,4],7);for(let y=0,St=q.length;y<St;y+=7){if(q[y+5]==0&&q[y+6]==0)continue;let Gt=R.clone();R.x+=q[y+5],R.y+=q[y+6],O.x=R.x,O.y=R.y,a(P,q[y],q[y+1],q[y+2],q[y+3],q[y+4],Gt,R),y===0&&b===!0&&st.copy(R)}break;case"Z":case"z":P.currentPath.autoClose=!0,P.currentPath.curves.length>0&&(R.copy(st),P.currentPath.currentPoint.copy(R),xt=!0);break;default:console.warn(ot)}b=!1}return P}function r(L){if(!(!L.sheet||!L.sheet.cssRules||!L.sheet.cssRules.length))for(let P=0;P<L.sheet.cssRules.length;P++){let R=L.sheet.cssRules[P];if(R.type!==1)continue;let O=R.selectorText.split(/,/gm).filter(Boolean).map(st=>st.trim());for(let st=0;st<O.length;st++){let xt=Object.fromEntries(Object.entries(R.style).filter(([,b])=>b!==""));ct[O[st]]=Object.assign(ct[O[st]]||{},xt)}}}function a(L,P,R,O,st,xt,b,D){if(P==0||R==0){L.lineTo(D.x,D.y);return}O=O*Math.PI/180,P=Math.abs(P),R=Math.abs(R);let N=(b.x-D.x)/2,Y=(b.y-D.y)/2,Q=Math.cos(O)*N+Math.sin(O)*Y,ot=-Math.sin(O)*N+Math.cos(O)*Y,yt=P*P,mt=R*R,q=Q*Q,y=ot*ot,St=q/yt+y/mt;if(St>1){let ft=Math.sqrt(St);P=ft*P,R=ft*R,yt=P*P,mt=R*R}let Gt=yt*y+mt*q,w=(yt*mt-Gt)/Gt,_=Math.sqrt(Math.max(0,w));st===xt&&(_=-_);let W=_*P*ot/R,j=-_*R*Q/P,dt=Math.cos(O)*W-Math.sin(O)*j+(b.x+D.x)/2,bt=Math.sin(O)*W+Math.cos(O)*j+(b.y+D.y)/2,Ct=o(1,0,(Q-W)/P,(ot-j)/R),it=o((Q-W)/P,(ot-j)/R,(-Q-W)/P,(-ot-j)/R)%(Math.PI*2);L.currentPath.absellipse(dt,bt,P,R,Ct,Ct+it,xt===0,O)}function o(L,P,R,O){let st=L*R+P*O,xt=Math.sqrt(L*L+P*P)*Math.sqrt(R*R+O*O),b=Math.acos(Math.max(-1,Math.min(1,st/xt)));return L*O-P*R<0&&(b=-b),b}function c(L){let P=M(L.getAttribute("x")||0),R=M(L.getAttribute("y")||0),O=M(L.getAttribute("rx")||L.getAttribute("ry")||0),st=M(L.getAttribute("ry")||L.getAttribute("rx")||0),xt=M(L.getAttribute("width")),b=M(L.getAttribute("height")),D=1-.551915024494,N=new Wn;return N.moveTo(P+O,R),N.lineTo(P+xt-O,R),(O!==0||st!==0)&&N.bezierCurveTo(P+xt-O*D,R,P+xt,R+st*D,P+xt,R+st),N.lineTo(P+xt,R+b-st),(O!==0||st!==0)&&N.bezierCurveTo(P+xt,R+b-st*D,P+xt-O*D,R+b,P+xt-O,R+b),N.lineTo(P+O,R+b),(O!==0||st!==0)&&N.bezierCurveTo(P+O*D,R+b,P,R+b-st*D,P,R+b-st),N.lineTo(P,R+st),(O!==0||st!==0)&&N.bezierCurveTo(P,R+st*D,P+O*D,R,P+O,R),N}function l(L){function P(xt,b,D){let N=M(b),Y=M(D);st===0?O.moveTo(N,Y):O.lineTo(N,Y),st++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,O=new Wn,st=0;return L.getAttribute("points").replace(R,P),O.currentPath.autoClose=!0,O}function h(L){function P(xt,b,D){let N=M(b),Y=M(D);st===0?O.moveTo(N,Y):O.lineTo(N,Y),st++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,O=new Wn,st=0;return L.getAttribute("points").replace(R,P),O.currentPath.autoClose=!1,O}function d(L){let P=M(L.getAttribute("cx")||0),R=M(L.getAttribute("cy")||0),O=M(L.getAttribute("r")||0),st=new ni;st.absarc(P,R,O,0,Math.PI*2);let xt=new Wn;return xt.subPaths.push(st),xt}function u(L){let P=M(L.getAttribute("cx")||0),R=M(L.getAttribute("cy")||0),O=M(L.getAttribute("rx")||0),st=M(L.getAttribute("ry")||0),xt=new ni;xt.absellipse(P,R,O,st,0,Math.PI*2);let b=new Wn;return b.subPaths.push(xt),b}function f(L){let P=M(L.getAttribute("x1")||0),R=M(L.getAttribute("y1")||0),O=M(L.getAttribute("x2")||0),st=M(L.getAttribute("y2")||0),xt=new Wn;return xt.moveTo(P,R),xt.lineTo(O,st),xt.currentPath.autoClose=!1,xt}function g(L){let P="http://www.w3.org/1999/xlink",R=L.querySelectorAll("linearGradient, radialGradient"),O=["x1","y1","x2","y2","cx","cy","r","fx","fy","gradientUnits","gradientTransform","spreadMethod"],st={};for(let b of R){let D=b.getAttribute("id");if(!D)continue;let N={type:b.nodeName==="radialGradient"?"radialGradient":"linearGradient",attrs:{},stops:null,href:null},Y=b.getAttributeNS(P,"href")||b.getAttribute("href")||"";Y.startsWith("#")&&(N.href=Y.substring(1));for(let ot of O)b.hasAttribute(ot)&&(N.attrs[ot]=b.getAttribute(ot));let Q=b.querySelectorAll("stop");if(Q.length>0){N.stops=[];for(let ot of Q){let yt=ot.getAttribute("stop-color");!yt&&ot.style&&(yt=ot.style["stop-color"]),yt||(yt="#000");let mt=ot.getAttribute("stop-opacity");(mt===null||mt==="")&&ot.style&&(mt=ot.style["stop-opacity"]),mt=mt===null||mt===""||mt===void 0?1:Math.max(0,Math.min(1,parseFloat(mt)));let q=Math.max(0,Math.min(1,parseFloat(ot.getAttribute("offset")||"0")));N.stops.push({offset:q,color:yt,opacity:mt})}}st[D]=N}function xt(b,D){let N=st[b];if(!N||D.has(b))return N;if(D.add(b),N.href&&st[N.href]){let Y=xt(N.href,D);if(Y){N.stops||(N.stops=Y.stops);for(let Q in Y.attrs)Q in N.attrs||(N.attrs[Q]=Y.attrs[Q])}}return N}for(let b in st)xt(b,new Set);for(let b in st){let ot=function(yt){return typeof yt!="string"?0:yt.endsWith("%")?parseFloat(yt)/100:M(yt)},D=st[b],N=D.attrs,Y=N.gradientUnits==="userSpaceOnUse"?"userSpaceOnUse":"objectBoundingBox",Q={type:D.type,gradientUnits:Y,spreadMethod:N.spreadMethod==="reflect"||N.spreadMethod==="repeat"?N.spreadMethod:"pad",gradientTransform:null,stops:(D.stops||[]).slice().sort((yt,mt)=>yt.offset-mt.offset)};if(N.gradientTransform&&(Q.gradientTransform=new $t,U(N.gradientTransform,Q.gradientTransform)),D.type==="linearGradient")Q.x1=N.x1!==void 0?ot(N.x1):0,Q.y1=N.y1!==void 0?ot(N.y1):0,Q.x2=N.x2!==void 0?ot(N.x2):Y==="objectBoundingBox"?1:0,Q.y2=N.y2!==void 0?ot(N.y2):0;else{let yt=Y==="objectBoundingBox"?.5:0,mt=Y==="objectBoundingBox"?.5:0;Q.cx=N.cx!==void 0?ot(N.cx):yt,Q.cy=N.cy!==void 0?ot(N.cy):yt,Q.r=N.r!==void 0?ot(N.r):mt,Q.fx=N.fx!==void 0?ot(N.fx):Q.cx,Q.fy=N.fy!==void 0?ot(N.fy):Q.cy}J[b]=Q}}function v(L,P){P=Object.assign({},P);let R={};if(L.hasAttribute("class")){let b=L.getAttribute("class").split(/\s/).filter(Boolean).map(D=>D.trim());for(let D=0;D<b.length;D++)R=Object.assign(R,ct["."+b[D]])}L.hasAttribute("id")&&(R=Object.assign(R,ct["#"+L.getAttribute("id")]));function O(b,D,N){N===void 0&&(N=function(Q){return Q}),L.hasAttribute(b)&&(P[D]=N(L.getAttribute(b))),R[D]&&(P[D]=N(R[D])),L.style&&L.style[b]!==""&&(P[D]=N(L.style[b]))}function st(b){return Math.max(0,Math.min(1,M(b)))}function xt(b){return Math.max(0,M(b))}return O("fill","fill"),O("fill-opacity","fillOpacity",st),O("fill-rule","fillRule"),O("opacity","opacity",st),O("stroke","stroke"),O("stroke-opacity","strokeOpacity",st),O("stroke-width","strokeWidth",xt),O("stroke-linejoin","strokeLineJoin"),O("stroke-linecap","strokeLineCap"),O("stroke-miterlimit","strokeMiterLimit",xt),O("visibility","visibility"),P}function m(L,P){return L-(P-L)}function p(L,P,R){if(typeof L!="string")throw new TypeError("Invalid input: "+typeof L);let O={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},st=0,xt=1,b=2,D=3,N=st,Y=!0,Q="",ot="",yt=[];function mt(Gt,w,_){let W=new SyntaxError('Unexpected character "'+Gt+'" at index '+w+".");throw W.partial=_,W}function q(){Q!==""&&(ot===""?yt.push(Number(Q)):yt.push(Number(Q)*Math.pow(10,Number(ot)))),Q="",ot=""}let y,St=L.length;for(let Gt=0;Gt<St;Gt++){if(y=L[Gt],Array.isArray(P)&&P.includes(yt.length%R)&&O.FLAGS.test(y)){N=xt,Q=y,q();continue}if(N===st){if(O.WHITESPACE.test(y))continue;if(O.DIGIT.test(y)||O.SIGN.test(y)){N=xt,Q=y;continue}if(O.POINT.test(y)){N=b,Q=y;continue}O.COMMA.test(y)&&(Y&&mt(y,Gt,yt),Y=!0)}if(N===xt){if(O.DIGIT.test(y)){Q+=y;continue}if(O.POINT.test(y)){Q+=y,N=b;continue}if(O.EXP.test(y)){N=D;continue}O.SIGN.test(y)&&Q.length===1&&O.SIGN.test(Q[0])&&mt(y,Gt,yt)}if(N===b){if(O.DIGIT.test(y)){Q+=y;continue}if(O.EXP.test(y)){N=D;continue}O.POINT.test(y)&&Q[Q.length-1]==="."&&mt(y,Gt,yt)}if(N===D){if(O.DIGIT.test(y)){ot+=y;continue}if(O.SIGN.test(y)){if(ot===""){ot+=y;continue}ot.length===1&&O.SIGN.test(ot)&&mt(y,Gt,yt)}}O.WHITESPACE.test(y)?(q(),N=st,Y=!1):O.COMMA.test(y)?(q(),N=st,Y=!0):O.SIGN.test(y)?(q(),N=xt,Q=y):O.POINT.test(y)?(q(),N=b,Q=y):mt(y,Gt,yt)}return q(),yt}let E=["mm","cm","in","pt","pc","px"],I={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function M(L){let P="px";if(typeof L=="string"||L instanceof String)for(let O=0,st=E.length;O<st;O++){let xt=E[O];if(L.endsWith(xt)){P=xt,L=L.substring(0,L.length-xt.length);break}}let R;return P==="px"&&e.defaultUnit!=="px"?R=I.in[e.defaultUnit]/e.defaultDPI:(R=I[P][e.defaultUnit],R<0&&(R=I[P].in*e.defaultDPI)),R*parseFloat(L)}function T(L){if(!(L.hasAttribute("transform")||L.nodeName==="use"&&(L.hasAttribute("x")||L.hasAttribute("y"))))return null;let P=A(L);return Z.length>0&&P.premultiply(Z[Z.length-1]),ne.copy(P),Z.push(P),P}function A(L){let P=new $t;if(L.nodeName==="use"&&(L.hasAttribute("x")||L.hasAttribute("y"))){let R=M(L.getAttribute("x")||0),O=M(L.getAttribute("y")||0);P.makeTranslation(R,O)}return L.hasAttribute("transform")&&U(L.getAttribute("transform"),P),P}function U(L,P){let R=at,O=L.split(")");for(let st=O.length-1;st>=0;st--){let xt=O[st].trim();if(xt==="")continue;let b=xt.indexOf("("),D=xt.length;if(b>0&&b<D){let N=xt.slice(0,b),Y=p(xt.slice(b+1));switch(R.identity(),N){case"translate":if(Y.length>=1){let Q=Y[0],ot=0;Y.length>=2&&(ot=Y[1]),R.makeTranslation(Q,ot)}break;case"rotate":if(Y.length>=1){let Q=0,ot=0,yt=0;Q=Y[0]*Math.PI/180,Y.length>=3&&(ot=Y[1],yt=Y[2]),ht.makeTranslation(-ot,-yt),ut.makeRotation(Q),Mt.multiplyMatrices(ut,ht),ht.makeTranslation(ot,yt),R.multiplyMatrices(ht,Mt)}break;case"scale":if(Y.length>=1){let Q=Y[0],ot=Q;Y.length>=2&&(ot=Y[1]),R.makeScale(Q,ot)}break;case"skewX":Y.length===1&&R.set(1,Math.tan(Y[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Y.length===1&&R.set(1,0,0,Math.tan(Y[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Y.length===6&&R.set(Y[0],Y[2],Y[4],Y[1],Y[3],Y[5],0,0,1);break}P.premultiply(R)}}return P}function x(L,P){function R(b){Jt.set(b.x,b.y,1).applyMatrix3(P),b.set(Jt.x,Jt.y)}function O(b){let D=b.xRadius,N=b.yRadius,Y=Math.cos(b.aRotation),Q=Math.sin(b.aRotation),ot=new k(D*Y,D*Q,0),yt=new k(-N*Q,N*Y,0),mt=ot.applyMatrix3(P),q=yt.applyMatrix3(P),y=at.set(mt.x,q.x,0,mt.y,q.y,0,0,0,1),St=ht.copy(y).invert(),_=ut.copy(St).transpose().multiply(St).elements,W=G(_[0],_[1],_[4]),j=Math.sqrt(W.rt1),dt=Math.sqrt(W.rt2);if(b.xRadius=1/j,b.yRadius=1/dt,b.aRotation=Math.atan2(W.sn,W.cs),!((b.aEndAngle-b.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let Ct=ht.set(j,0,0,0,dt,0,0,0,1),it=ut.set(W.cs,W.sn,0,-W.sn,W.cs,0,0,0,1),ft=Ct.multiply(it).multiply(y),Pt=Ht=>{let{x:Lt,y:Et}=new k(Math.cos(Ht),Math.sin(Ht),0).applyMatrix3(ft);return Math.atan2(Et,Lt)};b.aStartAngle=Pt(b.aStartAngle),b.aEndAngle=Pt(b.aEndAngle),C(P)&&(b.aClockwise=!b.aClockwise)}}function st(b){let D=H(P),N=V(P);b.xRadius*=D,b.yRadius*=N;let Y=D>Number.EPSILON?Math.atan2(P.elements[1],P.elements[0]):Math.atan2(-P.elements[3],P.elements[4]);b.aRotation+=Y,C(P)&&(b.aStartAngle*=-1,b.aEndAngle*=-1,b.aClockwise=!b.aClockwise)}let xt=L.subPaths;for(let b=0,D=xt.length;b<D;b++){let Y=xt[b].curves;for(let Q=0;Q<Y.length;Q++){let ot=Y[Q];ot.isLineCurve?(R(ot.v1),R(ot.v2)):ot.isCubicBezierCurve?(R(ot.v0),R(ot.v1),R(ot.v2),R(ot.v3)):ot.isQuadraticBezierCurve?(R(ot.v0),R(ot.v1),R(ot.v2)):ot.isEllipseCurve&&(At.set(ot.aX,ot.aY),R(At),ot.aX=At.x,ot.aY=At.y,B(P)?O(ot):st(ot))}}}function C(L){let P=L.elements;return P[0]*P[4]-P[1]*P[3]<0}function B(L){let P=L.elements,R=P[0]*P[3]+P[1]*P[4];if(R===0)return!1;let O=H(L),st=V(L);return Math.abs(R/(O*st))>Number.EPSILON}function H(L){let P=L.elements;return Math.sqrt(P[0]*P[0]+P[1]*P[1])}function V(L){let P=L.elements;return Math.sqrt(P[3]*P[3]+P[4]*P[4])}function tt(L){let P=L.elements,R=P[0]*P[4]-P[1]*P[3];return Math.sqrt(Math.abs(R))}function G(L,P,R){let O,st,xt,b,D,N=L+R,Y=L-R,Q=Math.sqrt(Y*Y+4*P*P);return N>0?(O=.5*(N+Q),D=1/O,st=L*D*R-P*D*P):N<0?st=.5*(N-Q):(O=.5*Q,st=-.5*Q),Y>0?xt=Y+Q:xt=Y-Q,Math.abs(xt)>2*Math.abs(P)?(D=-2*P/xt,b=1/Math.sqrt(1+D*D),xt=D*b):Math.abs(P)===0?(xt=1,b=0):(D=-.5*xt/P,xt=1/Math.sqrt(1+D*D),b=D*xt),Y>0&&(D=xt,xt=-b,b=D),{rt1:O,rt2:st,cs:xt,sn:b}}let $=[],ct={},J={},Z=[],at=new $t,ht=new $t,ut=new $t,Mt=new $t,At=new _t,Jt=new k,ne=new $t,ce=new DOMParser().parseFromString(t,"image/svg+xml");return g(ce),n(ce.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:$,gradients:J,xml:ce.documentElement}}static createFillMaterial(t){let e=t.userData.style;if(e.fill===void 0||e.fill==="none")return null;let n=t.color,s=null,r=Ou.exec(e.fill);if(r){let o=t.userData.gradients&&t.userData.gradients[r[1]];s=V0(o,t)}let a=new tn({opacity:e.fillOpacity*(e.opacity||1),transparent:!0,side:Rn,depthWrite:!1});return s!==null?a.map=s:a.color=n,a}static createStrokeMaterial(t){let e=t.userData.style;return e.stroke===void 0||e.stroke==="none"?null:(Ou.test(e.stroke)&&console.warn("THREE.SVGLoader: Gradient strokes are not supported."),new tn({color:new le().setStyle(e.stroke,Kr),opacity:e.strokeOpacity*(e.opacity||1),transparent:!0,side:Rn,depthWrite:!1}))}static createShapes(t){return console.warn("SVGLoader: createShapes() is deprecated. Use shapePath.toShapes() instead."),t.toShapes()}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){let r=[],a=[],o=[];if(i.pointsToStrokeWithBuffers(t,e,n,s,r,a,o)===0)return null;let c=new Je;return c.setAttribute("position",new _e(r,3)),c.setAttribute("normal",new _e(a,3)),c.setAttribute("uv",new _e(o,2)),c}static pointsToStrokeWithBuffers(t,e,n,s,r,a,o,c){let l=new _t,h=new _t,d=new _t,u=new _t,f=new _t,g=new _t,v=new _t,m=new _t,p=new _t,E=new _t,I=new _t,M=new _t,T=new _t,A=new _t,U=new _t,x=new _t,C=new _t;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,t=xt(t);let B=t.length;if(B<2)return 0;let H=t[0].equals(t[B-1]),V,tt=t[0],G,$=e.strokeWidth/2,ct=1/(B-1),J=0,Z,at,ht,ut,Mt=!1,At=0,Jt=c*3,ne=c*2;ce(t[0],t[1],l).multiplyScalar($),m.copy(t[0]).sub(l),p.copy(t[0]).add(l),E.copy(m),I.copy(p);for(let b=1;b<B;b++){V=t[b],b===B-1?H?G=t[1]:G=void 0:G=t[b+1];let D=l;if(ce(tt,V,D),d.copy(D).multiplyScalar($),M.copy(V).sub(d),T.copy(V).add(d),Z=J+ct,at=!1,G!==void 0){ce(V,G,h),d.copy(h).multiplyScalar($),A.copy(V).sub(d),U.copy(V).add(d),ht=!0,d.subVectors(G,tt),D.dot(d)<0&&(ht=!1),b===1&&(Mt=ht),d.subVectors(G,V),d.normalize();let N=Math.abs(D.dot(d));if(N>Number.EPSILON){let Y=$/N;d.multiplyScalar(-Y),u.subVectors(V,tt),f.copy(u).setLength(Y).add(d),x.copy(f).negate();let Q=f.length(),ot=u.length();u.divideScalar(ot),g.subVectors(G,V);let yt=g.length();if(g.divideScalar(yt),u.dot(x)<ot&&g.dot(x)<yt&&(at=!0),C.copy(f).add(V),x.add(V),at){let mt=ht?p:m,q=(C.x-mt.x)*(x.y-mt.y)-(C.y-mt.y)*(x.x-mt.x);(ht&&q<0||!ht&&q>0)&&x.copy(mt)}switch(ut=!1,at?ht?(U.copy(x),T.copy(x)):(A.copy(x),M.copy(x)):P(),e.strokeLineJoin){case"bevel":R(ht,at,Z);break;case"round":O(ht,at),ht?L(V,M,A,Z,0):L(V,U,T,Z,1);break;default:let mt=$*e.strokeMiterLimit/Q;if(mt<1)if(e.strokeLineJoin!=="miter-clip"){R(ht,at,Z);break}else O(ht,at),ht?(g.subVectors(C,M).multiplyScalar(mt).add(M),v.subVectors(C,A).multiplyScalar(mt).add(A),F(M,Z,0),F(g,Z,0),F(V,Z,.5),F(V,Z,.5),F(g,Z,0),F(v,Z,0),F(V,Z,.5),F(v,Z,0),F(A,Z,0)):(g.subVectors(C,T).multiplyScalar(mt).add(T),v.subVectors(C,U).multiplyScalar(mt).add(U),F(T,Z,1),F(g,Z,1),F(V,Z,.5),F(V,Z,.5),F(g,Z,1),F(v,Z,1),F(V,Z,.5),F(v,Z,1),F(U,Z,1));else at?(ht?(F(p,J,1),F(m,J,0),F(C,Z,0),F(p,J,1),F(C,Z,0),F(x,Z,1)):(F(p,J,1),F(m,J,0),F(C,Z,1),F(m,J,0),F(x,Z,0),F(C,Z,1)),ht?A.copy(C):U.copy(C)):ht?(F(M,Z,0),F(C,Z,0),F(V,Z,.5),F(V,Z,.5),F(C,Z,0),F(A,Z,0)):(F(T,Z,1),F(C,Z,1),F(V,Z,.5),F(V,Z,.5),F(C,Z,1),F(U,Z,1)),ut=!0;break}}else P()}else P();!H&&b===B-1&&st(t[0],E,I,ht,!0,J),J=Z,tt=V,m.copy(A),p.copy(U)}if(!H)st(V,M,T,ht,!1,Z);else if(at&&r){let b=C,D=x;Mt!==ht&&(b=x,D=C),ht?(ut||Mt)&&(D.toArray(r,0),D.toArray(r,9),ut&&b.toArray(r,3)):(ut||!Mt)&&(D.toArray(r,3),D.toArray(r,9),ut&&b.toArray(r,0))}if(r){let b=[new _t,new _t,new _t],D=c*3;for(let N=D;N<Jt;N+=9)b[0].set(r[N],r[N+1]),b[1].set(r[N+3],r[N+4]),b[2].set(r[N+6],r[N+7]),Sn.area(b)<0&&(r[N+3]=b[0].x,r[N+4]=b[0].y)}return At;function ce(b,D,N){return N.subVectors(D,b),N.set(-N.y,N.x).normalize()}function F(b,D,N){r&&(r[Jt]=b.x,r[Jt+1]=b.y,r[Jt+2]=0,a&&(a[Jt]=0,a[Jt+1]=0,a[Jt+2]=1),Jt+=3,o&&(o[ne]=D,o[ne+1]=N,ne+=2)),At+=3}function L(b,D,N,Y,Q){l.copy(D).sub(b).normalize(),h.copy(N).sub(b).normalize();let ot=Math.PI,yt=l.dot(h);Math.abs(yt)<1&&(ot=Math.abs(Math.acos(yt))),ot/=n,d.copy(D);for(let mt=0,q=n-1;mt<q;mt++)u.copy(d).rotateAround(b,ot),F(d,Y,Q),F(u,Y,Q),F(b,Y,.5),d.copy(u);F(d,Y,Q),F(N,Y,Q),F(b,Y,.5)}function P(){F(p,J,1),F(m,J,0),F(M,Z,0),F(p,J,1),F(M,Z,0),F(T,Z,1)}function R(b,D,N){D?b?(F(p,J,1),F(m,J,0),F(M,Z,0),F(p,J,1),F(M,Z,0),F(x,Z,1),F(M,N,0),F(A,N,0),F(x,N,.5)):(F(p,J,1),F(m,J,0),F(T,Z,1),F(m,J,0),F(x,Z,0),F(T,Z,1),F(T,N,1),F(x,N,0),F(U,N,1)):b?(F(M,N,0),F(A,N,0),F(V,N,.5)):(F(T,N,1),F(U,N,0),F(V,N,.5))}function O(b,D){D&&(b?(F(p,J,1),F(m,J,0),F(M,Z,0),F(p,J,1),F(M,Z,0),F(x,Z,1),F(M,J,0),F(V,Z,.5),F(x,Z,1),F(V,Z,.5),F(A,J,0),F(x,Z,1)):(F(p,J,1),F(m,J,0),F(T,Z,1),F(m,J,0),F(x,Z,0),F(T,Z,1),F(T,J,1),F(x,Z,0),F(V,Z,.5),F(V,Z,.5),F(x,Z,0),F(U,J,1)))}function st(b,D,N,Y,Q,ot){switch(e.strokeLineCap){case"round":Q?L(b,N,D,ot,.5):L(b,D,N,ot,.5);break;case"square":if(Q)l.subVectors(D,b),h.set(l.y,-l.x),d.addVectors(l,h).add(b),u.subVectors(h,l).add(b),Y?(d.toArray(r,3),u.toArray(r,0),u.toArray(r,9)):(d.toArray(r,3),o[7]===1?u.toArray(r,9):d.toArray(r,9),u.toArray(r,0));else{l.subVectors(N,b),h.set(l.y,-l.x),d.addVectors(l,h).add(b),u.subVectors(h,l).add(b);let yt=r.length;Y?(d.toArray(r,yt-3),u.toArray(r,yt-6),u.toArray(r,yt-12)):(u.toArray(r,yt-6),d.toArray(r,yt-3),u.toArray(r,yt-12))}break;default:break}}function xt(b){let D=!1;for(let Y=1,Q=b.length-1;Y<Q;Y++)if(b[Y].distanceTo(b[Y+1])<s){D=!0;break}if(!D)return b;let N=[];N.push(b[0]);for(let Y=1,Q=b.length-1;Y<Q;Y++)b[Y].distanceTo(b[Y+1])>=s&&N.push(b[Y]);return N.push(b[b.length-1]),N}}},Ou=/^\s*url\(\s*(?:["']\s*)?#([^)'"\s]+)(?:\s*["'])?\s*\)\s*$/;function V0(i,t,e=256){if(!i||!Array.isArray(i.stops)||i.stops.length===0)return null;let n=t.userData.transform,s=i.gradientUnits==="objectBoundingBox",r=null;if(s&&(r=G0(t,n),r===null))return null;function a(d,u,f){f.set(d,u,1),i.gradientTransform&&f.applyMatrix3(i.gradientTransform),s&&f.set(r.minX+f.x*r.width,r.minY+f.y*r.height,1),n&&f.applyMatrix3(n)}let o=document.createElement("canvas"),c;if(i.type==="linearGradient"){o.width=e,o.height=1;let d=o.getContext("2d"),u=d.createLinearGradient(0,0,e,0);Bu(u,i.stops),d.fillStyle=u,d.fillRect(0,0,e,1);let f=new k,g=new k;a(i.x1,i.y1,f),a(i.x2,i.y2,g);let v=g.x-f.x,m=g.y-f.y,p=v*v+m*m||1e-20,E=v/p,I=m/p,M=-(E*f.x+I*f.y);c=new $t().set(E,I,M,0,0,.5,0,0,1)}else{let d=i.cx,u=i.cy,f=i.fx,g=i.fy,v=i.r;if(i.gradientTransform){let x=new k;x.set(d,u,1).applyMatrix3(i.gradientTransform),d=x.x,u=x.y,x.set(f,g,1).applyMatrix3(i.gradientTransform),f=x.x,g=x.y}if(s&&(d=r.minX+d*r.width,u=r.minY+u*r.height,f=r.minX+f*r.width,g=r.minY+g*r.height,v=v*Math.sqrt((r.width*r.width+r.height*r.height)/2)),v<=0)return null;o.width=e,o.height=e;let m=o.getContext("2d"),p=d-v,E=u-v,I=2*v,M=e/I;m.setTransform(M,0,0,M,-p*M,-E*M);let T=m.createRadialGradient(f,g,0,d,u,v);Bu(T,i.stops),m.fillStyle=T,m.fillRect(p,E,I,I);let A=n?n.clone().invert():new $t;c=new $t().set(1/I,0,-p/I,0,1/I,-E/I,0,0,1).multiply(A)}let l=new qi(o);l.colorSpace=Kr,l.flipY=!1,l.matrixAutoUpdate=!1,l.matrix=c;let h=i.spreadMethod==="reflect"?Ms:i.spreadMethod==="repeat"?vs:Ln;return l.wrapS=h,l.wrapT=h,l}function G0(i,t){let e=t?t.clone().invert():null,n=new _t,s=new Ds;for(let r of i.subPaths)for(let a of r.getPoints())n.copy(a),e&&n.applyMatrix3(e),s.expandByPoint(n);return s.isEmpty()?null:{minX:s.min.x,minY:s.min.y,width:s.max.x-s.min.x,height:s.max.y-s.min.y}}function Bu(i,t){let e=new le;for(let n of t){let s=n.color;if(n.opacity<1){e.setStyle(n.color,Kr);let r=/rgb\(([^)]+)\)/.exec(e.getStyle(Kr));r&&(s=`rgba(${r[1]},${n.opacity})`)}i.addColorStop(Math.max(0,Math.min(1,n.offset)),s)}}window.mkStudio=!0;var Me=window,xn=document,Zs=xn.documentElement,Ge=(i,t)=>(t||xn).querySelector(i),Jn=(i,t)=>Array.from((t||xn).querySelectorAll(i)),Oe=Me.gsap,fn=Me.ScrollTrigger,Js=Me.SplitText,Bc=!!(Me.matchMedia&&Me.matchMedia("(prefers-reduced-motion: reduce)").matches),es=!!(Me.matchMedia&&Me.matchMedia("(hover: hover) and (pointer: fine)").matches),Ve=!!(Oe&&fn)&&Zs.classList.contains("motion")&&!Bc;Ve||Zs.classList.remove("motion");var xi=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Te=(i,t,e)=>i+(t-i)*e,Ze=(i,t,e)=>xi((i-t)/(e-t)),_i=i=>i>=1?1:1-Math.pow(2,-10*i),qs=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,ts=i=>1+2.7*Math.pow(i-1,3)+1.7*Math.pow(i-1,2);function Uc(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var On={a:Ve?0:1,v:Ve?1:0},Fc={landed:null};e_();n_();var Zn=t_(),Ys=Q0(),yi=null;Ve&&(Oe.registerPlugin(fn),Js&&Oe.registerPlugin(Js),"scrollRestoration"in history&&(history.scrollRestoration="manual"),es&&Me.Lenis&&(yi=new Me.Lenis({duration:1.15,smoothWheel:!0}),yi.on("scroll",fn.update),Oe.ticker.add(i=>yi.raf(i*1e3)),Oe.ticker.lagSmoothing(0),Zs.classList.add("lenis")));i_();var Oc=Ve?X0():null;Me.mkHero=Oc;var H0=Ge("#gl"),dn=null;try{dn=new Ko({canvas:H0,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{dn=null}dn?(Zs.classList.add("gl"),W0()):(Zs.classList.add("no-gl"),On.v=0,On.a=1,Ve&&(zu(),fn.create({trigger:".steps-track",start:"top 72%",end:"bottom 55%",onUpdate:i=>Ys.set(i.progress),onRefresh:()=>Ys.measure()})));if(Oc){let i=0,t=0,e=n=>{i=t&&n-t<50?i+1:0,t=n,i>=2?Oc.play():requestAnimationFrame(e)};requestAnimationFrame(e)}function W0(){dn.setClearColor(0,0),dn.outputColorSpace=Ye,dn.toneMapping=Or,dn.toneMappingExposure=1;let i=Math.min(Me.devicePixelRatio||1,es?2:1.75);dn.setPixelRatio(i);let t=new Wi,e=new Hs(dn);t.environment=e.fromScene(new el,.04).texture,e.dispose();let n=new Ns(16777215,1.5);n.position.set(-6,9,12),t.add(n);let s=new Ns(14674175,.6);s.position.set(8,-3,6),t.add(s),t.add(new Ur(16777215,.22));let r=30,a=60,o=new en(r,1,1,400);o.position.set(0,0,a);let c=1,l=1,h=1;function d(){c=Me.innerWidth,l=Me.innerHeight,dn.setSize(c,l,!1),o.aspect=c/l,o.updateProjectionMatrix(),h=2*a*Math.tan(r*Math.PI/360)/l}d(),Me.addEventListener("resize",d);let u=()=>new k,f=(lt,K,gt)=>(gt||u()).set((lt-c/2)*h,-(K-l/2)*h,0),g={yellow:new ii({color:16631808,roughness:.26,metalness:0,clearcoat:1,clearcoatRoughness:.06}),navy:new ii({color:1845564,roughness:.42,clearcoat:.7,clearcoatRoughness:.2,envMapIntensity:.55}),navyMatte:new ii({color:1845564,roughness:.55,specularIntensity:.22,clearcoat:.18,clearcoatRoughness:.35,envMapIntensity:.3}),white:new ii({color:16250868,roughness:.5,clearcoat:.35,clearcoatRoughness:.3}),paper:new ii({color:15133166,roughness:.6,clearcoat:.2}),line:new An({color:13225686,roughness:.7}),lineDark:new An({color:1845564,roughness:.6}),chip:new An({color:15659251,roughness:.65}),green:new ii({color:2995050,roughness:.3,clearcoat:.8})},v=(lt,K,gt,Tt,wt=4)=>new tl(lt,K,gt,wt,Math.min(Tt,lt/2-.001,K/2-.001,gt/2-.001)),m=(lt,K)=>new ze(lt,K),p=new Ar(1,64,48);function E(lt,K,gt){let Tt=new mi,wt=-lt/2,Bt=-K/2;Tt.moveTo(wt+gt,Bt),Tt.lineTo(wt+lt-gt,Bt),Tt.absarc(wt+lt-gt,Bt+gt,gt,-Math.PI/2,0,!1),Tt.lineTo(wt+lt,Bt+K-gt),Tt.absarc(wt+lt-gt,Bt+K-gt,gt,0,Math.PI/2,!1),Tt.lineTo(wt+gt,Bt+K),Tt.absarc(wt+gt,Bt+K-gt,gt,Math.PI/2,Math.PI,!1),Tt.lineTo(wt,Bt+gt),Tt.absarc(wt+gt,Bt+gt,gt,Math.PI,Math.PI*1.5,!1);let Ee=new wr(Tt,10),ie=Ee.attributes.position,re=Ee.attributes.uv;for(let xe=0;xe<re.count;xe++)re.setXY(xe,(ie.getX(xe)-wt)/lt,(ie.getY(xe)-Bt)/K);return Ee}let I=!0,M=!1;function T(lt,K,gt){let Tt=xn.createElement("canvas");Tt.width=lt,Tt.height=K;let wt=new qi(Tt);return wt.colorSpace=Ye,wt.anisotropy=Math.min(8,dn.capabilities.getMaxAnisotropy()),wt.userData.draw=()=>{let Bt=Tt.getContext("2d");Bt.clearRect(0,0,lt,K),gt(Bt,lt,K),wt.needsUpdate=!0},wt.userData.draw(),wt}let A={clock:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5V12l3 2",phone:"M5.5 3.5h3.2l1.8 4.6-2.3 1.5a11 11 0 0 0 6.2 6.2l1.5-2.3 4.6 1.8v3.2a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2z",chat:"M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.5-4.4a8.4 8.4 0 1 1 15.5-4.5z",camera:"M4 8h3l1.6-2.5h6.8L17 8h3v11H4zM12 9.9a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6z"};function U(lt,K,gt,Tt,wt,Bt){Me.Path2D&&(lt.save(),lt.translate(gt-wt/2,Tt-wt/2),lt.scale(wt/24,wt/24),lt.strokeStyle=Bt,lt.lineWidth=2.1,lt.lineCap="round",lt.lineJoin="round",lt.stroke(new Path2D(A[K])),lt.restore())}function x(lt,K,gt,Tt,wt){let Bt=wt;for(lt.font=gt.replace("$",Bt);lt.measureText(K).width>Tt&&Bt>12;)Bt-=2,lt.font=gt.replace("$",Bt);return Bt}let C="../assets/img/",B={};function H(lt){return B[lt]||(B[lt]=new Promise(K=>{let gt=new Image;gt.decoding="async",gt.onload=()=>K(gt),gt.onerror=()=>K(null),gt.src=C+lt})),B[lt]}let V=new Xi(new Uint8Array([214,218,224,255]),1,1);V.colorSpace=Ye,V.needsUpdate=!0,V.userData.keep=!0;let tt=lt=>new An(Object.assign({map:V,roughness:.55},lt));function G(){let lt=tt({roughness:.8});return lt.onBeforeCompile=K=>{K.fragmentShader=K.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
float mkL = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
diffuseColor.rgb = mix(vec3(mkL), diffuseColor.rgb, 0.25) * vec3(0.62, 0.6, 0.56) + vec3(0.035, 0.03, 0.02);`)},lt.customProgramCacheKey=()=>"mk-dull",lt}let $={};function ct(lt,K,gt=1,Tt=.5,wt=.5,Bt,Ee=0){H(lt).then(ie=>{if(!ie)return;if(!$[lt]){let Qt=new sn(ie);Qt.colorSpace=Ye,Qt.anisotropy=4,Qt.needsUpdate=!0,$[lt]=Qt}let re=$[lt].clone(),xe=ie.naturalWidth/ie.naturalHeight,ye=1,Pe=1;xe>K?ye=K/xe:Pe=xe/K,ye/=gt,Pe/=gt,re.repeat.set(ye,Pe),re.offset.set((1-ye)*Tt,(1-Pe)*wt),Ee&&(re.center.set(.5,.5),re.rotation=Ee),Bt.map&&Bt.map!==re&&!Bt.map.userData.keep&&Bt.map.dispose(),Bt.map=re,Bt.color.set(16777215),I=!0})}let J=m(p,g.yellow);J.renderOrder=2,t.add(J),J.visible=!1;let Z=[];function at(lt,K,gt){let Tt=new We;t.add(Tt);let wt={el:lt,g:Tt,designH:K,p:0,visible:!1,...gt(Tt)};return Z.push(wt),wt}function ht(lt){let K=lt.el.getBoundingClientRect();if(lt.visible=K.bottom>-l*.3&&K.top<l*1.3&&K.height>0,lt.g.visible=lt.visible,K.height<=0)return;f(K.left+K.width/2,K.top+K.height/2,lt.g.position);let gt=Math.min(K.height,K.width/(lt.aspect||.9))*h/(lt.designH*(c>=960&&lt.fillD||1));lt.g.scale.setScalar(gt)}let ut=at(Ge("[data-stage=site]"),10.7,lt=>{let K=new We;lt.add(K);let gt=m(v(5.2,9.6,.3,.42,6),g.white);K.add(gt);let Tt=new We;K.add(Tt),Tt.add(m(v(4.6,1,.12,.2),g.navy));let wt=T(1024,220,(jt,S,z)=>{let rt=Zn.name(),et=x(jt,rt,'760 $px "Mona Sans"',S-40,120);jt.fillStyle="#f5f5f2",jt.textBaseline="middle",jt.fillText(rt,20,z/2+et*.04)}),Bt=m(new Hn(4.3,.92),new tn({map:wt,transparent:!0,toneMapped:!1}));Bt.position.z=.07,Tt.add(Bt);let Ee=tt(),ie=m(E(4.6,3.1,.28),Ee);K.add(ie);let re=m(v(3.5,.36,.07,.1),g.lineDark),xe=[4.2,3.7,2.7].map(jt=>m(v(jt,.16,.05,.06),g.line)),ye=[re].concat(xe);ye.forEach(jt=>{jt.geometry.translate(jt.geometry.parameters.width/2,0,0),K.add(jt)});let Pe=new We;Pe.add(m(v(2.1,.6,.1,.25),g.chip));let Qt=m(p,g.green);Qt.scale.setScalar(.13),Qt.position.set(-.68,0,.08),Pe.add(Qt);let ve=m(v(1.1,.13,.04,.05),g.line);ve.position.set(.12,0,.06),Pe.add(ve);let Se=m(v(1.7,.6,.1,.25),g.chip);K.add(Pe,Se);let Rt=new We;K.add(Rt),Rt.add(m(v(2.9,.9,.16,.42),g.navy));let me=T(512,160,(jt,S,z)=>{jt.fillStyle="#f5f5f2",jt.font='700 64px "Inter"',jt.textAlign="center",jt.textBaseline="middle",jt.fillText("Prenota",S/2,z/2+4)}),we=m(new Hn(2.4,.75),new tn({map:me,transparent:!0,toneMapped:!1}));we.position.z=.09,Rt.add(we);let ae=m(new Zi(.62,.7,64),new tn({color:16631808,transparent:!0,opacity:0,depthWrite:!1}));K.add(ae);let te=new k(1.62,-3.95,.15+.56);return ae.position.set(te.x,te.y,.16),{aspect:.62,fillD:1.22,card:K,nameTex:wt,photoM:Ee,FAB:te,fabR:.56,ring:ae,pose(jt,S){let z=_i(Ze(jt,0,.18));K.rotation.set(Te(.5,.1,z)+Math.sin(S*.7)*.015,Te(-1,-.34,z)+qs(Ze(jt,.6,1))*.5,Te(-.12,0,z)),K.position.set(0,Te(-3,0,z)+Math.sin(S*.9)*.06,0),K.scale.setScalar(Te(.55,1,z));let rt=_i(Ze(jt,.1,.25));Tt.position.set(0,Te(7,3.95,rt),Te(3,.22,rt)),Tt.scale.setScalar(Te(.6,1,rt));let et=_i(Ze(jt,.18,.33));ie.position.set(0,1.6,Te(6,.16,et)),ie.scale.setScalar(Te(1.35,1,et)),ie.visible=et>.001,ye.forEach((Dt,Vt)=>{let Xt=_i(Ze(jt,.28+Vt*.035,.4+Vt*.035));Dt.scale.set(Math.max(Xt,.001),1,1),Dt.visible=Xt>.002,Dt.position.set(-2.3,[-.45,-1.05,-1.4,-1.75][Vt],.18)});let nt=ts(Ze(jt,.4,.48)),Ft=ts(Ze(jt,.44,.52));Pe.position.set(-1.25,-2.55,.2),Pe.scale.setScalar(Math.max(nt,.001)),Se.position.set(.85,-2.55,.2),Se.scale.setScalar(Math.max(Ft,.001));let zt=ts(Ze(jt,.47,.56));Rt.position.set(-.85,-3.95,.22),Rt.scale.setScalar(Math.max(zt,.001))}}}),Mt=at(Ge("[data-stage=map]"),12,lt=>{let K=new We;lt.add(K);let gt=new We;K.add(gt),gt.add(m(v(9.4,6.8,.36,.5,6),g.navyMatte));let Tt=T(1024,740,(Rt,me,we)=>{let ae=Uc(7);Rt.fillStyle="#eceff3",Rt.fillRect(0,0,me,we),Rt.fillStyle="#c9e5c4",Rt.beginPath(),Rt.ellipse(170,560,190,120,-.3,0,Math.PI*2),Rt.fill(),Rt.strokeStyle="#9fcbe8",Rt.lineWidth=46,Rt.lineCap="round",Rt.beginPath(),Rt.moveTo(-40,120),Rt.bezierCurveTo(260,200,420,40,700,150),Rt.bezierCurveTo(860,210,960,110,1080,160),Rt.stroke(),Rt.fillStyle="#dde2e9";for(let te=0;te<26;te++){let jt=40+te%7*140+ae()*30,S=250+Math.floor(te/7)*120+ae()*20;Rt.beginPath(),Rt.roundRect?Rt.roundRect(jt,S,96+ae()*20,76+ae()*14,10):Rt.rect(jt,S,96,76),Rt.fill()}Rt.strokeStyle="#ffffff",Rt.lineWidth=22,[[0,230,1024,250],[0,470,1024,440],[300,0,330,740],[640,0,610,740],[0,700,1024,600]].forEach(te=>{Rt.beginPath(),Rt.moveTo(te[0],te[1]),Rt.lineTo(te[2],te[3]),Rt.stroke()}),Rt.strokeStyle="#ffd24a",Rt.lineWidth=30,Rt.beginPath(),Rt.moveTo(-20,380),Rt.bezierCurveTo(300,330,600,420,1050,330),Rt.stroke()}),wt=m(E(9,6.4,.36),new An({map:Tt,roughness:.8}));wt.position.z=.185,gt.add(wt);let Bt=new k(.7,-.2,0),Ee=m(new xr(.24,1.9,40),g.navy);Ee.rotation.x=-Math.PI/2,Ee.geometry.translate(0,-.95,0);let ie=new We;ie.position.set(Bt.x,Bt.y,.19),ie.add(Ee),gt.add(ie);let re=m(new As(.9,48),new tn({color:1845564,transparent:!0,opacity:.18,depthWrite:!1}));re.position.set(Bt.x+.25,Bt.y-.1,.19),gt.add(re);let xe=[0,1,2].map(()=>{let Rt=m(new Zi(.62,.74,64),new tn({color:16631808,transparent:!0,opacity:0,depthWrite:!1}));return Rt.position.set(Bt.x,Bt.y,.2),gt.add(Rt),Rt}),ye=[{ic:"clock",tx:"Orari giusti",at:[-3.1,1.6,2]},{ic:"phone",tx:"Chiama",at:[-2.9,-1.55,1.5]},{ic:"chat",tx:"WhatsApp",at:[3.4,1.9,2.6]},{ic:"camera",tx:"Foto vere",at:[3.3,-1.7,1.9]}].map(Rt=>{let me=new We;me.add(m(v(2.9,1.1,.14,.3),g.white));let we=T(640,240,(te,jt,S)=>{U(te,Rt.ic,100,S/2,92,"#1c293c"),te.fillStyle="#1c293c",x(te,Rt.tx,'650 $px "Inter"',jt-190,76),te.textBaseline="middle",te.fillText(Rt.tx,170,S/2+4)}),ae=m(new Hn(2.64,.99),new tn({map:we,transparent:!0,toneMapped:!1}));return ae.position.z=.08,me.add(ae),gt.add(me),{grp:me,at:Rt.at}}),Pe=new Tn,Qt=new We;Qt.add(m(v(5,1.5,.16,.32),g.white));let ve=T(1024,300,(Rt,me,we)=>{let ae=Zn.name();Rt.fillStyle="#1c293c",x(Rt,ae,'760 $px "Mona Sans"',me-70,112),Rt.textBaseline="alphabetic",Rt.fillText(ae,36,150),Rt.fillStyle="#56627a",Rt.font='560 54px "Inter"',Rt.fillText(Zn.cat()+" \xB7 ",36,236);let te=Rt.measureText(Zn.cat()+" \xB7 ").width;Rt.fillStyle="#1f9d58",Rt.fillText("Aperto",36+te,236)}),Se=m(new Hn(4.7,1.38),new tn({map:ve,transparent:!0,toneMapped:!1}));return Se.position.z=.09,Qt.add(Se),gt.add(Qt),{aspect:.95,tilt:K,spin:gt,needleG:ie,rings:xe,cards:ye,title:Qt,titleTex:ve,PIN:Bt,pinR:.6,headZ:.19+1.9+.42,pose(Rt,me){let we=_i(Ze(Rt,0,.18));K.rotation.set(Te(-1.4,-.84,we),0,0),K.position.set(0,Te(-2.5,-.6,we),0),K.scale.setScalar(Te(.7,1,we)),gt.rotation.z=Te(.35,0,we)+qs(Ze(Rt,.66,1))*-.32+Math.sin(me*.5)*.01,lt.updateWorldMatrix(!0,!0),gt.getWorldQuaternion(Pe).invert();let ae=_i(Ze(Rt,.24,.34));ie.scale.set(1,1,Math.max(ae,.001)),ie.visible=ae>.002,ye.forEach((jt,S)=>{let z=ts(Ze(Rt,.38+S*.07,.5+S*.07));jt.grp.position.set(jt.at[0],jt.at[1],Te(.2,jt.at[2],z)+Math.sin(me*1.1+S)*.06),jt.grp.quaternion.copy(Pe),jt.grp.scale.setScalar(Math.max(z,.001)*1.22),jt.grp.visible=z>.002});let te=ts(Ze(Rt,.62,.74));Qt.position.set(-.2,3.9,Te(.2,3.1,te)),Qt.quaternion.copy(Pe),Qt.scale.setScalar(Math.max(te,.001)*1.12),Qt.visible=te>.002}}}),At=at(Ge("[data-stage=grid]"),11.6,lt=>{let K=new We;lt.add(K),K.add(m(v(6.6,9.4,.26,.44,6),g.white));let gt=tt({roughness:.6}),Tt=m(new As(.78,64),gt);Tt.position.set(-2.3,3.55,.15),K.add(Tt);let wt=m(new Cr(.95,.09,20,80),g.yellow);wt.position.set(-2.3,3.55,.2),K.add(wt);let Bt=T(1024,200,(Qt,ve,Se)=>{let Rt=Zn.handle();Qt.fillStyle="#1b1b1b",x(Qt,Rt,'700 $px "Inter"',ve-30,92),Qt.textBaseline="middle",Qt.fillText(Rt,10,Se/2+4)}),Ee=m(new Hn(3.6,.7),new tn({map:Bt,transparent:!0,toneMapped:!1}));Ee.position.set(.55,3.85,.15),K.add(Ee),[2.6,1.8].forEach((Qt,ve)=>{let Se=m(v(Qt,.15,.04,.06),g.line);Se.position.set(-1.05+Qt/2,3.18-ve*.34,.15),K.add(Se)});let ie=1.98,re=.08,xe=[],ye=Uc(11);for(let Qt=0;Qt<9;Qt++){let ve=Qt%3,Se=Math.floor(Qt/3),Rt=new We;Rt.add(m(v(ie,ie,.1,.08,2),g.white));let me=tt(),we=G(),ae=m(E(ie-.02,ie-.02,.08),me);ae.position.z=.052,Rt.add(ae);let te=m(E(ie-.02,ie-.02,.08),we);te.position.z=-.052,te.rotation.y=Math.PI,Rt.add(te),K.add(Rt),xe.push({grp:Rt,front:me,back:we,at:new k((ve-1)*(ie+re),1.02-Se*(ie+re),.22),from:new k((ye()-.5)*18,(ye()-.5)*16,2+ye()*7),rot:new Nn((ye()-.5)*3,(ye()-.5)*5,(ye()-.5)*2),delay:ye()*.08})}return{aspect:.66,fillD:1.16,card:K,tiles:xe,ORDER:[0,1,2,5,4,3,6,7,8],avatar:Tt,avatarM:gt,avRing:wt,handleTex:Bt,tileR:.42,flipAt:[],pose(Qt,ve){let Se=_i(Ze(Qt,0,.16));K.rotation.set(Te(.35,.06,Se)+Math.sin(ve*.6)*.012,Te(.9,.22,Se)-qs(Ze(Qt,.86,1))*.36,0),K.scale.setScalar(Te(.55,1,Se)),K.position.set(0,Te(-2.5,0,Se),0),xe.forEach((me,we)=>{let ae=qs(Ze(Qt,.05+me.delay,.3+me.delay));me.grp.position.lerpVectors(me.from,me.at,ae);let te=this.flipAt[we]!==void 0?_i(Ze(Qt,this.flipAt[we],this.flipAt[we]+.05)):0;me.grp.rotation.set(me.rot.x*(1-ae),Math.PI+me.rot.y*(1-ae)-Math.PI*te,me.rot.z*(1-ae))});let Rt=ts(Ze(Qt,.9,.97));wt.scale.setScalar(Math.max(Rt,.001)),wt.visible=Rt>.002}}}),Jt=at(Ge("[data-stage=logo]"),12.4,lt=>{let K=new We;lt.add(K);let gt=5.4,Tt=gt/540,wt=new mi;wt.absarc(0,0,gt,0,Math.PI*2,!1);let Bt=new Ps(wt,{depth:.5,bevelEnabled:!0,bevelThickness:.2,bevelSize:.2,bevelSegments:8,curveSegments:96});Bt.translate(0,0,-.25);let Ee=m(Bt,g.navyMatte);K.add(Ee);let ie=.25+.2,xe=new nl().parse('<svg xmlns="http://www.w3.org/2000/svg"><path d="'+"M175.3 713.9H265.1V577.8C265.1 556.2 276.8 542.7 295 542.7C313.7 542.7 325.3 556.2 325.3 577.8V713.9H410.7V577.8C410.7 556.2 422.4 542.7 440.3 542.7C459 542.7 470.9 556.2 470.9 577.8V713.9H560.7V555.3C560.7 504.3 527.9 471.3 480.3 471.3C446.8 471.3 415.4 487.7 403.5 520.7C394.1 487.5 366 471.3 334.8 471.3C303.3 471.3 274.8 487.5 261.5 523.2V476.7H175.3ZM579.4 713.9H669.2V648.1L682.2 631.9L732.5 713.9H834.5L748.3 580.9L831.8 476.7H730.3L670.1 554H669.2V379.2H579.4Z"+'"/></svg>'),ye=[];xe.paths.forEach(Qt=>Qt.toShapes().forEach(ve=>{let Se=new Ps(ve,{depth:26,bevelEnabled:!0,bevelThickness:5,bevelSize:4,bevelSegments:4,curveSegments:16});Se.translate(-540,-540,0),Se.scale(Tt,Tt,Tt),Se.rotateX(Math.PI),Se.translate(0,0,31*Tt);let Rt=m(Se,g.white);Rt.position.z=ie-.05,K.add(Rt),ye.push(Rt)})),ye.sort((Qt,ve)=>(Qt.geometry.computeBoundingBox(),ve.geometry.computeBoundingBox(),Qt.geometry.boundingBox.min.x-ve.geometry.boundingBox.min.x));let Pe=new k(346*Tt,-(675.9-540)*Tt,ie+38*Tt*.82);return{aspect:.9,grp:K,letters:ye,SLOT:Pe,slotR:38*Tt*1.08,pose(Qt,ve,Se,Rt){let me=_i(Ze(Qt,0,.42));K.rotation.set(Te(.6,0,me)+Rt*.18+Math.sin(ve*.8)*.02,Te(-Math.PI*1.1,0,me)+Se*.32,0),K.scale.setScalar(Te(.6,1,me)),ye.forEach((we,ae)=>{let te=ts(Ze(Qt,.3+ae*.08,.5+ae*.08));we.position.z=Te(-1.6,ie-.05,te),we.scale.setScalar(Math.max(Te(.7,1,te),.001)),we.visible=te>.002})}}}),ne={food:{hero:["t-hero.jpg",1,.5,.45],tiles:[["t-ravioli.jpg"],["t-tagliatelle.jpg"],["t-tiramisu.jpg"],["t-gnocchi.jpg"],["t-dehors.jpg"],["t-hero.jpg",1.3,.3,.5],["t-ravioli.jpg",1.7,.8,.3],["t-tiramisu.jpg",1.6,.2,.7],["t-tagliatelle.jpg",1.6,.7,.8]],avatar:"t-tagliatelle.jpg"},hair:{hero:["s-piega.jpg",1,.5,.42],tiles:[["s-colore.jpg"],["s-liscio.jpg"],["s-piega.jpg"],["s-ricci.jpg"],["s-sposa.jpg"],["s-treccia.jpg"],["s-ricci.jpg",1.6,.3,.7],["s-colore.jpg",1.6,.6,.3],["s-liscio.jpg",1.7,.4,.6]],avatar:"s-treccia.jpg"},bake:{hero:["g-banco.jpg",1,.5,.5],tiles:[["g-croissant.jpg"],["g-focaccia.jpg"],["g-pagnotta.jpg"],["g-grissini.jpg"],["g-impasto.jpg"],["g-farina.jpg"],["g-banco.jpg",1.4,.25,.5],["g-croissant.jpg",1.6,.7,.4],["g-focaccia.jpg",1.6,.3,.7]],avatar:"g-pagnotta.jpg"}};function ce(){let lt=ne[Zn.kind()]||ne.food;ct(lt.hero[0],4.6/3.1,lt.hero[1],lt.hero[2],lt.hero[3],ut.photoM),At.tiles.forEach((K,gt)=>{let Tt=lt.tiles[gt];ct(Tt[0],1,Tt[1]||1,Tt[2]===void 0?.5:Tt[2],Tt[3]===void 0?.5:Tt[3],K.front);let wt=Uc(31+gt*7);ct(Tt[0],1,(Tt[1]||1)*1.3,.5+(wt()-.5)*.5,.5+(wt()-.5)*.5,K.back,(wt()-.5)*.2)}),ct(lt.avatar,1,1.2,.5,.5,At.avatarM)}function F(){[ut.nameTex,Mt.titleTex,At.handleTex].forEach(lt=>lt.userData.draw())}Zn.on(()=>{F(),ce()}),ce();let L=xn.fonts&&xn.fonts.load?Promise.all([xn.fonts.load('760 64px "Mona Sans"'),xn.fonts.load('650 64px "Inter"')]).catch(()=>{}):Promise.resolve();L.then(()=>{P(),I=!0});function P(){t.traverse(lt=>{let K=lt.material;K&&K.map&&K.map.userData&&K.map.userData.draw&&K.map.userData.draw()})}let R=u(),O=u(),st={};Jn(".dot[data-dot]").forEach(lt=>{st[lt.getAttribute("data-dot")]=lt});let xt=lt=>K=>{let gt=lt.getBoundingClientRect();return f(gt.left+gt.width/2,gt.top+gt.height/2,K.p),K.r=gt.width/2*h,K},b=(lt,K,gt)=>Tt=>{lt.updateWorldMatrix(!0,!1),Tt.p.copy(K).applyMatrix4(lt.matrixWorld);let wt=lt.getWorldScale(O).x;return Tt.r=gt*wt,Tt},D=[],N=[],Y=30;function Q(lt){D.length=0;let K=(ae,te,jt)=>D.push(Object.assign({y:ae,at:te},jt||{})),gt=st.hero;K(0,xt(gt)),K(l*.16,xt(gt));let Tt=lt.read;if(Tt&&N.length){let ae=Tt.end-Tt.start,te=N.length;N.forEach((jt,S)=>{K(Tt.start+ae*(.04+S/(te-1)*.8),z=>{let rt=jt.getBoundingClientRect();return f(rt.left+rt.width/2,rt.top+Y*.18,z.p),z.r=Y*.15*h,z.p.y+=z.r,z},{hop:Y*.2*h,word:S})}),K(Tt.end,D[D.length-1].at)}let wt=st.prova,Bt=lt.prova;wt&&Bt&&(K(Bt.start,xt(wt)),K(Bt.end,xt(wt)));let Ee=lt.site,ie=Ee.end-Ee.start;K(Ee.start+ie*.58,b(ut.card,ut.FAB,ut.fabR),{land:"site"}),K(Ee.start+ie*.95,b(ut.card,ut.FAB,ut.fabR));let re=lt.map,xe=re.end-re.start,ye=new k(Mt.PIN.x,Mt.PIN.y,6),Pe=new k(Mt.PIN.x,Mt.PIN.y,.19+Mt.pinR*.92),Qt=new k(Mt.PIN.x,Mt.PIN.y,Mt.headZ);K(re.start+xe*.12,b(Mt.spin,ye,Mt.pinR)),K(re.start+xe*.24,b(Mt.spin,Pe,Mt.pinR),{land:"map",fall:!0}),K(re.start+xe*.34,b(Mt.spin,Qt,Mt.pinR)),K(re.start+xe*.95,b(Mt.spin,Qt,Mt.pinR));let ve=lt.grid,Se=ve.end-ve.start;At.ORDER.forEach((ae,te)=>{let jt=.36+te*.06;At.flipAt[ae]=jt-.01;let S=At.tiles[ae];K(ve.start+Se*jt,b(At.card,new k(S.at.x,S.at.y,S.at.z+.06+At.tileR),At.tileR),{hop:1.3,land:"tile"})});let Rt=new k(-2.3,3.55,.2+.5);K(ve.start+Se*.9,b(At.card,Rt,.5),{hop:2}),K(ve.start+Se*.97,b(At.card,Rt,.5));let me=lt.how;if(me&&Ys.ok){let ae=te=>jt=>{let S=Ys.screen(te);return f(S.x,S.y,jt.p),jt.r=S.r*h,jt};K(me.start,ae(0)),K(me.end,ae(1),{track:(te,jt)=>ae(te)(jt)})}["prezzi","esempi"].forEach(ae=>{let te=lt[ae];te&&st[ae]&&(K(te.start,xt(st[ae])),K(te.end,xt(st[ae])))});let we=lt.sign;K(we.start+(we.end-we.start)*.62,b(Jt.grp,Jt.SLOT,Jt.slotR),{land:"logo",hop:6}),K(we.end+l*4,b(Jt.grp,Jt.SLOT,Jt.slotR)),D.sort((ae,te)=>ae.y-te.y)}let ot={p:u(),r:1},yt={p:u(),r:1},mt=u(),q=-1;function y(lt,K){if(!D.length)return!1;if(lt<=D[0].y)return D[0].at(ot),K.p.copy(ot.p),K.r=ot.r,!0;let gt=0;for(;gt<D.length-1&&D[gt+1].y<=lt;)gt++;if(gt>=D.length-1)return D[D.length-1].at(ot),K.p.copy(ot.p),K.r=ot.r,K.i=gt,!0;let Tt=D[gt],wt=D[gt+1],Bt=xi((lt-Tt.y)/Math.max(1,wt.y-Tt.y));if(K.i=gt,K.t=Bt,wt.track)return wt.track(Bt,K),!0;if(Tt.at(ot),wt.at(yt),Tt.at===wt.at)return K.p.copy(ot.p),K.r=ot.r,!0;let Ee=ot.p.distanceTo(yt.p),ie=wt.hop?xi((Bt-.3)/.7):Bt,re=wt.fall?Bt*Bt:wt.hop?ie:qs(Bt);K.p.lerpVectors(ot.p,yt.p,re),K.r=Te(ot.r,yt.r,qs(ie));let xe=wt.fall?0:wt.hop?wt.hop*4*ie*(1-ie):Math.min(Ee*.32,9)*Math.sin(Math.PI*Bt);return K.p.y+=xe,K.p.z+=wt.hop||wt.fall?0:Math.min(Ee*.25,8)*Math.sin(Math.PI*Bt),!0}let St={};if(Ve){let lt=gt=>()=>"+="+Math.round(Me.innerHeight*gt),K=Ge(".read");N=j0(Ge(".read-p")),St.read=fn.create({trigger:K,start:"top top",end:lt(1.7),pin:!0,anticipatePin:1}),St.prova=fn.create({trigger:"#prova",start:"top 62%",end:"bottom 70%"}),St.site=fn.create({trigger:"#sito",start:"top top",end:lt(2.3),pin:!0,anticipatePin:1}),St.map=fn.create({trigger:"#google",start:"top top",end:lt(2.2),pin:!0,anticipatePin:1}),St.grid=fn.create({trigger:"#instagram",start:"top top",end:lt(2.8),pin:!0,anticipatePin:1}),St.how=fn.create({trigger:".steps-track",start:"top 72%",end:"bottom 55%"}),St.prezzi=fn.create({trigger:"#prezzi",start:"top 55%",end:"bottom 75%"}),St.esempi=fn.create({trigger:"#esempi",start:"top 55%",end:"bottom 60%"}),St.sign=fn.create({trigger:"#contatti",start:"top 92%",end:"top 12%"}),fn.addEventListener("refresh",()=>{Y=parseFloat(getComputedStyle(Ge(".read-p")).fontSize)||30,Ys.measure(),Q(St)}),Me.mkDebug={sts:St,keys:D,dot:J,k:()=>h,st:()=>({ys:Et,i:it.i,t:it.t,lenis:!!yi,fine:es})},zu(),fn.refresh(),L.then(()=>fn.refresh())}else{Z.forEach(K=>{K.p=1});let lt=(K,gt,Tt)=>{let wt=m(p,g.yellow);wt.position.copy(gt),wt.scale.setScalar(Tt),K.add(wt)};lt(ut.card,ut.FAB,ut.fabR),lt(Mt.spin,new k(Mt.PIN.x,Mt.PIN.y,Mt.headZ),Mt.pinR),lt(Jt.grp,Jt.SLOT,Jt.slotR),At.ORDER.forEach(K=>{At.flipAt[K]=0}),Gt()}function Gt(){D.length=0,D.push({y:0,at:xt(st.hero)})}let w={x:0,y:0,sx:0,sy:0,cx:-1e4,cy:-1e4};es&&Me.addEventListener("pointermove",lt=>{w.x=lt.clientX/c*2-1,w.y=lt.clientY/l*2-1,w.cx=lt.clientX,w.cy=lt.clientY},{passive:!0});let _={v:0,h:1},W={x:0,y:0},j=0,dt=()=>{j=0};["pointerdown","pointermove","keydown","wheel","touchstart"].forEach(lt=>Me.addEventListener(lt,dt,{passive:!0}));let bt=lt=>{_.h=lt,Oe.fromTo(_,{v:0},{v:1,duration:.55+.3*lt,ease:"none",overwrite:!0,onComplete:()=>{_.v=0,vt()}})},Ct=()=>[J.position.x/h+c/2,l/2-J.position.y/h];Ve&&Me.addEventListener("pointerdown",lt=>{if(On.v>0||_.v>0)return;let[K,gt]=Ct(),Tt=Math.max(30,Math.abs(J.scale.y)/h*1.8);Math.hypot(lt.clientX-K,lt.clientY-gt)<Tt&&bt(1)},{passive:!0});let it={p:u(),r:1,i:0,t:0},ft=u(),Pt=u(),Ht=new k(0,1,0),Lt=new Tn,Et=Me.pageYOffset,Yt=performance.now(),Kt=0,oe=0,X={},Nt={site:()=>pt(ut.ring),map:()=>Mt.rings.forEach((lt,K)=>pt(lt,K*.16)),tile:()=>{},logo:()=>{}};function pt(lt,K=0){Oe&&(Oe.fromTo(lt.scale,{x:1,y:1},{x:4.2,y:4.2,duration:1.1,delay:K,ease:"expo.out",overwrite:!0}),Oe.fromTo(lt.material,{opacity:.9},{opacity:0,duration:1.1,delay:K,ease:"power2.out",overwrite:!0}))}function It(){let lt=performance.now(),K=Math.min(.05,(lt-Yt)/1e3);Yt=lt,Kt+=K;let gt=Me.pageYOffset;Et=yi?gt:Te(Et,gt,1-Math.exp(-K*16)),Math.abs(Et-gt)<.5&&(Et=gt),w.sx=Te(w.sx,w.x,1-Math.exp(-K*5)),w.sy=Te(w.sy,w.y,1-Math.exp(-K*5));for(let wt of Z)if(ht(wt),!!wt.visible){if(Ve){let Bt=wt===ut?St.site:wt===Mt?St.map:wt===At?St.grid:St.sign;wt.p=Bt?xi((Et-Bt.start)/Math.max(1,Bt.end-Bt.start)):1}wt.pose(wt.p,Kt,w.sx,w.sy)}if(Ve&&St.how&&Ys.set((Et-St.how.start)/Math.max(1,St.how.end-St.how.start)),y(Ve?Et:0,it)){if(On.v>0||On.a<1){let re=1-On.v,xe=Math.min(c,l);f(c*.5,l*(c<700?.37:.42),mt);let ye=xe*(c<700?.27:.19)*h;mt.lerp(it.p,re),mt.y+=Math.sin(Math.PI*re)*xe*.2*h,mt.z+=Math.sin(Math.PI*re)*6,it.p.copy(mt),it.r=ye*Math.pow(it.r/ye,re)*Math.max(On.a,.001)}if(Ve&&On.v===0&&Et<4&&_.v===0?(j+=K,j>6&&(j=0,bt(.45))):Et>=4&&(j=0),_.v>0){let re=_.v;it.p.y+=4*re*(1-re)*Math.max(it.r*9,46*h)*_.h}if(es&&Ve){let re=it.p.x/h+c/2,xe=l/2-it.p.y/h,ye=w.cx-re,Pe=w.cy-xe,Qt=Math.hypot(ye,Pe),ve=Qt<150?Math.pow(1-Qt/150,2)*.3:0;W.x=Te(W.x,ye*ve,1-Math.exp(-K*10)),W.y=Te(W.y,Pe*ve,1-Math.exp(-K*10)),it.p.x+=W.x*h,it.p.y-=W.y*h}J.position.copy(it.p),Pt.subVectors(it.p,ft).divideScalar(Math.max(K,.001)),ft.copy(it.p);let wt=Pt.length()/Math.max(it.r,.001),Bt=Ve?xi(wt*.012,0,.42):0;oe=Ve?Te(oe,Bt,1-Math.exp(-K*12)):0,oe>.01&&Pt.lengthSq()>1e-6&&(Lt.setFromUnitVectors(Ht,Pt.clone().normalize()),J.quaternion.copy(Lt));let Ee=1+oe,ie=1/Math.sqrt(Ee);if(J.scale.set(it.r*ie*(1+Ut.v*.28),it.r*Ee*(1-Ut.v*.3),it.r*ie*(1+Ut.v*.28)),J.visible=Ve||M,Ve&&D[it.i+1]&&it.t>.985){let re=D[it.i+1];re.land&&X[it.i+1]!==!0&&(X[it.i+1]=!0,vt(),(Nt[re.land]||(()=>{}))())}if(Ve)for(let re in X)D[re]&&Et<D[re].y-2&&delete X[re];Ve&&N.length&&Wt()}dn.render(t,o)}let Ut={v:0};function vt(){Oe&&Oe.fromTo(Ut,{v:1},{v:0,duration:.7,ease:"elastic.out(1, 0.35)",overwrite:!0})}let Zt=-2;function Wt(){if(!St.read)return;let K=-1;for(let gt=0;gt<D.length;gt++)D[gt].word!==void 0&&D[gt].y<=Et+1&&(K=D[gt].word);K!==Zt&&(Zt=K,N.forEach((gt,Tt)=>gt.classList.toggle("on",Tt<=K)))}let Re=-1;if(Ve)Oe.ticker.add(It);else{let lt=()=>{let K=Me.pageYOffset;(I||K!==Re)&&(Re=K,I=!1,It()),requestAnimationFrame(lt)};requestAnimationFrame(lt),Me.addEventListener("resize",()=>{I=!0})}xn.addEventListener("visibilitychange",()=>{Yt=performance.now()});let fe=m(new Zi(1,1.14,64),new tn({color:16631808,transparent:!0,opacity:0,depthWrite:!1}));fe.visible=!1,t.add(fe);let on={s:1,o:0};Fc.landed=()=>{vt(),Oe.fromTo(on,{s:1,o:.95},{s:5,o:0,duration:1.2,ease:"expo.out",onUpdate:()=>{fe.position.copy(J.position);let lt=it.r*on.s;fe.scale.set(lt,lt,lt),fe.material.opacity=on.o,fe.visible=on.o>.01}})},It(),Ve?Oe.delayedCall(2.9,yn):setTimeout(yn,600);function yn(){let lt=new Set;t.traverse(Tt=>{let wt=Tt.material;wt&&wt.map&&lt.add(wt.map)});let K=Array.from(lt),gt=()=>{let Tt=K.shift();Tt&&(Tt.image&&dn.initTexture(Tt),setTimeout(gt,30))};dn.extensions.has("KHR_parallel_shader_compile")?dn.compileAsync(t,o).then(gt,gt):(dn.compile(t,o),setTimeout(gt,200))}Me.mkPoster=lt=>{let K={site:ut,map:Mt,grid:At,logo:Jt}[lt],gt={site:b(ut.card,ut.FAB,ut.fabR),map:b(Mt.spin,new k(Mt.PIN.x,Mt.PIN.y,Mt.headZ),Mt.pinR),grid:b(At.card,new k(-2.3,3.55,.7),.5),logo:b(Jt.grp,Jt.SLOT,Jt.slotR)}[lt];return Z.forEach(Tt=>{Tt.el=Tt===K?Tt.el:xn.createElement("div")}),D.length=0,D.push({y:0,at:gt}),M=lt==="grid",I=!0,!!K}}function zu(){Y0(),Z0(),J0(),$0(),K0()}function X0(){let i=Ge(".hero-h"),t=Oe.timeline({paused:!0}),e=performance.now()>2800;if(i&&Js&&!e){let n=Js.create(Jn(".hw",i),{type:"chars",charsClass:"hc"});Oe.set(n.chars,{fontStretch:"75%",fontWeight:300,yPercent:46,opacity:0}),Oe.set(".nav",{y:-18,opacity:0}),Oe.set(".hero-foot",{y:26,opacity:0}),t.to(n.chars,{fontStretch:"125%",fontWeight:860,yPercent:0,opacity:1,duration:1.15,ease:"expo.out",stagger:.028,onComplete(){Oe.set(n.chars,{clearProps:"fontStretch,fontWeight"}),es&&q0(n.chars)}},.72).to(".nav",{y:0,opacity:1,duration:.8,ease:"expo.out"},1.25).to(".hero-foot",{y:0,opacity:1,duration:.9,ease:"expo.out"},1.4).to(On,{a:1,duration:.7,ease:"back.out(1.9)"},0).to(On,{v:0,duration:1.05,ease:"power3.inOut",onComplete:()=>Fc.landed&&Fc.landed()},.8)}else On.v=0,On.a=1;return Zs.classList.add("go"),i&&Oe.to(i,{fontStretch:"88%",yPercent:-14,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom 30%",scrub:!0}}),t}function q0(i){let t=0,e=-1e4,n=-1e4,s=()=>i.map(o=>{let c=o.getBoundingClientRect();return[c.left+c.width/2,c.top+c.height/2]}),r=null;Me.addEventListener("scroll",()=>{r=null},{passive:!0}),Me.addEventListener("pointermove",o=>{e=o.clientX,n=o.clientY,t||(t=requestAnimationFrame(a))},{passive:!0});function a(){t=0,!(Me.pageYOffset>Me.innerHeight)&&(r=r||s(),i.forEach((o,c)=>{let l=r[c][0]-e,h=r[c][1]-n,d=Math.sqrt(l*l+h*h),u=xi(1-d/260);o.style.fontWeight=Math.round(860-u*520)}))}}function Y0(){Jn(".flap").forEach(i=>{if(!Js)return;let t=Js.create(i,{type:"words,chars",wordsClass:"fw",charsClass:"fc"});Oe.fromTo(t.chars,{rotateX:-96,opacity:0},{rotateX:0,opacity:1,duration:.8,ease:"back.out(1.5)",stagger:.022,scrollTrigger:{trigger:i,start:"top 82%",once:!0}})})}function Z0(){Jn(".roll").forEach(i=>{let t=i.textContent.trim();i.innerHTML='<span class="sr">'+t+"</span>";let e=[];for(let n of t){let s=xn.createElement("span");if(s.setAttribute("aria-hidden","true"),/\d/.test(n)){s.className="dg";let r=xn.createElement("span");r.innerHTML=Array.from({length:10},(a,o)=>"<span>"+(+n+1+o)%10+"</span>").join(""),s.appendChild(r),e.push(r)}else s.textContent=n;i.appendChild(s)}Oe.fromTo(e,{yPercent:0},{yPercent:-90,duration:1.4,ease:"expo.out",stagger:.08,scrollTrigger:{trigger:i,start:"top 88%",once:!0}})})}function J0(){let i=Ge(".band-in");if(!i)return;i.innerHTML+=i.innerHTML;let t=0,e=0,n=Me.pageYOffset;Oe.ticker.add((s,r)=>{let a=Me.pageYOffset,o=a-n;n=a,e=Te(e,o,.12),t-=(.9+Math.abs(e)*.25)*(r/16.7);let c=i.scrollWidth/2;-t>c&&(t+=c),i.style.transform="translate3d("+t.toFixed(1)+"px,0,0) skewX("+xi(-e*.25,-10,10).toFixed(2)+"deg)"})}function $0(){let i=Ge(".ex-card"),t=Ge(".ex-img");!i||!es||(i.addEventListener("pointermove",e=>{let n=i.getBoundingClientRect(),s=(e.clientX-n.left)/n.width-.5,r=(e.clientY-n.top)/n.height-.5;t.style.transform="rotateY("+(s*10).toFixed(2)+"deg) rotateX("+(-r*8).toFixed(2)+"deg) translateZ(20px)",t.style.boxShadow=(12-s*10).toFixed(1)+"px "+(12-r*10).toFixed(1)+"px 0 #1b1b1b"}),i.addEventListener("pointerleave",()=>{t.style.transform="",t.style.boxShadow=""}))}function K0(){let i=Ge("#shop-big");if(!i)return;let t=n=>{let s=Zn.name();i.innerHTML="",Array.from(s).forEach((r,a,o)=>{let c=xn.createElement("span");c.className="c",c.textContent=r===" "?"\xA0":r,i.appendChild(c),n&&a===o.length-1&&Oe&&Oe.fromTo(c,{fontStretch:"75%",yPercent:30,opacity:0},{fontStretch:"125%",yPercent:0,opacity:1,duration:.6,ease:"expo.out"})})};t(!1);let e=Zn.name().length;Zn.on(()=>{let n=Zn.name().length;t(n>e),e=n})}function j0(i){if(!i)return[];let t=i.textContent.trim().split(/\s+/);return i.innerHTML=t.map(e=>'<span class="w">'+e.replace(/&/g,"&amp;").replace(/</g,"&lt;")+"</span>").join(" "),Jn(".w",i)}function Q0(){let i=Ge(".steps-track"),t=Ge(".steps-line"),e=t&&Ge("path",t),n=Jn(".steps-list .n"),s=Jn(".steps-list li"),r={ok:!1,t:0,measure(){},set(){},screen:()=>({x:0,y:0,r:12})};if(!i||!e||!n.length)return r;let a=1,o=[],c=-1;return r.ok=!0,r.measure=()=>{let l=i.getBoundingClientRect();t.setAttribute("viewBox","0 0 "+Math.round(l.width)+" "+Math.round(l.height));let h=n.map(u=>{let f=u.getBoundingClientRect();return[f.left-l.left+f.width/2,f.top-l.top+f.height/2]}),d="M"+h[0][0].toFixed(1)+" "+h[0][1].toFixed(1);for(let u=1;u<h.length;u++){let f=h[u-1],g=h[u];if(Math.abs(f[1]-g[1])<4)d+=" L"+g[0].toFixed(1)+" "+g[1].toFixed(1);else{let v=(f[1]+g[1])/2;d+=" C"+f[0].toFixed(1)+" "+v.toFixed(1)+" "+g[0].toFixed(1)+" "+v.toFixed(1)+" "+g[0].toFixed(1)+" "+g[1].toFixed(1)}}e.setAttribute("d",d),a=e.getTotalLength()||1,e.style.strokeDasharray=a+" "+a,o=h.map(u=>{let f=0,g=1e9;for(let v=0;v<=80;v++){let m=e.getPointAtLength(a*v/80),p=Math.hypot(m.x-u[0],m.y-u[1]);p<g&&(g=p,f=v/80)}return f}),c=-1,r.set(r.t)},r.set=l=>{l=xi(l),r.t=l,!(Math.abs(l-c)<1e-4)&&(c=l,e.style.strokeDashoffset=String(a*(1-l)),s.forEach((h,d)=>h.classList.toggle("on",o.length>0&&l>=o[d]-.01)))},r.screen=l=>{r.set(l);let h=i.getBoundingClientRect(),d=e.getPointAtLength(a*xi(l));return{x:h.left+d.x,y:h.top+d.y,r:13}},r.measure(),Ve||r.set(1),r}function t_(){let i=Ge("#shop"),t=Jn("input[name=kind]"),e=[],n={food:"Ristorante",hair:"Parrucchiere",bake:"Panetteria"},s="",r="food";try{let d=JSON.parse(localStorage.getItem("mk-shop")||"null");d&&(s=String(d.name||"").slice(0,28),r=n[d.kind]?d.kind:"food")}catch{}i&&(i.value=s),t.forEach(d=>{d.checked=d.value===r});let a={name:()=>s.trim()||"Il tuo negozio",kind:()=>r,cat:()=>n[r],handle:()=>"@"+((s.trim()||"iltuonegozio").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"").slice(0,24)||"iltuonegozio"),on:d=>e.push(d)};function o(){let d="https://wa.me/393715399463?text=",u=s.trim()?"Ciao Maicol, ho visto il tuo sito. Il mio negozio \xE8 "+s.trim()+" ("+n[r].toLowerCase()+"). Mi prepari la prova gratis?":"Ciao Maicol, ho visto il tuo sito";Jn("[data-wa]").forEach(f=>{f.href=d+encodeURIComponent(u)})}function c(){try{localStorage.setItem("mk-shop",JSON.stringify({name:s,kind:r}))}catch{}}let l=0;i&&i.addEventListener("input",()=>{s=i.value.slice(0,28),o(),clearTimeout(l),l=setTimeout(c,400),e.forEach(d=>d())}),t.forEach(d=>d.addEventListener("change",()=>{d.checked&&(r=d.value,o(),c(),e.forEach(u=>u()))}));let h=Ge(".try-form");return h&&h.addEventListener("submit",d=>{d.preventDefault(),i&&i.blur();let u=Ge("#sito");u&&(yi?yi.scrollTo(u):u.scrollIntoView({behavior:Bc?"auto":"smooth"}))}),o(),a}function e_(){let i=Ge("#copy");if(!i)return;let t=Ge("span",i);i.addEventListener("click",()=>{let e=()=>{t.textContent="Numero copiato",setTimeout(()=>{t.textContent="Copia il numero"},2200)};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText("+39 371 539 9463").then(e,()=>{t.textContent="371 539 9463"}):t.textContent="371 539 9463"})}function n_(){let i=Ge(".nav");if(!i)return;let t=()=>i.classList.toggle("solid",Me.pageYOffset>24);if(Me.addEventListener("scroll",t,{passive:!0}),t(),!("IntersectionObserver"in Me))return;let e=new IntersectionObserver(n=>n.forEach(s=>{s.isIntersecting&&i.setAttribute("data-nav",s.target.getAttribute("data-theme"))}),{rootMargin:"-3% 0px -96% 0px"});Jn("[data-theme]").forEach(n=>e.observe(n))}function i_(){Jn('a[href^="#"]').forEach(i=>i.addEventListener("click",t=>{let e=i.getAttribute("href").slice(1),n=e&&xn.getElementById(e);n&&(t.preventDefault(),yi?yi.scrollTo(n,{offset:0}):n.scrollIntoView({behavior:Bc?"auto":"smooth"}),history.replaceState(null,"","#"+e))}))}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
