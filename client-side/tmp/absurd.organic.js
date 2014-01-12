o.helpers.args = function(value) {
	value = value.toString().replace(/\/ /g, '/').split('/');
	return value;
}
o.helpers.extend = function() {
	var process = function(destination, source) {	
	    for (var key in source) {
			if (hasOwnProperty.call(source, key)) {
			    destination[key] = source[key];
			}
	    }
	    return destination;
	};
	var result = arguments[0];
	for(var i=1; i<arguments.length; i++) {
		result = process(result, arguments[i]);
	}
	return result;
}
o.helpers.snippets = function() {
	// http://peters-playground.com/Emmet-Css-Snippets-for-Sublime-Text-2/

	return {

	// Visual Formatting

	"pos": "position",
	"pos:s": "position:static",
	"pos:a": "position:absolute",
	"pos:r": "position:relative",
	"pos:f": "position:fixed",
	"top": "top",
	"t:a": "top:auto",
	"rig": "right",
	"r:a": "right:auto",
	"bot": "bottom",
	// "b:a": "bottom:auto", // breaks the multiple comma selectors
	"lef": "left",
	"l:a": "left:auto",
	"zin": "z-index",
	"z:a": "z-index:auto",
	"fl": "float",
	"fl:n": "float:none",
	"fl:l": "float:left",
	"fl:r": "float:right",
	"cl": "clear",
	"cl:n": "clear:none",
	"cl:l": "clear:left",
	"cl:r": "clear:right",
	"cl:b": "clear:both",
	"dis": "display",
	"d:n": "display:none",
	"d:b": "display:block",
	"d:i": "display:inline",
	"d:ib": "display:inline-block",
	"d:li": "display:list-item",
	"d:ri": "display:run-in",
	"d:cp": "display:compact",
	"d:tb": "display:table",
	"d:itb": "display:inline-table",
	"d:tbcp": "display:table-caption",
	"d:tbcl": "display:table-column",
	"d:tbclg": "display:table-column-group",
	"d:tbhg": "display:table-header-group",
	"d:tbfg": "display:table-footer-group",
	"d:tbr": "display:table-row",
	"d:tbrg": "display:table-row-group",
	"d:tbc": "display:table-cell",
	"d:rb": "display:ruby",
	"d:rbb": "display:ruby-base",
	"d:rbbg": "display:ruby-base-group",
	"d:rbt": "display:ruby-text",
	"d:rbtg": "display:ruby-text-group",
	"vis": "visibility",
	"v:v": "visibility:visible",
	"v:h": "visibility:hidden",
	"v:c": "visibility:collapse",
	"ov": "overflow",
	"ov:v": "overflow:visible",
	"ov:h": "overflow:hidden",
	"ov:s": "overflow:scroll",
	"ov:a": "overflow:auto",
	"ovx": "overflow-x",
	"ovx:v": "overflow-x:visible",
	"ovx:h": "overflow-x:hidden",
	"ovx:s": "overflow-x:scroll",
	"ovx:a": "overflow-x:auto",
	"ovy": "overflow-y",
	"ovy:v": "overflow-y:visible",
	"ovy:h": "overflow-y:hidden",
	"ovy:s": "overflow-y:scroll",
	"ovy:a": "overflow-y:auto",
	"ovs": "overflow-style",
	"ovs:a": "overflow-style:auto",
	"ovs:s": "overflow-style:scrollbar",
	"ovs:p": "overflow-style:panner",
	"ovs:m": "overflow-style:move",
	"ovs:mq": "overflow-style:marquee",
	"zoo": "zoom:1",
	"cp": "clip",
	"cp:a": "clip:auto",
	"cp:r": "clip:rect()",
	"rz": "resize",
	"rz:n": "resize:none",
	"rz:b": "resize:both",
	"rz:h": "resize:horizontal",
	"rz:v": "resize:vertical",
	"cur": "cursor",
	"cur:a": "cursor:auto",
	"cur:d": "cursor:default",
	"cur:c": "cursor:crosshair",
	"cur:ha": "cursor:hand",
	"cur:he": "cursor:help",
	"cur:m": "cursor:move",
	"cur:p": "cursor:pointer",
	"cur:t": "cursor:text",

	// Margin & Padding

	"mar": "margin",
	"m:au": "margin:0 auto",
	"mt": "margin-top",
	"mt:a": "margin-top:auto",
	"mr": "margin-right",
	"mr:a": "margin-right:auto",
	"mb": "margin-bottom",
	"mb:a": "margin-bottom:auto",
	"ml": "margin-left",
	"ml:a": "margin-left:auto",
	"pad": "padding",
	"pt": "padding-top",
	"pr": "padding-right",
	"pb": "padding-bottom",
	"pl": "padding-left",

	// Box Sizing

	"bxz": "box-sizing",
	"bxz:cb": "box-sizing:content-box",
	"bxz:bb": "box-sizing:border-box",
	"bxsh": "box-shadow",
	"bxsh:n": "box-shadow:none",
	"bxsh+": "box-shadow:0 0 0 #000",
	"wid": "width",
	"w:a": "width:auto",
	"hei": "height",
	"h:a": "height:auto",
	"maw": "max-width",
	"maw:n": "max-width:none",
	"mah": "max-height",
	"mah:n": "max-height:none",
	"miw": "min-width",
	"mih": "min-height",

	// Font

	"fon": "font",
	"fon+": "font:1em Arial, sans-serif",
	"fw": "font-weight",
	"fw:n": "font-weight:normal",
	"fw:b": "font-weight:bold",
	"fw:br": "font-weight:bolder",
	"fw:lr": "font-weight:lighter",
	"fs": "font-style",
	"fs:n": "font-style:normal",
	"fs:i": "font-style:italic",
	"fs:o": "font-style:oblique",
	"fv": "font-variant",
	"fv:n": "font-variant:normal",
	"fv:sc": "font-variant:small-caps",
	"fz": "font-size",
	"fza": "font-size-adjust",
	"fza:n": "font-size-adjust:none",
	"ff": "font-family",
	"ff:s": "font-family:serif",
	"ff:ss": "font-family:sans-serif",
	"ff:c": "font-family:cursive",
	"ff:f": "font-family:fantasy",
	"ff:m": "font-family:monospace",
	"fef": "font-effect",
	"fef:n": "font-effect:none",
	"fef:eg": "font-effect:engrave",
	"fef:eb": "font-effect:emboss",
	"fef:o": "font-effect:outline",
	"fem": "font-emphasize",
	"femp": "font-emphasize-position",
	"femp:b": "font-emphasize-position:before",
	"femp:a": "font-emphasize-position:after",
	"fems": "font-emphasize-style",
	"fems:n": "font-emphasize-style:none",
	"fems:ac": "font-emphasize-style:accent",
	"fems:dt": "font-emphasize-style:dot",
	"fems:c": "font-emphasize-style:circle",
	"fems:ds": "font-emphasize-style:disc",
	"fsm": "font-smooth",
	"fsm:au": "font-smooth:auto",
	"fsm:n": "font-smooth:never",
	"fsm:al": "font-smooth:always",
	"fst": "font-stretch",
	"fst:n": "font-stretch:normal",
	"fst:uc": "font-stretch:ultra-condensed",
	"fst:ec": "font-stretch:extra-condensed",
	"fst:c": "font-stretch:condensed",
	"fst:sc": "font-stretch:semi-condensed",
	"fst:se": "font-stretch:semi-expanded",
	"fst:e": "font-stretch:expanded",
	"fst:ee": "font-stretch:extra-expanded",
	"fst:ue": "font-stretch:ultra-expanded",

	// Text

	"va": "vertical-align",
	"va:sup": "vertical-align:super",
	"va:t": "vertical-align:top",
	"va:tt": "vertical-align:text-top",
	"va:m": "vertical-align:middle",
	"va:bl": "vertical-align:baseline",
	"va:b": "vertical-align:bottom",
	"va:tb": "vertical-align:text-bottom",
	"va:sub": "vertical-align:sub",
	"ta": "text-align",
	"ta:le": "text-align:left",
	"ta:c": "text-align:center",
	"ta:r": "text-align:right",
	"ta:j": "text-align:justify",
	"tal": "text-align-last",
	"tal:a": "text-align-last:auto",
	"tal:l": "text-align-last:left",
	"tal:c": "text-align-last:center",
	"tal:r": "text-align-last:right",
	"td": "text-decoration",
	"td:n": "text-decoration:none",
	"td:u": "text-decoration:underline",
	"td:o": "text-decoration:overline",
	"td:l": "text-decoration:line-through",
	"te": "text-emphasis",
	"te:n": "text-emphasis:none",
	"te:ac": "text-emphasis:accent",
	"te:dt": "text-emphasis:dot",
	"te:c": "text-emphasis:circle",
	"te:ds": "text-emphasis:disc",
	"te:b": "text-emphasis:before",
	"te:a": "text-emphasis:after",
	"th": "text-height",
	"th:a": "text-height:auto",
	"th:f": "text-height:font-size",
	"th:t": "text-height:text-size",
	"th:m": "text-height:max-size",
	"ti": "text-indent",
	"ti:-": "text-indent:-9999px",
	"tj": "text-justify",
	"tj:a": "text-justify:auto",
	"tj:iw": "text-justify:inter-word",
	"tj:ii": "text-justify:inter-ideograph",
	"tj:ic": "text-justify:inter-cluster",
	"tj:d": "text-justify:distribute",
	"tj:k": "text-justify:kashida",
	"tj:t": "text-justify:tibetan",
	"to": "text-outline",
	"to+": "text-outline:0 0 #000",
	"to:n": "text-outline:none",
	"tr": "text-replace",
	"tr:n": "text-replace:none",
	"tt": "text-transform",
	"tt:n": "text-transform:none",
	"tt:c": "text-transform:capitalize",
	"tt:u": "text-transform:uppercase",
	"tt:l": "text-transform:lowercase",
	"tw": "text-wrap",
	"tw:n": "text-wrap:normal",
	"tw:no": "text-wrap:none",
	"tw:u": "text-wrap:unrestricted",
	"tw:s": "text-wrap:suppress",
	"tsh": "text-shadow",
	"tsh+": "text-shadow:0 0 0 #000",
	"tsh:n": "text-shadow:none",
	"lh": "line-height",
	"lts": "letter-spacing",
	"whs": "white-space",
	"whs:n": "white-space:normal",
	"whs:p": "white-space:pre",
	"whs:nw": "white-space:nowrap",
	"whs:pw": "white-space:pre-wrap",
	"whs:pl": "white-space:pre-line",
	"whsc": "white-space-collapse",
	"whsc:n": "white-space-collapse:normal",
	"whsc:k": "white-space-collapse:keep-all",
	"whsc:l": "white-space-collapse:loose",
	"whsc:bs": "white-space-collapse:break-strict",
	"whsc:ba": "white-space-collapse:break-all",
	"wob": "word-break",
	"wob:n": "word-break:normal",
	"wob:k": "word-break:keep-all",
	"wob:l": "word-break:loose",
	"wob:bs": "word-break:break-strict",
	"wob:ba": "word-break:break-all",
	"wos": "word-spacing",
	"wow": "word-wrap",
	"wow:nm": "word-wrap:normal",
	"wow:n": "word-wrap:none",
	"wow:u": "word-wrap:unrestricted",
	"wow:s": "word-wrap:suppress",

	// Background

	"bg": "background",
	"bg+": "background:#fff url() 0 0 no-repeat",
	"bg:n": "background:none",
	"bgc": "background-color:#fff",
	"bgc:t": "background-color:transparent",
	"bgi": "background-image:url()",
	"bgi:n": "background-image:none",
	"bgr": "background-repeat",
	"bgr:r": "background-repeat:repeat",
	"bgr:n": "background-repeat:no-repeat",
	"bgr:x": "background-repeat:repeat-x",
	"bgr:y": "background-repeat:repeat-y",
	"bga": "background-attachment",
	"bga:f": "background-attachment:fixed",
	"bga:s": "background-attachment:scroll",
	"bgp": "background-position:0 0",
	"bgpx": "background-position-x",
	"bgpy": "background-position-y",
	"bgbk": "background-break",
	"bgbk:bb": "background-break:bounding-box",
	"bgbk:eb": "background-break:each-box",
	"bgbk:c": "background-break:continuous",
	"bgcp": "background-clip",
	"bgcp:bb": "background-clip:border-box",
	"bgcp:pb": "background-clip:padding-box",
	"bgcp:cb": "background-clip:content-box",
	"bgcp:nc": "background-clip:no-clip",
	"bgo": "background-origin",
	"bgo:pb": "background-origin:padding-box",
	"bgo:bb": "background-origin:border-box",
	"bgo:cb": "background-origin:content-box",
	"bgz": "background-size",
	"bgz:a": "background-size:auto",
	"bgz:ct": "background-size:contain",
	"bgz:cv": "background-size:cover",

	// Color

	"col": "color:#000",
	"op": "opacity",
	"hsl": "hsl(359,100%,100%)",
	"hsla": "hsla(359,100%,100%,0.5)",
	"rgb": "rgb(255,255,255)",
	"rgba": "rgba(255,255,255,0.5)",

	// Generated Content

	"ct": "content",
	"ct:n": "content:normal",
	"ct:oq": "content:open-quote",
	"ct:noq": "content:no-open-quote",
	"ct:cq": "content:close-quote",
	"ct:ncq": "content:no-close-quote",
	"ct:a": "content:attr()",
	"ct:c": "content:counter()",
	"ct:cs": "content:counters()",
	"quo": "quotes",
	"q:n": "quotes:none",
	"q:ru": "quotes:'\00AB' '\00BB' '\201E' '\201C'",
	"q:en": "quotes:'\201C' '\201D' '\2018' '\2019'",
	"coi": "counter-increment",
	"cor": "counter-reset",

	// Outline

	"out": "outline",
	"o:n": "outline:none",
	"oo": "outline-offset",
	"ow": "outline-width",
	"os": "outline-style",
	"oc": "outline-color:#000",
	"oc:i": "outline-color:invert",

	// Table

	"tbl": "table-layout",
	"tbl:a": "table-layout:auto",
	"tbl:f": "table-layout:fixed",
	"cps": "caption-side",
	"cps:t": "caption-side:top",
	"cps:b": "caption-side:bottom",
	"ec": "empty-cells",
	"ec:s": "empty-cells:show",
	"ec:h": "empty-cells:hide",

	// Border

	"bd": "border",
	"bd+": "border:1px solid #000",
	"bd:n": "border:none",
	"bdbk": "border-break",
	"bdbk:c": "border-break:close",
	"bdcl": "border-collapse",
	"bdcl:c": "border-collapse:collapse",
	"bdcl:s": "border-collapse:separate",
	"bdc": "border-color:#000",
	"bdi": "border-image:url()",
	"bdi:n": "border-image:none",
	"bdti": "border-top-image:url()",
	"bdti:n": "border-top-image:none",
	"bdri": "border-right-image:url()",
	"bdri:n": "border-right-image:none",
	"bdbi": "border-bottom-image:url()",
	"bdbi:n": "border-bottom-image:none",
	"bdli": "border-left-image:url()",
	"bdli:n": "border-left-image:none",
	"bdci": "border-corner-image:url()",
	"bdci:n": "border-corner-image:none",
	"bdci:c": "border-corner-image:continue",
	"bdtli": "border-top-left-image:url()",
	"bdtli:n": "border-top-left-image:none",
	"bdtli:c": "border-top-left-image:continue",
	"bdtri": "border-top-right-image:url()",
	"bdtri:n": "border-top-right-image:none",
	"bdtri:c": "border-top-right-image:continue",
	"bdbri": "border-bottom-right-image:url()",
	"bdbri:n": "border-bottom-right-image:none",
	"bdbri:c": "border-bottom-right-image:continue",
	"bdbli": "border-bottom-left-image:url()",
	"bdbli:n": "border-bottom-left-image:none",
	"bdbli:c": "border-bottom-left-image:continue",
	"bdf": "border-fit",
	"bdf:c": "border-fit:clip",
	"bdf:r": "border-fit:repeat",
	"bdf:sc": "border-fit:scale",
	"bdf:st": "border-fit:stretch",
	"bdf:ow": "border-fit:overwrite",
	"bdf:of": "border-fit:overflow",
	"bdf:sp": "border-fit:space",
	"bdlt": "border-length",
	"bdlt:a": "border-length:auto",
	"bdsp": "border-spacing",
	"bds": "border-style",
	"bds:n": "border-style:none",
	"bds:h": "border-style:hidden",
	"bds:dt": "border-style:dotted",
	"bds:ds": "border-style:dashed",
	"bds:s": "border-style:solid",
	"bds:db": "border-style:double",
	"bds:dd": "border-style:dot-dash",
	"bds:ddd": "border-style:dot-dot-dash",
	"bds:w": "border-style:wave",
	"bds:g": "border-style:groove",
	"bds:r": "border-style:ridge",
	"bds:i": "border-style:inset",
	"bds:o": "border-style:outset",
	"bdw": "border-width",
	"bdt": "border-top",
	"bdt+": "border-top:1px solid #000",
	"bdt:n": "border-top:none",
	"bdtw": "border-top-width",
	"bdts": "border-top-style",
	"bdts:n": "border-top-style:none",
	"bdtc": "border-top-color:#000",
	"bdr": "border-right",
	"bdr+": "border-right:1px solid #000",
	"bdr:n": "border-right:none",
	"bdrw": "border-right-width",
	"bdrs": "border-right-style",
	"bdrs:n": "border-right-style:none",
	"bdrc": "border-right-color:#000",
	"bdb": "border-bottom",
	"bdb+": "border-bottom:1px solid #000",
	"bdb:n": "border-bottom:none",
	"bdbw": "border-bottom-width",
	"bdbs": "border-bottom-style",
	"bdbs:n": "border-bottom-style:none",
	"bdbc": "border-bottom-color:#000",
	"bdl": "border-left",
	"bdl+": "border-left:1px solid #000",
	"bdl:n": "border-left:none",
	"bdlw": "border-left-width",
	"bdls": "border-left-style",
	"bdls:n": "border-left-style:none",
	"bdlc": "border-left-color:#000",
	"bdrsa": "border-radius",
	"bdtrrs": "border-top-right-radius",
	"bdtlrs": "border-top-left-radius",
	"bdbrrs": "border-bottom-right-radius",
	"bdblrs": "border-bottom-left-radius",

	// Lists

	"lis": "list-style",
	"lis:n": "list-style:none",
	"lisp": "list-style-position",
	"lisp:i": "list-style-position:inside",
	"lisp:o": "list-style-position:outside",
	"list": "list-style-type",
	"list:n": "list-style-type:none",
	"list:d": "list-style-type:disc",
	"list:c": "list-style-type:circle",
	"list:s": "list-style-type:square",
	"list:dc": "list-style-type:decimal",
	"list:dclz": "list-style-type:decimal-leading-zero",
	"list:lr": "list-style-type:lower-roman",
	"list:ur": "list-style-type:upper-roman",
	"lisi": "list-style-image",
	"lisi:n": "list-style-image:none",

	// Print

	"pgbb": "page-break-before",
	"pgbb:au": "page-break-before:auto",
	"pgbb:al": "page-break-before:always",
	"pgbb:l": "page-break-before:left",
	"pgbb:r": "page-break-before:right",
	"pgbi": "page-break-inside",
	"pgbi:au": "page-break-inside:auto",
	"pgbi:av": "page-break-inside:avoid",
	"pgba": "page-break-after",
	"pgba:au": "page-break-after:auto",
	"pgba:al": "page-break-after:always",
	"pgba:l": "page-break-after:left",
	"pgba:r": "page-break-after:right",
	"orp": "orphans",
	"widows": "widows",

	// Others

	"ipt": "!important",
	"ffa": "@font-family {<br>&nbsp;&nbsp;font-family:;<br>&nbsp;&nbsp;src:url();<br>}",
	"ffa+": "@font-family {<br>&nbsp;&nbsp;font-family: 'FontName';<br>&nbsp;&nbsp;src: url('FileName.eot');<br>&nbsp;&nbsp;src: url('FileName.eot?#iefix') format('embedded-opentype'),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url('FileName.woff') format('woff'),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url('FileName.ttf') format('truetype'),<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url('FileName.svg#FontName') format('svg');<br>&nbsp;&nbsp;font-style: normal;<br>&nbsp;&nbsp;font-weight: normal;<br>}",
	"imp": "@import url()",
	"mp": "@media print {}",
	"bg:ie": "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='x.png',sizingMethod='crop')",
	"op:ie": "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
	"op:ms": "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)'",
	"trf": "transform",
	"trf:r": "transform:rotate(90deg)",
	"trf:sc": "transform:scale(x,y)",
	"trf:scx": "transform:scaleX(x)",
	"trf:scy": "transform:scaleY(y)",
	"trf:skx": "transform:skewX(90deg)",
	"trf:sky": "transform:skewY(90deg)",
	"trf:t": "transform:translate(x,y)",
	"trf:tx": "transform:translateX(x)",
	"trf:ty": "transform:translateY(y)",
	"trs": "transition",
	"trsde": "transition-delay",
	"trsdu": "transition-duration",
	"trsp": "transition-property",
	"trstf": "transition-timing-function",
	"ani": "animation",
	"ann": "animation-name",
	"adu": "animation-duration",
	"atf": "animation-timing-function",
	"ade": "animation-delay",
	"aic": "animation-iteration-count",
	"adi": "animation-direction",
	"aps": "animation-play-state",
	"key": "@keyframes {}",
	"ms": "@media screen and () {}",
	"in": "inherit",
	"tra": "transparent",
	"beh": "behavior:url()",
	"cha": "@charset''",

	// Pseudo Class

	"ac": " :active{}",
	"ac:a": "&:active{}",
	"af": " :after{}",
	"af:a": "&:after{}",
	"be": " :before{}",
	"be:a": "&:before{}",
	"ch": " :checked{}",
	"ch:a": "&:checked{}",
	"dsa": " :disabled{}<i>[da]</i>",
	"dsa:a": "&:disabled{}<i>[da:a]</i>",
	"en": " :enabled{}",
	"en:a": "&:enabled{}",
	"fc": " :first-child{}",
	"fc:a": "&:first-child{}",
	"fle": " :first-letter{}",
	"fle:a": "&:first-letter{}",
	"fli": " :first-line{}",
	"fli:a": "&:first-line{}",
	"foc": " :focus{}",
	"foc:a": "&:focus{}",
	"ho": " :hover{}",
	"ho:a": "&:hover{}",
	"ln": " :lang(){}",
	"ln:a": "&:lang(){}",
	"lc": " :last-child{}",
	"lc:a": "&:last-child{}",
	"li": " :link{}",
	"li:a": "&:link{}",
	"nc": " :nth-child(){}",
	"nc:a": "&:nth-child(){}",
	"vit": " :visited{}",
	"vit:a": "&:visited{}",
	"tgt": " :target{}",
	"tgt:a": "&:target{}",
	"fot": " :first-of-type{}",
	"fot:a": "&:first-of-type{}",
	"lot": " :last-of-type{}",
	"lot:a": "&:last-of-type{}",
	"not": " :nth-of-type(){}",
	"not:a": "&:nth-of-type(){}",

	// Scss & Sass

	"ext": "@extend",
	"inc": "@include",
	"mix": "@mixin",
	"ieh": "ie-hex-str()"

	};

}
o.helpers.units = function(v) {
	if(!v.match(/[%|in|cm|mm|em|ex|pt|pc|px]/)) return v + '%';
	else return v;
}
var extend = require("./helpers/extend"),
	fs = require('fs'),
	path = require('path')

