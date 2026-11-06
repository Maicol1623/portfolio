var _h=0,Hl=1,xh=2;var Ur=1,yh=2,Ds=3,Ni=0,an=1,Cn=2,ii=0,Us=1,Wl=2,Xl=3,ql=4,vh=5;var Ji=100,Mh=101,Sh=102,bh=103,Th=104,Eh=200,wh=201,Ah=202,Ch=203,Yl=204,Zl=205,Rh=206,Ph=207,Ih=208,Lh=209,Nh=210,Dh=211,Uh=212,Fh=213,Oh=214,Sa=0,ba=1,Ta=2,xs=3,Ea=4,wa=5,Aa=6,Ca=7,so=0,Bh=1,zh=2,Wn=0,Jl=1,$l=2,Kl=3,jl=4,Ql=5,tc=6,Fr=7;var ec=300,Di=301,$i=302,ro=303,ao=304,Or=306,ys=1e3,In=1001,vs=1002,Qe=1003,kh=1004;var Br=1005;var nn=1006,oo=1007;var Ui=1008;var _n=1009,nc=1010,ic=1011,Fs=1012,lo=1013,Xn=1014,Nn=1015,qn=1016,co=1017,ho=1018,Os=1020,sc=35902,rc=35899,ac=1021,oc=1022,Dn=1023,Kn=1026,Fi=1027,uo=1028,fo=1029,Oi=1030,po=1031;var mo=1033,zr=33776,kr=33777,Vr=33778,Gr=33779,go=35840,_o=35841,xo=35842,yo=35843,vo=36196,Mo=37492,So=37496,bo=37488,To=37489,Hr=37490,Eo=37491,wo=37808,Ao=37809,Co=37810,Ro=37811,Po=37812,Io=37813,Lo=37814,No=37815,Do=37816,Uo=37817,Fo=37818,Oo=37819,Bo=37820,zo=37821,ko=36492,Vo=36494,Go=36495,Ho=36283,Wo=36284,Wr=36285,Xo=36286;var rr=2300,Ra=2301,va=2302,Rl=2303,Pl=2400,Il=2401,Ll=2402;var Vh=3200;var Xr=0,Gh=1,mi="",Ye="srgb",ar="srgb-linear",or="linear",Ae="srgb";var Ma=7680;var Hh=519,Wh=512,Xh=513,qh=514,qo=515,Yh=516,Zh=517,Yo=518,Jh=519,$h=35044;var lc="300 es",Vn=2e3,Ms=2001;function ku(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kh(){let i=lr("canvas");return i.style.display="block",i}var kc={},Ss=null;function cc(...i){let t="THREE."+i.shift();Ss?Ss("log",t,...i):console.log(t,...i)}function jh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ne(...i){i=jh(i);let t="THREE."+i.shift();if(Ss)Ss("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=jh(i);let t="THREE."+i.shift();if(Ss)Ss("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Gi(...i){let t=i.join(" ");t in kc||(kc[t]=!0,ne(...i))}function Qh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var tu={[Sa]:ba,[Ta]:Aa,[Ea]:Ca,[xs]:wa,[ba]:Sa,[Aa]:Ta,[Ca]:Ea,[wa]:xs},jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var il=Math.PI/180,Pa=180/Math.PI;function Bs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function Gu(i,t){return(i%t+t)%t}function sl(i,t,e){return(1-e)*i+e*t}function Js(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var mc=class mc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mc.prototype.isVector2=!0;var xt=mc,bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||c!==u||l!==p||h!==g){let m=c*u+l*p+h*g+d*M;m<0&&(u=-u,p=-p,g=-g,M=-M,m=-m);let f=1-o;if(m<.9995){let T=Math.acos(m),L=Math.sin(T);f=Math.sin(f*T)/L,o=Math.sin(o*T)/L,c=c*f+u*o,l=l*f+p*o,h=h*f+g*o,d=d*f+M*o}else{c=c*f+u*o,l=l*f+p*o,h=h*f+g*o,d=d*f+M*o;let T=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=T,l*=T,h*=T,d*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-o*p,t[e+2]=l*g+h*p+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gc=class gc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rl.copy(this).projectOnVector(t),this.sub(rl)}reflect(t){return this.sub(rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gc.prototype.isVector3=!0;var k=gc,rl=new k,Vc=new bn,_c=class _c{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],M=s[0],m=s[3],f=s[6],T=s[1],L=s[4],S=s[7],E=s[2],w=s[5],D=s[8];return r[0]=a*M+o*T+c*E,r[3]=a*m+o*L+c*w,r[6]=a*f+o*S+c*D,r[1]=l*M+h*T+d*E,r[4]=l*m+h*L+d*w,r[7]=l*f+h*S+d*D,r[2]=u*M+p*T+g*E,r[5]=u*m+p*L+g*w,r[8]=u*f+p*S+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,p=l*r-a*c,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=d*M,t[1]=(s*l-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(al.makeScale(t,e)),this}rotate(t){return Gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(al.makeRotation(-t)),this}translate(t,e){return Gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_c.prototype.isMatrix3=!0;var Kt=_c,al=new Kt,Gc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hu(){let i={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ae&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ae&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ar]:{primaries:t,whitePoint:n,transfer:or,toXYZ:Gc,fromXYZ:Hc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:Gc,fromXYZ:Hc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),i}var _e=Hu();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var is,Ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{is===void 0&&(is=lr("canvas")),is.width=t.width,is.height=t.height;let s=is.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=is}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Wu=0,bs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Bs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ol(s[a].image)):r.push(ol(s[a]))}else r=ol(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}var Xu=0,ll=new k,sn=class i extends jn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=In,s=In,r=nn,a=Ui,o=Dn,c=_n,l=i.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Bs(),this.name="",this.source=new bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ll).x}get height(){return this.source.getSize(ll).y}get depth(){return this.source.getSize(ll).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ys:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case vs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ys:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case vs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=ec;sn.DEFAULT_ANISOTROPY=1;var xc=class xc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],M=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(l+1)/2,S=(p+1)/2,E=(f+1)/2,w=(h+u)/4,D=(d+M)/4,x=(g+m)/4;return L>S&&L>E?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=w/n,r=D/n):S>E?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=D/r,s=x/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-M)/T,this.z=(u-h)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xc.prototype.isVector4=!0;var Oe=xc,La=class extends jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new sn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new bs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends La{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},cr=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Na=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var io=class io{constructor(t,e,n,s,r,a,o,c,l,h,d,u,p,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,u,p,g,M,m)}set(t,e,n,s,r,a,o,c,l,h,d,u,p,g,M,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new io().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),a=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*d,g=o*h,M=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-M*l,e[9]=-o*c,e[2]=M-u*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,p=c*d,g=l*h,M=l*d;e[0]=u+M*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=M+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,p=c*d,g=l*h,M=l*d;e[0]=u-M*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,p=a*d,g=o*h,M=o*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+M,e[1]=c*d,e[5]=M*l+u,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,p=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=M-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-M*d}else if(t.order==="XZY"){let u=a*c,p=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+M,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qu,t,Yu)}lookAt(t,e,n){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Si.crossVectors(n,yn),Si.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Si.crossVectors(n,yn)),Si.normalize(),jr.crossVectors(yn,Si),s[0]=Si.x,s[4]=jr.x,s[8]=yn.x,s[1]=Si.y,s[5]=jr.y,s[9]=yn.y,s[2]=Si.z,s[6]=jr.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],M=n[6],m=n[10],f=n[14],T=n[3],L=n[7],S=n[11],E=n[15],w=s[0],D=s[4],x=s[8],A=s[12],z=s[1],H=s[5],G=s[9],et=s[13],V=s[2],$=s[6],ct=s[10],K=s[14],Y=s[3],rt=s[7],ot=s[11],ft=s[15];return r[0]=a*w+o*z+c*V+l*Y,r[4]=a*D+o*H+c*$+l*rt,r[8]=a*x+o*G+c*ct+l*ot,r[12]=a*A+o*et+c*K+l*ft,r[1]=h*w+d*z+u*V+p*Y,r[5]=h*D+d*H+u*$+p*rt,r[9]=h*x+d*G+u*ct+p*ot,r[13]=h*A+d*et+u*K+p*ft,r[2]=g*w+M*z+m*V+f*Y,r[6]=g*D+M*H+m*$+f*rt,r[10]=g*x+M*G+m*ct+f*ot,r[14]=g*A+M*et+m*K+f*ft,r[3]=T*w+L*z+S*V+E*Y,r[7]=T*D+L*H+S*$+E*rt,r[11]=T*x+L*G+S*ct+E*ot,r[15]=T*A+L*et+S*K+E*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],M=t[7],m=t[11],f=t[15],T=c*p-l*u,L=o*p-l*d,S=o*u-c*d,E=a*p-l*h,w=a*u-c*h,D=a*d-o*h;return e*(M*T-m*L+f*S)-n*(g*T-m*E+f*w)+s*(g*L-M*E+f*D)-r*(g*S-M*w+m*D)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],M=t[13],m=t[14],f=t[15],T=e*o-n*a,L=e*c-s*a,S=e*l-r*a,E=n*c-s*o,w=n*l-r*o,D=s*l-r*c,x=h*M-d*g,A=h*m-u*g,z=h*f-p*g,H=d*m-u*M,G=d*f-p*M,et=u*f-p*m,V=T*et-L*G+S*H+E*z-w*A+D*x;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/V;return t[0]=(o*et-c*G+l*H)*$,t[1]=(s*G-n*et-r*H)*$,t[2]=(M*D-m*w+f*E)*$,t[3]=(u*w-d*D-p*E)*$,t[4]=(c*z-a*et-l*A)*$,t[5]=(e*et-s*z+r*A)*$,t[6]=(m*S-g*D-f*L)*$,t[7]=(h*D-u*S+p*L)*$,t[8]=(a*G-o*z+l*x)*$,t[9]=(n*z-e*G-r*x)*$,t[10]=(g*w-M*S+f*T)*$,t[11]=(d*S-h*w-p*T)*$,t[12]=(o*A-a*H-c*x)*$,t[13]=(e*H-n*A+s*x)*$,t[14]=(M*L-g*E-m*T)*$,t[15]=(h*E-d*L+u*T)*$,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,p=r*h,g=r*d,M=a*h,m=a*d,f=o*d,T=c*l,L=c*h,S=c*d,E=n.x,w=n.y,D=n.z;return s[0]=(1-(M+f))*E,s[1]=(p+S)*E,s[2]=(g-L)*E,s[3]=0,s[4]=(p-S)*w,s[5]=(1-(u+f))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(g+L)*D,s[9]=(m-T)*D,s[10]=(1-(u+M))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ss.set(s[0],s[1],s[2]).length(),o=ss.set(s[4],s[5],s[6]).length(),c=ss.set(s[8],s[9],s[10]).length();r<0&&(a=-a),On.copy(this);let l=1/a,h=1/o,d=1/c;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,e.setFromRotationMatrix(On),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Vn,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),g,M;if(c)g=r/(a-r),M=a*r/(a-r);else if(o===Vn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ms)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Vn,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),g,M;if(c)g=1/(a-r),M=a/(a-r);else if(o===Vn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ms)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};io.prototype.isMatrix4=!0;var Ie=io,ss=new k,On=new Ie,qu=new k(0,0,0),Yu=new k(1,1,1),Si=new k,jr=new k,yn=new k,Wc=new Ie,Xc=new bn,Ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(de(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var hr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zu=0,qc=new k,rs=new bn,ai=new Ie,Qr=new k,$s=new k,Ju=new k,$u=new bn,Yc=new k(1,0,0),Zc=new k(0,1,0),Jc=new k(0,0,1),$c={type:"added"},Ku={type:"removed"},as={type:"childadded",child:null},cl={type:"childremoved",child:null},rn=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Ln,n=new bn,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Kt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis(Zc,t)}rotateZ(t){return this.rotateOnAxis(Jc,t)}translateOnAxis(t,e){return qc.copy(t).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis(Zc,t)}translateZ(t){return this.translateOnAxis(Jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt($s,Qr,this.up):ai.lookAt(Qr,$s,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(ai),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($c),as.child=t,this.dispatchEvent(as),as.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ku),cl.child=t,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($c),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,Ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,$u,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new k(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var He=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ju={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),f=this._getHandJoint(l,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ju)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new He;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function hl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var oe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=_e.workingColorSpace){if(t=Gu(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=hl(a,r,t+1/3),this.g=hl(a,r,t),this.b=hl(a,r,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){let n=eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return _e.workingToColorSpace(hn.copy(this),t),Math.round(de(hn.r*255,0,255))*65536+Math.round(de(hn.g*255,0,255))*256+Math.round(de(hn.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(hn.copy(this),e);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Ye){_e.workingToColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,s=hn.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(ta);let n=sl(bi.h,ta.h,e),s=sl(bi.s,ta.s,e),r=sl(bi.l,ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new oe;oe.NAMES=eu;var Hi=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bn=new k,oi=new k,ul=new k,li=new k,os=new k,ls=new k,Kc=new k,dl=new k,fl=new k,pl=new k,ml=new Oe,gl=new Oe,_l=new Oe,Ai=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bn.subVectors(s,e),oi.subVectors(n,e),ul.subVectors(t,e);let a=Bn.dot(Bn),o=Bn.dot(oi),c=Bn.dot(ul),l=oi.dot(oi),h=oi.dot(ul),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,li.x),c.addScaledVector(a,li.y),c.addScaledVector(o,li.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ml.setScalar(0),gl.setScalar(0),_l.setScalar(0),ml.fromBufferAttribute(t,e),gl.fromBufferAttribute(t,n),_l.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ml,r.x),a.addScaledVector(gl,r.y),a.addScaledVector(_l,r.z),a}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),oi.subVectors(t,e),Bn.cross(oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Bn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;os.subVectors(s,n),ls.subVectors(r,n),dl.subVectors(t,n);let c=os.dot(dl),l=ls.dot(dl);if(c<=0&&l<=0)return e.copy(n);fl.subVectors(t,s);let h=os.dot(fl),d=ls.dot(fl);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(os,a);pl.subVectors(t,r);let p=os.dot(pl),g=ls.dot(pl);if(g>=0&&p<=g)return e.copy(r);let M=p*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ls,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Kc.subVectors(r,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Kc,o);let f=1/(m+M+u);return a=M*f,o=u*f,e.copy(n).addScaledVector(os,a).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qn=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ea.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(t.matrixWorld),this.union(ea)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),na.subVectors(this.max,Ks),cs.subVectors(t.a,Ks),hs.subVectors(t.b,Ks),us.subVectors(t.c,Ks),Ti.subVectors(hs,cs),Ei.subVectors(us,hs),Bi.subVectors(cs,us);let e=[0,-Ti.z,Ti.y,0,-Ei.z,Ei.y,0,-Bi.z,Bi.y,Ti.z,0,-Ti.x,Ei.z,0,-Ei.x,Bi.z,0,-Bi.x,-Ti.y,Ti.x,0,-Ei.y,Ei.x,0,-Bi.y,Bi.x,0];return!xl(e,cs,hs,us,na)||(e=[1,0,0,0,1,0,0,0,1],!xl(e,cs,hs,us,na))?!1:(ia.crossVectors(Ti,Ei),e=[ia.x,ia.y,ia.z],xl(e,cs,hs,us,na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ci=[new k,new k,new k,new k,new k,new k,new k,new k],zn=new k,ea=new Qn,cs=new k,hs=new k,us=new k,Ti=new k,Ei=new k,Bi=new k,Ks=new k,na=new k,ia=new k,zi=new k;function xl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zi.fromArray(i,r);let o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var qe=new k,sa=new xt,Qu=0,Sn=class extends jn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$h,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Js(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Js(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Js(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Js(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ur=class extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var dr=class extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}},td=new Qn,js=new k,yl=new k,Ci=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):td.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);let e=js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(yl)),this.expandByPoint(js.copy(t.center).sub(yl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ed=0,Pn=new Ie,vl=new rn,ds=new k,vn=new Qn,Qs=new Qn,je=new k,Je=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ku(t)?dr:ur)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return vl.lookAt(t),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(vn.min,Qs.min),vn.expandByPoint(je),je.addVectors(vn.max,Qs.max),vn.expandByPoint(je)):(vn.expandByPoint(Qs.min),vn.expandByPoint(Qs.max))}vn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)je.fromBufferAttribute(o,l),c&&(ds.fromBufferAttribute(t,l),je.add(ds)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new k,c[x]=new k;let l=new k,h=new k,d=new k,u=new xt,p=new xt,g=new xt,M=new k,m=new k;function f(x,A,z){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,z),u.fromBufferAttribute(r,x),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,z),h.sub(l),d.sub(l),p.sub(u),g.sub(u);let H=1/(p.x*g.y-g.x*p.y);isFinite(H)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(H),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(H),o[x].add(M),o[A].add(M),o[z].add(M),c[x].add(m),c[A].add(m),c[z].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let x=0,A=T.length;x<A;++x){let z=T[x],H=z.start,G=z.count;for(let et=H,V=H+G;et<V;et+=3)f(t.getX(et+0),t.getX(et+1),t.getX(et+2))}let L=new k,S=new k,E=new k,w=new k;function D(x){E.fromBufferAttribute(s,x),w.copy(E);let A=o[x];L.copy(A),L.sub(E.multiplyScalar(E.dot(A))).normalize(),S.crossVectors(w,A);let H=S.dot(c[x])<0?-1:1;a.setXYZW(x,L.x,L.y,L.z,H)}for(let x=0,A=T.length;x<A;++x){let z=T[x],H=z.start,G=z.count;for(let et=H,V=H+G;et<V;et+=3)D(t.getX(et+0)),D(t.getX(et+1)),D(t.getX(et+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new k,r=new k,a=new k,o=new k,c=new k,l=new k,h=new k,d=new k;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),p=0,g=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?p=c[M]*o.data.stride+o.offset:p=c[M]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new Sn(u,h,d)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ml=new k,nd=new k,id=new Kt,kn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ml.subVectors(n,e).cross(nd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||id.getNormalMatrix(t),s=this.coplanarPoint(Ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},sd=0,fi=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=Us,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=Zl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new oe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var hi=new k,Sl=new k,ra=new k,aa=new k,Da=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sl.copy(t).add(e).multiplyScalar(.5),ra.copy(e).sub(t).normalize(),aa.copy(this.origin).sub(Sl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ra),o=aa.dot(this.direction),c=-aa.dot(ra),l=aa.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let M=1/h;d*=M,u*=M,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Sl).addScaledVector(ra,u),p}intersectSphere(t,e){if(t.radius<0)return null;hi.subVectors(t.center,this.origin);let n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,p=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,f=n.x-a.x,T=n.y-a.y,L=n.z-a.z,S=Math.abs(c),E=Math.abs(l),w=Math.abs(h),D,x,A,z,H,G,et,V,$,ct,K,Y;if(S>=E&&S>=w?(A=c,G=d,$=g,Y=f,c>=0?(D=l,x=h,z=u,H=p,et=M,V=m,ct=T,K=L):(D=h,x=l,z=p,H=u,et=m,V=M,ct=L,K=T)):E>=w?(A=l,G=u,$=M,Y=T,l>=0?(D=h,x=c,z=p,H=d,et=m,V=g,ct=L,K=f):(D=c,x=h,z=d,H=p,et=g,V=m,ct=f,K=L)):(A=h,G=p,$=m,Y=L,h>=0?(D=c,x=l,z=d,H=u,et=g,V=M,ct=f,K=T):(D=l,x=c,z=u,H=d,et=M,V=g,ct=T,K=f)),A===0)return null;let rt=D/A,ot=x/A,ft=1/A,At=z-rt*G,Mt=H-ot*G,Jt=et-rt*$,Yt=V-ot*$,le=ct-rt*Y,U=K-ot*Y,N=le*Yt-U*Jt,I=At*U-Mt*le,R=Jt*Mt-Yt*At;if(s){if(N<0||I<0||R<0)return null}else if((N<0||I<0||R<0)&&(N>0||I>0||R>0))return null;let B=N+I+R;if(B===0)return null;let st=ft*(N*G+I*$+R*Y);return(B>0?st<0:st>0)?null:this.at(st/B,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jc=new Ie,ki=new Da,oa=new Ci,Qc=new k,la=new k,ca=new k,ha=new k,bl=new k,ua=new k,th=new k,da=new k,Be=class extends rn{constructor(t=new Je,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ua.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(bl.fromBufferAttribute(d,t),a?ua.addScaledVector(bl,h):ua.addScaledVector(bl.sub(e),h))}e.add(ua)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(oa.containsPoint(ki.origin)===!1&&(ki.intersectSphere(oa,Qc)===null||ki.origin.distanceToSquared(Qc)>(t.far-t.near)**2))&&(jc.copy(r).invert(),ki.copy(t.ray).applyMatrix4(jc),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),L=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,E=L;S<E;S+=3){let w=o.getX(S),D=o.getX(S+1),x=o.getX(S+2);s=fa(this,f,t,n,l,h,d,w,D,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let T=o.getX(m),L=o.getX(m+1),S=o.getX(m+2);s=fa(this,a,t,n,l,h,d,T,L,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),L=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,E=L;S<E;S+=3){let w=S,D=S+1,x=S+2;s=fa(this,f,t,n,l,h,d,w,D,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let T=m,L=m+1,S=m+2;s=fa(this,a,t,n,l,h,d,T,L,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function rd(i,t,e,n,s,r,a,o){let c;if(t.side===an?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Ni,o),c===null)return null;da.copy(o),da.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(da);return l<e.near||l>e.far?null:{distance:l,point:da.clone(),object:i}}function fa(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,la),i.getVertexPosition(c,ca),i.getVertexPosition(l,ha);let h=rd(i,t,e,n,la,ca,ha,th);if(h){let d=new k;Ai.getBarycoord(th,la,ca,ha,d),s&&(h.uv=Ai.getInterpolatedAttribute(s,o,c,l,d,new xt)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,o,c,l,d,new xt)),a&&(h.normal=Ai.getInterpolatedAttribute(a,o,c,l,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new k,materialIndex:0};Ai.getNormal(la,ca,ha,u.normal),h.face=u,h.barycoord=d}return h}var Wi=class extends sn{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Qe,h=Qe,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fr=class extends Sn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},fs=new Ie,eh=new Ie,pa=[],nh=new Qn,ad=new Ie,tr=new Be,er=new Ci,pr=class extends Be{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ad)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),nh.copy(t.boundingBox).applyMatrix4(fs),this.boundingBox.union(nh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),er.copy(t.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),t.ray.intersectsSphere(er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fs),eh.multiplyMatrices(n,fs),tr.matrixWorld=eh,tr.raycast(t,pa);for(let a=0,o=pa.length;a<o;a++){let c=pa[a];c.instanceId=r,c.object=this,e.push(c)}pa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wi(new Float32Array(s*this.count),s,this.count,uo,Nn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vi=new Ci,od=new xt(.5,.5),ma=new k,Es=class{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],M=r[9],m=r[10],f=r[11],T=r[12],L=r[13],S=r[14],E=r[15];if(s[0].setComponents(l-a,p-h,f-g,E-T).normalize(),s[1].setComponents(l+a,p+h,f+g,E+T).normalize(),s[2].setComponents(l+o,p+d,f+M,E+L).normalize(),s[3].setComponents(l-o,p-d,f-M,E-L).normalize(),n)s[4].setComponents(c,u,m,S).normalize(),s[5].setComponents(l-c,p-u,f-m,E-S).normalize();else if(s[4].setComponents(l-c,p-u,f-m,E-S).normalize(),e===Vn)s[5].setComponents(l+c,p+u,f+m,E+S).normalize();else if(e===Ms)s[5].setComponents(c,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){Vi.center.set(0,0,0);let e=od.distanceTo(t.center);return Vi.radius=.7071067811865476+e,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ma.x=s.normal.x>0?t.max.x:t.min.x,ma.y=s.normal.y>0?t.max.y:t.min.y,ma.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mr=class extends sn{constructor(t=[],e=Di,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xi=class extends sn{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ri=class extends sn{constructor(t,e,n=Xn,s,r,a,o=Qe,c=Qe,l,h=Kn,d=1){if(h!==Kn&&h!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ua=class extends Ri{constructor(t,e=Xn,n=Di,s,r,a=Qe,o=Qe,c,l=Kn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},gr=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ti=class i extends Je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(d,2));function g(M,m,f,T,L,S,E,w,D,x,A){let z=S/D,H=E/x,G=S/2,et=E/2,V=w/2,$=D+1,ct=x+1,K=0,Y=0,rt=new k;for(let ot=0;ot<ct;ot++){let ft=ot*H-et;for(let At=0;At<$;At++){let Mt=At*z-G;rt[M]=Mt*T,rt[m]=ft*L,rt[f]=V,l.push(rt.x,rt.y,rt.z),rt[M]=0,rt[m]=0,rt[f]=w>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(At/D),d.push(1-ot/x),K+=1}}for(let ot=0;ot<x;ot++)for(let ft=0;ft<D;ft++){let At=u+ft+$*ot,Mt=u+ft+$*(ot+1),Jt=u+(ft+1)+$*(ot+1),Yt=u+(ft+1)+$*ot;c.push(At,Mt,Yt),c.push(Mt,Jt,Yt),Y+=6}o.addGroup(p,Y,A),p+=Y,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ws=class i extends Je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new k,h=new xt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let p=n+d/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fa=class i extends Je{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,M=[],m=n/2,f=0;T(),a===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(h),this.setAttribute("position",new xe(d,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(p,2));function T(){let S=new k,E=new k,w=0,D=(e-t)/n;for(let x=0;x<=r;x++){let A=[],z=x/r,H=z*(e-t)+t;for(let G=0;G<=s;G++){let et=G/s,V=et*c+o,$=Math.sin(V),ct=Math.cos(V);E.x=H*$,E.y=-z*n+m,E.z=H*ct,d.push(E.x,E.y,E.z),S.set($,D,ct).normalize(),u.push(S.x,S.y,S.z),p.push(et,1-z),A.push(g++)}M.push(A)}for(let x=0;x<s;x++)for(let A=0;A<r;A++){let z=M[A][x],H=M[A+1][x],G=M[A+1][x+1],et=M[A][x+1];(t>0||A!==0)&&(h.push(z,H,et),w+=3),(e>0||A!==r-1)&&(h.push(H,G,et),w+=3)}l.addGroup(f,w,0),f+=w}function L(S){let E=g,w=new xt,D=new k,x=0,A=S===!0?t:e,z=S===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,m*z,0),u.push(0,z,0),p.push(.5,.5),g++;let H=g;for(let G=0;G<=s;G++){let V=G/s*c+o,$=Math.cos(V),ct=Math.sin(V);D.x=A*ct,D.y=m*z,D.z=A*$,d.push(D.x,D.y,D.z),u.push(0,z,0),w.x=$*.5+.5,w.y=ct*.5*z+.5,p.push(w.x,w.y),g++}for(let G=0;G<s;G++){let et=E+G,V=H+G;S===!0?h.push(V,V+1,et):h.push(V+1,V,et),x+=3}l.addGroup(f,x,S===!0?1:2),f+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_r=class i extends Fa{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ne("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new xt:new k);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new k,s=[],r=[],a=[],o=new k,c=new Ie;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new k)}r[0]=new k,a[0]=new k;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(de(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(de(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},As=class extends Tn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new xt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Oa=class extends As{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function hc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ih=new k,sh=new k,Tl=new hc,El=new hc,wl=new hc,Ba=class extends Tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(sh.subVectors(s[0],s[1]).add(s[0]),l=sh);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ih.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ih),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),p),M=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Tl.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,M,m),El.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,M,m),wl.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),El.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),wl.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Tl.calc(c),El.calc(c),wl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function rh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function ld(i,t){let e=1-i;return e*e*t}function cd(i,t){return 2*(1-i)*i*t}function hd(i,t){return i*i*t}function ir(i,t,e,n){return ld(i,t)+cd(i,e)+hd(i,n)}function ud(i,t){let e=1-i;return e*e*e*t}function dd(i,t){let e=1-i;return 3*e*e*i*t}function fd(i,t){return 3*(1-i)*i*i*t}function pd(i,t){return i*i*i*t}function sr(i,t,e,n,s){return ud(i,t)+dd(i,e)+fd(i,n)+pd(i,s)}var xr=class extends Tn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(sr(t,s.x,r.x,a.x,o.x),sr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends Tn{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(sr(t,s.x,r.x,a.x,o.x),sr(t,s.y,r.y,a.y,o.y),sr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yr=class extends Tn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ka=class extends Tn{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vr=class extends Tn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ir(t,s.x,r.x,a.x),ir(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends Tn{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ir(t,s.x,r.x,a.x),ir(t,s.y,r.y,a.y),ir(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mr=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(rh(o,c.x,l.x,h.x,d.x),rh(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},Nl=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:Ba,CubicBezierCurve:xr,CubicBezierCurve3:za,EllipseCurve:As,LineCurve:yr,LineCurve3:ka,QuadraticBezierCurve:vr,QuadraticBezierCurve3:Va,SplineCurve:Mr}),Ga=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Nl[s.type]().fromJSON(s))}return this}},ei=class extends Ga{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new yr(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new vr(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new xr(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Mr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new As(t,e,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},pi=class extends ei{constructor(t){super(t),this.uuid=Bs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ei().fromJSON(s))}return this}};function md(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=nu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=vd(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let h=o,d=c;for(let u=e;u<s;u+=e){let p=i[u],g=i[u+1];p<o&&(o=p),g<c&&(c=g),p>h&&(h=p),g>d&&(d=g)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return Sr(r,a,e,o,c,l,0),a}function nu(i,t,e,n,s){let r;if(s===Id(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=ah(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ah(a/n|0,i[a],i[a+1],r);return r&&Cs(r,r.next)&&(Tr(r),r=r.next),r}function qi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cs(e,e.next)||ze(e.prev,e,e.next)===0)){if(Tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Sr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ed(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?_d(i,n,s,r):gd(i)){t.push(c.i,i.i,l.i),Tr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=xd(qi(i),t),Sr(i,t,e,n,s,r,2)):a===2&&yd(i,t,e,n,s,r):Sr(qi(i),t,e,n,s,r,1);break}}}function gd(i){let t=i.prev,e=i,n=i.next;if(ze(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),u=Math.max(s,r,a),p=Math.max(o,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&nr(s,o,r,c,a,l,g.x,g.y)&&ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _d(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ze(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,u=a.y,p=Math.min(o,c,l),g=Math.min(h,d,u),M=Math.max(o,c,l),m=Math.max(h,d,u),f=Dl(p,g,t,e,n),T=Dl(M,m,t,e,n),L=i.prevZ,S=i.nextZ;for(;L&&L.z>=f&&S&&S.z<=T;){if(L.x>=p&&L.x<=M&&L.y>=g&&L.y<=m&&L!==s&&L!==a&&nr(o,h,c,d,l,u,L.x,L.y)&&ze(L.prev,L,L.next)>=0||(L=L.prevZ,S.x>=p&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&nr(o,h,c,d,l,u,S.x,S.y)&&ze(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;L&&L.z>=f;){if(L.x>=p&&L.x<=M&&L.y>=g&&L.y<=m&&L!==s&&L!==a&&nr(o,h,c,d,l,u,L.x,L.y)&&ze(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;S&&S.z<=T;){if(S.x>=p&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&nr(o,h,c,d,l,u,S.x,S.y)&&ze(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function xd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Cs(n,s)&&su(n,e,e.next,s)&&br(n,s)&&br(s,n)&&(t.push(n.i,e.i,s.i),Tr(e),Tr(e.next),e=i=s),e=e.next}while(e!==i);return qi(e)}function yd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cd(a,o)){let c=ru(a,o);a=qi(a,a.next),c=qi(c,c.next),Sr(a,t,e,n,s,r,0),Sr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function vd(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=nu(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Ad(l))}s.sort(Md);for(let r=0;r<s.length;r++)e=Sd(s[r],e);return e}function Md(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Sd(i,t){let e=bd(i,t);if(!e)return t;let n=ru(e,i);return qi(n,n.next),qi(e,e.next)}function bd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Cs(i,e))return e;do{if(Cs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&iu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);br(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Td(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Td(i,t){return ze(i.prev,i,t.prev)<0&&ze(t.next,i,i.next)<0}function Ed(i,t,e,n){let s=i;do s.z===0&&(s.z=Dl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wd(s)}function wd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Dl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ad(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function iu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function nr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&iu(i,t,e,n,s,r,a,o)}function Cd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Rd(i,t)&&(br(i,t)&&br(t,i)&&Pd(i,t)&&(ze(i.prev,i,t.prev)||ze(i,t.prev,t))||Cs(i,t)&&ze(i.prev,i,i.next)>0&&ze(t.prev,t,t.next)>0)}function ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cs(i,t){return i.x===t.x&&i.y===t.y}function su(i,t,e,n){let s=_a(ze(i,t,e)),r=_a(ze(i,t,n)),a=_a(ze(e,n,i)),o=_a(ze(e,n,t));return!!(s!==r&&a!==o||s===0&&ga(i,e,t)||r===0&&ga(i,n,t)||a===0&&ga(e,i,n)||o===0&&ga(e,t,n))}function ga(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _a(i){return i>0?1:i<0?-1:0}function Rd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&su(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function br(i,t){return ze(i.prev,i,i.next)<0?ze(i,t,i.next)>=0&&ze(i,i.prev,t)>=0:ze(i,t,i.prev)<0||ze(i,i.next,t)<0}function Pd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ru(i,t){let e=Ul(i.i,i.x,i.y),n=Ul(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ah(i,t,e,n){let s=Ul(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ul(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Id(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Fl=class{static triangulate(t,e,n=2){return md(t,e,n)}},Mn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];oh(t),lh(n,t);let a=t.length;e.forEach(oh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,lh(n,e[c]);let o=Fl.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function oh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function lh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Rs=class i extends Je{constructor(t=new pi([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Ld,L,S=!1,E,w,D,x;if(f){L=f.getSpacedPoints(h),S=!0,u=!1;let b=f.isCatmullRomCurve3?f.closed:!1;E=f.computeFrenetFrames(h,b),w=new k,D=new k,x=new k}u||(m=0,p=0,g=0,M=0);let A=o.extractPoints(l),z=A.shape,H=A.holes;if(!Mn.isClockWise(z)){z=z.reverse();for(let b=0,F=H.length;b<F;b++){let P=H[b];Mn.isClockWise(P)&&(H[b]=P.reverse())}}function et(b){let P=10000000000000001e-36,Z=b[0];for(let j=1;j<=b.length;j++){let ut=j%b.length,mt=b[ut],gt=mt.x-Z.x,q=mt.y-Z.y,y=gt*gt+q*q,Dt=Math.max(Math.abs(mt.x),Math.abs(mt.y),Math.abs(Z.x),Math.abs(Z.y)),Ct=P*Dt*Dt;if(y<=Ct){b.splice(ut,1),j--;continue}Z=mt}}et(z),H.forEach(et);let V=H.length,$=z;for(let b=0;b<V;b++){let F=H[b];z=z.concat(F)}function ct(b,F,P){return F||se("ExtrudeGeometry: vec does not exist"),b.clone().addScaledVector(F,P)}let K=z.length;function Y(b,F,P){let Z,j,ut,mt=b.x-F.x,gt=b.y-F.y,q=P.x-b.x,y=P.y-b.y,Dt=mt*mt+gt*gt,Ct=mt*y-gt*q;if(Math.abs(Ct)>Number.EPSILON){let C=Math.sqrt(Dt),_=Math.sqrt(q*q+y*y),W=F.x-gt/C,Q=F.y+mt/C,ht=P.x-y/_,bt=P.y+q/_,Et=((ht-W)*y-(bt-Q)*q)/(mt*y-gt*q);Z=W+mt*Et-b.x,j=Q+gt*Et-b.y;let dt=Z*Z+j*j;if(dt<=2)return new xt(Z,j);ut=Math.sqrt(dt/2)}else{let C=!1;mt>Number.EPSILON?q>Number.EPSILON&&(C=!0):mt<-Number.EPSILON?q<-Number.EPSILON&&(C=!0):Math.sign(gt)===Math.sign(y)&&(C=!0),C?(Z=-gt,j=mt,ut=Math.sqrt(Dt)):(Z=mt,j=gt,ut=Math.sqrt(Dt/2))}return new xt(Z/ut,j/ut)}let rt=[];for(let b=0,F=$.length,P=F-1,Z=b+1;b<F;b++,P++,Z++)P===F&&(P=0),Z===F&&(Z=0),rt[b]=Y($[b],$[P],$[Z]);let ot=[],ft,At=rt.concat();for(let b=0,F=V;b<F;b++){let P=H[b];ft=[];for(let Z=0,j=P.length,ut=j-1,mt=Z+1;Z<j;Z++,ut++,mt++)ut===j&&(ut=0),mt===j&&(mt=0),ft[Z]=Y(P[Z],P[ut],P[mt]);ot.push(ft),At=At.concat(ft)}let Mt;if(m===0)Mt=Mn.triangulateShape($,H);else{let b=[],F=[];for(let P=0;P<m;P++){let Z=P/m,j=p*Math.cos(Z*Math.PI/2),ut=g*Math.sin(Z*Math.PI/2)+M;for(let mt=0,gt=$.length;mt<gt;mt++){let q=ct($[mt],rt[mt],ut);I(q.x,q.y,-j),Z===0&&b.push(q)}for(let mt=0,gt=V;mt<gt;mt++){let q=H[mt];ft=ot[mt];let y=[];for(let Dt=0,Ct=q.length;Dt<Ct;Dt++){let C=ct(q[Dt],ft[Dt],ut);I(C.x,C.y,-j),Z===0&&y.push(C)}Z===0&&F.push(y)}}Mt=Mn.triangulateShape(b,F)}let Jt=Mt.length,Yt=g+M;for(let b=0;b<K;b++){let F=u?ct(z[b],At[b],Yt):z[b];S?(D.copy(E.normals[0]).multiplyScalar(F.x),w.copy(E.binormals[0]).multiplyScalar(F.y),x.copy(L[0]).add(D).add(w),I(x.x,x.y,x.z)):I(F.x,F.y,0)}for(let b=1;b<=h;b++)for(let F=0;F<K;F++){let P=u?ct(z[F],At[F],Yt):z[F];S?(D.copy(E.normals[b]).multiplyScalar(P.x),w.copy(E.binormals[b]).multiplyScalar(P.y),x.copy(L[b]).add(D).add(w),I(x.x,x.y,x.z)):I(P.x,P.y,d/h*b)}for(let b=m-1;b>=0;b--){let F=b/m,P=p*Math.cos(F*Math.PI/2),Z=g*Math.sin(F*Math.PI/2)+M;for(let j=0,ut=$.length;j<ut;j++){let mt=ct($[j],rt[j],Z);I(mt.x,mt.y,d+P)}for(let j=0,ut=H.length;j<ut;j++){let mt=H[j];ft=ot[j];for(let gt=0,q=mt.length;gt<q;gt++){let y=ct(mt[gt],ft[gt],Z);S?I(y.x,y.y+L[h-1].y,L[h-1].x+P):I(y.x,y.y,d+P)}}}le(),U();function le(){let b=s.length/3;if(u){let F=0,P=K*F;for(let Z=0;Z<Jt;Z++){let j=Mt[Z];R(j[2]+P,j[1]+P,j[0]+P)}F=h+m*2,P=K*F;for(let Z=0;Z<Jt;Z++){let j=Mt[Z];R(j[0]+P,j[1]+P,j[2]+P)}}else{for(let F=0;F<Jt;F++){let P=Mt[F];R(P[2],P[1],P[0])}for(let F=0;F<Jt;F++){let P=Mt[F];R(P[0]+K*h,P[1]+K*h,P[2]+K*h)}}n.addGroup(b,s.length/3-b,0)}function U(){let b=s.length/3,F=0;N($,F),F+=$.length;for(let P=0,Z=H.length;P<Z;P++){let j=H[P];N(j,F),F+=j.length}n.addGroup(b,s.length/3-b,1)}function N(b,F){let P=b.length;for(;--P>=0;){let Z=P,j=P-1;j<0&&(j=b.length-1);for(let ut=0,mt=h+m*2;ut<mt;ut++){let gt=K*ut,q=K*(ut+1),y=F+Z+gt,Dt=F+j+gt,Ct=F+j+q,C=F+Z+q;B(y,Dt,Ct,C)}}}function I(b,F,P){c.push(b),c.push(F),c.push(P)}function R(b,F,P){st(b),st(F),st(P);let Z=s.length/3,j=T.generateTopUV(n,s,Z-3,Z-2,Z-1);yt(j[0]),yt(j[1]),yt(j[2])}function B(b,F,P,Z){st(b),st(F),st(Z),st(F),st(P),st(Z);let j=s.length/3,ut=T.generateSideWallUV(n,s,j-6,j-3,j-2,j-1);yt(ut[0]),yt(ut[1]),yt(ut[3]),yt(ut[1]),yt(ut[2]),yt(ut[3])}function st(b){s.push(c[b*3+0]),s.push(c[b*3+1]),s.push(c[b*3+2])}function yt(b){r.push(b.x),r.push(b.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Nd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Nl[s.type]().fromJSON(s)),new i(n,t.options)}},Ld={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new xt(r,a),new xt(o,c),new xt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],p=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new xt(a,1-c),new xt(l,1-d),new xt(u,1-g),new xt(M,1-f)]:[new xt(o,1-c),new xt(h,1-d),new xt(p,1-g),new xt(m,1-f)]}};function Nd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Gn=class i extends Je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,p=[],g=[],M=[],m=[];for(let f=0;f<h;f++){let T=f*u-a;for(let L=0;L<l;L++){let S=L*d-r;g.push(S,-T,0),M.push(0,0,1),m.push(L/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<o;T++){let L=T+l*f,S=T+l*(f+1),E=T+1+l*(f+1),w=T+1+l*f;p.push(L,S,w),p.push(S,E,w)}this.setIndex(p),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(M,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Yi=class i extends Je{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],d=t,u=(e-t)/s,p=new k,g=new xt;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){let f=r+m/n*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let M=0;M<s;M++){let m=M*(n+1);for(let f=0;f<n;f++){let T=f+m,L=T,S=T+n+1,E=T+n+2,w=T+1;o.push(L,S,w),o.push(S,E,w)}}this.setIndex(o),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Er=class i extends Je{constructor(t=new pi([new xt(0,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new xe(s,3)),this.setAttribute("normal",new xe(r,3)),this.setAttribute("uv",new xe(a,2));function l(h){let d=s.length/3,u=h.extractPoints(e),p=u.shape,g=u.holes;Mn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let T=g[m];Mn.isClockWise(T)===!0&&(g[m]=T.reverse())}let M=Mn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let T=g[m];p=p.concat(T)}for(let m=0,f=p.length;m<f;m++){let T=p[m];s.push(T.x,T.y,0),r.push(0,0,1),a.push(T.x,T.y)}for(let m=0,f=M.length;m<f;m++){let T=M[m],L=T[0]+d,S=T[1]+d,E=T[2]+d;n.push(L,S,E),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Dd(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Dd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var wr=class i extends Je{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new k,u=new k,p=[],g=[],M=[],m=[];for(let f=0;f<=n;f++){let T=[],L=f/n,S=a+L*o,E=t*Math.cos(S),w=Math.sqrt(t*t-E*E),D=0;f===0&&a===0?D=.5/e:f===n&&c===Math.PI&&(D=-.5/e);for(let x=0;x<=e;x++){let A=x/e,z=s+A*r;d.x=-w*Math.cos(z),d.y=E,d.z=w*Math.sin(z),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(A+D,1-L),T.push(l++)}h.push(T)}for(let f=0;f<n;f++)for(let T=0;T<e;T++){let L=h[f][T+1],S=h[f][T],E=h[f+1][T],w=h[f+1][T+1];(f!==0||a>0)&&p.push(L,S,w),(f!==n-1||c<Math.PI)&&p.push(S,E,w)}this.setIndex(p),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(M,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ar=class i extends Je{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new k,p=new k,g=new k;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let f=0;f<=s;f++){let T=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(T),p.y=(t+e*Math.cos(m))*Math.sin(T),p.z=e*Math.sin(m),l.push(p.x,p.y,p.z),u.x=t*Math.cos(T),u.y=t*Math.sin(T),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let f=(s+1)*M+m-1,T=(s+1)*(M-1)+m-1,L=(s+1)*(M-1)+m,S=(s+1)*M+m;c.push(f,T,S),c.push(T,L,S)}this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ki(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ch(s))s.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ch(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=Ki(i[e]);for(let s in n)t[s]=n[s]}return t}function ch(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ud(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var au={clone:Ki,merge:un},Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=Ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ha=class extends En{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},wn=class extends fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xr,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ni=class extends wn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Cr=class extends fi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xr,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=so,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Wa=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xa=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ps(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Al(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qa=class extends Pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Il:r=t,o=2*e-n;break;case Ll:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Il:a=t,c=2*n-e;break;case Ll:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,f=-u*m+2*u*M-u*g,T=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*g+1,L=(-1-p)*m+(1.5+p)*M+.5*g,S=p*m-p*M;for(let E=0;E!==o;++E)r[E]=f*a[h+E]+T*a[l+E]+L*a[c+E]+S*a[d+E];return r}},Ya=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},Za=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ja=class extends Pi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),M=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*M+a[c+m]*g;return r}let u=o*2,p=t-1;for(let g=0;g!==o;++g){let M=a[l+g],m=a[c+g],f=p*u+g*2,T=d[f],L=d[f+1],S=t*u+g*2,E=h[S],w=h[S+1],D=zd(n,e,T,E,s);r[g]=ou(D,M,L,w,m)}return r}};function ou(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Bd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function zd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ou(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Bd(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var An=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ps(e,this.TimeBufferType),this.values=ps(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ps(t.times,Array),values:ps(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Al(t.settings)&&(n.settings={inTangents:ps(t.settings.inTangents,Array),outTangents:ps(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ja(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case rr:e=this.InterpolantFactoryMethodDiscrete;break;case Ra:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break;case Rl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ne("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Al(this.settings)&&(hh(this.settings.inTangents,t),hh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(se("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(se("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){se("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){se("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Vu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){se("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===va,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let M=e[d+g];if(M!==e[u+g]||M!==e[p+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Al(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function hh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Ra;var Ii=class extends An{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=rr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends An{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="color";var Ka=class extends An{constructor(t,e,n,s){super(t,e,n,s)}};Ka.prototype.ValueTypeName="number";var ja=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)bn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Rr=class extends An{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}};Rr.prototype.ValueTypeName="quaternion";Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends An{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=rr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends An{constructor(t,e,n,s){super(t,e,n,s)}};Qa.prototype.ValueTypeName="vector";var Ol={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(uh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!uh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function uh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var to=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lu=new to,Zi=class{constructor(t){this.manager=t!==void 0?t:lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Zi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ui={},Bl=class extends Error{constructor(t,e){super(t),this.response=e}},Pr=class extends Zi{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Ol.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(ui[t]!==void 0){ui[t].push({onLoad:e,onProgress:n,onError:s});return}ui[t]=[],ui[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ui[t],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=u?parseInt(u):0,g=p!==0,M=0,m=new ReadableStream({start(f){T();function T(){d.read().then(({done:L,value:S})=>{if(L)f.close();else{M+=S.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:M,total:p});for(let w=0,D=h.length;w<D;w++){let x=h[w];x.onProgress&&x.onProgress(E)}f.enqueue(S),T()}},L=>{f.error(L)})}}});return new Response(m)}else throw new Bl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Ol.add(`file:${t}`,l);let h=ui[t];delete ui[t];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=ui[t];if(h===void 0)throw this.manager.itemError(t),l;delete ui[t];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ps=class extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Cl=new Ie,dh=new k,fh=new k,Ir=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(dh),fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Cl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ms||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},xa=new k,ya=new bn,$n=new k,Lr=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xa,ya,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(xa,ya,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wi=new k,ph=new xt,mh=new xt,en=class extends Lr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,ph,mh),e.subVectors(mh,ph)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(il*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var zl=class extends Ir{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},Nr=class extends Ps{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Is=class extends Lr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},kl=class extends Ir{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ls=class extends Ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new kl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Dr=class extends Ps{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ms=-90,gs=1,eo=class extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new en(ms,gs,t,e);r.layers=this.layers,this.add(r);let a=new en(ms,gs,t,e);a.layers=this.layers,this.add(a);let o=new en(ms,gs,t,e);o.layers=this.layers,this.add(o);let c=new en(ms,gs,t,e);c.layers=this.layers,this.add(c);let l=new en(ms,gs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},no=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var dc="\\[\\]\\.:\\/",kd=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",Vd="[^"+dc.replace("\\.","")+"]",Gd=/((?:WC+[\/:])*)/.source.replace("WC",fc),Hd=/(WCOD+)?/.source.replace("WCOD",Vd),Wd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),Xd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),qd=new RegExp("^"+Gd+Hd+Wd+Xd+"$"),Yd=["material","materials","bones","map"],Vl=class{constructor(t,e,n){let s=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kd,"")}static parseTrackName(t){let e=qd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;se("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Vl;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var s_=new Float32Array(1);var yc=class yc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};yc.prototype.isMatrix2=!0;var Gl=yc,gh=new xt,Ns=class{constructor(t=new xt(1/0,1/0),e=new xt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gh.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gh).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var Hn=class{constructor(){this.type="ShapePath",this.color=new oe,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new ei,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(c,l){let h=!1,d=l.length;for(let u=0,p=d-1;u<d;p=u++){let g=l[u],M=l[p];g.y>c.y!=M.y>c.y&&c.x<(M.x-g.x)*(c.y-g.y)/(M.y-g.y)+g.x&&(h=!h)}return h}function e(c,l){let h=l.getCenter(new xt);if(t(h,c))return h;let d=h.y,u=[],p=c.length;for(let g=0;g<p;g++){let M=c[g],m=c[(g+1)%p];if(M.y>d!=m.y>d){let f=M.x+(d-M.y)*(m.x-M.x)/(m.y-M.y);u.push(f)}}return u.length>1&&(u.sort((g,M)=>g-M),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(ne('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let s=n==="nonzero"?(c=>c!==0):(c=>(c&1)!==0),r=[];for(let c of this.subPaths){let l=c.getPoints();if(l.length<3)continue;let h=Mn.area(l);if(h===0)continue;let d=new Ns;for(let u=0;u<l.length;u++)d.expandByPoint(l[u]);r.push({subPath:c,points:l,boundingBox:d,interiorPoint:e(l,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((c,l)=>l.absArea-c.absArea);for(let c=0;c<r.length;c++){let l=r[c],h=0;for(let d=c-1;d>=0;d--){let u=r[d];if(u.boundingBox.containsBox(l.boundingBox)&&t(l.interiorPoint,u.points)){l.container=u.exclude?u.container:u,h=u.winding,l.winding+=h;break}}s(l.winding)===s(h)&&(l.exclude=!0)}for(let c of r)c.exclude||(c.role=c.container===null||c.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let c of r){if(c.exclude||c.role!=="outer")continue;let l=new pi;l.curves=c.subPath.curves,a.push(l),o.set(c,l)}for(let c of r){if(c.exclude||c.role!=="hole")continue;let l=o.get(c.container);if(!l)continue;let h=new ei;h.curves=c.subPath.curves,l.holes.push(h)}return a}};function pc(i,t,e,n){let s=Zd(n);switch(e){case ac:return i*t;case uo:return i*t/s.components*s.byteLength;case fo:return i*t/s.components*s.byteLength;case Oi:return i*t*2/s.components*s.byteLength;case po:return i*t*2/s.components*s.byteLength;case oc:return i*t*3/s.components*s.byteLength;case Dn:return i*t*4/s.components*s.byteLength;case mo:return i*t*4/s.components*s.byteLength;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:case yo:return Math.max(i,16)*Math.max(t,8)/4;case go:case xo:return Math.max(i,8)*Math.max(t,8)/2;case vo:case Mo:case bo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:case Hr:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ko:case Vo:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ho:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wr:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zd(i){switch(i){case _n:case nc:return{byteLength:1,components:1};case Fs:case ic:case qn:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case Xn:case lo:case Nn:return{byteLength:4,components:1};case sc:case rc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Pu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $d(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],M=d[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let M=d[p];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Kd=`#ifdef USE_ALPHAHASH
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
}`,ue={alphahash_fragment:Kd,alphahash_pars_fragment:jd,alphamap_fragment:Qd,alphamap_pars_fragment:tf,alphatest_fragment:ef,alphatest_pars_fragment:nf,aomap_fragment:sf,aomap_pars_fragment:rf,batching_pars_vertex:af,batching_vertex:of,begin_vertex:lf,beginnormal_vertex:cf,bsdfs:hf,iridescence_fragment:uf,bumpmap_pars_fragment:df,clipping_planes_fragment:ff,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:mf,clipping_planes_vertex:gf,color_fragment:_f,color_pars_fragment:xf,color_pars_vertex:yf,color_vertex:vf,common:Mf,cube_uv_reflection_fragment:Sf,defaultnormal_vertex:bf,displacementmap_pars_vertex:Tf,displacementmap_vertex:Ef,emissivemap_fragment:wf,emissivemap_pars_fragment:Af,colorspace_fragment:Cf,colorspace_pars_fragment:Rf,envmap_fragment:Pf,envmap_common_pars_fragment:If,envmap_pars_fragment:Lf,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:Wf,envmap_vertex:Df,fog_vertex:Uf,fog_pars_vertex:Ff,fog_fragment:Of,fog_pars_fragment:Bf,gradientmap_pars_fragment:zf,lightmap_pars_fragment:kf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Hf,lights_toon_fragment:Xf,lights_toon_pars_fragment:qf,lights_phong_fragment:Yf,lights_phong_pars_fragment:Zf,lights_physical_fragment:Jf,lights_physical_pars_fragment:$f,lights_fragment_begin:Kf,lights_fragment_maps:jf,lights_fragment_end:Qf,lightprobes_pars_fragment:tp,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:ap,map_particle_fragment:op,map_particle_pars_fragment:lp,metalnessmap_fragment:cp,metalnessmap_pars_fragment:hp,morphinstance_vertex:up,morphcolor_vertex:dp,morphnormal_vertex:fp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:_p,normal_pars_fragment:xp,normal_pars_vertex:yp,normal_vertex:vp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:Tp,iridescence_pars_fragment:Ep,opaque_fragment:wp,packing:Ap,premultiplied_alpha_fragment:Cp,project_vertex:Rp,dithering_fragment:Pp,dithering_pars_fragment:Ip,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Up,shadowmap_vertex:Fp,shadowmask_pars_fragment:Op,skinbase_vertex:Bp,skinning_pars_vertex:zp,skinning_vertex:kp,skinnormal_vertex:Vp,specularmap_fragment:Gp,specularmap_pars_fragment:Hp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:Zp,uv_pars_vertex:Jp,uv_vertex:$p,worldpos_vertex:Kp,background_vert:jp,background_frag:Qp,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distance_vert:am,distance_frag:om,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:um,meshbasic_vert:dm,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:_m,meshnormal_vert:xm,meshnormal_frag:ym,meshphong_vert:vm,meshphong_frag:Mm,meshphysical_vert:Sm,meshphysical_frag:bm,meshtoon_vert:Tm,meshtoon_frag:Em,points_vert:wm,points_frag:Am,shadow_vert:Cm,shadow_frag:Rm,sprite_vert:Pm,sprite_frag:Im},zt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},ri={basic:{uniforms:un([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:un([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:un([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:un([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:un([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new oe(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:un([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:un([zt.points,zt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:un([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:un([zt.common,zt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:un([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:un([zt.sprite,zt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:un([zt.common,zt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:un([zt.lights,zt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};ri.physical={uniforms:un([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var Zo={r:0,b:0,g:0},Lm=new Ie,Iu=new Kt;Iu.set(-1,0,0,0,1,0,0,0,1);function Nm(i,t,e,n,s,r){let a=new oe(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function p(T){let L=T.isScene===!0?T.background:null;if(L&&L.isTexture){let S=T.backgroundBlurriness>0;L=t.get(L,S)}return L}function g(T){let L=!1,S=p(T);S===null?m(a,o):S&&S.isColor&&(m(S,1),L=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(T,L){let S=p(L);S&&(S.isCubeTexture||S.mapping===Or)?(l===void 0&&(l=new Be(new ti(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Ki(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(L.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Iu),l.material.toneMapped=_e.getTransfer(S.colorSpace)!==Ae,(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Be(new Gn(2,2),new En({name:"BackgroundMaterial",uniforms:Ki(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.toneMapped=_e.getTransfer(S.colorSpace)!==Ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,L){T.getRGB(Zo,uc(i)),e.buffers.color.setClear(Zo.r,Zo.g,Zo.b,L,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,L=1){a.set(T),o=L,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:g,addToRenderList:M,dispose:f}}function Dm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(H,G,et,V,$){let ct=!1,K=d(H,V,et,G);r!==K&&(r=K,l(r.object)),ct=p(H,V,et,$),ct&&g(H,V,et,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(ct||a)&&(a=!1,S(H,G,et,V),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return i.createVertexArray()}function l(H){return i.bindVertexArray(H)}function h(H){return i.deleteVertexArray(H)}function d(H,G,et,V){let $=V.wireframe===!0,ct=n[G.id];ct===void 0&&(ct={},n[G.id]=ct);let K=H.isInstancedMesh===!0?H.id:0,Y=ct[K];Y===void 0&&(Y={},ct[K]=Y);let rt=Y[et.id];rt===void 0&&(rt={},Y[et.id]=rt);let ot=rt[$];return ot===void 0&&(ot=u(c()),rt[$]=ot),ot}function u(H){let G=[],et=[],V=[];for(let $=0;$<e;$++)G[$]=0,et[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:et,attributeDivisors:V,object:H,attributes:{},index:null}}function p(H,G,et,V){let $=r.attributes,ct=G.attributes,K=0,Y=et.getAttributes();for(let rt in Y)if(Y[rt].location>=0){let ft=$[rt],At=ct[rt];if(At===void 0&&(rt==="instanceMatrix"&&H.instanceMatrix&&(At=H.instanceMatrix),rt==="instanceColor"&&H.instanceColor&&(At=H.instanceColor)),ft===void 0||ft.attribute!==At||At&&ft.data!==At.data)return!0;K++}return r.attributesNum!==K||r.index!==V}function g(H,G,et,V){let $={},ct=G.attributes,K=0,Y=et.getAttributes();for(let rt in Y)if(Y[rt].location>=0){let ft=ct[rt];ft===void 0&&(rt==="instanceMatrix"&&H.instanceMatrix&&(ft=H.instanceMatrix),rt==="instanceColor"&&H.instanceColor&&(ft=H.instanceColor));let At={};At.attribute=ft,ft&&ft.data&&(At.data=ft.data),$[rt]=At,K++}r.attributes=$,r.attributesNum=K,r.index=V}function M(){let H=r.newAttributes;for(let G=0,et=H.length;G<et;G++)H[G]=0}function m(H){f(H,0)}function f(H,G){let et=r.newAttributes,V=r.enabledAttributes,$=r.attributeDivisors;et[H]=1,V[H]===0&&(i.enableVertexAttribArray(H),V[H]=1),$[H]!==G&&(i.vertexAttribDivisor(H,G),$[H]=G)}function T(){let H=r.newAttributes,G=r.enabledAttributes;for(let et=0,V=G.length;et<V;et++)G[et]!==H[et]&&(i.disableVertexAttribArray(et),G[et]=0)}function L(H,G,et,V,$,ct,K){K===!0?i.vertexAttribIPointer(H,G,et,$,ct):i.vertexAttribPointer(H,G,et,V,$,ct)}function S(H,G,et,V){M();let $=V.attributes,ct=et.getAttributes(),K=G.defaultAttributeValues;for(let Y in ct){let rt=ct[Y];if(rt.location>=0){let ot=$[Y];if(ot===void 0&&(Y==="instanceMatrix"&&H.instanceMatrix&&(ot=H.instanceMatrix),Y==="instanceColor"&&H.instanceColor&&(ot=H.instanceColor)),ot!==void 0){let ft=ot.normalized,At=ot.itemSize,Mt=t.get(ot);if(Mt===void 0)continue;let Jt=Mt.buffer,Yt=Mt.type,le=Mt.bytesPerElement,U=Yt===i.INT||Yt===i.UNSIGNED_INT||ot.gpuType===lo;if(ot.isInterleavedBufferAttribute){let N=ot.data,I=N.stride,R=ot.offset;if(N.isInstancedInterleavedBuffer){for(let B=0;B<rt.locationSize;B++)f(rt.location+B,N.meshPerAttribute);H.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let B=0;B<rt.locationSize;B++)m(rt.location+B);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let B=0;B<rt.locationSize;B++)L(rt.location+B,At/rt.locationSize,Yt,ft,I*le,(R+At/rt.locationSize*B)*le,U)}else{if(ot.isInstancedBufferAttribute){for(let N=0;N<rt.locationSize;N++)f(rt.location+N,ot.meshPerAttribute);H.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let N=0;N<rt.locationSize;N++)m(rt.location+N);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let N=0;N<rt.locationSize;N++)L(rt.location+N,At/rt.locationSize,Yt,ft,At*le,At/rt.locationSize*N*le,U)}}else if(K!==void 0){let ft=K[Y];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(rt.location,ft);break;case 3:i.vertexAttrib3fv(rt.location,ft);break;case 4:i.vertexAttrib4fv(rt.location,ft);break;default:i.vertexAttrib1fv(rt.location,ft)}}}}T()}function E(){A();for(let H in n){let G=n[H];for(let et in G){let V=G[et];for(let $ in V){let ct=V[$];for(let K in ct)h(ct[K].object),delete ct[K];delete V[$]}}delete n[H]}}function w(H){if(n[H.id]===void 0)return;let G=n[H.id];for(let et in G){let V=G[et];for(let $ in V){let ct=V[$];for(let K in ct)h(ct[K].object),delete ct[K];delete V[$]}}delete n[H.id]}function D(H){for(let G in n){let et=n[G];for(let V in et){let $=et[V];if($[H.id]===void 0)continue;let ct=$[H.id];for(let K in ct)h(ct[K].object),delete ct[K];delete $[H.id]}}}function x(H){for(let G in n){let et=n[G],V=H.isInstancedMesh===!0?H.id:0,$=et[V];if($!==void 0){for(let ct in $){let K=$[ct];for(let Y in K)h(K[Y].object),delete K[Y];delete $[ct]}delete et[V],Object.keys(et).length===0&&delete n[G]}}}function A(){z(),a=!0,r!==s&&(r=s,l(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:z,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:m,disableUnusedAttributes:T}}function Um(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Fm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==Dn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let x=D===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==_n&&D!==Nn&&!x&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(ne("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:L,maxFragmentUniforms:S,maxSamples:E,samples:w}}function Om(i){let t=this,e=null,n=0,s=!1,r=!1,a=new kn,o=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let T=r?0:n,L=T*4,S=f.clippingState||null;c.value=S,S=h(g,u,L,p);for(let E=0;E!==L;++E)S[E]=e[E];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=c.value,g!==!0||m===null){let f=p+M*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let L=0,S=p;L!==M;++L,S+=4)a.copy(d[L]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var ks=4,Bm=6,zm=20,km=256,qr=new Is,cu=new oe,vc=null,Mc=0,Sc=0,bc=!1,Vm=new k,ji=new k,Gs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Vm}=r;vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vc,Mc,Sc),this._renderer.xr.enabled=bc,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:qn,format:Dn,colorSpace:ar,depthBuffer:!1},s=hu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gm(r)),this._blurMaterial=Wm(r,t,e),this._ggxMaterial=Hm(r,t,e)}return s}_compileMaterial(t){let e=new Be(new Je,t);this._renderer.compile(e,qr)}_sceneToCubeUV(t,e,n,s,r){let c=new en(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(cu),d.toneMapping=Wn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Be(new ti,new tn({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,f=!0):(m.color.copy(cu),f=!0);for(let L=0;L<6;L++){let S=L%3;S===0?(c.up.set(0,l[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[L],r.y,r.z)):S===1?(c.up.set(0,0,l[L]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[L],r.z)):(c.up.set(0,l[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[L]));let E=this._cubeSize;zs(s,S*E,L>2?E:0,E,E),d.setRenderTarget(s),f&&d.render(M,c),d.render(t,c)}d.toneMapping=p,d.autoClear=u,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Di||t.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;zs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,qr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,p=d*u,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-ks?n-g+ks:0),f=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=g-e,zs(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(o,qr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,zs(t,m,f,3*M,2*M),s.setRenderTarget(t),s.render(o,qr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-ks?s-this._lodMax+ks:0),u=4*(this._cubeSize-h);zs(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(c,qr)}};function Gm(i){let t=[],e=[],n=i,s=i-ks+1+Bm;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,p=3,g=new Float32Array(p*u*d),M=new Float32Array(p*u*d);for(let f=0;f<d;f++){let T=f%3*2/3-1,L=f>2?0:-1,S=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];g.set(S,p*u*f);for(let E=0;E<u;E++){let w=h[E*2]*2-1,D=h[E*2+1]*2-1;f===0?ji.set(1,D,w):f===1?ji.set(-w,1,-D):f===2?ji.set(-w,D,1):f===3?ji.set(-1,D,-w):f===4?ji.set(-w,-1,D):ji.set(w,D,-1),ji.toArray(M,(f*u+E)*p)}}let m=new Je;m.setAttribute("position",new Sn(g,p)),m.setAttribute("outputDirection",new Sn(M,p)),e.push(new Be(m,null)),n>ks&&n--}return{lodMeshes:e,sizeLods:t}}function hu(i,t,e){let n=new gn(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Hm(i,t,e){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:km,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jo(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Wm(i,t,e){return new En({name:"SphericalGaussianBlur",defines:{SAMPLES:zm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jo(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function uu(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function du(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function jo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $o=class extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new mr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ti(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:ii});r.uniforms.tEquirect.value=e;let a=new Be(s,r),o=e.minFilter;return e.minFilter===Ui&&(e.minFilter=nn),new eo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Xm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===ro||p===ao)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new $o(g.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",l),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,g=p===ro||p===ao,M=p===Di||p===$i;if(g||M){let m=e.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Gs(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let T=u.image;return g&&T&&T.height>0||M&&T&&c(T)?(n===null&&(n=new Gs(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===ro?u.mapping=Di:p===ao&&(u.mapping=$i),u}function c(u){let p=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&p++;return p===g}function l(u){let p=u.target;p.removeEventListener("dispose",l);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function qm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Gi("WebGLRenderer: "+n+" extension not supported."),s}}}function Ym(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER)}function l(d){let u=[],p=d.index,g=d.attributes.position,M=0;if(g===void 0)return;if(p!==null){let T=p.array;M=p.version;for(let L=0,S=T.length;L<S;L+=3){let E=T[L+0],w=T[L+1],D=T[L+2];u.push(E,w,w,D,D,E)}}else{let T=g.array;M=g.version;for(let L=0,S=T.length/3-1;L<S;L+=3){let E=L+0,w=L+1,D=L+2;u.push(E,w,w,D,D,E)}}let m=new(g.count>=65535?dr:ur)(u,1);m.version=M;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Zm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function l(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*a,p),e.update(u,n,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let M=0;for(let m=0;m<p;m++)M+=u[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Jm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:se("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $m(i,t,e){let n=new WeakMap,s=new Oe;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let A=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],L=0;p===!0&&(L=1),g===!0&&(L=2),M===!0&&(L=3);let S=o.attributes.position.count*L,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let w=new Float32Array(S*E*4*d),D=new cr(w,S,E,d);D.type=Nn,D.needsUpdate=!0;let x=L*4;for(let z=0;z<d;z++){let H=m[z],G=f[z],et=T[z],V=S*E*4*z;for(let $=0;$<H.count;$++){let ct=$*x;p===!0&&(s.fromBufferAttribute(H,$),w[V+ct+0]=s.x,w[V+ct+1]=s.y,w[V+ct+2]=s.z,w[V+ct+3]=0),g===!0&&(s.fromBufferAttribute(G,$),w[V+ct+4]=s.x,w[V+ct+5]=s.y,w[V+ct+6]=s.z,w[V+ct+7]=0),M===!0&&(s.fromBufferAttribute(et,$),w[V+ct+8]=s.x,w[V+ct+9]=s.y,w[V+ct+10]=s.z,w[V+ct+11]=et.itemSize===4?s.w:1)}}u={count:d,texture:D,size:new xt(S,E)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<l.length;M++)p+=l[M];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Km(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var jm={[Jl]:"LINEAR_TONE_MAPPING",[$l]:"REINHARD_TONE_MAPPING",[Kl]:"CINEON_TONE_MAPPING",[jl]:"ACES_FILMIC_TONE_MAPPING",[tc]:"AGX_TONE_MAPPING",[Fr]:"NEUTRAL_TONE_MAPPING",[Ql]:"CUSTOM_TONE_MAPPING"};function Qm(i,t,e,n,s,r){let a=new gn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Je;l.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new xe([0,2,0,0,2,0],2));let h=new Ha({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Be(l,h),u=new Is(-1,1,1,-1,0,1),p=null,g=null,M=!1,m,f=null,T=[],L=!1;this.setSize=function(S,E){a.setSize(S,E),o!==null&&o.setSize(S,E),c!==null&&c.setSize(S,E);for(let w=0;w<T.length;w++){let D=T[w];D.setSize&&D.setSize(S,E)}},this.setEffects=function(S){T=S,L=T.length>0&&T[0].isRenderPass===!0;let E=a.width,w=a.height;T.length>0&&o===null&&(o=new gn(E,w,{type:qn,depthBuffer:!1,stencilBuffer:!1}),c=new gn(E,w,{type:qn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<T.length;D++){let x=T[D];x.setSize&&x.setSize(E,w)}},this.begin=function(S,E){if(M||S.toneMapping===Wn&&T.length===0)return!1;if(f=E,E!==null){let w=E.width,D=E.height;(a.width!==w||a.height!==D)&&this.setSize(w,D)}return L===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=Wn,!0},this.hasRenderPass=function(){return L},this.end=function(S,E){S.toneMapping=m,M=!0;let w=a,D=o;for(let x=0;x<T.length;x++){let A=T[x];A.enabled!==!1&&(A.render(S,D,w,E),A.needsSwap!==!1&&(w=D,D=D===o?c:o))}if(p!==S.outputColorSpace||g!==S.toneMapping){p=S.outputColorSpace,g=S.toneMapping,h.defines={},_e.getTransfer(p)===Ae&&(h.defines.SRGB_TRANSFER="");let x=jm[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(f),S.render(d,u),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Lu=new sn,wc=new Ri(1,1),Nu=new cr,Du=new Na,Uu=new mr,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),_u=new Float32Array(4);function Hs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=fu[s];if(r===void 0&&(r=new Float32Array(s),fu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function $e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qo(i,t){let e=pu[t];e===void 0&&(e=new Int32Array(t),pu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;_u.set(n),i.uniformMatrix2fv(this.addr,!1,_u),Ke(e,n)}}function rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;gu.set(n),i.uniformMatrix3fv(this.addr,!1,gu),Ke(e,n)}}function ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;mu.set(n),i.uniformMatrix4fv(this.addr,!1,mu),Ke(e,n)}}function og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function ug(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wc.compareFunction=e.isReversedDepthBuffer()?Yo:qo,r=wc):r=Lu,e.setTexture2D(t||r,s)}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Du,s)}function _g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uu,s)}function xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nu,s)}function yg(i){switch(i){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return xg}}function vg(i,t){i.uniform1fv(this.addr,t)}function Mg(i,t){let e=Hs(t,this.size,2);i.uniform2fv(this.addr,e)}function Sg(i,t){let e=Hs(t,this.size,3);i.uniform3fv(this.addr,e)}function bg(i,t){let e=Hs(t,this.size,4);i.uniform4fv(this.addr,e)}function Tg(i,t){let e=Hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Eg(i,t){let e=Hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wg(i,t){let e=Hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ag(i,t){i.uniform1iv(this.addr,t)}function Cg(i,t){i.uniform2iv(this.addr,t)}function Rg(i,t){i.uniform3iv(this.addr,t)}function Pg(i,t){i.uniform4iv(this.addr,t)}function Ig(i,t){i.uniform1uiv(this.addr,t)}function Lg(i,t){i.uniform2uiv(this.addr,t)}function Ng(i,t){i.uniform3uiv(this.addr,t)}function Dg(i,t){i.uniform4uiv(this.addr,t)}function Ug(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=wc:a=Lu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Fg(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Du,r[a])}function Og(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Uu,r[a])}function Bg(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Nu,r[a])}function zg(i){switch(i){case 5126:return vg;case 35664:return Mg;case 35665:return Sg;case 35666:return bg;case 35674:return Tg;case 35675:return Eg;case 35676:return wg;case 5124:case 35670:return Ag;case 35667:case 35671:return Cg;case 35668:case 35672:return Rg;case 35669:case 35673:return Pg;case 5125:return Ig;case 36294:return Lg;case 36295:return Ng;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}var Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yg(e.type)}},Cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zg(e.type)}},Rc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Tc=/(\w+)(\])?(\[|\.)?/g;function xu(i,t){i.seq.push(t),i.map[t.id]=t}function kg(i,t,e){let n=i.name,s=n.length;for(Tc.lastIndex=0;;){let r=Tc.exec(n),a=Tc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){xu(e,l===void 0?new Ac(o,i,t):new Cc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Rc(o),xu(e,d)),e=d}}}var Vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);kg(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function yu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Vg=37297,Gg=0;function Hg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var vu=new Kt;function Wg(i){_e._getMatrix(vu,_e.workingColorSpace,i);let t=`mat3( ${vu.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(i)){case or:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Hg(i.getShaderSource(t),o)}else return r}function Xg(i,t){let e=Wg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var qg={[Jl]:"Linear",[$l]:"Reinhard",[Kl]:"Cineon",[jl]:"ACESFilmic",[tc]:"AgX",[Fr]:"Neutral",[Ql]:"Custom"};function Yg(i,t){let e=qg[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jo=new k;function Zg(){_e.getLuminanceCoefficients(Jo);let i=Jo.x.toFixed(4),t=Jo.y.toFixed(4),e=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function $g(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Zr(i){return i!==""}function Su(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(i){return i.replace(jg,t0)}var Qg=new Map;function t0(i,t){let e=ue[t];if(e===void 0){let n=Qg.get(t);if(n!==void 0)e=ue[n],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Pc(e)}var e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(i){return i.replace(e0,n0)}function n0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var i0={[Ur]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function s0(i){return i0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var r0={[Di]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE_UV"};function a0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":r0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var o0={[$i]:"ENVMAP_MODE_REFRACTION"};function l0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":o0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var c0={[so]:"ENVMAP_BLENDING_MULTIPLY",[Bh]:"ENVMAP_BLENDING_MIX",[zh]:"ENVMAP_BLENDING_ADD"};function h0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":c0[i.combine]||"ENVMAP_BLENDING_NONE"}function u0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function d0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=s0(e),l=a0(e),h=l0(e),d=h0(e),u=u0(e),p=Jg(e),g=$g(r),M=s.createProgram(),m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zr).join(`
`),f.length>0&&(f+=`
`)):(m=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),f=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?ue.tonemapping_pars_fragment:"",e.toneMapping!==Wn?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,Xg("linearToOutputTexel",e.outputColorSpace),Zg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zr).join(`
`)),a=Pc(a),a=Su(a,e),a=bu(a,e),o=Pc(o),o=Su(o,e),o=bu(o,e),a=Tu(a),o=Tu(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let L=T+m+a,S=T+f+o,E=yu(s,s.VERTEX_SHADER,L),w=yu(s,s.FRAGMENT_SHADER,S);s.attachShader(M,E),s.attachShader(M,w),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(H){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(M)||"",et=s.getShaderInfoLog(E)||"",V=s.getShaderInfoLog(w)||"",$=G.trim(),ct=et.trim(),K=V.trim(),Y=!0,rt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,E,w);else{let ot=Mu(s,E,"vertex"),ft=Mu(s,w,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+$+`
`+ot+`
`+ft)}else $!==""?ne("WebGLProgram: Program Info Log:",$):(ct===""||K==="")&&(rt=!1);rt&&(H.diagnostics={runnable:Y,programLog:$,vertexShader:{log:ct,prefix:m},fragmentShader:{log:K,prefix:f}})}s.deleteShader(E),s.deleteShader(w),x=new Vs(s,M),A=Kg(s,M)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(M,Vg)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=w,this}var f0=0,Ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lc(t),e.set(t,n)),n}},Lc=class{constructor(t){this.id=f0++,this.code=t,this.usedTimes=0}};function p0(i){return i===Oi||i===Hr||i===Wr}function m0(i,t,e,n,s,r){let a=new hr,o=new Ic,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function M(x,A,z,H,G,et){let V=H.fog,$=G.geometry,ct=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?H.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=t.get(x.envMap||ct,K),rt=Y&&Y.mapping===Or?Y.image.height:null,ot=p[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&ne("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let ft=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,At=ft!==void 0?ft.length:0,Mt=0;$.morphAttributes.position!==void 0&&(Mt=1),$.morphAttributes.normal!==void 0&&(Mt=2),$.morphAttributes.color!==void 0&&(Mt=3);let Jt,Yt,le,U;if(ot){let Ce=ri[ot];Jt=Ce.vertexShader,Yt=Ce.fragmentShader}else{Jt=x.vertexShader,Yt=x.fragmentShader;let Ce=o.getVertexShaderStage(x),ve=o.getFragmentShaderStage(x);o.update(x,Ce,ve),le=Ce.id,U=ve.id}let N=i.getRenderTarget(),I=i.state.buffers.depth.getReversed(),R=G.isInstancedMesh===!0,B=G.isBatchedMesh===!0,st=!!x.map,yt=!!x.matcap,b=!!Y,F=!!x.aoMap,P=!!x.lightMap,Z=!!x.bumpMap&&x.wireframe===!1,j=!!x.normalMap,ut=!!x.displacementMap,mt=!!x.emissiveMap,gt=!!x.metalnessMap,q=!!x.roughnessMap,y=x.anisotropy>0,Dt=x.clearcoat>0,Ct=x.dispersion>0,C=x.retroreflectivity>0,_=x.iridescence>0,W=x.sheen>0,Q=x.transmission>0,ht=y&&!!x.anisotropyMap,bt=Dt&&!!x.clearcoatMap,Et=Dt&&!!x.clearcoatNormalMap,dt=Dt&&!!x.clearcoatRoughnessMap,at=_&&!!x.iridescenceMap,Rt=_&&!!x.iridescenceThicknessMap,Wt=W&&!!x.sheenColorMap,Nt=W&&!!x.sheenRoughnessMap,Pt=!!x.specularMap,kt=!!x.specularColorMap,jt=!!x.specularIntensityMap,ae=Q&&!!x.transmissionMap,X=Q&&!!x.thicknessMap,It=!!x.gradientMap,pt=!!x.alphaMap,Lt=x.alphaTest>0,Ft=!!x.alphaHash,vt=!!x.extensions,$t=Wn;x.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&($t=i.toneMapping);let Xt={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:Jt,fragmentShader:Yt,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:U,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:B,batchingColor:B&&G._colorsTexture!==null,instancing:R,instancingColor:R&&G.instanceColor!==null,instancingMorph:R&&G.morphTexture!==null,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:st,matcap:yt,envMap:b,envMapMode:b&&Y.mapping,envMapCubeUVHeight:rt,aoMap:F,lightMap:P,bumpMap:Z,normalMap:j,displacementMap:ut,emissiveMap:mt,normalMapObjectSpace:j&&x.normalMapType===Gh,normalMapTangentSpace:j&&x.normalMapType===Xr,packedNormalMap:j&&x.normalMapType===Xr&&p0(x.normalMap.format),metalnessMap:gt,roughnessMap:q,anisotropy:y,anisotropyMap:ht,clearcoat:Dt,clearcoatMap:bt,clearcoatNormalMap:Et,clearcoatRoughnessMap:dt,dispersion:Ct,retroreflection:C,iridescence:_,iridescenceMap:at,iridescenceThicknessMap:Rt,sheen:W,sheenColorMap:Wt,sheenRoughnessMap:Nt,specularMap:Pt,specularColorMap:kt,specularIntensityMap:jt,transmission:Q,transmissionMap:ae,thicknessMap:X,gradientMap:It,opaque:x.transparent===!1&&x.blending===Us&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:Lt,alphaHash:Ft,combine:x.combine,mapUv:st&&g(x.map.channel),aoMapUv:F&&g(x.aoMap.channel),lightMapUv:P&&g(x.lightMap.channel),bumpMapUv:Z&&g(x.bumpMap.channel),normalMapUv:j&&g(x.normalMap.channel),displacementMapUv:ut&&g(x.displacementMap.channel),emissiveMapUv:mt&&g(x.emissiveMap.channel),metalnessMapUv:gt&&g(x.metalnessMap.channel),roughnessMapUv:q&&g(x.roughnessMap.channel),anisotropyMapUv:ht&&g(x.anisotropyMap.channel),clearcoatMapUv:bt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Et&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&g(x.sheenRoughnessMap.channel),specularMapUv:Pt&&g(x.specularMap.channel),specularColorMapUv:kt&&g(x.specularColorMap.channel),specularIntensityMapUv:jt&&g(x.specularIntensityMap.channel),transmissionMapUv:ae&&g(x.transmissionMap.channel),thicknessMapUv:X&&g(x.thicknessMap.channel),alphaMapUv:pt&&g(x.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(j||y),vertexNormals:!!$.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(st||pt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||$.attributes.normal===void 0&&j===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:I,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Mt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:et.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:st&&x.map.isVideoTexture===!0&&_e.getTransfer(x.map.colorSpace)===Ae,decodeVideoTextureEmissive:mt&&x.emissiveMap.isVideoTexture===!0&&_e.getTransfer(x.emissiveMap.colorSpace)===Ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Cn,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:vt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&x.extensions.multiDraw===!0||B)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function m(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let z in x.defines)A.push(z),A.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(f(A,x),T(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function f(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function T(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function L(x){let A=p[x.type],z;if(A){let H=ri[A];z=au.clone(H.uniforms)}else z=x.uniforms;return z}function S(x,A){let z=h.get(A);return z!==void 0?++z.usedTimes:(z=new d0(i,A,x,s),l.push(z),h.set(A,z)),z}function E(x){if(--x.usedTimes===0){let A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function D(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:L,acquireProgram:S,releaseProgram:E,releaseShaderCache:w,programs:l,dispose:D}}function g0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function wu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Au(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,M,m,f){let T=i[t];return T===void 0?(T={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:f},i[t]=T):(T.id=u.id,T.object=u,T.geometry=p,T.material=g,T.materialVariant=a(u),T.groupOrder=M,T.renderOrder=u.renderOrder,T.z=m,T.group=f),t++,T}function c(u,p,g,M,m,f,T){T.reversedDepth===!0&&(m=-m);let L=o(u,p,g,M,m,f);g.transmission>0?n.push(L):g.transparent===!0?s.push(L):e.push(L)}function l(u,p,g,M,m,f){let T=o(u,p,g,M,m,f);g.transmission>0?n.unshift(T):g.transparent===!0?s.unshift(T):e.unshift(T)}function h(u,p){e.length>1&&e.sort(u||_0),n.length>1&&n.sort(p||wu),s.length>1&&s.sort(p||wu)}function d(){for(let u=t,p=i.length;u<p;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function x0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Au,i.set(n,[a])):s>=r.length?(a=new Au,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function y0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new oe};break;case"SpotLight":e={position:new k,direction:new k,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function v0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var M0=0;function S0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function b0(i){let t=new y0,e=v0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);let s=new k,r=new Ie,a=new Ie;function o(l){let h=0,d=0,u=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let p=0,g=0,M=0,m=0,f=0,T=0,L=0,S=0,E=0,w=0,D=0,x=0,A=0,z=0;l.sort(S0);for(let G=0,et=l.length;G<et;G++){let V=l[G],$=V.color,ct=V.intensity,K=V.distance,Y=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Oi?Y=V.shadow.map.texture:Y=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)h+=$.r*ct,d+=$.g*ct,u+=$.b*ct;else if(V.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(V.sh.coefficients[rt],ct);z++}else if(V.isSunLight){let rt=t.get(V);if(rt.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let ot=V.shadow,ft=e.get(V);ft.shadowIntensity=ot.intensity,ft.shadowBias=ot.bias,ft.shadowNormalBias=ot.normalBias,ft.shadowRadius=ot.radius,ft.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),n.sunShadow[g]=ft,n.sunShadowMap[g]=Y;let At=ot.getViewportCount();for(let Mt=0;Mt<At;Mt++)n.sunShadowMatrix[M+Mt]=ot.getMatrix(Mt),n.sunShadowCascade[M+Mt]=ot._cascadeData[Mt];M+=At,g++}n.sun[p]=rt,p++}else if(V.isDirectionalLight){let rt=t.get(V);if(rt.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let ot=V.shadow,ft=e.get(V);ft.shadowIntensity=ot.intensity,ft.shadowBias=ot.bias,ft.shadowNormalBias=ot.normalBias,ft.shadowRadius=ot.radius,ft.shadowMapSize=ot.mapSize,n.directionalShadow[m]=ft,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=V.shadow.matrix,E++}n.directional[m]=rt,m++}else if(V.isSpotLight){let rt=t.get(V);rt.position.setFromMatrixPosition(V.matrixWorld),rt.color.copy($).multiplyScalar(ct),rt.distance=K,rt.coneCos=Math.cos(V.angle),rt.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),rt.decay=V.decay,n.spot[T]=rt;let ot=V.shadow;if(V.map&&(n.spotLightMap[x]=V.map,x++,ot.updateMatrices(V),V.castShadow&&A++),n.spotLightMatrix[T]=ot.matrix,V.castShadow){let ft=e.get(V);ft.shadowIntensity=ot.intensity,ft.shadowBias=ot.bias,ft.shadowNormalBias=ot.normalBias,ft.shadowRadius=ot.radius,ft.shadowMapSize=ot.mapSize,n.spotShadow[T]=ft,n.spotShadowMap[T]=Y,D++}T++}else if(V.isRectAreaLight){let rt=t.get(V);rt.color.copy($).multiplyScalar(ct),rt.halfWidth.set(V.width*.5,0,0),rt.halfHeight.set(0,V.height*.5,0),n.rectArea[L]=rt,L++}else if(V.isPointLight){let rt=t.get(V);if(rt.color.copy(V.color).multiplyScalar(V.intensity),rt.distance=V.distance,rt.decay=V.decay,V.castShadow){let ot=V.shadow,ft=e.get(V);ft.shadowIntensity=ot.intensity,ft.shadowBias=ot.bias,ft.shadowNormalBias=ot.normalBias,ft.shadowRadius=ot.radius,ft.shadowMapSize=ot.mapSize,ft.shadowCameraNear=ot.camera.near,ft.shadowCameraFar=ot.camera.far,n.pointShadow[f]=ft,n.pointShadowMap[f]=Y,n.pointShadowMatrix[f]=V.shadow.matrix,w++}n.point[f]=rt,f++}else if(V.isHemisphereLight){let rt=t.get(V);rt.skyColor.copy(V.color).multiplyScalar(ct),rt.groundColor.copy(V.groundColor).multiplyScalar(ct),n.hemi[S]=rt,S++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=zt.LTC_FLOAT_1,n.rectAreaLTC2=zt.LTC_FLOAT_2):(n.rectAreaLTC1=zt.LTC_HALF_1,n.rectAreaLTC2=zt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let H=n.hash;(H.sunLength!==p||H.directionalLength!==m||H.pointLength!==f||H.spotLength!==T||H.rectAreaLength!==L||H.hemiLength!==S||H.numSunShadows!==g||H.numDirectionalShadows!==E||H.numPointShadows!==w||H.numSpotShadows!==D||H.numSpotMaps!==x||H.numLightProbes!==z)&&(n.sun.length=p,n.directional.length=m,n.spot.length=T,n.rectArea.length=L,n.point.length=f,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=z,H.sunLength=p,H.directionalLength=m,H.pointLength=f,H.spotLength=T,H.rectAreaLength=L,H.hemiLength=S,H.numSunShadows=g,H.numDirectionalShadows=E,H.numPointShadows=w,H.numSpotShadows=D,H.numSpotMaps=x,H.numLightProbes=z,n.version=M0++)}function c(l,h){let d=0,u=0,p=0,g=0,M=0,m=0,f=h.matrixWorldInverse;for(let T=0,L=l.length;T<L;T++){let S=l[T];if(S.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),d++}else if(S.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),u++}else if(S.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),g++}else if(S.isRectAreaLight){let E=n.rectArea[M];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),a.identity(),r.copy(S.matrixWorld),r.premultiply(f),a.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){let E=n.point[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:n}}function Cu(i){let t=new b0(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function T0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Cu(i),t.set(s,[o])):r>=a.length?(o=new Cu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var E0=`void main() {
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
}`,A0=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],C0=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Ru=new Ie,Yr=new k,Ec=new k;function R0(i,t,e){let n=new Es,s=new xt,r=new xt,a=new Oe,o=new Wa,c=new Xa,l={},h=e.maxTextureSize,d={[Ni]:an,[an]:Ni,[Cn]:Cn},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:E0,fragmentShader:w0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Je;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Be(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let f=this.type;this.render=function(w,D,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===yh&&(ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ur);let A=i.getRenderTarget(),z=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),G=i.state;G.setBlending(ii),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let et=f!==this.type;et&&D.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach($=>$.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,$=w.length;V<$;V++){let ct=w[V],K=ct.shadow;if(K===void 0){ne("WebGLShadowMap:",ct,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let Y=K.getFrameExtents();s.multiply(Y),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,K.mapSize.y=r.y));let rt=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=rt,K.map===null||et===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Ds){if(ct.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new gn(s.x,s.y,{format:Oi,type:qn,minFilter:nn,magFilter:nn,generateMipmaps:!1}),K.map.texture.name=ct.name+".shadowMap",K.map.depthTexture=new Ri(s.x,s.y,Nn),K.map.depthTexture.name=ct.name+".shadowMapDepth",K.map.depthTexture.format=Kn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Qe,K.map.depthTexture.magFilter=Qe}else ct.isPointLight?(K.map=new $o(s.x),K.map.depthTexture=new Ua(s.x,Xn)):(K.map=new gn(s.x,s.y),K.map.depthTexture=new Ri(s.x,s.y,Xn)),K.map.depthTexture.name=ct.name+".shadowMap",K.map.depthTexture.format=Kn,this.type===Ur?(K.map.depthTexture.compareFunction=rt?Yo:qo,K.map.depthTexture.minFilter=nn,K.map.depthTexture.magFilter=nn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Qe,K.map.depthTexture.magFilter=Qe);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let ot=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();ct.isPointLight!==!0&&K.updateMatrices(ct,x);for(let ft=0;ft<ot;ft++){let At=K.getCamera(ft);if(ct.isPointLight){let Mt=K.camera,Jt=K.matrix,Yt=ct.distance||Mt.far;Yt!==Mt.far&&(Mt.far=Yt,Mt.updateProjectionMatrix()),Yr.setFromMatrixPosition(ct.matrixWorld),Mt.position.copy(Yr),Ec.copy(Mt.position),Ec.add(A0[ft]),Mt.up.copy(C0[ft]),Mt.lookAt(Ec),Mt.updateMatrixWorld(),Jt.makeTranslation(-Yr.x,-Yr.y,-Yr.z),Ru.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Ru,Mt.coordinateSystem,Mt.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,ft),i.clear();else{ft===0&&(i.setRenderTarget(K.map),i.clear());let Mt=K.getViewport(ft);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),G.viewport(a)}n=K.getFrustum(ft),S(D,x,At,ct,this.type)}K.isPointLightShadow!==!0&&this.type===Ds&&T(K,x),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(A,z,H)};function T(w,D){let x=t.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new gn(s.x,s.y,{format:Oi,type:qn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(D,null,x,u,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(D,null,x,p,M,null)}function L(w,D,x,A){let z=null,H=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(H!==void 0)z=H;else if(z=x.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let G=z.uuid,et=D.uuid,V=l[G];V===void 0&&(V={},l[G]=V);let $=V[et];$===void 0&&($=z.clone(),V[et]=$,D.addEventListener("dispose",E)),z=$}if(z.visible=D.visible,z.wireframe=D.wireframe,A===Ds?z.side=D.shadowSide!==null?D.shadowSide:D.side:z.side=D.shadowSide!==null?D.shadowSide:d[D.side],z.alphaMap=D.alphaMap,z.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,z.map=D.map,z.clipShadows=D.clipShadows,z.clippingPlanes=D.clippingPlanes,z.clipIntersection=D.clipIntersection,z.displacementMap=D.displacementMap,z.displacementScale=D.displacementScale,z.displacementBias=D.displacementBias,z.wireframeLinewidth=D.wireframeLinewidth,z.linewidth=D.linewidth,x.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let G=i.properties.get(z);G.light=x}return z}function S(w,D,x,A,z){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&z===Ds)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let et=t.update(w),V=w.material;if(Array.isArray(V)){let $=et.groups;for(let ct=0,K=$.length;ct<K;ct++){let Y=$[ct],rt=V[Y.materialIndex];if(rt&&rt.visible){let ot=L(w,rt,A,z);w.onBeforeShadow(i,w,D,x,et,ot,Y),i.renderBufferDirect(x,null,et,ot,w,Y),w.onAfterShadow(i,w,D,x,et,ot,Y)}}}else if(V.visible){let $=L(w,V,A,z);w.onBeforeShadow(i,w,D,x,et,$,null),i.renderBufferDirect(x,null,et,$,w,null),w.onAfterShadow(i,w,D,x,et,$,null)}}let G=w.children;for(let et=0,V=G.length;et<V;et++)S(G[et],D,x,A,z)}function E(w){w.target.removeEventListener("dispose",E);for(let x in l){let A=l[x],z=w.target.uuid;z in A&&(A[z].dispose(),delete A[z])}}}function P0(i,t){function e(){let X=!1,It=new Oe,pt=null,Lt=new Oe(0,0,0,0);return{setMask:function(Ft){pt!==Ft&&!X&&(i.colorMask(Ft,Ft,Ft,Ft),pt=Ft)},setLocked:function(Ft){X=Ft},setClear:function(Ft,vt,$t,Xt,Ce){Ce===!0&&(Ft*=Xt,vt*=Xt,$t*=Xt),It.set(Ft,vt,$t,Xt),Lt.equals(It)===!1&&(i.clearColor(Ft,vt,$t,Xt),Lt.copy(It))},reset:function(){X=!1,pt=null,Lt.set(-1,0,0,0)}}}function n(){let X=!1,It=!1,pt=null,Lt=null,Ft=null;return{setReversed:function(vt){if(It!==vt){let $t=t.get("EXT_clip_control");vt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),It=vt;let Xt=Ft;Ft=null,this.setClear(Xt)}},getReversed:function(){return It},setTest:function(vt){vt?N(i.DEPTH_TEST):I(i.DEPTH_TEST)},setMask:function(vt){pt!==vt&&!X&&(i.depthMask(vt),pt=vt)},setFunc:function(vt){if(It&&(vt=tu[vt]),Lt!==vt){switch(vt){case Sa:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case Ea:i.depthFunc(i.EQUAL);break;case wa:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=vt}},setLocked:function(vt){X=vt},setClear:function(vt){Ft!==vt&&(Ft=vt,It&&(vt=1-vt),i.clearDepth(vt))},reset:function(){X=!1,pt=null,Lt=null,Ft=null,It=!1}}}function s(){let X=!1,It=null,pt=null,Lt=null,Ft=null,vt=null,$t=null,Xt=null,Ce=null;return{setTest:function(ve){X||(ve?N(i.STENCIL_TEST):I(i.STENCIL_TEST))},setMask:function(ve){It!==ve&&!X&&(i.stencilMask(ve),It=ve)},setFunc:function(ve,We,fn){(pt!==ve||Lt!==We||Ft!==fn)&&(i.stencilFunc(ve,We,fn),pt=ve,Lt=We,Ft=fn)},setOp:function(ve,We,fn){(vt!==ve||$t!==We||Xt!==fn)&&(i.stencilOp(ve,We,fn),vt=ve,$t=We,Xt=fn)},setLocked:function(ve){X=ve},setClear:function(ve){Ce!==ve&&(i.clearStencil(ve),Ce=ve)},reset:function(){X=!1,It=null,pt=null,Lt=null,Ft=null,vt=null,$t=null,Xt=null,Ce=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],M=null,m=!1,f=null,T=null,L=null,S=null,E=null,w=null,D=null,x=new oe(0,0,0),A=0,z=!1,H=null,G=null,et=null,V=null,$=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,Y=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(rt)[1]),K=Y>=1):rt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),K=Y>=2);let ot=null,ft={},At=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),Jt=new Oe().fromArray(At),Yt=new Oe().fromArray(Mt);function le(X,It,pt,Lt){let Ft=new Uint8Array(4),vt=i.createTexture();i.bindTexture(X,vt),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<pt;$t++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(It,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(It+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return vt}let U={};U[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),N(i.DEPTH_TEST),a.setFunc(xs),Z(!1),j(Hl),N(i.CULL_FACE),F(ii);function N(X){h[X]!==!0&&(i.enable(X),h[X]=!0)}function I(X){h[X]!==!1&&(i.disable(X),h[X]=!1)}function R(X,It){return u[X]!==It?(i.bindFramebuffer(X,It),u[X]=It,X===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=It),X===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=It),!0):!1}function B(X,It){let pt=g,Lt=!1;if(X){pt=p.get(It),pt===void 0&&(pt=[],p.set(It,pt));let Ft=X.textures;if(pt.length!==Ft.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,$t=Ft.length;vt<$t;vt++)pt[vt]=i.COLOR_ATTACHMENT0+vt;pt.length=Ft.length,Lt=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(pt)}function st(X){return M!==X?(i.useProgram(X),M=X,!0):!1}let yt={[Ji]:i.FUNC_ADD,[Mh]:i.FUNC_SUBTRACT,[Sh]:i.FUNC_REVERSE_SUBTRACT};yt[bh]=i.MIN,yt[Th]=i.MAX;let b={[Eh]:i.ZERO,[wh]:i.ONE,[Ah]:i.SRC_COLOR,[Yl]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[Ih]:i.DST_COLOR,[Rh]:i.DST_ALPHA,[Ch]:i.ONE_MINUS_SRC_COLOR,[Zl]:i.ONE_MINUS_SRC_ALPHA,[Lh]:i.ONE_MINUS_DST_COLOR,[Ph]:i.ONE_MINUS_DST_ALPHA,[Dh]:i.CONSTANT_COLOR,[Uh]:i.ONE_MINUS_CONSTANT_COLOR,[Fh]:i.CONSTANT_ALPHA,[Oh]:i.ONE_MINUS_CONSTANT_ALPHA};function F(X,It,pt,Lt,Ft,vt,$t,Xt,Ce,ve){if(X===ii){m===!0&&(I(i.BLEND),m=!1);return}if(m===!1&&(N(i.BLEND),m=!0),X!==vh){if(X!==f||ve!==z){if((T!==Ji||E!==Ji)&&(i.blendEquation(i.FUNC_ADD),T=Ji,E=Ji),ve)switch(X){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",X);break}else switch(X){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xl:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ql:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",X);break}L=null,S=null,w=null,D=null,x.set(0,0,0),A=0,f=X,z=ve}return}Ft=Ft||It,vt=vt||pt,$t=$t||Lt,(It!==T||Ft!==E)&&(i.blendEquationSeparate(yt[It],yt[Ft]),T=It,E=Ft),(pt!==L||Lt!==S||vt!==w||$t!==D)&&(i.blendFuncSeparate(b[pt],b[Lt],b[vt],b[$t]),L=pt,S=Lt,w=vt,D=$t),(Xt.equals(x)===!1||Ce!==A)&&(i.blendColor(Xt.r,Xt.g,Xt.b,Ce),x.copy(Xt),A=Ce),f=X,z=!1}function P(X,It){X.side===Cn?I(i.CULL_FACE):N(i.CULL_FACE);let pt=X.side===an;It&&(pt=!pt),Z(pt),X.blending===Us&&X.transparent===!1?F(ii):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),r.setMask(X.colorWrite);let Lt=X.stencilWrite;o.setTest(Lt),Lt&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),mt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?N(i.SAMPLE_ALPHA_TO_COVERAGE):I(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(X){H!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),H=X)}function j(X){X!==_h?(N(i.CULL_FACE),X!==G&&(X===Hl?i.cullFace(i.BACK):X===xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):I(i.CULL_FACE),G=X}function ut(X){X!==et&&(K&&i.lineWidth(X),et=X)}function mt(X,It,pt){X?(N(i.POLYGON_OFFSET_FILL),(V!==It||$!==pt)&&(V=It,$=pt,a.getReversed()&&(It=-It),i.polygonOffset(It,pt))):I(i.POLYGON_OFFSET_FILL)}function gt(X){X?N(i.SCISSOR_TEST):I(i.SCISSOR_TEST)}function q(X){X===void 0&&(X=i.TEXTURE0+ct-1),ot!==X&&(i.activeTexture(X),ot=X)}function y(X,It,pt){pt===void 0&&(ot===null?pt=i.TEXTURE0+ct-1:pt=ot);let Lt=ft[pt];Lt===void 0&&(Lt={type:void 0,texture:void 0},ft[pt]=Lt),(Lt.type!==X||Lt.texture!==It)&&(ot!==pt&&(i.activeTexture(pt),ot=pt),i.bindTexture(X,It||U[X]),Lt.type=X,Lt.texture=It)}function Dt(){let X=ft[ot];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Ct(){try{i.compressedTexImage2D(...arguments)}catch(X){se("WebGLState:",X)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(X){se("WebGLState:",X)}}function _(){try{i.texSubImage2D(...arguments)}catch(X){se("WebGLState:",X)}}function W(){try{i.texSubImage3D(...arguments)}catch(X){se("WebGLState:",X)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(X){se("WebGLState:",X)}}function ht(){try{i.compressedTexSubImage3D(...arguments)}catch(X){se("WebGLState:",X)}}function bt(){try{i.texStorage2D(...arguments)}catch(X){se("WebGLState:",X)}}function Et(){try{i.texStorage3D(...arguments)}catch(X){se("WebGLState:",X)}}function dt(){try{i.texImage2D(...arguments)}catch(X){se("WebGLState:",X)}}function at(){try{i.texImage3D(...arguments)}catch(X){se("WebGLState:",X)}}function Rt(X){return d[X]!==void 0?d[X]:i.getParameter(X)}function Wt(X,It){d[X]!==It&&(i.pixelStorei(X,It),d[X]=It)}function Nt(X){Jt.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Jt.copy(X))}function Pt(X){Yt.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Yt.copy(X))}function kt(X,It){let pt=l.get(It);pt===void 0&&(pt=new WeakMap,l.set(It,pt));let Lt=pt.get(X);Lt===void 0&&(Lt=i.getUniformBlockIndex(It,X.name),pt.set(X,Lt))}function jt(X,It){let Lt=l.get(It).get(X);c.get(It)!==Lt&&(i.uniformBlockBinding(It,Lt,X.__bindingPointIndex),c.set(It,Lt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ot=null,ft={},u={},p=new WeakMap,g=[],M=null,m=!1,f=null,T=null,L=null,S=null,E=null,w=null,D=null,x=new oe(0,0,0),A=0,z=!1,H=null,G=null,et=null,V=null,$=null,Jt.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:N,disable:I,bindFramebuffer:R,drawBuffers:B,useProgram:st,setBlending:F,setMaterial:P,setFlipSided:Z,setCullFace:j,setLineWidth:ut,setPolygonOffset:mt,setScissorTest:gt,activeTexture:q,bindTexture:y,unbindTexture:Dt,compressedTexImage2D:Ct,compressedTexImage3D:C,texImage2D:dt,texImage3D:at,pixelStorei:Wt,getParameter:Rt,updateUBOMapping:kt,uniformBlockBinding:jt,texStorage2D:bt,texStorage3D:Et,texSubImage2D:_,texSubImage3D:W,compressedTexSubImage2D:Q,compressedTexSubImage3D:ht,scissor:Nt,viewport:Pt,reset:ae}}function I0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,_){return g?new OffscreenCanvas(C,_):lr("canvas")}function m(C,_,W){let Q=1,ht=Ct(C);if((ht.width>W||ht.height>W)&&(Q=W/Math.max(ht.width,ht.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let bt=Math.floor(Q*ht.width),Et=Math.floor(Q*ht.height);u===void 0&&(u=M(bt,Et));let dt=_?M(bt,Et):u;return dt.width=bt,dt.height=Et,dt.getContext("2d").drawImage(C,0,0,bt,Et),ne("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+bt+"x"+Et+")."),dt}else return"data"in C&&ne("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),C;return C}function f(C){return C.generateMipmaps}function T(C){i.generateMipmap(C)}function L(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,_,W,Q,ht,bt=!1){if(C!==null){if(i[C]!==void 0)return i[C];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Et;Q&&(Et=t.get("EXT_texture_norm16"),Et||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let dt=_;if(_===i.RED&&(W===i.FLOAT&&(dt=i.R32F),W===i.HALF_FLOAT&&(dt=i.R16F),W===i.UNSIGNED_BYTE&&(dt=i.R8),W===i.UNSIGNED_SHORT&&Et&&(dt=Et.R16_EXT),W===i.SHORT&&Et&&(dt=Et.R16_SNORM_EXT)),_===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(dt=i.R8UI),W===i.UNSIGNED_SHORT&&(dt=i.R16UI),W===i.UNSIGNED_INT&&(dt=i.R32UI),W===i.BYTE&&(dt=i.R8I),W===i.SHORT&&(dt=i.R16I),W===i.INT&&(dt=i.R32I)),_===i.RG&&(W===i.FLOAT&&(dt=i.RG32F),W===i.HALF_FLOAT&&(dt=i.RG16F),W===i.UNSIGNED_BYTE&&(dt=i.RG8),W===i.UNSIGNED_SHORT&&Et&&(dt=Et.RG16_EXT),W===i.SHORT&&Et&&(dt=Et.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(dt=i.RG8UI),W===i.UNSIGNED_SHORT&&(dt=i.RG16UI),W===i.UNSIGNED_INT&&(dt=i.RG32UI),W===i.BYTE&&(dt=i.RG8I),W===i.SHORT&&(dt=i.RG16I),W===i.INT&&(dt=i.RG32I)),_===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(dt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(dt=i.RGB16UI),W===i.UNSIGNED_INT&&(dt=i.RGB32UI),W===i.BYTE&&(dt=i.RGB8I),W===i.SHORT&&(dt=i.RGB16I),W===i.INT&&(dt=i.RGB32I)),_===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(dt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(dt=i.RGBA16UI),W===i.UNSIGNED_INT&&(dt=i.RGBA32UI),W===i.BYTE&&(dt=i.RGBA8I),W===i.SHORT&&(dt=i.RGBA16I),W===i.INT&&(dt=i.RGBA32I)),_===i.RGB&&(W===i.UNSIGNED_SHORT&&Et&&(dt=Et.RGB16_EXT),W===i.SHORT&&Et&&(dt=Et.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(dt=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(dt=i.R11F_G11F_B10F)),_===i.RGBA){let at=bt?or:_e.getTransfer(ht);W===i.FLOAT&&(dt=i.RGBA32F),W===i.HALF_FLOAT&&(dt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(dt=at===Ae?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&Et&&(dt=Et.RGBA16_EXT),W===i.SHORT&&Et&&(dt=Et.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(dt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(dt=i.RGB5_A1)}return(dt===i.R16F||dt===i.R32F||dt===i.RG16F||dt===i.RG32F||dt===i.RGBA16F||dt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function E(C,_){let W;return C?_===null||_===Xn||_===Os?W=i.DEPTH24_STENCIL8:_===Nn?W=i.DEPTH32F_STENCIL8:_===Fs&&(W=i.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Xn||_===Os?W=i.DEPTH_COMPONENT24:_===Nn?W=i.DEPTH_COMPONENT32F:_===Fs&&(W=i.DEPTH_COMPONENT16),W}function w(C,_){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qe&&C.minFilter!==nn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function D(C){let _=C.target;_.removeEventListener("dispose",D),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(C){let _=C.target;_.removeEventListener("dispose",x),H(_)}function A(C){let _=n.get(C);if(_.__webglInit===void 0)return;let W=C.source,Q=p.get(W);if(Q){let ht=Q[_.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&z(C),Object.keys(Q).length===0&&p.delete(W)}n.remove(C)}function z(C){let _=n.get(C);i.deleteTexture(_.__webglTexture);let W=C.source,Q=p.get(W);delete Q[_.__cacheKey],a.memory.textures--}function H(C){let _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let ht=0;ht<_.__webglFramebuffer[Q].length;ht++)i.deleteFramebuffer(_.__webglFramebuffer[Q][ht]);else i.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[Q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let W=C.textures;for(let Q=0,ht=W.length;Q<ht;Q++){let bt=n.get(W[Q]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(W[Q])}n.remove(C)}let G=0;function et(){G=0}function V(){return G}function $(C){G=C}function ct(){let C=G;return C>=s.maxTextures&&ne("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,C}function K(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function Y(C,_){let W=n.get(C);if(C.isVideoTexture&&y(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){let Q=C.image;if(Q===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{I(W,C,_);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+_)}function rt(C,_){let W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){I(W,C,_);return}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+_)}function ot(C,_){let W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){I(W,C,_);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+_)}function ft(C,_){let W=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&W.__version!==C.version){R(W,C,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+_)}let At={[ys]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[vs]:i.MIRRORED_REPEAT},Mt={[Qe]:i.NEAREST,[kh]:i.NEAREST_MIPMAP_NEAREST,[Br]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},Jt={[Wh]:i.NEVER,[Jh]:i.ALWAYS,[Xh]:i.LESS,[qo]:i.LEQUAL,[qh]:i.EQUAL,[Yo]:i.GEQUAL,[Yh]:i.GREATER,[Zh]:i.NOTEQUAL};function Yt(C,_){if(_.type===Nn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===nn||_.magFilter===oo||_.magFilter===Br||_.magFilter===Ui||_.minFilter===nn||_.minFilter===oo||_.minFilter===Br||_.minFilter===Ui)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,At[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,At[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,At[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Mt[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Mt[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Jt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Qe||_.minFilter!==Br&&_.minFilter!==Ui||_.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function le(C,_){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",D));let Q=_.source,ht=p.get(Q);ht===void 0&&(ht={},p.set(Q,ht));let bt=K(_);if(bt!==C.__cacheKey){ht[bt]===void 0&&(ht[bt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ht[bt].usedTimes++;let Et=ht[C.__cacheKey];Et!==void 0&&(ht[C.__cacheKey].usedTimes--,Et.usedTimes===0&&z(_)),C.__cacheKey=bt,C.__webglTexture=ht[bt].texture}return W}function U(C,_,W){return Math.floor(Math.floor(C/W)/_)}function N(C,_,W,Q){let bt=C.updateRanges;if(bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,W,Q,_.data);else{bt.sort((Wt,Nt)=>Wt.start-Nt.start);let Et=0;for(let Wt=1;Wt<bt.length;Wt++){let Nt=bt[Et],Pt=bt[Wt],kt=Nt.start+Nt.count,jt=U(Pt.start,_.width,4),ae=U(Nt.start,_.width,4);Pt.start<=kt+1&&jt===ae&&U(Pt.start+Pt.count-1,_.width,4)===jt?Nt.count=Math.max(Nt.count,Pt.start+Pt.count-Nt.start):(++Et,bt[Et]=Pt)}bt.length=Et+1;let dt=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),Rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Wt=0,Nt=bt.length;Wt<Nt;Wt++){let Pt=bt[Wt],kt=Math.floor(Pt.start/4),jt=Math.ceil(Pt.count/4),ae=kt%_.width,X=Math.floor(kt/_.width),It=jt,pt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,ae,X,It,pt,W,Q,_.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,dt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function I(C,_,W){let Q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=i.TEXTURE_3D);let ht=le(C,_),bt=_.source;e.bindTexture(Q,C.__webglTexture,i.TEXTURE0+W);let Et=n.get(bt);if(bt.version!==Et.__version||ht===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let pt=_e.getPrimaries(_e.workingColorSpace),Lt=_.colorSpace===mi?null:_e.getPrimaries(_.colorSpace),Ft=_.colorSpace===mi||pt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let at=m(_.image,!1,s.maxTextureSize);at=Dt(_,at);let Rt=r.convert(_.format,_.colorSpace),Wt=r.convert(_.type),Nt=S(_.internalFormat,Rt,Wt,_.normalized,_.colorSpace,_.isVideoTexture);Yt(Q,_);let Pt,kt=_.mipmaps,jt=_.isVideoTexture!==!0,ae=Et.__version===void 0||ht===!0,X=bt.dataReady,It=w(_,at);if(_.isDepthTexture)Nt=E(_.format===Fi,_.type),ae&&(jt?e.texStorage2D(i.TEXTURE_2D,1,Nt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Nt,at.width,at.height,0,Rt,Wt,null));else if(_.isDataTexture)if(kt.length>0){jt&&ae&&e.texStorage2D(i.TEXTURE_2D,It,Nt,kt[0].width,kt[0].height);for(let pt=0,Lt=kt.length;pt<Lt;pt++)Pt=kt[pt],jt?X&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Pt.width,Pt.height,Rt,Wt,Pt.data):e.texImage2D(i.TEXTURE_2D,pt,Nt,Pt.width,Pt.height,0,Rt,Wt,Pt.data);_.generateMipmaps=!1}else jt?(ae&&e.texStorage2D(i.TEXTURE_2D,It,Nt,at.width,at.height),X&&N(_,at,Rt,Wt)):e.texImage2D(i.TEXTURE_2D,0,Nt,at.width,at.height,0,Rt,Wt,at.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){jt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Nt,kt[0].width,kt[0].height,at.depth);for(let pt=0,Lt=kt.length;pt<Lt;pt++)if(Pt=kt[pt],_.format!==Dn)if(Rt!==null)if(jt){if(X)if(_.layerUpdates.size>0){let Ft=pc(Pt.width,Pt.height,_.format,_.type);for(let vt of _.layerUpdates){let $t=Pt.data.subarray(vt*Ft/Pt.data.BYTES_PER_ELEMENT,(vt+1)*Ft/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,vt,Pt.width,Pt.height,1,Rt,$t)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Pt.width,Pt.height,at.depth,Rt,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Nt,Pt.width,Pt.height,at.depth,0,Pt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Pt.width,Pt.height,at.depth,Rt,Wt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Nt,Pt.width,Pt.height,at.depth,0,Rt,Wt,Pt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{jt&&ae&&e.texStorage2D(i.TEXTURE_2D,It,Nt,kt[0].width,kt[0].height);for(let pt=0,Lt=kt.length;pt<Lt;pt++)Pt=kt[pt],_.format!==Dn?Rt!==null?jt?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,Pt.width,Pt.height,Rt,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Nt,Pt.width,Pt.height,0,Pt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?X&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Pt.width,Pt.height,Rt,Wt,Pt.data):e.texImage2D(i.TEXTURE_2D,pt,Nt,Pt.width,Pt.height,0,Rt,Wt,Pt.data)}else if(_.isDataArrayTexture)if(jt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Nt,at.width,at.height,at.depth),X)if(_.layerUpdates.size>0){let pt=pc(at.width,at.height,_.format,_.type);for(let Lt of _.layerUpdates){let Ft=at.data.subarray(Lt*pt/at.data.BYTES_PER_ELEMENT,(Lt+1)*pt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Lt,at.width,at.height,1,Rt,Wt,Ft)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Rt,Wt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,at.width,at.height,at.depth,0,Rt,Wt,at.data);else if(_.isData3DTexture)jt?(ae&&e.texStorage3D(i.TEXTURE_3D,It,Nt,at.width,at.height,at.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Rt,Wt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,at.width,at.height,at.depth,0,Rt,Wt,at.data);else if(_.isFramebufferTexture){if(ae)if(jt)e.texStorage2D(i.TEXTURE_2D,It,Nt,at.width,at.height);else{let pt=at.width,Lt=at.height;for(let Ft=0;Ft<It;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Nt,pt,Lt,0,Rt,Wt,null),pt>>=1,Lt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let pt=i.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),at.parentNode!==pt){pt.appendChild(at),d.add(_),pt.onpaint=Lt=>{let Ft=Lt.changedElements;for(let vt of d)Ft.includes(vt.image)&&(vt.needsUpdate=!0)},pt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let Ft=i.RGBA,vt=i.RGBA,$t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ft,vt,$t,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(kt.length>0){if(jt&&ae){let pt=Ct(kt[0]);e.texStorage2D(i.TEXTURE_2D,It,Nt,pt.width,pt.height)}for(let pt=0,Lt=kt.length;pt<Lt;pt++)Pt=kt[pt],jt?X&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Rt,Wt,Pt):e.texImage2D(i.TEXTURE_2D,pt,Nt,Rt,Wt,Pt);_.generateMipmaps=!1}else if(jt){if(ae){let pt=Ct(at);e.texStorage2D(i.TEXTURE_2D,It,Nt,pt.width,pt.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Wt,at)}else e.texImage2D(i.TEXTURE_2D,0,Nt,Rt,Wt,at);f(_)&&T(Q),Et.__version=bt.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function R(C,_,W){if(_.image.length!==6)return;let Q=le(C,_),ht=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+W);let bt=n.get(ht);if(ht.version!==bt.__version||Q===!0){e.activeTexture(i.TEXTURE0+W);let Et=_e.getPrimaries(_e.workingColorSpace),dt=_.colorSpace===mi?null:_e.getPrimaries(_.colorSpace),at=_.colorSpace===mi||Et===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Rt=_.isCompressedTexture||_.image[0].isCompressedTexture,Wt=_.image[0]&&_.image[0].isDataTexture,Nt=[];for(let vt=0;vt<6;vt++)!Rt&&!Wt?Nt[vt]=m(_.image[vt],!0,s.maxCubemapSize):Nt[vt]=Wt?_.image[vt].image:_.image[vt],Nt[vt]=Dt(_,Nt[vt]);let Pt=Nt[0],kt=r.convert(_.format,_.colorSpace),jt=r.convert(_.type),ae=S(_.internalFormat,kt,jt,_.normalized,_.colorSpace),X=_.isVideoTexture!==!0,It=bt.__version===void 0||Q===!0,pt=ht.dataReady,Lt=w(_,Pt);Yt(i.TEXTURE_CUBE_MAP,_);let Ft;if(Rt){X&&It&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,ae,Pt.width,Pt.height);for(let vt=0;vt<6;vt++){Ft=Nt[vt].mipmaps;for(let $t=0;$t<Ft.length;$t++){let Xt=Ft[$t];_.format!==Dn?kt!==null?X?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,$t,0,0,Xt.width,Xt.height,kt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,$t,ae,Xt.width,Xt.height,0,Xt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,$t,0,0,Xt.width,Xt.height,kt,jt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,$t,ae,Xt.width,Xt.height,0,kt,jt,Xt.data)}}}else{if(Ft=_.mipmaps,X&&It){Ft.length>0&&Lt++;let vt=Ct(Nt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,ae,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Wt){X?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Nt[vt].width,Nt[vt].height,kt,jt,Nt[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ae,Nt[vt].width,Nt[vt].height,0,kt,jt,Nt[vt].data);for(let $t=0;$t<Ft.length;$t++){let Ce=Ft[$t].image[vt].image;X?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,$t+1,0,0,Ce.width,Ce.height,kt,jt,Ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,$t+1,ae,Ce.width,Ce.height,0,kt,jt,Ce.data)}}else{X?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,kt,jt,Nt[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ae,kt,jt,Nt[vt]);for(let $t=0;$t<Ft.length;$t++){let Xt=Ft[$t];X?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,$t+1,0,0,kt,jt,Xt.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,$t+1,ae,kt,jt,Xt.image[vt])}}}f(_)&&T(i.TEXTURE_CUBE_MAP),bt.__version=ht.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function B(C,_,W,Q,ht,bt){let Et=r.convert(W.format,W.colorSpace),dt=r.convert(W.type),at=S(W.internalFormat,Et,dt,W.normalized,W.colorSpace),Rt=n.get(_),Wt=n.get(W);if(Wt.__renderTarget=_,!Rt.__hasExternalTextures){let Nt=Math.max(1,_.width>>bt),Pt=Math.max(1,_.height>>bt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,bt,at,Nt,Pt,_.depth,0,Et,dt,null):e.texImage2D(ht,bt,at,Nt,Pt,0,Et,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),q(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ht,Wt.__webglTexture,0,gt(_)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ht,Wt.__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(C,_,W){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){let Q=_.depthTexture,ht=Q&&Q.isDepthTexture?Q.type:null,bt=E(_.stencilBuffer,ht),Et=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;q(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(_),bt,_.width,_.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(_),bt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,bt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,C)}else{let Q=_.textures;for(let ht=0;ht<Q.length;ht++){let bt=Q[ht],Et=r.convert(bt.format,bt.colorSpace),dt=r.convert(bt.type),at=S(bt.internalFormat,Et,dt,bt.normalized,bt.colorSpace);q(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(_),at,_.width,_.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(_),at,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,at,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(C,_,W){let Q=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ht=n.get(_.depthTexture);if(ht.__renderTarget=_,(!ht.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),ht.__webglTexture===void 0){ht.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_.depthTexture);let Rt=r.convert(_.depthTexture.format),Wt=r.convert(_.depthTexture.type),Nt;_.depthTexture.format===Kn?Nt=i.DEPTH_COMPONENT24:_.depthTexture.format===Fi&&(Nt=i.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Nt,_.width,_.height,0,Rt,Wt,null)}}else Y(_.depthTexture,0);let bt=ht.__webglTexture,Et=gt(_),dt=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,at=_.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Kn)q(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,dt,bt,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,at,dt,bt,0);else if(_.depthTexture.format===Fi)q(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,dt,bt,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,at,dt,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function b(C){let _=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let Q=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){let ht=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",ht)};Q.addEventListener("dispose",ht),_.__depthDisposeCallback=ht}_.__boundDepthTexture=Q}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(W)for(let Q=0;Q<6;Q++)yt(_.__webglFramebuffer[Q],C,Q);else{let Q=C.texture.mipmaps;Q&&Q.length>0?yt(_.__webglFramebuffer[0],C,0):yt(_.__webglFramebuffer,C,0)}else if(W){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=i.createRenderbuffer(),st(_.__webglDepthbuffer[Q],C,!1);else{let ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=_.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,bt)}}else{let Q=C.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),st(_.__webglDepthbuffer,C,!1);else{let ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,bt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function F(C,_,W){let Q=n.get(C);_!==void 0&&B(Q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&b(C)}function P(C){let _=C.texture,W=n.get(C),Q=n.get(_);C.addEventListener("dispose",x);let ht=C.textures,bt=C.isWebGLCubeRenderTarget===!0,Et=ht.length>1;if(Et||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=_.version,a.memory.textures++),bt){W.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer[dt]=[];for(let at=0;at<_.mipmaps.length;at++)W.__webglFramebuffer[dt][at]=i.createFramebuffer()}else W.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer=[];for(let dt=0;dt<_.mipmaps.length;dt++)W.__webglFramebuffer[dt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Et)for(let dt=0,at=ht.length;dt<at;dt++){let Rt=n.get(ht[dt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&q(C)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let dt=0;dt<ht.length;dt++){let at=ht[dt];W.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[dt]);let Rt=r.convert(at.format,at.colorSpace),Wt=r.convert(at.type),Nt=S(at.internalFormat,Rt,Wt,at.normalized,at.colorSpace,C.isXRRenderTarget===!0),Pt=gt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Nt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,W.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),st(W.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_);for(let dt=0;dt<6;dt++)if(_.mipmaps&&_.mipmaps.length>0)for(let at=0;at<_.mipmaps.length;at++)B(W.__webglFramebuffer[dt][at],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,at);else B(W.__webglFramebuffer[dt],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);f(_)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let dt=0,at=ht.length;dt<at;dt++){let Rt=ht[dt],Wt=n.get(Rt),Nt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Nt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Nt,Wt.__webglTexture),Yt(Nt,Rt),B(W.__webglFramebuffer,C,Rt,i.COLOR_ATTACHMENT0+dt,Nt,0),f(Rt)&&T(Nt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Q.__webglTexture),Yt(dt,_),_.mipmaps&&_.mipmaps.length>0)for(let at=0;at<_.mipmaps.length;at++)B(W.__webglFramebuffer[at],C,_,i.COLOR_ATTACHMENT0,dt,at);else B(W.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,dt,0);f(_)&&T(dt),e.unbindTexture()}C.depthBuffer&&b(C)}function Z(C){let _=C.textures;for(let W=0,Q=_.length;W<Q;W++){let ht=_[W];if(f(ht)){let bt=L(C),Et=n.get(ht).__webglTexture;e.bindTexture(bt,Et),T(bt),e.unbindTexture()}}}let j=[],ut=[];function mt(C){if(C.samples>0){if(q(C)===!1){let _=C.textures,W=C.width,Q=C.height,ht=i.COLOR_BUFFER_BIT,bt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(C),dt=_.length>1;if(dt)for(let Rt=0;Rt<_.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let at=C.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Rt=0;Rt<_.length;Rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);let Wt=n.get(_[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,W,Q,0,0,W,Q,ht,i.NEAREST),c===!0&&(j.length=0,ut.length=0,j.push(i.COLOR_ATTACHMENT0+Rt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(j.push(bt),ut.push(bt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Rt=0;Rt<_.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);let Wt=n.get(_[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function gt(C){return Math.min(s.maxSamples,C.samples)}function q(C){let _=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function y(C){let _=a.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function Dt(C,_){let W=C.colorSpace,Q=C.format,ht=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==ar&&W!==mi&&(_e.getTransfer(W)===Ae?(Q!==Dn||ht!==_n)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",W)),_}function Ct(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=ct,this.resetTextureUnits=et,this.getTextureUnits=V,this.setTextureUnits=$,this.setTexture2D=Y,this.setTexture2DArray=rt,this.setTexture3D=ot,this.setTextureCube=ft,this.rebindTextures=F,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=b,this.setupFrameBufferTexture=B,this.useMultisampledRTT=q,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function L0(i,t){function e(n,s=mi){let r,a=_e.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nc)return i.BYTE;if(n===ic)return i.SHORT;if(n===Fs)return i.UNSIGNED_SHORT;if(n===lo)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===ac)return i.ALPHA;if(n===oc)return i.RGB;if(n===Dn)return i.RGBA;if(n===Kn)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===uo)return i.RED;if(n===fo)return i.RED_INTEGER;if(n===Oi)return i.RG;if(n===po)return i.RG_INTEGER;if(n===mo)return i.RGBA_INTEGER;if(n===zr||n===kr||n===Vr||n===Gr)if(a===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===_o||n===xo||n===yo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vo||n===Mo||n===So||n===bo||n===To||n===Hr||n===Eo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vo||n===Mo)return a===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===So)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bo)return r.COMPRESSED_R11_EAC;if(n===To)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Hr)return r.COMPRESSED_RG11_EAC;if(n===Eo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wo||n===Ao||n===Co||n===Ro||n===Po||n===Io||n===Lo||n===No||n===Do||n===Uo||n===Fo||n===Oo||n===Bo||n===zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ao)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Io)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===Vo||n===Go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ko)return a===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ho||n===Wo||n===Wr||n===Xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var N0=`
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

}`,Nc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new En({vertexShader:N0,fragmentShader:D0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends jn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null,M=typeof XRWebGLBinding<"u",m=new Nc,f={},T=e.getContextAttributes(),L=null,S=null,E=[],w=[],D=new xt,x=null,A=null,z=new en;z.viewport=new Oe;let H=new en;H.viewport=new Oe;let G=[z,H],et=new no,V=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let N=E[U];return N===void 0&&(N=new Ts,E[U]=N),N.getTargetRaySpace()},this.getControllerGrip=function(U){let N=E[U];return N===void 0&&(N=new Ts,E[U]=N),N.getGripSpace()},this.getHand=function(U){let N=E[U];return N===void 0&&(N=new Ts,E[U]=N),N.getHandSpace()};function ct(U){let N=w.indexOf(U.inputSource);if(N===-1)return;let I=E[N];I!==void 0&&(I.update(U.inputSource,U.frame,l||a),I.dispatchEvent({type:U.type,data:U.inputSource}))}function K(){s.removeEventListener("select",ct),s.removeEventListener("selectstart",ct),s.removeEventListener("selectend",ct),s.removeEventListener("squeeze",ct),s.removeEventListener("squeezestart",ct),s.removeEventListener("squeezeend",ct),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",Y);for(let U=0;U<E.length;U++){let N=w[U];N!==null&&(w[U]=null,E[U].disconnect(N))}V=null,$=null,m.reset();for(let U in f)delete f[U];if(t.setRenderTarget(L),p=null,u=null,d=null,s=null,S=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(D.width,D.height,!1),A!==null){let U=A.camera;U.fov=A.fov,U.zoom=A.zoom,U.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",ct),s.addEventListener("selectstart",ct),s.addEventListener("selectend",ct),s.addEventListener("squeeze",ct),s.addEventListener("squeezestart",ct),s.addEventListener("squeezeend",ct),s.addEventListener("end",K),s.addEventListener("inputsourceschange",Y),T.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(D),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let I=null,R=null,B=null;T.depth&&(B=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,I=T.stencil?Fi:Kn,R=T.stencil?Os:Xn);let st={colorFormat:e.RGBA8,depthFormat:B,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(st),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new gn(u.textureWidth,u.textureHeight,{format:Dn,type:_n,depthTexture:new Ri(u.textureWidth,u.textureHeight,R,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let I={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,I),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new gn(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(U){for(let N=0;N<U.removed.length;N++){let I=U.removed[N],R=w.indexOf(I);R>=0&&(w[R]=null,E[R].disconnect(I))}for(let N=0;N<U.added.length;N++){let I=U.added[N],R=w.indexOf(I);if(R===-1){for(let st=0;st<E.length;st++)if(st>=w.length){w.push(I),R=st;break}else if(w[st]===null){w[st]=I,R=st;break}if(R===-1)break}let B=E[R];B&&B.connect(I)}}let rt=new k,ot=new k;function ft(U,N,I){rt.setFromMatrixPosition(N.matrixWorld),ot.setFromMatrixPosition(I.matrixWorld);let R=rt.distanceTo(ot),B=N.projectionMatrix.elements,st=I.projectionMatrix.elements,yt=B[14]/(B[10]-1),b=B[14]/(B[10]+1),F=(B[9]+1)/B[5],P=(B[9]-1)/B[5],Z=(B[8]-1)/B[0],j=(st[8]+1)/st[0],ut=yt*Z,mt=yt*j,gt=R/(-Z+j),q=gt*-Z;if(N.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(q),U.translateZ(gt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),B[10]===-1)U.projectionMatrix.copy(N.projectionMatrix),U.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let y=yt+gt,Dt=b+gt,Ct=ut-q,C=mt+(R-q),_=F*b/Dt*y,W=P*b/Dt*y;U.projectionMatrix.makePerspective(Ct,C,_,W,y,Dt),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function At(U,N){N===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(N.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let N=U.near,I=U.far;m.texture!==null&&(m.depthNear>0&&(N=m.depthNear),m.depthFar>0&&(I=m.depthFar)),et.near=H.near=z.near=N,et.far=H.far=z.far=I,(V!==et.near||$!==et.far)&&(s.updateRenderState({depthNear:et.near,depthFar:et.far}),V=et.near,$=et.far),et.layers.mask=U.layers.mask|6,z.layers.mask=et.layers.mask&-5,H.layers.mask=et.layers.mask&-3;let R=U.parent,B=et.cameras;At(et,R);for(let st=0;st<B.length;st++)At(B[st],R);B.length===2?ft(et,z,H):et.projectionMatrix.copy(z.projectionMatrix),A===null&&U.isPerspectiveCamera&&(A={camera:U,fov:U.fov,zoom:U.zoom}),Mt(U,et,R)};function Mt(U,N,I){I===null?U.matrix.copy(N.matrixWorld):(U.matrix.copy(I.matrixWorld),U.matrix.invert(),U.matrix.multiply(N.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(N.projectionMatrix),U.projectionMatrixInverse.copy(N.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Pa*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(U){c=U,u!==null&&(u.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(et)},this.getCameraTexture=function(U){return f[U]};let Jt=null;function Yt(U,N){if(h=N.getViewerPose(l||a),g=N,h!==null){let I=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let R=!1;I.length!==et.cameras.length&&(et.cameras.length=0,R=!0);for(let b=0;b<I.length;b++){let F=I[b],P=null;if(p!==null)P=p.getViewport(F);else{let j=d.getViewSubImage(u,F);P=j.viewport,b===0&&(t.setRenderTargetTextures(S,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(S))}let Z=G[b];Z===void 0&&(Z=new en,Z.layers.enable(b),Z.viewport=new Oe,G[b]=Z),Z.matrix.fromArray(F.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(F.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(P.x,P.y,P.width,P.height),b===0&&(et.matrix.copy(Z.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),R===!0&&et.cameras.push(Z)}let B=s.enabledFeatures;if(B&&B.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let b=d.getDepthInformation(I[0]);b&&b.isValid&&b.texture&&m.init(b,s.renderState)}if(B&&B.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let b=0;b<I.length;b++){let F=I[b].camera;if(F){let P=f[F];P||(P=new gr,f[F]=P);let Z=d.getCameraImage(F);P.sourceTexture=Z}}}}for(let I=0;I<E.length;I++){let R=w[I],B=E[I];R!==null&&B!==void 0&&B.update(R,N,l||a)}Jt&&Jt(U,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),g=null}let le=new Pu;le.setAnimationLoop(Yt),this.setAnimationLoop=function(U){Jt=U},this.dispose=function(){}}},U0=new Ie,Fu=new Kt;Fu.set(-1,0,0,0,1,0,0,0,1);function F0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,uc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,L,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,T,L):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===an&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===an&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let T=t.get(f),L=T.envMap,S=T.envMapRotation;L&&(m.envMap.value=L,m.envMapRotation.value.setFromMatrix4(U0.makeRotationFromEuler(S)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Fu),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,L){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=L*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===an&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function O0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){let w=E.program;n.uniformBlockBinding(S,w)}function l(S,E){let w=s[S.id];w===void 0&&(m(S),w=h(S),s[S.id]=w,S.addEventListener("dispose",T));let D=E.program;n.updateUBOMapping(S,D);let x=t.render.frame;r[S.id]!==x&&(u(S),r[S.id]=x)}function h(S){let E=d();S.__bindingPointIndex=E;let w=i.createBuffer(),D=S.__size,x=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,D,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let E=s[S.id],w=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,A=w.length;x<A;x++){let z=w[x];if(Array.isArray(z))for(let H=0,G=z.length;H<G;H++)p(z[H],x,H,D);else p(z,x,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,w,D){if(M(S,E,w,D)===!0){let x=S.__offset,A=S.value;if(Array.isArray(A)){let z=0;for(let H=0;H<A.length;H++){let G=A[H],et=f(G);g(G,S.__data,z),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(z+=et.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,S.__data)}}function g(S,E,w){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,w)}function M(S,E,w,D){let x=S.value,A=E+"_"+w;if(D[A]===void 0)return typeof x=="number"||typeof x=="boolean"?D[A]=x:ArrayBuffer.isView(x)?D[A]=x.slice():D[A]=x.clone(),!0;{let z=D[A];if(typeof x=="number"||typeof x=="boolean"){if(z!==x)return D[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(z.equals(x)===!1)return z.copy(x),!0}}return!1}function m(S){let E=S.uniforms,w=0,D=16;for(let A=0,z=E.length;A<z;A++){let H=Array.isArray(E[A])?E[A]:[E[A]];for(let G=0,et=H.length;G<et;G++){let V=H[G],$=Array.isArray(V.value)?V.value:[V.value];for(let ct=0,K=$.length;ct<K;ct++){let Y=$[ct],rt=f(Y),ot=w%D,ft=ot%rt.boundary,At=ot+ft;w+=ft,At!==0&&D-At<rt.storage&&(w+=D-At),V.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=rt.storage}}}let x=w%D;return x>0&&(w+=D-x),S.__size=w,S.__cache={},this}function f(S){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):ne("WebGLRenderer: Unsupported uniform value type.",S),E}function T(S){let E=S.target;E.removeEventListener("dispose",T);let w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function L(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:L}}var B0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function z0(){return si===null&&(si=new Wi(B0,16,16,Oi,qn),si.name="DFG_LUT",si.minFilter=nn,si.magFilter=nn,si.wrapS=In,si.wrapT=In,si.generateMipmaps=!1,si.needsUpdate=!0),si}var Ko=class{constructor(t={}){let{canvas:e=Kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=_n}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=p,m=new Set([mo,po,fo]),f=new Set([_n,Xn,Fs,Os,co,ho]),T=new Uint32Array(4),L=new Int32Array(4),S=new k,E=null,w=null,D=[],x=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,H=!1,G=null,et=null,V=null,$=null;this._outputColorSpace=Ye;let ct=0,K=0,Y=null,rt=-1,ot=null,ft=new Oe,At=new Oe,Mt=null,Jt=new oe(0),Yt=0,le=e.width,U=e.height,N=1,I=null,R=null,B=new Oe(0,0,le,U),st=new Oe(0,0,le,U),yt=!1,b=new Es,F=!1,P=!1,Z=new Ie,j=new k,ut=new Oe,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function q(){return Y===null?N:1}let y=n;function Dt(v,O){return e.getContext(v,O)}let Ct,C,_,W,Q,ht,bt,Et,dt,at,Rt,Wt,Nt,Pt,kt,jt,ae,X,It,pt,Lt,Ft,vt;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",We,!1),y===null){let O="webgl2";if(y=Dt(O,v),y===null)throw Dt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(v){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",We,!1),se("WebGLRenderer: "+v.message),v}function $t(){Ct=new qm(y),Ct.init(),Lt=new L0(y,Ct),C=new Fm(y,Ct,t,Lt),_=new P0(y,Ct),C.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),et=y.createFramebuffer(),V=y.createFramebuffer(),$=y.createFramebuffer(),W=new Jm(y),Q=new g0,ht=new I0(y,Ct,_,Q,C,Lt,W),bt=new Xm(z),Et=new $d(y),Ft=new Dm(y,Et),dt=new Ym(y,Et,W,Ft),at=new Km(y,dt,Et,Ft,W),X=new $m(y,C,ht),kt=new Om(Q),Rt=new m0(z,bt,Ct,C,Ft,kt),Wt=new F0(z,Q),Nt=new x0,Pt=new T0(Ct),ae=new Nm(z,bt,_,at,g,c),jt=new R0(z,at,C),vt=new O0(y,W,C,_),It=new Um(y,Ct,W),pt=new Zm(y,Ct,W),W.programs=Rt.programs,z.capabilities=C,z.extensions=Ct,z.properties=Q,z.renderLists=Nt,z.shadowMap=jt,z.state=_,z.info=W}M!==_n&&(A=new Qm(M,e.width,e.height,o,s,r));let Xt=new Dc(z,y);this.xr=Xt,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){let v=Ct.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ct.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(v){v!==void 0&&(N=v,this.setSize(le,U,!1))},this.getSize=function(v){return v.set(le,U)},this.setSize=function(v,O,it=!0){if(Xt.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}le=v,U=O,e.width=Math.floor(v*N),e.height=Math.floor(O*N),it===!0&&(e.style.width=v+"px",e.style.height=O+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,v,O)},this.getDrawingBufferSize=function(v){return v.set(le*N,U*N).floor()},this.setDrawingBufferSize=function(v,O,it){le=v,U=O,N=it,e.width=Math.floor(v*it),e.height=Math.floor(O*it),this.setViewport(0,0,v,O)},this.setEffects=function(v){if(M===_n){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let O=0;O<v.length;O++)if(v[O].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ft)},this.getViewport=function(v){return v.copy(B)},this.setViewport=function(v,O,it,tt){v.isVector4?B.set(v.x,v.y,v.z,v.w):B.set(v,O,it,tt),_.viewport(ft.copy(B).multiplyScalar(N).round())},this.getScissor=function(v){return v.copy(st)},this.setScissor=function(v,O,it,tt){v.isVector4?st.set(v.x,v.y,v.z,v.w):st.set(v,O,it,tt),_.scissor(At.copy(st).multiplyScalar(N).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(v){_.setScissorTest(yt=v)},this.setOpaqueSort=function(v){I=v},this.setTransparentSort=function(v){R=v},this.getClearColor=function(v){return v.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(v=!0,O=!0,it=!0){let tt=0;if(v){let nt=!1;if(Y!==null){let Bt=Y.texture.format;nt=m.has(Bt)}if(nt){let Bt=Y.texture.type,Vt=f.has(Bt),Ut=ae.getClearColor(),Ht=ae.getClearAlpha(),qt=Ut.r,ce=Ut.g,fe=Ut.b;Vt?(T[0]=qt,T[1]=ce,T[2]=fe,T[3]=Ht,y.clearBufferuiv(y.COLOR,0,T)):(L[0]=qt,L[1]=ce,L[2]=fe,L[3]=Ht,y.clearBufferiv(y.COLOR,0,L))}else tt|=y.COLOR_BUFFER_BIT}O&&(tt|=y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(tt|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&y.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),G=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",We,!1),ae.dispose(),Nt.dispose(),Pt.dispose(),Q.dispose(),bt.dispose(),at.dispose(),Ft.dispose(),vt.dispose(),Rt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",St),Xt.removeEventListener("sessionend",Ot),he.stop()};function Ce(v){v.preventDefault(),cc("WebGLRenderer: Context Lost."),H=!0}function ve(){cc("WebGLRenderer: Context Restored."),H=!1;let v=W.autoReset,O=jt.enabled,it=jt.autoUpdate,tt=jt.needsUpdate,nt=jt.type;$t(),W.autoReset=v,jt.enabled=O,jt.autoUpdate=it,jt.needsUpdate=tt,jt.type=nt}function We(v){se("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function fn(v){let O=v.target;O.removeEventListener("dispose",fn),Kr(O)}function Kr(v){lt(v),Q.remove(v)}function lt(v){let O=Q.get(v).programs;O!==void 0&&(O.forEach(function(it){Rt.releaseProgram(it)}),v.isShaderMaterial&&Rt.releaseShaderCache(v))}this.renderBufferDirect=function(v,O,it,tt,nt,Bt){O===null&&(O=mt);let Vt=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Ut=ge(v,O,it,tt,nt);_.setMaterial(tt,Vt);let Ht=it.index,qt=1;if(tt.wireframe===!0){if(Ht=dt.getWireframeAttribute(it),Ht===void 0)return;qt=2}let ce=it.drawRange,fe=it.attributes.position,Zt=ce.start*qt,we=(ce.start+ce.count)*qt;Bt!==null&&(Zt=Math.max(Zt,Bt.start*qt),we=Math.min(we,(Bt.start+Bt.count)*qt)),Ht!==null?(Zt=Math.max(Zt,0),we=Math.min(we,Ht.count)):fe!=null&&(Zt=Math.max(Zt,0),we=Math.min(we,fe.count));let Xe=we-Zt;if(Xe<0||Xe===1/0)return;Ft.setup(nt,tt,Ut,it,Ht);let De,Pe=It;if(Ht!==null&&(De=Et.get(Ht),Pe=pt,Pe.setIndex(De)),nt.isMesh)tt.wireframe===!0?(_.setLineWidth(tt.wireframeLinewidth*q()),Pe.setMode(y.LINES)):Pe.setMode(y.TRIANGLES);else if(nt.isLine){let ln=tt.linewidth;ln===void 0&&(ln=1),_.setLineWidth(ln*q()),nt.isLineSegments?Pe.setMode(y.LINES):nt.isLineLoop?Pe.setMode(y.LINE_LOOP):Pe.setMode(y.LINE_STRIP)}else nt.isPoints?Pe.setMode(y.POINTS):nt.isSprite&&Pe.setMode(y.TRIANGLES);if(nt.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Pe.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let ln=nt._multiDrawStarts,Gt=nt._multiDrawCounts,pn=nt._multiDrawCount,Se=Ht?Et.get(Ht).bytesPerElement:1,Rn=Q.get(tt).currentProgram.getUniforms();for(let Jn=0;Jn<pn;Jn++)Rn.setValue(y,"_gl_DrawID",Jn),Pe.render(ln[Jn]/Se,Gt[Jn])}else if(nt.isInstancedMesh)Pe.renderInstances(Zt,Xe,nt.count);else if(it.isInstancedBufferGeometry){let ln=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Gt=Math.min(it.instanceCount,ln);Pe.renderInstances(Zt,Xe,Gt)}else Pe.render(Zt,Xe)};function J(v,O,it,tt){G!==null&&v.isNodeMaterial&&G.setObject(tt,v),F===!0&&kt.setState(v,it,!1),v.transparent===!0&&v.side===Cn&&v.forceSinglePass===!1?(v.side=an,v.needsUpdate=!0,Qt(v,O,tt),v.side=Ni,v.needsUpdate=!0,Qt(v,O,tt),v.side=Cn):Qt(v,O,tt)}this.compile=function(v,O,it=null){it===null&&(it=v),G!==null&&G.renderStart(v,O,it),w=Pt.get(it),w.init(O),x.push(w),it.traverseVisible(function(nt){nt.isLight&&nt.layers.test(O.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),v!==it&&v.traverseVisible(function(nt){nt.isLight&&nt.layers.test(O.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),w.setupLights(),G!==null&&G.updateLights(w.state.lightsArray),P=this.localClippingEnabled,F=kt.init(this.clippingPlanes,P),F===!0&&kt.setGlobalState(this.clippingPlanes,O),G!==null&&jt.render(w.state.shadowsArray,it,O);let tt=new Set;return v.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Bt=nt.material;if(Bt)if(Array.isArray(Bt))for(let Vt=0;Vt<Bt.length;Vt++){let Ut=Bt[Vt];J(Ut,it,O,nt),tt.add(Ut)}else J(Bt,it,O,nt),tt.add(Bt)}),w=x.pop(),G!==null&&G.renderEnd(),tt},this.compileAsync=function(v,O,it=null){let tt=this.compile(v,O,it);return new Promise(nt=>{function Bt(){if(tt.forEach(function(Vt){let Ht=Q.get(Vt).currentProgram;(Ht===void 0||Ht.isReady())&&tt.delete(Vt)}),tt.size===0){nt(v);return}setTimeout(Bt,10)}Ct.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let _t=null;function Tt(v){_t&&_t(v)}function St(){he.stop()}function Ot(){he.start()}let he=new Pu;he.setAnimationLoop(Tt),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(v){_t=v,Xt.setAnimationLoop(v),v===null?he.stop():he.start()},Xt.addEventListener("sessionstart",St),Xt.addEventListener("sessionend",Ot),this.render=function(v,O){if(O!==void 0&&O.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;G!==null&&G.renderStart(v,O);let it=Xt.enabled===!0&&Xt.isPresenting===!0,tt=A!==null&&(Y===null||it)&&A.begin(z,Y);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(O),O=Xt.getCamera()),v.isScene===!0&&v.onBeforeRender(z,v,O,Y),w=Pt.get(v,x.length),w.init(O),w.state.textureUnits=ht.getTextureUnits(),x.push(w),Z.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),b.setFromProjectionMatrix(Z,Vn,O.reversedDepth),P=this.localClippingEnabled,F=kt.init(this.clippingPlanes,P),E=Nt.get(v,D.length),E.init(),D.push(E),Xt.enabled===!0&&Xt.isPresenting===!0){let Vt=z.xr.getDepthSensingMesh();Vt!==null&&ee(Vt,O,-1/0,z.sortObjects)}ee(v,O,0,z.sortObjects),E.finish(),G!==null&&G.updateLights(w.state.lightsArray),z.sortObjects===!0&&E.sort(I,R),gt=Xt.enabled===!1||Xt.isPresenting===!1||Xt.hasDepthSensing()===!1,gt&&ae.addToRenderList(E,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),F===!0&&kt.beginShadows();let nt=w.state.shadowsArray;if(jt.render(nt,v,O),F===!0&&kt.endShadows(),(tt&&A.hasRenderPass())===!1){let Vt=E.opaque,Ut=E.transmissive;if(w.setupLights(),O.isArrayCamera){let Ht=O.cameras;if(Ut.length>0)for(let qt=0,ce=Ht.length;qt<ce;qt++){let fe=Ht[qt];pe(Vt,Ut,v,fe)}gt&&ae.render(v);for(let qt=0,ce=Ht.length;qt<ce;qt++){let fe=Ht[qt];ie(E,v,fe,fe.viewport)}}else Ut.length>0&&pe(Vt,Ut,v,O),gt&&ae.render(v),ie(E,v,O)}Y!==null&&K===0&&(ht.updateMultisampleRenderTarget(Y),ht.updateRenderTargetMipmap(Y)),tt&&A.end(z),v.isScene===!0&&v.onAfterRender(z,v,O),Ft.resetDefaultState(),rt=-1,ot=null,x.pop(),x.length>0?(w=x[x.length-1],ht.setTextureUnits(w.state.textureUnits),F===!0&&kt.setGlobalState(z.clippingPlanes,w.state.camera)):w=null,D.pop(),D.length>0?E=D[D.length-1]:E=null,G!==null&&G.renderEnd()};function ee(v,O,it,tt){if(v.visible===!1)return;if(v.layers.test(O.layers)){if(v.isGroup)it=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(O);else if(v.isLightProbeGrid)w.pushLightProbeGrid(v);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(b)){tt&&ut.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Z);let Vt=at.update(v),Ut=v.material;Ut.visible&&E.push(v,Vt,Ut,it,ut.z,null,O)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(b))){let Vt=at.update(v),Ut=v.material;if(tt&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ut.copy(v.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ut.copy(Vt.boundingSphere.center)),ut.applyMatrix4(v.matrixWorld).applyMatrix4(Z)),Array.isArray(Ut)){let Ht=Vt.groups;for(let qt=0,ce=Ht.length;qt<ce;qt++){let fe=Ht[qt],Zt=Ut[fe.materialIndex];Zt&&Zt.visible&&E.push(v,Vt,Zt,it,ut.z,fe,O)}}else Ut.visible&&E.push(v,Vt,Ut,it,ut.z,null,O)}}let Bt=v.children;for(let Vt=0,Ut=Bt.length;Vt<Ut;Vt++)ee(Bt[Vt],O,it,tt)}function ie(v,O,it,tt){let{opaque:nt,transmissive:Bt,transparent:Vt}=v;w.setupLightsView(it),F===!0&&kt.setGlobalState(z.clippingPlanes,it),tt&&_.viewport(ft.copy(tt)),nt.length>0&&me(nt,O,it),Bt.length>0&&me(Bt,O,it),Vt.length>0&&me(Vt,O,it),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function pe(v,O,it,tt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[tt.id]===void 0){let Zt=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[tt.id]=new gn(1,1,{generateMipmaps:!0,type:Zt?qn:_n,minFilter:Ui,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let Bt=w.state.transmissionRenderTarget[tt.id],Vt=tt.viewport||ft;Bt.setSize(Vt.z*z.transmissionResolutionScale,Vt.w*z.transmissionResolutionScale);let Ut=z.getRenderTarget(),Ht=z.getActiveCubeFace(),qt=z.getActiveMipmapLevel();z.setRenderTarget(Bt),z.getClearColor(Jt),Yt=z.getClearAlpha(),Yt<1&&z.setClearColor(16777215,.5),z.clear(),gt&&ae.render(it);let ce=z.toneMapping;z.toneMapping=Wn;let fe=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),w.setupLightsView(tt),F===!0&&kt.setGlobalState(z.clippingPlanes,tt),me(v,it,tt),ht.updateMultisampleRenderTarget(Bt),ht.updateRenderTargetMipmap(Bt),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let we=0,Xe=O.length;we<Xe;we++){let De=O[we],{object:Pe,geometry:ln,material:Gt,group:pn}=De;if(Gt.side===Cn&&Pe.layers.test(tt.layers)){let Se=Gt.side;Gt.side=an,Gt.needsUpdate=!0,Le(Pe,it,tt,ln,Gt,pn),Gt.side=Se,Gt.needsUpdate=!0,Zt=!0}}Zt===!0&&(ht.updateMultisampleRenderTarget(Bt),ht.updateRenderTargetMipmap(Bt))}z.setRenderTarget(Ut,Ht,qt),z.setClearColor(Jt,Yt),fe!==void 0&&(tt.viewport=fe),z.toneMapping=ce}function me(v,O,it){let tt=O.isScene===!0?O.overrideMaterial:null;for(let nt=0,Bt=v.length;nt<Bt;nt++){let Vt=v[nt],{object:Ut,geometry:Ht,group:qt}=Vt,ce=Vt.material;ce.allowOverride===!0&&tt!==null&&(ce=tt),Ut.layers.test(it.layers)&&Le(Ut,O,it,Ht,ce,qt)}}function Le(v,O,it,tt,nt,Bt){G!==null&&nt.isNodeMaterial&&G.setObject(v,nt),v.onBeforeRender(z,O,it,tt,nt,Bt),v.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),nt.onBeforeRender(z,O,it,tt,v,Bt),nt.transparent===!0&&nt.side===Cn&&nt.forceSinglePass===!1?(nt.side=an,nt.needsUpdate=!0,z.renderBufferDirect(it,O,tt,nt,v,Bt),nt.side=Ni,nt.needsUpdate=!0,z.renderBufferDirect(it,O,tt,nt,v,Bt),nt.side=Cn):z.renderBufferDirect(it,O,tt,nt,v,Bt),v.onAfterRender(z,O,it,tt,nt,Bt)}function Qt(v,O,it){O.isScene!==!0&&(O=mt);let tt=Q.get(v),nt=w.state.lights,Bt=w.state.shadowsArray,Vt=nt.state.version,Ut=Rt.getParameters(v,nt.state,Bt,O,it,w.state.lightProbeGridArray),Ht=Rt.getProgramCacheKey(Ut),qt=tt.programs;tt.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?O.environment:null,tt.fog=O.fog;let ce=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;tt.envMap=bt.get(v.envMap||tt.environment,ce),tt.envMapRotation=tt.environment!==null&&v.envMap===null?O.environmentRotation:v.envMapRotation,qt===void 0&&(v.addEventListener("dispose",fn),qt=new Map,tt.programs=qt);let fe=qt.get(Ht);if(fe!==void 0){if(tt.currentProgram===fe&&tt.lightsStateVersion===Vt)return Me(v,Ut),fe}else Ut.uniforms=Rt.getUniforms(v),G!==null&&v.isNodeMaterial&&G.build(v,it,Ut),v.onBeforeCompile(Ut,z),fe=Rt.acquireProgram(Ut,Ht),qt.set(Ht,fe),tt.uniforms=Ut.uniforms;let Zt=tt.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Zt.clippingPlanes=kt.uniform),Me(v,Ut),tt.needsLights=re(v),tt.lightsStateVersion=Vt,tt.needsLights&&(Zt.ambientLightColor.value=nt.state.ambient,Zt.lightProbe.value=nt.state.probe,Zt.sunLights.value=nt.state.sun,Zt.sunLightShadows.value=nt.state.sunShadow,Zt.directionalLights.value=nt.state.directional,Zt.directionalLightShadows.value=nt.state.directionalShadow,Zt.spotLights.value=nt.state.spot,Zt.spotLightShadows.value=nt.state.spotShadow,Zt.rectAreaLights.value=nt.state.rectArea,Zt.ltc_1.value=nt.state.rectAreaLTC1,Zt.ltc_2.value=nt.state.rectAreaLTC2,Zt.pointLights.value=nt.state.point,Zt.pointLightShadows.value=nt.state.pointShadow,Zt.hemisphereLights.value=nt.state.hemi,Zt.sunShadowMatrix.value=nt.state.sunShadowMatrix,Zt.sunShadowCascade.value=nt.state.sunShadowCascade,Zt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Zt.spotLightMatrix.value=nt.state.spotLightMatrix,Zt.spotLightMap.value=nt.state.spotLightMap,Zt.pointShadowMatrix.value=nt.state.pointShadowMatrix),tt.lightProbeGrid=w.state.lightProbeGridArray.length>0,tt.currentProgram=fe,tt.uniformsList=null,fe}function Te(v){if(v.uniformsList===null){let O=v.currentProgram.getUniforms();v.uniformsList=Vs.seqWithValue(O.seq,v.uniforms)}return v.uniformsList}function Me(v,O){let it=Q.get(v);it.outputColorSpace=O.outputColorSpace,it.batching=O.batching,it.batchingColor=O.batchingColor,it.instancing=O.instancing,it.instancingColor=O.instancingColor,it.instancingMorph=O.instancingMorph,it.skinning=O.skinning,it.morphTargets=O.morphTargets,it.morphNormals=O.morphNormals,it.morphColors=O.morphColors,it.morphTargetsCount=O.morphTargetsCount,it.numClippingPlanes=O.numClippingPlanes,it.numIntersection=O.numClipIntersection,it.vertexAlphas=O.vertexAlphas,it.vertexTangents=O.vertexTangents,it.toneMapping=O.toneMapping}function wt(v,O){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let it=0,tt=v.length;it<tt;it++){let nt=v[it];if(nt.texture!==null&&nt.boundingBox.containsPoint(S))return nt}return null}function ge(v,O,it,tt,nt){O.isScene!==!0&&(O=mt),ht.resetTextureUnits();let Bt=O.fog,Vt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?O.environment:null,Ut=Y===null?z.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:_e.workingColorSpace,Ht=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,qt=bt.get(tt.envMap||Vt,Ht),ce=tt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,fe=!!it.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Zt=!!it.morphAttributes.position,we=!!it.morphAttributes.normal,Xe=!!it.morphAttributes.color,De=Wn;tt.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(De=z.toneMapping);let Pe=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ln=Pe!==void 0?Pe.length:0,Gt=Q.get(tt),pn=w.state.lights;if(F===!0&&(P===!0||v!==ot)){let Ne=v===ot&&tt.id===rt;kt.setState(tt,v,Ne)}let Se=!1;tt.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==pn.state.version||Gt.outputColorSpace!==Ut||nt.isBatchedMesh&&Gt.batching===!1||!nt.isBatchedMesh&&Gt.batching===!0||nt.isBatchedMesh&&Gt.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&Gt.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&Gt.instancing===!1||!nt.isInstancedMesh&&Gt.instancing===!0||nt.isSkinnedMesh&&Gt.skinning===!1||!nt.isSkinnedMesh&&Gt.skinning===!0||nt.isInstancedMesh&&Gt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Gt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Gt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Gt.instancingMorph===!1&&nt.morphTexture!==null||Gt.envMap!==qt||tt.fog===!0&&Gt.fog!==Bt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==kt.numPlanes||Gt.numIntersection!==kt.numIntersection)||Gt.vertexAlphas!==ce||Gt.vertexTangents!==fe||Gt.morphTargets!==Zt||Gt.morphNormals!==we||Gt.morphColors!==Xe||Gt.toneMapping!==De||Gt.morphTargetsCount!==ln||!!Gt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Gt.__version=tt.version);let Rn=Gt.currentProgram;Se===!0&&(Rn=Qt(tt,O,nt),G&&tt.isNodeMaterial&&G.onUpdateProgram(tt,Rn,Gt));let Jn=!1,yi=!1,es=!1,Re=Rn.getUniforms(),Ge=Gt.uniforms;if(_.useProgram(Rn.program)&&(Jn=!0,yi=!0,es=!0),tt.id!==rt&&(rt=tt.id,yi=!0),Gt.needsLights){let Ne=wt(w.state.lightProbeGridArray,nt);Gt.lightProbeGrid!==Ne&&(Gt.lightProbeGrid=Ne,yi=!0)}if(Jn||ot!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Re.setValue(y,"projectionMatrix",v.projectionMatrix),Re.setValue(y,"viewMatrix",v.matrixWorldInverse);let Mi=Re.map.cameraPosition;Mi!==void 0&&Mi.setValue(y,j.setFromMatrixPosition(v.matrixWorld)),C.logarithmicDepthBuffer&&Re.setValue(y,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Re.setValue(y,"isOrthographic",v.isOrthographicCamera===!0),ot!==v&&(ot=v,yi=!0,es=!0)}if(Gt.needsLights&&(pn.state.sunShadowMap.length>0&&Re.setValue(y,"sunShadowMap",pn.state.sunShadowMap,ht),pn.state.directionalShadowMap.length>0&&Re.setValue(y,"directionalShadowMap",pn.state.directionalShadowMap,ht),pn.state.spotShadowMap.length>0&&Re.setValue(y,"spotShadowMap",pn.state.spotShadowMap,ht),pn.state.pointShadowMap.length>0&&Re.setValue(y,"pointShadowMap",pn.state.pointShadowMap,ht)),nt.isSkinnedMesh){Re.setOptional(y,nt,"bindMatrix"),Re.setOptional(y,nt,"bindMatrixInverse");let Ne=nt.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Re.setValue(y,"boneTexture",Ne.boneTexture,ht))}nt.isBatchedMesh&&(Re.setOptional(y,nt,"batchingTexture"),Re.setValue(y,"batchingTexture",nt._matricesTexture,ht),Re.setOptional(y,nt,"batchingIdTexture"),Re.setValue(y,"batchingIdTexture",nt._indirectTexture,ht),Re.setOptional(y,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Re.setValue(y,"batchingColorTexture",nt._colorsTexture,ht));let vi=it.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&X.update(nt,it,Rn),(yi||Gt.receiveShadow!==nt.receiveShadow)&&(Gt.receiveShadow=nt.receiveShadow,Re.setValue(y,"receiveShadow",nt.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&O.environment!==null&&(Ge.envMapIntensity.value=O.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=z0()),yi){if(Re.setValue(y,"toneMappingExposure",z.toneMappingExposure),Gt.needsLights&&Ee(Ge,es),Bt&&tt.fog===!0&&Wt.refreshFogUniforms(Ge,Bt),Wt.refreshMaterialUniforms(Ge,tt,N,U,w.state.transmissionRenderTarget[v.id]),Gt.needsLights&&Gt.lightProbeGrid){let Ne=Gt.lightProbeGrid;Ge.probesSH.value=Ne.texture,Ge.probesMin.value.copy(Ne.boundingBox.min),Ge.probesMax.value.copy(Ne.boundingBox.max),Ge.probesResolution.value.copy(Ne.resolution)}Vs.upload(y,Te(Gt),Ge,ht)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Vs.upload(y,Te(Gt),Ge,ht),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Re.setValue(y,"center",nt.center),Re.setValue(y,"modelViewMatrix",nt.modelViewMatrix),Re.setValue(y,"normalMatrix",nt.normalMatrix),Re.setValue(y,"modelMatrix",nt.matrixWorld),tt.uniformsGroups!==void 0){let Ne=tt.uniformsGroups;for(let Mi=0,ns=Ne.length;Mi<ns;Mi++){let zc=Ne[Mi];vt.update(zc,Rn),vt.bind(zc,Rn)}}return Rn}function Ee(v,O){v.ambientLightColor.needsUpdate=O,v.lightProbe.needsUpdate=O,v.sunLights.needsUpdate=O,v.sunLightShadows.needsUpdate=O,v.directionalLights.needsUpdate=O,v.directionalLightShadows.needsUpdate=O,v.pointLights.needsUpdate=O,v.pointLightShadows.needsUpdate=O,v.spotLights.needsUpdate=O,v.spotLightShadows.needsUpdate=O,v.rectAreaLights.needsUpdate=O,v.hemisphereLights.needsUpdate=O}function re(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(v,O,it){let tt=Q.get(v);tt.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Q.get(v.texture).__webglTexture=O,Q.get(v.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:it,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,O){let it=Q.get(v);it.__webglFramebuffer=O,it.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(v,O=0,it=0){Y=v,ct=O,K=it;let tt=null,nt=!1,Bt=!1;if(v){let Ut=Q.get(v);if(Ut.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(y.FRAMEBUFFER,Ut.__webglFramebuffer),ft.copy(v.viewport),At.copy(v.scissor),Mt=v.scissorTest,_.viewport(ft),_.scissor(At),_.setScissorTest(Mt),rt=-1;return}else if(Ut.__webglFramebuffer===void 0)ht.setupRenderTarget(v);else if(Ut.__hasExternalTextures)ht.rebindTextures(v,Q.get(v.texture).__webglTexture,Q.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let ce=v.depthTexture;if(Ut.__boundDepthTexture!==ce){if(ce!==null&&Q.has(ce)&&(v.width!==ce.image.width||v.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(v)}}let Ht=v.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Bt=!0);let qt=Q.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(qt[O])?tt=qt[O][it]:tt=qt[O],nt=!0):v.samples>0&&ht.useMultisampledRTT(v)===!1?tt=Q.get(v).__webglMultisampledFramebuffer:Array.isArray(qt)?tt=qt[it]:tt=qt,ft.copy(v.viewport),At.copy(v.scissor),Mt=v.scissorTest}else ft.copy(B).multiplyScalar(N).floor(),At.copy(st).multiplyScalar(N).floor(),Mt=yt;if(it!==0&&(tt=et),_.bindFramebuffer(y.FRAMEBUFFER,tt)&&_.drawBuffers(v,tt),_.viewport(ft),_.scissor(At),_.setScissorTest(Mt),nt){let Ut=Q.get(v.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ut.__webglTexture,it)}else if(Bt){let Ut=O;for(let Ht=0;Ht<v.textures.length;Ht++){let qt=Q.get(v.textures[Ht]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+Ht,qt.__webglTexture,it,Ut)}}else if(v!==null&&it!==0){let Ut=Q.get(v.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ut.__webglTexture,it)}rt=-1};function te(v){let O=Q.get(v);return(O.__readFormat!==v.format||O.__readType!==v.type)&&(O.__readFormat=v.format,O.__readType=v.type,O.__formatReadable=C.textureFormatReadable(v.format),O.__typeReadable=C.textureTypeReadable(v.type)),O}this.readRenderTargetPixels=function(v,O,it,tt,nt,Bt,Vt,Ut=0){if(!(v&&v.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Q.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Vt!==void 0&&(Ht=Ht[Vt]),Ht){_.bindFramebuffer(y.FRAMEBUFFER,Ht);try{let qt=v.textures[Ut],ce=qt.format,fe=qt.type;v.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Ut);let Zt=te(qt);if(Zt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Zt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=v.width-tt&&it>=0&&it<=v.height-nt&&y.readPixels(O,it,tt,nt,Lt.convert(ce),Lt.convert(fe),Bt)}finally{let qt=Y!==null?Q.get(Y).__webglFramebuffer:null;_.bindFramebuffer(y.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(v,O,it,tt,nt,Bt,Vt,Ut=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=Q.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Vt!==void 0&&(Ht=Ht[Vt]),Ht)if(O>=0&&O<=v.width-tt&&it>=0&&it<=v.height-nt){_.bindFramebuffer(y.FRAMEBUFFER,Ht);let qt=v.textures[Ut],ce=qt.format,fe=qt.type;v.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Ut);let Zt=te(qt);if(Zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let we=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,we),y.bufferData(y.PIXEL_PACK_BUFFER,Bt.byteLength,y.STREAM_READ),y.readPixels(O,it,tt,nt,Lt.convert(ce),Lt.convert(fe),0),y.bindBuffer(y.PIXEL_PACK_BUFFER,null);let Xe=Y!==null?Q.get(Y).__webglFramebuffer:null;_.bindFramebuffer(y.FRAMEBUFFER,Xe);let De=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Qh(y,De,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,we),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,Bt),y.bindBuffer(y.PIXEL_PACK_BUFFER,null),y.deleteBuffer(we),y.deleteSync(De),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,O=null,it=0){let tt=Math.pow(2,-it),nt=Math.floor(v.image.width*tt),Bt=Math.floor(v.image.height*tt),Vt=O!==null?O.x:0,Ut=O!==null?O.y:0;ht.setTexture2D(v,0),y.copyTexSubImage2D(y.TEXTURE_2D,it,0,0,Vt,Ut,nt,Bt),_.unbindTexture()},this.copyTextureToTexture=function(v,O,it=null,tt=null,nt=0,Bt=0){let Vt,Ut,Ht,qt,ce,fe,Zt,we,Xe,De=v.isCompressedTexture?v.mipmaps[Bt]:v.image;if(it!==null)Vt=it.max.x-it.min.x,Ut=it.max.y-it.min.y,Ht=it.isBox3?it.max.z-it.min.z:1,qt=it.min.x,ce=it.min.y,fe=it.isBox3?it.min.z:0;else{let Ge=Math.pow(2,-nt);Vt=Math.floor(De.width*Ge),Ut=Math.floor(De.height*Ge),v.isDataArrayTexture?Ht=De.depth:v.isData3DTexture?Ht=Math.floor(De.depth*Ge):Ht=1,qt=0,ce=0,fe=0}tt!==null?(Zt=tt.x,we=tt.y,Xe=tt.z):(Zt=0,we=0,Xe=0);let Pe=Lt.convert(O.format),ln=Lt.convert(O.type),Gt;O.isData3DTexture?(ht.setTexture3D(O,0),Gt=y.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ht.setTexture2DArray(O,0),Gt=y.TEXTURE_2D_ARRAY):(ht.setTexture2D(O,0),Gt=y.TEXTURE_2D),_.activeTexture(y.TEXTURE0),_.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,O.flipY),_.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_.pixelStorei(y.UNPACK_ALIGNMENT,O.unpackAlignment);let pn=_.getParameter(y.UNPACK_ROW_LENGTH),Se=_.getParameter(y.UNPACK_IMAGE_HEIGHT),Rn=_.getParameter(y.UNPACK_SKIP_PIXELS),Jn=_.getParameter(y.UNPACK_SKIP_ROWS),yi=_.getParameter(y.UNPACK_SKIP_IMAGES);_.pixelStorei(y.UNPACK_ROW_LENGTH,De.width),_.pixelStorei(y.UNPACK_IMAGE_HEIGHT,De.height),_.pixelStorei(y.UNPACK_SKIP_PIXELS,qt),_.pixelStorei(y.UNPACK_SKIP_ROWS,ce),_.pixelStorei(y.UNPACK_SKIP_IMAGES,fe);let es=v.isDataArrayTexture||v.isData3DTexture,Re=O.isDataArrayTexture||O.isData3DTexture;if(v.isDepthTexture){let Ge=Q.get(v),vi=Q.get(O),Ne=Q.get(Ge.__renderTarget),Mi=Q.get(vi.__renderTarget);_.bindFramebuffer(y.READ_FRAMEBUFFER,Ne.__webglFramebuffer),_.bindFramebuffer(y.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let ns=0;ns<Ht;ns++)es&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Q.get(v).__webglTexture,nt,fe+ns),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Q.get(O).__webglTexture,Bt,Xe+ns)),y.blitFramebuffer(qt,ce,Vt,Ut,Zt,we,Vt,Ut,y.DEPTH_BUFFER_BIT,y.NEAREST);_.bindFramebuffer(y.READ_FRAMEBUFFER,null),_.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(nt!==0||v.isRenderTargetTexture||Q.has(v)){let Ge=Q.get(v),vi=Q.get(O);_.bindFramebuffer(y.READ_FRAMEBUFFER,V),_.bindFramebuffer(y.DRAW_FRAMEBUFFER,$);for(let Ne=0;Ne<Ht;Ne++)es?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ge.__webglTexture,nt,fe+Ne):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ge.__webglTexture,nt),Re?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,vi.__webglTexture,Bt,Xe+Ne):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,vi.__webglTexture,Bt),nt!==0?y.blitFramebuffer(qt,ce,Vt,Ut,Zt,we,Vt,Ut,y.COLOR_BUFFER_BIT,y.NEAREST):Re?y.copyTexSubImage3D(Gt,Bt,Zt,we,Xe+Ne,qt,ce,Vt,Ut):y.copyTexSubImage2D(Gt,Bt,Zt,we,qt,ce,Vt,Ut);_.bindFramebuffer(y.READ_FRAMEBUFFER,null),_.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else Re?v.isDataTexture||v.isData3DTexture?y.texSubImage3D(Gt,Bt,Zt,we,Xe,Vt,Ut,Ht,Pe,ln,De.data):O.isCompressedArrayTexture?y.compressedTexSubImage3D(Gt,Bt,Zt,we,Xe,Vt,Ut,Ht,Pe,De.data):y.texSubImage3D(Gt,Bt,Zt,we,Xe,Vt,Ut,Ht,Pe,ln,De):v.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,Bt,Zt,we,Vt,Ut,Pe,ln,De.data):v.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,Bt,Zt,we,De.width,De.height,Pe,De.data):y.texSubImage2D(y.TEXTURE_2D,Bt,Zt,we,Vt,Ut,Pe,ln,De);_.pixelStorei(y.UNPACK_ROW_LENGTH,pn),_.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Se),_.pixelStorei(y.UNPACK_SKIP_PIXELS,Rn),_.pixelStorei(y.UNPACK_SKIP_ROWS,Jn),_.pixelStorei(y.UNPACK_SKIP_IMAGES,yi),Bt===0&&O.generateMipmaps&&y.generateMipmap(Gt),_.unbindTexture()},this.initRenderTarget=function(v){Q.get(v).__webglFramebuffer===void 0&&ht.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ht.setTextureCube(v,0):v.isData3DTexture?ht.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ht.setTexture2DArray(v,0):ht.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){ct=0,K=0,Y=null,_.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var Jr=new k;function Un(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Jr.copy(t),Jr[n]=0,Jr.normalize();let l=.5*a/(a+o),h=1-Jr.angleTo(i)/c;return Math.sign(Jr[e])===1?h*l:o/(a+o)+l+l*(1-h)}var tl=class i extends ti{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new k,l=new k,h=new k(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,g=d.length/6,M=new k,m=.5/a;for(let f=0,T=0;f<d.length;f+=3,T+=2)switch(c.fromArray(d,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[f+0]=h.x*Math.sign(c.x)+l.x*r,d[f+1]=h.y*Math.sign(c.y)+l.y*r,d[f+2]=h.z*Math.sign(c.z)+l.z*r,u[f+0]=l.x,u[f+1]=l.y,u[f+2]=l.z,Math.floor(f/g)){case 0:M.set(1,0,0),p[T+0]=Un(M,l,"z","y",r,n),p[T+1]=1-Un(M,l,"y","z",r,e);break;case 1:M.set(-1,0,0),p[T+0]=1-Un(M,l,"z","y",r,n),p[T+1]=1-Un(M,l,"y","z",r,e);break;case 2:M.set(0,1,0),p[T+0]=1-Un(M,l,"x","z",r,t),p[T+1]=Un(M,l,"z","x",r,n);break;case 3:M.set(0,-1,0),p[T+0]=1-Un(M,l,"x","z",r,t),p[T+1]=1-Un(M,l,"z","x",r,n);break;case 4:M.set(0,0,1),p[T+0]=1-Un(M,l,"x","y",r,t),p[T+1]=1-Un(M,l,"y","x",r,e);break;case 5:M.set(0,0,-1),p[T+0]=Un(M,l,"x","y",r,t),p[T+1]=1-Un(M,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var el=class extends Hi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ti;t.deleteAttribute("uv");let e=new wn({side:an}),n=new wn,s=new Nr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Be(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new pr(t,n,6),o=new rn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Be(t,Ws(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Be(t,Ws(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new Be(t,Ws(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Be(t,Ws(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Be(t,Ws(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let p=new Be(t,Ws(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ws(i){return new Cr({color:0,emissive:16777215,emissiveIntensity:i})}var $r=Ye,nl=class i extends Zi{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){let r=this,a=new Pr(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){let e=this;function n(N,I){if(N.nodeType!==1)return;N.hasAttribute("filter")&&console.warn("THREE.SVGLoader: Filters are not supported.");let R=E(N),B=!1,st=null;switch(N.nodeName){case"svg":I=M(N,I);break;case"style":r(N);break;case"g":I=M(N,I);break;case"path":I=M(N,I),N.hasAttribute("d")&&(st=s(N));break;case"rect":I=M(N,I),st=c(N);break;case"polygon":I=M(N,I),st=l(N);break;case"polyline":I=M(N,I),st=h(N);break;case"circle":I=M(N,I),st=d(N);break;case"ellipse":I=M(N,I),st=u(N);break;case"line":I=M(N,I),st=p(N);break;case"defs":B=!0;break;case"use":I=M(N,I);let F=(N.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),P=N.viewportElement.getElementById(F);P?n(P,I):console.warn("SVGLoader: 'use node' references non-existent node id: "+F);break;default:}if(st){I.fill!==void 0&&I.fill!=="none"&&!I.fill.startsWith("url")&&st.color.setStyle(I.fill,$r),x(st,Yt),$.push(st);let b=Object.assign({},I);b.strokeWidth=I.strokeWidth*et(Yt),st.userData={node:N,style:b,transform:Yt.clone(),gradients:K}}let yt=N.childNodes;for(let b=0;b<yt.length;b++){let F=yt[b];B&&F.nodeName!=="style"&&F.nodeName!=="defs"||n(F,I)}R&&(Y.pop(),Y.length>0?Yt.copy(Y[Y.length-1]):Yt.identity())}function s(N){let I=new Hn,R=new xt,B=new xt,st=new xt,yt=!0,b=!1,F=N.getAttribute("d");if(F===""||F==="none")return null;let P=F.match(/[a-df-z][^a-df-z]*/ig);for(let Z=0,j=P.length;Z<j;Z++){let ut=P[Z],mt=ut.charAt(0),gt=ut.slice(1).trim();yt===!0&&(b=!0,yt=!1);let q;switch(mt){case"M":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y+=2)R.x=q[y+0],R.y=q[y+1],B.x=R.x,B.y=R.y,y===0?I.moveTo(R.x,R.y):I.lineTo(R.x,R.y),y===0&&st.copy(R);break;case"H":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y++)R.x=q[y],B.x=R.x,B.y=R.y,I.lineTo(R.x,R.y),y===0&&b===!0&&st.copy(R);break;case"V":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y++)R.y=q[y],B.x=R.x,B.y=R.y,I.lineTo(R.x,R.y),y===0&&b===!0&&st.copy(R);break;case"L":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y+=2)R.x=q[y+0],R.y=q[y+1],B.x=R.x,B.y=R.y,I.lineTo(R.x,R.y),y===0&&b===!0&&st.copy(R);break;case"C":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y+=6)I.bezierCurveTo(q[y+0],q[y+1],q[y+2],q[y+3],q[y+4],q[y+5]),B.x=q[y+2],B.y=q[y+3],R.x=q[y+4],R.y=q[y+5],y===0&&b===!0&&st.copy(R);break;case"S":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y+=4)I.bezierCurveTo(m(R.x,B.x),m(R.y,B.y),q[y+0],q[y+1],q[y+2],q[y+3]),B.x=q[y+0],B.y=q[y+1],R.x=q[y+2],R.y=q[y+3],y===0&&b===!0&&st.copy(R);break;case"Q":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y+=4)I.quadraticCurveTo(q[y+0],q[y+1],q[y+2],q[y+3]),B.x=q[y+0],B.y=q[y+1],R.x=q[y+2],R.y=q[y+3],y===0&&b===!0&&st.copy(R);break;case"T":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y+=2){let Ct=m(R.x,B.x),C=m(R.y,B.y);I.quadraticCurveTo(Ct,C,q[y+0],q[y+1]),B.x=Ct,B.y=C,R.x=q[y+0],R.y=q[y+1],y===0&&b===!0&&st.copy(R)}break;case"A":q=f(gt,[3,4],7);for(let y=0,Dt=q.length;y<Dt;y+=7){if(q[y+5]==R.x&&q[y+6]==R.y)continue;let Ct=R.clone();R.x=q[y+5],R.y=q[y+6],B.x=R.x,B.y=R.y,a(I,q[y],q[y+1],q[y+2],q[y+3],q[y+4],Ct,R),y===0&&b===!0&&st.copy(R)}break;case"m":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y+=2)R.x+=q[y+0],R.y+=q[y+1],B.x=R.x,B.y=R.y,y===0?I.moveTo(R.x,R.y):I.lineTo(R.x,R.y),y===0&&st.copy(R);break;case"h":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y++)R.x+=q[y],B.x=R.x,B.y=R.y,I.lineTo(R.x,R.y),y===0&&b===!0&&st.copy(R);break;case"v":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y++)R.y+=q[y],B.x=R.x,B.y=R.y,I.lineTo(R.x,R.y),y===0&&b===!0&&st.copy(R);break;case"l":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y+=2)R.x+=q[y+0],R.y+=q[y+1],B.x=R.x,B.y=R.y,I.lineTo(R.x,R.y),y===0&&b===!0&&st.copy(R);break;case"c":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y+=6)I.bezierCurveTo(R.x+q[y+0],R.y+q[y+1],R.x+q[y+2],R.y+q[y+3],R.x+q[y+4],R.y+q[y+5]),B.x=R.x+q[y+2],B.y=R.y+q[y+3],R.x+=q[y+4],R.y+=q[y+5],y===0&&b===!0&&st.copy(R);break;case"s":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y+=4)I.bezierCurveTo(m(R.x,B.x),m(R.y,B.y),R.x+q[y+0],R.y+q[y+1],R.x+q[y+2],R.y+q[y+3]),B.x=R.x+q[y+0],B.y=R.y+q[y+1],R.x+=q[y+2],R.y+=q[y+3],y===0&&b===!0&&st.copy(R);break;case"q":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y+=4)I.quadraticCurveTo(R.x+q[y+0],R.y+q[y+1],R.x+q[y+2],R.y+q[y+3]),B.x=R.x+q[y+0],B.y=R.y+q[y+1],R.x+=q[y+2],R.y+=q[y+3],y===0&&b===!0&&st.copy(R);break;case"t":q=f(gt);for(let y=0,Dt=q.length;y<Dt;y+=2){let Ct=m(R.x,B.x),C=m(R.y,B.y);I.quadraticCurveTo(Ct,C,R.x+q[y+0],R.y+q[y+1]),B.x=Ct,B.y=C,R.x=R.x+q[y+0],R.y=R.y+q[y+1],y===0&&b===!0&&st.copy(R)}break;case"a":q=f(gt,[3,4],7);for(let y=0,Dt=q.length;y<Dt;y+=7){if(q[y+5]==0&&q[y+6]==0)continue;let Ct=R.clone();R.x+=q[y+5],R.y+=q[y+6],B.x=R.x,B.y=R.y,a(I,q[y],q[y+1],q[y+2],q[y+3],q[y+4],Ct,R),y===0&&b===!0&&st.copy(R)}break;case"Z":case"z":I.currentPath.autoClose=!0,I.currentPath.curves.length>0&&(R.copy(st),I.currentPath.currentPoint.copy(R),yt=!0);break;default:console.warn(ut)}b=!1}return I}function r(N){if(!(!N.sheet||!N.sheet.cssRules||!N.sheet.cssRules.length))for(let I=0;I<N.sheet.cssRules.length;I++){let R=N.sheet.cssRules[I];if(R.type!==1)continue;let B=R.selectorText.split(/,/gm).filter(Boolean).map(st=>st.trim());for(let st=0;st<B.length;st++){let yt=Object.fromEntries(Object.entries(R.style).filter(([,b])=>b!==""));ct[B[st]]=Object.assign(ct[B[st]]||{},yt)}}}function a(N,I,R,B,st,yt,b,F){if(I==0||R==0){N.lineTo(F.x,F.y);return}B=B*Math.PI/180,I=Math.abs(I),R=Math.abs(R);let P=(b.x-F.x)/2,Z=(b.y-F.y)/2,j=Math.cos(B)*P+Math.sin(B)*Z,ut=-Math.sin(B)*P+Math.cos(B)*Z,mt=I*I,gt=R*R,q=j*j,y=ut*ut,Dt=q/mt+y/gt;if(Dt>1){let at=Math.sqrt(Dt);I=at*I,R=at*R,mt=I*I,gt=R*R}let Ct=mt*y+gt*q,C=(mt*gt-Ct)/Ct,_=Math.sqrt(Math.max(0,C));st===yt&&(_=-_);let W=_*I*ut/R,Q=-_*R*j/I,ht=Math.cos(B)*W-Math.sin(B)*Q+(b.x+F.x)/2,bt=Math.sin(B)*W+Math.cos(B)*Q+(b.y+F.y)/2,Et=o(1,0,(j-W)/I,(ut-Q)/R),dt=o((j-W)/I,(ut-Q)/R,(-j-W)/I,(-ut-Q)/R)%(Math.PI*2);N.currentPath.absellipse(ht,bt,I,R,Et,Et+dt,yt===0,B)}function o(N,I,R,B){let st=N*R+I*B,yt=Math.sqrt(N*N+I*I)*Math.sqrt(R*R+B*B),b=Math.acos(Math.max(-1,Math.min(1,st/yt)));return N*B-I*R<0&&(b=-b),b}function c(N){let I=S(N.getAttribute("x")||0),R=S(N.getAttribute("y")||0),B=S(N.getAttribute("rx")||N.getAttribute("ry")||0),st=S(N.getAttribute("ry")||N.getAttribute("rx")||0),yt=S(N.getAttribute("width")),b=S(N.getAttribute("height")),F=1-.551915024494,P=new Hn;return P.moveTo(I+B,R),P.lineTo(I+yt-B,R),(B!==0||st!==0)&&P.bezierCurveTo(I+yt-B*F,R,I+yt,R+st*F,I+yt,R+st),P.lineTo(I+yt,R+b-st),(B!==0||st!==0)&&P.bezierCurveTo(I+yt,R+b-st*F,I+yt-B*F,R+b,I+yt-B,R+b),P.lineTo(I+B,R+b),(B!==0||st!==0)&&P.bezierCurveTo(I+B*F,R+b,I,R+b-st*F,I,R+b-st),P.lineTo(I,R+st),(B!==0||st!==0)&&P.bezierCurveTo(I,R+st*F,I+B*F,R,I+B,R),P}function l(N){function I(yt,b,F){let P=S(b),Z=S(F);st===0?B.moveTo(P,Z):B.lineTo(P,Z),st++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,B=new Hn,st=0;return N.getAttribute("points").replace(R,I),B.currentPath.autoClose=!0,B}function h(N){function I(yt,b,F){let P=S(b),Z=S(F);st===0?B.moveTo(P,Z):B.lineTo(P,Z),st++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,B=new Hn,st=0;return N.getAttribute("points").replace(R,I),B.currentPath.autoClose=!1,B}function d(N){let I=S(N.getAttribute("cx")||0),R=S(N.getAttribute("cy")||0),B=S(N.getAttribute("r")||0),st=new ei;st.absarc(I,R,B,0,Math.PI*2);let yt=new Hn;return yt.subPaths.push(st),yt}function u(N){let I=S(N.getAttribute("cx")||0),R=S(N.getAttribute("cy")||0),B=S(N.getAttribute("rx")||0),st=S(N.getAttribute("ry")||0),yt=new ei;yt.absellipse(I,R,B,st,0,Math.PI*2);let b=new Hn;return b.subPaths.push(yt),b}function p(N){let I=S(N.getAttribute("x1")||0),R=S(N.getAttribute("y1")||0),B=S(N.getAttribute("x2")||0),st=S(N.getAttribute("y2")||0),yt=new Hn;return yt.moveTo(I,R),yt.lineTo(B,st),yt.currentPath.autoClose=!1,yt}function g(N){let I="http://www.w3.org/1999/xlink",R=N.querySelectorAll("linearGradient, radialGradient"),B=["x1","y1","x2","y2","cx","cy","r","fx","fy","gradientUnits","gradientTransform","spreadMethod"],st={};for(let b of R){let F=b.getAttribute("id");if(!F)continue;let P={type:b.nodeName==="radialGradient"?"radialGradient":"linearGradient",attrs:{},stops:null,href:null},Z=b.getAttributeNS(I,"href")||b.getAttribute("href")||"";Z.startsWith("#")&&(P.href=Z.substring(1));for(let ut of B)b.hasAttribute(ut)&&(P.attrs[ut]=b.getAttribute(ut));let j=b.querySelectorAll("stop");if(j.length>0){P.stops=[];for(let ut of j){let mt=ut.getAttribute("stop-color");!mt&&ut.style&&(mt=ut.style["stop-color"]),mt||(mt="#000");let gt=ut.getAttribute("stop-opacity");(gt===null||gt==="")&&ut.style&&(gt=ut.style["stop-opacity"]),gt=gt===null||gt===""||gt===void 0?1:Math.max(0,Math.min(1,parseFloat(gt)));let q=Math.max(0,Math.min(1,parseFloat(ut.getAttribute("offset")||"0")));P.stops.push({offset:q,color:mt,opacity:gt})}}st[F]=P}function yt(b,F){let P=st[b];if(!P||F.has(b))return P;if(F.add(b),P.href&&st[P.href]){let Z=yt(P.href,F);if(Z){P.stops||(P.stops=Z.stops);for(let j in Z.attrs)j in P.attrs||(P.attrs[j]=Z.attrs[j])}}return P}for(let b in st)yt(b,new Set);for(let b in st){let ut=function(mt){return typeof mt!="string"?0:mt.endsWith("%")?parseFloat(mt)/100:S(mt)},F=st[b],P=F.attrs,Z=P.gradientUnits==="userSpaceOnUse"?"userSpaceOnUse":"objectBoundingBox",j={type:F.type,gradientUnits:Z,spreadMethod:P.spreadMethod==="reflect"||P.spreadMethod==="repeat"?P.spreadMethod:"pad",gradientTransform:null,stops:(F.stops||[]).slice().sort((mt,gt)=>mt.offset-gt.offset)};if(P.gradientTransform&&(j.gradientTransform=new Kt,D(P.gradientTransform,j.gradientTransform)),F.type==="linearGradient")j.x1=P.x1!==void 0?ut(P.x1):0,j.y1=P.y1!==void 0?ut(P.y1):0,j.x2=P.x2!==void 0?ut(P.x2):Z==="objectBoundingBox"?1:0,j.y2=P.y2!==void 0?ut(P.y2):0;else{let mt=Z==="objectBoundingBox"?.5:0,gt=Z==="objectBoundingBox"?.5:0;j.cx=P.cx!==void 0?ut(P.cx):mt,j.cy=P.cy!==void 0?ut(P.cy):mt,j.r=P.r!==void 0?ut(P.r):gt,j.fx=P.fx!==void 0?ut(P.fx):j.cx,j.fy=P.fy!==void 0?ut(P.fy):j.cy}K[b]=j}}function M(N,I){I=Object.assign({},I);let R={};if(N.hasAttribute("class")){let b=N.getAttribute("class").split(/\s/).filter(Boolean).map(F=>F.trim());for(let F=0;F<b.length;F++)R=Object.assign(R,ct["."+b[F]])}N.hasAttribute("id")&&(R=Object.assign(R,ct["#"+N.getAttribute("id")]));function B(b,F,P){P===void 0&&(P=function(j){return j}),N.hasAttribute(b)&&(I[F]=P(N.getAttribute(b))),R[F]&&(I[F]=P(R[F])),N.style&&N.style[b]!==""&&(I[F]=P(N.style[b]))}function st(b){return Math.max(0,Math.min(1,S(b)))}function yt(b){return Math.max(0,S(b))}return B("fill","fill"),B("fill-opacity","fillOpacity",st),B("fill-rule","fillRule"),B("opacity","opacity",st),B("stroke","stroke"),B("stroke-opacity","strokeOpacity",st),B("stroke-width","strokeWidth",yt),B("stroke-linejoin","strokeLineJoin"),B("stroke-linecap","strokeLineCap"),B("stroke-miterlimit","strokeMiterLimit",yt),B("visibility","visibility"),I}function m(N,I){return N-(I-N)}function f(N,I,R){if(typeof N!="string")throw new TypeError("Invalid input: "+typeof N);let B={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},st=0,yt=1,b=2,F=3,P=st,Z=!0,j="",ut="",mt=[];function gt(Ct,C,_){let W=new SyntaxError('Unexpected character "'+Ct+'" at index '+C+".");throw W.partial=_,W}function q(){j!==""&&(ut===""?mt.push(Number(j)):mt.push(Number(j)*Math.pow(10,Number(ut)))),j="",ut=""}let y,Dt=N.length;for(let Ct=0;Ct<Dt;Ct++){if(y=N[Ct],Array.isArray(I)&&I.includes(mt.length%R)&&B.FLAGS.test(y)){P=yt,j=y,q();continue}if(P===st){if(B.WHITESPACE.test(y))continue;if(B.DIGIT.test(y)||B.SIGN.test(y)){P=yt,j=y;continue}if(B.POINT.test(y)){P=b,j=y;continue}B.COMMA.test(y)&&(Z&&gt(y,Ct,mt),Z=!0)}if(P===yt){if(B.DIGIT.test(y)){j+=y;continue}if(B.POINT.test(y)){j+=y,P=b;continue}if(B.EXP.test(y)){P=F;continue}B.SIGN.test(y)&&j.length===1&&B.SIGN.test(j[0])&&gt(y,Ct,mt)}if(P===b){if(B.DIGIT.test(y)){j+=y;continue}if(B.EXP.test(y)){P=F;continue}B.POINT.test(y)&&j[j.length-1]==="."&&gt(y,Ct,mt)}if(P===F){if(B.DIGIT.test(y)){ut+=y;continue}if(B.SIGN.test(y)){if(ut===""){ut+=y;continue}ut.length===1&&B.SIGN.test(ut)&&gt(y,Ct,mt)}}B.WHITESPACE.test(y)?(q(),P=st,Z=!1):B.COMMA.test(y)?(q(),P=st,Z=!0):B.SIGN.test(y)?(q(),P=yt,j=y):B.POINT.test(y)?(q(),P=b,j=y):gt(y,Ct,mt)}return q(),mt}let T=["mm","cm","in","pt","pc","px"],L={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function S(N){let I="px";if(typeof N=="string"||N instanceof String)for(let B=0,st=T.length;B<st;B++){let yt=T[B];if(N.endsWith(yt)){I=yt,N=N.substring(0,N.length-yt.length);break}}let R;return I==="px"&&e.defaultUnit!=="px"?R=L.in[e.defaultUnit]/e.defaultDPI:(R=L[I][e.defaultUnit],R<0&&(R=L[I].in*e.defaultDPI)),R*parseFloat(N)}function E(N){if(!(N.hasAttribute("transform")||N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))))return null;let I=w(N);return Y.length>0&&I.premultiply(Y[Y.length-1]),Yt.copy(I),Y.push(I),I}function w(N){let I=new Kt;if(N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))){let R=S(N.getAttribute("x")||0),B=S(N.getAttribute("y")||0);I.makeTranslation(R,B)}return N.hasAttribute("transform")&&D(N.getAttribute("transform"),I),I}function D(N,I){let R=rt,B=N.split(")");for(let st=B.length-1;st>=0;st--){let yt=B[st].trim();if(yt==="")continue;let b=yt.indexOf("("),F=yt.length;if(b>0&&b<F){let P=yt.slice(0,b),Z=f(yt.slice(b+1));switch(R.identity(),P){case"translate":if(Z.length>=1){let j=Z[0],ut=0;Z.length>=2&&(ut=Z[1]),R.makeTranslation(j,ut)}break;case"rotate":if(Z.length>=1){let j=0,ut=0,mt=0;j=Z[0]*Math.PI/180,Z.length>=3&&(ut=Z[1],mt=Z[2]),ot.makeTranslation(-ut,-mt),ft.makeRotation(j),At.multiplyMatrices(ft,ot),ot.makeTranslation(ut,mt),R.multiplyMatrices(ot,At)}break;case"scale":if(Z.length>=1){let j=Z[0],ut=j;Z.length>=2&&(ut=Z[1]),R.makeScale(j,ut)}break;case"skewX":Z.length===1&&R.set(1,Math.tan(Z[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Z.length===1&&R.set(1,0,0,Math.tan(Z[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Z.length===6&&R.set(Z[0],Z[2],Z[4],Z[1],Z[3],Z[5],0,0,1);break}I.premultiply(R)}}return I}function x(N,I){function R(b){Jt.set(b.x,b.y,1).applyMatrix3(I),b.set(Jt.x,Jt.y)}function B(b){let F=b.xRadius,P=b.yRadius,Z=Math.cos(b.aRotation),j=Math.sin(b.aRotation),ut=new k(F*Z,F*j,0),mt=new k(-P*j,P*Z,0),gt=ut.applyMatrix3(I),q=mt.applyMatrix3(I),y=rt.set(gt.x,q.x,0,gt.y,q.y,0,0,0,1),Dt=ot.copy(y).invert(),_=ft.copy(Dt).transpose().multiply(Dt).elements,W=V(_[0],_[1],_[4]),Q=Math.sqrt(W.rt1),ht=Math.sqrt(W.rt2);if(b.xRadius=1/Q,b.yRadius=1/ht,b.aRotation=Math.atan2(W.sn,W.cs),!((b.aEndAngle-b.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let Et=ot.set(Q,0,0,0,ht,0,0,0,1),dt=ft.set(W.cs,W.sn,0,-W.sn,W.cs,0,0,0,1),at=Et.multiply(dt).multiply(y),Rt=Wt=>{let{x:Nt,y:Pt}=new k(Math.cos(Wt),Math.sin(Wt),0).applyMatrix3(at);return Math.atan2(Pt,Nt)};b.aStartAngle=Rt(b.aStartAngle),b.aEndAngle=Rt(b.aEndAngle),A(I)&&(b.aClockwise=!b.aClockwise)}}function st(b){let F=H(I),P=G(I);b.xRadius*=F,b.yRadius*=P;let Z=F>Number.EPSILON?Math.atan2(I.elements[1],I.elements[0]):Math.atan2(-I.elements[3],I.elements[4]);b.aRotation+=Z,A(I)&&(b.aStartAngle*=-1,b.aEndAngle*=-1,b.aClockwise=!b.aClockwise)}let yt=N.subPaths;for(let b=0,F=yt.length;b<F;b++){let Z=yt[b].curves;for(let j=0;j<Z.length;j++){let ut=Z[j];ut.isLineCurve?(R(ut.v1),R(ut.v2)):ut.isCubicBezierCurve?(R(ut.v0),R(ut.v1),R(ut.v2),R(ut.v3)):ut.isQuadraticBezierCurve?(R(ut.v0),R(ut.v1),R(ut.v2)):ut.isEllipseCurve&&(Mt.set(ut.aX,ut.aY),R(Mt),ut.aX=Mt.x,ut.aY=Mt.y,z(I)?B(ut):st(ut))}}}function A(N){let I=N.elements;return I[0]*I[4]-I[1]*I[3]<0}function z(N){let I=N.elements,R=I[0]*I[3]+I[1]*I[4];if(R===0)return!1;let B=H(N),st=G(N);return Math.abs(R/(B*st))>Number.EPSILON}function H(N){let I=N.elements;return Math.sqrt(I[0]*I[0]+I[1]*I[1])}function G(N){let I=N.elements;return Math.sqrt(I[3]*I[3]+I[4]*I[4])}function et(N){let I=N.elements,R=I[0]*I[4]-I[1]*I[3];return Math.sqrt(Math.abs(R))}function V(N,I,R){let B,st,yt,b,F,P=N+R,Z=N-R,j=Math.sqrt(Z*Z+4*I*I);return P>0?(B=.5*(P+j),F=1/B,st=N*F*R-I*F*I):P<0?st=.5*(P-j):(B=.5*j,st=-.5*j),Z>0?yt=Z+j:yt=Z-j,Math.abs(yt)>2*Math.abs(I)?(F=-2*I/yt,b=1/Math.sqrt(1+F*F),yt=F*b):Math.abs(I)===0?(yt=1,b=0):(F=-.5*yt/I,yt=1/Math.sqrt(1+F*F),b=F*yt),Z>0&&(F=yt,yt=-b,b=F),{rt1:B,rt2:st,cs:yt,sn:b}}let $=[],ct={},K={},Y=[],rt=new Kt,ot=new Kt,ft=new Kt,At=new Kt,Mt=new xt,Jt=new k,Yt=new Kt,le=new DOMParser().parseFromString(t,"image/svg+xml");return g(le),n(le.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:$,gradients:K,xml:le.documentElement}}static createFillMaterial(t){let e=t.userData.style;if(e.fill===void 0||e.fill==="none")return null;let n=t.color,s=null,r=Ou.exec(e.fill);if(r){let o=t.userData.gradients&&t.userData.gradients[r[1]];s=V0(o,t)}let a=new tn({opacity:e.fillOpacity*(e.opacity||1),transparent:!0,side:Cn,depthWrite:!1});return s!==null?a.map=s:a.color=n,a}static createStrokeMaterial(t){let e=t.userData.style;return e.stroke===void 0||e.stroke==="none"?null:(Ou.test(e.stroke)&&console.warn("THREE.SVGLoader: Gradient strokes are not supported."),new tn({color:new oe().setStyle(e.stroke,$r),opacity:e.strokeOpacity*(e.opacity||1),transparent:!0,side:Cn,depthWrite:!1}))}static createShapes(t){return console.warn("SVGLoader: createShapes() is deprecated. Use shapePath.toShapes() instead."),t.toShapes()}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){let r=[],a=[],o=[];if(i.pointsToStrokeWithBuffers(t,e,n,s,r,a,o)===0)return null;let c=new Je;return c.setAttribute("position",new xe(r,3)),c.setAttribute("normal",new xe(a,3)),c.setAttribute("uv",new xe(o,2)),c}static pointsToStrokeWithBuffers(t,e,n,s,r,a,o,c){let l=new xt,h=new xt,d=new xt,u=new xt,p=new xt,g=new xt,M=new xt,m=new xt,f=new xt,T=new xt,L=new xt,S=new xt,E=new xt,w=new xt,D=new xt,x=new xt,A=new xt;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,t=yt(t);let z=t.length;if(z<2)return 0;let H=t[0].equals(t[z-1]),G,et=t[0],V,$=e.strokeWidth/2,ct=1/(z-1),K=0,Y,rt,ot,ft,At=!1,Mt=0,Jt=c*3,Yt=c*2;le(t[0],t[1],l).multiplyScalar($),m.copy(t[0]).sub(l),f.copy(t[0]).add(l),T.copy(m),L.copy(f);for(let b=1;b<z;b++){G=t[b],b===z-1?H?V=t[1]:V=void 0:V=t[b+1];let F=l;if(le(et,G,F),d.copy(F).multiplyScalar($),S.copy(G).sub(d),E.copy(G).add(d),Y=K+ct,rt=!1,V!==void 0){le(G,V,h),d.copy(h).multiplyScalar($),w.copy(G).sub(d),D.copy(G).add(d),ot=!0,d.subVectors(V,et),F.dot(d)<0&&(ot=!1),b===1&&(At=ot),d.subVectors(V,G),d.normalize();let P=Math.abs(F.dot(d));if(P>Number.EPSILON){let Z=$/P;d.multiplyScalar(-Z),u.subVectors(G,et),p.copy(u).setLength(Z).add(d),x.copy(p).negate();let j=p.length(),ut=u.length();u.divideScalar(ut),g.subVectors(V,G);let mt=g.length();if(g.divideScalar(mt),u.dot(x)<ut&&g.dot(x)<mt&&(rt=!0),A.copy(p).add(G),x.add(G),rt){let gt=ot?f:m,q=(A.x-gt.x)*(x.y-gt.y)-(A.y-gt.y)*(x.x-gt.x);(ot&&q<0||!ot&&q>0)&&x.copy(gt)}switch(ft=!1,rt?ot?(D.copy(x),E.copy(x)):(w.copy(x),S.copy(x)):I(),e.strokeLineJoin){case"bevel":R(ot,rt,Y);break;case"round":B(ot,rt),ot?N(G,S,w,Y,0):N(G,D,E,Y,1);break;default:let gt=$*e.strokeMiterLimit/j;if(gt<1)if(e.strokeLineJoin!=="miter-clip"){R(ot,rt,Y);break}else B(ot,rt),ot?(g.subVectors(A,S).multiplyScalar(gt).add(S),M.subVectors(A,w).multiplyScalar(gt).add(w),U(S,Y,0),U(g,Y,0),U(G,Y,.5),U(G,Y,.5),U(g,Y,0),U(M,Y,0),U(G,Y,.5),U(M,Y,0),U(w,Y,0)):(g.subVectors(A,E).multiplyScalar(gt).add(E),M.subVectors(A,D).multiplyScalar(gt).add(D),U(E,Y,1),U(g,Y,1),U(G,Y,.5),U(G,Y,.5),U(g,Y,1),U(M,Y,1),U(G,Y,.5),U(M,Y,1),U(D,Y,1));else rt?(ot?(U(f,K,1),U(m,K,0),U(A,Y,0),U(f,K,1),U(A,Y,0),U(x,Y,1)):(U(f,K,1),U(m,K,0),U(A,Y,1),U(m,K,0),U(x,Y,0),U(A,Y,1)),ot?w.copy(A):D.copy(A)):ot?(U(S,Y,0),U(A,Y,0),U(G,Y,.5),U(G,Y,.5),U(A,Y,0),U(w,Y,0)):(U(E,Y,1),U(A,Y,1),U(G,Y,.5),U(G,Y,.5),U(A,Y,1),U(D,Y,1)),ft=!0;break}}else I()}else I();!H&&b===z-1&&st(t[0],T,L,ot,!0,K),K=Y,et=G,m.copy(w),f.copy(D)}if(!H)st(G,S,E,ot,!1,Y);else if(rt&&r){let b=A,F=x;At!==ot&&(b=x,F=A),ot?(ft||At)&&(F.toArray(r,0),F.toArray(r,9),ft&&b.toArray(r,3)):(ft||!At)&&(F.toArray(r,3),F.toArray(r,9),ft&&b.toArray(r,0))}if(r){let b=[new xt,new xt,new xt],F=c*3;for(let P=F;P<Jt;P+=9)b[0].set(r[P],r[P+1]),b[1].set(r[P+3],r[P+4]),b[2].set(r[P+6],r[P+7]),Mn.area(b)<0&&(r[P+3]=b[0].x,r[P+4]=b[0].y)}return Mt;function le(b,F,P){return P.subVectors(F,b),P.set(-P.y,P.x).normalize()}function U(b,F,P){r&&(r[Jt]=b.x,r[Jt+1]=b.y,r[Jt+2]=0,a&&(a[Jt]=0,a[Jt+1]=0,a[Jt+2]=1),Jt+=3,o&&(o[Yt]=F,o[Yt+1]=P,Yt+=2)),Mt+=3}function N(b,F,P,Z,j){l.copy(F).sub(b).normalize(),h.copy(P).sub(b).normalize();let ut=Math.PI,mt=l.dot(h);Math.abs(mt)<1&&(ut=Math.abs(Math.acos(mt))),ut/=n,d.copy(F);for(let gt=0,q=n-1;gt<q;gt++)u.copy(d).rotateAround(b,ut),U(d,Z,j),U(u,Z,j),U(b,Z,.5),d.copy(u);U(d,Z,j),U(P,Z,j),U(b,Z,.5)}function I(){U(f,K,1),U(m,K,0),U(S,Y,0),U(f,K,1),U(S,Y,0),U(E,Y,1)}function R(b,F,P){F?b?(U(f,K,1),U(m,K,0),U(S,Y,0),U(f,K,1),U(S,Y,0),U(x,Y,1),U(S,P,0),U(w,P,0),U(x,P,.5)):(U(f,K,1),U(m,K,0),U(E,Y,1),U(m,K,0),U(x,Y,0),U(E,Y,1),U(E,P,1),U(x,P,0),U(D,P,1)):b?(U(S,P,0),U(w,P,0),U(G,P,.5)):(U(E,P,1),U(D,P,0),U(G,P,.5))}function B(b,F){F&&(b?(U(f,K,1),U(m,K,0),U(S,Y,0),U(f,K,1),U(S,Y,0),U(x,Y,1),U(S,K,0),U(G,Y,.5),U(x,Y,1),U(G,Y,.5),U(w,K,0),U(x,Y,1)):(U(f,K,1),U(m,K,0),U(E,Y,1),U(m,K,0),U(x,Y,0),U(E,Y,1),U(E,K,1),U(x,Y,0),U(G,Y,.5),U(G,Y,.5),U(x,Y,0),U(D,K,1)))}function st(b,F,P,Z,j,ut){switch(e.strokeLineCap){case"round":j?N(b,P,F,ut,.5):N(b,F,P,ut,.5);break;case"square":if(j)l.subVectors(F,b),h.set(l.y,-l.x),d.addVectors(l,h).add(b),u.subVectors(h,l).add(b),Z?(d.toArray(r,3),u.toArray(r,0),u.toArray(r,9)):(d.toArray(r,3),o[7]===1?u.toArray(r,9):d.toArray(r,9),u.toArray(r,0));else{l.subVectors(P,b),h.set(l.y,-l.x),d.addVectors(l,h).add(b),u.subVectors(h,l).add(b);let mt=r.length;Z?(d.toArray(r,mt-3),u.toArray(r,mt-6),u.toArray(r,mt-12)):(u.toArray(r,mt-6),d.toArray(r,mt-3),u.toArray(r,mt-12))}break;default:break}}function yt(b){let F=!1;for(let Z=1,j=b.length-1;Z<j;Z++)if(b[Z].distanceTo(b[Z+1])<s){F=!0;break}if(!F)return b;let P=[];P.push(b[0]);for(let Z=1,j=b.length-1;Z<j;Z++)b[Z].distanceTo(b[Z+1])>=s&&P.push(b[Z]);return P.push(b[b.length-1]),P}}},Ou=/^\s*url\(\s*(?:["']\s*)?#([^)'"\s]+)(?:\s*["'])?\s*\)\s*$/;function V0(i,t,e=256){if(!i||!Array.isArray(i.stops)||i.stops.length===0)return null;let n=t.userData.transform,s=i.gradientUnits==="objectBoundingBox",r=null;if(s&&(r=G0(t,n),r===null))return null;function a(d,u,p){p.set(d,u,1),i.gradientTransform&&p.applyMatrix3(i.gradientTransform),s&&p.set(r.minX+p.x*r.width,r.minY+p.y*r.height,1),n&&p.applyMatrix3(n)}let o=document.createElement("canvas"),c;if(i.type==="linearGradient"){o.width=e,o.height=1;let d=o.getContext("2d"),u=d.createLinearGradient(0,0,e,0);Bu(u,i.stops),d.fillStyle=u,d.fillRect(0,0,e,1);let p=new k,g=new k;a(i.x1,i.y1,p),a(i.x2,i.y2,g);let M=g.x-p.x,m=g.y-p.y,f=M*M+m*m||1e-20,T=M/f,L=m/f,S=-(T*p.x+L*p.y);c=new Kt().set(T,L,S,0,0,.5,0,0,1)}else{let d=i.cx,u=i.cy,p=i.fx,g=i.fy,M=i.r;if(i.gradientTransform){let x=new k;x.set(d,u,1).applyMatrix3(i.gradientTransform),d=x.x,u=x.y,x.set(p,g,1).applyMatrix3(i.gradientTransform),p=x.x,g=x.y}if(s&&(d=r.minX+d*r.width,u=r.minY+u*r.height,p=r.minX+p*r.width,g=r.minY+g*r.height,M=M*Math.sqrt((r.width*r.width+r.height*r.height)/2)),M<=0)return null;o.width=e,o.height=e;let m=o.getContext("2d"),f=d-M,T=u-M,L=2*M,S=e/L;m.setTransform(S,0,0,S,-f*S,-T*S);let E=m.createRadialGradient(p,g,0,d,u,M);Bu(E,i.stops),m.fillStyle=E,m.fillRect(f,T,L,L);let w=n?n.clone().invert():new Kt;c=new Kt().set(1/L,0,-f/L,0,1/L,-T/L,0,0,1).multiply(w)}let l=new Xi(o);l.colorSpace=$r,l.flipY=!1,l.matrixAutoUpdate=!1,l.matrix=c;let h=i.spreadMethod==="reflect"?vs:i.spreadMethod==="repeat"?ys:In;return l.wrapS=h,l.wrapT=h,l}function G0(i,t){let e=t?t.clone().invert():null,n=new xt,s=new Ns;for(let r of i.subPaths)for(let a of r.getPoints())n.copy(a),e&&n.applyMatrix3(e),s.expandByPoint(n);return s.isEmpty()?null:{minX:s.min.x,minY:s.min.y,width:s.max.x-s.min.x,height:s.max.y-s.min.y}}function Bu(i,t){let e=new oe;for(let n of t){let s=n.color;if(n.opacity<1){e.setStyle(n.color,$r);let r=/rgb\(([^)]+)\)/.exec(e.getStyle($r));r&&(s=`rgba(${r[1]},${n.opacity})`)}i.addColorStop(Math.max(0,Math.min(1,n.offset)),s)}}window.mkStudio=!0;var ye=window,xn=document,Ys=xn.documentElement,Ve=(i,t)=>(t||xn).querySelector(i),Zn=(i,t)=>Array.from((t||xn).querySelectorAll(i)),Fe=ye.gsap,dn=ye.ScrollTrigger,Zs=ye.SplitText,Bc=!!(ye.matchMedia&&ye.matchMedia("(prefers-reduced-motion: reduce)").matches),ts=!!(ye.matchMedia&&ye.matchMedia("(hover: hover) and (pointer: fine)").matches),ke=!!(Fe&&dn)&&Ys.classList.contains("motion")&&!Bc;ke||Ys.classList.remove("motion");var _i=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),be=(i,t,e)=>i+(t-i)*e,Ze=(i,t,e)=>_i((i-t)/(e-t)),gi=i=>i>=1?1:1-Math.pow(2,-10*i),Xs=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Qi=i=>1+2.7*Math.pow(i-1,3)+1.7*Math.pow(i-1,2);function Uc(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var Fn={a:ke?0:1,v:ke?1:0},Fc={landed:null};e_();n_();var Yn=t_(),qs=Q0(),xi=null;ke&&(Fe.registerPlugin(dn),Zs&&Fe.registerPlugin(Zs),"scrollRestoration"in history&&(history.scrollRestoration="manual"),ts&&ye.Lenis&&(xi=new ye.Lenis({duration:1.15,smoothWheel:!0}),xi.on("scroll",dn.update),Fe.ticker.add(i=>xi.raf(i*1e3)),Fe.ticker.lagSmoothing(0),Ys.classList.add("lenis")));i_();var Oc=ke?X0():null;ye.mkHero=Oc;var H0=Ve("#gl"),on=null;try{on=new Ko({canvas:H0,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{on=null}on?(Ys.classList.add("gl"),W0()):(Ys.classList.add("no-gl"),Fn.v=0,Fn.a=1,ke&&(zu(),dn.create({trigger:".steps-track",start:"top 72%",end:"bottom 55%",onUpdate:i=>qs.set(i.progress),onRefresh:()=>qs.measure()})));if(Oc){let i=0,t=0,e=n=>{i=t&&n-t<50?i+1:0,t=n,i>=2?Oc.play():requestAnimationFrame(e)};requestAnimationFrame(e)}function W0(){on.setClearColor(0,0),on.outputColorSpace=Ye,on.toneMapping=Fr,on.toneMappingExposure=1;let i=Math.min(ye.devicePixelRatio||1,ts?2:1.75);on.setPixelRatio(i);let t=new Hi,e=new Gs(on);t.environment=e.fromScene(new el,.04).texture,e.dispose();let n=new Ls(16777215,1.5);n.position.set(-6,9,12),t.add(n);let s=new Ls(14674175,.6);s.position.set(8,-3,6),t.add(s),t.add(new Dr(16777215,.22));let r=30,a=60,o=new en(r,1,1,400);o.position.set(0,0,a);let c=1,l=1,h=1,d="";function u(){c=ye.innerWidth,l=ye.innerHeight,on.setSize(c,l,!1),d="",o.aspect=c/l,o.updateProjectionMatrix(),h=2*a*Math.tan(r*Math.PI/360)/l}u(),ye.addEventListener("resize",u);let p=()=>new k,g=(lt,J,_t)=>(_t||p()).set((lt-c/2)*h,-(J-l/2)*h,0),M={yellow:new ni({color:16631808,roughness:.26,metalness:0,clearcoat:1,clearcoatRoughness:.06}),navy:new ni({color:1845564,roughness:.42,clearcoat:.7,clearcoatRoughness:.2,envMapIntensity:.55}),navyMatte:new ni({color:1845564,roughness:.55,specularIntensity:.22,clearcoat:.18,clearcoatRoughness:.35,envMapIntensity:.3}),white:new ni({color:16250868,roughness:.5,clearcoat:.35,clearcoatRoughness:.3}),paper:new ni({color:15133166,roughness:.6,clearcoat:.2}),line:new wn({color:13225686,roughness:.7}),lineDark:new wn({color:1845564,roughness:.6}),chip:new wn({color:15659251,roughness:.65}),green:new ni({color:2995050,roughness:.3,clearcoat:.8})},m=(lt,J,_t,Tt,St=4)=>new tl(lt,J,_t,St,Math.min(Tt,lt/2-.001,J/2-.001,_t/2-.001)),f=(lt,J)=>new Be(lt,J),T=new wr(1,64,48);function L(lt,J,_t){let Tt=new pi,St=-lt/2,Ot=-J/2;Tt.moveTo(St+_t,Ot),Tt.lineTo(St+lt-_t,Ot),Tt.absarc(St+lt-_t,Ot+_t,_t,-Math.PI/2,0,!1),Tt.lineTo(St+lt,Ot+J-_t),Tt.absarc(St+lt-_t,Ot+J-_t,_t,0,Math.PI/2,!1),Tt.lineTo(St+_t,Ot+J),Tt.absarc(St+_t,Ot+J-_t,_t,Math.PI/2,Math.PI,!1),Tt.lineTo(St,Ot+_t),Tt.absarc(St+_t,Ot+_t,_t,Math.PI,Math.PI*1.5,!1);let he=new Er(Tt,10),ee=he.attributes.position,ie=he.attributes.uv;for(let pe=0;pe<ie.count;pe++)ie.setXY(pe,(ee.getX(pe)-St)/lt,(ee.getY(pe)-Ot)/J);return he}let S=!0,E=!1;function w(lt,J,_t){let Tt=xn.createElement("canvas");Tt.width=lt,Tt.height=J;let St=new Xi(Tt);return St.colorSpace=Ye,St.anisotropy=Math.min(8,on.capabilities.getMaxAnisotropy()),St.userData.draw=()=>{let Ot=Tt.getContext("2d");Ot.clearRect(0,0,lt,J),_t(Ot,lt,J),St.needsUpdate=!0},St.userData.draw(),St}let D={clock:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5V12l3 2",phone:"M5.5 3.5h3.2l1.8 4.6-2.3 1.5a11 11 0 0 0 6.2 6.2l1.5-2.3 4.6 1.8v3.2a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2z",chat:"M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.5-4.4a8.4 8.4 0 1 1 15.5-4.5z",camera:"M4 8h3l1.6-2.5h6.8L17 8h3v11H4zM12 9.9a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6z"};function x(lt,J,_t,Tt,St,Ot){ye.Path2D&&(lt.save(),lt.translate(_t-St/2,Tt-St/2),lt.scale(St/24,St/24),lt.strokeStyle=Ot,lt.lineWidth=2.1,lt.lineCap="round",lt.lineJoin="round",lt.stroke(new Path2D(D[J])),lt.restore())}function A(lt,J,_t,Tt,St){let Ot=St;for(lt.font=_t.replace("$",Ot);lt.measureText(J).width>Tt&&Ot>12;)Ot-=2,lt.font=_t.replace("$",Ot);return Ot}let z="../assets/img/",H={};function G(lt){return H[lt]||(H[lt]=new Promise(J=>{let _t=new Image;_t.decoding="async",_t.onload=()=>J(_t),_t.onerror=()=>J(null),_t.src=z+lt})),H[lt]}let et=new Wi(new Uint8Array([214,218,224,255]),1,1);et.colorSpace=Ye,et.needsUpdate=!0,et.userData.keep=!0;let V=lt=>new wn(Object.assign({map:et,roughness:.55},lt));function $(){let lt=V({roughness:.8});return lt.onBeforeCompile=J=>{J.fragmentShader=J.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
float mkL = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
diffuseColor.rgb = mix(vec3(mkL), diffuseColor.rgb, 0.25) * vec3(0.62, 0.6, 0.56) + vec3(0.035, 0.03, 0.02);`)},lt.customProgramCacheKey=()=>"mk-dull",lt}let ct={};function K(lt,J,_t=1,Tt=.5,St=.5,Ot,he=0){G(lt).then(ee=>{if(!ee)return;if(!ct[lt]){let Qt=new sn(ee);Qt.colorSpace=Ye,Qt.anisotropy=4,Qt.needsUpdate=!0,ct[lt]=Qt}let ie=ct[lt].clone(),pe=ee.naturalWidth/ee.naturalHeight,me=1,Le=1;pe>J?me=J/pe:Le=pe/J,me/=_t,Le/=_t,ie.repeat.set(me,Le),ie.offset.set((1-me)*Tt,(1-Le)*St),he&&(ie.center.set(.5,.5),ie.rotation=he),Ot.map&&Ot.map!==ie&&!Ot.map.userData.keep&&Ot.map.dispose(),Ot.map=ie,Ot.color.set(16777215),S=!0})}let Y=f(T,M.yellow);Y.renderOrder=2,t.add(Y),Y.visible=!1;let rt=[];function ot(lt,J,_t){let Tt=new He;t.add(Tt);let St={el:lt,g:Tt,designH:J,p:0,visible:!1,..._t(Tt)};return rt.push(St),St}function ft(lt){let J=lt.el.getBoundingClientRect();if(lt.visible=J.bottom>-l*.3&&J.top<l*1.3&&J.height>0,lt.g.visible=lt.visible,J.height<=0)return;g(J.left+J.width/2,J.top+J.height/2,lt.g.position);let _t=Math.min(J.height,J.width/(lt.aspect||.9))*h/(lt.designH*(c>=960&&lt.fillD||1));lt.g.scale.setScalar(_t)}let At=ot(Ve("[data-stage=site]"),10.7,lt=>{let J=new He;lt.add(J);let _t=f(m(5.2,9.6,.3,.42,6),M.white);J.add(_t);let Tt=new He;J.add(Tt),Tt.add(f(m(4.6,1,.12,.2),M.navy));let St=w(1024,220,(v,O,it)=>{let tt=Yn.name(),nt=A(v,tt,'760 $px "Mona Sans"',O-40,120);v.fillStyle="#f5f5f2",v.textBaseline="middle",v.fillText(tt,20,it/2+nt*.04)}),Ot=f(new Gn(4.3,.92),new tn({map:St,transparent:!0,toneMapped:!1}));Ot.position.z=.07,Tt.add(Ot);let he=V(),ee=f(L(4.6,3.1,.28),he);J.add(ee);let ie=f(m(3.5,.36,.07,.1),M.lineDark),pe=[4.2,3.7,2.7].map(v=>f(m(v,.16,.05,.06),M.line)),me=[ie].concat(pe);me.forEach(v=>{v.geometry.translate(v.geometry.parameters.width/2,0,0),J.add(v)});let Le=new He;Le.add(f(m(2.1,.6,.1,.25),M.chip));let Qt=f(T,M.green);Qt.scale.setScalar(.13),Qt.position.set(-.68,0,.08),Le.add(Qt);let Te=f(m(1.1,.13,.04,.05),M.line);Te.position.set(.12,0,.06),Le.add(Te);let Me=f(m(1.7,.6,.1,.25),M.chip);J.add(Le,Me);let wt=new He;J.add(wt),wt.add(f(m(2.9,.9,.16,.42),M.navy));let ge=w(512,160,(v,O,it)=>{v.fillStyle="#f5f5f2",v.font='700 64px "Inter"',v.textAlign="center",v.textBaseline="middle",v.fillText("Prenota",O/2,it/2+4)}),Ee=f(new Gn(2.4,.75),new tn({map:ge,transparent:!0,toneMapped:!1}));Ee.position.z=.09,wt.add(Ee);let re=f(new Yi(.62,.7,64),new tn({color:16631808,transparent:!0,opacity:0,depthWrite:!1}));J.add(re);let te=new k(1.62,-3.95,.15+.56);return re.position.set(te.x,te.y,.16),{aspect:.62,fillD:1.22,card:J,nameTex:St,photoM:he,FAB:te,fabR:.56,ring:re,pose(v,O){let it=gi(Ze(v,0,.18));J.rotation.set(be(.5,.1,it)+Math.sin(O*.7)*.015,be(-1,-.34,it)+Xs(Ze(v,.6,1))*.5,be(-.12,0,it)),J.position.set(0,be(-3,0,it)+Math.sin(O*.9)*.06,0),J.scale.setScalar(be(.55,1,it));let tt=gi(Ze(v,.1,.25));Tt.position.set(0,be(7,3.95,tt),be(3,.22,tt)),Tt.scale.setScalar(be(.6,1,tt));let nt=gi(Ze(v,.18,.33));ee.position.set(0,1.6,be(6,.16,nt)),ee.scale.setScalar(be(1.35,1,nt)),ee.visible=nt>.001,me.forEach((Ht,qt)=>{let ce=gi(Ze(v,.28+qt*.035,.4+qt*.035));Ht.scale.set(Math.max(ce,.001),1,1),Ht.visible=ce>.002,Ht.position.set(-2.3,[-.45,-1.05,-1.4,-1.75][qt],.18)});let Bt=Qi(Ze(v,.4,.48)),Vt=Qi(Ze(v,.44,.52));Le.position.set(-1.25,-2.55,.2),Le.scale.setScalar(Math.max(Bt,.001)),Me.position.set(.85,-2.55,.2),Me.scale.setScalar(Math.max(Vt,.001));let Ut=Qi(Ze(v,.47,.56));wt.position.set(-.85,-3.95,.22),wt.scale.setScalar(Math.max(Ut,.001))}}}),Mt=ot(Ve("[data-stage=map]"),12,lt=>{let J=new He;lt.add(J);let _t=new He;J.add(_t),_t.add(f(m(9.4,6.8,.36,.5,6),M.navyMatte));let Tt=w(1024,740,(wt,ge,Ee)=>{let re=Uc(7);wt.fillStyle="#eceff3",wt.fillRect(0,0,ge,Ee),wt.fillStyle="#c9e5c4",wt.beginPath(),wt.ellipse(170,560,190,120,-.3,0,Math.PI*2),wt.fill(),wt.strokeStyle="#9fcbe8",wt.lineWidth=46,wt.lineCap="round",wt.beginPath(),wt.moveTo(-40,120),wt.bezierCurveTo(260,200,420,40,700,150),wt.bezierCurveTo(860,210,960,110,1080,160),wt.stroke(),wt.fillStyle="#dde2e9";for(let te=0;te<26;te++){let v=40+te%7*140+re()*30,O=250+Math.floor(te/7)*120+re()*20;wt.beginPath(),wt.roundRect?wt.roundRect(v,O,96+re()*20,76+re()*14,10):wt.rect(v,O,96,76),wt.fill()}wt.strokeStyle="#ffffff",wt.lineWidth=22,[[0,230,1024,250],[0,470,1024,440],[300,0,330,740],[640,0,610,740],[0,700,1024,600]].forEach(te=>{wt.beginPath(),wt.moveTo(te[0],te[1]),wt.lineTo(te[2],te[3]),wt.stroke()}),wt.strokeStyle="#ffd24a",wt.lineWidth=30,wt.beginPath(),wt.moveTo(-20,380),wt.bezierCurveTo(300,330,600,420,1050,330),wt.stroke()}),St=f(L(9,6.4,.36),new wn({map:Tt,roughness:.8}));St.position.z=.185,_t.add(St);let Ot=new k(.7,-.2,0),he=f(new _r(.24,1.9,40),M.navy);he.rotation.x=-Math.PI/2,he.geometry.translate(0,-.95,0);let ee=new He;ee.position.set(Ot.x,Ot.y,.19),ee.add(he),_t.add(ee);let ie=f(new ws(.9,48),new tn({color:1845564,transparent:!0,opacity:.18,depthWrite:!1}));ie.position.set(Ot.x+.25,Ot.y-.1,.19),_t.add(ie);let pe=[0,1,2].map(()=>{let wt=f(new Yi(.62,.74,64),new tn({color:16631808,transparent:!0,opacity:0,depthWrite:!1}));return wt.position.set(Ot.x,Ot.y,.2),_t.add(wt),wt}),me=[{ic:"clock",tx:"Orari giusti",at:[-3.1,1.6,2]},{ic:"phone",tx:"Chiama",at:[-2.9,-1.55,1.5]},{ic:"chat",tx:"WhatsApp",at:[3.4,1.9,2.6]},{ic:"camera",tx:"Foto vere",at:[3.3,-1.7,1.9]}].map(wt=>{let ge=new He;ge.add(f(m(2.9,1.1,.14,.3),M.white));let Ee=w(640,240,(te,v,O)=>{x(te,wt.ic,100,O/2,92,"#1c293c"),te.fillStyle="#1c293c",A(te,wt.tx,'650 $px "Inter"',v-190,76),te.textBaseline="middle",te.fillText(wt.tx,170,O/2+4)}),re=f(new Gn(2.64,.99),new tn({map:Ee,transparent:!0,toneMapped:!1}));return re.position.z=.08,ge.add(re),_t.add(ge),{grp:ge,at:wt.at}}),Le=new bn,Qt=new He;Qt.add(f(m(5,1.5,.16,.32),M.white));let Te=w(1024,300,(wt,ge,Ee)=>{let re=Yn.name();wt.fillStyle="#1c293c",A(wt,re,'760 $px "Mona Sans"',ge-70,112),wt.textBaseline="alphabetic",wt.fillText(re,36,150),wt.fillStyle="#56627a",wt.font='560 54px "Inter"',wt.fillText(Yn.cat()+" \xB7 ",36,236);let te=wt.measureText(Yn.cat()+" \xB7 ").width;wt.fillStyle="#1f9d58",wt.fillText("Aperto",36+te,236)}),Me=f(new Gn(4.7,1.38),new tn({map:Te,transparent:!0,toneMapped:!1}));return Me.position.z=.09,Qt.add(Me),_t.add(Qt),{aspect:.95,tilt:J,spin:_t,needleG:ee,rings:pe,cards:me,title:Qt,titleTex:Te,PIN:Ot,pinR:.6,headZ:.19+1.9+.42,pose(wt,ge){let Ee=gi(Ze(wt,0,.18));J.rotation.set(be(-1.4,-.84,Ee),0,0),J.position.set(0,be(-2.5,-.6,Ee),0),J.scale.setScalar(be(.7,1,Ee)),_t.rotation.z=be(.35,0,Ee)+Xs(Ze(wt,.66,1))*-.32+Math.sin(ge*.5)*.01,lt.updateWorldMatrix(!0,!0),_t.getWorldQuaternion(Le).invert();let re=gi(Ze(wt,.24,.34));ee.scale.set(1,1,Math.max(re,.001)),ee.visible=re>.002,me.forEach((v,O)=>{let it=Qi(Ze(wt,.38+O*.07,.5+O*.07));v.grp.position.set(v.at[0],v.at[1],be(.2,v.at[2],it)+Math.sin(ge*1.1+O)*.06),v.grp.quaternion.copy(Le),v.grp.scale.setScalar(Math.max(it,.001)*1.22),v.grp.visible=it>.002});let te=Qi(Ze(wt,.62,.74));Qt.position.set(-.2,3.9,be(.2,3.1,te)),Qt.quaternion.copy(Le),Qt.scale.setScalar(Math.max(te,.001)*1.12),Qt.visible=te>.002}}}),Jt=ot(Ve("[data-stage=grid]"),11.6,lt=>{let J=new He;lt.add(J),J.add(f(m(6.6,9.4,.26,.44,6),M.white));let _t=V({roughness:.6}),Tt=f(new ws(.78,64),_t);Tt.position.set(-2.3,3.55,.15),J.add(Tt);let St=f(new Ar(.95,.09,20,80),M.yellow);St.position.set(-2.3,3.55,.2),J.add(St);let Ot=w(1024,200,(Qt,Te,Me)=>{let wt=Yn.handle();Qt.fillStyle="#1b1b1b",A(Qt,wt,'700 $px "Inter"',Te-30,92),Qt.textBaseline="middle",Qt.fillText(wt,10,Me/2+4)}),he=f(new Gn(3.6,.7),new tn({map:Ot,transparent:!0,toneMapped:!1}));he.position.set(.55,3.85,.15),J.add(he),[2.6,1.8].forEach((Qt,Te)=>{let Me=f(m(Qt,.15,.04,.06),M.line);Me.position.set(-1.05+Qt/2,3.18-Te*.34,.15),J.add(Me)});let ee=1.98,ie=.08,pe=[],me=Uc(11);for(let Qt=0;Qt<9;Qt++){let Te=Qt%3,Me=Math.floor(Qt/3),wt=new He;wt.add(f(m(ee,ee,.1,.08,2),M.white));let ge=V(),Ee=$(),re=f(L(ee-.02,ee-.02,.08),ge);re.position.z=.052,wt.add(re);let te=f(L(ee-.02,ee-.02,.08),Ee);te.position.z=-.052,te.rotation.y=Math.PI,wt.add(te),J.add(wt),pe.push({grp:wt,front:ge,back:Ee,at:new k((Te-1)*(ee+ie),1.02-Me*(ee+ie),.22),from:new k((me()-.5)*18,(me()-.5)*16,2+me()*7),rot:new Ln((me()-.5)*3,(me()-.5)*5,(me()-.5)*2),delay:me()*.08})}return{aspect:.66,fillD:1.16,card:J,tiles:pe,ORDER:[0,1,2,5,4,3,6,7,8],avatar:Tt,avatarM:_t,avRing:St,handleTex:Ot,tileR:.42,flipAt:[],pose(Qt,Te){let Me=gi(Ze(Qt,0,.16));J.rotation.set(be(.35,.06,Me)+Math.sin(Te*.6)*.012,be(.9,.22,Me)-Xs(Ze(Qt,.86,1))*.36,0),J.scale.setScalar(be(.55,1,Me)),J.position.set(0,be(-2.5,0,Me),0),pe.forEach((ge,Ee)=>{let re=Xs(Ze(Qt,.05+ge.delay,.3+ge.delay));ge.grp.position.lerpVectors(ge.from,ge.at,re);let te=this.flipAt[Ee]!==void 0?gi(Ze(Qt,this.flipAt[Ee],this.flipAt[Ee]+.05)):0;ge.grp.rotation.set(ge.rot.x*(1-re),Math.PI+ge.rot.y*(1-re)-Math.PI*te,ge.rot.z*(1-re))});let wt=Qi(Ze(Qt,.9,.97));St.scale.setScalar(Math.max(wt,.001)),St.visible=wt>.002}}}),Yt=ot(Ve("[data-stage=logo]"),12.4,lt=>{let J=new He;lt.add(J);let _t=5.4,Tt=_t/540,St=new pi;St.absarc(0,0,_t,0,Math.PI*2,!1);let Ot=new Rs(St,{depth:.5,bevelEnabled:!0,bevelThickness:.2,bevelSize:.2,bevelSegments:8,curveSegments:96});Ot.translate(0,0,-.25);let he=f(Ot,M.navyMatte);J.add(he);let ee=.25+.2,pe=new nl().parse('<svg xmlns="http://www.w3.org/2000/svg"><path d="'+"M175.3 713.9H265.1V577.8C265.1 556.2 276.8 542.7 295 542.7C313.7 542.7 325.3 556.2 325.3 577.8V713.9H410.7V577.8C410.7 556.2 422.4 542.7 440.3 542.7C459 542.7 470.9 556.2 470.9 577.8V713.9H560.7V555.3C560.7 504.3 527.9 471.3 480.3 471.3C446.8 471.3 415.4 487.7 403.5 520.7C394.1 487.5 366 471.3 334.8 471.3C303.3 471.3 274.8 487.5 261.5 523.2V476.7H175.3ZM579.4 713.9H669.2V648.1L682.2 631.9L732.5 713.9H834.5L748.3 580.9L831.8 476.7H730.3L670.1 554H669.2V379.2H579.4Z"+'"/></svg>'),me=[];pe.paths.forEach(Qt=>Qt.toShapes().forEach(Te=>{let Me=new Rs(Te,{depth:26,bevelEnabled:!0,bevelThickness:5,bevelSize:4,bevelSegments:4,curveSegments:16});Me.translate(-540,-540,0),Me.scale(Tt,Tt,Tt),Me.rotateX(Math.PI),Me.translate(0,0,31*Tt);let wt=f(Me,M.white);wt.position.z=ee-.05,J.add(wt),me.push(wt)})),me.sort((Qt,Te)=>(Qt.geometry.computeBoundingBox(),Te.geometry.computeBoundingBox(),Qt.geometry.boundingBox.min.x-Te.geometry.boundingBox.min.x));let Le=new k(346*Tt,-(675.9-540)*Tt,ee+38*Tt*.82);return{aspect:.9,grp:J,letters:me,SLOT:Le,slotR:38*Tt*1.08,pose(Qt,Te,Me,wt){let ge=gi(Ze(Qt,0,.42));J.rotation.set(be(.6,0,ge)+wt*.18+Math.sin(Te*.8)*.02,be(-Math.PI*1.1,0,ge)+Me*.32,0),J.scale.setScalar(be(.6,1,ge)),me.forEach((Ee,re)=>{let te=Qi(Ze(Qt,.3+re*.08,.5+re*.08));Ee.position.z=be(-1.6,ee-.05,te),Ee.scale.setScalar(Math.max(be(.7,1,te),.001)),Ee.visible=te>.002})}}}),le={food:{hero:["t-hero.jpg",1,.5,.45],tiles:[["t-ravioli.jpg"],["t-tagliatelle.jpg"],["t-tiramisu.jpg"],["t-gnocchi.jpg"],["t-dehors.jpg"],["t-hero.jpg",1.3,.3,.5],["t-ravioli.jpg",1.7,.8,.3],["t-tiramisu.jpg",1.6,.2,.7],["t-tagliatelle.jpg",1.6,.7,.8]],avatar:"t-tagliatelle.jpg"},hair:{hero:["s-piega.jpg",1,.5,.42],tiles:[["s-colore.jpg"],["s-liscio.jpg"],["s-piega.jpg"],["s-ricci.jpg"],["s-sposa.jpg"],["s-treccia.jpg"],["s-ricci.jpg",1.6,.3,.7],["s-colore.jpg",1.6,.6,.3],["s-liscio.jpg",1.7,.4,.6]],avatar:"s-treccia.jpg"},bake:{hero:["g-banco.jpg",1,.5,.5],tiles:[["g-croissant.jpg"],["g-focaccia.jpg"],["g-pagnotta.jpg"],["g-grissini.jpg"],["g-impasto.jpg"],["g-farina.jpg"],["g-banco.jpg",1.4,.25,.5],["g-croissant.jpg",1.6,.7,.4],["g-focaccia.jpg",1.6,.3,.7]],avatar:"g-pagnotta.jpg"}};function U(){let lt=le[Yn.kind()]||le.food;K(lt.hero[0],4.6/3.1,lt.hero[1],lt.hero[2],lt.hero[3],At.photoM),Jt.tiles.forEach((J,_t)=>{let Tt=lt.tiles[_t];K(Tt[0],1,Tt[1]||1,Tt[2]===void 0?.5:Tt[2],Tt[3]===void 0?.5:Tt[3],J.front);let St=Uc(31+_t*7);K(Tt[0],1,(Tt[1]||1)*1.3,.5+(St()-.5)*.5,.5+(St()-.5)*.5,J.back,(St()-.5)*.2)}),K(lt.avatar,1,1.2,.5,.5,Jt.avatarM)}function N(){[At.nameTex,Mt.titleTex,Jt.handleTex].forEach(lt=>lt.userData.draw())}Yn.on(()=>{N(),U()}),U();let I=xn.fonts&&xn.fonts.load?Promise.all([xn.fonts.load('760 64px "Mona Sans"'),xn.fonts.load('650 64px "Inter"')]).catch(()=>{}):Promise.resolve();I.then(()=>{R(),S=!0});function R(){t.traverse(lt=>{let J=lt.material;J&&J.map&&J.map.userData&&J.map.userData.draw&&J.map.userData.draw()})}let B=p(),st=p(),yt={};Zn(".dot[data-dot]").forEach(lt=>{yt[lt.getAttribute("data-dot")]=lt});let b=lt=>J=>{let _t=lt.getBoundingClientRect();return g(_t.left+_t.width/2,_t.top+_t.height/2,J.p),J.r=_t.width/2*h,J},F=(lt,J,_t)=>Tt=>{lt.updateWorldMatrix(!0,!1),Tt.p.copy(J).applyMatrix4(lt.matrixWorld);let St=lt.getWorldScale(st).x;return Tt.r=_t*St,Tt},P=[],Z=[],j=30;function ut(lt){P.length=0;let J=(re,te,v)=>P.push(Object.assign({y:re,at:te},v||{})),_t=yt.hero;J(0,b(_t)),J(l*.16,b(_t));let Tt=lt.read;if(Tt&&Z.length){let re=Tt.end-Tt.start,te=Z.length;Z.forEach((v,O)=>{J(Tt.start+re*(.04+O/(te-1)*.8),it=>{let tt=v.getBoundingClientRect();return g(tt.left+tt.width/2,tt.top+j*.18,it.p),it.r=j*.15*h,it.p.y+=it.r,it},{hop:j*.2*h,word:O})}),J(Tt.end,P[P.length-1].at)}let St=yt.prova,Ot=lt.prova;St&&Ot&&(J(Ot.start,b(St)),J(Ot.end,b(St)));let he=lt.site,ee=he.end-he.start;J(he.start+ee*.58,F(At.card,At.FAB,At.fabR),{land:"site"}),J(he.start+ee*.95,F(At.card,At.FAB,At.fabR));let ie=lt.map,pe=ie.end-ie.start,me=new k(Mt.PIN.x,Mt.PIN.y,6),Le=new k(Mt.PIN.x,Mt.PIN.y,.19+Mt.pinR*.92),Qt=new k(Mt.PIN.x,Mt.PIN.y,Mt.headZ);J(ie.start+pe*.12,F(Mt.spin,me,Mt.pinR)),J(ie.start+pe*.24,F(Mt.spin,Le,Mt.pinR),{land:"map",fall:!0}),J(ie.start+pe*.34,F(Mt.spin,Qt,Mt.pinR)),J(ie.start+pe*.95,F(Mt.spin,Qt,Mt.pinR));let Te=lt.grid,Me=Te.end-Te.start;Jt.ORDER.forEach((re,te)=>{let v=.36+te*.06;Jt.flipAt[re]=v-.01;let O=Jt.tiles[re];J(Te.start+Me*v,F(Jt.card,new k(O.at.x,O.at.y,O.at.z+.06+Jt.tileR),Jt.tileR),{hop:1.3,land:"tile"})});let wt=new k(-2.3,3.55,.2+.5);J(Te.start+Me*.9,F(Jt.card,wt,.5),{hop:2}),J(Te.start+Me*.97,F(Jt.card,wt,.5));let ge=lt.how;if(ge&&qs.ok){let re=te=>v=>{let O=qs.screen(te);return g(O.x,O.y,v.p),v.r=O.r*h,v};J(ge.start,re(0)),J(ge.end,re(1),{track:(te,v)=>re(te)(v)})}["prezzi","esempi"].forEach(re=>{let te=lt[re];te&&yt[re]&&(J(te.start,b(yt[re])),J(te.end,b(yt[re])))});let Ee=lt.sign;J(Ee.start+(Ee.end-Ee.start)*.62,F(Yt.grp,Yt.SLOT,Yt.slotR),{land:"logo",hop:6}),J(Ee.end+l*4,F(Yt.grp,Yt.SLOT,Yt.slotR)),P.sort((re,te)=>re.y-te.y)}let mt={p:p(),r:1},gt={p:p(),r:1},q=p(),y=-1;function Dt(lt,J){if(!P.length)return!1;if(lt<=P[0].y)return P[0].at(mt),J.p.copy(mt.p),J.r=mt.r,!0;let _t=0;for(;_t<P.length-1&&P[_t+1].y<=lt;)_t++;if(_t>=P.length-1)return P[P.length-1].at(mt),J.p.copy(mt.p),J.r=mt.r,J.i=_t,!0;let Tt=P[_t],St=P[_t+1],Ot=_i((lt-Tt.y)/Math.max(1,St.y-Tt.y));if(J.i=_t,J.t=Ot,St.track)return St.track(Ot,J),!0;if(Tt.at(mt),St.at(gt),Tt.at===St.at)return J.p.copy(mt.p),J.r=mt.r,!0;let he=mt.p.distanceTo(gt.p),ee=St.hop?_i((Ot-.3)/.7):Ot,ie=St.fall?Ot*Ot:St.hop?ee:Xs(Ot);J.p.lerpVectors(mt.p,gt.p,ie),J.r=be(mt.r,gt.r,Xs(ee));let pe=St.fall?0:St.hop?St.hop*4*ee*(1-ee):Math.min(he*.32,9)*Math.sin(Math.PI*Ot);return J.p.y+=pe,J.p.z+=St.hop||St.fall?0:Math.min(he*.25,8)*Math.sin(Math.PI*Ot),!0}let Ct={};if(ke){let lt=_t=>()=>"+="+Math.round(ye.innerHeight*_t),J=Ve(".read");Z=j0(Ve(".read-p")),Ct.read=dn.create({trigger:J,start:"top top",end:lt(1.7),pin:!0,anticipatePin:1}),Ct.prova=dn.create({trigger:"#prova",start:"top 62%",end:"bottom 70%"}),Ct.site=dn.create({trigger:"#sito",start:"top top",end:lt(2.3),pin:!0,anticipatePin:1}),Ct.map=dn.create({trigger:"#google",start:"top top",end:lt(2.2),pin:!0,anticipatePin:1}),Ct.grid=dn.create({trigger:"#instagram",start:"top top",end:lt(2.8),pin:!0,anticipatePin:1}),Ct.how=dn.create({trigger:".steps-track",start:"top 72%",end:"bottom 55%"}),Ct.prezzi=dn.create({trigger:"#prezzi",start:"top 55%",end:"bottom 75%"}),Ct.esempi=dn.create({trigger:"#esempi",start:"top 55%",end:"bottom 60%"}),Ct.sign=dn.create({trigger:"#contatti",start:"top 92%",end:"top 12%"}),dn.addEventListener("refresh",()=>{j=parseFloat(getComputedStyle(Ve(".read-p")).fontSize)||30,qs.measure(),ut(Ct)}),ye.mkDebug={sts:Ct,keys:P,dot:Y,k:()=>h,st:()=>({ys:kt,i:at.i,t:at.t,lenis:!!xi,fine:ts})},zu(),dn.refresh(),I.then(()=>dn.refresh())}else{rt.forEach(J=>{J.p=1});let lt=(J,_t,Tt)=>{let St=f(T,M.yellow);St.position.copy(_t),St.scale.setScalar(Tt),J.add(St)};lt(At.card,At.FAB,At.fabR),lt(Mt.spin,new k(Mt.PIN.x,Mt.PIN.y,Mt.headZ),Mt.pinR),lt(Yt.grp,Yt.SLOT,Yt.slotR),Jt.ORDER.forEach(J=>{Jt.flipAt[J]=0}),C()}function C(){P.length=0,P.push({y:0,at:b(yt.hero)})}let _={x:0,y:0,sx:0,sy:0,cx:-1e4,cy:-1e4};ts&&ye.addEventListener("pointermove",lt=>{_.x=lt.clientX/c*2-1,_.y=lt.clientY/l*2-1,_.cx=lt.clientX,_.cy=lt.clientY},{passive:!0});let W={v:0,h:1},Q={x:0,y:0},ht=0,bt=()=>{ht=0};["pointerdown","pointermove","keydown","wheel","touchstart"].forEach(lt=>ye.addEventListener(lt,bt,{passive:!0}));let Et=lt=>{W.h=lt,Fe.fromTo(W,{v:0},{v:1,duration:.55+.3*lt,ease:"none",overwrite:!0,onComplete:()=>{W.v=0,$t()}})},dt=()=>[Y.position.x/h+c/2,l/2-Y.position.y/h];ke&&ye.addEventListener("pointerdown",lt=>{if(Fn.v>0||W.v>0)return;let[J,_t]=dt(),Tt=Math.max(30,Math.abs(Y.scale.y)/h*1.8);Math.hypot(lt.clientX-J,lt.clientY-_t)<Tt&&Et(1)},{passive:!0});let at={p:p(),r:1,i:0,t:0},Rt=p(),Wt=p(),Nt=new k(0,1,0),Pt=new bn,kt=ye.pageYOffset,jt=performance.now(),ae=0,X=0,It={},pt={site:()=>Lt(At.ring),map:()=>Mt.rings.forEach((lt,J)=>Lt(lt,J*.16)),tile:()=>{},logo:()=>{}};function Lt(lt,J=0){Fe&&(Fe.fromTo(lt.scale,{x:1,y:1},{x:4.2,y:4.2,duration:1.1,delay:J,ease:"expo.out",overwrite:!0}),Fe.fromTo(lt.material,{opacity:.9},{opacity:0,duration:1.1,delay:J,ease:"power2.out",overwrite:!0}))}function Ft(){let lt=performance.now(),J=Math.min(.05,(lt-jt)/1e3);jt=lt,ae+=J;let _t=ye.pageYOffset;kt=xi?_t:be(kt,_t,1-Math.exp(-J*16)),Math.abs(kt-_t)<.5&&(kt=_t),_.sx=be(_.sx,_.x,1-Math.exp(-J*5)),_.sy=be(_.sy,_.y,1-Math.exp(-J*5));for(let St of rt)if(ft(St),!!St.visible){if(ke){let Ot=St===At?Ct.site:St===Mt?Ct.map:St===Jt?Ct.grid:Ct.sign;St.p=Ot?_i((kt-Ot.start)/Math.max(1,Ot.end-Ot.start)):1}St.pose(St.p,ae,_.sx,_.sy)}if(ke&&Ct.how&&qs.set((kt-Ct.how.start)/Math.max(1,Ct.how.end-Ct.how.start)),Dt(ke?kt:0,at)){if(Fn.v>0||Fn.a<1){let ie=1-Fn.v,pe=Math.min(c,l);g(c*.5,l*(c<700?.37:.42),q);let me=pe*(c<700?.27:.19)*h;q.lerp(at.p,ie),q.y+=Math.sin(Math.PI*ie)*pe*.2*h,q.z+=Math.sin(Math.PI*ie)*6,at.p.copy(q),at.r=me*Math.pow(at.r/me,ie)*Math.max(Fn.a,.001)}if(ke&&Fn.v===0&&kt<4&&W.v===0?(ht+=J,ht>6&&(ht=0,Et(.45))):kt>=4&&(ht=0),W.v>0){let ie=W.v;at.p.y+=4*ie*(1-ie)*Math.max(at.r*9,46*h)*W.h}if(ts&&ke){let ie=at.p.x/h+c/2,pe=l/2-at.p.y/h,me=_.cx-ie,Le=_.cy-pe,Qt=Math.hypot(me,Le),Te=Qt<150?Math.pow(1-Qt/150,2)*.3:0;Q.x=be(Q.x,me*Te,1-Math.exp(-J*10)),Q.y=be(Q.y,Le*Te,1-Math.exp(-J*10)),at.p.x+=Q.x*h,at.p.y-=Q.y*h}Y.position.copy(at.p),Wt.subVectors(at.p,Rt).divideScalar(Math.max(J,.001)),Rt.copy(at.p);let St=Wt.length()/Math.max(at.r,.001),Ot=ke?_i(St*.012,0,.42):0;X=ke?be(X,Ot,1-Math.exp(-J*12)):0,X>.01&&Wt.lengthSq()>1e-6&&(Pt.setFromUnitVectors(Nt,Wt.clone().normalize()),Y.quaternion.copy(Pt));let he=1+X,ee=1/Math.sqrt(he);if(Y.scale.set(at.r*ee*(1+vt.v*.28),at.r*he*(1-vt.v*.3),at.r*ee*(1+vt.v*.28)),Y.visible=ke||E,ke&&P[at.i+1]&&at.t>.985){let ie=P[at.i+1];ie.land&&It[at.i+1]!==!0&&(It[at.i+1]=!0,$t(),(pt[ie.land]||(()=>{}))())}if(ke)for(let ie in It)P[ie]&&kt<P[ie].y-2&&delete It[ie];ke&&Z.length&&Ce()}if(ke){let St=!0;for(let Ot of rt)if(Ot.visible){St=!1;break}if(St){let Ot=Y.position,he=Y.scale,ee=Y.quaternion,ie=[Ot.x,Ot.y,Ot.z,he.x,he.y,he.z,ee.x,ee.y,ee.z,ee.w,Y.visible?1:0,We.visible?We.material.opacity:-1].map(pe=>Math.round(pe*1e4)).join();if(ie===d)return;d=ie}else d=""}on.render(t,o)}let vt={v:0};function $t(){Fe&&Fe.fromTo(vt,{v:1},{v:0,duration:.7,ease:"elastic.out(1, 0.35)",overwrite:!0})}let Xt=-2;function Ce(){if(!Ct.read)return;let J=-1;for(let _t=0;_t<P.length;_t++)P[_t].word!==void 0&&P[_t].y<=kt+1&&(J=P[_t].word);J!==Xt&&(Xt=J,Z.forEach((_t,Tt)=>_t.classList.toggle("on",Tt<=J)))}let ve=-1;if(ke)Fe.ticker.add(Ft);else{let lt=()=>{let J=ye.pageYOffset;(S||J!==ve)&&(ve=J,S=!1,Ft()),requestAnimationFrame(lt)};requestAnimationFrame(lt),ye.addEventListener("resize",()=>{S=!0})}xn.addEventListener("visibilitychange",()=>{jt=performance.now(),d=""}),on.domElement.addEventListener("webglcontextrestored",()=>{d=""});let We=f(new Yi(1,1.14,64),new tn({color:16631808,transparent:!0,opacity:0,depthWrite:!1}));We.visible=!1,t.add(We);let fn={s:1,o:0};Fc.landed=()=>{$t(),Fe.fromTo(fn,{s:1,o:.95},{s:5,o:0,duration:1.2,ease:"expo.out",onUpdate:()=>{We.position.copy(Y.position);let lt=at.r*fn.s;We.scale.set(lt,lt,lt),We.material.opacity=fn.o,We.visible=fn.o>.01}})},Ft(),ke?Fe.delayedCall(2.9,Kr):setTimeout(Kr,600);function Kr(){let lt=new Set;t.traverse(Tt=>{let St=Tt.material;St&&St.map&&lt.add(St.map)});let J=Array.from(lt),_t=()=>{let Tt=J.shift();Tt&&(Tt.image&&on.initTexture(Tt),setTimeout(_t,30))};on.extensions.has("KHR_parallel_shader_compile")?on.compileAsync(t,o).then(_t,_t):(on.compile(t,o),setTimeout(_t,200))}ye.mkPoster=lt=>{let J={site:At,map:Mt,grid:Jt,logo:Yt}[lt],_t={site:F(At.card,At.FAB,At.fabR),map:F(Mt.spin,new k(Mt.PIN.x,Mt.PIN.y,Mt.headZ),Mt.pinR),grid:F(Jt.card,new k(-2.3,3.55,.7),.5),logo:F(Yt.grp,Yt.SLOT,Yt.slotR)}[lt];return rt.forEach(Tt=>{Tt.el=Tt===J?Tt.el:xn.createElement("div")}),P.length=0,P.push({y:0,at:_t}),E=lt==="grid",S=!0,!!J}}function zu(){Y0(),Z0(),J0(),$0(),K0()}function X0(){let i=Ve(".hero-h"),t=Fe.timeline({paused:!0}),e=performance.now()>2800;if(i&&Zs&&!e){let n=Zs.create(Zn(".hw",i),{type:"chars",charsClass:"hc"});Fe.set(n.chars,{fontStretch:"75%",fontWeight:300,yPercent:46,opacity:0}),Fe.set(".nav",{y:-18,opacity:0}),Fe.set(".hero-foot",{y:26,opacity:0}),t.to(n.chars,{fontStretch:"125%",fontWeight:860,yPercent:0,opacity:1,duration:1.15,ease:"expo.out",stagger:.028,onComplete(){Fe.set(n.chars,{clearProps:"fontStretch,fontWeight"}),ts&&q0(n.chars)}},.72).to(".nav",{y:0,opacity:1,duration:.8,ease:"expo.out"},1.25).to(".hero-foot",{y:0,opacity:1,duration:.9,ease:"expo.out"},1.4).to(Fn,{a:1,duration:.7,ease:"back.out(1.9)"},0).to(Fn,{v:0,duration:1.05,ease:"power3.inOut",onComplete:()=>Fc.landed&&Fc.landed()},.8)}else Fn.v=0,Fn.a=1;return Ys.classList.add("go"),i&&Fe.to(i,{fontStretch:"88%",yPercent:-14,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom 30%",scrub:!0}}),t}function q0(i){let t=0,e=-1e4,n=-1e4,s=()=>i.map(o=>{let c=o.getBoundingClientRect();return[c.left+c.width/2,c.top+c.height/2]}),r=null;ye.addEventListener("scroll",()=>{r=null},{passive:!0}),ye.addEventListener("pointermove",o=>{e=o.clientX,n=o.clientY,t||(t=requestAnimationFrame(a))},{passive:!0});function a(){t=0,!(ye.pageYOffset>ye.innerHeight)&&(r=r||s(),i.forEach((o,c)=>{let l=r[c][0]-e,h=r[c][1]-n,d=Math.sqrt(l*l+h*h),u=_i(1-d/260);o.style.fontWeight=Math.round(860-u*520)}))}}function Y0(){Zn(".flap").forEach(i=>{if(!Zs)return;let t=Zs.create(i,{type:"words,chars",wordsClass:"fw",charsClass:"fc"});Fe.fromTo(t.chars,{rotateX:-96,opacity:0},{rotateX:0,opacity:1,duration:.8,ease:"back.out(1.5)",stagger:.022,scrollTrigger:{trigger:i,start:"top 82%",once:!0}})})}function Z0(){Zn(".roll").forEach(i=>{let t=i.textContent.trim();i.innerHTML='<span class="sr">'+t+"</span>";let e=[];for(let n of t){let s=xn.createElement("span");if(s.setAttribute("aria-hidden","true"),/\d/.test(n)){s.className="dg";let r=xn.createElement("span");r.innerHTML=Array.from({length:10},(a,o)=>"<span>"+(+n+1+o)%10+"</span>").join(""),s.appendChild(r),e.push(r)}else s.textContent=n;i.appendChild(s)}Fe.fromTo(e,{yPercent:0},{yPercent:-90,duration:1.4,ease:"expo.out",stagger:.08,scrollTrigger:{trigger:i,start:"top 88%",once:!0}})})}function J0(){let i=Ve(".band-in");if(!i)return;i.innerHTML+=i.innerHTML;let t=0,e=0,n=ye.pageYOffset;Fe.ticker.add((s,r)=>{let a=ye.pageYOffset,o=a-n;n=a,e=be(e,o,.12),t-=(.9+Math.abs(e)*.25)*(r/16.7);let c=i.scrollWidth/2;-t>c&&(t+=c),i.style.transform="translate3d("+t.toFixed(1)+"px,0,0) skewX("+_i(-e*.25,-10,10).toFixed(2)+"deg)"})}function $0(){let i=Ve(".ex-card"),t=Ve(".ex-img");!i||!ts||(i.addEventListener("pointermove",e=>{let n=i.getBoundingClientRect(),s=(e.clientX-n.left)/n.width-.5,r=(e.clientY-n.top)/n.height-.5;t.style.transform="rotateY("+(s*10).toFixed(2)+"deg) rotateX("+(-r*8).toFixed(2)+"deg) translateZ(20px)",t.style.boxShadow=(12-s*10).toFixed(1)+"px "+(12-r*10).toFixed(1)+"px 0 #1b1b1b"}),i.addEventListener("pointerleave",()=>{t.style.transform="",t.style.boxShadow=""}))}function K0(){let i=Ve("#shop-big");if(!i)return;let t=n=>{let s=Yn.name();i.innerHTML="",Array.from(s).forEach((r,a,o)=>{let c=xn.createElement("span");c.className="c",c.textContent=r===" "?"\xA0":r,i.appendChild(c),n&&a===o.length-1&&Fe&&Fe.fromTo(c,{fontStretch:"75%",yPercent:30,opacity:0},{fontStretch:"125%",yPercent:0,opacity:1,duration:.6,ease:"expo.out"})})};t(!1);let e=Yn.name().length;Yn.on(()=>{let n=Yn.name().length;t(n>e),e=n})}function j0(i){if(!i)return[];let t=i.textContent.trim().split(/\s+/);return i.innerHTML=t.map(e=>'<span class="w">'+e.replace(/&/g,"&amp;").replace(/</g,"&lt;")+"</span>").join(" "),Zn(".w",i)}function Q0(){let i=Ve(".steps-track"),t=Ve(".steps-line"),e=t&&Ve("path",t),n=Zn(".steps-list .n"),s=Zn(".steps-list li"),r={ok:!1,t:0,measure(){},set(){},screen:()=>({x:0,y:0,r:12})};if(!i||!e||!n.length)return r;let a=1,o=[],c=-1;return r.ok=!0,r.measure=()=>{let l=i.getBoundingClientRect();t.setAttribute("viewBox","0 0 "+Math.round(l.width)+" "+Math.round(l.height));let h=n.map(u=>{let p=u.getBoundingClientRect();return[p.left-l.left+p.width/2,p.top-l.top+p.height/2]}),d="M"+h[0][0].toFixed(1)+" "+h[0][1].toFixed(1);for(let u=1;u<h.length;u++){let p=h[u-1],g=h[u];if(Math.abs(p[1]-g[1])<4)d+=" L"+g[0].toFixed(1)+" "+g[1].toFixed(1);else{let M=(p[1]+g[1])/2;d+=" C"+p[0].toFixed(1)+" "+M.toFixed(1)+" "+g[0].toFixed(1)+" "+M.toFixed(1)+" "+g[0].toFixed(1)+" "+g[1].toFixed(1)}}e.setAttribute("d",d),a=e.getTotalLength()||1,e.style.strokeDasharray=a+" "+a,o=h.map(u=>{let p=0,g=1e9;for(let M=0;M<=80;M++){let m=e.getPointAtLength(a*M/80),f=Math.hypot(m.x-u[0],m.y-u[1]);f<g&&(g=f,p=M/80)}return p}),c=-1,r.set(r.t)},r.set=l=>{l=_i(l),r.t=l,!(Math.abs(l-c)<1e-4)&&(c=l,e.style.strokeDashoffset=String(a*(1-l)),s.forEach((h,d)=>h.classList.toggle("on",o.length>0&&l>=o[d]-.01)))},r.screen=l=>{r.set(l);let h=i.getBoundingClientRect(),d=e.getPointAtLength(a*_i(l));return{x:h.left+d.x,y:h.top+d.y,r:13}},r.measure(),ke||r.set(1),r}function t_(){let i=Ve("#shop"),t=Zn("input[name=kind]"),e=[],n={food:"Ristorante",hair:"Parrucchiere",bake:"Panetteria"},s="",r="food";try{let d=JSON.parse(localStorage.getItem("mk-shop")||"null");d&&(s=String(d.name||"").slice(0,28),r=n[d.kind]?d.kind:"food")}catch{}i&&(i.value=s),t.forEach(d=>{d.checked=d.value===r});let a={name:()=>s.trim()||"Il tuo negozio",kind:()=>r,cat:()=>n[r],handle:()=>"@"+((s.trim()||"iltuonegozio").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"").slice(0,24)||"iltuonegozio"),on:d=>e.push(d)};function o(){let d="https://wa.me/393715399463?text=",u=s.trim()?"Ciao Maicol, ho visto il tuo sito. Il mio negozio \xE8 "+s.trim()+" ("+n[r].toLowerCase()+"). Mi prepari la prova gratis?":"Ciao Maicol, ho visto il tuo sito";Zn("[data-wa]").forEach(p=>{p.href=d+encodeURIComponent(u)})}function c(){try{localStorage.setItem("mk-shop",JSON.stringify({name:s,kind:r}))}catch{}}let l=0;i&&i.addEventListener("input",()=>{s=i.value.slice(0,28),o(),clearTimeout(l),l=setTimeout(c,400),e.forEach(d=>d())}),t.forEach(d=>d.addEventListener("change",()=>{d.checked&&(r=d.value,o(),c(),e.forEach(u=>u()))}));let h=Ve(".try-form");return h&&h.addEventListener("submit",d=>{d.preventDefault(),i&&i.blur();let u=Ve("#sito");u&&(xi?xi.scrollTo(u):u.scrollIntoView({behavior:Bc?"auto":"smooth"}))}),o(),a}function e_(){let i=Ve("#copy");if(!i)return;let t=Ve("span",i);i.addEventListener("click",()=>{let e=()=>{t.textContent="Numero copiato",setTimeout(()=>{t.textContent="Copia il numero"},2200)};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText("+39 371 539 9463").then(e,()=>{t.textContent="371 539 9463"}):t.textContent="371 539 9463"})}function n_(){let i=Ve(".nav");if(!i)return;let t=()=>i.classList.toggle("solid",ye.pageYOffset>24);if(ye.addEventListener("scroll",t,{passive:!0}),t(),!("IntersectionObserver"in ye))return;let e=new IntersectionObserver(n=>n.forEach(s=>{s.isIntersecting&&i.setAttribute("data-nav",s.target.getAttribute("data-theme"))}),{rootMargin:"-3% 0px -96% 0px"});Zn("[data-theme]").forEach(n=>e.observe(n))}function i_(){Zn('a[href^="#"]').forEach(i=>i.addEventListener("click",t=>{let e=i.getAttribute("href").slice(1),n=e&&xn.getElementById(e);n&&(t.preventDefault(),xi?xi.scrollTo(n,{offset:0}):n.scrollIntoView({behavior:Bc?"auto":"smooth"}),history.replaceState(null,"","#"+e))}))}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
