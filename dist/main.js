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
		border: 1px solid grey;
		height: 75%;
		width: 89%;
		float: left;
	}
`,
    `
	.captcha-status {
		float: right;
		height: 80%;
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
    display: none !important;
  }
`,
    `
  .blur {   
		filter: blur(3px);
  }  
`,
    `
	.captcha-form {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
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
function addChild(parent, elementType, classList) {
    const created = document.createElement(elementType);
    parent.appendChild(created);
    if (classList) {
        addClass(created, classList);
    }
    return created;
}
function addClass(element, classList) {
    element.classList.add(...classList);
}
function removeClass(element, classList) {
    element.classList.remove(...classList);
}
function removeAllClass(element) {
    const currentClasses = element.classList;
    element.classList.remove(...currentClasses);
}

const designatedId = "captcha-wrapper";
function useStyleDependencies() {
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
    const imageWrapper = addChild(wrapper, "div", ["captcha-image"]);
    const image = addChild(imageWrapper, "img");
    image.alt = "Something went wrong :(";
    const reload = (addChild(imageWrapper, "div", ["captcha-reload", "hidden"]));
    addChild(reload, "i", ["fa", "fa-redo"]);
    const contentWrapper = addChild(wrapper, "div", ["captcha-content"]);
    const contentHeader = addChild(contentWrapper, "div", ["captcha-header"]);
    const contentBody = addChild(contentWrapper, "div", ["captcha-body"]);
    const contentLogo = (addChild(contentHeader, "img", ["captcha-logo"]));
    contentLogo.src = "https://numcaptcha.s3.amazonaws.com/static/logo.png";
    const form = addChild(contentBody, "form", ["captcha-form"]);
    const input = addChild(form, "input", ["captcha-input"]);
    input.placeholder = placeHolder;
    input.type = inputType;
    const statusWrapper = addChild(contentBody, "div", ["captcha-status"]);
    const status = addChild(statusWrapper, "i", ["fa"]);
    return {
        image,
        reload,
        input,
        form,
        status,
    };
}
function useInitialRender() {
    const wrapper = document.getElementById(designatedId);
    if (!wrapper) {
        throw new Error("Please create a <div> tag with the id of 'captcha-wrapper'");
    }
    if (wrapper.children.length > 0) {
        throw new Error("Please remove contents within <div> tag");
    }
    useStyleDependencies();
    useDefaultStyleSheet();
    return useDefaultStructure(wrapper);
}
function hide(element) {
    addClass(element, ["hidden"]);
}
function show(element) {
    if (element.classList.contains("hidden")) {
        removeClass(element, ["hidden"]);
    }
}
function blur(element) {
    addClass(element, ["blur"]);
}
function unblur(element) {
    if (element.classList.contains("blur")) {
        removeClass(element, ["blur"]);
    }
}
function disable(element) {
    element.setAttribute("disabled", "");
}
function enable(element) {
    element.removeAttribute("disabled");
}
function clearInput(element) {
    element.value = "";
}
function updateImage(element, image) {
    element.src = image;
}
function updateStatus(element, status) {
    removeAllClass(element);
    switch (status) {
        case "success":
            addClass(element, ["fa", "fa-check"]);
            break;
        case "failed":
            addClass(element, ["fa", "fa-times"]);
            break;
        default:
            addClass(element, ["fa", "fa-circle-o-notch", "fa-spin"]);
    }
}

const apiEndpoint = "http://localhost:3000";
async function getCaptcha() {
    const response = await fetch("http://localhost:3000");
    if (!response.ok) {
        throw new Error("something went wrong..");
    }
    const { id, image } = await response.json();
    return {
        id,
        image: `data:image/png;base64,${image}`,
    };
}
async function submitCaptcha(id, check) {
    const url = new URL(`${apiEndpoint}/images`);
    const params = {
        id,
        check,
    };
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    const response = await fetch(url.toString(), {
        method: "POST",
    });
    if (!response.ok) {
        throw new Error(response.status.toString());
    }
    return await response.json();
}

const forcedReloadTime = 15000;
const errorThreshold = 3;
async function reloadCaptcha(captcha) {
    captcha = restartIntervalInstance(captcha);
    blur(captcha.image);
    updateStatus(captcha.status, "pending");
    try {
        const { image, id } = await getCaptcha();
        captcha.id = id;
        updateImage(captcha.image, image);
    }
    catch (err) {
        unblur(captcha.image);
    }
    unblur(captcha.image);
    clearInput(captcha.input);
    enable(captcha.input);
    hide(captcha.reload);
    captcha.displayTimeoutInstance = setTimeout(() => {
        show(captcha.reload);
    }, 5000);
    return captcha;
}
function restartIntervalInstance(captcha) {
    if (captcha.intervalInstance) {
        clearInterval(captcha.intervalInstance);
    }
    captcha.intervalInstance = setInterval(async () => {
        captcha = await reloadCaptcha(captcha);
    }, forcedReloadTime);
    return captcha;
}
function endCaptcha(captcha, status) {
    if (captcha.intervalInstance) {
        clearInterval(captcha.intervalInstance);
    }
    updateStatus(captcha.status, status);
    hide(captcha.reload.children[0]);
}
function useNumCaptcha() {
    return new Promise(async (resolve, reject) => {
        let instance = useInitialRender();
        let errorCount = 0;
        instance = await reloadCaptcha(instance);
        instance.form.addEventListener("submit", (e) => {
            const check = instance.input.value;
            if (instance.id && !!check) {
                disable(instance.input);
                clearTimeout(instance.displayTimeoutInstance);
                submitCaptcha(instance.id, check).then((response) => {
                    endCaptcha(instance, "success");
                    resolve(true);
                    return;
                }, (error) => {
                    errorCount++;
                    if (errorCount >= errorThreshold) {
                        endCaptcha(instance, "failed");
                        reject(false);
                        return;
                    }
                    updateStatus(instance.status, "failed");
                    show(instance.reload);
                });
            }
            e.preventDefault();
        });
        instance.reload.addEventListener("click", async () => {
            instance = await reloadCaptcha(instance);
        });
    });
}
window.useNumCaptcha = useNumCaptcha;