var walk = function(dir) {
	// client side port marker
    var results = [];
    var list = fs.readdirSync(dir);
    for(var i=0; i<list.length; i++) {
    	var file = dir + '/' + list[i];
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            results.push(file);
        }
    }
    return results;
};

o.index = {
	absurd: null,
	init: function(decoration) {
		if(typeof decoration != 'undefined') {
			this.absurd = decoration;
		}
		// getting atoms and molecules
		var files = walk(__dirname + "/lib/"), self = this;
	    for(var i=0; i<files.length; i++) {
	        var file = path.basename(files[i]);
	        (function(m) {
	        	var module = require(m);
		        self.absurd.plugin(file.replace(".js", ""), function(absurd, value) {
		        	return module(value);
		        });
	        })(files[i]);
	    }
	    // converting snippets to plugins
	    var snippets = require(__dirname + "/helpers/snippets")();
	    for(var atom in snippets) {
	    	atom = atom.split(":");
	    	(function(pluginName) {
	    		self.absurd.plugin(pluginName, function(absurd, value, prefixes) {
	    			if(prefixes === false) { prefixes = ''; }
	    			var s, r = {};
	    			if(s = snippets[pluginName + ':' + value]) {
	    				s = s.split(':');
	    				r[prefixes + s[0]] = s[1] || '';
	    			} else if(s = snippets[pluginName]){
	    				r[prefixes + s] = value;
	    			}
	    			return r;
		        });
	    	})(atom.shift());
	    }
	    return this;
	}
}
o.lib.atoms.atoms = function(value) {

	var toObj = function(value, r) {
		value = value.replace(/( )?:( )?/, ':').split(':');
		r = r || {};
		r[value[0]] = value[1] || '';
		return r;
	}
	var processArr = function(value) {
		var r = {};
		for(var i=0; i<value.length; i++) {
			toObj(value[i], r);
		}
		return r;
	}

	if(typeof value == 'string') {
		return processArr(value.replace(/( )?\/( )?/g, '/').split('/'));
	} else if(typeof value == 'object') {
		if(!(value instanceof Array)) {
			return value;
		} else {
			return processArr(value);
		}
	}
	
}
o.lib.molecules.cf = function(value) {
	var r = {}, clearing = {
		content: '" "',
		display: 'table',
		clear: 'both'
	};
	switch(value) {
		case 'before':
			r['&:before'] = clearing;
		break;
		case 'after':
			r['&:after'] = clearing;
		break;
		default: 
			r['&:before'] = clearing;
			r['&:after'] = clearing;
		break;
	}
	return r;
}
o.lib.molecules.metrics = function(value) {
	var r = {},
		args = require('../../helpers/args')(value);
	if(args.length == 2) {
		if(args[0] != '') {
			r.margin = args[0];
		}
		if(args[1] != '') {
			r.padding = args[1];
		}
		return r;
	} else {
		return {
			margin: args[0],
			padding: args[1] || args[0]
		}
	}
}
o.lib.molecules.moveto = function(value) {
	var units = require('../../helpers/units'), 
		args = require('../../helpers/args')(value)
		atoms = require('../atoms/atoms.js'),
		x = !args[0] || args[0] == '' ? 0 : args[0],
		y = !args[1] || args[1] == '' ? 0 : args[1],
		z = !args[2] || args[2] == '' ? 0 : args[2];
	if(args.length == 2) {
		return atoms("-ws-trf: translate(" + x + "," + y + ")");
	} else if(args.length == 3) {
		return atoms("-ws-trf: translate3d(" + x + "," + y + "," + z + ")");
	}	
}
o.lib.molecules.size = function(value) {
	var units = require('../../helpers/units'), 
		args = require('../../helpers/args')(value),
		r = {};
	if(args.length == 2) {
		if(args[0] != '') {
			r.width = units(args[0]);
		}
		if(args[1] != '') {
			r.height = units(args[1]);
		}
		return r;
	} else {
		return {
			width: units(args[0]),
			height: units(args[0])
		}
	}
}