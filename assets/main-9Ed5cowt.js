import"./transitions-BIOW2HQE.js";const Vh="183",k_=0,kf=1,V_=2,Pl=1,H_=2,Yo=3,Nr=0,bn=1,Oi=2,Hi=0,ro=1,Kn=2,Vf=3,Hf=4,G_=5,is=100,W_=101,X_=102,Y_=103,q_=104,$_=200,K_=201,Z_=202,j_=203,xu=204,Su=205,J_=206,Q_=207,eg=208,tg=209,ng=210,ig=211,rg=212,sg=213,og=214,Mu=0,yu=1,Eu=2,_o=3,Tu=4,bu=5,wu=6,Au=7,kp=0,ag=1,lg=2,Gi=0,Hh=1,fc=2,Gh=3,Wh=4,Xh=5,Yh=6,qh=7,Vp=300,_s=301,go=302,yc=303,Ec=304,dc=306,Cu=1e3,ir=1001,Ru=1002,un=1003,cg=1004,za=1005,Tn=1006,Tc=1007,ss=1008,ni=1009,Hp=1010,Gp=1011,_a=1012,$h=1013,Xi=1014,Ai=1015,ai=1016,Kh=1017,Zh=1018,ga=1020,Wp=35902,Xp=35899,Yp=1021,qp=1022,Ci=1023,lr=1026,os=1027,jh=1028,Jh=1029,vo=1030,Qh=1031,ef=1033,Dl=33776,Ll=33777,Il=33778,Ul=33779,Pu=35840,Du=35841,Lu=35842,Iu=35843,Uu=36196,Nu=37492,Fu=37496,Ou=37488,Bu=37489,zu=37490,ku=37491,Vu=37808,Hu=37809,Gu=37810,Wu=37811,Xu=37812,Yu=37813,qu=37814,$u=37815,Ku=37816,Zu=37817,ju=37818,Ju=37819,Qu=37820,eh=37821,th=36492,nh=36494,ih=36495,rh=36283,sh=36284,oh=36285,ah=36286,ug=3200,hg=0,fg=1,Er="",Jn="srgb",Fr="srgb-linear",$l="linear",_t="srgb",As=7680,Gf=519,dg=512,pg=513,mg=514,tf=515,_g=516,gg=517,nf=518,vg=519,Wf=35044,xg=35048,Xf="300 es",zi=2e3,va=2001;function Sg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mg(){const r=xa("canvas");return r.style.display="block",r}const Yf={};function qf(...r){const e="THREE."+r.shift();console.log(e,...r)}function $p(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Xe(...r){r=$p(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function dt(...r){r=$p(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Kl(...r){const e=r.join(" ");e in Yf||(Yf[e]=!0,Xe(...r))}function yg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Eg={[Mu]:yu,[Eu]:wu,[Tu]:Au,[_o]:bu,[yu]:Mu,[wu]:Eu,[Au]:Tu,[bu]:_o};class Ao{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=Math.PI/180,lh=180/Math.PI;function Ua(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function Tg(r,e){return(r%e+e)%e}function wc(r,e,t){return(1-t)*r+t*e}function Lo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Co{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[o+0],f=s[o+1],p=s[o+2],g=s[o+3];if(d!==g||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*g;m<0&&(h=-h,f=-f,p=-p,g=-g,m=-m);let _=1-a;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);_=Math.sin(_*v)/y,a=Math.sin(a*v)/y,l=l*_+h*a,c=c*_+f*a,u=u*_+p*a,d=d*_+g*a}else{l=l*_+h*a,c=c*_+f*a,u=u*_+p*a,d=d*_+g*a;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-a*f,e[t+2]=c*p+u*f+a*h-l*d,e[t+3]=u*p-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($f.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ac=new V,$f=new Co;class Qe{constructor(e,t,n,i,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],g=i[0],m=i[3],_=i[6],v=i[1],y=i[4],M=i[7],b=i[2],A=i[5],w=i[8];return s[0]=o*g+a*v+l*b,s[3]=o*m+a*y+l*A,s[6]=o*_+a*M+l*w,s[1]=c*g+u*v+d*b,s[4]=c*m+u*y+d*A,s[7]=c*_+u*M+d*w,s[2]=h*g+f*v+p*b,s[5]=h*m+f*y+p*A,s[8]=h*_+f*M+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,p=t*d+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=d*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cc.makeScale(e,t)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cc=new Qe,Kf=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zf=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bg(){const r={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(i.r=or(i.r),i.g=or(i.g),i.b=or(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(i.r=so(i.r),i.g=so(i.g),i.b=so(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Er?$l:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Kl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Kl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Fr]:{primaries:e,whitePoint:n,transfer:$l,toXYZ:Kf,fromXYZ:Zf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Kf,fromXYZ:Zf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),r}const ut=bg();function or(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function so(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Cs;class wg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cs===void 0&&(Cs=xa("canvas")),Cs.width=e.width,Cs.height=e.height;const i=Cs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Cs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=or(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(or(t[n]/255)*255):t[n]=or(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ag=0;class rf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Ua(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Rc(i[o].image)):s.push(Rc(i[o]))}else s=Rc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Rc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let Cg=0;const Pc=new V;class wn extends Ao{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,n=ir,i=ir,s=Tn,o=ss,a=Ci,l=ni,c=wn.DEFAULT_ANISOTROPY,u=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Ua(),this.name="",this.source=new rf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pc).x}get height(){return this.source.getSize(Pc).y}get depth(){return this.source.getSize(Pc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cu:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case Ru:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cu:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case Ru:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Vp;wn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,i=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],g=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(f+1)/2,b=(_+1)/2,A=(u+h)/4,w=(d+g)/4,x=(p+m)/4;return y>M&&y>b?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=A/n,s=w/n):M>b?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=A/i,s=x/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=w/s,i=x/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-p)*(m-p)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-g)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rg extends Ao{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new wn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new rf(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Rg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kp extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pg extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Et{constructor(e,t,n,i,s,o,a,l,c,u,d,h,f,p,g,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,d,h,f,p,g,m)}set(e,t,n,i,s,o,a,l,c,u,d,h,f,p,g,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=d,_[14]=h,_[3]=f,_[7]=p,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Rs.setFromMatrixColumn(e,0).length(),s=1/Rs.setFromMatrixColumn(e,1).length(),o=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,f=o*d,p=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,p=c*u,g=c*d;t[0]=h+g*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,p=c*u,g=c*d;t[0]=h-g*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,p=a*u,g=a*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=g-h*d,t[8]=p*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=o*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dg,e,Lg)}lookAt(e,t,n){const i=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),pr.crossVectors(n,qn),pr.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),pr.crossVectors(n,qn)),pr.normalize(),ka.crossVectors(qn,pr),i[0]=pr.x,i[4]=ka.x,i[8]=qn.x,i[1]=pr.y,i[5]=ka.y,i[9]=qn.y,i[2]=pr.z,i[6]=ka.z,i[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],g=n[6],m=n[10],_=n[14],v=n[3],y=n[7],M=n[11],b=n[15],A=i[0],w=i[4],x=i[8],E=i[12],I=i[1],R=i[5],U=i[9],H=i[13],O=i[2],k=i[6],z=i[10],N=i[14],$=i[3],Q=i[7],P=i[11],ae=i[15];return s[0]=o*A+a*I+l*O+c*$,s[4]=o*w+a*R+l*k+c*Q,s[8]=o*x+a*U+l*z+c*P,s[12]=o*E+a*H+l*N+c*ae,s[1]=u*A+d*I+h*O+f*$,s[5]=u*w+d*R+h*k+f*Q,s[9]=u*x+d*U+h*z+f*P,s[13]=u*E+d*H+h*N+f*ae,s[2]=p*A+g*I+m*O+_*$,s[6]=p*w+g*R+m*k+_*Q,s[10]=p*x+g*U+m*z+_*P,s[14]=p*E+g*H+m*N+_*ae,s[3]=v*A+y*I+M*O+b*$,s[7]=v*w+y*R+M*k+b*Q,s[11]=v*x+y*U+M*z+b*P,s[15]=v*E+y*H+M*N+b*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],g=e[7],m=e[11],_=e[15],v=l*f-c*h,y=a*f-c*d,M=a*h-l*d,b=o*f-c*u,A=o*h-l*u,w=o*d-a*u;return t*(g*v-m*y+_*M)-n*(p*v-m*b+_*A)+i*(p*y-g*b+_*w)-s*(p*M-g*A+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],g=e[13],m=e[14],_=e[15],v=t*a-n*o,y=t*l-i*o,M=t*c-s*o,b=n*l-i*a,A=n*c-s*a,w=i*c-s*l,x=u*g-d*p,E=u*m-h*p,I=u*_-f*p,R=d*m-h*g,U=d*_-f*g,H=h*_-f*m,O=v*H-y*U+M*R+b*I-A*E+w*x;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/O;return e[0]=(a*H-l*U+c*R)*k,e[1]=(i*U-n*H-s*R)*k,e[2]=(g*w-m*A+_*b)*k,e[3]=(h*A-d*w-f*b)*k,e[4]=(l*I-o*H-c*E)*k,e[5]=(t*H-i*I+s*E)*k,e[6]=(m*M-p*w-_*y)*k,e[7]=(u*w-h*M+f*y)*k,e[8]=(o*U-a*I+c*x)*k,e[9]=(n*I-t*U-s*x)*k,e[10]=(p*A-g*M+_*v)*k,e[11]=(d*M-u*A-f*v)*k,e[12]=(a*E-o*R-l*x)*k,e[13]=(t*R-n*E+i*x)*k,e[14]=(g*y-p*b-m*v)*k,e[15]=(u*b-d*y+h*v)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,p=s*d,g=o*u,m=o*d,_=a*d,v=l*c,y=l*u,M=l*d,b=n.x,A=n.y,w=n.z;return i[0]=(1-(g+_))*b,i[1]=(f+M)*b,i[2]=(p-y)*b,i[3]=0,i[4]=(f-M)*A,i[5]=(1-(h+_))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(p+y)*w,i[9]=(m-v)*w,i[10]=(1-(h+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Rs.set(i[0],i[1],i[2]).length();const a=Rs.set(i[4],i[5],i[6]).length(),l=Rs.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Mi.copy(this);const c=1/o,u=1/a,d=1/l;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=d,Mi.elements[9]*=d,Mi.elements[10]*=d,t.setFromRotationMatrix(Mi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=zi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,g;if(l)p=s/(o-s),g=o*s/(o-s);else if(a===zi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===va)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=zi,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,g;if(l)p=1/(o-s),g=o/(o-s);else if(a===zi)p=-2/(o-s),g=-(o+s)/(o-s);else if(a===va)p=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Rs=new V,Mi=new Et,Dg=new V(0,0,0),Lg=new V(1,1,1),pr=new V,ka=new V,qn=new V,jf=new Et,Jf=new Co;class cr{constructor(e=0,t=0,n=0,i=cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jf.setFromEuler(this),this.setFromQuaternion(Jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cr.DEFAULT_ORDER="XYZ";class Zp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ig=0;const Qf=new V,Ps=new Co,$i=new Et,Va=new V,Io=new V,Ug=new V,Ng=new Co,ed=new V(1,0,0),td=new V(0,1,0),nd=new V(0,0,1),id={type:"added"},Fg={type:"removed"},Ds={type:"childadded",child:null},Dc={type:"childremoved",child:null};class Jt extends Ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new V,t=new cr,n=new Co,i=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Et},normalMatrix:{value:new Qe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(ed,e)}rotateY(e){return this.rotateOnAxis(td,e)}rotateZ(e){return this.rotateOnAxis(nd,e)}translateOnAxis(e,t){return Qf.copy(e).applyQuaternion(this.quaternion),this.position.add(Qf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ed,e)}translateY(e){return this.translateOnAxis(td,e)}translateZ(e){return this.translateOnAxis(nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Va.copy(e):Va.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Io,Va,this.up):$i.lookAt(Va,Io,this.up),this.quaternion.setFromRotationMatrix($i),i&&($i.extractRotation(i.matrixWorld),Ps.setFromRotationMatrix($i),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(id),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fg),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(id),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,Ug),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,Ng,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Jt.DEFAULT_UP=new V(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rr extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Og={type:"move"};class Lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),_=this._getHandJoint(c,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Og)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function Ic(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Tg(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ic(o,s,e+1/3),this.g=Ic(o,s,e),this.b=Ic(o,s,e-1/3)}return ut.colorSpaceToWorking(this,i),this}setStyle(e,t=Jn){function n(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){const n=jp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return ut.workingToColorSpace(vn.copy(this),e),Math.round(at(vn.r*255,0,255))*65536+Math.round(at(vn.g*255,0,255))*256+Math.round(at(vn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(vn.copy(this),t);const n=vn.r,i=vn.g,s=vn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Jn){ut.workingToColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,i=vn.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(Ha);const n=wc(mr.h,Ha.h,t),i=wc(mr.s,Ha.s,t),s=wc(mr.l,Ha.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new et;et.NAMES=jp;class Bg extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yi=new V,Ki=new V,Uc=new V,Zi=new V,Ls=new V,Is=new V,rd=new V,Nc=new V,Fc=new V,Oc=new V,Bc=new Ft,zc=new Ft,kc=new Ft;class wi{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yi.subVectors(e,t),i.cross(yi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){yi.subVectors(i,t),Ki.subVectors(n,t),Uc.subVectors(e,t);const o=yi.dot(yi),a=yi.dot(Ki),l=yi.dot(Uc),c=Ki.dot(Ki),u=Ki.dot(Uc),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zi.x),l.addScaledVector(o,Zi.y),l.addScaledVector(a,Zi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Bc.setScalar(0),zc.setScalar(0),kc.setScalar(0),Bc.fromBufferAttribute(e,t),zc.fromBufferAttribute(e,n),kc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Bc,s.x),o.addScaledVector(zc,s.y),o.addScaledVector(kc,s.z),o}static isFrontFacing(e,t,n,i){return yi.subVectors(n,t),Ki.subVectors(e,t),yi.cross(Ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),yi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return wi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ls.subVectors(i,n),Is.subVectors(s,n),Nc.subVectors(e,n);const l=Ls.dot(Nc),c=Is.dot(Nc);if(l<=0&&c<=0)return t.copy(n);Fc.subVectors(e,i);const u=Ls.dot(Fc),d=Is.dot(Fc);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ls,o);Oc.subVectors(e,s);const f=Ls.dot(Oc),p=Is.dot(Oc);if(p>=0&&f<=p)return t.copy(s);const g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Is,a);const m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return rd.subVectors(s,i),a=(d-u)/(d-u+(f-p)),t.copy(i).addScaledVector(rd,a);const _=1/(m+g+h);return o=g*_,a=h*_,t.copy(n).addScaledVector(Ls,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ss{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ei):Ei.fromBufferAttribute(s,o),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ga.copy(n.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),Wa.subVectors(this.max,Uo),Us.subVectors(e.a,Uo),Ns.subVectors(e.b,Uo),Fs.subVectors(e.c,Uo),_r.subVectors(Ns,Us),gr.subVectors(Fs,Ns),Wr.subVectors(Us,Fs);let t=[0,-_r.z,_r.y,0,-gr.z,gr.y,0,-Wr.z,Wr.y,_r.z,0,-_r.x,gr.z,0,-gr.x,Wr.z,0,-Wr.x,-_r.y,_r.x,0,-gr.y,gr.x,0,-Wr.y,Wr.x,0];return!Vc(t,Us,Ns,Fs,Wa)||(t=[1,0,0,0,1,0,0,0,1],!Vc(t,Us,Ns,Fs,Wa))?!1:(Xa.crossVectors(_r,gr),t=[Xa.x,Xa.y,Xa.z],Vc(t,Us,Ns,Fs,Wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new V,new V,new V,new V,new V,new V,new V,new V],Ei=new V,Ga=new Ss,Us=new V,Ns=new V,Fs=new V,_r=new V,gr=new V,Wr=new V,Uo=new V,Wa=new V,Xa=new V,Xr=new V;function Vc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Xr.fromArray(r,s);const a=i.x*Math.abs(Xr.x)+i.y*Math.abs(Xr.y)+i.z*Math.abs(Xr.z),l=e.dot(Xr),c=t.dot(Xr),u=n.dot(Xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Wt=new V,Ya=new $e;let zg=0;class kn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wf,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Lo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),i=Nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),i=Nn(i,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wf&&(e.usage=this.usage),e}}class Jp extends kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qp extends kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class an extends kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const kg=new Ss,No=new V,Hc=new V;class Ms{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const t=No.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(No,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(Hc)),this.expandByPoint(No.copy(e.center).sub(Hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Vg=0;const fi=new Et,Gc=new Jt,Os=new V,$n=new Ss,Fo=new Ss,rn=new V;class fn extends Ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sg(e)?Qp:Jp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new an(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors($n.min,Fo.min),$n.expandByPoint(rn),rn.addVectors($n.max,Fo.max),$n.expandByPoint(rn)):($n.expandByPoint(Fo.min),$n.expandByPoint(Fo.max))}$n.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)rn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(rn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)rn.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(e,c),rn.add(Os)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new V,l[x]=new V;const c=new V,u=new V,d=new V,h=new $e,f=new $e,p=new $e,g=new V,m=new V;function _(x,E,I){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,I),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,E),p.fromBufferAttribute(s,I),u.sub(c),d.sub(c),f.sub(h),p.sub(h);const R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(R),a[x].add(g),a[E].add(g),a[I].add(g),l[x].add(m),l[E].add(m),l[I].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,E=v.length;x<E;++x){const I=v[x],R=I.start,U=I.count;for(let H=R,O=R+U;H<O;H+=3)_(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new V,M=new V,b=new V,A=new V;function w(x){b.fromBufferAttribute(i,x),A.copy(b);const E=a[x];y.copy(E),y.sub(b.multiplyScalar(b.dot(E))).normalize(),M.crossVectors(A,E);const R=M.dot(l[x])<0?-1:1;o.setXYZW(x,y.x,y.y,y.z,R)}for(let x=0,E=v.length;x<E;++x){const I=v[x],R=I.start,U=I.count;for(let H=R,O=R+U;H<O;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,d=new V;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let _=0;_<u;_++)h[p++]=c[f++]}return new kn(h,u,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Hg=0;class Ro extends Ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Ua(),this.name="",this.type="Material",this.blending=ro,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xu,this.blendDst=Su,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(n.blending=this.blending),this.side!==Nr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xu&&(n.blendSrc=this.blendSrc),this.blendDst!==Su&&(n.blendDst=this.blendDst),this.blendEquation!==is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ji=new V,Wc=new V,qa=new V,vr=new V,Xc=new V,$a=new V,Yc=new V;class sf{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Wc.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(Wc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qa),a=vr.dot(this.direction),l=-vr.dot(qa),c=vr.lengthSq(),u=Math.abs(1-o*o);let d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=s*u,d>=0)if(h>=-p)if(h<=p){const g=1/u;d*=g,h*=g,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Wc).addScaledVector(qa,h),f}intersectSphere(e,t){Ji.subVectors(e.center,this.origin);const n=Ji.dot(this.direction),i=Ji.dot(Ji)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,n,i,s){Xc.subVectors(t,e),$a.subVectors(n,e),Yc.crossVectors(Xc,$a);let o=this.direction.dot(Yc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vr.subVectors(this.origin,e);const l=a*this.direction.dot($a.crossVectors(vr,$a));if(l<0)return null;const c=a*this.direction.dot(Xc.cross(vr));if(c<0||l+c>o)return null;const u=-a*vr.dot(Yc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class er extends Ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sd=new Et,Yr=new sf,Ka=new Ms,od=new V,Za=new V,ja=new V,Ja=new V,qc=new V,Qa=new V,ad=new V,el=new V;class kt extends Jt{constructor(e=new fn,t=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(qc.fromBufferAttribute(d,e),o?Qa.addScaledVector(qc,u):Qa.addScaledVector(qc.sub(t),u))}t.add(Qa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),Yr.copy(e.ray).recast(e.near),!(Ka.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Ka,od)===null||Yr.origin.distanceToSquared(od)>(e.far-e.near)**2))&&(sd.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(sd),!(n.boundingBox!==null&&Yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=h.length;p<g;p++){const m=h[p],_=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,b=y;M<b;M+=3){const A=a.getX(M),w=a.getX(M+1),x=a.getX(M+2);i=tl(this,_,e,n,c,u,d,A,w,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,_=g;m<_;m+=3){const v=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);i=tl(this,o,e,n,c,u,d,v,y,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=h.length;p<g;p++){const m=h[p],_=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,b=y;M<b;M+=3){const A=M,w=M+1,x=M+2;i=tl(this,_,e,n,c,u,d,A,w,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=p,_=g;m<_;m+=3){const v=m,y=m+1,M=m+2;i=tl(this,o,e,n,c,u,d,v,y,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Gg(r,e,t,n,i,s,o,a){let l;if(e.side===bn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Nr,a),l===null)return null;el.copy(a),el.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(el);return c<t.near||c>t.far?null:{distance:c,point:el.clone(),object:r}}function tl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Za),r.getVertexPosition(l,ja),r.getVertexPosition(c,Ja);const u=Gg(r,e,t,n,Za,ja,Ja,ad);if(u){const d=new V;wi.getBarycoord(ad,Za,ja,Ja,d),i&&(u.uv=wi.getInterpolatedAttribute(i,a,l,c,d,new $e)),s&&(u.uv1=wi.getInterpolatedAttribute(s,a,l,c,d,new $e)),o&&(u.normal=wi.getInterpolatedAttribute(o,a,l,c,d,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new V,materialIndex:0};wi.getNormal(Za,ja,Ja,h.normal),u.face=h,u.barycoord=d}return u}class em extends wn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=un,u=un,d,h){super(null,o,a,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ld extends kn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bs=new Et,cd=new Et,nl=[],ud=new Ss,Wg=new Et,Oo=new kt,Bo=new Ms;class Xg extends kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ld(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ss),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),ud.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(ud)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ms),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),Bo.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Oo.geometry=this.geometry,Oo.material=this.material,Oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(n),e.ray.intersectsSphere(Bo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Bs),cd.multiplyMatrices(n,Bs),Oo.matrixWorld=cd,Oo.raycast(e,nl);for(let o=0,a=nl.length;o<a;o++){const l=nl[o];l.instanceId=s,l.object=this,t.push(l)}nl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ld(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new em(new Float32Array(i*this.count),i,this.count,jh,Ai));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $c=new V,Yg=new V,qg=new Qe;class Jr{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$c.subVectors(n,t).cross(Yg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($c),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qg.getNormalMatrix(e),i=this.coplanarPoint($c).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Ms,$g=new $e(.5,.5),il=new V;class of{constructor(e=new Jr,t=new Jr,n=new Jr,i=new Jr,s=new Jr,o=new Jr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zi,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],p=s[8],g=s[9],m=s[10],_=s[11],v=s[12],y=s[13],M=s[14],b=s[15];if(i[0].setComponents(c-o,f-u,_-p,b-v).normalize(),i[1].setComponents(c+o,f+u,_+p,b+v).normalize(),i[2].setComponents(c+a,f+d,_+g,b+y).normalize(),i[3].setComponents(c-a,f-d,_-g,b-y).normalize(),n)i[4].setComponents(l,h,m,M).normalize(),i[5].setComponents(c-l,f-h,_-m,b-M).normalize();else if(i[4].setComponents(c-l,f-h,_-m,b-M).normalize(),t===zi)i[5].setComponents(c+l,f+h,_+m,b+M).normalize();else if(t===va)i[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const t=$g.distanceTo(e.center);return qr.radius=.7071067811865476+t,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(il.x=i.normal.x>0?e.max.x:e.min.x,il.y=i.normal.y>0?e.max.y:e.min.y,il.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ch extends Ro{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zl=new V,jl=new V,hd=new Et,zo=new sf,rl=new Ms,Kc=new V,fd=new V;class dd extends Jt{constructor(e=new fn,t=new ch){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Zl.fromBufferAttribute(t,i-1),jl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Zl.distanceTo(jl);e.setAttribute("lineDistance",new an(n,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(i),rl.radius+=s,e.ray.intersectsSphere(rl)===!1)return;hd.copy(i).invert(),zo.copy(e.ray).applyMatrix4(hd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){const _=u.getX(g),v=u.getX(g+1),y=sl(this,e,zo,l,_,v,g);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(p-1),m=u.getX(f),_=sl(this,e,zo,l,g,m,p-1);_&&t.push(_)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){const _=sl(this,e,zo,l,g,g+1,g);_&&t.push(_)}if(this.isLineLoop){const g=sl(this,e,zo,l,p-1,f,p-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sl(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Zl.fromBufferAttribute(a,i),jl.fromBufferAttribute(a,s),t.distanceSqToSegment(Zl,jl,Kc,fd)>n)return;Kc.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Kc);if(!(c<e.near||c>e.far))return{distance:c,point:fd.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}class Kg extends Ro{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pd=new Et,uh=new sf,ol=new Ms,al=new V;class Zg extends Jt{constructor(e=new fn,t=new Kg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(i),ol.radius+=s,e.ray.intersectsSphere(ol)===!1)return;pd.copy(i).invert(),uh.copy(e.ray).applyMatrix4(pd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=h,g=f;p<g;p++){const m=c.getX(p);al.fromBufferAttribute(d,m),md(al,m,l,i,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=h,g=f;p<g;p++)al.fromBufferAttribute(d,p),md(al,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function md(r,e,t,n,i,s,o){const a=uh.distanceSqToPoint(r);if(a<t){const l=new V;uh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class tm extends wn{constructor(e=[],t=_s,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sa extends wn{constructor(e,t,n=Xi,i,s,o,a=un,l=un,c,u=lr,d=1){if(u!==lr&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jg extends Sa{constructor(e,t=Xi,n=_s,i,s,o=un,a=un,l,c=lr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nm extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Na extends fn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(d,2));function p(g,m,_,v,y,M,b,A,w,x,E){const I=M/w,R=b/x,U=M/2,H=b/2,O=A/2,k=w+1,z=x+1;let N=0,$=0;const Q=new V;for(let P=0;P<z;P++){const ae=P*R-H;for(let ce=0;ce<k;ce++){const Ne=ce*I-U;Q[g]=Ne*v,Q[m]=ae*y,Q[_]=O,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[_]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(ce/w),d.push(1-P/x),N+=1}}for(let P=0;P<x;P++)for(let ae=0;ae<w;ae++){const ce=h+ae+k*P,Ne=h+ae+k*(P+1),ke=h+(ae+1)+k*(P+1),Ye=h+(ae+1)+k*P;l.push(ce,Ne,Ye),l.push(Ne,ke,Ye),$+=6}a.addGroup(f,$,E),f+=$,h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jg{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new $e:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new V,i=[],s=[],o=[],a=new V,l=new Et;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new V)}s[0]=new V,o[0]=new V;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(at(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(at(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Qg(r,e){const t=1-r;return t*t*e}function e0(r,e){return 2*(1-r)*r*e}function t0(r,e){return r*r*e}function Zc(r,e,t,n){return Qg(r,e)+e0(r,t)+t0(r,n)}class n0 extends Jg{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Zc(e,i.x,s.x,o.x),Zc(e,i.y,s.y,o.y),Zc(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pc extends fn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=t/l,f=[],p=[],g=[],m=[];for(let _=0;_<u;_++){const v=_*h-o;for(let y=0;y<c;y++){const M=y*d-s;p.push(M,-v,0),g.push(0,0,1),m.push(y/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){const y=v+c*_,M=v+c*(_+1),b=v+1+c*(_+1),A=v+1+c*_;f.push(y,M,A),f.push(M,b,A)}this.setIndex(f),this.setAttribute("position",new an(p,3)),this.setAttribute("normal",new an(g,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.width,e.height,e.widthSegments,e.heightSegments)}}class af extends fn{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let d=e;const h=(t-e)/i,f=new V,p=new $e;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const _=s+m/n*o;f.x=d*Math.cos(_),f.y=d*Math.sin(_),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let g=0;g<i;g++){const m=g*(n+1);for(let _=0;_<n;_++){const v=_+m,y=v,M=v+n+1,b=v+n+2,A=v+1;a.push(y,M,A),a.push(M,b,A)}}this.setIndex(a),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(c,3)),this.setAttribute("uv",new an(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class bi extends fn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new V,h=new V,f=[],p=[],g=[],m=[];for(let _=0;_<=n;_++){const v=[],y=_/n;let M=0;_===0&&o===0?M=.5/t:_===n&&l===Math.PI&&(M=-.5/t);for(let b=0;b<=t;b++){const A=b/t;d.x=-e*Math.cos(i+A*s)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(i+A*s)*Math.sin(o+y*a),p.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(A+M,1-y),v.push(c++)}u.push(v)}for(let _=0;_<n;_++)for(let v=0;v<t;v++){const y=u[_][v+1],M=u[_][v],b=u[_+1][v],A=u[_+1][v+1];(_!==0||o>0)&&f.push(y,M,A),(_!==n-1||l<Math.PI)&&f.push(M,b,A)}this.setIndex(f),this.setAttribute("position",new an(p,3)),this.setAttribute("normal",new an(g,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function xo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pn(r){const e={};for(let t=0;t<r.length;t++){const n=xo(r[t]);for(const i in n)e[i]=n[i]}return e}function i0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function im(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Ma={clone:xo,merge:Pn};var r0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ht extends Ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r0,this.fragmentShader=s0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=i0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rm extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class o0 extends Ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a0 extends Ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(_d(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!_d(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function _d(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class l0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const c0=new l0;class lf{constructor(e){this.manager=e!==void 0?e:c0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}lf.DEFAULT_MATERIAL_NAME="__DEFAULT";const zs=new WeakMap;class u0 extends lf{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=jc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=zs.get(o);d===void 0&&(d=[],zs.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=xa("img");function l(){u(),t&&t(this);const d=zs.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}zs.delete(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),jc.remove(`image:${e}`);const h=zs.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}zs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),jc.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class h0 extends lf{constructor(e){super(e)}load(e,t,n,i){const s=new wn,o=new u0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class cf extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Jc=new Et,gd=new V,vd=new V;class sm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new of,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(gd),vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vd),t.updateMatrixWorld(),Jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===va||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ll=new V,cl=new Co,Li=new V;class om extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ll,cl,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,cl,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ll,cl,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,cl,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new V,xd=new $e,Sd=new $e;class ei extends om{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lh*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,xd,Sd),t.subVectors(Sd,xd)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class f0 extends sm{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0}}class Md extends cf{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new f0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class mc extends om{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class d0 extends sm{constructor(){super(new mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p0 extends cf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new d0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class m0 extends cf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ks=-90,Vs=1;class _0 extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ei(ks,Vs,e,t);i.layers=this.layers,this.add(i);const s=new ei(ks,Vs,e,t);s.layers=this.layers,this.add(s);const o=new ei(ks,Vs,e,t);o.layers=this.layers,this.add(o);const a=new ei(ks,Vs,e,t);a.layers=this.layers,this.add(a);const l=new ei(ks,Vs,e,t);l.layers=this.layers,this.add(l);const c=new ei(ks,Vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===va)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class g0 extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class v0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=x0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function x0(){this._document.hidden===!1&&this.reset()}function yd(r,e,t,n){const i=S0(n);switch(t){case Yp:return r*e;case jh:return r*e/i.components*i.byteLength;case Jh:return r*e/i.components*i.byteLength;case vo:return r*e*2/i.components*i.byteLength;case Qh:return r*e*2/i.components*i.byteLength;case qp:return r*e*3/i.components*i.byteLength;case Ci:return r*e*4/i.components*i.byteLength;case ef:return r*e*4/i.components*i.byteLength;case Dl:case Ll:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Il:case Ul:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Du:case Iu:return Math.max(r,16)*Math.max(e,8)/4;case Pu:case Lu:return Math.max(r,8)*Math.max(e,8)/2;case Uu:case Nu:case Ou:case Bu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fu:case zu:case ku:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case qu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case $u:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ku:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ju:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ju:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Qu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case th:case nh:case ih:return Math.ceil(r/4)*Math.ceil(e/4)*16;case rh:case sh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case oh:case ah:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function S0(r){switch(r){case ni:case Hp:return{byteLength:1,components:1};case _a:case Gp:case ai:return{byteLength:2,components:1};case Kh:case Zh:return{byteLength:2,components:4};case Xi:case $h:case Ai:return{byteLength:4,components:1};case Wp:case Xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);function am(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function M0(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],g=d[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++h,d[h]=g)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const g=d[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
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
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
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
#endif`,R0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P0=`#ifdef USE_BATCHING
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
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N0=`#ifdef USE_IRIDESCENCE
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
#endif`,F0=`#ifdef USE_BUMPMAP
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
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,X0=`#define PI 3.141592653589793
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
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q0=`vec3 transformedNormal = objectNormal;
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
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ev=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
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
#endif`,iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cv=`#ifdef USE_GRADIENTMAP
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
}`,uv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dv=`uniform bool receiveShadow;
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
#endif`,pv=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xv=`PhysicalMaterial material;
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
#endif`,Sv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,Mv=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif`,yv=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dv=`#if defined( USE_POINTS_UV )
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
#endif`,Lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ov=`#ifdef USE_MORPHTARGETS
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
#endif`,Bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wv=`#ifdef USE_NORMALMAP
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
#endif`,Xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$v=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ox=`float getShadowMask() {
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
}`,ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
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
#endif`,cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ux=`#ifdef USE_SKINNING
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
#endif`,hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,px=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mx=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_x=`#ifdef USE_TRANSMISSION
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
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yx=`uniform sampler2D t2D;
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
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`#include <common>
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
}`,Cx=`#if DEPTH_PACKING == 3200
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
}`,Rx=`#define DISTANCE
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
}`,Px=`#define DISTANCE
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`uniform float scale;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Nx=`#include <common>
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Ox=`#define LAMBERT
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
}`,Bx=`#define LAMBERT
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
}`,zx=`#define MATCAP
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
}`,kx=`#define MATCAP
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
}`,Vx=`#define NORMAL
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
}`,Hx=`#define NORMAL
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
}`,Gx=`#define PHONG
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
}`,Wx=`#define PHONG
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
}`,Xx=`#define STANDARD
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
}`,Yx=`#define STANDARD
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
}`,qx=`#define TOON
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
}`,$x=`#define TOON
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
}`,Kx=`uniform float size;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,jx=`#include <common>
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
}`,Jx=`uniform vec3 color;
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
}`,Qx=`uniform float rotation;
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
}`,eS=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:y0,alphahash_pars_fragment:E0,alphamap_fragment:T0,alphamap_pars_fragment:b0,alphatest_fragment:w0,alphatest_pars_fragment:A0,aomap_fragment:C0,aomap_pars_fragment:R0,batching_pars_vertex:P0,batching_vertex:D0,begin_vertex:L0,beginnormal_vertex:I0,bsdfs:U0,iridescence_fragment:N0,bumpmap_pars_fragment:F0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:k0,color_fragment:V0,color_pars_fragment:H0,color_pars_vertex:G0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:q0,displacementmap_pars_vertex:$0,displacementmap_vertex:K0,emissivemap_fragment:Z0,emissivemap_pars_fragment:j0,colorspace_fragment:J0,colorspace_pars_fragment:Q0,envmap_fragment:ev,envmap_common_pars_fragment:tv,envmap_pars_fragment:nv,envmap_pars_vertex:iv,envmap_physical_pars_fragment:pv,envmap_vertex:rv,fog_vertex:sv,fog_pars_vertex:ov,fog_fragment:av,fog_pars_fragment:lv,gradientmap_pars_fragment:cv,lightmap_pars_fragment:uv,lights_lambert_fragment:hv,lights_lambert_pars_fragment:fv,lights_pars_begin:dv,lights_toon_fragment:mv,lights_toon_pars_fragment:_v,lights_phong_fragment:gv,lights_phong_pars_fragment:vv,lights_physical_fragment:xv,lights_physical_pars_fragment:Sv,lights_fragment_begin:Mv,lights_fragment_maps:yv,lights_fragment_end:Ev,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:bv,logdepthbuf_pars_vertex:wv,logdepthbuf_vertex:Av,map_fragment:Cv,map_pars_fragment:Rv,map_particle_fragment:Pv,map_particle_pars_fragment:Dv,metalnessmap_fragment:Lv,metalnessmap_pars_fragment:Iv,morphinstance_vertex:Uv,morphcolor_vertex:Nv,morphnormal_vertex:Fv,morphtarget_pars_vertex:Ov,morphtarget_vertex:Bv,normal_fragment_begin:zv,normal_fragment_maps:kv,normal_pars_fragment:Vv,normal_pars_vertex:Hv,normal_vertex:Gv,normalmap_pars_fragment:Wv,clearcoat_normal_fragment_begin:Xv,clearcoat_normal_fragment_maps:Yv,clearcoat_pars_fragment:qv,iridescence_pars_fragment:$v,opaque_fragment:Kv,packing:Zv,premultiplied_alpha_fragment:jv,project_vertex:Jv,dithering_fragment:Qv,dithering_pars_fragment:ex,roughnessmap_fragment:tx,roughnessmap_pars_fragment:nx,shadowmap_pars_fragment:ix,shadowmap_pars_vertex:rx,shadowmap_vertex:sx,shadowmask_pars_fragment:ox,skinbase_vertex:ax,skinning_pars_vertex:lx,skinning_vertex:cx,skinnormal_vertex:ux,specularmap_fragment:hx,specularmap_pars_fragment:fx,tonemapping_fragment:dx,tonemapping_pars_fragment:px,transmission_fragment:mx,transmission_pars_fragment:_x,uv_pars_fragment:gx,uv_pars_vertex:vx,uv_vertex:xx,worldpos_vertex:Sx,background_vert:Mx,background_frag:yx,backgroundCube_vert:Ex,backgroundCube_frag:Tx,cube_vert:bx,cube_frag:wx,depth_vert:Ax,depth_frag:Cx,distance_vert:Rx,distance_frag:Px,equirect_vert:Dx,equirect_frag:Lx,linedashed_vert:Ix,linedashed_frag:Ux,meshbasic_vert:Nx,meshbasic_frag:Fx,meshlambert_vert:Ox,meshlambert_frag:Bx,meshmatcap_vert:zx,meshmatcap_frag:kx,meshnormal_vert:Vx,meshnormal_frag:Hx,meshphong_vert:Gx,meshphong_frag:Wx,meshphysical_vert:Xx,meshphysical_frag:Yx,meshtoon_vert:qx,meshtoon_frag:$x,points_vert:Kx,points_frag:Zx,shadow_vert:jx,shadow_frag:Jx,sprite_vert:Qx,sprite_frag:eS},_e={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Fi={basic:{uniforms:Pn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Pn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Pn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Pn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Pn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new et(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Pn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Pn([_e.points,_e.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Pn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Pn([_e.common,_e.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Pn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Pn([_e.sprite,_e.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Pn([_e.common,_e.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Pn([_e.lights,_e.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Fi.physical={uniforms:Pn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ul={r:0,b:0,g:0},$r=new cr,tS=new Et;function nS(r,e,t,n,i,s){const o=new et(0);let a=i===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const M=v.backgroundBlurriness>0;y=e.get(y,M)}return y}function p(v){let y=!1;const M=f(v);M===null?m(o,a):M&&M.isColor&&(m(M,1),y=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(v,y){const M=f(y);M&&(M.isCubeTexture||M.mapping===dc)?(c===void 0&&(c=new kt(new Na(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:xo(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),$r.copy(y.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tS.makeRotationFromEuler($r)),c.material.toneMapped=ut.getTransfer(M.colorSpace)!==_t,(u!==M||d!==M.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new kt(new pc(2,2),new Ht({name:"BackgroundMaterial",uniforms:xo(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ut.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(ul,im(r)),t.buffers.color.setClear(ul.r,ul.g,ul.b,y,s)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:g,dispose:_}}function iS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(R,U,H,O,k){let z=!1;const N=d(R,O,H,U);s!==N&&(s=N,c(s.object)),z=f(R,O,H,k),z&&p(R,O,H,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,M(R,U,H,O),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(R){return r.bindVertexArray(R)}function u(R){return r.deleteVertexArray(R)}function d(R,U,H,O){const k=O.wireframe===!0;let z=n[U.id];z===void 0&&(z={},n[U.id]=z);const N=R.isInstancedMesh===!0?R.id:0;let $=z[N];$===void 0&&($={},z[N]=$);let Q=$[H.id];Q===void 0&&(Q={},$[H.id]=Q);let P=Q[k];return P===void 0&&(P=h(l()),Q[k]=P),P}function h(R){const U=[],H=[],O=[];for(let k=0;k<t;k++)U[k]=0,H[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:O,object:R,attributes:{},index:null}}function f(R,U,H,O){const k=s.attributes,z=U.attributes;let N=0;const $=H.getAttributes();for(const Q in $)if($[Q].location>=0){const ae=k[Q];let ce=z[Q];if(ce===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ae===void 0||ae.attribute!==ce||ce&&ae.data!==ce.data)return!0;N++}return s.attributesNum!==N||s.index!==O}function p(R,U,H,O){const k={},z=U.attributes;let N=0;const $=H.getAttributes();for(const Q in $)if($[Q].location>=0){let ae=z[Q];ae===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));const ce={};ce.attribute=ae,ae&&ae.data&&(ce.data=ae.data),k[Q]=ce,N++}s.attributes=k,s.attributesNum=N,s.index=O}function g(){const R=s.newAttributes;for(let U=0,H=R.length;U<H;U++)R[U]=0}function m(R){_(R,0)}function _(R,U){const H=s.newAttributes,O=s.enabledAttributes,k=s.attributeDivisors;H[R]=1,O[R]===0&&(r.enableVertexAttribArray(R),O[R]=1),k[R]!==U&&(r.vertexAttribDivisor(R,U),k[R]=U)}function v(){const R=s.newAttributes,U=s.enabledAttributes;for(let H=0,O=U.length;H<O;H++)U[H]!==R[H]&&(r.disableVertexAttribArray(H),U[H]=0)}function y(R,U,H,O,k,z,N){N===!0?r.vertexAttribIPointer(R,U,H,k,z):r.vertexAttribPointer(R,U,H,O,k,z)}function M(R,U,H,O){g();const k=O.attributes,z=H.getAttributes(),N=U.defaultAttributeValues;for(const $ in z){const Q=z[$];if(Q.location>=0){let P=k[$];if(P===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(P=R.instanceColor)),P!==void 0){const ae=P.normalized,ce=P.itemSize,Ne=e.get(P);if(Ne===void 0)continue;const ke=Ne.buffer,Ye=Ne.type,Z=Ne.bytesPerElement,ee=Ye===r.INT||Ye===r.UNSIGNED_INT||P.gpuType===$h;if(P.isInterleavedBufferAttribute){const re=P.data,Le=re.stride,Ie=P.offset;if(re.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Q.locationSize;Ce++)_(Q.location+Ce,re.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ce=0;Ce<Q.locationSize;Ce++)m(Q.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let Ce=0;Ce<Q.locationSize;Ce++)y(Q.location+Ce,ce/Q.locationSize,Ye,ae,Le*Z,(Ie+ce/Q.locationSize*Ce)*Z,ee)}else{if(P.isInstancedBufferAttribute){for(let re=0;re<Q.locationSize;re++)_(Q.location+re,P.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let re=0;re<Q.locationSize;re++)m(Q.location+re);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let re=0;re<Q.locationSize;re++)y(Q.location+re,ce/Q.locationSize,Ye,ae,ce*Z,ce/Q.locationSize*re*Z,ee)}}else if(N!==void 0){const ae=N[$];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(Q.location,ae);break;case 3:r.vertexAttrib3fv(Q.location,ae);break;case 4:r.vertexAttrib4fv(Q.location,ae);break;default:r.vertexAttrib1fv(Q.location,ae)}}}}v()}function b(){E();for(const R in n){const U=n[R];for(const H in U){const O=U[H];for(const k in O){const z=O[k];for(const N in z)u(z[N].object),delete z[N];delete O[k]}}delete n[R]}}function A(R){if(n[R.id]===void 0)return;const U=n[R.id];for(const H in U){const O=U[H];for(const k in O){const z=O[k];for(const N in z)u(z[N].object),delete z[N];delete O[k]}}delete n[R.id]}function w(R){for(const U in n){const H=n[U];for(const O in H){const k=H[O];if(k[R.id]===void 0)continue;const z=k[R.id];for(const N in z)u(z[N].object),delete z[N];delete k[R.id]}}}function x(R){for(const U in n){const H=n[U],O=R.isInstancedMesh===!0?R.id:0,k=H[O];if(k!==void 0){for(const z in k){const N=k[z];for(const $ in N)u(N[$].object),delete N[$];delete k[z]}delete H[O],Object.keys(H).length===0&&delete n[U]}}}function E(){I(),o=!0,s!==i&&(s=i,c(s.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function rS(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let p=0;p<d;p++)f+=u[p];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g]*h[g];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Ci&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const x=w===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ni&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ai&&!x)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,maxSamples:b,samples:A}}function oS(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Jr,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,_=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,y=v*4;let M=_.clippingState||null;l.value=M,M=u(p,h,y,f);for(let b=0;b!==y;++b)M[b]=t[b];_.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,p!==!0||m===null){const _=f+g*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<_)&&(m=new Float32Array(_));for(let y=0,M=f;y!==g;++y,M+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}const br=4,Ed=[.125,.215,.35,.446,.526,.582],rs=20,aS=256,ko=new mc,Td=new et;let Qc=null,eu=0,tu=0,nu=!1;const lS=new V;class bd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=lS}=s;Qc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,eu,tu),this._renderer.xr.enabled=nu,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:ai,format:Ci,colorSpace:Fr,depthBuffer:!1},i=wd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wd(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cS(s)),this._blurMaterial=hS(s,e,t),this._ggxMaterial=uS(s,e,t)}return i}_compileMaterial(e){const t=new kt(new fn,e);this._renderer.compile(t,ko)}_sceneToCubeUV(e,t,n,i,s){const l=new ei(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Td),d.toneMapping=Gi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kt(new Na,new er({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let _=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,_=!0):(m.color.copy(Td),_=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const b=this._cubeSize;Hs(i,M*b,y>2?b:0,b,b),d.setRenderTarget(i),_&&d.render(g,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_s||e.mapping===go;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ad());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Hs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ko)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:p}=this,g=this._sizeLods[n],m=3*g*(n>p-br?n-p+br:0),_=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Hs(s,m,_,3*g,2*g),i.setRenderTarget(s),i.render(a,ko),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Hs(e,m,_,3*g,2*g),i.setRenderTarget(e),i.render(a,ko)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&dt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*rs-1),g=s/p,m=isFinite(s)?1+Math.floor(u*g):rs;m>rs&&Xe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const _=[];let v=0;for(let w=0;w<rs;++w){const x=w/g,E=Math.exp(-x*x/2);_.push(E),w===0?v+=E:w<m&&(v+=2*E)}for(let w=0;w<_.length;w++)_[w]=_[w]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=p,h.mipInt.value=y-n;const M=this._sizeLods[i],b=3*M*(i>y-br?i-y+br:0),A=4*(this._cubeSize-M);Hs(t,b,A,3*M,2*M),l.setRenderTarget(t),l.render(d,ko)}}function cS(r){const e=[],t=[],n=[];let i=r;const s=r-br+1+Ed.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-br?l=Ed[o-r+br-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,g=3,m=2,_=1,v=new Float32Array(g*p*f),y=new Float32Array(m*p*f),M=new Float32Array(_*p*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,x=A>2?0:-1,E=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];v.set(E,g*p*A),y.set(h,m*p*A);const I=[A,A,A,A,A,A];M.set(I,_*p*A)}const b=new fn;b.setAttribute("position",new kn(v,g)),b.setAttribute("uv",new kn(y,m)),b.setAttribute("faceIndex",new kn(M,_)),n.push(new kt(b,null)),i>br&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function wd(r,e,t){const n=new zn(r,e,t);return n.texture.mapping=dc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function uS(r,e,t){return new Ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function hS(r,e,t){const n=new Float32Array(rs),i=new V(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Ad(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Cd(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}class lm extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new tm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Na(5,5,5),s=new Ht({name:"CubemapFromEquirect",uniforms:xo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:Hi});s.uniforms.tEquirect.value=t;const o=new kt(i,s),a=t.minFilter;return t.minFilter===ss&&(t.minFilter=Tn),new _0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}function fS(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===yc||f===Ec)if(e.has(h)){const p=e.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new lm(p.height);return g.fromEquirectangularTexture(r,h),e.set(h,g),h.addEventListener("dispose",c),a(g.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,p=f===yc||f===Ec,g=f===_s||f===go;if(p||g){let m=t.get(h);const _=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new bd(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return p&&v&&v.height>0||g&&v&&l(v)?(n===null&&(n=new bd(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===yc?h.mapping=_s:f===Ec&&(h.mapping=go),h}function l(h){let f=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function dS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Kl("WebGLRenderer: "+n+" extension not supported."),i}}}function pS(r,e,t,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],r.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,p=d.attributes.position;let g=0;if(p===void 0)return;if(f!==null){const v=f.array;g=f.version;for(let y=0,M=v.length;y<M;y+=3){const b=v[y+0],A=v[y+1],w=v[y+2];h.push(b,A,A,w,w,b)}}else{const v=p.array;g=p.version;for(let y=0,M=v.length/3-1;y<M;y+=3){const b=y+0,A=y+1,w=y+2;h.push(b,A,A,w,w,b)}}const m=new(p.count>=65535?Qp:Jp)(h,1);m.version=g;const _=s.get(d);_&&e.remove(_),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function mS(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,h*o,p),t.update(f,n,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_];t.update(m,n,1)}function d(h,f,p,g){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h.length;_++)c(h[_]/o,f[_],g[_]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,g,0,p);let _=0;for(let v=0;v<p;v++)_+=f[v]*g[v];t.update(_,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function _S(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:dt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function gS(r,e,t){const n=new WeakMap,i=new Ft;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),p===!0&&(y=2),g===!0&&(y=3);let M=a.attributes.position.count*y,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*b*4*d),w=new Kp(A,M,b,d);w.type=Ai,w.needsUpdate=!0;const x=y*4;for(let I=0;I<d;I++){const R=m[I],U=_[I],H=v[I],O=M*b*4*I;for(let k=0;k<R.count;k++){const z=k*x;f===!0&&(i.fromBufferAttribute(R,k),A[O+z+0]=i.x,A[O+z+1]=i.y,A[O+z+2]=i.z,A[O+z+3]=0),p===!0&&(i.fromBufferAttribute(U,k),A[O+z+4]=i.x,A[O+z+5]=i.y,A[O+z+6]=i.z,A[O+z+7]=0),g===!0&&(i.fromBufferAttribute(H,k),A[O+z+8]=i.x,A[O+z+9]=i.y,A[O+z+10]=i.z,A[O+z+11]=H.itemSize===4?i.w:1)}}h={count:d,texture:w,size:new $e(M,b)},n.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function vS(r,e,t,n,i){let s=new WeakMap;function o(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const xS={[Hh]:"LINEAR_TONE_MAPPING",[fc]:"REINHARD_TONE_MAPPING",[Gh]:"CINEON_TONE_MAPPING",[Wh]:"ACES_FILMIC_TONE_MAPPING",[Yh]:"AGX_TONE_MAPPING",[qh]:"NEUTRAL_TONE_MAPPING",[Xh]:"CUSTOM_TONE_MAPPING"};function SS(r,e,t,n,i){const s=new zn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new zn(e,t,{type:ai,depthBuffer:!1,stencilBuffer:!1}),a=new fn;a.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new an([0,2,0,0,2,0],2));const l=new rm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new kt(a,l),u=new mc(-1,1,1,-1,0,1);let d=null,h=null,f=!1,p,g=null,m=[],_=!1;this.setSize=function(v,y){s.setSize(v,y),o.setSize(v,y);for(let M=0;M<m.length;M++){const b=m[M];b.setSize&&b.setSize(v,y)}},this.setEffects=function(v){m=v,_=m.length>0&&m[0].isRenderPass===!0;const y=s.width,M=s.height;for(let b=0;b<m.length;b++){const A=m[b];A.setSize&&A.setSize(y,M)}},this.begin=function(v,y){if(f||v.toneMapping===Gi&&m.length===0)return!1;if(g=y,y!==null){const M=y.width,b=y.height;(s.width!==M||s.height!==b)&&this.setSize(M,b)}return _===!1&&v.setRenderTarget(s),p=v.toneMapping,v.toneMapping=Gi,!0},this.hasRenderPass=function(){return _},this.end=function(v,y){v.toneMapping=p,f=!0;let M=s,b=o;for(let A=0;A<m.length;A++){const w=m[A];if(w.enabled!==!1&&(w.render(v,b,M,y),w.needsSwap!==!1)){const x=M;M=b,b=x}}if(d!==v.outputColorSpace||h!==v.toneMapping){d=v.outputColorSpace,h=v.toneMapping,l.defines={},ut.getTransfer(d)===_t&&(l.defines.SRGB_TRANSFER="");const A=xS[h];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(g),v.render(c,u),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const cm=new wn,hh=new Sa(1,1),um=new Kp,hm=new Pg,fm=new tm,Rd=[],Pd=[],Dd=new Float32Array(16),Ld=new Float32Array(9),Id=new Float32Array(4);function Po(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Rd[i];if(s===void 0&&(s=new Float32Array(i),Rd[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function gc(r,e){let t=Pd[e];t===void 0&&(t=new Int32Array(e),Pd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function MS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function yS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function ES(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function TS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function bS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Id.set(n),r.uniformMatrix2fv(this.addr,!1,Id),en(t,n)}}function wS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Ld.set(n),r.uniformMatrix3fv(this.addr,!1,Ld),en(t,n)}}function AS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Dd.set(n),r.uniformMatrix4fv(this.addr,!1,Dd),en(t,n)}}function CS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function RS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function PS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function DS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function LS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function IS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function US(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function NS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function FS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(hh.compareFunction=t.isReversedDepthBuffer()?nf:tf,s=hh):s=cm,t.setTexture2D(e||s,i)}function OS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hm,i)}function BS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fm,i)}function zS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||um,i)}function kS(r){switch(r){case 5126:return MS;case 35664:return yS;case 35665:return ES;case 35666:return TS;case 35674:return bS;case 35675:return wS;case 35676:return AS;case 5124:case 35670:return CS;case 35667:case 35671:return RS;case 35668:case 35672:return PS;case 35669:case 35673:return DS;case 5125:return LS;case 36294:return IS;case 36295:return US;case 36296:return NS;case 35678:case 36198:case 36298:case 36306:case 35682:return FS;case 35679:case 36299:case 36307:return OS;case 35680:case 36300:case 36308:case 36293:return BS;case 36289:case 36303:case 36311:case 36292:return zS}}function VS(r,e){r.uniform1fv(this.addr,e)}function HS(r,e){const t=Po(e,this.size,2);r.uniform2fv(this.addr,t)}function GS(r,e){const t=Po(e,this.size,3);r.uniform3fv(this.addr,t)}function WS(r,e){const t=Po(e,this.size,4);r.uniform4fv(this.addr,t)}function XS(r,e){const t=Po(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function YS(r,e){const t=Po(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function qS(r,e){const t=Po(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function $S(r,e){r.uniform1iv(this.addr,e)}function KS(r,e){r.uniform2iv(this.addr,e)}function ZS(r,e){r.uniform3iv(this.addr,e)}function jS(r,e){r.uniform4iv(this.addr,e)}function JS(r,e){r.uniform1uiv(this.addr,e)}function QS(r,e){r.uniform2uiv(this.addr,e)}function eM(r,e){r.uniform3uiv(this.addr,e)}function tM(r,e){r.uniform4uiv(this.addr,e)}function nM(r,e,t){const n=this.cache,i=e.length,s=gc(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=hh:o=cm;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function iM(r,e,t){const n=this.cache,i=e.length,s=gc(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||hm,s[o])}function rM(r,e,t){const n=this.cache,i=e.length,s=gc(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||fm,s[o])}function sM(r,e,t){const n=this.cache,i=e.length,s=gc(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||um,s[o])}function oM(r){switch(r){case 5126:return VS;case 35664:return HS;case 35665:return GS;case 35666:return WS;case 35674:return XS;case 35675:return YS;case 35676:return qS;case 5124:case 35670:return $S;case 35667:case 35671:return KS;case 35668:case 35672:return ZS;case 35669:case 35673:return jS;case 5125:return JS;case 36294:return QS;case 36295:return eM;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return sM}}class aM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kS(t.type)}}class lM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oM(t.type)}}class cM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const iu=/(\w+)(\])?(\[|\.)?/g;function Ud(r,e){r.seq.push(e),r.map[e.id]=e}function uM(r,e,t){const n=r.name,i=n.length;for(iu.lastIndex=0;;){const s=iu.exec(n),o=iu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ud(t,c===void 0?new aM(a,r,e):new lM(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new cM(a),Ud(t,d)),t=d}}}class Nl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);uM(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Nd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const hM=37297;let fM=0;function dM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Fd=new Qe;function pM(r){ut._getMatrix(Fd,ut.workingColorSpace,r);const e=`mat3( ${Fd.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(r)){case $l:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Od(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+dM(r.getShaderSource(e),a)}else return s}function mM(r,e){const t=pM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const _M={[Hh]:"Linear",[fc]:"Reinhard",[Gh]:"Cineon",[Wh]:"ACESFilmic",[Yh]:"AgX",[qh]:"Neutral",[Xh]:"Custom"};function gM(r,e){const t=_M[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hl=new V;function vM(){ut.getLuminanceCoefficients(hl);const r=hl.x.toFixed(4),e=hl.y.toFixed(4),t=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function SM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function MM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function qo(r){return r!==""}function Bd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yM=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(r){return r.replace(yM,TM)}const EM=new Map;function TM(r,e){let t=tt[e];if(t===void 0){const n=EM.get(e);if(n!==void 0)t=tt[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fh(t)}const bM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kd(r){return r.replace(bM,wM)}function wM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vd(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const AM={[Pl]:"SHADOWMAP_TYPE_PCF",[Yo]:"SHADOWMAP_TYPE_VSM"};function CM(r){return AM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RM={[_s]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE",[dc]:"ENVMAP_TYPE_CUBE_UV"};function PM(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":RM[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const DM={[go]:"ENVMAP_MODE_REFRACTION"};function LM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":DM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IM={[kp]:"ENVMAP_BLENDING_MULTIPLY",[ag]:"ENVMAP_BLENDING_MIX",[lg]:"ENVMAP_BLENDING_ADD"};function UM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":IM[r.combine]||"ENVMAP_BLENDING_NONE"}function NM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function FM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=CM(t),c=PM(t),u=LM(t),d=UM(t),h=NM(t),f=xM(t),p=SM(s),g=i.createProgram();let m,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(qo).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(qo).join(`
`),_.length>0&&(_+=`
`)):(m=[Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),_=[Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?tt.tonemapping_pars_fragment:"",t.toneMapping!==Gi?gM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,mM("linearToOutputTexel",t.outputColorSpace),vM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),o=fh(o),o=Bd(o,t),o=zd(o,t),a=fh(a),a=Bd(a,t),a=zd(a,t),o=kd(o),a=kd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+m+o,M=v+_+a,b=Nd(i,i.VERTEX_SHADER,y),A=Nd(i,i.FRAGMENT_SHADER,M);i.attachShader(g,b),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(R){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(g)||"",H=i.getShaderInfoLog(b)||"",O=i.getShaderInfoLog(A)||"",k=U.trim(),z=H.trim(),N=O.trim();let $=!0,Q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,A);else{const P=Od(i,b,"vertex"),ae=Od(i,A,"fragment");dt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+P+`
`+ae)}else k!==""?Xe("WebGLProgram: Program Info Log:",k):(z===""||N==="")&&(Q=!1);Q&&(R.diagnostics={runnable:$,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:N,prefix:_}})}i.deleteShader(b),i.deleteShader(A),x=new Nl(i,g),E=MM(i,g)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(g,hM)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=A,this}let OM=0;class BM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zM(e),t.set(e,n)),n}}class zM{constructor(e){this.id=OM++,this.code=e,this.usedTimes=0}}function kM(r,e,t,n,i,s){const o=new Zp,a=new BM,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,E,I,R,U){const H=R.fog,O=U.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,N=e.get(x.envMap||k,z),$=N&&N.mapping===dc?N.image.height:null,Q=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const P=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ae=P!==void 0?P.length:0;let ce=0;O.morphAttributes.position!==void 0&&(ce=1),O.morphAttributes.normal!==void 0&&(ce=2),O.morphAttributes.color!==void 0&&(ce=3);let Ne,ke,Ye,Z;if(Q){const ve=Fi[Q];Ne=ve.vertexShader,ke=ve.fragmentShader}else Ne=x.vertexShader,ke=x.fragmentShader,a.update(x),Ye=a.getVertexShaderID(x),Z=a.getFragmentShaderID(x);const ee=r.getRenderTarget(),re=r.state.buffers.depth.getReversed(),Le=U.isInstancedMesh===!0,Ie=U.isBatchedMesh===!0,Ce=!!x.map,ct=!!x.matcap,Ee=!!N,ze=!!x.aoMap,Ze=!!x.lightMap,Be=!!x.bumpMap,X=!!x.normalMap,L=!!x.displacementMap,pt=!!x.emissiveMap,nt=!!x.metalnessMap,Ve=!!x.roughnessMap,xe=x.anisotropy>0,C=x.clearcoat>0,S=x.dispersion>0,F=x.iridescence>0,j=x.sheen>0,J=x.transmission>0,q=xe&&!!x.anisotropyMap,ge=C&&!!x.clearcoatMap,oe=C&&!!x.clearcoatNormalMap,Re=C&&!!x.clearcoatRoughnessMap,Se=F&&!!x.iridescenceMap,ne=F&&!!x.iridescenceThicknessMap,se=j&&!!x.sheenColorMap,Me=j&&!!x.sheenRoughnessMap,Te=!!x.specularMap,fe=!!x.specularColorMap,He=!!x.specularIntensityMap,D=J&&!!x.transmissionMap,le=J&&!!x.thicknessMap,ie=!!x.gradientMap,de=!!x.alphaMap,te=x.alphaTest>0,K=!!x.alphaHash,ye=!!x.extensions;let Fe=Gi;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=r.toneMapping);const ht={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Ne,fragmentShader:ke,defines:x.defines,customVertexShaderID:Ye,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ie,batchingColor:Ie&&U._colorsTexture!==null,instancing:Le,instancingColor:Le&&U.instanceColor!==null,instancingMorph:Le&&U.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Fr,alphaToCoverage:!!x.alphaToCoverage,map:Ce,matcap:ct,envMap:Ee,envMapMode:Ee&&N.mapping,envMapCubeUVHeight:$,aoMap:ze,lightMap:Ze,bumpMap:Be,normalMap:X,displacementMap:L,emissiveMap:pt,normalMapObjectSpace:X&&x.normalMapType===fg,normalMapTangentSpace:X&&x.normalMapType===hg,metalnessMap:nt,roughnessMap:Ve,anisotropy:xe,anisotropyMap:q,clearcoat:C,clearcoatMap:ge,clearcoatNormalMap:oe,clearcoatRoughnessMap:Re,dispersion:S,iridescence:F,iridescenceMap:Se,iridescenceThicknessMap:ne,sheen:j,sheenColorMap:se,sheenRoughnessMap:Me,specularMap:Te,specularColorMap:fe,specularIntensityMap:He,transmission:J,transmissionMap:D,thicknessMap:le,gradientMap:ie,opaque:x.transparent===!1&&x.blending===ro&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:te,alphaHash:K,combine:x.combine,mapUv:Ce&&p(x.map.channel),aoMapUv:ze&&p(x.aoMap.channel),lightMapUv:Ze&&p(x.lightMap.channel),bumpMapUv:Be&&p(x.bumpMap.channel),normalMapUv:X&&p(x.normalMap.channel),displacementMapUv:L&&p(x.displacementMap.channel),emissiveMapUv:pt&&p(x.emissiveMap.channel),metalnessMapUv:nt&&p(x.metalnessMap.channel),roughnessMapUv:Ve&&p(x.roughnessMap.channel),anisotropyMapUv:q&&p(x.anisotropyMap.channel),clearcoatMapUv:ge&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:se&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&p(x.sheenRoughnessMap.channel),specularMapUv:Te&&p(x.specularMap.channel),specularColorMapUv:fe&&p(x.specularColorMap.channel),specularIntensityMapUv:He&&p(x.specularIntensityMap.channel),transmissionMapUv:D&&p(x.transmissionMap.channel),thicknessMapUv:le&&p(x.thicknessMap.channel),alphaMapUv:de&&p(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(X||xe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(Ce||de),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&X===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:U.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ce,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:pt&&x.emissiveMap.isVideoTexture===!0&&ut.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Oi,flipSided:x.side===bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(_(E,x),v(E,x),E.push(r.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function _(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),x.push(o.mask)}function y(x){const E=f[x.type];let I;if(E){const R=Fi[E];I=Ma.clone(R.uniforms)}else I=x.uniforms;return I}function M(x,E){let I=u.get(E);return I!==void 0?++I.usedTimes:(I=new FM(r,E,x,i),c.push(I),u.set(E,I)),I}function b(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:w}}function VM(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function HM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Hd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Gd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,g,m,_){let v=r[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:g,renderOrder:h.renderOrder,z:m,group:_},r[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=p,v.materialVariant=o(h),v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=m,v.group=_),e++,v}function l(h,f,p,g,m,_){const v=a(h,f,p,g,m,_);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):t.push(v)}function c(h,f,p,g,m,_){const v=a(h,f,p,g,m,_);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function u(h,f){t.length>1&&t.sort(h||HM),n.length>1&&n.sort(f||Hd),i.length>1&&i.sort(f||Hd)}function d(){for(let h=e,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function GM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Gd,r.set(n,[o])):i>=s.length?(o=new Gd,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function WM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new et};break;case"SpotLight":t={position:new V,direction:new V,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function XM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let YM=0;function qM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function $M(r){const e=new WM,t=XM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const i=new V,s=new Et,o=new Et;function a(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,p=0,g=0,m=0,_=0,v=0,y=0,M=0,b=0,A=0,w=0;c.sort(qM);for(let E=0,I=c.length;E<I;E++){const R=c[E],U=R.color,H=R.intensity,O=R.distance;let k=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===vo?k=R.shadow.map.texture:k=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=U.r*H,d+=U.g*H,h+=U.b*H;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],H);w++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const N=R.shadow,$=t.get(R);$.shadowIntensity=N.intensity,$.shadowBias=N.bias,$.shadowNormalBias=N.normalBias,$.shadowRadius=N.radius,$.shadowMapSize=N.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=z,f++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(U).multiplyScalar(H),z.distance=O,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[g]=z;const N=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,N.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[g]=N.matrix,R.castShadow){const $=t.get(R);$.shadowIntensity=N.intensity,$.shadowBias=N.bias,$.shadowNormalBias=N.normalBias,$.shadowRadius=N.radius,$.shadowMapSize=N.mapSize,n.spotShadow[g]=$,n.spotShadowMap[g]=k,M++}g++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(U).multiplyScalar(H),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=z,m++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const N=R.shadow,$=t.get(R);$.shadowIntensity=N.intensity,$.shadowBias=N.bias,$.shadowNormalBias=N.normalBias,$.shadowRadius=N.radius,$.shadowMapSize=N.mapSize,$.shadowCameraNear=N.camera.near,$.shadowCameraFar=N.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=R.shadow.matrix,y++}n.point[p]=z,p++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(H),z.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[_]=z,_++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==g||x.rectAreaLength!==m||x.hemiLength!==_||x.numDirectionalShadows!==v||x.numPointShadows!==y||x.numSpotShadows!==M||x.numSpotMaps!==b||x.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=p,n.hemi.length=_,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+b-A,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,x.directionalLength=f,x.pointLength=p,x.spotLength=g,x.rectAreaLength=m,x.hemiLength=_,x.numDirectionalShadows=v,x.numPointShadows=y,x.numSpotShadows=M,x.numSpotMaps=b,x.numLightProbes=w,n.version=YM++)}function l(c,u){let d=0,h=0,f=0,p=0,g=0;const m=u.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const y=c[_];if(y.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Wd(r){const e=new $M(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function KM(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Wd(r),e.set(i,[a])):s>=o.length?(a=new Wd(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const ZM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jM=`uniform sampler2D shadow_pass;
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
}`,JM=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],QM=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Xd=new Et,Vo=new V,ru=new V;function ey(r,e,t){let n=new of;const i=new $e,s=new $e,o=new Ft,a=new o0,l=new a0,c={},u=t.maxTextureSize,d={[Nr]:bn,[bn]:Nr,[Oi]:Oi},h=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:ZM,fragmentShader:jM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new fn;p.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new kt(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let _=this.type;this.render=function(A,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===H_&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pl);const E=r.getRenderTarget(),I=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Hi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=_!==this.type;H&&w.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(k=>k.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,k=A.length;O<k;O++){const z=A[O],N=z.shadow;if(N===void 0){Xe("WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const $=N.getFrameExtents();i.multiply($),s.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,N.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,N.mapSize.y=s.y));const Q=r.state.buffers.depth.getReversed();if(N.camera._reversedDepth=Q,N.map===null||H===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Yo){if(z.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new zn(i.x,i.y,{format:vo,type:ai,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),N.map.texture.name=z.name+".shadowMap",N.map.depthTexture=new Sa(i.x,i.y,Ai),N.map.depthTexture.name=z.name+".shadowMapDepth",N.map.depthTexture.format=lr,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=un,N.map.depthTexture.magFilter=un}else z.isPointLight?(N.map=new lm(i.x),N.map.depthTexture=new jg(i.x,Xi)):(N.map=new zn(i.x,i.y),N.map.depthTexture=new Sa(i.x,i.y,Xi)),N.map.depthTexture.name=z.name+".shadowMap",N.map.depthTexture.format=lr,this.type===Pl?(N.map.depthTexture.compareFunction=Q?nf:tf,N.map.depthTexture.minFilter=Tn,N.map.depthTexture.magFilter=Tn):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=un,N.map.depthTexture.magFilter=un);N.camera.updateProjectionMatrix()}const P=N.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<P;ae++){if(N.map.isWebGLCubeRenderTarget)r.setRenderTarget(N.map,ae),r.clear();else{ae===0&&(r.setRenderTarget(N.map),r.clear());const ce=N.getViewport(ae);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),U.viewport(o)}if(z.isPointLight){const ce=N.camera,Ne=N.matrix,ke=z.distance||ce.far;ke!==ce.far&&(ce.far=ke,ce.updateProjectionMatrix()),Vo.setFromMatrixPosition(z.matrixWorld),ce.position.copy(Vo),ru.copy(ce.position),ru.add(JM[ae]),ce.up.copy(QM[ae]),ce.lookAt(ru),ce.updateMatrixWorld(),Ne.makeTranslation(-Vo.x,-Vo.y,-Vo.z),Xd.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Xd,ce.coordinateSystem,ce.reversedDepth)}else N.updateMatrices(z);n=N.getFrustum(),M(w,x,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===Yo&&v(N,x),N.needsUpdate=!1}_=this.type,m.needsUpdate=!1,r.setRenderTarget(E,I,R)};function v(A,w){const x=e.update(g);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zn(i.x,i.y,{format:vo,type:ai})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,x,h,g,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,x,f,g,null)}function y(A,w,x,E){let I=null;const R=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)I=R;else if(I=x.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const U=I.uuid,H=w.uuid;let O=c[U];O===void 0&&(O={},c[U]=O);let k=O[H];k===void 0&&(k=I.clone(),O[H]=k,w.addEventListener("dispose",b)),I=k}if(I.visible=w.visible,I.wireframe=w.wireframe,E===Yo?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:d[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const U=r.properties.get(I);U.light=x}return I}function M(A,w,x,E,I){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===Yo)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const H=e.update(A),O=A.material;if(Array.isArray(O)){const k=H.groups;for(let z=0,N=k.length;z<N;z++){const $=k[z],Q=O[$.materialIndex];if(Q&&Q.visible){const P=y(A,Q,E,I);A.onBeforeShadow(r,A,w,x,H,P,$),r.renderBufferDirect(x,null,H,P,A,$),A.onAfterShadow(r,A,w,x,H,P,$)}}}else if(O.visible){const k=y(A,O,E,I);A.onBeforeShadow(r,A,w,x,H,k,null),r.renderBufferDirect(x,null,H,k,A,null),A.onAfterShadow(r,A,w,x,H,k,null)}}const U=A.children;for(let H=0,O=U.length;H<O;H++)M(U[H],w,x,E,I)}function b(A){A.target.removeEventListener("dispose",b);for(const x in c){const E=c[x],I=A.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function ty(r,e){function t(){let D=!1;const le=new Ft;let ie=null;const de=new Ft(0,0,0,0);return{setMask:function(te){ie!==te&&!D&&(r.colorMask(te,te,te,te),ie=te)},setLocked:function(te){D=te},setClear:function(te,K,ye,Fe,ht){ht===!0&&(te*=Fe,K*=Fe,ye*=Fe),le.set(te,K,ye,Fe),de.equals(le)===!1&&(r.clearColor(te,K,ye,Fe),de.copy(le))},reset:function(){D=!1,ie=null,de.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,ie=null,de=null,te=null;return{setReversed:function(K){if(le!==K){const ye=e.get("EXT_clip_control");K?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),le=K;const Fe=te;te=null,this.setClear(Fe)}},getReversed:function(){return le},setTest:function(K){K?ee(r.DEPTH_TEST):re(r.DEPTH_TEST)},setMask:function(K){ie!==K&&!D&&(r.depthMask(K),ie=K)},setFunc:function(K){if(le&&(K=Eg[K]),de!==K){switch(K){case Mu:r.depthFunc(r.NEVER);break;case yu:r.depthFunc(r.ALWAYS);break;case Eu:r.depthFunc(r.LESS);break;case _o:r.depthFunc(r.LEQUAL);break;case Tu:r.depthFunc(r.EQUAL);break;case bu:r.depthFunc(r.GEQUAL);break;case wu:r.depthFunc(r.GREATER);break;case Au:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=K}},setLocked:function(K){D=K},setClear:function(K){te!==K&&(te=K,le&&(K=1-K),r.clearDepth(K))},reset:function(){D=!1,ie=null,de=null,te=null,le=!1}}}function i(){let D=!1,le=null,ie=null,de=null,te=null,K=null,ye=null,Fe=null,ht=null;return{setTest:function(ve){D||(ve?ee(r.STENCIL_TEST):re(r.STENCIL_TEST))},setMask:function(ve){le!==ve&&!D&&(r.stencilMask(ve),le=ve)},setFunc:function(ve,Pe,Je){(ie!==ve||de!==Pe||te!==Je)&&(r.stencilFunc(ve,Pe,Je),ie=ve,de=Pe,te=Je)},setOp:function(ve,Pe,Je){(K!==ve||ye!==Pe||Fe!==Je)&&(r.stencilOp(ve,Pe,Je),K=ve,ye=Pe,Fe=Je)},setLocked:function(ve){D=ve},setClear:function(ve){ht!==ve&&(r.clearStencil(ve),ht=ve)},reset:function(){D=!1,le=null,ie=null,de=null,te=null,K=null,ye=null,Fe=null,ht=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],p=null,g=!1,m=null,_=null,v=null,y=null,M=null,b=null,A=null,w=new et(0,0,0),x=0,E=!1,I=null,R=null,U=null,H=null,O=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,N=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec($)[1]),z=N>=1):$.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=N>=2);let Q=null,P={};const ae=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),Ne=new Ft().fromArray(ae),ke=new Ft().fromArray(ce);function Ye(D,le,ie,de){const te=new Uint8Array(4),K=r.createTexture();r.bindTexture(D,K),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ye=0;ye<ie;ye++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(le+ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return K}const Z={};Z[r.TEXTURE_2D]=Ye(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(r.DEPTH_TEST),o.setFunc(_o),Be(!1),X(kf),ee(r.CULL_FACE),ze(Hi);function ee(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function re(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Le(D,le){return d[D]!==le?(r.bindFramebuffer(D,le),d[D]=le,D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=le),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=le),!0):!1}function Ie(D,le){let ie=f,de=!1;if(D){ie=h.get(le),ie===void 0&&(ie=[],h.set(le,ie));const te=D.textures;if(ie.length!==te.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let K=0,ye=te.length;K<ye;K++)ie[K]=r.COLOR_ATTACHMENT0+K;ie.length=te.length,de=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,de=!0);de&&r.drawBuffers(ie)}function Ce(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const ct={[is]:r.FUNC_ADD,[W_]:r.FUNC_SUBTRACT,[X_]:r.FUNC_REVERSE_SUBTRACT};ct[Y_]=r.MIN,ct[q_]=r.MAX;const Ee={[$_]:r.ZERO,[K_]:r.ONE,[Z_]:r.SRC_COLOR,[xu]:r.SRC_ALPHA,[ng]:r.SRC_ALPHA_SATURATE,[eg]:r.DST_COLOR,[J_]:r.DST_ALPHA,[j_]:r.ONE_MINUS_SRC_COLOR,[Su]:r.ONE_MINUS_SRC_ALPHA,[tg]:r.ONE_MINUS_DST_COLOR,[Q_]:r.ONE_MINUS_DST_ALPHA,[ig]:r.CONSTANT_COLOR,[rg]:r.ONE_MINUS_CONSTANT_COLOR,[sg]:r.CONSTANT_ALPHA,[og]:r.ONE_MINUS_CONSTANT_ALPHA};function ze(D,le,ie,de,te,K,ye,Fe,ht,ve){if(D===Hi){g===!0&&(re(r.BLEND),g=!1);return}if(g===!1&&(ee(r.BLEND),g=!0),D!==G_){if(D!==m||ve!==E){if((_!==is||M!==is)&&(r.blendEquation(r.FUNC_ADD),_=is,M=is),ve)switch(D){case ro:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kn:r.blendFunc(r.ONE,r.ONE);break;case Vf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:dt("WebGLState: Invalid blending: ",D);break}else switch(D){case ro:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Vf:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hf:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",D);break}v=null,y=null,b=null,A=null,w.set(0,0,0),x=0,m=D,E=ve}return}te=te||le,K=K||ie,ye=ye||de,(le!==_||te!==M)&&(r.blendEquationSeparate(ct[le],ct[te]),_=le,M=te),(ie!==v||de!==y||K!==b||ye!==A)&&(r.blendFuncSeparate(Ee[ie],Ee[de],Ee[K],Ee[ye]),v=ie,y=de,b=K,A=ye),(Fe.equals(w)===!1||ht!==x)&&(r.blendColor(Fe.r,Fe.g,Fe.b,ht),w.copy(Fe),x=ht),m=D,E=!1}function Ze(D,le){D.side===Oi?re(r.CULL_FACE):ee(r.CULL_FACE);let ie=D.side===bn;le&&(ie=!ie),Be(ie),D.blending===ro&&D.transparent===!1?ze(Hi):ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const de=D.stencilWrite;a.setTest(de),de&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),pt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):re(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){I!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),I=D)}function X(D){D!==k_?(ee(r.CULL_FACE),D!==R&&(D===kf?r.cullFace(r.BACK):D===V_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):re(r.CULL_FACE),R=D}function L(D){D!==U&&(z&&r.lineWidth(D),U=D)}function pt(D,le,ie){D?(ee(r.POLYGON_OFFSET_FILL),(H!==le||O!==ie)&&(H=le,O=ie,o.getReversed()&&(le=-le),r.polygonOffset(le,ie))):re(r.POLYGON_OFFSET_FILL)}function nt(D){D?ee(r.SCISSOR_TEST):re(r.SCISSOR_TEST)}function Ve(D){D===void 0&&(D=r.TEXTURE0+k-1),Q!==D&&(r.activeTexture(D),Q=D)}function xe(D,le,ie){ie===void 0&&(Q===null?ie=r.TEXTURE0+k-1:ie=Q);let de=P[ie];de===void 0&&(de={type:void 0,texture:void 0},P[ie]=de),(de.type!==D||de.texture!==le)&&(Q!==ie&&(r.activeTexture(ie),Q=ie),r.bindTexture(D,le||Z[D]),de.type=D,de.texture=le)}function C(){const D=P[Q];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(D){dt("WebGLState:",D)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(D){dt("WebGLState:",D)}}function j(){try{r.texSubImage2D(...arguments)}catch(D){dt("WebGLState:",D)}}function J(){try{r.texSubImage3D(...arguments)}catch(D){dt("WebGLState:",D)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(D){dt("WebGLState:",D)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(D){dt("WebGLState:",D)}}function oe(){try{r.texStorage2D(...arguments)}catch(D){dt("WebGLState:",D)}}function Re(){try{r.texStorage3D(...arguments)}catch(D){dt("WebGLState:",D)}}function Se(){try{r.texImage2D(...arguments)}catch(D){dt("WebGLState:",D)}}function ne(){try{r.texImage3D(...arguments)}catch(D){dt("WebGLState:",D)}}function se(D){Ne.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Ne.copy(D))}function Me(D){ke.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),ke.copy(D))}function Te(D,le){let ie=c.get(le);ie===void 0&&(ie=new WeakMap,c.set(le,ie));let de=ie.get(D);de===void 0&&(de=r.getUniformBlockIndex(le,D.name),ie.set(D,de))}function fe(D,le){const de=c.get(le).get(D);l.get(le)!==de&&(r.uniformBlockBinding(le,de,D.__bindingPointIndex),l.set(le,de))}function He(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,P={},d={},h=new WeakMap,f=[],p=null,g=!1,m=null,_=null,v=null,y=null,M=null,b=null,A=null,w=new et(0,0,0),x=0,E=!1,I=null,R=null,U=null,H=null,O=null,Ne.set(0,0,r.canvas.width,r.canvas.height),ke.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:re,bindFramebuffer:Le,drawBuffers:Ie,useProgram:Ce,setBlending:ze,setMaterial:Ze,setFlipSided:Be,setCullFace:X,setLineWidth:L,setPolygonOffset:pt,setScissorTest:nt,activeTexture:Ve,bindTexture:xe,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:F,texImage2D:Se,texImage3D:ne,updateUBOMapping:Te,uniformBlockBinding:fe,texStorage2D:oe,texStorage3D:Re,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:ge,scissor:se,viewport:Me,reset:He}}function ny(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,S){return f?new OffscreenCanvas(C,S):xa("canvas")}function g(C,S,F){let j=1;const J=xe(C);if((J.width>F||J.height>F)&&(j=F/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(j*J.width),ge=Math.floor(j*J.height);d===void 0&&(d=p(q,ge));const oe=S?p(q,ge):d;return oe.width=q,oe.height=ge,oe.getContext("2d").drawImage(C,0,0,q,ge),Xe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+ge+")."),oe}else return"data"in C&&Xe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function _(C){r.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(C,S,F,j,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=S;if(S===r.RED&&(F===r.FLOAT&&(q=r.R32F),F===r.HALF_FLOAT&&(q=r.R16F),F===r.UNSIGNED_BYTE&&(q=r.R8)),S===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(q=r.R8UI),F===r.UNSIGNED_SHORT&&(q=r.R16UI),F===r.UNSIGNED_INT&&(q=r.R32UI),F===r.BYTE&&(q=r.R8I),F===r.SHORT&&(q=r.R16I),F===r.INT&&(q=r.R32I)),S===r.RG&&(F===r.FLOAT&&(q=r.RG32F),F===r.HALF_FLOAT&&(q=r.RG16F),F===r.UNSIGNED_BYTE&&(q=r.RG8)),S===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(q=r.RG8UI),F===r.UNSIGNED_SHORT&&(q=r.RG16UI),F===r.UNSIGNED_INT&&(q=r.RG32UI),F===r.BYTE&&(q=r.RG8I),F===r.SHORT&&(q=r.RG16I),F===r.INT&&(q=r.RG32I)),S===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(q=r.RGB8UI),F===r.UNSIGNED_SHORT&&(q=r.RGB16UI),F===r.UNSIGNED_INT&&(q=r.RGB32UI),F===r.BYTE&&(q=r.RGB8I),F===r.SHORT&&(q=r.RGB16I),F===r.INT&&(q=r.RGB32I)),S===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),F===r.UNSIGNED_INT&&(q=r.RGBA32UI),F===r.BYTE&&(q=r.RGBA8I),F===r.SHORT&&(q=r.RGBA16I),F===r.INT&&(q=r.RGBA32I)),S===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),S===r.RGBA){const ge=J?$l:ut.getTransfer(j);F===r.FLOAT&&(q=r.RGBA32F),F===r.HALF_FLOAT&&(q=r.RGBA16F),F===r.UNSIGNED_BYTE&&(q=ge===_t?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(C,S){let F;return C?S===null||S===Xi||S===ga?F=r.DEPTH24_STENCIL8:S===Ai?F=r.DEPTH32F_STENCIL8:S===_a&&(F=r.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Xi||S===ga?F=r.DEPTH_COMPONENT24:S===Ai?F=r.DEPTH_COMPONENT32F:S===_a&&(F=r.DEPTH_COMPONENT16),F}function b(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==Tn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),x(S),S.isVideoTexture&&u.delete(S)}function w(C){const S=C.target;S.removeEventListener("dispose",w),I(S)}function x(C){const S=n.get(C);if(S.__webglInit===void 0)return;const F=C.source,j=h.get(F);if(j){const J=j[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(C),Object.keys(j).length===0&&h.delete(F)}n.remove(C)}function E(C){const S=n.get(C);r.deleteTexture(S.__webglTexture);const F=C.source,j=h.get(F);delete j[S.__cacheKey],o.memory.textures--}function I(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let J=0;J<S.__webglFramebuffer[j].length;J++)r.deleteFramebuffer(S.__webglFramebuffer[j][J]);else r.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)r.deleteFramebuffer(S.__webglFramebuffer[j]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=C.textures;for(let j=0,J=F.length;j<J;j++){const q=n.get(F[j]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[j])}n.remove(C)}let R=0;function U(){R=0}function H(){const C=R;return C>=i.maxTextures&&Xe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function O(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function k(C,S){const F=n.get(C);if(C.isVideoTexture&&nt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){const j=C.image;if(j===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,C,S);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+S)}function z(C,S){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){Z(F,C,S);return}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+S)}function N(C,S){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){Z(F,C,S);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+S)}function $(C,S){const F=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&F.__version!==C.version){ee(F,C,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+S)}const Q={[Cu]:r.REPEAT,[ir]:r.CLAMP_TO_EDGE,[Ru]:r.MIRRORED_REPEAT},P={[un]:r.NEAREST,[cg]:r.NEAREST_MIPMAP_NEAREST,[za]:r.NEAREST_MIPMAP_LINEAR,[Tn]:r.LINEAR,[Tc]:r.LINEAR_MIPMAP_NEAREST,[ss]:r.LINEAR_MIPMAP_LINEAR},ae={[dg]:r.NEVER,[vg]:r.ALWAYS,[pg]:r.LESS,[tf]:r.LEQUAL,[mg]:r.EQUAL,[nf]:r.GEQUAL,[_g]:r.GREATER,[gg]:r.NOTEQUAL};function ce(C,S){if(S.type===Ai&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Tn||S.magFilter===Tc||S.magFilter===za||S.magFilter===ss||S.minFilter===Tn||S.minFilter===Tc||S.minFilter===za||S.minFilter===ss)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Q[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Q[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Q[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,P[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,P[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===un||S.minFilter!==za&&S.minFilter!==ss||S.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ne(C,S){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const j=S.source;let J=h.get(j);J===void 0&&(J={},h.set(j,J));const q=O(S);if(q!==C.__cacheKey){J[q]===void 0&&(J[q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[q].usedTimes++;const ge=J[C.__cacheKey];ge!==void 0&&(J[C.__cacheKey].usedTimes--,ge.usedTimes===0&&E(S)),C.__cacheKey=q,C.__webglTexture=J[q].texture}return F}function ke(C,S,F){return Math.floor(Math.floor(C/F)/S)}function Ye(C,S,F,j){const q=C.updateRanges;if(q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,F,j,S.data);else{q.sort((ne,se)=>ne.start-se.start);let ge=0;for(let ne=1;ne<q.length;ne++){const se=q[ge],Me=q[ne],Te=se.start+se.count,fe=ke(Me.start,S.width,4),He=ke(se.start,S.width,4);Me.start<=Te+1&&fe===He&&ke(Me.start+Me.count-1,S.width,4)===fe?se.count=Math.max(se.count,Me.start+Me.count-se.start):(++ge,q[ge]=Me)}q.length=ge+1;const oe=r.getParameter(r.UNPACK_ROW_LENGTH),Re=r.getParameter(r.UNPACK_SKIP_PIXELS),Se=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let ne=0,se=q.length;ne<se;ne++){const Me=q[ne],Te=Math.floor(Me.start/4),fe=Math.ceil(Me.count/4),He=Te%S.width,D=Math.floor(Te/S.width),le=fe,ie=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,He),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,He,D,le,ie,F,j,S.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Re),r.pixelStorei(r.UNPACK_SKIP_ROWS,Se)}}function Z(C,S,F){let j=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=r.TEXTURE_3D);const J=Ne(C,S),q=S.source;t.bindTexture(j,C.__webglTexture,r.TEXTURE0+F);const ge=n.get(q);if(q.version!==ge.__version||J===!0){t.activeTexture(r.TEXTURE0+F);const oe=ut.getPrimaries(ut.workingColorSpace),Re=S.colorSpace===Er?null:ut.getPrimaries(S.colorSpace),Se=S.colorSpace===Er||oe===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ne=g(S.image,!1,i.maxTextureSize);ne=Ve(S,ne);const se=s.convert(S.format,S.colorSpace),Me=s.convert(S.type);let Te=y(S.internalFormat,se,Me,S.colorSpace,S.isVideoTexture);ce(j,S);let fe;const He=S.mipmaps,D=S.isVideoTexture!==!0,le=ge.__version===void 0||J===!0,ie=q.dataReady,de=b(S,ne);if(S.isDepthTexture)Te=M(S.format===os,S.type),le&&(D?t.texStorage2D(r.TEXTURE_2D,1,Te,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Te,ne.width,ne.height,0,se,Me,null));else if(S.isDataTexture)if(He.length>0){D&&le&&t.texStorage2D(r.TEXTURE_2D,de,Te,He[0].width,He[0].height);for(let te=0,K=He.length;te<K;te++)fe=He[te],D?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,fe.width,fe.height,se,Me,fe.data):t.texImage2D(r.TEXTURE_2D,te,Te,fe.width,fe.height,0,se,Me,fe.data);S.generateMipmaps=!1}else D?(le&&t.texStorage2D(r.TEXTURE_2D,de,Te,ne.width,ne.height),ie&&Ye(S,ne,se,Me)):t.texImage2D(r.TEXTURE_2D,0,Te,ne.width,ne.height,0,se,Me,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Te,He[0].width,He[0].height,ne.depth);for(let te=0,K=He.length;te<K;te++)if(fe=He[te],S.format!==Ci)if(se!==null)if(D){if(ie)if(S.layerUpdates.size>0){const ye=yd(fe.width,fe.height,S.format,S.type);for(const Fe of S.layerUpdates){const ht=fe.data.subarray(Fe*ye/fe.data.BYTES_PER_ELEMENT,(Fe+1)*ye/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,Fe,fe.width,fe.height,1,se,ht)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ne.depth,se,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,Te,fe.width,fe.height,ne.depth,0,fe.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ie&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ne.depth,se,Me,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,Te,fe.width,fe.height,ne.depth,0,se,Me,fe.data)}else{D&&le&&t.texStorage2D(r.TEXTURE_2D,de,Te,He[0].width,He[0].height);for(let te=0,K=He.length;te<K;te++)fe=He[te],S.format!==Ci?se!==null?D?ie&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,fe.width,fe.height,se,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,te,Te,fe.width,fe.height,0,fe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,fe.width,fe.height,se,Me,fe.data):t.texImage2D(r.TEXTURE_2D,te,Te,fe.width,fe.height,0,se,Me,fe.data)}else if(S.isDataArrayTexture)if(D){if(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Te,ne.width,ne.height,ne.depth),ie)if(S.layerUpdates.size>0){const te=yd(ne.width,ne.height,S.format,S.type);for(const K of S.layerUpdates){const ye=ne.data.subarray(K*te/ne.data.BYTES_PER_ELEMENT,(K+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,se,Me,ye)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,se,Me,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Te,ne.width,ne.height,ne.depth,0,se,Me,ne.data);else if(S.isData3DTexture)D?(le&&t.texStorage3D(r.TEXTURE_3D,de,Te,ne.width,ne.height,ne.depth),ie&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,se,Me,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Te,ne.width,ne.height,ne.depth,0,se,Me,ne.data);else if(S.isFramebufferTexture){if(le)if(D)t.texStorage2D(r.TEXTURE_2D,de,Te,ne.width,ne.height);else{let te=ne.width,K=ne.height;for(let ye=0;ye<de;ye++)t.texImage2D(r.TEXTURE_2D,ye,Te,te,K,0,se,Me,null),te>>=1,K>>=1}}else if(He.length>0){if(D&&le){const te=xe(He[0]);t.texStorage2D(r.TEXTURE_2D,de,Te,te.width,te.height)}for(let te=0,K=He.length;te<K;te++)fe=He[te],D?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,se,Me,fe):t.texImage2D(r.TEXTURE_2D,te,Te,se,Me,fe);S.generateMipmaps=!1}else if(D){if(le){const te=xe(ne);t.texStorage2D(r.TEXTURE_2D,de,Te,te.width,te.height)}ie&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,Me,ne)}else t.texImage2D(r.TEXTURE_2D,0,Te,se,Me,ne);m(S)&&_(j),ge.__version=q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ee(C,S,F){if(S.image.length!==6)return;const j=Ne(C,S),J=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+F);const q=n.get(J);if(J.version!==q.__version||j===!0){t.activeTexture(r.TEXTURE0+F);const ge=ut.getPrimaries(ut.workingColorSpace),oe=S.colorSpace===Er?null:ut.getPrimaries(S.colorSpace),Re=S.colorSpace===Er||ge===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Se=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,se=[];for(let K=0;K<6;K++)!Se&&!ne?se[K]=g(S.image[K],!0,i.maxCubemapSize):se[K]=ne?S.image[K].image:S.image[K],se[K]=Ve(S,se[K]);const Me=se[0],Te=s.convert(S.format,S.colorSpace),fe=s.convert(S.type),He=y(S.internalFormat,Te,fe,S.colorSpace),D=S.isVideoTexture!==!0,le=q.__version===void 0||j===!0,ie=J.dataReady;let de=b(S,Me);ce(r.TEXTURE_CUBE_MAP,S);let te;if(Se){D&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,He,Me.width,Me.height);for(let K=0;K<6;K++){te=se[K].mipmaps;for(let ye=0;ye<te.length;ye++){const Fe=te[ye];S.format!==Ci?Te!==null?D?ie&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,0,0,Fe.width,Fe.height,Te,Fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,He,Fe.width,Fe.height,0,Fe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,0,0,Fe.width,Fe.height,Te,fe,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,He,Fe.width,Fe.height,0,Te,fe,Fe.data)}}}else{if(te=S.mipmaps,D&&le){te.length>0&&de++;const K=xe(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,He,K.width,K.height)}for(let K=0;K<6;K++)if(ne){D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,se[K].width,se[K].height,Te,fe,se[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,He,se[K].width,se[K].height,0,Te,fe,se[K].data);for(let ye=0;ye<te.length;ye++){const ht=te[ye].image[K].image;D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,0,0,ht.width,ht.height,Te,fe,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,He,ht.width,ht.height,0,Te,fe,ht.data)}}else{D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Te,fe,se[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,He,Te,fe,se[K]);for(let ye=0;ye<te.length;ye++){const Fe=te[ye];D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,0,0,Te,fe,Fe.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,He,Te,fe,Fe.image[K])}}}m(S)&&_(r.TEXTURE_CUBE_MAP),q.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function re(C,S,F,j,J,q){const ge=s.convert(F.format,F.colorSpace),oe=s.convert(F.type),Re=y(F.internalFormat,ge,oe,F.colorSpace),Se=n.get(S),ne=n.get(F);if(ne.__renderTarget=S,!Se.__hasExternalTextures){const se=Math.max(1,S.width>>q),Me=Math.max(1,S.height>>q);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,q,Re,se,Me,S.depth,0,ge,oe,null):t.texImage2D(J,q,Re,se,Me,0,ge,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),pt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,J,ne.__webglTexture,0,L(S)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,J,ne.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(C,S,F){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){const j=S.depthTexture,J=j&&j.isDepthTexture?j.type:null,q=M(S.stencilBuffer,J),ge=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(S),q,S.width,S.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(S),q,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,q,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,C)}else{const j=S.textures;for(let J=0;J<j.length;J++){const q=j[J],ge=s.convert(q.format,q.colorSpace),oe=s.convert(q.type),Re=y(q.internalFormat,ge,oe,q.colorSpace);pt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(S),Re,S.width,S.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(S),Re,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Re,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(C,S,F){const j=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(S.depthTexture);if(J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j){if(J.__webglInit===void 0&&(J.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),ce(r.TEXTURE_CUBE_MAP,S.depthTexture);const Se=s.convert(S.depthTexture.format),ne=s.convert(S.depthTexture.type);let se;S.depthTexture.format===lr?se=r.DEPTH_COMPONENT24:S.depthTexture.format===os&&(se=r.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,se,S.width,S.height,0,Se,ne,null)}}else k(S.depthTexture,0);const q=J.__webglTexture,ge=L(S),oe=j?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,Re=S.depthTexture.format===os?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===lr)pt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Re,oe,q,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,Re,oe,q,0);else if(S.depthTexture.format===os)pt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Re,oe,q,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,Re,oe,q,0);else throw new Error("Unknown depthTexture format")}function Ce(C){const S=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=j}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(F)for(let j=0;j<6;j++)Ie(S.__webglFramebuffer[j],C,j);else{const j=C.texture.mipmaps;j&&j.length>0?Ie(S.__webglFramebuffer[0],C,0):Ie(S.__webglFramebuffer,C,0)}else if(F){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=r.createRenderbuffer(),Le(S.__webglDepthbuffer[j],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,q)}}else{const j=C.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Le(S.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(C,S,F){const j=n.get(C);S!==void 0&&re(j.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Ce(C)}function Ee(C){const S=C.texture,F=n.get(C),j=n.get(S);C.addEventListener("dispose",w);const J=C.textures,q=C.isWebGLCubeRenderTarget===!0,ge=J.length>1;if(ge||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=S.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let Re=0;Re<S.mipmaps.length;Re++)F.__webglFramebuffer[oe][Re]=r.createFramebuffer()}else F.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)F.__webglFramebuffer[oe]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(ge)for(let oe=0,Re=J.length;oe<Re;oe++){const Se=n.get(J[oe]);Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&pt(C)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const Re=J[oe];F.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);const Se=s.convert(Re.format,Re.colorSpace),ne=s.convert(Re.type),se=y(Re.internalFormat,Se,ne,Re.colorSpace,C.isXRRenderTarget===!0),Me=L(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,se,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),ce(r.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)re(F.__webglFramebuffer[oe][Re],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re);else re(F.__webglFramebuffer[oe],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(S)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let oe=0,Re=J.length;oe<Re;oe++){const Se=J[oe],ne=n.get(Se);let se=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,ne.__webglTexture),ce(se,Se),re(F.__webglFramebuffer,C,Se,r.COLOR_ATTACHMENT0+oe,se,0),m(Se)&&_(se)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,j.__webglTexture),ce(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)re(F.__webglFramebuffer[Re],C,S,r.COLOR_ATTACHMENT0,oe,Re);else re(F.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,oe,0);m(S)&&_(oe),t.unbindTexture()}C.depthBuffer&&Ce(C)}function ze(C){const S=C.textures;for(let F=0,j=S.length;F<j;F++){const J=S[F];if(m(J)){const q=v(C),ge=n.get(J).__webglTexture;t.bindTexture(q,ge),_(q),t.unbindTexture()}}}const Ze=[],Be=[];function X(C){if(C.samples>0){if(pt(C)===!1){const S=C.textures,F=C.width,j=C.height;let J=r.COLOR_BUFFER_BIT;const q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(C),oe=S.length>1;if(oe)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const Re=C.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[Se]);const ne=n.get(S[Se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,F,j,0,0,F,j,J,r.NEAREST),l===!0&&(Ze.length=0,Be.length=0,Ze.push(r.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ze.push(q),Be.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Be)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,ge.__webglColorRenderbuffer[Se]);const ne=n.get(S[Se]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function L(C){return Math.min(i.maxSamples,C.samples)}function pt(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function nt(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Ve(C,S){const F=C.colorSpace,j=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Fr&&F!==Er&&(ut.getTransfer(F)===_t?(j!==Ci||J!==ni)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",F)),S}function xe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=N,this.setTextureCube=$,this.rebindTextures=ct,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=re,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function iy(r,e){function t(n,i=Er){let s;const o=ut.getTransfer(i);if(n===ni)return r.UNSIGNED_BYTE;if(n===Kh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Zh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Wp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Xp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hp)return r.BYTE;if(n===Gp)return r.SHORT;if(n===_a)return r.UNSIGNED_SHORT;if(n===$h)return r.INT;if(n===Xi)return r.UNSIGNED_INT;if(n===Ai)return r.FLOAT;if(n===ai)return r.HALF_FLOAT;if(n===Yp)return r.ALPHA;if(n===qp)return r.RGB;if(n===Ci)return r.RGBA;if(n===lr)return r.DEPTH_COMPONENT;if(n===os)return r.DEPTH_STENCIL;if(n===jh)return r.RED;if(n===Jh)return r.RED_INTEGER;if(n===vo)return r.RG;if(n===Qh)return r.RG_INTEGER;if(n===ef)return r.RGBA_INTEGER;if(n===Dl||n===Ll||n===Il||n===Ul)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Dl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Dl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Il)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ul)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pu||n===Du||n===Lu||n===Iu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Du)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Iu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uu||n===Nu||n===Fu||n===Ou||n===Bu||n===zu||n===ku)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Uu||n===Nu)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ou)return s.COMPRESSED_R11_EAC;if(n===Bu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===zu)return s.COMPRESSED_RG11_EAC;if(n===ku)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vu||n===Hu||n===Gu||n===Wu||n===Xu||n===Yu||n===qu||n===$u||n===Ku||n===Zu||n===ju||n===Ju||n===Qu||n===eh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Vu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$u)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ku)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ju)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ju)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eh)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===th||n===nh||n===ih)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===th)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ih)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rh||n===sh||n===oh||n===ah)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===rh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ah)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ga?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sy=`
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

}`;class oy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ht({vertexShader:ry,fragmentShader:sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new pc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ay extends Ao{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const g=typeof XRWebGLBinding<"u",m=new oy,_={},v=t.getContextAttributes();let y=null,M=null;const b=[],A=[],w=new $e;let x=null;const E=new ei;E.viewport=new Ft;const I=new ei;I.viewport=new Ft;const R=[E,I],U=new g0;let H=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=b[Z];return ee===void 0&&(ee=new Lc,b[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=b[Z];return ee===void 0&&(ee=new Lc,b[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=b[Z];return ee===void 0&&(ee=new Lc,b[Z]=ee),ee.getHandSpace()};function k(Z){const ee=A.indexOf(Z.inputSource);if(ee===-1)return;const re=b[ee];re!==void 0&&(re.update(Z.inputSource,Z.frame,c||o),re.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",N);for(let Z=0;Z<b.length;Z++){const ee=A[Z];ee!==null&&(A[Z]=null,b[Z].disconnect(ee))}H=null,O=null,m.reset();for(const Z in _)delete _[Z];e.setRenderTarget(y),f=null,h=null,d=null,i=null,M=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",z),i.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Le=null,Ie=null;v.depth&&(Ie=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=v.stencil?os:lr,Le=v.stencil?ga:Xi);const Ce={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ce),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new zn(h.textureWidth,h.textureHeight,{format:Ci,type:ni,depthTexture:new Sa(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new zn(f.framebufferWidth,f.framebufferHeight,{format:Ci,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(Z){for(let ee=0;ee<Z.removed.length;ee++){const re=Z.removed[ee],Le=A.indexOf(re);Le>=0&&(A[Le]=null,b[Le].disconnect(re))}for(let ee=0;ee<Z.added.length;ee++){const re=Z.added[ee];let Le=A.indexOf(re);if(Le===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=A.length){A.push(re),Le=Ce;break}else if(A[Ce]===null){A[Ce]=re,Le=Ce;break}if(Le===-1)break}const Ie=b[Le];Ie&&Ie.connect(re)}}const $=new V,Q=new V;function P(Z,ee,re){$.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(re.matrixWorld);const Le=$.distanceTo(Q),Ie=ee.projectionMatrix.elements,Ce=re.projectionMatrix.elements,ct=Ie[14]/(Ie[10]-1),Ee=Ie[14]/(Ie[10]+1),ze=(Ie[9]+1)/Ie[5],Ze=(Ie[9]-1)/Ie[5],Be=(Ie[8]-1)/Ie[0],X=(Ce[8]+1)/Ce[0],L=ct*Be,pt=ct*X,nt=Le/(-Be+X),Ve=nt*-Be;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ve),Z.translateZ(nt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ie[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const xe=ct+nt,C=Ee+nt,S=L-Ve,F=pt+(Le-Ve),j=ze*Ee/C*xe,J=Ze*Ee/C*xe;Z.projectionMatrix.makePerspective(S,F,j,J,xe,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ee=Z.near,re=Z.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(re=m.depthFar)),U.near=I.near=E.near=ee,U.far=I.far=E.far=re,(H!==U.near||O!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),H=U.near,O=U.far),U.layers.mask=Z.layers.mask|6,E.layers.mask=U.layers.mask&-5,I.layers.mask=U.layers.mask&-3;const Le=Z.parent,Ie=U.cameras;ae(U,Le);for(let Ce=0;Ce<Ie.length;Ce++)ae(Ie[Ce],Le);Ie.length===2?P(U,E,I):U.projectionMatrix.copy(E.projectionMatrix),ce(Z,U,Le)};function ce(Z,ee,re){re===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(re.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=lh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Z){return _[Z]};let Ne=null;function ke(Z,ee){if(u=ee.getViewerPose(c||o),p=ee,u!==null){const re=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Le=!1;re.length!==U.cameras.length&&(U.cameras.length=0,Le=!0);for(let Ee=0;Ee<re.length;Ee++){const ze=re[Ee];let Ze=null;if(f!==null)Ze=f.getViewport(ze);else{const X=d.getViewSubImage(h,ze);Ze=X.viewport,Ee===0&&(e.setRenderTargetTextures(M,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(M))}let Be=R[Ee];Be===void 0&&(Be=new ei,Be.layers.enable(Ee),Be.viewport=new Ft,R[Ee]=Be),Be.matrix.fromArray(ze.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ze.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ee===0&&(U.matrix.copy(Be.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Le===!0&&U.cameras.push(Be)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const Ee=d.getDepthInformation(re[0]);Ee&&Ee.isValid&&Ee.texture&&m.init(Ee,i.renderState)}if(Ie&&Ie.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let Ee=0;Ee<re.length;Ee++){const ze=re[Ee].camera;if(ze){let Ze=_[ze];Ze||(Ze=new nm,_[ze]=Ze);const Be=d.getCameraImage(ze);Ze.sourceTexture=Be}}}}for(let re=0;re<b.length;re++){const Le=A[re],Ie=b[re];Le!==null&&Ie!==void 0&&Ie.update(Le,ee,c||o)}Ne&&Ne(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}const Ye=new am;Ye.setAnimationLoop(ke),this.setAnimationLoop=function(Z){Ne=Z},this.dispose=function(){}}}const Kr=new cr,ly=new Et;function cy(r,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,im(r)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,v,y,M){_.isMeshBasicMaterial?s(m,_):_.isMeshLambertMaterial?(s(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(m,_),d(m,_)):_.isMeshPhongMaterial?(s(m,_),u(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(m,_),h(m,_),_.isMeshPhysicalMaterial&&f(m,_,M)):_.isMeshMatcapMaterial?(s(m,_),p(m,_)):_.isMeshDepthMaterial?s(m,_):_.isMeshDistanceMaterial?(s(m,_),g(m,_)):_.isMeshNormalMaterial?s(m,_):_.isLineBasicMaterial?(o(m,_),_.isLineDashedMaterial&&a(m,_)):_.isPointsMaterial?l(m,_,v,y):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===bn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===bn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);const v=e.get(_),y=v.envMap,M=v.envMapRotation;y&&(m.envMap.value=y,Kr.copy(M),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),m.envMapRotation.value.setFromMatrix4(ly.makeRotationFromEuler(Kr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function o(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function a(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,v,y){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*v,m.scale.value=y*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function u(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function d(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function h(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function f(m,_,v){m.ior.value=_.ior,_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===bn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function g(m,_){const v=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function uy(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const M=y.program;n.uniformBlockBinding(v,M)}function c(v,y){let M=i[v.id];M===void 0&&(p(v),M=u(v),i[v.id]=M,v.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(v,b);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function u(v){const y=d();v.__bindingPointIndex=y;const M=r.createBuffer(),b=v.__size,A=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,b,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=i[v.id],M=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let A=0,w=M.length;A<w;A++){const x=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,I=x.length;E<I;E++){const R=x[E];if(f(R,A,E,b)===!0){const U=R.__offset,H=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let k=0;k<H.length;k++){const z=H[k],N=g(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,U+O,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,O),O+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,M,b){const A=v.value,w=y+"_"+M;if(b[w]===void 0)return typeof A=="number"||typeof A=="boolean"?b[w]=A:b[w]=A.clone(),!0;{const x=b[w];if(typeof A=="number"||typeof A=="boolean"){if(x!==A)return b[w]=A,!0}else if(x.equals(A)===!1)return x.copy(A),!0}return!1}function p(v){const y=v.uniforms;let M=0;const b=16;for(let w=0,x=y.length;w<x;w++){const E=Array.isArray(y[w])?y[w]:[y[w]];for(let I=0,R=E.length;I<R;I++){const U=E[I],H=Array.isArray(U.value)?U.value:[U.value];for(let O=0,k=H.length;O<k;O++){const z=H[O],N=g(z),$=M%b,Q=$%N.boundary,P=$+Q;M+=Q,P!==0&&b-P<N.storage&&(M+=b-P),U.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=N.storage}}}const A=M%b;return A>0&&(M+=b-A),v.__size=M,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xe("WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function _(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}const hy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function fy(){return Ii===null&&(Ii=new em(hy,16,16,vo,ai),Ii.name="DFG_LUT",Ii.minFilter=Tn,Ii.magFilter=Tn,Ii.wrapS=ir,Ii.wrapT=ir,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class dy{constructor(e={}){const{canvas:t=Mg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ni}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=f,m=new Set([ef,Qh,Jh]),_=new Set([ni,Xi,_a,ga,Kh,Zh]),v=new Uint32Array(4),y=new Int32Array(4);let M=null,b=null;const A=[],w=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let I=!1;this._outputColorSpace=Jn;let R=0,U=0,H=null,O=-1,k=null;const z=new Ft,N=new Ft;let $=null;const Q=new et(0);let P=0,ae=t.width,ce=t.height,Ne=1,ke=null,Ye=null;const Z=new Ft(0,0,ae,ce),ee=new Ft(0,0,ae,ce);let re=!1;const Le=new of;let Ie=!1,Ce=!1;const ct=new Et,Ee=new V,ze=new Ft,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function X(){return H===null?Ne:1}let L=n;function pt(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vh}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",ht,!1),L===null){const B="webgl2";if(L=pt(B,T),L===null)throw pt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw dt("WebGLRenderer: "+T.message),T}let nt,Ve,xe,C,S,F,j,J,q,ge,oe,Re,Se,ne,se,Me,Te,fe,He,D,le,ie,de;function te(){nt=new dS(L),nt.init(),le=new iy(L,nt),Ve=new sS(L,nt,e,le),xe=new ty(L,nt),Ve.reversedDepthBuffer&&h&&xe.buffers.depth.setReversed(!0),C=new _S(L),S=new VM,F=new ny(L,nt,xe,S,Ve,le,C),j=new fS(E),J=new M0(L),ie=new iS(L,J),q=new pS(L,J,C,ie),ge=new vS(L,q,J,ie,C),fe=new gS(L,Ve,F),se=new oS(S),oe=new kM(E,j,nt,Ve,ie,se),Re=new cy(E,S),Se=new GM,ne=new KM(nt),Te=new nS(E,j,xe,ge,p,l),Me=new ey(E,ge,Ve),de=new uy(L,C,Ve,xe),He=new rS(L,nt,C),D=new mS(L,nt,C),C.programs=oe.programs,E.capabilities=Ve,E.extensions=nt,E.properties=S,E.renderLists=Se,E.shadowMap=Me,E.state=xe,E.info=C}te(),g!==ni&&(x=new SS(g,t.width,t.height,i,s));const K=new ay(E,L);this.xr=K,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(T){T!==void 0&&(Ne=T,this.setSize(ae,ce,!1))},this.getSize=function(T){return T.set(ae,ce)},this.setSize=function(T,B,Y=!0){if(K.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=T,ce=B,t.width=Math.floor(T*Ne),t.height=Math.floor(B*Ne),Y===!0&&(t.style.width=T+"px",t.style.height=B+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(ae*Ne,ce*Ne).floor()},this.setDrawingBufferSize=function(T,B,Y){ae=T,ce=B,Ne=Y,t.width=Math.floor(T*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(g===ni){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(z)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,B,Y,W){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,B,Y,W),xe.viewport(z.copy(Z).multiplyScalar(Ne).round())},this.getScissor=function(T){return T.copy(ee)},this.setScissor=function(T,B,Y,W){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,B,Y,W),xe.scissor(N.copy(ee).multiplyScalar(Ne).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){xe.setScissorTest(re=T)},this.setOpaqueSort=function(T){ke=T},this.setTransparentSort=function(T){Ye=T},this.getClearColor=function(T){return T.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,Y=!0){let W=0;if(T){let G=!1;if(H!==null){const ue=H.texture.format;G=m.has(ue)}if(G){const ue=H.texture.type,pe=_.has(ue),he=Te.getClearColor(),we=Te.getClearAlpha(),be=he.r,je=he.g,it=he.b;pe?(v[0]=be,v[1]=je,v[2]=it,v[3]=we,L.clearBufferuiv(L.COLOR,0,v)):(y[0]=be,y[1]=je,y[2]=it,y[3]=we,L.clearBufferiv(L.COLOR,0,y))}else W|=L.COLOR_BUFFER_BIT}B&&(W|=L.DEPTH_BUFFER_BIT),Y&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),Te.dispose(),Se.dispose(),ne.dispose(),S.dispose(),j.dispose(),ge.dispose(),ie.dispose(),de.dispose(),oe.dispose(),K.dispose(),K.removeEventListener("sessionstart",We),K.removeEventListener("sessionend",Bt),qe.stop()};function ye(T){T.preventDefault(),qf("WebGLRenderer: Context Lost."),I=!0}function Fe(){qf("WebGLRenderer: Context Restored."),I=!1;const T=C.autoReset,B=Me.enabled,Y=Me.autoUpdate,W=Me.needsUpdate,G=Me.type;te(),C.autoReset=T,Me.enabled=B,Me.autoUpdate=Y,Me.needsUpdate=W,Me.type=G}function ht(T){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ve(T){const B=T.target;B.removeEventListener("dispose",ve),Pe(B)}function Pe(T){Je(T),S.remove(T)}function Je(T){const B=S.get(T).programs;B!==void 0&&(B.forEach(function(Y){oe.releaseProgram(Y)}),T.isShaderMaterial&&oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Y,W,G,ue){B===null&&(B=Ze);const pe=G.isMesh&&G.matrixWorld.determinant()<0,he=hi(T,B,Y,W,G);xe.setMaterial(W,pe);let we=Y.index,be=1;if(W.wireframe===!0){if(we=q.getWireframeAttribute(Y),we===void 0)return;be=2}const je=Y.drawRange,it=Y.attributes.position;let Ue=je.start*be,Mt=(je.start+je.count)*be;ue!==null&&(Ue=Math.max(Ue,ue.start*be),Mt=Math.min(Mt,(ue.start+ue.count)*be)),we!==null?(Ue=Math.max(Ue,0),Mt=Math.min(Mt,we.count)):it!=null&&(Ue=Math.max(Ue,0),Mt=Math.min(Mt,it.count));const zt=Mt-Ue;if(zt<0||zt===1/0)return;ie.setup(G,W,he,Y,we);let Nt,yt=He;if(we!==null&&(Nt=J.get(we),yt=D,yt.setIndex(Nt)),G.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*X()),yt.setMode(L.LINES)):yt.setMode(L.TRIANGLES);else if(G.isLine){let _n=W.linewidth;_n===void 0&&(_n=1),xe.setLineWidth(_n*X()),G.isLineSegments?yt.setMode(L.LINES):G.isLineLoop?yt.setMode(L.LINE_LOOP):yt.setMode(L.LINE_STRIP)}else G.isPoints?yt.setMode(L.POINTS):G.isSprite&&yt.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Kl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))yt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const _n=G._multiDrawStarts,De=G._multiDrawCounts,Yn=G._multiDrawCount,ft=we?J.get(we).bytesPerElement:1,Si=S.get(W).currentProgram.getUniforms();for(let Di=0;Di<Yn;Di++)Si.setValue(L,"_gl_DrawID",Di),yt.render(_n[Di]/ft,De[Di])}else if(G.isInstancedMesh)yt.renderInstances(Ue,zt,G.count);else if(Y.isInstancedBufferGeometry){const _n=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,De=Math.min(Y.instanceCount,_n);yt.renderInstances(Ue,zt,De)}else yt.render(Ue,zt)};function me(T,B,Y){T.transparent===!0&&T.side===Oi&&T.forceSinglePass===!1?(T.side=bn,T.needsUpdate=!0,pn(T,B,Y),T.side=Nr,T.needsUpdate=!0,pn(T,B,Y),T.side=Oi):pn(T,B,Y)}this.compile=function(T,B,Y=null){Y===null&&(Y=T),b=ne.get(Y),b.init(B),w.push(b),Y.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),T!==Y&&T.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights();const W=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ue=G.material;if(ue)if(Array.isArray(ue))for(let pe=0;pe<ue.length;pe++){const he=ue[pe];me(he,Y,G),W.add(he)}else me(ue,Y,G),W.add(ue)}),b=w.pop(),W},this.compileAsync=function(T,B,Y=null){const W=this.compile(T,B,Y);return new Promise(G=>{function ue(){if(W.forEach(function(pe){S.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){G(T);return}setTimeout(ue,10)}nt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ge=null;function Oe(T){Ge&&Ge(T)}function We(){qe.stop()}function Bt(){qe.start()}const qe=new am;qe.setAnimationLoop(Oe),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(T){Ge=T,K.setAnimationLoop(T),T===null?qe.stop():qe.start()},K.addEventListener("sessionstart",We),K.addEventListener("sessionend",Bt),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;const Y=K.enabled===!0&&K.isPresenting===!0,W=x!==null&&(H===null||Y)&&x.begin(E,H);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(B),B=K.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,B,H),b=ne.get(T,w.length),b.init(B),w.push(b),ct.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Le.setFromProjectionMatrix(ct,zi,B.reversedDepth),Ce=this.localClippingEnabled,Ie=se.init(this.clippingPlanes,Ce),M=Se.get(T,A.length),M.init(),A.push(M),K.enabled===!0&&K.isPresenting===!0){const pe=E.xr.getDepthSensingMesh();pe!==null&&Ct(pe,B,-1/0,E.sortObjects)}Ct(T,B,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(ke,Ye),Be=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Be&&Te.addToRenderList(M,T),this.info.render.frame++,Ie===!0&&se.beginShadows();const G=b.state.shadowsArray;if(Me.render(G,T,B),Ie===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&x.hasRenderPass())===!1){const pe=M.opaque,he=M.transmissive;if(b.setupLights(),B.isArrayCamera){const we=B.cameras;if(he.length>0)for(let be=0,je=we.length;be<je;be++){const it=we[be];Rt(pe,he,T,it)}Be&&Te.render(T);for(let be=0,je=we.length;be<je;be++){const it=we[be];qt(M,T,it,it.viewport)}}else he.length>0&&Rt(pe,he,T,B),Be&&Te.render(T),qt(M,T,B)}H!==null&&U===0&&(F.updateMultisampleRenderTarget(H),F.updateRenderTargetMipmap(H)),W&&x.end(E),T.isScene===!0&&T.onAfterRender(E,T,B),ie.resetDefaultState(),O=-1,k=null,w.pop(),w.length>0?(b=w[w.length-1],Ie===!0&&se.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function Ct(T,B,Y,W){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Le.intersectsSprite(T)){W&&ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ct);const pe=ge.update(T),he=T.material;he.visible&&M.push(T,pe,he,Y,ze.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Le.intersectsObject(T))){const pe=ge.update(T),he=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ze.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ze.copy(pe.boundingSphere.center)),ze.applyMatrix4(T.matrixWorld).applyMatrix4(ct)),Array.isArray(he)){const we=pe.groups;for(let be=0,je=we.length;be<je;be++){const it=we[be],Ue=he[it.materialIndex];Ue&&Ue.visible&&M.push(T,pe,Ue,Y,ze.z,it)}}else he.visible&&M.push(T,pe,he,Y,ze.z,null)}}const ue=T.children;for(let pe=0,he=ue.length;pe<he;pe++)Ct(ue[pe],B,Y,W)}function qt(T,B,Y,W){const{opaque:G,transmissive:ue,transparent:pe}=T;b.setupLightsView(Y),Ie===!0&&se.setGlobalState(E.clippingPlanes,Y),W&&xe.viewport(z.copy(W)),G.length>0&&vt(G,B,Y),ue.length>0&&vt(ue,B,Y),pe.length>0&&vt(pe,B,Y),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Rt(T,B,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){const Ue=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new zn(1,1,{generateMipmaps:!0,type:Ue?ai:ni,minFilter:ss,samples:Math.max(4,Ve.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const ue=b.state.transmissionRenderTarget[W.id],pe=W.viewport||z;ue.setSize(pe.z*E.transmissionResolutionScale,pe.w*E.transmissionResolutionScale);const he=E.getRenderTarget(),we=E.getActiveCubeFace(),be=E.getActiveMipmapLevel();E.setRenderTarget(ue),E.getClearColor(Q),P=E.getClearAlpha(),P<1&&E.setClearColor(16777215,.5),E.clear(),Be&&Te.render(Y);const je=E.toneMapping;E.toneMapping=Gi;const it=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),Ie===!0&&se.setGlobalState(E.clippingPlanes,W),vt(T,Y,W),F.updateMultisampleRenderTarget(ue),F.updateRenderTargetMipmap(ue),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Mt=0,zt=B.length;Mt<zt;Mt++){const Nt=B[Mt],{object:yt,geometry:_n,material:De,group:Yn}=Nt;if(De.side===Oi&&yt.layers.test(W.layers)){const ft=De.side;De.side=bn,De.needsUpdate=!0,mt(yt,Y,W,_n,De,Yn),De.side=ft,De.needsUpdate=!0,Ue=!0}}Ue===!0&&(F.updateMultisampleRenderTarget(ue),F.updateRenderTargetMipmap(ue))}E.setRenderTarget(he,we,be),E.setClearColor(Q,P),it!==void 0&&(W.viewport=it),E.toneMapping=je}function vt(T,B,Y){const W=B.isScene===!0?B.overrideMaterial:null;for(let G=0,ue=T.length;G<ue;G++){const pe=T[G],{object:he,geometry:we,group:be}=pe;let je=pe.material;je.allowOverride===!0&&W!==null&&(je=W),he.layers.test(Y.layers)&&mt(he,B,Y,we,je,be)}}function mt(T,B,Y,W,G,ue){T.onBeforeRender(E,B,Y,W,G,ue),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(E,B,Y,W,T,ue),G.transparent===!0&&G.side===Oi&&G.forceSinglePass===!1?(G.side=bn,G.needsUpdate=!0,E.renderBufferDirect(Y,B,W,G,T,ue),G.side=Nr,G.needsUpdate=!0,E.renderBufferDirect(Y,B,W,G,T,ue),G.side=Oi):E.renderBufferDirect(Y,B,W,G,T,ue),T.onAfterRender(E,B,Y,W,G,ue)}function pn(T,B,Y){B.isScene!==!0&&(B=Ze);const W=S.get(T),G=b.state.lights,ue=b.state.shadowsArray,pe=G.state.version,he=oe.getParameters(T,G.state,ue,B,Y),we=oe.getProgramCacheKey(he);let be=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;const je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=j.get(T.envMap||W.environment,je),W.envMapRotation=W.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,be===void 0&&(T.addEventListener("dispose",ve),be=new Map,W.programs=be);let it=be.get(we);if(it!==void 0){if(W.currentProgram===it&&W.lightsStateVersion===pe)return mn(T,he),it}else he.uniforms=oe.getUniforms(T),T.onBeforeCompile(he,E),it=oe.acquireProgram(he,we),be.set(we,it),W.uniforms=he.uniforms;const Ue=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=se.uniform),mn(T,he),W.needsLights=Kt(T),W.lightsStateVersion=pe,W.needsLights&&(Ue.ambientLightColor.value=G.state.ambient,Ue.lightProbe.value=G.state.probe,Ue.directionalLights.value=G.state.directional,Ue.directionalLightShadows.value=G.state.directionalShadow,Ue.spotLights.value=G.state.spot,Ue.spotLightShadows.value=G.state.spotShadow,Ue.rectAreaLights.value=G.state.rectArea,Ue.ltc_1.value=G.state.rectAreaLTC1,Ue.ltc_2.value=G.state.rectAreaLTC2,Ue.pointLights.value=G.state.point,Ue.pointLightShadows.value=G.state.pointShadow,Ue.hemisphereLights.value=G.state.hemi,Ue.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ue.spotLightMatrix.value=G.state.spotLightMatrix,Ue.spotLightMap.value=G.state.spotLightMap,Ue.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=it,W.uniformsList=null,it}function At(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Nl.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function mn(T,B){const Y=S.get(T);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function hi(T,B,Y,W,G){B.isScene!==!0&&(B=Ze),F.resetTextureUnits();const ue=B.fog,pe=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,he=H===null?E.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Fr,we=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,be=j.get(W.envMap||pe,we),je=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,it=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!Y.morphAttributes.position,Mt=!!Y.morphAttributes.normal,zt=!!Y.morphAttributes.color;let Nt=Gi;W.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Nt=E.toneMapping);const yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_n=yt!==void 0?yt.length:0,De=S.get(W),Yn=b.state.lights;if(Ie===!0&&(Ce===!0||T!==k)){const nn=T===k&&W.id===O;se.setState(W,T,nn)}let ft=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Yn.state.version||De.outputColorSpace!==he||G.isBatchedMesh&&De.batching===!1||!G.isBatchedMesh&&De.batching===!0||G.isBatchedMesh&&De.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&De.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&De.instancing===!1||!G.isInstancedMesh&&De.instancing===!0||G.isSkinnedMesh&&De.skinning===!1||!G.isSkinnedMesh&&De.skinning===!0||G.isInstancedMesh&&De.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&De.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&De.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&De.instancingMorph===!1&&G.morphTexture!==null||De.envMap!==be||W.fog===!0&&De.fog!==ue||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==se.numPlanes||De.numIntersection!==se.numIntersection)||De.vertexAlphas!==je||De.vertexTangents!==it||De.morphTargets!==Ue||De.morphNormals!==Mt||De.morphColors!==zt||De.toneMapping!==Nt||De.morphTargetsCount!==_n)&&(ft=!0):(ft=!0,De.__version=W.version);let Si=De.currentProgram;ft===!0&&(Si=pn(W,B,G));let Di=!1,Gr=!1,bs=!1;const Tt=Si.getUniforms(),cn=De.uniforms;if(xe.useProgram(Si.program)&&(Di=!0,Gr=!0,bs=!0),W.id!==O&&(O=W.id,Gr=!0),Di||k!==T){xe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Tt.setValue(L,"projectionMatrix",T.projectionMatrix),Tt.setValue(L,"viewMatrix",T.matrixWorldInverse);const dr=Tt.map.cameraPosition;dr!==void 0&&dr.setValue(L,Ee.setFromMatrixPosition(T.matrixWorld)),Ve.logarithmicDepthBuffer&&Tt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Tt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),k!==T&&(k=T,Gr=!0,bs=!0)}if(De.needsLights&&(Yn.state.directionalShadowMap.length>0&&Tt.setValue(L,"directionalShadowMap",Yn.state.directionalShadowMap,F),Yn.state.spotShadowMap.length>0&&Tt.setValue(L,"spotShadowMap",Yn.state.spotShadowMap,F),Yn.state.pointShadowMap.length>0&&Tt.setValue(L,"pointShadowMap",Yn.state.pointShadowMap,F)),G.isSkinnedMesh){Tt.setOptional(L,G,"bindMatrix"),Tt.setOptional(L,G,"bindMatrixInverse");const nn=G.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Tt.setValue(L,"boneTexture",nn.boneTexture,F))}G.isBatchedMesh&&(Tt.setOptional(L,G,"batchingTexture"),Tt.setValue(L,"batchingTexture",G._matricesTexture,F),Tt.setOptional(L,G,"batchingIdTexture"),Tt.setValue(L,"batchingIdTexture",G._indirectTexture,F),Tt.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&Tt.setValue(L,"batchingColorTexture",G._colorsTexture,F));const fr=Y.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&fe.update(G,Y,Si),(Gr||De.receiveShadow!==G.receiveShadow)&&(De.receiveShadow=G.receiveShadow,Tt.setValue(L,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(cn.envMapIntensity.value=B.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=fy()),Gr&&(Tt.setValue(L,"toneMappingExposure",E.toneMappingExposure),De.needsLights&&$t(cn,bs),ue&&W.fog===!0&&Re.refreshFogUniforms(cn,ue),Re.refreshMaterialUniforms(cn,W,Ne,ce,b.state.transmissionRenderTarget[T.id]),Nl.upload(L,At(De),cn,F)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Nl.upload(L,At(De),cn,F),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Tt.setValue(L,"center",G.center),Tt.setValue(L,"modelViewMatrix",G.modelViewMatrix),Tt.setValue(L,"normalMatrix",G.normalMatrix),Tt.setValue(L,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const nn=W.uniformsGroups;for(let dr=0,ws=nn.length;dr<ws;dr++){const zf=nn[dr];de.update(zf,Si),de.bind(zf,Si)}}return Si}function $t(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Kt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(T,B,Y){const W=S.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),S.get(T.texture).__webglTexture=B,S.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const Y=S.get(T);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};const tn=L.createFramebuffer();this.setRenderTarget=function(T,B=0,Y=0){H=T,R=B,U=Y;let W=null,G=!1,ue=!1;if(T){const he=S.get(T);if(he.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(L.FRAMEBUFFER,he.__webglFramebuffer),z.copy(T.viewport),N.copy(T.scissor),$=T.scissorTest,xe.viewport(z),xe.scissor(N),xe.setScissorTest($),O=-1;return}else if(he.__webglFramebuffer===void 0)F.setupRenderTarget(T);else if(he.__hasExternalTextures)F.rebindTextures(T,S.get(T.texture).__webglTexture,S.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const je=T.depthTexture;if(he.__boundDepthTexture!==je){if(je!==null&&S.has(je)&&(T.width!==je.image.width||T.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(T)}}const we=T.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ue=!0);const be=S.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(be[B])?W=be[B][Y]:W=be[B],G=!0):T.samples>0&&F.useMultisampledRTT(T)===!1?W=S.get(T).__webglMultisampledFramebuffer:Array.isArray(be)?W=be[Y]:W=be,z.copy(T.viewport),N.copy(T.scissor),$=T.scissorTest}else z.copy(Z).multiplyScalar(Ne).floor(),N.copy(ee).multiplyScalar(Ne).floor(),$=re;if(Y!==0&&(W=tn),xe.bindFramebuffer(L.FRAMEBUFFER,W)&&xe.drawBuffers(T,W),xe.viewport(z),xe.scissor(N),xe.setScissorTest($),G){const he=S.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,he.__webglTexture,Y)}else if(ue){const he=B;for(let we=0;we<T.textures.length;we++){const be=S.get(T.textures[we]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+we,be.__webglTexture,Y,he)}}else if(T!==null&&Y!==0){const he=S.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,he.__webglTexture,Y)}O=-1},this.readRenderTargetPixels=function(T,B,Y,W,G,ue,pe,he=0){if(!(T&&T.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=S.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we){xe.bindFramebuffer(L.FRAMEBUFFER,we);try{const be=T.textures[he],je=be.format,it=be.type;if(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),!Ve.textureFormatReadable(je)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(it)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-W&&Y>=0&&Y<=T.height-G&&L.readPixels(B,Y,W,G,le.convert(je),le.convert(it),ue)}finally{const be=H!==null?S.get(H).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(T,B,Y,W,G,ue,pe,he=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=S.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we)if(B>=0&&B<=T.width-W&&Y>=0&&Y<=T.height-G){xe.bindFramebuffer(L.FRAMEBUFFER,we);const be=T.textures[he],je=be.format,it=be.type;if(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),!Ve.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(B,Y,W,G,le.convert(je),le.convert(it),0);const Mt=H!==null?S.get(H).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,Mt);const zt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await yg(L,zt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.deleteBuffer(Ue),L.deleteSync(zt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,Y=0){const W=Math.pow(2,-Y),G=Math.floor(T.image.width*W),ue=Math.floor(T.image.height*W),pe=B!==null?B.x:0,he=B!==null?B.y:0;F.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,pe,he,G,ue),xe.unbindTexture()};const qi=L.createFramebuffer(),Ts=L.createFramebuffer();this.copyTextureToTexture=function(T,B,Y=null,W=null,G=0,ue=0){let pe,he,we,be,je,it,Ue,Mt,zt;const Nt=T.isCompressedTexture?T.mipmaps[ue]:T.image;if(Y!==null)pe=Y.max.x-Y.min.x,he=Y.max.y-Y.min.y,we=Y.isBox3?Y.max.z-Y.min.z:1,be=Y.min.x,je=Y.min.y,it=Y.isBox3?Y.min.z:0;else{const cn=Math.pow(2,-G);pe=Math.floor(Nt.width*cn),he=Math.floor(Nt.height*cn),T.isDataArrayTexture?we=Nt.depth:T.isData3DTexture?we=Math.floor(Nt.depth*cn):we=1,be=0,je=0,it=0}W!==null?(Ue=W.x,Mt=W.y,zt=W.z):(Ue=0,Mt=0,zt=0);const yt=le.convert(B.format),_n=le.convert(B.type);let De;B.isData3DTexture?(F.setTexture3D(B,0),De=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(F.setTexture2DArray(B,0),De=L.TEXTURE_2D_ARRAY):(F.setTexture2D(B,0),De=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const Yn=L.getParameter(L.UNPACK_ROW_LENGTH),ft=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Si=L.getParameter(L.UNPACK_SKIP_PIXELS),Di=L.getParameter(L.UNPACK_SKIP_ROWS),Gr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Nt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Nt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,be),L.pixelStorei(L.UNPACK_SKIP_ROWS,je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,it);const bs=T.isDataArrayTexture||T.isData3DTexture,Tt=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const cn=S.get(T),fr=S.get(B),nn=S.get(cn.__renderTarget),dr=S.get(fr.__renderTarget);xe.bindFramebuffer(L.READ_FRAMEBUFFER,nn.__webglFramebuffer),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let ws=0;ws<we;ws++)bs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,S.get(T).__webglTexture,G,it+ws),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,S.get(B).__webglTexture,ue,zt+ws)),L.blitFramebuffer(be,je,pe,he,Ue,Mt,pe,he,L.DEPTH_BUFFER_BIT,L.NEAREST);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||S.has(T)){const cn=S.get(T),fr=S.get(B);xe.bindFramebuffer(L.READ_FRAMEBUFFER,qi),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ts);for(let nn=0;nn<we;nn++)bs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,cn.__webglTexture,G,it+nn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,cn.__webglTexture,G),Tt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,fr.__webglTexture,ue,zt+nn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fr.__webglTexture,ue),G!==0?L.blitFramebuffer(be,je,pe,he,Ue,Mt,pe,he,L.COLOR_BUFFER_BIT,L.NEAREST):Tt?L.copyTexSubImage3D(De,ue,Ue,Mt,zt+nn,be,je,pe,he):L.copyTexSubImage2D(De,ue,Ue,Mt,be,je,pe,he);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Tt?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(De,ue,Ue,Mt,zt,pe,he,we,yt,_n,Nt.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(De,ue,Ue,Mt,zt,pe,he,we,yt,Nt.data):L.texSubImage3D(De,ue,Ue,Mt,zt,pe,he,we,yt,_n,Nt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,Ue,Mt,pe,he,yt,_n,Nt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,Ue,Mt,Nt.width,Nt.height,yt,Nt.data):L.texSubImage2D(L.TEXTURE_2D,ue,Ue,Mt,pe,he,yt,_n,Nt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Yn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Si),L.pixelStorei(L.UNPACK_SKIP_ROWS,Di),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Gr),ue===0&&B.generateMipmaps&&L.generateMipmap(De),xe.unbindTexture()},this.initRenderTarget=function(T){S.get(T).__webglFramebuffer===void 0&&F.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?F.setTextureCube(T,0):T.isData3DTexture?F.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?F.setTexture2DArray(T,0):F.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){R=0,U=0,H=null,xe.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}function Qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function dm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var li={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ya={duration:.5,overwrite:!1,delay:0},uf,dn,Dt,_i=1e8,wt=1/_i,dh=Math.PI*2,py=dh/4,my=0,pm=Math.sqrt,_y=Math.cos,gy=Math.sin,ln=function(e){return typeof e=="string"},Ot=function(e){return typeof e=="function"},ur=function(e){return typeof e=="number"},hf=function(e){return typeof e>"u"},Yi=function(e){return typeof e=="object"},Vn=function(e){return e!==!1},ff=function(){return typeof window<"u"},fl=function(e){return Ot(e)||ln(e)},mm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,vy=/random\([^)]+\)/g,xy=/,\s*/g,Yd=/(?:-?\.?\d|\.)+/gi,_m=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,su=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,gm=/[+-]=-?[.\d]+/,Sy=/[^,'"\[\]\s]+/gi,My=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,Ui,ph,df,ci={},Jl={},vm,xm=function(e){return(Jl=So(e,ci))&&Xn},pf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ea=function(e,t){return!t&&console.warn(e)},Sm=function(e,t){return e&&(ci[e]=t)&&Jl&&(Jl[e]=t)||ci},Ta=function(){return 0},yy={suppressEvents:!0,isStart:!0,kill:!1},Fl={suppressEvents:!0,kill:!1},Ey={suppressEvents:!0},mf={},Lr=[],mh={},Mm,Qn={},ou={},qd=30,Ol=[],_f="",gf=function(e){var t=e[0],n,i;if(Yi(t)||Ot(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ol.length;i--&&!Ol[i].targetTest(t););n=Ol[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Gm(e[i],n)))||e.splice(i,1);return e},cs=function(e){return e._gsap||gf(gi(e))[0]._gsap},ym=function(e,t,n){return(n=e[t])&&Ot(n)?e[t]():hf(n)&&e.getAttribute&&e.getAttribute(t)||n},Hn=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Lt=function(e){return Math.round(e*1e7)/1e7||0},oo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ty=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ql=function(){var e=Lr.length,t=Lr.slice(0),n,i;for(mh={},Lr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vf=function(e){return!!(e._initted||e._startAt||e.add)},Em=function(e,t,n,i){Lr.length&&!dn&&Ql(),e.render(t,n,!!(dn&&t<0&&vf(e))),Lr.length&&!dn&&Ql()},Tm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Sy).length<2?t:ln(e)?e.trim():e},bm=function(e){return e},ui=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},by=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},So=function(e,t){for(var n in t)e[n]=t[n];return e},$d=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Yi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ec=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ta=function(e){var t=e.parent||It,n=e.keyframes?by(An(e.keyframes)):ui;if(Vn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},wy=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},wm=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},vc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Or=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},us=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ay=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_h=function(e,t,n,i){return e._startAt&&(dn?e._startAt.revert(Fl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Cy=function r(e){return!e||e._ts&&r(e.parent)},Kd=function(e){return e._repeat?Mo(e._tTime,e=e.duration()+e._rDelay)*e:0},Mo=function(e,t){var n=Math.floor(e=Lt(e/t));return e&&n===e?n-1:n},tc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},xc=function(e){return e._end=Lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},Sc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),xc(e),n._dirty||us(n,e)),e},Am=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=tc(e.rawTime(),t),(!t._dur||Fa(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),us(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},Bi=function(e,t,n,i){return t.parent&&Or(t),t._start=Lt((ur(n)?n:n||e!==It?di(e,n,t):e._time)+t._delay),t._end=Lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),wm(e,t,"_first","_last",e._sort?"_start":0),gh(t)||(e._recent=t),i||Am(e,t),e._ts<0&&Sc(e,e._tTime),e},Cm=function(e,t){return(ci.ScrollTrigger||pf("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},Rm=function(e,t,n,i,s){if(Sf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!dn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Mm!==ii.frame)return Lr.push(e),e._lazy=[s,i],1},Ry=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},gh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Py=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Ry(e)&&!(!e._initted&&gh(e))||(e._ts<0||e._dp._ts<0)&&!gh(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=Fa(0,e._tDur,t),u=Mo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Mo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||dn||i||e._zTime===wt||!t&&e._zTime){if(!e._initted&&Rm(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&_h(e,t,n,!0),e._onUpdate&&!n&&si(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Or(e,1),!n&&!dn&&(si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Dy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},yo=function(e,t,n,i){var s=e._repeat,o=Lt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Lt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Sc(e,e._tTime=e._tDur*a),e.parent&&xc(e),n||us(e.parent,e),e},Zd=function(e){return e instanceof On?us(e):yo(e,e._dur)},Ly={_start:0,endTime:Ta,totalDuration:Ta},di=function r(e,t,n){var i=e.labels,s=e._recent||Ly,o=e.duration()>=_i?s.endTime(!1):e._dur,a,l,c;return ln(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},na=function(e,t,n){var i=ur(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Vn(l.vars.inherit)&&l.parent;o.immediateRender=Vn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Yt(t[0],o,t[s+1])},Hr=function(e,t){return e||e===0?t(e):t},Fa=function(e,t,n){return n<e?e:n>t?t:n},Mn=function(e,t){return!ln(e)||!(t=My.exec(e))?"":t[1]},Iy=function(e,t,n){return Hr(n,function(i){return Fa(e,t,i)})},vh=[].slice,Pm=function(e,t){return e&&Yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Yi(e[0]))&&!e.nodeType&&e!==Ui},Uy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return ln(i)&&!t||Pm(i,1)?(s=n).push.apply(s,gi(i)):n.push(i)})||n},gi=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):ln(e)&&!n&&(ph||!Eo())?vh.call((t||df).querySelectorAll(e),0):An(e)?Uy(e,n):Pm(e)?vh.call(e,0):e?[e]:[]},xh=function(e){return e=gi(e)[0]||Ea("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gi(t,n.querySelectorAll?n:n===e?Ea("Invalid scope")||df.createElement("div"):e)}},Dm=function(e){return e.sort(function(){return .5-Math.random()})},Lm=function(e){if(Ot(e))return e;var t=Yi(e)?e:{each:e},n=hs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,d=i;return ln(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],d=i[1]),function(h,f,p){var g=(p||t).length,m=o[g],_,v,y,M,b,A,w,x,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,_i])[1],!E){for(w=-_i;w<(w=p[E++].getBoundingClientRect().left)&&E<g;);E<g&&E--}for(m=o[g]=[],_=l?Math.min(E,g)*u-.5:i%E,v=E===_i?0:l?g*d/E-.5:i/E|0,w=0,x=_i,A=0;A<g;A++)y=A%E-_,M=v-(A/E|0),m[A]=b=c?Math.abs(c==="y"?M:y):pm(y*y+M*M),b>w&&(w=b),b<x&&(x=b);i==="random"&&Dm(m),m.max=w-x,m.min=x,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(E>g?g-1:c?c==="y"?g/E:E:Math.max(E,g/E))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Mn(t.amount||t.each)||0,n=n&&g<0?qy(n):n}return g=(m[h]-m.min)/m.max||0,Lt(m.b+(n?n(g):g)*m.v)+m.u}},Sh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Lt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ur(n)?0:Mn(n))}},Im=function(e,t){var n=An(e),i,s;return!n&&Yi(e)&&(i=n=e.radius||_i,e.values?(e=gi(e.values),(s=!ur(e[0]))&&(i*=i)):e=Sh(e.increment)),Hr(t,n?Ot(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=_i,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-a,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-a),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:o,s||u===o||ur(o)?u:u+Mn(o)}:Sh(e))},Um=function(e,t,n,i){return Hr(An(e)?!t:n===!0?!!(n=0):!i,function(){return An(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Ny=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Fy=function(e,t){return function(n){return e(parseFloat(n))+(t||Mn(n))}},Oy=function(e,t,n){return Fm(e,t,0,1,n)},Nm=function(e,t,n){return Hr(n,function(i){return e[~~t(i)]})},By=function r(e,t,n){var i=t-e;return An(e)?Nm(e,r(0,e.length),t):Hr(n,function(s){return(i+(s-e)%i)%i+e})},zy=function r(e,t,n){var i=t-e,s=i*2;return An(e)?Nm(e,r(0,e.length-1),t):Hr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ba=function(e){return e.replace(vy,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(xy);return Um(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Fm=function(e,t,n,i,s){var o=t-e,a=i-n;return Hr(s,function(l){return n+((l-e)/o*a||0)})},ky=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=ln(e),a={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(An(e)&&!An(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(p){p*=d;var g=Math.min(h,~~p);return u[g](p-g)},n=t}else i||(e=So(An(e)?[]:{},e));if(!u){for(l in t)xf.call(a,e,l,"get",t[l]);s=function(p){return Ef(p,a)||(o?e.p:e)}}}return Hr(n,s)},jd=function(e,t,n){var i=e.labels,s=_i,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},si=function(e,t,n){var i=e.vars,s=i[t],o=Dt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Lr.length&&Ql(),a&&(Dt=a),u=l?s.apply(c,l):s.call(c),Dt=o,u},$o=function(e){return Or(e),e.scrollTrigger&&e.scrollTrigger.kill(!!dn),e.progress()<1&&si(e,"onInterrupt"),e},eo,Om=[],Bm=function(e){if(e)if(e=!e.name&&e.default||e,ff()||e.headless){var t=e.name,n=Ot(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ta,render:Ef,add:xf,kill:iE,modifier:nE,rawVars:0},o={targetTest:0,get:0,getSetter:yf,aliases:{},register:0};if(Eo(),e!==i){if(Qn[t])return;ui(i,ui(ec(e,s),o)),So(i.prototype,So(s,ec(e,o))),Qn[i.prop=t]=i,e.targetTest&&(Ol.push(i),mf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Sm(t,i),e.register&&e.register(Xn,i,Gn)}else Om.push(e)},bt=255,Ko={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},au=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},zm=function(e,t,n){var i=e?ur(e)?[e>>16,e>>8&bt,e&bt]:0:Ko.black,s,o,a,l,c,u,d,h,f,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ko[e])i=Ko[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&bt,i&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Yd),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=au(l+1/3,s,o),i[1]=au(l,s,o),i[2]=au(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(_m),n&&i.length<4&&(i[3]=1),i}else i=e.match(Yd)||Ko.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/bt,o=i[1]/bt,a=i[2]/bt,d=Math.max(s,o,a),h=Math.min(s,o,a),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},km=function(e){var t=[],n=[],i=-1;return e.split(Ir).forEach(function(s){var o=s.match(Qs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Jd=function(e,t,n){var i="",s=(e+i).match(Ir),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=zm(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=km(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ir,"1").split(Qs),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ir),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},Ir=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ko)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Vy=/hsl[a]?\(/,Vm=function(e){var t=e.join(" "),n;if(Ir.lastIndex=0,Ir.test(t))return n=Vy.test(t),e[1]=Jd(e[1],n),e[0]=Jd(e[0],n,km(e[1])),!0},wa,ii=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,d,h,f,p=function g(m){var _=r()-i,v=m===!0,y,M,b,A;if((_>e||_<0)&&(n+=_-t),i+=_,b=i-n,y=b-o,(y>0||v)&&(A=++d.frame,h=b-d.time*1e3,d.time=b=b/1e3,o+=y+(y>=s?4:s-y),M=1),v||(l=c(g)),M)for(f=0;f<a.length;f++)a[f](b,h,A,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){vm&&(!ph&&ff()&&(Ui=ph=window,df=Ui.document||{},ci.gsap=Xn,(Ui.gsapVersions||(Ui.gsapVersions=[])).push(Xn.version),xm(Jl||Ui.GreenSockGlobals||!Ui.gsap&&Ui||{}),Om.forEach(Bm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,o-d.time*1e3+1|0)},wa=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),wa=0,c=Ta},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,_,v){var y=_?function(M,b,A,w){m(M,b,A,w),d.remove(y)}:m;return d.remove(m),a[v?"unshift":"push"](y),Eo(),y},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&f>=_&&f--},_listeners:a},d})(),Eo=function(){return!wa&&ii.wake()},lt={},Hy=/^[\d.\-M][\d.\-,\s]/,Gy=/["']/g,Wy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Gy,"").trim():+c,i=l.substr(a+1).trim();return t},Xy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Yy=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Wy(t[1])]:Xy(e).split(",").map(Tm)):lt._CE&&Hy.test(e)?lt._CE("",e):n},qy=function(e){return function(t){return 1-e(1-t)}},hs=function(e,t){return e&&(Ot(e)?e:lt[e]||Yy(e))||t},ys=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Hn(e,function(a){lt[a]=ci[a]=s,lt[o=a.toLowerCase()]=n;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},Hm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},lu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/dh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*gy((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Hm(a);return s=dh/s,l.config=function(c,u){return r(e,c,u)},l},cu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Hm(n);return i.config=function(s){return r(e,s)},i};Hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ys(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;ys("Elastic",lu("in"),lu("out"),lu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ys("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ys("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ys("Circ",function(r){return-(pm(1-r*r)-1)});ys("Sine",function(r){return r===1?1:-_y(r*py)+1});ys("Back",cu("in"),cu("out"),cu());lt.SteppedEase=lt.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-wt;return function(a){return((i*Fa(0,o,a)|0)+s)*n}}};ya.ease=lt["quad.out"];Hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return _f+=r+","+r+"Params,"});var Gm=function(e,t){this.id=my++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ym,this.set=t?t.getSetter:yf},Aa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,yo(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),wa||ii.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,yo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Eo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Sc(this,n),!s._dp||s.parent||Am(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Em(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Kd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Kd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Mo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?tc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts,this.totalTime(Fa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),xc(this),Ay(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Eo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Lt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?tc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ey);var i=dn;return dn=n,vf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Zd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(di(this,n),Vn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Vn(i)),this._dur||(this._zTime=-wt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-wt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ot(n)?n:bm,l=function(){var u=i.then;i.then=null,s&&s(),Ot(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){$o(this)},r})();ui(Aa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var On=(function(r){dm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Vn(n.sortChildren),It&&Bi(n.parent||It,Qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Cm(Qi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return na(0,arguments,this),this},t.from=function(i,s,o){return na(1,arguments,this),this},t.fromTo=function(i,s,o,a){return na(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ta(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Yt(i,s,di(this,o),1),this},t.call=function(i,s,o){return Bi(this,Yt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Yt(i,o,di(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ta(o).immediateRender=Vn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,d){return a.startAt=o,ta(a).immediateRender=Vn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,d)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Lt(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,p,g,m,_,v,y,M,b,A,w;if(this!==It&&u>l&&i>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,M=this._start,y=this._ts,_=!y,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=Lt(u%m),u===l?(g=this._repeat,h=c):(b=Lt(u/m),g=~~b,g&&g===b&&(h=c,g--),h>c&&(h=c)),b=Mo(this._tTime,m),!a&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),A&&g&1&&(h=c-h,w=1),g!==b&&!this._lock){var x=A&&b&1,E=x===(A&&g&1);if(g<b&&(x=!x),a=x?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Lt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=g),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Dy(this,Lt(a),Lt(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!b&&(si(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,o),h!==this._time||!this._ts&&!_){v=0,p&&(u+=this._zTime=-wt);break}}f=p}else{f=this._last;for(var I=i<0?i:h;f;){if(p=f._prev,(f._act||I<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(I-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(I-f._start)*f._ts,s,o||dn&&vf(f)),h!==this._time||!this._ts&&!_){v=0,p&&(u+=this._zTime=I?-wt:wt);break}}f=p}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-wt)._zTime=h>=a?1:-1,this._ts))return this._start=M,xc(this),this.render(i,s,o);this._onUpdate&&!s&&si(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Or(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(si(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(ur(s)||(s=di(this,s,i)),!(i instanceof Aa)){if(An(i))return i.forEach(function(a){return o.add(a,s)}),this;if(ln(i))return this.addLabel(i,s);if(Ot(i))i=Yt.delayedCall(0,i);else return this}return this!==i?Bi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-_i);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Yt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return ln(i)?this.removeLabel(i):Ot(i)?this.killTweensOf(i):(i.parent===this&&vc(this,i),i===this._recent&&(this._recent=this._last),us(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Lt(ii.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=di(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Yt.delayedCall(0,s||Ta,o);return a.data="isPause",this._hasPause=1,Bi(this,a,di(this,i))},t.removePause=function(i){var s=this._first;for(i=di(this,i);s;)s._start===i&&s.data==="isPause"&&Or(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)wr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=gi(i),l=this._first,c=ur(s),u;l;)l instanceof Yt?Ty(l._targets,a)&&(c?(!wr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=di(o,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,p=Yt.to(o,ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||wt,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&yo(p,m,0,1).render(p._time,!0,!0),f=1}u&&u.apply(p,d||[])}},s));return h?p.render(0):p},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ui({startAt:{time:di(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),jd(this,di(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),jd(this,di(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Lt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return us(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),us(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=_i,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Bi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Lt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;yo(o,o===It&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(It._ts&&(Em(It,tc(i,It)),Mm=ii.frame),ii.frame>=qd){qd+=li.autoSleep||120;var s=It._first;if((!s||!s._ts)&&li.autoSleep&&ii._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ii.sleep()}}},e})(Aa);ui(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var $y=function(e,t,n,i,s,o,a){var l=new Gn(this._pt,e,t,0,1,Km,null,s),c=0,u=0,d,h,f,p,g,m,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=ba(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),h=n.match(su)||[];d=su.exec(i);)p=d[0],g=i.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),p!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:p.charAt(1)==="="?oo(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=su.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(gm.test(i)||_)&&(l.e=0),this._pt=l,l},xf=function(e,t,n,i,s,o,a,l,c,u){Ot(i)&&(i=i(s||0,e,o));var d=e[t],h=n!=="get"?n:Ot(d)?c?e[t.indexOf("set")||!Ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Ot(d)?c?Qy:qm:Mf,p;if(ln(i)&&(~i.indexOf("random(")&&(i=ba(i)),i.charAt(1)==="="&&(p=oo(h,i)+(Mn(h)||0),(p||p===0)&&(i=p))),!u||h!==i||Mh)return!isNaN(h*i)&&i!==""?(p=new Gn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?tE:$m,0,f),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!d&&!(t in e)&&pf(t,i),$y.call(this,e,t,h,i,f,l||li.stringFilter,c))},Ky=function(e,t,n,i,s){if(Ot(e)&&(e=ia(e,s,t,n,i)),!Yi(e)||e.style&&e.nodeType||An(e)||mm(e))return ln(e)?ia(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ia(e[a],s,t,n,i);return o},Wm=function(e,t,n,i,s,o){var a,l,c,u;if(Qn[e]&&(a=new Qn[e]).init(s,a.rawVars?t[e]:Ky(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Gn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==eo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},wr,Mh,Sf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,p=e._dur,g=e._startAt,m=e._targets,_=e.parent,v=_&&_.data==="nested"?_.vars.targets:m,y=e._overwrite==="auto"&&!uf,M=e.timeline,b=i.easeReverse||d,A,w,x,E,I,R,U,H,O,k,z,N,$;if(M&&(!h||!s)&&(s="none"),e._ease=hs(s,ya.ease),e._rEase=b&&(hs(b)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||h&&!i.stagger){if(H=m[0]?cs(m[0]).harness:0,N=H&&i[H.prop],A=ec(i,mf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&p?Fl:yy),g._lazy=0),o){if(Or(e._startAt=Yt.set(m,ui({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&Vn(l),startAt:null,delay:0,onUpdate:c&&function(){return si(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dn||!a&&!f)&&e._startAt.revert(Fl),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!g){if(t&&(a=!1),x=ui({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Vn(l),immediateRender:a,stagger:0,parent:_},A),N&&(x[H.prop]=N),Or(e._startAt=Yt.set(m,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dn?e._startAt.revert(Fl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Vn(l)||l&&!p,w=0;w<m.length;w++){if(I=m[w],U=I._gsap||gf(m)[w]._gsap,e._ptLookup[w]=k={},mh[U.id]&&Lr.length&&Ql(),z=v===m?w:v.indexOf(I),H&&(O=new H).init(I,N||A,e,z,v)!==!1&&(e._pt=E=new Gn(e._pt,I,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(Q){k[Q]=E}),O.priority&&(R=1)),!H||N)for(x in A)Qn[x]&&(O=Wm(x,A,e,z,I,v))?O.priority&&(R=1):k[x]=E=xf.call(e,I,x,"get",A[x],z,v,0,i.stringFilter);e._op&&e._op[w]&&e.kill(I,e._op[w]),y&&e._pt&&(wr=e,It.killTweensOf(I,k,e.globalTime(t)),$=!e.parent,wr=0),e._pt&&l&&(mh[U.id]=1)}R&&Zm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,h&&t<=0&&M.render(_i,!0,!0)},Zy=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Mh=1,e.vars[t]="+=0",Sf(e,a),Mh=0,l?Ea(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,d.e&&(d.e=Vt(n)+Mn(d.e)),d.b&&(d.b=u.s+Mn(d.b))},jy=function(e,t){var n=e[0]?cs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=So({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Jy=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(An(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ia=function(e,t,n,i,s){return Ot(e)?e.call(t,n,i,s):ln(e)&&~e.indexOf("random(")?ba(e):e},Xm=_f+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ym={};Hn(Xm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ym[r]=1});var Yt=(function(r){dm(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ta(i))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,p=l.keyframes,g=l.defaults,m=l.scrollTrigger,_=i.parent||It,v=(An(n)||mm(n)?ur(n[0]):"length"in i)?[n]:gi(n),y,M,b,A,w,x,E,I;if(a._targets=v.length?gf(v):Ea("GSAP target "+n+" not found. https://gsap.com",!li.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||h||fl(c)||fl(u)){i=a.vars;var R=i.easeReverse||i.yoyoEase;if(y=a.timeline=new On({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:v}),y.kill(),y.parent=y._dp=Qi(a),y._start=0,h||fl(c)||fl(u)){if(A=v.length,E=h&&Lm(h),Yi(h))for(w in h)~Xm.indexOf(w)&&(I||(I={}),I[w]=h[w]);for(M=0;M<A;M++)b=ec(i,Ym),b.stagger=0,R&&(b.easeReverse=R),I&&So(b,I),x=v[M],b.duration=+ia(c,Qi(a),M,x,v),b.delay=(+ia(u,Qi(a),M,x,v)||0)-a._delay,!h&&A===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),y.to(x,b,E?E(M,x,v):0),y._ease=lt.none;y.duration()?c=u=0:a.timeline=0}else if(p){ta(ui(y.vars.defaults,{ease:"none"})),y._ease=hs(p.ease||i.ease||"none");var U=0,H,O,k;if(An(p))p.forEach(function(z){return y.to(v,z,">")}),y.duration();else{b={};for(w in p)w==="ease"||w==="easeEach"||Jy(w,p[w],b,p.easeEach);for(w in b)for(H=b[w].sort(function(z,N){return z.t-N.t}),U=0,M=0;M<H.length;M++)O=H[M],k={ease:O.e,duration:(O.t-(M?H[M-1].t:0))/100*c},k[w]=O.v,y.to(v,k,U),U+=k.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return f===!0&&!uf&&(wr=Qi(a),It.killTweensOf(v),wr=0),Bi(_,Qi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!p&&a._start===Lt(_._time)&&Vn(d)&&Cy(Qi(a))&&_.data!=="nested")&&(a._tTime=-wt,a.render(Math.max(0,-u)||0)),m&&Cm(Qi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-wt&&!u?l:i<wt?0:i,h,f,p,g,m,_,v,y;if(!c)Py(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(h=Lt(d%g),d===l?(p=this._repeat,h=c):(m=Lt(d/g),p=~~m,p&&p===m?(h=c,p--):h>c&&(h=c)),_=this._yoyo&&p&1,_&&(h=c-h),m=Mo(this._tTime,g),h===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!_&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(Lt(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(Rm(this,u?i:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var M=h<a;if(M!==this._inv){var b=M?a:c-a;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(M?-1:1)/b:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(si(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&_h(this,i,s,o),si(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&si(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&_h(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Or(this,1),!s&&!(u&&!a)&&(d||a||_)&&(si(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){wa||ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Sf(this,c),u=this._ease(c/this._dur),Zy(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Sc(this,0),this.parent||wm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?$o(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,wr&&wr.vars.overwrite!==!0)._first||$o(this),this.parent&&o!==this.timeline.totalDuration()&&yo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?gi(i):a,c=this._ptLookup,u=this._pt,d,h,f,p,g,m,_;if((!s||s==="all")&&wy(a,l))return s==="all"&&(this._pt=0),$o(this);for(d=this._op=this._op||[],s!=="all"&&(ln(s)&&(g={},Hn(s,function(v){return g[v]=1}),s=g),s=jy(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){h=c[_],s==="all"?(d[_]=s,p=h,f={}):(f=d[_]=d[_]||{},p=s);for(g in p)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&vc(this,m,"_pt"),delete h[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&$o(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return na(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return na(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return It.killTweensOf(i,s,o)},e})(Aa);ui(Yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hn("staggerTo,staggerFrom,staggerFromTo",function(r){Yt[r]=function(){var e=new On,t=vh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Mf=function(e,t,n){return e[t]=n},qm=function(e,t,n){return e[t](n)},Qy=function(e,t,n,i){return e[t](i.fp,n)},eE=function(e,t,n){return e.setAttribute(t,n)},yf=function(e,t){return Ot(e[t])?qm:hf(e[t])&&e.setAttribute?eE:Mf},$m=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},tE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Km=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ef=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},nE=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},iE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?vc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},rE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Zm=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Gn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||$m,this.d=l||this,this.set=c||Mf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=rE,this.m=n,this.mt=s,this.tween=i},r})();Hn(_f+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return mf[r]=1});ci.TweenMax=ci.TweenLite=Yt;ci.TimelineLite=ci.TimelineMax=On;It=new On({sortChildren:!1,defaults:ya,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});li.stringFilter=Vm;var fs=[],Bl={},sE=[],Qd=0,oE=0,uu=function(e){return(Bl[e]||sE).map(function(t){return t()})},yh=function(){var e=Date.now(),t=[];e-Qd>2&&(uu("matchMediaInit"),fs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ui.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),uu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Qd=e,uu("matchMedia"))},jm=(function(){function r(t,n){this.selector=n&&xh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=oE++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ot(n)&&(s=i,i=n,n=Ot);var o=this,a=function(){var c=Dt,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=xh(s)),Dt=o,d=i.apply(o,arguments),Ot(d)&&o._r.push(d),Dt=c,o.selector=u,o.isReverted=!1,d};return o.last=a,n===Ot?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Yt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof On?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Yt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=fs.length;o--;)fs[o].id===this.id&&fs.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),aE=(function(){function r(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Yi(n)||(n={matches:n});var o=new jm(0,s||this.scope),a=o.conditions={},l,c,u;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ui.matchMedia(n[c]),l&&(fs.indexOf(o)<0&&fs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(yh):l.addEventListener("change",yh)));return u&&i(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),nc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Bm(i)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return It.getTweensOf(e,t)},getProperty:function(e,t,n,i){ln(e)&&(e=gi(e)[0]);var s=cs(e||{}).get,o=n?bm:Tm;return n==="native"&&(n=""),e&&(t?o((Qn[t]&&Qn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Qn[a]&&Qn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=gi(e),e.length>1){var i=e.map(function(u){return Xn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var o=Qn[t],a=cs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;eo._pt=0,d.init(e,n?u+n:u,eo,0,[e]),d.render(1,d),eo._pt&&Ef(1,eo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Xn.to(e,ui((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return It.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=hs(e.ease,ya.ease)),$d(ya,e||{})},config:function(e){return $d(li,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Qn[a]&&!ci[a]&&Ea(t+" effect requires "+a+" plugin.")}),ou[t]=function(a,l,c){return n(gi(a),ui(l||{},s),c)},o&&(On.prototype[t]=function(a,l,c){return this.add(ou[t](a,Yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=hs(t)},parseEase:function(e,t){return arguments.length?hs(e,t):lt},getById:function(e){return It.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new On(e),i,s;for(n.smoothChildTiming=Vn(e.smoothChildTiming),It.remove(n),n._dp=0,n._time=n._tTime=It._time,i=It._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Yt&&i.vars.onComplete===i._targets[0]))&&Bi(n,i,i._start-i._delay),i=s;return Bi(It,n,0),n},context:function(e,t){return e?new jm(e,t):Dt},matchMedia:function(e){return new aE(e)},matchMediaRefresh:function(){return fs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||yh()},addEventListener:function(e,t){var n=Bl[e]||(Bl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Bl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:By,wrapYoyo:zy,distribute:Lm,random:Um,snap:Im,normalize:Oy,getUnit:Mn,clamp:Iy,splitColor:zm,toArray:gi,selector:xh,mapRange:Fm,pipe:Ny,unitize:Fy,interpolate:ky,shuffle:Dm},install:xm,effects:ou,ticker:ii,updateRoot:On.updateRoot,plugins:Qn,globalTimeline:It,core:{PropTween:Gn,globals:Sm,Tween:Yt,Timeline:On,Animation:Aa,getCache:cs,_removeLinkedListItem:vc,reverting:function(){return dn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return uf=e}}};Hn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return nc[r]=Yt[r]});ii.add(On.updateRoot);eo=nc.to({},{duration:0});var lE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},cE=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=lE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},hu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(ln(s)&&(l={},Hn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}cE(a,s)}}}},Xn=nc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},hu("roundProps",Sh),hu("modifiers"),hu("snap",Im))||nc;Yt.version=On.version=Xn.version="3.15.0";vm=1;ff()&&Eo();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;var ep,Ar,ao,Tf,as,tp,bf,uE=function(){return typeof window<"u"},hr={},Qr=180/Math.PI,lo=Math.PI/180,Gs=Math.atan2,np=1e8,wf=/([A-Z])/g,hE=/(left|right|width|margin|padding|x)/i,fE=/[\s,\(]\S/,ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Eh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},mE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_E=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Jm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Qm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},gE=function(e,t,n){return e.style[t]=n},vE=function(e,t,n){return e.style.setProperty(t,n)},xE=function(e,t,n){return e._gsap[t]=n},SE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ME=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},yE=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ut="transform",Wn=Ut+"Origin",EE=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in hr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ki[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=tr(i,a)}):this.tfm[e]=o.x?o[e]:tr(i,e),e===Wn&&(this.tfm.zOrigin=o.zOrigin);else return ki.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ut)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Wn,t,"")),e=Ut}(s||t)&&this.props.push(e,t,s[e])},e_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},TE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(wf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=bf(),(!s||!s.isStart)&&!n[Ut]&&(e_(n),i.zOrigin&&n[Wn]&&(n[Wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},t_=function(e,t){var n={target:e,props:[],revert:TE,save:EE};return e._gsap||Xn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},n_,Th=function(e,t){var n=Ar.createElementNS?Ar.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ar.createElement(e);return n&&n.style?n:Ar.createElement(e)},oi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(wf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,To(t)||t,1)||""},ip="O,Moz,ms,Ms,Webkit".split(","),To=function(e,t,n){var i=t||as,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ip[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ip[o]:"")+e},bh=function(){uE()&&window.document&&(ep=window,Ar=ep.document,ao=Ar.documentElement,as=Th("div")||{style:{}},Th("div"),Ut=To(Ut),Wn=Ut+"Origin",as.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",n_=!!To("perspective"),bf=Xn.core.reverting,Tf=1)},rp=function(e){var t=e.ownerSVGElement,n=Th("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ao.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ao.removeChild(n),s},sp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},i_=function(e){var t,n;try{t=e.getBBox()}catch{t=rp(e),n=1}return t&&(t.width||t.height)||n||(t=rp(e)),t&&!t.width&&!t.x&&!t.y?{x:+sp(e,["x","cx","x1"])||0,y:+sp(e,["y","cy","y1"])||0,width:0,height:0}:t},r_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&i_(e))},Br=function(e,t){if(t){var n=e.style,i;t in hr&&t!==Wn&&(t=Ut),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(wf,"-$1").toLowerCase())):n.removeAttribute(t)}},Cr=function(e,t,n,i,s,o){var a=new Gn(e._pt,t,n,0,1,o?Qm:Jm);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},op={deg:1,rad:1,turn:1},bE={grid:1,flex:1},zr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=as.style,l=hE.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",p,g,m,_;if(i===o||!s||op[i]||op[o])return s;if(o!=="px"&&!h&&(s=r(e,t,n,"px")),_=e.getCTM&&r_(e),(f||o==="%")&&(hr[t]||~t.indexOf("adius")))return p=_?e.getBBox()[l?"width":"height"]:e[u],Vt(f?s/p*d:s/100*p);if(a[l?"width":"height"]=d+(h?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ar||!g.appendChild)&&(g=Ar.body),m=g._gsap,m&&f&&m.width&&l&&m.time===ii.time&&!m.uncache)return Vt(s/m.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,p=e[u],v?e.style[t]=v:Br(e,t)}else(f||o==="%")&&!bE[oi(g,"display")]&&(a.position=oi(e,"position")),g===e&&(a.position="static"),g.appendChild(as),p=as[u],g.removeChild(as),a.position="absolute";return l&&f&&(m=cs(g),m.time=ii.time,m.width=g[u]),Vt(h?p*s/d:p&&s?d/p*s:0)},tr=function(e,t,n,i){var s;return Tf||bh(),t in ki&&t!=="transform"&&(t=ki[t],~t.indexOf(",")&&(t=t.split(",")[0])),hr[t]&&t!=="transform"?(s=Ra(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:rc(oi(e,Wn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ic[t]&&ic[t](e,t,n)||oi(e,t)||ym(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?zr(e,t,s,n)+n:s},wE=function(e,t,n,i){if(!n||n==="none"){var s=To(t,e,1),o=s&&oi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=oi(e,"borderTopColor"))}var a=new Gn(this._pt,e.style,t,0,1,Km),l=0,c=0,u,d,h,f,p,g,m,_,v,y,M,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=oi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=oi(e,t)||i,g?e.style[t]=g:Br(e,t)),u=[n,i],Vm(u),n=u[0],i=u[1],h=n.match(Qs)||[],b=i.match(Qs)||[],b.length){for(;d=Qs.exec(i);)m=d[0],v=i.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(g=h[c++]||"")&&(f=parseFloat(g)||0,M=g.substr((f+"").length),m.charAt(1)==="="&&(m=oo(f,m)+M),_=parseFloat(m),y=m.substr((_+"").length),l=Qs.lastIndex-y.length,y||(y=y||li.units[t]||M,l===i.length&&(i+=y,a.e+=y)),M!==y&&(f=zr(e,t,g,y)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:_-f,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Qm:Jm;return gm.test(i)&&(a.e=0),this._pt=a,a},ap={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},AE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ap[n]||n,t[1]=ap[i]||i,t.join(" ")},CE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],hr[a]&&(l=1,a=a==="transformOrigin"?Wn:Ut),Br(n,a);l&&(Br(n,Ut),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ra(n,1),o.uncache=1,e_(i)))}},ic={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Gn(e._pt,t,n,0,0,CE);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ca=[1,0,0,1,0,0],s_={},o_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},lp=function(e){var t=oi(e,Ut);return o_(t)?Ca:t.substr(7).match(_m).map(Vt)},Af=function(e,t){var n=e._gsap||cs(e),i=e.style,s=lp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ca:s):(s===Ca&&!e.offsetParent&&e!==ao&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ao.appendChild(e)),s=lp(e),l?i.display=l:Br(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ao.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},wh=function(e,t,n,i,s,o){var a=e._gsap,l=s||Af(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,f=l[0],p=l[1],g=l[2],m=l[3],_=l[4],v=l[5],y=t.split(" "),M=parseFloat(y[0])||0,b=parseFloat(y[1])||0,A,w,x,E;n?l!==Ca&&(w=f*m-p*g)&&(x=M*(m/w)+b*(-g/w)+(g*v-m*_)/w,E=M*(-p/w)+b*(f/w)-(f*v-p*_)/w,M=x,b=E):(A=i_(e),M=A.x+(~y[0].indexOf("%")?M/100*A.width:M),b=A.y+(~(y[1]||y[0]).indexOf("%")?b/100*A.height:b)),i||i!==!1&&a.smooth?(_=M-c,v=b-u,a.xOffset=d+(_*f+v*g)-_,a.yOffset=h+(_*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Wn]="0px 0px",o&&(Cr(o,a,"xOrigin",c,M),Cr(o,a,"yOrigin",u,b),Cr(o,a,"xOffset",d,a.xOffset),Cr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+b)},Ra=function(e,t){var n=e._gsap||new Gm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=oi(e,Wn)||"0",u,d,h,f,p,g,m,_,v,y,M,b,A,w,x,E,I,R,U,H,O,k,z,N,$,Q,P,ae,ce,Ne,ke,Ye;return u=d=h=g=m=_=v=y=M=0,f=p=1,n.svg=!!(e.getCTM&&r_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ut]!=="none"?l[Ut]:"")),i.scale=i.rotate=i.translate="none"),w=Af(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",N=""):N=!t&&e.getAttribute("data-svg-origin"),wh(e,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,w)),b=n.xOrigin||0,A=n.yOrigin||0,w!==Ca&&(R=w[0],U=w[1],H=w[2],O=w[3],u=k=w[4],d=z=w[5],w.length===6?(f=Math.sqrt(R*R+U*U),p=Math.sqrt(O*O+H*H),g=R||U?Gs(U,R)*Qr:0,v=H||O?Gs(H,O)*Qr+g:0,v&&(p*=Math.abs(Math.cos(v*lo))),n.svg&&(u-=b-(b*R+A*H),d-=A-(b*U+A*O))):(Ye=w[6],Ne=w[7],P=w[8],ae=w[9],ce=w[10],ke=w[11],u=w[12],d=w[13],h=w[14],x=Gs(Ye,ce),m=x*Qr,x&&(E=Math.cos(-x),I=Math.sin(-x),N=k*E+P*I,$=z*E+ae*I,Q=Ye*E+ce*I,P=k*-I+P*E,ae=z*-I+ae*E,ce=Ye*-I+ce*E,ke=Ne*-I+ke*E,k=N,z=$,Ye=Q),x=Gs(-H,ce),_=x*Qr,x&&(E=Math.cos(-x),I=Math.sin(-x),N=R*E-P*I,$=U*E-ae*I,Q=H*E-ce*I,ke=O*I+ke*E,R=N,U=$,H=Q),x=Gs(U,R),g=x*Qr,x&&(E=Math.cos(x),I=Math.sin(x),N=R*E+U*I,$=k*E+z*I,U=U*E-R*I,z=z*E-k*I,R=N,k=$),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,_=180-_),f=Vt(Math.sqrt(R*R+U*U+H*H)),p=Vt(Math.sqrt(z*z+Ye*Ye)),x=Gs(k,z),v=Math.abs(x)>2e-4?x*Qr:0,M=ke?1/(ke<0?-ke:ke):0),n.svg&&(N=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!o_(oi(e,Ut)),N&&e.setAttribute("transform",N))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Vt(f),n.scaleY=Vt(p),n.rotation=Vt(g)+a,n.rotationX=Vt(m)+a,n.rotationY=Vt(_)+a,n.skewX=v+a,n.skewY=y+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Wn]=rc(c)),n.xOffset=n.yOffset=0,n.force3D=li.force3D,n.renderTransform=n.svg?PE:n_?a_:RE,n.uncache=0,n},rc=function(e){return(e=e.split(" "))[0]+" "+e[1]},fu=function(e,t,n){var i=Mn(t);return Vt(parseFloat(t)+parseFloat(zr(e,"x",n+"px",i)))+i},RE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,a_(e,t)},Zr="0deg",Ho="0px",jr=") ",a_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,p=n.scaleX,g=n.scaleY,m=n.transformPerspective,_=n.force3D,v=n.target,y=n.zOrigin,M="",b=_==="auto"&&e&&e!==1||_===!0;if(y&&(d!==Zr||u!==Zr)){var A=parseFloat(u)*lo,w=Math.sin(A),x=Math.cos(A),E;A=parseFloat(d)*lo,E=Math.cos(A),o=fu(v,o,w*E*-y),a=fu(v,a,-Math.sin(A)*-y),l=fu(v,l,x*E*-y+y)}m!==Ho&&(M+="perspective("+m+jr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(b||o!==Ho||a!==Ho||l!==Ho)&&(M+=l!==Ho||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+jr),c!==Zr&&(M+="rotate("+c+jr),u!==Zr&&(M+="rotateY("+u+jr),d!==Zr&&(M+="rotateX("+d+jr),(h!==Zr||f!==Zr)&&(M+="skew("+h+", "+f+jr),(p!==1||g!==1)&&(M+="scale("+p+", "+g+jr),v.style[Ut]=M||"translate(0, 0)"},PE=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,p=n.xOrigin,g=n.yOrigin,m=n.xOffset,_=n.yOffset,v=n.forceCSS,y=parseFloat(o),M=parseFloat(a),b,A,w,x,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=lo,c*=lo,b=Math.cos(l)*d,A=Math.sin(l)*d,w=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=lo,E=Math.tan(c-u),E=Math.sqrt(1+E*E),w*=E,x*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),b*=E,A*=E)),b=Vt(b),A=Vt(A),w=Vt(w),x=Vt(x)):(b=d,x=h,A=w=0),(y&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(y=zr(f,"x",o,"px"),M=zr(f,"y",a,"px")),(p||g||m||_)&&(y=Vt(y+p-(p*b+g*w)+m),M=Vt(M+g-(p*A+g*x)+_)),(i||s)&&(E=f.getBBox(),y=Vt(y+i/100*E.width),M=Vt(M+s/100*E.height)),E="matrix("+b+","+A+","+w+","+x+","+y+","+M+")",f.setAttribute("transform",E),v&&(f.style[Ut]=E)},DE=function(e,t,n,i,s){var o=360,a=ln(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Qr:1),c=l-i,u=i+c+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*np)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*np)%o-~~(c/o)*o)),e._pt=h=new Gn(e._pt,t,n,i,c,dE),h.e=u,h.u="deg",e._props.push(n),h},cp=function(e,t){for(var n in t)e[n]=t[n];return e},LE=function(e,t,n){var i=cp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,d,h,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ut]=t,a=Ra(n,1),Br(n,Ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ut],o[Ut]=t,a=Ra(n,1),o[Ut]=c);for(l in hr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=Mn(c),p=Mn(u),d=f!==p?zr(n,l,c,p):parseFloat(c),h=parseFloat(u),e._pt=new Gn(e._pt,a,l,d,h-d,Eh),e._pt.u=p||0,e._props.push(l));cp(a,i)};Hn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});ic[e>1?"border"+r:r]=function(a,l,c,u,d){var h,f;if(arguments.length<4)return h=o.map(function(p){return tr(a,p,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},o.forEach(function(p,g){return f[p]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,f,d)}});var l_={name:"css",register:bh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,d,h,f,p,g,m,_,v,y,M,b,A,w,x,E;Tf||bh(),this.styles=this.styles||t_(e),x=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Qn[g]&&Wm(g,t,n,i,e,s)))){if(f=typeof u,p=ic[g],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ba(u)),p)p(this,e,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Ir.lastIndex=0,Ir.test(c)||(m=Mn(c),_=Mn(u),_?m!==_&&(c=zr(e,g,c,_)+_):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),x.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],ln(c)&&~c.indexOf("random(")&&(c=ba(c)),Mn(c+"")||c==="auto"||(c+=li.units[g]||Mn(tr(e,g))||""),(c+"").charAt(1)==="="&&(c=tr(e,g))):c=tr(e,g),h=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),g in ki&&(g==="autoAlpha"&&(h===1&&tr(e,"visibility")==="hidden"&&d&&(h=0),x.push("visibility",0,a.visibility),Cr(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=ki[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in hr,y){if(this.styles.save(g),E=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=oi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var I=e.style.perspective;e.style.perspective=u,u=oi(e,"perspective"),I?e.style.perspective=I:Br(e,"perspective")}d=parseFloat(u)}if(M||(b=e._gsap,b.renderTransform&&!t.parseTransform||Ra(e,t.parseTransform),A=t.smoothOrigin!==!1&&b.smooth,M=this._pt=new Gn(this._pt,a,Ut,0,1,b.renderTransform,b,0,-1),M.dep=1),g==="scale")this._pt=new Gn(this._pt,b,"scaleY",b.scaleY,(v?oo(b.scaleY,v+d):d)-b.scaleY||0,Eh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){x.push(Wn,0,a[Wn]),u=AE(u),b.svg?wh(e,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==b.zOrigin&&Cr(this,b,"zOrigin",b.zOrigin,_),Cr(this,a,g,rc(c),rc(u)));continue}else if(g==="svgOrigin"){wh(e,u,1,A,0,this);continue}else if(g in s_){DE(this,b,g,h,v?oo(h,v+u):u);continue}else if(g==="smoothOrigin"){Cr(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){LE(this,u,e);continue}}else g in a||(g=To(g)||g);if(y||(d||d===0)&&(h||h===0)&&!fE.test(u)&&g in a)m=(c+"").substr((h+"").length),d||(d=0),_=Mn(u)||(g in li.units?li.units[g]:m),m!==_&&(h=zr(e,g,c,_)),this._pt=new Gn(this._pt,y?b:a,g,h,(v?oo(h,v+d):d)-h,!y&&(_==="px"||g==="zIndex")&&t.autoRound!==!1?_E:Eh),this._pt.u=_||0,y&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=mE):m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=pE);else if(g in a)wE.call(this,e,g,c,v?v+u:u);else if(g in e)this.add(e,g,c||e[g],v?v+u:u,i,s);else if(g!=="parseTransform"){pf(g,u);continue}y||(g in a?x.push(g,0,a[g]):typeof e[g]=="function"?x.push(g,2,e[g]()):x.push(g,1,c||e[g])),o.push(g)}}w&&Zm(this)},render:function(e,t){if(t.tween._time||!bf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:tr,aliases:ki,getSetter:function(e,t,n){var i=ki[t];return i&&i.indexOf(",")<0&&(t=i),t in hr&&t!==Wn&&(e._gsap.x||tr(e,"x"))?n&&tp===n?t==="scale"?SE:xE:(tp=n||{})&&(t==="scale"?ME:yE):e.style&&!hf(e.style[t])?gE:~t.indexOf("-")?vE:yf(e,t)},core:{_removeProperty:Br,_getMatrix:Af}};Xn.utils.checkPrefix=To;Xn.core.getStyleSaver=t_;(function(r,e,t,n){var i=Hn(r+","+e+","+t,function(s){hr[s]=1});Hn(e,function(s){li.units[s]="deg",s_[s]=1}),ki[i[13]]=r+","+e,Hn(n,function(s){var o=s.split(":");ki[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){li.units[r]="px"});Xn.registerPlugin(l_);var St=Xn.registerPlugin(l_)||Xn;St.core.Tween;function IE(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function UE(r,e,t){return e&&IE(r.prototype,e),r}var hn,zl,ri,Rr,Pr,co,c_,es,uo,u_,sr,Ti,h_,f_=function(){return hn||typeof window<"u"&&(hn=window.gsap)&&hn.registerPlugin&&hn},d_=1,to=[],ot=[],Wi=[],ra=Date.now,Ah=function(e,t){return t},NE=function(){var e=uo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ot),i.push.apply(i,Wi),ot=n,Wi=i,Ah=function(o,a){return t[o](a)}},Ur=function(e,t){return~Wi.indexOf(e)&&Wi[Wi.indexOf(e)+1][t]},sa=function(e){return!!~u_.indexOf(e)},Rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},dl="scrollLeft",pl="scrollTop",Ch=function(){return sr&&sr.isPressed||ot.cache++},sc=function(e,t){var n=function i(s){if(s||s===0){d_&&(ri.history.scrollRestoration="manual");var o=sr&&sr.isPressed;s=i.v=Math.round(s)||(sr&&sr.iOS?1:0),e(s),i.cacheID=ot.cache,o&&Ah("ss",s)}else(t||ot.cache!==i.cacheID||Ah("ref"))&&(i.cacheID=ot.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Un={s:dl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:sc(function(r){return arguments.length?ri.scrollTo(r,jt.sc()):ri.pageXOffset||Rr[dl]||Pr[dl]||co[dl]||0})},jt={s:pl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Un,sc:sc(function(r){return arguments.length?ri.scrollTo(Un.sc(),r):ri.pageYOffset||Rr[pl]||Pr[pl]||co[pl]||0})},Fn=function(e,t){return(t&&t._ctx&&t._ctx.selector||hn.utils.toArray)(e)[0]||(typeof e=="string"&&hn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},FE=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},kr=function(e,t){var n=t.s,i=t.sc;sa(e)&&(e=Rr.scrollingElement||Pr);var s=ot.indexOf(e),o=i===jt.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+o]||Rn(e,"scroll",Ch);var a=ot[s+o],l=a||(ot[s+o]=sc(Ur(e,n),!0)||(sa(e)?i:sc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=hn.getProperty(e,"scrollBehavior")==="smooth"),l},Rh=function(e,t,n){var i=e,s=e,o=ra(),a=o,l=t||50,c=Math.max(500,l*3),u=function(p,g){var m=ra();g||m-o>l?(s=i,i=p,a=o,o=m):n?i+=p:i=s+(p-s)/(m-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},h=function(p){var g=a,m=s,_=ra();return(p||p===0)&&p!==i&&u(p),o===a||_-a>c?0:(i+(n?m:-m))/((n?_:o)-g)*1e3};return{update:u,reset:d,getVelocity:h}},Go=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},up=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},p_=function(){uo=hn.core.globals().ScrollTrigger,uo&&uo.core&&NE()},m_=function(e){return hn=e||f_(),!zl&&hn&&typeof document<"u"&&document.body&&(ri=window,Rr=document,Pr=Rr.documentElement,co=Rr.body,u_=[ri,Rr,Pr,co],hn.utils.clamp,h_=hn.core.context||function(){},es="onpointerenter"in co?"pointer":"mouse",c_=Gt.isTouch=ri.matchMedia&&ri.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ri||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ti=Gt.eventTypes=("ontouchstart"in Pr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return d_=0},500),zl=1),uo||p_(),zl};Un.op=jt;ot.cache=0;var Gt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){zl||m_(hn)||console.warn("Please gsap.registerPlugin(Observer)"),uo||p_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,g=n.event,m=n.onDragStart,_=n.onDragEnd,v=n.onDrag,y=n.onPress,M=n.onRelease,b=n.onRight,A=n.onLeft,w=n.onUp,x=n.onDown,E=n.onChangeX,I=n.onChangeY,R=n.onChange,U=n.onToggleX,H=n.onToggleY,O=n.onHover,k=n.onHoverEnd,z=n.onMove,N=n.ignoreCheck,$=n.isNormalizer,Q=n.onGestureStart,P=n.onGestureEnd,ae=n.onWheel,ce=n.onEnable,Ne=n.onDisable,ke=n.onClick,Ye=n.scrollSpeed,Z=n.capture,ee=n.allowClicks,re=n.lockAxis,Le=n.onLockAxis;this.target=a=Fn(a)||Pr,this.vars=n,f&&(f=hn.utils.toArray(f)),i=i||1e-9,s=s||0,p=p||1,Ye=Ye||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ri.getComputedStyle(co).lineHeight)||22);var Ie,Ce,ct,Ee,ze,Ze,Be,X=this,L=0,pt=0,nt=n.passive||!u&&n.passive!==!1,Ve=kr(a,Un),xe=kr(a,jt),C=Ve(),S=xe(),F=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ti[0]==="pointerdown",j=sa(a),J=a.ownerDocument||Rr,q=[0,0,0],ge=[0,0,0],oe=0,Re=function(){return oe=ra()},Se=function(Pe,Je){return(X.event=Pe)&&f&&FE(Pe.target,f)||Je&&F&&Pe.pointerType!=="touch"||N&&N(Pe,Je)},ne=function(){X._vx.reset(),X._vy.reset(),Ce.pause(),d&&d(X)},se=function(){var Pe=X.deltaX=up(q),Je=X.deltaY=up(ge),me=Math.abs(Pe)>=i,Ge=Math.abs(Je)>=i;R&&(me||Ge)&&R(X,Pe,Je,q,ge),me&&(b&&X.deltaX>0&&b(X),A&&X.deltaX<0&&A(X),E&&E(X),U&&X.deltaX<0!=L<0&&U(X),L=X.deltaX,q[0]=q[1]=q[2]=0),Ge&&(x&&X.deltaY>0&&x(X),w&&X.deltaY<0&&w(X),I&&I(X),H&&X.deltaY<0!=pt<0&&H(X),pt=X.deltaY,ge[0]=ge[1]=ge[2]=0),(Ee||ct)&&(z&&z(X),ct&&(m&&ct===1&&m(X),v&&v(X),ct=0),Ee=!1),Ze&&!(Ze=!1)&&Le&&Le(X),ze&&(ae(X),ze=!1),Ie=0},Me=function(Pe,Je,me){q[me]+=Pe,ge[me]+=Je,X._vx.update(Pe),X._vy.update(Je),c?Ie||(Ie=requestAnimationFrame(se)):se()},Te=function(Pe,Je){re&&!Be&&(X.axis=Be=Math.abs(Pe)>Math.abs(Je)?"x":"y",Ze=!0),Be!=="y"&&(q[2]+=Pe,X._vx.update(Pe,!0)),Be!=="x"&&(ge[2]+=Je,X._vy.update(Je,!0)),c?Ie||(Ie=requestAnimationFrame(se)):se()},fe=function(Pe){if(!Se(Pe,1)){Pe=Go(Pe,u);var Je=Pe.clientX,me=Pe.clientY,Ge=Je-X.x,Oe=me-X.y,We=X.isDragging;X.x=Je,X.y=me,(We||(Ge||Oe)&&(Math.abs(X.startX-Je)>=s||Math.abs(X.startY-me)>=s))&&(ct||(ct=We?2:1),We||(X.isDragging=!0),Te(Ge,Oe))}},He=X.onPress=function(ve){Se(ve,1)||ve&&ve.button||(X.axis=Be=null,Ce.pause(),X.isPressed=!0,ve=Go(ve),L=pt=0,X.startX=X.x=ve.clientX,X.startY=X.y=ve.clientY,X._vx.reset(),X._vy.reset(),Rn($?a:J,Ti[1],fe,nt,!0),X.deltaX=X.deltaY=0,y&&y(X))},D=X.onRelease=function(ve){if(!Se(ve,1)){Cn($?a:J,Ti[1],fe,!0);var Pe=!isNaN(X.y-X.startY),Je=X.isDragging,me=Je&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),Ge=Go(ve);!me&&Pe&&(X._vx.reset(),X._vy.reset(),u&&ee&&hn.delayedCall(.08,function(){if(ra()-oe>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(J.createEvent){var Oe=J.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,ri,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Oe)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,d&&Je&&!$&&Ce.restart(!0),ct&&se(),_&&Je&&_(X),M&&M(X,me)}},le=function(Pe){return Pe.touches&&Pe.touches.length>1&&(X.isGesturing=!0)&&Q(Pe,X.isDragging)},ie=function(){return(X.isGesturing=!1)||P(X)},de=function(Pe){if(!Se(Pe)){var Je=Ve(),me=xe();Me((Je-C)*Ye,(me-S)*Ye,1),C=Je,S=me,d&&Ce.restart(!0)}},te=function(Pe){if(!Se(Pe)){Pe=Go(Pe,u),ae&&(ze=!0);var Je=(Pe.deltaMode===1?l:Pe.deltaMode===2?ri.innerHeight:1)*p;Me(Pe.deltaX*Je,Pe.deltaY*Je,0),d&&!$&&Ce.restart(!0)}},K=function(Pe){if(!Se(Pe)){var Je=Pe.clientX,me=Pe.clientY,Ge=Je-X.x,Oe=me-X.y;X.x=Je,X.y=me,Ee=!0,d&&Ce.restart(!0),(Ge||Oe)&&Te(Ge,Oe)}},ye=function(Pe){X.event=Pe,O(X)},Fe=function(Pe){X.event=Pe,k(X)},ht=function(Pe){return Se(Pe)||Go(Pe,u)&&ke(X)};Ce=X._dc=hn.delayedCall(h||.25,ne).pause(),X.deltaX=X.deltaY=0,X._vx=Rh(0,50,!0),X._vy=Rh(0,50,!0),X.scrollX=Ve,X.scrollY=xe,X.isDragging=X.isGesturing=X.isPressed=!1,h_(this),X.enable=function(ve){return X.isEnabled||(Rn(j?J:a,"scroll",Ch),o.indexOf("scroll")>=0&&Rn(j?J:a,"scroll",de,nt,Z),o.indexOf("wheel")>=0&&Rn(a,"wheel",te,nt,Z),(o.indexOf("touch")>=0&&c_||o.indexOf("pointer")>=0)&&(Rn(a,Ti[0],He,nt,Z),Rn(J,Ti[2],D),Rn(J,Ti[3],D),ee&&Rn(a,"click",Re,!0,!0),ke&&Rn(a,"click",ht),Q&&Rn(J,"gesturestart",le),P&&Rn(J,"gestureend",ie),O&&Rn(a,es+"enter",ye),k&&Rn(a,es+"leave",Fe),z&&Rn(a,es+"move",K)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=Ee=ct=!1,X._vx.reset(),X._vy.reset(),C=Ve(),S=xe(),ve&&ve.type&&He(ve),ce&&ce(X)),X},X.disable=function(){X.isEnabled&&(to.filter(function(ve){return ve!==X&&sa(ve.target)}).length||Cn(j?J:a,"scroll",Ch),X.isPressed&&(X._vx.reset(),X._vy.reset(),Cn($?a:J,Ti[1],fe,!0)),Cn(j?J:a,"scroll",de,Z),Cn(a,"wheel",te,Z),Cn(a,Ti[0],He,Z),Cn(J,Ti[2],D),Cn(J,Ti[3],D),Cn(a,"click",Re,!0),Cn(a,"click",ht),Cn(J,"gesturestart",le),Cn(J,"gestureend",ie),Cn(a,es+"enter",ye),Cn(a,es+"leave",Fe),Cn(a,es+"move",K),X.isEnabled=X.isPressed=X.isDragging=!1,Ne&&Ne(X))},X.kill=X.revert=function(){X.disable();var ve=to.indexOf(X);ve>=0&&to.splice(ve,1),sr===X&&(sr=0)},to.push(X),$&&sa(a)&&(sr=X),X.enable(g)},UE(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Gt.version="3.15.0";Gt.create=function(r){return new Gt(r)};Gt.register=m_;Gt.getAll=function(){return to.slice()};Gt.getById=function(r){return to.filter(function(e){return e.vars.id===r})[0]};f_()&&hn.registerPlugin(Gt);var Ae,Zs,st,xt,ti,gt,Cf,oc,Pa,oa,Zo,ml,xn,Mc,Ph,Ln,hp,fp,js,__,du,g_,Dn,Dh,v_,x_,Mr,Lh,Rf,ho,Pf,aa,Ih,pu,_l=1,Sn=Date.now,mu=Sn(),xi=0,jo=0,dp=function(e,t,n){var i=jn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},pp=function(e,t){return t&&(!jn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},OE=function r(){return jo&&requestAnimationFrame(r)},mp=function(){return Mc=1},_p=function(){return Mc=0},Ni=function(e){return e},Jo=function(e){return Math.round(e*1e5)/1e5||0},S_=function(){return typeof window<"u"},M_=function(){return Ae||S_()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},gs=function(e){return!!~Cf.indexOf(e)},y_=function(e){return(e==="Height"?Pf:st["inner"+e])||ti["client"+e]||gt["client"+e]},E_=function(e){return Ur(e,"getBoundingClientRect")||(gs(e)?function(){return Wl.width=st.innerWidth,Wl.height=Pf,Wl}:function(){return nr(e)})},BE=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Ur(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?y_(s):e["client"+s])||0}},zE=function(e,t){return!t||~Wi.indexOf(e)?E_(e):function(){return Wl}},Vi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Ur(e,n))?o()-E_(e)()[s]:gs(e)?(ti[n]||gt[n])-y_(i):e[n]-e["offset"+i])},gl=function(e,t){for(var n=0;n<js.length;n+=3)(!t||~t.indexOf(js[n+1]))&&e(js[n],js[n+1],js[n+2])},jn=function(e){return typeof e=="string"},yn=function(e){return typeof e=="function"},Qo=function(e){return typeof e=="number"},ts=function(e){return typeof e=="object"},Wo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ws=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Xs=Math.abs,T_="left",b_="top",Df="right",Lf="bottom",ds="width",ps="height",la="Right",ca="Left",ua="Top",ha="Bottom",Xt="padding",pi="margin",bo="Width",If="Height",Zt="px",mi=function(e){return st.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},kE=function(e){var t=mi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},gp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},nr=function(e,t){var n=t&&mi(e)[Ph]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},ac=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},w_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},VE=function(e){return function(t){return Ae.utils.snap(w_(e),t)}},Uf=function(e){var t=Ae.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},HE=function(e){return function(t,n){return Uf(w_(e))(t,n.direction)}},vl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},on=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},xl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},vp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Sl={toggleActions:"play",anticipatePin:0},lc={top:0,left:0,center:.5,bottom:1,right:1},kl=function(e,t){if(jn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in lc?lc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ml=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,p=xt.createElement("div"),g=gs(n)||Ur(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=g?gt:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,y=v?c:u,M="border-color:"+y+";font-size:"+d+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(M+=(i===jt?Df:Lf)+":"+(o+parseFloat(h))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=M,p.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(p,_.children[0]):_.appendChild(p),p._offset=p["offset"+i.op.d2],Vl(p,0,i,v),p},Vl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+bo]=1,s["border"+a+bo]=0,s[n.p]=t+"px",Ae.set(e,s)},rt=[],Uh={},Da,xp=function(){return Sn()-xi>34&&(Da||(Da=requestAnimationFrame(ar)))},Ys=function(){(!Dn||!Dn.isPressed||Dn.startX>gt.clientWidth)&&(ot.cache++,Dn?Da||(Da=requestAnimationFrame(ar)):ar(),xi||xs("scrollStart"),xi=Sn())},_u=function(){x_=st.innerWidth,v_=st.innerHeight},ea=function(e){ot.cache++,(e===!0||!xn&&!g_&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!Dh||x_!==st.innerWidth||Math.abs(st.innerHeight-v_)>st.innerHeight*.25))&&oc.restart(!0)},vs={},GE=[],A_=function r(){return sn(Ke,"scrollEnd",r)||ls(!0)},xs=function(e){return vs[e]&&vs[e].map(function(t){return t()})||GE},Zn=[],C_=function(e){for(var t=0;t<Zn.length;t+=5)(!e||Zn[t+4]&&Zn[t+4].query===e)&&(Zn[t].style.cssText=Zn[t+1],Zn[t].getBBox&&Zn[t].setAttribute("transform",Zn[t+2]||""),Zn[t+3].uncache=1)},R_=function(){return ot.forEach(function(e){return yn(e)&&++e.cacheID&&(e.rec=e())})},Nf=function(e,t){var n;for(Ln=0;Ln<rt.length;Ln++)n=rt[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));aa=!0,t&&C_(t),t||xs("revert")},P_=function(e,t){ot.cache++,(t||!In)&&ot.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),jn(e)&&(st.history.scrollRestoration=Rf=e)},In,ms=0,Sp,WE=function(){if(Sp!==ms){var e=Sp=ms;requestAnimationFrame(function(){return e===ms&&ls(!0)})}},D_=function(){gt.appendChild(ho),Pf=!Dn&&ho.offsetHeight||st.innerHeight,gt.removeChild(ho)},Mp=function(e){return Pa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ls=function(e,t){if(ti=xt.documentElement,gt=xt.body,Cf=[st,xt,ti,gt],xi&&!e&&!aa){on(Ke,"scrollEnd",A_);return}D_(),In=Ke.isRefreshing=!0,aa||R_();var n=xs("refreshInit");__&&Ke.sort(),t||Nf(),ot.forEach(function(i){yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),aa=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Ih=1,Mp(!0),rt.forEach(function(i){var s=Vi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Mp(!1),Ih=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ot.forEach(function(i){yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),P_(Rf,1),oc.pause(),ms++,In=2,ar(2),rt.forEach(function(i){return yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),In=Ke.isRefreshing=!1,xs("refresh")},Nh=0,Hl=1,fa,ar=function(e){if(e===2||!In&&!aa){Ke.isUpdating=!0,fa&&fa.update(0);var t=rt.length,n=Sn(),i=n-mu>=50,s=t&&rt[0].scroll();if(Hl=Nh>s?-1:1,In||(Nh=s),i&&(xi&&!Mc&&n-xi>200&&(xi=0,xs("scrollEnd")),Zo=mu,mu=n),Hl<0){for(Ln=t;Ln-- >0;)rt[Ln]&&rt[Ln].update(0,i);Hl=1}else for(Ln=0;Ln<t;Ln++)rt[Ln]&&rt[Ln].update(0,i);Ke.isUpdating=!1}Da=0},Fh=[T_,b_,Lf,Df,pi+ha,pi+la,pi+ua,pi+ca,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Gl=Fh.concat([ds,ps,"boxSizing","max"+bo,"max"+If,"position",pi,Xt,Xt+ua,Xt+la,Xt+ha,Xt+ca]),XE=function(e,t,n){fo(n);var i=e._gsap;if(i.spacerIsNative)fo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},gu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Fh.length,o=t.style,a=e.style,l;s--;)l=Fh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Lf]=a[Df]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ds]=ac(e,Un)+Zt,o[ps]=ac(e,jt)+Zt,o[Xt]=a[pi]=a[b_]=a[T_]="0",fo(i),a[ds]=a["max"+bo]=n[ds],a[ps]=a["max"+If]=n[ps],a[Xt]=n[Xt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},YE=/([A-Z])/g,fo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(YE,"-$1").toLowerCase())}},yl=function(e){for(var t=Gl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Gl[s],n[Gl[s]]);return i.t=e,i},qE=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Wl={left:0,top:0},yp=function(e,t,n,i,s,o,a,l,c,u,d,h,f,p){yn(e)&&(e=e(l)),jn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?kl("0"+e.substr(3),n):0));var g=f?f.time():0,m,_,v;if(f&&f.seek(0),isNaN(e)||(e=+e),Qo(e))f&&(e=Ae.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),a&&Vl(a,n,i,!0);else{yn(t)&&(t=t(l));var y=(e||"0").split(" "),M,b,A,w;v=Fn(t,l)||gt,M=nr(v)||{},(!M||!M.left&&!M.top)&&mi(v).display==="none"&&(w=v.style.display,v.style.display="block",M=nr(v),w?v.style.display=w:v.style.removeProperty("display")),b=kl(y[0],M[i.d]),A=kl(y[1]||"0",n),e=M[i.p]-c[i.p]-u+b+s-A,a&&Vl(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var x=e+n,E=o._isStart;m="scroll"+i.d2,Vl(o,x,i,E&&x>20||!E&&(d?Math.max(gt[m],ti[m]):o.parentNode[m])<=x+1),d&&(c=nr(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Zt))}return f&&v&&(m=nr(v),f.seek(h),_=nr(v),f._caScrollDist=m[i.p]-_[i.p],e=e/f._caScrollDist*h),f&&f.seek(g),f?e:Math.round(e)},$E=/(webkit|moz|length|cssText|inset)/i,Ep=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===gt){e._stOrig=s.cssText,a=mi(e);for(o in a)!+o&&!$E.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},L_=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},El=function(e,t,n){var i={};i[t.p]="+="+n,Ae.set(e,i)},Tp=function(e,t){var n=kr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,d){var h=o.tween,f=l.onComplete,p={};c=c||n();var g=L_(n,c,function(){h.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return g(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){ot.cache++,o.tween&&ar()},l.onComplete=function(){o.tween=0,f&&f.call(h)},h=o.tween=Ae.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},on(e,"wheel",n.wheelHandler),Ke.isTouch&&on(e,"touchmove",n.wheelHandler),s},Ke=(function(){function r(t,n){Zs||r.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Lh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!jo){this.update=this.refresh=this.kill=Ni;return}n=gp(jn(n)||Qo(n)||n.nodeType?{trigger:n}:n,Sl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,p=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,_=s.onScrubComplete,v=s.onSnapComplete,y=s.once,M=s.snap,b=s.pinReparent,A=s.pinSpacer,w=s.containerAnimation,x=s.fastScrollEnd,E=s.preventOverlaps,I=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Un:jt,R=!d&&d!==0,U=Fn(n.scroller||st),H=Ae.core.getCache(U),O=gs(U),k=("pinType"in n?n.pinType:Ur(U,"pinType")||O&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],N=R&&n.toggleActions.split(" "),$="markers"in n?n.markers:Sl.markers,Q=O?0:parseFloat(mi(U)["border"+I.p2+bo])||0,P=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(P)},ce=BE(U,O,I),Ne=zE(U,O),ke=0,Ye=0,Z=0,ee=kr(U,I),re,Le,Ie,Ce,ct,Ee,ze,Ze,Be,X,L,pt,nt,Ve,xe,C,S,F,j,J,q,ge,oe,Re,Se,ne,se,Me,Te,fe,He,D,le,ie,de,te,K,ye,Fe;if(P._startClamp=P._endClamp=!1,P._dir=I,m*=45,P.scroller=U,P.scroll=w?w.time.bind(w):ee,Ce=ee(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(__=1,n.refreshPriority===-9999&&(fa=P)),H.tweenScroll=H.tweenScroll||{top:Tp(U,jt),left:Tp(U,Un)},P.tweenTo=re=H.tweenScroll[I.p],P.scrubDuration=function(me){le=Qo(me)&&me,le?D?D.duration(me):D=Ae.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return _&&_(P)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(d),fe=0,l||(l=i.vars.id)),M&&((!ts(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in gt.style&&Ae.set(O?[gt,ti]:U,{scrollBehavior:"auto"}),ot.forEach(function(me){return yn(me)&&me.target===(O?xt.scrollingElement||ti:U)&&(me.smooth=!1)}),Ie=yn(M.snapTo)?M.snapTo:M.snapTo==="labels"?VE(i):M.snapTo==="labelsDirectional"?HE(i):M.directional!==!1?function(me,Ge){return Uf(M.snapTo)(me,Sn()-Ye<500?0:Ge.direction)}:Ae.utils.snap(M.snapTo),ie=M.duration||{min:.1,max:2},ie=ts(ie)?oa(ie.min,ie.max):oa(ie,ie),de=Ae.delayedCall(M.delay||le/2||.1,function(){var me=ee(),Ge=Sn()-Ye<500,Oe=re.tween;if((Ge||Math.abs(P.getVelocity())<10)&&!Oe&&!Mc&&ke!==me){var We=(me-Ee)/Ve,Bt=i&&!R?i.totalProgress():We,qe=Ge?0:(Bt-He)/(Sn()-Zo)*1e3||0,Ct=Ae.utils.clamp(-We,1-We,Xs(qe/2)*qe/.185),qt=We+(M.inertia===!1?0:Ct),Rt,vt,mt=M,pn=mt.onStart,At=mt.onInterrupt,mn=mt.onComplete;if(Rt=Ie(qt,P),Qo(Rt)||(Rt=qt),vt=Math.max(0,Math.round(Ee+Rt*Ve)),me<=ze&&me>=Ee&&vt!==me){if(Oe&&!Oe._initted&&Oe.data<=Xs(vt-me))return;M.inertia===!1&&(Ct=Rt-We),re(vt,{duration:ie(Xs(Math.max(Xs(qt-Bt),Xs(Rt-Bt))*.185/qe/.05||0)),ease:M.ease||"power3",data:Xs(vt-me),onInterrupt:function(){return de.restart(!0)&&At&&Ws(P,At)},onComplete:function(){P.update(),ke=ee(),i&&!R&&(D?D.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),fe=He=i&&!R?i.totalProgress():P.progress,v&&v(P),mn&&Ws(P,mn)}},me,Ct*Ve,vt-me-Ct*Ve),pn&&Ws(P,pn,re.tween)}}else P.isActive&&ke!==me&&de.restart(!0)}).pause()),l&&(Uh[l]=P),h=P.trigger=Fn(h||f!==!0&&f),Fe=h&&h._gsap&&h._gsap.stRevert,Fe&&(Fe=Fe(P)),f=f===!0?h:Fn(f),jn(a)&&(a={targets:h,className:a}),f&&(p===!1||p===pi||(p=!p&&f.parentNode&&f.parentNode.style&&mi(f.parentNode).display==="flex"?!1:Xt),P.pin=f,Le=Ae.core.getCache(f),Le.spacer?xe=Le.pinState:(A&&(A=Fn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Le.spacerIsNative=!!A,A&&(Le.spacerState=yl(A))),Le.spacer=F=A||xt.createElement("div"),F.classList.add("pin-spacer"),l&&F.classList.add("pin-spacer-"+l),Le.pinState=xe=yl(f)),n.force3D!==!1&&Ae.set(f,{force3D:!0}),P.spacer=F=Le.spacer,Te=mi(f),Re=Te[p+I.os2],J=Ae.getProperty(f),q=Ae.quickSetter(f,I.a,Zt),gu(f,F,Te),S=yl(f)),$){pt=ts($)?gp($,vp):vp,X=Ml("scroller-start",l,U,I,pt,0),L=Ml("scroller-end",l,U,I,pt,0,X),j=X["offset"+I.op.d2];var ht=Fn(Ur(U,"content")||U);Ze=this.markerStart=Ml("start",l,ht,I,pt,j,0,w),Be=this.markerEnd=Ml("end",l,ht,I,pt,j,0,w),w&&(ye=Ae.quickSetter([Ze,Be],I.a,Zt)),!k&&!(Wi.length&&Ur(U,"fixedMarkers")===!0)&&(kE(O?gt:U),Ae.set([X,L],{force3D:!0}),ne=Ae.quickSetter(X,I.a,Zt),Me=Ae.quickSetter(L,I.a,Zt))}if(w){var ve=w.vars.onUpdate,Pe=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),ve&&ve.apply(w,Pe||[])})}if(P.previous=function(){return rt[rt.indexOf(P)-1]},P.next=function(){return rt[rt.indexOf(P)+1]},P.revert=function(me,Ge){if(!Ge)return P.kill(!0);var Oe=me!==!1||!P.enabled,We=xn;Oe!==P.isReverted&&(Oe&&(te=Math.max(ee(),P.scroll.rec||0),Z=P.progress,K=i&&i.progress()),Ze&&[Ze,Be,X,L].forEach(function(Bt){return Bt.style.display=Oe?"none":"block"}),Oe&&(xn=P,P.update(Oe)),f&&(!b||!P.isActive)&&(Oe?XE(f,F,xe):gu(f,F,mi(f),Se)),Oe||P.update(Oe),xn=We,P.isReverted=Oe)},P.refresh=function(me,Ge,Oe,We){if(!((xn||!P.enabled)&&!Ge)){if(f&&me&&xi){on(r,"scrollEnd",A_);return}!In&&ae&&ae(P),xn=P,re.tween&&!Oe&&(re.tween.kill(),re.tween=0),D&&D.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(be){return be.vars.immediateRender&&be.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Bt=ce(),qe=Ne(),Ct=w?w.duration():Vi(U,I),qt=Ve<=.01||!Ve,Rt=0,vt=We||0,mt=ts(Oe)?Oe.end:n.end,pn=n.endTrigger||h,At=ts(Oe)?Oe.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),mn=P.pinnedContainer=n.pinnedContainer&&Fn(n.pinnedContainer,P),hi=h&&Math.max(0,rt.indexOf(P))||0,$t=hi,Kt,tn,qi,Ts,T,B,Y,W,G,ue,pe,he,we;for($&&ts(Oe)&&(he=Ae.getProperty(X,I.p),we=Ae.getProperty(L,I.p));$t-- >0;)B=rt[$t],B.end||B.refresh(0,1)||(xn=P),Y=B.pin,Y&&(Y===h||Y===f||Y===mn)&&!B.isReverted&&(ue||(ue=[]),ue.unshift(B),B.revert(!0,!0)),B!==rt[$t]&&(hi--,$t--);for(yn(At)&&(At=At(P)),At=dp(At,"start",P),Ee=yp(At,h,Bt,I,ee(),Ze,X,P,qe,Q,k,Ct,w,P._startClamp&&"_startClamp")||(f?-.001:0),yn(mt)&&(mt=mt(P)),jn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(jn(At)?At.split(" ")[0]:"")+mt:(Rt=kl(mt.substr(2),Bt),mt=jn(At)?At:(w?Ae.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Ee):Ee)+Rt,pn=h)),mt=dp(mt,"end",P),ze=Math.max(Ee,yp(mt||(pn?"100% 0":Ct),pn,Bt,I,ee()+Rt,Be,L,P,qe,Q,k,Ct,w,P._endClamp&&"_endClamp"))||-.001,Rt=0,$t=hi;$t--;)B=rt[$t]||{},Y=B.pin,Y&&B.start-B._pinPush<=Ee&&!w&&B.end>0&&(Kt=B.end-(P._startClamp?Math.max(0,B.start):B.start),(Y===h&&B.start-B._pinPush<Ee||Y===mn)&&isNaN(At)&&(Rt+=Kt*(1-B.progress)),Y===f&&(vt+=Kt));if(Ee+=Rt,ze+=Rt,P._startClamp&&(P._startClamp+=Rt),P._endClamp&&!In&&(P._endClamp=ze||-.001,ze=Math.min(ze,Vi(U,I))),Ve=ze-Ee||(Ee-=.01)&&.001,qt&&(Z=Ae.utils.clamp(0,1,Ae.utils.normalize(Ee,ze,te))),P._pinPush=vt,Ze&&Rt&&(Kt={},Kt[I.a]="+="+Rt,mn&&(Kt[I.p]="-="+ee()),Ae.set([Ze,Be],Kt)),f&&!(Ih&&P.end>=Vi(U,I)))Kt=mi(f),Ts=I===jt,qi=ee(),ge=parseFloat(J(I.a))+vt,!Ct&&ze>1&&(pe=(O?xt.scrollingElement||ti:U).style,pe={style:pe,value:pe["overflow"+I.a.toUpperCase()]},O&&mi(gt)["overflow"+I.a.toUpperCase()]!=="scroll"&&(pe.style["overflow"+I.a.toUpperCase()]="scroll")),gu(f,F,Kt),S=yl(f),tn=nr(f,!0),W=k&&kr(U,Ts?Un:jt)(),p?(Se=[p+I.os2,Ve+vt+Zt],Se.t=F,$t=p===Xt?ac(f,I)+Ve+vt:0,$t&&(Se.push(I.d,$t+Zt),F.style.flexBasis!=="auto"&&(F.style.flexBasis=$t+Zt)),fo(Se),mn&&rt.forEach(function(be){be.pin===mn&&be.vars.pinSpacing!==!1&&(be._subPinOffset=!0)}),k&&ee(te)):($t=ac(f,I),$t&&F.style.flexBasis!=="auto"&&(F.style.flexBasis=$t+Zt)),k&&(T={top:tn.top+(Ts?qi-Ee:W)+Zt,left:tn.left+(Ts?W:qi-Ee)+Zt,boxSizing:"border-box",position:"fixed"},T[ds]=T["max"+bo]=Math.ceil(tn.width)+Zt,T[ps]=T["max"+If]=Math.ceil(tn.height)+Zt,T[pi]=T[pi+ua]=T[pi+la]=T[pi+ha]=T[pi+ca]="0",T[Xt]=Kt[Xt],T[Xt+ua]=Kt[Xt+ua],T[Xt+la]=Kt[Xt+la],T[Xt+ha]=Kt[Xt+ha],T[Xt+ca]=Kt[Xt+ca],C=qE(xe,T,b),In&&ee(0)),i?(G=i._initted,du(1),i.render(i.duration(),!0,!0),oe=J(I.a)-ge+Ve+vt,se=Math.abs(Ve-oe)>1,k&&se&&C.splice(C.length-2,2),i.render(0,!0,!0),G||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),du(0)):oe=Ve,pe&&(pe.value?pe.style["overflow"+I.a.toUpperCase()]=pe.value:pe.style.removeProperty("overflow-"+I.a));else if(h&&ee()&&!w)for(tn=h.parentNode;tn&&tn!==gt;)tn._pinOffset&&(Ee-=tn._pinOffset,ze-=tn._pinOffset),tn=tn.parentNode;ue&&ue.forEach(function(be){return be.revert(!1,!0)}),P.start=Ee,P.end=ze,Ce=ct=In?te:ee(),!w&&!In&&(Ce<te&&ee(te),P.scroll.rec=0),P.revert(!1,!0),Ye=Sn(),de&&(ke=-1,de.restart(!0)),xn=0,i&&R&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),(qt||Z!==P.progress||w||g||i&&!i._initted)&&(i&&!R&&(i._initted||Z||i.vars.immediateRender!==!1)&&i.totalProgress(w&&Ee<-.001&&!Z?Ae.utils.normalize(Ee,ze,0):Z,!0),P.progress=qt||(Ce-Ee)/Ve===Z?0:Z),f&&p&&(F._pinOffset=Math.round(P.progress*oe)),D&&D.invalidate(),isNaN(he)||(he-=Ae.getProperty(X,I.p),we-=Ae.getProperty(L,I.p),El(X,I,he),El(Ze,I,he-(We||0)),El(L,I,we),El(Be,I,we-(We||0))),qt&&!In&&P.update(),u&&!In&&!nt&&(nt=!0,u(P),nt=!1)}},P.getVelocity=function(){return(ee()-ct)/(Sn()-Zo)*1e3||0},P.endAnimation=function(){Wo(P.callbackAnimation),i&&(D?D.progress(1):i.paused()?R||Wo(i,P.direction<0,1):Wo(i,i.reversed()))},P.labelToScroll=function(me){return i&&i.labels&&(Ee||P.refresh()||Ee)+i.labels[me]/i.duration()*Ve||0},P.getTrailing=function(me){var Ge=rt.indexOf(P),Oe=P.direction>0?rt.slice(0,Ge).reverse():rt.slice(Ge+1);return(jn(me)?Oe.filter(function(We){return We.vars.preventOverlaps===me}):Oe).filter(function(We){return P.direction>0?We.end<=Ee:We.start>=ze})},P.update=function(me,Ge,Oe){if(!(w&&!Oe&&!me)){var We=In===!0?te:P.scroll(),Bt=me?0:(We-Ee)/Ve,qe=Bt<0?0:Bt>1?1:Bt||0,Ct=P.progress,qt,Rt,vt,mt,pn,At,mn,hi;if(Ge&&(ct=Ce,Ce=w?ee():We,M&&(He=fe,fe=i&&!R?i.totalProgress():qe)),m&&f&&!xn&&!_l&&xi&&(!qe&&Ee<We+(We-ct)/(Sn()-Zo)*m?qe=1e-4:qe===1&&ze>We+(We-ct)/(Sn()-Zo)*m&&(qe=.9999)),qe!==Ct&&P.enabled){if(qt=P.isActive=!!qe&&qe<1,Rt=!!Ct&&Ct<1,At=qt!==Rt,pn=At||!!qe!=!!Ct,P.direction=qe>Ct?1:-1,P.progress=qe,pn&&!xn&&(vt=qe&&!Ct?0:qe===1?1:Ct===1?2:3,R&&(mt=!At&&N[vt+1]!=="none"&&N[vt+1]||N[vt],hi=i&&(mt==="complete"||mt==="reset"||mt in i))),E&&(At||hi)&&(hi||d||!i)&&(yn(E)?E(P):P.getTrailing(E).forEach(function(qi){return qi.endAnimation()})),R||(D&&!xn&&!_l?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",qe,i._tTime/i._tDur):(D.vars.totalProgress=qe,D.invalidate().restart())):i&&i.totalProgress(qe,!!(xn&&(Ye||me)))),f){if(me&&p&&(F.style[p+I.os2]=Re),!k)q(Jo(ge+oe*qe));else if(pn){if(mn=!me&&qe>Ct&&ze+1>We&&We+1>=Vi(U,I),b)if(!me&&(qt||mn)){var $t=nr(f,!0),Kt=We-Ee;Ep(f,gt,$t.top+(I===jt?Kt:0)+Zt,$t.left+(I===jt?0:Kt)+Zt)}else Ep(f,F);fo(qt||mn?C:S),se&&qe<1&&qt||q(ge+(qe===1&&!mn?oe:0))}}M&&!re.tween&&!xn&&!_l&&de.restart(!0),a&&(At||y&&qe&&(qe<1||!pu))&&Pa(a.targets).forEach(function(qi){return qi.classList[qt||y?"add":"remove"](a.className)}),o&&!R&&!me&&o(P),pn&&!xn?(R&&(hi&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),o&&o(P)),(At||!pu)&&(c&&At&&Ws(P,c),z[vt]&&Ws(P,z[vt]),y&&(qe===1?P.kill(!1,1):z[vt]=0),At||(vt=qe===1?1:3,z[vt]&&Ws(P,z[vt]))),x&&!qt&&Math.abs(P.getVelocity())>(Qo(x)?x:2500)&&(Wo(P.callbackAnimation),D?D.progress(1):Wo(i,mt==="reverse"?1:!qe,1))):R&&o&&!xn&&o(P)}if(Me){var tn=w?We/w.duration()*(w._caScrollDist||0):We;ne(tn+(X._isFlipped?1:0)),Me(tn)}ye&&ye(-We/w.duration()*(w._caScrollDist||0))}},P.enable=function(me,Ge){P.enabled||(P.enabled=!0,on(U,"resize",ea),O||on(U,"scroll",Ys),ae&&on(r,"refreshInit",ae),me!==!1&&(P.progress=Z=0,Ce=ct=ke=ee()),Ge!==!1&&P.refresh())},P.getTween=function(me){return me&&re?re.tween:D},P.setPositions=function(me,Ge,Oe,We){if(w){var Bt=w.scrollTrigger,qe=w.duration(),Ct=Bt.end-Bt.start;me=Bt.start+Ct*me/qe,Ge=Bt.start+Ct*Ge/qe}P.refresh(!1,!1,{start:pp(me,Oe&&!!P._startClamp),end:pp(Ge,Oe&&!!P._endClamp)},We),P.update()},P.adjustPinSpacing=function(me){if(Se&&me){var Ge=Se.indexOf(I.d)+1;Se[Ge]=parseFloat(Se[Ge])+me+Zt,Se[1]=parseFloat(Se[1])+me+Zt,fo(Se)}},P.disable=function(me,Ge){if(me!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ge||D&&D.pause(),te=0,Le&&(Le.uncache=1),ae&&sn(r,"refreshInit",ae),de&&(de.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!O)){for(var Oe=rt.length;Oe--;)if(rt[Oe].scroller===U&&rt[Oe]!==P)return;sn(U,"resize",ea),O||sn(U,"scroll",Ys)}},P.kill=function(me,Ge){P.disable(me,Ge),D&&!Ge&&D.kill(),l&&delete Uh[l];var Oe=rt.indexOf(P);Oe>=0&&rt.splice(Oe,1),Oe===Ln&&Hl>0&&Ln--,Oe=0,rt.forEach(function(We){return We.scroller===P.scroller&&(Oe=1)}),Oe||In||(P.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),Ge||i.kill()),Ze&&[Ze,Be,X,L].forEach(function(We){return We.parentNode&&We.parentNode.removeChild(We)}),fa===P&&(fa=0),f&&(Le&&(Le.uncache=1),Oe=0,rt.forEach(function(We){return We.pin===f&&Oe++}),Oe||(Le.spacer=0)),n.onKill&&n.onKill(P)},rt.push(P),P.enable(!1,!1),Fe&&Fe(P),i&&i.add&&!Ve){var Je=P.update;P.update=function(){P.update=Je,ot.cache++,Ee||ze||P.refresh()},Ae.delayedCall(.01,P.update),Ve=.01,Ee=ze=0}else P.refresh();f&&WE()},r.register=function(n){return Zs||(Ae=n||M_(),S_()&&window.document&&r.enable(),Zs=jo),Zs},r.defaults=function(n){if(n)for(var i in n)Sl[i]=n[i];return Sl},r.disable=function(n,i){jo=0,rt.forEach(function(o){return o[i?"kill":"disable"](n)}),sn(st,"wheel",Ys),sn(xt,"scroll",Ys),clearInterval(ml),sn(xt,"touchcancel",Ni),sn(gt,"touchstart",Ni),vl(sn,xt,"pointerdown,touchstart,mousedown",mp),vl(sn,xt,"pointerup,touchend,mouseup",_p),oc.kill(),gl(sn);for(var s=0;s<ot.length;s+=3)xl(sn,ot[s],ot[s+1]),xl(sn,ot[s],ot[s+2])},r.enable=function(){if(st=window,xt=document,ti=xt.documentElement,gt=xt.body,Ae){if(Pa=Ae.utils.toArray,oa=Ae.utils.clamp,Lh=Ae.core.context||Ni,du=Ae.core.suppressOverwrites||Ni,Rf=st.history.scrollRestoration||"auto",Nh=st.pageYOffset||0,Ae.core.globals("ScrollTrigger",r),gt){jo=1,ho=document.createElement("div"),ho.style.height="100vh",ho.style.position="absolute",D_(),OE(),Gt.register(Ae),r.isTouch=Gt.isTouch,Mr=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Dh=Gt.isTouch===1,on(st,"wheel",Ys),Cf=[st,xt,ti,gt],Ae.matchMedia?(r.matchMedia=function(u){var d=Ae.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},Ae.addEventListener("matchMediaInit",function(){R_(),Nf()}),Ae.addEventListener("matchMediaRevert",function(){return C_()}),Ae.addEventListener("matchMedia",function(){ls(0,1),xs("matchMedia")}),Ae.matchMedia().add("(orientation: portrait)",function(){return _u(),_u})):console.warn("Requires GSAP 3.11.0 or later"),_u(),on(xt,"scroll",Ys);var n=gt.hasAttribute("style"),i=gt.style,s=i.borderTopStyle,o=Ae.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=nr(gt),jt.m=Math.round(a.top+jt.sc())||0,Un.m=Math.round(a.left+Un.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(gt.setAttribute("style",""),gt.removeAttribute("style")),ml=setInterval(xp,250),Ae.delayedCall(.5,function(){return _l=0}),on(xt,"touchcancel",Ni),on(gt,"touchstart",Ni),vl(on,xt,"pointerdown,touchstart,mousedown",mp),vl(on,xt,"pointerup,touchend,mouseup",_p),Ph=Ae.utils.checkPrefix("transform"),Gl.push(Ph),Zs=Sn(),oc=Ae.delayedCall(.2,ls).pause(),js=[xt,"visibilitychange",function(){var u=st.innerWidth,d=st.innerHeight;xt.hidden?(hp=u,fp=d):(hp!==u||fp!==d)&&ea()},xt,"DOMContentLoaded",ls,st,"load",ls,st,"resize",ea],gl(on),rt.forEach(function(u){return u.enable(0,1)}),l=0;l<ot.length;l+=3)xl(sn,ot[l],ot[l+1]),xl(sn,ot[l],ot[l+2])}else if(xt){var c=function u(){r.enable(),xt.removeEventListener("DOMContentLoaded",u)};xt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(pu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ml)||(ml=i)&&setInterval(xp,i),"ignoreMobileResize"in n&&(Dh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(gl(sn)||gl(on,n.autoRefreshEvents||"none"),g_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Fn(n),o=ot.indexOf(s),a=gs(s);~o&&ot.splice(o,a?6:2),i&&(a?Wi.unshift(st,i,gt,i,ti,i):Wi.unshift(s,i))},r.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(jn(n)?Fn(n):n).getBoundingClientRect(),a=o[s?ds:ps]*i||0;return s?o.right-a>0&&o.left+a<st.innerWidth:o.bottom-a>0&&o.top+a<st.innerHeight},r.positionInViewport=function(n,i,s){jn(n)&&(n=Fn(n));var o=n.getBoundingClientRect(),a=o[s?ds:ps],l=i==null?a/2:i in lc?lc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/st.innerWidth:(o.top+l)/st.innerHeight},r.killAll=function(n){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=vs.killAll||[];vs={},i.forEach(function(s){return s()})}},r})();Ke.version="3.15.0";Ke.saveStyles=function(r){return r?Pa(r).forEach(function(e){if(e&&e.style){var t=Zn.indexOf(e);t>=0&&Zn.splice(t,5),Zn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),Lh())}}):Zn};Ke.revert=function(r,e){return Nf(!r,e)};Ke.create=function(r,e){return new Ke(r,e)};Ke.refresh=function(r){return r?ea(!0):(Zs||Ke.register())&&ls(!0)};Ke.update=function(r){return++ot.cache&&ar(r===!0?2:0)};Ke.clearScrollMemory=P_;Ke.maxScroll=function(r,e){return Vi(r,e?Un:jt)};Ke.getScrollFunc=function(r,e){return kr(Fn(r),e?Un:jt)};Ke.getById=function(r){return Uh[r]};Ke.getAll=function(){return rt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ke.isScrolling=function(){return!!xi};Ke.snapDirectional=Uf;Ke.addEventListener=function(r,e){var t=vs[r]||(vs[r]=[]);~t.indexOf(e)||t.push(e)};Ke.removeEventListener=function(r,e){var t=vs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ke.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var d=[],h=[],f=Ae.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),h.push(p),s<=d.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&yn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return yn(s)&&(s=s(),on(Ke,"refresh",function(){return s=e.batchMax()})),Pa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Ke.create(c))}),t};var bp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},vu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===ti&&r(gt,t)},Tl={auto:1,scroll:1},KE=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ae.core.getCache(s),a=Sn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Tl[(l=mi(s)).overflowY]||Tl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!gs(s)&&(Tl[(l=mi(s)).overflowY]||Tl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},I_=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&KE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&on(xt,Gt.eventTypes[0],Ap,!1,!0)},onDisable:function(){return sn(xt,Gt.eventTypes[0],Ap,!0)}})},ZE=/(input|label|select|textarea)/i,wp,Ap=function(e){var t=ZE.test(e.target.tagName);(t||wp)&&(e._gsapAllow=!0,wp=t)},jE=function(e){ts(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Fn(e.target)||ti,u=Ae.core.globals().ScrollSmoother,d=u&&u.get(),h=Mr&&(e.content&&Fn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=kr(c,jt),p=kr(c,Un),g=1,m=(Gt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,_=0,v=yn(i)?function(){return i(a)}:function(){return i||2.8},y,M,b=I_(c,e.type,!0,s),A=function(){return M=!1},w=Ni,x=Ni,E=function(){l=Vi(c,jt),x=oa(Mr?1:0,l),n&&(w=oa(0,Vi(c,Un))),y=ms},I=function(){h._gsap.y=Jo(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},R=function(){if(M){requestAnimationFrame(A);var $=Jo(a.deltaY/2),Q=x(f.v-$);if(h&&Q!==f.v+f.offset){f.offset=Q-f.v;var P=Jo((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",f.cacheID=ot.cache,ar()}return!0}f.offset&&I(),M=!0},U,H,O,k,z=function(){E(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return h&&Ae.set(h,{y:"+=0"}),e.ignoreCheck=function(N){return Mr&&N.type==="touchmove"&&R()||g>1.05&&N.type!=="touchstart"||a.isGesturing||N.touches&&N.touches.length>1},e.onPress=function(){M=!1;var N=g;g=Jo((st.visualViewport&&st.visualViewport.scale||1)/m),U.pause(),N!==g&&vu(c,g>1.01?!0:n?!1:"x"),H=p(),O=f(),E(),y=ms},e.onRelease=e.onGestureStart=function(N,$){if(f.offset&&I(),!$)k.restart(!0);else{ot.cache++;var Q=v(),P,ae;n&&(P=p(),ae=P+Q*.05*-N.velocityX/.227,Q*=bp(p,P,ae,Vi(c,Un)),U.vars.scrollX=w(ae)),P=f(),ae=P+Q*.05*-N.velocityY/.227,Q*=bp(f,P,ae,Vi(c,jt)),U.vars.scrollY=x(ae),U.invalidate().duration(Q).play(.01),(Mr&&U.vars.scrollY>=l||P>=l-1)&&Ae.to({},{onUpdate:z,duration:Q})}o&&o(N)},e.onWheel=function(){U._ts&&U.pause(),Sn()-_>1e3&&(y=0,_=Sn())},e.onChange=function(N,$,Q,P,ae){if(ms!==y&&E(),$&&n&&p(w(P[2]===$?H+(N.startX-N.x):p()+$-P[1])),Q){f.offset&&I();var ce=ae[2]===Q,Ne=ce?O+N.startY-N.y:f()+Q-ae[1],ke=x(Ne);ce&&Ne!==ke&&(O+=ke-Ne),f(ke)}(Q||$)&&ar()},e.onEnable=function(){vu(c,n?!1:"x"),Ke.addEventListener("refresh",z),on(st,"resize",z),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),b.enable()},e.onDisable=function(){vu(c,!0),sn(st,"resize",z),Ke.removeEventListener("refresh",z),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new Gt(e),a.iOS=Mr,Mr&&!f()&&f(1),Mr&&Ae.ticker.add(Ni),k=a._dc,U=Ae.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:L_(f,f(),function(){return U.pause()})},onUpdate:ar,onComplete:k.vars.onComplete}),a};Ke.sort=function(r){if(yn(r))return rt.sort(r);var e=st.pageYOffset||0;return Ke.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),rt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ke.observe=function(r){return new Gt(r)};Ke.normalizeScroll=function(r){if(typeof r>"u")return Dn;if(r===!0&&Dn)return Dn.enable();if(r===!1){Dn&&Dn.kill(),Dn=r;return}var e=r instanceof Gt?r:jE(r);return Dn&&Dn.target===e.target&&Dn.kill(),gs(e.target)&&(Dn=e),e};Ke.core={_getVelocityProp:Rh,_inputObserver:I_,_scrollers:ot,_proxies:Wi,bridge:{ss:function(){xi||xs("scrollStart"),xi=Sn()},ref:function(){return xn}}};M_()&&Ae.registerPlugin(Ke);var Cp="1.3.25";function U_(r,e,t){return Math.max(r,Math.min(e,t))}function JE(r,e,t){return(1-t)*r+t*e}function QE(r,e,t,n){return JE(r,e,1-Math.exp(-t*n))}function eT(r,e){return(r%e+e)%e}var tT=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=U_(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=QE(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function nT(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var iT=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=nT(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},N_=class{events={};emit(r,...e){const t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}};const rT=100/6,Sr={passive:!1};function Rp(r,e){return r===1?rT:r===2?e:1}var sT=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new N_;constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Sr),this.element.addEventListener("touchstart",this.onTouchStart,Sr),this.element.addEventListener("touchmove",this.onTouchMove,Sr),this.element.addEventListener("touchend",this.onTouchEnd,Sr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Sr),this.element.removeEventListener("touchstart",this.onTouchStart,Sr),this.element.removeEventListener("touchmove",this.onTouchMove,Sr),this.element.removeEventListener("touchend",this.onTouchEnd,Sr)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=Rp(n,this.window.width),s=Rp(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const Pp=r=>Math.min(1,1.001-2**(-10*r));var oT=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new tT;emitter=new N_;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:g=!0,prevent:m,virtualScroll:_,overscroll:v=!0,autoRaf:y=!1,anchors:M=!1,autoToggle:b=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:x=w,stopInertiaOnNavigate:E=!1}={}){window.lenisVersion=Cp,window.lenis||(window.lenis={}),window.lenis.version=Cp,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Pp:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:g,prevent:m,virtualScroll:_,overscroll:v,autoRaf:y,anchors:M,autoToggle:b,allowNestedScroll:A,naiveDimensions:x,stopInertiaOnNavigate:E},this.dimensions=new iT(r,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new sT(t,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}};onPointerDown=r=>{r.button===1&&this.reset()};isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...h?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=r,f=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let p=null;if(typeof h=="string"?(p=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),p||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&h?.nodeType&&(p=h),p){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?M.left:M.top}const g=p.getBoundingClientRect(),m=getComputedStyle(p),_=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(_)?0:_)-(Number.isNaN(y)?0:y)}}if(typeof h=="number"){if(h+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const p=h-this.animatedScroll;p>this.limit/2?h-=this.limit:p<-this.limit/2&&(h+=this.limit)}}else h=U_(0,h,this.limit);if(h===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=Pp:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),g||this.emit(),g&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,d,h,f,p;if(n-(i.time??0)>2e3){i.time=Date.now();const A=window.getComputedStyle(r);if(i.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),o=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),u=["auto"].includes(A.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,h=r.scrollHeight,f=r.clientWidth,p=r.clientHeight,a=d>f,l=h>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=h,i.clientWidth=f,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,h=i.scrollHeight,f=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,_,v,y,M,b;if(g==="horizontal")m=Math.round(r.scrollLeft),_=d-f,v=e,y=s,M=a,b=c;else if(g==="vertical")m=Math.round(r.scrollTop),_=h-p,v=t,y=o,M=l,b=u;else return!1;return!b&&(m>=_||m<=0)?!0:(v>0?m<_:m>0)&&y&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?eT(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};const Xl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Do{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const aT=new mc(-1,1,1,-1,0,1);class lT extends fn{constructor(){super(),this.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new an([0,2,0,0,2,0],2))}}const cT=new lT;class Ff{constructor(e){this._mesh=new kt(cT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,aT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class F_ extends Do{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ma.clone(e.uniforms),this.material=new Ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ff(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Dp extends Do{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class uT extends Do{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hT{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new $e);this._width=n.width,this._height=n.height,t=new zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ai}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new F_(Xl),this.copyPass.material.blending=Hi,this.timer=new v0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Dp!==void 0&&(o instanceof Dp?n=!0:o instanceof uT&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fT extends Do{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new et}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const dT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class wo extends Do{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new et(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new zn(s,o,{type:ai}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new zn(s,o,{type:ai});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const h=new zn(s,o,{type:ai});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),o=Math.round(o/2)}const a=dT;this.highPassUniforms=Ma.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ht({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new $e(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ma.clone(Xl.uniforms),this.blendMaterial=new Ht({uniforms:this.copyUniforms,vertexShader:Xl.vertexShader,fragmentShader:Xl.fragmentShader,premultipliedAlpha:!0,blending:Kn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new et,this._oldClearAlpha=1,this._basic=new er,this._fsQuad=new Ff(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new $e(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=wo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=wo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $e(.5,.5)},direction:{value:new $e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}wo.BlurDirectionX=new $e(1,0);wo.BlurDirectionY=new $e(0,1);const bl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class pT extends Do{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ma.clone(bl.uniforms),this.material=new rm({name:bl.name,uniforms:this.uniforms,vertexShader:bl.vertexShader,fragmentShader:bl.fragmentShader}),this._fsQuad=new Ff(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Hh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const mT={name:"RGBShiftShader",uniforms:{tDiffuse:{value:null},amount:{value:.005},angle:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float amount;
		uniform float angle;

		varying vec2 vUv;

		void main() {

			vec2 offset = amount * vec2( cos(angle), sin(angle));
			vec4 cr = texture2D(tDiffuse, vUv + offset);
			vec4 cga = texture2D(tDiffuse, vUv);
			vec4 cb = texture2D(tDiffuse, vUv - offset);
			gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

		}`};St.registerPlugin(Ke);console.info("%cGeoAI main build 2026.06.29-3","color:#c5a059;font-weight:bold");{const r=document.getElementById("preloader"),e=()=>{r&&(r.classList.add("done"),setTimeout(()=>r.remove(),900)),document.dispatchEvent(new Event("geoai:ready"))},t=new Promise(i=>setTimeout(i,950)),n=document.readyState==="complete"?Promise.resolve():new Promise(i=>window.addEventListener("load",i,{once:!0}));Promise.all([t,n]).then(e)}const Pi=window.matchMedia("(prefers-reduced-motion: reduce)").matches,_T=window.matchMedia("(hover: hover)").matches,Vr=new oT({duration:1.4,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r)),smooth:!0});Vr.on("scroll",Ke.update);St.ticker.add(r=>Vr.raf(r*1e3));St.ticker.lagSmoothing(0);const Lp=document.getElementById("scroll-progress");Vr.on("scroll",()=>{const r=document.documentElement.scrollHeight-window.innerHeight,e=window.scrollY/r*100;Lp&&(Lp.style.width=`${e}%`)});const wl=document.getElementById("hamburger-btn"),Al=document.getElementById("nav-links");if(wl&&Al){let r=!1;wl.addEventListener("click",()=>{r=!r,wl.classList.toggle("active"),Al.classList.toggle("open"),r&&St.fromTo("#nav-links li",{opacity:0,x:40},{opacity:1,x:0,duration:.4,stagger:.06,ease:"power3.out",delay:.1})}),Al.querySelectorAll("a").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.getAttribute("href");wl.classList.remove("active"),Al.classList.remove("open"),r=!1,Bf(n)})})}const gT=document.querySelector("#bg-canvas"),Oa=new Bg;Oa.background=new et(461587);const no=new rr;Oa.add(no);const La=new ei(45,window.innerWidth/window.innerHeight,.1,1e3);La.position.set(0,0,12);no.add(La);const Es=new dy({canvas:gT,alpha:!1,antialias:!0,powerPreference:"high-performance"});Es.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Es.setSize(window.innerWidth,window.innerHeight);Es.toneMapping=fc;Es.toneMappingExposure=.95;const vT=new fT(Oa,La),Ba=new wo(new $e(window.innerWidth/2,window.innerHeight/2),1.5,.4,.85);Ba.threshold=.35;Ba.strength=.16;Ba.radius=.4;const Ri=new hT(Es);Ri.addPass(vT);Ri.addPass(Ba);const Ia=new F_(mT);Ia.uniforms.amount.value=0;Ia.enabled=!1;Ri.addPass(Ia);Ri.addPass(new pT);let Oh=0;Pi||Vr.on("scroll",r=>{Oh=Math.min(Math.abs(r.velocity)*1e-4,.006)});const Bn=new rr;Bn.scale.set(1,1,1);Bn.visible=!0;Oa.add(Bn);const En=new rr;En.scale.set(1,1,1);En.position.set(0,0,0);En.visible=!0;Oa.add(En);let Bh=!1,da,Ip,yr,Yl,cc,Up,Np,Fp,Tr,Op,pa,po,mo,Js,ma,uc,qs;const Pt={line:null,active:!1,t0:0,next:5,start:new V,dir:new V,head:new V,tail:new V},O_=[],ql=[],ns=80,Dr=new Jt,io=new V(5,3,7).normalize();function xT(){if(Bh)return;Bh=!0;const r=new h0,e="/earth-3D/textures/",t=r.load(`${e}2_no_clouds_16k.jpeg`),n=r.load(`${e}NIGHT.jpg`),i=r.load(`${e}elev_bump_16k.jpeg`),s=r.load(`${e}water_16k.png`),o=r.load(`${e}reflex2.png`),a=r.load(`${e}fair_clouds_8k.jpeg`);[t,n,i,s,o,a].forEach(O=>{O.colorSpace=Jn,O.anisotropy=Math.min(4,Es.capabilities.getMaxAnisotropy())}),i.colorSpace=Fr,s.colorSpace=Fr;const l=2500,c=new fn,u=new Float32Array(l*3),d=new Float32Array(l*3),h=new Float32Array(l),f=[new et(16777215),new et(16775406),new et(14870768),new et(12951641)];for(let O=0;O<l;O++){const k=40+Math.random()*140,z=Math.random()*Math.PI*2,N=Math.acos(2*Math.random()-1);u[O*3]=k*Math.sin(N)*Math.cos(z),u[O*3+1]=k*Math.sin(N)*Math.sin(z),u[O*3+2]=k*Math.cos(N);const $=f[Math.floor(Math.random()*f.length)];d[O*3]=$.r,d[O*3+1]=$.g,d[O*3+2]=$.b,h[O]=.35+Math.random()*.9}c.setAttribute("position",new kn(u,3)),c.setAttribute("color",new kn(d,3)),c.setAttribute("size",new kn(h,1)),da=new Ht({uniforms:{time:{value:0},uOpacity:{value:1}},vertexShader:`
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (320.0 / -mvPosition.z) * (0.85 + 0.15 * sin(position.x * 6.0 + position.y * 3.0));
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      uniform float time;
      uniform float uOpacity;
      void main() {
        vec2 cxy = 2.0 * gl_PointCoord - 1.0;
        float r = dot(cxy, cxy);
        if (r > 1.0) discard;
        float alpha = (1.0 - r) * (0.75 + 0.25 * sin(gl_PointCoord.x * 12.0 + time * 1.2));
        gl_FragColor = vec4(vColor, alpha * uOpacity);
      }
    `,transparent:!0,depthWrite:!1,blending:Kn}),Ip=new Zg(c,da),Bn.add(Ip);const p=`
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vViewPosition;
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,g=`
    uniform sampler2D dayMap;
    uniform sampler2D nightMap;
    uniform sampler2D bumpMap;
    uniform sampler2D waterMap;
    uniform sampler2D specMap;
    uniform vec3 sunDir;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);

      // Light factor
      float NdotL = dot(normal, sunDir);
      float dayFactor = smoothstep(-0.15, 0.22, NdotL);

      // Texture sampling
      vec4 dayColor = texture2D(dayMap, vUv);
      vec4 nightColor = texture2D(nightMap, vUv);
      float waterMask = texture2D(waterMap, vUv).r;
      float specMask = texture2D(specMap, vUv).r;

      // Color blending
      vec3 surfaceColor = mix(nightColor.rgb, dayColor.rgb, dayFactor);

      // Amber/Gold warm city lights on the dark side
      float nightGlow = (1.0 - dayFactor) * nightColor.r * 2.2;
      surfaceColor += vec3(1.0, 0.84, 0.58) * nightGlow * 0.45;

      // Diffuse shadow lighting (low ambient for cinematic space realism)
      float diffuse = max(NdotL, 0.0) * 0.85 + 0.15;
      surfaceColor *= diffuse;

      // Clean specular reflections on oceans
      vec3 halfDir = normalize(sunDir + viewDir);
      float spec = pow(max(dot(normal, halfDir), 0.0), 56.0);
      float specularStrength = waterMask * spec * specMask * dayFactor * 1.3;
      surfaceColor += vec3(1.0, 0.94, 0.82) * specularStrength;

      // Elegant side rim highlight
      float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);
      vec3 rimColor = mix(vec3(0.05, 0.43, 0.33), vec3(0.77, 0.63, 0.35), 0.25); // Emerald-Gold blend
      surfaceColor += rimColor * fresnel * 0.12;

      gl_FragColor = vec4(surfaceColor, 1.0);
    }
  `,m=new bi(2,96,96),_=new Ht({uniforms:{dayMap:{value:t},nightMap:{value:n},bumpMap:{value:i},waterMap:{value:s},specMap:{value:o},sunDir:{value:io},time:{value:0}},vertexShader:p,fragmentShader:g});Yl=_,yr=new kt(m,_);const v=new rr;En.add(v),v.add(yr),Js=v;const y=new bi(2.022,96,96),M=new Ht({uniforms:{cloudMap:{value:a},sunDir:{value:io}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D cloudMap;
      uniform vec3 sunDir;
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        float cloudAlpha = texture2D(cloudMap, vUv).r;
        float NdotL = dot(normalize(vNormal), sunDir);
        float lighting = smoothstep(-0.1, 0.25, NdotL) * 0.8 + 0.2;
        vec3 cloudColor = vec3(1.0, 0.98, 0.96) * lighting;
        gl_FragColor = vec4(cloudColor, cloudAlpha * 0.32);
      }
    `,transparent:!0,depthWrite:!1,blending:Kn});cc=new kt(y,M),yr.add(cc);const b=new bi(2.05,64,64);Up=new kt(b,new Ht({uniforms:{sunDir:{value:io}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vWorldNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 sunDir;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vWorldNormal;
        void main() {
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = 1.0 - max(dot(viewDir, vNormal), 0.0);
          float rim = pow(fresnel, 3.2);

          float sunFacing = max(dot(vWorldNormal, sunDir), 0.0);
          vec3 dayAtmo = vec3(0.1, 0.55, 0.42);    // Sovereign Emerald tint
          vec3 twilightAtmo = vec3(0.77, 0.63, 0.35); // Gold twilight rim
          vec3 atmoColor = mix(twilightAtmo, dayAtmo, smoothstep(0.0, 0.4, sunFacing));

          float alpha = rim * (0.25 + sunFacing * 0.35);
          gl_FragColor = vec4(atmoColor, alpha);
        }
      `,transparent:!0,side:bn,blending:Kn,depthWrite:!1})),yr.add(Up);const A=new bi(2.15,64,64);Np=new kt(A,new Ht({uniforms:{glowColor:{value:new et(945747)},sunDir:{value:io}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 glowColor;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = dot(viewDir, vNormal);
          float strength = pow(1.0 - fresnel, 3.5);
          gl_FragColor = vec4(glowColor, strength * 0.28);
        }
      `,transparent:!0,side:bn,blending:Kn,depthWrite:!1})),yr.add(Np),Fp=new kt(new bi(2.03,32,32),new er({color:945747,wireframe:!0,transparent:!0,opacity:.03})),v.add(Fp);const w=new bi(.015,16,16),x=new er({color:12951641,transparent:!0,opacity:.8,blending:Kn});Tr=new Xg(w,x,ns),Tr.instanceMatrix.setUsage(xg),v.add(Tr);for(let O=0;O<ns;O++){const k=Math.acos(-1+2*O/ns),z=Math.sqrt(ns*Math.PI)*k,N=2.01*Math.sin(k)*Math.cos(z),$=2.01*Math.sin(k)*Math.sin(z),Q=2.01*Math.cos(k),P=new V(N,$,Q);ql.push(P),Dr.position.copy(P),Dr.scale.set(1,1,1),Dr.updateMatrix(),Tr.setMatrixAt(O,Dr.matrix)}Tr.instanceMatrix.needsUpdate=!0;const E=20,I=new ch({color:945747,transparent:!0,opacity:.08}),R=new bi(.012,8,8),U=new er({color:12951641,blending:Kn});for(let O=0;O<E;O++){const k=Math.floor(Math.random()*ns),z=Math.floor(Math.random()*ns);if(k===z)continue;const N=ql[k],$=ql[z],Q=new V().addVectors(N,$).multiplyScalar(.5).normalize().multiplyScalar(2.3),P=new n0(N,Q,$),ae=P.getPoints(20),ce=new fn().setFromPoints(ae),Ne=new dd(ce,I);v.add(Ne);const ke=new kt(R,U);v.add(ke),O_.push({mesh:ke,curve:P,progress:Math.random(),speed:.001+Math.random()*.002})}{const O=24.71*Math.PI/180,k=46.68*Math.PI/180,z=Math.PI/2-O,N=k+Math.PI,$=2.03;ma=new kt(new bi(.035,16,16),new er({color:12951641,transparent:!0,opacity:.95,blending:Kn})),ma.position.set(-$*Math.sin(z)*Math.cos(N),$*Math.cos(z),$*Math.sin(z)*Math.sin(N)),yr.add(ma)}qs=new rr,qs.rotation.x=1.15,qs.rotation.y=.4,v.add(qs);const H=new kt(new af(2.62,2.633,160),new er({color:945747,side:Oi,transparent:!0,opacity:.22,blending:Kn}));qs.add(H),uc=new kt(new bi(.03,12,12),new er({color:12951641,blending:Kn})),qs.add(uc),Pt.line=new dd(new fn().setFromPoints([new V,new V]),new ch({color:16774880,transparent:!0,opacity:0,blending:Kn})),Bn.add(Pt.line),Op=new m0(593432,.12),En.add(Op),pa=new p0(16775922,2.2),pa.position.set(5,5,7),En.add(pa),po=new Md(12951641,.4,20),po.position.set(-3,2,4),En.add(po),mo=new Md(945747,.3,20),mo.position.set(4,-2,3),En.add(mo),Ke.refresh(),Ri.render()}let Bp=!1;function hc(){Bp||(Bp=!0,xT())}Ke.create({trigger:"#about",start:"top bottom",once:!0,onEnter:hc});window.addEventListener("load",()=>{setTimeout(()=>{typeof requestIdleCallback=="function"?requestIdleCallback(()=>hc()):hc()},100)});let zh=0,kh=0;window.addEventListener("mousemove",r=>{zh=r.clientX/window.innerWidth*2-1,kh=-(r.clientY/window.innerHeight)*2+1});let ST=St.timeline({scrollTrigger:{trigger:"#about",start:"top bottom",end:"bottom top",scrub:1.5,onEnter:()=>{document.body.classList.add("section-about")},onLeaveBack:()=>{document.body.classList.remove("section-about")}}});ST.fromTo(Bn.scale,{x:.02,y:.02,z:.02},{x:1.28,y:1.28,z:1.28,duration:1.1,ease:"expo.out"},0).to(Bn.scale,{x:1,y:1,z:1,duration:1,ease:"power2.inOut"},1.1).fromTo(Bn.position,{z:-48,y:5},{z:7,y:0,duration:2.1,ease:"power1.in"},0).fromTo(Bn.rotation,{x:.4,y:-Math.PI*1.15},{x:0,y:0,duration:2.1,ease:"power1.inOut"},0).fromTo(En.scale,{x:.001,y:.001,z:.001},{x:1,y:1,z:1,duration:1.5,ease:"power3.out"},.7).fromTo(En.position,{x:-24,y:2,z:-16},{x:-4.5,y:0,z:-1,duration:1.9,ease:"power2.out"},.55).fromTo(En.rotation,{x:.25,y:-2.4},{x:.1,y:.4,duration:1.9,ease:"power2.inOut"},.55);let MT=St.timeline({scrollTrigger:{trigger:"#competencies",start:"top bottom",end:"center center",scrub:1.5,onEnter:()=>{document.body.classList.add("section-competencies")},onLeaveBack:()=>{document.body.classList.remove("section-competencies")}}});MT.to(En.position,{x:4.5,y:0,z:-1,ease:"power2.out"},0).to(En.rotation,{x:.2,y:-.5,ease:"power2.out"},0);let yT=St.timeline({scrollTrigger:{trigger:"#status",start:"top bottom",end:"center center",scrub:1.5,onEnter:()=>{document.body.classList.add("colorful-theme"),document.body.classList.add("section-status")},onLeaveBack:()=>{document.body.classList.remove("colorful-theme"),document.body.classList.remove("section-status")}}});yT.to(En.scale,{x:.001,y:.001,z:.001,ease:"power2.inOut"},0).to(En.position,{y:15,ease:"power2.inOut"},0).to(Bn.scale,{x:.001,y:.001,z:.001,ease:"power2.inOut"},0).to(Bn.position,{y:15,ease:"power2.inOut"},0);St.utils.toArray(".fade-in").forEach(r=>{St.fromTo(r,{opacity:0,y:40},{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 80%",toggleActions:"play none none reverse"}})});document.addEventListener("geoai:ready",()=>{const r=document.querySelector(".hero-title"),e=document.querySelector(".hero-subtitle"),t=document.querySelector(".hero-big-logo"),n=document.querySelector(".hero-content"),i=document.querySelector(".hero-badge"),s=document.querySelector(".scroll-cue");if(r&&e&&t&&n){const o=St.timeline({delay:.15});o.fromTo(n,{opacity:0,y:40,scale:.97},{opacity:1,y:0,scale:1,duration:1.2,ease:"power4.out"}).fromTo(t,{opacity:0,scale:.6,y:-20},{opacity:1,scale:1,y:0,duration:1,ease:"elastic.out(1, 0.6)"},"-=0.7"),i&&o.fromTo(i,{opacity:0,y:14},{opacity:1,y:0,duration:.5,ease:"power2.out"},"-=0.65"),o.fromTo(r,{opacity:0,y:25,filter:"blur(6px)"},{opacity:1,y:0,filter:"blur(0px)",duration:.9,ease:"power3.out"},"-=0.5").fromTo(e,{opacity:0,y:15},{opacity:.85,y:0,duration:.6,ease:"power2.out"},"-=0.5"),s&&o.fromTo(s,{opacity:0},{opacity:1,duration:.8},"-=0.15")}},{once:!0});if(_T&&!Pi){const r=document.querySelector(".hero-content"),e=document.querySelector(".hero-big-logo");document.querySelector(".hero-title"),document.querySelector(".hero-subtitle");const t=document.querySelector(".hero-section");t&&r&&(t.addEventListener("mousemove",n=>{const i=t.getBoundingClientRect(),s=(n.clientX-i.left-i.width/2)/(i.width/2),o=(n.clientY-i.top-i.height/2)/(i.height/2);St.to(r,{x:s*15,y:o*12,rotateX:-o*3.5,rotateY:s*3.5,transformPerspective:1e3,duration:.7,ease:"power2.out",overwrite:"auto"}),e&&St.to(e,{x:s*25,y:o*18,duration:.5,ease:"power2.out",overwrite:"auto"})}),t.addEventListener("mouseleave",()=>{St.to(r,{x:0,y:0,rotateX:0,rotateY:0,duration:1,ease:"elastic.out(1, 0.4)"}),e&&St.to(e,{x:0,y:0,duration:1,ease:"elastic.out(1, 0.4)"})}))}let zp=0;function B_(){if(Pi)return;requestAnimationFrame(B_),zp++;const r=performance.now()/1e3;if(Bh){da&&da.uniforms&&(da.uniforms.time.value=r);const i=r*.02;if(io.set(Math.cos(i)*5,3,Math.sin(i)*7).normalize(),pa&&pa.position.copy(io).multiplyScalar(10),Yl&&Yl.uniforms&&(Yl.uniforms.time.value=r),yr&&(yr.rotation.y+=15e-5),cc&&(cc.rotation.y+=22e-5),zp%3===0&&Tr){const s=1+Math.sin(r*4)*.32;for(let o=0;o<ns;o++){const a=ql[o];a&&(Dr.position.copy(a),Dr.scale.set(s,s,s),Dr.updateMatrix(),Tr.setMatrixAt(o,Dr.matrix))}Tr.instanceMatrix.needsUpdate=!0}if(O_.forEach(s=>{s.progress+=s.speed,s.progress>=1&&(s.progress=0);const o=s.curve.getPointAt(s.progress);s.mesh.position.copy(o)}),po&&(po.position.x=Math.sin(r*.15)*5,po.position.z=Math.cos(r*.25)*5),mo&&(mo.position.y=Math.sin(r*.2)*4,mo.position.x=Math.cos(r*.3)*4),Bn.visible&&(Bn.rotation.y+=4e-5,Bn.rotation.x+=2e-5),ma){const s=1+Math.sin(r*3)*.35;ma.scale.set(s,s,s)}if(uc){const s=r*.35;uc.position.set(Math.cos(s)*2.627,Math.sin(s)*2.627,0)}if(Pt.line&&(!Pt.active&&r>Pt.next&&(Pt.active=!0,Pt.t0=r,Pt.start.set((Math.random()-.5)*70,15+Math.random()*25,-50-Math.random()*30),Pt.dir.set(-6-Math.random()*6,-3-Math.random()*3,0)),Pt.active)){const s=(r-Pt.t0)/.9;s>=1?(Pt.active=!1,Pt.next=r+6+Math.random()*9,Pt.line.material.opacity=0):(Pt.head.copy(Pt.start).addScaledVector(Pt.dir,s),Pt.tail.copy(Pt.start).addScaledVector(Pt.dir,Math.max(0,s-.18)),Pt.line.geometry.setFromPoints([Pt.tail,Pt.head]),Pt.line.material.opacity=Math.sin(Math.PI*s)*.8)}Js&&(Js.rotation.y+=(zh*.05-Js.rotation.y)*.02,Js.rotation.x+=(-kh*.03-Js.rotation.x)*.02)}const e=zh*.22,t=kh*.12;no.position.x+=(e-no.position.x)*.015,no.position.y+=(t-no.position.y)*.015,Oh*=.9;const n=Ia.uniforms.amount;n.value+=(Oh-n.value)*.2,Ia.enabled=n.value>4e-4,Ri.render()}Pi?(Ke.addEventListener("refresh",()=>Ri.render()),Vr.on("scroll",()=>Ri.render()),setTimeout(()=>{hc(),Ri.render()},100)):B_();window.addEventListener("resize",ET,!1);function ET(){La.aspect=window.innerWidth/window.innerHeight,La.updateProjectionMatrix(),Es.setSize(window.innerWidth,window.innerHeight),Ri.setSize(window.innerWidth,window.innerHeight),Ba.setSize(window.innerWidth/2,window.innerHeight/2),Ri.render()}const Cl=document.querySelector(".cursor-dot"),vi=document.querySelector(".cursor-ring"),TT=document.querySelectorAll(".magnetic-btn");let $s={x:window.innerWidth/2,y:window.innerHeight/2},Ks={x:window.innerWidth/2,y:window.innerHeight/2};const Of="ontouchstart"in window||navigator.maxTouchPoints>0;Cl&&vi&&!Of&&!Pi?(document.body.classList.add("custom-cursor"),window.addEventListener("mousemove",r=>{$s.x=r.clientX,$s.y=r.clientY,St.set(Cl,{x:$s.x,y:$s.y})}),St.ticker.add(()=>{Ks.x+=($s.x-Ks.x)*.12,Ks.y+=($s.y-Ks.y)*.12,St.set(vi,{x:Ks.x,y:Ks.y})})):(Cl&&(Cl.style.display="none"),vi&&(vi.style.display="none"),document.body.style.cursor="auto");!Of&&!Pi&&TT.forEach(r=>{r.addEventListener("mousemove",e=>{const t=r.getBoundingClientRect(),n=e.clientX-t.left-t.width/2,i=e.clientY-t.top-t.height/2;vi&&vi.classList.add("hover-active"),St.to(r,{x:n*.35,y:i*.35,duration:.5,ease:"power2.out",overwrite:"auto"})}),r.addEventListener("mouseleave",()=>{vi&&vi.classList.remove("hover-active"),St.to(r,{x:0,y:0,duration:.7,ease:"elastic.out(1, 0.3)"})})});function z_(r,e){const t=document.getElementById(r),n=document.getElementById(e);if(!t||!n)return;const i={icon:n.querySelector(".sector-detail-icon"),title:n.querySelector(".sector-detail-title"),tag:n.querySelector(".sector-detail-tag"),body:n.querySelector(".sector-detail-body"),close:n.querySelector(".sector-detail-close"),cta:n.querySelector(".detail-cta")},s=Array.from(t.querySelectorAll(".sector-card"));let o=null;function a(c){if(o===c){l();return}if(s.forEach(u=>u.classList.remove("is-active")),c.classList.add("is-active"),o=c,i.icon.innerHTML=c.querySelector(".service-icon").innerHTML,i.title.textContent=c.querySelector("h3").textContent,i.tag.textContent=c.dataset.tag||"",i.body.innerHTML=c.querySelector(".sector-detail-content").innerHTML,i.cta){const u=c.dataset.key||c.dataset.sector;u?(i.cta.href=`/details.html?adv=${u}`,i.cta.style.display=""):i.cta.style.display="none"}n.hidden=!1,Pi||St.fromTo(n,{opacity:0,y:-24,scale:.96},{opacity:1,y:0,scale:1,duration:.5,ease:"power3.out"}),requestAnimationFrame(()=>{Vr.scrollTo(n,{offset:-110,duration:1})})}function l(){o&&o.classList.remove("is-active"),o=null;const c=()=>{n.hidden=!0};Pi?c():St.to(n,{opacity:0,y:-24,scale:.96,duration:.35,ease:"power2.in",onComplete:c})}s.forEach(c=>{c.addEventListener("click",()=>a(c)),c.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),a(c))})}),i.close.addEventListener("click",l)}z_("sector-grid","sector-detail");z_("competency-grid","competency-detail");document.querySelectorAll(".advanced-btn").forEach(r=>{r.addEventListener("click",function(e){const t=this.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top,s=document.createElement("span");s.classList.add("btn-ripple"),s.style.left=`${n}px`,s.style.top=`${i}px`,s.style.width="250px",s.style.height="250px",this.appendChild(s),setTimeout(()=>{s.remove()},850),St.fromTo(this,{scale:1},{scale:.95,duration:.08,yoyo:!0,repeat:1,ease:"power2.out"}),"vibrate"in navigator&&navigator.vibrate(12)})});const Rl=document.getElementById("contact");function bT(){if(!Rl||Rl.classList.contains("revealed"))return;Rl.classList.add("revealed"),Ke.refresh();const r=Rl.querySelector(".contact-content");r&&!Pi&&St.fromTo(r,{opacity:0,y:30},{opacity:1,y:0,duration:.8,ease:"power3.out",delay:.15})}function Bf(r){r&&(r==="#contact"?(bT(),requestAnimationFrame(()=>Vr.scrollTo(r,{duration:1.2,offset:-40}))):Vr.scrollTo(r,{duration:1.2,offset:-40}))}document.querySelectorAll("[data-scroll-to]").forEach(r=>{r.addEventListener("click",()=>Bf(r.getAttribute("data-scroll-to")))});document.querySelectorAll(".footer-link").forEach(r=>{r.addEventListener("click",e=>{e.preventDefault(),Bf(r.getAttribute("href"))})});const Xo=document.getElementById("contact-form");if(Xo){const r=document.getElementById("form-status");Xo.addEventListener("submit",async e=>{if(e.preventDefault(),!Xo.checkValidity()){Xo.reportValidity();return}const t=document.getElementById("contact-submit");t.disabled=!0,r.classList.remove("error","success"),r.textContent="✅ تم استلام طلبك (وضع تجريبي) — سيُفعَّل الإرسال الفعلي فور ربط خدمة الاستقبال.",r.classList.add("success"),Xo.reset(),t.disabled=!1})}const wT=r=>String(r).replace(/[0-9]/g,e=>"٠١٢٣٤٥٦٧٨٩"[e]);document.querySelectorAll(".counter").forEach(r=>{const e=parseFloat(r.dataset.target)||0,t=r.dataset.prefix||"",n=r.dataset.suffix||"",i=o=>{r.textContent=t+wT(Math.round(o))+n};if(Pi){i(e);return}const s={v:0};Ke.create({trigger:r,start:"top 88%",once:!0,onEnter:()=>{St.to(s,{v:e,duration:1.6,ease:"power2.out",onUpdate:()=>i(s.v)})}})});const AT=document.querySelectorAll(".service-card, .leader-card");!Of&&!Pi&&AT.forEach(r=>{const e=document.createElement("div");e.classList.add("tilt-glare"),r.appendChild(e),r.addEventListener("mousemove",t=>{const n=r.getBoundingClientRect(),i=t.clientX-n.left,s=t.clientY-n.top,o=(i/n.width-.5)*2,a=(s/n.height-.5)*2,l=8;vi&&vi.classList.add("hover-active"),St.to(r,{rotationY:o*l,rotationX:-a*l,transformPerspective:1e3,ease:"power2.out",duration:.5,overwrite:"auto"}),St.to(e,{opacity:.8,x:-o*12,y:-a*12,duration:.5,overwrite:"auto"})}),r.addEventListener("mouseleave",()=>{vi&&vi.classList.remove("hover-active"),St.to(r,{rotationY:0,rotationX:0,ease:"elastic.out(1, 0.35)",duration:.8}),St.to(e,{opacity:0,x:0,y:0,duration:.5})})});
