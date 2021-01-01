export const cssStyles: string[] = [
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
