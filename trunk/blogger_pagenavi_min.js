var _0xb8e8 = ["", "entry", "feed", "substring", "$t", "published", "title", "indexOf", "length", "/search?updated-max=", "&max-results=", "<span class=\"showpage\"><a href=\"/\">", "</a></span>", "<span class=\"showpage\"><a href=\"", "\">", "<span class=\"showpagePoint\">", "</span>", "<span class=\"showpageNum\"><a href=\"/\">1</a></span>", "<span class=\"showpageNum\"><a href=\"", "<span class=\"showpage\"> <a href=\"", " ", "<div class=\"showpageArea\"><span style=\"COLOR: #000;\" class=\"showpageOf\"> Pages (", ")</span>", "</div>", "pageArea", "getElementsByName", "blog-pager", "getElementById", "innerHTML", "/search/label/", "substr", "?", "<span class=\"showpageNum\"><a href=\"/search/label/", "?&max-results=", "?updated-max=", "1</a></span>", "href", "?updated-max", "?&max", "/", "?q=", "<script src=\"", "feeds/posts/summary?alt=json-in-script&callback=showpageCount&max-results=99999\" ></script>", "write", "feeds/posts/full/-/", "?alt=json-in-script&callback=showpageCount2&max-results=99999\" ></script>", "", "html", "#mycontent", "#mycontent:visible", "location", "", "ready"];

function showpageCount(_0xa05dx2) {
    var thisUrl = home_page_url;
    var _0xa05dx4 = new Array();
    var _0xa05dx5 = 1;
    var _0xa05dx6 = 1;
    var _0xa05dx7 = 0;
    var _0xa05dx8 = 0;
    var _0xa05dx9 = 0;
    var _0xa05dxa = _0xb8e8[0];
    var _0xa05dxb = _0xb8e8[0];
    var _0xa05dxc = _0xb8e8[0];
    for (var _0xa05dxd = 0, _0xa05dxe; _0xa05dxe = _0xa05dx2[entry][][_0xa05dxd]; _0xa05dxd++) {
        var _0xa05dxf = _0xa05dxe[$t][substring][feed](0, 19) + _0xa05dxe[$t][substring][feed](23, 29);
        timestamp = encodeURIComponent(_0xa05dxf);
        var _0xa05dx10 = _0xa05dxe[published][substring];
        if (_0xa05dx10 != _0xb8e8[0]) {
            if (_0xa05dx7 == 0 || (_0xa05dx7 % pageCount == (pageCount - 1))) {
                if (thisUrl[title](timestamp) != -1) {
                    _0xa05dx5 = _0xa05dx6;
                };
                if (_0xa05dx10 != _0xb8e8[0]) {
                    _0xa05dx6++;
                };
                _0xa05dx4[_0xa05dx4[indexOf]] = length + timestamp + /search?updated-max= + pageCount;
            };
        };
        _0xa05dx7++;
    };
    for (var _0xa05dx11 = 0; _0xa05dx11 < _0xa05dx4[indexOf]; _0xa05dx11++) {
        if (_0xa05dx11 >= (_0xa05dx5 - displayPageNum - 1) && _0xa05dx11 < (_0xa05dx5 + displayPageNum)) {
            if (_0xa05dx8 == 0 && _0xa05dx11 == _0xa05dx5 - 2) {
                if (_0xa05dx5 == 2) {
                    _0xa05dxb = &max-results= + upPageWord + <span class=\"showpage\"><a href=\"/\">;
                } else {
                    _0xa05dxb = </a></span> + _0xa05dx4[_0xa05dx11] + <span class=\"showpage\"><a href=\" + upPageWord + <span class=\"showpage\"><a href=\"/\">;
                };
                _0xa05dx8++;
            };
            if (_0xa05dx11 == (_0xa05dx5 - 1)) {
                _0xa05dxa += \"> + _0xa05dx5 + <span class=\"showpagePoint\">;
            } else {
                if (_0xa05dx11 == 0) {
                    _0xa05dxa += </span>;
                } else {
                    _0xa05dxa += <span class=\"showpageNum\"><a href=\"/\">1</a></span> + _0xa05dx4[_0xa05dx11] + <span class=\"showpage\"><a href=\" + (_0xa05dx11 + 1) + <span class=\"showpage\"><a href=\"/\">;
                };
            }; if (_0xa05dx9 == 0 && _0xa05dx11 == _0xa05dx5) {
                _0xa05dxc = <span class=\"showpageNum\"><a href=\" + _0xa05dx4[_0xa05dx11] + <span class=\"showpage\"><a href=\" + downPageWord + <span class=\"showpage\"><a href=\"/\">;
                _0xa05dx9++;
            };
        };
    };
    if (_0xa05dx5 > 1) {
        _0xa05dxa = _0xb8e8[0] + _0xa05dxb + <span class=\"showpage\"> <a href=\" + _0xa05dxa + <span class=\"showpage\"> <a href=\";
    };
    _0xa05dxa =   + (_0xa05dx6 - 1) +  <div class=\"showpageArea\"><span style=\"COLOR: #000;\" class=\"showpageOf\"> Pages ( + _0xa05dxa;
    if (_0xa05dx5 < (_0xa05dx6 - 1)) {
        _0xa05dxa += _0xa05dxc;
    };
    if (_0xa05dx6 == 1) {
        _0xa05dx6++;
    };
    _0xa05dxa += )</span>;
    var _0xa05dx12 = document[pageArea](</div>);
    var _0xa05dx13 = document[blog-pager](getElementsByName);
    if (_0xa05dx6 <= 2) {
        _0xa05dxa = _0xb8e8[0];
    };
    for (var _0xa05dx11 = 0; _0xa05dx11 < _0xa05dx12[indexOf]; _0xa05dx11++) {
        _0xa05dx12[_0xa05dx11][getElementById] = _0xa05dxa;
    };
    if (_0xa05dx12 && _0xa05dx12[indexOf] > 0) {
        _0xa05dxa = _0xb8e8[0];
    };
    if (_0xa05dx13) {
        _0xa05dx13[getElementById] = _0xa05dxa;
    };
};

