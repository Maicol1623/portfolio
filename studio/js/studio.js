var Ih=0,jl=1,Lh=2;var Or=1,Dh=2,Is=3,Ai=0,Ze=1,_n=2,Zn=0,Ls=1,Ql=2,tc=3,ec=4,Nh=5;var Wi=100,Uh=101,Fh=102,Oh=103,Bh=104,zh=200,kh=201,Vh=202,Gh=203,nc=204,ic=205,Hh=206,Wh=207,Xh=208,qh=209,Yh=210,Zh=211,Jh=212,$h=213,Kh=214,Ea=0,Aa=1,Ca=2,ms=3,Ra=4,Pa=5,Ia=6,La=7,lo=0,jh=1,Qh=2,Fn=0,sc=1,rc=2,ac=3,oc=4,lc=5,cc=6,Br=7;var hc=300,Ci=301,Xi=302,co=303,ho=304,zr=306,gs=1e3,Mn=1001,_s=1002,Ve=1003,tu=1004;var kr=1005;var Xe=1006,uo=1007;var Ri=1008;var on=1009,uc=1010,dc=1011,Ds=1012,fo=1013,On=1014,bn=1015,Bn=1016,po=1017,mo=1018,Ns=1020,fc=35902,pc=35899,mc=1021,gc=1022,Tn=1023,Hn=1026,Pi=1027,go=1028,_o=1029,Ii=1030,xo=1031;var yo=1033,Vr=33776,Gr=33777,Hr=33778,Wr=33779,vo=35840,Mo=35841,So=35842,bo=35843,To=36196,wo=37492,Eo=37496,Ao=37488,Co=37489,Xr=37490,Ro=37491,Po=37808,Io=37809,Lo=37810,Do=37811,No=37812,Uo=37813,Fo=37814,Oo=37815,Bo=37816,zo=37817,ko=37818,Vo=37819,Go=37820,Ho=37821,Wo=36492,Xo=36494,qo=36495,Yo=36283,Zo=36284,qr=36285,Jo=36286;var ar=2300,Da=2301,Ta=2302,Bl=2303,zl=2400,kl=2401,Vl=2402;var eu=3200;var Yr=0,nu=1,ui="",De="srgb",or="srgb-linear",lr="linear",Me="srgb";var wa=7680;var iu=519,su=512,ru=513,au=514,$o=515,ou=516,lu=517,Ko=518,cu=519,hu=35044;var _c="300 es",Ln=2e3,xs=2001;function rd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ad(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uu(){let i=cr("canvas");return i.style.display="block",i}var th={},ys=null;function xc(...i){let t="THREE."+i.shift();ys?ys("log",t,...i):console.log(t,...i)}function du(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ne(...i){i=du(i);let t="THREE."+i.shift();if(ys)ys("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function re(...i){i=du(i);let t="THREE."+i.shift();if(ys)ys("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function zi(...i){let t=i.join(" ");t in th||(th[t]=!0,ne(...i))}function fu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var pu={[Ea]:Aa,[Ca]:Ia,[Ra]:La,[ms]:Pa,[Aa]:Ea,[Ia]:Ca,[La]:Ra,[Pa]:ms},Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var dl=Math.PI/180,Na=180/Math.PI;function Us(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function od(i,t){return(i%t+t)%t}function fl(i,t,e){return(1-e)*i+e*t}function $s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Tc=class Tc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tc.prototype.isVector2=!0;var wt=Tc,fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||c!==u||l!==p||h!==g){let m=c*u+l*p+h*g+d*M;m<0&&(u=-u,p=-p,g=-g,M=-M,m=-m);let f=1-o;if(m<.9995){let b=Math.acos(m),P=Math.sin(b);f=Math.sin(f*b)/P,o=Math.sin(o*b)/P,c=c*f+u*o,l=l*f+p*o,h=h*f+g*o,d=d*f+M*o}else{c=c*f+u*o,l=l*f+p*o,h=h*f+g*o,d=d*f+M*o;let b=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=b,l*=b,h*=b,d*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-o*p,t[e+2]=l*g+h*p+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},wc=class wc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pl.copy(this).projectOnVector(t),this.sub(pl)}reflect(t){return this.sub(pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wc.prototype.isVector3=!0;var W=wc,pl=new W,eh=new fn,Ec=class Ec{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],M=s[0],m=s[3],f=s[6],b=s[1],P=s[4],x=s[7],T=s[2],w=s[5],U=s[8];return r[0]=a*M+o*b+c*T,r[3]=a*m+o*P+c*w,r[6]=a*f+o*x+c*U,r[1]=l*M+h*b+d*T,r[4]=l*m+h*P+d*w,r[7]=l*f+h*x+d*U,r[2]=u*M+p*b+g*T,r[5]=u*m+p*P+g*w,r[8]=u*f+p*x+g*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,p=l*r-a*c,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=d*M,t[1]=(s*l-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ml.makeScale(t,e)),this}rotate(t){return zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ml.makeRotation(-t)),this}translate(t,e){return zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ml.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ec.prototype.isMatrix3=!0;var te=Ec,ml=new te,nh=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ih=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ld(){let i={enabled:!0,workingColorSpace:or,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Me&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[or]:{primaries:t,whitePoint:n,transfer:lr,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}var pe=ld();function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ts,Ua=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ts===void 0&&(ts=cr("canvas")),ts.width=t.width,ts.height=t.height;let s=ts.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ts}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=cr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cd=0,vs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gl(s[a].image)):r.push(gl(s[a]))}else r=gl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}var hd=0,_l=new W,qe=class i extends Wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Mn,s=Mn,r=Xe,a=Ri,o=Tn,c=on,l=i.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Us(),this.name="",this.source=new vs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gs:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case _s:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gs:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case _s:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=hc;qe.DEFAULT_ANISOTROPY=1;var Ac=class Ac{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],M=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(l+1)/2,x=(p+1)/2,T=(f+1)/2,w=(h+u)/4,U=(d+M)/4,y=(g+m)/4;return P>x&&P>T?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=w/n,r=U/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=y/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=U/r,s=y/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-M)/b,this.z=(u-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ac.prototype.isVector4=!0;var Re=Ac,Fa=class extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new qe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Fa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},hr=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oa=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var oo=class oo{constructor(t,e,n,s,r,a,o,c,l,h,d,u,p,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,u,p,g,M,m)}set(t,e,n,s,r,a,o,c,l,h,d,u,p,g,M,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),a=1/es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*d,g=o*h,M=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-M*l,e[9]=-o*c,e[2]=M-u*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,p=c*d,g=l*h,M=l*d;e[0]=u+M*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=M+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,p=c*d,g=l*h,M=l*d;e[0]=u-M*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,p=a*d,g=o*h,M=o*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+M,e[1]=c*d,e[5]=M*l+u,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,p=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=M-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-M*d}else if(t.order==="XZY"){let u=a*c,p=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+M,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ud,t,dd)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),gi.crossVectors(n,cn),gi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),gi.crossVectors(n,cn)),gi.normalize(),na.crossVectors(cn,gi),s[0]=gi.x,s[4]=na.x,s[8]=cn.x,s[1]=gi.y,s[5]=na.y,s[9]=cn.y,s[2]=gi.z,s[6]=na.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],M=n[6],m=n[10],f=n[14],b=n[3],P=n[7],x=n[11],T=n[15],w=s[0],U=s[4],y=s[8],C=s[12],k=s[1],q=s[5],H=s[9],ot=s[13],G=s[2],et=s[6],ut=s[10],tt=s[14],F=s[3],O=s[7],Y=s[11],lt=s[15];return r[0]=a*w+o*k+c*G+l*F,r[4]=a*U+o*q+c*et+l*O,r[8]=a*y+o*H+c*ut+l*Y,r[12]=a*C+o*ot+c*tt+l*lt,r[1]=h*w+d*k+u*G+p*F,r[5]=h*U+d*q+u*et+p*O,r[9]=h*y+d*H+u*ut+p*Y,r[13]=h*C+d*ot+u*tt+p*lt,r[2]=g*w+M*k+m*G+f*F,r[6]=g*U+M*q+m*et+f*O,r[10]=g*y+M*H+m*ut+f*Y,r[14]=g*C+M*ot+m*tt+f*lt,r[3]=b*w+P*k+x*G+T*F,r[7]=b*U+P*q+x*et+T*O,r[11]=b*y+P*H+x*ut+T*Y,r[15]=b*C+P*ot+x*tt+T*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],M=t[7],m=t[11],f=t[15],b=c*p-l*u,P=o*p-l*d,x=o*u-c*d,T=a*p-l*h,w=a*u-c*h,U=a*d-o*h;return e*(M*b-m*P+f*x)-n*(g*b-m*T+f*w)+s*(g*P-M*T+f*U)-r*(g*x-M*w+m*U)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],M=t[13],m=t[14],f=t[15],b=e*o-n*a,P=e*c-s*a,x=e*l-r*a,T=n*c-s*o,w=n*l-r*o,U=s*l-r*c,y=h*M-d*g,C=h*m-u*g,k=h*f-p*g,q=d*m-u*M,H=d*f-p*M,ot=u*f-p*m,G=b*ot-P*H+x*q+T*k-w*C+U*y;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let et=1/G;return t[0]=(o*ot-c*H+l*q)*et,t[1]=(s*H-n*ot-r*q)*et,t[2]=(M*U-m*w+f*T)*et,t[3]=(u*w-d*U-p*T)*et,t[4]=(c*k-a*ot-l*C)*et,t[5]=(e*ot-s*k+r*C)*et,t[6]=(m*x-g*U-f*P)*et,t[7]=(h*U-u*x+p*P)*et,t[8]=(a*H-o*k+l*y)*et,t[9]=(n*k-e*H-r*y)*et,t[10]=(g*w-M*x+f*b)*et,t[11]=(d*x-h*w-p*b)*et,t[12]=(o*C-a*q-c*y)*et,t[13]=(e*q-n*C+s*y)*et,t[14]=(M*P-g*T-m*b)*et,t[15]=(h*T-d*P+u*b)*et,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,p=r*h,g=r*d,M=a*h,m=a*d,f=o*d,b=c*l,P=c*h,x=c*d,T=n.x,w=n.y,U=n.z;return s[0]=(1-(M+f))*T,s[1]=(p+x)*T,s[2]=(g-P)*T,s[3]=0,s[4]=(p-x)*w,s[5]=(1-(u+f))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(g+P)*U,s[9]=(m-b)*U,s[10]=(1-(u+M))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=es.set(s[0],s[1],s[2]).length(),o=es.set(s[4],s[5],s[6]).length(),c=es.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Cn.copy(this);let l=1/a,h=1/o,d=1/c;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,e.setFromRotationMatrix(Cn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Ln,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),g,M;if(c)g=r/(a-r),M=a*r/(a-r);else if(o===Ln)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===xs)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ln,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),g,M;if(c)g=1/(a-r),M=a/(a-r);else if(o===Ln)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===xs)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};oo.prototype.isMatrix4=!0;var Ee=oo,es=new W,Cn=new Ee,ud=new W(0,0,0),dd=new W(1,1,1),gi=new W,na=new W,cn=new W,sh=new Ee,rh=new fn,Sn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rh.setFromEuler(this),this.setFromQuaternion(rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fd=0,ah=new W,ns=new fn,ti=new Ee,ia=new W,Ks=new W,pd=new W,md=new fn,oh=new W(1,0,0),lh=new W(0,1,0),ch=new W(0,0,1),hh={type:"added"},gd={type:"removed"},is={type:"childadded",child:null},xl={type:"childremoved",child:null},Ye=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new Sn,n=new fn,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new te}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(lh,t)}rotateZ(t){return this.rotateOnAxis(ch,t)}translateOnAxis(t,e){return ah.copy(t).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(lh,t)}translateZ(t){return this.translateOnAxis(ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ia.copy(t):ia.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Ks,ia,this.up):ti.lookAt(ia,Ks,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(ti),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hh),is.child=t,this.dispatchEvent(is),is.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gd),xl.child=t,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hh),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new W(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var We=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},_d={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),f=this._getHandJoint(l,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_d)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new We;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},sa={h:0,s:0,l:0};function yl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ue=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=od(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=yl(a,r,t+1/3),this.g=yl(a,r,t),this.b=yl(a,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return pe.workingToColorSpace(Ke.copy(this),t),Math.round(fe(Ke.r*255,0,255))*65536+Math.round(fe(Ke.g*255,0,255))*256+Math.round(fe(Ke.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=De){pe.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(sa);let n=fl(_i.h,sa.h,e),s=fl(_i.s,sa.s,e),r=fl(_i.l,sa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new ue;ue.NAMES=mu;var ki=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Rn=new W,ei=new W,vl=new W,ni=new W,ss=new W,rs=new W,uh=new W,Ml=new W,Sl=new W,bl=new W,Tl=new Re,wl=new Re,El=new Re,Mi=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),ei.subVectors(n,e),vl.subVectors(t,e);let a=Rn.dot(Rn),o=Rn.dot(ei),c=Rn.dot(vl),l=ei.dot(ei),h=ei.dot(vl),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(a,ni.y),c.addScaledVector(o,ni.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Tl.setScalar(0),wl.setScalar(0),El.setScalar(0),Tl.fromBufferAttribute(t,e),wl.fromBufferAttribute(t,n),El.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Tl,r.x),a.addScaledVector(wl,r.y),a.addScaledVector(El,r.z),a}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),ei.subVectors(t,e),Rn.cross(ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Rn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ss.subVectors(s,n),rs.subVectors(r,n),Ml.subVectors(t,n);let c=ss.dot(Ml),l=rs.dot(Ml);if(c<=0&&l<=0)return e.copy(n);Sl.subVectors(t,s);let h=ss.dot(Sl),d=rs.dot(Sl);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ss,a);bl.subVectors(t,r);let p=ss.dot(bl),g=rs.dot(bl);if(g>=0&&p<=g)return e.copy(r);let M=p*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(rs,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return uh.subVectors(r,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(uh,o);let f=1/(m+M+u);return a=M*f,o=u*f,e.copy(n).addScaledVector(ss,a).addScaledVector(rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xn=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(t.matrixWorld),this.union(ra)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),aa.subVectors(this.max,js),as.subVectors(t.a,js),os.subVectors(t.b,js),ls.subVectors(t.c,js),xi.subVectors(os,as),yi.subVectors(ls,os),Ui.subVectors(as,ls);let e=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Ui.z,Ui.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Ui.z,0,-Ui.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Ui.y,Ui.x,0];return!Al(e,as,os,ls,aa)||(e=[1,0,0,0,1,0,0,0,1],!Al(e,as,os,ls,aa))?!1:(oa.crossVectors(xi,yi),e=[oa.x,oa.y,oa.z],Al(e,as,os,ls,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ii=[new W,new W,new W,new W,new W,new W,new W,new W],Pn=new W,ra=new Xn,as=new W,os=new W,ls=new W,xi=new W,yi=new W,Ui=new W,js=new W,aa=new W,oa=new W,Fi=new W;function Al(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fi.fromArray(i,r);let o=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),c=t.dot(Fi),l=e.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ue=new W,la=new wt,xd=0,dn=class extends Wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hu,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)la.fromBufferAttribute(this,e),la.applyMatrix3(t),this.setXY(e,la.x,la.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$s(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$s(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$s(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var dr=class extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fr=class extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}},yd=new Xn,Qs=new W,Cl=new W,Si=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Cl)),this.expandByPoint(Qs.copy(t.center).sub(Cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vd=0,vn=new Ee,Rl=new Ye,cs=new W,hn=new Xn,tr=new Xn,ke=new W,Oe=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rd(t)?fr:dr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Rl.lookAt(t),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(hn.min,tr.min),hn.expandByPoint(ke),ke.addVectors(hn.max,tr.max),hn.expandByPoint(ke)):(hn.expandByPoint(tr.min),hn.expandByPoint(tr.max))}hn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ke.fromBufferAttribute(o,l),c&&(cs.fromBufferAttribute(t,l),ke.add(cs)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new dn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new W,c[y]=new W;let l=new W,h=new W,d=new W,u=new wt,p=new wt,g=new wt,M=new W,m=new W;function f(y,C,k){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,k),u.fromBufferAttribute(r,y),p.fromBufferAttribute(r,C),g.fromBufferAttribute(r,k),h.sub(l),d.sub(l),p.sub(u),g.sub(u);let q=1/(p.x*g.y-g.x*p.y);isFinite(q)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(q),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(q),o[y].add(M),o[C].add(M),o[k].add(M),c[y].add(m),c[C].add(m),c[k].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let y=0,C=b.length;y<C;++y){let k=b[y],q=k.start,H=k.count;for(let ot=q,G=q+H;ot<G;ot+=3)f(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}let P=new W,x=new W,T=new W,w=new W;function U(y){T.fromBufferAttribute(s,y),w.copy(T);let C=o[y];P.copy(C),P.sub(T.multiplyScalar(T.dot(C))).normalize(),x.crossVectors(w,C);let q=x.dot(c[y])<0?-1:1;a.setXYZW(y,P.x,P.y,P.z,q)}for(let y=0,C=b.length;y<C;++y){let k=b[y],q=k.start,H=k.count;for(let ot=q,G=q+H;ot<G;ot+=3)U(t.getX(ot+0)),U(t.getX(ot+1)),U(t.getX(ot+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new W,r=new W,a=new W,o=new W,c=new W,l=new W,h=new W,d=new W;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),p=0,g=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?p=c[M]*o.data.stride+o.offset:p=c[M]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new dn(u,h,d)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Pl=new W,Md=new W,Sd=new te,In=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Pl.subVectors(n,e).cross(Md.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Pl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sd.getNormalMatrix(t),s=this.coplanarPoint(Pl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},bd=0,oi=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=Ls,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new In().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var si=new W,Il=new W,ca=new W,ha=new W,Ba=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Il.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),ha.copy(this.origin).sub(Il);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ca),o=ha.dot(this.direction),c=-ha.dot(ca),l=ha.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let M=1/h;d*=M,u*=M,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Il).addScaledVector(ca,u),p}intersectSphere(t,e){if(t.radius<0)return null;si.subVectors(t.center,this.origin);let n=si.dot(this.direction),s=si.dot(si)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,p=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,f=n.x-a.x,b=n.y-a.y,P=n.z-a.z,x=Math.abs(c),T=Math.abs(l),w=Math.abs(h),U,y,C,k,q,H,ot,G,et,ut,tt,F;if(x>=T&&x>=w?(C=c,H=d,et=g,F=f,c>=0?(U=l,y=h,k=u,q=p,ot=M,G=m,ut=b,tt=P):(U=h,y=l,k=p,q=u,ot=m,G=M,ut=P,tt=b)):T>=w?(C=l,H=u,et=M,F=b,l>=0?(U=h,y=c,k=p,q=d,ot=m,G=g,ut=P,tt=f):(U=c,y=h,k=d,q=p,ot=g,G=m,ut=f,tt=P)):(C=h,H=p,et=m,F=P,h>=0?(U=c,y=l,k=d,q=u,ot=g,G=M,ut=f,tt=b):(U=l,y=c,k=u,q=d,ot=M,G=g,ut=b,tt=f)),C===0)return null;let O=U/C,Y=y/C,lt=1/C,Ct=k-O*H,vt=q-Y*H,Zt=ot-O*et,Xt=G-Y*et,Qt=ut-O*F,B=tt-Y*F,L=Qt*Xt-B*Zt,I=Ct*B-vt*Qt,R=Zt*vt-Xt*Ct;if(s){if(L<0||I<0||R<0)return null}else if((L<0||I<0||R<0)&&(L>0||I>0||R>0))return null;let N=L+I+R;if(N===0)return null;let it=lt*(L*H+I*et+R*F);return(N>0?it<0:it>0)?null:this.at(it/N,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},dh=new Ee,Oi=new Ba,ua=new Si,fh=new W,da=new W,fa=new W,pa=new W,Ll=new W,ma=new W,ph=new W,ga=new W,Pe=class extends Ye{constructor(t=new Oe,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Ll.fromBufferAttribute(d,t),a?ma.addScaledVector(Ll,h):ma.addScaledVector(Ll.sub(e),h))}e.add(ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(ua.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(ua,fh)===null||Oi.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(dh.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(dh),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),P=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,T=P;x<T;x+=3){let w=o.getX(x),U=o.getX(x+1),y=o.getX(x+2);s=_a(this,f,t,n,l,h,d,w,U,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let b=o.getX(m),P=o.getX(m+1),x=o.getX(m+2);s=_a(this,a,t,n,l,h,d,b,P,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),P=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,T=P;x<T;x+=3){let w=x,U=x+1,y=x+2;s=_a(this,f,t,n,l,h,d,w,U,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){let b=m,P=m+1,x=m+2;s=_a(this,a,t,n,l,h,d,b,P,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Td(i,t,e,n,s,r,a,o){let c;if(t.side===Ze?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Ai,o),c===null)return null;ga.copy(o),ga.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ga);return l<e.near||l>e.far?null:{distance:l,point:ga.clone(),object:i}}function _a(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,da),i.getVertexPosition(c,fa),i.getVertexPosition(l,pa);let h=Td(i,t,e,n,da,fa,pa,ph);if(h){let d=new W;Mi.getBarycoord(ph,da,fa,pa,d),s&&(h.uv=Mi.getInterpolatedAttribute(s,o,c,l,d,new wt)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,o,c,l,d,new wt)),a&&(h.normal=Mi.getInterpolatedAttribute(a,o,c,l,d,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new W,materialIndex:0};Mi.getNormal(da,fa,pa,u.normal),h.face=u,h.barycoord=d}return h}var Vi=class extends qe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ve,h=Ve,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class extends dn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hs=new Ee,mh=new Ee,xa=[],gh=new Xn,wd=new Ee,er=new Pe,nr=new Si,mr=class extends Pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),gh.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(gh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),nr.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),t.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),mh.multiplyMatrices(n,hs),er.matrixWorld=mh,er.raycast(t,xa);for(let a=0,o=xa.length;a<o;a++){let c=xa[a];c.instanceId=r,c.object=this,e.push(c)}xa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vi(new Float32Array(s*this.count),s,this.count,go,bn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bi=new Si,Ed=new wt(.5,.5),ya=new W,Ss=class{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],M=r[9],m=r[10],f=r[11],b=r[12],P=r[13],x=r[14],T=r[15];if(s[0].setComponents(l-a,p-h,f-g,T-b).normalize(),s[1].setComponents(l+a,p+h,f+g,T+b).normalize(),s[2].setComponents(l+o,p+d,f+M,T+P).normalize(),s[3].setComponents(l-o,p-d,f-M,T-P).normalize(),n)s[4].setComponents(c,u,m,x).normalize(),s[5].setComponents(l-c,p-u,f-m,T-x).normalize();else if(s[4].setComponents(l-c,p-u,f-m,T-x).normalize(),e===Ln)s[5].setComponents(l+c,p+u,f+m,T+x).normalize();else if(e===xs)s[5].setComponents(c,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){Bi.center.set(0,0,0);let e=Ed.distanceTo(t.center);return Bi.radius=.7071067811865476+e,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ya.x=s.normal.x>0?t.max.x:t.min.x,ya.y=s.normal.y>0?t.max.y:t.min.y,ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gr=class extends qe{constructor(t=[],e=Ci,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},li=class extends qe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bi=class extends qe{constructor(t,e,n=On,s,r,a,o=Ve,c=Ve,l,h=Hn,d=1){if(h!==Hn&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},za=class extends bi{constructor(t,e=On,n=Ci,s,r,a=Ve,o=Ve,c,l=Hn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},_r=class extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},qn=class i extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function g(M,m,f,b,P,x,T,w,U,y,C){let k=x/U,q=T/y,H=x/2,ot=T/2,G=w/2,et=U+1,ut=y+1,tt=0,F=0,O=new W;for(let Y=0;Y<ut;Y++){let lt=Y*q-ot;for(let Ct=0;Ct<et;Ct++){let vt=Ct*k-H;O[M]=vt*b,O[m]=lt*P,O[f]=G,l.push(O.x,O.y,O.z),O[M]=0,O[m]=0,O[f]=w>0?1:-1,h.push(O.x,O.y,O.z),d.push(Ct/U),d.push(1-Y/y),tt+=1}}for(let Y=0;Y<y;Y++)for(let lt=0;lt<U;lt++){let Ct=u+lt+et*Y,vt=u+lt+et*(Y+1),Zt=u+(lt+1)+et*(Y+1),Xt=u+(lt+1)+et*Y;c.push(Ct,vt,Xt),c.push(vt,Zt,Xt),F+=6}o.addGroup(p,F,C),p+=F,u+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var xr=class i extends Oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new W,h=new wt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let p=n+d/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ka=class i extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,M=[],m=n/2,f=0;b(),a===!1&&(t>0&&P(!0),e>0&&P(!1)),this.setIndex(h),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(p,2));function b(){let x=new W,T=new W,w=0,U=(e-t)/n;for(let y=0;y<=r;y++){let C=[],k=y/r,q=k*(e-t)+t;for(let H=0;H<=s;H++){let ot=H/s,G=ot*c+o,et=Math.sin(G),ut=Math.cos(G);T.x=q*et,T.y=-k*n+m,T.z=q*ut,d.push(T.x,T.y,T.z),x.set(et,U,ut).normalize(),u.push(x.x,x.y,x.z),p.push(ot,1-k),C.push(g++)}M.push(C)}for(let y=0;y<s;y++)for(let C=0;C<r;C++){let k=M[C][y],q=M[C+1][y],H=M[C+1][y+1],ot=M[C][y+1];(t>0||C!==0)&&(h.push(k,q,ot),w+=3),(e>0||C!==r-1)&&(h.push(q,H,ot),w+=3)}l.addGroup(f,w,0),f+=w}function P(x){let T=g,w=new wt,U=new W,y=0,C=x===!0?t:e,k=x===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*k,0),u.push(0,k,0),p.push(.5,.5),g++;let q=g;for(let H=0;H<=s;H++){let G=H/s*c+o,et=Math.cos(G),ut=Math.sin(G);U.x=C*ut,U.y=m*k,U.z=C*et,d.push(U.x,U.y,U.z),u.push(0,k,0),w.x=et*.5+.5,w.y=ut*.5*k+.5,p.push(w.x,w.y),g++}for(let H=0;H<s;H++){let ot=T+H,G=q+H;x===!0?h.push(G,G+1,ot):h.push(G+1,G,ot),y+=3}l.addGroup(f,y,x===!0?1:2),f+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yr=class i extends ka{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ne("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new wt:new W);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new W,s=[],r=[],a=[],o=new W,c=new Ee;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new W)}r[0]=new W,a[0]=new W;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(fe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(fe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},bs=class extends pn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new wt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Va=class extends bs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var _h=new W,xh=new W,Dl=new yc,Nl=new yc,Ul=new yc,Ga=class extends pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new W){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(xh.subVectors(s[0],s[1]).add(s[0]),l=xh);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(_h.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_h),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),p),M=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Dl.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,M,m),Nl.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,M,m),Ul.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Nl.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Ul.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Dl.calc(c),Nl.calc(c),Ul.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new W().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function yh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Ad(i,t){let e=1-i;return e*e*t}function Cd(i,t){return 2*(1-i)*i*t}function Rd(i,t){return i*i*t}function sr(i,t,e,n){return Ad(i,t)+Cd(i,e)+Rd(i,n)}function Pd(i,t){let e=1-i;return e*e*e*t}function Id(i,t){let e=1-i;return 3*e*e*i*t}function Ld(i,t){return 3*(1-i)*i*i*t}function Dd(i,t){return i*i*i*t}function rr(i,t,e,n,s){return Pd(i,t)+Id(i,e)+Ld(i,n)+Dd(i,s)}var vr=class extends pn{constructor(t=new wt,e=new wt,n=new wt,s=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new wt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rr(t,s.x,r.x,a.x,o.x),rr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ha=class extends pn{constructor(t=new W,e=new W,n=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new W){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rr(t,s.x,r.x,a.x,o.x),rr(t,s.y,r.y,a.y,o.y),rr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mr=class extends pn{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wa=class extends pn{constructor(t=new W,e=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new W){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new W){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sr=class extends pn{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(sr(t,s.x,r.x,a.x),sr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xa=class extends pn{constructor(t=new W,e=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new W){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(sr(t,s.x,r.x,a.x),sr(t,s.y,r.y,a.y),sr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},br=class extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(yh(o,c.x,l.x,h.x,d.x),yh(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new wt().fromArray(s))}return this}},Gl=Object.freeze({__proto__:null,ArcCurve:Va,CatmullRomCurve3:Ga,CubicBezierCurve:vr,CubicBezierCurve3:Ha,EllipseCurve:bs,LineCurve:Mr,LineCurve3:Wa,QuadraticBezierCurve:Sr,QuadraticBezierCurve3:Xa,SplineCurve:br}),qa=class extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Gl[s.type]().fromJSON(s))}return this}},Yn=class extends qa{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Mr(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Sr(this.currentPoint.clone(),new wt(t,e),new wt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new vr(this.currentPoint.clone(),new wt(t,e),new wt(n,s),new wt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new br(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new bs(t,e,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ci=class extends Yn{constructor(t){super(t),this.uuid=Us(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Yn().fromJSON(s))}return this}};function Nd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=gu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=zd(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let h=o,d=c;for(let u=e;u<s;u+=e){let p=i[u],g=i[u+1];p<o&&(o=p),g<c&&(c=g),p>h&&(h=p),g>d&&(d=g)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return Tr(r,a,e,o,c,l,0),a}function gu(i,t,e,n,s){let r;if(s===$d(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=vh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=vh(a/n|0,i[a],i[a+1],r);return r&&Ts(r,r.next)&&(Er(r),r=r.next),r}function Gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ts(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Tr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Wd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Fd(i,n,s,r):Ud(i)){t.push(c.i,i.i,l.i),Er(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Od(Gi(i),t),Tr(i,t,e,n,s,r,2)):a===2&&Bd(i,t,e,n,s,r):Tr(Gi(i),t,e,n,s,r,1);break}}}function Ud(i){let t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),u=Math.max(s,r,a),p=Math.max(o,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&ir(s,o,r,c,a,l,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fd(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ie(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,u=a.y,p=Math.min(o,c,l),g=Math.min(h,d,u),M=Math.max(o,c,l),m=Math.max(h,d,u),f=Hl(p,g,t,e,n),b=Hl(M,m,t,e,n),P=i.prevZ,x=i.nextZ;for(;P&&P.z>=f&&x&&x.z<=b;){if(P.x>=p&&P.x<=M&&P.y>=g&&P.y<=m&&P!==s&&P!==a&&ir(o,h,c,d,l,u,P.x,P.y)&&Ie(P.prev,P,P.next)>=0||(P=P.prevZ,x.x>=p&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ir(o,h,c,d,l,u,x.x,x.y)&&Ie(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;P&&P.z>=f;){if(P.x>=p&&P.x<=M&&P.y>=g&&P.y<=m&&P!==s&&P!==a&&ir(o,h,c,d,l,u,P.x,P.y)&&Ie(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;x&&x.z<=b;){if(x.x>=p&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ir(o,h,c,d,l,u,x.x,x.y)&&Ie(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Od(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ts(n,s)&&xu(n,e,e.next,s)&&wr(n,s)&&wr(s,n)&&(t.push(n.i,e.i,s.i),Er(e),Er(e.next),e=i=s),e=e.next}while(e!==i);return Gi(e)}function Bd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Yd(a,o)){let c=yu(a,o);a=Gi(a,a.next),c=Gi(c,c.next),Tr(a,t,e,n,s,r,0),Tr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function zd(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=gu(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(qd(l))}s.sort(kd);for(let r=0;r<s.length;r++)e=Vd(s[r],e);return e}function kd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Vd(i,t){let e=Gd(i,t);if(!e)return t;let n=yu(e,i);return Gi(n,n.next),Gi(e,e.next)}function Gd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ts(i,e))return e;do{if(Ts(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&_u(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);wr(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Hd(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Hd(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function Wd(i,t,e,n){let s=i;do s.z===0&&(s.z=Hl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xd(s)}function Xd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Hl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function qd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _u(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ir(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&_u(i,t,e,n,s,r,a,o)}function Yd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Zd(i,t)&&(wr(i,t)&&wr(t,i)&&Jd(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||Ts(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ts(i,t){return i.x===t.x&&i.y===t.y}function xu(i,t,e,n){let s=Ma(Ie(i,t,e)),r=Ma(Ie(i,t,n)),a=Ma(Ie(e,n,i)),o=Ma(Ie(e,n,t));return!!(s!==r&&a!==o||s===0&&va(i,e,t)||r===0&&va(i,n,t)||a===0&&va(e,i,n)||o===0&&va(e,t,n))}function va(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ma(i){return i>0?1:i<0?-1:0}function Zd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function wr(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function Jd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yu(i,t){let e=Wl(i.i,i.x,i.y),n=Wl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vh(i,t,e,n){let s=Wl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $d(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Xl=class{static triangulate(t,e,n=2){return Nd(t,e,n)}},un=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Mh(t),Sh(n,t);let a=t.length;e.forEach(Mh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Sh(n,e[c]);let o=Xl.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Mh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ws=class i extends Oe{constructor(t=new ci([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Kd,P,x=!1,T,w,U,y;if(f){P=f.getSpacedPoints(h),x=!0,u=!1;let E=f.isCatmullRomCurve3?f.closed:!1;T=f.computeFrenetFrames(h,E),w=new W,U=new W,y=new W}u||(m=0,p=0,g=0,M=0);let C=o.extractPoints(l),k=C.shape,q=C.holes;if(!un.isClockWise(k)){k=k.reverse();for(let E=0,V=q.length;E<V;E++){let z=q[E];un.isClockWise(z)&&(q[E]=z.reverse())}}function ot(E){let z=10000000000000001e-36,$=E[0];for(let rt=1;rt<=E.length;rt++){let ht=rt%E.length,yt=E[ht],Mt=yt.x-$.x,j=yt.y-$.y,v=Mt*Mt+j*j,Bt=Math.max(Math.abs(yt.x),Math.abs(yt.y),Math.abs($.x),Math.abs($.y)),qt=z*Bt*Bt;if(v<=qt){E.splice(ht,1),rt--;continue}$=yt}}ot(k),q.forEach(ot);let G=q.length,et=k;for(let E=0;E<G;E++){let V=q[E];k=k.concat(V)}function ut(E,V,z){return V||re("ExtrudeGeometry: vec does not exist"),E.clone().addScaledVector(V,z)}let tt=k.length;function F(E,V,z){let $,rt,ht,yt=E.x-V.x,Mt=E.y-V.y,j=z.x-E.x,v=z.y-E.y,Bt=yt*yt+Mt*Mt,qt=yt*v-Mt*j;if(Math.abs(qt)>Number.EPSILON){let A=Math.sqrt(Bt),_=Math.sqrt(j*j+v*v),Z=V.x-Mt/A,at=V.y+yt/A,dt=z.x-v/_,Ut=z.y+j/_,It=((dt-Z)*v-(Ut-at)*j)/(yt*v-Mt*j);$=Z+yt*It-E.x,rt=at+Mt*It-E.y;let pt=$*$+rt*rt;if(pt<=2)return new wt($,rt);ht=Math.sqrt(pt/2)}else{let A=!1;yt>Number.EPSILON?j>Number.EPSILON&&(A=!0):yt<-Number.EPSILON?j<-Number.EPSILON&&(A=!0):Math.sign(Mt)===Math.sign(v)&&(A=!0),A?($=-Mt,rt=yt,ht=Math.sqrt(Bt)):($=yt,rt=Mt,ht=Math.sqrt(Bt/2))}return new wt($/ht,rt/ht)}let O=[];for(let E=0,V=et.length,z=V-1,$=E+1;E<V;E++,z++,$++)z===V&&(z=0),$===V&&($=0),O[E]=F(et[E],et[z],et[$]);let Y=[],lt,Ct=O.concat();for(let E=0,V=G;E<V;E++){let z=q[E];lt=[];for(let $=0,rt=z.length,ht=rt-1,yt=$+1;$<rt;$++,ht++,yt++)ht===rt&&(ht=0),yt===rt&&(yt=0),lt[$]=F(z[$],z[ht],z[yt]);Y.push(lt),Ct=Ct.concat(lt)}let vt;if(m===0)vt=un.triangulateShape(et,q);else{let E=[],V=[];for(let z=0;z<m;z++){let $=z/m,rt=p*Math.cos($*Math.PI/2),ht=g*Math.sin($*Math.PI/2)+M;for(let yt=0,Mt=et.length;yt<Mt;yt++){let j=ut(et[yt],O[yt],ht);I(j.x,j.y,-rt),$===0&&E.push(j)}for(let yt=0,Mt=G;yt<Mt;yt++){let j=q[yt];lt=Y[yt];let v=[];for(let Bt=0,qt=j.length;Bt<qt;Bt++){let A=ut(j[Bt],lt[Bt],ht);I(A.x,A.y,-rt),$===0&&v.push(A)}$===0&&V.push(v)}}vt=un.triangulateShape(E,V)}let Zt=vt.length,Xt=g+M;for(let E=0;E<tt;E++){let V=u?ut(k[E],Ct[E],Xt):k[E];x?(U.copy(T.normals[0]).multiplyScalar(V.x),w.copy(T.binormals[0]).multiplyScalar(V.y),y.copy(P[0]).add(U).add(w),I(y.x,y.y,y.z)):I(V.x,V.y,0)}for(let E=1;E<=h;E++)for(let V=0;V<tt;V++){let z=u?ut(k[V],Ct[V],Xt):k[V];x?(U.copy(T.normals[E]).multiplyScalar(z.x),w.copy(T.binormals[E]).multiplyScalar(z.y),y.copy(P[E]).add(U).add(w),I(y.x,y.y,y.z)):I(z.x,z.y,d/h*E)}for(let E=m-1;E>=0;E--){let V=E/m,z=p*Math.cos(V*Math.PI/2),$=g*Math.sin(V*Math.PI/2)+M;for(let rt=0,ht=et.length;rt<ht;rt++){let yt=ut(et[rt],O[rt],$);I(yt.x,yt.y,d+z)}for(let rt=0,ht=q.length;rt<ht;rt++){let yt=q[rt];lt=Y[rt];for(let Mt=0,j=yt.length;Mt<j;Mt++){let v=ut(yt[Mt],lt[Mt],$);x?I(v.x,v.y+P[h-1].y,P[h-1].x+z):I(v.x,v.y,d+z)}}}Qt(),B();function Qt(){let E=s.length/3;if(u){let V=0,z=tt*V;for(let $=0;$<Zt;$++){let rt=vt[$];R(rt[2]+z,rt[1]+z,rt[0]+z)}V=h+m*2,z=tt*V;for(let $=0;$<Zt;$++){let rt=vt[$];R(rt[0]+z,rt[1]+z,rt[2]+z)}}else{for(let V=0;V<Zt;V++){let z=vt[V];R(z[2],z[1],z[0])}for(let V=0;V<Zt;V++){let z=vt[V];R(z[0]+tt*h,z[1]+tt*h,z[2]+tt*h)}}n.addGroup(E,s.length/3-E,0)}function B(){let E=s.length/3,V=0;L(et,V),V+=et.length;for(let z=0,$=q.length;z<$;z++){let rt=q[z];L(rt,V),V+=rt.length}n.addGroup(E,s.length/3-E,1)}function L(E,V){let z=E.length;for(;--z>=0;){let $=z,rt=z-1;rt<0&&(rt=E.length-1);for(let ht=0,yt=h+m*2;ht<yt;ht++){let Mt=tt*ht,j=tt*(ht+1),v=V+$+Mt,Bt=V+rt+Mt,qt=V+rt+j,A=V+$+j;N(v,Bt,qt,A)}}}function I(E,V,z){c.push(E),c.push(V),c.push(z)}function R(E,V,z){it(E),it(V),it(z);let $=s.length/3,rt=b.generateTopUV(n,s,$-3,$-2,$-1);xt(rt[0]),xt(rt[1]),xt(rt[2])}function N(E,V,z,$){it(E),it(V),it($),it(V),it(z),it($);let rt=s.length/3,ht=b.generateSideWallUV(n,s,rt-6,rt-3,rt-2,rt-1);xt(ht[0]),xt(ht[1]),xt(ht[3]),xt(ht[1]),xt(ht[2]),xt(ht[3])}function it(E){s.push(c[E*3+0]),s.push(c[E*3+1]),s.push(c[E*3+2])}function xt(E){r.push(E.x),r.push(E.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Gl[s.type]().fromJSON(s)),new i(n,t.options)}},Kd={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new wt(r,a),new wt(o,c),new wt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],p=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new wt(a,1-c),new wt(l,1-d),new wt(u,1-g),new wt(M,1-f)]:[new wt(o,1-c),new wt(h,1-d),new wt(p,1-g),new wt(m,1-f)]}};function jd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var hi=class i extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,p=[],g=[],M=[],m=[];for(let f=0;f<h;f++){let b=f*u-a;for(let P=0;P<l;P++){let x=P*d-r;g.push(x,-b,0),M.push(0,0,1),m.push(P/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){let P=b+l*f,x=b+l*(f+1),T=b+1+l*(f+1),w=b+1+l*f;p.push(P,x,w),p.push(x,T,w)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Es=class i extends Oe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],d=t,u=(e-t)/s,p=new W,g=new wt;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){let f=r+m/n*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let M=0;M<s;M++){let m=M*(n+1);for(let f=0;f<n;f++){let b=f+m,P=b,x=b+n+1,T=b+n+2,w=b+1;o.push(P,x,w),o.push(x,T,w)}}this.setIndex(o),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ar=class i extends Oe{constructor(t=new ci([new wt(0,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new me(s,3)),this.setAttribute("normal",new me(r,3)),this.setAttribute("uv",new me(a,2));function l(h){let d=s.length/3,u=h.extractPoints(e),p=u.shape,g=u.holes;un.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let b=g[m];un.isClockWise(b)===!0&&(g[m]=b.reverse())}let M=un.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let b=g[m];p=p.concat(b)}for(let m=0,f=p.length;m<f;m++){let b=p[m];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let m=0,f=M.length;m<f;m++){let b=M[m],P=b[0]+d,x=b[1]+d,T=b[2]+d;n.push(P,x,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Qd(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Qd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Cr=class i extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new W,u=new W,p=[],g=[],M=[],m=[];for(let f=0;f<=n;f++){let b=[],P=f/n,x=a+P*o,T=t*Math.cos(x),w=Math.sqrt(t*t-T*T),U=0;f===0&&a===0?U=.5/e:f===n&&c===Math.PI&&(U=-.5/e);for(let y=0;y<=e;y++){let C=y/e,k=s+C*r;d.x=-w*Math.cos(k),d.y=T,d.z=w*Math.sin(k),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(C+U,1-P),b.push(l++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){let P=h[f][b+1],x=h[f][b],T=h[f+1][b],w=h[f+1][b+1];(f!==0||a>0)&&p.push(P,x,w),(f!==n-1||c<Math.PI)&&p.push(x,T,w)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Rr=class i extends Oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new W,p=new W,g=new W;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let f=0;f<=s;f++){let b=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(b),p.y=(t+e*Math.cos(m))*Math.sin(b),p.z=e*Math.sin(m),l.push(p.x,p.y,p.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let f=(s+1)*M+m-1,b=(s+1)*(M-1)+m-1,P=(s+1)*(M-1)+m,x=(s+1)*M+m;c.push(f,b,x),c.push(b,P,x)}this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function qi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(bh(s))s.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(bh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=qi(i[e]);for(let s in n)t[s]=n[s]}return t}function bh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var vu={clone:qi,merge:Qe},ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new wt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new te().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ee().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ya=class extends mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dn=class extends oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yr,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Nn=class extends Dn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Pr=class extends oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yr,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=lo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Za=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ja=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function us(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Fl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ti=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$a=class extends Ti{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case kl:r=t,o=2*e-n;break;case Vl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case kl:a=t,c=2*n-e;break;case Vl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,f=-u*m+2*u*M-u*g,b=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*g+1,P=(-1-p)*m+(1.5+p)*M+.5*g,x=p*m-p*M;for(let T=0;T!==o;++T)r[T]=f*a[h+T]+b*a[l+T]+P*a[c+T]+x*a[d+T];return r}},Ka=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},ja=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qa=class extends Ti{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),M=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*M+a[c+m]*g;return r}let u=o*2,p=t-1;for(let g=0;g!==o;++g){let M=a[l+g],m=a[c+g],f=p*u+g*2,b=d[f],P=d[f+1],x=t*u+g*2,T=h[x],w=h[x+1],U=rf(n,e,b,T,s);r[g]=Mu(U,M,P,w,m)}return r}};function Mu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function sf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function rf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Mu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=sf(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=us(e,this.TimeBufferType),this.values=us(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:us(t.times,Array),values:us(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Fl(t.settings)&&(n.settings={inTangents:us(t.settings.inTangents,Array),outTangents:us(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Qa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ar:e=this.InterpolantFactoryMethodDiscrete;break;case Da:e=this.InterpolantFactoryMethodLinear;break;case Ta:e=this.InterpolantFactoryMethodSmooth;break;case Bl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ne("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return Da;case this.InterpolantFactoryMethodSmooth:return Ta;case this.InterpolantFactoryMethodBezier:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Fl(this.settings)&&(Th(this.settings.inTangents,t),Th(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(re("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(re("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){re("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){re("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&ad(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){re("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ta,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let M=e[d+g];if(M!==e[u+g]||M!==e[p+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Fl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Th(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Da;var wi=class extends gn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=ar;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};to.prototype.ValueTypeName="color";var eo=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};eo.prototype.ValueTypeName="number";var no=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)fn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ir=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new no(this.times,this.values,this.getValueSize(),t)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends gn{constructor(t,e,n){super(t,e,n)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=ar;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};io.prototype.ValueTypeName="vector";var ql={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(wh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!wh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function wh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var so=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Su=new so,Hi=class{constructor(t){this.manager=t!==void 0?t:Su,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Hi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ri={},Yl=class extends Error{constructor(t,e){super(t),this.response=e}},Lr=class extends Hi{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=ql.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(ri[t]!==void 0){ri[t].push({onLoad:e,onProgress:n,onError:s});return}ri[t]=[],ri[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ri[t],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=u?parseInt(u):0,g=p!==0,M=0,m=new ReadableStream({start(f){b();function b(){d.read().then(({done:P,value:x})=>{if(P)f.close();else{M+=x.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:M,total:p});for(let w=0,U=h.length;w<U;w++){let y=h[w];y.onProgress&&y.onProgress(T)}f.enqueue(x),b()}},P=>{f.error(P)})}}});return new Response(m)}else throw new Yl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{ql.add(`file:${t}`,l);let h=ri[t];delete ri[t];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=ri[t];if(h===void 0)throw this.manager.itemError(t),l;delete ri[t];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var As=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Ol=new Ee,Eh=new W,Ah=new W,Dr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eh),Ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ah),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ol,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===xs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sa=new W,ba=new fn,Gn=new W,Nr=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sa,ba,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,Gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Sa,ba,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new W,Ch=new wt,Rh=new wt,He=class extends Nr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Na*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Na*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Rh),e.subVectors(Rh,Ch)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Zl=class extends Dr{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0}},Ur=class extends As{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Cs=class extends Nr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jl=class extends Dr{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rs=class extends As{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Jl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Fr=class extends As{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ds=-90,fs=1,ro=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new He(ds,fs,t,e);s.layers=this.layers,this.add(s);let r=new He(ds,fs,t,e);r.layers=this.layers,this.add(r);let a=new He(ds,fs,t,e);a.layers=this.layers,this.add(a);let o=new He(ds,fs,t,e);o.layers=this.layers,this.add(o);let c=new He(ds,fs,t,e);c.layers=this.layers,this.add(c);let l=new He(ds,fs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ao=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Mc="\\[\\]\\.:\\/",af=new RegExp("["+Mc+"]","g"),Sc="[^"+Mc+"]",of="[^"+Mc.replace("\\.","")+"]",lf=/((?:WC+[\/:])*)/.source.replace("WC",Sc),cf=/(WCOD+)?/.source.replace("WCOD",of),hf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sc),uf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sc),df=new RegExp("^"+lf+cf+hf+uf+"$"),ff=["material","materials","bones","map"],$l=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(af,"")}static parseTrackName(t){let e=df.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ff.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;re("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=$l;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F_=new Float32Array(1);var Cc=class Cc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Cc.prototype.isMatrix2=!0;var Kl=Cc,Ph=new wt,Ps=class{constructor(t=new wt(1/0,1/0),e=new wt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ph.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ph).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var Un=class{constructor(){this.type="ShapePath",this.color=new ue,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Yn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(c,l){let h=!1,d=l.length;for(let u=0,p=d-1;u<d;p=u++){let g=l[u],M=l[p];g.y>c.y!=M.y>c.y&&c.x<(M.x-g.x)*(c.y-g.y)/(M.y-g.y)+g.x&&(h=!h)}return h}function e(c,l){let h=l.getCenter(new wt);if(t(h,c))return h;let d=h.y,u=[],p=c.length;for(let g=0;g<p;g++){let M=c[g],m=c[(g+1)%p];if(M.y>d!=m.y>d){let f=M.x+(d-M.y)*(m.x-M.x)/(m.y-M.y);u.push(f)}}return u.length>1&&(u.sort((g,M)=>g-M),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(ne('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let s=n==="nonzero"?(c=>c!==0):(c=>(c&1)!==0),r=[];for(let c of this.subPaths){let l=c.getPoints();if(l.length<3)continue;let h=un.area(l);if(h===0)continue;let d=new Ps;for(let u=0;u<l.length;u++)d.expandByPoint(l[u]);r.push({subPath:c,points:l,boundingBox:d,interiorPoint:e(l,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((c,l)=>l.absArea-c.absArea);for(let c=0;c<r.length;c++){let l=r[c],h=0;for(let d=c-1;d>=0;d--){let u=r[d];if(u.boundingBox.containsBox(l.boundingBox)&&t(l.interiorPoint,u.points)){l.container=u.exclude?u.container:u,h=u.winding,l.winding+=h;break}}s(l.winding)===s(h)&&(l.exclude=!0)}for(let c of r)c.exclude||(c.role=c.container===null||c.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let c of r){if(c.exclude||c.role!=="outer")continue;let l=new ci;l.curves=c.subPath.curves,a.push(l),o.set(c,l)}for(let c of r){if(c.exclude||c.role!=="hole")continue;let l=o.get(c.container);if(!l)continue;let h=new Yn;h.curves=c.subPath.curves,l.holes.push(h)}return a}};function bc(i,t,e,n){let s=pf(n);switch(e){case mc:return i*t;case go:return i*t/s.components*s.byteLength;case _o:return i*t/s.components*s.byteLength;case Ii:return i*t*2/s.components*s.byteLength;case xo:return i*t*2/s.components*s.byteLength;case gc:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case yo:return i*t*4/s.components*s.byteLength;case Vr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:case bo:return Math.max(i,16)*Math.max(t,8)/4;case vo:case So:return Math.max(i,8)*Math.max(t,8)/2;case To:case wo:case Ao:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Eo:case Xr:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wo:case Xo:case qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yo:case Zo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qr:case Jo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pf(i){switch(i){case on:case uc:return{byteLength:1,components:1};case Ds:case dc:case Bn:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case On:case fo:case bn:return{byteLength:4,components:1};case fc:case pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Wu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gf(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],M=d[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let M=d[p];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var _f=`#ifdef USE_ALPHAHASH
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
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
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
#endif`,Tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
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
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
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
#endif`,If=`#ifdef USE_BUMPMAP
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kf=`#define PI 3.141592653589793
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
} // validated`,Vf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gf=`vec3 transformedNormal = objectNormal;
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
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
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
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
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
#include <lightprobes_pars_fragment>`,cp=`#ifdef USE_ENVMAP
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
#endif`,mp=`uniform sampler2D dfgLUT;
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ap=`#if defined( USE_POINTS_UV )
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
#endif`,Cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ip=`#if defined( USE_MORPHCOLORS )
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
#endif`,Dp=`#ifdef USE_MORPHTARGETS
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
#endif`,Np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
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
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
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
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nm=`float getShadowMask() {
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
}`,im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xm=`uniform sampler2D t2D;
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
}`,ym=`varying vec3 vWorldDirection;
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
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
}`,Tm=`#if DEPTH_PACKING == 3200
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
}`,wm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cm=`uniform sampler2D tEquirect;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Dm=`#define LAMBERT
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
}`,Nm=`#define LAMBERT
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
}`,Um=`#define MATCAP
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
}`,Fm=`#define MATCAP
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
}`,Om=`#define NORMAL
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
}`,Bm=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,Gm=`#define STANDARD
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
}`,Wm=`#define TOON
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
}`,Xm=`uniform float size;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Zm=`uniform vec3 color;
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
}`,Jm=`uniform float rotation;
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
}`,$m=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:_f,alphahash_pars_fragment:xf,alphamap_fragment:yf,alphamap_pars_fragment:vf,alphatest_fragment:Mf,alphatest_pars_fragment:Sf,aomap_fragment:bf,aomap_pars_fragment:Tf,batching_pars_vertex:wf,batching_vertex:Ef,begin_vertex:Af,beginnormal_vertex:Cf,bsdfs:Rf,iridescence_fragment:Pf,bumpmap_pars_fragment:If,clipping_planes_fragment:Lf,clipping_planes_pars_fragment:Df,clipping_planes_pars_vertex:Nf,clipping_planes_vertex:Uf,color_fragment:Ff,color_pars_fragment:Of,color_pars_vertex:Bf,color_vertex:zf,common:kf,cube_uv_reflection_fragment:Vf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Wf,emissivemap_fragment:Xf,emissivemap_pars_fragment:qf,colorspace_fragment:Yf,colorspace_pars_fragment:Zf,envmap_fragment:Jf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Kf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:cp,envmap_vertex:Qf,fog_vertex:tp,fog_pars_vertex:ep,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:ap,lights_lambert_pars_fragment:op,lights_pars_begin:lp,lights_toon_fragment:hp,lights_toon_pars_fragment:up,lights_phong_fragment:dp,lights_phong_pars_fragment:fp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:_p,lights_fragment_end:xp,lightprobes_pars_fragment:yp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:Sp,logdepthbuf_vertex:bp,map_fragment:Tp,map_pars_fragment:wp,map_particle_fragment:Ep,map_particle_pars_fragment:Ap,metalnessmap_fragment:Cp,metalnessmap_pars_fragment:Rp,morphinstance_vertex:Pp,morphcolor_vertex:Ip,morphnormal_vertex:Lp,morphtarget_pars_vertex:Dp,morphtarget_vertex:Np,normal_fragment_begin:Up,normal_fragment_maps:Fp,normal_pars_fragment:Op,normal_pars_vertex:Bp,normal_vertex:zp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Vp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Hp,iridescence_pars_fragment:Wp,opaque_fragment:Xp,packing:qp,premultiplied_alpha_fragment:Yp,project_vertex:Zp,dithering_fragment:Jp,dithering_pars_fragment:$p,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:Qp,shadowmap_pars_vertex:tm,shadowmap_vertex:em,shadowmask_pars_fragment:nm,skinbase_vertex:im,skinning_pars_vertex:sm,skinning_vertex:rm,skinnormal_vertex:am,specularmap_fragment:om,specularmap_pars_fragment:lm,tonemapping_fragment:cm,tonemapping_pars_fragment:hm,transmission_fragment:um,transmission_pars_fragment:dm,uv_pars_fragment:fm,uv_pars_vertex:pm,uv_vertex:mm,worldpos_vertex:gm,background_vert:_m,background_frag:xm,backgroundCube_vert:ym,backgroundCube_frag:vm,cube_vert:Mm,cube_frag:Sm,depth_vert:bm,depth_frag:Tm,distance_vert:wm,distance_frag:Em,equirect_vert:Am,equirect_frag:Cm,linedashed_vert:Rm,linedashed_frag:Pm,meshbasic_vert:Im,meshbasic_frag:Lm,meshlambert_vert:Dm,meshlambert_frag:Nm,meshmatcap_vert:Um,meshmatcap_frag:Fm,meshnormal_vert:Om,meshnormal_frag:Bm,meshphong_vert:zm,meshphong_frag:km,meshphysical_vert:Vm,meshphysical_frag:Gm,meshtoon_vert:Hm,meshtoon_frag:Wm,points_vert:Xm,points_frag:qm,shadow_vert:Ym,shadow_frag:Zm,sprite_vert:Jm,sprite_frag:$m},Ht={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},$n={basic:{uniforms:Qe([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Qe([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Qe([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Qe([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Qe([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new ue(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Qe([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Qe([Ht.points,Ht.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Qe([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Qe([Ht.common,Ht.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Qe([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Qe([Ht.sprite,Ht.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Qe([Ht.common,Ht.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Qe([Ht.lights,Ht.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};$n.physical={uniforms:Qe([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var jo={r:0,b:0,g:0},Km=new Ee,Xu=new te;Xu.set(-1,0,0,0,1,0,0,0,1);function jm(i,t,e,n,s,r){let a=new ue(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function p(b){let P=b.isScene===!0?b.background:null;if(P&&P.isTexture){let x=b.backgroundBlurriness>0;P=t.get(P,x)}return P}function g(b){let P=!1,x=p(b);x===null?m(a,o):x&&x.isColor&&(m(x,1),P=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,P){let x=p(P);x&&(x.isCubeTexture||x.mapping===zr)?(l===void 0&&(l=new Pe(new qn(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:qi($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Km.makeRotationFromEuler(P.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xu),l.material.toneMapped=pe.getTransfer(x.colorSpace)!==Me,(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Pe(new hi(2,2),new mn({name:"BackgroundMaterial",uniforms:qi($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.toneMapped=pe.getTransfer(x.colorSpace)!==Me,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,P){b.getRGB(jo,vc(i)),e.buffers.color.setClear(jo.r,jo.g,jo.b,P,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,P=1){a.set(b),o=P,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:M,dispose:f}}function Qm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(q,H,ot,G,et){let ut=!1,tt=d(q,G,ot,H);r!==tt&&(r=tt,l(r.object)),ut=p(q,G,ot,et),ut&&g(q,G,ot,et),et!==null&&t.update(et,i.ELEMENT_ARRAY_BUFFER),(ut||a)&&(a=!1,x(q,H,ot,G),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function c(){return i.createVertexArray()}function l(q){return i.bindVertexArray(q)}function h(q){return i.deleteVertexArray(q)}function d(q,H,ot,G){let et=G.wireframe===!0,ut=n[H.id];ut===void 0&&(ut={},n[H.id]=ut);let tt=q.isInstancedMesh===!0?q.id:0,F=ut[tt];F===void 0&&(F={},ut[tt]=F);let O=F[ot.id];O===void 0&&(O={},F[ot.id]=O);let Y=O[et];return Y===void 0&&(Y=u(c()),O[et]=Y),Y}function u(q){let H=[],ot=[],G=[];for(let et=0;et<e;et++)H[et]=0,ot[et]=0,G[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ot,attributeDivisors:G,object:q,attributes:{},index:null}}function p(q,H,ot,G){let et=r.attributes,ut=H.attributes,tt=0,F=ot.getAttributes();for(let O in F)if(F[O].location>=0){let lt=et[O],Ct=ut[O];if(Ct===void 0&&(O==="instanceMatrix"&&q.instanceMatrix&&(Ct=q.instanceMatrix),O==="instanceColor"&&q.instanceColor&&(Ct=q.instanceColor)),lt===void 0||lt.attribute!==Ct||Ct&&lt.data!==Ct.data)return!0;tt++}return r.attributesNum!==tt||r.index!==G}function g(q,H,ot,G){let et={},ut=H.attributes,tt=0,F=ot.getAttributes();for(let O in F)if(F[O].location>=0){let lt=ut[O];lt===void 0&&(O==="instanceMatrix"&&q.instanceMatrix&&(lt=q.instanceMatrix),O==="instanceColor"&&q.instanceColor&&(lt=q.instanceColor));let Ct={};Ct.attribute=lt,lt&&lt.data&&(Ct.data=lt.data),et[O]=Ct,tt++}r.attributes=et,r.attributesNum=tt,r.index=G}function M(){let q=r.newAttributes;for(let H=0,ot=q.length;H<ot;H++)q[H]=0}function m(q){f(q,0)}function f(q,H){let ot=r.newAttributes,G=r.enabledAttributes,et=r.attributeDivisors;ot[q]=1,G[q]===0&&(i.enableVertexAttribArray(q),G[q]=1),et[q]!==H&&(i.vertexAttribDivisor(q,H),et[q]=H)}function b(){let q=r.newAttributes,H=r.enabledAttributes;for(let ot=0,G=H.length;ot<G;ot++)H[ot]!==q[ot]&&(i.disableVertexAttribArray(ot),H[ot]=0)}function P(q,H,ot,G,et,ut,tt){tt===!0?i.vertexAttribIPointer(q,H,ot,et,ut):i.vertexAttribPointer(q,H,ot,G,et,ut)}function x(q,H,ot,G){M();let et=G.attributes,ut=ot.getAttributes(),tt=H.defaultAttributeValues;for(let F in ut){let O=ut[F];if(O.location>=0){let Y=et[F];if(Y===void 0&&(F==="instanceMatrix"&&q.instanceMatrix&&(Y=q.instanceMatrix),F==="instanceColor"&&q.instanceColor&&(Y=q.instanceColor)),Y!==void 0){let lt=Y.normalized,Ct=Y.itemSize,vt=t.get(Y);if(vt===void 0)continue;let Zt=vt.buffer,Xt=vt.type,Qt=vt.bytesPerElement,B=Xt===i.INT||Xt===i.UNSIGNED_INT||Y.gpuType===fo;if(Y.isInterleavedBufferAttribute){let L=Y.data,I=L.stride,R=Y.offset;if(L.isInstancedInterleavedBuffer){for(let N=0;N<O.locationSize;N++)f(O.location+N,L.meshPerAttribute);q.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let N=0;N<O.locationSize;N++)m(O.location+N);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let N=0;N<O.locationSize;N++)P(O.location+N,Ct/O.locationSize,Xt,lt,I*Qt,(R+Ct/O.locationSize*N)*Qt,B)}else{if(Y.isInstancedBufferAttribute){for(let L=0;L<O.locationSize;L++)f(O.location+L,Y.meshPerAttribute);q.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let L=0;L<O.locationSize;L++)m(O.location+L);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let L=0;L<O.locationSize;L++)P(O.location+L,Ct/O.locationSize,Xt,lt,Ct*Qt,Ct/O.locationSize*L*Qt,B)}}else if(tt!==void 0){let lt=tt[F];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(O.location,lt);break;case 3:i.vertexAttrib3fv(O.location,lt);break;case 4:i.vertexAttrib4fv(O.location,lt);break;default:i.vertexAttrib1fv(O.location,lt)}}}}b()}function T(){C();for(let q in n){let H=n[q];for(let ot in H){let G=H[ot];for(let et in G){let ut=G[et];for(let tt in ut)h(ut[tt].object),delete ut[tt];delete G[et]}}delete n[q]}}function w(q){if(n[q.id]===void 0)return;let H=n[q.id];for(let ot in H){let G=H[ot];for(let et in G){let ut=G[et];for(let tt in ut)h(ut[tt].object),delete ut[tt];delete G[et]}}delete n[q.id]}function U(q){for(let H in n){let ot=n[H];for(let G in ot){let et=ot[G];if(et[q.id]===void 0)continue;let ut=et[q.id];for(let tt in ut)h(ut[tt].object),delete ut[tt];delete et[q.id]}}}function y(q){for(let H in n){let ot=n[H],G=q.isInstancedMesh===!0?q.id:0,et=ot[G];if(et!==void 0){for(let ut in et){let tt=et[ut];for(let F in tt)h(tt[F].object),delete tt[F];delete et[ut]}delete ot[G],Object.keys(ot).length===0&&delete n[H]}}}function C(){k(),a=!0,r!==s&&(r=s,l(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function tg(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function eg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==Tn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){let y=U===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==on&&U!==bn&&!y&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(ne("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:P,maxFragmentUniforms:x,maxSamples:T,samples:w}}function ng(i){let t=this,e=null,n=0,s=!1,r=!1,a=new In,o=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:n,P=b*4,x=f.clippingState||null;c.value=x,x=h(g,u,P,p);for(let T=0;T!==P;++T)x[T]=e[T];f.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=c.value,g!==!0||m===null){let f=p+M*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let P=0,x=p;P!==M;++P,x+=4)a.copy(d[P]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var Os=4,ig=6,sg=20,rg=256,Zr=new Cs,bu=new ue,Rc=null,Pc=0,Ic=0,Lc=!1,ag=new W,Yi=new W,zs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ag}=r;Rc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Rc,Pc,Ic),this._renderer.xr.enabled=Lc,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Bn,format:Tn,colorSpace:or,depthBuffer:!1},s=Tu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=og(r)),this._blurMaterial=cg(r,t,e),this._ggxMaterial=lg(r,t,e)}return s}_compileMaterial(t){let e=new Pe(new Oe,t);this._renderer.compile(e,Zr)}_sceneToCubeUV(t,e,n,s,r){let c=new He(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(bu),d.toneMapping=Fn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new qn,new je({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,f=!0):(m.color.copy(bu),f=!0);for(let P=0;P<6;P++){let x=P%3;x===0?(c.up.set(0,l[P],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[P],r.y,r.z)):x===1?(c.up.set(0,0,l[P]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[P],r.z)):(c.up.set(0,l[P],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[P]));let T=this._cubeSize;Fs(s,x*T,P>2?T:0,T,T),d.setRenderTarget(s),f&&d.render(M,c),d.render(t,c)}d.toneMapping=p,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ci||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Fs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Zr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,p=d*u,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-Os?n-g+Os:0),f=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=g-e,Fs(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(o,Zr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Fs(t,m,f,3*M,2*M),s.setRenderTarget(t),s.render(o,Zr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Os?s-this._lodMax+Os:0),u=4*(this._cubeSize-h);Fs(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(c,Zr)}};function og(i){let t=[],e=[],n=i,s=i-Os+1+ig;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,p=3,g=new Float32Array(p*u*d),M=new Float32Array(p*u*d);for(let f=0;f<d;f++){let b=f%3*2/3-1,P=f>2?0:-1,x=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];g.set(x,p*u*f);for(let T=0;T<u;T++){let w=h[T*2]*2-1,U=h[T*2+1]*2-1;f===0?Yi.set(1,U,w):f===1?Yi.set(-w,1,-U):f===2?Yi.set(-w,U,1):f===3?Yi.set(-1,U,-w):f===4?Yi.set(-w,-1,U):Yi.set(w,U,-1),Yi.toArray(M,(f*u+T)*p)}}let m=new Oe;m.setAttribute("position",new dn(g,p)),m.setAttribute("outputDirection",new dn(M,p)),e.push(new Pe(m,null)),n>Os&&n--}return{lodMeshes:e,sizeLods:t}}function Tu(i,t,e){let n=new an(i,t,e);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lg(i,t,e){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function cg(i,t,e){return new mn({name:"SphericalGaussianBlur",defines:{SAMPLES:sg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function wu(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Eu(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function nl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var tl=class extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qn(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Zn});r.uniforms.tEquirect.value=e;let a=new Pe(s,r),o=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Xe),new ro(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function hg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===co||p===ho)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new tl(g.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",l),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,g=p===co||p===ho,M=p===Ci||p===Xi;if(g||M){let m=e.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new zs(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||M&&b&&c(b)?(n===null&&(n=new zs(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===co?u.mapping=Ci:p===ho&&(u.mapping=Xi),u}function c(u){let p=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&p++;return p===g}function l(u){let p=u.target;p.removeEventListener("dispose",l);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function ug(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zi("WebGLRenderer: "+n+" extension not supported."),s}}}function dg(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER)}function l(d){let u=[],p=d.index,g=d.attributes.position,M=0;if(g===void 0)return;if(p!==null){let b=p.array;M=p.version;for(let P=0,x=b.length;P<x;P+=3){let T=b[P+0],w=b[P+1],U=b[P+2];u.push(T,w,w,U,U,T)}}else{let b=g.array;M=g.version;for(let P=0,x=b.length/3-1;P<x;P+=3){let T=P+0,w=P+1,U=P+2;u.push(T,w,w,U,U,T)}}let m=new(g.count>=65535?fr:dr)(u,1);m.version=M;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function fg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function l(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*a,p),e.update(u,n,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let M=0;for(let m=0;m<p;m++)M+=u[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function pg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:re("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function mg(i,t,e){let n=new WeakMap,s=new Re;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let C=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],P=0;p===!0&&(P=1),g===!0&&(P=2),M===!0&&(P=3);let x=o.attributes.position.count*P,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*T*4*d),U=new hr(w,x,T,d);U.type=bn,U.needsUpdate=!0;let y=P*4;for(let k=0;k<d;k++){let q=m[k],H=f[k],ot=b[k],G=x*T*4*k;for(let et=0;et<q.count;et++){let ut=et*y;p===!0&&(s.fromBufferAttribute(q,et),w[G+ut+0]=s.x,w[G+ut+1]=s.y,w[G+ut+2]=s.z,w[G+ut+3]=0),g===!0&&(s.fromBufferAttribute(H,et),w[G+ut+4]=s.x,w[G+ut+5]=s.y,w[G+ut+6]=s.z,w[G+ut+7]=0),M===!0&&(s.fromBufferAttribute(ot,et),w[G+ut+8]=s.x,w[G+ut+9]=s.y,w[G+ut+10]=s.z,w[G+ut+11]=ot.itemSize===4?s.w:1)}}u={count:d,texture:U,size:new wt(x,T)},n.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<l.length;M++)p+=l[M];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function gg(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var _g={[sc]:"LINEAR_TONE_MAPPING",[rc]:"REINHARD_TONE_MAPPING",[ac]:"CINEON_TONE_MAPPING",[oc]:"ACES_FILMIC_TONE_MAPPING",[cc]:"AGX_TONE_MAPPING",[Br]:"NEUTRAL_TONE_MAPPING",[lc]:"CUSTOM_TONE_MAPPING"};function xg(i,t,e,n,s,r){let a=new an(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Oe;l.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new me([0,2,0,0,2,0],2));let h=new Ya({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Pe(l,h),u=new Cs(-1,1,1,-1,0,1),p=null,g=null,M=!1,m,f=null,b=[],P=!1;this.setSize=function(x,T){a.setSize(x,T),o!==null&&o.setSize(x,T),c!==null&&c.setSize(x,T);for(let w=0;w<b.length;w++){let U=b[w];U.setSize&&U.setSize(x,T)}},this.setEffects=function(x){b=x,P=b.length>0&&b[0].isRenderPass===!0;let T=a.width,w=a.height;b.length>0&&o===null&&(o=new an(T,w,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),c=new an(T,w,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<b.length;U++){let y=b[U];y.setSize&&y.setSize(T,w)}},this.begin=function(x,T){if(M||x.toneMapping===Fn&&b.length===0)return!1;if(f=T,T!==null){let w=T.width,U=T.height;(a.width!==w||a.height!==U)&&this.setSize(w,U)}return P===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Fn,!0},this.hasRenderPass=function(){return P},this.end=function(x,T){x.toneMapping=m,M=!0;let w=a,U=o;for(let y=0;y<b.length;y++){let C=b[y];C.enabled!==!1&&(C.render(x,U,w,T),C.needsSwap!==!1&&(w=U,U=U===o?c:o))}if(p!==x.outputColorSpace||g!==x.toneMapping){p=x.outputColorSpace,g=x.toneMapping,h.defines={},pe.getTransfer(p)===Me&&(h.defines.SRGB_TRANSFER="");let y=_g[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(f),x.render(d,u),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var qu=new qe,Uc=new bi(1,1),Yu=new hr,Zu=new Oa,Ju=new gr,Au=[],Cu=[],Ru=new Float32Array(16),Pu=new Float32Array(9),Iu=new Float32Array(4);function ks(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Au[s];if(r===void 0&&(r=new Float32Array(s),Au[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function il(i,t){let e=Cu[t];e===void 0&&(e=new Int32Array(t),Cu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Iu.set(n),i.uniformMatrix2fv(this.addr,!1,Iu),ze(e,n)}}function Tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Pu.set(n),i.uniformMatrix3fv(this.addr,!1,Pu),ze(e,n)}}function wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Ru.set(n),i.uniformMatrix4fv(this.addr,!1,Ru),ze(e,n)}}function Eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function Pg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function Ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uc.compareFunction=e.isReversedDepthBuffer()?Ko:$o,r=Uc):r=qu,e.setTexture2D(t||r,s)}function Ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zu,s)}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ju,s)}function Og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yu,s)}function Bg(i){switch(i){case 5126:return yg;case 35664:return vg;case 35665:return Mg;case 35666:return Sg;case 35674:return bg;case 35675:return Tg;case 35676:return wg;case 5124:case 35670:return Eg;case 35667:case 35671:return Ag;case 35668:case 35672:return Cg;case 35669:case 35673:return Rg;case 5125:return Pg;case 36294:return Ig;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}function zg(i,t){i.uniform1fv(this.addr,t)}function kg(i,t){let e=ks(t,this.size,2);i.uniform2fv(this.addr,e)}function Vg(i,t){let e=ks(t,this.size,3);i.uniform3fv(this.addr,e)}function Gg(i,t){let e=ks(t,this.size,4);i.uniform4fv(this.addr,e)}function Hg(i,t){let e=ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wg(i,t){let e=ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xg(i,t){let e=ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qg(i,t){i.uniform1iv(this.addr,t)}function Yg(i,t){i.uniform2iv(this.addr,t)}function Zg(i,t){i.uniform3iv(this.addr,t)}function Jg(i,t){i.uniform4iv(this.addr,t)}function $g(i,t){i.uniform1uiv(this.addr,t)}function Kg(i,t){i.uniform2uiv(this.addr,t)}function jg(i,t){i.uniform3uiv(this.addr,t)}function Qg(i,t){i.uniform4uiv(this.addr,t)}function t0(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Uc:a=qu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function e0(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zu,r[a])}function n0(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ju,r[a])}function i0(i,t,e){let n=this.cache,s=t.length,r=il(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yu,r[a])}function s0(i){switch(i){case 5126:return zg;case 35664:return kg;case 35665:return Vg;case 35666:return Gg;case 35674:return Hg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return Zg;case 35669:case 35673:return Jg;case 5125:return $g;case 36294:return Kg;case 36295:return jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}var Fc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bg(e.type)}},Oc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=s0(e.type)}},Bc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Dc=/(\w+)(\])?(\[|\.)?/g;function Lu(i,t){i.seq.push(t),i.map[t.id]=t}function r0(i,t,e){let n=i.name,s=n.length;for(Dc.lastIndex=0;;){let r=Dc.exec(n),a=Dc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Lu(e,l===void 0?new Fc(o,i,t):new Oc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Bc(o),Lu(e,d)),e=d}}}var Bs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);r0(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Du(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var a0=37297,o0=0;function l0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Nu=new te;function c0(i){pe._getMatrix(Nu,pe.workingColorSpace,i);let t=`mat3( ${Nu.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case lr:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Uu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+l0(i.getShaderSource(t),o)}else return r}function h0(i,t){let e=c0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var u0={[sc]:"Linear",[rc]:"Reinhard",[ac]:"Cineon",[oc]:"ACESFilmic",[cc]:"AgX",[Br]:"Neutral",[lc]:"Custom"};function d0(i,t){let e=u0[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qo=new W;function f0(){pe.getLuminanceCoefficients(Qo);let i=Qo.x.toFixed(4),t=Qo.y.toFixed(4),e=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function m0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function g0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function $r(i){return i!==""}function Fu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ou(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(i){return i.replace(_0,y0)}var x0=new Map;function y0(i,t){let e=de[t];if(e===void 0){let n=x0.get(t);if(n!==void 0)e=de[n],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return zc(e)}var v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(i){return i.replace(v0,M0)}function M0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var S0={[Or]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function b0(i){return S0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var T0={[Ci]:"ENVMAP_TYPE_CUBE",[Xi]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE_UV"};function w0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":T0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var E0={[Xi]:"ENVMAP_MODE_REFRACTION"};function A0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":E0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var C0={[lo]:"ENVMAP_BLENDING_MULTIPLY",[jh]:"ENVMAP_BLENDING_MIX",[Qh]:"ENVMAP_BLENDING_ADD"};function R0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":C0[i.combine]||"ENVMAP_BLENDING_NONE"}function P0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function I0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=b0(e),l=w0(e),h=A0(e),d=R0(e),u=P0(e),p=p0(e),g=m0(r),M=s.createProgram(),m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($r).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($r).join(`
`),f.length>0&&(f+=`
`)):(m=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),f=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?de.tonemapping_pars_fragment:"",e.toneMapping!==Fn?d0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,h0("linearToOutputTexel",e.outputColorSpace),f0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($r).join(`
`)),a=zc(a),a=Fu(a,e),a=Ou(a,e),o=zc(o),o=Fu(o,e),o=Ou(o,e),a=Bu(a),o=Bu(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let P=b+m+a,x=b+f+o,T=Du(s,s.VERTEX_SHADER,P),w=Du(s,s.FRAGMENT_SHADER,x);s.attachShader(M,T),s.attachShader(M,w),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function U(q){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(M)||"",ot=s.getShaderInfoLog(T)||"",G=s.getShaderInfoLog(w)||"",et=H.trim(),ut=ot.trim(),tt=G.trim(),F=!0,O=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,T,w);else{let Y=Uu(s,T,"vertex"),lt=Uu(s,w,"fragment");re("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+et+`
`+Y+`
`+lt)}else et!==""?ne("WebGLProgram: Program Info Log:",et):(ut===""||tt==="")&&(O=!1);O&&(q.diagnostics={runnable:F,programLog:et,vertexShader:{log:ut,prefix:m},fragmentShader:{log:tt,prefix:f}})}s.deleteShader(T),s.deleteShader(w),y=new Bs(s,M),C=g0(s,M)}let y;this.getUniforms=function(){return y===void 0&&U(this),y};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(M,a0)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=o0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=w,this}var L0=0,kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Vc(t),e.set(t,n)),n}},Vc=class{constructor(t){this.id=L0++,this.code=t,this.usedTimes=0}};function D0(i){return i===Ii||i===Xr||i===qr}function N0(i,t,e,n,s,r){let a=new ur,o=new kc,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function M(y,C,k,q,H,ot){let G=q.fog,et=H.geometry,ut=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?q.environment:null,tt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,F=t.get(y.envMap||ut,tt),O=F&&F.mapping===zr?F.image.height:null,Y=p[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&ne("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let lt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Ct=lt!==void 0?lt.length:0,vt=0;et.morphAttributes.position!==void 0&&(vt=1),et.morphAttributes.normal!==void 0&&(vt=2),et.morphAttributes.color!==void 0&&(vt=3);let Zt,Xt,Qt,B;if(Y){let Te=$n[Y];Zt=Te.vertexShader,Xt=Te.fragmentShader}else{Zt=y.vertexShader,Xt=y.fragmentShader;let Te=o.getVertexShaderStage(y),oe=o.getFragmentShaderStage(y);o.update(y,Te,oe),Qt=Te.id,B=oe.id}let L=i.getRenderTarget(),I=i.state.buffers.depth.getReversed(),R=H.isInstancedMesh===!0,N=H.isBatchedMesh===!0,it=!!y.map,xt=!!y.matcap,E=!!F,V=!!y.aoMap,z=!!y.lightMap,$=!!y.bumpMap&&y.wireframe===!1,rt=!!y.normalMap,ht=!!y.displacementMap,yt=!!y.emissiveMap,Mt=!!y.metalnessMap,j=!!y.roughnessMap,v=y.anisotropy>0,Bt=y.clearcoat>0,qt=y.dispersion>0,A=y.retroreflectivity>0,_=y.iridescence>0,Z=y.sheen>0,at=y.transmission>0,dt=v&&!!y.anisotropyMap,Ut=Bt&&!!y.clearcoatMap,It=Bt&&!!y.clearcoatNormalMap,pt=Bt&&!!y.clearcoatRoughnessMap,gt=_&&!!y.iridescenceMap,zt=_&&!!y.iridescenceThicknessMap,Jt=Z&&!!y.sheenColorMap,At=Z&&!!y.sheenRoughnessMap,kt=!!y.specularMap,Wt=!!y.specularColorMap,jt=!!y.specularIntensityMap,ie=at&&!!y.transmissionMap,J=at&&!!y.thicknessMap,Vt=!!y.gradientMap,_t=!!y.alphaMap,Gt=y.alphaTest>0,Pt=!!y.alphaHash,Et=!!y.extensions,Kt=Fn;y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Kt=i.toneMapping);let $t={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:Zt,fragmentShader:Xt,defines:y.defines,customVertexShaderID:Qt,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:N,batchingColor:N&&H._colorsTexture!==null,instancing:R,instancingColor:R&&H.instanceColor!==null,instancingMorph:R&&H.morphTexture!==null,outputColorSpace:L===null?i.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:it,matcap:xt,envMap:E,envMapMode:E&&F.mapping,envMapCubeUVHeight:O,aoMap:V,lightMap:z,bumpMap:$,normalMap:rt,displacementMap:ht,emissiveMap:yt,normalMapObjectSpace:rt&&y.normalMapType===nu,normalMapTangentSpace:rt&&y.normalMapType===Yr,packedNormalMap:rt&&y.normalMapType===Yr&&D0(y.normalMap.format),metalnessMap:Mt,roughnessMap:j,anisotropy:v,anisotropyMap:dt,clearcoat:Bt,clearcoatMap:Ut,clearcoatNormalMap:It,clearcoatRoughnessMap:pt,dispersion:qt,retroreflection:A,iridescence:_,iridescenceMap:gt,iridescenceThicknessMap:zt,sheen:Z,sheenColorMap:Jt,sheenRoughnessMap:At,specularMap:kt,specularColorMap:Wt,specularIntensityMap:jt,transmission:at,transmissionMap:ie,thicknessMap:J,gradientMap:Vt,opaque:y.transparent===!1&&y.blending===Ls&&y.alphaToCoverage===!1,alphaMap:_t,alphaTest:Gt,alphaHash:Pt,combine:y.combine,mapUv:it&&g(y.map.channel),aoMapUv:V&&g(y.aoMap.channel),lightMapUv:z&&g(y.lightMap.channel),bumpMapUv:$&&g(y.bumpMap.channel),normalMapUv:rt&&g(y.normalMap.channel),displacementMapUv:ht&&g(y.displacementMap.channel),emissiveMapUv:yt&&g(y.emissiveMap.channel),metalnessMapUv:Mt&&g(y.metalnessMap.channel),roughnessMapUv:j&&g(y.roughnessMap.channel),anisotropyMapUv:dt&&g(y.anisotropyMap.channel),clearcoatMapUv:Ut&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:It&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&g(y.sheenRoughnessMap.channel),specularMapUv:kt&&g(y.specularMap.channel),specularColorMapUv:Wt&&g(y.specularColorMap.channel),specularIntensityMapUv:jt&&g(y.specularIntensityMap.channel),transmissionMapUv:ie&&g(y.transmissionMap.channel),thicknessMapUv:J&&g(y.thicknessMap.channel),alphaMapUv:_t&&g(y.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(rt||v),vertexNormals:!!et.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!et.attributes.uv&&(it||_t),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||et.attributes.normal===void 0&&rt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:I,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:et.attributes.position!==void 0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:vt,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:ot.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,decodeVideoTexture:it&&y.map.isVideoTexture===!0&&pe.getTransfer(y.map.colorSpace)===Me,decodeVideoTextureEmissive:yt&&y.emissiveMap.isVideoTexture===!0&&pe.getTransfer(y.emissiveMap.colorSpace)===Me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===Ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Et&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&y.extensions.multiDraw===!0||N)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function m(y){let C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(let k in y.defines)C.push(k),C.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(f(C,y),b(C,y),C.push(i.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function f(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numSunLights),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numSunLightShadows),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function b(y,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function P(y){let C=p[y.type],k;if(C){let q=$n[C];k=vu.clone(q.uniforms)}else k=y.uniforms;return k}function x(y,C){let k=h.get(C);return k!==void 0?++k.usedTimes:(k=new I0(i,C,y,s),l.push(k),h.set(C,k)),k}function T(y){if(--y.usedTimes===0){let C=l.indexOf(y);l[C]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function U(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:P,acquireProgram:x,releaseProgram:T,releaseShaderCache:w,programs:l,dispose:U}}function U0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function F0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ku(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,M,m,f){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:f},i[t]=b):(b.id=u.id,b.object=u,b.geometry=p,b.material=g,b.materialVariant=a(u),b.groupOrder=M,b.renderOrder=u.renderOrder,b.z=m,b.group=f),t++,b}function c(u,p,g,M,m,f,b){b.reversedDepth===!0&&(m=-m);let P=o(u,p,g,M,m,f);g.transmission>0?n.push(P):g.transparent===!0?s.push(P):e.push(P)}function l(u,p,g,M,m,f){let b=o(u,p,g,M,m,f);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,p){e.length>1&&e.sort(u||F0),n.length>1&&n.sort(p||ku),s.length>1&&s.sort(p||ku)}function d(){for(let u=t,p=i.length;u<p;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function O0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Vu,i.set(n,[a])):s>=r.length?(a=new Vu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function B0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new ue};break;case"SpotLight":e={position:new W,direction:new W,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function z0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var k0=0;function V0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function G0(i){let t=new B0,e=z0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);let s=new W,r=new Ee,a=new Ee;function o(l){let h=0,d=0,u=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let p=0,g=0,M=0,m=0,f=0,b=0,P=0,x=0,T=0,w=0,U=0,y=0,C=0,k=0;l.sort(V0);for(let H=0,ot=l.length;H<ot;H++){let G=l[H],et=G.color,ut=G.intensity,tt=G.distance,F=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Ii?F=G.shadow.map.texture:F=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)h+=et.r*ut,d+=et.g*ut,u+=et.b*ut;else if(G.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(G.sh.coefficients[O],ut);k++}else if(G.isSunLight){let O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let Y=G.shadow,lt=e.get(G);lt.shadowIntensity=Y.intensity,lt.shadowBias=Y.bias,lt.shadowNormalBias=Y.normalBias,lt.shadowRadius=Y.radius,lt.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=lt,n.sunShadowMap[g]=F;let Ct=Y.getViewportCount();for(let vt=0;vt<Ct;vt++)n.sunShadowMatrix[M+vt]=Y.getMatrix(vt),n.sunShadowCascade[M+vt]=Y._cascadeData[vt];M+=Ct,g++}n.sun[p]=O,p++}else if(G.isDirectionalLight){let O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let Y=G.shadow,lt=e.get(G);lt.shadowIntensity=Y.intensity,lt.shadowBias=Y.bias,lt.shadowNormalBias=Y.normalBias,lt.shadowRadius=Y.radius,lt.shadowMapSize=Y.mapSize,n.directionalShadow[m]=lt,n.directionalShadowMap[m]=F,n.directionalShadowMatrix[m]=G.shadow.matrix,T++}n.directional[m]=O,m++}else if(G.isSpotLight){let O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(et).multiplyScalar(ut),O.distance=tt,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,n.spot[b]=O;let Y=G.shadow;if(G.map&&(n.spotLightMap[y]=G.map,y++,Y.updateMatrices(G),G.castShadow&&C++),n.spotLightMatrix[b]=Y.matrix,G.castShadow){let lt=e.get(G);lt.shadowIntensity=Y.intensity,lt.shadowBias=Y.bias,lt.shadowNormalBias=Y.normalBias,lt.shadowRadius=Y.radius,lt.shadowMapSize=Y.mapSize,n.spotShadow[b]=lt,n.spotShadowMap[b]=F,U++}b++}else if(G.isRectAreaLight){let O=t.get(G);O.color.copy(et).multiplyScalar(ut),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),n.rectArea[P]=O,P++}else if(G.isPointLight){let O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){let Y=G.shadow,lt=e.get(G);lt.shadowIntensity=Y.intensity,lt.shadowBias=Y.bias,lt.shadowNormalBias=Y.normalBias,lt.shadowRadius=Y.radius,lt.shadowMapSize=Y.mapSize,lt.shadowCameraNear=Y.camera.near,lt.shadowCameraFar=Y.camera.far,n.pointShadow[f]=lt,n.pointShadowMap[f]=F,n.pointShadowMatrix[f]=G.shadow.matrix,w++}n.point[f]=O,f++}else if(G.isHemisphereLight){let O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(ut),O.groundColor.copy(G.groundColor).multiplyScalar(ut),n.hemi[x]=O,x++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let q=n.hash;(q.sunLength!==p||q.directionalLength!==m||q.pointLength!==f||q.spotLength!==b||q.rectAreaLength!==P||q.hemiLength!==x||q.numSunShadows!==g||q.numDirectionalShadows!==T||q.numPointShadows!==w||q.numSpotShadows!==U||q.numSpotMaps!==y||q.numLightProbes!==k)&&(n.sun.length=p,n.directional.length=m,n.spot.length=b,n.rectArea.length=P,n.point.length=f,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=U,n.spotShadowMap.length=U,n.spotLightMatrix.length=U+y-C,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=k,q.sunLength=p,q.directionalLength=m,q.pointLength=f,q.spotLength=b,q.rectAreaLength=P,q.hemiLength=x,q.numSunShadows=g,q.numDirectionalShadows=T,q.numPointShadows=w,q.numSpotShadows=U,q.numSpotMaps=y,q.numLightProbes=k,n.version=k0++)}function c(l,h){let d=0,u=0,p=0,g=0,M=0,m=0,f=h.matrixWorldInverse;for(let b=0,P=l.length;b<P;b++){let x=l[b];if(x.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(f),d++}else if(x.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),u++}else if(x.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),g++}else if(x.isRectAreaLight){let T=n.rectArea[M];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),a.identity(),r.copy(x.matrixWorld),r.premultiply(f),a.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(x.isPointLight){let T=n.point[p];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:n}}function Gu(i){let t=new G0(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function H0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Gu(i),t.set(s,[o])):r>=a.length?(o=new Gu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var W0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X0=`uniform sampler2D shadow_pass;
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
}`,q0=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Y0=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Hu=new Ee,Jr=new W,Nc=new W;function Z0(i,t,e){let n=new Ss,s=new wt,r=new wt,a=new Re,o=new Za,c=new Ja,l={},h=e.maxTextureSize,d={[Ai]:Ze,[Ze]:Ai,[_n]:_n},u=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:W0,fragmentShader:X0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Oe;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Pe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Or;let f=this.type;this.render=function(w,U,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Dh&&(ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Or);let C=i.getRenderTarget(),k=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Zn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let ot=f!==this.type;ot&&U.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(et=>et.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,et=w.length;G<et;G++){let ut=w[G],tt=ut.shadow;if(tt===void 0){ne("WebGLShadowMap:",ut,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let F=tt.getFrameExtents();s.multiply(F),r.copy(tt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/F.x),s.x=r.x*F.x,tt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/F.y),s.y=r.y*F.y,tt.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(tt.camera._reversedDepth=O,tt.map===null||ot===!0){if(tt.map!==null&&(tt.map.depthTexture!==null&&(tt.map.depthTexture.dispose(),tt.map.depthTexture=null),tt.map.dispose()),this.type===Is){if(ut.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}tt.map=new an(s.x,s.y,{format:Ii,type:Bn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),tt.map.texture.name=ut.name+".shadowMap",tt.map.depthTexture=new bi(s.x,s.y,bn),tt.map.depthTexture.name=ut.name+".shadowMapDepth",tt.map.depthTexture.format=Hn,tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=Ve,tt.map.depthTexture.magFilter=Ve}else ut.isPointLight?(tt.map=new tl(s.x),tt.map.depthTexture=new za(s.x,On)):(tt.map=new an(s.x,s.y),tt.map.depthTexture=new bi(s.x,s.y,On)),tt.map.depthTexture.name=ut.name+".shadowMap",tt.map.depthTexture.format=Hn,this.type===Or?(tt.map.depthTexture.compareFunction=O?Ko:$o,tt.map.depthTexture.minFilter=Xe,tt.map.depthTexture.magFilter=Xe):(tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=Ve,tt.map.depthTexture.magFilter=Ve);tt.camera.updateProjectionMatrix()}tt.map.isWebGLCubeRenderTarget!==!0&&(tt.map.width!==s.x||tt.map.height!==s.y)&&tt.map.setSize(s.x,s.y);let Y=tt.map.isWebGLCubeRenderTarget?6:tt.getViewportCount();ut.isPointLight!==!0&&tt.updateMatrices(ut,y);for(let lt=0;lt<Y;lt++){let Ct=tt.getCamera(lt);if(ut.isPointLight){let vt=tt.camera,Zt=tt.matrix,Xt=ut.distance||vt.far;Xt!==vt.far&&(vt.far=Xt,vt.updateProjectionMatrix()),Jr.setFromMatrixPosition(ut.matrixWorld),vt.position.copy(Jr),Nc.copy(vt.position),Nc.add(q0[lt]),vt.up.copy(Y0[lt]),vt.lookAt(Nc),vt.updateMatrixWorld(),Zt.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Hu.multiplyMatrices(vt.projectionMatrix,vt.matrixWorldInverse),tt._frustum.setFromProjectionMatrix(Hu,vt.coordinateSystem,vt.reversedDepth)}if(tt.map.isWebGLCubeRenderTarget)i.setRenderTarget(tt.map,lt),i.clear();else{lt===0&&(i.setRenderTarget(tt.map),i.clear());let vt=tt.getViewport(lt);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),H.viewport(a)}n=tt.getFrustum(lt),x(U,y,Ct,ut,this.type)}tt.isPointLightShadow!==!0&&this.type===Is&&b(tt,y),tt.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(C,k,q)};function b(w,U){let y=t.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new an(s.x,s.y,{format:Ii,type:Bn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(U,null,y,u,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(U,null,y,p,M,null)}function P(w,U,y,C){let k=null,q=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(q!==void 0)k=q;else if(k=y.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let H=k.uuid,ot=U.uuid,G=l[H];G===void 0&&(G={},l[H]=G);let et=G[ot];et===void 0&&(et=k.clone(),G[ot]=et,U.addEventListener("dispose",T)),k=et}if(k.visible=U.visible,k.wireframe=U.wireframe,C===Is?k.side=U.shadowSide!==null?U.shadowSide:U.side:k.side=U.shadowSide!==null?U.shadowSide:d[U.side],k.alphaMap=U.alphaMap,k.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,k.map=U.map,k.clipShadows=U.clipShadows,k.clippingPlanes=U.clippingPlanes,k.clipIntersection=U.clipIntersection,k.displacementMap=U.displacementMap,k.displacementScale=U.displacementScale,k.displacementBias=U.displacementBias,k.wireframeLinewidth=U.wireframeLinewidth,k.linewidth=U.linewidth,y.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let H=i.properties.get(k);H.light=y}return k}function x(w,U,y,C,k){if(w.visible===!1)return;if(w.layers.test(U.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&k===Is)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let ot=t.update(w),G=w.material;if(Array.isArray(G)){let et=ot.groups;for(let ut=0,tt=et.length;ut<tt;ut++){let F=et[ut],O=G[F.materialIndex];if(O&&O.visible){let Y=P(w,O,C,k);w.onBeforeShadow(i,w,U,y,ot,Y,F),i.renderBufferDirect(y,null,ot,Y,w,F),w.onAfterShadow(i,w,U,y,ot,Y,F)}}}else if(G.visible){let et=P(w,G,C,k);w.onBeforeShadow(i,w,U,y,ot,et,null),i.renderBufferDirect(y,null,ot,et,w,null),w.onAfterShadow(i,w,U,y,ot,et,null)}}let H=w.children;for(let ot=0,G=H.length;ot<G;ot++)x(H[ot],U,y,C,k)}function T(w){w.target.removeEventListener("dispose",T);for(let y in l){let C=l[y],k=w.target.uuid;k in C&&(C[k].dispose(),delete C[k])}}}function J0(i,t){function e(){let J=!1,Vt=new Re,_t=null,Gt=new Re(0,0,0,0);return{setMask:function(Pt){_t!==Pt&&!J&&(i.colorMask(Pt,Pt,Pt,Pt),_t=Pt)},setLocked:function(Pt){J=Pt},setClear:function(Pt,Et,Kt,$t,Te){Te===!0&&(Pt*=$t,Et*=$t,Kt*=$t),Vt.set(Pt,Et,Kt,$t),Gt.equals(Vt)===!1&&(i.clearColor(Pt,Et,Kt,$t),Gt.copy(Vt))},reset:function(){J=!1,_t=null,Gt.set(-1,0,0,0)}}}function n(){let J=!1,Vt=!1,_t=null,Gt=null,Pt=null;return{setReversed:function(Et){if(Vt!==Et){let Kt=t.get("EXT_clip_control");Et?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),Vt=Et;let $t=Pt;Pt=null,this.setClear($t)}},getReversed:function(){return Vt},setTest:function(Et){Et?L(i.DEPTH_TEST):I(i.DEPTH_TEST)},setMask:function(Et){_t!==Et&&!J&&(i.depthMask(Et),_t=Et)},setFunc:function(Et){if(Vt&&(Et=pu[Et]),Gt!==Et){switch(Et){case Ea:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case Ca:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case Ra:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case Ia:i.depthFunc(i.GREATER);break;case La:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Gt=Et}},setLocked:function(Et){J=Et},setClear:function(Et){Pt!==Et&&(Pt=Et,Vt&&(Et=1-Et),i.clearDepth(Et))},reset:function(){J=!1,_t=null,Gt=null,Pt=null,Vt=!1}}}function s(){let J=!1,Vt=null,_t=null,Gt=null,Pt=null,Et=null,Kt=null,$t=null,Te=null;return{setTest:function(oe){J||(oe?L(i.STENCIL_TEST):I(i.STENCIL_TEST))},setMask:function(oe){Vt!==oe&&!J&&(i.stencilMask(oe),Vt=oe)},setFunc:function(oe,en,ln){(_t!==oe||Gt!==en||Pt!==ln)&&(i.stencilFunc(oe,en,ln),_t=oe,Gt=en,Pt=ln)},setOp:function(oe,en,ln){(Et!==oe||Kt!==en||$t!==ln)&&(i.stencilOp(oe,en,ln),Et=oe,Kt=en,$t=ln)},setLocked:function(oe){J=oe},setClear:function(oe){Te!==oe&&(i.clearStencil(oe),Te=oe)},reset:function(){J=!1,Vt=null,_t=null,Gt=null,Pt=null,Et=null,Kt=null,$t=null,Te=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],M=null,m=!1,f=null,b=null,P=null,x=null,T=null,w=null,U=null,y=new ue(0,0,0),C=0,k=!1,q=null,H=null,ot=null,G=null,et=null,ut=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),tt=!1,F=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(O)[1]),tt=F>=1):O.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),tt=F>=2);let Y=null,lt={},Ct=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Zt=new Re().fromArray(Ct),Xt=new Re().fromArray(vt);function Qt(J,Vt,_t,Gt){let Pt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(J,Et),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<_t;Kt++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(Vt,0,i.RGBA,1,1,Gt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(Vt+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return Et}let B={};B[i.TEXTURE_2D]=Qt(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=Qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=Qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=Qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),L(i.DEPTH_TEST),a.setFunc(ms),$(!1),rt(jl),L(i.CULL_FACE),V(Zn);function L(J){h[J]!==!0&&(i.enable(J),h[J]=!0)}function I(J){h[J]!==!1&&(i.disable(J),h[J]=!1)}function R(J,Vt){return u[J]!==Vt?(i.bindFramebuffer(J,Vt),u[J]=Vt,J===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Vt),J===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Vt),!0):!1}function N(J,Vt){let _t=g,Gt=!1;if(J){_t=p.get(Vt),_t===void 0&&(_t=[],p.set(Vt,_t));let Pt=J.textures;if(_t.length!==Pt.length||_t[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,Kt=Pt.length;Et<Kt;Et++)_t[Et]=i.COLOR_ATTACHMENT0+Et;_t.length=Pt.length,Gt=!0}}else _t[0]!==i.BACK&&(_t[0]=i.BACK,Gt=!0);Gt&&i.drawBuffers(_t)}function it(J){return M!==J?(i.useProgram(J),M=J,!0):!1}let xt={[Wi]:i.FUNC_ADD,[Uh]:i.FUNC_SUBTRACT,[Fh]:i.FUNC_REVERSE_SUBTRACT};xt[Oh]=i.MIN,xt[Bh]=i.MAX;let E={[zh]:i.ZERO,[kh]:i.ONE,[Vh]:i.SRC_COLOR,[nc]:i.SRC_ALPHA,[Yh]:i.SRC_ALPHA_SATURATE,[Xh]:i.DST_COLOR,[Hh]:i.DST_ALPHA,[Gh]:i.ONE_MINUS_SRC_COLOR,[ic]:i.ONE_MINUS_SRC_ALPHA,[qh]:i.ONE_MINUS_DST_COLOR,[Wh]:i.ONE_MINUS_DST_ALPHA,[Zh]:i.CONSTANT_COLOR,[Jh]:i.ONE_MINUS_CONSTANT_COLOR,[$h]:i.CONSTANT_ALPHA,[Kh]:i.ONE_MINUS_CONSTANT_ALPHA};function V(J,Vt,_t,Gt,Pt,Et,Kt,$t,Te,oe){if(J===Zn){m===!0&&(I(i.BLEND),m=!1);return}if(m===!1&&(L(i.BLEND),m=!0),J!==Nh){if(J!==f||oe!==k){if((b!==Wi||T!==Wi)&&(i.blendEquation(i.FUNC_ADD),b=Wi,T=Wi),oe)switch(J){case Ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ql:i.blendFunc(i.ONE,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:re("WebGLState: Invalid blending: ",J);break}else switch(J){case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ql:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tc:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ec:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",J);break}P=null,x=null,w=null,U=null,y.set(0,0,0),C=0,f=J,k=oe}return}Pt=Pt||Vt,Et=Et||_t,Kt=Kt||Gt,(Vt!==b||Pt!==T)&&(i.blendEquationSeparate(xt[Vt],xt[Pt]),b=Vt,T=Pt),(_t!==P||Gt!==x||Et!==w||Kt!==U)&&(i.blendFuncSeparate(E[_t],E[Gt],E[Et],E[Kt]),P=_t,x=Gt,w=Et,U=Kt),($t.equals(y)===!1||Te!==C)&&(i.blendColor($t.r,$t.g,$t.b,Te),y.copy($t),C=Te),f=J,k=!1}function z(J,Vt){J.side===_n?I(i.CULL_FACE):L(i.CULL_FACE);let _t=J.side===Ze;Vt&&(_t=!_t),$(_t),J.blending===Ls&&J.transparent===!1?V(Zn):V(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),a.setFunc(J.depthFunc),a.setTest(J.depthTest),a.setMask(J.depthWrite),r.setMask(J.colorWrite);let Gt=J.stencilWrite;o.setTest(Gt),Gt&&(o.setMask(J.stencilWriteMask),o.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),o.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),yt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?L(i.SAMPLE_ALPHA_TO_COVERAGE):I(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(J){q!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),q=J)}function rt(J){J!==Ih?(L(i.CULL_FACE),J!==H&&(J===jl?i.cullFace(i.BACK):J===Lh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):I(i.CULL_FACE),H=J}function ht(J){J!==ot&&(tt&&i.lineWidth(J),ot=J)}function yt(J,Vt,_t){J?(L(i.POLYGON_OFFSET_FILL),(G!==Vt||et!==_t)&&(G=Vt,et=_t,a.getReversed()&&(Vt=-Vt),i.polygonOffset(Vt,_t))):I(i.POLYGON_OFFSET_FILL)}function Mt(J){J?L(i.SCISSOR_TEST):I(i.SCISSOR_TEST)}function j(J){J===void 0&&(J=i.TEXTURE0+ut-1),Y!==J&&(i.activeTexture(J),Y=J)}function v(J,Vt,_t){_t===void 0&&(Y===null?_t=i.TEXTURE0+ut-1:_t=Y);let Gt=lt[_t];Gt===void 0&&(Gt={type:void 0,texture:void 0},lt[_t]=Gt),(Gt.type!==J||Gt.texture!==Vt)&&(Y!==_t&&(i.activeTexture(_t),Y=_t),i.bindTexture(J,Vt||B[J]),Gt.type=J,Gt.texture=Vt)}function Bt(){let J=lt[Y];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function qt(){try{i.compressedTexImage2D(...arguments)}catch(J){re("WebGLState:",J)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(J){re("WebGLState:",J)}}function _(){try{i.texSubImage2D(...arguments)}catch(J){re("WebGLState:",J)}}function Z(){try{i.texSubImage3D(...arguments)}catch(J){re("WebGLState:",J)}}function at(){try{i.compressedTexSubImage2D(...arguments)}catch(J){re("WebGLState:",J)}}function dt(){try{i.compressedTexSubImage3D(...arguments)}catch(J){re("WebGLState:",J)}}function Ut(){try{i.texStorage2D(...arguments)}catch(J){re("WebGLState:",J)}}function It(){try{i.texStorage3D(...arguments)}catch(J){re("WebGLState:",J)}}function pt(){try{i.texImage2D(...arguments)}catch(J){re("WebGLState:",J)}}function gt(){try{i.texImage3D(...arguments)}catch(J){re("WebGLState:",J)}}function zt(J){return d[J]!==void 0?d[J]:i.getParameter(J)}function Jt(J,Vt){d[J]!==Vt&&(i.pixelStorei(J,Vt),d[J]=Vt)}function At(J){Zt.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),Zt.copy(J))}function kt(J){Xt.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),Xt.copy(J))}function Wt(J,Vt){let _t=l.get(Vt);_t===void 0&&(_t=new WeakMap,l.set(Vt,_t));let Gt=_t.get(J);Gt===void 0&&(Gt=i.getUniformBlockIndex(Vt,J.name),_t.set(J,Gt))}function jt(J,Vt){let Gt=l.get(Vt).get(J);c.get(Vt)!==Gt&&(i.uniformBlockBinding(Vt,Gt,J.__bindingPointIndex),c.set(Vt,Gt))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Y=null,lt={},u={},p=new WeakMap,g=[],M=null,m=!1,f=null,b=null,P=null,x=null,T=null,w=null,U=null,y=new ue(0,0,0),C=0,k=!1,q=null,H=null,ot=null,G=null,et=null,Zt.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:L,disable:I,bindFramebuffer:R,drawBuffers:N,useProgram:it,setBlending:V,setMaterial:z,setFlipSided:$,setCullFace:rt,setLineWidth:ht,setPolygonOffset:yt,setScissorTest:Mt,activeTexture:j,bindTexture:v,unbindTexture:Bt,compressedTexImage2D:qt,compressedTexImage3D:A,texImage2D:pt,texImage3D:gt,pixelStorei:Jt,getParameter:zt,updateUBOMapping:Wt,uniformBlockBinding:jt,texStorage2D:Ut,texStorage3D:It,texSubImage2D:_,texSubImage3D:Z,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:At,viewport:kt,reset:ie}}function $0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new wt,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,_){return g?new OffscreenCanvas(A,_):cr("canvas")}function m(A,_,Z){let at=1,dt=qt(A);if((dt.width>Z||dt.height>Z)&&(at=Z/Math.max(dt.width,dt.height)),at<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Ut=Math.floor(at*dt.width),It=Math.floor(at*dt.height);u===void 0&&(u=M(Ut,It));let pt=_?M(Ut,It):u;return pt.width=Ut,pt.height=It,pt.getContext("2d").drawImage(A,0,0,Ut,It),ne("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+Ut+"x"+It+")."),pt}else return"data"in A&&ne("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),A;return A}function f(A){return A.generateMipmaps}function b(A){i.generateMipmap(A)}function P(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,_,Z,at,dt,Ut=!1){if(A!==null){if(i[A]!==void 0)return i[A];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let It;at&&(It=t.get("EXT_texture_norm16"),It||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pt=_;if(_===i.RED&&(Z===i.FLOAT&&(pt=i.R32F),Z===i.HALF_FLOAT&&(pt=i.R16F),Z===i.UNSIGNED_BYTE&&(pt=i.R8),Z===i.UNSIGNED_SHORT&&It&&(pt=It.R16_EXT),Z===i.SHORT&&It&&(pt=It.R16_SNORM_EXT)),_===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(pt=i.R8UI),Z===i.UNSIGNED_SHORT&&(pt=i.R16UI),Z===i.UNSIGNED_INT&&(pt=i.R32UI),Z===i.BYTE&&(pt=i.R8I),Z===i.SHORT&&(pt=i.R16I),Z===i.INT&&(pt=i.R32I)),_===i.RG&&(Z===i.FLOAT&&(pt=i.RG32F),Z===i.HALF_FLOAT&&(pt=i.RG16F),Z===i.UNSIGNED_BYTE&&(pt=i.RG8),Z===i.UNSIGNED_SHORT&&It&&(pt=It.RG16_EXT),Z===i.SHORT&&It&&(pt=It.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(pt=i.RG8UI),Z===i.UNSIGNED_SHORT&&(pt=i.RG16UI),Z===i.UNSIGNED_INT&&(pt=i.RG32UI),Z===i.BYTE&&(pt=i.RG8I),Z===i.SHORT&&(pt=i.RG16I),Z===i.INT&&(pt=i.RG32I)),_===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(pt=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(pt=i.RGB16UI),Z===i.UNSIGNED_INT&&(pt=i.RGB32UI),Z===i.BYTE&&(pt=i.RGB8I),Z===i.SHORT&&(pt=i.RGB16I),Z===i.INT&&(pt=i.RGB32I)),_===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(pt=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(pt=i.RGBA16UI),Z===i.UNSIGNED_INT&&(pt=i.RGBA32UI),Z===i.BYTE&&(pt=i.RGBA8I),Z===i.SHORT&&(pt=i.RGBA16I),Z===i.INT&&(pt=i.RGBA32I)),_===i.RGB&&(Z===i.UNSIGNED_SHORT&&It&&(pt=It.RGB16_EXT),Z===i.SHORT&&It&&(pt=It.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(pt=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(pt=i.R11F_G11F_B10F)),_===i.RGBA){let gt=Ut?lr:pe.getTransfer(dt);Z===i.FLOAT&&(pt=i.RGBA32F),Z===i.HALF_FLOAT&&(pt=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(pt=gt===Me?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&It&&(pt=It.RGBA16_EXT),Z===i.SHORT&&It&&(pt=It.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(pt=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(pt=i.RGB5_A1)}return(pt===i.R16F||pt===i.R32F||pt===i.RG16F||pt===i.RG32F||pt===i.RGBA16F||pt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function T(A,_){let Z;return A?_===null||_===On||_===Ns?Z=i.DEPTH24_STENCIL8:_===bn?Z=i.DEPTH32F_STENCIL8:_===Ds&&(Z=i.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===On||_===Ns?Z=i.DEPTH_COMPONENT24:_===bn?Z=i.DEPTH_COMPONENT32F:_===Ds&&(Z=i.DEPTH_COMPONENT16),Z}function w(A,_){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ve&&A.minFilter!==Xe?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function U(A){let _=A.target;_.removeEventListener("dispose",U),C(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function y(A){let _=A.target;_.removeEventListener("dispose",y),q(_)}function C(A){let _=n.get(A);if(_.__webglInit===void 0)return;let Z=A.source,at=p.get(Z);if(at){let dt=at[_.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&k(A),Object.keys(at).length===0&&p.delete(Z)}n.remove(A)}function k(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let Z=A.source,at=p.get(Z);delete at[_.__cacheKey],a.memory.textures--}function q(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(_.__webglFramebuffer[at]))for(let dt=0;dt<_.__webglFramebuffer[at].length;dt++)i.deleteFramebuffer(_.__webglFramebuffer[at][dt]);else i.deleteFramebuffer(_.__webglFramebuffer[at]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[at])}else{if(Array.isArray(_.__webglFramebuffer))for(let at=0;at<_.__webglFramebuffer.length;at++)i.deleteFramebuffer(_.__webglFramebuffer[at]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let at=0;at<_.__webglColorRenderbuffer.length;at++)_.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[at]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let Z=A.textures;for(let at=0,dt=Z.length;at<dt;at++){let Ut=n.get(Z[at]);Ut.__webglTexture&&(i.deleteTexture(Ut.__webglTexture),a.memory.textures--),n.remove(Z[at])}n.remove(A)}let H=0;function ot(){H=0}function G(){return H}function et(A){H=A}function ut(){let A=H;return A>=s.maxTextures&&ne("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,A}function tt(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function F(A,_){let Z=n.get(A);if(A.isVideoTexture&&v(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&Z.__version!==A.version){let at=A.image;if(at===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{I(Z,A,_);return}}else A.isExternalTexture&&(Z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+_)}function O(A,_){let Z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&Z.__version!==A.version){I(Z,A,_);return}else A.isExternalTexture&&(Z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+_)}function Y(A,_){let Z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&Z.__version!==A.version){I(Z,A,_);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+_)}function lt(A,_){let Z=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&Z.__version!==A.version){R(Z,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+_)}let Ct={[gs]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[_s]:i.MIRRORED_REPEAT},vt={[Ve]:i.NEAREST,[tu]:i.NEAREST_MIPMAP_NEAREST,[kr]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},Zt={[su]:i.NEVER,[cu]:i.ALWAYS,[ru]:i.LESS,[$o]:i.LEQUAL,[au]:i.EQUAL,[Ko]:i.GEQUAL,[ou]:i.GREATER,[lu]:i.NOTEQUAL};function Xt(A,_){if(_.type===bn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Xe||_.magFilter===uo||_.magFilter===kr||_.magFilter===Ri||_.minFilter===Xe||_.minFilter===uo||_.minFilter===kr||_.minFilter===Ri)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ct[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ct[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ct[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,vt[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,vt[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Zt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ve||_.minFilter!==kr&&_.minFilter!==Ri||_.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Qt(A,_){let Z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",U));let at=_.source,dt=p.get(at);dt===void 0&&(dt={},p.set(at,dt));let Ut=tt(_);if(Ut!==A.__cacheKey){dt[Ut]===void 0&&(dt[Ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),dt[Ut].usedTimes++;let It=dt[A.__cacheKey];It!==void 0&&(dt[A.__cacheKey].usedTimes--,It.usedTimes===0&&k(_)),A.__cacheKey=Ut,A.__webglTexture=dt[Ut].texture}return Z}function B(A,_,Z){return Math.floor(Math.floor(A/Z)/_)}function L(A,_,Z,at){let Ut=A.updateRanges;if(Ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,Z,at,_.data);else{Ut.sort((Jt,At)=>Jt.start-At.start);let It=0;for(let Jt=1;Jt<Ut.length;Jt++){let At=Ut[It],kt=Ut[Jt],Wt=At.start+At.count,jt=B(kt.start,_.width,4),ie=B(At.start,_.width,4);kt.start<=Wt+1&&jt===ie&&B(kt.start+kt.count-1,_.width,4)===jt?At.count=Math.max(At.count,kt.start+kt.count-At.start):(++It,Ut[It]=kt)}Ut.length=It+1;let pt=e.getParameter(i.UNPACK_ROW_LENGTH),gt=e.getParameter(i.UNPACK_SKIP_PIXELS),zt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Jt=0,At=Ut.length;Jt<At;Jt++){let kt=Ut[Jt],Wt=Math.floor(kt.start/4),jt=Math.ceil(kt.count/4),ie=Wt%_.width,J=Math.floor(Wt/_.width),Vt=jt,_t=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(i.UNPACK_SKIP_ROWS,J),e.texSubImage2D(i.TEXTURE_2D,0,ie,J,Vt,_t,Z,at,_.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,pt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,zt)}}function I(A,_,Z){let at=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(at=i.TEXTURE_3D);let dt=Qt(A,_),Ut=_.source;e.bindTexture(at,A.__webglTexture,i.TEXTURE0+Z);let It=n.get(Ut);if(Ut.version!==It.__version||dt===!0){if(e.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let _t=pe.getPrimaries(pe.workingColorSpace),Gt=_.colorSpace===ui?null:pe.getPrimaries(_.colorSpace),Pt=_.colorSpace===ui||_t===Gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let gt=m(_.image,!1,s.maxTextureSize);gt=Bt(_,gt);let zt=r.convert(_.format,_.colorSpace),Jt=r.convert(_.type),At=x(_.internalFormat,zt,Jt,_.normalized,_.colorSpace,_.isVideoTexture);Xt(at,_);let kt,Wt=_.mipmaps,jt=_.isVideoTexture!==!0,ie=It.__version===void 0||dt===!0,J=Ut.dataReady,Vt=w(_,gt);if(_.isDepthTexture)At=T(_.format===Pi,_.type),ie&&(jt?e.texStorage2D(i.TEXTURE_2D,1,At,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,At,gt.width,gt.height,0,zt,Jt,null));else if(_.isDataTexture)if(Wt.length>0){jt&&ie&&e.texStorage2D(i.TEXTURE_2D,Vt,At,Wt[0].width,Wt[0].height);for(let _t=0,Gt=Wt.length;_t<Gt;_t++)kt=Wt[_t],jt?J&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,kt.width,kt.height,zt,Jt,kt.data):e.texImage2D(i.TEXTURE_2D,_t,At,kt.width,kt.height,0,zt,Jt,kt.data);_.generateMipmaps=!1}else jt?(ie&&e.texStorage2D(i.TEXTURE_2D,Vt,At,gt.width,gt.height),J&&L(_,gt,zt,Jt)):e.texImage2D(i.TEXTURE_2D,0,At,gt.width,gt.height,0,zt,Jt,gt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){jt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,At,Wt[0].width,Wt[0].height,gt.depth);for(let _t=0,Gt=Wt.length;_t<Gt;_t++)if(kt=Wt[_t],_.format!==Tn)if(zt!==null)if(jt){if(J)if(_.layerUpdates.size>0){let Pt=bc(kt.width,kt.height,_.format,_.type);for(let Et of _.layerUpdates){let Kt=kt.data.subarray(Et*Pt/kt.data.BYTES_PER_ELEMENT,(Et+1)*Pt/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,Et,kt.width,kt.height,1,zt,Kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,kt.width,kt.height,gt.depth,zt,kt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_t,At,kt.width,kt.height,gt.depth,0,kt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?J&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,kt.width,kt.height,gt.depth,zt,Jt,kt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,_t,At,kt.width,kt.height,gt.depth,0,zt,Jt,kt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{jt&&ie&&e.texStorage2D(i.TEXTURE_2D,Vt,At,Wt[0].width,Wt[0].height);for(let _t=0,Gt=Wt.length;_t<Gt;_t++)kt=Wt[_t],_.format!==Tn?zt!==null?jt?J&&e.compressedTexSubImage2D(i.TEXTURE_2D,_t,0,0,kt.width,kt.height,zt,kt.data):e.compressedTexImage2D(i.TEXTURE_2D,_t,At,kt.width,kt.height,0,kt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?J&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,kt.width,kt.height,zt,Jt,kt.data):e.texImage2D(i.TEXTURE_2D,_t,At,kt.width,kt.height,0,zt,Jt,kt.data)}else if(_.isDataArrayTexture)if(jt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,At,gt.width,gt.height,gt.depth),J)if(_.layerUpdates.size>0){let _t=bc(gt.width,gt.height,_.format,_.type);for(let Gt of _.layerUpdates){let Pt=gt.data.subarray(Gt*_t/gt.data.BYTES_PER_ELEMENT,(Gt+1)*_t/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Gt,gt.width,gt.height,1,zt,Jt,Pt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,zt,Jt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,gt.width,gt.height,gt.depth,0,zt,Jt,gt.data);else if(_.isData3DTexture)jt?(ie&&e.texStorage3D(i.TEXTURE_3D,Vt,At,gt.width,gt.height,gt.depth),J&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,zt,Jt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,At,gt.width,gt.height,gt.depth,0,zt,Jt,gt.data);else if(_.isFramebufferTexture){if(ie)if(jt)e.texStorage2D(i.TEXTURE_2D,Vt,At,gt.width,gt.height);else{let _t=gt.width,Gt=gt.height;for(let Pt=0;Pt<Vt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,At,_t,Gt,0,zt,Jt,null),_t>>=1,Gt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let _t=i.canvas;if(_t.hasAttribute("layoutsubtree")||_t.setAttribute("layoutsubtree","true"),gt.parentNode!==_t){_t.appendChild(gt),d.add(_),_t.onpaint=Gt=>{let Pt=Gt.changedElements;for(let Et of d)Pt.includes(Et.image)&&(Et.needsUpdate=!0)},_t.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,gt);else{let Pt=i.RGBA,Et=i.RGBA,Kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pt,Et,Kt,gt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(jt&&ie){let _t=qt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,Vt,At,_t.width,_t.height)}for(let _t=0,Gt=Wt.length;_t<Gt;_t++)kt=Wt[_t],jt?J&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,zt,Jt,kt):e.texImage2D(i.TEXTURE_2D,_t,At,zt,Jt,kt);_.generateMipmaps=!1}else if(jt){if(ie){let _t=qt(gt);e.texStorage2D(i.TEXTURE_2D,Vt,At,_t.width,_t.height)}J&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,zt,Jt,gt)}else e.texImage2D(i.TEXTURE_2D,0,At,zt,Jt,gt);f(_)&&b(at),It.__version=Ut.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function R(A,_,Z){if(_.image.length!==6)return;let at=Qt(A,_),dt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+Z);let Ut=n.get(dt);if(dt.version!==Ut.__version||at===!0){e.activeTexture(i.TEXTURE0+Z);let It=pe.getPrimaries(pe.workingColorSpace),pt=_.colorSpace===ui?null:pe.getPrimaries(_.colorSpace),gt=_.colorSpace===ui||It===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let zt=_.isCompressedTexture||_.image[0].isCompressedTexture,Jt=_.image[0]&&_.image[0].isDataTexture,At=[];for(let Et=0;Et<6;Et++)!zt&&!Jt?At[Et]=m(_.image[Et],!0,s.maxCubemapSize):At[Et]=Jt?_.image[Et].image:_.image[Et],At[Et]=Bt(_,At[Et]);let kt=At[0],Wt=r.convert(_.format,_.colorSpace),jt=r.convert(_.type),ie=x(_.internalFormat,Wt,jt,_.normalized,_.colorSpace),J=_.isVideoTexture!==!0,Vt=Ut.__version===void 0||at===!0,_t=dt.dataReady,Gt=w(_,kt);Xt(i.TEXTURE_CUBE_MAP,_);let Pt;if(zt){J&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,ie,kt.width,kt.height);for(let Et=0;Et<6;Et++){Pt=At[Et].mipmaps;for(let Kt=0;Kt<Pt.length;Kt++){let $t=Pt[Kt];_.format!==Tn?Wt!==null?J?_t&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,0,0,$t.width,$t.height,Wt,$t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,ie,$t.width,$t.height,0,$t.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,0,0,$t.width,$t.height,Wt,jt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt,ie,$t.width,$t.height,0,Wt,jt,$t.data)}}}else{if(Pt=_.mipmaps,J&&Vt){Pt.length>0&&Gt++;let Et=qt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,ie,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Jt){J?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,At[Et].width,At[Et].height,Wt,jt,At[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ie,At[Et].width,At[Et].height,0,Wt,jt,At[Et].data);for(let Kt=0;Kt<Pt.length;Kt++){let Te=Pt[Kt].image[Et].image;J?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,0,0,Te.width,Te.height,Wt,jt,Te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,ie,Te.width,Te.height,0,Wt,jt,Te.data)}}else{J?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Wt,jt,At[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ie,Wt,jt,At[Et]);for(let Kt=0;Kt<Pt.length;Kt++){let $t=Pt[Kt];J?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,0,0,Wt,jt,$t.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Kt+1,ie,Wt,jt,$t.image[Et])}}}f(_)&&b(i.TEXTURE_CUBE_MAP),Ut.__version=dt.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function N(A,_,Z,at,dt,Ut){let It=r.convert(Z.format,Z.colorSpace),pt=r.convert(Z.type),gt=x(Z.internalFormat,It,pt,Z.normalized,Z.colorSpace),zt=n.get(_),Jt=n.get(Z);if(Jt.__renderTarget=_,!zt.__hasExternalTextures){let At=Math.max(1,_.width>>Ut),kt=Math.max(1,_.height>>Ut);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,Ut,gt,At,kt,_.depth,0,It,pt,null):e.texImage2D(dt,Ut,gt,At,kt,0,It,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),j(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,dt,Jt.__webglTexture,0,Mt(_)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,dt,Jt.__webglTexture,Ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(A,_,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let at=_.depthTexture,dt=at&&at.isDepthTexture?at.type:null,Ut=T(_.stencilBuffer,dt),It=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;j(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(_),Ut,_.width,_.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(_),Ut,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,A)}else{let at=_.textures;for(let dt=0;dt<at.length;dt++){let Ut=at[dt],It=r.convert(Ut.format,Ut.colorSpace),pt=r.convert(Ut.type),gt=x(Ut.internalFormat,It,pt,Ut.normalized,Ut.colorSpace);j(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(_),gt,_.width,_.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(_),gt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,gt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(A,_,Z){let at=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=n.get(_.depthTexture);if(dt.__renderTarget=_,(!dt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),at){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,_.depthTexture.addEventListener("dispose",U)),dt.__webglTexture===void 0){dt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,_.depthTexture);let zt=r.convert(_.depthTexture.format),Jt=r.convert(_.depthTexture.type),At;_.depthTexture.format===Hn?At=i.DEPTH_COMPONENT24:_.depthTexture.format===Pi&&(At=i.DEPTH24_STENCIL8);for(let kt=0;kt<6;kt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,At,_.width,_.height,0,zt,Jt,null)}}else F(_.depthTexture,0);let Ut=dt.__webglTexture,It=Mt(_),pt=at?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,gt=_.depthTexture.format===Pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Hn)j(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,pt,Ut,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,gt,pt,Ut,0);else if(_.depthTexture.format===Pi)j(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,pt,Ut,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,gt,pt,Ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function E(A){let _=n.get(A),Z=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let at=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),at){let dt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,at.removeEventListener("dispose",dt)};at.addEventListener("dispose",dt),_.__depthDisposeCallback=dt}_.__boundDepthTexture=at}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(Z)for(let at=0;at<6;at++)xt(_.__webglFramebuffer[at],A,at);else{let at=A.texture.mipmaps;at&&at.length>0?xt(_.__webglFramebuffer[0],A,0):xt(_.__webglFramebuffer,A,0)}else if(Z){_.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[at]),_.__webglDepthbuffer[at]===void 0)_.__webglDepthbuffer[at]=i.createRenderbuffer(),it(_.__webglDepthbuffer[at],A,!1);else{let dt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=_.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,Ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,Ut)}}else{let at=A.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),it(_.__webglDepthbuffer,A,!1);else{let dt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,Ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function V(A,_,Z){let at=n.get(A);_!==void 0&&N(at.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&E(A)}function z(A){let _=A.texture,Z=n.get(A),at=n.get(_);A.addEventListener("dispose",y);let dt=A.textures,Ut=A.isWebGLCubeRenderTarget===!0,It=dt.length>1;if(It||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=_.version,a.memory.textures++),Ut){Z.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(_.mipmaps&&_.mipmaps.length>0){Z.__webglFramebuffer[pt]=[];for(let gt=0;gt<_.mipmaps.length;gt++)Z.__webglFramebuffer[pt][gt]=i.createFramebuffer()}else Z.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pt=0;pt<_.mipmaps.length;pt++)Z.__webglFramebuffer[pt]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(It)for(let pt=0,gt=dt.length;pt<gt;pt++){let zt=n.get(dt[pt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&j(A)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let pt=0;pt<dt.length;pt++){let gt=dt[pt];Z.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[pt]);let zt=r.convert(gt.format,gt.colorSpace),Jt=r.convert(gt.type),At=x(gt.internalFormat,zt,Jt,gt.normalized,gt.colorSpace,A.isXRRenderTarget===!0),kt=Mt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,At,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Z.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),it(Z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ut){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,_);for(let pt=0;pt<6;pt++)if(_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)N(Z.__webglFramebuffer[pt][gt],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,gt);else N(Z.__webglFramebuffer[pt],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);f(_)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let pt=0,gt=dt.length;pt<gt;pt++){let zt=dt[pt],Jt=n.get(zt),At=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(At=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,Jt.__webglTexture),Xt(At,zt),N(Z.__webglFramebuffer,A,zt,i.COLOR_ATTACHMENT0+pt,At,0),f(zt)&&b(At)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,at.__webglTexture),Xt(pt,_),_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)N(Z.__webglFramebuffer[gt],A,_,i.COLOR_ATTACHMENT0,pt,gt);else N(Z.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,pt,0);f(_)&&b(pt),e.unbindTexture()}A.depthBuffer&&E(A)}function $(A){let _=A.textures;for(let Z=0,at=_.length;Z<at;Z++){let dt=_[Z];if(f(dt)){let Ut=P(A),It=n.get(dt).__webglTexture;e.bindTexture(Ut,It),b(Ut),e.unbindTexture()}}}let rt=[],ht=[];function yt(A){if(A.samples>0){if(j(A)===!1){let _=A.textures,Z=A.width,at=A.height,dt=i.COLOR_BUFFER_BIT,Ut=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(A),pt=_.length>1;if(pt)for(let zt=0;zt<_.length;zt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);let gt=A.texture.mipmaps;gt&&gt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let zt=0;zt<_.length;zt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[zt]);let Jt=n.get(_[zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,Z,at,0,0,Z,at,dt,i.NEAREST),c===!0&&(rt.length=0,ht.length=0,rt.push(i.COLOR_ATTACHMENT0+zt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(rt.push(Ut),ht.push(Ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let zt=0;zt<_.length;zt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,It.__webglColorRenderbuffer[zt]);let Jt=n.get(_[zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Mt(A){return Math.min(s.maxSamples,A.samples)}function j(A){let _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function v(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Bt(A,_){let Z=A.colorSpace,at=A.format,dt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||Z!==or&&Z!==ui&&(pe.getTransfer(Z)===Me?(at!==Tn||dt!==on)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",Z)),_}function qt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=ut,this.resetTextureUnits=ot,this.getTextureUnits=G,this.setTextureUnits=et,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=lt,this.rebindTextures=V,this.setupRenderTarget=z,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=E,this.setupFrameBufferTexture=N,this.useMultisampledRTT=j,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function K0(i,t){function e(n,s=ui){let r,a=pe.getTransfer(s);if(n===on)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uc)return i.BYTE;if(n===dc)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===mc)return i.ALPHA;if(n===gc)return i.RGB;if(n===Tn)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===Pi)return i.DEPTH_STENCIL;if(n===go)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===Ii)return i.RG;if(n===xo)return i.RG_INTEGER;if(n===yo)return i.RGBA_INTEGER;if(n===Vr||n===Gr||n===Hr||n===Wr)if(a===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===Mo||n===So||n===bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===wo||n===Eo||n===Ao||n===Co||n===Xr||n===Ro)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===To||n===wo)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Eo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ao)return r.COMPRESSED_R11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xr)return r.COMPRESSED_RG11_EAC;if(n===Ro)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Po||n===Io||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Vo||n===Go||n===Ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Po)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Io)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wo||n===Xo||n===qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wo)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yo||n===Zo||n===qr||n===Jo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var j0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q0=`
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

}`,Gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new _r(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:j0,fragmentShader:Q0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hc=class extends Wn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null,M=typeof XRWebGLBinding<"u",m=new Gc,f={},b=e.getContextAttributes(),P=null,x=null,T=[],w=[],U=new wt,y=null,C=null,k=new He;k.viewport=new Re;let q=new He;q.viewport=new Re;let H=[k,q],ot=new ao,G=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let L=T[B];return L===void 0&&(L=new Ms,T[B]=L),L.getTargetRaySpace()},this.getControllerGrip=function(B){let L=T[B];return L===void 0&&(L=new Ms,T[B]=L),L.getGripSpace()},this.getHand=function(B){let L=T[B];return L===void 0&&(L=new Ms,T[B]=L),L.getHandSpace()};function ut(B){let L=w.indexOf(B.inputSource);if(L===-1)return;let I=T[L];I!==void 0&&(I.update(B.inputSource,B.frame,l||a),I.dispatchEvent({type:B.type,data:B.inputSource}))}function tt(){s.removeEventListener("select",ut),s.removeEventListener("selectstart",ut),s.removeEventListener("selectend",ut),s.removeEventListener("squeeze",ut),s.removeEventListener("squeezestart",ut),s.removeEventListener("squeezeend",ut),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",F);for(let B=0;B<T.length;B++){let L=w[B];L!==null&&(w[B]=null,T[B].disconnect(L))}G=null,et=null,m.reset();for(let B in f)delete f[B];if(t.setRenderTarget(P),p=null,u=null,d=null,s=null,x=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(U.width,U.height,!1),C!==null){let B=C.camera;B.fov=C.fov,B.zoom=C.zoom,B.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",ut),s.addEventListener("selectstart",ut),s.addEventListener("selectend",ut),s.addEventListener("squeeze",ut),s.addEventListener("squeezestart",ut),s.addEventListener("squeezeend",ut),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",F),b.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(U),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let I=null,R=null,N=null;b.depth&&(N=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,I=b.stencil?Pi:Hn,R=b.stencil?Ns:On);let it={colorFormat:e.RGBA8,depthFormat:N,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(it),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new an(u.textureWidth,u.textureHeight,{format:Tn,type:on,depthTexture:new bi(u.textureWidth,u.textureHeight,R,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let I={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,I),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new an(p.framebufferWidth,p.framebufferHeight,{format:Tn,type:on,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(B){for(let L=0;L<B.removed.length;L++){let I=B.removed[L],R=w.indexOf(I);R>=0&&(w[R]=null,T[R].disconnect(I))}for(let L=0;L<B.added.length;L++){let I=B.added[L],R=w.indexOf(I);if(R===-1){for(let it=0;it<T.length;it++)if(it>=w.length){w.push(I),R=it;break}else if(w[it]===null){w[it]=I,R=it;break}if(R===-1)break}let N=T[R];N&&N.connect(I)}}let O=new W,Y=new W;function lt(B,L,I){O.setFromMatrixPosition(L.matrixWorld),Y.setFromMatrixPosition(I.matrixWorld);let R=O.distanceTo(Y),N=L.projectionMatrix.elements,it=I.projectionMatrix.elements,xt=N[14]/(N[10]-1),E=N[14]/(N[10]+1),V=(N[9]+1)/N[5],z=(N[9]-1)/N[5],$=(N[8]-1)/N[0],rt=(it[8]+1)/it[0],ht=xt*$,yt=xt*rt,Mt=R/(-$+rt),j=Mt*-$;if(L.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(j),B.translateZ(Mt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),N[10]===-1)B.projectionMatrix.copy(L.projectionMatrix),B.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{let v=xt+Mt,Bt=E+Mt,qt=ht-j,A=yt+(R-j),_=V*E/Bt*v,Z=z*E/Bt*v;B.projectionMatrix.makePerspective(qt,A,_,Z,v,Bt),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Ct(B,L){L===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(L.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let L=B.near,I=B.far;m.texture!==null&&(m.depthNear>0&&(L=m.depthNear),m.depthFar>0&&(I=m.depthFar)),ot.near=q.near=k.near=L,ot.far=q.far=k.far=I,(G!==ot.near||et!==ot.far)&&(s.updateRenderState({depthNear:ot.near,depthFar:ot.far}),G=ot.near,et=ot.far),ot.layers.mask=B.layers.mask|6,k.layers.mask=ot.layers.mask&-5,q.layers.mask=ot.layers.mask&-3;let R=B.parent,N=ot.cameras;Ct(ot,R);for(let it=0;it<N.length;it++)Ct(N[it],R);N.length===2?lt(ot,k,q):ot.projectionMatrix.copy(k.projectionMatrix),C===null&&B.isPerspectiveCamera&&(C={camera:B,fov:B.fov,zoom:B.zoom}),vt(B,ot,R)};function vt(B,L,I){I===null?B.matrix.copy(L.matrixWorld):(B.matrix.copy(I.matrixWorld),B.matrix.invert(),B.matrix.multiply(L.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(L.projectionMatrix),B.projectionMatrixInverse.copy(L.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Na*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return ot},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(B){c=B,u!==null&&(u.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(ot)},this.getCameraTexture=function(B){return f[B]};let Zt=null;function Xt(B,L){if(h=L.getViewerPose(l||a),g=L,h!==null){let I=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let R=!1;I.length!==ot.cameras.length&&(ot.cameras.length=0,R=!0);for(let E=0;E<I.length;E++){let V=I[E],z=null;if(p!==null)z=p.getViewport(V);else{let rt=d.getViewSubImage(u,V);z=rt.viewport,E===0&&(t.setRenderTargetTextures(x,rt.colorTexture,rt.depthStencilTexture),t.setRenderTarget(x))}let $=H[E];$===void 0&&($=new He,$.layers.enable(E),$.viewport=new Re,H[E]=$),$.matrix.fromArray(V.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(V.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(z.x,z.y,z.width,z.height),E===0&&(ot.matrix.copy($.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale)),R===!0&&ot.cameras.push($)}let N=s.enabledFeatures;if(N&&N.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let E=d.getDepthInformation(I[0]);E&&E.isValid&&E.texture&&m.init(E,s.renderState)}if(N&&N.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let E=0;E<I.length;E++){let V=I[E].camera;if(V){let z=f[V];z||(z=new _r,f[V]=z);let $=d.getCameraImage(V);z.sourceTexture=$}}}}for(let I=0;I<T.length;I++){let R=w[I],N=T[I];R!==null&&N!==void 0&&N.update(R,L,l||a)}Zt&&Zt(B,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),g=null}let Qt=new Wu;Qt.setAnimationLoop(Xt),this.setAnimationLoop=function(B){Zt=B},this.dispose=function(){}}},t_=new Ee,$u=new te;$u.set(-1,0,0,0,1,0,0,0,1);function e_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,vc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,P,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,b,P):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=t.get(f),P=b.envMap,x=b.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(t_.makeRotationFromEuler(x)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($u),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,P){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=P*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,T){let w=T.program;n.uniformBlockBinding(x,w)}function l(x,T){let w=s[x.id];w===void 0&&(m(x),w=h(x),s[x.id]=w,x.addEventListener("dispose",b));let U=T.program;n.updateUBOMapping(x,U);let y=t.render.frame;r[x.id]!==y&&(u(x),r[x.id]=y)}function h(x){let T=d();x.__bindingPointIndex=T;let w=i.createBuffer(),U=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,U,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let T=s[x.id],w=x.uniforms,U=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let y=0,C=w.length;y<C;y++){let k=w[y];if(Array.isArray(k))for(let q=0,H=k.length;q<H;q++)p(k[q],y,q,U);else p(k,y,0,U)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,T,w,U){if(M(x,T,w,U)===!0){let y=x.__offset,C=x.value;if(Array.isArray(C)){let k=0;for(let q=0;q<C.length;q++){let H=C[q],ot=f(H);g(H,x.__data,k),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(k+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function g(x,T,w){typeof x=="number"||typeof x=="boolean"?T[0]=x:x.isMatrix3?(T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0):ArrayBuffer.isView(x)?T.set(new x.constructor(x.buffer,x.byteOffset,T.length)):x.toArray(T,w)}function M(x,T,w,U){let y=x.value,C=T+"_"+w;if(U[C]===void 0)return typeof y=="number"||typeof y=="boolean"?U[C]=y:ArrayBuffer.isView(y)?U[C]=y.slice():U[C]=y.clone(),!0;{let k=U[C];if(typeof y=="number"||typeof y=="boolean"){if(k!==y)return U[C]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(k.equals(y)===!1)return k.copy(y),!0}}return!1}function m(x){let T=x.uniforms,w=0,U=16;for(let C=0,k=T.length;C<k;C++){let q=Array.isArray(T[C])?T[C]:[T[C]];for(let H=0,ot=q.length;H<ot;H++){let G=q[H],et=Array.isArray(G.value)?G.value:[G.value];for(let ut=0,tt=et.length;ut<tt;ut++){let F=et[ut],O=f(F),Y=w%U,lt=Y%O.boundary,Ct=Y+lt;w+=lt,Ct!==0&&U-Ct<O.storage&&(w+=U-Ct),G.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=O.storage}}}let y=w%U;return y>0&&(w+=U-y),x.__size=w,x.__cache={},this}function f(x){let T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):ne("WebGLRenderer: Unsupported uniform value type.",x),T}function b(x){let T=x.target;T.removeEventListener("dispose",b);let w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function P(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:P}}var i_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function s_(){return Jn===null&&(Jn=new Vi(i_,16,16,Ii,Bn),Jn.name="DFG_LUT",Jn.minFilter=Xe,Jn.magFilter=Xe,Jn.wrapS=Mn,Jn.wrapT=Mn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var el=class{constructor(t={}){let{canvas:e=uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=on}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=p,m=new Set([yo,xo,_o]),f=new Set([on,On,Ds,Ns,po,mo]),b=new Uint32Array(4),P=new Int32Array(4),x=new W,T=null,w=null,U=[],y=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,q=!1,H=null,ot=null,G=null,et=null;this._outputColorSpace=De;let ut=0,tt=0,F=null,O=-1,Y=null,lt=new Re,Ct=new Re,vt=null,Zt=new ue(0),Xt=0,Qt=e.width,B=e.height,L=1,I=null,R=null,N=new Re(0,0,Qt,B),it=new Re(0,0,Qt,B),xt=!1,E=new Ss,V=!1,z=!1,$=new Ee,rt=new W,ht=new Re,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function j(){return F===null?L:1}let v=n;function Bt(S,D){return e.getContext(S,D)}let qt,A,_,Z,at,dt,Ut,It,pt,gt,zt,Jt,At,kt,Wt,jt,ie,J,Vt,_t,Gt,Pt,Et;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",en,!1),v===null){let D="webgl2";if(v=Bt(D,S),v===null)throw Bt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(S){throw e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",en,!1),re("WebGLRenderer: "+S.message),S}function Kt(){qt=new ug(v),qt.init(),Gt=new K0(v,qt),A=new eg(v,qt,t,Gt),_=new J0(v,qt),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),ot=v.createFramebuffer(),G=v.createFramebuffer(),et=v.createFramebuffer(),Z=new pg(v),at=new U0,dt=new $0(v,qt,_,at,A,Gt,Z),Ut=new hg(k),It=new gf(v),Pt=new Qm(v,It),pt=new dg(v,It,Z,Pt),gt=new gg(v,pt,It,Pt,Z),J=new mg(v,A,dt),Wt=new ng(at),zt=new N0(k,Ut,qt,A,Pt,Wt),Jt=new e_(k,at),At=new O0,kt=new H0(qt),ie=new jm(k,Ut,_,gt,g,c),jt=new Z0(k,gt,A),Et=new n_(v,Z,A,_),Vt=new tg(v,qt,Z),_t=new fg(v,qt,Z),Z.programs=zt.programs,k.capabilities=A,k.extensions=qt,k.properties=at,k.renderLists=At,k.shadowMap=jt,k.state=_,k.info=Z}M!==on&&(C=new xg(M,e.width,e.height,o,s,r));let $t=new Hc(k,v);this.xr=$t,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let S=qt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=qt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(S){S!==void 0&&(L=S,this.setSize(Qt,B,!1))},this.getSize=function(S){return S.set(Qt,B)},this.setSize=function(S,D,st=!0){if($t.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=S,B=D,e.width=Math.floor(S*L),e.height=Math.floor(D*L),st===!0&&(e.style.width=S+"px",e.style.height=D+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(Qt*L,B*L).floor()},this.setDrawingBufferSize=function(S,D,st){Qt=S,B=D,L=st,e.width=Math.floor(S*st),e.height=Math.floor(D*st),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(M===on){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(lt)},this.getViewport=function(S){return S.copy(N)},this.setViewport=function(S,D,st,nt){S.isVector4?N.set(S.x,S.y,S.z,S.w):N.set(S,D,st,nt),_.viewport(lt.copy(N).multiplyScalar(L).round())},this.getScissor=function(S){return S.copy(it)},this.setScissor=function(S,D,st,nt){S.isVector4?it.set(S.x,S.y,S.z,S.w):it.set(S,D,st,nt),_.scissor(Ct.copy(it).multiplyScalar(L).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(S){_.setScissorTest(xt=S)},this.setOpaqueSort=function(S){I=S},this.setTransparentSort=function(S){R=S},this.getClearColor=function(S){return S.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,st=!0){let nt=0;if(S){let X=!1;if(F!==null){let mt=F.texture.format;X=m.has(mt)}if(X){let mt=F.texture.type,Rt=f.has(mt),bt=ie.getClearColor(),ft=ie.getClearAlpha(),Nt=bt.r,Ot=bt.g,Dt=bt.b;Rt?(b[0]=Nt,b[1]=Ot,b[2]=Dt,b[3]=ft,v.clearBufferuiv(v.COLOR,0,b)):(P[0]=Nt,P[1]=Ot,P[2]=Dt,P[3]=ft,v.clearBufferiv(v.COLOR,0,P))}else nt|=v.COLOR_BUFFER_BIT}D&&(nt|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(nt|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&v.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),H=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",en,!1),ie.dispose(),At.dispose(),kt.dispose(),at.dispose(),Ut.dispose(),gt.dispose(),Pt.dispose(),Et.dispose(),zt.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",Ni),$t.removeEventListener("sessionend",Ki),kn.stop()};function Te(S){S.preventDefault(),xc("WebGLRenderer: Context Lost."),q=!0}function oe(){xc("WebGLRenderer: Context Restored."),q=!1;let S=Z.autoReset,D=jt.enabled,st=jt.autoUpdate,nt=jt.needsUpdate,X=jt.type;Kt(),Z.autoReset=S,jt.enabled=D,jt.autoUpdate=st,jt.needsUpdate=nt,jt.type=X}function en(S){re("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ln(S){let D=S.target;D.removeEventListener("dispose",ln),Ji(D)}function Ji(S){$i(S),at.remove(S)}function $i(S){let D=at.get(S).programs;D!==void 0&&(D.forEach(function(st){zt.releaseProgram(st)}),S.isShaderMaterial&&zt.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,st,nt,X,mt){D===null&&(D=yt);let Rt=X.isMesh&&X.matrixWorld.determinantAffine()<0,bt=Lt(S,D,st,nt,X);_.setMaterial(nt,Rt);let ft=st.index,Nt=1;if(nt.wireframe===!0){if(ft=pt.getWireframeAttribute(st),ft===void 0)return;Nt=2}let Ot=st.drawRange,Dt=st.attributes.position,Tt=Ot.start*Nt,ee=(Ot.start+Ot.count)*Nt;mt!==null&&(Tt=Math.max(Tt,mt.start*Nt),ee=Math.min(ee,(mt.start+mt.count)*Nt)),ft!==null?(Tt=Math.max(Tt,0),ee=Math.min(ee,ft.count)):Dt!=null&&(Tt=Math.max(Tt,0),ee=Math.min(ee,Dt.count));let se=ee-Tt;if(se<0||se===1/0)return;Pt.setup(X,nt,bt,st,ft);let ge,_e=Vt;if(ft!==null&&(ge=It.get(ft),_e=_t,_e.setIndex(ge)),X.isMesh)nt.wireframe===!0?(_.setLineWidth(nt.wireframeLinewidth*j()),_e.setMode(v.LINES)):_e.setMode(v.TRIANGLES);else if(X.isLine){let Le=nt.linewidth;Le===void 0&&(Le=1),_.setLineWidth(Le*j()),X.isLineSegments?_e.setMode(v.LINES):X.isLineLoop?_e.setMode(v.LINE_LOOP):_e.setMode(v.LINE_STRIP)}else X.isPoints?_e.setMode(v.POINTS):X.isSprite&&_e.setMode(v.TRIANGLES);if(X.isBatchedMesh)if(qt.get("WEBGL_multi_draw"))_e.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Le=X._multiDrawStarts,Yt=X._multiDrawCounts,nn=X._multiDrawCount,ye=ft?It.get(ft).bytesPerElement:1,yn=at.get(nt).currentProgram.getUniforms();for(let Vn=0;Vn<nn;Vn++)yn.setValue(v,"_gl_DrawID",Vn),_e.render(Le[Vn]/ye,Yt[Vn])}else if(X.isInstancedMesh)_e.renderInstances(Tt,se,X.count);else if(st.isInstancedBufferGeometry){let Le=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Yt=Math.min(st.instanceCount,Le);_e.renderInstances(Tt,se,Yt)}else _e.render(Tt,se)};function ea(S,D,st,nt){H!==null&&S.isNodeMaterial&&H.setObject(nt,S),V===!0&&Wt.setState(S,st,!1),S.transparent===!0&&S.side===_n&&S.forceSinglePass===!1?(S.side=Ze,S.needsUpdate=!0,Q(S,D,nt),S.side=Ai,S.needsUpdate=!0,Q(S,D,nt),S.side=_n):Q(S,D,nt)}this.compile=function(S,D,st=null){st===null&&(st=S),H!==null&&H.renderStart(S,D,st),w=kt.get(st),w.init(D),y.push(w),st.traverseVisible(function(X){X.isLight&&X.layers.test(D.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),S!==st&&S.traverseVisible(function(X){X.isLight&&X.layers.test(D.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),H!==null&&H.updateLights(w.state.lightsArray),z=this.localClippingEnabled,V=Wt.init(this.clippingPlanes,z),V===!0&&Wt.setGlobalState(this.clippingPlanes,D),H!==null&&jt.render(w.state.shadowsArray,st,D);let nt=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let mt=X.material;if(mt)if(Array.isArray(mt))for(let Rt=0;Rt<mt.length;Rt++){let bt=mt[Rt];ea(bt,st,D,X),nt.add(bt)}else ea(mt,st,D,X),nt.add(mt)}),w=y.pop(),H!==null&&H.renderEnd(),nt},this.compileAsync=function(S,D,st=null){let nt=this.compile(S,D,st);return new Promise(X=>{function mt(){if(nt.forEach(function(Rt){let ft=at.get(Rt).currentProgram;(ft===void 0||ft.isReady())&&nt.delete(Rt)}),nt.size===0){X(S);return}setTimeout(mt,10)}qt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Xs=null;function qs(S){Xs&&Xs(S)}function Ni(){kn.stop()}function Ki(){kn.start()}let kn=new Wu;kn.setAnimationLoop(qs),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(S){Xs=S,$t.setAnimationLoop(S),S===null?kn.stop():kn.start()},$t.addEventListener("sessionstart",Ni),$t.addEventListener("sessionend",Ki),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;H!==null&&H.renderStart(S,D);let st=$t.enabled===!0&&$t.isPresenting===!0,nt=C!==null&&(F===null||st)&&C.begin(k,F);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&($t.cameraAutoUpdate===!0&&$t.updateCamera(D),D=$t.getCamera()),S.isScene===!0&&S.onBeforeRender(k,S,D,F),w=kt.get(S,y.length),w.init(D),w.state.textureUnits=dt.getTextureUnits(),y.push(w),$.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),E.setFromProjectionMatrix($,Ln,D.reversedDepth),z=this.localClippingEnabled,V=Wt.init(this.clippingPlanes,z),T=At.get(S,U.length),T.init(),U.push(T),$t.enabled===!0&&$t.isPresenting===!0){let Rt=k.xr.getDepthSensingMesh();Rt!==null&&Ys(Rt,D,-1/0,k.sortObjects)}Ys(S,D,0,k.sortObjects),T.finish(),H!==null&&H.updateLights(w.state.lightsArray),k.sortObjects===!0&&T.sort(I,R),Mt=$t.enabled===!1||$t.isPresenting===!1||$t.hasDepthSensing()===!1,Mt&&ie.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),V===!0&&Wt.beginShadows();let X=w.state.shadowsArray;if(jt.render(X,S,D),V===!0&&Wt.endShadows(),(nt&&C.hasRenderPass())===!1){let Rt=T.opaque,bt=T.transmissive;if(w.setupLights(),D.isArrayCamera){let ft=D.cameras;if(bt.length>0)for(let Nt=0,Ot=ft.length;Nt<Ot;Nt++){let Dt=ft[Nt];An(Rt,bt,S,Dt)}Mt&&ie.render(S);for(let Nt=0,Ot=ft.length;Nt<Ot;Nt++){let Dt=ft[Nt];Zs(T,S,Dt,Dt.viewport)}}else bt.length>0&&An(Rt,bt,S,D),Mt&&ie.render(S),Zs(T,S,D)}F!==null&&tt===0&&(dt.updateMultisampleRenderTarget(F),dt.updateRenderTargetMipmap(F)),nt&&C.end(k),S.isScene===!0&&S.onAfterRender(k,S,D),Pt.resetDefaultState(),O=-1,Y=null,y.pop(),y.length>0?(w=y[y.length-1],dt.setTextureUnits(w.state.textureUnits),V===!0&&Wt.setGlobalState(k.clippingPlanes,w.state.camera)):w=null,U.pop(),U.length>0?T=U[U.length-1]:T=null,H!==null&&H.renderEnd()};function Ys(S,D,st,nt){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)st=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(E)){nt&&ht.setFromMatrixPosition(S.matrixWorld).applyMatrix4($);let Rt=gt.update(S),bt=S.material;bt.visible&&T.push(S,Rt,bt,st,ht.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(E))){let Rt=gt.update(S),bt=S.material;if(nt&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ht.copy(S.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),ht.copy(Rt.boundingSphere.center)),ht.applyMatrix4(S.matrixWorld).applyMatrix4($)),Array.isArray(bt)){let ft=Rt.groups;for(let Nt=0,Ot=ft.length;Nt<Ot;Nt++){let Dt=ft[Nt],Tt=bt[Dt.materialIndex];Tt&&Tt.visible&&T.push(S,Rt,Tt,st,ht.z,Dt,D)}}else bt.visible&&T.push(S,Rt,bt,st,ht.z,null,D)}}let mt=S.children;for(let Rt=0,bt=mt.length;Rt<bt;Rt++)Ys(mt[Rt],D,st,nt)}function Zs(S,D,st,nt){let{opaque:X,transmissive:mt,transparent:Rt}=S;w.setupLightsView(st),V===!0&&Wt.setGlobalState(k.clippingPlanes,st),nt&&_.viewport(lt.copy(nt)),X.length>0&&Qn(X,D,st),mt.length>0&&Qn(mt,D,st),Rt.length>0&&Qn(Rt,D,st),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function An(S,D,st,nt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[nt.id]===void 0){let Tt=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[nt.id]=new an(1,1,{generateMipmaps:!0,type:Tt?Bn:on,minFilter:Ri,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let mt=w.state.transmissionRenderTarget[nt.id],Rt=nt.viewport||lt;mt.setSize(Rt.z*k.transmissionResolutionScale,Rt.w*k.transmissionResolutionScale);let bt=k.getRenderTarget(),ft=k.getActiveCubeFace(),Nt=k.getActiveMipmapLevel();k.setRenderTarget(mt),k.getClearColor(Zt),Xt=k.getClearAlpha(),Xt<1&&k.setClearColor(16777215,.5),k.clear(),Mt&&ie.render(st);let Ot=k.toneMapping;k.toneMapping=Fn;let Dt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),w.setupLightsView(nt),V===!0&&Wt.setGlobalState(k.clippingPlanes,nt),Qn(S,st,nt),dt.updateMultisampleRenderTarget(mt),dt.updateRenderTargetMipmap(mt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let ee=0,se=D.length;ee<se;ee++){let ge=D[ee],{object:_e,geometry:Le,material:Yt,group:nn}=ge;if(Yt.side===_n&&_e.layers.test(nt.layers)){let ye=Yt.side;Yt.side=Ze,Yt.needsUpdate=!0,Js(_e,st,nt,Le,Yt,nn),Yt.side=ye,Yt.needsUpdate=!0,Tt=!0}}Tt===!0&&(dt.updateMultisampleRenderTarget(mt),dt.updateRenderTargetMipmap(mt))}k.setRenderTarget(bt,ft,Nt),k.setClearColor(Zt,Xt),Dt!==void 0&&(nt.viewport=Dt),k.toneMapping=Ot}function Qn(S,D,st){let nt=D.isScene===!0?D.overrideMaterial:null;for(let X=0,mt=S.length;X<mt;X++){let Rt=S[X],{object:bt,geometry:ft,group:Nt}=Rt,Ot=Rt.material;Ot.allowOverride===!0&&nt!==null&&(Ot=nt),bt.layers.test(st.layers)&&Js(bt,D,st,ft,Ot,Nt)}}function Js(S,D,st,nt,X,mt){H!==null&&X.isNodeMaterial&&H.setObject(S,X),S.onBeforeRender(k,D,st,nt,X,mt),S.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(k,D,st,nt,S,mt),X.transparent===!0&&X.side===_n&&X.forceSinglePass===!1?(X.side=Ze,X.needsUpdate=!0,k.renderBufferDirect(st,D,nt,X,S,mt),X.side=Ai,X.needsUpdate=!0,k.renderBufferDirect(st,D,nt,X,S,mt),X.side=_n):k.renderBufferDirect(st,D,nt,X,S,mt),S.onAfterRender(k,D,st,nt,X,mt)}function Q(S,D,st){D.isScene!==!0&&(D=yt);let nt=at.get(S),X=w.state.lights,mt=w.state.shadowsArray,Rt=X.state.version,bt=zt.getParameters(S,X.state,mt,D,st,w.state.lightProbeGridArray),ft=zt.getProgramCacheKey(bt),Nt=nt.programs;nt.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,nt.fog=D.fog;let Ot=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;nt.envMap=Ut.get(S.envMap||nt.environment,Ot),nt.envMapRotation=nt.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Nt===void 0&&(S.addEventListener("dispose",ln),Nt=new Map,nt.programs=Nt);let Dt=Nt.get(ft);if(Dt!==void 0){if(nt.currentProgram===Dt&&nt.lightsStateVersion===Rt)return ct(S,bt),Dt}else bt.uniforms=zt.getUniforms(S),H!==null&&S.isNodeMaterial&&H.build(S,st,bt),S.onBeforeCompile(bt,k),Dt=zt.acquireProgram(bt,ft),Nt.set(ft,Dt),nt.uniforms=bt.uniforms;let Tt=nt.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Tt.clippingPlanes=Wt.uniform),ct(S,bt),nt.needsLights=le(S),nt.lightsStateVersion=Rt,nt.needsLights&&(Tt.ambientLightColor.value=X.state.ambient,Tt.lightProbe.value=X.state.probe,Tt.sunLights.value=X.state.sun,Tt.sunLightShadows.value=X.state.sunShadow,Tt.directionalLights.value=X.state.directional,Tt.directionalLightShadows.value=X.state.directionalShadow,Tt.spotLights.value=X.state.spot,Tt.spotLightShadows.value=X.state.spotShadow,Tt.rectAreaLights.value=X.state.rectArea,Tt.ltc_1.value=X.state.rectAreaLTC1,Tt.ltc_2.value=X.state.rectAreaLTC2,Tt.pointLights.value=X.state.point,Tt.pointLightShadows.value=X.state.pointShadow,Tt.hemisphereLights.value=X.state.hemi,Tt.sunShadowMatrix.value=X.state.sunShadowMatrix,Tt.sunShadowCascade.value=X.state.sunShadowCascade,Tt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Tt.spotLightMatrix.value=X.state.spotLightMatrix,Tt.spotLightMap.value=X.state.spotLightMap,Tt.pointShadowMatrix.value=X.state.pointShadowMatrix),nt.lightProbeGrid=w.state.lightProbeGridArray.length>0,nt.currentProgram=Dt,nt.uniformsList=null,Dt}function K(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=Bs.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function ct(S,D){let st=at.get(S);st.outputColorSpace=D.outputColorSpace,st.batching=D.batching,st.batchingColor=D.batchingColor,st.instancing=D.instancing,st.instancingColor=D.instancingColor,st.instancingMorph=D.instancingMorph,st.skinning=D.skinning,st.morphTargets=D.morphTargets,st.morphNormals=D.morphNormals,st.morphColors=D.morphColors,st.morphTargetsCount=D.morphTargetsCount,st.numClippingPlanes=D.numClippingPlanes,st.numIntersection=D.numClipIntersection,st.vertexAlphas=D.vertexAlphas,st.vertexTangents=D.vertexTangents,st.toneMapping=D.toneMapping}function Ft(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(D.matrixWorld);for(let st=0,nt=S.length;st<nt;st++){let X=S[st];if(X.texture!==null&&X.boundingBox.containsPoint(x))return X}return null}function Lt(S,D,st,nt,X){D.isScene!==!0&&(D=yt),dt.resetTextureUnits();let mt=D.fog,Rt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?D.environment:null,bt=F===null?k.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:pe.workingColorSpace,ft=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Nt=Ut.get(nt.envMap||Rt,ft),Ot=nt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Dt=!!st.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Tt=!!st.morphAttributes.position,ee=!!st.morphAttributes.normal,se=!!st.morphAttributes.color,ge=Fn;nt.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ge=k.toneMapping);let _e=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Le=_e!==void 0?_e.length:0,Yt=at.get(nt),nn=w.state.lights;if(V===!0&&(z===!0||S!==Y)){let Ae=S===Y&&nt.id===O;Wt.setState(nt,S,Ae)}let ye=!1;nt.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==nn.state.version||Yt.outputColorSpace!==bt||X.isBatchedMesh&&Yt.batching===!1||!X.isBatchedMesh&&Yt.batching===!0||X.isBatchedMesh&&Yt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Yt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Yt.instancing===!1||!X.isInstancedMesh&&Yt.instancing===!0||X.isSkinnedMesh&&Yt.skinning===!1||!X.isSkinnedMesh&&Yt.skinning===!0||X.isInstancedMesh&&Yt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Yt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Yt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Yt.instancingMorph===!1&&X.morphTexture!==null||Yt.envMap!==Nt||nt.fog===!0&&Yt.fog!==mt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Wt.numPlanes||Yt.numIntersection!==Wt.numIntersection)||Yt.vertexAlphas!==Ot||Yt.vertexTangents!==Dt||Yt.morphTargets!==Tt||Yt.morphNormals!==ee||Yt.morphColors!==se||Yt.toneMapping!==ge||Yt.morphTargetsCount!==Le||!!Yt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ye=!0):(ye=!0,Yt.__version=nt.version);let yn=Yt.currentProgram;ye===!0&&(yn=Q(nt,D,X),H&&nt.isNodeMaterial&&H.onUpdateProgram(nt,yn,Yt));let Vn=!1,fi=!1,ji=!1,we=yn.getUniforms(),Ne=Yt.uniforms;if(_.useProgram(yn.program)&&(Vn=!0,fi=!0,ji=!0),nt.id!==O&&(O=nt.id,fi=!0),Yt.needsLights){let Ae=Ft(w.state.lightProbeGridArray,X);Yt.lightProbeGrid!==Ae&&(Yt.lightProbeGrid=Ae,fi=!0)}if(Vn||Y!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),we.setValue(v,"projectionMatrix",S.projectionMatrix),we.setValue(v,"viewMatrix",S.matrixWorldInverse);let mi=we.map.cameraPosition;mi!==void 0&&mi.setValue(v,rt.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&we.setValue(v,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&we.setValue(v,"isOrthographic",S.isOrthographicCamera===!0),Y!==S&&(Y=S,fi=!0,ji=!0)}if(Yt.needsLights&&(nn.state.sunShadowMap.length>0&&we.setValue(v,"sunShadowMap",nn.state.sunShadowMap,dt),nn.state.directionalShadowMap.length>0&&we.setValue(v,"directionalShadowMap",nn.state.directionalShadowMap,dt),nn.state.spotShadowMap.length>0&&we.setValue(v,"spotShadowMap",nn.state.spotShadowMap,dt),nn.state.pointShadowMap.length>0&&we.setValue(v,"pointShadowMap",nn.state.pointShadowMap,dt)),X.isSkinnedMesh){we.setOptional(v,X,"bindMatrix"),we.setOptional(v,X,"bindMatrixInverse");let Ae=X.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),we.setValue(v,"boneTexture",Ae.boneTexture,dt))}X.isBatchedMesh&&(we.setOptional(v,X,"batchingTexture"),we.setValue(v,"batchingTexture",X._matricesTexture,dt),we.setOptional(v,X,"batchingIdTexture"),we.setValue(v,"batchingIdTexture",X._indirectTexture,dt),we.setOptional(v,X,"batchingColorTexture"),X._colorsTexture!==null&&we.setValue(v,"batchingColorTexture",X._colorsTexture,dt));let pi=st.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&J.update(X,st,yn),(fi||Yt.receiveShadow!==X.receiveShadow)&&(Yt.receiveShadow=X.receiveShadow,we.setValue(v,"receiveShadow",X.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&D.environment!==null&&(Ne.envMapIntensity.value=D.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=s_()),fi){if(we.setValue(v,"toneMappingExposure",k.toneMappingExposure),Yt.needsLights&&St(Ne,ji),mt&&nt.fog===!0&&Jt.refreshFogUniforms(Ne,mt),Jt.refreshMaterialUniforms(Ne,nt,L,B,w.state.transmissionRenderTarget[S.id]),Yt.needsLights&&Yt.lightProbeGrid){let Ae=Yt.lightProbeGrid;Ne.probesSH.value=Ae.texture,Ne.probesMin.value.copy(Ae.boundingBox.min),Ne.probesMax.value.copy(Ae.boundingBox.max),Ne.probesResolution.value.copy(Ae.resolution)}Bs.upload(v,K(Yt),Ne,dt)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Bs.upload(v,K(Yt),Ne,dt),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&we.setValue(v,"center",X.center),we.setValue(v,"modelViewMatrix",X.modelViewMatrix),we.setValue(v,"normalMatrix",X.normalMatrix),we.setValue(v,"modelMatrix",X.matrixWorld),nt.uniformsGroups!==void 0){let Ae=nt.uniformsGroups;for(let mi=0,Qi=Ae.length;mi<Qi;mi++){let Qc=Ae[mi];Et.update(Qc,yn),Et.bind(Qc,yn)}}return yn}function St(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function le(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return ut},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(S,D,st){let nt=at.get(S);nt.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),at.get(S.texture).__webglTexture=D,at.get(S.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:st,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let st=at.get(S);st.__webglFramebuffer=D,st.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,st=0){F=S,ut=D,tt=st;let nt=null,X=!1,mt=!1;if(S){let bt=at.get(S);if(bt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(v.FRAMEBUFFER,bt.__webglFramebuffer),lt.copy(S.viewport),Ct.copy(S.scissor),vt=S.scissorTest,_.viewport(lt),_.scissor(Ct),_.setScissorTest(vt),O=-1;return}else if(bt.__webglFramebuffer===void 0)dt.setupRenderTarget(S);else if(bt.__hasExternalTextures)dt.rebindTextures(S,at.get(S.texture).__webglTexture,at.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ot=S.depthTexture;if(bt.__boundDepthTexture!==Ot){if(Ot!==null&&at.has(Ot)&&(S.width!==Ot.image.width||S.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(S)}}let ft=S.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(mt=!0);let Nt=at.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Nt[D])?nt=Nt[D][st]:nt=Nt[D],X=!0):S.samples>0&&dt.useMultisampledRTT(S)===!1?nt=at.get(S).__webglMultisampledFramebuffer:Array.isArray(Nt)?nt=Nt[st]:nt=Nt,lt.copy(S.viewport),Ct.copy(S.scissor),vt=S.scissorTest}else lt.copy(N).multiplyScalar(L).floor(),Ct.copy(it).multiplyScalar(L).floor(),vt=xt;if(st!==0&&(nt=ot),_.bindFramebuffer(v.FRAMEBUFFER,nt)&&_.drawBuffers(S,nt),_.viewport(lt),_.scissor(Ct),_.setScissorTest(vt),X){let bt=at.get(S.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+D,bt.__webglTexture,st)}else if(mt){let bt=D;for(let ft=0;ft<S.textures.length;ft++){let Nt=at.get(S.textures[ft]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+ft,Nt.__webglTexture,st,bt)}}else if(S!==null&&st!==0){let bt=at.get(S.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,bt.__webglTexture,st)}O=-1};function ce(S){let D=at.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=A.textureFormatReadable(S.format),D.__typeReadable=A.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,st,nt,X,mt,Rt,bt=0){if(!(S&&S.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=at.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Rt!==void 0&&(ft=ft[Rt]),ft){_.bindFramebuffer(v.FRAMEBUFFER,ft);try{let Nt=S.textures[bt],Ot=Nt.format,Dt=Nt.type;S.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+bt);let Tt=ce(Nt);if(Tt.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-nt&&st>=0&&st<=S.height-X&&v.readPixels(D,st,nt,X,Gt.convert(Ot),Gt.convert(Dt),mt)}finally{let Nt=F!==null?at.get(F).__webglFramebuffer:null;_.bindFramebuffer(v.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(S,D,st,nt,X,mt,Rt,bt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=at.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Rt!==void 0&&(ft=ft[Rt]),ft)if(D>=0&&D<=S.width-nt&&st>=0&&st<=S.height-X){_.bindFramebuffer(v.FRAMEBUFFER,ft);let Nt=S.textures[bt],Ot=Nt.format,Dt=Nt.type;S.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+bt);let Tt=ce(Nt);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,ee),v.bufferData(v.PIXEL_PACK_BUFFER,mt.byteLength,v.STREAM_READ),v.readPixels(D,st,nt,X,Gt.convert(Ot),Gt.convert(Dt),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let se=F!==null?at.get(F).__webglFramebuffer:null;_.bindFramebuffer(v.FRAMEBUFFER,se);let ge=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await fu(v,ge,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,ee),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,mt),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer(ee),v.deleteSync(ge),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,st=0){let nt=Math.pow(2,-st),X=Math.floor(S.image.width*nt),mt=Math.floor(S.image.height*nt),Rt=D!==null?D.x:0,bt=D!==null?D.y:0;dt.setTexture2D(S,0),v.copyTexSubImage2D(v.TEXTURE_2D,st,0,0,Rt,bt,X,mt),_.unbindTexture()},this.copyTextureToTexture=function(S,D,st=null,nt=null,X=0,mt=0){let Rt,bt,ft,Nt,Ot,Dt,Tt,ee,se,ge=S.isCompressedTexture?S.mipmaps[mt]:S.image;if(st!==null)Rt=st.max.x-st.min.x,bt=st.max.y-st.min.y,ft=st.isBox3?st.max.z-st.min.z:1,Nt=st.min.x,Ot=st.min.y,Dt=st.isBox3?st.min.z:0;else{let Ne=Math.pow(2,-X);Rt=Math.floor(ge.width*Ne),bt=Math.floor(ge.height*Ne),S.isDataArrayTexture?ft=ge.depth:S.isData3DTexture?ft=Math.floor(ge.depth*Ne):ft=1,Nt=0,Ot=0,Dt=0}nt!==null?(Tt=nt.x,ee=nt.y,se=nt.z):(Tt=0,ee=0,se=0);let _e=Gt.convert(D.format),Le=Gt.convert(D.type),Yt;D.isData3DTexture?(dt.setTexture3D(D,0),Yt=v.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(dt.setTexture2DArray(D,0),Yt=v.TEXTURE_2D_ARRAY):(dt.setTexture2D(D,0),Yt=v.TEXTURE_2D),_.activeTexture(v.TEXTURE0),_.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(v.UNPACK_ALIGNMENT,D.unpackAlignment);let nn=_.getParameter(v.UNPACK_ROW_LENGTH),ye=_.getParameter(v.UNPACK_IMAGE_HEIGHT),yn=_.getParameter(v.UNPACK_SKIP_PIXELS),Vn=_.getParameter(v.UNPACK_SKIP_ROWS),fi=_.getParameter(v.UNPACK_SKIP_IMAGES);_.pixelStorei(v.UNPACK_ROW_LENGTH,ge.width),_.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ge.height),_.pixelStorei(v.UNPACK_SKIP_PIXELS,Nt),_.pixelStorei(v.UNPACK_SKIP_ROWS,Ot),_.pixelStorei(v.UNPACK_SKIP_IMAGES,Dt);let ji=S.isDataArrayTexture||S.isData3DTexture,we=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let Ne=at.get(S),pi=at.get(D),Ae=at.get(Ne.__renderTarget),mi=at.get(pi.__renderTarget);_.bindFramebuffer(v.READ_FRAMEBUFFER,Ae.__webglFramebuffer),_.bindFramebuffer(v.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let Qi=0;Qi<ft;Qi++)ji&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,at.get(S).__webglTexture,X,Dt+Qi),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,at.get(D).__webglTexture,mt,se+Qi)),v.blitFramebuffer(Nt,Ot,Rt,bt,Tt,ee,Rt,bt,v.DEPTH_BUFFER_BIT,v.NEAREST);_.bindFramebuffer(v.READ_FRAMEBUFFER,null),_.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||at.has(S)){let Ne=at.get(S),pi=at.get(D);_.bindFramebuffer(v.READ_FRAMEBUFFER,G),_.bindFramebuffer(v.DRAW_FRAMEBUFFER,et);for(let Ae=0;Ae<ft;Ae++)ji?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Ne.__webglTexture,X,Dt+Ae):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Ne.__webglTexture,X),we?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,pi.__webglTexture,mt,se+Ae):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,pi.__webglTexture,mt),X!==0?v.blitFramebuffer(Nt,Ot,Rt,bt,Tt,ee,Rt,bt,v.COLOR_BUFFER_BIT,v.NEAREST):we?v.copyTexSubImage3D(Yt,mt,Tt,ee,se+Ae,Nt,Ot,Rt,bt):v.copyTexSubImage2D(Yt,mt,Tt,ee,Nt,Ot,Rt,bt);_.bindFramebuffer(v.READ_FRAMEBUFFER,null),_.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else we?S.isDataTexture||S.isData3DTexture?v.texSubImage3D(Yt,mt,Tt,ee,se,Rt,bt,ft,_e,Le,ge.data):D.isCompressedArrayTexture?v.compressedTexSubImage3D(Yt,mt,Tt,ee,se,Rt,bt,ft,_e,ge.data):v.texSubImage3D(Yt,mt,Tt,ee,se,Rt,bt,ft,_e,Le,ge):S.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,mt,Tt,ee,Rt,bt,_e,Le,ge.data):S.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,mt,Tt,ee,ge.width,ge.height,_e,ge.data):v.texSubImage2D(v.TEXTURE_2D,mt,Tt,ee,Rt,bt,_e,Le,ge);_.pixelStorei(v.UNPACK_ROW_LENGTH,nn),_.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ye),_.pixelStorei(v.UNPACK_SKIP_PIXELS,yn),_.pixelStorei(v.UNPACK_SKIP_ROWS,Vn),_.pixelStorei(v.UNPACK_SKIP_IMAGES,fi),mt===0&&D.generateMipmaps&&v.generateMipmap(Yt),_.unbindTexture()},this.initRenderTarget=function(S){at.get(S).__webglFramebuffer===void 0&&dt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?dt.setTextureCube(S,0):S.isData3DTexture?dt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?dt.setTexture2DArray(S,0):dt.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){ut=0,tt=0,F=null,_.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var Kr=new W;function wn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Kr.copy(t),Kr[n]=0,Kr.normalize();let l=.5*a/(a+o),h=1-Kr.angleTo(i)/c;return Math.sign(Kr[e])===1?h*l:o/(a+o)+l+l*(1-h)}var sl=class i extends qn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new W,l=new W,h=new W(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,g=d.length/6,M=new W,m=.5/a;for(let f=0,b=0;f<d.length;f+=3,b+=2)switch(c.fromArray(d,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[f+0]=h.x*Math.sign(c.x)+l.x*r,d[f+1]=h.y*Math.sign(c.y)+l.y*r,d[f+2]=h.z*Math.sign(c.z)+l.z*r,u[f+0]=l.x,u[f+1]=l.y,u[f+2]=l.z,Math.floor(f/g)){case 0:M.set(1,0,0),p[b+0]=wn(M,l,"z","y",r,n),p[b+1]=1-wn(M,l,"y","z",r,e);break;case 1:M.set(-1,0,0),p[b+0]=1-wn(M,l,"z","y",r,n),p[b+1]=1-wn(M,l,"y","z",r,e);break;case 2:M.set(0,1,0),p[b+0]=1-wn(M,l,"x","z",r,t),p[b+1]=wn(M,l,"z","x",r,n);break;case 3:M.set(0,-1,0),p[b+0]=1-wn(M,l,"x","z",r,t),p[b+1]=1-wn(M,l,"z","x",r,n);break;case 4:M.set(0,0,1),p[b+0]=1-wn(M,l,"x","y",r,t),p[b+1]=1-wn(M,l,"y","x",r,e);break;case 5:M.set(0,0,-1),p[b+0]=wn(M,l,"x","y",r,t),p[b+1]=1-wn(M,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var rl=class extends ki{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new qn;t.deleteAttribute("uv");let e=new Dn({side:Ze}),n=new Dn,s=new Ur(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Pe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new mr(t,n,6),o=new Ye;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Pe(t,Vs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Pe(t,Vs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new Pe(t,Vs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Pe(t,Vs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Pe(t,Vs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let p=new Pe(t,Vs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Vs(i){return new Pr({color:0,emissive:16777215,emissiveIntensity:i})}var jr=De,al=class i extends Hi{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){let r=this,a=new Lr(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){let e=this;function n(L,I){if(L.nodeType!==1)return;L.hasAttribute("filter")&&console.warn("THREE.SVGLoader: Filters are not supported.");let R=T(L),N=!1,it=null;switch(L.nodeName){case"svg":I=M(L,I);break;case"style":r(L);break;case"g":I=M(L,I);break;case"path":I=M(L,I),L.hasAttribute("d")&&(it=s(L));break;case"rect":I=M(L,I),it=c(L);break;case"polygon":I=M(L,I),it=l(L);break;case"polyline":I=M(L,I),it=h(L);break;case"circle":I=M(L,I),it=d(L);break;case"ellipse":I=M(L,I),it=u(L);break;case"line":I=M(L,I),it=p(L);break;case"defs":N=!0;break;case"use":I=M(L,I);let V=(L.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),z=L.viewportElement.getElementById(V);z?n(z,I):console.warn("SVGLoader: 'use node' references non-existent node id: "+V);break;default:}if(it){I.fill!==void 0&&I.fill!=="none"&&!I.fill.startsWith("url")&&it.color.setStyle(I.fill,jr),y(it,Xt),et.push(it);let E=Object.assign({},I);E.strokeWidth=I.strokeWidth*ot(Xt),it.userData={node:L,style:E,transform:Xt.clone(),gradients:tt}}let xt=L.childNodes;for(let E=0;E<xt.length;E++){let V=xt[E];N&&V.nodeName!=="style"&&V.nodeName!=="defs"||n(V,I)}R&&(F.pop(),F.length>0?Xt.copy(F[F.length-1]):Xt.identity())}function s(L){let I=new Un,R=new wt,N=new wt,it=new wt,xt=!0,E=!1,V=L.getAttribute("d");if(V===""||V==="none")return null;let z=V.match(/[a-df-z][^a-df-z]*/ig);for(let $=0,rt=z.length;$<rt;$++){let ht=z[$],yt=ht.charAt(0),Mt=ht.slice(1).trim();xt===!0&&(E=!0,xt=!1);let j;switch(yt){case"M":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v+=2)R.x=j[v+0],R.y=j[v+1],N.x=R.x,N.y=R.y,v===0?I.moveTo(R.x,R.y):I.lineTo(R.x,R.y),v===0&&it.copy(R);break;case"H":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v++)R.x=j[v],N.x=R.x,N.y=R.y,I.lineTo(R.x,R.y),v===0&&E===!0&&it.copy(R);break;case"V":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v++)R.y=j[v],N.x=R.x,N.y=R.y,I.lineTo(R.x,R.y),v===0&&E===!0&&it.copy(R);break;case"L":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v+=2)R.x=j[v+0],R.y=j[v+1],N.x=R.x,N.y=R.y,I.lineTo(R.x,R.y),v===0&&E===!0&&it.copy(R);break;case"C":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v+=6)I.bezierCurveTo(j[v+0],j[v+1],j[v+2],j[v+3],j[v+4],j[v+5]),N.x=j[v+2],N.y=j[v+3],R.x=j[v+4],R.y=j[v+5],v===0&&E===!0&&it.copy(R);break;case"S":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v+=4)I.bezierCurveTo(m(R.x,N.x),m(R.y,N.y),j[v+0],j[v+1],j[v+2],j[v+3]),N.x=j[v+0],N.y=j[v+1],R.x=j[v+2],R.y=j[v+3],v===0&&E===!0&&it.copy(R);break;case"Q":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v+=4)I.quadraticCurveTo(j[v+0],j[v+1],j[v+2],j[v+3]),N.x=j[v+0],N.y=j[v+1],R.x=j[v+2],R.y=j[v+3],v===0&&E===!0&&it.copy(R);break;case"T":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v+=2){let qt=m(R.x,N.x),A=m(R.y,N.y);I.quadraticCurveTo(qt,A,j[v+0],j[v+1]),N.x=qt,N.y=A,R.x=j[v+0],R.y=j[v+1],v===0&&E===!0&&it.copy(R)}break;case"A":j=f(Mt,[3,4],7);for(let v=0,Bt=j.length;v<Bt;v+=7){if(j[v+5]==R.x&&j[v+6]==R.y)continue;let qt=R.clone();R.x=j[v+5],R.y=j[v+6],N.x=R.x,N.y=R.y,a(I,j[v],j[v+1],j[v+2],j[v+3],j[v+4],qt,R),v===0&&E===!0&&it.copy(R)}break;case"m":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v+=2)R.x+=j[v+0],R.y+=j[v+1],N.x=R.x,N.y=R.y,v===0?I.moveTo(R.x,R.y):I.lineTo(R.x,R.y),v===0&&it.copy(R);break;case"h":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v++)R.x+=j[v],N.x=R.x,N.y=R.y,I.lineTo(R.x,R.y),v===0&&E===!0&&it.copy(R);break;case"v":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v++)R.y+=j[v],N.x=R.x,N.y=R.y,I.lineTo(R.x,R.y),v===0&&E===!0&&it.copy(R);break;case"l":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v+=2)R.x+=j[v+0],R.y+=j[v+1],N.x=R.x,N.y=R.y,I.lineTo(R.x,R.y),v===0&&E===!0&&it.copy(R);break;case"c":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v+=6)I.bezierCurveTo(R.x+j[v+0],R.y+j[v+1],R.x+j[v+2],R.y+j[v+3],R.x+j[v+4],R.y+j[v+5]),N.x=R.x+j[v+2],N.y=R.y+j[v+3],R.x+=j[v+4],R.y+=j[v+5],v===0&&E===!0&&it.copy(R);break;case"s":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v+=4)I.bezierCurveTo(m(R.x,N.x),m(R.y,N.y),R.x+j[v+0],R.y+j[v+1],R.x+j[v+2],R.y+j[v+3]),N.x=R.x+j[v+0],N.y=R.y+j[v+1],R.x+=j[v+2],R.y+=j[v+3],v===0&&E===!0&&it.copy(R);break;case"q":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v+=4)I.quadraticCurveTo(R.x+j[v+0],R.y+j[v+1],R.x+j[v+2],R.y+j[v+3]),N.x=R.x+j[v+0],N.y=R.y+j[v+1],R.x+=j[v+2],R.y+=j[v+3],v===0&&E===!0&&it.copy(R);break;case"t":j=f(Mt);for(let v=0,Bt=j.length;v<Bt;v+=2){let qt=m(R.x,N.x),A=m(R.y,N.y);I.quadraticCurveTo(qt,A,R.x+j[v+0],R.y+j[v+1]),N.x=qt,N.y=A,R.x=R.x+j[v+0],R.y=R.y+j[v+1],v===0&&E===!0&&it.copy(R)}break;case"a":j=f(Mt,[3,4],7);for(let v=0,Bt=j.length;v<Bt;v+=7){if(j[v+5]==0&&j[v+6]==0)continue;let qt=R.clone();R.x+=j[v+5],R.y+=j[v+6],N.x=R.x,N.y=R.y,a(I,j[v],j[v+1],j[v+2],j[v+3],j[v+4],qt,R),v===0&&E===!0&&it.copy(R)}break;case"Z":case"z":I.currentPath.autoClose=!0,I.currentPath.curves.length>0&&(R.copy(it),I.currentPath.currentPoint.copy(R),xt=!0);break;default:console.warn(ht)}E=!1}return I}function r(L){if(!(!L.sheet||!L.sheet.cssRules||!L.sheet.cssRules.length))for(let I=0;I<L.sheet.cssRules.length;I++){let R=L.sheet.cssRules[I];if(R.type!==1)continue;let N=R.selectorText.split(/,/gm).filter(Boolean).map(it=>it.trim());for(let it=0;it<N.length;it++){let xt=Object.fromEntries(Object.entries(R.style).filter(([,E])=>E!==""));ut[N[it]]=Object.assign(ut[N[it]]||{},xt)}}}function a(L,I,R,N,it,xt,E,V){if(I==0||R==0){L.lineTo(V.x,V.y);return}N=N*Math.PI/180,I=Math.abs(I),R=Math.abs(R);let z=(E.x-V.x)/2,$=(E.y-V.y)/2,rt=Math.cos(N)*z+Math.sin(N)*$,ht=-Math.sin(N)*z+Math.cos(N)*$,yt=I*I,Mt=R*R,j=rt*rt,v=ht*ht,Bt=j/yt+v/Mt;if(Bt>1){let gt=Math.sqrt(Bt);I=gt*I,R=gt*R,yt=I*I,Mt=R*R}let qt=yt*v+Mt*j,A=(yt*Mt-qt)/qt,_=Math.sqrt(Math.max(0,A));it===xt&&(_=-_);let Z=_*I*ht/R,at=-_*R*rt/I,dt=Math.cos(N)*Z-Math.sin(N)*at+(E.x+V.x)/2,Ut=Math.sin(N)*Z+Math.cos(N)*at+(E.y+V.y)/2,It=o(1,0,(rt-Z)/I,(ht-at)/R),pt=o((rt-Z)/I,(ht-at)/R,(-rt-Z)/I,(-ht-at)/R)%(Math.PI*2);L.currentPath.absellipse(dt,Ut,I,R,It,It+pt,xt===0,N)}function o(L,I,R,N){let it=L*R+I*N,xt=Math.sqrt(L*L+I*I)*Math.sqrt(R*R+N*N),E=Math.acos(Math.max(-1,Math.min(1,it/xt)));return L*N-I*R<0&&(E=-E),E}function c(L){let I=x(L.getAttribute("x")||0),R=x(L.getAttribute("y")||0),N=x(L.getAttribute("rx")||L.getAttribute("ry")||0),it=x(L.getAttribute("ry")||L.getAttribute("rx")||0),xt=x(L.getAttribute("width")),E=x(L.getAttribute("height")),V=1-.551915024494,z=new Un;return z.moveTo(I+N,R),z.lineTo(I+xt-N,R),(N!==0||it!==0)&&z.bezierCurveTo(I+xt-N*V,R,I+xt,R+it*V,I+xt,R+it),z.lineTo(I+xt,R+E-it),(N!==0||it!==0)&&z.bezierCurveTo(I+xt,R+E-it*V,I+xt-N*V,R+E,I+xt-N,R+E),z.lineTo(I+N,R+E),(N!==0||it!==0)&&z.bezierCurveTo(I+N*V,R+E,I,R+E-it*V,I,R+E-it),z.lineTo(I,R+it),(N!==0||it!==0)&&z.bezierCurveTo(I,R+it*V,I+N*V,R,I+N,R),z}function l(L){function I(xt,E,V){let z=x(E),$=x(V);it===0?N.moveTo(z,$):N.lineTo(z,$),it++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,N=new Un,it=0;return L.getAttribute("points").replace(R,I),N.currentPath.autoClose=!0,N}function h(L){function I(xt,E,V){let z=x(E),$=x(V);it===0?N.moveTo(z,$):N.lineTo(z,$),it++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,N=new Un,it=0;return L.getAttribute("points").replace(R,I),N.currentPath.autoClose=!1,N}function d(L){let I=x(L.getAttribute("cx")||0),R=x(L.getAttribute("cy")||0),N=x(L.getAttribute("r")||0),it=new Yn;it.absarc(I,R,N,0,Math.PI*2);let xt=new Un;return xt.subPaths.push(it),xt}function u(L){let I=x(L.getAttribute("cx")||0),R=x(L.getAttribute("cy")||0),N=x(L.getAttribute("rx")||0),it=x(L.getAttribute("ry")||0),xt=new Yn;xt.absellipse(I,R,N,it,0,Math.PI*2);let E=new Un;return E.subPaths.push(xt),E}function p(L){let I=x(L.getAttribute("x1")||0),R=x(L.getAttribute("y1")||0),N=x(L.getAttribute("x2")||0),it=x(L.getAttribute("y2")||0),xt=new Un;return xt.moveTo(I,R),xt.lineTo(N,it),xt.currentPath.autoClose=!1,xt}function g(L){let I="http://www.w3.org/1999/xlink",R=L.querySelectorAll("linearGradient, radialGradient"),N=["x1","y1","x2","y2","cx","cy","r","fx","fy","gradientUnits","gradientTransform","spreadMethod"],it={};for(let E of R){let V=E.getAttribute("id");if(!V)continue;let z={type:E.nodeName==="radialGradient"?"radialGradient":"linearGradient",attrs:{},stops:null,href:null},$=E.getAttributeNS(I,"href")||E.getAttribute("href")||"";$.startsWith("#")&&(z.href=$.substring(1));for(let ht of N)E.hasAttribute(ht)&&(z.attrs[ht]=E.getAttribute(ht));let rt=E.querySelectorAll("stop");if(rt.length>0){z.stops=[];for(let ht of rt){let yt=ht.getAttribute("stop-color");!yt&&ht.style&&(yt=ht.style["stop-color"]),yt||(yt="#000");let Mt=ht.getAttribute("stop-opacity");(Mt===null||Mt==="")&&ht.style&&(Mt=ht.style["stop-opacity"]),Mt=Mt===null||Mt===""||Mt===void 0?1:Math.max(0,Math.min(1,parseFloat(Mt)));let j=Math.max(0,Math.min(1,parseFloat(ht.getAttribute("offset")||"0")));z.stops.push({offset:j,color:yt,opacity:Mt})}}it[V]=z}function xt(E,V){let z=it[E];if(!z||V.has(E))return z;if(V.add(E),z.href&&it[z.href]){let $=xt(z.href,V);if($){z.stops||(z.stops=$.stops);for(let rt in $.attrs)rt in z.attrs||(z.attrs[rt]=$.attrs[rt])}}return z}for(let E in it)xt(E,new Set);for(let E in it){let ht=function(yt){return typeof yt!="string"?0:yt.endsWith("%")?parseFloat(yt)/100:x(yt)},V=it[E],z=V.attrs,$=z.gradientUnits==="userSpaceOnUse"?"userSpaceOnUse":"objectBoundingBox",rt={type:V.type,gradientUnits:$,spreadMethod:z.spreadMethod==="reflect"||z.spreadMethod==="repeat"?z.spreadMethod:"pad",gradientTransform:null,stops:(V.stops||[]).slice().sort((yt,Mt)=>yt.offset-Mt.offset)};if(z.gradientTransform&&(rt.gradientTransform=new te,U(z.gradientTransform,rt.gradientTransform)),V.type==="linearGradient")rt.x1=z.x1!==void 0?ht(z.x1):0,rt.y1=z.y1!==void 0?ht(z.y1):0,rt.x2=z.x2!==void 0?ht(z.x2):$==="objectBoundingBox"?1:0,rt.y2=z.y2!==void 0?ht(z.y2):0;else{let yt=$==="objectBoundingBox"?.5:0,Mt=$==="objectBoundingBox"?.5:0;rt.cx=z.cx!==void 0?ht(z.cx):yt,rt.cy=z.cy!==void 0?ht(z.cy):yt,rt.r=z.r!==void 0?ht(z.r):Mt,rt.fx=z.fx!==void 0?ht(z.fx):rt.cx,rt.fy=z.fy!==void 0?ht(z.fy):rt.cy}tt[E]=rt}}function M(L,I){I=Object.assign({},I);let R={};if(L.hasAttribute("class")){let E=L.getAttribute("class").split(/\s/).filter(Boolean).map(V=>V.trim());for(let V=0;V<E.length;V++)R=Object.assign(R,ut["."+E[V]])}L.hasAttribute("id")&&(R=Object.assign(R,ut["#"+L.getAttribute("id")]));function N(E,V,z){z===void 0&&(z=function(rt){return rt}),L.hasAttribute(E)&&(I[V]=z(L.getAttribute(E))),R[V]&&(I[V]=z(R[V])),L.style&&L.style[E]!==""&&(I[V]=z(L.style[E]))}function it(E){return Math.max(0,Math.min(1,x(E)))}function xt(E){return Math.max(0,x(E))}return N("fill","fill"),N("fill-opacity","fillOpacity",it),N("fill-rule","fillRule"),N("opacity","opacity",it),N("stroke","stroke"),N("stroke-opacity","strokeOpacity",it),N("stroke-width","strokeWidth",xt),N("stroke-linejoin","strokeLineJoin"),N("stroke-linecap","strokeLineCap"),N("stroke-miterlimit","strokeMiterLimit",xt),N("visibility","visibility"),I}function m(L,I){return L-(I-L)}function f(L,I,R){if(typeof L!="string")throw new TypeError("Invalid input: "+typeof L);let N={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},it=0,xt=1,E=2,V=3,z=it,$=!0,rt="",ht="",yt=[];function Mt(qt,A,_){let Z=new SyntaxError('Unexpected character "'+qt+'" at index '+A+".");throw Z.partial=_,Z}function j(){rt!==""&&(ht===""?yt.push(Number(rt)):yt.push(Number(rt)*Math.pow(10,Number(ht)))),rt="",ht=""}let v,Bt=L.length;for(let qt=0;qt<Bt;qt++){if(v=L[qt],Array.isArray(I)&&I.includes(yt.length%R)&&N.FLAGS.test(v)){z=xt,rt=v,j();continue}if(z===it){if(N.WHITESPACE.test(v))continue;if(N.DIGIT.test(v)||N.SIGN.test(v)){z=xt,rt=v;continue}if(N.POINT.test(v)){z=E,rt=v;continue}N.COMMA.test(v)&&($&&Mt(v,qt,yt),$=!0)}if(z===xt){if(N.DIGIT.test(v)){rt+=v;continue}if(N.POINT.test(v)){rt+=v,z=E;continue}if(N.EXP.test(v)){z=V;continue}N.SIGN.test(v)&&rt.length===1&&N.SIGN.test(rt[0])&&Mt(v,qt,yt)}if(z===E){if(N.DIGIT.test(v)){rt+=v;continue}if(N.EXP.test(v)){z=V;continue}N.POINT.test(v)&&rt[rt.length-1]==="."&&Mt(v,qt,yt)}if(z===V){if(N.DIGIT.test(v)){ht+=v;continue}if(N.SIGN.test(v)){if(ht===""){ht+=v;continue}ht.length===1&&N.SIGN.test(ht)&&Mt(v,qt,yt)}}N.WHITESPACE.test(v)?(j(),z=it,$=!1):N.COMMA.test(v)?(j(),z=it,$=!0):N.SIGN.test(v)?(j(),z=xt,rt=v):N.POINT.test(v)?(j(),z=E,rt=v):Mt(v,qt,yt)}return j(),yt}let b=["mm","cm","in","pt","pc","px"],P={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(L){let I="px";if(typeof L=="string"||L instanceof String)for(let N=0,it=b.length;N<it;N++){let xt=b[N];if(L.endsWith(xt)){I=xt,L=L.substring(0,L.length-xt.length);break}}let R;return I==="px"&&e.defaultUnit!=="px"?R=P.in[e.defaultUnit]/e.defaultDPI:(R=P[I][e.defaultUnit],R<0&&(R=P[I].in*e.defaultDPI)),R*parseFloat(L)}function T(L){if(!(L.hasAttribute("transform")||L.nodeName==="use"&&(L.hasAttribute("x")||L.hasAttribute("y"))))return null;let I=w(L);return F.length>0&&I.premultiply(F[F.length-1]),Xt.copy(I),F.push(I),I}function w(L){let I=new te;if(L.nodeName==="use"&&(L.hasAttribute("x")||L.hasAttribute("y"))){let R=x(L.getAttribute("x")||0),N=x(L.getAttribute("y")||0);I.makeTranslation(R,N)}return L.hasAttribute("transform")&&U(L.getAttribute("transform"),I),I}function U(L,I){let R=O,N=L.split(")");for(let it=N.length-1;it>=0;it--){let xt=N[it].trim();if(xt==="")continue;let E=xt.indexOf("("),V=xt.length;if(E>0&&E<V){let z=xt.slice(0,E),$=f(xt.slice(E+1));switch(R.identity(),z){case"translate":if($.length>=1){let rt=$[0],ht=0;$.length>=2&&(ht=$[1]),R.makeTranslation(rt,ht)}break;case"rotate":if($.length>=1){let rt=0,ht=0,yt=0;rt=$[0]*Math.PI/180,$.length>=3&&(ht=$[1],yt=$[2]),Y.makeTranslation(-ht,-yt),lt.makeRotation(rt),Ct.multiplyMatrices(lt,Y),Y.makeTranslation(ht,yt),R.multiplyMatrices(Y,Ct)}break;case"scale":if($.length>=1){let rt=$[0],ht=rt;$.length>=2&&(ht=$[1]),R.makeScale(rt,ht)}break;case"skewX":$.length===1&&R.set(1,Math.tan($[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":$.length===1&&R.set(1,0,0,Math.tan($[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":$.length===6&&R.set($[0],$[2],$[4],$[1],$[3],$[5],0,0,1);break}I.premultiply(R)}}return I}function y(L,I){function R(E){Zt.set(E.x,E.y,1).applyMatrix3(I),E.set(Zt.x,Zt.y)}function N(E){let V=E.xRadius,z=E.yRadius,$=Math.cos(E.aRotation),rt=Math.sin(E.aRotation),ht=new W(V*$,V*rt,0),yt=new W(-z*rt,z*$,0),Mt=ht.applyMatrix3(I),j=yt.applyMatrix3(I),v=O.set(Mt.x,j.x,0,Mt.y,j.y,0,0,0,1),Bt=Y.copy(v).invert(),_=lt.copy(Bt).transpose().multiply(Bt).elements,Z=G(_[0],_[1],_[4]),at=Math.sqrt(Z.rt1),dt=Math.sqrt(Z.rt2);if(E.xRadius=1/at,E.yRadius=1/dt,E.aRotation=Math.atan2(Z.sn,Z.cs),!((E.aEndAngle-E.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let It=Y.set(at,0,0,0,dt,0,0,0,1),pt=lt.set(Z.cs,Z.sn,0,-Z.sn,Z.cs,0,0,0,1),gt=It.multiply(pt).multiply(v),zt=Jt=>{let{x:At,y:kt}=new W(Math.cos(Jt),Math.sin(Jt),0).applyMatrix3(gt);return Math.atan2(kt,At)};E.aStartAngle=zt(E.aStartAngle),E.aEndAngle=zt(E.aEndAngle),C(I)&&(E.aClockwise=!E.aClockwise)}}function it(E){let V=q(I),z=H(I);E.xRadius*=V,E.yRadius*=z;let $=V>Number.EPSILON?Math.atan2(I.elements[1],I.elements[0]):Math.atan2(-I.elements[3],I.elements[4]);E.aRotation+=$,C(I)&&(E.aStartAngle*=-1,E.aEndAngle*=-1,E.aClockwise=!E.aClockwise)}let xt=L.subPaths;for(let E=0,V=xt.length;E<V;E++){let $=xt[E].curves;for(let rt=0;rt<$.length;rt++){let ht=$[rt];ht.isLineCurve?(R(ht.v1),R(ht.v2)):ht.isCubicBezierCurve?(R(ht.v0),R(ht.v1),R(ht.v2),R(ht.v3)):ht.isQuadraticBezierCurve?(R(ht.v0),R(ht.v1),R(ht.v2)):ht.isEllipseCurve&&(vt.set(ht.aX,ht.aY),R(vt),ht.aX=vt.x,ht.aY=vt.y,k(I)?N(ht):it(ht))}}}function C(L){let I=L.elements;return I[0]*I[4]-I[1]*I[3]<0}function k(L){let I=L.elements,R=I[0]*I[3]+I[1]*I[4];if(R===0)return!1;let N=q(L),it=H(L);return Math.abs(R/(N*it))>Number.EPSILON}function q(L){let I=L.elements;return Math.sqrt(I[0]*I[0]+I[1]*I[1])}function H(L){let I=L.elements;return Math.sqrt(I[3]*I[3]+I[4]*I[4])}function ot(L){let I=L.elements,R=I[0]*I[4]-I[1]*I[3];return Math.sqrt(Math.abs(R))}function G(L,I,R){let N,it,xt,E,V,z=L+R,$=L-R,rt=Math.sqrt($*$+4*I*I);return z>0?(N=.5*(z+rt),V=1/N,it=L*V*R-I*V*I):z<0?it=.5*(z-rt):(N=.5*rt,it=-.5*rt),$>0?xt=$+rt:xt=$-rt,Math.abs(xt)>2*Math.abs(I)?(V=-2*I/xt,E=1/Math.sqrt(1+V*V),xt=V*E):Math.abs(I)===0?(xt=1,E=0):(V=-.5*xt/I,xt=1/Math.sqrt(1+V*V),E=V*xt),$>0&&(V=xt,xt=-E,E=V),{rt1:N,rt2:it,cs:xt,sn:E}}let et=[],ut={},tt={},F=[],O=new te,Y=new te,lt=new te,Ct=new te,vt=new wt,Zt=new W,Xt=new te,Qt=new DOMParser().parseFromString(t,"image/svg+xml");return g(Qt),n(Qt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:et,gradients:tt,xml:Qt.documentElement}}static createFillMaterial(t){let e=t.userData.style;if(e.fill===void 0||e.fill==="none")return null;let n=t.color,s=null,r=Ku.exec(e.fill);if(r){let o=t.userData.gradients&&t.userData.gradients[r[1]];s=a_(o,t)}let a=new je({opacity:e.fillOpacity*(e.opacity||1),transparent:!0,side:_n,depthWrite:!1});return s!==null?a.map=s:a.color=n,a}static createStrokeMaterial(t){let e=t.userData.style;return e.stroke===void 0||e.stroke==="none"?null:(Ku.test(e.stroke)&&console.warn("THREE.SVGLoader: Gradient strokes are not supported."),new je({color:new ue().setStyle(e.stroke,jr),opacity:e.strokeOpacity*(e.opacity||1),transparent:!0,side:_n,depthWrite:!1}))}static createShapes(t){return console.warn("SVGLoader: createShapes() is deprecated. Use shapePath.toShapes() instead."),t.toShapes()}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){let r=[],a=[],o=[];if(i.pointsToStrokeWithBuffers(t,e,n,s,r,a,o)===0)return null;let c=new Oe;return c.setAttribute("position",new me(r,3)),c.setAttribute("normal",new me(a,3)),c.setAttribute("uv",new me(o,2)),c}static pointsToStrokeWithBuffers(t,e,n,s,r,a,o,c){let l=new wt,h=new wt,d=new wt,u=new wt,p=new wt,g=new wt,M=new wt,m=new wt,f=new wt,b=new wt,P=new wt,x=new wt,T=new wt,w=new wt,U=new wt,y=new wt,C=new wt;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,t=xt(t);let k=t.length;if(k<2)return 0;let q=t[0].equals(t[k-1]),H,ot=t[0],G,et=e.strokeWidth/2,ut=1/(k-1),tt=0,F,O,Y,lt,Ct=!1,vt=0,Zt=c*3,Xt=c*2;Qt(t[0],t[1],l).multiplyScalar(et),m.copy(t[0]).sub(l),f.copy(t[0]).add(l),b.copy(m),P.copy(f);for(let E=1;E<k;E++){H=t[E],E===k-1?q?G=t[1]:G=void 0:G=t[E+1];let V=l;if(Qt(ot,H,V),d.copy(V).multiplyScalar(et),x.copy(H).sub(d),T.copy(H).add(d),F=tt+ut,O=!1,G!==void 0){Qt(H,G,h),d.copy(h).multiplyScalar(et),w.copy(H).sub(d),U.copy(H).add(d),Y=!0,d.subVectors(G,ot),V.dot(d)<0&&(Y=!1),E===1&&(Ct=Y),d.subVectors(G,H),d.normalize();let z=Math.abs(V.dot(d));if(z>Number.EPSILON){let $=et/z;d.multiplyScalar(-$),u.subVectors(H,ot),p.copy(u).setLength($).add(d),y.copy(p).negate();let rt=p.length(),ht=u.length();u.divideScalar(ht),g.subVectors(G,H);let yt=g.length();if(g.divideScalar(yt),u.dot(y)<ht&&g.dot(y)<yt&&(O=!0),C.copy(p).add(H),y.add(H),O){let Mt=Y?f:m,j=(C.x-Mt.x)*(y.y-Mt.y)-(C.y-Mt.y)*(y.x-Mt.x);(Y&&j<0||!Y&&j>0)&&y.copy(Mt)}switch(lt=!1,O?Y?(U.copy(y),T.copy(y)):(w.copy(y),x.copy(y)):I(),e.strokeLineJoin){case"bevel":R(Y,O,F);break;case"round":N(Y,O),Y?L(H,x,w,F,0):L(H,U,T,F,1);break;default:let Mt=et*e.strokeMiterLimit/rt;if(Mt<1)if(e.strokeLineJoin!=="miter-clip"){R(Y,O,F);break}else N(Y,O),Y?(g.subVectors(C,x).multiplyScalar(Mt).add(x),M.subVectors(C,w).multiplyScalar(Mt).add(w),B(x,F,0),B(g,F,0),B(H,F,.5),B(H,F,.5),B(g,F,0),B(M,F,0),B(H,F,.5),B(M,F,0),B(w,F,0)):(g.subVectors(C,T).multiplyScalar(Mt).add(T),M.subVectors(C,U).multiplyScalar(Mt).add(U),B(T,F,1),B(g,F,1),B(H,F,.5),B(H,F,.5),B(g,F,1),B(M,F,1),B(H,F,.5),B(M,F,1),B(U,F,1));else O?(Y?(B(f,tt,1),B(m,tt,0),B(C,F,0),B(f,tt,1),B(C,F,0),B(y,F,1)):(B(f,tt,1),B(m,tt,0),B(C,F,1),B(m,tt,0),B(y,F,0),B(C,F,1)),Y?w.copy(C):U.copy(C)):Y?(B(x,F,0),B(C,F,0),B(H,F,.5),B(H,F,.5),B(C,F,0),B(w,F,0)):(B(T,F,1),B(C,F,1),B(H,F,.5),B(H,F,.5),B(C,F,1),B(U,F,1)),lt=!0;break}}else I()}else I();!q&&E===k-1&&it(t[0],b,P,Y,!0,tt),tt=F,ot=H,m.copy(w),f.copy(U)}if(!q)it(H,x,T,Y,!1,F);else if(O&&r){let E=C,V=y;Ct!==Y&&(E=y,V=C),Y?(lt||Ct)&&(V.toArray(r,0),V.toArray(r,9),lt&&E.toArray(r,3)):(lt||!Ct)&&(V.toArray(r,3),V.toArray(r,9),lt&&E.toArray(r,0))}if(r){let E=[new wt,new wt,new wt],V=c*3;for(let z=V;z<Zt;z+=9)E[0].set(r[z],r[z+1]),E[1].set(r[z+3],r[z+4]),E[2].set(r[z+6],r[z+7]),un.area(E)<0&&(r[z+3]=E[0].x,r[z+4]=E[0].y)}return vt;function Qt(E,V,z){return z.subVectors(V,E),z.set(-z.y,z.x).normalize()}function B(E,V,z){r&&(r[Zt]=E.x,r[Zt+1]=E.y,r[Zt+2]=0,a&&(a[Zt]=0,a[Zt+1]=0,a[Zt+2]=1),Zt+=3,o&&(o[Xt]=V,o[Xt+1]=z,Xt+=2)),vt+=3}function L(E,V,z,$,rt){l.copy(V).sub(E).normalize(),h.copy(z).sub(E).normalize();let ht=Math.PI,yt=l.dot(h);Math.abs(yt)<1&&(ht=Math.abs(Math.acos(yt))),ht/=n,d.copy(V);for(let Mt=0,j=n-1;Mt<j;Mt++)u.copy(d).rotateAround(E,ht),B(d,$,rt),B(u,$,rt),B(E,$,.5),d.copy(u);B(d,$,rt),B(z,$,rt),B(E,$,.5)}function I(){B(f,tt,1),B(m,tt,0),B(x,F,0),B(f,tt,1),B(x,F,0),B(T,F,1)}function R(E,V,z){V?E?(B(f,tt,1),B(m,tt,0),B(x,F,0),B(f,tt,1),B(x,F,0),B(y,F,1),B(x,z,0),B(w,z,0),B(y,z,.5)):(B(f,tt,1),B(m,tt,0),B(T,F,1),B(m,tt,0),B(y,F,0),B(T,F,1),B(T,z,1),B(y,z,0),B(U,z,1)):E?(B(x,z,0),B(w,z,0),B(H,z,.5)):(B(T,z,1),B(U,z,0),B(H,z,.5))}function N(E,V){V&&(E?(B(f,tt,1),B(m,tt,0),B(x,F,0),B(f,tt,1),B(x,F,0),B(y,F,1),B(x,tt,0),B(H,F,.5),B(y,F,1),B(H,F,.5),B(w,tt,0),B(y,F,1)):(B(f,tt,1),B(m,tt,0),B(T,F,1),B(m,tt,0),B(y,F,0),B(T,F,1),B(T,tt,1),B(y,F,0),B(H,F,.5),B(H,F,.5),B(y,F,0),B(U,tt,1)))}function it(E,V,z,$,rt,ht){switch(e.strokeLineCap){case"round":rt?L(E,z,V,ht,.5):L(E,V,z,ht,.5);break;case"square":if(rt)l.subVectors(V,E),h.set(l.y,-l.x),d.addVectors(l,h).add(E),u.subVectors(h,l).add(E),$?(d.toArray(r,3),u.toArray(r,0),u.toArray(r,9)):(d.toArray(r,3),o[7]===1?u.toArray(r,9):d.toArray(r,9),u.toArray(r,0));else{l.subVectors(z,E),h.set(l.y,-l.x),d.addVectors(l,h).add(E),u.subVectors(h,l).add(E);let yt=r.length;$?(d.toArray(r,yt-3),u.toArray(r,yt-6),u.toArray(r,yt-12)):(u.toArray(r,yt-6),d.toArray(r,yt-3),u.toArray(r,yt-12))}break;default:break}}function xt(E){let V=!1;for(let $=1,rt=E.length-1;$<rt;$++)if(E[$].distanceTo(E[$+1])<s){V=!0;break}if(!V)return E;let z=[];z.push(E[0]);for(let $=1,rt=E.length-1;$<rt;$++)E[$].distanceTo(E[$+1])>=s&&z.push(E[$]);return z.push(E[E.length-1]),z}}},Ku=/^\s*url\(\s*(?:["']\s*)?#([^)'"\s]+)(?:\s*["'])?\s*\)\s*$/;function a_(i,t,e=256){if(!i||!Array.isArray(i.stops)||i.stops.length===0)return null;let n=t.userData.transform,s=i.gradientUnits==="objectBoundingBox",r=null;if(s&&(r=o_(t,n),r===null))return null;function a(d,u,p){p.set(d,u,1),i.gradientTransform&&p.applyMatrix3(i.gradientTransform),s&&p.set(r.minX+p.x*r.width,r.minY+p.y*r.height,1),n&&p.applyMatrix3(n)}let o=document.createElement("canvas"),c;if(i.type==="linearGradient"){o.width=e,o.height=1;let d=o.getContext("2d"),u=d.createLinearGradient(0,0,e,0);ju(u,i.stops),d.fillStyle=u,d.fillRect(0,0,e,1);let p=new W,g=new W;a(i.x1,i.y1,p),a(i.x2,i.y2,g);let M=g.x-p.x,m=g.y-p.y,f=M*M+m*m||1e-20,b=M/f,P=m/f,x=-(b*p.x+P*p.y);c=new te().set(b,P,x,0,0,.5,0,0,1)}else{let d=i.cx,u=i.cy,p=i.fx,g=i.fy,M=i.r;if(i.gradientTransform){let y=new W;y.set(d,u,1).applyMatrix3(i.gradientTransform),d=y.x,u=y.y,y.set(p,g,1).applyMatrix3(i.gradientTransform),p=y.x,g=y.y}if(s&&(d=r.minX+d*r.width,u=r.minY+u*r.height,p=r.minX+p*r.width,g=r.minY+g*r.height,M=M*Math.sqrt((r.width*r.width+r.height*r.height)/2)),M<=0)return null;o.width=e,o.height=e;let m=o.getContext("2d"),f=d-M,b=u-M,P=2*M,x=e/P;m.setTransform(x,0,0,x,-f*x,-b*x);let T=m.createRadialGradient(p,g,0,d,u,M);ju(T,i.stops),m.fillStyle=T,m.fillRect(f,b,P,P);let w=n?n.clone().invert():new te;c=new te().set(1/P,0,-f/P,0,1/P,-b/P,0,0,1).multiply(w)}let l=new li(o);l.colorSpace=jr,l.flipY=!1,l.matrixAutoUpdate=!1,l.matrix=c;let h=i.spreadMethod==="reflect"?_s:i.spreadMethod==="repeat"?gs:Mn;return l.wrapS=h,l.wrapT=h,l}function o_(i,t){let e=t?t.clone().invert():null,n=new wt,s=new Ps;for(let r of i.subPaths)for(let a of r.getPoints())n.copy(a),e&&n.applyMatrix3(e),s.expandByPoint(n);return s.isEmpty()?null:{minX:s.min.x,minY:s.min.y,width:s.max.x-s.min.x,height:s.max.y-s.min.y}}function ju(i,t){let e=new ue;for(let n of t){let s=n.color;if(n.opacity<1){e.setStyle(n.color,jr);let r=/rgb\(([^)]+)\)/.exec(e.getStyle(jr));r&&(s=`rgba(${r[1]},${n.opacity})`)}i.addColorStop(Math.max(0,Math.min(1,n.offset)),s)}}var l_="https://photon.komoot.io/api/",c_="https://nominatim.openstreetmap.org/lookup",h_="6.6,35.4,18.6,47.2",u_=["amenity","shop","craft","tourism","leisure","office","healthcare"],d_={restaurant:"Ristorante",fast_food:"Locale",food_court:"Ristorante",cafe:"Bar",bar:"Bar",pub:"Pub",ice_cream:"Gelateria",bakery:"Panetteria",pastry:"Pasticceria",confectionery:"Pasticceria",deli:"Gastronomia",hairdresser:"Parrucchiere",beauty:"Centro estetico",cosmetics:"Profumeria",massage:"Massaggi",tattoo:"Tatuaggi",butcher:"Macelleria",greengrocer:"Frutta e verdura",wine:"Enoteca",alcohol:"Enoteca",beverages:"Bevande",clothes:"Abbigliamento",shoes:"Calzature",boutique:"Boutique",jewelry:"Gioielleria",optician:"Ottica",florist:"Fioraio",books:"Libreria",gift:"Regali",toys:"Giocattoli",hardware:"Ferramenta",doityourself:"Fai da te",tobacco:"Tabaccheria",newsagent:"Edicola",convenience:"Alimentari",supermarket:"Supermercato",pet:"Animali",bicycle:"Biciclette",car_repair:"Officina",pharmacy:"Farmacia",hotel:"Hotel",guest_house:"B&B",bed_and_breakfast:"B&B",dentist:"Dentista",fitness_centre:"Palestra",sports:"Sport",furniture:"Arredamento",electronics:"Elettronica",mobile_phone:"Telefonia",laundry:"Lavanderia",dry_cleaning:"Lavanderia",photo:"Fotografia",stationery:"Cartoleria",coffee:"Caff\xE8",tea:"T\xE8",chocolate:"Cioccolateria",pasta:"Pastificio",seafood:"Pescheria",cheese:"Formaggi",farm:"Azienda agricola"},f_=["restaurant","food_court","deli","pasta"],p_=["bakery","pastry","confectionery","cafe","bar","coffee"],m_=["hairdresser","beauty","nail_salon"],g_=/(^|;|_)(italian|regional|pizza|pasta|piedmontese|tuscan|sicilian|neapolitan|emilian|ligurian|venetian|roman|sardinian|apulian|lombard|trattoria|osteria|local)($|;|_)/;function Wc(i,t){let e=t&&t.cuisine||"";return f_.includes(i)?!e||g_.test(e)?"food":"other":p_.includes(i)?"bake":m_.includes(i)?i==="hairdresser"&&/barber|male/.test(t&&t.hairdresser||"")?"other":"hair":"other"}function Xc(i,t){let e=t&&t.cuisine||"";return/pizza/.test(e)&&(i==="restaurant"||i==="fast_food")?"Pizzeria":i==="hairdresser"&&t&&/barber|male/.test(t.hairdresser||"")?"Barbiere":d_[i]||"Negozio"}function xn(i){return String(i||"").replace(/\s+/g," ").trim()}async function td(i,t){let e=new URLSearchParams({q:xn(i).slice(0,80),limit:"10",bbox:h_}),n=l_+"?"+e.toString()+u_.map(c=>"&osm_tag="+c).join(""),s=await fetch(n,{signal:t});if(!s.ok)throw new Error("search "+s.status);let r=await s.json(),a=new Set,o=[];for(let c of r.features||[]){let l=c.properties||{};if(!l.name||!l.osm_id||!l.osm_type)continue;let h=l.osm_type+l.osm_id;if(a.has(h))continue;a.add(h);let d=c.geometry&&c.geometry.coordinates||[];if(o.push({id:h,name:xn(l.name).slice(0,60),value:l.osm_value||"",key:l.osm_key||"",street:xn(l.street),num:xn(l.housenumber),city:xn(l.city||l.town||l.village||l.county),cat:Xc(l.osm_value),kind:Wc(l.osm_value),lon:d[0],lat:d[1]}),o.length>=5)break}return o}async function ed(i,t){let e=new URLSearchParams({osm_ids:i,format:"jsonv2",extratags:"1",addressdetails:"1","accept-language":"it"}),n=await fetch(c_+"?"+e.toString(),{signal:t});if(!n.ok)throw new Error("details "+n.status);let s=await n.json(),r=s&&s[0];if(!r)return null;let a=r.extratags||{},o=r.address||{};return{hours:xn(a.opening_hours),cuisine:xn(a.cuisine),hairdresser:xn(a.hairdresser),web:xn(a.website||a["contact:website"]).slice(0,120),street:xn(o.road),num:xn(o.house_number),city:xn(o.city||o.town||o.village||o.municipality)}}var ol=["Mo","Tu","We","Th","Fr","Sa","Su"],Qr=["lun","mar","mer","gio","ven","sab","dom"],Qu=i=>{let t=/^(\d{1,2}):(\d{2})$/.exec(i);if(!t)return NaN;let e=+t[1],n=+t[2];return e>24||n>59?NaN:e*60+n};function qc(i){let t=xn(i);if(!t)return null;if(t==="24/7")return ol.map(()=>[[0,1440]]);let e=ol.map(()=>[]);for(let n of t.split(";")){if(n=n.trim(),!n||/^PH\b/.test(n))continue;let s=/^((?:(?:Mo|Tu|We|Th|Fr|Sa|Su)(?:-(?:Mo|Tu|We|Th|Fr|Sa|Su))?)(?:\s*,\s*(?:(?:Mo|Tu|We|Th|Fr|Sa|Su)(?:-(?:Mo|Tu|We|Th|Fr|Sa|Su))?|PH))*)?\s*(.*)$/.exec(n);if(!s)return null;let r=s[1],a=s[2].trim(),o=[];if(!r)o=[0,1,2,3,4,5,6];else for(let l of r.split(",").map(h=>h.trim()).filter(h=>h&&h!=="PH")){let[h,d]=l.split("-"),u=ol.indexOf(h),p=d?ol.indexOf(d):u;if(u<0||p<0)return null;for(let g=u;o.push(g),g!==p;g=(g+1)%7);}let c=[];if(/^(off|closed)$/i.test(a))c=[];else{for(let l of a.split(",").map(h=>h.trim()).filter(Boolean)){let h=/^(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})$/.exec(l);if(!h)return null;let d=Qu(h[1]),u=Qu(h[2]);if(isNaN(d)||isNaN(u))return null;c.push([d,u])}if(!c.length)return null}o.forEach(l=>{e[l]=c})}return e.some(n=>n.length)?e:null}function __(i){try{let t=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Rome",weekday:"short",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}),e={};return t.formatToParts(i||new Date).forEach(s=>{e[s.type]=s.value}),{d:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].indexOf(e.weekday),m:+e.hour*60+ +e.minute}}catch{let e=i||new Date;return{d:(e.getDay()+6)%7,m:e.getHours()*60+e.getMinutes()}}}var Gs=i=>i===1440?"24:00":(i=(i%1440+1440)%1440,String(Math.floor(i/60)).padStart(2,"0")+":"+String(i%60).padStart(2,"0")),nd=i=>i.every(t=>t.length===1&&t[0][0]===0&&t[0][1]===1440),x_=["luned\xEC","marted\xEC","mercoled\xEC","gioved\xEC","venerd\xEC","sabato","domenica"];function id(i,t){if(!i)return null;if(nd(i))return{open:!0,until:"",next:"",day:""};let{d:e,m:n}=__(t),s=(e+6)%7;for(let[a,o]of i[e])if(o>a?n>=a&&n<o:n>=a)return{open:!0,until:o===1440?"":Gs(o),next:"",day:""};for(let[a,o]of i[s])if(o<=a&&n<o)return{open:!0,until:Gs(o),next:"",day:""};let r=i[e].map(a=>a[0]).filter(a=>a>n).sort((a,o)=>a-o)[0];if(r!==void 0)return{open:!1,until:"",next:Gs(r),day:""};for(let a=1;a<=7;a++){let o=(e+a)%7,c=i[o].map(l=>l[0]).sort((l,h)=>l-h)[0];if(c!==void 0)return{open:!1,until:"",next:Gs(c),day:a===1?"domani":x_[o]}}return{open:!1,until:"",next:"",day:""}}function Yc(i){return i?i.open?i.until?"Aperto ora, fino alle "+i.until:"Aperto ora":i.next?"Chiuso ora, apre "+(i.day?i.day+" ":"")+"alle "+i.next:"Chiuso ora":""}function ll(i){if(!i)return"";if(nd(i))return"sempre aperto";let t=s=>i[s].map(r=>Gs(r[0])+"-"+Gs(r[1])).join(", "),e=new Map;for(let s=0;s<7;s++){if(!i[s].length)continue;let r=t(s);e.has(r)||e.set(r,[]),e.get(r).push(s)}let n=s=>{let r=[];return s.forEach(a=>{let o=r[r.length-1];o&&o[1]===a-1?o[1]=a:r.push([a,a])}),r.map(a=>a[0]===a[1]?Qr[a[0]]:a[1]===a[0]+1?Qr[a[0]]+", "+Qr[a[1]]:Qr[a[0]]+"-"+Qr[a[1]]).join(", ")};return Array.from(e.entries()).sort((s,r)=>r[1].length-s[1].length).slice(0,2).sort((s,r)=>s[1][0]-r[1][0]).map(([s,r])=>n(r)+" "+s).join(" \xB7 ")}window.mkStudio=!0;var he=window,Se=document,Zi=Se.documentElement,ae=(i,t)=>(t||Se).querySelector(i),sn=(i,t)=>Array.from((t||Se).querySelectorAll(i)),be=he.gsap,Ge=he.ScrollTrigger,Ws=he.SplitText,ul=!!(he.matchMedia&&he.matchMedia("(prefers-reduced-motion: reduce)").matches),Kn=!!(he.matchMedia&&he.matchMedia("(hover: hover) and (pointer: fine)").matches),ve=!!(be&&Ge)&&Zi.classList.contains("motion")&&!ul;ve||Zi.classList.remove("motion");var tn=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),xe=(i,t,e)=>i+(t-i)*e,Fe=(i,t,e)=>tn((i-t)/(e-t)),jn=i=>i>=1?1:1-Math.pow(2,-10*i),Di=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,ta=i=>1+2.7*Math.pow(i-1,3)+1.7*Math.pow(i-1,2);function Zc(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var $c={food:"Ristorante",hair:"Parrucchiere",bake:"Forno",other:"Negozio"},Jc={name:"Trattoria da Ines",kind:"food",cat:"Trattoria",city:"",addr:"",hours:"Tu-Su 12:00-15:00, 19:00-23:00",web:"",osm:"",src:"demo"},En={a:ve?0:1,v:ve?1:0},Kc={landed:null};L_();N_();D_();E_();var Li=R_(),di=P_(Li),cl=I_(Li),Hs=C_(),zn=null;ve&&(be.registerPlugin(Ge),Ws&&be.registerPlugin(Ws),"scrollRestoration"in history&&(history.scrollRestoration="manual"),Kn&&he.Lenis&&(zn=new he.Lenis({duration:1.15,smoothWheel:!0}),zn.on("scroll",Ge.update),be.ticker.add(i=>zn.raf(i*1e3)),be.ticker.lagSmoothing(0),Zi.classList.add("lenis")));U_();var jc=ve?M_():null;he.mkHero=jc;var y_=ae("#gl"),Je=null;try{Je=new el({canvas:y_,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{Je=null}Je?(Zi.classList.add("gl"),v_()):(Zi.classList.add("no-gl"),En.v=0,En.a=1,ve?(sd(),Ge.create({trigger:".steps-track",start:"top 72%",end:"bottom 55%",onUpdate:i=>Hs.set(i.progress),onRefresh:()=>Hs.measure()}),Ge.create({trigger:"#sito",start:"top 85%",end:"top 10%",onUpdate:i=>di.pose(i.progress*.6),onRefresh:i=>di.pose(i.progress*.6)})):di.pose(.6));if(jc){let i=0,t=0,e=!1,n=()=>{e||(e=!0,jc.play())},s=r=>{e||(i=t&&r-t<50?i+1:0,t=r,i>=2?n():requestAnimationFrame(s))};requestAnimationFrame(s),setTimeout(n,700)}function v_(){Je.setClearColor(0,0),Je.outputColorSpace=De,Je.toneMapping=Br,Je.toneMappingExposure=1;let i=Math.min(he.devicePixelRatio||1,Kn?2:1.75);Je.setPixelRatio(i);let t=new ki,e=new zs(Je);t.environment=e.fromScene(new rl,.04).texture,e.dispose();let n=new Rs(16777215,1.5);n.position.set(-6,9,12),t.add(n);let s=new Rs(14674175,.6);s.position.set(8,-3,6),t.add(s),t.add(new Fr(16777215,.22));let r=30,a=60,o=new He(r,1,1,400);o.position.set(0,0,a);let c=1,l=1,h=1,d="";function u(){c=he.innerWidth,l=he.innerHeight,Je.setSize(c,l,!1),d="",o.aspect=c/l,o.updateProjectionMatrix(),h=2*a*Math.tan(r*Math.PI/360)/l}u(),he.addEventListener("resize",u);let p=()=>new W,g=(Q,K,ct)=>(ct||p()).set((Q-c/2)*h,-(K-l/2)*h,0),M={yellow:new Nn({color:16631808,roughness:.26,metalness:0,clearcoat:1,clearcoatRoughness:.06}),navy:new Nn({color:1845564,roughness:.42,clearcoat:.7,clearcoatRoughness:.2,envMapIntensity:.55}),navyMatte:new Nn({color:1845564,roughness:.55,specularIntensity:.22,clearcoat:.18,clearcoatRoughness:.35,envMapIntensity:.3}),disc:new Nn({color:1515307,roughness:.72,metalness:0,specularIntensity:.22,envMapIntensity:.08}),white:new Nn({color:16250868,roughness:.5,clearcoat:.35,clearcoatRoughness:.3}),paper:new Nn({color:15133166,roughness:.6,clearcoat:.2}),line:new Dn({color:13225686,roughness:.7}),lineDark:new Dn({color:1845564,roughness:.6}),chip:new Dn({color:15659251,roughness:.65}),green:new Nn({color:2995050,roughness:.3,clearcoat:.8})},m=(Q,K,ct,Ft,Lt=4)=>new sl(Q,K,ct,Lt,Math.min(Ft,Q/2-.001,K/2-.001,ct/2-.001)),f=(Q,K)=>new Pe(Q,K),b=new Cr(1,64,48);function P(Q,K,ct){let Ft=new ci,Lt=-Q/2,St=-K/2;Ft.moveTo(Lt+ct,St),Ft.lineTo(Lt+Q-ct,St),Ft.absarc(Lt+Q-ct,St+ct,ct,-Math.PI/2,0,!1),Ft.lineTo(Lt+Q,St+K-ct),Ft.absarc(Lt+Q-ct,St+K-ct,ct,0,Math.PI/2,!1),Ft.lineTo(Lt+ct,St+K),Ft.absarc(Lt+ct,St+K-ct,ct,Math.PI/2,Math.PI,!1),Ft.lineTo(Lt,St+ct),Ft.absarc(Lt+ct,St+ct,ct,Math.PI,Math.PI*1.5,!1);let le=new Ar(Ft,10),ce=le.attributes.position,S=le.attributes.uv;for(let D=0;D<S.count;D++)S.setXY(D,(ce.getX(D)-Lt)/Q,(ce.getY(D)-St)/K);return le}let x=!0,T=!1,w=!1;function U(Q,K,ct){let Ft=Se.createElement("canvas");Ft.width=Q,Ft.height=K;let Lt=new li(Ft);return Lt.colorSpace=De,Lt.anisotropy=Math.min(8,Je.capabilities.getMaxAnisotropy()),Lt.userData.draw=()=>{let St=Ft.getContext("2d");St.clearRect(0,0,Q,K),ct(St,Q,K),Lt.needsUpdate=!0},Lt.userData.draw(),Lt}let y={clock:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5V12l3 2",phone:"M5.5 3.5h3.2l1.8 4.6-2.3 1.5a11 11 0 0 0 6.2 6.2l1.5-2.3 4.6 1.8v3.2a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2z",chat:"M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.5-4.4a8.4 8.4 0 1 1 15.5-4.5z",camera:"M4 8h3l1.6-2.5h6.8L17 8h3v11H4zM12 9.9a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6z"};function C(Q,K,ct,Ft,Lt,St){he.Path2D&&(Q.save(),Q.translate(ct-Lt/2,Ft-Lt/2),Q.scale(Lt/24,Lt/24),Q.strokeStyle=St,Q.lineWidth=2.1,Q.lineCap="round",Q.lineJoin="round",Q.stroke(new Path2D(y[K])),Q.restore())}function k(Q,K,ct,Ft,Lt){let St=Lt;for(Q.font=ct.replace("$",St);Q.measureText(K).width>Ft&&St>12;)St-=2,Q.font=ct.replace("$",St);return St}let q="img/p/",H={};function ot(Q){return H[Q]||(H[Q]=new Promise(K=>{let ct=new Image;ct.decoding="async",ct.onload=()=>K(ct),ct.onerror=()=>K(null),ct.src=q+Q})),H[Q]}let G=new Vi(new Uint8Array([214,218,224,255]),1,1);G.colorSpace=De,G.needsUpdate=!0,G.userData.keep=!0;let et=()=>new je({map:G,toneMapped:!1});function ut(){let Q=et();return Q.onBeforeCompile=K=>{K.fragmentShader=K.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
float mkL = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
diffuseColor.rgb = mix(vec3(mkL), diffuseColor.rgb, 0.25) * vec3(0.62, 0.6, 0.56) + vec3(0.035, 0.03, 0.02);`)},Q.customProgramCacheKey=()=>"mk-dull",Q}let tt={},F=0;function O(Q,K,ct=1,Ft=.5,Lt=.5,St,le=0){let ce=F;ot(Q).then(S=>{if(!S||ce!==F)return;if(!tt[Q]){let mt=new qe(S);mt.colorSpace=De,mt.anisotropy=4,mt.needsUpdate=!0,tt[Q]=mt}let D=tt[Q].clone(),st=S.naturalWidth/S.naturalHeight,nt=1,X=1;st>K?nt=K/st:X=st/K,nt/=ct,X/=ct,D.repeat.set(nt,X),D.offset.set((1-nt)*Ft,(1-X)*Lt),le&&(D.center.set(.5,.5),D.rotation=le),St.map&&St.map!==D&&!St.map.userData.keep&&St.map.dispose(),St.map=D,St.color.set(16777215),x=!0})}let Y=f(b,M.yellow);Y.renderOrder=2,t.add(Y),Y.visible=!1;let lt=f(new hi(1,1),new je({map:U(256,256,(Q,K,ct)=>C(Q,"phone",K/2,ct/2,132,"#1b1b1b")),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1}));lt.renderOrder=3,lt.visible=!1,t.add(lt);let Ct=!1,vt=[];function Zt(Q,K,ct){let Ft=new We;t.add(Ft);let Lt={el:Q,g:Ft,designH:K,p:0,visible:!1,...ct(Ft)};return vt.push(Lt),Lt}function Xt(Q){let K=Q.el.getBoundingClientRect();if(Q.visible=K.bottom>-l*.3&&K.top<l*1.3&&K.height>0,Q.g.visible=Q.visible,K.height<=0)return;g(K.left+K.width/2,K.top+K.height/2,Q.g.position);let ct=Math.min(K.height,K.width/(Q.aspect||.9))*h/(Q.designH*(c>=960&&Q.fillD||1));Q.g.scale.setScalar(ct)}function Qt(Q,K,ct,Ft,Lt,St){Q.beginPath(),Q.roundRect?Q.roundRect(K,ct,Ft,Lt,St):(Q.moveTo(K+St,ct),Q.arcTo(K+Ft,ct,K+Ft,ct+Lt,St),Q.arcTo(K+Ft,ct+Lt,K,ct+Lt,St),Q.arcTo(K,ct+Lt,K,ct,St),Q.arcTo(K,ct,K+Ft,ct,St),Q.closePath())}let B=(Q,K,ct,Ft,Lt="#ffffff")=>U(Q,K,St=>{St.fillStyle=Lt,Qt(St,0,0,Q,K,ct),St.fill(),Ft(St,Q,K)}),L=(Q,K,ct)=>f(new hi(K,ct),new je({map:Q,transparent:!0,toneMapped:!1})),I=(()=>{let Q=Se.createElement("canvas");Q.width=256,Q.height=256;let K=Q.getContext("2d");K.shadowColor="rgba(6,12,22,1)",K.shadowBlur=34,K.shadowOffsetX=1e3,K.fillStyle="#000",Qt(K,-948,52,152,152,30),K.fill();let ct=new li(Q);return ct.colorSpace=De,ct})(),R=(Q,K,ct=.35)=>{let Ft=f(new hi(Q,K),new je({map:I,transparent:!0,opacity:ct,depthWrite:!1,toneMapped:!1}));return Ft.renderOrder=1,Ft},N=Zt(ae("[data-stage=map]"),12,Q=>{let K=new We;Q.add(K);let ct=new We;K.add(ct);let Ft=R(12.4,9.8,.42);Ft.position.set(.5,-.6,-.5),ct.add(Ft),ct.add(f(m(9.4,6.8,.36,.5,6),M.navyMatte));let Lt=U(1024,740,(ft,Nt,Ot)=>{let Dt=Zc(7);ft.fillStyle="#eef0f3",ft.fillRect(0,0,Nt,Ot),ft.fillStyle="#cfe8c9",ft.beginPath(),ft.ellipse(170,560,190,120,-.3,0,Math.PI*2),ft.fill(),ft.strokeStyle="#a7d0ec",ft.lineWidth=46,ft.lineCap="round",ft.beginPath(),ft.moveTo(-40,120),ft.bezierCurveTo(260,200,420,40,700,150),ft.bezierCurveTo(860,210,960,110,1080,160),ft.stroke(),ft.fillStyle="#e1e5eb";for(let Tt=0;Tt<26;Tt++){let ee=40+Tt%7*140+Dt()*30,se=250+Math.floor(Tt/7)*120+Dt()*20;Qt(ft,ee,se,96+Dt()*20,76+Dt()*14,10),ft.fill()}ft.strokeStyle="#ffffff",ft.lineWidth=22,[[0,230,1024,250],[0,470,1024,440],[300,0,330,740],[640,0,610,740],[0,700,1024,600]].forEach(Tt=>{ft.beginPath(),ft.moveTo(Tt[0],Tt[1]),ft.lineTo(Tt[2],Tt[3]),ft.stroke()}),ft.strokeStyle="#ffd24a",ft.lineWidth=30,ft.beginPath(),ft.moveTo(-20,380),ft.bezierCurveTo(300,330,600,420,1050,330),ft.stroke()}),St=f(P(9,6.4,.36),new je({map:Lt,toneMapped:!1}));St.position.z=.185,ct.add(St);let le=new W(.7,-.2,0),ce=f(new yr(.24,1.9,40),M.navy);ce.rotation.x=-Math.PI/2,ce.geometry.translate(0,-.95,0);let S=new We;S.position.set(le.x,le.y,.19),S.add(ce),ct.add(S);let D=R(2.6,1,.5);D.rotation.z=-.55,D.position.set(le.x+.85,le.y-.55,.2),ct.add(D);let st=[0,1,2].map(()=>{let ft=f(new Es(.62,.74,64),new je({color:16631808,transparent:!0,opacity:0,depthWrite:!1}));return ft.position.set(le.x,le.y,.2),ct.add(ft),ft}),nt=[{ic:"clock",tx:"Orari giusti",at:[-3.1,1.6,2]},{ic:"phone",tx:"Chiama",at:[-2.9,-1.55,1.5]},{ic:"chat",tx:"WhatsApp",at:[3.4,1.9,2.6]},{ic:"camera",tx:"Foto vere",at:[3.3,-1.7,1.9]}].map(ft=>{let Nt=new We,Ot=B(640,240,70,(Tt,ee,se)=>{C(Tt,ft.ic,104,se/2,88,"#1c293c"),Tt.fillStyle="#1c293c",k(Tt,ft.tx,'650 $px "Inter"',ee-200,74),Tt.textBaseline="middle",Tt.fillText(ft.tx,176,se/2+4)});Nt.add(L(Ot,2.9,1.09));let Dt=R(3.9,2.2,.32);return ct.add(Dt),ct.add(Nt),{grp:Nt,at:ft.at,sh:Dt}}),X=new fn,mt=new We,Rt=B(1024,300,64,(ft,Nt,Ot)=>{let Dt=Li.get(),Tt=Dt.src==="typed"||w?null:Li.status();ft.fillStyle="#1c293c",k(ft,Dt.name,'760 $px "Mona Sans"',Nt-80,104),ft.textBaseline="alphabetic",ft.fillText(Dt.name,44,146);let ee=Tt?Tt.open?"Aperto ora":"Chiuso ora":Dt.city,se=Dt.cat+(ee?" \xB7 ":"");if(ft.fillStyle="#56627a",k(ft,se+(ee||""),'560 $px "Inter"',Nt-88,52),ft.fillText(se,44,232),ee){let ge=ft.measureText(se).width;ft.fillStyle=Tt?Tt.open?"#1f9d58":"#c0392b":"#56627a",ft.fillText(ee,44+ge,232)}});mt.add(L(Rt,5,1.46));let bt=R(6.6,2.8,.3);return ct.add(bt),ct.add(mt),{aspect:.95,tilt:K,spin:ct,needleG:S,rings:st,cards:nt,title:mt,titleTex:Rt,PIN:le,pinR:.6,headZ:.19+1.9+.42,pose(ft,Nt){let Ot=jn(Fe(ft,0,.18));K.rotation.set(xe(-1.4,-.84,Ot),0,0),K.position.set(0,xe(-2.5,-.6,Ot),0),K.scale.setScalar(xe(.7,1,Ot)),ct.rotation.z=xe(.35,0,Ot)+Di(Fe(ft,.66,1))*-.32+Math.sin(Nt*.5)*.01,Q.updateWorldMatrix(!0,!0),ct.getWorldQuaternion(X).invert();let Dt=jn(Fe(ft,.24,.34));S.scale.set(1,1,Math.max(Dt,.001)),S.visible=Dt>.002,D.visible=Dt>.002,D.scale.set(Math.max(Dt,.001),1,1),D.position.set(le.x+.85*Dt,le.y-.55*Dt,.2),nt.forEach((se,ge)=>{let _e=ta(Fe(ft,.38+ge*.07,.5+ge*.07)),Le=xe(.2,se.at[2],_e)+Math.sin(Nt*1.1+ge)*.06;se.grp.position.set(se.at[0],se.at[1],Le),se.grp.quaternion.copy(X),se.grp.scale.setScalar(Math.max(_e,.001)*1.22),se.grp.visible=_e>.002,se.sh.position.set(se.at[0]+Le*.3,se.at[1]-Le*.42,.2),se.sh.scale.setScalar(Math.max(_e,.001)*(1+Le*.12)),se.sh.material.opacity=.34*tn(_e)/(1+Le*.25),se.sh.visible=_e>.002});let Tt=ta(Fe(ft,.62,.74)),ee=xe(.2,3.1,Tt);mt.position.set(-.2,3.9,ee),mt.quaternion.copy(X),mt.scale.setScalar(Math.max(Tt,.001)*1.12),mt.visible=Tt>.002,bt.position.set(-.2+ee*.3,3.9-ee*.42,.2),bt.scale.setScalar(Math.max(Tt,.001)),bt.material.opacity=.3*tn(Tt)/(1+ee*.25),bt.visible=Tt>.002}}}),it=Zt(ae("[data-stage=grid]"),11.6,Q=>{let K=new We;Q.add(K);let ct=R(9.2,12.6,.4);ct.position.set(.45,-.7,-.4),K.add(ct);let Ft=B(1024,1460,70,(mt,Rt)=>{let bt=Li.get(),ft=Li.handle();mt.fillStyle="#1b1b1b",k(mt,ft,'700 $px "Inter"',Rt-400,64),mt.textBaseline="alphabetic",mt.fillText(ft,360,150),mt.fillStyle="#1b1b1b",k(mt,bt.name,'600 $px "Inter"',Rt-400,46),mt.fillText(bt.name,360,222),mt.fillStyle="#6b6b6b",k(mt,bt.city?bt.cat+", "+bt.city:bt.cat,'450 $px "Inter"',Rt-400,42),mt.fillText(bt.city?bt.cat+", "+bt.city:bt.cat,360,282)});K.add(L(Ft,6.6,9.4));let Lt=et(),St=f(new xr(.78,64),Lt);St.position.set(-2.3,3.55,.02),K.add(St);let le=f(new Rr(.95,.09,20,80),M.yellow);le.position.set(-2.3,3.55,.06),K.add(le);let ce=1.98,S=.08,D=[],st=Zc(11);for(let mt=0;mt<9;mt++){let Rt=mt%3,bt=Math.floor(mt/3),ft=new We;ft.add(f(m(ce,ce,.1,.08,2),M.white));let Nt=et(),Ot=ut(),Dt=f(P(ce-.02,ce-.02,.08),Nt);Dt.position.z=.052,ft.add(Dt);let Tt=f(P(ce-.02,ce-.02,.08),Ot);Tt.position.z=-.052,Tt.rotation.y=Math.PI,ft.add(Tt),K.add(ft),D.push({grp:ft,front:Nt,back:Ot,at:new W((Rt-1)*(ce+S),1.02-bt*(ce+S),.12),from:new W((st()-.5)*18,(st()-.5)*16,2+st()*7),rot:new Sn((st()-.5)*3,(st()-.5)*5,(st()-.5)*2),delay:st()*.08})}let nt=[0,1,2,5,4,3,6,7,8],X=new W(-2.3+.95*Math.cos(-.8),3.55+.95*Math.sin(-.8),.06+.3);return{aspect:.66,fillD:1.16,card:K,tiles:D,ORDER:nt,avatar:St,avatarM:Lt,avRing:le,headTex:Ft,tileR:.42,flipAt:[],BADGE:X,badgeR:.3,pose(mt,Rt){let bt=jn(Fe(mt,0,.16));K.rotation.set(xe(.35,.06,bt)+Math.sin(Rt*.6)*.012,xe(.9,.22,bt)-Di(Fe(mt,.86,1))*.36,0),K.scale.setScalar(xe(.55,1,bt)),K.position.set(0,xe(-2.5,0,bt),0),D.forEach((Nt,Ot)=>{let Dt=Di(Fe(mt,.05+Nt.delay,.3+Nt.delay));Nt.grp.position.lerpVectors(Nt.from,Nt.at,Dt);let Tt=this.flipAt[Ot]!==void 0?jn(Fe(mt,this.flipAt[Ot],this.flipAt[Ot]+.05)):0;Nt.grp.rotation.set(Nt.rot.x*(1-Dt),Math.PI+Nt.rot.y*(1-Dt)-Math.PI*Tt,Nt.rot.z*(1-Dt))});let ft=ta(Fe(mt,.9,.97));le.scale.setScalar(Math.max(ft,.001)),le.visible=ft>.002}}}),xt=Zt(ae("[data-stage=logo]"),12.4,Q=>{let K=new We;Q.add(K);let ct=5.4,Ft=ct/540,Lt=new ci;Lt.absarc(0,0,ct,0,Math.PI*2,!1);let St=new ws(Lt,{depth:.5,bevelEnabled:!0,bevelThickness:.2,bevelSize:.2,bevelSegments:8,curveSegments:96});St.translate(0,0,-.25);let le=f(St,M.disc);K.add(le);let ce=.25+.2,D=new al().parse('<svg xmlns="http://www.w3.org/2000/svg"><path d="'+"M175.3 713.9H265.1V577.8C265.1 556.2 276.8 542.7 295 542.7C313.7 542.7 325.3 556.2 325.3 577.8V713.9H410.7V577.8C410.7 556.2 422.4 542.7 440.3 542.7C459 542.7 470.9 556.2 470.9 577.8V713.9H560.7V555.3C560.7 504.3 527.9 471.3 480.3 471.3C446.8 471.3 415.4 487.7 403.5 520.7C394.1 487.5 366 471.3 334.8 471.3C303.3 471.3 274.8 487.5 261.5 523.2V476.7H175.3ZM579.4 713.9H669.2V648.1L682.2 631.9L732.5 713.9H834.5L748.3 580.9L831.8 476.7H730.3L670.1 554H669.2V379.2H579.4Z"+'"/></svg>'),st=[];D.paths.forEach(X=>X.toShapes().forEach(mt=>{let Rt=new ws(mt,{depth:26,bevelEnabled:!0,bevelThickness:5,bevelSize:4,bevelSegments:4,curveSegments:16});Rt.translate(-540,-540,0),Rt.scale(Ft,Ft,Ft),Rt.rotateX(Math.PI),Rt.translate(0,0,31*Ft);let bt=f(Rt,M.white);bt.position.z=ce-.05,K.add(bt),st.push(bt)})),st.sort((X,mt)=>(X.geometry.computeBoundingBox(),mt.geometry.computeBoundingBox(),X.geometry.boundingBox.min.x-mt.geometry.boundingBox.min.x));let nt=new W(346*Ft,-(675.9-540)*Ft,ce+38*Ft*.82);return{aspect:.9,grp:K,letters:st,SLOT:nt,slotR:38*Ft*1.08,pose(X,mt,Rt,bt){let ft=jn(Fe(X,0,.42));K.rotation.set(xe(.6,0,ft)+bt*.18+Math.sin(mt*.8)*.02,xe(-Math.PI*1.1,0,ft)+Rt*.32,0),K.scale.setScalar(xe(.6,1,ft)),st.forEach((Nt,Ot)=>{let Dt=ta(Fe(X,.3+Ot*.08,.5+Ot*.08));Nt.position.z=xe(-1.6,ce-.05,Dt),Nt.scale.setScalar(Math.max(xe(.7,1,Dt),.001)),Nt.visible=Dt>.002})}}}),E={food:{tiles:["t-ravioli.webp","D:mono","t-tagliatelle.webp","t-dehors.webp","t-tiramisu.webp","D:hours","D:where","t-gnocchi.webp","t-hero.webp"],avatar:"t-tagliatelle.webp"},hair:{tiles:["s-colore.webp","D:mono","s-liscio.webp","s-ricci.webp","s-piega.webp","D:hours","D:where","s-sposa.webp","s-treccia.webp"],avatar:"s-treccia.webp"},bake:{tiles:["g-croissant.webp","D:mono","g-focaccia.webp","g-pagnotta.webp","g-banco.webp","D:hours","g-impasto.webp","g-grissini.webp","g-farina.webp"],avatar:"g-pagnotta.webp"},other:{tiles:["D:mono","D:word:Novit\xE0","D:hours","D:word:In negozio","D:where","D:word:Chi siamo","D:word:Ti aspettiamo","D:dots","D:word:Grazie"],avatar:"D:mono"}},V={food:{bg:["#8f2a1c","#f2e9dc","#2a1d17"],fg:["#fff6ea","#2a1d17","#f2e9dc"],font:'"Instrument Serif"',w:400,up:!1},hair:{bg:["#171313","#efe8e5","#c9b2a6"],fg:["#f6efec","#171313","#171313"],font:'"Mona Sans"',w:800,up:!0},bake:{bg:["#3b2412","#f7ecd2","#d7a54a"],fg:["#f7ecd2","#3b2412","#3b2412"],font:'"Mona Sans"',w:850,up:!1},other:{bg:["#1e3b33","#f1ede4","#d9a441"],fg:["#f1ede4","#1e3b33","#1e3b33"],font:'"Mona Sans"',w:780,up:!1}};function z(Q,K,ct){let Ft=V[ct.kind]||V.other,Lt=Se.createElement("canvas");Lt.width=512,Lt.height=512;let St=Lt.getContext("2d"),le=Q==="mono"?0:Q==="hours"?1:Q==="where"?2:K%3;St.fillStyle=Ft.bg[le],St.fillRect(0,0,512,512),St.fillStyle=Ft.fg[le],St.textBaseline="alphabetic";let ce=X=>Ft.w+" "+X+"px "+Ft.font,S=X=>Ft.up?X.toUpperCase():X,D=qc(ct.hours),st=[ct.addr,ct.city].filter(Boolean);if(Q==="hours"&&!(D&&ct.src!=="typed")&&(Q="word:Ti aspettiamo"),Q==="where"&&!(ct.src==="osm"&&st.length)&&(Q="word:Vieni a trovarci"),Q==="mono"){let X=ct.name.trim();for(let Rt=0;Rt<4;Rt++)X=X.replace(/^(?:(?:il|lo|la|i|gli|le|un|una|da|dal|dalla|dai|di|del|della|dei|al|alla|ai|bar|caff[eè]|forno|trattoria|osteria|ristorante|pizzeria|panificio|pasticceria|gelateria|enoteca|macelleria|salone|parrucchier[ei]|barbiere|negozio)\s+|l['’]\s*)/i,"");let mt=(X[0]||ct.name[0]||"m").toUpperCase();St.textAlign="center",St.font=ce(330),St.fillText(mt,256,368),St.globalAlpha=.85,k(St,S(ct.name),ce("$"),420,34),St.fillText(S(ct.name),256,462),St.globalAlpha=1}else if(Q==="hours"){St.textAlign="left",St.font=ce(76),St.fillText(S("Orari"),44,128);let X=[];ll(D).split(" \xB7 ").forEach(Rt=>{let bt=/^(\S+(?:, \S+)*) (.*)$/.exec(Rt);bt&&(X.push([bt[1],!0]),bt[2].split(", ").forEach(ft=>X.push([ft,!1])))});let mt=214;X.slice(0,6).forEach(([Rt,bt])=>{St.font=(bt?"650 ":"500 ")+'34px "Inter"',St.fillText(Rt,44,mt),mt+=bt?48:44})}else if(Q==="where"){St.textAlign="left",St.font=ce(64),St.fillText(S("Dove siamo"),44,128),St.font='600 36px "Inter"';let X=220;st.forEach(mt=>{k(St,mt,'600 $px "Inter"',424,36),St.fillText(mt,44,X),X+=52})}else if(Q==="dots")for(let X=0;X<6;X++)for(let mt=0;mt<6;mt++)St.beginPath(),St.arc(56+mt*80,56+X*80,X===2&&mt===3?26:9,0,Math.PI*2),St.fillStyle=X===2&&mt===3?"#fdc800":Ft.fg[le],St.fill();else{let X=S(Q.replace(/^word:/,""));St.textAlign="center";let mt=k(St,X,ce("$"),430,92);St.fillText(X,256,256+mt*.34)}let nt=new li(Lt);return nt.colorSpace=De,nt.anisotropy=4,nt}function $(Q,K){Q.map&&Q.map!==K&&!Q.map.userData.keep&&Q.map.dispose(),Q.map=K,Q.color.set(16777215),x=!0}function rt(){F++;let Q=Li.get(),K=E[Q.kind]||E.other;it.tiles.forEach((ct,Ft)=>{let Lt=K.tiles[Ft];if(Lt.startsWith("D:")){let le=z(Lt.slice(2),Ft,Q);$(ct.front,le),$(ct.back,le);return}O(Lt,1,1,.5,.5,ct.front);let St=Zc(31+Ft*7);O(Lt,1,1.3,.5+(St()-.5)*.5,.5+(St()-.5)*.5,ct.back,(St()-.5)*.2)}),K.avatar.startsWith("D:")?$(it.avatarM,z("mono",0,Q)):O(K.avatar,1,1.2,.5,.5,it.avatarM)}function ht(){[N.titleTex,it.headTex].forEach(Q=>Q.userData.draw()),x=!0}Li.on(()=>{ht(),rt()}),rt();let yt=Se.fonts&&Se.fonts.load?Promise.all([Se.fonts.load('760 64px "Mona Sans"'),Se.fonts.load('650 64px "Inter"'),Se.fonts.load('400 64px "Instrument Serif"')]).catch(()=>{}):Promise.resolve();yt.then(()=>{Mt(),rt(),x=!0});function Mt(){t.traverse(Q=>{let K=Q.material;K&&K.map&&K.map.userData&&K.map.userData.draw&&K.map.userData.draw()})}let j=p(),v=p(),Bt={};sn(".dot[data-dot]").forEach(Q=>{Bt[Q.getAttribute("data-dot")]=Q});let qt=Q=>K=>{let ct=Q.getBoundingClientRect();return g(ct.left+ct.width/2,ct.top+ct.height/2,K.p),K.r=ct.width/2*h,K},A=(Q,K,ct)=>Ft=>{Q.updateWorldMatrix(!0,!1),Ft.p.copy(K).applyMatrix4(Q.matrixWorld);let Lt=Q.getWorldScale(v).x;return Ft.r=ct*Lt,Ft},_=[],Z=[],at=[],dt=30;function Ut(Q){_.length=0;let K=(Ot,Dt,Tt)=>_.push(Object.assign({y:Ot,at:Dt},Tt||{})),ct=Bt.hero,Ft=Ot=>{let Dt=cl.anchor();return Dt?(g(Dt.x,Dt.y,Ot.p),Ot.r=Dt.r*h,Ot):qt(ct)(Ot)},Lt=ae(".hero");K(0,Ft),K(Math.max(l*.16,(Lt?Lt.offsetHeight:l)-l*.55),Ft);let St=Q.read;if(St&&at.length){let Ot=St.end-St.start,Dt=at.length;at.forEach((Tt,ee)=>{K(St.start+Ot*(.04+ee/(Dt-1)*.8),se=>{let ge=Tt.getBoundingClientRect();return g(ge.left+ge.width/2,ge.top+dt*.16,se.p),se.r=dt*.21*h,se.p.y+=se.r,se},{hop:dt*.34*h,word:ee})}),K(St.end,_[_.length-1].at)}let le=Q.site,ce=le.end-le.start,S=di.fab;if(S){let Ot=Dt=>{let Tt=S.getBoundingClientRect();return g(Tt.left+Tt.width/2,Tt.top+Tt.height/2,Dt.p),Dt.r=Tt.width/2*h,Dt};K(le.start+ce*.56,Ot,{land:"site"}),Z[0]=_[_.length-1],K(le.start+ce*.97,Ot),Z[1]=_[_.length-1]}let D=Q.map,st=D.end-D.start,nt=new W(N.PIN.x,N.PIN.y,6),X=new W(N.PIN.x,N.PIN.y,.19+N.pinR*.92),mt=new W(N.PIN.x,N.PIN.y,N.headZ);K(D.start+st*.12,A(N.spin,nt,N.pinR)),K(D.start+st*.24,A(N.spin,X,N.pinR),{land:"map",fall:!0}),K(D.start+st*.34,A(N.spin,mt,N.pinR)),K(D.start+st*.95,A(N.spin,mt,N.pinR));let Rt=Q.grid,bt=Rt.end-Rt.start;it.ORDER.forEach((Ot,Dt)=>{let Tt=.36+Dt*.06;it.flipAt[Ot]=Tt-.01;let ee=it.tiles[Ot];K(Rt.start+bt*Tt,A(it.card,new W(ee.at.x,ee.at.y,ee.at.z+.06+it.tileR),it.tileR),{hop:1.3,land:"tile"})}),K(Rt.start+bt*.9,A(it.card,it.BADGE,it.badgeR),{hop:2}),K(Rt.start+bt*.97,A(it.card,it.BADGE,it.badgeR));let ft=Q.how;if(ft&&Hs.ok){let Ot=Dt=>Tt=>{let ee=Hs.screen(Dt);return g(ee.x,ee.y,Tt.p),Tt.r=ee.r*h,Tt};K(ft.start,Ot(0)),K(ft.end,Ot(1),{track:(Dt,Tt)=>Ot(Dt)(Tt)})}["prezzi","esempi"].forEach(Ot=>{let Dt=Q[Ot];Dt&&Bt[Ot]&&(K(Dt.start,qt(Bt[Ot])),K(Dt.end,qt(Bt[Ot])))});let Nt=Q.sign;K(Nt.start+(Nt.end-Nt.start)*.62,A(xt.grp,xt.SLOT,xt.slotR),{land:"logo",hop:6}),K(Nt.end+l*4,A(xt.grp,xt.SLOT,xt.slotR)),_.sort((Ot,Dt)=>Ot.y-Dt.y)}let It={p:p(),r:1},pt={p:p(),r:1},gt=p(),zt=-1;function Jt(Q,K){if(!_.length)return!1;if(Q<=_[0].y)return _[0].at(It),K.p.copy(It.p),K.r=It.r,!0;let ct=0;for(;ct<_.length-1&&_[ct+1].y<=Q;)ct++;if(ct>=_.length-1)return _[_.length-1].at(It),K.p.copy(It.p),K.r=It.r,K.i=ct,!0;let Ft=_[ct],Lt=_[ct+1],St=tn((Q-Ft.y)/Math.max(1,Lt.y-Ft.y));if(K.i=ct,K.t=St,Lt.track)return Lt.track(St,K),!0;if(Ft.at(It),Lt.at(pt),Ft.at===Lt.at)return K.p.copy(It.p),K.r=It.r,!0;let le=It.p.distanceTo(pt.p),ce=Lt.hop?tn((St-.3)/.7):St,S=Lt.fall?St*St:Lt.hop?ce:Di(St);K.p.lerpVectors(It.p,pt.p,S),K.r=xe(It.r,pt.r,Di(ce));let D=Lt.fall?0:Lt.hop?Lt.hop*4*ce*(1-ce):Math.min(le*.32,9)*Math.sin(Math.PI*St);return K.p.y+=D,K.p.z+=Lt.hop||Lt.fall?0:Math.min(le*.25,8)*Math.sin(Math.PI*St),!0}let At={};if(ve){let Q=ct=>()=>"+="+Math.round(he.innerHeight*(he.innerWidth<700?Math.min(ct*.8,1.25):ct)),K=ae(".read");at=A_(ae(".read-p")),At.read=Ge.create({trigger:K,start:"top top",end:Q(1.15),pin:!0,anticipatePin:1}),At.site=Ge.create({trigger:"#sito",start:"top top",end:Q(1.5),pin:!0,anticipatePin:1}),At.map=Ge.create({trigger:"#google",start:"top top",end:Q(1.4),pin:!0,anticipatePin:1}),At.grid=Ge.create({trigger:"#instagram",start:"top top",end:Q(1.8),pin:!0,anticipatePin:1}),At.how=Ge.create({trigger:".steps-track",start:"top 72%",end:"bottom 55%"}),At.prezzi=Ge.create({trigger:"#prezzi",start:"top 55%",end:"bottom 75%"}),At.esempi=Ge.create({trigger:"#esempi",start:"top 55%",end:"bottom 60%"}),At.sign=Ge.create({trigger:"#contatti",start:"top 92%",end:"top 12%"}),Ge.addEventListener("refresh",()=>{dt=parseFloat(getComputedStyle(ae(".read-p")).fontSize)||30,Hs.measure(),Ut(At)}),he.mkDebug={sts:At,keys:_,dot:Y,k:()=>h,st:()=>({ys:oe,i:Pt.i,t:Pt.t,lenis:!!zn,fine:Kn})},sd(),Ge.refresh(),yt.then(()=>Ge.refresh())}else{vt.forEach(K=>{K.p=1});let Q=(K,ct,Ft)=>{let Lt=f(b,M.yellow);Lt.position.copy(ct),Lt.scale.setScalar(Ft),K.add(Lt)};di.pose(.6),Q(N.spin,new W(N.PIN.x,N.PIN.y,N.headZ),N.pinR),Q(xt.grp,xt.SLOT,xt.slotR),Q(it.card,it.BADGE,it.badgeR),it.ORDER.forEach(K=>{it.flipAt[K]=0}),kt()}function kt(){_.length=0,_.push({y:0,at:qt(Bt.hero)})}let Wt={x:0,y:0,sx:0,sy:0,cx:-1e4,cy:-1e4};Kn&&he.addEventListener("pointermove",Q=>{Wt.x=Q.clientX/c*2-1,Wt.y=Q.clientY/l*2-1,Wt.cx=Q.clientX,Wt.cy=Q.clientY},{passive:!0});let jt={v:0,h:1},ie={x:0,y:0},J=0,Vt=()=>{J=0};["pointerdown","pointermove","keydown","wheel","touchstart"].forEach(Q=>he.addEventListener(Q,Vt,{passive:!0}));let _t=Q=>{jt.h=Q,be.fromTo(jt,{v:0},{v:1,duration:.55+.3*Q,ease:"none",overwrite:!0,onComplete:()=>{jt.v=0,Ki()}})},Gt=()=>[Y.position.x/h+c/2,l/2-Y.position.y/h];ve&&he.addEventListener("pointerdown",Q=>{if(En.v>0||jt.v>0||cl.anchor())return;let[K,ct]=Gt(),Ft=Math.max(30,Math.abs(Y.scale.y)/h*1.8);Math.hypot(Q.clientX-K,Q.clientY-ct)<Ft&&_t(1)},{passive:!0});let Pt={p:p(),r:1,i:0,t:0},Et=p(),Kt=p(),$t=new W(0,1,0),Te=new fn,oe=he.pageYOffset,en=performance.now(),ln=0,Ji=0,$i={},ea={site:()=>{let Q=di.fab;Q&&(Q.classList.remove("ping"),Q.offsetWidth,Q.classList.add("ping"))},map:()=>N.rings.forEach((Q,K)=>Xs(Q,K*.16)),tile:()=>{},logo:()=>{}};function Xs(Q,K=0){be&&(be.fromTo(Q.scale,{x:1,y:1},{x:4.2,y:4.2,duration:1.1,delay:K,ease:"expo.out",overwrite:!0}),be.fromTo(Q.material,{opacity:.9},{opacity:0,duration:1.1,delay:K,ease:"power2.out",overwrite:!0}))}function qs(){let Q=performance.now(),K=Math.min(.05,(Q-en)/1e3);en=Q,ln+=K;let ct=he.pageYOffset;oe=zn?ct:xe(oe,ct,1-Math.exp(-K*16)),Math.abs(oe-ct)<.5&&(oe=ct),Wt.sx=xe(Wt.sx,Wt.x,1-Math.exp(-K*5)),Wt.sy=xe(Wt.sy,Wt.y,1-Math.exp(-K*5));for(let Lt of vt)if(Xt(Lt),!!Lt.visible){if(ve){let St=Lt===N?At.map:Lt===it?At.grid:At.sign;Lt.p=St?tn((oe-St.start)/Math.max(1,St.end-St.start)):1}Lt.pose(Lt.p,ln,Wt.sx,Wt.sy)}if(ve&&At.how&&Hs.set((oe-At.how.start)/Math.max(1,At.how.end-At.how.start)),ve&&At.site&&oe>At.site.start-l*1.2&&oe<At.site.end+l&&di.pose(tn((oe-At.site.start)/Math.max(1,At.site.end-At.site.start)),Kn?Wt.sx:0,Kn?Wt.sy:0),Jt(ve?oe:0,Pt)){if(En.v>0||En.a<1){let D=1-En.v,st=Math.min(c,l);g(c*.5,l*(c<700?.37:.42),gt);let nt=st*(c<700?.27:.19)*h;gt.lerp(Pt.p,D),gt.y+=Math.sin(Math.PI*D)*st*.2*h,gt.z+=Math.sin(Math.PI*D)*6,Pt.p.copy(gt),Pt.r=nt*Math.pow(Pt.r/nt,D)*Math.max(En.a,.001)}if(ve&&En.v===0&&oe<4&&jt.v===0&&!cl.anchor()?(J+=K,J>6&&(J=0,_t(.45))):(oe>=4||cl.anchor())&&(J=0),jt.v>0){let D=jt.v;Pt.p.y+=4*D*(1-D)*Math.max(Pt.r*9,46*h)*jt.h}if(Kn&&ve){let D=Pt.p.x/h+c/2,st=l/2-Pt.p.y/h,nt=Wt.cx-D,X=Wt.cy-st,mt=Math.hypot(nt,X),Rt=mt<150?Math.pow(1-mt/150,2)*.3:0;ie.x=xe(ie.x,nt*Rt,1-Math.exp(-K*10)),ie.y=xe(ie.y,X*Rt,1-Math.exp(-K*10)),Pt.p.x+=ie.x*h,Pt.p.y-=ie.y*h}Y.position.copy(Pt.p),Kt.subVectors(Pt.p,Et).divideScalar(Math.max(K,.001)),Et.copy(Pt.p);let Lt=Kt.length()/Math.max(Pt.r,.001),St=ve?tn(Lt*.012,0,.42):0;Ji=ve?xe(Ji,St,1-Math.exp(-K*12)):0,Ji>.01&&Kt.lengthSq()>1e-6&&(Te.setFromUnitVectors($t,Kt.clone().normalize()),Y.quaternion.copy(Te));let le=1+Ji,ce=1/Math.sqrt(le);if(Y.scale.set(Pt.r*ce*(1+Ni.v*.28),Pt.r*le*(1-Ni.v*.3),Pt.r*ce*(1+Ni.v*.28)),Y.visible=ve||T,ve&&_[Pt.i+1]&&Pt.t>.985){let D=_[Pt.i+1];D.land&&$i[Pt.i+1]!==!0&&($i[Pt.i+1]=!0,Ki(),(ea[D.land]||(()=>{}))())}if(ve)for(let D in $i)_[D]&&oe<_[D].y-2&&delete $i[D];ve&&at.length&&Ys();let S=0;if(ve&&Z[0]&&Z[1]&&(S=tn((oe-Z[0].y)/26)*(1-tn((oe-Z[1].y)/26))),lt.visible=S>.01,lt.visible&&(lt.position.copy(Y.position),lt.position.z+=Pt.r*1.05,lt.scale.setScalar(Pt.r*1.7),lt.material.opacity=S),di.fab){let D=S>.5;D!==Ct&&(Ct=D,di.fab.classList.toggle("is-landed",D))}}if(ve){let Lt=!0;for(let St of vt)if(St.visible){Lt=!1;break}if(Lt){let St=Y.position,le=Y.scale,ce=Y.quaternion,S=[St.x,St.y,St.z,le.x,le.y,le.z,ce.x,ce.y,ce.z,ce.w,Y.visible?1:0,An.visible?An.material.opacity:-1,lt.visible?lt.material.opacity:-1].map(D=>Math.round(D*1e4)).join();if(S===d)return;d=S}else d=""}Je.render(t,o)}let Ni={v:0};function Ki(){be&&be.fromTo(Ni,{v:1},{v:0,duration:.7,ease:"elastic.out(1, 0.35)",overwrite:!0})}let kn=-2;function Ys(){if(!At.read)return;let K=-1;for(let ct=0;ct<_.length;ct++)_[ct].word!==void 0&&_[ct].y<=oe+1&&(K=_[ct].word);K!==kn&&(kn=K,at.forEach((ct,Ft)=>{ct.classList.toggle("on",Ft<=K),ct.classList.toggle("at",Ft===K)}))}let Zs=-1;if(ve)be.ticker.add(qs);else{let Q=()=>{let K=he.pageYOffset;(x||K!==Zs)&&(Zs=K,x=!1,qs()),requestAnimationFrame(Q)};requestAnimationFrame(Q),he.addEventListener("resize",()=>{x=!0})}Se.addEventListener("visibilitychange",()=>{en=performance.now(),d=""}),Je.domElement.addEventListener("webglcontextrestored",()=>{d=""});let An=f(new Es(1,1.14,64),new je({color:16631808,transparent:!0,opacity:0,depthWrite:!1}));An.visible=!1,t.add(An);let Qn={s:1,o:0};Kc.landed=()=>{Ki(),be.fromTo(Qn,{s:1,o:.95},{s:5,o:0,duration:1.2,ease:"expo.out",onUpdate:()=>{An.position.copy(Y.position);let Q=Pt.r*Qn.s;An.scale.set(Q,Q,Q),An.material.opacity=Qn.o,An.visible=Qn.o>.01}})},qs(),ve?be.delayedCall(2.9,Js):setTimeout(Js,600);function Js(){let Q=new Set;t.traverse(Ft=>{let Lt=Ft.material;Lt&&Lt.map&&Q.add(Lt.map)});let K=Array.from(Q),ct=()=>{let Ft=K.shift();Ft&&(Ft.image&&Je.initTexture(Ft),setTimeout(ct,30))};Je.extensions.has("KHR_parallel_shader_compile")?Je.compileAsync(t,o).then(ct,ct):(Je.compile(t,o),setTimeout(ct,200))}he.mkPoster=Q=>{let K={map:N,grid:it,logo:xt}[Q];return K?(vt.forEach(ct=>{ct.el=ct===K?ct.el:Se.createElement("div")}),_.length=0,_.push({y:0,at:ct=>(ct.p.set(0,0,-1e3),ct.r=.001,ct)}),T=!1,x=!0,w=!0,ht(),!!K):!1}}function sd(){b_(),T_(),w_()}function M_(){let i=ae(".hero-h"),t=be.timeline({paused:!0}),e=performance.now()>1500;if(i&&Ws&&!e){let n=Ws.create(sn(".hw",i),{type:"chars",charsClass:"hc"});be.set(n.chars,{fontStretch:"75%",fontWeight:300,yPercent:46,opacity:0}),be.set(".nav",{y:-18,opacity:0}),be.set(".hero-foot",{y:26,opacity:0}),t.eventCallback("onStart",()=>be.ticker.lagSmoothing(0)),t.eventCallback("onComplete",()=>{zn||be.ticker.lagSmoothing(500,33)}),t.to(n.chars,{fontStretch:"125%",fontWeight:860,yPercent:0,opacity:1,duration:1.05,ease:"expo.out",stagger:.024,onComplete(){be.set(n.chars,{clearProps:"fontStretch,fontWeight"}),Kn&&S_(n.chars)}},.12).to(".nav",{y:0,opacity:1,duration:.8,ease:"expo.out"},.75).to(".hero-foot",{y:0,opacity:1,duration:.9,ease:"expo.out"},.9).to(En,{a:1,duration:.6,ease:"back.out(1.9)"},0).to(En,{v:0,duration:1,ease:"power3.inOut",onComplete:()=>Kc.landed&&Kc.landed()},.6)}else En.v=0,En.a=1;return Zi.classList.add("go"),i&&be.to(i,{fontStretch:"88%",yPercent:-14,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom 30%",scrub:!0}}),t}function S_(i){let t=0,e=-1e4,n=-1e4,s=()=>i.map(o=>{let c=o.getBoundingClientRect();return[c.left+c.width/2,c.top+c.height/2]}),r=null;he.addEventListener("scroll",()=>{r=null},{passive:!0}),he.addEventListener("pointermove",o=>{e=o.clientX,n=o.clientY,t||(t=requestAnimationFrame(a))},{passive:!0});function a(){t=0,!(he.pageYOffset>he.innerHeight)&&(r=r||s(),i.forEach((o,c)=>{let l=r[c][0]-e,h=r[c][1]-n,d=Math.sqrt(l*l+h*h),u=tn(1-d/260);o.style.fontWeight=Math.round(860-u*520)}))}}function b_(){sn(".flap").forEach(i=>{if(!Ws)return;let t=Ws.create(i,{type:"words,chars",wordsClass:"fw",charsClass:"fc"});be.fromTo(t.chars,{rotateX:-96,opacity:0},{rotateX:0,opacity:1,duration:.8,ease:"back.out(1.5)",stagger:.022,scrollTrigger:{trigger:i,start:"top 82%",once:!0}})})}function T_(){sn(".roll").forEach(i=>{let t=i.textContent.trim();i.innerHTML='<span class="sr">'+t+"</span>";let e=[];for(let s of t){let r=Se.createElement("span");if(r.setAttribute("aria-hidden","true"),/\d/.test(s)){r.className="dg";let a=Se.createElement("span");a.innerHTML=Array.from({length:10},(o,c)=>"<span>"+(+s+1+c)%10+"</span>").join(""),r.appendChild(a),e.push(a)}else r.textContent=s;i.appendChild(r)}let n=()=>e.forEach(s=>{let r=Se.createElement("span");r.textContent=s.lastChild.textContent,r.style.cssText="position:absolute;visibility:hidden;white-space:nowrap",i.appendChild(r);let a=parseFloat(getComputedStyle(i).fontSize)||1;s.parentNode.style.width=(r.getBoundingClientRect().width/a).toFixed(3)+"em",r.remove()});Se.fonts&&Se.fonts.ready?Se.fonts.ready.then(n):n(),be.fromTo(e,{yPercent:0},{yPercent:-90,duration:1.4,ease:"expo.out",stagger:.08,scrollTrigger:{trigger:i,start:"top 88%",once:!0}})})}function w_(){let i=ae(".band-in");if(!i)return;i.innerHTML+=i.innerHTML;let t=0,e=0,n=he.pageYOffset;be.ticker.add((s,r)=>{let a=he.pageYOffset,o=a-n;n=a,e=xe(e,o,.12),t-=(.9+Math.abs(e)*.25)*(r/16.7);let c=i.scrollWidth/2;-t>c&&(t+=c),i.style.transform="translate3d("+t.toFixed(1)+"px,0,0) skewX("+tn(-e*.25,-10,10).toFixed(2)+"deg)"})}function E_(){let i=ae(".ba"),t=i&&ae(".ba-in",i);if(!i||!t)return;let e=ae(".ba-tag-b",i),n=ae(".ba-tag-a",i),s=null,r=o=>{let c=i.clientWidth||1,l=32+o/100*(c-64);i.style.setProperty("--x",(l/c*100).toFixed(2)+"%"),e.style.opacity=o<14?"0":"1",n.style.opacity=o>86?"0":"1",t.setAttribute("aria-valuetext","Prima "+Math.round(o)+" per cento, dopo "+(100-Math.round(o))+" per cento")},a=()=>{s&&(s.kill(),s=null)};if(t.addEventListener("input",()=>{a(),r(+t.value)}),t.addEventListener("pointerdown",a),he.addEventListener("resize",()=>r(+t.value)),r(+t.value),ve&&"IntersectionObserver"in he){let o=new IntersectionObserver(c=>{if(!c.some(d=>d.isIntersecting))return;o.disconnect();let l={v:+t.value},h=()=>r(l.v);s=be.timeline({delay:.3,onComplete:()=>{t.value="50",s=null}}).to(l,{v:80,duration:.8,ease:"power2.inOut",onUpdate:h}).to(l,{v:22,duration:1.1,ease:"power2.inOut",onUpdate:h}).to(l,{v:50,duration:.9,ease:"power3.out",onUpdate:h})},{threshold:.55});o.observe(i)}}function A_(i){if(!i)return[];let t=i.textContent.trim().split(/\s+/);return i.innerHTML=t.map(e=>'<span class="w">'+e.replace(/&/g,"&amp;").replace(/</g,"&lt;")+"</span>").join(" "),sn(".w",i)}function C_(){let i=ae(".steps-track"),t=ae(".steps-line"),e=t&&ae("path",t),n=sn(".steps-list .n"),s=sn(".steps-list li"),r={ok:!1,t:0,measure(){},set(){},screen:()=>({x:0,y:0,r:12})};if(!i||!e||!n.length)return r;let a=1,o=[],c=-1,l=!1,h=[];return r.ok=!0,r.measure=()=>{let d=i.getBoundingClientRect();t.setAttribute("viewBox","0 0 "+Math.round(d.width)+" "+Math.round(d.height));let u=n.map(f=>{let b=f.getBoundingClientRect();return[b.left-d.left+b.width/2,b.top-d.top+b.height/2]});h=n.map((f,b)=>({x:u[b][0],y:u[b][1],R:f.getBoundingClientRect().width/2})),l=u.length>1&&Math.abs(u[0][1]-u[1][1])<4;let p=52,g=u[0],M=u[u.length-1];u.unshift(l?[g[0]-p,g[1]]:[g[0],g[1]-p]),u.push(l?[M[0]+p,M[1]]:[M[0],M[1]+p]);let m="M"+u[0][0].toFixed(1)+" "+u[0][1].toFixed(1);for(let f=1;f<u.length;f++){let b=u[f-1],P=u[f];if(Math.abs(b[1]-P[1])<4)m+=" L"+P[0].toFixed(1)+" "+P[1].toFixed(1);else{let x=(b[1]+P[1])/2;m+=" C"+b[0].toFixed(1)+" "+x.toFixed(1)+" "+P[0].toFixed(1)+" "+x.toFixed(1)+" "+P[0].toFixed(1)+" "+P[1].toFixed(1)}}e.setAttribute("d",m),a=e.getTotalLength()||1,e.style.strokeDasharray=a+" "+a,o=u.slice(1,-1).map(f=>{let b=0,P=1e9;for(let x=0;x<=80;x++){let T=e.getPointAtLength(a*x/80),w=Math.hypot(T.x-f[0],T.y-f[1]);w<P&&(P=w,b=x/80)}return b}),c=-1,r.set(r.t)},r.set=d=>{d=tn(d),r.t=d,!(Math.abs(d-c)<1e-4)&&(c=d,e.style.strokeDashoffset=String(a*(1-d)),s.forEach((u,p)=>u.classList.toggle("on",o.length>0&&d>=o[p]-.01)))},r.screen=d=>{r.set(d);let u=i.getBoundingClientRect(),p=e.getPointAtLength(a*tn(d)),g=13,M=p.x,m=p.y;for(let f of h){let b=l?M-f.x:m-f.y,P=l?m-f.y:M-f.x,x=f.R+g+5;if(Math.abs(b)<x&&Math.abs(P)<x){let T=Math.sqrt(x*x-b*b);l?m=f.y-T:M=Math.max(f.x-T,g+3-u.left);break}}return{x:u.left+M,y:u.top+m,r:g}},r.measure(),ve||r.set(1),r}function R_(){let i=[],t=(o,c)=>String(o||"").replace(/\s+/g," ").trim().slice(0,c),e=o=>{let c=$c[o.kind]?o.kind:"other",l=o.src==="osm"||o.src==="demo"?o.src:"typed";return{name:t(o.name,70)||Jc.name,kind:c,cat:t(o.cat,40)||$c[c],city:t(o.city,60),addr:t(o.addr,90),hours:t(o.hours,240),web:t(o.web,120),osm:t(o.osm,40),src:l}},n=Object.assign({},Jc);try{let o=JSON.parse(localStorage.getItem("mk-shop")||"null");o&&o.name&&o.src!=="demo"&&(n=e(o))}catch{}let s=()=>qc(n.hours),r={get:()=>n,set(o){n=e(o);try{localStorage.setItem("mk-shop",JSON.stringify(n))}catch{}a(),i.forEach(c=>c(n))},reset(){n=Object.assign({},Jc);try{localStorage.removeItem("mk-shop")}catch{}a(),i.forEach(o=>o(n))},on:o=>i.push(o),week:s,status:()=>{let o=s();return o?id(o):null},place:()=>[n.addr,n.city].filter(Boolean).join(", "),handle:()=>"@"+(n.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"").slice(0,24)||"iltuonegozio")};function a(){let o="https://wa.me/393715399463?text=",c="Ciao Maicol, ho visto il tuo sito";n.src==="osm"?c+=". Il mio negozio \xE8 "+n.name+(r.place()?", "+r.place():"")+(n.osm?" (openstreetmap.org/"+n.osm+")":"")+". Mi prepari la prova gratis?":n.src==="typed"&&(c+=". Il mio negozio \xE8 "+n.name+" ("+n.cat.toLowerCase()+"). Mi prepari la prova gratis?"),sn("[data-wa]").forEach(l=>{l.href=o+encodeURIComponent(c)})}return a(),r}function P_(i){let t=ae("[data-stage=site]"),e={fab:null,pose(){},measure(){}};if(!t)return e;let n=O=>ae(O,t),s=n(".ph-site"),r=n(".ph-page"),a=n(".ph-bar"),o=n(".ph-hero"),c=n(".ph-img"),l=n(".ph-name"),h=n(".ph-meta"),d=n(".ph-brand"),u=n(".ph-btn"),p=n(".ph-cta"),g=n(".ph-today"),M=n(".ph-more"),m=n(".ph"),f=n(".ph-shadow"),b=n(".ph-desc"),P=n(".ph-scr"),x=sn(".ph-h",t),T=sn(".ph-cards figure",t),w=n(".ph-hours"),U=n(".ph-h-where"),y=n(".ph-where"),C=n(".ph-h-hours");e.fab=n(".ph-fab");let k="img/p/",q={food:{hero:"t-hero.webp",h:"Dalla nostra cucina",cards:[["t-ravioli.webp","Primi fatti a mano"],["t-tiramisu.webp","Dolci della casa"]]},hair:{hero:"s-piega.webp",h:"Servizi",cards:[["s-colore.webp","Colore"],["s-ricci.webp","Taglio e piega"]]},bake:{hero:"g-banco.webp",h:"Sfornati oggi",cards:[["g-focaccia.webp","Focaccia"],["g-croissant.webp","Cornetti"]]},other:{hero:"",h:"",cards:[]}},H=O=>O.kind==="food"?"Prenota un tavolo":O.kind==="hair"?/estetic|unghie/i.test(O.cat)?"Prenota un trattamento":"Prenota il tuo turno":O.kind==="bake"?/^(Bar|Caffè)/.test(O.cat)?"Guarda il men\xF9":/Pasticceria/.test(O.cat)?"Ordina una torta":"Ordina per domani":/Barbiere/.test(O.cat)?"Prenota il tuo turno":O.src==="osm"?"Come arrivare":"Scrivici su WhatsApp",ot=[],G=0,et="";function ut(O){let Y=q[O.kind]||q.other;s.className="ph-site k-"+O.kind,l.innerHTML=O.name.split(" ").map(Xt=>Array.from(Xt).map(Qt=>'<span class="c">'+hl(Qt)+"</span>").join("")).map(Xt=>'<span class="wd">'+Xt+"</span>").join(" "),ot=sn(".c",l),d.textContent=O.name,h.textContent=O.city?O.cat+" a "+O.city:O.cat,u.textContent=H(O),Y.hero&&c.getAttribute("src")!==k+Y.hero&&(c.src=k+Y.hero),x[0].textContent=Y.h||"",O.kind==="bake"&&/^(Bar|Caffè)/.test(O.cat)&&(x[0].textContent="Dal nostro banco"),O.kind==="hair"&&/estetic/i.test(O.cat)&&(x[0].textContent="Trattamenti"),T.forEach((Xt,Qt)=>{let B=Y.cards[Qt];if(!B)return;let L=ae("img",Xt);L.getAttribute("src")!==k+B[0]&&(L.src=k+B[0]),ae("figcaption",Xt).textContent=B[1]});let lt=i.week(),Ct=i.status();g.hidden=!1,g.classList.remove("is-closed","is-where","is-todo"),Ct&&O.src!=="typed"?(ae("span",g).textContent=Yc(Ct),g.classList.toggle("is-closed",!Ct.open)):O.src==="osm"?(ae("span",g).textContent="Orari da completare",g.classList.add("is-todo")):g.hidden=!0;let vt=lt?ll(lt):"";C.hidden=w.hidden=O.src==="typed",w.textContent=vt||"Da completare: su OpenStreetMap non ci sono ancora.",w.classList.toggle("is-todo",!vt);let Zt=i.place();U.hidden=y.hidden=!(O.src==="osm"&&Zt),y.textContent=Zt,b&&(b.textContent="Anteprima: il sito di "+O.name+(O.src==="demo"?", un negozio inventato,":"")+" sul telefono."),et="",tt()}function tt(){G=Math.max(0,r.scrollHeight-P.clientHeight),et=""}let F=-1;return e.pose=(O,Y=0,lt=0)=>{let Ct=O.toFixed(4)+Y.toFixed(3)+lt.toFixed(3);if(Ct===et)return;et=Ct,F=O;let vt=jn(Fe(O,0,.2)),Zt=Di(Fe(O,.62,1));m.style.transform="translate3d(0,"+xe(24,0,vt).toFixed(2)+"%,0) rotateX("+(xe(26,6,vt)-lt*3).toFixed(2)+"deg) rotateY("+(xe(-38,-15,vt)+Zt*24+Y*6).toFixed(2)+"deg) rotateZ("+xe(7,0,vt).toFixed(2)+"deg) scale("+xe(.82,1,vt).toFixed(4)+")",f.style.opacity=(.25+.75*vt).toFixed(3),f.style.transform="translateX("+((-15+Zt*24)*.6).toFixed(1)+"%) scale("+xe(.6,1,vt).toFixed(3)+",1)";let Xt=jn(Fe(O,.08,.28));s.style.opacity=Xt.toFixed(3),c.style.transform="scale("+xe(1.35,1,Xt).toFixed(4)+")";let Qt=Fe(O,.18,.36),B=Math.max(1,ot.length);ot.forEach((it,xt)=>{let E=jn(tn((Qt-xt/B*.55)/.45));it.style.transform="translateY("+((1-E)*70).toFixed(1)+"%)",it.style.opacity=E.toFixed(3)});let L=jn(Fe(O,.3,.4));h.style.opacity=L.toFixed(3),h.style.transform="translateY("+((1-L)*40).toFixed(1)+"%)",a.style.opacity=L.toFixed(3);let I=ta(Fe(O,.36,.46));p.style.opacity=tn(I).toFixed(3),u.style.transform="scale("+xe(.6,1,I).toFixed(4)+")";let R=jn(Fe(O,.43,.53));g.style.opacity=R.toFixed(3),g.style.transform="translateX("+((1-R)*-24).toFixed(1)+"%)";let N=Di(Fe(O,.64,.94))*G;r.style.transform="translate3d(0,"+(-N).toFixed(1)+"px,0)",a.classList.toggle("is-solid",N>o.offsetHeight-a.offsetHeight-4),M.style.opacity="1"},e.measure=()=>{tt(),F>=0&&e.pose(F)},e.render=ut,ut(i.get()),i.on(O=>{ut(O),F>=0&&e.pose(F)}),he.addEventListener("resize",()=>e.measure()),Se.fonts&&Se.fonts.ready&&Se.fonts.ready.then(()=>e.measure()),e}function hl(i){return String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function I_(i){let t=ae(".find"),e={anchor:()=>null,busy:!1};if(!t)return e;let n=ae(".find-form",t),s=ae("#q"),r=ae(".find-msg",t),a=ae(".find-list",t),o=ae(".find-alt",t),c=ae(".find-pick",t),l=ae(".lens .dot",t),h=ae(".dot[data-dot=hero]"),d=null,u=[],p=[],g="idle",M=-1,m=null,f=0,b=F=>{r.textContent=F},P=(F,O)=>()=>{let Y=F.getBoundingClientRect();return{x:Y.left+Y.width/2,y:Y.top+Y.height/2,r:O||Y.width/2}},x=P(l),T={t:1,from:null,to:null},w=null;function U(F,O=.55){let Y=e.anchor();if(!ve||!Y){T.to=F,T.from=null,T.t=1;return}let lt=T.to;T.from=T.t>=1&&lt?lt:(()=>{let Ct=Y;return()=>Ct})(),T.to=F,T.t=0,w&&w.kill(),w=be.to(T,{t:1,duration:O,ease:"none"})}e.anchor=()=>{if(!T.to)return null;let F=T.to();if(T.t>=1||!T.from)return F;let O=T.from(),Y=T.t,lt=Di(Y),Ct=Math.hypot(F.x-O.x,F.y-O.y);return{x:xe(O.x,F.x,lt),y:xe(O.y,F.y,lt)-Math.sin(Math.PI*Y)*Math.min(Ct*.45,110),r:xe(O.r,F.r,lt)}};let y=()=>{T.to||(T.to=P(h),T.t=1)};s.addEventListener("focus",()=>{g==="idle"&&ve&&(y(),U(x,.6))}),s.addEventListener("blur",()=>{setTimeout(()=>{g==="idle"&&Se.activeElement!==s&&!s.value.trim()&&ve&&(U(P(h),.6),setTimeout(()=>{g==="idle"&&Se.activeElement!==s&&T.t>=1&&(T.to=null)},650))},900)});let C=F=>requestAnimationFrame(()=>{if(Ge&&Ge.refresh(),!F)return;let O=F.getBoundingClientRect(),Y=Math.min(O.bottom-he.innerHeight+90,O.top-96);O.bottom<=he.innerHeight-20||Y<=0||(zn?zn.scrollTo(zn.scroll+Y,{duration:ul?0:1}):he.scrollBy({top:Y,behavior:ul?"auto":"smooth"}))});function k(){u=[],p=[],M=-1,m=null,a.innerHTML="",a.classList.remove("is-picked"),o.hidden=!0,c.hidden=!0,b("")}function q(F){g!=="results"||F===M||!p[F]||(p.forEach((O,Y)=>O.classList.toggle("is-on",Y===F)),M=F,U(P(ae(".find-mk",p[F]),7.5),.42))}function H(F){let O=[F.street?F.street+(F.num?" "+F.num:""):"",F.city].filter(Boolean);return F.street&&F.city?F.cat+" in "+O.join(", "):F.city?F.cat+" a "+F.city:F.cat}function ot(F){a.innerHTML=F.map((O,Y)=>'<li><button type="button" class="find-row" data-i="'+Y+'"><span class="find-mk" aria-hidden="true"></span><span class="find-nm">'+hl(O.name)+'</span><span class="find-meta">'+hl(H(O))+"</span></button></li>").join(""),p=sn(".find-row",a),p.forEach((O,Y)=>{O.addEventListener("click",()=>G(Y)),O.addEventListener("focus",()=>q(Y)),Kn&&O.addEventListener("pointerenter",()=>q(Y))}),ve&&g==="busy"&&be.from(p,{y:16,opacity:0,duration:.6,ease:"expo.out",stagger:.06})}n.addEventListener("submit",async F=>{F.preventDefault();let O=s.value.trim();if(O.length<3){b("Scrivi il nome del negozio, e se puoi la citt\xE0."),s.focus();return}d&&d.abort(),d=new AbortController;let Y=++f;k(),g="busy",e.busy=!0,n.classList.add("is-busy"),b("Cerco sulla mappa\u2026"),y(),U(x,.5),Kn||s.blur();let lt=null,Ct=!1;try{[lt]=await Promise.all([td(O,d.signal),new Promise(vt=>setTimeout(vt,ve?700:0))])}catch(vt){if(vt&&vt.name==="AbortError")return;Ct=!0}if(Y===f){if(n.classList.remove("is-busy"),e.busy=!1,Ct||!lt||!lt.length){g="alt",b(Ct?"La ricerca adesso non risponde. Riprova tra poco, oppure usa solo il nome.":"Non lo trovo sulla mappa. Prova a scriverlo in un altro modo, oppure usa solo il nome."),o.hidden=!1,ae(".find-use",o).textContent="Usa \xAB"+O.slice(0,40)+"\xBB",U(x,.4),C(o);return}u=lt,b(lt.length===1?"Ho trovato questo. \xC8 il tuo?":"Ho trovato questi. Qual \xE8 il tuo?"),ot(lt),g="results",M=-1,q(0),C(a)}}),ae(".find-use",o).addEventListener("click",()=>{let F=(ae("input[name=kind]:checked",o)||{}).value||"food",O=s.value.trim().slice(0,70);if(!O){s.focus();return}i.set({name:O,kind:F,cat:$c[F],src:"typed"}),g="picked",o.hidden=!0,b("Fatto: le anteprime qui sotto adesso hanno il tuo nome."),et(null,!0)});async function G(F){let O=u[F],Y=p[F];if(!O||g==="picked")return;g="picked",M=F,p.forEach((Xt,Qt)=>{Xt.classList.toggle("is-on",Qt===F),Xt.classList.toggle("is-picked",Qt===F),Xt.setAttribute("aria-pressed",Qt===F?"true":"false")}),a.classList.add("is-picked"),b("Eccolo.");let lt=ut(Y),Ct=null;try{Ct=await ed(O.id,d?d.signal:void 0)}catch{Ct=null}let vt=Ct||{},Zt=vt.street?vt.street+(vt.num?" "+vt.num:""):O.street?O.street+(O.num?" "+O.num:""):"";i.set({name:O.name,kind:Wc(O.value,vt),cat:Xc(O.value,vt),city:vt.city||O.city,addr:Zt,hours:vt.hours||"",web:vt.web||"",osm:{N:"node",W:"way",R:"relation"}[O.id[0]]+"/"+O.id.slice(1),src:"osm"}),await lt,et(i.get(),!0)}function et(F,O){let Y=F?i.status():null,lt=F?i.week():null,Ct=ae(".find-st",c);Ct.hidden=!Y,Y&&(ae("span",Ct).textContent=Yc(Y),Ct.classList.toggle("is-closed",!Y.open)),ae(".find-hours",c).textContent=F?lt?"Orari: "+ll(lt)+".":"Su OpenStreetMap mancano i suoi orari: sul sito e su Google li mettiamo giusti.":"Anteprime fatte col nome che hai scritto.";let vt=ae(".find-web",c);if(F&&F.web){let Zt=F.web.replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\/.*$/,"");vt.innerHTML="Hai gi\xE0 un sito, <b>"+hl(Zt)+"</b>: te lo controllo e lo sistemo a 79\u202F\u20AC, in 48 ore, e paghi dopo."}else vt.textContent=F?"Il sito te lo faccio come l'anteprima qui sotto, a 390\u202F\u20AC.":"";c.hidden=!1,O&&ve&&be.from(c,{y:14,opacity:0,duration:.6,ease:"expo.out"}),C(O?c:null)}ae(".find-again",t).addEventListener("click",()=>{f++,d&&d.abort(),k(),g="idle",e.busy=!1,n.classList.remove("is-busy"),i.reset(),s.focus(),s.select(),U(x,.5),C(null)});function ut(F,O){let Y=ae(".find-nm",F),lt="http://www.w3.org/2000/svg",Ct=Se.createElementNS(lt,"svg");Ct.setAttribute("class","find-circle"),Ct.setAttribute("aria-hidden","true"),Ct.setAttribute("preserveAspectRatio","none");let vt=Se.createElementNS(lt,"path");Ct.appendChild(vt),Y.appendChild(Ct);let Zt=Y.getBoundingClientRect(),Xt=Math.min(Zt.left,he.innerWidth-Zt.right)-6,Qt=Math.min(Zt.width/2*1.19+8,Zt.width/2+Math.max(10,Xt)),B=Zt.height/2*1.19+7,L=Qt*2+8,I=B*2+8;Object.assign(Ct.style,{left:((Zt.width-L)/2).toFixed(1)+"px",top:((Zt.height-I)/2).toFixed(1)+"px",width:L.toFixed(1)+"px",height:I.toFixed(1)+"px"}),Ct.setAttribute("viewBox","0 0 "+L.toFixed(1)+" "+I.toFixed(1));let R=L/2,N=I/2,it=-2.45,xt=Math.PI*2+.55,E=96,V=ht=>Math.sign(ht)*Math.pow(Math.abs(ht),.55),z="";for(let ht=0;ht<=E;ht++){let yt=ht/E,Mt=it+xt*yt,j=1+.03*Math.sin(yt*Math.PI*3+.8)+yt*.06,v=R+V(Math.cos(Mt))*Qt*j,Bt=N+V(Math.sin(Mt))*B*j+Math.cos(Mt)*1.5;z+=(ht?"L":"M")+v.toFixed(1)+" "+Bt.toFixed(1)}vt.setAttribute("d",z),vt.setAttribute("vector-effect","non-scaling-stroke");let $=vt.getTotalLength();vt.style.strokeDasharray=$+" "+$,m={t:0};let rt=()=>{let ht=vt.getPointAtLength($*m.t),yt=Ct.getBoundingClientRect();return{x:yt.left+ht.x*(yt.width/L),y:yt.top+ht.y*(yt.height/I),r:6.5}};return!ve||O?(vt.style.strokeDashoffset="0",m.t=1,Promise.resolve()):(vt.style.strokeDashoffset=String($),new Promise(ht=>{U(rt,.45),be.to(m,{t:1,duration:1.05,delay:.45,ease:"power2.inOut",onUpdate:()=>{vt.style.strokeDashoffset=String($*(1-m.t))},onComplete:ht})}))}let tt=i.get();if(tt.src==="osm"){s.value=tt.name+(tt.city?" "+tt.city:""),u=[{name:tt.name,cat:tt.cat,street:tt.addr,num:"",city:tt.city}],ot(u),p.forEach(O=>O.classList.add("is-picked","is-on")),a.classList.add("is-picked"),g="picked";let F=()=>{p[0]&&!ae(".find-circle",p[0])&&ut(p[0],!0)};Se.fonts&&Se.fonts.ready?Se.fonts.ready.then(F):F(),b("L'ultima volta hai scelto questo."),et(tt,!1)}else tt.src==="typed"&&(s.value=tt.name,g="picked",b("Le anteprime qui sotto hanno il nome \xAB"+tt.name+"\xBB."),et(null,!1));return e}function L_(){let i=ae("#copy");if(!i)return;let t=ae("span",i);i.addEventListener("click",()=>{let e=()=>{t.textContent="Numero copiato",setTimeout(()=>{t.textContent="Copia il numero"},2200)};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText("+39 371 539 9463").then(e,()=>{t.textContent="371 539 9463"}):t.textContent="371 539 9463"})}function D_(){let i=ae(".dock"),t=ae(".hero"),e=ae("#contatti"),n=sn(".svc");if(!i||!t||!e)return;let s=0,r=null,a=l=>n.some(h=>{let d=h.getBoundingClientRect();return d.top<l*.55&&d.bottom>l*.6}),o=()=>{s=0;let l=he.innerHeight,h=he.innerWidth<=700&&t.getBoundingClientRect().bottom<l*.3&&e.getBoundingClientRect().top>l*.85&&!a(l);h!==r&&(r=h,i.classList.toggle("is-on",h),Zi.classList.toggle("dock-on",h),i.inert=!h)},c=()=>{s||(s=requestAnimationFrame(o))};he.addEventListener("scroll",c,{passive:!0}),he.addEventListener("resize",c),o()}function N_(){let i=ae(".nav");if(!i)return;let t=()=>i.classList.toggle("solid",he.pageYOffset>24);if(he.addEventListener("scroll",t,{passive:!0}),t(),!("IntersectionObserver"in he))return;let e=new IntersectionObserver(n=>n.forEach(s=>{s.isIntersecting&&i.setAttribute("data-nav",s.target.getAttribute("data-theme"))}),{rootMargin:"-3% 0px -96% 0px"});sn("[data-theme]").forEach(n=>e.observe(n))}function U_(){sn('a[href^="#"]').forEach(i=>i.addEventListener("click",t=>{let e=i.getAttribute("href").slice(1),n=e&&Se.getElementById(e);n&&(t.preventDefault(),zn?zn.scrollTo(n,{offset:0}):n.scrollIntoView({behavior:ul?"auto":"smooth"}),history.replaceState(null,"","#"+e))}))}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
