'use strict';

var cssStyles = [
    "\n  #captcha-wrapper {\n\t\theight: 75px;\n\t\twidth: 350px;\n\t\tborder: 3px solid #000000;\n\t\tbox-shadow: 4px 4px 2px rgba(220, 220, 220, 0.7);\n\t\tborder-radius: 10px;\n\t\tpadding: 10px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: flex-start;\n  }\n",
    "\n\t.captcha-image {\n\t\tposition: relative;\n\t\theight: 100%;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n",
    "\n\t.captcha-image > img {\n    height: 53px;\n    width: 135px;\n\t}\n",
    "\n\t.captcha-content {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t}\n",
    "\n\t.captcha-body {\n\t\theight: 50%;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: flex-end;\n\t}\n",
    "\n\t.captcha-logo {\n\t\theight: 100%;\n\t\tmax-width: 80%;\n\t}\n",
    "\n\t.captcha-header {\n\t\theight: 50%;\n\t\tdisplay: flex;\n\t\tjustify-content: flex-start;\n\t\talign-items: center;\n\t\tmargin-bottom: 3px;\n\t}\n",
    "\n\t.captcha-reload {\n\t\tposition: absolute;\n\t\ttop: 3px;\n\t\tleft: 3px;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n",
    "\n\t.fa.fa-redo {\n\t\tcolor: blue;\n\t}\n",
    "\n\t.captcha-input {\n\t\tborder-radius: 10px;\n\t\tpadding-left: 10px;\n\t\tmargin-right: 10px;\n\t\tborder: 1px solid grey;\n\t\theight: 75%;\n\t\twidth: 80%;\n\t\tfloat: left;\n\t}\n",
    "\n\t.captcha-status {\n\t\tfloat: right;\n\t\theight: 75%;\n\t\twidth: 15%;\n\t}\n",
    "\n\t.fa.fa-circle-o-notch {\n\t\tcolor: blue;\n\t\tfont-size: 1.5em;\n\t}\n",
    "\n\t.fa.fa-check {\n\t\tcolor: green;\n\t\tfont-size: 1.5em;\n\t}\n",
    "\n\t.fa.fa-times {\n\t\tcolor: red;\n\t\tfont-size: 1.5em;\n  }\n",
    "  \n  .hidden {\n    display: none;\n  }\n",
    "\n  .blur {   \n\t\tfilter: blur(3px);\n  }  \n",
];

var linkDependencies = [
    {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.3.1/css/all.css",
        integrity: "sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",
        crossorigin: "anonymous"
    },
    {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css",
        integrity: "sha384-X7L1bhgb36bF1iFvaqvhgpaGpayKM+vXNNYRlF89BFA5s3vi1qZ8EX9086RlZjy1",
        crossorigin: "anonymous"
    },
];
var inputType = "text";
var placeHolder = "Type the answer.";

var designatedId = "captcha-wrapper";
function addChild(parent, elementType, classList) {
    var created = document.createElement(elementType);
    parent.appendChild(created);
    if (classList) {
        addClass(created, classList);
    }
    return created;
}
function addClass(element, classList) {
    classList.forEach(function (currentClass) {
        element.classList.add(currentClass);
    });
}
function useDependencies() {
    linkDependencies.forEach(function (dependency) {
        var link = document.createElement("link");
        link.rel = dependency.rel;
        link.href = dependency.href;
        link.integrity = dependency.integrity;
        link.crossOrigin = dependency.crossorigin;
        document.head.appendChild(link);
    });
}
function useDefaultStyleSheet() {
    var style = document.createElement("style");
    document.head.appendChild(style);
    cssStyles.forEach(function (cssStyle) {
        style.sheet.insertRule(cssStyle);
    });
}
function useDefaultStructure(wrapper) {
    var imageWrapper = addChild(wrapper, "div", ["captcha-image"]);
    var image = addChild(imageWrapper, "img");
    image.src =
        "https://cdn.discordapp.com/attachments/790469331402096660/790469909834235924/unknown.png";
    var reload = (addChild(imageWrapper, "div", ["captcha-reload"]));
    addChild(reload, "i", ["fa", "fa-redo", "hidden"]);
    var contentWrapper = addChild(wrapper, "div", ["captcha-content"]);
    var contentHeader = addChild(contentWrapper, "div", ["captcha-header"]);
    var contentBody = addChild(contentWrapper, "div", ["captcha-body"]);
    var contentLogo = (addChild(contentHeader, "img", ["captcha-logo"]));
    contentLogo.src = "./static/logo.png";
    var input = (addChild(contentBody, "input", ["captcha-input"]));
    input.placeholder = placeHolder;
    input.type = inputType;
    var statusWrapper = addChild(contentBody, "div", ["captcha-status"]);
    var status = addChild(statusWrapper, "i", [
        "fa",
        "fa-circle-o-notch",
        "fa-spin",
    ]);
    return {
        image: image,
        reload: reload,
        input: input,
        status: status
    };
}
function render() {
    var wrapper = document.getElementById(designatedId);
    if (!wrapper) {
        throw new Error("Please create a <div> tag with the id of 'captcha-wrapper'");
    }
    useDependencies();
    useDefaultStyleSheet();
    useDefaultStructure(wrapper);
}

render();