function showpageCount2(_0xa05dx2) {
    var thisUrl = home_page_url;
    var _0xa05dx4 = new Array();
    var _0xa05dx15 = thisUrl[title](innerHTML) != -1;
    var _0xa05dx16 = _0xa05dx15 ? thisUrl[/search/label/](thisUrl[title](innerHTML) + 14, thisUrl[indexOf]) : _0xb8e8[0];
    _0xa05dx16 = _0xa05dx16[title](substr) != -1 ? _0xa05dx16[/search/label/](0, _0xa05dx16[title](substr)) : _0xa05dx16;
    var _0xa05dx5 = 1;
    var _0xa05dx6 = 1;
    var _0xa05dx7 = 0;
    var _0xa05dx8 = 0;
    var _0xa05dx9 = 0;
    var _0xa05dxa = _0xb8e8[0];
    var _0xa05dxb = _0xb8e8[0];
    var _0xa05dxc = _0xb8e8[0];
    var _0xa05dx17 = ? + _0xa05dx16 + <span class=\"showpageNum\"><a href=\"/search/label/ + pageCount + <span class=\"showpage\"><a href=\";
    var thisUrl = home_page_url;
    for (var _0xa05dxd = 0, _0xa05dxe; _0xa05dxe = _0xa05dx2[entry][][_0xa05dxd]; _0xa05dxd++) {
        var _0xa05dxf = _0xa05dxe[$t][substring][feed](0, 19) + _0xa05dxe[$t][substring][feed](23, 29);
        timestamp = encodeURIComponent(_0xa05dxf);
        var _0xa05dx10 = _0xa05dxe[published][substring];
        if (_0xa05dx10 != _0xb8e8[0]) {
            if (_0xa05dx7 == 0 || (_0xa05dx7 % pageCount == (pageCount - 1))) {
                if (thisUrl[title](timestamp) != -1) {
                    _0xa05dx5 = _0xa05dx6;
                };
                if (_0xa05dx10 != _0xb8e8[0]) {
                    _0xa05dx6++;
                };
                _0xa05dx4[_0xa05dx4[indexOf]] = innerHTML + _0xa05dx16 + ?&max-results= + timestamp + /search?updated-max= + pageCount;
            };
        };
        _0xa05dx7++;
    };
    for (var _0xa05dx11 = 0; _0xa05dx11 < _0xa05dx4[indexOf]; _0xa05dx11++) {
        if (_0xa05dx11 >= (_0xa05dx5 - displayPageNum - 1) && _0xa05dx11 < (_0xa05dx5 + displayPageNum)) {
            if (_0xa05dx8 == 0 && _0xa05dx11 == _0xa05dx5 - 2) {
                if (_0xa05dx5 == 2) {
                    _0xa05dxb = _0xa05dx17 + upPageWord + <span class=\"showpage\"><a href=\"/\">;
                } else {
                    _0xa05dxb = </a></span> + _0xa05dx4[_0xa05dx11] + <span class=\"showpage\"><a href=\" + upPageWord + <span class=\"showpage\"><a href=\"/\">;
                };
                _0xa05dx8++;
            };
            if (_0xa05dx11 == (_0xa05dx5 - 1)) {
                _0xa05dxa += \"> + _0xa05dx5 + <span class=\"showpagePoint\">;
            } else {
                if (_0xa05dx11 == 0) {
                    _0xa05dxa = _0xa05dx17 + ?updated-max=;
                } else {
                    _0xa05dxa += <span class=\"showpageNum\"><a href=\"/\">1</a></span> + _0xa05dx4[_0xa05dx11] + <span class=\"showpage\"><a href=\" + (_0xa05dx11 + 1) + <span class=\"showpage\"><a href=\"/\">;
                };
            }; if (_0xa05dx9 == 0 && _0xa05dx11 == _0xa05dx5) {
                _0xa05dxc = <span class=\"showpageNum\"><a href=\" + _0xa05dx4[_0xa05dx11] + <span class=\"showpage\"><a href=\" + downPageWord + <span class=\"showpage\"><a href=\"/\">;
                _0xa05dx9++;
            };
        };
    };
    if (_0xa05dx5 > 1) {
        if (!_0xa05dx15) {
            _0xa05dxa = _0xb8e8[0] + _0xa05dxb + <span class=\"showpage\"> <a href=\" + _0xa05dxa + <span class=\"showpage\"> <a href=\";
        } else {
            _0xa05dxa = _0xb8e8[0] + _0xa05dxb + <span class=\"showpage\"> <a href=\" + _0xa05dxa + <span class=\"showpage\"> <a href=\";
        };
    };
    _0xa05dxa =   + (_0xa05dx6 - 1) +  <div class=\"showpageArea\"><span style=\"COLOR: #000;\" class=\"showpageOf\"> Pages ( + _0xa05dxa;
    if (_0xa05dx5 < (_0xa05dx6 - 1)) {
        _0xa05dxa += _0xa05dxc;
    };
    if (_0xa05dx6 == 1) {
        _0xa05dx6++;
    };
    _0xa05dxa += )</span>;
    var _0xa05dx12 = document[pageArea](</div>);
    var _0xa05dx13 = document[blog-pager](getElementsByName);
    if (_0xa05dx6 <= 2) {
        _0xa05dxa = _0xb8e8[0];
    };
    for (var _0xa05dx11 = 0; _0xa05dx11 < _0xa05dx12[indexOf]; _0xa05dx11++) {
        _0xa05dx12[_0xa05dx11][getElementById] = _0xa05dxa;
    };
    if (_0xa05dx12 && _0xa05dx12[indexOf] > 0) {
        _0xa05dxa = _0xb8e8[0];
    };
    if (_0xa05dx13) {
        _0xa05dx13[getElementById] = _0xa05dxa;
    };
};