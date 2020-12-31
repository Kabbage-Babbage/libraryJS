'use strict';

const cssStyles = [
    `
  #captcha-wrapper {
		height: 75px;
		width: 350px;
		border: 3px solid #000000;
		box-shadow: 4px 4px 2px rgba(220, 220, 220, 0.7);
		border-radius: 10px;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
  }
`,
    `
	.captcha-image {
		position: relative;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`,
    `
	.captcha-image > img {
    height: 53px;
    width: 135px;
	}
`,
    `
	.captcha-content {
		height: 100%;
		width: 100%;
	}
`,
    `
	.captcha-body {
		height: 50%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
`,
    `
	.captcha-logo {
		height: 100%;
		max-width: 80%;
	}
`,
    `
	.captcha-header {
		height: 50%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 3px;
	}
`,
    `
	.captcha-reload {
		position: absolute;
		top: 3px;
		left: 3px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`,
    `
	.fa.fa-redo {
		color: blue;
	}
`,
    `
	.captcha-input {
		border-radius: 10px;
		padding-left: 10px;
		margin-right: 10px;
		border: 1px solid grey;
		height: 75%;
		width: 80%;
		float: left;
	}
`,
    `
	.captcha-status {
		float: right;
		height: 75%;
		width: 15%;
	}
`,
    `
	.fa.fa-circle-o-notch {
		color: blue;
		font-size: 1.5em;
	}
`,
    `
	.fa.fa-check {
		color: green;
		font-size: 1.5em;
	}
`,
    `
	.fa.fa-times {
		color: red;
		font-size: 1.5em;
  }
`,
    `  
  .hidden {
    display: none;
  }
`,
    `
  .blur {   
		filter: blur(3px);
  }  
`,
];

const linkDependencies = [
    {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.3.1/css/all.css",
        integrity: "sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",
        crossorigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css",
        integrity: "sha384-X7L1bhgb36bF1iFvaqvhgpaGpayKM+vXNNYRlF89BFA5s3vi1qZ8EX9086RlZjy1",
        crossorigin: "anonymous",
    },
];
const inputType = "text";
const placeHolder = "Type the answer.";

const designatedId = "captcha-wrapper";
function addChild(parent, elementType, classList) {
    const created = document.createElement(elementType);
    parent.appendChild(created);
    if (classList) {
        addClass(created, classList);
    }
    return created;
}
function addClass(element, classList) {
    classList.forEach((currentClass) => {
        element.classList.add(currentClass);
    });
}
function useDependencies() {
    linkDependencies.forEach((dependency) => {
        const link = document.createElement("link");
        link.rel = dependency.rel;
        link.href = dependency.href;
        link.integrity = dependency.integrity;
        link.crossOrigin = dependency.crossorigin;
        document.head.appendChild(link);
    });
}
function useDefaultStyleSheet() {
    const style = document.createElement("style");
    document.head.appendChild(style);
    cssStyles.forEach((cssStyle) => {
        style.sheet.insertRule(cssStyle);
    });
}
function useDefaultStructure(wrapper) {
    //hard coded for easier job
    const imageWrapper = addChild(wrapper, "div", ["captcha-image"]);
    const image = addChild(imageWrapper, "img");
    // TODO: replace with non-hardcoded value.
    image.src =
        "https://cdn.discordapp.com/attachments/790469331402096660/790469909834235924/unknown.png";
    const reload = (addChild(imageWrapper, "div", ["captcha-reload"]));
    addChild(reload, "i", ["fa", "fa-redo", "hidden"]);
    const contentWrapper = addChild(wrapper, "div", ["captcha-content"]);
    const contentHeader = addChild(contentWrapper, "div", ["captcha-header"]);
    const contentBody = addChild(contentWrapper, "div", ["captcha-body"]);
    const contentLogo = (addChild(contentHeader, "img", ["captcha-logo"]));
    contentLogo.src = "./static/logo.png";
    const input = (addChild(contentBody, "input", ["captcha-input"]));
    input.placeholder = placeHolder;
    input.type = inputType;
    const statusWrapper = addChild(contentBody, "div", ["captcha-status"]);
    const status = addChild(statusWrapper, "i", [
        "fa",
        "fa-circle-o-notch",
        "fa-spin",
    ]);
    return {
        image,
        reload,
        input,
        status,
    };
}
function render() {
    const wrapper = document.getElementById(designatedId);
    if (!wrapper) {
        throw new Error("Please create a <div> tag with the id of 'captcha-wrapper'");
    }
    useDependencies();
    useDefaultStyleSheet();
    useDefaultStructure(wrapper);
}

render();
