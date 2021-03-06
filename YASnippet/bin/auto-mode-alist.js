// 
//  	YASnippet Hidemarized
//  	メジャーモード定義 (2010/12/10)
//  	by mobitan  http://mobitan.org/
// 

// 拡張子とモードの対応関係を追加／変更するときは ..\mode.ini を編集してください。
// このファイルはバージョンアップ時に上書きされるのでユーザーは編集しないこと。

var auto_mode_alist = {
	// Taken from emacs-23.2/lisp/files.el
	"\\.s?html?(\\.[a-zA-Z_]+)?$": "html-mode",
	"\\.te?xt$": "text-mode",
	"\\.[tT]e[xX]$": "tex-mode",
	"\\.ins$": "tex-mode",
	"\\.ltx$": "latex-mode",
	"\\.dtx$": "doctex-mode",
	"\\.org$": "org-mode",
	"\\.el$": "emacs-lisp-mode",
	"Project\\.ede$": "emacs-lisp-mode",
	"\\.(scm|stk|ss|sch)$": "scheme-mode",
	"\\.l$": "lisp-mode",
	"\\.li?sp$": "lisp-mode",
	"\\.[fF]$": "fortran-mode",
	"\\.for$": "fortran-mode",
	"\\.p$": "pascal-mode",
	"\\.pas$": "pascal-mode",
	"\\.(dpr|DPR)$": "delphi-mode",
	"\\.ad[abs]$": "ada-mode",
	"\\.ad[bs].dg$": "ada-mode",
	"\\.([pP]([Llm]|erl|od)|al)$": "perl-mode",
	"Imakefile$": "makefile-imake-mode",
	"Makeppfile(?:\\.mk)?$": "makefile-makepp-mode",
	"\\.makepp$": "makefile-makepp-mode",
	"\\.mk$": "makefile-gmake-mode",
	"[Mm]akefile$": "makefile-gmake-mode",
	"\\.am$": "makefile-automake-mode",
	"\\.texinfo$": "texinfo-mode",
	"\\.te?xi$": "texinfo-mode",
	"\\.[sS]$": "asm-mode",
	"\\.asm$": "asm-mode",
	"[cC]hange\\.?[lL]og?$": "change-log-mode",
	"[cC]hange[lL]og[-.][0-9]+$": "change-log-mode",
	"\\$CHANGE_LOG\\$\\.TXT": "change-log-mode",
	"\\.scm\\.[0-9]*$": "scheme-mode",
	"\\.[ck]?sh$|\\.shar$|/\\.z?profile$": "sh-mode",
	"\\.bash$": "sh-mode",
	"(/|^)\\.(bash_profile|z?login|bash_login|z?logout)$": "sh-mode",
	"(/|^)\\.(bash_logout|shrc|[kz]shrc|bashrc|t?cshrc|esrc)$": "sh-mode",
	"(/|^)\\.([kz]shenv|xinitrc|startxrc|xsession)$": "sh-mode",
	"\\.m?spec$": "sh-mode",
	"\\.m[mes]$": "nroff-mode",
	"\\.man$": "nroff-mode",
	"\\.sty$": "latex-mode",
	"\\.cl[so]$": "latex-mode",
	"\\.bbl$": "latex-mode",
	"\\.bib$": "bibtex-mode",
	"\\.sql$": "sql-mode",
	"\\.m[4c]$": "m4-mode",
	"\\.mf$": "metafont-mode",
	"\\.mp$": "metapost-mode",
	"\\.vhdl?$": "vhdl-mode",
	"\\.article$": "text-mode",
	"\\.letter$": "text-mode",
	"\\.i?tcl$": "tcl-mode",
	"\\.exp$": "tcl-mode",
	"\\.itk$": "tcl-mode",
	"\\.icn$": "icon-mode",
	"\\.sim$": "simula-mode",
	"\\.mss$": "scribe-mode",
	"\\.f9[05]$": "f90-mode",
	"\\.indent\\.pro$": "fundamental-mode",
	"\\.(pro|PRO)$": "idlwave-mode",
	"\\.srt$": "srecode-template-mode",
	"\\.prolog$": "prolog-mode",
	"\\.tar$": "tar-mode",
	"/Message[0-9]*$": "text-mode",
	"\\.zone$": "zone-mode",
	"\\.oak$": "scheme-mode",
	"\\.sgml?$": "sgml-mode",
	"\\.x[ms]l$": "xml-mode",
	"\\.dtd$": "sgml-mode",
	"\\.ds(ss)?l$": "dsssl-mode",
	"\\.js$": "js-mode",
	"\\.[ds]?vh?$": "verilog-mode",
	"/crontab\\.X*[0-9]+$": "shell-script-mode",
	"\\.ml$": "lisp-mode",
	"\\.asd$": "lisp-mode",
	"\\.(asn|mib|smi)$": "snmp-mode",
	"\\.(as|mi|sm)2$": "snmpv2-mode",
	"\\.(diffs?|patch|rej)$": "diff-mode",
	"\\.(dif|pat)$": "diff-mode",
	"\\.[eE]?[pP][sS]$": "ps-mode",
	"\\.(?:PDF|DVI|pdf|dvi)$": "doc-view-mode",
	"configure\\.(ac|in)$": "autoconf-mode",
	"\\.s(v|iv|ieve)$": "sieve-mode",
	"BROWSE$": "ebrowse-tree-mode",
	"\\.ebrowse$": "ebrowse-tree-mode",
	"#\\*mail\\*": "mail-mode",
	"\\.g$": "antlr-mode",
	"\\.ses$": "ses-mode",
	"\\.(soa|zone)$": "dns-mode",
	"\\.docbook$": "sgml-mode",
	"\\.com$": "dcl-mode",
	"/config\\.(?:bat|log)$": "fundamental-mode",
	"\\.(?:[iI][nN][iI]|[lL][sS][tT]|[rR][eE][gG]|[sS][yY][sS])$": "conf-mode",
	"\\.(?:desktop|la)$": "conf-unix-mode",
	"\\.ppd$": "conf-ppd-mode",
	"java.+\\.conf$": "conf-javaprop-mode",
	"\\.properties(?:\\.[a-zA-Z0-9._-]+)?$": "conf-javaprop-mode",
	"[/.]c(?:on)?f(?:i?g)?(?:\\.[a-zA-Z0-9._-]+)?$": "conf-mode-maybe",
	"[cC]hange[lL]og[-.][-0-9a-z]+$": "change-log-mode",
	"/\\.?(?:gnokiirc|kde.*rc|mime\\.types|wgetrc)$": "conf-mode",
	"/\\.(?:enigma|gltron|gtk|hxplayer|net|neverball|qt/.+|realplayer|scummvm|sversion|sylpheed/.+|xmp)rc$": "conf-mode",
	"/\\.(?:gdbtkinit|grip|orbital/.+txt|rhosts|tuxracer/options)$": "conf-mode",
	"/\\.?X(?:default|resource|re)s\\b": "conf-xdefaults-mode",
	"/X11.+app-defaults/": "conf-xdefaults-mode",
	"/X11.+locale/.+/Compose$": "conf-colon-mode",
	"/X11.+locale/compose\\.dir$": "conf-javaprop-mode",
	"\\.~?[0-9]+\\.[0-9][-.0-9]*~?$": "null",
	"\\.[1-9]$": "nroff-mode",
	"\\.(?:orig|in|[bB][aA][kK])$": "null",
	// Grepped from emacs-23.2/lisp/**/*.el
	"\\.bst$": "bibtex-style-mode",
	"\\.(cc|hh)$": "c++-mode",
	"\\.[ch](pp|xx|\\+\\+)$": "c++-mode",
	"\\.(CC?|HH?)$": "c++-mode",
	"\\.[ch]$": "c-mode",
	"\\.y(acc)?$": "c-mode",
	"\\.lex$": "c-mode",
	"\\.i$": "c-mode",
	"\\.ii$": "c++-mode",
	"\\.m$": "objc-mode",
	"\\.java$": "java-mode",
	"\\.idl$": "idl-mode",
	"\\.(u?lpc|pike|pmod(.in)?)$": "pike-mode",
	"\\.awk$": "awk-mode",
	"\\.gcov$": "compilation-mode",
	"\\.css$": "css-mode",
	"\\.soa$": "dns-mode",
	"/\\.[a-z0-9-]*gdbinit": "gdb-script-mode",
	"\\.ld[si]?\\b": "ld-script-mode",
	"ld\\.?script\\b": "ld-script-mode",
	"\\.x[bdsru]?[cn]?$": "ld-script-mode",
	"\\.mixal$": "mixal-mode",
	"\\.m$": "octave-mode",
	"\\.py$": "python-mode",
	"\\.re?st$": "rst-mode",
	"\\.rb$": "ruby-mode",
	"\\.vr[hi]?$": "vera-mode",
	"\\.xxx$": "vhdl-mode",
	"\\.py$": "python-mode"
};
