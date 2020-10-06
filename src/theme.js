import { createMuiTheme } from "@material-ui/core/styles";

import purple from "@material-ui/core/colors/purple"
import green from "@material-ui/core/colors/green"

//https://medium.com/@kitson.broadhurst/quickly-set-up-a-theme-in-material-ui-and-access-it-in-your-components-ba0565304887
// https://htmlcolorcodes.com/resources/best-color-palette-generators/
// https://color.adobe.com/create/color-wheel
//#0043A8 #9CC3FF #0062F5 #A8740C #F5C86E

export default createMuiTheme({
	palette: {
    	primary: {main: "#9CC3FF"},
    	secondary: {main: "#A8730C"},
  	},
	overrides: {
		MuiButton: {
	    	root: {
		        fontWeight: "bold",
		        // backgroundColor: "red",
		        margin: "10px",
		        // "&:hover": {
		        // 	backgroundColor: "green"
		        // }
	    	}
		}
	}
});