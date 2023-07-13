if (self.CavalryLogger) { CavalryLogger.start_js(["6ON+r"]); }

__d("PUWErrorCodes",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BAD_JPEG:9901,WORKER_TERMINATED:9902,UNKNOWN_RESIZE_ERROR:9903,WORKER_ABORT:9904};}),null);
__d('XUIDialogHeader.react',['cx','fbt','React','XUICardHeader.react','XUICloseButton.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.render=function(){'use strict';var n=null;if(this.props.showCloseButton)n=c('React').createElement(c('XUICloseButton.react'),{label:this.props.closeButtonText,className:"layerCancel _51-t"});return (c('React').createElement(c('XUICardHeader.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_4-i0"),link:n,type:'primary'}),this.props.children));};function m(){'use strict';j.apply(this,arguments);}m.propTypes={closeButtonText:l.string,showCloseButton:l.bool,activeTabKey:l.string,defaultActiveTabKey:l.string,onTabClick:l.func};m.defaultProps={closeButtonText:i._("Close"),onTabClick:function n(){return true;},showCloseButton:true};f.exports=m;}),null);
/*
 * @preserve-header
 *
 * Javascript EXIF Reader 0.1.6
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * Licensed under the MPL License [http://www.nihilogic.dk/licenses/mpl-license.txt]
 */__d("exif/exif",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();var h=(function(){var i={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},j={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},k={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},l={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function m(y,event,z){if(y.addEventListener){y.addEventListener(event,z,false);}else if(y.attachEvent)y.attachEvent("on"+event,z);}function n(y){return !!(y.exifdata);}function o(y,z){BinaryAjax(y.src,function(aa){var ba=p(aa.binaryResponse);y.exifdata=ba||{};if(z)z.call(y);});}function p(y){if(y.getByteAt(0)!=255||y.getByteAt(1)!=216)return false;var z=2,aa=y.getLength(),ba;while(z<aa){if(y.getByteAt(z)!=255)return false;ba=y.getByteAt(z+1);if(ba==22400){return s(y,z+4,y.getShortAt(z+2,true)-2);}else if(ba==225){return s(y,z+4,y.getShortAt(z+2,true)-2);}else z+=2+y.getShortAt(z+2,true);}}function q(y,z,aa,ba,ca){var da=y.getShortAt(aa,ca),ea={},fa,ga,ha;for(ha=0;ha<da;ha++){fa=aa+ha*12+2;ga=ba[y.getShortAt(fa,ca)];ea[ga]=r(y,fa,z,aa,ca);}return ea;}function r(y,z,aa,ba,ca){var da=y.getShortAt(z+2,ca),ea=y.getLongAt(z+4,ca),fa=y.getLongAt(z+8,ca)+aa,ga,ha,ia,ja,ka,la;switch(da){case 1:case 7:if(ea==1){return y.getByteAt(z+8,ca);}else{ga=ea>4?fa:(z+8);ha=[];for(ja=0;ja<ea;ja++)ha[ja]=y.getByteAt(ga+ja);return ha;}case 2:ga=ea>4?fa:(z+8);return y.getStringAt(ga,ea-1);case 3:if(ea==1){return y.getShortAt(z+8,ca);}else{ga=ea>2?fa:(z+8);ha=[];for(ja=0;ja<ea;ja++)ha[ja]=y.getShortAt(ga+2*ja,ca);return ha;}case 4:if(ea==1){return y.getLongAt(z+8,ca);}else{ha=[];for(var ja=0;ja<ea;ja++)ha[ja]=y.getLongAt(fa+4*ja,ca);return ha;}case 5:if(ea==1){ka=y.getLongAt(fa,ca);la=y.getLongAt(fa+4,ca);ia=new Number(ka/la);ia.numerator=ka;ia.denominator=la;return ia;}else{ha=[];for(ja=0;ja<ea;ja++){ka=y.getLongAt(fa+8*ja,ca);la=y.getLongAt(fa+4+8*ja,ca);ha[ja]=new Number(ka/la);ha[ja].numerator=ka;ha[ja].denominator=la;}return ha;}case 9:if(ea==1){return y.getSLongAt(z+8,ca);}else{ha=[];for(ja=0;ja<ea;ja++)ha[ja]=y.getSLongAt(fa+4*ja,ca);return ha;}case 10:if(ea==1){return y.getSLongAt(fa,ca)/y.getSLongAt(fa+4,ca);}else{ha=[];for(ja=0;ja<ea;ja++)ha[ja]=y.getSLongAt(fa+8*ja,ca)/y.getSLongAt(fa+4+8*ja,ca);return ha;}}}function s(y,z){if(y.getStringAt(z,4)!="Exif")return false;var aa,ba,ca,da,ea,fa=z+6;if(y.getShortAt(fa)==18761){aa=false;}else if(y.getShortAt(fa)==19789){aa=true;}else return false;if(y.getShortAt(fa+2,aa)!=42)return false;if(y.getLongAt(fa+4,aa)!=8)return false;ba=q(y,fa,fa+8,j,aa);if(ba.ExifIFDPointer){da=q(y,fa,fa+ba.ExifIFDPointer,i,aa);for(ca in da){switch(ca){case "LightSource":case "Flash":case "MeteringMode":case "ExposureProgram":case "SensingMethod":case "SceneCaptureType":case "SceneType":case "CustomRendered":case "WhiteBalance":case "GainControl":case "Contrast":case "Saturation":case "Sharpness":case "SubjectDistanceRange":case "FileSource":da[ca]=l[ca][da[ca]];break;case "ExifVersion":case "FlashpixVersion":da[ca]=String.fromCharCode(da[ca][0],da[ca][1],da[ca][2],da[ca][3]);break;case "ComponentsConfiguration":da[ca]=l.Components[da[ca][0]]+l.Components[da[ca][1]]+l.Components[da[ca][2]]+l.Components[da[ca][3]];break;}ba[ca]=da[ca];}}if(ba.GPSInfoIFDPointer){ea=q(y,fa,fa+ba.GPSInfoIFDPointer,k,aa);for(ca in ea){switch(ca){case "GPSVersionID":ea[ca]=ea[ca][0]+"."+ea[ca][1]+"."+ea[ca][2]+"."+ea[ca][3];break;}ba[ca]=ea[ca];}}return ba;}function t(y,z){if(!y.complete)return false;if(!n(y)){o(y,z);}else if(z)z.call(y);return true;}function u(y,z){if(!n(y))return;return y.exifdata[z];}function v(y){if(!n(y))return {};var z,aa=y.exifdata,ba={};for(z in aa)if(aa.hasOwnProperty(z))ba[z]=aa[z];return ba;}function w(y){if(!n(y))return "";var z,aa=y.exifdata,ba="";for(z in aa)if(aa.hasOwnProperty(z))if(typeof aa[z]=="object"){if(aa[z] instanceof Number){ba+=z+" : "+aa[z]+" ["+aa[z].numerator+"/"+aa[z].denominator+"]\r\n";}else ba+=z+" : ["+aa[z].length+" values]\r\n";}else ba+=z+" : "+aa[z]+"\r\n";return ba;}function x(y){return p(y);}return {readFromBinaryFile:x,pretty:w,getTag:u,getAllTags:v,getData:t,Tags:i,TiffTags:j,GPSTags:k,StringValues:l};})();f.exports=h;}),null);
__d('ImageExif',['exif/exif'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(k){this.getByteAt=function(l){return k.getUint8(l);};this.getShortAt=function(l,m){return k.getUint16(l,!m);};this.getSShortAt=function(l,m){return k.getInt16(l,!m);};this.getLongAt=function(l,m){return k.getUint32(l,!m);};this.getSLongAt=function(l,m){return k.getInt32(l,!m);};this.getStringAt=function(l,m){var n=Array(m);for(var o=0;o<m;o++)n.push(String.fromCharCode(this.getByteAt(l+o)));return n.join('');};this.getLength=function(){return k.byteLength;};}function i(k){var l=function m(n){return k.charCodeAt(n)&255;};this.getByteAt=l;this.getShortAt=function(m,n){var o=this.getSShortAt(m,n);return o>0?o:o+65536;};this.getSShortAt=function(m,n){var o=l(m),p=l(m+1);return n?(o<<8)+p:(p<<8)+o;};this.getLongAt=function(m,n){var o=this.getSLongAt(m,n);return o>0?o:o+4294967296;};this.getSLongAt=function(m,n){var o=l(m),p=l(m+1),q=l(m+2),r=l(m+3);return n?(((o<<8)+p<<8)+q<<8)+r:(((r<<8)+q<<8)+p<<8)+o;};this.getStringAt=function(m,n){return k.substr(m,n);};this.getLength=function(){return k.length;};}var j={readFromFile:function k(l,m){var n=new FileReader();n.addEventListener('load',function(event){var o=event.target.result,p=o instanceof ArrayBuffer?this.readFromArrayBuffer(o):this.readFromBinaryString(o);m(p);}.bind(this),false);if(window.DataView){n.readAsArrayBuffer(l);}else n.readAsBinaryString(l);},readFromBinaryString:function k(l){return c('exif/exif').readFromBinaryFile(new i(l));},readFromArrayBuffer:function k(l){return c('exif/exif').readFromBinaryFile(new h(new DataView(l)));}};f.exports=j;}),null);
__d('StringEncoding',[],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(o,p){var q=new Uint8Array(o),r=0,s=[];while(r<q.length){var t=q[r],u=void 0;if(t>>7===0){u=1;}else if(t>>5===6){t&=31;u=2;}else if(t>>4===14){t&=15;u=3;}else if(t>>3===30){t&=7;u=4;}else if(t>>2===62){t&=3;u=5;}else if(t>>1===126){t&=1;u=6;}else throw new Error('Cannot decode as UTF-8 - '+'unrecognised codepoint header');if(r+u>q.length)throw new Error('Cannot decode as UTF-8 - '+'incomplete codepoint');for(var v=1;v<u;v++){var w=q[r+v];if(w>>6!==2)throw new Error('Cannot decode as UTF-8 - '+'unrecognised codepoint subsequent byte');w&=63;t<<=6;t|=w;}if(t>1114111)throw new Error('Cannot decode as UTF-8 - '+"JavaScript doesn't support codepoints over 0x10FFFF");if(!t)switch(p){case 'error':throw new Error('Cannot decode as UTF-8 - '+"contains a null and we're not allowing them");case 'ignore':continue;case 'truncate':return String.fromCodePoint.apply(String,s);case 'include':break;}s.push(t);r+=u;}return String.fromCodePoint.apply(String,s);}function i(o){return (o&255)<<8|o>>8;}function j(o,p){if(o.byteLength%2!==0)throw new Error('Cannot decode as UTF-16 - '+'data length mod 2 != 0');var q=new Uint16Array(o),r=0,s=[],t=false;if(q[0]===65279){++r;}else if(q[0]==65534){++r;t=true;}while(r<q.length){var u=q[r];if(t)u=i(u);var v=u;if(u>55295&&u<57344){if((u&64512)!==55296)throw new Error('Cannot decode as UTF-16 - '+'incorrect signature for high surrogate');if(r+1>=q.length)throw new Error('Cannot decode as UTF-16 - '+'incomplete codepoint');++r;var w=q[r];if(t)w=i(w);if((w&64512)!==56320)throw new Error('Cannot decode as UTF-16 - '+'incorrect signature for low surrogate');v=((u&1023)<<10|w&1023)+65536;}if(!v)switch(p){case 'error':throw new Error('Cannot decode as UTF-16 - '+"contains a null and we're not allowing them");case 'ignore':continue;case 'truncate':return String.fromCodePoint.apply(String,s);case 'include':break;}s.push(v);++r;}return String.fromCodePoint.apply(String,s);}function k(o){return ((o&255)<<24|(o&255<<8)<<8|(o&255<<16)>>8|o>>>24);}function l(o,p){if(o.byteLength%4!==0)throw new Error('Cannot decode as UTF-32 - '+'data length mod 4 != 0');var q=new Uint32Array(o),r=0,s=[],t=false;if(q[0]===65279){++r;}else if(q[0]==4294836224){++r;t=true;}while(r<q.length){var u=q[r];if(t)u=k(u);if(u&2147483648)throw new Error('Cannot decode as UTF-32 - '+'invalid codepoint');if(u>1114111)throw new Error('Cannot decode as UTF-32 - '+"JavaScript doesn't support codepoints over 0x10FFFF");if(!u)switch(p){case 'error':throw new Error('Cannot decode as UTF-32 - '+"contains a null and we're not allowing them");case 'ignore':continue;case 'truncate':return String.fromCodePoint.apply(String,s);case 'include':break;}s.push(u);++r;}return String.fromCodePoint.apply(String,s);}var m={'utf-8':h,'utf-16':j,'utf-32':l};function n(o,p){if(o){this.$Decoder1=o;}else this.$Decoder1=['utf-8','utf-16','utf-32'];if(!p)p='error';this.$Decoder2=p;for(var q=this.$Decoder1,r=Array.isArray(q),s=0,q=r?q:q[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var t;if(r){if(s>=q.length)break;t=q[s++];}else{s=q.next();if(s.done)break;t=s.value;}var u=t;this.$Decoder3(u);}}n.prototype.getPrecedence=function(){return this.$Decoder1;};n.prototype.decode=function(o){var p=[];for(var q=this.$Decoder1,r=Array.isArray(q),s=0,q=r?q:q[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var t;if(r){if(s>=q.length)break;t=q[s++];}else{s=q.next();if(s.done)break;t=s.value;}var u=t,v=this.$Decoder3(u);try{return v(o,this.$Decoder2);}catch(w){p.push(w);}}throw new Error(p.join(', '));};n.prototype.$Decoder3=function(o){var p=m[o];if(!p)throw new Error('Unknown encoding '+o);return p;};f.exports.Decoder=n;}),null);
__d('ImageMetadata',['regeneratorRuntime','Promise','StringEncoding','ImageExif'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(m){this.$ImageMetadata4=m;this.$ImageMetadata5=new Uint8Array(m);this.$ImageMetadata6();}h.prototype.$ImageMetadata6=function(){var m=0;while(m<this.$ImageMetadata5.length){m=this.$ImageMetadata7(m);if(m===-1)return;var n=this.$ImageMetadata5[m+1],o=i[n];if(!o)return;var p=o.length;if(p===undefined)p=this.$ImageMetadata5[m+2]*256+this.$ImageMetadata5[m+3];this.$ImageMetadata8(m,p,o);if(o.name==='SOS')return;m+=2+p;}};h.prototype.$ImageMetadata8=function(m,n,o){switch(o.name){case 'APP1':if(this.$ImageMetadata9(m+4,j)){this.$ImageMetadata10(m+4+j.length,n-2-j.length);}else if(this.$ImageMetadata9(m+4,k)){this.$ImageMetadata11(m+4+k.length,n-2-k.length);}else if(this.$ImageMetadata9(m+4,l))this.$ImageMetadata12(m+4+l.length,n-2-l.length);break;case 'SOF0':case 'SOF1':case 'SOF2':case 'SOF3':case 'SOF5':case 'SOF6':case 'SOF7':case 'JPG':case 'SOF9':case 'SOF10':case 'SOF11':case 'SOF13':case 'SOF14':case 'SOF15':this.$ImageMetadata13(m+4,n-2);break;}};h.prototype.$ImageMetadata13=function(m,n){var o=this.$ImageMetadata5[m+3]*256+this.$ImageMetadata5[m+4],p=this.$ImageMetadata5[m+1]*256+this.$ImageMetadata5[m+2];if(o>0&&p>0)this.$ImageMetadata3={x:o,y:p};};h.prototype.$ImageMetadata10=function(m,n){var o=emptyFunction;try{emptyFunction=function(){};var p=c('ImageExif').readFromArrayBuffer(this.$ImageMetadata4)||{};}finally{emptyFunction=o;}var q={};for(var r in p){var s=p[r];if(typeof s==='string')s=s.trim();q[r.trim()]=s;}this.$ImageMetadata1=q;};h.prototype.$ImageMetadata11=function(m,n){this.$ImageMetadata2={};var o=this.$ImageMetadata2,p=new (c('StringEncoding').Decoder)(null,'truncate');try{var r=p.decode(this.$ImageMetadata4.slice(m,m+n));}catch(q){return;}for(var s=0;s<r.length;++s){var t=r.indexOf('<GPano:',s);if(t==-1)break;var u=r.indexOf('>',t),v=r.substring(t+1,u).trim(),w=r.indexOf('<',u),x=r.substring(u+1,w).trim();o[v]=x;s=w;}for(var y=0;y<r.length;++y){var z=r.indexOf('GPano:',y);if(z==-1)break;var aa=r.indexOf('=',z),ba=r.substring(z,aa).trim(),ca=r.indexOf('"',z);if(ba.indexOf('>')==-1&&ba.indexOf('<')==-1){var da=r.indexOf('"',ca+1),ea=r.substring(ca+1,da).trim();o[ba]=ea;y=da;}}};h.prototype.$ImageMetadata12=function(m){};h.prototype.$ImageMetadata9=function(m,n){return n.split('').every(function(o){return this.$ImageMetadata5[m++]===o.charCodeAt(0);}.bind(this));};h.prototype.$ImageMetadata7=function(m){for(var n=m;n+1<this.$ImageMetadata5.length;++n)if(this.$ImageMetadata5[n]===255&&this.$ImageMetadata5[n+1]!==0&&this.$ImageMetadata5[n+1]!==255)return n;return -1;};h.prototype.hasExif=function(){return Boolean(this.$ImageMetadata1);};h.prototype.hasXMP=function(){return Boolean(this.$ImageMetadata2);};h.prototype.hasSize=function(){return Boolean(this.$ImageMetadata3);};h.prototype.getExif=function(){if(!this.$ImageMetadata1)throw new Error('Image has no Exif data');return this.$ImageMetadata1;};h.prototype.getXMP=function(){if(!this.$ImageMetadata2)throw new Error('Image has no XMP data');return this.$ImageMetadata2;};h.prototype.getSize=function(){if(!this.$ImageMetadata3)throw new Error('Could not find size data?!');return this.$ImageMetadata3;};h.genMetadataFromBlob=function m(n){return c('regeneratorRuntime').async(function o(p){while(1)switch(p.prev=p.next){case 0:p.t0=h;p.next=3;return c('regeneratorRuntime').awrap(h.$ImageMetadata14(n));case 3:p.t1=p.sent;return p.abrupt('return',new p.t0(p.t1));case 5:case 'end':return p.stop();}},null,this);};h.$ImageMetadata14=function(m){return new (c('Promise'))(function(n,o){var p=new b.FileReader();p.onabort=o;p.onerror=o;p.onload=n;p.readAsArrayBuffer(m);});};var i=[];i[216]={name:'SOI',length:0};i[192]={name:'SOF0'};i[193]={name:'SOF1'};i[194]={name:'SOF2'};i[195]={name:'SOF3'};i[197]={name:'SOF5'};i[198]={name:'SOF6'};i[199]={name:'SOF7'};i[200]={name:'JPG'};i[201]={name:'SOF9'};i[202]={name:'SOF10'};i[203]={name:'SOF11'};i[205]={name:'SOF13'};i[206]={name:'SOF14'};i[207]={name:'SOF15'};i[196]={name:'DHT'};i[219]={name:'DQT'};i[221]={name:'DRI',length:2};i[218]={name:'SOS'};i[208]={name:'RST0',length:0};i[209]={name:'RST1',length:0};i[210]={name:'RST2',length:0};i[211]={name:'RST3',length:0};i[212]={name:'RST4',length:0};i[213]={name:'RST5',length:0};i[214]={name:'RST6',length:0};i[215]={name:'RST7',length:0};i[224]={name:'APP0'};i[225]={name:'APP1'};i[226]={name:'APP2'};i[227]={name:'APP3'};i[228]={name:'APP4'};i[229]={name:'APP5'};i[230]={name:'APP6'};i[231]={name:'APP7'};i[232]={name:'APP8'};i[233]={name:'APP9'};i[234]={name:'APP10'};i[235]={name:'APP11'};i[236]={name:'APP12'};i[237]={name:'APP13'};i[238]={name:'APP14'};i[239]={name:'APP15'};i[254]={name:'COM'};i[217]={name:'EOI',length:0};var j='Exif\0\0',k='http://ns.adobe.com/xap/1.0/\0',l='http://ns.adobe.com/xmp/extension/\0';f.exports=h;}),null);
__d('SphericalImage',['Promise','regeneratorRuntime','ImageMetadata'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='GPano:ProjectionType',i=100,j='cylindrical';function k(x){return new (c('Promise'))(function(y,z){var aa=new b.FileReader();aa.onabort=z;aa.onerror=z;aa.onload=function(event){return y(event.target.result);};aa.readAsArrayBuffer(x);});}function l(x){if(!x.hasXMP())return false;var y=x.getXMP(),z=Boolean(y['GPano:CroppedAreaImageWidthPixels']&&y['GPano:CroppedAreaImageHeightPixels']&&y['GPano:FullPanoWidthPixels']&&y['GPano:FullPanoHeightPixels']);if(z)return true;var aa=x.getSize(),ba=Math.abs(aa.x-aa.y*2)<=2;if(y[h]==='equirectangular'&&ba)return true;var ca=aa.x===aa.y*6||aa.y===aa.x*6,da=Boolean(y[h]==='cubestrip'||y[h]==='cubemap');if(da&&ca)return true;return false;}var m={'iPhone 4S':{x:19334,y:3264},'iPhone 5':{x:18521,y:3264},'iPhone 5c':{x:18521,y:3264},'iPhone 5s':{x:17279,y:3264},'iPhone 6':{x:17731,y:3264},'iPhone 6 Plus':{x:17731,y:3264},'iPhone 6s':{x:21729,y:4000},'iPhone 6s Plus':{x:21729,y:4000},'iPhone SE':{x:21729,y:4000},'iPhone 7':{x:21842,y:3884},'iPhone 7 Plus':{x:21842,y:3884},'iPad Air':{x:14810,y:2592},'iPad Air 2':{x:18512,y:3264},'iPad Mini 2':{x:14810,y:2592},'iPad Mini 3':{x:14810,y:2592},'iPad Mini 4':{x:18512,y:3264},'iPad Pro':{x:18512,y:3264}},n={'sm-g90':{minHeight:2200,fullWidth:17000},'sm-n91':{minHeight:2200,fullWidth:17000},'sm-g92':{minHeight:2200,fullWidth:15550},'sm-n92':{minHeight:2200,fullWidth:15550},'sm-g93':{minHeight:2800,fullWidth:20200},'sm-n93':{minHeight:2800,fullWidth:20200}};function o(x){if(!x.hasExif())return false;return (q(x)||p(x)||r(x));}function p(x){var y=x.getExif(),z=x.getSize();return (y.Make==='RICOH'&&y.Model==='RICOH THETA S'&&z.x===2*z.y);}function q(x){var y=x.getExif();if(y.Make!='Apple')return false;var z=m[y.Model];if(!z)return false;var aa=void 0,ba=void 0;if(y.ExifImageWidth&&y.ExifImageLength)if(!ba||y.ExifImageWidth>ba.x)ba={x:y.ExifImageWidth,y:y.ExifImageLength};if(y.ImageWidth&&y.ImageLength)if(!ba||y.ImageWidth>ba.x)ba={x:y.ImageWidth,y:y.ImageLength};if(y.OriginalImageWidth&&y.OriginalImageHeight)if(!ba||y.OriginalImageWidth>ba.x)ba={x:y.OriginalImageWidth,y:y.OriginalImageHeight};if(y.PixelXDimension&&y.PixelYDimension)if(!ba||y.PixelXDimension>ba.x)ba={x:y.PixelXDimension,y:y.PixelYDimension};if(x.hasSize()){aa=x.getSize();var ca=s(aa);if(ba){var da=s(ba);if(!t(ca,da))return false;}if(ca<2)return false;}var ea=ba||aa;if(!ea)return false;if(!t(ea.y,z.y,.3))return false;return true;}function r(x){var y=x.getExif(),z=x.getSize(),aa=z.x,ba=z.y;if(String(y.Make).toLowerCase()!='samsung')return false;var ca=String(y.Model).toLowerCase().trim(),da=null;Object.keys(n).forEach(function(ga){if(ca.includes(ga))da=n[ga];});if(!da)return false;if(y.Orientation===6){var ea=aa;aa=ba;ba=ea;}if(ba<da.minHeight)return false;var fa=aa/da.fullWidth*360;if(fa<i||aa<2*ba)return false;return true;}function s(x){return x.x/x.y;}function t(x,y){var z=arguments.length<=2||arguments[2]===undefined?.05:arguments[2];return x>(1-z)*y&&x<(1+z)*y;}function u(x){return (l(x)||o(x));}function v(x){var y,z;return c('regeneratorRuntime').async(function aa(ba){while(1)switch(ba.prev=ba.next){case 0:ba.next=2;return c('regeneratorRuntime').awrap(k(x));case 2:y=ba.sent;z=new (c('ImageMetadata'))(y);return ba.abrupt('return',u(z));case 5:case 'end':return ba.stop();}},null,this);}function w(x){'use strict';this.$SphericalImage1=x;this.$SphericalImage2=u(this.$SphericalImage1);}w.createFromBlob=function x(y){var z;return c('regeneratorRuntime').async(function aa(ba){while(1)switch(ba.prev=ba.next){case 0:'use strict';ba.next=3;return c('regeneratorRuntime').awrap(k(y));case 3:z=ba.sent;return ba.abrupt('return',new this(new (c('ImageMetadata'))(z)));case 5:case 'end':return ba.stop();}},null,this);};w.prototype.isSpherical=function(){'use strict';return this.$SphericalImage2;};w.prototype.getMetadata=function(){'use strict';return this.$SphericalImage1;};w.prototype.getProjectionType=function(){'use strict';var x='';if(this.$SphericalImage1.hasXMP())x=this.$SphericalImage1.getXMP()[h];if(this.isSpherical()&&!x)x=j;return x;};f.exports={isSphericalBlob:v,isSphericalMetadata:u,SphericalImage:w};}),null);
__d('XComposerPhotoUploader',['regeneratorRuntime','Promise','AsyncUploadRequest','ReactComposerMediaUtils','FileInputUploader','JSLogger','PhotosMimeType','PhotosUploadID','QE','SphericalPhotoConfig','SphericalImage','curry','emptyFunction','performanceNow'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('SphericalImage').SphericalImage,i=b.URL||b.webkitURL||{};function j(k){this.$XComposerPhotoUploader2=k.uploadData||{};this.$XComposerPhotoUploader1=k.uploadEndpoint;this.$XComposerPhotoUploader3=k.retryLimit;this.$XComposerPhotoUploader4=k.concurrentLimit;this.$XComposerPhotoUploader5=k.resizer;this.$XComposerPhotoUploader6=k.onUploadEnqueued||c('emptyFunction');this.$XComposerPhotoUploader7=k.onUploadsEnqueued||c('emptyFunction');this.$XComposerPhotoUploader8=k.onResizeStart||c('emptyFunction');this.$XComposerPhotoUploader11=k.onResizeProgress||c('emptyFunction');this.$XComposerPhotoUploader9=k.onResizeSuccess||c('emptyFunction');this.$XComposerPhotoUploader10=k.onResizeFailure||c('emptyFunction');this.$XComposerPhotoUploader12=k.onUploadIsSpherical||c('emptyFunction');this.$XComposerPhotoUploader13=k.onUploadSent||c('emptyFunction');this.$XComposerPhotoUploader14=k.onUploadStart||c('emptyFunction');this.$XComposerPhotoUploader15=k.onUploadProgress||c('emptyFunction');this.$XComposerPhotoUploader16=k.onUploadSuccess||c('emptyFunction');this.$XComposerPhotoUploader17=k.onUploadFailure||c('emptyFunction');this.$XComposerPhotoUploader18=c('JSLogger').create('composer');}j.prototype.upload=function(k,l){l=l||0;var m=Object.assign({},this.$XComposerPhotoUploader2),n=null;if(!this.$XComposerPhotoUploader19(k)){var o=c('PhotosUploadID').getNewID();k.uploadID=o;m.upload_id=o;this.$XComposerPhotoUploader6({uploadID:o,fileName:k.value.split('/').pop().split('\\').pop(),fileURL:i.createObjectURL?i.createObjectURL(k):null});}else{n=Array.from(k.files);n=n.filter(function(s){return !c('ReactComposerMediaUtils').hasVideos([s.name]);});if(n.length===0)return;var p=n.length+l;n.forEach(function(s){if(!s.uploadID)s.uploadID=c('PhotosUploadID').getNewID();var t=false;if(c('SphericalPhotoConfig').spherical_photo_www_upload)t=null;this.$XComposerPhotoUploader6({uploadID:s.uploadID,fileName:s.name,isSpherical:t,fileURL:i.createObjectURL?i.createObjectURL(s):null});}.bind(this));if(!c('SphericalPhotoConfig').spherical_photo_www_upload||!c('SphericalPhotoConfig').www_spherical_photo_mmp&&p>1)m.allow_spherical_photo=false;}this.$XComposerPhotoUploader7();var q=new (c('FileInputUploader'))(k).setURI(this.$XComposerPhotoUploader1).setData(m).setAllowCrossOrigin(true).setNetworkErrorRetryLimit(this.$XComposerPhotoUploader3).setUploadInParallel(true);if(n&&n.length>0){q.setFiles({farr:n});if(this.$XComposerPhotoUploader5){q.setPreprocessHandler(this.$XComposerPhotoUploader20.bind(this));}else q.setPreprocessHandler(this.$XComposerPhotoUploader21.bind(this));if(this.$XComposerPhotoUploader4)q.setConcurrentLimit(this.$XComposerPhotoUploader4);}q.subscribe('progress',function(s,t){return (this.$XComposerPhotoUploader15(this.$XComposerPhotoUploader22(t,k),t));}.bind(this));q.subscribe('failure',function(s,t){return (this.$XComposerPhotoUploader17(this.$XComposerPhotoUploader22(t,k),t,n));}.bind(this));q.subscribe('start',function(s,t){return (this.$XComposerPhotoUploader14(this.$XComposerPhotoUploader22(t,k),t));}.bind(this));q.subscribe('success',function(s,t){return (this.$XComposerPhotoUploader16(this.$XComposerPhotoUploader22(t,k),t));}.bind(this));try{q.send();this.$XComposerPhotoUploader13(k);}catch(r){this.$XComposerPhotoUploader18.error('error_send_unpublished_files',r);throw r;}};j.prototype.getAsyncUploadRequest=function(k,l){var m=new (c('AsyncUploadRequest'))().setData(Object.assign({},l&&l.data,this.$XComposerPhotoUploader2)).setFiles({farr:k}).setAllowCrossOrigin(true).setURI(this.$XComposerPhotoUploader1);if(this.$XComposerPhotoUploader4)m.setLimit(this.$XComposerPhotoUploader4);if(this.$XComposerPhotoUploader5)m.setPreprocessHandler(this.$XComposerPhotoUploader20.bind(this));m.subscribe('start',function(n,o){return (this.$XComposerPhotoUploader14(o.getFile().uploadID,{upload:o}));}.bind(this));m.subscribe('progress',function(n,o){return (this.$XComposerPhotoUploader15(o.getFile().uploadID,{upload:o,event:o.getProgressEvent()}));}.bind(this));m.subscribe('success',function(n,o){return (this.$XComposerPhotoUploader16(o.getFile().uploadID,{upload:o,response:o.getResponse()}));}.bind(this));m.subscribe('failure',function(n,o){return (this.$XComposerPhotoUploader17(o.getFile().uploadID,{upload:o,response:o.getResponse()},k));}.bind(this));return m;};j.prototype.$XComposerPhotoUploader22=function(k,l){if(k.upload){return k.upload.getFile().uploadID;}else return l.uploadID;};j.prototype.$XComposerPhotoUploader21=function(k,l){(function m(){return c('regeneratorRuntime').async(function n(o){while(1)switch(o.prev=o.next){case 0:o.next=2;return c('regeneratorRuntime').awrap(this.$XComposerPhotoUploader23(k,l));case 2:return o.abrupt('return',o.sent);case 3:case 'end':return o.stop();}},null,this);}).bind(this)().done();};j.prototype.$XComposerPhotoUploader23=function k(l,m){var n,o;return c('regeneratorRuntime').async(function p(q){while(1)switch(q.prev=q.next){case 0:n=l.getFile();q.next=3;return c('regeneratorRuntime').awrap(this.$XComposerPhotoUploader24(n));case 3:o=q.sent;this.$XComposerPhotoUploader12(n,o.isSpherical(),o.getProjectionType());m(l);case 6:case 'end':return q.stop();}},null,this);};j.prototype.$XComposerPhotoUploader20=function(k,l){(function m(){return c('regeneratorRuntime').async(function n(o){while(1)switch(o.prev=o.next){case 0:o.next=2;return c('regeneratorRuntime').awrap(this.$XComposerPhotoUploader25(k,l));case 2:return o.abrupt('return',o.sent);case 3:case 'end':return o.stop();}},null,this);}).bind(this)().done();};j.prototype.$XComposerPhotoUploader24=function k(l){var m;return c('regeneratorRuntime').async(function n(o){while(1)switch(o.prev=o.next){case 0:o.next=2;return c('regeneratorRuntime').awrap(h.createFromBlob(l));case 2:m=o.sent;if(m.isSpherical())c('QE').logExposure('spherical_photo');return o.abrupt('return',m);case 5:case 'end':return o.stop();}},null,this);};j.prototype.$XComposerPhotoUploader26=function(k){return this.$XComposerPhotoUploader27(this.$XComposerPhotoUploader5.resizeBlob.bind(this.$XComposerPhotoUploader5),k);};j.prototype.$XComposerPhotoUploader28=function(k){return this.$XComposerPhotoUploader27(this.$XComposerPhotoUploader5.resize360Blob.bind(this.$XComposerPhotoUploader5),k);};j.prototype.$XComposerPhotoUploader27=function(k,l){var m=c('curry')(this.$XComposerPhotoUploader11,l.uploadID),n=function(){return this.$XComposerPhotoUploader8(l);}.bind(this);return new (c('Promise'))(function(o,p){n();k(l,function(q,r,s){if(q){p(q);}else if(s){o(null);}else o(r);},m);});};j.prototype.$XComposerPhotoUploader25=function k(l,m){var n,o,p,q,r,s;return c('regeneratorRuntime').async(function t(u){while(1)switch(u.prev=u.next){case 0:n=l.getFile();if(!(!n||!c('PhotosMimeType').isJpeg(n.type))){u.next=5;break;}this.$XComposerPhotoUploader12(n,false,'');m(l);return u.abrupt('return');case 5:o=c('performanceNow')();u.prev=6;p=null;if(!c('SphericalPhotoConfig').spherical_photo_www_upload){u.next=12;break;}u.next=11;return c('regeneratorRuntime').awrap(this.$XComposerPhotoUploader24(n));case 11:p=u.sent;case 12:if(!(p&&p.isSpherical())){u.next=19;break;}this.$XComposerPhotoUploader12(n,true,p.getProjectionType());u.next=16;return c('regeneratorRuntime').awrap(this.$XComposerPhotoUploader28(n));case 16:q=u.sent;u.next=23;break;case 19:this.$XComposerPhotoUploader12(n,false,'');u.next=22;return c('regeneratorRuntime').awrap(this.$XComposerPhotoUploader26(n));case 22:q=u.sent;case 23:if(q){q.uploadID=n.uploadID;q.name=n.name;l.setFile(q);}r=q===null;l.getFile().filename=n.name;this.$XComposerPhotoUploader9(n,q||n,r,c('performanceNow')()-o);u.next=34;break;case 29:u.prev=29;u.t0=u['catch'](6);s=c('performanceNow')()-o;this.$XComposerPhotoUploader10(n,q||n,u.t0,s);case 34:m(l);case 35:case 'end':return u.stop();}},null,this,[[6,29]]);};j.prototype.$XComposerPhotoUploader19=function(k){return !!k.files&&c('AsyncUploadRequest').isSupported();};f.exports=j;}),null);
__d('Emscripten',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={isSupported:function h(){return (typeof Int32Array!=='undefined'&&typeof Float64Array!=='undefined'&&!!new Int32Array(1).subarray&&!!new Int32Array(1).set);}};}),null);
__d('PooledWebWorker',['WebWorker'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('WebWorker'));i=h&&h.prototype;function j(k,l,m){'use strict';i.constructor.call(this,m);this.$PooledWebWorker1=l;this.$PooledWebWorker2=k;}j.prototype.getIndex=function(){'use strict';return this.$PooledWebWorker1;};j.prototype.getPool=function(){'use strict';return this.$PooledWebWorker2;};f.exports=j;}),null);
__d('WebWorkerPool',['PooledWebWorker','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();h.isSupported=function(){'use strict';return c('PooledWebWorker').isSupported();};function h(i,j){'use strict';this.$WebWorkerPool1=[];for(var k=0;k<j;k++)this.$WebWorkerPool1.push(new (c('PooledWebWorker'))(this,k,i).setErrorHandler(this.$WebWorkerPool2).setMessageHandler(this.$WebWorkerPool3).execute());this.$WebWorkerPool4=0;}h.prototype.setMessageHandler=function(i){'use strict';this.$WebWorkerPool5=i||c('emptyFunction');return this;};h.prototype.setAllowCrossPageTransition=function(i){'use strict';this.$WebWorkerPool1.forEach(function(j){return j.setAllowCrossPageTransition(i);});return this;};h.prototype.setErrorHandler=function(i){'use strict';this.$WebWorkerPool6=i||c('emptyFunction');return this;};h.prototype.postMessage=function(){'use strict';var i=this.getWorker();for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];i.postMessage.apply(i,k);return i;};h.prototype.$WebWorkerPool3=function(){'use strict';for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];j.unshift(this);this.getPool().$WebWorkerPool5.apply(this.getPool(),j);};h.prototype.$WebWorkerPool2=function(){'use strict';for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];j.unshift(this);return this.getPool().$WebWorkerPool6.apply(this.getPool(),j);};h.prototype.getWorker=function(){'use strict';var i=this.$WebWorkerPool1[this.$WebWorkerPool4];this.$WebWorkerPool4=(this.$WebWorkerPool4+1)%this.$WebWorkerPool1.length;return i;};f.exports=h;}),null);
__d('JpegResizer',['Emscripten','JpegResizerConfig','JpegResizeWorkerResource','WebWorker','WebWorkerPool','PUWErrorCodes'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null;i.isSupported=function(){'use strict';return c('WebWorkerPool').isSupported()&&c('Emscripten').isSupported()&&!c('JpegResizerConfig').isGKBlacklisted;};i.getSingleton=function(j){'use strict';if(!h)h=new i(j||i.DEFAULT_POOL_SIZE).setAllowCrossPageTransition(true);return h;};i.prepareResource=function(j){'use strict';c('WebWorker').prepareResource(c('JpegResizeWorkerResource'),j);};function i(j){'use strict';j=j||i.DEFAULT_POOL_SIZE;c('WebWorker').prepareResource(c('JpegResizeWorkerResource'));this.$JpegResizer1=new (c('WebWorkerPool'))(c('JpegResizeWorkerResource'),j).setErrorHandler(this.$JpegResizer2.bind(this)).setMessageHandler(this.$JpegResizer3.bind(this));this.$JpegResizer4={};this.$JpegResizer5=i.DEFAULT_RESIZE_HEIGHT;this.$JpegResizer6=i.DEFAULT_RESIZE_WIDTH;}i.prototype.setHighQuality=function(j){'use strict';if(j){this.$JpegResizer5=i.DEFAULT_RESIZE_HEIGHT;this.$JpegResizer6=i.DEFAULT_RESIZE_WIDTH;}else{this.$JpegResizer5=i.LOW_QUALITY_RESIZE_HEIGHT;this.$JpegResizer6=i.LOW_QUALITY_RESIZE_WIDTH;}return this;};i.prototype.setAllowCrossPageTransition=function(j){'use strict';this.$JpegResizer1.setAllowCrossPageTransition(j);return this;};i.prototype.resizeBlob=function(j,k,l){'use strict';return this.$JpegResizer7(j,this.$JpegResizer6,this.$JpegResizer5,k,l);};i.prototype.resize360Blob=function(j,k,l){'use strict';return this.$JpegResizer7(j,this.$JpegResizer6*3,this.$JpegResizer5*3,k,l);};i.prototype.$JpegResizer7=function(j,k,l,m,n){'use strict';var o=this.$JpegResizer1.getWorker();if(o.isCurrentState('terminated')){var p=new Error('Worker terminated');p.code=c('PUWErrorCodes').WORKER_TERMINATED;m(p);return this;}var q=o.postMessage({blob:j,height:l,width:k}).getIndex();this.$JpegResizer8(q).unshift({done:m,progress:n});return this;};i.prototype.$JpegResizer8=function(j){'use strict';if(!this.$JpegResizer4.hasOwnProperty(j))this.$JpegResizer4[j]=[];return this.$JpegResizer4[j];};i.prototype.$JpegResizer2=function(j,k){'use strict';j.terminate();var l=this.$JpegResizer8(j.getIndex());this.$JpegResizer9(k);l.forEach(function(m){return m.done(k);});l.length=0;};i.prototype.$JpegResizer3=function(j,k){'use strict';if(k.error)this.$JpegResizer9(k.error);if(k.done){this.$JpegResizer8(j.getIndex()).pop().done(k.error,k.blob,k.skipped);}else{var l=this.$JpegResizer8(j.getIndex()),m=l[l.length-1].progress;if(m)m({written:k.written,total:k.total});}};i.prototype.$JpegResizer9=function(j){'use strict';var k=j.message;if(k&&k.indexOf('Not a JPEG file')!==-1){j.code=c('PUWErrorCodes').BAD_JPEG;}else if(k&&k.indexOf('abort()')!==-1){j.code=c('PUWErrorCodes').WORKER_ABORT;}else j.code=c('PUWErrorCodes').UNKNOWN_RESIZE_ERROR;};i.DEFAULT_POOL_SIZE=3;i.DEFAULT_RESIZE_HEIGHT=2048;i.DEFAULT_RESIZE_WIDTH=2048;i.LOW_QUALITY_RESIZE_HEIGHT=960;i.LOW_QUALITY_RESIZE_WIDTH=960;f.exports=i;}),null);